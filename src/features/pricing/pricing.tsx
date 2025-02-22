import PricingHeader from "./components/pricing-header";
import PricingFAQs from "./components/pricing-faqs";

const Pricing = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <PricingHeader />
      <PricingFAQs />
    </div>
  );
};

export default Pricing;
