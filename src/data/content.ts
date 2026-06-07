import type { Product, Testimonial, Stat, NavLink, TeamMember, TimelineEvent, FooterColumn, ContactItem, HoursEntry, BentoItem } from '../types';

// --- Products (Stitch shop + best sellers) ---

export const products: Product[] = [
  {
    id: 'ruby-grapes',
    name: 'Ruby Grapes',
    category: 'Fruits',
    unit: 'lb',
    price: 4.99,
    badge: 'Seasonal',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwSC2DF-twLafSXDbAnK8HIGY0f9wzUl4b46A7WZM8fmpEj3CQbk7OxJvMuiejWjuDdcsaF9rYo0CInzRz2z0Le1jvqZEyBABtXPFvkBxAS-cXZgM9X8kCOhxf4ct7Ld_uz6ydlCsD1P9e6b5HydtQeYzQPiJQUzJuvkNPJ0J3T6neKoCJkl3CTprIwW1sHQkcFZCmsh4tUXSCelFglbVnOCPLjC4QFH32PlFUIcBKUjcOGfsFXBKy7RRXmUw-9Rf06QHqj2JZAKY',
    description: 'Hand-picked seedless ruby grapes, sun-ripened on the vine. Crisp, juicy, and bursting with antioxidants.',
    origin: 'Vineyard Valley',
  },
  {
    id: 'earth-carrots',
    name: 'Earth Carrots',
    category: 'Vegetables',
    unit: 'bunch',
    price: 3.25,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBETUgcMOGG9iel8fLqEIjzYTCZn-SYVyg2ao6pOUO-1Xz-tCTlGwD2uI-ijkpJ3VdqBWeZaRyhl4YZX8jYgw0F_Ev2ZUCECnocxlk8N7UoLVCSenlTiT-Kaj-fRNXCAzmLE8fciK8YkPmBiFZoovHSQuYVvbBkfUmaDcqP2X8tgwMlosu3FvkD7VByCLBkr5kTzbzEiqV-QKbfxfTZtBG1JbhFLJ1CyDPW8qsUxJaJe1u5TdWLqgjqR4Nou-kJCtvXPDMdAj9lZ0I',
    description: 'Soil-kissed rainbow carrots, sweet and earthy. Dusted clean and ready to roast, juice, or munch raw.',
    origin: 'Red Soil Farm',
  },
  {
    id: 'pure-milk',
    name: 'Pure Milk',
    category: 'Dairy',
    unit: 'qt',
    price: 5.5,
    badge: 'A2 Cow',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBr7jmrLx56srAs32B9CYu8PeC8MpWWlFxX13c8uhdyrWqsuioZclU2X5p3nYEKt4RBj_dr-Y6gcR9bZlNBZjoJlRtdlMdMVFENEE-b0g0ChZFU1W_ByS9LyBfbT2Hzq3xfoYctS2Mq0yAshoFWKzwVcJYeqF8G80j6VkBmMWNnDKIaxJjeKuTkobrsA3N12cI5835HukAatesF6fritj2aVsbmnEOPHRsT6LHEbXyTPIuEQWZcAAR5EQWYaqoWZgX-ZDK88cx7icU',
    description: 'A2 cow milk from free-grazing desi cows, unhomogenised and full of natural cream. Chilled at the source.',
    origin: 'Pasture Hills',
  },
  {
    id: 'crisp-apples',
    name: 'Crisp Apples',
    category: 'Fruits',
    unit: 'lb',
    price: 2.99,
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBc_rTZ2GE5jqmdyzRKZre5SWaikuH3sR8g22gR5BMsakBcEWVRn6GVbRDzWsHIMGQawNmb_mwtxaE3BJ0oROzpfHemyQWlyLIa2Jn56kSmzcfJdJseVOSlGaJ-I4IuK-NXzcvQl_e6O2zqsqAqfKfXwMehEtOmIwnLwinW4J_-oh98M-9hmyj50WTAD5zNPewC2YhigkS15OWODKQiSGjj0KrToYlilJMmq9uYvySD_gbPJu9FJp9xopIG06RVY4Iee0s2cDe_3nE',
    description: 'Crunchy hill apples, naturally sweet and slow-ripened at high altitude. Snacking perfection.',
    origin: 'Orchard Heights',
  },
  {
    id: 'fresh-kale',
    name: 'Fresh Kale',
    category: 'Greens',
    unit: 'bunch',
    price: 3.75,
    image:
      'https://images.unsplash.com/photo-1524179091875-bf99a9a6af57?w=600&h=600&fit=crop',
    description: 'Tuscan kale bunches harvested at dawn. Dense in iron, perfect for sautés, smoothies, and chips.',
    origin: 'Greenhouse Co-op',
  },
  {
    id: 'wild-honey',
    name: 'Wild Forest Honey',
    category: 'Greens',
    unit: 'jar',
    price: 8.5,
    badge: 'Raw',
    image:
      'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=600&fit=crop',
    description: 'Raw, unfiltered honey collected from forest apiaries. Floral, deep, and mineral-rich.',
    origin: 'Forest Edge',
  },
];

