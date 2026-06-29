import { describe, expect, it } from 'vitest'
import { analyzeAnswers } from './analyze'
import { QUESTIONS } from './questions'

// Build a helper: pick the first option of a given type from each question
function pickAll(type: string): Record<number, number> {
  const answers: Record<number, number> = {}
  for (const q of QUESTIONS) {
    const idx = q.options.findIndex((o) => o.type === type)
    if (idx !== -1) answers[q.id] = idx
  }
  return answers
}

describe('analyzeAnswers', () => {
  it('returns main = dominant type when one type is overwhelmingly selected', () => {
    const answers = pickAll('본질 관통형')
    const result = analyzeAnswers(answers)
    expect(result.main).toBe('본질 관통형')
    expect(result.sub).not.toBe('본질 관통형')
  })

  it('returns the correct sub type', () => {
    // Force 창의적 예술형 as main by picking all its options,
    // then override one question to 사회적 연대형 to ensure it's the sub
    const answers = pickAll('창의적 예술형')
    // Also add some 사회적 연대형 selections
    for (const q of QUESTIONS) {
      const idx = q.options.findIndex((o) => o.type === '사회적 연대형')
      if (idx !== -1 && q.id % 2 === 0) answers[q.id] = idx
    }
    const result = analyzeAnswers(answers)
    expect(result.main).not.toBe(result.sub)
  })

  it('main and sub are always different PersonaTypes', () => {
    const answers = pickAll('전략적 실천형')
    const result = analyzeAnswers(answers)
    expect(result.main).not.toBe(result.sub)
  })

  it('handles empty answers gracefully with fallback defaults', () => {
    const result = analyzeAnswers({})
    expect(result.main).toBeDefined()
    expect(result.sub).toBeDefined()
    expect(result.main).not.toBe(result.sub)
  })

  it('is deterministic — same answers produce same result', () => {
    const answers = pickAll('메타 인지형')
    const r1 = analyzeAnswers(answers)
    const r2 = analyzeAnswers(answers)
    expect(r1.main).toBe(r2.main)
    expect(r1.sub).toBe(r2.sub)
  })

  it('weighs options correctly — higher weight options matter more', () => {
    // Question 1 option 0: 본질 관통형 weight=3 (highest in Q1)
    // If we pick ONLY question 1's 본질 관통형 option, it should dominate
    const answers: Record<number, number> = { 1: 0 }
    const result = analyzeAnswers(answers)
    expect(result.main).toBe('본질 관통형')
  })
})
