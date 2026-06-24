# MVP Template

Next.js + Supabase 기반 MVP 시작점. 반복되는 셋업 없이 기능 개발부터.

## 포함된 것

**스택**
- Next.js 16, React 19, TypeScript 5, Node.js 20
- Tailwind CSS v4 + shadcn/ui (base-nova)
- Supabase (SSR 패턴)
- Pretendard Variable 폰트

**도구**
- Biome — lint + format (`pnpm check`)
- Husky + lint-staged — 커밋 전 자동 포맷
- commitlint — Conventional Commits 강제

**문서 & 코드리뷰**
- `AGENTS.md` — AI 에이전트 협업 가이드라인
- `CONVENTIONS.md` — 코딩 컨벤션
- CodeRabbit — PR 자동 리뷰 

## 시작하기

```bash
# 1. 의존성 설치
pnpm install

# 2. 환경변수 설정
cp .env.example .env
# .env에 Supabase URL/키, GA ID 채우기

# 3. 개발 서버 실행
pnpm dev
```

## 명령어

```bash
pnpm dev      # 개발 서버
pnpm build    # 프로덕션 빌드
pnpm check    # Biome lint + format (--write, 파일 자동 수정)
```

## 새 프로젝트 시작 시 바꿀 것

| 파일 | 항목 |
|------|------|
| `package.json` | `name` |
| `app/layout.tsx` | `title`, `description`, `icons.icon` |
| `AGENTS.md` | `[PROJECT_NAME]` |
| `CONVENTIONS.md` | `[PROJECT_NAME]`, `[project]/` 폴더 예시 |
| `.env` | Supabase URL/키, GA ID |

## Supabase 클라이언트 사용법

```ts
// Client Component
import { createClient } from '@/lib/supabase/client'

// Server Component / Route Handler / Server Action
import { createClient } from '@/lib/supabase/server'
const supabase = await createClient()
```

세션 갱신은 `lib/supabase/proxy.ts`의 `updateSession`을 `middleware.ts`에서 호출.

