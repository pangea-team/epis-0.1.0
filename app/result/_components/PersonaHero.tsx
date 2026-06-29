import type { PersonaType } from '@/lib/personas/data'
import TypePill from './TypePill'

type Props = {
  title: string
  main: PersonaType
  sub: PersonaType
}

export default function PersonaHero({ title, main, sub }: Props) {
  return (
    <section className="flex flex-col px-6 pt-24 pb-16">
      <p className="text-caption mb-8 tracking-widest text-muted-foreground">EPIS</p>
      <h1 className="text-display mb-6 font-serif text-pretty text-foreground">{title}</h1>
      <div className="flex flex-wrap items-center gap-2">
        <TypePill label={main} />
        <TypePill label={sub} className="opacity-65 text-[0.8em]" />
      </div>
    </section>
  )
}
