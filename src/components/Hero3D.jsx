import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden rounded-xl border border-white/10 bg-[radial-gradient(1200px_600px_at_50%_-200px,#60a5fa33,transparent)]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlay - won't block 3D interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />

      <div className="relative z-10 flex h-full items-end justify-center p-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white drop-shadow-sm sm:text-4xl md:text-5xl">
            Your modern link hub
          </h1>
          <p className="mt-3 text-sm text-white/80 sm:text-base">
            Interactive. Playful. Tech-forward. Showcase everything you do in one beautiful place.
          </p>
        </div>
      </div>
    </section>
  );
}
