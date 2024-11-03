import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  CodewarsIcon
} from "./Icons";
import { motion } from "framer-motion";
import { navigationLinks } from "@/config/navigationLinks";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] easy duration-300 
      ${router.asPath === href ? "w-full" : "w-0"}  `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const IconsMaterial = [
  {
    element: <TwitterIcon />,
    href: "https://x.com/",
  },
  {
    element: <CodewarsIcon />,
    href: "https://www.codewars.com/users/kelzerock/stats",
  },
  {
    element: <GithubIcon />,
    href: "https://x.com/",
  },
  {
    element: <LinkedInIcon />,
    href: "https://x.com/",
  },
  {
    element: <PinterestIcon />,
    href: "https://x.com/",
  },
];

const NavBar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex justify-between items-center">
      <nav>
          <CustomLink
            href={navigationLinks.home.href}
            title={navigationLinks.home.title}
            className={"mr-4"}
          />
          <CustomLink
            href={navigationLinks.about.href}
            title={navigationLinks.about.title}
            className={"mr-4"}
          />
          <CustomLink
            href={navigationLinks.project.href}
            title={navigationLinks.project.title}
            className={"mr-4"}
          />
          <CustomLink
            href={navigationLinks.articles.href}
            title={navigationLinks.articles.title}
            className={"mr-4"}
          />
      </nav>
      <nav className="flex justify-center items-center flex-wrap">
        {IconsMaterial.map((el, ind) => (
          <motion.a
            key={ind}
            href={`${el.href}`}
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mr-3"
          >
            {el.element }
          </motion.a>
        ))}
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
