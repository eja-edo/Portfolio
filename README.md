# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and MDX. This static site is perfect for developers, designers, and freelancers to showcase their work.

![Portfolio Preview](public/assets/og-image.jpg)

## ✨ Features

- 🎨 **Modern UI/UX**: Clean, professional design with dark/light mode
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Static site generation for optimal speed
- 🎯 **SEO Optimized**: Built-in SEO best practices
- 📝 **MDX Blog/Projects**: Write project details in Markdown
- 🎭 **Syntax Highlighting**: Beautiful code blocks with copy functionality
- 🔍 **Project Search & Filter**: Client-side filtering by tags and search
- 🌓 **Dark Mode**: Auto-detect system preference with manual toggle
- 📊 **Analytics Ready**: Easy integration with analytics services
- 🚀 **Easy Deploy**: One-click deploy to Vercel

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/) with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Syntax Highlighting**: [rehype-highlight](https://github.com/rehypejs/rehype-highlight)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Project Structure

```
├── content/
│   └── projects/          # Project markdown files
│       ├── project-1.md
│       ├── project-2.md
│       └── project-3.md
├── public/
│   └── assets/           # Images, resume, etc.
│       ├── avatar.jpg
│       ├── resume.pdf
│       └── projects/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx
│   │   ├── page.tsx      # Home page
│   │   ├── about/
│   │   ├── projects/
│   │   └── contact/
│   ├── components/       # React components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── MDXComponents.tsx
│   │   └── ...
│   ├── data/
│   │   └── site.config.ts  # Site configuration
│   ├── lib/
│   │   └── mdx.ts         # MDX utilities
│   └── types/
│       └── index.ts       # TypeScript types
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Configure your site**

Edit `src/data/site.config.ts` with your personal information:

```typescript
export const SITE: SiteConfig = {
  title: 'Your Name - Portfolio',
  name: 'Your Name',
  role: 'Your Role',
  bio: 'Your bio...',
  avatar: '/assets/avatar.jpg',
  email: 'your.email@example.com',
  resume: '/assets/resume.pdf',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    twitter: 'https://twitter.com/yourusername',
  },
  // ... add skills, timeline, etc.
};
```

4. **Add your content**

- Replace `public/assets/avatar.jpg` with your photo
- Add your resume as `public/assets/resume.pdf`
- Create project files in `content/projects/`

5. **Run development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Adding Projects

Create a new `.md` file in `content/projects/` with frontmatter:

```markdown
---
title: "Project Name"
date: "2024-11-01"
tags: ["React", "TypeScript", "Next.js"]
thumb: "/assets/projects/project-thumb.jpg"
demo: "https://demo.example.com"
repo: "https://github.com/yourusername/project"
excerpt: "A brief description of your project..."
roles: ["Full-Stack Developer", "UI Designer"]
featured: true
---

# Project Name

Your detailed project description in Markdown...

## Features

- Feature 1
- Feature 2

## Code Example

\`\`\`typescript
const example = "code";
\`\`\`
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | ✅ | Project title |
| `date` | string | ✅ | Publication date (YYYY-MM-DD) |
| `tags` | string[] | ✅ | Technology tags |
| `thumb` | string | ✅ | Thumbnail image path |
| `excerpt` | string | ✅ | Short description |
| `demo` | string | ❌ | Live demo URL |
| `repo` | string | ❌ | GitHub repository URL |
| `roles` | string[] | ❌ | Your roles in the project |
| `featured` | boolean | ❌ | Feature on homepage |

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize your color scheme:

```typescript
colors: {
  primary: {
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  },
  accent: {
    500: '#d946ef',
    // ...
  },
}
```

### Fonts

Update fonts in `src/app/layout.tsx`:

```typescript
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600', '700'] });
```

### Components

All components are in `src/components/` and can be customized to your needs.

## 📦 Building for Production

```bash
npm run build
```

This will create an optimized production build in the `out/` directory (static export).

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Click "Deploy"

That's it! Your site will be live in minutes.

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `out/` directory to Netlify

### Deploy to GitHub Pages

1. Update `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',
  basePath: '/your-repo-name',
  images: {
    unoptimized: true,
  },
}
```

2. Build and deploy:

```bash
npm run build
# Deploy 'out' folder to GitHub Pages
```

## 🎯 SEO & Meta Tags

The site includes automatic SEO optimization:

- Meta tags for each page
- Open Graph tags for social media
- Sitemap generation
- Structured data

Customize in each page's `metadata` export:

```typescript
export const metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
};
```

## 🌟 Advanced Features

### Custom MDX Components

Add custom components in `src/components/MDXComponents.tsx`:

```typescript
export const mdxComponents = {
  // Your custom components
  CustomComponent: (props) => <div {...props} />,
};
```

### Analytics

Add analytics by modifying `src/app/layout.tsx`:

```typescript
// Add Google Analytics, Plausible, etc.
<Script src="https://your-analytics-url" />
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💬 Support

If you have any questions or need help, feel free to reach out:

- Email: your.email@example.com
- Twitter: [@yourusername](https://twitter.com/yourusername)
- GitHub: [Open an issue](https://github.com/yourusername/portfolio/issues)

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Vercel Deployment Guide](https://vercel.com/docs)

---

Made with ❤️ using Next.js and TypeScript

**Star ⭐ this repo if you find it helpful!**
