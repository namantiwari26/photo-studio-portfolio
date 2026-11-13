import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public/images');

const images = [
  // Hero Triptych & Background
  {
    path: 'hero/triptych-1.jpg',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&auto=format&fit=crop&q=80',
    title: 'Bridal Gown & Delicate Veil',
    author: 'Jeremy Wong Weddings'
  },
  {
    path: 'hero/triptych-2.jpg',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=900&auto=format&fit=crop&q=80',
    title: 'Heritage Courtyard Couple',
    author: 'Alvin Mahmudov'
  },
  {
    path: 'hero/triptych-3.jpg',
    url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=900&auto=format&fit=crop&q=80',
    title: 'Greenhouse Celebration',
    author: 'Thomas Ae'
  },
  {
    path: 'hero/hero-bg-venue.jpg',
    url: 'https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=1600&auto=format&fit=crop&q=80',
    title: 'Grand Palace Estate',
    author: 'Chuttersnap'
  },

  // Intro scattered photos
  {
    path: 'hero/intro-scatter-1.jpg',
    url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=80',
    title: 'Bridal Shoes & Jewelry',
    author: 'Sandy Millar'
  },
  {
    path: 'hero/intro-scatter-2.jpg',
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&auto=format&fit=crop&q=80',
    title: 'Bridesmaids Laughter',
    author: 'Sweet Ice Cream Photography'
  },
  {
    path: 'hero/intro-scatter-3.jpg',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&auto=format&fit=crop&q=80',
    title: 'Table florals & candlelight',
    author: 'Wedding photography'
  },

  // Meet the photographer & team
  {
    path: 'team/photographer-portrait.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80',
    title: 'Aurelia Ray, Principal Photographer',
    author: 'Aphiwat chuangchoem'
  },
  {
    path: 'team/team-cinematographer.jpg',
    url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80',
    title: 'Kabir Mehta, Lead Cinematographer',
    author: 'Joseph Gonzalez'
  },
  {
    path: 'team/team-editor.jpg',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80',
    title: 'Meera Sen, Colorist & Senior Editor',
    author: 'Christina @ wocintechchat.com'
  },
  {
    path: 'team/studio-interior.jpg',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&auto=format&fit=crop&q=80',
    title: 'Studio Lounge & Print Gallery',
    author: 'R ARCHITECTURE'
  },

  // Services Overview & Dedicated Services
  {
    path: 'weddings/wedding-main.jpg',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&auto=format&fit=crop&q=80',
    title: 'Wedding Celebrations',
    author: 'Jeremy Wong'
  },
  {
    path: 'weddings/wedding-1.jpg',
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1000&auto=format&fit=crop&q=80',
    title: 'Indian Bridal Varmala',
    author: 'Shutter Speed'
  },
  {
    path: 'weddings/wedding-2.jpg',
    url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1000&auto=format&fit=crop&q=80',
    title: 'Royal Mandap Walk',
    author: 'Alvin Mahmudov'
  },
  {
    path: 'weddings/wedding-3.jpg',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1000&auto=format&fit=crop&q=80',
    title: 'First Dance Glow',
    author: 'Photos by Lanty'
  },
  {
    path: 'weddings/wedding-4.jpg',
    url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=1000&auto=format&fit=crop&q=80',
    title: 'Mehndi & Henna Details',
    author: 'Wedding Moments'
  },

  // Pre-Wedding
  {
    path: 'prewedding/prewedding-1.jpg',
    url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=1000&auto=format&fit=crop&q=80',
    title: 'Sunset Dune Romance',
    author: 'Dev Asangbam'
  },
  {
    path: 'prewedding/prewedding-2.jpg',
    url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1000&auto=format&fit=crop&q=80',
    title: 'Lakeside Silhouette',
    author: 'Everton Vila'
  },
  {
    path: 'prewedding/prewedding-3.jpg',
    url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1000&auto=format&fit=crop&q=80',
    title: 'Old Fort Morning Light',
    author: 'Sweet Ice Cream'
  },

  // Portraits
  {
    path: 'portraits/portrait-1.jpg',
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&auto=format&fit=crop&q=80',
    title: 'Warm Editorial Studio Portrait',
    author: 'Aphiwat Chuangchoem'
  },
  {
    path: 'portraits/portrait-2.jpg',
    url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000&auto=format&fit=crop&q=80',
    title: 'Natural Light Male Portrait',
    author: 'Albert Dera'
  },
  {
    path: 'portraits/portrait-3.jpg',
    url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&auto=format&fit=crop&q=80',
    title: 'Minimalist Monochromatic Session',
    author: 'Rafael Leao'
  },

  // Maternity & Newborn
  {
    path: 'maternity/maternity-1.jpg',
    url: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?w=1000&auto=format&fit=crop&q=80',
    title: 'Gentle Motherhood Embrace',
    author: 'Camille Minouflet'
  },
  {
    path: 'maternity/maternity-2.jpg',
    url: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=1000&auto=format&fit=crop&q=80',
    title: 'Golden Hour Expectation',
    author: 'Liv Bruce'
  },
  {
    path: 'maternity/newborn-1.jpg',
    url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1000&auto=format&fit=crop&q=80',
    title: 'Sleeping Newborn in Linen Wrap',
    author: 'Dominika Roseclay'
  },
  {
    path: 'maternity/kids-1.jpg',
    url: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=1000&auto=format&fit=crop&q=80',
    title: 'First Birthday Cake Smash Play',
    author: 'Senna So'
  },

  // Events & Private Celebrations
  {
    path: 'events/events-1.jpg',
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1000&auto=format&fit=crop&q=80',
    title: 'Outdoor Anniversary Feast',
    author: 'Alasdair Elmes'
  },
  {
    path: 'events/events-2.jpg',
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1000&auto=format&fit=crop&q=80',
    title: 'Private Rooftop Soirée',
    author: 'Katarzyna Grabowska'
  },

  // Corporate & Headshots
  {
    path: 'corporate/corporate-1.jpg',
    url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=80',
    title: 'Executive Leadership Headshot',
    author: 'WOCinTech'
  },
  {
    path: 'corporate/corporate-2.jpg',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&auto=format&fit=crop&q=80',
    title: 'Keynote & Innovation Summit',
    author: 'Headway'
  },
  {
    path: 'corporate/corporate-3.jpg',
    url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1000&auto=format&fit=crop&q=80',
    title: 'Design Team Offsite Session',
    author: 'Austin Distel'
  },

  // Fashion & Modeling
  {
    path: 'fashion/fashion-1.jpg',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1000&auto=format&fit=crop&q=80',
    title: 'Haute Couture Silk Drape',
    author: 'Tamara Bellis'
  },
  {
    path: 'fashion/fashion-2.jpg',
    url: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1000&auto=format&fit=crop&q=80',
    title: 'Spring Lookbook Editorial',
    author: 'Laura Chouette'
  },

  // Commercial (Product, Food, Interior, Jewelry)
  {
    path: 'commercial/product-1.jpg',
    url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1000&auto=format&fit=crop&q=80',
    title: 'Botanical Skincare Still Life',
    author: 'Content Pixie'
  },
  {
    path: 'commercial/food-1.jpg',
    url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1000&auto=format&fit=crop&q=80',
    title: 'Artisanal Culinary Plating',
    author: 'Lily Banse'
  },
  {
    path: 'commercial/interior-1.jpg',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1000&auto=format&fit=crop&q=80',
    title: 'Architectural Heritage Villa',
    author: 'Spacejoy'
  },
  {
    path: 'commercial/jewelry-1.jpg',
    url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1000&auto=format&fit=crop&q=80',
    title: 'Polki Diamond Heritage Choker',
    author: 'Sabrianna'
  },

  // Journal Articles
  {
    path: 'journal/journal-1.jpg',
    url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1000&auto=format&fit=crop&q=80',
    title: 'How to Plan Your Wedding Day Timeline for Golden Hour Light',
    author: 'Aurelia Journal'
  },
  {
    path: 'journal/journal-2.jpg',
    url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=1000&auto=format&fit=crop&q=80',
    title: 'Preparing for an Effortless Pre-Wedding Session',
    author: 'Aurelia Journal'
  },
  {
    path: 'journal/journal-3.jpg',
    url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1000&auto=format&fit=crop&q=80',
    title: 'Questions to Ask Before Hiring Your Wedding Documentarian',
    author: 'Aurelia Journal'
  },
  {
    path: 'journal/journal-4.jpg',
    url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1000&auto=format&fit=crop&q=80',
    title: 'The Art of In-Home Lifestyle Newborn Portraits',
    author: 'Aurelia Journal'
  },

  // Instagram Strip
  {
    path: 'instagram/insta-1.jpg',
    url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&auto=format&fit=crop&q=80',
    title: 'Behind the Vows',
    author: 'Aurelia Studio'
  },
  {
    path: 'instagram/insta-2.jpg',
    url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&auto=format&fit=crop&q=80',
    title: 'Warm Evenings',
    author: 'Aurelia Studio'
  },
  {
    path: 'instagram/insta-3.jpg',
    url: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&auto=format&fit=crop&q=80',
    title: 'The Golden Hour Trail',
    author: 'Aurelia Studio'
  },
  {
    path: 'instagram/insta-4.jpg',
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80',
    title: 'Draped in Light',
    author: 'Aurelia Studio'
  },
  {
    path: 'instagram/insta-5.jpg',
    url: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=80',
    title: 'Delicate Details',
    author: 'Aurelia Studio'
  },
  {
    path: 'instagram/insta-6.jpg',
    url: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=600&auto=format&fit=crop&q=80',
    title: 'Henna & Silk',
    author: 'Aurelia Studio'
  }
];

