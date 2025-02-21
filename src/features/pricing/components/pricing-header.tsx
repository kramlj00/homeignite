import Image from "next/image";
import PricingHeaderImage from "@/assets/images/pricing-header.png";
import PricingPlans from "./pricing-plans";
const PricingHeader = () => {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 w-full">
        <Image
          src={PricingHeaderImage}
          alt="Modern interior living space with wooden furniture and minimalist design"
          fill
          priority
          className="object-cover w-full"
        />
      </div>

      <div className="relative mt-[140px] ml-[140px] flex flex-col gap-10 text-white z-10">
        <h1 className="text-4xl font-gotham-medium">Find Your Perfect Plan</h1>
        <p className="text-lg font-gotham-medium">
          Clearly state the value proposition, e.g., &quot;Affordable Plans for
          <br />
          Every Need.&quot;
        </p>
      </div>
      <div className="relative">
        <PricingPlans />
      </div>
    </section>
  );
};

export default PricingHeader;
