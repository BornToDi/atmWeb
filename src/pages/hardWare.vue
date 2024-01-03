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
          <th class="py-2 px-4 border-b">PID</th>
          <th class="py-2 px-4 border-b">Component name</th>
          <th class="py-2 px-4 border-b">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in filteredTableData" :key="index">
          <td class="py-2 px-4 border-b">{{ row.workorder }}</td>
          <td class="py-2 px-4 border-b">{{ row.type }}</td>
          <td class="py-2 px-4 border-b">
            <q-icon
              @click="editRow(index)"
              name="edit"
              class="cursor-pointer text-primary px-[2px] text-lg"
            />
            <q-icon
              @click="deleteRow(index)"
              name="delete"
              class="cursor-pointer text-negative px-[2px] text-lg"
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
              for="editPid"
              class="block text-sm font-medium text-gray-700"
              >PID:</label
            >
            <q-input
              v-model="editedRowData.workorder"
              id="editPid"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label
              for="editComponent"
              class="block text-sm font-medium text-gray-700"
              >Component name:</label
            >
            <q-input
              v-model="editedRowData.type"
              id="editComponent"
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
              for="addPid"
              class="block text-sm font-medium text-gray-700"
              >PID:</label
            >
            <q-input
              v-model="newRowData.workorder"
              id="addPid"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label for="addComponent" class="block text-sm font-medium text-gray-700"
              >Component name:</label
            >
            <q-input
              v-model="newRowData.type"
              id="addComponent"
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
        },
        {
          workorder: "456",
          type: "Repair",
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
      this.tableData[this.editedRowIndex] = { ...this.editedRowData };
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
      this.newRowData = { workorder: "", type: "" };
    },
    saveAdd() {
      if (this.newRowData.workorder && this.newRowData.type) {
        this.tableData.push({ ...this.newRowData });
        this.isAddMode = false;
        this.newRowData = {};
      } else {
        // Display an error message or handle the case when required fields are not filled.
      }
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
