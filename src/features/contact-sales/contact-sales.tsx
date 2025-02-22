import Image from "next/image";
import PricingHeaderImage from "@/assets/images/pricing-header.png";

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
    </section>
  );
};

export default ContactSales;
