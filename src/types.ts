/** Shared types. Kept in a plain module so both .astro and .ts files can import them. */

export type IconName =
  | 'whatsapp'
  | 'facebook'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'clock'
  | 'arrow-right'
  | 'chevron-down'
  | 'check'
  | 'slope-fail'
  | 'gabion'
  | 'drainage'
  | 'wall'
  | 'water'
  | 'survey'
  | 'building'
  | 'stone'
  | 'warning'
  | 'shield'
  | 'menu'
  | 'close';

export interface FaqItem {
  q: string;
  /** Paragraphs of the answer. */
  a: string[];
}
