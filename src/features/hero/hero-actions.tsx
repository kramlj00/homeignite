import { BUTTON_VARIANT } from "@/components/button/button-variants.const";

import Button from "@/components/button";
import Link from "next/link";
import { CONTACT_SALES_ROUTE, PRICING_ROUTE } from "@/constants";

const HeroActions = () => {
  return (
    <div className="flex items-center gap-4 sm:gap-10 w-full justify-center absolute bottom-12">
      <Link
        href={PRICING_ROUTE}
        className="sm:block hidden text-white text-xs sm:text-sm font-gotham-bold uppercase cursor-pointer"
      >
        See pricing
      </Link>
      <Button variant={BUTTON_VARIANT.PRIMARY}>Contact us</Button>
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
