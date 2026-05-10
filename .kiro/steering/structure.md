# Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout — sets metadata, renders children only
│   ├── globals.css             # Global styles and custom utility classes
│   └── [locale]/               # All routes are locale-scoped
│       ├── layout.tsx          # Locale layout — validates locale, provides NextIntlClientProvider
│       ├── page.tsx            # Home page — composes section components
│       ├── docs/page.tsx       # Docs page — reads and renders markdown from docs/
│       └── about/page.tsx      # About page
├── components/                 # Reusable page section components
│   ├── Header.tsx              # Fixed nav with locale switcher (client component)
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Installation.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── docs/                       # Documentation content as Markdown files
│   ├── en/                     # English docs
│   └── vi/                     # Vietnamese docs
│       # Files: overview.md, installation.md, commands.md,
│       #        configuration.md, workflows.md, troubleshooting.md
├── messages/                   # next-intl translation strings
│   ├── en.json
│   └── vi.json
├── i18n/
│   ├── routing.ts              # Defines supported locales (en, vi), default locale (en)
│   └── request.tsx             # next-intl server config — loads messages per locale
├── public/                     # Static assets (logo.png)
├── middleware.ts               # next-intl middleware — handles locale routing
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Key Conventions

- All pages live under `app/[locale]/` — locale is always present in the URL (`/en/...`, `/vi/...`)
- `localePrefix: 'always'` — locale prefix is never omitted
- Components are page-section level, not atomic — one file per major section
- Client components use `'use client'` directive; server components are the default
- Translations accessed via `useTranslations(namespace)` in client components, `getMessages()` in server layouts
- Docs content is read from the filesystem at request time using `fs/promises` in server components
- When adding a new locale: add to `i18n/routing.ts` locales array, create `messages/[locale].json`, create `docs/[locale]/` directory
- When adding a new doc section: add the `.md` file to both `docs/en/` and `docs/vi/`, then update `docs/page.tsx`
- Import paths use the `@/` alias for all project-relative imports
