import React from 'react';
import Hero3D from './components/Hero3D';
import ProfileHeader from './components/ProfileHeader';
import LinkList from './components/LinkList';
import SocialFooter from './components/SocialFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1020] via-[#0B1020] to-[#0C1222] text-white">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:py-10">
        <Hero3D />

        <div className="mt-8 space-y-6">
          <ProfileHeader />
          <LinkList />
          <SocialFooter />
        </div>
      </div>
    </div>
  );
}
