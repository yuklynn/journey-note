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
        <v-layout align-center>
          <div class="d-flex align-center flex-0 user">
            <v-avatar size="32">
              <v-img src="../../assets/1633531004910.jpg" />
            </v-avatar>
            <div class="ml-2 text-truncate">{{ item.user.name }}</div>
          </div>
          <div class="flex-shrink-0 ml-4">{{ getDate(item.date) }}</div>
        </v-layout>
      </v-layout>
      <v-breadcrumbs :items="item.routes">
        <template #divider>
          <v-icon>{{ mdiChevronRight }}</v-icon>
        </template>
        <template #item="{ item }">
          <span>{{ item.name }}</span>
        </template>
      </v-breadcrumbs>
      <div class="mt-4 mb-16">{{ item.comment }}</div>
      <v-layout justify-center>
        <!-- todo: APIつかう -->
        <iframe
          src="http://maps.google.co.jp/maps?q=35.5035268,138.9876278&output=embed&t=m&z=16&hl=ja"
          frameborder="0"
          scrolling="no"
          width="600"
          height="450"
        ></iframe>
      </v-layout>
    </v-container>
    <note-comment />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mdiChevronRight, mdiDotsVertical, mdiShareVariant } from '@mdi/js';
import NoteComment from '@/components/note/NoteComment.vue';
import { getDateStr } from '@/utils/functions';

export default defineComponent({
  components: { NoteComment },
  props: ['data'],
  setup(props) {
    // アイコン
    const icons = { mdiChevronRight, mdiDotsVertical, mdiShareVariant };

    // ノートの情報を取得
    const item = JSON.parse(props.data);

    // 投稿日の文字列取得
    const getDate = (str: string) => {
      const date = new Date(str);
      return getDateStr(date);
    };

    return { ...icons, item, getDate };
  },
});
</script>

<style scoped>
.user {
  min-width: 0;
}
</style>
