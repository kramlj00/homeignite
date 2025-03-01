import { Home } from "lucide-react";
import Image from "next/image";
import {
  TERMS_CONTENT,
  INTERPRETATION_CONTENT,
  ACKNOWLEDGMENT_CONTENT,
  LINKS_CONTENT,
  TERMINATION_CONTENT,
  LIABILITY_CONTENT,
  DISCLAIMER_CONTENT,
  GOVERNING_LAW_CONTENT,
  CONTACT_CONTENT,
} from "./terms.const";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <div className="h-[140px] relative bg-black">
        <Image
          src="/images/hero-bg.png"
          alt="Modern interior living space with wooden furniture and minimalist design"
          fill
          priority
          className="object-cover w-full"
        />
      </div>
      <div className="px-6 md:px-20 w-full py-12 px-4 flex flex-col gap-10">
        <div className="flex flex-col gap-2 mb-4">
          <div className="flex items-center gap-2 text-blue500 font-gotham-medium">
            <Home className="h-5 w-5" />
            <span className="text-sm uppercase tracking-wide">
              Terms & Conditions
            </span>
          </div>
          <h1 className="text-6xl font-medium">Terms and Conditions</h1>
        </div>

        {TERMS_CONTENT.map((item) => (
          <div key={item.title} className="flex flex-col gap-2">
            <p className="text-lg max-w-[800px]">{item.content}</p>
          </div>
        ))}

        {INTERPRETATION_CONTENT.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-blue500">{item.title}</h2>
            <p className="text-lg max-w-[800px]">{item.content}</p>
            {item.bulletPoints && (
              <ul className="list-disc pl-6 space-y-2">
                {item.bulletPoints.map((point, index) => (
                  <li key={index} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {ACKNOWLEDGMENT_CONTENT.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-blue500">{item.title}</h2>
            {item.bulletPoints && (
              <ul className="list-disc pl-6 space-y-2">
                {item.bulletPoints.map((point, index) => (
                  <li key={index} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {LINKS_CONTENT.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-blue500">{item.title}</h2>
            {item.bulletPoints && (
              <ul className="list-disc pl-6 space-y-2">
                {item.bulletPoints.map((point, index) => (
                  <li key={index} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {TERMINATION_CONTENT.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-blue500">{item.title}</h2>
            {item.bulletPoints && (
              <ul className="list-disc pl-6 space-y-2">
                {item.bulletPoints.map((point, index) => (
                  <li key={index} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {LIABILITY_CONTENT.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-blue500">{item.title}</h2>
            {item.bulletPoints && (
              <ul className="list-disc pl-6 space-y-2">
                {item.bulletPoints.map((point, index) => (
                  <li key={index} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {DISCLAIMER_CONTENT.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-blue500">{item.title}</h2>
            {item.content && (
              <p className="text-lg max-w-[800px]">{item.content}</p>
            )}
            {item.bulletPoints && (
              <ul className="list-disc pl-6 space-y-2">
                {item.bulletPoints.map((point, index) => (
                  <li key={index} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {GOVERNING_LAW_CONTENT.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-blue500">{item.title}</h2>
            <p className="text-lg max-w-[800px]">{item.content}</p>
          </div>
        ))}

        {CONTACT_CONTENT.map((item) => (
          <div key={item.title} className="flex flex-col gap-4">
            <h2 className="text-3xl font-medium text-blue500">{item.title}</h2>
            <p className="text-lg max-w-[800px]">{item.content}</p>
            {item.bulletPoints && (
              <ul className="list-disc pl-6 space-y-2">
                {item.bulletPoints.map((point, index) => (
                  <li key={index} className="text-lg">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terms;
