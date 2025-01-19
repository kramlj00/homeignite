import { BUTTON_VARIANT } from "@/components/button/button-variants.const";

import Button from "@/components/button";

const HeroActions = () => {
  return (
    <div className="flex items-center gap-4 sm:gap-10 w-full justify-center absolute bottom-12">
      <p className="sm:block hidden text-white text-xs sm:text-sm font-semibold uppercase">
        See pricing
      </p>
      <Button variant={BUTTON_VARIANT.PRIMARY}>Contact us</Button>
      <p className="sm:block hidden text-white text-xs sm:text-sm font-semibold uppercase">
        Request a quote
      </p>
    </div>
  );
};

export default HeroActions;
