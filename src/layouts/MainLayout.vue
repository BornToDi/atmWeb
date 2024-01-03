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

        <div class="pt-32">
          <q-item clickable @click="$router.push('/dashboard')">
            <q-item-section> Dashboard </q-item-section>
            <q-item-section avatar>
              <q-icon name="dashboard" />
            </q-item-section>
          </q-item>

          <q-item clickable @click="$router.push('/workorder')">
            <q-item-section> Workorder </q-item-section>
            <q-item-section avatar>
              <!-- Add the icon for workorder here -->
              <q-icon name="note" />
            </q-item-section>
          </q-item>

          <q-item clickable @click="$router.push('/shipments')">
            <q-item-section> Shipments </q-item-section>
            <q-item-section avatar>
              <!-- Add the icon for workorder here -->
              <q-icon name="plane" />
            </q-item-section>
          </q-item>
          <q-item clickable @click="$router.push('/reports')">
            <q-item-section> Reports </q-item-section>
            <q-item-section avatar>
              <!-- Add the icon for workorder here -->
              <q-icon name="note" />
            </q-item-section>
          </q-item>
          <q-item clickable @click="$router.push('/atm')">
            <q-item-section> ATMs </q-item-section>
            <q-item-section avatar>
              <!-- Add the icon for workorder here -->
              <q-icon name="atm" />
            </q-item-section>
          </q-item>
          <q-item clickable @click="$router.push('/user')">
            <q-item-section> Users </q-item-section>
            <q-item-section avatar>
              <!-- Add the icon for workorder here -->
              <q-icon name="people" />
            </q-item-section>
          </q-item>
          <q-item clickable @click="$router.push('/activity')">
            <q-item-section> Activity Log </q-item-section>
            <q-item-section avatar>
              <!-- Add the icon for workorder here -->
              <q-icon name="note" />
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "MainLayout",

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
