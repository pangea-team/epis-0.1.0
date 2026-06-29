import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { ROUTES } from '@/lib/routes'
import { FadeIn } from './_components/FadeIn'

const STEPS = [
  {
    index: '#1',
    question: '나는 어떻게 사유하는가',
    answer: '열두 개의 질문이 당신만의 지적 페르소나를 조각합니다.',
  },
  {
    index: '#2',
    question: '무엇을 꺼내지 못했는가',
    answer: '세상 밖에 내보이지 못한 이야기를, 이곳에서.',
  },
  {
    index: '#3',
    question: '누구와 깊어지고 싶은가',
    answer: '사유가 닮은 한 사람과 연결됩니다.',
  },
]

type SurveyButtonProps = {
  label?: string
}

function SurveyButton({ label = '나의 지적 페르소나 확인하기' }: SurveyButtonProps) {
  return (
    <Link
      href={ROUTES.SURVEY}
      className="text-label-md flex w-full items-center justify-between bg-primary px-6 py-4.5 text-primary-foreground transition hover:bg-(--color-brand-hover) active:scale-[0.99]"
    >
      <span>{label}</span>
      <ArrowRight size={18} />
    </Link>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcf9f6]">
      <div className="mx-auto max-w-220">
        {/* Hero — #faf9f6 */}
        <section className="flex flex-col px-6 pt-28 pb-16">
          <h1 className="text-display mb-7 font-serif text-pretty text-foreground">
            당신의 사유에는
            <br />
            고유한 무늬가 있습니다.
          </h1>
          <p className="text-body-lg mb-12 font-serif text-pretty text-muted-foreground">
            단순한 스펙을 넘어, 당신의 사유 방식과
            <br />
            세상을 바라보는 관점을 아카이빙하는
            <br />
            프리미엄 취향 커뮤니티.
          </p>
          {/* TODO: DB 연결 후 실제 수치로 교체 */}
          {/* <p className="text-caption mb-4 text-muted-foreground">지금까지 142명이 참여했습니다</p> */}
          <SurveyButton />
        </section>

        {/* What is EPIS — #faf6f2 */}
        <FadeIn>
          <section className="bg-[#faf6f2] px-6 py-14">
            <p className="text-label-sm mb-3 uppercase tracking-widest text-foreground">
              WHAT IS EPIS
            </p>
            <h2 className="text-heading-lg mb-6 font-serif text-foreground">
              사유하는 사람들을 연결합니다.
            </h2>
            <p className="text-body-md max-w-xs font-serif text-muted-foreground">
              12개의 질문으로 지적 페르소나를 발견하고, 깊은 대화를 나눌 사람을 찾아드립니다.
            </p>
          </section>
        </FadeIn>

        {/* How it Works — #f8f3ef */}
        <FadeIn>
          <section className="bg-[#f8f3ef] px-6 py-14">
            <p className="text-label-sm mb-3 uppercase tracking-widest text-foreground">
              HOW IT WORKS
            </p>
            <h2 className="text-heading-lg mb-12 font-serif text-foreground">
              당신은 어떤 사람인가요
            </h2>
            <div className="flex flex-col gap-12">
              {STEPS.map((step) => (
                <div key={step.index}>
                  <p className="text-caption mb-3 font-serif italic text-muted-foreground">
                    {step.index}
                  </p>
                  <p className="text-heading-sm mb-2 font-serif text-foreground">{step.question}</p>
                  <p className="text-body-md text-muted-foreground">{step.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Why EPIS — #f6f0eb */}
        <FadeIn>
          <section className="bg-[#f6f0eb] px-6 py-14">
            <p className="text-label-sm mb-3 uppercase tracking-widest text-foreground">WHY EPIS</p>
            <h2 className="text-heading-lg mb-8 font-serif text-foreground">
              사유가 깊은 사람들이,
              <br />
              가장 안전하게 연결되는 곳.
            </h2>
            <p className="text-body-md mb-4 max-w-xs font-serif text-muted-foreground">
              매칭은 알고리즘이 아닌, 사람의 안목으로 완성됩니다.
            </p>
            <p className="text-body-md max-w-xs font-serif text-muted-foreground">
              운영진이 직접 사유의 결을 살피고, 가장 깊게 맞닿는 파트너를 승인합니다.
            </p>
          </section>
        </FadeIn>

        {/* Final CTA — #f4ede7 */}
        <FadeIn>
          <section className="bg-[#f4ede7] px-6 py-24">
            {/*
              대비 검증: #6d6d6d(muted-foreground) on #ece7dd ≈ 4.0:1 → WCAG AA(4.5:1) 미만.
              16px 본문 텍스트 해당. text-foreground로 조정 (foreground ≈ #1a1a1a, 대비 ~16:1).
            */}
            <p className="text-body-md mb-10 max-w-xs font-serif text-foreground">
              에피스에서의 연결에는 정해진 결말이 없습니다.
            </p>
            <p className="text-body-lg mb-2 font-serif text-foreground">
              때로는 <span className="text-foreground">지적인 친구</span>를,
            </p>
            <p className="text-body-lg mb-2 font-serif text-foreground">
              때로는 <span className="text-foreground">대화가 통하는 연인</span>을,
            </p>
            <p className="text-body-lg mb-12 font-serif text-foreground">
              어쩌면 <span className="text-foreground">평생을 함께할 동반자</span>가 될 수도
              있습니다.
            </p>
            <h2 className="text-heading-lg mb-10 font-serif text-foreground">
              이제 가장 먼저,
              <br />
              마주해 본 적 없는 당신의 내면을
              <br />
              만날 준비 되셨나요?
            </h2>
            <SurveyButton label="지금 나의 지적 페르소나 찾기" />
          </section>
        </FadeIn>

        <footer className="bg-[#f4ede7] px-6 py-8">
          <p className="text-caption text-muted-foreground">© 2025 Epis</p>
        </footer>
      </div>
    </main>
  )
}
