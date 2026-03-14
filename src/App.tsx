import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { 
  Github, Linkedin, Instagram, Twitter, Mail, MapPin, Clock, 
  Terminal as TerminalIcon, FileText, Award, X, Menu, ExternalLink, Heart,
  Calendar, ChevronRight, Code2, Cpu, Gamepad2, Dumbbell,
  Shield, Bike
} from 'lucide-react';
import type { AccentColor } from './context/ThemeContext';
import './App.css';

// Navigation Component
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, accentColor, backgroundEffect, setTheme, setAccentColor, setBackgroundEffect } = useTheme();
  const location = useLocation();

  const themes: { id: typeof theme; label: string }[] = [
    { id: 'latte', label: 'latte' },
    { id: 'frappe', label: 'frappe' },
    { id: 'macchiato', label: 'macchiato' },
    { id: 'mocha', label: 'mocha' },
  ];

  const accentColors: { id: AccentColor; color: string }[] = [
    { id: 'rosewater', color: '#f5e0dc' },
    { id: 'flamingo', color: '#f2cdcd' },
    { id: 'pink', color: '#f5c2e7' },
    { id: 'mauve', color: '#cba6f7' },
    { id: 'red', color: '#f38ba8' },
    { id: 'maroon', color: '#eba0ac' },
    { id: 'peach', color: '#fab387' },
    { id: 'yellow', color: '#f9e2af' },
    { id: 'green', color: '#a6e3a1' },
    { id: 'teal', color: '#94e2d5' },
    { id: 'sky', color: '#89dceb' },
    { id: 'sapphire', color: '#74c7ec' },
    { id: 'blue', color: '#89b4fa' },
    { id: 'lavender', color: '#b4befe' },
  ];

  const navLinks = [
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/pics', label: 'Pics' },
    { path: '/posts', label: 'Posts' },
  ];

  const moreLinks = [
    { path: '/terminal', label: 'Terminal', icon: TerminalIcon },
    { path: '/resume', label: 'Resume', icon: FileText },
    { path: '/nc2', label: 'National Certificate', icon: Award },
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <nav className="max-w-6xl mx-auto flex items-center justify-between glass rounded-full px-4 py-2">
          <Link to="/" className="text-[var(--ctp-text)] font-bold text-lg hover:text-[var(--accent-color)] transition-colors">
            ~//
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors link-hover ${
                  location.pathname === link.path 
                    ? 'text-[var(--accent-color)]' 
                    : 'text-[var(--ctp-subtext1)] hover:text-[var(--ctp-text)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--ctp-surface0)] text-[var(--ctp-text)] text-sm hover:bg-[var(--ctp-surface1)] transition-colors"
          >
            <Menu size={16} />
            <span>More</span>
          </button>
        </nav>
      </header>

      {/* Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-[100]">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 bg-[var(--ctp-mantle)] border-l border-[var(--ctp-surface0)] p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold text-[var(--ctp-text)]">Navigation</h2>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-lg hover:bg-[var(--ctp-surface0)] transition-colors"
              >
                <X size={20} className="text-[var(--ctp-text)]" />
              </button>
            </div>

            {/* Theme Section */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-[var(--ctp-subtext0)] mb-4 uppercase tracking-wider">Theme</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                      theme === t.id
                        ? 'bg-[var(--accent-color)] text-[var(--ctp-crust)]'
                        : 'bg-[var(--ctp-surface0)] text-[var(--ctp-text)] hover:bg-[var(--ctp-surface1)]'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
              
              {/* Accent Colors */}
              <div className="grid grid-cols-7 gap-2 mb-4">
                {accentColors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setAccentColor(c.id)}
                    className={`w-8 h-8 rounded-lg transition-all ${
                      accentColor === c.id ? 'ring-2 ring-[var(--ctp-text)] ring-offset-2 ring-offset-[var(--ctp-mantle)]' : ''
                    }`}
                    style={{ backgroundColor: c.color }}
                    title={c.id}
                  />
                ))}
              </div>

              {/* Background Effect Toggle */}
              <label className="flex items-center justify-between p-3 rounded-lg bg-[var(--ctp-surface0)] cursor-pointer">
                <span className="text-sm text-[var(--ctp-text)]">Background effect</span>
                <button
                  onClick={() => setBackgroundEffect(!backgroundEffect)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${
                    backgroundEffect ? 'bg-[var(--accent-color)]' : 'bg-[var(--ctp-surface1)]'
                  }`}
                >
                  <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${
                    backgroundEffect ? 'left-7' : 'left-1'
                  }`} />
                </button>
              </label>
            </div>

            {/* Main Nav Links */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-[var(--ctp-subtext0)] mb-4 uppercase tracking-wider">Pages</h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-[var(--accent-color)]/20 text-[var(--accent-color)]'
                        : 'bg-[var(--ctp-surface0)] text-[var(--ctp-text)] hover:bg-[var(--ctp-surface1)]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={16} />
                  </Link>
                ))}
              </div>
            </div>

            {/* More Links */}
            <div>
              <h3 className="text-sm font-semibold text-[var(--ctp-subtext0)] mb-4 uppercase tracking-wider">More</h3>
              <div className="space-y-2">
                {moreLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg bg-[var(--ctp-surface0)] text-[var(--ctp-text)] hover:bg-[var(--ctp-surface1)] transition-colors"
                  >
                    <link.icon size={18} />
                    <span>{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Home Page
function Home() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Zamuel Haris';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorTimer);
  }, []);

  const projects = [
    {
      name: 'zamuelhc/portfolio',
      description: 'Personal portfolio website built with React and TypeScript showcasing my journey',
      stars: 12,
      forks: 3,
      tags: ['react', 'typescript', 'tailwind', 'portfolio'],
      date: 'March 2025'
    },
    {
      name: 'zamuelhc/student-dashboard',
      description: 'A dashboard for students to track assignments, grades, and schedules',
      stars: 8,
      forks: 2,
      tags: ['javascript', 'html', 'css'],
      date: 'February 2025'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="mb-20">
          <p className="text-[var(--ctp-subtext0)] mb-4">Hello, I'm</p>
<h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-[var(--accent-color)]">{displayText.slice(0, 3)}</span>
            <span className="text-[var(--ctp-text)]">{displayText.slice(3)}</span>
            <span className={`text-[var(--accent-color)] ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
          </h1>

          {/* Quote */}
          <blockquote className="border-l-4 border-[var(--accent-color)] pl-6 py-2 mb-8">
            <p className="text-xl md:text-2xl text-[var(--ctp-text)] italic mb-2">
              "Don't let yesterday take up too much of today."
            </p>
            <cite className="text-[var(--ctp-subtext0)] text-sm">— My personal motto</cite>
          </blockquote>

          {/* Bio */}
          <div className="mb-8 max-w-2xl space-y-3 text-[var(--ctp-subtext1)] leading-relaxed">
            <p>
              I'm a 19-year-old aspiring Software Engineer from Moncada, Tarlac, Philippines. 
              Currently studying BS Computer Science at ICF Interworld Colleges Foundation, 
              living with my grandmother and learning to code. I'm passionate about creating 
              software that makes people's lives easier.
            </p>
            <p>
              When I'm not coding, you'll find me skateboarding, listening to{' '}
              <span className="text-[var(--accent-color)]">Joji</span>,{' '}
              <span className="text-[var(--accent-color)]">Nujabes</span>, or{' '}
              <span className="text-[var(--accent-color)]">Radwimps</span>, or gaming with friends. 
              I believe in embracing failures as lessons and staying true to myself.
            </p>
          </div>


          {/* Status Badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 rounded-full bg-[var(--ctp-surface0)] text-[var(--ctp-subtext1)] text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--ctp-blue)]"></span>
              ICF Interworld Colleges Foundation (Student)
            </span>
            <span className="px-4 py-2 rounded-full bg-[var(--ctp-surface0)] text-[var(--ctp-subtext1)] text-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[var(--ctp-green)]"></span>
              Self-Taught (Developer)
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-12">
            <a 
              href="https://github.com/CondenuevoZamuelHaris" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[var(--ctp-surface0)] text-[var(--ctp-text)] hover:bg-[var(--ctp-surface1)] hover:text-[var(--accent-color)] transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/zamuel-haris-condenuevo-a030aa3b6/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[var(--ctp-surface0)] text-[var(--ctp-text)] hover:bg-[var(--ctp-surface1)] hover:text-[var(--accent-color)] transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/zamuel.ito/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-[var(--ctp-surface0)] text-[var(--ctp-text)] hover:bg-[var(--ctp-surface1)] hover:text-[var(--accent-color)] transition-colors"
            >
              <Instagram size={20} />
            </a>
</div>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[var(--ctp-text)]">Featured Projects</h2>
            <Link to="/projects" className="text-sm text-[var(--accent-color)] hover:underline flex items-center gap-1">
              View all <ChevronRight size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <div key={index} className="window-card transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[var(--accent-color)]/20 hover:border-[var(--accent-color)] cursor-pointer">
                <div className="window-header">
                  <div className="window-dot window-dot-red"></div>
                  <div className="window-dot window-dot-yellow"></div>
                  <div className="window-dot window-dot-green"></div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-[var(--ctp-text)]">{project.name}</h3>
                    <div className="flex items-center gap-3 text-sm text-[var(--ctp-subtext0)]">
                      <span className="flex items-center gap-1">
                        <Heart size={14} /> {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <Code2 size={14} /> {project.forks}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--ctp-subtext1)] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className={`px-2 py-1 rounded text-xs tag-${tag}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-[var(--ctp-overlay0)]">{project.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        

        {/* Dashboard / Highlights */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--ctp-text)] mb-8">Dashboard / Highlights</h2>
          <DashboardHighlights />
        </section>
      </div>
    </div>
  );
}

