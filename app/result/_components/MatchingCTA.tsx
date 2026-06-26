import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type Props = {
  href: string
}

export default function MatchingCTA({ href }: Props) {
  return (
    <section className="border-t border-border px-6 py-16">
      <h2 className="text-heading-lg mb-3 font-serif text-foreground">
        결이 맞는 사람과 이어지세요
      </h2>
      <p className="text-body-lg mb-10 font-serif text-pretty text-muted-foreground">
        사유의 결이 맞닿는 사람을 연결해드립니다.
      </p>
      <Link
        href={href}
        className="text-label-md flex w-full items-center justify-between bg-primary px-6 py-4.5 text-primary-foreground transition hover:bg-(--color-brand-hover) active:scale-[0.99]"
      >
        <span>매칭 신청하기</span>
        <ArrowRight size={18} />
      </Link>
    </section>
  )
}
