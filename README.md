# Zamuel Haris — Portfolio

# Zamuel Haris — Portfolio

A personal portfolio website built with React and TypeScript.

🔗 Live site: https://condenuevozamuelharis.github.io/zamuel-portfolio/
---

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS v3** — styling
- **shadcn/ui** — UI components
- **React Router v7** — client-side routing
- **Catppuccin** — theme system (latte / frappe / macchiato / mocha)

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
## License

MIT
