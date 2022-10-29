import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//import images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import { MotionValue } from "framer-motion";
//Animation
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../components/animation";
import { UseScroll } from "../components/UseScroll";

const OurWork = () => {
  const [element, controls] = UseScroll();
  const [element2, controls2] = UseScroll();
  return (
    <Work
      exit={"exit"}
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#1b1b1b" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/Work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Hide>
        </Link>
      </Movie>
      <Movie
        ref={element}
        variants={fade}
        animate={controls}
        initial={"hidden"}
      >
        <h2>The Racer</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/Work/the-racer">
          <img src={theracer} alt="The Racer" />
        </Link>
      </Movie>
      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial={"hidden"}
      >
        <h2>Good Times</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="Work/good-times">
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;

  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
    color: white;
  }
  @media (max-width: 1300px) {
    justify-content: center;
    padding: 2rem 2rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ec008c;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default OurWork;

//Frame effect animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #a01065;
  z-index: 2;
`;

const Frame2 = styled(Frame1)`
  background: #1b1b1b;
`;

const Frame3 = styled(Frame1)`
  background: #a01065;
`;

const Frame4 = styled(Frame1)`
  background: #a01065;
`;
