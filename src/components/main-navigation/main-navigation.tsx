"use client";

import LogoIcon from "@/assets/icons/logo.svg";
import Image from "next/image";
import { navigationLinks } from "./main-navigation.const";
import Link from "next/link";
import MobileMainNavigation from "./mobile/mobile-main-navigation";
import { useEffect } from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const MainNavigation = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={twMerge(
        "p-6 md:px-20 absolute top-0 left-0 w-full z-50",
        scrolled && "bg-black/50 backdrop-blur-sm"
      )}
    >
      <div className="hidden sm:flex items-center gap-4 justify-between w-full">
        <Image src={LogoIcon} alt="Logo" />
        <div className="flex items-center gap-10 lg:gap-24">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={twMerge(
                "text-white uppercase font-gotham-medium",
                active === link.label && "text-zinc-400"
              )}
              onClick={() => setActive(link.label)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <MobileMainNavigation active={active} setActive={setActive} />
    </nav>
  );
};

export default MainNavigation;
