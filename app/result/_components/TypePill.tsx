import { getTypeStyle } from '@/lib/personas/styles'

type Props = {
  label: string
  className?: string
}

export default function TypePill({ label, className }: Props) {
  const { bg, text } = getTypeStyle(label)
  return (
    <span
      className={`text-label-sm inline-block rounded-full px-3.5 py-1.5${className ? ` ${className}` : ''}`}
      style={{ backgroundColor: bg, color: text, border: `1px solid ${text}` }}
    >
      {label}
    </span>
  )
}
