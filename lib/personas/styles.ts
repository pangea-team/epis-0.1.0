import type { PersonaType } from './data'

export type TypeStyle = { bg: string; text: string; rgb: string }

export const TYPE_STYLES: Record<PersonaType, TypeStyle> = {
  '본질 관통형': {
    bg: 'var(--color-type-essence-bg)',
    text: 'var(--color-type-essence-text)',
    rgb: '238, 237, 254',
  },
  '메타 인지형': {
    bg: 'var(--color-type-meta-bg)',
    text: 'var(--color-type-meta-text)',
    rgb: '230, 241, 251',
  },
  '역설 수용형': {
    bg: 'var(--color-type-paradox-bg)',
    text: 'var(--color-type-paradox-text)',
    rgb: '251, 234, 240',
  },
  '창의적 예술형': {
    bg: 'var(--color-type-creative-bg)',
    text: 'var(--color-type-creative-text)',
    rgb: '250, 238, 218',
  },
  '사회적 연대형': {
    bg: 'var(--color-type-social-bg)',
    text: 'var(--color-type-social-text)',
    rgb: '225, 245, 238',
  },
  '혁신적 개척형': {
    bg: 'var(--color-type-innovate-bg)',
    text: 'var(--color-type-innovate-text)',
    rgb: '250, 236, 231',
  },
  '전략적 실천형': {
    bg: 'var(--color-type-strategy-bg)',
    text: 'var(--color-type-strategy-text)',
    rgb: '241, 239, 232',
  },
}

export const DEFAULT_TYPE_STYLE: TypeStyle = {
  bg: 'var(--color-type-default-bg)',
  text: 'var(--color-type-default-text)',
  rgb: '241, 239, 232',
}

export function getTypeStyle(type: string): TypeStyle {
  return TYPE_STYLES[type as PersonaType] ?? DEFAULT_TYPE_STYLE
}
