<template>
  <v-card class="note-list-item" @click="onClick">
    <!-- 画像 -->
    <v-img
      src="../../../assets/20211030091145_IMG_2622 (1).jpg"
      height="160px"
    />
    <!-- タイトル&ボタン -->
    <v-card-title class="flex-nowrap">
      <div class="text-truncate font-weight-bold">
        {{ item.title }}
      </div>
      <v-spacer />
      <v-btn icon>
        <v-icon>{{ mdiShareVariant }}</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>{{ mdiDotsVertical }}</v-icon>
      </v-btn>
    </v-card-title>
    <!-- だれが、いつ投稿 -->
    <v-card-subtitle>
      <v-layout align-center>
        <div class="d-flex align-center flex-0 user">
          <v-avatar class="account-icon" size="32">
            <v-img src="../../../assets/1633531004910.jpg" />
          </v-avatar>
          <div class="ml-2 text-truncate">{{ item.user.name }}</div>
        </div>
        <div class="flex-shrink-0 ml-4">{{ getDate(item.date) }}</div>
      </v-layout>
    </v-card-subtitle>
    <!-- コメント -->
    <v-card-text class="description pb-0">
      {{ item.comment }}
    </v-card-text>
    <!-- 経路 -->
    <v-card-text class="text-caption font-weight-medium py-3">
      <v-breadcrumbs :items="item.routes" class="pa-0 routes">
        <template #divider> > </template>
        <template #item="{ item }">
          <div class="text-truncate route-item">{{ item.name }}</div>
        </template>
      </v-breadcrumbs>
    </v-card-text>
    <!-- タグ -->
    <v-card-text class="pt-0">
      <div
        v-for="(tag, i) in item.tags"
        :key="tag.id"
        class="d-inline-block"
        :class="{ 'mr-2': i != item.tags.length - 1 }"
      >
        <a>{{ `#${tag.name}` }}</a>
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mdiChevronRight, mdiDotsVertical, mdiShareVariant } from '@mdi/js';
import useRouter from '@/composables/useRouter';
import { NoteType } from '@/types/NoteType';

export default defineComponent({
  props: {
    item: { type: Object as () => NoteType, required: true },
  },
  setup(props) {
    // アイコン
    const icons = { mdiChevronRight, mdiDotsVertical, mdiShareVariant };

    // 投稿日の文字列取得
    const getDate = (date: Date) => {
      return date.toISOString().split('T')[0].replaceAll('-', '/');
    };

    // カードクリック時処理
    const { router } = useRouter();
    const onClick = () => {
      router.push({
        name: 'Note', // 名前も指定しないとparamsが渡らない
        path: `/note/${props.item.id}`,
        params: { data: JSON.stringify(props.item) },
      });
    };

    return { ...icons, getDate, onClick };
  },
});
</script>

<style scoped>
.note-list-item {
  user-select: none;
}
.user {
  min-width: 0;
}
.description {
  height: 67px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.routes::v-deep .v-breadcrumbs__divider {
  padding: 0 4px;
}
.route-item {
  max-width: 100px;
}
</style>
