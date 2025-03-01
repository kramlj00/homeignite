import { Metadata } from "next";
import { ResolvingMetadata } from "next";

import { getMetadataTitle } from "@/lib/metadata/metadata-utils";
import { openGraphImage } from "@/lib/metadata/open-graph-image";
import { PRIVACY_ROUTE } from "@/constants";
import Privacy from "@/features/privacy";

export async function generateMetadata(
  _arg: Record<string, never>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentOpengraphUrl = (await parent).openGraph?.url;

  return {
    title: getMetadataTitle("Privacy Policy"),
    openGraph: {
      title: getMetadataTitle("Privacy Policy"),
      url: `${parentOpengraphUrl}${PRIVACY_ROUTE}`,
      ...openGraphImage,
    },
  };
}

const PrivacyPage = () => {
  return <Privacy />;
};

export default PrivacyPage;
