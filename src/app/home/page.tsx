import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import UnboxingSection from './components/UnboxingSection';
import ArchiveGallery from './components/ArchiveGallery';
import ForWhomSection from './components/ForWhomSection';
import ArtisanProcess from './components/ArtisanProcess';
import CTABar from './components/CTABar';

export default function HomePage() {
  return (
    <main className="bg-obsidian min-h-screen">
      <Header />
      <HeroSection />
      <UnboxingSection />
      <ArchiveGallery />
      <ForWhomSection />
      <ArtisanProcess />
      <Footer />
      <CTABar />
    </main>
  );
}