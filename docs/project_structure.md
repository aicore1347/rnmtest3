# RNM - Project Structure Documentation

## Overview

RNM is a GTA 5 server website built with Next.js App Router following a feature-driven architecture with clear separation between server and client concerns. The structure emphasizes type safety, accessibility, and developer experience with automated tooling. Purple-themed branding reflects the GTA aesthetic while maintaining professional web standards and WCAG 2.2 AA compliance.

## Repository Structure

```
rnm/
├── .cursor/
│   └── rules/                           # (manual)
│       ├── typescript.md
│       ├── nextjs.md
│       └── accessibility.md
├── .github/
│   └── workflows/                       # (manual)
│       ├── ci.yml
│       ├── deploy-preview.yml
│       └── security-scan.yml
├── app/                                 # (gen/manual)
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   ├── admin/
│   │   │   ├── users/
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   └── profile/
│   │       └── page.tsx
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts
│   │   ├── users/
│   │   │   └── route.ts
│   │   └── health/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── loading.tsx
│   ├── error.tsx
│   └── not-found.tsx
├── components/                          # (gen)
│   ├── ui/                             # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── card.tsx
│   │   └── index.ts
│   ├── forms/
│   │   ├── auth/
│   │   │   ├── login-form.tsx
│   │   │   └── register-form.tsx
│   │   └── user/
│   │       └── profile-form.tsx
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── sidebar.tsx
│   │   └── navigation.tsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── auth-provider.tsx
│   │   │   └── protected-route.tsx
│   │   └── dashboard/
│   │       ├── stats-cards.tsx
│   │       └── recent-activity.tsx
│   └── common/
│       ├── loading-spinner.tsx
│       ├── error-boundary.tsx
│       └── theme-provider.tsx
├── lib/                                 # (gen/manual)
│   ├── auth.ts
│   ├── db.ts
│   ├── validations/
│   │   ├── auth.ts
│   │   ├── user.ts
│   │   └── index.ts
│   ├── utils/
│   │   ├── cn.ts
│   │   ├── formatters.ts
│   │   └── constants.ts
│   ├── hooks/
│   │   ├── use-auth.ts
│   │   ├── use-local-storage.ts
│   │   └── use-media-query.ts
│   └── analytics/
│       ├── events.ts
│       └── providers.ts
├── server/                              # (gen)
│   ├── actions/
│   │   ├── auth.ts
│   │   ├── users.ts
│   │   └── index.ts
│   ├── queries/
│   │   ├── users.ts
│   │   └── stats.ts
│   └── middleware/
│       ├── auth.ts
│       └── validation.ts
├── styles/                              # (gen/manual)
│   ├── globals.css
│   └── components.css
├── hooks/                               # (gen)
│   ├── use-auth.ts
│   ├── use-theme.ts
│   └── use-analytics.ts
├── types/                               # (gen)
│   ├── auth.ts
│   ├── user.ts
│   ├── api.ts
│   └── index.ts
├── config/                              # (manual)
│   ├── database.ts
│   ├── auth.ts
│   ├── analytics.ts
│   └── site.ts
├── content/                             # (manual)
│   ├── legal/
│   │   ├── privacy.md
│   │   └── terms.md
│   └── docs/
│       └── api.md
├── public/                              # (manual)
│   ├── icons/
│   │   ├── favicon.ico
│   │   └── logo.svg
│   ├── images/
│   │   ├── hero-bg.webp
│   │   └── avatars/
│   └── locales/
│       ├── en/
│       │   └── common.json
│       └── es/
│           └── common.json
├── tests/                               # (gen)
│   ├── __mocks__/
│   │   ├── next-auth.ts
│   │   └── prisma.ts
│   ├── components/
│   │   └── ui/
│   │       └── button.test.tsx
│   ├── pages/
│   │   └── home.test.tsx
│   ├── utils/
│   │   └── test-utils.tsx
│   └── e2e/
│       ├── auth.spec.ts
│       └── dashboard.spec.ts
├── scripts/                             # (manual)
│   ├── seed-db.ts
│   ├── migrate.ts
│   └── build-check.ts
├── docs/                                # (manual)
│   ├── context/
│   │   ├── project-brief.md
│   │   ├── routes-map.md
│   │   └── data-entities.md
│   ├── decisions/
│   │   └── ADR-001-tech-stack.md
│   └── api/
│       └── endpoints.md
├── prisma/                              # (manual)
│   ├── schema.prisma
│   ├── seed.ts
│   └── migrations/
│       └── 001_initial_setup/
└── middleware.ts                        # (manual)
```

## Folder Guides

