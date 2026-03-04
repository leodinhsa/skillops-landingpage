# SkillOps Landing Page

A modern, responsive landing page for SkillOps - the AI Agent Skills Management CLI tool.

## 🚀 Features

- **Modern Design**: Clean, Apple-inspired design with purple theme
- **Responsive**: Optimized for desktop and mobile devices
- **Multilingual**: Support for English and Vietnamese
- **Interactive**: Smooth animations and hover effects
- **Documentation**: Integrated documentation with syntax highlighting
- **Performance**: Built with Next.js 14 and optimized for speed

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Icons**: Lucide React
- **Syntax Highlighting**: react-syntax-highlighter
- **Markdown**: react-markdown

## 📁 Project Structure

```
├── app/
│   ├── [locale]/           # Internationalized routes
│   │   ├── page.tsx        # Home page
│   │   ├── docs/           # Documentation pages
│   │   └── about/          # About page
│   ├── globals.css         # Global styles
│   └── layout.tsx          # Root layout
├── components/             # Reusable components
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features showcase
│   ├── Installation.tsx    # Installation guide
│   └── Footer.tsx          # Site footer
├── docs/                   # Documentation content
│   ├── en/                 # English documentation
│   └── vi/                 # Vietnamese documentation
├── messages/               # Translation files
│   ├── en.json             # English translations
│   └── vi.json             # Vietnamese translations
└── public/                 # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/leodinhsa/skillops-landing.git
cd skillops-landing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌍 Internationalization

The site supports multiple languages using next-intl:

- **English** (`/en`): Default language
- **Vietnamese** (`/vi`): Vietnamese translation

### Adding New Languages

1. Create a new translation file in `messages/[locale].json`
2. Add the locale to `middleware.ts`
3. Update the language selector in `components/Header.tsx`

### Updating Translations

Edit the JSON files in the `messages/` directory:
- `messages/en.json` - English translations
- `messages/vi.json` - Vietnamese translations

## 📝 Documentation

Documentation is stored as Markdown files in the `docs/` directory:

- `docs/en/` - English documentation
- `docs/vi/` - Vietnamese documentation

### Adding New Documentation

1. Create a new `.md` file in the appropriate language directory
2. Update the documentation page to include the new content
3. Add navigation links if needed

## 🎨 Customization

### Colors

The site uses a purple theme defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Purple shades
    500: '#a855f7',
    600: '#9333ea',
    // ...
  },
  accent: {
    // Pink/magenta shades
    500: '#d946ef',
    600: '#c026d3',
    // ...
  }
}
```

### Fonts

- **Primary**: Inter (sans-serif)
- **Code**: JetBrains Mono (monospace)

### Components

All components are built with:
- Tailwind CSS for styling
- Framer Motion for animations
- Responsive design principles
- Accessibility best practices

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The site can be deployed to any platform that supports Next.js:

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Support

If you find this project helpful, consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- ☕ [Buying us a coffee](https://buymeacoffee.com/leodinhdev)

## 📞 Contact

- **GitHub**: [skillops/skillops](https://github.com/leodinhsa/skillops)
- **Issues**: [GitHub Issues](https://github.com/leodinhsa/skillops/issues)
- **Discussions**: [GitHub Discussions](https://github.com/leodinhsa/skillops/discussions)

---

Made with ❤️ for the developer community