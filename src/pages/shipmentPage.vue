
<template>
  <div>
    <div class="text-center py-5 px-5">
      <q-input
        v-model="searchQuery"
        label="Search Tracking Number"
        outlined
        dense
        @input="performSearch"
      />
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Tracking Number</th>
            <th class="py-2 px-4 border-b">Ship Date</th>
            <th class="py-2 px-4 border-b">Delivery Date</th>
            <th class="py-2 px-4 border-b">Shipper Name</th>
            <th class="py-2 px-4 border-b">Recipient Name</th>
            <th class="py-2 px-4 border-b">Package Type</th>
            <th class="py-2 px-4 border-b">Workorder Number</th>
            <th class="py-2 px-4 border-b">Total Number of ATM</th>
            <th class="py-2 px-4 border-b">Report</th>
            <th class="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in filteredTableData" :key="index">
            <td class="py-2 px-4 border-b">{{ row.trackingNumber }}</td>
            <td class="py-2 px-4 border-b">{{ row.shipDate }}</td>
            <td class="py-2 px-4 border-b">{{ row.deliveryDate }}</td>
            <td class="py-2 px-4 border-b">{{ row.shipperName }}</td>
            <td class="py-2 px-4 border-b">{{ row.recipientName }}</td>
            <td class="py-2 px-4 border-b">{{ row.packageType }}</td>
            <td class="py-2 px-4 border-b">{{ row.workorderNumber }}</td>
            <td class="py-2 px-4 border-b">{{ row.totalATM }}</td>
            <td class="py-2 px-4 border-b">{{ row.report }}</td>
            <td class="py-2 px-4 border-b">
              <q-icon
                @click="editRow(index)"
                name="edit"
                class="cursor-pointer text-primary"
              />
              <q-icon
                @click="deleteRow(index)"
                name="delete"
                class="cursor-pointer text-negative"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="text-center py-5 px-5">
      <q-btn
        @click="addRow"
        outline
        rounded
        color="primary"
        label="Add Tracking"
      />
    </div>

    <!-- Add dialog -->
    <q-dialog v-model="isAddMode">
      <q-card class="w-[500px]">
        <q-card-section>
          <form @submit.prevent="saveAdd">
            <label
              for="addWorkorder"
              class="block text-sm font-medium text-gray-700"
              >Workorder Number:</label
            >
            <q-input
              v-model="newRowData.workorderNumber"
              id="addWorkorder"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label
              for="addTracking"
              class="block text-sm font-medium text-gray-700"
              >Tracking Number:</label
            >
            <q-input
              v-model="newRowData.trackingNumber"
              id="addTracking"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label
              for="addShipDate"
              class="block text-sm font-medium text-gray-700"
              >Shipment Date:</label
            >
            <q-input
              v-model="newRowData.shipDate"
              id="addShipDate"
              type="date"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label
              for="addDeliveryDate"
              class="block text-sm font-medium text-gray-700"
              >Delivery Date:</label
            >
            <q-input
              v-model="newRowData.deliveryDate"
              id="addDeliveryDate"
              type="date"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label
              for="addShipperName"
              class="block text-sm font-medium text-gray-700"
              >Shipper Name:</label
            >
            <q-input
              v-model="newRowData.shipperName"
              id="addShipperName"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label
              for="addRecipientName"
              class="block text-sm font-medium text-gray-700"
              >Recipient Name:</label
            >
            <q-input
              v-model="newRowData.recipientName"
              id="addRecipientName"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label
              for="addPackageType"
              class="block text-sm font-medium text-gray-700"
              >Package Type:</label
            >
            <q-input
              v-model="newRowData.packageType"
              id="addPackageType"
              class="mt-1 p-2 block w-full border rounded-md"
            />

            <label
              for="addTotalATM"
              class="block text-sm font-medium text-gray-700"
              >Total Number of ATM:</label
            >
            <q-input
              v-model="newRowData.totalATM"
              id="addTotalATM"
              type="number"
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
        // Existing data
      ],
      isEditMode: false,
      isAddMode: false,
      editedRowIndex: null,
      editedRowData: {},
      newRowData: {
        workorderNumber: "",
        trackingNumber: "",
        shipDate: "",
        deliveryDate: "",
        shipperName: "",
        recipientName: "",
        packageType: "",
        totalATM: "",
        report: "Pending",
      },
      searchQuery: "",
    };
  },
  computed: {
    filteredTableData() {
      return this.tableData.filter((row) =>
        row.trackingNumber
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase())
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
      this.newRowData = {
        workorderNumber: "",
        trackingNumber: "",
        shipDate: "",
        deliveryDate: "",
        shipperName: "",
        recipientName: "",
        packageType: "",
        totalATM: "",
        report: "Pending",
      };
    },
    saveAdd() {
      this.tableData.push({ ...this.newRowData });
      this.isAddMode = false;
      this.newRowData = {
        workorderNumber: "",
        trackingNumber: "",
        shipDate: "",
        deliveryDate: "",
        shipperName: "",
        recipientName: "",
        packageType: "",
        totalATM: "",
        report: "Pending",
      };
    },
    cancelAdd() {
      this.isAddMode = false;
      this.newRowData = {
        workorderNumber: "",
        trackingNumber: "",
        shipDate: "",
        deliveryDate: "",
        shipperName: "",
        recipientName: "",
        packageType: "",
        totalATM: "",
        report: "Pending",
      };
    },
    performSearch() {
      // Triggered when the search input changes, you can add more logic if needed
    },
  },
};
</script>
