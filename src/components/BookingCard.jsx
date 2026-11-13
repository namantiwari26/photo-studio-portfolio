import React, { useState } from 'react';
import { Calendar as CalendarIcon, CheckCircle2, Send, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { brand } from '../data/content';

export default function BookingCard({ className = "", prefillService = "" }) {
  const [formData, setFormData] = useState({
    fullName: '',
    eventDate: '',
    guestCount: '',
    eventType: prefillService || 'Wedding Celebration',
    location: '',
    source: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#B08D57', '#CFC2B0', '#ECE3D6'],
        });
      } catch (err) {
        // ignore
      }
    }, 700);
  };

  const createWhatsAppLink = () => {
    const text = `Hello Aurelia Studio, I'm submitting an inquiry:\n- Name: ${formData.fullName}\n- Event: ${formData.eventType}\n- Date: ${formData.eventDate || 'To be decided'}\n- Guests: ${formData.guestCount || 'Not specified'}\n- City/Venue: ${formData.location || 'India / Destination'}`;
    return `https://wa.me/${brand.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className={`glass-assessment-card rounded-2xl p-6 md:p-8 text-[#2A2420] transition-all duration-300 relative ${className}`}
    >
      {submitted ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#B08D57]/15 text-[#B08D57] flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-2xl tracking-wide text-[#2A2420]">
            Thank You, {formData.fullName.split(' ')[0]}
          </h3>
          <p className="text-sm text-[#7A6F64] font-light leading-relaxed max-w-xs mx-auto">
            We have received your dates. Our studio concierge will review availability and write back within 24 hours.
          </p>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#26211D] text-[#F7F2EA] text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 hover:bg-[#B08D57] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp Now</span>
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs text-[#7A6F64] hover:text-[#2A2420] underline decoration-[#B08D57]/40 pt-2"
            >
              Send another note
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1 mb-5">
            <h3 className="font-serif text-2xl lg:text-[26px] tracking-wide text-[#2A2420] text-center font-normal">
              Assessment
            </h3>
            <p className="text-[12px] text-[#7A6F64] text-center font-light leading-relaxed">
              Tell us about your plans and we'll guide you through the next steps.
            </p>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#7A6F64] mb-1 font-medium">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Ananya Roy & Dev Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-white/70 border border-[#7A6F64]/20 text-xs text-[#2A2420] placeholder-[#7A6F64]/50 focus:outline-none focus:border-[#B08D57] focus:bg-white transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#7A6F64] mb-1 font-medium">
                Event Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white/70 border border-[#7A6F64]/20 text-xs text-[#2A2420] focus:outline-none focus:border-[#B08D57] focus:bg-white transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#7A6F64] mb-1 font-medium">
                Guest Count
              </label>
              <input
                type="number"
                placeholder="Estimated guests"
                value={formData.guestCount}
                onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/70 border border-[#7A6F64]/20 text-xs text-[#2A2420] placeholder-[#7A6F64]/50 focus:outline-none focus:border-[#B08D57] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#7A6F64] mb-1 font-medium">
                Celebration Type
              </label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/70 border border-[#7A6F64]/20 text-xs text-[#2A2420] focus:outline-none focus:border-[#B08D57] focus:bg-white transition-all"
              >
                <option value="Wedding Celebration">Wedding Celebration</option>
                <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                <option value="Maternity & Newborn">Maternity & Newborn</option>
                <option value="Private Event / Anniversary">Private Event / Anniversary</option>
                <option value="Editorial & Portrait">Editorial & Portrait</option>
                <option value="Commercial / Interior">Commercial / Interior</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-[#7A6F64] mb-1 font-medium">
                Location
              </label>
              <input
                type="text"
                placeholder="City or venue name"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white/70 border border-[#7A6F64]/20 text-xs text-[#2A2420] placeholder-[#7A6F64]/50 focus:outline-none focus:border-[#B08D57] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-[#7A6F64] mb-1 font-medium">
              How did you hear about us?
            </label>
            <select
              value={formData.source}
              onChange={(e) => setFormData({ ...formData, source: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-lg bg-white/70 border border-[#7A6F64]/20 text-xs text-[#2A2420] focus:outline-none focus:border-[#B08D57] focus:bg-white transition-all"
            >
              <option value="">Select an option</option>
              <option value="Instagram">Instagram</option>
              <option value="Friend or Family Referral">Friend or Family Referral</option>
              <option value="Wedding Planner Recommendation">Wedding Planner Recommendation</option>
              <option value="Editorial Feature / Vogue / AD">Editorial Feature (Vogue / AD)</option>
              <option value="Google Search">Google Search</option>
            </select>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl bg-[#26211D] text-[#F7F2EA] hover:bg-[#B08D57] transition-all duration-300 text-xs uppercase tracking-[0.22em] font-medium flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-70"
            >
              <span>{loading ? 'Submitting...' : 'Book Consultation'}</span>
              <Send className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

