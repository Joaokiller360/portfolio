'use client'

import { useEffect, useState } from "react";
import { Socialmedia, fetchSocialMedias } from "@/api/getSocialMedia";
import * as SiIcons from "react-icons/si";
import Link from "next/link";

export default function SocialMedia() {
  const [socialLinks, setSocialLinks] = useState<Socialmedia[]>([]);

  useEffect(() => {
    fetchSocialMedias().then(setSocialLinks);
  }, []);

  return (
    <div className="grid justify-center">
      <div className="sm:flex grid pt-3">
        {socialLinks.map(({ id, icon, link }) => {
          const IconComponent = SiIcons[`Si${icon}` as keyof typeof SiIcons];
          return (
            <Link
              key={id}
              href={link.startsWith("http") ? link : `https://${link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 mx-2 sm:my-0 my-2 rounded-full text-background border-2 text-colorButton border-colorButton hover:bg-colorButton hover:text-white transition-all flex justify-center"
            >
              <span className="flex items-center hover:text-white">
                {IconComponent ? <IconComponent className="mr-2 scale-125" /> : null}
                {icon}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}