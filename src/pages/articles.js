import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { articlesConfig } from "@/config/articlesConfig";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import articleImg_1 from "../../public/images/articles/create loading screen in react js.jpg";
import articleImg_2 from "../../public/images/articles/create modal component in react using react portals.png";
import articleImg_3 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImage = ({ title, img, link }) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event){
   imgRef.current.style.display = "inline-block"
   x.set(event.pageX)
   y.set(-10)
  }
  function handleMouseLeave(event){
    imgRef.current.style.display = "none"
    x.set(0)
    y.set(0)
  }

  return (
    <Link href={link} target="_blank" 
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouse}
      className="relative"
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage ref={imgRef} src={img} alt={title}  className="w-96 h-auto hidden absolute rounded-lg z-10"
      style={{x: x, y: y}}
      initial={{opacity: 0}}
      whileInView={{opacity: 1, transition: {duration: .2}}}
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li 
    initial={{y:200}}
    whileInView={{y: 0, transition: {duration:.5, ease: "easeInOut"}}}
    viewport={{once: true}}
    className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4">
      <MovingImage link={link} title={title} img={img} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const FeatureArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>Aleksei | Articles Page</title>
        <meta name="description" content="about myself" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text={articlesConfig.headerText} className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeatureArticle
              title={articlesConfig.fullArticles[0].title}
              link={`/`}
              time={articlesConfig.fullArticles[0].time}
              summary={articlesConfig.fullArticles[0].text}
              img={articleImg_1}
            />
            <FeatureArticle
              title={articlesConfig.fullArticles[0].title}
              link={`/`}
              time={articlesConfig.fullArticles[0].time}
              summary={articlesConfig.fullArticles[0].text}
              img={articleImg_2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul>
            <Article
              title={articlesConfig.shortArticles[0].title}
              img={articleImg_3}
              date={"November 2, 2024"}
              link={`/`}
            />
            <Article
              title={articlesConfig.shortArticles[0].title}
              img={articleImg_3}
              date={"November 2, 2024"}
              link={`/`}
            />
            <Article
              title={articlesConfig.shortArticles[0].title}
              img={articleImg_3}
              date={"November 2, 2024"}
              link={`/`}
            />
            <Article
              title={articlesConfig.shortArticles[0].title}
              img={articleImg_3}
              date={"November 2, 2024"}
              link={`/`}
            />
            <Article
              title={articlesConfig.shortArticles[0].title}
              img={articleImg_3}
              date={"November 2, 2024"}
              link={`/`}
            />
            <Article
              title={articlesConfig.shortArticles[0].title}
              img={articleImg_3}
              date={"November 2, 2024"}
              link={`/`}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
