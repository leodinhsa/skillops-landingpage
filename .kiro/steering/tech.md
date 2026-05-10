# Tech Stack

## Framework & Runtime
- **Next.js 14** with App Router
- **React 18**
- **TypeScript 5** (strict mode enabled)

## Styling
- **Tailwind CSS 3** — utility-first styling
- Custom theme defined in `tailwind.config.js`:
  - Primary color: purple scale (`primary-500` = `#7d12ff`)
  - Accent color: green scale
  - Custom font sizes (slightly smaller than Tailwind defaults)
  - Custom animations: `fade-in`, `slide-up`, `float`, `glow`
- Global styles in `app/globals.css` (includes `glass-effect`, `gradient-text` utility classes)
- Fonts: Inter (sans), JetBrains Mono (mono)

## Key Libraries
- **next-intl 3** — i18n routing and translations
- **framer-motion 10** — animations
- **lucide-react** — icons
- **react-markdown 9** — renders `.md` files as HTML
- **react-syntax-highlighter** — code block highlighting (uses `oneDark` theme from Prism)

## Path Aliases
- `@/*` maps to the project root (configured in `tsconfig.json`)

## Common Commands

```bash
# Development
npm run dev       # Start dev server at localhost:3000

# Production
npm run build     # Build for production
npm start         # Start production server

# Code quality
npm run lint      # Run ESLint (next lint)
```

## Configuration Files
- `next.config.js` — wraps config with `withNextIntl`
- `tailwind.config.js` — custom theme, content paths
- `tsconfig.json` — strict TS, `bundler` module resolution, `@/*` alias
- `middleware.ts` — next-intl locale routing middleware
