<template>
  <div>
    <div class="text-center py-5 px-5">
      <q-input
        v-model="searchQuery"
        label="Search Work Order"
        outlined
        dense
        @input="performSearch"
      />
    </div>

    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">Work Order</th>
          <th class="py-2 px-4 border-b">Type</th>
          <th class="py-2 px-4 border-b">Report</th>
          <th class="py-2 px-4 border-b">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in filteredTableData" :key="index">
          <td class="py-2 px-4 border-b">{{ row.workorder }}</td>
          <td class="py-2 px-4 border-b">{{ row.type }}</td>
          <td class="py-2 px-4 border-b">{{ row.report }}</td>
          <td class="py-2 px-4 border-b">
            <q-icon
              @click="editRow(index)"
              name="edit"
              class="cursor-pointer text-primary text-lg px-[2px]"
            />
            <q-icon
              @click="deleteRow(index)"
              name="delete"
              class="cursor-pointer text-negative text-lg px-[2px]"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="text-center py-5 px-5">
      <q-btn @click="addRow" outline rounded color="primary" label="Add work order" />
    </div>

    <!-- Edit dialog -->
    <q-dialog v-model="isEditMode">
      <q-card class="w-[500px]">
        <q-card-section>
          <form @submit.prevent="saveEdit">
            <label
              for="editWorkorder"
              class="block text-sm font-medium text-gray-700"
              >Work Order:</label
            >
            <q-input
              v-model="editedRowData.workorder"
              id="editWorkorder"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label
              for="editType"
              class="block text-sm font-medium text-gray-700"
              >Type:</label
            >
            <q-input
              v-model="editedRowData.type"
              id="editType"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label
              for="editReport"
              class="block text-sm font-medium text-gray-700"
              >Report:</label
            >
            <q-input
              v-model="editedRowData.report"
              id="editReport"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <div class="mt-4 flex justify-end">
              <q-btn type="submit" color="primary" label="Save" />
              <q-btn @click="cancelEdit" flat color="primary" label="Cancel" />
            </div>
          </form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <!-- Add dialog -->
    <q-dialog v-model="isAddMode">
      <q-card class="w-[500px]">
        <q-card-section>
          <form @submit.prevent="saveAdd">
            <label
              for="addWorkorder"
              class="block text-sm font-medium text-gray-700"
              >Work Order:</label
            >
            <q-input
              v-model="newRowData.workorder"
              id="addWorkorder"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label for="addType" class="block text-sm font-medium text-gray-700"
              >Type:</label
            >
            <q-input
              v-model="newRowData.type"
              id="addType"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label
              for="addReport"
              class="block text-sm font-medium text-gray-700"
              >Report:</label
            >
            <q-input
              v-model="newRowData.report"
              id="addReport"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <div class="mt-4 flex justify-end">
              <q-btn type="submit" color="primary" label="Save" />
              <q-btn @click="cancelAdd" flat color="primary" label="Cancel" />
            </div>
          </form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          workorder: "123",
          type: "Maintenance",
          report: "Pending",
          action: "View",
        },
        {
          workorder: "456",
          type: "Repair",
          report: "Completed",
          action: "Edit",
        },
        // Add more rows as needed
      ],
      isEditMode: false,
      isAddMode: false,
      editedRowIndex: null,
      editedRowData: {},
      newRowData: {},
      searchQuery: "",
    };
  },
  computed: {
    filteredTableData() {
      return this.tableData.filter(row =>
        row.workorder.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    editRow(index) {
      this.isEditMode = true;
      this.editedRowIndex = index;
      this.editedRowData = { ...this.tableData[index] };
    },
    deleteRow(index) {
      this.tableData.splice(index, 1);
    },
    saveEdit() {
      this.tableData[this.editedRowIndex] = this.editedRowData;
      this.isEditMode = false;
      this.editedRowIndex = null;
      this.editedRowData = {};
    },
    cancelEdit() {
      this.isEditMode = false;
      this.editedRowIndex = null;
      this.editedRowData = {};
    },
    addRow() {
      this.isAddMode = true;
      this.newRowData = { workorder: "", type: "", report: "" };
    },
    saveAdd() {
      this.tableData.push({ ...this.newRowData });
      this.isAddMode = false;
      this.newRowData = {};
    },
    cancelAdd() {
      this.isAddMode = false;
      this.newRowData = {};
    },
    performSearch() {
      // Triggered when the search input changes, you can add more logic if needed
    },
  },
};
</script>
