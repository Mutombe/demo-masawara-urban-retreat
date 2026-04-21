// Masawara Urban Retreat — boutique garden hotel in Borrowdale, Harare.
// All content curated for quiet-luxury voice. Prices are indicative USD.

export const business = {
  name: 'Masawara Urban Retreat',
  shortName: 'Masawara',
  tagline: 'A hushed green hour from the city.',
  subtagline: 'Come for the experience, stay for the night.',
  description:
    'Tucked at the end of St Michaels Lane in Borrowdale, Masawara is an intimate boutique retreat — eleven garden suites, a patio restaurant of quiet repute, a walled spa, and a yoga deck that opens onto jacaranda. Urban on the map; elsewhere entirely.',
  phone: '+263 78 338 3013',
  whatsapp: '+263 78 338 3013',
  email: 'reservations@masawararetreat.com',
  address: '3 St Michaels Lane, Borrowdale, Harare',
  city: 'Harare',
  country: 'Zimbabwe',
  website: 'https://masawararetreat.com',
  rating: 4.5,
  reviewCount: 331,
  instagram: 'https://instagram.com/masawararetreat',
  instagramHandle: '@masawararetreat',
  facebook: 'https://facebook.com/masawararetreat',
  tripadvisor: 'https://tripadvisor.com',
  hours: {
    reception: '24 hours',
    restaurant: 'Mon–Sun 7:00 – 22:00',
    spa: 'Tue–Sun 9:00 – 19:00',
    pool: 'Daily 6:30 – 20:00',
  },
  coordinates: { lat: -17.7512, lng: 31.0843 },
};

// Soft, warm hero imagery — courtyard-first
export const hero = {
  eyebrow: 'Borrowdale · Est. 2018',
  title: 'A hushed green hour',
  titleItalic: 'from the city.',
  body:
    'Eleven suites, a walled garden, a patio restaurant that knows your name by Wednesday. Masawara is the quietest address in Borrowdale — a boutique retreat for those who find stillness more luxurious than spectacle.',
  cta: { label: 'Reserve your stay', href: '/reservations' },
  secondary: { label: 'View suites', href: '/suites' },
  images: [
    'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1800&q=80',
    'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=1800&q=80',
  ],
};

// Suite types — 6 total with honest personality
export const suites = [
  {
    slug: 'garden-suite',
    name: 'The Garden Suite',
    kicker: 'Signature',
    price: 195,
    priceNote: 'per night, incl. breakfast',
    size: '48 m²',
    sleeps: 2,
    bed: 'King',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80',
    ],
    teaser:
      'Low linen beds, private verandah onto the walled garden, a soaking tub that catches the late afternoon light.',
    description:
      'Our signature suite. Honey-washed oak, a hand-thrown lamp, the kind of silence you forget exists. Wake to the gentle clatter of breakfast being set in the courtyard below.',
    amenities: ['Private verandah', 'Soaking tub', 'King linen bed', 'Espresso bar', 'Complimentary laundry'],
  },
  {
    slug: 'courtyard-room',
    name: 'Courtyard Room',
    kicker: 'Classic',
    price: 145,
    priceNote: 'per night, incl. breakfast',
    size: '32 m²',
    sleeps: 2,
    bed: 'Queen',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80',
    ],
    teaser: 'Our most-loved room. Tall sash windows onto the inner courtyard and the fig tree that pre-dates the house.',
    description:
      'A room for the quiet traveller. Ink-washed linen, a reading chair, a carafe of iced rooibos refreshed each afternoon. Rainfall shower finished in handmade zellige.',
    amenities: ['Queen bed', 'Rainfall shower', 'Reading nook', 'Nespresso', 'Sound-treated walls'],
  },
  {
    slug: 'honeymoon-suite',
    name: 'Jacaranda Honeymoon Suite',
    kicker: 'Romantic',
    price: 265,
    priceNote: 'per night, incl. breakfast & champagne',
    size: '62 m²',
    sleeps: 2,
    bed: 'Super-king',
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80',
    ],
    teaser: 'Top floor, corner position. A freestanding tub beneath the window, jacaranda canopy at eye level in October.',
    description:
      "Designed for a first night — or a tenth anniversary. Champagne chilled on arrival, rose-petal turndown if you\'d like it, a private breakfast served on the verandah.",
    amenities: ['Super-king bed', 'Freestanding tub', 'Champagne on arrival', 'Private verandah', 'In-suite breakfast'],
  },
  {
    slug: 'family-cottage',
    name: 'Walled Garden Cottage',
    kicker: 'For families',
    price: 295,
    priceNote: 'per night, sleeps four',
    size: '78 m²',
    sleeps: 4,
    bed: 'King + twin',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=1600&q=80',
    ],
    teaser: 'Stand-alone cottage with its own patch of lawn, a deep hammock, and a kitchenette for late-night tea.',
    description:
      'The cottage sits apart, tucked beneath an old avocado tree. Two bedrooms, an open living space, a small private garden. Quietly self-contained.',
    amenities: ['Two bedrooms', 'Private garden', 'Kitchenette', 'Two bathrooms', 'Family breakfast'],
  },
  {
    slug: 'studio-retreat',
    name: 'The Studio Retreat',
    kicker: 'For one',
    price: 115,
    priceNote: 'per night, incl. breakfast',
    size: '24 m²',
    sleeps: 1,
    bed: 'Double',
    image: 'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=80',
    ],
    teaser: 'A considered room for the solo traveller. Writing desk, kettle for loose-leaf tea, a small bookshelf of local poetry.',
    description:
      'Every detail scaled for one. A wide double bed, a proper writing desk by the window, a reading lamp that does justice to a paperback at 11pm.',
    amenities: ['Double bed', 'Writing desk', 'Loose-leaf tea service', 'Walk-in shower', 'Breakfast tray option'],
  },
  {
    slug: 'terrace-loft',
    name: 'The Terrace Loft',
    kicker: 'Sky view',
    price: 235,
    priceNote: 'per night, incl. breakfast',
    size: '56 m²',
    sleeps: 2,
    bed: 'King',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80',
    ],
    teaser: 'Double-height ceilings, a private roof terrace, sunsets that belong on a postcard you never quite send.',
    description:
      'The loft sits above the garden, reached by its own stair. A daybed beneath the skylight, a terrace wide enough for dinner for four, a telescope for the clear nights.',
    amenities: ['Private terrace', 'King bed', 'Telescope', 'Outdoor daybed', 'Double-height ceiling'],
  },
];

