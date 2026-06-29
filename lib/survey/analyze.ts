import { PERSONA_TYPES, type PersonaType } from '@/lib/personas/data'
import { QUESTIONS } from './questions'

export function analyzeAnswers(answers: Record<number, number>): {
  main: PersonaType
  sub: PersonaType
} {
  const scores: Record<string, number> = Object.fromEntries(PERSONA_TYPES.map((t) => [t, 0]))

  for (const q of QUESTIONS) {
    const selectedIdx = answers[q.id]
    if (selectedIdx === undefined) continue
    const option = q.options[selectedIdx]
    if (!option) continue
    scores[option.type] = (scores[option.type] ?? 0) + option.weight
  }

  const ranked = [...PERSONA_TYPES].sort((a, b) => {
    const diff = (scores[b] ?? 0) - (scores[a] ?? 0)
    if (diff !== 0) return diff
    // Tie-break: preserve PERSONA_TYPES order
    return PERSONA_TYPES.indexOf(a) - PERSONA_TYPES.indexOf(b)
  })

  return { main: ranked[0], sub: ranked[1] }
}