function ViewCounter() {
  const [todayViews, setTodayViews] = useState<number | null>(null);
  const [yesterdayViews, setYesterdayViews] = useState<number | null>(null);
  const [totalViews, setTotalViews] = useState<number | null>(null);

  useEffect(() => {
    const now = new Date();
    const todayKey = now.toISOString().slice(0, 10).replace(/-/g, '');
    const yesterdayDate = new Date(now);
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterdayKey = yesterdayDate.toISOString().slice(0, 10).replace(/-/g, '');
    const sessionKey = 'zam-viewed-' + todayKey;

    const hit = (key: string, setter: (n: number) => void) =>
      fetch(`https://abacus.jasoncameron.dev/hit/zam.is-a.dev/${key}`)
        .then(r => r.json())
        .then(d => { if (typeof d.value === 'number') setter(d.value); })
        .catch(() => setter(0));

    const get = (key: string, setter: (n: number) => void) =>
      fetch(`https://abacus.jasoncameron.dev/get/zam.is-a.dev/${key}`)
        .then(r => r.json())
        .then(d => { if (typeof d.value === 'number') setter(d.value); })
        .catch(() => setter(0));

    if (!sessionStorage.getItem(sessionKey)) {
      sessionStorage.setItem(sessionKey, '1');
      hit('views-all', setTotalViews);
      hit(`views-${todayKey}`, setTodayViews);
    } else {
      get('views-all', setTotalViews);
      get(`views-${todayKey}`, setTodayViews);
    }

    get(`views-${yesterdayKey}`, setYesterdayViews);
  }, []);

  const fmt = (n: number | null) => n === null ? '...' : n.toLocaleString();

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center pb-3 border-b border-[var(--ctp-surface1)]">
        <span className="text-sm text-[var(--ctp-subtext1)]">Today</span>
        <span className="text-2xl font-mono font-bold text-[var(--accent-color)]">{fmt(todayViews)}</span>
      </div>
      <div className="flex justify-between items-center pb-3 border-b border-[var(--ctp-surface1)]">
        <span className="text-sm text-[var(--ctp-subtext1)]">Yesterday</span>
        <span className="text-2xl font-mono font-bold text-[var(--ctp-text)]">{fmt(yesterdayViews)}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-[var(--ctp-subtext1)]">All</span>
        <span className="text-2xl font-mono font-bold text-[var(--ctp-text)]">{fmt(totalViews)}</span>
      </div>
    </div>
  );
}

