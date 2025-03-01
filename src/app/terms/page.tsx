import { Metadata } from "next";
import { ResolvingMetadata } from "next";

import { getMetadataTitle } from "@/lib/metadata/metadata-utils";
import { openGraphImage } from "@/lib/metadata/open-graph-image";
import { TERMS_ROUTE } from "@/constants";
import Terms from "@/features/terms";

export async function generateMetadata(
  _arg: Record<string, never>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentOpengraphUrl = (await parent).openGraph?.url;

  return {
    title: getMetadataTitle("Terms"),
    openGraph: {
      title: getMetadataTitle("Terms"),
      url: `${parentOpengraphUrl}${TERMS_ROUTE}`,
      ...openGraphImage,
    },
  };
}

const TermsPage = () => {
  return <Terms />;
};

export default TermsPage;
