/**
 * セクション関連の定数定義
 */

export const SECTION_IDS = {
  INFO: null,
  SERVICE: 'service',
  COMPANY: 'company',
  NEWS: 'news',
  CONTACT: 'contact',
} as const;

export const SECTION_CONFIG = [
  { index: 0, id: SECTION_IDS.INFO },
  { index: 1, id: SECTION_IDS.SERVICE },
  { index: 2, id: SECTION_IDS.COMPANY },
  { index: 3, id: SECTION_IDS.NEWS },
  { index: 4, id: SECTION_IDS.CONTACT },
] as const;

