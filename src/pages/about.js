import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profileImage from "../../public/images/profile/developer-pic-2.jpg";
import Image from "next/image";
import { aboutConfig } from "@/config/aboutConfig";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

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
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profileImage}
                alt="foto Aliaksei"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              {aboutConfig.achivements.map((achivement, index) => {
                return (
                  <div
                    key={achivement.parameter + "-" + index}
                    className="flex flex-col justify-center items-end"
                  >
                    <span className="inline-block text-7xl font-bold">
                      <AnimatedNumbers value={achivement.parameter} />+
                    </span>
                    <h2 className="text-xl font-medium capitalize text-dark/75">
                      {achivement.info}
                    </h2>
                  </div>
                );
              })}
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
