"use client";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import Button from "../button";
import { BUTTON_VARIANT } from "../button/button-variants.const";
import { BUTTON_SIZE } from "../button/button-size";
import Image from "next/image";
import LogoIcon from "@/assets/icons/logo.svg";
import { navigationLinks } from "../main-navigation/main-navigation.const";

const Footer = () => {
  return (
    <footer className="bg-blue900 text-white py-8 px-6">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-between gap-12 md:items-center mb-12">
          <Link href="/" className="flex md:items-center gap-2">
            <Image src={LogoIcon} alt="Logo" />
          </Link>

          <ul className="flex flex-col md:flex-row gap-6 md:gap-8">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="hover:opacity-80 uppercase font-bold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-center">
          <div className="space-y-4">
            <h3 className="font-bold uppercase md:normal-case text-xl md:text-md tracking-wider md:tracking-normal">
              Connect with us
            </h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link
                href="#"
                className="bg-white rounded-full p-2 hover:opacity-80 shadow-lg"
              >
                <Facebook className="h-6 w-6 text-orange500" />
              </Link>
              <Link
                href="#"
                className="bg-white rounded-full p-2 hover:opacity-80 shadow-lg"
              >
                <Instagram className="h-6 w-6 text-orange500" />
              </Link>
            </div>
          </div>

          <div className="text-center text-sm">
            <p>© {new Date().getFullYear()}</p>
            <div className="space-x-2">
              <Link href="/privacy" className="hover:underline">
                Privacy Statement
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:underline">
                Terms of Use
              </Link>
            </div>
          </div>

          <Button variant={BUTTON_VARIANT.PRIMARY} size={BUTTON_SIZE.SMALL}>
            Contact us
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
