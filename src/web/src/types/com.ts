/**
 * ユーザーの型
 * @property id - ID
 * @property name - 名前
 * @property icon - アイコン画像
 */
export type UserType = {
  id: string;
  name: string;
  icon: string;
};

/**
 * タグの型
 * @property id - ID
 * @property name - タグ名
 */
export type TagType = {
  id: string;
  name: string;
};
