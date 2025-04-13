# Open Source Spirit Shop

A mystical web application that transforms popular open-source tools into magical potions. Built with Next.js 15, TypeScript, and shadcn/ui components.

## Features

- 🧪 Magical potion cards for popular open-source tools
- 🔮 Filter by magical types (Fire-type = React, Ice-type = Tailwind, Electric-type = Node)
- ⚡ Server-side rendering with ISR (Incremental Static Regeneration)
- 🎯 Dynamic potion pages with pre-built popular potions
- 🌙 Dark mode support
- 🔒 Type-safe with TypeScript
- 🚀 Fast page loads with Next.js
- 🎲 Mystery potion page with random trending repositories

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Data Fetching**: GitHub API
- **Client State**: SWR
- **Caching**: Next.js ISR

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- GitHub account (for API access)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/open-source-spirit-shop.git
cd open-source-spirit-shop
```

2. Install dependencies:

```bash
npm install
```

3. Set up GitHub authentication:

   - Install GitHub CLI:

   ```bash
   brew install gh
   gh auth login
   ```

   - Or manually create a token:
     1. Go to https://github.com/settings/tokens
     2. Generate a new token with `repo` and `read:org` scopes
     3. Copy the token

4. Create a `.env.local` file in the root directory:

```env
GITHUB_TOKEN=your_github_token_here
```

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── api/
│   └── potions/      # API route for potions data
├── components/
│   ├── ui/           # shadcn/ui components
│   ├── PotionCard.tsx  # Individual potion card component
│   ├── PotionGrid.tsx  # Grid of potions with filtering
│   └── PotionFilters.tsx  # Filter controls
├── lib/
│   ├── github.ts     # GitHub API utilities
│   └── types.ts      # TypeScript type definitions
├── potions/
│   └── [slug]/       # Dynamic route for individual potions
└── mystery/          # Mystery potion page
```

## Data Fetching Strategy

The app uses different data fetching strategies:

1. **Homepage (SSG with ISR)**:

   - Static generation with hourly revalidation
   - Fetches popular repositories from GitHub API
   - Client-side filtering with SWR
   - Cached for better performance

2. **Individual Potion Pages (ISR)**:

   - Pre-built for popular repositories
   - Dynamic generation for other repositories
   - Hourly revalidation

3. **Mystery Potion Page (SSR)**:

   - Server-side rendering with no caching
   - Fetches random trending repository
   - Fresh data on every request

4. **Client-side Filtering**:
   - Magical type filtering (Fire, Ice, Electric)
   - No additional API calls
   - Instant UI updates

## GitHub API Integration

The app uses the GitHub API to fetch repository data:

- Search query: `topic:javascript+stars:>5000`
  - Shows repositories with:
    - Topic: javascript
    - Stars: >5000
- Rate limits:
  - Authenticated: 5,000 requests/hour
  - Unauthenticated: 60 requests/hour
- Caching: 1-hour revalidation for static pages

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [shadcn/ui](https://ui.shadcn.com/)
- [GitHub API](https://docs.github.com/en/rest)
- [Tailwind CSS](https://tailwindcss.com/)
- [SWR](https://swr.vercel.app/)
