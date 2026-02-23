# 360 AI Solutions

Professional landing page for 360 AI Solutions — helping business owners set up private, self-hosted AI assistants.

**Live:** [360-ai-solutions.vercel.app](https://360-ai-solutions.vercel.app)

## About

360 AI Solutions provides setup, customization, and ongoing support for private AI assistants that run on hardware you own. Your data stays yours — no cloud AI services reading your business communications.

### Services

- 🤖 Custom AI Assistant Setup
- 🔒 Privacy-First Architecture
- ✍️ Marketing & Content Engine (15+ specialized skills)
- 🎯 Lead Generation & Offer Design
- 🔧 Business Integrations (email, calendar, CRM, messaging)
- 📞 Ongoing Support & Growth

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS v4
- **Animations:** IntersectionObserver scroll-reveal (no external libs)
- **Font:** Inter (Google Fonts)
- **Hosting:** Vercel
- **SEO:** Full meta tags, Open Graph, Twitter Cards

## Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/toddellis-clawd/360-ai-solutions.git
   cd 360-ai-solutions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the dev server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx        # Fixed glass nav with mobile hamburger
│   ├── Hero.jsx          # Animated hero with CTAs
│   ├── Services.jsx      # 6 service cards with hover effects
│   ├── HowItWorks.jsx    # 3-step process
│   ├── Demo.jsx          # Live demo showcase
│   ├── About.jsx         # Founder bio and stats
│   ├── Contact.jsx       # Contact CTAs
│   └── Footer.jsx        # Navigation and copyright
├── hooks/
│   └── useScrollReveal.js  # Scroll animation hook
├── App.jsx
├── index.css
└── main.jsx
```

## Deployment

Deployed automatically to Vercel. Push to `main` to deploy.

```bash
npx vercel --prod
```

## Custom Domain

To add a custom domain:
1. Go to Vercel project settings → Domains
2. Add your domain
3. Update DNS records as instructed

## License

MIT

---

Built with 🦇 by Opie AI
