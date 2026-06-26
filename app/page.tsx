import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ROUTES } from '@/lib/routes'

const TOPICS = [
  { num: 'I', label: '죽음' },
  { num: 'II', label: '사랑' },
  { num: 'III', label: '타인' },
  { num: 'IV', label: '삶의 의미' },
  { num: 'V', label: '성공' },
  { num: 'VI', label: '고통' },
  { num: 'VII', label: '진리' },
  { num: 'VIII', label: '규칙과 자유' },
  { num: 'IX', label: '공감' },
  { num: 'X', label: '부' },
  { num: 'XI', label: '창조' },
  { num: 'XII', label: '자기 이해' },
]

const STEPS = [
  {
    num: '01',
    title: '12개 질문에 답합니다',
    desc: '각 주제에 대해 더 끌리는 문장을 고릅니다. 정답은 없습니다.',
  },
  {
    num: '02',
    title: '사유 유형이 분석됩니다',
    desc: '선택 패턴을 바탕으로 당신만의 사유 유형이 분석됩니다.',
  },
  {
    num: '03',
    title: '결이 맞는 사람과 이어집니다',
    desc: '사유 리포트와 함께 결이 맞닿는 사람을 연결해드립니다.',
  },
]

function SurveyButton() {
  return (
    <Link
      href={ROUTES.SURVEY}
      className="text-label-md flex w-full items-center justify-between bg-primary px-6 py-4.5 text-primary-foreground transition hover:bg-(--color-brand-hover) active:scale-[0.99]"
    >
      <span>사유 진단 시작하기</span>
      <ArrowRight size={18} />
    </Link>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-220">
        {/* Hero */}
        <section className="flex flex-col px-6 pt-24 pb-16">
          <p className="text-caption mb-8 tracking-widest text-muted-foreground">EPIS</p>
          <h1 className="text-display mb-6.5 font-serif text-pretty text-foreground">
            사유의 결이 맞는
            <br />
            사람을 매칭해드립니다
          </h1>
          <p className="text-body-lg mb-7.5 font-serif text-pretty text-muted-foreground">
            당신이 고른 문장으로 사유의 결을 읽고,
            <br />그 결이 맞닿는 사람을 잇습니다.
          </p>
          <div className="border-t border-border pt-6.5">
            <p className="text-body-md mb-2.5 text-muted-foreground">
              약 15분의 진단으로 당신의 사유 유형을 분석해드립니다.
            </p>
          </div>
          <div className="mt-12">
            <SurveyButton />
          </div>
        </section>

        {/* What is Epis */}
        <section className="border-t border-border px-6 py-16">
          <p className="text-caption mb-6 tracking-widest text-muted-foreground">WHAT IS EPIS</p>
          <h2 className="text-heading-lg mb-6 font-serif text-foreground">
            Epis는 당신과 사유의 결이 닮은 사람을 찾아드립니다.
          </h2>
          <p className="text-body-lg font-serif text-pretty text-muted-foreground">
            죽음을 어떻게 바라보는지, 성공을 무엇으로 정의하는지 — 삶을 관통하는 질문 앞에서 당신이
            어떤 문장에 끌리는지를 봅니다.
          </p>
          <p className="text-body-lg mt-4 font-serif text-pretty text-muted-foreground">
            그 선택들이 모여 당신의 사유의 결이 됩니다. <br />그 결이 맞닿는 사람을 연결해드립니다.
          </p>
        </section>

        {/* How it works */}
        <section className="border-t border-border px-6 py-16">
          <p className="text-caption mb-6 tracking-widest text-muted-foreground">HOW IT WORKS</p>
          <h2 className="text-heading-lg mb-10 font-serif text-foreground">세 단계로 완성됩니다</h2>
          <div className="flex flex-col gap-8">
            {STEPS.map((step) => (
              <div key={step.num} className="flex gap-6">
                <span className="text-caption mt-0.5 w-6 shrink-0 text-muted-foreground">
                  {step.num}
                </span>
                <div>
                  <p className="text-heading-sm mb-1.5 text-foreground">{step.title}</p>
                  <p className="text-body-md text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 12 Topics */}
        <section className="border-t border-border px-6 py-16">
          <p className="text-caption mb-6 tracking-widest text-muted-foreground">12 THEMES</p>
          <h2 className="text-heading-lg mb-10 font-serif text-foreground">
            어떤 주제를 탐구하나요?
          </h2>
          <div className="grid grid-cols-2 gap-px border border-border bg-border">
            {TOPICS.map((topic) => (
              <div key={topic.num} className="flex flex-col gap-1.5 bg-background px-4 py-5">
                <span className="text-caption text-muted-foreground">{topic.num}</span>
                <span className="text-heading-sm font-serif text-foreground">{topic.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-border px-6 py-16">
          <h2 className="text-heading-lg mb-3 font-serif text-foreground">
            열두 가지 주제를 따라가보세요
          </h2>
          <p className="text-body-lg mb-10 font-serif text-pretty text-muted-foreground">
            당신이 고른 문장들이 모여 사유의 결이 됩니다.
          </p>
          <SurveyButton />
        </section>

        {/* Footer */}
        <footer className="border-t border-border px-6 py-8">
          <p className="text-caption text-muted-foreground">© 2025 Epis</p>
        </footer>
      </div>
    </main>
  )
}
