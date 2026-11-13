# Aurelia Studio — Luxury Photography & Cinematic Films

An editorial visual studio website handcrafted for luxury wedding celebrations, fine-art monographs, and commercial documentation. Built with React 19, Vite, Tailwind CSS v4, Framer Motion, Lenis smooth inertia scrolling, and GSAP.

---

## ✨ Features & Architecture

- **Harmonized Editorial Aesthetic**:
  - Blends the monumental serif elegance of high-end wedding venues with the intimate, quiet storytelling of editorial portraitists.
  - Serif typography with Bodoni Moda & Cormorant Garamond, combined with Jost for body text.
  - Ivory, sand, soft taupe, and espresso color palette with subtle gold accents (`#B08D57`).
  - Custom floral ornament dividers and hairline borders.

- **Pages Included**:
  1. **Home (`/`)**: 3-column tall photo triptych, floating glass Assessment booking card, editorial intro statement with scattered Polaroid-style photos, 4 services cards with line icons, featured horizontal drag/swipe gallery, 4-step process timeline with animated connecting line, photographer split section with portrait, animated count-up metrics, 5-star Google review slider, static Instagram photo strip, and a dark bottom icon bar.
  2. **Portfolio (`/portfolio`)**: Dynamic masonry gallery with animated category filters, fullscreen keyboard/swipe lightbox with captions and tags, plus a **Stories** case study mode with multi-image mixed layouts, client quotes, and vendor credits.
  3. **Services (`/services`)**: Full coverage of 9 service disciplines (Weddings, Pre-wedding, Maternity/Newborn, Private Celebrations, Corporate/Headshots, Portraits/Fashion, Commercial/Interiors/Jewelry, Videography/Drone/Reels, Archival Albums/Prints) with turnaround times and pre-filled consultation links.
  4. **Packages (`/packages`)**: 3 wedding tiers with a "Most Booked" badge, interactive toggle to Events/Portraits, comparison matrix, bespoke add-ons, and a 6-part FAQ accordion.
  5. **About (`/about`)**: Studio origin in Kala Ghoda, Mumbai; philosophy on humanist documentary; core team cards with portraits; equipment & optics standard; honors and awards.
  6. **Journal (`/journal`)**: 4 comprehensive articles on wedding planning, timelines, pre-wedding advice, and newborn portraits with an article reader view.
  7. **Client Gallery Demo (`/client-gallery`)**: Password-gated private proofing vault (Passcode: `aurelia2026`) with SVG heart selection buttons, active selection counter, and high-resolution ZIP download simulator.
  8. **Contact & Booking (`/contact`)**: Multi-step booking form with real-time calendar availability check, blocked date indicators, guest count, budget tiers, WhatsApp prefill, studio address, and map graphic.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Animations**: Framer Motion, GSAP, Lenis Smooth Scroll
- **Icons**: Lucide React
- **Date Handling**: date-fns, react-day-picker
- **Celebrations**: canvas-confetti
- **Typography**: `@fontsource/bodoni-moda`, `@fontsource/cormorant-garamond`, `@fontsource/jost`

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/<username>/<repo-name>.git

# Navigate to project directory
cd photo-studio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## ⚙️ Customization

All brand information, contact details, prices, packages, and FAQs are centralized in a single configuration file:
- **`src/data/content.js`**: Update studio name, tagline, address, phone, WhatsApp number, pricing, and services.
- **`src/data/images.js`**: Update image paths, captions, and photographer credits.

---

## 📄 License
MIT © Aurelia Studio
