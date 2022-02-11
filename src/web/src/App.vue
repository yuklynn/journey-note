<template>
  <v-app>
    <app-bar />
    <app-drawer />
    <app-side-sheet />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import AppBar from '@/components/com/AppBar.vue';
import AppDrawer from './components/com/AppDrawer.vue';
import AppSideSheet from './components/com/AppSideSheet.vue';

export default defineComponent({
  components: { AppBar, AppDrawer, AppSideSheet },
});
</script>