// Dashboard Highlights Component
function DashboardHighlights() {
  const { theme, accentColor, backgroundEffect, setTheme, setAccentColor, setBackgroundEffect } = useTheme();
const [clickCount, setClickCount] = useState(0);
  const [myClicks, setMyClicks] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

useEffect(() => {
    setMyClicks(parseInt(localStorage.getItem('portfolio-clicks-mine') || '0'));
    fetch('https://abacus.jasoncameron.dev/get/zam.is-a.dev/clicks')
      .then(res => res.json())
      .then(data => {
        setClickCount(data.value || 0);
        setIsLoading(false);
      })
      .catch(() => {
        setClickCount(parseInt(localStorage.getItem('portfolio-clicks') || '0'));
        setIsLoading(false);
      });
  }, []);

  const themes: { id: typeof theme; label: string }[] = [
    { id: 'latte', label: 'latte' },
    { id: 'frappe', label: 'frappe' },
    { id: 'macchiato', label: 'macchiato' },
    { id: 'mocha', label: 'mocha' },
  ];

  const accentColors: { id: AccentColor; color: string }[] = [
    { id: 'rosewater', color: '#f5e0dc' },
    { id: 'flamingo', color: '#f2cdcd' },
    { id: 'pink', color: '#f5c2e7' },
    { id: 'mauve', color: '#cba6f7' },
    { id: 'red', color: '#f38ba8' },
    { id: 'maroon', color: '#eba0ac' },
    { id: 'peach', color: '#fab387' },
    { id: 'yellow', color: '#f9e2af' },
    { id: 'green', color: '#a6e3a1' },
    { id: 'teal', color: '#94e2d5' },
    { id: 'sky', color: '#89dceb' },
    { id: 'sapphire', color: '#74c7ec' },
    { id: 'blue', color: '#89b4fa' },
    { id: 'lavender', color: '#b4befe' },
  ];

  const commits = [
    { repo: 'portfolio', message: 'feat: add personal...', added: 156, removed: 23 },
    { repo: 'portfolio', message: 'fix: responsive lay...', added: 45, removed: 12 },
    { repo: 'student-dashboard', message: 'chore: upd...', added: 34, removed: 8 },
    { repo: 'todo-app', message: 'feat: add dark mod...', added: 67, removed: 15 },
  ];

  const posts = [
    { title: 'My Journey Into Coding', date: 'Mar 10, 2025' },
    { title: 'Why I Love Skateboarding', date: 'Feb 28, 2025' },
    { title: 'Lessons from My Skating Accident', date: 'Jan 15, 2025' },
    { title: 'Top 5 Games That Inspired Me', date: 'Dec 20, 2024' },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Theme Card */}
      <div className="bg-[var(--ctp-surface0)] rounded-xl p-5 border border-[var(--ctp-surface1)]">
        <h3 className="text-lg font-semibold text-[var(--ctp-text)] mb-4">Theme</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setTheme(t.id)}
              className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                theme === t.id
                  ? 'bg-[var(--accent-color)] text-[var(--ctp-crust)]'
                  : 'bg-[var(--ctp-surface1)] text-[var(--ctp-text)] hover:bg-[var(--ctp-surface2)]'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2 mb-4">
          {accentColors.map((c) => (
            <button
              key={c.id}
              onClick={() => setAccentColor(c.id)}
              className={`w-8 h-8 rounded-lg transition-all ${
                accentColor === c.id ? 'ring-2 ring-[var(--ctp-text)] ring-offset-2 ring-offset-[var(--ctp-surface0)]' : ''
              }`}
              style={{ backgroundColor: c.color }}
              title={c.id}
            />
          ))}
        </div>
        <label className="flex items-center justify-between">
          <span className="text-sm text-[var(--ctp-subtext1)]">Background effect:</span>
          <button
            onClick={() => setBackgroundEffect(!backgroundEffect)}
            className={`w-10 h-5 rounded-full transition-colors relative ${
              backgroundEffect ? 'bg-[var(--accent-color)]' : 'bg-[var(--ctp-surface1)]'
            }`}
          >
            <span className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
              backgroundEffect ? 'left-5' : 'left-0.5'
            }`} />
          </button>
        </label>
      </div>

{/* Click Counter */}
<div className="bg-[var(--ctp-surface0)] rounded-xl p-5 border border-[var(--ctp-surface1)] relative flex flex-col items-center text-center">
        <div className="w-full flex justify-end mb-1">
        <div className="relative group/tooltip">
          <span className="text-[var(--ctp-overlay0)] cursor-pointer hover:text-[var(--accent-color)] transition-colors text-sm">ⓘ</span>
          <div className="absolute right-0 top-6 w-64 bg-[var(--ctp-mantle)] border border-[var(--ctp-surface1)] rounded-lg p-3 text-xs text-[var(--ctp-subtext1)] opacity-0 group-hover/tooltip:opacity-100 transition-opacity z-10 shadow-lg text-left">
            <p className="font-semibold text-[var(--ctp-text)] mb-1">CLICK ME</p>
            <p className="mb-2">A real-time global counter tracking every click from everyone visiting this site. Completely pointless, yet oddly satisfying.</p>
            <p className="text-[var(--ctp-overlay0)]">Powered by <a href="https://v2.jasoncameron.dev/abacus/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--accent-color)] transition-colors">Abacus</a></p>
</div>
        </div>
        </div>
        <p className="text-5xl font-mono font-bold text-[var(--accent-color)] mb-6">
          {isLoading ? '...' : clickCount.toLocaleString()}
        </p>
        <button
onClick={() => {
            fetch('https://abacus.jasoncameron.dev/hit/zam.is-a.dev/clicks')
              .then(res => res.json())
.then(data => {
                setClickCount(data.value);
                localStorage.setItem('portfolio-clicks', String(data.value));
                const mine = parseInt(localStorage.getItem('portfolio-clicks-mine') || '0') + 1;
                localStorage.setItem('portfolio-clicks-mine', String(mine));
                setMyClicks(mine);
              })
              .catch(() => {
                setClickCount(c => {
                  const next = c + 1;
                  localStorage.setItem('portfolio-clicks', String(next));
                  return next;
                });
                const mine = parseInt(localStorage.getItem('portfolio-clicks-mine') || '0') + 1;
                localStorage.setItem('portfolio-clicks-mine', String(mine));
                setMyClicks(mine);
              });
          }}
          className="w-full py-3 rounded-lg bg-[var(--accent-color)] text-[var(--ctp-crust)] hover:opacity-80 transition-opacity mb-4 font-bold tracking-widest text-sm"
        >
          CLICK ME
        </button>
<p className="text-sm text-[var(--ctp-subtext0)]">you've clicked <span className="text-[var(--accent-color)]">{myClicks.toLocaleString()}</span> times</p>
      </div>

{/* View Counter */}
      <div className="bg-[var(--ctp-surface0)] rounded-xl p-5 border border-[var(--ctp-surface1)] relative group/view">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[var(--ctp-text)]">View Counter</h3>
<div className="relative group/tooltip2">
            <span className="text-[var(--ctp-overlay0)] cursor-pointer hover:text-[var(--accent-color)] transition-colors">ⓘ</span>
            <div className="absolute right-0 top-6 w-64 bg-[var(--ctp-mantle)] border border-[var(--ctp-surface1)] rounded-lg p-3 text-xs text-[var(--ctp-subtext1)] opacity-0 group-hover/tooltip2:opacity-100 transition-opacity z-10 shadow-lg">
              <p className="mb-2">A real-time global counter tracking every visit from anyone, anywhere.</p>
              <p className="text-[var(--ctp-overlay0)]">Powered by <a href="https://v2.jasoncameron.dev/abacus/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--accent-color)] transition-colors">Abacus</a></p>
            </div>
          </div>
        </div>
        <ViewCounter />
      </div>

      {/* Let's Connect */}
      <div className="bg-[var(--ctp-surface0)] rounded-xl p-5 border border-[var(--ctp-surface1)]">
        <h3 className="text-lg font-semibold text-[var(--ctp-text)] mb-2">Let's Connect</h3>
        <p className="text-sm text-[var(--ctp-subtext0)] mb-4">
          Always open to interesting projects, collaborations, and conversations.
        </p>
        <div className="space-y-2">
          <a
            href="https://cal.com/z-h-c/15min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[var(--accent-color)] text-[var(--ctp-crust)] hover:opacity-90 transition-opacity"
          >
            <Calendar size={18} />
            <span>Book a Chat</span>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=condenuevozamuelharis@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[var(--ctp-surface1)] text-[var(--ctp-text)] hover:bg-[var(--ctp-surface2)] transition-colors"
          >
            <Mail size={18} />
            <span>Send Email</span>
          </a>
        </div>
      </div>

      {/* Based In */}
      <div className="bg-[var(--ctp-surface0)] rounded-xl p-5 border border-[var(--ctp-surface1)]">
        <h3 className="text-lg font-semibold text-[var(--ctp-text)] mb-2">Based in</h3>
        <p className="text-[var(--ctp-subtext1)] mb-3">Moncada, Tarlac, Philippines</p>
<div className="rounded-lg overflow-hidden mb-3" style={{ filter: 'invert(1) hue-rotate(180deg)' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30722.080111987714!2d120.57395641688395!3d15.737378386107979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1773305339330!5m2!1sen!2sph"
            width="100%"
            height="150"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex items-center gap-2 text-sm text-[var(--ctp-subtext0)]">
          <Clock size={14} />
          <span className="font-mono">{currentTime.toLocaleTimeString()}</span>
        </div>
      </div>

      {/* Recent Commits */}
      <div className="bg-[var(--ctp-surface0)] rounded-xl p-5 border border-[var(--ctp-surface1)]">
        <h3 className="text-lg font-semibold text-[var(--ctp-text)] mb-4">Recent Commits</h3>
        <div className="space-y-3">
          {commits.map((commit, i) => (
            <div key={i} className="flex items-center justify-between text-sm">
              <div>
                <span className="text-[var(--ctp-text)] font-medium">{commit.repo}</span>
                <span className="text-[var(--ctp-overlay0)]"> : {commit.message}</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[var(--ctp-green)]">+{commit.added}</span>
                <span className="text-[var(--ctp-red)]">/-{commit.removed}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-1 h-2">
          <div className="flex-1 bg-[var(--ctp-red)] rounded-l"></div>
          <div className="flex-1 bg-[var(--ctp-yellow)]"></div>
          <div className="flex-1 bg-[var(--ctp-green)]"></div>
          <div className="flex-1 bg-[var(--ctp-blue)] rounded-r"></div>
        </div>
        <a 
          href="https://github.com/CondenuevoZamuelHaris" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 flex items-center gap-2 text-sm text-[var(--accent-color)] hover:underline"
        >
          View on GitHub <ExternalLink size={14} />
        </a>
      </div>
{/* Latest Posts */}
      <div className="bg-[var(--ctp-surface0)] rounded-xl p-5 border border-[var(--ctp-surface1)] md:col-span-2 lg:col-span-3">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-[var(--ctp-text)]">Latest Posts</h3>
          <Link to="/posts" className="text-[var(--ctp-overlay0)] hover:text-[var(--accent-color)] transition-colors">
            <ExternalLink size={16} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post, i) => (
            <Link 
              key={i} 
              to="/posts"
              className="p-4 rounded-lg bg-[var(--ctp-surface1)] hover:bg-[var(--ctp-surface2)] transition-colors group"
            >
              <h4 className="text-[var(--ctp-text)] font-medium mb-2 group-hover:text-[var(--accent-color)] transition-colors">
                {post.title}
              </h4>
              <p className="text-xs text-[var(--ctp-overlay0)]">{post.date}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// About Page
function About() {
  const [activeTab, setActiveTab] = useState<'story' | 'interests' | 'reflection'>('story');

  const storySections = [
    {
      number: '01',
      title: 'Who I Am',
      content: "I'm a 19-year-old aspiring Software Engineer from Tarlac, Philippines. Currently studying BS Computer Science at ICF Interworld Colleges Foundation, living with my grandmother and learning to code. I'm passionate about creating software that makes people's lives easier."
    },
    {
      number: '02',
      title: 'My Certifications',
      content: "I'm also a TESDA NC II passer in Computer Systems Servicing with knowledge in programming, networking, and computer maintenance. An Advanced ROTC Cadet trained in discipline, teamwork, and leadership."
    },
    {
      number: '03',
      title: 'Beyond Coding',
      content: "When I'm not coding, you'll find me skateboarding, ice skating, or spending time with friends and family. These activities keep me balanced and inspired."
    },
    {
      number: '04',
      title: 'My Goals',
      content: 'I aspire to become a full-stack developer who can build meaningful applications that help people. I believe in continuous learning and pushing my limits every day.'
    }
  ];

  const interests = [
    { icon: Bike, label: 'Skateboarding', description: 'My passion and therapy' },
    { icon: Dumbbell, label: 'Ice Skating', description: 'Grace on ice' },
    { icon: Cpu, label: 'Swimming', description: 'Finding peace underwater' },
    { icon: Code2, label: 'Computer Coding', description: 'Building the future' },
    { icon: Shield, label: 'ROTC', description: 'Discipline and service' },
    { icon: Gamepad2, label: 'Motorcycles', description: 'Freedom on two wheels' },
  ];

  const reflections = [
    {
      title: 'Psychological Self',
      content: 'I am an introvert who finds comfort in solitude but also values deep connections with others. I tend to overthink sometimes, but I am working on being more present in the moment.'
    },
    {
      title: 'Physical Self',
      content: 'My skateboarding accident taught me to appreciate my body more. I am working on staying active and healthy, understanding that physical well-being affects everything else.'
    },
    {
      title: 'Material Self',
      content: 'I have learned that possessions do not define me. I value experiences over things and try to live minimally while investing in tools that help me grow.'
    },
    {
      title: 'Political Self',
      content: 'I believe in using technology for social good. I am still forming my political views but I care deeply about equality, education, and environmental issues.'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-[var(--ctp-subtext0)] mb-6">
          <Link to="/" className="hover:text-[var(--accent-color)]">~</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--ctp-text)]">about</span>
          <span className="mx-2">/</span>
        </div>

        <h1 className="text-4xl font-bold text-[var(--ctp-text)] mb-2">About Me</h1>
        <p className="text-[var(--ctp-subtext0)] mb-8">Get to know the person behind the code.</p>

        {/* Profile Card */}
        <div className="bg-[var(--ctp-surface0)] rounded-xl p-6 border border-[var(--ctp-surface1)] mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <img 
              src="/profile.png" 
              alt="Zamuel Haris" 
              className="w-32 h-32 rounded-full object-cover border-2 border-[var(--accent-color)]"
            />
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-[var(--ctp-text)] mb-1">Zamuel Haris C. Condenuevo</h2>
              <p className="text-[var(--ctp-subtext0)] mb-2">"Zam" • 19 years old • Moncada, Tarlac, Philippines</p>
              <p className="text-[var(--ctp-subtext1)] text-sm mb-4">
                Born on June 13, 2006. My name comes from Zarla (mother) + Joel (father) + Charisse (grandmother). 
                I have a younger sister named Ziana Renisse.
              </p>
              <p className="text-[var(--ctp-subtext1)] text-sm mb-4">
                Currently studying at <span className="text-[var(--accent-color)]">ICF Interworld Colleges Foundation</span>, living with my grandmother. 
                I learned to be self-sufficient early on — cooking for myself and managing my own life.
              </p>
              <div className="flex gap-3 justify-center md:justify-start">
                <a href="https://github.com/CondenuevoZamuelHaris" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--ctp-surface1)] text-[var(--ctp-text)] hover:text-[var(--accent-color)] transition-colors text-sm">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/zamuel-haris-condenuevo-a030aa3b6/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--ctp-surface1)] text-[var(--ctp-text)] hover:text-[var(--accent-color)] transition-colors text-sm">
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=condenuevozamuelharis@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--ctp-surface1)] text-[var(--ctp-text)] hover:text-[var(--accent-color)] transition-colors text-sm">
                  <Mail size={16} /> Email
                </a>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="text-[var(--ctp-overlay0)]">/</span>
                <span className="text-[var(--ctp-subtext0)]">ICF Interworld Colleges Foundation</span>
                <span className="text-[var(--accent-color)]">(Student)</span>
                <span className="text-[var(--ctp-overlay0)]">/</span>
                <span className="text-[var(--ctp-subtext0)]">Self-Taught</span>
                <span className="text-[var(--ctp-yellow)]">(Developer)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {[
            { id: 'story', label: 'My Story' },
            { id: 'interests', label: 'Interests' },
            { id: 'reflection', label: 'Self Reflection' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                activeTab === tab.id
                  ? 'bg-[var(--accent-color)] text-[var(--ctp-crust)]'
                  : 'bg-[var(--ctp-surface0)] text-[var(--ctp-text)] hover:bg-[var(--ctp-surface1)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[var(--ctp-surface0)] rounded-xl p-6 border border-[var(--ctp-surface1)]">
          {activeTab === 'story' && (
            <div className="space-y-6">
              {storySections.map((section) => (
                <div key={section.number} className="flex gap-4">
                  <span className="text-3xl font-bold text-[var(--accent-color)] opacity-50">{section.number}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--ctp-text)] mb-2">{section.title}</h3>
                    <p className="text-[var(--ctp-subtext1)] leading-relaxed">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'interests' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {interests.map((interest) => (
                <div key={interest.label} className="p-4 rounded-lg bg-[var(--ctp-surface1)] hover:bg-[var(--ctp-surface2)] transition-colors">
                  <interest.icon className="text-[var(--accent-color)] mb-3" size={24} />
                  <h3 className="font-semibold text-[var(--ctp-text)] mb-1">{interest.label}</h3>
                  <p className="text-sm text-[var(--ctp-subtext0)]">{interest.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'reflection' && (
            <div className="grid sm:grid-cols-2 gap-4">
              {reflections.map((reflection) => (
                <div key={reflection.title} className="p-4 rounded-lg bg-[var(--ctp-surface1)]">
                  <h3 className="font-semibold text-[var(--ctp-text)] mb-2">{reflection.title}</h3>
                  <p className="text-sm text-[var(--ctp-subtext0)] leading-relaxed">{reflection.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// Projects Page
function Projects() {
  const projects = [
    {
      name: 'zamuelhc/portfolio',
      description: 'Personal portfolio website built with React and TypeScript showcasing my journey as a developer.',
      stars: 12,
      forks: 3,
      tags: ['react', 'typescript', 'tailwind', 'portfolio'],
      date: 'March 2025'
    },
    {
      name: 'zamuelhc/student-dashboard',
      description: 'A dashboard for students to track assignments, grades, and schedules with a clean interface.',
      stars: 8,
      forks: 2,
      tags: ['javascript', 'html', 'css'],
      date: 'February 2025'
    },
    {
      name: 'zamuelhc/todo-app',
      description: 'A simple yet powerful todo application with dark mode and local storage.',
      stars: 5,
      forks: 1,
      tags: ['react', 'javascript', 'css'],
      date: 'January 2025'
    },
    {
      name: 'zamuelhc/weather-app',
      description: 'Real-time weather application using OpenWeatherMap API.',
      stars: 3,
      forks: 0,
      tags: ['javascript', 'api', 'html'],
      date: 'December 2024'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--ctp-text)] mb-2">Projects</h1>
        <p className="text-[var(--ctp-subtext0)] mb-8">Things I've built along my journey.</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="window-card hover:border-[var(--accent-color)] transition-colors">
              <div className="window-header">
                <div className="window-dot window-dot-red"></div>
                <div className="window-dot window-dot-yellow"></div>
                <div className="window-dot window-dot-green"></div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-[var(--ctp-text)]">{project.name}</h3>
                  <div className="flex items-center gap-3 text-sm text-[var(--ctp-subtext0)]">
                    <span className="flex items-center gap-1">
                      <Heart size={14} /> {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <Code2 size={14} /> {project.forks}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--ctp-subtext1)] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className={`px-2 py-1 rounded text-xs tag-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-[var(--ctp-overlay0)]">{project.date}</p>
                  <a 
                    href={`https://github.com/${project.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-[var(--accent-color)] hover:underline"
                  >
                    View on GitHub <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Pics Page
function Pics() {
  const [filter, setFilter] = useState('all');
  const [hearts, setHearts] = useState<Record<number, number>>({});
  const [heartAnimations, setHeartAnimations] = useState<Record<number, boolean>>({});

  const filters = ['all', 'skateboarding', 'adventures', 'tech', 'rotc', 'friends'];

  const pics = [
    { id: 1, category: 'skateboarding', placeholder: 'Skateboarding moment' },
    { id: 2, category: 'adventures', placeholder: 'Adventure time' },
    { id: 3, category: 'tech', placeholder: 'Coding setup' },
    { id: 4, category: 'rotc', placeholder: 'ROTC training' },
    { id: 5, category: 'friends', placeholder: 'With friends' },
    { id: 6, category: 'skateboarding', placeholder: 'Skate park' },
    { id: 7, category: 'adventures', placeholder: 'Exploring' },
    { id: 8, category: 'tech', placeholder: 'Project work' },
    { id: 9, category: 'friends', placeholder: 'Good times' },
  ];

  const filteredPics = filter === 'all' ? pics : pics.filter(p => p.category === filter);

  const handleDoubleClick = (id: number) => {
    setHearts(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setHeartAnimations(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setHeartAnimations(prev => ({ ...prev, [id]: false }));
    }, 800);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
<h1 className="text-4xl font-bold text-[var(--ctp-text)] mb-2">
          pics <span className="text-sm font-normal text-[var(--ctp-overlay0)] ml-1">[{filteredPics.length}]</span>
        </h1>
        <p className="text-[var(--ctp-subtext0)] mb-6">Moments from my life — skateboarding, adventures, tech, ROTC, and time with friends.</p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg text-sm capitalize transition-colors ${
                filter === f
                  ? 'bg-[var(--accent-color)] text-[var(--ctp-crust)]'
                  : 'bg-[var(--ctp-surface0)] text-[var(--ctp-text)] hover:bg-[var(--ctp-surface1)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {filteredPics.map((pic, index) => (
            <div 
              key={pic.id} 
              className="masonry-item relative group cursor-pointer"
              onDoubleClick={() => handleDoubleClick(pic.id)}
            >
              <div className={`bg-[var(--ctp-surface0)] rounded-lg overflow-hidden ${
                index % 3 === 0 ? 'h-64' : index % 3 === 1 ? 'h-48' : 'h-56'
              }`}>
                <div className="w-full h-full bg-gradient-to-br from-[var(--ctp-surface1)] to-[var(--ctp-surface2)] flex items-center justify-center">
                  <span className="text-[var(--ctp-overlay0)] text-sm">{pic.placeholder}</span>
                </div>
              </div>
              
              {/* Heart Animation */}
              {heartAnimations[pic.id] && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <Heart 
                    size={64} 
                    className="text-[var(--ctp-red)] fill-[var(--ctp-red)] animate-heart"
                  />
                </div>
              )}

              {/* Heart Count */}
              {hearts[pic.id] > 0 && (
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/50 px-2 py-1 rounded-full">
                  <Heart size={14} className="text-[var(--ctp-red)] fill-[var(--ctp-red)]" />
                  <span className="text-white text-sm">{hearts[pic.id]}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Posts Page
function Posts() {
  const posts = [
    {
      title: 'My Journey Into Coding',
      excerpt: 'How I went from a curious kid taking apart gadgets to a passionate developer building web applications.',
      tags: ['coding', 'journey', 'personal'],
      readTime: '5 min read',
      date: 'Mar 10, 2025'
    },
    {
      title: 'Why I Love Skateboarding',
      excerpt: 'Skateboarding is more than just a hobby for me. It taught me resilience, patience, and the value of getting back up.',
      tags: ['skateboarding', 'lifestyle'],
      readTime: '4 min read',
      date: 'Feb 28, 2025'
    },
    {
      title: 'Lessons from My Skating Accident',
      excerpt: 'Sometimes life throws you off balance. Here is what I learned from my accident and recovery.',
      tags: ['personal', 'growth'],
      readTime: '6 min read',
      date: 'Jan 15, 2025'
    },
    {
      title: 'Top 5 Games That Inspired Me',
      excerpt: 'Video games have been a huge inspiration for my creative and problem-solving skills.',
      tags: ['gaming', 'inspiration'],
      readTime: '3 min read',
      date: 'Dec 20, 2024'
    },
    {
      title: 'Hello World',
      excerpt: 'The traditional first post. Welcome to my corner of the internet!',
      tags: ['hello', 'welcome'],
      readTime: '1 min read',
      date: 'Dec 1, 2024'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--ctp-text)] mb-2">Posts</h1>
        <p className="text-[var(--ctp-subtext0)] mb-8">Thoughts, stories, and things I've learned.</p>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <article 
              key={index} 
              className="bg-[var(--ctp-surface0)] rounded-xl p-6 border border-[var(--ctp-surface1)] hover:border-[var(--accent-color)] transition-colors group"
            >
              <div className="flex items-center gap-2 text-sm text-[var(--ctp-overlay0)] mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold text-[var(--ctp-text)] mb-2 group-hover:text-[var(--accent-color)] transition-colors">
                {post.title}
              </h2>
              <p className="text-[var(--ctp-subtext1)] mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 rounded bg-[var(--ctp-surface1)] text-[var(--ctp-subtext0)] text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

// Terminal Page
function Terminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [output, setOutput] = useState<{ type: 'input' | 'output'; content: string | React.ReactNode }[]>([]);
  const outputEndRef = useRef<HTMLDivElement>(null);

  const banner = `
███████╗ █████╗ ███╗   ███╗██╗   ██╗███████╗██╗         ██╗  ██╗ █████╗ ██████╗ ██╗███████╗
╚══███╔╝██╔══██╗████╗ ████║██║   ██║██╔════╝██║         ██║  ██║██╔══██╗██╔══██╗██║██╔════╝
  ███╔╝ ███████║██╔████╔██║██║   ██║█████╗  ██║         ███████║███████║██████╔╝██║███████╗
 ███╔╝  ██╔══██║██║╚██╔╝██║██║   ██║██╔══╝  ██║         ██╔══██║██╔══██║██╔══██╗██║╚════██║
███████╗██║  ██║██║ ╚═╝ ██║╚██████╔╝███████╗███████╗    ██║  ██║██║  ██║██║  ██║██║███████║
╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝ ╚═════╝ ╚══════╝╚══════╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝
                                                                                              
  ZAMUEL HARIS TERMINAL v1.0.0 - Type 'help' for available commands
  `;

  const commands: Record<string, { desc: string; action: () => string | React.ReactNode }> = {
    help: {
      desc: 'Display this help message',
      action: () => `
Available commands:
  about         Display information about me
  banner        Display the welcome banner
  bing          Search Bing for the provided query
  cat           Concatenate and display file contents
  cd            Change directory
  code          Open Visual Studio Code
  date          Print the current date and time
  donate        Show ways to support my work
  duckduckgo    Search DuckDuckGo for the provided query
  echo          Print the provided string
  emacs         Open the emacs text editor
  email         Send me an email
  github        Open my Github profile
  google        Search Google for the provided query
  help          Display this help message
  linkedin      Open my LinkedIn profile
  ls            List files and directories
  nano          Open the nano text editor
  nc2           Open my National Certificate II
  nvim          Open the nvim text editor
  portfolio     Open my portfolio site
  projects      List some of my projects
  pwd           Print the current working directory
  quote         Get a random quote
  reddit        Search Reddit for the provided query
  repo          Open the GitHub repository
  resume        Open my resume in your browser
  sudo          Execute a command as the superuser
  sumfetch      Display general summary of my info
  vi            Open the vi text editor
  vim           Open the vim text editor
  weather       Get the weather for a specific city
  whoami        Print the current user
      `
    },
    banner: {
      desc: 'Display the welcome banner',
      action: () => banner
    },
    about: {
      desc: 'Display information about me',
      action: () => `
Hi, I'm Zamuel Haris Condenuevo!

I'm a student at ICF Interworld Colleges Foundation and a self-taught developer.
My journey into coding started after a skateboarding accident that gave me time
to discover my passion for technology.

When I'm not coding, you can find me:
  • Skateboarding
  • Ice skating
  • Swimming
  • Training with ROTC
  • Riding motorcycles

Feel free to reach out if you want to collaborate or just chat!
      `
    },
    sumfetch: {
      desc: 'Display general summary of my info',
      action: () => `
    ╭──────────────────────────────────────╮
    │                                      │
    │   ZAMUEL HARIS CONDENUEVO            │
    │   ─────────────────────────          │
    │   Student & Developer                │
    │                                      │
    │   📍 Moncada, Tarlac, Philippines    │
    │   📧 condenuevozamuelharis@gmail.com │
    │   💻 github.com/CondenuevoZamuelHaris│
    │                                      │
    │   Tech Stack:                        │
    │   • React / TypeScript               │
    │   • JavaScript / HTML / CSS          │
    │   • Tailwind CSS                     │
    │   • Node.js                          │
    │                                      │
    ╰──────────────────────────────────────╯
      `
    },
    date: {
      desc: 'Print the current date and time',
      action: () => new Date().toString()
    },
    whoami: {
      desc: 'Print the current user',
      action: () => 'guest'
    },
    pwd: {
      desc: 'Print the current working directory',
      action: () => '/home/guest/zamuel-portfolio'
    },
    ls: {
      desc: 'List files and directories',
      action: () => 'about.md  projects/  pics/  posts/  resume.pdf  nc2.pdf'
    },
    github: {
      desc: 'Open my Github profile',
      action: () => {
        window.open('https://github.com/CondenuevoZamuelHaris', '_blank');
        return 'Opening GitHub profile...';
      }
    },
    linkedin: {
      desc: 'Open my LinkedIn profile',
      action: () => {
        window.open('https://www.linkedin.com/in/zamuel-haris-condenuevo-a030aa3b6/', '_blank');
        return 'Opening LinkedIn profile...';
      }
    },
    email: {
      desc: 'Send me an email',
      action: () => {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=condenuevozamuelharis@gmail.com', '_blank');
        return 'Opening email composer...';
      }
    },
    portfolio: {
      desc: 'Open my portfolio site',
      action: () => {
        window.open('/', '_blank');
        return 'Opening portfolio...';
      }
    },
    resume: {
      desc: 'Open my resume in your browser',
      action: () => {
        window.open('/resume.pdf', '_blank');
        return 'Opening resume...';
      }
    },
    nc2: {
      desc: 'Open my National Certificate II',
      action: () => {
        window.open('/nc2.pdf', '_blank');
        return 'Opening National Certificate II...';
      }
    },
    sudo: {
      desc: 'Execute a command as the superuser',
      action: () => {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
        return 'Nice try! 🎵 Never gonna give you up...';
      }
    },
    quote: {
      desc: 'Get a random quote',
      action: () => '"Don\'t let yesterday take up too much of today." — Will Rogers'
    },
    projects: {
      desc: 'List some of my projects',
      action: () => `
Featured Projects:
  • zamuelhc/portfolio - Personal portfolio website
  • zamuelhc/student-dashboard - Student tracking dashboard
  • zamuelhc/todo-app - Task management app
  • zamuelhc/weather-app - Real-time weather application

Type 'repo' to view the source code on GitHub.
      `
    },
    repo: {
      desc: 'Open the GitHub repository',
      action: () => {
        window.open('https://github.com/CondenuevoZamuelHaris', '_blank');
        return 'Opening GitHub repositories...';
      }
    },
    echo: {
      desc: 'Print the provided string',
      action: () => ''
    },
    cat: {
      desc: 'Concatenate and display file contents',
      action: () => 'Meow! 🐱'
    },
    google: {
      desc: 'Search Google for the provided query',
      action: () => 'Usage: google [search query]'
    },
    bing: {
      desc: 'Search Bing for the provided query',
      action: () => 'Usage: bing [search query] (you sure?)'
    },
    duckduckgo: {
      desc: 'Search DuckDuckGo for the provided query',
      action: () => 'Usage: duckduckgo [search query]'
    },
    reddit: {
      desc: 'Search Reddit for the provided query',
      action: () => 'Usage: reddit [search query]'
    },
    weather: {
      desc: 'Get the weather for a specific city',
      action: () => 'Usage: weather [city]'
    },
    code: {
      desc: 'Open Visual Studio Code',
      action: () => 'VS Code: It looks like you\'re trying to write code. Need help? 😄'
    },
    vim: {
      desc: 'Open the vim text editor',
      action: () => 'How do I exit vim? Asking for a friend... 😅'
    },
    nvim: {
      desc: 'Open the nvim text editor',
      action: () => 'Neovim: Vim but with better defaults!'
    },
    vi: {
      desc: 'Open the vi text editor',
      action: () => 'Classic vi. Respect. 🫡'
    },
    nano: {
      desc: 'Open the nano text editor',
      action: () => 'Nano: The editor for the rest of us!'
    },
    emacs: {
      desc: 'Open the emacs text editor',
      action: () => 'Emacs: A great operating system, lacking only a decent editor 😉'
    },
    cd: {
      desc: 'Change directory',
      action: () => 'You are already where you need to be. 🏠'
    },
    donate: {
      desc: 'Show ways to support my work',
      action: () => 'Thank you for your interest! Reach out via email to discuss. 💙'
    },
  };

  useEffect(() => {
    // Show banner on mount
    setOutput([{ type: 'output', content: banner }]);
  }, []);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newOutput = [
      ...output,
      { type: 'input' as const, content: input }
    ];

    const [cmd, ...args] = input.trim().split(' ');
    const command = commands[cmd.toLowerCase()];

    if (command) {
      if (cmd.toLowerCase() === 'echo') {
        newOutput.push({ type: 'output', content: args.join(' ') || '' });
      } else if (cmd.toLowerCase() === 'google' && args.length > 0) {
        window.open(`https://google.com/search?q=${encodeURIComponent(args.join(' '))}`, '_blank');
        newOutput.push({ type: 'output', content: `Searching Google for: ${args.join(' ')}` });
      } else if (cmd.toLowerCase() === 'bing' && args.length > 0) {
        window.open(`https://bing.com/search?q=${encodeURIComponent(args.join(' '))}`, '_blank');
        newOutput.push({ type: 'output', content: `Searching Bing for: ${args.join(' ')}` });
      } else if (cmd.toLowerCase() === 'duckduckgo' && args.length > 0) {
        window.open(`https://duckduckgo.com/?q=${encodeURIComponent(args.join(' '))}`, '_blank');
        newOutput.push({ type: 'output', content: `Searching DuckDuckGo for: ${args.join(' ')}` });
      } else if (cmd.toLowerCase() === 'reddit' && args.length > 0) {
        window.open(`https://reddit.com/search/?q=${encodeURIComponent(args.join(' '))}`, '_blank');
        newOutput.push({ type: 'output', content: `Searching Reddit for: ${args.join(' ')}` });
      } else if (cmd.toLowerCase() === 'weather' && args.length > 0) {
        window.open(`https://wttr.in/${encodeURIComponent(args.join(' '))}`, '_blank');
        newOutput.push({ type: 'output', content: `Getting weather for: ${args.join(' ')}` });
      } else {
        newOutput.push({ type: 'output', content: command.action() });
      }
    } else {
      newOutput.push({ type: 'output', content: `Command not found: ${cmd}. Type 'help' for available commands.` });
    }

    setOutput(newOutput);
    setHistory([...history, input]);
    setInput('');
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[var(--ctp-text)] mb-2">Terminal</h1>
        <p className="text-[var(--ctp-subtext0)] mb-8">Type 'help' to see available commands. Try 'sudo' if you're feeling adventurous!</p>

        <div className="window-card">
          <div className="window-header">
            <div className="window-dot window-dot-red"></div>
            <div className="window-dot window-dot-yellow"></div>
            <div className="window-dot window-dot-green"></div>
            <span className="ml-2 text-sm text-[var(--ctp-subtext0)]">zamuel@portfolio: ~</span>
          </div>
          <div className="p-4 bg-[var(--ctp-crust)] min-h-[500px] max-h-[600px] overflow-y-auto font-mono text-sm">
            {output.map((item, index) => (
              <div key={index} className="mb-2">
                {item.type === 'input' ? (
                  <div className="flex items-center gap-2">
                    <span className="text-[var(--ctp-green)]">guest@zamuel-portfolio</span>
                    <span className="text-[var(--ctp-text)]">:</span>
                    <span className="text-[var(--ctp-blue)]">~</span>
                    <span className="text-[var(--ctp-text)]">$</span>
                    <span className="text-[var(--ctp-text)]">{item.content}</span>
                  </div>
                ) : (
                  <pre className="text-[var(--ctp-subtext1)] whitespace-pre-wrap terminal-output">{item.content}</pre>
                )}
              </div>
            ))}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <span className="text-[var(--ctp-green)]">guest@zamuel-portfolio</span>
              <span className="text-[var(--ctp-text)]">:</span>
              <span className="text-[var(--ctp-blue)]">~</span>
              <span className="text-[var(--ctp-text)]">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent text-[var(--ctp-text)] outline-none"
                autoFocus
                spellCheck={false}
              />
            </form>
            <div ref={outputEndRef} />
          </div>
        </div>
      </div>
    </div>
  );
}

