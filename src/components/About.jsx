import React from 'react';

import Tilt from 'react-tilt';

import {motion} from "framer-motion";

import {styles} from "../styles";

import {services} from "../constant/constants";
import {fadeIn, textVariant} from "../utils/motion";

import SectionWrapper from '../hoc/SectionWrapper';

const ServiceCard = ({index, title, icon}) => {
  return (
    <p>
     <Tilt className="xs:w-[250px] max-[600px]:w-[350px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
     <div options={{max: 45, scale: 1, speed:450}} 
     className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} 
        className="w-16 h-16 object-contain"/>
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
     </div>
      </motion.div>
      </Tilt>
    </p>
  )
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <h2 className={styles.sectionHeadText}>
        Introduction
      </h2>
    </motion.div>
    <motion.p variants={fadeIn("", "", 0.1,1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
    My name is Yinusa Amusa (You can call me Z). I'm a passionate Full-Stack developer and Data Scientist.
    I recently began to switch my focus to web development and I'm excited to see where it takes me.
    I thrive on pushing the boundaries of what is possible with technology. With a degree in Computer Science, 
    I have a strong foundation in the fundamentals of programming and software development.
    I'm always eager to learn new technologies and improve my skills. I'm a fast learner and I'm always ready to take on new challenges.
    Let's collaborate and build something amazing.
					
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
     {services.map((service,index)=>(
      <ServiceCard key={service.title} index={index} {...service}/>
     ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")