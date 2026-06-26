import { ArrowLeft } from 'lucide-react'
import type { SurveyOption } from '@/lib/survey/types'

type Props = {
  question: string
  options: SurveyOption[]
  selected: number | undefined
  counter: string
  canGoBack: boolean
  leaving: boolean
  onSelect: (idx: number) => void
  onBack: () => void
}

export default function SurveyQuestion({
  question,
  options,
  selected,
  counter,
  canGoBack,
  leaving,
  onSelect,
  onBack,
}: Props) {
  return (
    <div className="flex flex-1 flex-col">
      {/* Back button */}
      <div className="shrink-0 px-6 pt-5.5">
        <button
          type="button"
          onClick={onBack}
          aria-label="이전 문항"
          className="text-body-sm inline-flex cursor-pointer items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          style={{ opacity: canGoBack ? 1 : 0, pointerEvents: canGoBack ? 'auto' : 'none' }}
        >
          <ArrowLeft size={15} strokeWidth={2} />
          <span>이전</span>
        </button>
      </div>

      {/* Animated content */}
      <div
        className="flex flex-1 flex-col transition duration-[260ms]"
        style={{
          opacity: leaving ? 0 : 1,
          transform: leaving ? 'translateY(-8px)' : 'translateY(0)',
        }}
      >
        {/* Progress */}
        <div className="px-6 pt-10">
          <p className="text-caption mb-2 font-medium text-(--color-text-tertiary)">
            사유 유형 진단 테스트
          </p>
          <p className="text-body-sm text-muted-foreground">{counter}</p>
        </div>

        {/* Question */}
        <h1 className="text-heading-lg px-6 pt-10 pb-7 font-serif text-pretty text-foreground">
          {question}
        </h1>

        {/* Options */}
        <div className="border-t border-border">
          {options.map((opt, idx) => {
            const isSelected = selected === idx
            return (
              <button
                key={opt.text}
                type="button"
                onClick={() => onSelect(idx)}
                className="flex w-full cursor-pointer items-center gap-5 border-b border-(--color-border-subtle) px-6 py-5 text-left transition-colors hover:bg-muted active:scale-[0.997]"
                style={{ background: isSelected ? 'var(--color-surface-muted)' : 'transparent' }}
              >
                <span className="text-body-md flex-1 font-serif text-pretty text-foreground">
                  {opt.text}
                </span>
                <span
                  className="flex size-5 shrink-0 items-center justify-center rounded-full border-[1.5px] transition-colors"
                  style={{ borderColor: isSelected ? 'var(--foreground)' : 'var(--border)' }}
                >
                  <span
                    className="size-2.5 rounded-full bg-foreground transition-opacity"
                    style={{ opacity: isSelected ? 1 : 0 }}
                  />
                </span>
              </button>
            )
          })}
        </div>

        <div className="h-8 shrink-0" />
      </div>
    </div>
  )
}
