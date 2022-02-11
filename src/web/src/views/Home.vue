<template>
  <v-container>
    <search-bar />
    <div>いちらん</div>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import SearchBar from '@/components/com/SearchBar.vue';

export default defineComponent({
  components: { SearchBar },
});
</script>
