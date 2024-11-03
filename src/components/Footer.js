import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import { MailTo } from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light">
      <Layout className="py-8 flex items-center justify-between">
        <span className="capitalize">
          {new Date().getFullYear()} &copy; All right reserved
        </span>
        <div className="capitalize">
          Build With{" "}
          <span className="text-primary text-xl px-1 font-bold dark:text-primaryDark">&#9825;</span>
          by&nbsp;
          <Link href={`/`} className="underline underline-offset-2">
            kelzerock
          </Link>
        </div>
          <Link
            href={`mailto:kelzzzer@gmail.com`}
            className="underline underline-offset-2 flex item-center"
          >
            Say hello
            <MailTo className="ml-1 !w-6 fill-light" />
          </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
