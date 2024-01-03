<template>
  <div>
    <div class="px-5 pt-10 flex">
      <q-icon size="25px" color="primary" name="home" />
      <div class="text-bold text-lg text-gray-400">All User</div>
    </div>
    <!--serching-->
    <div class="text-center py-5 px-5">
      <q-input
        v-model="searchQuery"
        label="Search Employee ID"
        outlined
        dense
        @input="performSearch"
      />
    </div>
    <!--serching-->

    <!-- Table part -->
    <div class="overflow-x-auto mx-5">
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th
              v-for="column in columns"
              :key="column.key"
              class="py-2 px-4 border-b"
            >
              {{ column.label }}
            </th>
            <th class="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in filteredTableData" :key="rowIndex">
            <td
              v-for="(column, colIndex) in columns"
              :key="colIndex"
              class="py-2 px-4 border-b"
            >
              {{ row[column.key] }}
            </td>
            <td class="py-2 px-4 border-b ">
              <q-icon
                @click="editRow(rowIndex)"
                name="edit"
                class="cursor-pointer text-primary px-[2px] text-lg"
              />
              <q-icon
                @click="deleteRow(rowIndex)"
                name="delete"
                class="cursor-pointer text-negative px-[2px] text-lg"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Table part finish -->

    <!-- Add/Edit Dialog -->
    <q-dialog v-model="isDialogVisible">
      <q-card class="w-[500px]">
        <q-card-section>
          <form @submit.prevent="saveData">
            <label v-for="column in columns" :key="column.key">
              {{ column.label }}:
              <q-input
                v-model="rowData[column.key]"
                class="mt-1 p-2 block w-full border rounded-md"
              />
            </label>

            <div class="mt-4 flex justify-end">
              <q-btn type="submit" color="primary" label="Save" />
              <q-btn @click="cancelEdit" flat color="primary" label="Cancel" />
            </div>
          </form>
        </q-card-section>
      </q-card>
    </q-dialog>
    <!-- Add/Edit Dialog finish -->

    <!-- Add button -->
    <div class="text-center py-5 px-5">
      <q-btn @click="addRow" outline rounded color="primary" label="Add User" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { key: "name", label: "Name" },
        { key: "email", label: "Email" },
        { key: "employeeId", label: "Employee ID" },
      ],
      tableData: [
        { name: "John Doe", email: "john.doe@example.com", employeeId: "E001" },
        {
          name: "Jane Smith",
          email: "jane.smith@example.com",
          employeeId: "E002",
        },
        // Add more initial data if needed
      ],
      isDialogVisible: false,
      rowData: {}, // Data for the dialog form
      editedRowIndex: null, // Index of the row being edited
      searchQuery: "",
    };
  },
  computed: {
    filteredTableData() {
      if (this.searchQuery.trim() === "") {
        // If the search query is empty, show all data
        return this.tableData;
      } else {
        // Filter table data based on the entered Employee ID
        const query = this.searchQuery.toLowerCase();
        return this.tableData.filter(row =>
          row.employeeId.toLowerCase().includes(query)
        );
      }
    },
  },
  methods: {
    addRow() {
      // Open dialog for adding a new row
      this.rowData = {};
      this.isDialogVisible = true;
    },
    editRow(rowIndex) {
      // Open dialog for editing an existing row
      this.rowData = { ...this.tableData[rowIndex] };
      this.editedRowIndex = rowIndex;
      this.isDialogVisible = true;
    },
    deleteRow(rowIndex) {
      // Remove the row from the tableData array
      this.tableData.splice(rowIndex, 1);
    },
    cancelEdit() {
      // Close the dialog without saving
      this.isDialogVisible = false;
      this.rowData = {};
      this.editedRowIndex = null;
    },
    saveData() {
      // Save data to tableData and close the dialog
      if (this.editedRowIndex !== null) {
        // Editing an existing row
        this.tableData[this.editedRowIndex] = { ...this.rowData };
      } else {
        // Adding a new row
        this.tableData.push({ ...this.rowData });
      }
      this.isDialogVisible = false;
      this.rowData = {};
      this.editedRowIndex = null;
    },
  },
};
</script>
