# Chetan Singh - Portfolio

A professional portfolio website for SDE/IT roles. Built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router, SEO-friendly |
| **TypeScript** | Type safety, professional code quality |
| **Tailwind CSS** | Rapid, utility-first styling |
| **Framer Motion** | Smooth animations and transitions |

## Quick Start

```bash
# Install dependencies
npm install

# Run development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Making It Live (Deployment)

### Option 1: Vercel (Recommended - Free & Easiest)

1. **Push to GitHub**: Create a repo and push this project
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project" → Import your portfolio repo
   - Vercel auto-detects Next.js — click "Deploy"
   - Your live link: `https://your-project.vercel.app`

3. **Add to CV**: Use the Vercel URL (e.g., `https://chetan-portfolio.vercel.app`)

### Option 2: Netlify

1. Push to GitHub (same as above)
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Build command: `npm run build`
4. Publish directory: `.next` (or use `@netlify/plugin-nextjs`)

### Option 3: GitHub Pages (Static Export)

Add to `next.config.mjs`:
```js
const nextConfig = { output: 'export' };
```
Then run `npm run build` — output goes to `/out`. Deploy the `out` folder to GitHub Pages.

## Project Structure

```
portfolio/
├── public/
│   └── CHETAN_CV.pdf    # Your resume (linked from navbar)
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout, metadata
│   │   ├── page.tsx     # Main page (all sections)
│   │   └── globals.css
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Education.tsx
│       ├── Certifications.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
└── CHETAN_CV.pdf        # Original CV in root
```

## Updating Content

- **Skills**: Edit `src/components/Skills.tsx`
- **Projects**: Edit `src/components/Projects.tsx`
- **Experience**: Edit `src/components/Experience.tsx`
- **Contact info**: Edit `src/components/Contact.tsx` and `src/components/Hero.tsx`
- **Resume**: Replace `public/CHETAN_CV.pdf` when you update your CV
