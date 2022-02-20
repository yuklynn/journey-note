<template>
  <div>
    <v-container>
      <search-bar />
      <v-row>
        <v-col sm="12" md="6" lg="6" v-for="i of 200" :key="i">
          <note-list-item :class="{ 'mb-4': i != 200 }" :item="note" />
        </v-col>
      </v-row>
      <v-list> </v-list>
    </v-container>
    <home-recommends />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import SearchBar from '@/components/com/SearchBar.vue';
import HomeRecommends from '@/components/home/HomeRecommends.vue';
import NoteListItem from '@/components/note/NoteListItem.vue';
import { NoteType } from '@/types/NoteType';

export default defineComponent({
  components: { SearchBar, HomeRecommends, NoteListItem },
  setup() {
    // todo: 後で消す
    const note: NoteType = {
      id: '1',
      user: {
        id: '1',
        name: 'リン'.repeat(20),
        icon: '../../../assets/1633531004910.jpg',
      },
      date: new Date(2022, 1, 1),
      title: '山中湖周辺に行きました'.repeat(20).slice(0, 30),
      image: '../../../assets/20211030091145_IMG_2622 (1).jpg',
      comment: '今回は山中湖周辺を回ってみました。\nゆるキャン△はいいぞ。'
        .repeat(20)
        .slice(0, 300),
      routes: [
        { name: '道の駅どうし', lat: '35.5035268', lng: '138.9876278' },
        { name: '平野浜', lat: '35.4247046', lng: '138.898635' },
        { name: '道の駅富士吉田', lat: '35.4589946', lng: '35.4589946' },
        { name: '忍野八海', lat: '35.4604454', lng: '138.8306337' },
        { name: '紅富士の湯', lat: '35.4301492', lng: '138.8402095' },
      ],
      tags: [
        {
          id: '1',
          name: 'バイク',
        },
        {
          id: '2',
          name: '富士山',
        },
        {
          id: '3',
          name: '山中湖',
        },
        {
          id: '4',
          name: 'ゆるキャン△',
        },
        {
          id: '5',
          name: '紲星あかり',
        },
        {
          id: '6',
          name: '聖地巡礼',
        },
      ],
    };

    return { note };
  },
});
</script>
