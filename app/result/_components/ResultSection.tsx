type Props = {
  label: string
  content: string
}

export default function ResultSection({ label, content }: Props) {
  return (
    <section className="border-t border-border px-6 py-16">
      <p className="text-heading-sm mb-4 text-foreground">{label}</p>
      <p className="text-body-lg font-serif text-pretty text-foreground/75">{content}</p>
    </section>
  )
}
