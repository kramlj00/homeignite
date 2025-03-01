import Image from "next/image";
import PricingPlans from "./pricing-plans";

const PricingHeader = () => {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 w-full">
        <Image
          src="/images/pricing-header.png"
          alt="Modern interior living space with wooden furniture and minimalist design"
          fill
          priority
          className="object-cover w-full"
        />
      </div>

      <div className="relative mt-[140px] md:ml-[140px] flex flex-col gap-10 text-white z-10">
        <h1
          data-aos="fade-up"
          data-aos-once="true"
          className="text-4xl font-gotham-medium text-center md:text-left"
        >
          Find Your Perfect Plan
        </h1>
        <p
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-delay="300"
          className="text-lg font-gotham-medium text-center md:text-left"
        >
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
