'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Info,
  Play,
  Plus,
  Search,
  UserRound,
} from 'lucide-react';

type Movie = {
  title: string;
  year: string;
  type: string;
  genre: string;
  score: string;
  description: string;
  tone: string;
  accent: string;
};

const MOVIES: Movie[] = [
  {
    title: 'Lanterns',
    year: '2026',
    type: 'Series',
    genre: 'Drama · Mystery',
    score: '81% Match',
    description: 'Two intergalactic cops, new recruit John Stewart and Lantern legend Hal Jordan, are drawn into a dark, Earth-based mystery as they investigate a murder in the American heartland.',
    tone: 'from-emerald-950 via-slate-900 to-orange-950',
    accent: '#f21d2b',
  },
  {
    title: 'The Wild Robot',
    year: '2024',
    type: 'Movie',
    genre: 'Animation · Adventure',
    score: '94% Match',
    description: 'A robot learns to survive on a remote island and discovers that connection can be built in the most unexpected places.',
    tone: 'from-cyan-950 via-sky-900 to-amber-800',
    accent: '#f59e0b',
  },
  {
    title: 'Shōgun',
    year: '2024',
    type: 'Series',
    genre: 'Drama · History',
    score: '96% Match',
    description: 'Power, loyalty, and survival collide in a sweeping story of political intrigue and culture clash.',
    tone: 'from-red-950 via-stone-900 to-yellow-950',
    accent: '#e51414',
  },
  {
    title: 'Sinners',
    year: '2025',
    type: 'Movie',
    genre: 'Horror · Thriller',
    score: '89% Match',
    description: 'A return home opens the door to a night of music, memory, and something much darker.',
    tone: 'from-zinc-950 via-red-950 to-orange-950',
    accent: '#ef4444',
  },
  {
    title: 'The Studio',
    year: '2025',
    type: 'Series',
    genre: 'Comedy',
    score: '87% Match',
    description: 'A newly appointed studio head tries to keep movies alive while navigating impossible creative egos.',
    tone: 'from-violet-950 via-slate-900 to-fuchsia-950',
    accent: '#c084fc',
  },
  {
    title: 'Dune: Part Two',
    year: '2024',
    type: 'Movie',
    genre: 'Science fiction · Adventure',
    score: '92% Match',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.',
    tone: 'from-orange-950 via-amber-900 to-stone-950',
    accent: '#f97316',
  },
  {
    title: 'The Last Signal',
    year: '2025',
    type: 'Movie',
    genre: 'Mystery · Science fiction',
    score: '84% Match',
    description: 'A signal from beyond the atmosphere turns a quiet observatory into the center of a global race against time.',
    tone: 'from-blue-950 via-indigo-950 to-black',
    accent: '#60a5fa',
  },
  {
    title: 'After the Rain',
    year: '2025',
    type: 'Movie',
    genre: 'Drama · Romance',
    score: '79% Match',
    description: 'Two old friends reconnect in a city that feels familiar, but not quite the same.',
    tone: 'from-slate-800 via-sky-950 to-purple-950',
    accent: '#a78bfa',
  },
  {
    title: 'Northbound',
    year: '2024',
    type: 'Series',
    genre: 'Crime · Thriller',
    score: '86% Match',
    description: 'A detective follows a trail across the country where every answer creates a more dangerous question.',
    tone: 'from-stone-950 via-neutral-800 to-red-950',
    accent: '#fb7185',
  },
];

const MOVIES_BASE_URL = 'https://movies.afuchat.com';

const NAV_ITEMS = [
  { label: 'Trending', href: `${MOVIES_BASE_URL}/` },
  { label: 'Movies', href: `${MOVIES_BASE_URL}/movies` },
  { label: 'TV', href: `${MOVIES_BASE_URL}/tv-shows` },
  { label: 'New', href: `${MOVIES_BASE_URL}/new-popular` },
  { label: 'Coming Soon', href: `${MOVIES_BASE_URL}/coming-soon` },
  { label: 'AI Finder', href: `${MOVIES_BASE_URL}/ai` },
  { label: 'Browse', href: `${MOVIES_BASE_URL}/browse` },
  { label: 'My List', href: `${MOVIES_BASE_URL}/my-list` },
];

