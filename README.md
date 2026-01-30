# Blog Explorer

> A modern, fast, and SEO-friendly blog explorer built with Next.js (App Router) and Tailwind CSS.

## 🎯 Overview

Blog Explorer is a production-ready blog application that demonstrates modern web development best practices. It features a clean, responsive interface with advanced search and filtering capabilities, optimized for both performance and accessibility.

**Live Demo:** [https://blog-explorer-neon.vercel.app](https://blog-explorer-neon.vercel.app)

## Features

- Built with Next.js App Router
- Styled with Tailwind CSS
- Search articles by title, description, or content
- Filter articles by category (dropdown)
- Read full article in a modal
- Keyboard accessible (Enter to open modal, ESC to close)
- Accessible form labels & ARIA attributes
- Skeleton loaders for better UX
- SEO optimized (metadata, sitemap, robots.txt)
- Fully responsive design

## Tech Stack

| Technology          | Purpose                              |
| ------------------- | ------------------------------------ |
| **Next.js 15**      | React framework with App Router      |
| **React 18**        | UI library                           |
| **TypeScript**      | Type safety and developer experience |
| **Tailwind CSS**    | Utility-first styling                |
| **Lucide React**    | Modern icon library                  |
| **Public Blog API** | Data source for articles             |

## 📁 Project Structure

```
blog-explorer/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts
│
├── components/
│   ├── ArticleCard.tsx
│   ├── ArticleCardList.tsx
│   ├── ArticleCategory.tsx
│   ├── ArticleModal.tsx
│   ├── ArticleSkeleton
│   ├── SearchBar.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   └── Footer.tsx
│
├── lib/
│   ├── api.ts
│   ├── formatDate.ts
│   └── types.ts
│
├── public/
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.mjs
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone [https://github.com/your-username/blog-explorer.git](https://github.com/Ranjandas1/BlogExplorer)
   cd blog-explorer
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
```
