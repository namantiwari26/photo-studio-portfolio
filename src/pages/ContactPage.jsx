import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  CheckCircle2, 
  Send, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { isSameDay } from 'date-fns';
import confetti from 'canvas-confetti';
import PageTransition from '../components/PageTransition';
import OrnamentDivider from '../components/OrnamentDivider';
import { brand } from '../data/content';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const prefillService = searchParams.get('service') || '';
  const prefillPackage = searchParams.get('package') || '';

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    eventType: prefillService || (prefillPackage ? `Package: ${prefillPackage}` : 'Wedding Celebration'),
    selectedDate: '2026-11-28',
    location: '',
    guestCount: '250',
    budgetRange: '₹ 5,00,000 – ₹ 8,00,000',
    message: '',
    fullName: '',
    email: '',
    phone: '',
    preferredContact: 'Email',
  });

  const blockedDates = brand.blockedDemoDates;

  const isDateBlocked = (dateStr) => {
    if (!dateStr) return false;
    const d = new Date(dateStr);
    return blockedDates.some((b) => isSameDay(b, d));
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, selectedDate: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#B08D57', '#CFC2B0', '#26211D'],
        });
      } catch (err) {
        // ignore
      }
    }, 800);
  };

  return (
    <PageTransition>
      <div className="pt-28 pb-20 bg-[#F7F2EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-18">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#7A6F64] font-medium block mb-2">
              Begin the Conversation
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2A2420] tracking-tight uppercase font-light">
              Contact & Inquiries
            </h1>
            <OrnamentDivider className="my-3" />
            <p className="text-sm text-[#7A6F64] font-light leading-relaxed">
              Every memorable collaboration starts with a simple conversation. Share your dates, plans, or questions below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Multi-Step Interactive Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-[#7A6F64]/15 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#B08D57]/20 text-[#B08D57] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" strokeWidth={1.5} />
                  </div>
                  <h2 className="font-serif text-3xl text-[#2A2420] font-light">
                    Commission Request Received
                  </h2>
                  <p className="text-sm text-[#7A6F64] font-light leading-relaxed max-w-md mx-auto">
                    Thank you, {formData.fullName}. Aurelia and our studio coordinator have logged your dates for <span className="text-[#2A2420] font-medium">{formData.selectedDate}</span>. We will review our calendar and reply within 24 business hours.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`mailto:${brand.contact.email}`}
                      className="px-6 py-3 rounded-full bg-[#26211D] text-[#F7F2EA] hover:bg-[#B08D57] text-xs uppercase tracking-wider font-medium flex items-center gap-2 transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#B08D57]" />
                      <span>Write to Concierge ({brand.contact.email})</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-full border border-[#7A6F64]/20 text-xs text-[#7A6F64] hover:text-[#2A2420] cursor-pointer"
                    >
                      Submit Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step indicators */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#7A6F64]/15">
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-medium ${step === 1 ? 'bg-[#26211D] text-white' : 'bg-[#ECE3D6] text-[#7A6F64]'}`}>1</span>
                      <span className="text-xs uppercase tracking-wider text-[#2A2420] font-medium hidden sm:inline">Event Details</span>
                    </div>
                    <span className="h-[1px] w-8 bg-[#7A6F64]/20" />
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-medium ${step === 2 ? 'bg-[#26211D] text-white' : 'bg-[#ECE3D6] text-[#7A6F64]'}`}>2</span>
                      <span className="text-xs uppercase tracking-wider text-[#2A2420] font-medium hidden sm:inline">Vision & Scope</span>
                    </div>
                    <span className="h-[1px] w-8 bg-[#7A6F64]/20" />
                    <div className="flex items-center gap-2">
                      <span className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-medium ${step === 3 ? 'bg-[#26211D] text-white' : 'bg-[#ECE3D6] text-[#7A6F64]'}`}>3</span>
                      <span className="text-xs uppercase tracking-wider text-[#2A2420] font-medium hidden sm:inline">Contact</span>
                    </div>
                  </div>

                  {/* Step 1: Event Details */}
                  {step === 1 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7A6F64] mb-1 font-medium">
                          Celebration Type *
                        </label>
                        <select
                          value={formData.eventType}
                          onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] border border-[#7A6F64]/20 text-xs text-[#2A2420] focus:outline-none focus:border-[#B08D57]"
                        >
                          <option value="Wedding Celebration">Wedding Celebration (Multi-Day or Single Day)</option>
                          <option value="Pre-Wedding & Save-the-Date">Pre-Wedding & Save-the-Date Session</option>
                          <option value="Maternity & Newborn Collection">Maternity & Newborn Collection</option>
                          <option value="Private Event & Anniversary">Private Event / Milestone Anniversary</option>
                          <option value="Corporate Conclave & Headshots">Corporate Conclave & Headshots</option>
                          <option value="Editorial & Fashion Monograph">Editorial & Fashion Monograph</option>
                          <option value="Commercial & Architectural">Commercial & Architectural</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-[#7A6F64] mb-1 font-medium flex items-center justify-between">
                            <span>Celebration Date *</span>
                            {isDateBlocked(formData.selectedDate) && (
                              <span className="text-amber-700 text-[10px] flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> Fully Booked Date
                              </span>
                            )}
                          </label>
                          <input
                            type="date"
                            required
                            value={formData.selectedDate}
                            onChange={handleDateChange}
                            className={`w-full px-4 py-3 rounded-xl border text-xs focus:outline-none ${
                              isDateBlocked(formData.selectedDate)
                                ? 'bg-amber-50 border-amber-300 text-amber-900'
                                : 'bg-[#F7F2EA] border-[#7A6F64]/20 text-[#2A2420] focus:border-[#B08D57]'
                            }`}
                          />
                          <p className="text-[10px] text-[#7A6F64] mt-1 font-light">
                            Select tentative date. Calendar checks availability in real-time.
                          </p>
                        </div>

                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-[#7A6F64] mb-1 font-medium">
                            Estimated Guest Count
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 150 – 300 guests"
                            value={formData.guestCount}
                            onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] border border-[#7A6F64]/20 text-xs text-[#2A2420] placeholder-[#7A6F64]/50 focus:outline-none focus:border-[#B08D57]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7A6F64] mb-1 font-medium">
                          Venue or Destination City *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Jagmandir Island Palace, Udaipur or Mumbai"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] border border-[#7A6F64]/20 text-xs text-[#2A2420] placeholder-[#7A6F64]/50 focus:outline-none focus:border-[#B08D57]"
                        />
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="py-3 px-6 rounded-full bg-[#26211D] text-[#F7F2EA] text-xs uppercase tracking-wider font-medium flex items-center gap-2 hover:bg-[#B08D57] transition-colors cursor-pointer"
                        >
                          <span>Next: Vision & Budget</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Vision & Scope */}
                  {step === 2 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7A6F64] mb-1 font-medium">
                          Anticipated Investment Range
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] border border-[#7A6F64]/20 text-xs text-[#2A2420] focus:outline-none focus:border-[#B08D57]"
                        >
                          <option value="₹ 1,50,000 – ₹ 3,00,000">₹ 1,50,000 – ₹ 3,00,000 (Portraits / Half-day events)</option>
                          <option value="₹ 3,00,000 – ₹ 5,50,000">₹ 3,00,000 – ₹ 5,50,000 (Single-day / Intimate wedding)</option>
                          <option value="₹ 5,50,000 – ₹ 8,50,000">₹ 5,50,000 – ₹ 8,50,000 (Multi-day Heritage collection)</option>
                          <option value="₹ 8,50,000+">₹ 8,50,000+ (Comprehensive Sovereign Destination)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7A6F64] mb-1 font-medium">
                          Tell Us About Your Vision
                        </label>
                        <textarea
                          rows={4}
                          placeholder="Share anything that matters to you: specific rituals, how you met, family heirlooms, music preferences, or aesthetic desires..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] border border-[#7A6F64]/20 text-xs text-[#2A2420] placeholder-[#7A6F64]/50 focus:outline-none focus:border-[#B08D57]"
                        />
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="text-xs uppercase tracking-wider text-[#7A6F64] hover:text-[#2A2420] cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="py-3 px-6 rounded-full bg-[#26211D] text-[#F7F2EA] text-xs uppercase tracking-wider font-medium flex items-center gap-2 hover:bg-[#B08D57] transition-colors cursor-pointer"
                        >
                          <span>Next: Contact Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact Details */}
                  {step === 3 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7A6F64] mb-1 font-medium">
                          Your Full Name(s) *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Tara Kapadia & Siddharth Varma"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] border border-[#7A6F64]/20 text-xs text-[#2A2420] placeholder-[#7A6F64]/50 focus:outline-none focus:border-[#B08D57]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-[#7A6F64] mb-1 font-medium">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="name@domain.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] border border-[#7A6F64]/20 text-xs text-[#2A2420] placeholder-[#7A6F64]/50 focus:outline-none focus:border-[#B08D57]"
                          />
                        </div>

                        <div>
                          <label className="block text-[11px] uppercase tracking-wider text-[#7A6F64] mb-1 font-medium">
                            Phone Number *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="+91 98XXX XXXXX"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-[#F7F2EA] border border-[#7A6F64]/20 text-xs text-[#2A2420] placeholder-[#7A6F64]/50 focus:outline-none focus:border-[#B08D57]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] uppercase tracking-wider text-[#7A6F64] mb-1 font-medium">
                          Preferred Reply Channel
                        </label>
                        <div className="flex gap-4 pt-1 text-xs text-[#2A2420]">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="pref"
                              value="Email"
                              checked={formData.preferredContact === 'Email'}
                              onChange={() => setFormData({ ...formData, preferredContact: 'Email' })}
                              className="accent-[#B08D57]"
                            />
                            <span>Formal Email ({brand.contact.email})</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="radio"
                              name="pref"
                              value="Phone"
                              checked={formData.preferredContact === 'Phone'}
                              onChange={() => setFormData({ ...formData, preferredContact: 'Phone' })}
                              className="accent-[#B08D57]"
                            />
                            <span>Phone Consultation</span>
                          </label>
                        </div>
                      </div>

                      <div className="pt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="text-xs uppercase tracking-wider text-[#7A6F64] hover:text-[#2A2420] cursor-pointer"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="py-3.5 px-8 rounded-full bg-[#26211D] text-[#F7F2EA] text-xs uppercase tracking-wider font-medium flex items-center gap-2 hover:bg-[#B08D57] transition-colors shadow-md disabled:opacity-70 cursor-pointer"
                        >
                          <span>{loading ? 'Submitting...' : 'Send Commission Request'}</span>
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              )}
            </div>

            {/* Right Column: Contact Details, Map Placeholder & Direct Actions */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Inquiry Options */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#7A6F64]/15 shadow-sm space-y-4">
                <h3 className="font-serif text-2xl text-[#2A2420] font-light">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-[#7A6F64] font-light leading-relaxed">
                  For calendar verification, formal commission briefs, or wedding planner queries:
                </p>

                <div className="flex flex-col gap-3 pt-2">
                  <a
                    href={`mailto:${brand.contact.email}`}
                    className="w-full py-3.5 px-5 rounded-xl bg-[#26211D] text-[#F7F2EA] text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-2.5 hover:bg-[#B08D57] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#B08D57]" />
                    <span>Email Atelier ({brand.contact.email})</span>
                  </a>

                  <div className="w-full py-3.5 px-5 rounded-xl border border-[#7A6F64]/20 bg-[#F7F2EA] text-[#2A2420] text-xs tracking-wider font-medium flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4 text-[#B08D57]" />
                    <span>Studio Line: <strong className="font-mono">{brand.contact.phoneDisplay}</strong></span>
                  </div>
                </div>
              </div>

              {/* Atelier Address & Hours */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#7A6F64]/15 shadow-sm space-y-4 text-xs text-[#7A6F64]">
                <h3 className="font-serif text-xl text-[#2A2420] font-light">
                  The Atelier
                </h3>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#2A2420] font-medium block">Studio Address</span>
                    <p>{brand.contact.address.line1}</p>
                    <p>{brand.contact.address.line2}</p>
                    <p>{brand.contact.address.city}, {brand.contact.address.state} {brand.contact.address.pincode}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#2A2420] font-medium block">Consultation Hours</span>
                    <p>{brand.contact.studioHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#B08D57] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#2A2420] font-medium block">Inquiry Email</span>
                    <p>{brand.contact.email}</p>
                  </div>
                </div>
              </div>

              {/* Architectural Map Placeholder */}
              <div className="bg-[#ECE3D6] rounded-3xl p-6 border border-[#7A6F64]/15 overflow-hidden relative shadow-xs">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-serif text-[#2A2420] font-medium">Kala Ghoda Arts District, Mumbai</span>
                  <a
                    href={brand.contact.address.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#B08D57] underline decoration-[#B08D57]/40 hover:text-[#2A2420]"
                  >
                    Google Maps
                  </a>
                </div>

                {/* Styled minimalist SVG map graphic */}
                <div className="aspect-[16/9] rounded-2xl bg-[#E3DAC9] border border-[#7A6F64]/20 relative overflow-hidden flex items-center justify-center">
                  <svg className="w-full h-full opacity-40" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
                    <line x1="30" y1="20" x2="380" y2="40" stroke="#7A6F64" strokeWidth="2" />
                    <line x1="40" y1="90" x2="360" y2="100" stroke="#7A6F64" strokeWidth="3" />
                    <line x1="20" y1="180" x2="370" y2="170" stroke="#7A6F64" strokeWidth="2" />
                    <line x1="120" y1="10" x2="100" y2="210" stroke="#7A6F64" strokeWidth="2" />
                    <line x1="240" y1="10" x2="230" y2="210" stroke="#7A6F64" strokeWidth="3" />
                    <rect x="140" y="50" width="70" height="35" rx="4" fill="#CFC2B0" />
                    <rect x="250" y="115" width="60" height="40" rx="4" fill="#CFC2B0" />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#26211D] text-[#B08D57] flex items-center justify-center shadow-lg border border-[#B08D57]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#26211D] font-semibold bg-white/90 px-2 py-0.5 rounded-full mt-1 border border-[#7A6F64]/20 shadow-xs">
                      Aurelia Studio
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
