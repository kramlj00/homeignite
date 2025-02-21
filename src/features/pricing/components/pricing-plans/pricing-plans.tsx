"use client";

import { PRICING_PLANS } from "./pricing-plans.const";
import Button from "@/components/button";
import { BUTTON_VARIANT } from "@/components/button/button-variants.const";
import { twMerge } from "tailwind-merge";
import CheckIcon from "@/assets/icons/check-icon.svg";
import Image from "next/image";

const PricingPlans = () => {
  return (
    <div className="min-h-screen p-4 lg:p-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative mt-24">
          <div className="absolute inset-x-0 -top-8 bottom-0 bg-white/50 backdrop-blur-md rounded-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-3 px-4">
            {PRICING_PLANS.map((plan) => (
              <div
                key={plan.name}
                className={twMerge(
                  "rounded-3xl p-8",
                  plan.mostPopular
                    ? "lg:-translate-y-16 bg-orange500 text-white shadow-lg"
                    : "text-black"
                )}
              >
                {plan.mostPopular && (
                  <div className="w-full flex justify-end mb-8">
                    <p className="w-fit bg-white rounded-full text-black text-sm font-gotham-bold p-2 px-4 uppercase">
                      Most popular
                    </p>
                  </div>
                )}
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span
                      className={twMerge(
                        "text-5xl font-gotham-bold [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.4)]",
                        plan.mostPopular ? "text-white" : "text-orange500"
                      )}
                    >
                      ${plan.price}
                    </span>
                    <span className="text-md text-white font-gotham-bold">
                      {plan.description}
                    </span>
                  </div>
                  <h2
                    className={twMerge(
                      "mt-8 text-4xl font-gotham-bold [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.4)]",
                      plan.mostPopular ? "text-white" : "text-orange500"
                    )}
                  >
                    {plan.name}
                  </h2>
                </div>

                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <div className="h-6 w-6 shrink-0 mt-[2px] bg-white/20 rounded-full flex items-center justify-center">
                        <Image src={CheckIcon} alt="Check" />
                      </div>
                      <span className="text-lg font-gotham-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={BUTTON_VARIANT.ROUNDED}
                  className={twMerge(
                    "w-full rounded-full text-lg !text-white normal-case font-gotham-medium",
                    plan.mostPopular
                      ? "bg-black hover:bg-gray-800"
                      : "bg-blue100 hover:bg-blue100"
                  )}
                >
                  Contact Sales
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
