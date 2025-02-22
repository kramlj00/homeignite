import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion/accordion";
import { PRICING_FAQS } from "./pricing-faqs.const";

const PricingFAQs = () => {
  return (
    <section className="w-full px-4 py-12 md:px-6 min-h-[60vh]">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="space-y-2">
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
    </section>
  );
};

export default PricingFAQs;
