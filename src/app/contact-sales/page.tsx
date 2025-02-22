import { Metadata } from "next";
import { ResolvingMetadata } from "next";

import { getMetadataTitle } from "@/lib/metadata/metadata-utils";
import { openGraphImage } from "@/lib/metadata/open-graph-image";
import { CONTACT_SALES_ROUTE } from "@/constants";
import ContactSales from "@/features/contact-sales";

export async function generateMetadata(
  _arg: Record<string, never>,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentOpengraphUrl = (await parent).openGraph?.url;

  return {
    title: getMetadataTitle("Contact Sales"),
    openGraph: {
      title: getMetadataTitle("Contact Sales"),
      url: `${parentOpengraphUrl}${CONTACT_SALES_ROUTE}`,
      ...openGraphImage,
    },
  };
}

const ContactSalesPage = () => {
  return <ContactSales />;
};

export default ContactSalesPage;
