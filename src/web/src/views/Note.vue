<template>
  <v-container>
    <v-toolbar flat>
      <v-toolbar-title class="font-weight-bold">
        {{ item.title }}
      </v-toolbar-title>
    </v-toolbar>
  </v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  props: ['data'],
  setup(props) {
    // ルートを取得

    // ノートの情報を取得
    const item = JSON.parse(props.data);

    return { item };
  },
});
</script>
