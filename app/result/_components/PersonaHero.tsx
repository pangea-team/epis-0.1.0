type TypeStyle = { bg: string; text: string }

const TYPE_STYLES: Record<string, TypeStyle> = {
  '역설 수용형': {
    bg: 'var(--color-type-paradox-bg)',
    text: 'var(--color-type-paradox-text)',
  },
  '창의적 예술형': {
    bg: 'var(--color-type-creative-bg)',
    text: 'var(--color-type-creative-text)',
  },
  '논리 탐구형': {
    bg: 'var(--color-type-logical-bg)',
    text: 'var(--color-type-logical-text)',
  },
  '공감 연결형': {
    bg: 'var(--color-type-empathic-bg)',
    text: 'var(--color-type-empathic-text)',
  },
}

const DEFAULT_STYLE: TypeStyle = {
  bg: 'var(--color-type-default-bg)',
  text: 'var(--color-type-default-text)',
}

function TypePill({ label }: { label: string }) {
  const { bg, text } = TYPE_STYLES[label] ?? DEFAULT_STYLE
  return (
    <span
      className="text-label-sm inline-block rounded-full px-3.5 py-1.5"
      style={{ backgroundColor: bg, color: text }}
    >
      {label}
    </span>
  )
}

type Props = {
  title: string
  main: string
  sub: string
}

export default function PersonaHero({ title, main, sub }: Props) {
  return (
    <section className="flex flex-col px-6 pt-24 pb-16">
      <p className="text-caption mb-8 tracking-widest text-muted-foreground">EPIS</p>
      <h1 className="text-display mb-6 font-serif text-pretty text-foreground">{title}</h1>
      <div className="flex flex-wrap gap-2">
        <TypePill label={main} />
        <TypePill label={sub} />
      </div>
    </section>
  )
}
