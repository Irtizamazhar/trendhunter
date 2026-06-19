export type Category = {
  slug: string; // route slug
  navLabel: string; // short label in category bar
  title: string; // "Top Trends in AI"
  description: string; // hero paragraph
  subCategories: string[];
};

// Shared tech sub-categories reused by AI + Tech
const techSubs = [
  "AI",
  "Computers",
  "Gadgets",
  "Games",
  "Mobile",
  "Multimedia",
  "Photography",
  "Robots",
  "Science",
];

export const categories: Category[] = [
  {
    slug: "ai",
    navLabel: "AI",
    title: "Top Trends in AI",
    description:
      "Explore the fast-moving frontier of artificial intelligence — machine learning, natural language processing, robotics and cognitive computing reshaping how businesses and people create the future.",
    subCategories: techSubs,
  },
  {
    slug: "tech",
    navLabel: "Tech",
    title: "Top Trends in Tech",
    description:
      "Discover cutting-edge devices, multimedia breakthroughs, mobile innovation and the next generation of smartphones, gadgets and connected experiences.",
    subCategories: techSubs,
  },
  {
    slug: "life",
    navLabel: "Life",
    title: "Top Trends in Life",
    description:
      "A curated look at lifestyle, leisure, consumer behavior and the modern entertainment experiences shaping how we live day to day.",
    subCategories: [
      "Drinking",
      "Food",
      "Health",
      "Hip Hotels",
      "Pets",
      "Romance",
      "Sports",
      "Travel",
      "Weddings",
    ],
  },
  {
    slug: "popculture",
    navLabel: "Culture",
    title: "Top Trends in Pop Culture",
    description:
      "From viral videos and film merchandise to political satire, track the moments and movements defining global culture right now.",
    subCategories: [
      "Celeb Fashion",
      "Celeb Products",
      "Celebs",
      "Humor",
      "Internet",
      "Leaders",
      "Media",
      "Political",
      "Viral",
    ],
  },
  {
    slug: "artdesign",
    navLabel: "Design",
    title: "Top Trends in Art & Design",
    description:
      "Interior decor, architecture, installations and the visual ideas pushing creative boundaries across art and design disciplines.",
    subCategories: [
      "Architecture",
      "Customization",
      "Design",
      "DIY",
      "Furniture",
      "Graffiti",
      "Home",
      "Kitchen",
      "Live Arts",
      "Modern",
    ],
  },
  {
    slug: "marketing",
    navLabel: "Ads",
    title: "Top Trends in Marketing",
    description:
      "Campaigns, advertising and publicity stunts that capture attention — the boldest branded ideas and the strategy behind them.",
    subCategories: [
      "Billboards",
      "Branding",
      "Commercials",
      "Interactive",
      "Print",
      "Publicity Stunts",
    ],
  },
  {
    slug: "business",
    navLabel: "Business",
    title: "Top Trends in Business",
    description:
      "Entrepreneurs, ventures and retail technology — the strategies, startups and market shifts driving the future of commerce.",
    subCategories: ["Books", "Interviews", "Market", "New Ventures", "Retail"],
  },
  {
    slug: "eco",
    navLabel: "Eco",
    title: "Top Trends in Eco",
    description:
      "Green packaging, solar energy and sustainable living — the innovations helping brands and consumers tread more lightly on the planet.",
    subCategories: [
      "Eco Architecture",
      "Eco Fashion",
      "Energy",
      "Green Packaging",
      "Solar",
      "Transportation",
    ],
  },
  {
    slug: "socialgood",
    navLabel: "Good",
    title: "Top Trends in Social Good",
    description:
      "Charities, community initiatives and cause marketing — purpose-driven ideas that prove doing good and doing well can go together.",
    subCategories: ["Activism", "Charity", "Education", "Religious", "Social Business"],
  },
  {
    slug: "luxury",
    navLabel: "Luxury",
    title: "Top Trends in Luxury",
    description:
      "Premium tech, home decor, collectibles and automobiles — the most coveted products and experiences at the very top of the market.",
    subCategories: [
      "Autos",
      "Jewelry",
      "Luxury Fashion",
      "Ultra Luxury",
      "Watches",
    ],
  },
  {
    slug: "fashion",
    navLabel: "Fashion",
    title: "Top Trends in Fashion",
    description:
      "Beauty, DIY clothing and futuristic apparel — the looks, collaborations and materials defining what we wear next.",
    subCategories: [
      "Cosmetics",
      "Fashion for Men",
      "Hair",
      "Hip Fashion",
      "Shoes",
      "Underwear",
    ],
  },
  {
    slug: "unique",
    navLabel: "Bizarre",
    title: "Top Trends in Bizarre",
    description:
      "Obscure, abstract and eclectic — the one-of-a-kind ideas that are too strange, too clever or too wonderful to ignore.",
    subCategories: ["Inventions", "Toys", "Unique", "Viral", "Weird"],
  },
];

export const categoryBar: { label: string; slug: string }[] = [
  { label: "All", slug: "" },
  ...categories.map((c) => ({ label: c.navLabel, slug: c.slug })),
  { label: "Keynotes", slug: "future-festival" },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

// Full 80+ topic cloud for the "Explore Topics" section
export const topicCloud: string[] = [
  "Graffiti", "Inventions", "Celeb Products", "Regional", "Billboards",
  "Internet", "Celebs", "Interactive", "DIY", "Multimedia", "Furniture",
  "World", "Publicity Stunts", "Books", "Modern", "Branding", "Robots",
  "Market", "Shoes", "Business", "Games", "Eco Architecture", "Romance",
  "Computers", "Kitchen", "Lifestyle", "Gadgets", "Religious", "Boomers",
  "Eco", "Commercials", "AI", "Bizarre", "Drinking", "Hip Hotels", "Travel",
  "Architecture", "Humor", "Fashion for Men", "Political", "Fashion",
  "Art & Design", "Transportation", "Social Business", "Charity", "Activism",
  "Pop Culture", "Customization", "Tech", "Celeb Fashion", "Cosmetics",
  "Home", "Luxury Fashion", "Print", "Hip Fashion", "Sports", "Babies",
  "Photography", "Social Good", "Jewelry", "Live Arts", "Underwear", "Youth",
  "Ultra Luxury", "Viral", "Pets", "Education", "Marketing", "Food", "Toys",
  "Design", "Mobile", "Hair", "Weddings", "Life", "Media", "Social Media",
  "New Ventures", "Leaders", "Retail", "Autos", "Science", "Health",
  "Watches", "Seniors",
];
