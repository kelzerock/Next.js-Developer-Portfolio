import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import profileImage from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { aboutConfig } from "@/config/aboutConfig";

const about = () => {
  return (
    <>
      <Head>
        <title>Aleksei | About Page</title>
        <meta name="description" content="about myself" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text={aboutConfig.headerText} className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              {aboutConfig.informationText.map((elInfo, index) => (
                <p className="font-medium mb-4" key={elInfo + "-" + index}>
                  {elInfo}
                </p>
              ))}
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[[" />
              <Image
                src={profileImage}
                alt="foto Aliaksei"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default about;
