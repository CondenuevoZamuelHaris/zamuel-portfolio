# Zamuel Haris — Portfolio

Personal portfolio website built with React, TypeScript, and Tailwind CSS.

---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS v3** — styling
- **shadcn/ui** — UI components
- **React Router v7** — client-side routing
- **Catppuccin** — theme system (latte / frappe / macchiato / mocha)

---

## Getting Started (VS Code)

### Prerequisites
- [Node.js 20+](https://nodejs.org/)
- npm (comes with Node)

### 1. Clone the repo
```bash
git clone https://github.com/CondenuevoZamuelHaris/zamuel-portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the dev server
```bash
npm run dev
```

Open http://localhost:5173 in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── components/ui/        # shadcn/ui components
├── context/
│   └── ThemeContext.tsx  # Catppuccin theme + accent color
├── hooks/                # Custom React hooks
├── App.tsx               # All pages and routing
├── App.css               # App-specific styles
├── index.css             # Global styles + Catppuccin CSS variables
└── main.tsx              # Entry point
public/
├── profile.png           # Profile photo
├── resume.pdf            # Resume file
└── nc2.pdf               # National Certificate II
```

---

## Deploying to GitHub Pages

1. Install the deploy package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Add `homepage` to `package.json`:
   ```json
   "homepage": "https://CondenuevoZamuelHaris.github.io/portfolio"
   ```

4. Run:
   ```bash
   npm run deploy
   ```

---

## License

MIT
