<template>
  <v-app-bar app clipped-left flat color="primary">
    <v-toolbar-title class="white--text font-weight-bold">
      {{ title }}
    </v-toolbar-title>
    <v-spacer />
    <v-btn icon>
      <v-avatar class="account-icon">
        <!-- todo: 仮アイコン -->
        <v-img src="../../../assets/1633531004910.jpg" />
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mdiAccount } from '@mdi/js';

export default defineComponent({
  setup() {
    const icons = { mdiAccount };
    const title = 'タビノート(仮)';

    return { ...icons, title };
  },
});
</script>

<style scoped>
/** 縁をつけて画像を見やすくする */
.account-icon {
  border: solid white thin;
}
</style>