// --- Testimonials (Stitch "Shared from the Table") ---

export const testimonials: Testimonial[] = [
  {
    id: 'sarah',
    quote:
      'I used to drive forty minutes to the farmers market. Now Ruby Grapes and Earth Carrots show up at my door before the school run. The kids can actually taste the difference.',
    name: 'Sarah Jenkins',
    role: 'Mother of Two · Verified Buyer',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBy8akHhlrBEu2lT644fDivp4l21JGaOfzT_d7thptvqT43iepMPbZBNO9SrUnotIbDt4y1ui1qNPWxq98-l9_aWbVyfi34YcfKZomXJFQgN1665IrinyvxhTC3UKQAZmoai5hnOcUa1foyDTh0etBZadHXsjTdhF4dfuyzxrxcrs8Bl-xlkzyTXwaTSt8rMlhUAykTW-hWQVlPSLNByPfFKlwpy6ob54AeChaHJFniDOA7l6aeo9n6yXmOKl3qn_iCOktjZ8v_aVs',
    rating: 5,
  },
  {
    id: 'marcus',
    quote:
      'The A2 milk is the closest thing to my grandmother\u2019s farm. Real cream on top, glass bottle, no nonsense. PalleFreshFoods is what every neighborhood deserves.',
    name: 'Marcus Thorne',
    role: 'Restaurant Owner',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3W_XR0IxGvpDRb3sCEEjALZdtfjk--MT4PANes-zsFctFzIkTxWsLiiRYkjOHFq-OTbGNPnp4r2MBe6KumuuBUecKfSKiADpH_hC-fuhJRUsjJikBj2kiYfIAcQxUYg2nzc9KH7TtFpl7rjx9xvbYVCmf_dP9rKyMZfFMPeXt27sB6coWHZ527aYOlrb7xrts78z_me18QuMuumcakuPoBC2__v1T7HTQRMGl1OQsppTLgQi80rAEZxBDRtuYsyYXTxhwOp4wE40',
    rating: 5,
  },
  {
    id: 'elena',
    quote:
      'Sustainable, traceable, and absurdly fresh. I love that I can see which farm every bunch of kale came from. It changed how my family eats.',
    name: 'Elena Rodriguez',
    role: 'Sustainability Advocate',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4o7tDbv1BmSQTJq_OFc_nrkn7asBwyXoSzy03FySvuL6bVR6lt81gFYzDItrULDtXXyC-IG8c66RjoSDsLkNbDxJBeLO9shcrsezfOUp-8wyc3kXWzAL8pxKuLVYVGiUXgmzjvfqKFfXn83qcyjVwSi2D7v4BMw5JbUoIkA_C1m6clOUVkpy5i1sf0CMUCVC2PfV2zS0nMStQyA6l1_4lTDSypA4W0-wPmi66KZnYwtsxhWR5shiCci0yC0R0HAjPiDn9HMVx0wo',
    rating: 5,
  },
];

// --- Stats (Stitch count-up section) ---

export const stats: Stat[] = [
  { value: 10000, suffix: '+', label: 'Happy Customers' },
  { value: 150, suffix: '+', label: 'Local Farms' },
  { value: 100, suffix: '%', label: 'Organic Certified' },
];

