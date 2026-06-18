export type Insight = {
  slug: string;
  title: string;
  trendText: string;
  insightText: string;
  workshopQuestion: string;
  score: number; // 0-10
  popularity: number; // 0-10
  activity: number; // 0-10
  freshness: number; // 0-10
  patterns: string[];
  megatrends: string[];
  related: string[]; // trend slugs
};

export const insights: Insight[] = [
  {
    slug: "conscious-continuity",
    title: "Conscious Continuity",
    trendText:
      "Brands are designing products and packaging that are reused, refilled or regrown rather than discarded after a single use.",
    insightText:
      "As consumers grow weary of disposability, they reward companies that build longevity and circularity directly into the product experience — turning sustainability from a claim into a default.",
    workshopQuestion:
      "How might your brand redesign its most disposable product so that continued use, not replacement, becomes the path of least resistance?",
    score: 6.6,
    popularity: 6.2,
    activity: 7.1,
    freshness: 6.4,
    patterns: ["Convergence", "Reduction", "Cyclicality"],
    megatrends: ["Sustainability", "Circular Economy", "Conscious Consumption"],
    related: [
      "mushroom-mycelium-packaging",
      "refill-on-demand-pods",
      "balcony-solar-kits",
      "waterless-dye-collections",
    ],
  },
  {
    slug: "ambient-intelligence",
    title: "Ambient Intelligence",
    trendText:
      "Computing is dissolving into the environment — sensors, agents and spatial interfaces deliver help without screens or explicit commands.",
    insightText:
      "People increasingly expect technology to anticipate needs in the background, shifting the value of products from features you operate to outcomes you simply receive.",
    workshopQuestion:
      "Where in your customer journey could intelligence run quietly in the background to remove a step the user currently has to take themselves?",
    score: 7.3,
    popularity: 7.5,
    activity: 7.8,
    freshness: 6.9,
    patterns: ["Convergence", "Acceleration", "Redirection"],
    megatrends: ["Artificial Intelligence", "Personalization", "Automation"],
    related: [
      "ambient-health-sensors",
      "cognitive-customer-agents",
      "spatial-workspaces",
      "ai-travel-guides",
    ],
  },
  {
    slug: "participatory-culture",
    title: "Participatory Culture",
    trendText:
      "Audiences are crossing from consumption into co-creation, remixing, re-cutting and co-owning the media and brands they love.",
    insightText:
      "The line between creator and fan is collapsing, and brands that hand audiences real authorship earn deeper loyalty than those that merely broadcast to them.",
    workshopQuestion:
      "What part of your brand's story could you intentionally hand over to your audience to author alongside you?",
    score: 7.0,
    popularity: 7.2,
    activity: 6.8,
    freshness: 7.1,
    patterns: ["Divergence", "Convergence", "Acceleration"],
    megatrends: ["Co-Creation", "Community", "Creator Economy"],
    related: [
      "fan-edited-film-releases",
      "creator-cooperative-campaigns",
      "micro-celebrity-merch",
      "playable-billboard-ads",
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
