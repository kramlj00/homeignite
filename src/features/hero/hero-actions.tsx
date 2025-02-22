import Link from "next/link";
import { CONTACT_SALES_ROUTE, PRICING_ROUTE } from "@/constants";
import ContactUsButton from "@/components/button/contact-us-button";

const HeroActions = () => {
  return (
    <div className="flex items-center gap-4 sm:gap-10 w-full justify-center absolute bottom-12">
      <Link
        href={PRICING_ROUTE}
        className="sm:block hidden text-white text-xs sm:text-sm font-gotham-bold uppercase cursor-pointer"
      >
        See pricing
      </Link>
      <ContactUsButton />
      <Link
        href={CONTACT_SALES_ROUTE}
        className="sm:block hidden text-white text-xs sm:text-sm font-gotham-bold uppercase cursor-pointer"
      >
        Request a quote
      </Link>
    </div>
  );
};

export default HeroActions;