function PosterCard({ movie, compact = false }: { movie: Movie; compact?: boolean }) {
  return (
    <article className={`group shrink-0 ${compact ? 'w-[148px] sm:w-[176px]' : 'w-[178px] sm:w-[210px]'}`}>
      <div className={`relative overflow-hidden rounded-md bg-gradient-to-br ${movie.tone} ${compact ? 'aspect-[2/3]' : 'aspect-[2/3.05]'} border border-white/10 shadow-lg shadow-black/30 transition duration-300 group-hover:-translate-y-1 group-hover:border-white/25`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,.28),transparent_28%),linear-gradient(155deg,transparent_35%,rgba(0,0,0,.78))]" />
        <div className="absolute left-3 top-3 rounded-sm border border-white/20 bg-black/35 px-2 py-1 text-[9px] font-bold uppercase tracking-[.2em] text-white/75">
          {movie.type}
        </div>
        <div className="absolute inset-x-3 bottom-3">
          <div className="mb-1 h-1 w-8 rounded-full" style={{ backgroundColor: movie.accent }} />
          <h3 className="text-base font-black tracking-tight text-white sm:text-lg">{movie.title}</h3>
          <p className="mt-1 text-[10px] text-white/55">{movie.year} · {movie.genre}</p>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 pt-2">
        <span className="truncate text-[10px] font-semibold text-[#f04b51]">{movie.score}</span>
        <a
          href={`${MOVIES_BASE_URL}/search?q=${encodeURIComponent(movie.title)}`}
          aria-label={`Open ${movie.title} on AfuMovies`}
          className="rounded-full p-1 text-white/40 transition hover:bg-white/10 hover:text-white"
        >
          <Plus className="h-3.5 w-3.5" />
        </a>
      </div>
    </article>
  );
}

function Rail({ title, movies, seeAllHref }: { title: string; movies: Movie[]; seeAllHref: string }) {
  return (
    <section className="mb-11">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="flex items-center gap-3 text-lg font-black uppercase tracking-tight text-white sm:text-xl">
          <span className="h-5 w-1 rounded-full bg-[#e51414]" />
          {title}
        </h2>
        <a href={seeAllHref} className="text-xs font-semibold text-[#f03940] transition hover:text-white">
          See all →
        </a>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {movies.map(movie => <PosterCard key={movie.title} movie={movie} />)}
      </div>
    </section>
  );
}

