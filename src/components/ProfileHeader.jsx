import React from 'react';
import { BadgeCheck } from 'lucide-react';

export default function ProfileHeader() {
  return (
    <header className="mx-auto w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center">
        <img
          src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=300&auto=format&fit=crop"
          alt="Avatar"
          className="h-20 w-20 rounded-full border border-white/20 object-cover shadow-md sm:h-24 sm:w-24"
        />
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center gap-2 sm:justify-start">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">Alex Carter</h2>
            <BadgeCheck className="h-5 w-5 text-sky-400" />
          </div>
          <p className="mt-1 text-sm text-white/70">
            Building delightful web experiences • Frontend & 3D experiments • Open source
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">#react</span>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">#threejs</span>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">#design</span>
          </div>
        </div>
      </div>
    </header>
  );
}