// Amenities — the felt textures of the place
export const amenities = [
  {
    slug: 'walled-garden',
    title: 'Walled Garden',
    icon: 'Leaf',
    summary:
      'Three-quarters of an acre of fig, frangipani and frangible old jacaranda. Breakfast is served here when the weather is kind — which, in Harare, is most mornings.',
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'outdoor-pool',
    title: 'Outdoor Pool',
    icon: 'Waves',
    summary:
      'A slim, unheated pool set in stone — long enough for proper laps, shallow enough for a slow hour with a book. Surrounded by loungers and the scent of jasmine.',
    image: 'https://images.unsplash.com/photo-1582610116397-edb318620f90?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'skin-spa',
    title: 'Skin Spa',
    icon: 'FlowerLotus',
    summary:
      'Three-time Harare Spa of the Year. Facials, massage, sound-bathing, and the kind of slow conversation that makes you lose an hour without noticing.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'yoga-deck',
    title: 'Yoga Deck',
    icon: 'Sun',
    summary:
      'Open-air teak deck tucked behind the fig. Sunrise Vinyasa at 06:30, Candlelit Yin on Thursdays. Mats, bolsters and herbal tea provided.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'patio-restaurant',
    title: 'Patio Restaurant',
    icon: 'ForkKnife',
    summary:
      'Our fusion dining room, open to residents and the quiet few who know. Local, seasonal, never loud — the sort of menu you find by word of mouth.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'xhale-events',
    title: 'Xhale Private Room',
    icon: 'Champagne',
    summary:
      'An intimate private dining and events room for twelve to thirty. Rehearsal dinners, small weddings, the occasional very good birthday.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
  },
];

// Dining menu moments
export const diningSections = [
  {
    title: 'From the garden',
    dishes: [
      { name: 'Fig, whipped labneh, burnt honey', price: 14 },
      { name: 'Heirloom tomato, basil oil, aged balsamic', price: 12 },
      { name: 'Courgette fritti, smoked paprika aioli', price: 10 },
    ],
  },
  {
    title: 'From the kitchen',
    dishes: [
      { name: 'Slow-braised short rib, creamed polenta', price: 32 },
      { name: 'Line-caught kapenta, preserved lemon, couscous', price: 26 },
      { name: 'Wild mushroom orzo, parmesan, aged truffle', price: 24 },
    ],
  },
  {
    title: 'To close',
    dishes: [
      { name: 'Dark chocolate & olive oil mousse', price: 11 },
      { name: 'Poached pear, mascarpone, almond praline', price: 10 },
      { name: 'Cheese board of three, quince, honeycomb', price: 16 },
    ],
  },
];

