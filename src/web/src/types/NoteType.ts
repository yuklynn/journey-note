import { TagType, UserType } from './com';

/**
 * ノートの型
 *
 * @property id - ID
 * @property user - 投稿ユーザー
 * @property date - 投稿日
 * @property title - タイトル
 * @property image - 画像
 * @property comment - 投稿コメント
 * @property routes - 経路
 * @property tags - タグ
 */
export type NoteType = {
  id: string;
  user: UserType;
  date: Date;
  title: string;
  image?: string;
  comment?: string;
  routes: Array<LocationType>;
  tags: Array<TagType>;
};

/**
 * 経路1件の型
 * todo: GoogleMapの型
 * @property name - 場所の名前
 */
export type LocationType = {
  name: string;
};
