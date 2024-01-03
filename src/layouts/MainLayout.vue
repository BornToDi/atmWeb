<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> ATM Tester </q-toolbar-title>

        <div class="mr-20">
  <q-btn to="dashboard" flat round color="white" icon="home" />
  <q-btn @click="logout" flat round color="white" icon="exit_to_app" />
</div>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          <q-img
            class="absolute-top"
            src="https://cdn.quasar.dev/img/material.png"
            style="height: 150px"
          >
            <div class="absolute-bottom bg-transparent">
              <q-avatar size="56px" class="q-mb-sm">
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
              <div class="text-weight-bold">User Admin</div>
              <div>admin</div>
            </div>
          </q-img>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import EssentialLink from "components/EssentialLink.vue";

const linksList = [
  {},
  {},
  {},
  {
    title: "Dashboard",

    icon: "dashboard",
    link: "http://localhost:9001/#/dashboard",
  },
  {
    title: "Hardware Components",

    icon: "card_giftcard",
    link: "http://localhost:9001/#/hardware",
  },
  {
    title: "Work Orders",

    icon: "work",
    link: "http://localhost:9001/#/workorder",
  },
  {
    title: "Shipments",

    icon: "plane",
    link: "http://localhost:9001/#/shipment",
  },
  {
    title: "Reports",
    icon: "note",
    link: "http://localhost:9001/#/report",
    children: [
      {
        title: "Report 1",
        icon: "subreport_icon",
        link: "https://twitter.quasar.dev/report1",
      },
      {
        title: "Report 2",
        icon: "subreport_icon",
        link: "https://twitter.quasar.dev/report2",
      },
      // Add more reports as needed
    ]
  },
  {
    title: "ATMs",

    icon: "atm",
    link: "http://localhost:9001/#/atm",
  },
  {
    title: "Users",

    icon: "people",
    link: "http://localhost:9001/#/user",
  },
  {
    title: "Activity Log",

    icon: "note",
    link: "http://localhost:9001/#/activity",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
