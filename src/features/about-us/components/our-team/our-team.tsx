import { Facebook, Home, Instagram, Twitter } from "lucide-react";
import { TEAM_MEMBERS } from "./our-team.const";
import Image from "next/image";
import Link from "next/link";

const OurTeam = () => {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-24">
      <div className="text-center space-y-8 mb-16">
        <div className="flex items-center justify-center gap-2 text-blue500 font-gotham-medium">
          <Home className="h-5 w-5" />
          <span className="text-sm font-medium uppercase tracking-wide">
            Meet Our Team
          </span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl flex flex-col gap-2">
          <span>Get to Know Our Team of</span>
          <span>Home Building Experts</span>
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TEAM_MEMBERS.map((member, index) => (
          <div
            key={index}
            className="flex flex-col space-y-4 max-w-[367px] w-full mx-auto"
          >
            <div className="relative w-full h-[376px] rounded-lg overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover h-full w-full"
              />
            </div>
            <h3 className="text-3xl font-semibold">{member.name}</h3>
            <div className="w-full h-[1px] bg-gray400" />
            <p className="text-muted-foreground font-gotham-light">
              {member.bio}
            </p>
            <div className="flex gap-4">
              <Link
                href={member.social.instagram}
                aria-label="Instagram"
                className="rounded-full p-2 border-black border"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href={member.social.facebook}
                aria-label="Facebook"
                className="rounded-full p-2 border-black border"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href={member.social.twitter}
                aria-label="Twitter"
                className="rounded-full p-2 border-black border"
              >
                <Twitter className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