async function downloadFile(item) {
  const dest = path.join(publicDir, item.path);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  
  try {
    const res = await fetch(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buffer);
    console.log(`✓ Downloaded: ${item.path}`);
  } catch (err) {
    console.warn(`! Fallback created for ${item.path}: ${err.message}`);
    // Create an elegant SVG fallback
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1000" viewBox="0 0 800 1000">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ECE3D6"/>
          <stop offset="50%" stop-color="#F7F2EA"/>
          <stop offset="100%" stop-color="#CFC2B0"/>
        </linearGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#g)"/>
      <rect x="30" y="30" width="740" height="940" fill="none" stroke="#B08D57" stroke-width="1" stroke-opacity="0.3"/>
      <text x="400" y="480" font-family="'Bodoni Moda', serif" font-size="28" fill="#2A2420" text-anchor="middle" letter-spacing="2">${item.title}</text>
      <text x="400" y="520" font-family="'Jost', sans-serif" font-size="14" fill="#7A6F64" text-anchor="middle" letter-spacing="4">AURELIA STUDIO</text>
    </svg>`;
    fs.writeFileSync(dest.replace(/\.jpg$/, '.svg'), svg, 'utf8');
  }
}

async function run() {
  console.log(`Starting asset download of ${images.length} photos...`);
  for (const img of images) {
    await downloadFile(img);
  }
  console.log('Finished downloading all assets!');
}

run();

