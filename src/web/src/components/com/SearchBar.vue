<template>
  <v-text-field :prepend-inner-icon="mdiMagnify" dense filled rounded />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mdiMagnify } from '@mdi/js';

export default defineComponent({
  setup() {
    const icons = { mdiMagnify };

    return { ...icons };
  },
});
</script>
