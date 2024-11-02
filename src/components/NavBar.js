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
  console.log(router);
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
        <motion.a
          href="https://x.com/"
          target="_blank"
          whileHover={{y: -2,}}
          whileTap={{scale:.9}}
          className="w-6 mr-3"
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://x.com/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{scale:.9}}
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://x.com/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{scale:.9}}
          className="w-6 mr-3"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://x.com/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{scale:.9}}
          className="w-6 mr-3"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://x.com/"
          target="_blank"
          whileHover={{ y: -2 }}
          whileTap={{scale:.9}}
          className="w-6"
        >
          <DribbbleIcon />
        </motion.a>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
