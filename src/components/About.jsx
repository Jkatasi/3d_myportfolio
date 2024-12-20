import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
 return (
  <Tilt className="xs-[250px] w-full">
    <motion.dev 
    variants={fadeIn("right",  "spring", 0.5 * index, 0.75)}
    className= "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div 
      options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
      className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-row'
      >
        <img src={icon} alt={title}  className='w-16 h-16 object-contain'/>
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

      </div>
    </motion.dev>
  </Tilt>
 )

}


const About = () => {
  return (
    <>
    <motion.div variance= {textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p 
    variants={fadeIn("", "", 0.1, 1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
    >
     I am a passionate web developer with expertise in creating visually appealing and highly functional websites. I specialize in both front-end and back-end development, using technologies like HTML, CSS, JavaScript, React, Node.js, and Express to build dynamic and responsive web applications. With a strong focus on user experience and intuitive design, I enjoy solving challenges creatively to deliver efficient solutions. Whether it’s crafting educational platforms or e-commerce sites, I aim to create seamless, engaging, and purpose-driven websites tailored to meet unique needs.

    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard  key= {service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}
const wrappedAbout = SectionWrapper (About, "about")
export default wrappedAbout;