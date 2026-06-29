import { getPersonaResult } from '@/lib/personas/data'
import { getTypeStyle } from '@/lib/personas/styles'
import MatchingCTA from './_components/MatchingCTA'
import PersonaHero from './_components/PersonaHero'
import ResultSection from './_components/ResultSection'

const DEMO_MAIN = '본질 관통형' as const
const DEMO_SUB = '역설 수용형' as const
export default function ResultPage() {
  const result = getPersonaResult(DEMO_MAIN, DEMO_SUB)
  if (!result) return null

  const mainStyle = getTypeStyle(DEMO_MAIN)
  const subStyle = getTypeStyle(DEMO_SUB)
  const bgStyle = {
    background: `
      radial-gradient(ellipse at 25% 35%, rgba(${mainStyle.rgb}, 0.85) 0%, transparent 58%),
      radial-gradient(ellipse at 75% 65%, rgba(${subStyle.rgb}, 0.65) 0%, transparent 52%),
      #f9f9f7
    `,
  }

  const sections = [
    { label: '세상을 바라보는 관점', content: result.view },
    { label: '지적 DNA의 핵심 속성', content: result.dna },
    { label: '지적 지향점', content: result.orientation },
  ]

  return (
    <main className="min-h-screen" style={bgStyle}>
      <div className="mx-auto max-w-220">
        <PersonaHero title={result.title} main={DEMO_MAIN} sub={DEMO_SUB} />

        {sections.map((section) => (
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