// Resume Page
function Resume() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-[var(--ctp-subtext0)] mb-6">
          <Link to="/" className="hover:text-[var(--accent-color)]">~</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--ctp-text)]">resume</span>
          <span className="mx-2">/</span>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-[var(--ctp-text)]">My Resume</h1>
          <a 
            href="/resume.pdf" 
            download="CondenuevoZamuelHaris_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-color)] text-[var(--ctp-crust)] hover:opacity-90 transition-opacity"
          >
            <FileText size={18} />
            Download PDF
          </a>
        </div>

        <div className="window-card">
          <div className="window-header">
            <div className="window-dot window-dot-red"></div>
            <div className="window-dot window-dot-yellow"></div>
            <div className="window-dot window-dot-green"></div>
            <span className="ml-2 text-sm text-[var(--ctp-subtext0)]">resume.pdf</span>
          </div>
          <div className="p-0">
            <iframe
              src="/resume.pdf"
              width="100%"
              height="800"
              className="border-0"
              title="Resume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// NC2 Page
function NC2() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm text-[var(--ctp-subtext0)] mb-6">
          <Link to="/" className="hover:text-[var(--accent-color)]">~</Link>
          <span className="mx-2">/</span>
          <span className="text-[var(--ctp-text)]">nc2</span>
          <span className="mx-2">/</span>
        </div>

        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-[var(--ctp-text)]">National Certificate II</h1>
          <a 
            href="/nc2.pdf" 
            download="NC2_CondenuevoZamuelHaris.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-color)] text-[var(--ctp-crust)] hover:opacity-90 transition-opacity"
          >
            <Award size={18} />
            Download PDF
          </a>
        </div>

        <div className="window-card">
          <div className="window-header">
            <div className="window-dot window-dot-red"></div>
            <div className="window-dot window-dot-yellow"></div>
            <div className="window-dot window-dot-green"></div>
            <span className="ml-2 text-sm text-[var(--ctp-subtext0)]">NC2.pdf</span>
          </div>
          <div className="p-0">
            <iframe
              src="/nc2.pdf"
              width="100%"
              height="800"
              className="border-0"
              title="National Certificate II"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="border-t border-[var(--ctp-surface0)] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[var(--ctp-subtext0)] text-sm">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="text-[var(--ctp-text)] font-semibold">Zamuel Haris Condenuevo</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--ctp-green)] animate-pulse"></span>
            <span className="text-[var(--ctp-subtext0)]">All Services Nominal</span>
          </div>

          <div className="flex items-center gap-4 text-sm text-[var(--ctp-subtext0)]">
            <span className="font-mono">{time.toLocaleTimeString()}</span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              Moncada, Tarlac, PH
            </span>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-6">
          <a href="https://github.com/CondenuevoZamuelHaris" target="_blank" rel="noopener noreferrer" className="text-[var(--ctp-subtext0)] hover:text-[var(--accent-color)] transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/zamuel-haris-condenuevo-a030aa3b6/" target="_blank" rel="noopener noreferrer" className="text-[var(--ctp-subtext0)] hover:text-[var(--accent-color)] transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/Condenuevo13733" target="_blank" rel="noopener noreferrer" className="text-[var(--ctp-subtext0)] hover:text-[var(--accent-color)] transition-colors">
            <Twitter size={20} />
          </a>
          <a href="https://www.instagram.com/zamuel.ito/" target="_blank" rel="noopener noreferrer" className="text-[var(--ctp-subtext0)] hover:text-[var(--accent-color)] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=condenuevozamuelharis@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[var(--ctp-subtext0)] hover:text-[var(--accent-color)] transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

// Main App
function AppContent() {
  return (
    <div className="min-h-screen bg-[var(--ctp-base)] text-[var(--ctp-text)]">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/pics" element={<Pics />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/nc2" element={<NC2 />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router basename="/">
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
