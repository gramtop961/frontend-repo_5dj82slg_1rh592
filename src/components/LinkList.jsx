import React from 'react';
import { Link as LinkIcon, Globe, Github, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

const links = [
  {
    label: 'Portfolio Website',
    href: 'https://example.com',
    description: 'Case studies, projects, and experiments',
    icon: Globe,
    accent: 'from-indigo-500 to-sky-500',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/',
    description: 'Open-source and code playgrounds',
    icon: Github,
    accent: 'from-slate-500 to-zinc-400',
  },
  {
    label: 'Twitter / X',
    href: 'https://twitter.com/',
    description: 'Thoughts, threads, and dev tips',
    icon: Twitter,
    accent: 'from-sky-500 to-cyan-400',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    description: 'Resume, experience, and updates',
    icon: Linkedin,
    accent: 'from-blue-600 to-indigo-500',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/',
    description: 'Tutorials and demos',
    icon: Youtube,
    accent: 'from-rose-500 to-orange-500',
  },
  {
    label: 'Newsletter',
    href: 'mailto:hello@example.com',
    description: 'Get monthly insights',
    icon: Mail,
    accent: 'from-emerald-500 to-teal-500',
  },
];

export default function LinkList() {
  return (
    <section className="mx-auto mt-6 w-full max-w-2xl">
      <div className="mb-2 flex items-center gap-2 text-white/70">
        <LinkIcon className="h-4 w-4" />
        <span className="text-xs uppercase tracking-wider">Featured Links</span>
      </div>
      <ul className="grid gap-3">
        {links.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.5)]"
            >
              <div className={`pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r ${item.accent}`} />
              <div className="relative z-10 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/10 text-white shadow-inner">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="font-medium text-white">{item.label}</span>
                  <span className="text-xs text-white/70">{item.description}</span>
                </div>
                <svg
                  className="h-5 w-5 text-white/60 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
