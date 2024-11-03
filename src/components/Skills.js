import React from "react";
import { motion } from "framer-motion";
import { aboutConfig } from "@/config/aboutConfig";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center border-solid border border-light rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute hover:bg-light hover:text-dark hover:border-dark
      
    dark:bg-light dark:text-dark dark:border-dark shadow-light
    dark:hover:border-light dark:hover:bg-dark dark:hover:text-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x, y, transition: {duration: 1.5} }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center border border-solid border-light rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer 
          
          hover:border-dark hover:bg-light
          
          dark:bg-light dark:text-dark dark:border-dark shadow-light
          dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
          "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        {aboutConfig.skills.map((skill, index) => {
          return (
            <Skill
              name={skill.name}
              x={skill.x}
              y={skill.y}
              key={skill.name + "-" + index}
            />
          );
        })}
        <Skill name={aboutConfig.skills[0].name} x="-5vw" y="-10vw" />
      </div>
    </>
  );
};

export default Skills;