export default function AfuMoviesPage() {
  const [activeNav, setActiveNav] = useState('Trending');
  const [query, setQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const filteredMovies = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return MOVIES;
    return MOVIES.filter(movie =>
      [movie.title, movie.genre, movie.type, movie.year].join(' ').toLowerCase().includes(normalized),
    );
  }, [query]);

  const hero = MOVIES[heroIndex];
  const spotlight = filteredMovies.slice(1, 6);
  const popular = filteredMovies.slice(3).concat(MOVIES.slice(0, 3)).filter((movie, index, list) =>
    list.findIndex(item => item.title === movie.title) === index,
  ).slice(0, 6);
  const searchUrl = `${MOVIES_BASE_URL}/search?q=${encodeURIComponent(query || hero.title)}`;

  return (
    <div className="min-h-screen bg-[#101010] text-white selection:bg-[#e51414] selection:text-white">
      <header className="sticky top-0 z-50 border-b border-white/[.06] bg-[#111]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center gap-5 px-5 sm:px-8">
          <Link href="/products/afumovies" className="flex shrink-0 items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded bg-[#e51414] shadow-[0_0_20px_rgba(229,20,20,.25)]">
              <Play className="h-4 w-4 fill-white text-white" />
            </span>
            <span className="text-lg font-black tracking-tight">Afu<span className="text-[#e51414]">Movies</span></span>
          </Link>

          <nav className="hidden items-center gap-5 overflow-x-auto md:flex [scrollbar-width:none]">
            {NAV_ITEMS.map(item => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActiveNav(item.label)}
                className={`relative whitespace-nowrap py-5 text-xs font-semibold transition ${activeNav === item.label ? 'text-white' : 'text-white/55 hover:text-white'}`}
              >
                {item.label}
                {activeNav === item.label && <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e51414]" />}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <form action={`${MOVIES_BASE_URL}/search`} method="get" className={`flex items-center overflow-hidden rounded-lg bg-white/[.07] transition-all ${showSearch ? 'w-[190px] sm:w-[280px]' : 'w-9'}`}>
              <button type="button" onClick={() => setShowSearch(value => !value)} aria-label="Search movies" className="grid h-9 w-9 shrink-0 place-items-center text-white/65 hover:text-white">
                <Search className="h-4 w-4" />
              </button>
              {showSearch && (
                <input
                  autoFocus
                  name="q"
                  value={query}
                  onChange={event => setQuery(event.target.value)}
                  placeholder="Search movies, TV shows..."
                  className="w-full bg-transparent pr-3 text-xs text-white outline-none placeholder:text-white/35"
                />
              )}
            </form>
            <button type="button" aria-label="Notifications" className="hidden rounded-full p-2 text-white/55 hover:bg-white/10 hover:text-white sm:block">
              <Bell className="h-4 w-4" />
            </button>
            <button type="button" aria-label="Your profile" className="rounded-full border border-white/10 p-1.5 text-white/55 hover:border-white/30 hover:text-white">
              <UserRound className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="flex gap-5 overflow-x-auto border-t border-white/[.04] px-5 py-3 md:hidden [scrollbar-width:none]">
          {NAV_ITEMS.map(item => (
            <a key={item.label} href={item.href} onClick={() => setActiveNav(item.label)} className={`whitespace-nowrap text-xs font-semibold ${activeNav === item.label ? 'text-white' : 'text-white/45'}`}>
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <main>
        <section className="relative isolate min-h-[540px] overflow-hidden border-b border-white/[.04] sm:min-h-[610px]">
          <div className={`absolute inset-0 bg-gradient-to-br ${hero.tone}`} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_35%,rgba(100,120,130,.25),transparent_32%),linear-gradient(90deg,#101010_3%,rgba(16,16,16,.84)_35%,rgba(16,16,16,.2)_75%,#101010_100%)]" />
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="relative mx-auto flex min-h-[540px] max-w-[1440px] items-end px-5 pb-14 sm:min-h-[610px] sm:px-8 sm:pb-20">
            <div className="max-w-xl">
              <p className="mb-4 text-[10px] font-bold uppercase tracking-[.22em] text-[#ff4a51]">
                Featured title
              </p>
              <h1 className="mb-3 text-5xl font-black tracking-[-.05em] sm:text-7xl">{hero.title}</h1>
              <p className="mb-3 text-xs font-semibold text-white/75">{hero.score} <span className="mx-2 text-white/30">·</span> {hero.year} <span className="mx-2 text-white/30">·</span> {hero.type} <span className="mx-2 text-white/30">·</span> HD</p>
              <p className="mb-7 max-w-lg text-sm leading-6 text-white/60 sm:text-base">{hero.description}</p>
              <div className="flex flex-wrap gap-3">
                <a href={searchUrl} className="inline-flex items-center gap-2 rounded-md bg-[#e51414] px-5 py-3 text-sm font-bold transition hover:bg-[#ff2525]">
                  <Info className="h-4 w-4" /> View details
                </a>
                <a href={`${MOVIES_BASE_URL}/my-list`} className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20">
                  <Plus className="h-4 w-4" /> Add to My List
                </a>
              </div>
            </div>
            <div className="absolute bottom-10 right-6 hidden items-end gap-2 sm:flex">
              <button type="button" onClick={() => setHeroIndex(index => (index - 1 + MOVIES.length) % MOVIES.length)} aria-label="Previous featured title" className="rounded-full border border-white/20 p-2 text-white/70 hover:bg-white/15 hover:text-white">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-2 px-3">
                {MOVIES.slice(0, 7).map((movie, index) => (
                  <button key={movie.title} type="button" aria-label={`Show ${movie.title}`} onClick={() => setHeroIndex(index)} className={`h-1 rounded-full transition-all ${index === heroIndex ? 'w-7 bg-[#e51414]' : 'w-1.5 bg-white/35 hover:bg-white/70'}`} />
                ))}
              </div>
              <button type="button" onClick={() => setHeroIndex(index => (index + 1) % MOVIES.length)} aria-label="Next featured title" className="rounded-full border border-white/20 p-2 text-white/70 hover:bg-white/15 hover:text-white">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 sm:py-14">
          {query && (
            <section className="mb-10">
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="mb-1 text-[10px] font-bold uppercase tracking-[.2em] text-[#e51414]">Search results</p>
                  <h2 className="text-xl font-black">Results for “{query}”</h2>
                </div>
                <button type="button" onClick={() => setQuery('')} className="text-xs text-white/45 hover:text-white">Clear search</button>
              </div>
              {filteredMovies.length > 0 ? (
                <div className="flex gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {filteredMovies.map(movie => <PosterCard key={movie.title} movie={movie} compact />)}
                </div>
              ) : (
                <div className="rounded-lg border border-white/10 bg-white/[.03] px-5 py-10 text-center text-sm text-white/45">No titles found. Try a different search.</div>
              )}
            </section>
          )}

          <Rail title="In the spotlight" movies={spotlight.length ? spotlight : MOVIES.slice(1, 6)} seeAllHref={`${MOVIES_BASE_URL}/browse`} />
          <Rail title={activeNav === 'Trending' ? 'Trending now' : activeNav} movies={popular} seeAllHref={`${MOVIES_BASE_URL}/browse`} />

          <section className="mb-10 rounded-xl border border-white/10 bg-gradient-to-r from-[#261012] via-[#161616] to-[#111] p-6 sm:p-10">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#ff4a51]">AfuMovies platform</p>
                <h2 className="mb-2 text-2xl font-black tracking-tight sm:text-3xl">Go deeper on every title.</h2>
                <p className="max-w-xl text-sm leading-6 text-white/50">Explore cast, crew, ratings, trailers, box office, keywords, and where to watch on the full AfuMovies library.</p>
              </div>
              <a href="https://movies.afuchat.com" target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-md border border-[#e51414]/70 px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e51414]">
                Open AfuMovies →
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}