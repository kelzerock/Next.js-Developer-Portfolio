import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { projectConfig } from "@/config/projectConfig";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";

const FramerImage = motion(Image);
const FeatureProject = ({ type, title, summary, img, link, githublink }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link
          href={link}
          alt={title}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={githublink} className="w-10">
            <GithubIcon  className="dark:fill-light"/>
          </Link>
          <Link
            href={link}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark"
          >
            Visit project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, githublink }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative rounded-br-2xl dark:border-light dark:bg-dark">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-2xl dark:bg-light" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">{type}</span>
        <Link
          href={link}
          alt={title}
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={link} className="text-lg font-semibold underline">
            Visit
          </Link>
          <Link href={githublink} className="w-8">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Aleksei | Projects page</title>
        <meta name="description" content="about myself" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text={projectConfig.headerText} className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              <FeatureProject
                title={projectConfig.informationText[0].title}
                summary={projectConfig.informationText[0].text}
                type="Feature project"
                link={`/`}
                githublink={`/`}
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={projectConfig.informationText[0].title}
                summary={projectConfig.informationText[0].text}
                type="Feature project"
                link={`/`}
                githublink={`/`}
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={projectConfig.informationText[0].title}
                summary={projectConfig.informationText[0].text}
                type="Feature project"
                link={`/`}
                githublink={`/`}
                img={project1}
              />
            </div>
            <div className="col-span-12">
              <FeatureProject
                title={projectConfig.informationText[0].title}
                summary={projectConfig.informationText[0].text}
                type="Feature project"
                link={`/`}
                githublink={`/`}
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={projectConfig.informationText[0].title}
                summary={projectConfig.informationText[0].text}
                type="Feature project"
                link={`/`}
                githublink={`/`}
                img={project1}
              />
            </div>
            <div className="col-span-6">
              <Project
                title={projectConfig.informationText[0].title}
                summary={projectConfig.informationText[0].text}
                type="Feature project"
                link={`/`}
                githublink={`/`}
                img={project1}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
