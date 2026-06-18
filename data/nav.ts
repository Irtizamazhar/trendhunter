export type MenuLink = { label: string; href: string };
export type MenuColumn = { heading?: string; links: MenuLink[] };
export type MenuItem = {
  label: string;
  href: string;
  columns: MenuColumn[];
};

export const navMenus: MenuItem[] = [
  {
    label: "Trends & Insights",
    href: "/pro",
    columns: [
      {
        heading: "Discover",
        links: [
          { label: "Ideas", href: "/" },
          { label: "Insights", href: "/pro" },
          { label: "Megatrends", href: "/megatrends" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/plans",
    columns: [
      {
        heading: "Products",
        links: [
          { label: "All Services", href: "/plans" },
          { label: "Advisory", href: "/plans" },
          { label: "Trend Reports", href: "/pro" },
          { label: "Survey Fast™", href: "/plans" },
          { label: "Horizon", href: "/plans" },
        ],
      },
      {
        heading: "Workshops & Keynotes",
        links: [
          { label: "Custom Masterclass", href: "/plans" },
          { label: "Futurist Keynote Speakers", href: "/future-festival" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Innovation Strategy", href: "/megatrends" },
          { label: "Innovation Assessment", href: "/megatrends" },
          { label: "Annual Trend Report", href: "/pro" },
          { label: "Webinars", href: "/future-festival" },
        ],
      },
    ],
  },
  {
    label: "Events",
    href: "/future-festival",
    columns: [
      {
        heading: "Programs",
        links: [
          { label: "Future Festival", href: "/future-festival" },
          { label: "FuturistU", href: "/future-festival" },
        ],
      },
      {
        heading: "Upcoming Events",
        links: [
          { label: "Toronto World Summit", href: "/future-festival" },
          { label: "Chicago", href: "/future-festival" },
          { label: "New York", href: "/future-festival" },
        ],
      },
    ],
  },
  {
    label: "About",
    href: "/about-trend-hunter",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "About Us", href: "/about-trend-hunter" },
          { label: "Contact Us", href: "/contact" },
          { label: "Careers", href: "/jobs" },
        ],
      },
    ],
  },
];
