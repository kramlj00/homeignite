import { Metadata } from "next";
import { ResolvingMetadata } from "next";

import { getMetadataTitle } from "@/lib/metadata/metadata-utils";
import { openGraphImage } from "@/lib/metadata/open-graph-image";
import { ABOUT_ROUTE } from "@/constants";
import AboutUs from "@/features/about-us";

export async function generateMetadata(
  _arg: Record<string, never>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentOpengraphUrl = (await parent).openGraph?.url;

  return {
    title: getMetadataTitle("About"),
    openGraph: {
      title: getMetadataTitle("About"),
      url: `${parentOpengraphUrl}${ABOUT_ROUTE}`,
      ...openGraphImage,
    },
  };
}

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <AboutUs />
    </div>
  );
};

export default AboutPage;
