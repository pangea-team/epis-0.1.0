'use client'

import { ArrowLeft, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { PersonaType } from '@/lib/personas/data'

type Props = {
  onBack: () => void
  main: PersonaType
  sub: PersonaType
}

export default function SurveyFinished({ onBack, main, sub }: Props) {
  const resultHref = `/result?main=${encodeURIComponent(main)}&sub=${encodeURIComponent(sub)}`

  return (
    <div className="flex flex-1 flex-col">
      {/* Back button */}
      <div className="shrink-0 px-6 pt-5.5">
        <button
          type="button"
          onClick={onBack}
          aria-label="이전 문항"
          className="text-body-sm inline-flex cursor-pointer items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={15} strokeWidth={2} />
          <span>이전</span>
        </button>
      </div>

      <div className="flex flex-1 flex-col justify-center px-6 pt-10 pb-20">
        <p className="text-caption mb-3.5 font-medium text-(--color-text-tertiary)">진단 완료</p>
        <h2 className="text-heading-lg mb-3.5 font-serif text-foreground">
          모든 문항에
          <br />
          답하셨습니다
        </h2>
        <p className="text-body-lg mb-9 max-w-65 font-serif text-pretty text-muted-foreground">
          이제 당신의 사유에 남은 흔적을 살펴볼 차례입니다.
        </p>
        <div className="border-t border-border pt-5">
          <Link
            href={resultHref}
            className="text-label-md flex w-full items-center justify-between bg-primary px-6 py-4.5 text-primary-foreground transition hover:bg-(--color-brand-hover) active:scale-[0.99]"
          >
            <span>결과 확인하기</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  )
}
