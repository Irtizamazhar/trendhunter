export type Trend = {
  slug: string;
  title: string; // e.g. "Sodium-Ion Battery Systems"
  subtitle: string; // headline line
  description: string; // 2-3 sentence blurb
  category: string; // category slug
  image: string;
  date: string; // "MAY 18, 2026"
  score: number; // 0-10
};

const img = (slug: string) => `https://picsum.photos/seed/${slug}/800/600`;

export const trends: Trend[] = [
  // AI
  {
    slug: "autonomous-inventory-robots",
    title: "Autonomous Inventory Robots",
    subtitle: "Retail Floors Are Being Scanned by Self-Navigating Bots",
    description:
      "A new fleet of warehouse and storefront robots uses computer vision to track stock in real time, flagging gaps before staff ever notice them. The rollout points to fully self-auditing retail environments.",
    category: "ai",
    image: img("autonomous-inventory-robots"),
    date: "JUN 14, 2026",
    score: 8.1,
  },
  {
    slug: "ai-travel-guides",
    title: "AI Travel Guides",
    subtitle: "Personalized Itineraries Are Generated in Seconds",
    description:
      "Travel platforms are deploying conversational AI guides that build hour-by-hour itineraries from a traveler's mood, budget and pace. The tools blend local data with generative planning for hyper-tailored trips.",
    category: "ai",
    image: img("ai-travel-guides"),
    date: "JUN 12, 2026",
    score: 7.4,
  },
  {
    slug: "cognitive-customer-agents",
    title: "Cognitive Customer Agents",
    subtitle: "Support Lines Now Reason Through Complex Requests",
    description:
      "Next-generation service agents move beyond scripted answers, reasoning across multiple systems to resolve layered customer problems. Brands report sharp drops in escalation rates.",
    category: "ai",
    image: img("cognitive-customer-agents"),
    date: "JUN 10, 2026",
    score: 7.9,
  },
  {
    slug: "generative-design-studios",
    title: "Generative Design Studios",
    subtitle: "Agencies Spin Up Thousands of Concepts on Demand",
    description:
      "Creative shops are pairing art directors with generative systems that produce thousands of on-brand visual concepts in minutes. The model reframes designers as curators of machine output.",
    category: "ai",
    image: img("generative-design-studios"),
    date: "JUN 8, 2026",
    score: 6.8,
  },

  // Tech
  {
    slug: "sodium-ion-battery-systems",
    title: "Sodium-Ion Battery Systems",
    subtitle: "A New Grid-Scale Energy Storage Platform Was Introduced",
    description:
      "A major automaker unveiled grid-scale storage built on sodium-ion chemistry, trading lithium scarcity for cheaper, more abundant materials. The systems target utilities seeking resilient, low-cost backup power.",
    category: "tech",
    image: img("sodium-ion-battery-systems"),
    date: "JUN 13, 2026",
    score: 8.4,
  },
  {
    slug: "foldable-eink-tablets",
    title: "Foldable E-Ink Tablets",
    subtitle: "Paper-Like Screens Now Bend Without Cracking",
    description:
      "A wave of foldable e-ink devices brings glare-free, low-power reading to a pocketable form factor. The displays promise weeks of battery life alongside notebook-style flexibility.",
    category: "tech",
    image: img("foldable-eink-tablets"),
    date: "JUN 11, 2026",
    score: 7.2,
  },
  {
    slug: "ambient-health-sensors",
    title: "Ambient Health Sensors",
    subtitle: "Rooms That Quietly Monitor Wellbeing",
    description:
      "Contactless sensors embedded in walls and ceilings track heart rate, breathing and sleep without wearables. The systems aim at eldercare and recovery monitoring with privacy-first processing.",
    category: "tech",
    image: img("ambient-health-sensors"),
    date: "JUN 9, 2026",
    score: 7.0,
  },
  {
    slug: "spatial-workspaces",
    title: "Spatial Workspaces",
    subtitle: "Headsets Replace the Multi-Monitor Desk",
    description:
      "Lightweight mixed-reality headsets are positioning floating, infinite displays as a credible laptop companion. Early adopters cite focus gains from a distraction-free spatial canvas.",
    category: "tech",
    image: img("spatial-workspaces"),
    date: "JUN 7, 2026",
    score: 6.6,
  },

  // Life
  {
    slug: "modern-apartment-tiny-homes",
    title: "Modern Apartment-Like Tiny Homes",
    subtitle: "Compact Living Gets a High-Design Upgrade",
    description:
      "A new class of prefab tiny homes mimics the finishes and layouts of upscale city apartments. Buyers get floor-to-ceiling glass and smart storage in a footprint that fits a backyard.",
    category: "life",
    image: img("modern-apartment-tiny-homes"),
    date: "JUN 14, 2026",
    score: 7.6,
  },
  {
    slug: "functional-mocktail-bars",
    title: "Functional Mocktail Bars",
    subtitle: "Zero-Proof Menus Are Built Around Adaptogens",
    description:
      "Bars dedicated to non-alcoholic drinks are layering in adaptogens and nootropics for mood and focus. The format reframes a night out around feeling good the next morning.",
    category: "life",
    image: img("functional-mocktail-bars"),
    date: "JUN 12, 2026",
    score: 7.1,
  },
  {
    slug: "sleep-tourism-retreats",
    title: "Sleep Tourism Retreats",
    subtitle: "Hotels Sell Rest as the Main Attraction",
    description:
      "Resorts are designing entire stays around sleep optimization, from circadian lighting to pillow sommeliers. The packages tap a wellness market that now prizes recovery over activity.",
    category: "life",
    image: img("sleep-tourism-retreats"),
    date: "JUN 6, 2026",
    score: 6.9,
  },

  // Pop Culture
  {
    slug: "fan-edited-film-releases",
    title: "Fan-Edited Film Releases",
    subtitle: "Studios Embrace Community Re-Cuts",
    description:
      "Studios are officially licensing fan re-edits, turning grassroots remixes into sanctioned alternate versions. The move blurs the line between audience and author.",
    category: "popculture",
    image: img("fan-edited-film-releases"),
    date: "JUN 13, 2026",
    score: 7.3,
  },
  {
    slug: "ai-revived-sitcoms",
    title: "AI-Revived Sitcoms",
    subtitle: "Beloved Shows Return With Synthetic Episodes",
    description:
      "Rights holders are commissioning AI-assisted episodes that extend classic sitcoms in their original style. The trend sparks fresh debate over nostalgia, consent and creative ownership.",
    category: "popculture",
    image: img("ai-revived-sitcoms"),
    date: "JUN 10, 2026",
    score: 6.5,
  },
  {
    slug: "micro-celebrity-merch",
    title: "Micro-Celebrity Merch Drops",
    subtitle: "Niche Creators Out-Sell Mainstream Brands",
    description:
      "Small creators with devoted audiences are launching limited merch that sells out in minutes. The drops prove that depth of community can beat sheer reach.",
    category: "popculture",
    image: img("micro-celebrity-merch"),
    date: "JUN 5, 2026",
    score: 6.7,
  },

  // Art & Design
  {
    slug: "biophilic-office-pods",
    title: "Biophilic Office Pods",
    subtitle: "Meeting Rooms Are Wrapped in Living Walls",
    description:
      "Designers are enclosing focus pods in moss, vines and natural light to reduce stress at work. The installations treat greenery as core infrastructure rather than decoration.",
    category: "artdesign",
    image: img("biophilic-office-pods"),
    date: "JUN 14, 2026",
    score: 7.5,
  },
  {
    slug: "modular-color-block-furniture",
    title: "Modular Color-Block Furniture",
    subtitle: "Sofas Reconfigure Like Building Blocks",
    description:
      "A bold furniture line lets owners rearrange vivid, snap-together modules into endless layouts. The pieces target renters who move often and crave personalization.",
    category: "artdesign",
    image: img("modular-color-block-furniture"),
    date: "JUN 11, 2026",
    score: 7.0,
  },
  {
    slug: "projection-mapped-facades",
    title: "Projection-Mapped Facades",
    subtitle: "Buildings Become Nightly Art Canvases",
    description:
      "Cities are commissioning rotating projection art that transforms blank facades after dark. The works turn ordinary architecture into shared public spectacle.",
    category: "artdesign",
    image: img("projection-mapped-facades"),
    date: "JUN 4, 2026",
    score: 6.8,
  },

  // Marketing
  {
    slug: "scent-branded-popups",
    title: "Scent-Branded Pop-Ups",
    subtitle: "Retailers Trademark a Signature Smell",
    description:
      "Brands are launching pop-ups built entirely around a proprietary scent that customers associate with the label. The sensory strategy aims to make recall stick long after the visit.",
    category: "marketing",
    image: img("scent-branded-popups"),
    date: "JUN 13, 2026",
    score: 7.2,
  },
  {
    slug: "playable-billboard-ads",
    title: "Playable Billboard Ads",
    subtitle: "Outdoor Screens Turn Passersby Into Players",
    description:
      "Interactive billboards let crowds control on-screen games with their phones in real time. The format converts dwell time into measurable, shareable engagement.",
    category: "marketing",
    image: img("playable-billboard-ads"),
    date: "JUN 9, 2026",
    score: 6.9,
  },
  {
    slug: "creator-cooperative-campaigns",
    title: "Creator Cooperative Campaigns",
    subtitle: "Brands Co-Own Content With Their Audience",
    description:
      "Marketers are forming revenue-sharing cooperatives with creators instead of one-off sponsorships. The structure aligns incentives and produces steadier, more authentic content.",
    category: "marketing",
    image: img("creator-cooperative-campaigns"),
    date: "JUN 3, 2026",
    score: 6.6,
  },

  // Business
  {
    slug: "micro-fulfillment-hubs",
    title: "Micro-Fulfillment Hubs",
    subtitle: "Retailers Convert Back Rooms Into Robotic Warehouses",
    description:
      "Chains are retrofitting store back rooms with compact robotic fulfillment to enable same-hour delivery. The model shrinks last-mile costs by moving inventory closer to buyers.",
    category: "business",
    image: img("micro-fulfillment-hubs"),
    date: "JUN 14, 2026",
    score: 7.8,
  },
  {
    slug: "outcome-based-pricing",
    title: "Outcome-Based Pricing",
    subtitle: "Vendors Charge Only When Results Land",
    description:
      "B2B providers are tying fees directly to measurable customer outcomes rather than seats or usage. The shift rewards real impact and reshapes how value is sold.",
    category: "business",
    image: img("outcome-based-pricing"),
    date: "JUN 10, 2026",
    score: 7.1,
  },
  {
    slug: "four-day-retail-weeks",
    title: "Four-Day Retail Weeks",
    subtitle: "Chains Test Compressed Schedules in Stores",
    description:
      "Retailers are piloting four-day workweeks on the sales floor to cut burnout and lift retention. Early data shows steady sales with happier, more present staff.",
    category: "business",
    image: img("four-day-retail-weeks"),
    date: "JUN 2, 2026",
    score: 6.7,
  },

  // Eco
  {
    slug: "mushroom-mycelium-packaging",
    title: "Mushroom Mycelium Packaging",
    subtitle: "Protective Foam Is Grown, Not Molded",
    description:
      "Shippers are replacing plastic foam with mycelium packaging grown to fit each product and composted after use. The material matches foam's protection with a fraction of the footprint.",
    category: "eco",
    image: img("mushroom-mycelium-packaging"),
    date: "JUN 13, 2026",
    score: 8.0,
  },
  {
    slug: "balcony-solar-kits",
    title: "Balcony Solar Kits",
    subtitle: "Renters Generate Power Without a Roof",
    description:
      "Plug-in solar kits designed for balconies let apartment dwellers offset their own electricity use. The compact systems open clean energy to households long shut out of solar.",
    category: "eco",
    image: img("balcony-solar-kits"),
    date: "JUN 8, 2026",
    score: 7.7,
  },
  {
    slug: "refill-on-demand-pods",
    title: "Refill-On-Demand Pods",
    subtitle: "Neighborhood Kiosks Replace Single-Use Bottles",
    description:
      "Smart refill kiosks dispense household staples into reusable containers right in the neighborhood. The pods cut packaging waste while undercutting bottled prices.",
    category: "eco",
    image: img("refill-on-demand-pods"),
    date: "JUN 1, 2026",
    score: 7.0,
  },

  // Social Good
  {
    slug: "skill-share-charity-platforms",
    title: "Skill-Share Charity Platforms",
    subtitle: "Volunteers Donate Expertise Instead of Cash",
    description:
      "New platforms match professionals with nonprofits that need their specific skills for short projects. The model turns idle expertise into high-leverage impact.",
    category: "socialgood",
    image: img("skill-share-charity-platforms"),
    date: "JUN 12, 2026",
    score: 7.3,
  },
  {
    slug: "community-fridge-networks",
    title: "Community Fridge Networks",
    subtitle: "Shared Coolers Fight Local Food Waste",
    description:
      "Coordinated networks of public fridges let neighbors and businesses redistribute surplus food freely. The grassroots infrastructure tackles hunger and waste at once.",
    category: "socialgood",
    image: img("community-fridge-networks"),
    date: "JUN 6, 2026",
    score: 7.0,
  },

  // Luxury
  {
    slug: "bespoke-electric-grand-tourers",
    title: "Bespoke Electric Grand Tourers",
    subtitle: "Coachbuilders Reinvent the Luxury EV",
    description:
      "Heritage coachbuilders are crafting one-off electric grand tourers with hand-finished interiors. The cars pair silent powertrains with old-world artisanal detail.",
    category: "luxury",
    image: img("bespoke-electric-grand-tourers"),
    date: "JUN 13, 2026",
    score: 7.9,
  },
  {
    slug: "private-observatory-residences",
    title: "Private Observatory Residences",
    subtitle: "Homes Are Built Around Personal Telescopes",
    description:
      "Ultra-luxury developments now feature rooftop observatories with research-grade optics. The amenity sells the night sky as the ultimate private view.",
    category: "luxury",
    image: img("private-observatory-residences"),
    date: "JUN 7, 2026",
    score: 7.2,
  },
  {
    slug: "collectible-digital-watch-faces",
    title: "Collectible Digital Watch Faces",
    subtitle: "Maisons Sell Numbered Virtual Complications",
    description:
      "Watchmakers are releasing limited-edition digital complications as collectible companions to physical pieces. The drops extend horological craft onto the wrist's smart display.",
    category: "luxury",
    image: img("collectible-digital-watch-faces"),
    date: "MAY 30, 2026",
    score: 6.8,
  },

  // Fashion
  {
    slug: "color-shifting-textiles",
    title: "Color-Shifting Textiles",
    subtitle: "Garments Change Hue With Temperature",
    description:
      "A new fabric shifts color in response to heat, letting a single garment read differently across a day. Designers are using it to merge function with playful expression.",
    category: "fashion",
    image: img("color-shifting-textiles"),
    date: "JUN 12, 2026",
    score: 7.5,
  },
  {
    slug: "made-to-order-sneaker-labs",
    title: "Made-to-Order Sneaker Labs",
    subtitle: "In-Store Machines Print Shoes to Fit",
    description:
      "Retail labs scan a customer's foot and produce a custom sneaker on the spot, eliminating sizing guesswork. The on-demand model also slashes unsold inventory.",
    category: "fashion",
    image: img("made-to-order-sneaker-labs"),
    date: "JUN 9, 2026",
    score: 7.4,
  },
  {
    slug: "waterless-dye-collections",
    title: "Waterless Dye Collections",
    subtitle: "Brands Color Fabric Without a Drop",
    description:
      "Apparel labels are adopting waterless dyeing that uses pressurized CO₂ instead of vast water baths. The process cuts pollution while sharpening color vibrancy.",
    category: "fashion",
    image: img("waterless-dye-collections"),
    date: "MAY 29, 2026",
    score: 7.0,
  },

  // Unique / Bizarre
  {
    slug: "floral-laundry-boosters",
    title: "Floral Laundry Boosters",
    subtitle: "Detergent Pods Bloom Into Real Petals",
    description:
      "A quirky laundry product dissolves to release dried petals alongside fragrance, turning a chore into a sensory moment. It is equal parts novelty and aromatherapy.",
    category: "unique",
    image: img("floral-laundry-boosters"),
    date: "JUN 11, 2026",
    score: 6.4,
  },
  {
    slug: "edible-cutlery-sets",
    title: "Edible Cutlery Sets",
    subtitle: "Utensils You Eat After the Meal",
    description:
      "Baked, flavored utensils replace single-use plastic and become a crunchy finish to the meal. The novelty doubles as a waste-free dining statement.",
    category: "unique",
    image: img("edible-cutlery-sets"),
    date: "JUN 5, 2026",
    score: 6.6,
  },
  {
    slug: "glow-in-dark-plant-decor",
    title: "Glow-in-the-Dark Plant Decor",
    subtitle: "Houseplants Engineered to Light the Room",
    description:
      "Bioengineered houseplants emit a soft glow at night, doubling as living nightlights. The eerie-beautiful decor blurs biology and interior design.",
    category: "unique",
    image: img("glow-in-dark-plant-decor"),
    date: "MAY 28, 2026",
    score: 6.9,
  },
];

export function getTrend(slug: string): Trend | undefined {
  return trends.find((t) => t.slug === slug);
}

export function trendsByCategory(slug: string): Trend[] {
  return trends.filter((t) => t.category === slug);
}

export function relatedTrends(trend: Trend, count = 4): Trend[] {
  const sameCat = trends.filter(
    (t) => t.category === trend.category && t.slug !== trend.slug,
  );
  const others = trends.filter(
    (t) => t.category !== trend.category && t.slug !== trend.slug,
  );
  return [...sameCat, ...others].slice(0, count);
}

// Sorted by score for ranking strips
export const topTrends: Trend[] = [...trends].sort((a, b) => b.score - a.score);
