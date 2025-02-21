import { Metadata } from "next";
import { ResolvingMetadata } from "next";

import { getMetadataTitle } from "@/lib/metadata/metadata-utils";
import { openGraphImage } from "@/lib/metadata/open-graph-image";
import { PRICING_ROUTE } from "@/constants";
import Pricing from "@/features/pricing";

export async function generateMetadata(
  _arg: Record<string, never>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentOpengraphUrl = (await parent).openGraph?.url;

  return {
    title: getMetadataTitle("Pricing"),
    openGraph: {
      title: getMetadataTitle("Pricing"),
      url: `${parentOpengraphUrl}${PRICING_ROUTE}`,
      ...openGraphImage,
    },
  };
}

const PricingPage = () => {
  return <Pricing />;
};

export default PricingPage;
