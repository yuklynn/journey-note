/**
 * 日付からYYYY/MM/DD文字列を取得する
 */
export function getDateStr(date: Date): string {
  return date.toISOString().split('T')[0].replaceAll('-', '/');
}
