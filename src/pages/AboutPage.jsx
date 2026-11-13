import React from 'react';
import { Camera, Film, Palette, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import OrnamentDivider from '../components/OrnamentDivider';
import CTASection from '../components/CTASection';
import { brand } from '../data/content';
import { images } from '../data/images';

export default function AboutPage() {
  const teamMembers = [
    images.team.photographer,
    images.team.cinematographer,
    images.team.editor,
  ];

  return (
    <PageTransition>
      <div className="pt-28 pb-20 bg-[#F7F2EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
              Heritage & Ethos
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2A2420] tracking-tight uppercase font-light">
              About Aurelia
            </h1>
            <OrnamentDivider className="my-3" />
            <p className="text-sm text-[#7A6F64] font-light leading-relaxed">
              Founded in 2014 in the arts precinct of Kala Ghoda, Mumbai. We are visual artists, chroniclers, and printmakers dedicated to human connection.
            </p>
          </div>

          {/* Studio Story Split Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-[#7A6F64] font-light leading-relaxed">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#B08D57] font-medium block">
                Our Origin
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2420] font-light leading-tight">
                A Decade of Quiet Seeing
              </h2>
              <p>
                Aurelia Studio was born from a frustration with the theatricality of conventional event photography — the blinding halogen banks, the constant instructions to smile on cue, and the loss of what makes a wedding sacred.
              </p>
              <p>
                We believe that true luxury lies in restraint. Our photographers walk softly, dress inconspicuously, and wait patiently for authentic emotion to surface on its own terms. By creating an atmosphere of trust, the people we photograph forget we are holding cameras.
              </p>
              <div className="pt-3 border-l-2 border-[#B08D57] pl-4 italic text-[#2A2420] font-serif text-lg">
                "We do not take photographs to freeze time; we take them so that forty years from now, you can feel what the afternoon smelled like."
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3.2] rounded-2xl overflow-hidden shadow-lg border border-[#7A6F64]/15 bg-[#ECE3D6]">
                <img
                  src={images.team.studioInterior.url}
                  alt={images.team.studioInterior.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xs p-3 rounded-xl border border-[#7A6F64]/10 text-center">
                  <p className="font-serif text-sm text-[#2A2420]">The Kala Ghoda Atelier & Print Gallery</p>
                  <p className="text-[10px] uppercase tracking-widest text-[#7A6F64]">Mumbai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Team */}
          <div className="mb-24">
            <div className="text-center max-w-xl mx-auto mb-14">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
                The Artisans
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2420] tracking-tight uppercase font-light">
                Meet the Core Team
              </h2>
              <OrnamentDivider className="my-3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-5 border border-[#7A6F64]/15 shadow-xs flex flex-col justify-between group hover:shadow-md transition-shadow"
                >
                  <div>
                    <div className="aspect-[3/3.8] rounded-xl overflow-hidden bg-[#ECE3D6] mb-5">
                      <img
                        src={member.url}
                        alt={member.alt}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-serif text-xl text-[#2A2420] font-normal">
                      {member.name}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#B08D57] font-medium mt-0.5 mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-[#7A6F64] font-light leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment & Craft Standards */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-[#7A6F64]/15 shadow-sm mb-24">
            <div className="max-w-2xl mb-10">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#B08D57] font-medium block mb-1">
                Optics & Craft
              </span>
              <h3 className="font-serif text-3xl text-[#2A2420] font-light">
                Archival Equipment Standards
              </h3>
              <p className="text-xs sm:text-sm text-[#7A6F64] font-light mt-1">
                We invest in cinema-grade sensors, fast prime optics, and museum calibration tools to ensure your images outlast digital formats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {brand.equipment.map((eq, eIdx) => (
                <div key={eIdx} className="bg-[#F7F2EA] p-5 rounded-2xl border border-[#7A6F64]/10">
                  <h4 className="font-serif text-lg text-[#2A2420] mb-3 pb-2 border-b border-[#7A6F64]/15">
                    {eq.category}
                  </h4>
                  <ul className="space-y-2 text-xs text-[#7A6F64] font-light">
                    {eq.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B08D57] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Press */}
          <div className="mb-24">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
                Recognition
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#2A2420] tracking-tight uppercase font-light">
                Honors & Features
              </h2>
              <OrnamentDivider className="my-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {brand.awards.map((award, aIdx) => (
                <div
                  key={aIdx}
                  className="bg-white p-6 rounded-2xl border border-[#7A6F64]/15 text-center flex flex-col items-center justify-center space-y-2 shadow-2xs"
                >
                  <Award className="w-7 h-7 text-[#B08D57] mb-1" strokeWidth={1.25} />
                  <span className="text-[10px] uppercase tracking-widest text-[#B08D57] font-medium">
                    {award.year}
                  </span>
                  <h4 className="font-serif text-base text-[#2A2420] font-medium leading-snug">
                    {award.title}
                  </h4>
                  <p className="text-xs text-[#7A6F64] font-light">
                    {award.organization}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <CTASection />
        </div>
      </div>
    </PageTransition>
  );
}

