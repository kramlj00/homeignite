"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion/accordion";
import { PRICING_FAQS } from "./pricing-faqs.const";
import Image from "next/image";
import BlueQuestionmark from "@/assets/icons/blue-questionmark.svg";
import OrangeQuestionmark from "@/assets/icons/orange-questionmark.svg";

const PricingFAQs = () => {
  return (
    <section className="w-full px-4 py-12 md:px-6 min-h-[65vh]">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="relative space-y-4">
          <div className="hidden md:block pointer-events-none absolute -right-4 -top-4 md:right-0 shrink-0">
            <div className="relative bg-blue50 rounded-2xl rotate-[-15deg] p-2">
              <Image
                src={BlueQuestionmark}
                alt="FAQ 1"
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="pointer-events-none absolute right-8 -top-8 md:top-12 md:right-16">
            <div className="relative bg-[#FF893D]/10 rounded-2xl rotate-[15deg] p-2">
              <Image
                src={OrangeQuestionmark}
                alt="FAQ 2"
                className="md:w-12 md:h-12 w-10 h-10"
              />
            </div>
          </div>

          <div className="font-gotham-medium inline-block rounded-lg bg-orange500 px-3 py-1 text-md text-white">
            FAQs
          </div>
          <h2 className="text-3xl font-gotham-bold tracking-tight sm:text-4xl">
            FAQs About Pricing
          </h2>
          <p className="text-zinc-800">
            Here are some frequently asked questions (FAQ) about pricing
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              {PRICING_FAQS.slice(0, 3).map((faq) => (
                <AccordionItem
                  key={faq.question}
                  value={faq.question.toLowerCase()}
                >
                  <AccordionTrigger className="data-[state=open]:text-orange500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.bulletPoints ? (
                      <ul className="list-inside space-y-2">
                        {faq.bulletPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      faq.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>

            <div className="space-y-4">
              {PRICING_FAQS.slice(3).map((faq) => (
                <AccordionItem
                  key={faq.question}
                  value={faq.question.toLowerCase()}
                >
                  <AccordionTrigger className="data-[state=open]:text-orange500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {faq.bulletPoints ? (
                      <ul className="list-inside space-y-2">
                        {faq.bulletPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    ) : (
                      faq.answer
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </div>
          </div>
        </Accordion>
      </div>
      <div className="md:hidden pointer-events-none bg-blue50 rounded-2xl rotate-[-15deg] p-2 w-fit mt-8">
        <Image
          src={BlueQuestionmark}
          alt="FAQ 1"
          className="md:w-12 md:h-12 w-10 h-10"
        />
      </div>
    </section>
  );
};

export default PricingFAQs;
