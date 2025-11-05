import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

const socials = [
  { icon: Github, href: 'https://github.com/' },
  { icon: Twitter, href: 'https://twitter.com/' },
  { icon: Instagram, href: 'https://instagram.com/' },
  { icon: Linkedin, href: 'https://linkedin.com/' },
  { icon: Youtube, href: 'https://youtube.com/' },
  { icon: Mail, href: 'mailto:hello@example.com' },
];

export default function SocialFooter() {
  return (
    <footer className="mx-auto w-full max-w-2xl py-8">
      <div className="flex items-center justify-between gap-4">
        <div className="text-xs text-white/60">© {new Date().getFullYear()} Alex Carter</div>
        <div className="flex items-center gap-2">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition-all hover:scale-105 hover:bg-white/10 hover:text-white"
              aria-label="social link"
            >
              <s.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
