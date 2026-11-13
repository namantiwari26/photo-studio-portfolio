import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import EditorialIntro from '../components/EditorialIntro';
import ServicesOverview from '../components/ServicesOverview';
import HorizontalGallery from '../components/HorizontalGallery';
import ProcessSection from '../components/ProcessSection';
import MeetPhotographer from '../components/MeetPhotographer';
import StatsBand from '../components/StatsBand';
import TestimonialsSlider from '../components/TestimonialsSlider';
import InstagramStrip from '../components/InstagramStrip';
import CTASection from '../components/CTASection';

export default function HomePage() {
  return (
    <PageTransition>
      <div className="flex flex-col">
        <Hero />
        <EditorialIntro />
        <ServicesOverview />
        <HorizontalGallery />
        <ProcessSection />
        <MeetPhotographer />
        <StatsBand />
        <TestimonialsSlider />
        <InstagramStrip />
        <CTASection />
      </div>
    </PageTransition>
  );
}