// --- Nav links (Stitch header) ---

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/products' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// --- Team (Stitch "Cultivators" flip cards) ---

export const teamMembers: TeamMember[] = [
  {
    name: 'Sarah Palle',
    role: 'Founder & Head Cultivator',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDO_Qa4aacFFtxaiEZW_Un8HcvxkJi45ZzKT_O2Ts6KwAU8kEHhyENEOCFj-LzRt1cNpF5QXtyjrrEq5BbZMxh6lmFcx-DpwpdnufXaBrdCHVQosLZXvoL8u8Zi8eXI5tXvskTGAt9N86frPaLE0p8LuutIaqS8w1oa3yXK4j3_talp0FHnHAt4R_KVC3ERWtYvJXglu88N8dOWV-uxXFVwA647heS2IKkDJtTZcoUbPYc5sWgR-7ZXhye5SYRVJR0C2O6wHemyRnc',
    bio: 'Third-generation farmer, soil nerd, and the reason the kale tastes like that.',
  },
  {
    name: 'Marcus Chen',
    role: 'Logistics & Cold Chain Lead',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC3D6H0hLAtLByxzQKodlEQUQye3DnlPbv4G7flhbU32EJ3TnVQ4vw3wfQ-ETdWXf83FEpW6uEJgWJhSKaDlGXT0c31dKgVUHpWyr-XpAOgRcHyL3JobB02IcYBwSw9JoJaB3BWjnFC95R_syibM0mi7Ognqf9P8RkLThQvI6W4l6U7Dx_5QAzG82Un0j8g1nwIs5vEoFyhwfjah2apHm6R6SDySdyphFGkWKY26bbl-oqeSenu4luXFAzJr2lG3q_42J-7ypBy4qs',
    bio: 'Engineer turned farmer. Built the route network that gets produce to your door in under six hours.',
  },
  {
    name: 'Dr. Elena Okafor',
    role: 'Agronomy & Soil Health',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAqTNkQgjLWm8RgYl089q-9h2BD__cHGGDp9DP4zNBQ-CaZk-sWBUq0KHzER_1QrrZOzNZgZKJXGMP9QE5ZXUpnfxACmlEdKbPvCK0vYIoz9vb7KthnNl5BWjg20mtTRLdcL9kpCl1t4PtRS830l9xzenoyY7cXB3QM7nfR6hxdddDCdUMTMj4fRhZECHZXEB8YgJgNWFNIBac5U5BVsU1SZLovujwoiGyXmcIbX3vd8FRUiEu5dH2pGVVGwuLOUxRKfkyNBB3sDqo',
    bio: 'PhD in regenerative soil. Designs the cover-crop and rotation schedule that keeps our land alive.',
  },
];

// --- Timeline (Stitch "Our Story" vertical scroll-progress) ---

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2012',
    title: 'A Backyard Garden',
    body: 'Sarah Palle starts growing greens on half an acre behind her grandmother\u2019s house. First customer: the family next door.',
  },
  {
    year: '2016',
    title: 'Twelve Families',
    body: 'Word spreads. Twelve families, one delivery van, and a printed spreadsheet of weekly orders. The co-op is born.',
  },
  {
    year: '2024',
    title: '150 Local Farms',
    body: 'Today we partner with 150 smallholder farms across the region. Same promise, scaled: honest food, no shortcuts.',
  },
];

// --- Contact (Stitch "Let\u2019s Grow Together") ---

export const contactInfo: ContactItem[] = [
  {
    icon: 'call',
    title: 'Call the Farm',
    primary: '+1 (555) 234-5678',
    secondary: 'Mon\u2013Sat · 6 AM \u2013 8 PM',
  },
  {
    icon: 'mail',
    title: 'Write to Us',
    primary: 'hello@pallefreshfoods.com',
    secondary: 'We reply within an hour',
  },
  {
    icon: 'location_on',
    title: 'Visit the Farm',
    primary: '12 Harvest Lane, Greenfield',
    secondary: 'Tours every Saturday at 10 AM',
  },
];