// Spa menu
export const spaTreatments = [
  { name: 'Signature Masawara Facial', duration: '75 min', price: 95, note: 'Deep-cleansing with indigenous botanicals' },
  { name: 'Deep Tissue Massage', duration: '60 min', price: 80, note: 'Firm pressure, aromatic oil of your choosing' },
  { name: 'Candlelit Couples Retreat', duration: '90 min', price: 220, note: 'Side-by-side massage, private bath after' },
  { name: 'Himalayan Salt Body Scrub', duration: '45 min', price: 70, note: 'Full-body exfoliation, hydrating finish' },
  { name: 'Sound Bath & Meditation', duration: '45 min', price: 55, note: 'Crystal bowls, guided breath' },
  { name: 'Half-Day Retreat', duration: '3.5 hrs', price: 260, note: 'Facial + massage + lunch in the garden' },
];

// Yoga schedule
export const yogaSchedule = [
  { day: 'Monday', time: '06:30', style: 'Sunrise Vinyasa', level: 'All levels' },
  { day: 'Tuesday', time: '17:30', style: 'Slow Flow', level: 'Beginner-friendly' },
  { day: 'Wednesday', time: '06:30', style: 'Hatha', level: 'All levels' },
  { day: 'Thursday', time: '19:00', style: 'Candlelit Yin', level: 'All levels' },
  { day: 'Friday', time: '06:30', style: 'Sunrise Vinyasa', level: 'All levels' },
  { day: 'Saturday', time: '08:00', style: 'Weekend Restorative', level: 'All levels' },
  { day: 'Sunday', time: '08:00', style: 'Sound & Stretch', level: 'All levels' },
];

// Garden & Experiences
export const experiences = [
  {
    slug: 'garden-tour',
    title: 'Botanical Garden Tour',
    duration: '45 min',
    price: 0,
    priceLabel: 'Complimentary',
    image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=1600&q=80',
    description:
      'Our head gardener, Tawanda, walks you through the walled garden — the fig he inherited, the indigenous aloes, the jacaranda with its stubborn roots. Daily at 10:00.',
  },
  {
    slug: 'breakfast-in-garden',
    title: 'Breakfast in the Garden',
    duration: '90 min',
    price: 22,
    priceLabel: '$22 per person',
    image: 'https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&w=1600&q=80',
    description:
      'A long linen-dressed table beneath the fig. House-baked croissants, farm eggs, garden herbs, cold-pressed juice. The most photographed hour of the day — if you must.',
  },
  {
    slug: 'stargazing',
    title: 'Rooftop Stargazing',
    duration: '60 min',
    price: 35,
    priceLabel: '$35 per person',
    image: 'https://images.unsplash.com/photo-1519810755548-39cd217da494?auto=format&fit=crop&w=1600&q=80',
    description:
      'Clear Harare nights are something else. Our terrace loft telescope, a local astronomer twice a month, a small carafe of something warm. Wednesdays & Saturdays.',
  },
  {
    slug: 'sunset-wine',
    title: 'Sunset Wine Hour',
    duration: '60 min',
    price: 18,
    priceLabel: '$18 per person',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1600&q=80',
    description:
      'Five small pours from our list of local and South African estates, curated by our sommelier. The fig tree does its best work around 17:30.',
  },
  {
    slug: 'sound-bath',
    title: 'Garden Sound Bath',
    duration: '60 min',
    price: 40,
    priceLabel: '$40 per person',
    image: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1600&q=80',
    description:
      'Crystal bowls under the open sky, a mat, a bolster, a blanket. Guided breath, then silence. Sunday afternoons at 16:00.',
  },
  {
    slug: 'private-dinner',
    title: 'Private Garden Dinner',
    duration: '3 hrs',
    price: 95,
    priceLabel: '$95 per person (min. 2)',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=1600&q=80',
    description:
      'A table set for you alone, by the wall, under lanterns. A seven-course tasting menu from our chef. Bookings 48 hours ahead.',
  },
];

