'use client'

import { useState } from 'react'
import { analyzeAnswers } from '@/lib/survey/analyze'
import { QUESTIONS } from '@/lib/survey/questions'
import SurveyFinished from './SurveyFinished'
import SurveyQuestion from './SurveyQuestion'

const TOTAL = QUESTIONS.length

export default function SurveyFlow() {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [leaving, setLeaving] = useState(false)

  const finished = current >= QUESTIONS.length

  function select(optionIdx: number) {
    if (leaving) return
    const q = QUESTIONS[current]
    setAnswers((prev) => ({ ...prev, [q.id]: optionIdx }))
    setLeaving(true)
    setTimeout(() => {
      setCurrent((prev) => prev + 1)
      setLeaving(false)
    }, 300)
  }

  function back() {
    if (current === 0) return
    setCurrent((prev) => prev - 1)
    setLeaving(false)
  }

  if (finished) {
    const { main, sub } = analyzeAnswers(answers)
    return <SurveyFinished onBack={back} main={main} sub={sub} />
  }

  const q = QUESTIONS[current]

  return (
    <SurveyQuestion
      question={q.question}
      options={q.options}
      selected={answers[q.id]}
      counter={`${current + 1} / ${TOTAL}`}
      canGoBack={current > 0}
      leaving={leaving}
      onSelect={select}
      onBack={back}
    />
  )
}
