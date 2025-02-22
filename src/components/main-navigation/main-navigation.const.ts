import { ABOUT_ROUTE, CONTACT_SALES_ROUTE, PRICING_ROUTE } from "@/constants";

export const navigationLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Who we are",
    href: ABOUT_ROUTE,
  },
  {
    label: "Pricing",
    href: PRICING_ROUTE,
  },
];

export const mainNavigationMobileLinks = [
  ...navigationLinks,
  {
    label: "Request a quote",
    href: CONTACT_SALES_ROUTE,
  },
];