// Reviews — boutique voice, invented but realistic
export const reviews = [
  {
    name: 'Tariro M.',
    location: 'Harare',
    rating: 5,
    title: 'Our quiet weekend habit.',
    body:
      'We\'ve stayed four times now and Masawara has become a ritual. The Courtyard Room is our favourite — there is a particular quality of silence in this house that is almost architectural.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    stay: 'Courtyard Room · Anniversary',
  },
  {
    name: 'Jonathan R.',
    location: 'London, UK',
    rating: 5,
    title: 'The best meal I had in Africa.',
    body:
      'I came for three nights on business and stayed five. The patio restaurant is genuinely extraordinary — and Violet at reception made me feel like a regular by Tuesday.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    stay: 'Terrace Loft · Business',
  },
  {
    name: 'Nomvula & Kuda',
    location: 'Cape Town, SA',
    rating: 5,
    title: 'A honeymoon we still talk about.',
    body:
      'The Jacaranda Suite, breakfast on the terrace, sound bath on the Sunday. Staff that somehow anticipate you. We planned three nights; we stretched it to six.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    stay: 'Jacaranda Honeymoon Suite',
  },
  {
    name: 'Alice van B.',
    location: 'Amsterdam, NL',
    rating: 4,
    title: 'Proper yoga, proper food, proper garden.',
    body:
      'I travel a lot for work and I judge hotels by breakfast. Theirs is the best I\'ve had south of Lisbon. The yoga deck is a genuine sanctuary. I\'d return in a breath.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    stay: 'Studio Retreat · Solo',
  },
  {
    name: 'Rumbidzai T.',
    location: 'Bulawayo',
    rating: 5,
    title: 'A retreat that actually retreats.',
    body:
      'I booked a spa half-day and a night in the Garden Suite to clear my head after a hard month. I cried on the yoga deck, laughed at dinner, slept eleven hours. Thank you.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    stay: 'Garden Suite · Solo retreat',
  },
];

// About — the house, the people
export const aboutStory = {
  eyebrow: 'The House',
  title: 'A borrowed quiet, in the middle of the city.',
  paragraphs: [
    'Masawara began as a family home in the early nineties — a three-bedroom bungalow at the end of a lane of jacarandas. When Rumbidzai took it over in 2017, she did the hardest thing: she left most of it alone. The fig tree stayed. The walls stayed. The slow light through the kitchen window stayed.',
    'What we added was hospitality. Eleven considered suites, a garden restaurant, a walled spa, a yoga deck tucked behind the old servant\'s quarter. Each piece small. Each piece meant.',
    'The name — Masawara — is a word our grandmothers used for a place you went to rest. That, still, is the whole idea.',
  ],
  image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80',
  image2: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=1200&q=80',
};

export const team = [
  {
    name: 'Rumbidzai Munyoro',
    role: 'Founder & Host',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80',
    bio: 'Hotelier, gardener, lapsed architect. Bought the house on a whim in 2017 and has not regretted it for a single morning.',
  },
  {
    name: 'Chef Tendai Moyo',
    role: 'Head Chef',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    bio: 'Trained in Cape Town and Lyon. Returned to Harare for the tomatoes. Changes the menu quietly, almost fortnightly.',
  },
  {
    name: 'Tawanda Chidiya',
    role: 'Head Gardener',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=800&q=80',
    bio: 'Knows every plant by both its Latin and its Shona name. Will talk about jacarandas for hours if you let him.',
  },
  {
    name: 'Priya Naidoo',
    role: 'Spa Director',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    bio: 'Certified in five modalities, gifted at seven. Believes in long silences and the restorative power of a properly brewed rooibos.',
  },
];

// FAQ
export const faqs = [
  {
    q: 'What time is check-in and check-out?',
    a: 'Check-in from 14:00, check-out by 11:00. We are always happy to hold your bags and give you the run of the garden either side.',
  },
  {
    q: 'Do you welcome children?',
    a: 'Our Walled Garden Cottage is designed for families with children. The main house is kept quieter and is intended for guests twelve and over.',
  },
  {
    q: 'Can non-residents dine at the restaurant?',
    a: 'Yes — dinner service is open to outside guests by reservation. The patio restaurant seats thirty-two and fills quickly on weekends.',
  },
  {
    q: 'Is there airport transfer?',
    a: 'We arrange private transfers from Robert Mugabe International (45 minutes) on request. Please let us know your flight in the booking notes.',
  },
  {
    q: 'What is your cancellation policy?',
    a: 'Full refund up to 7 days before arrival; 50% refund 7–3 days prior. No refund within 72 hours, with kindness always shown to genuine emergencies.',
  },
  {
    q: 'Do you host weddings?',
    a: 'Intimate celebrations only — Xhale seats thirty, the garden hosts up to sixty for a standing reception. We are not a venue for big weddings and that is the point.',
  },
];

// Stats for hero strip
export const stats = [
  { value: '11', label: 'Garden suites' },
  { value: '4.5', label: 'Guest rating' },
  { value: '331', label: 'Reviews' },
  { value: '2017', label: 'Quietly since' },
];

export default {
  business,
  hero,
  suites,
  amenities,
  diningSections,
  spaTreatments,
  yogaSchedule,
  experiences,
  reviews,
  aboutStory,
  team,
  faqs,
  stats,
};
