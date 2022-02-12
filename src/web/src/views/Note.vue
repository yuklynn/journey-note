<template>
  <div>
    <v-toolbar flat>
      <v-toolbar-title class="font-weight-bold">
        {{ item.title }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon>{{ mdiShareVariant }}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>{{ mdiDotsVertical }}</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container>
      <v-layout>
        <div>だれ</div>
        <v-spacer />
        <div>いつ</div>
      </v-layout>
      <div>せつめい</div>
      <div>けいろ</div>
    </v-container>
    <note-comment />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import { mdiDotsVertical, mdiShareVariant } from '@mdi/js';
import NoteComment from '@/components/note/NoteComment.vue';

export default defineComponent({
  components: { NoteComment },
  props: ['data'],
  setup(props) {
    // アイコン
    const icons = { mdiDotsVertical, mdiShareVariant };

    // ノートの情報を取得
    const item = JSON.parse(props.data);

    return { ...icons, item };
  },
});
</script>
