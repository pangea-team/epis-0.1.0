import MatchingCTA from './_components/MatchingCTA'
import PersonaHero from './_components/PersonaHero'
import ResultSection from './_components/ResultSection'

const MOCK_RESULT = {
  main: '역설 수용형',
  sub: '창의적 예술형',
  title: '상충하는 요소들 사이에서 새로운 무늬를 찾는 예술가',
  view: '당신의 사유는 옳고 그름의 경계를 허무는 궤적을 그립니다. 모순 앞에서 대부분이 불편함을 느낄 때, 당신은 그 긴장을 재료 삼아 이전에는 없던 서사를 직조합니다.',
  dna: '이분법적 사고를 거부하고 제3의 가능성을 탐색합니다. 감각적 직관과 논리적 구조를 동시에 활용하며, 불확실성을 창조의 원천으로 전환합니다.',
  orientation:
    "당신의 사유가 세상에 기여하는 방식은 '다름의 공존'을 보여주는 것입니다. 대립하는 관점들이 충돌할 때, 당신은 그 사이에 다리를 놓습니다.",
}

const SECTIONS = [
  { label: '세상을 바라보는 관점', content: MOCK_RESULT.view },
  { label: '지적 DNA의 핵심 속성', content: MOCK_RESULT.dna },
  { label: '지적 지향점', content: MOCK_RESULT.orientation },
]

export default function ResultPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-220">
        <PersonaHero title={MOCK_RESULT.title} main={MOCK_RESULT.main} sub={MOCK_RESULT.sub} />

        {SECTIONS.map((section) => (
          <ResultSection key={section.label} label={section.label} content={section.content} />
        ))}

        <MatchingCTA href="#" />

        <footer className="border-t border-border px-6 py-8">
          <p className="text-caption text-muted-foreground">© 2025 Epis</p>
        </footer>
      </div>
    </main>
  )
}
