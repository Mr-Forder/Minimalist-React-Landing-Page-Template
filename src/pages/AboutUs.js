import React from "react";
//import page components
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
//Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../components/animation";

const AboutUs = () => {
  return (
    <motion.div
      exit={"exit"}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
