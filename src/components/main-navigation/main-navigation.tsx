"use client";

import LogoIcon from "@/assets/icons/logo.svg";
import Image from "next/image";
import { navigationLinks } from "./main-navigation.const";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <div className="flex justify-between items-center gap-4 p-6 sm:px-10 absolute top-0 left-0 w-full z-50">
      <Image src={LogoIcon} alt="Logo" />
      <div className="flex items-center gap-10">
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-white uppercase"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNavigation;
