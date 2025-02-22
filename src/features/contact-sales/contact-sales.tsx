import Image from "next/image";
import PricingHeaderImage from "@/assets/images/pricing-header.png";
import PlansAndPricing from "./components/plans-and-pricing";

const ContactSales = () => {
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
      <PlansAndPricing />
    </section>
  );
};

export default ContactSales;
