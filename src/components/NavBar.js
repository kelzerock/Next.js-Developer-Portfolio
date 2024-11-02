import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  TwitterIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
} from "./Icons";
import { motion } from "framer-motion";

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

const LinkInfo = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/projects", title: "Projects" },
  { href: "/articles", title: "Articles" },
];

const IconsMaterial = [
  {
    element: <TwitterIcon />,
    href: "https://x.com/",
  },
  {
    element: <DribbbleIcon />,
    href: "https://x.com/",
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
        {LinkInfo.map((el, ind) => (
          <CustomLink
            href={el.href}
            title={el.title}
            key={ind}
            className={
              ind === 0 ? "mr-4" : ind === LinkInfo.length - 1 ? "ml-4" : "mx-4"
            }
          />
        ))}
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
            {el.element}
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
