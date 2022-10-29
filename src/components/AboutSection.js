import React from "react";
import home1 from "../img/home1.png";
import pointer from "../img/pointer.svg";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../components/animation";
import Wave from "./Wave";
import { NavLink, useLocation } from "react-router-dom";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Make Your Way</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span className="purp">Your Way</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Vaporware freegan biodiesel schlitz af hell of. Jianbing paleo put a
          bird on it pinterest bruh freegan cloud bread. Ennui chia plaid, next
          level shoreditch meh locavore pork belly squid.
        </motion.p>
        <motion.button variants={fade}>
          <NavLink to="/Work" className="cta">
            See Our Work
          </NavLink>
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={pointer} alt="" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
