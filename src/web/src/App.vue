<template>
  <v-app>
    <app-bar />
    <app-drawer />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import AppBar from '@/components/com/AppBar.vue';
import AppDrawer from './components/com/AppDrawer.vue';

export default defineComponent({
  components: { AppBar, AppDrawer },
});
</script>
