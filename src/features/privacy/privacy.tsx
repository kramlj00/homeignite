import Image from "next/image";
import { PRIVACY_CONTENT } from "./privacy.const";
import { Home } from "lucide-react";

const Privacy = () => {
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
              Privacy Statement
            </span>
          </div>
          <h1 className="text-6xl font-medium">Privacy Policy</h1>
        </div>
        {PRIVACY_CONTENT.map((item) => (
          <div key={item.title} className="flex flex-col gap-2">
            <h2 className="text-3xl font-medium text-blue500">{item.title}</h2>
            <p className="text-lg max-w-[800px]">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Privacy;
