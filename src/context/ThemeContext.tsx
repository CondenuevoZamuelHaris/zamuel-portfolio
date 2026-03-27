import { createContext, useContext, useState, useEffect, useRef, type ReactNode } from 'react';

export type Theme = 'latte' | 'frappe' | 'macchiato' | 'mocha';
export type AccentColor = 
  | 'rosewater' | 'flamingo' | 'pink' | 'mauve' | 'red' | 'maroon' | 'peach' 
  | 'yellow' | 'green' | 'teal' | 'sky' | 'sapphire' | 'blue' | 'lavender';

interface ThemeContextType {
  theme: Theme;
  accentColor: AccentColor;
  backgroundEffect: boolean;
  setTheme: (theme: Theme) => void;
  setAccentColor: (color: AccentColor) => void;
  setBackgroundEffect: (enabled: boolean) => void;
  cursorPosition: { x: number; y: number };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('mocha');
  const [accentColor, setAccentColorState] = useState<AccentColor>('mauve');
  const [backgroundEffect, setBackgroundEffectState] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  // Smooth cursor tracking with refs
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  // Apply theme class to document
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-latte', 'theme-frappe', 'theme-macchiato', 'theme-mocha');
    root.classList.add(`theme-${theme}`);
  }, [theme]);

  // Apply accent color class to document
  useEffect(() => {
    const root = document.documentElement;
    const accentClasses = [
      'accent-rosewater', 'accent-flamingo', 'accent-pink', 'accent-mauve',
      'accent-red', 'accent-maroon', 'accent-peach', 'accent-yellow',
      'accent-green', 'accent-teal', 'accent-sky', 'accent-sapphire',
      'accent-blue', 'accent-lavender'
    ];
    accentClasses.forEach(cls => root.classList.remove(cls));
    root.classList.add(`accent-${accentColor}`);
  }, [accentColor]);

  // Smooth cursor animation using requestAnimationFrame
  useEffect(() => {
    const smoothFactor = 0.08; // Lower = smoother but more lag, Higher = more responsive but less smooth

    const animate = () => {
      // Interpolate current position towards target position
      currentPosition.current.x += (targetPosition.current.x - currentPosition.current.x) * smoothFactor;
      currentPosition.current.y += (targetPosition.current.y - currentPosition.current.y) * smoothFactor;

      setCursorPosition({
        x: currentPosition.current.x,
        y: currentPosition.current.y
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    if (backgroundEffect) {
      animationFrameId.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [backgroundEffect]);

  // Track cursor position for background effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPosition.current = { x: e.clientX, y: e.clientY };
    };

    if (backgroundEffect) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [backgroundEffect]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  const setAccentColor = (color: AccentColor) => {
    setAccentColorState(color);
    localStorage.setItem('portfolio-accent', color);
  };

  const setBackgroundEffect = (enabled: boolean) => {
    setBackgroundEffectState(enabled);
    localStorage.setItem('portfolio-bg-effect', String(enabled));
  };

  // Load saved preferences
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    const savedAccent = localStorage.getItem('portfolio-accent') as AccentColor;
    const savedBgEffect = localStorage.getItem('portfolio-bg-effect');

    if (savedTheme && ['latte', 'frappe', 'macchiato', 'mocha'].includes(savedTheme)) {
      setThemeState(savedTheme);
    }
    if (savedAccent) {
      setAccentColorState(savedAccent);
    }
    if (savedBgEffect !== null) {
      setBackgroundEffectState(savedBgEffect === 'true');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{
      theme,
      accentColor,
      backgroundEffect,
      setTheme,
      setAccentColor,
      setBackgroundEffect,
      cursorPosition
    }}>
      {children}
      {backgroundEffect && (
        <div 
          className="cursor-glow active"
          style={{
            left: cursorPosition.x,
            top: cursorPosition.y,
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
