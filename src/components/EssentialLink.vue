<!-- EssentialLink.vue -->
<template>
  <q-item clickable @click="navigateLink">
    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
    <q-item-section side top>
      <q-icon :name="icon" />
    </q-item-section>
  </q-item>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  props: {
    title: String,
    icon: String,
    link: String,
    to: String, // New prop for Vue Router
    children: Array,
  },
  setup() {
    const route = useRoute();

    const navigateLink = () => {
      if (this.to) {
        route.push(this.to);
      } else if (this.link) {
        window.location.href = this.link;
      }
    };

    return { navigateLink };
  },
};
</script>
