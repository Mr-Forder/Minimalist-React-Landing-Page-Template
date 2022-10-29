import React from "react";
//import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import money from "../img/money.svg";
import home2 from "../img/globe.svg";
//Styles
import { About, Description, Image, Hide } from "../styles";
import styled from "styled-components";
import { fadeScroll } from "../components/animation";
import { UseScroll } from "./UseScroll";

const ServicesSection = () => {
  const [element, controls] = UseScroll();
  return (
    <div>
      <Services
        variants={fadeScroll}
        ref={element}
        animate={controls}
        initial="hidden"
      >
        <Description>
          <h2>
            Authentic <span>Quality</span> tilde
          </h2>
          <Cards>
            <Card>
              <div className="icon">
                <img src={clock} />
                <h3>Efficiency</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={teamwork} alt="icon" />
                <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={diaphragm} alt="icon" />
                <h3>Focus</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
            <Card>
              <div className="icon">
                <img src={money} alt="icon" />
                <h3>Profit</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            </Card>
          </Cards>
        </Description>

        <Image>
          <img src={home2} alt="home" />
        </Image>
      </Services>
    </div>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;

    @media (max-width: 1300px) {
      margin: 0;
      padding: 2rem 2rem;
      text-align: center;
    }
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
    padding: 5rem;
  }
`;

const Card = styled.div`
  flex-basis: 10rem;
  .icons {
    display: flex;
    align-items: center;
  }
`;
export default ServicesSection;