export const openingHours: HoursEntry[] = [
  { day: 'Monday \u2013 Friday', time: '6:00 AM \u2013 9:00 PM' },
  { day: 'Saturday \u2013 Sunday', time: '7:00 AM \u2013 6:00 PM' },
];

// --- Footer columns (Stitch 4-col footer) ---

export const footerColumns: FooterColumn[] = [
  {
    title: 'Shop',
    links: [
      { label: 'All Produce', href: '/products' },
      { label: 'Fruits', href: '/products' },
      { label: 'Vegetables', href: '/products' },
      { label: 'Dairy & Eggs', href: '/products' },
      { label: 'Combos & Boxes', href: '/products' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/about' },
      { label: 'Eco-System', href: '/about' },
      { label: 'The Farmers', href: '/about' },
      { label: 'Sustainability', href: '/about' },
      { label: 'Press Kit', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Delivery Areas', href: '/contact' },
      { label: 'Track Order', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Bulk Orders', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Settings', href: '#' },
    ],
  },
];

// --- Bento (Stitch "Our Eco-System" 3-pillar) ---

export const ecosystemBento: BentoItem[] = [
  {
    title: 'Regenerative Soils',
    body: 'Cover-crop rotations, no synthetic fertilisers, compost teas brewed on-farm. We measure carbon returned to the soil every season.',
    span: 'md:col-span-7',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQ1dBEUYEVT38fXOmZdydDuUiYP2pMU5AADIOsa-vWhIZA0Vk9erfHLTJSkj-pRovN8OSg9gsD6BTzRi0mSD4YoQ-Nhs5DF6fmXxc4K6IrR_OV3ij2Xp8uFtU341RHDNuEMG3ZPhbONHoVIg0hnK3kjgH14QuFnqn2A6jRyyGfw4TTWE1T6SWdaA1iCAW2XsC0qaUF1woACfcoyDlWRHf5jlypG6XOflzoYKrLpsQ-RFwe0aOX_-jnP2iR_f4F8Z7gjOYd5wwb-58',
    icon: 'compost',
    accent: 'primary',
  },
  {
    title: 'Water Wisdom',
    body: 'Drip irrigation, rainwater harvesting, and drought-tolerant heirlooms cut our water use by 62% versus conventional farms.',
    span: 'md:col-span-5',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC_SHmnbpoxFJ4Muzg7jO5FgVMGM3ioLYTwNxNtAltwp6ec9tGlyuYL3SEiog8S-u0hXTjLXzjaqCC1Ln5FoCYD5OQ91d9OZbKRGGMKMFLTxW0xVppBM4Qa36CjtOUuL2wki0OZt_57T3G7G72ZI-1P1fYuOhFKgJgGnYIeZ51_NQSVZwwZk-8WovdNpP82vr7hI4-YMz1u9bpaGYoNJVsbJWe11hytfLTvtlfySL6qIJw8xFZHFTVG5u0e1HTnsXOfkbnanGuauwk',
    icon: 'water_drop',
    accent: 'tertiary',
  },
  {
    title: 'Pollinator Meadows',
    body: 'Wildflower margins around every field keep bees, butterflies, and birds thriving. We never spray during bloom windows.',
    span: 'md:col-span-12',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBpYHM-T53GrcybDjEKZzp1CVFok-jaUPDYEwoE6Eqr4L7TBlE2lOM0LdKTDrEQOM2Immy8LnU9QbG2JZ68SUvUX4CbjWpofW4e_333ARDUAQaQVnS-zyODGx0_vH6H3qiGBF-ujE-GzDQbQO31_5ShNDXxUnajL9LyXOGDEC3pSamCfszo-DhUrx3f7cTeJZi0MuEtnXe-Qa1cUf_eF-OfDAtu8wVhtdAse7f3CbWMC7LMlHx5_qWu8tHfEedsXusVaUu5l2RL_EM',
    icon: 'cruelty_free',
    accent: 'secondary',
  },
];

// --- Trust bar items (Stitch marquee) ---

export const trustBarItems = [
  '100% Organic',
  'Farm Fresh',
  'Same-Day Delivery',
  '150+ Local Farms',
  'Carbon-Neutral Shipping',
  'No Middlemen',
  'Harvested at Dawn',
];