- **app/**: Next.js App Router pages, layouts, route groups, API routes, and global app files
- **components/**: React components organized by ui/, forms/, layout/, features/, and common/ with co-located tests
- **lib/**: Shared utilities, validations, hooks, auth config, database client, and analytics setup
- **server/**: Server-side logic including actions, queries, and middleware for data operations
- **styles/**: Global CSS, Tailwind config, and component-specific styles with CSS custom properties
- **hooks/**: Custom React hooks for state management, auth, theme, and analytics
- **types/**: TypeScript definitions organized by domain (auth, user, api) with shared index exports
- **config/**: Environment-based configuration files for database, auth, analytics, and site settings
- **content/**: Static markdown content for legal pages, documentation, and CMS-style content
- **public/**: Static assets including icons, images, localization files, and SEO assets
- **tests/**: Test files with mocks, utilities, component tests, and e2e specs using Vitest/Playwright
- **scripts/**: Build and deployment scripts for database seeding, migrations, and CI/CD tasks
- **.cursor/rules/**: AI-assisted development rules and patterns for consistent code generation
- **docs/**: Project documentation including context, ADRs, API docs, and development guides
- **.github/**: GitHub workflows for CI/CD, security scanning, and automated deployments
- **prisma/**: Database schema, migrations, and seed files for PostgreSQL with Prisma ORM

## Conventions

- **Naming**: kebab-case for files/folders, PascalCase for components, camelCase for functions/variables
- **Import aliases**: `@/` for root, `@/components` for components, `@/lib` for utilities, `@/types` for types
- **Test co-location**: Component tests next to source files (`.test.tsx`), e2e tests in `/tests/e2e/`
- **Comments style**: JSDoc for functions, inline `//` for complex logic, `/* */` for disabled code blocks

## Data/API Layer

- **Server actions**: Located in `/server/actions/` with Zod validation and error handling wrappers
- **API routes**: RESTful endpoints in `/app/api/` following OpenAPI patterns with proper HTTP status codes
- **Zod validation**: Input validation schemas in `/lib/validations/` with TypeScript inference for type safety
- **Error handling**: Centralized error classes with user-friendly messages and logging integration
- **Caching**: Next.js cache tags, TanStack Query for client-side caching, Redis for session storage

## State Management & Data Fetching

- **Server vs Client**: Prefer server components for static content, client components for interactivity
- **TanStack Query**: Use for API calls, mutations, and optimistic updates with proper error boundaries
- **Query patterns**: Custom hooks in `/hooks/` wrapping TanStack Query with consistent error handling
- **State management**: React Context for global UI state, TanStack Query for server state, local state for component-specific data

## Authentication & Security

- **NextAuth layout**: OAuth providers (Discord, Steam), credential auth, JWT + database sessions
- **Route protection**: Middleware-based auth checks, server action authentication, role-based access control
- **Middleware**: Path-based protection in `middleware.ts` with public/private route definitions
- **Environment keys**: AUTH_SECRET, DATABASE_URL, NEXTAUTH_URL, OAUTH_CLIENT_IDS in `.env.example`

## Styling & Design System

- **Tailwind/shadcn setup**: Custom purple theme with CSS variables, dark mode support, component variants
- **Theming**: CSS custom properties for colors, spacing, typography with GTA-inspired purple palette
- **Dark mode**: System preference detection with manual toggle, persistent user preference storage
- **A11y checks**: Automated testing with axe-core, proper ARIA labels, keyboard navigation, contrast ratios

## Testing Strategy

- **Unit tests**: Component logic, utility functions, validation schemas using Vitest with happy/error paths
- **Integration tests**: API routes, server actions, database operations with test database isolation
- **E2E tests**: Critical user flows (auth, onboarding, key features) using Playwright with visual regression
- **Helpers**: Test utilities, mocks, and factories in `/tests/utils/` for consistent test setup
- **CI thresholds**: 80% coverage minimum, all tests must pass, accessibility checks required

## Developer Experience & Automation

- **Package scripts**: `dev`, `build`, `test`, `lint`, `type-check`, `db:migrate`, `db:seed`, `storybook`
- **Husky + lint-staged**: Pre-commit hooks running ESLint, Prettier, type-checking, and test validation
- **CI pipeline**: GitHub Actions running tests, builds, security scans, and deployment previews on PRs

## Environment & Deployment

Environment variables:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_SECRET` - Authentication secret key
- `NEXTAUTH_URL` - Application base URL
- `DISCORD_CLIENT_ID` / `DISCORD_CLIENT_SECRET` - OAuth provider credentials
- `ANALYTICS_ID` - Google Analytics 4 measurement ID
- `REDIS_URL` - Session storage connection string

**Local development**: Docker Compose for PostgreSQL, Redis, Next.js dev server with hot reload
**Staging/Production**: Vercel deployment with preview URLs, environment-specific database instances
**Prisma migrations**: Automatic migrations on deploy, manual migrations for schema changes in development
**Vercel optimization**: Edge functions for auth middleware, CDN for static assets, automatic performance monitoring

## Example File Structure with Comments

```typescript
// app/page.tsx - Homepage with server-rendered content
// components/ui/button.tsx - Reusable button component with variants
// lib/validations/auth.ts - Zod schemas for authentication forms
// server/actions/users.ts - Server actions for user management
// hooks/use-auth.ts - Custom hook for authentication state
// types/user.ts - TypeScript interfaces for user data
// config/site.ts - Site-wide configuration and constants
// tests/components/ui/button.test.tsx - Component unit tests
// prisma/schema.prisma - Database schema definition
// middleware.ts - Route protection and request handling
```