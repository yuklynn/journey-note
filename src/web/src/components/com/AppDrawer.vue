<template>
  <v-navigation-drawer app clipped>
    <v-list nav>
      <v-list-item v-for="item in menus" :key="item.label" link :to="item.link">
        <v-list-item-icon class="mr-4">
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { mdiAccountCircle, mdiBell, mdiHome, mdiTune } from '@mdi/js';

export default defineComponent({
  setup() {
    const menus = [
      { icon: mdiHome, label: 'ホーム', link: '/home' },
      { icon: mdiBell, label: 'お知らせ', link: '/notification' },
      { icon: mdiAccountCircle, label: 'プロフィール', link: '/profile' },
      { icon: mdiTune, label: '設定', link: '/setting' },
    ];

    return { menus };
  },
});
</script>
