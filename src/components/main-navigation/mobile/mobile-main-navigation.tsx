import { useState } from "react";
import MenuLines from "./menu-lines";
import { twMerge } from "tailwind-merge";
import { mainNavigationMobileLinks } from "../main-navigation.const";
import Image from "next/image";
import LogoIconMobile from "@/assets/icons/logo-mobile.svg";
import Link from "next/link";

interface IProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const MobileMainNavigation = ({ active, setActive }: IProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sm:hidden flex w-full justify-between items-center">
      <Link href="/">
        <Image src={LogoIconMobile} alt="Logo" />
      </Link>
      <MenuLines toggle={toggle} setToggle={setToggle} />

      <div
        className={twMerge(
          "p-6 w-full backdrop-blur-sm absolute top-0 right-0 min-w-[140px] z-0 rounded-bl-md rounded-br-md transition-transform duration-300",
          !toggle
            ? "transform -translate-y-full"
            : "flex transform translate-y-0"
        )}
      >
        <ul className="list-none flex justify-end items-center mt-10 flex-1 flex-col gap-4">
          {mainNavigationMobileLinks.map((link) => (
            <li
              key={link.href}
              className={twMerge(
                "cursor-pointer font-gotham-bold",
                active === link.label ? "text-zinc-400" : "text-white"
              )}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.label);
              }}
            >
              <a href={`#${link.href}`}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMainNavigation;
