import React, { useState } from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { fadeScroll } from "../components/animation";
import { UseScroll } from "../components/UseScroll";
const FaqSection = () => {
  const [element, controls] = UseScroll();
  return (
    <Faq
      variants={fadeScroll}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions? <span>Try our FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Big mood coloring book?">
          <div className="answer">
            <p>Poke poutine actually viral hammock.</p>
            <p>
              Copper mug shabby chic blog street art. Truffaut ugh glossier,
              fashion axe mumblecore activated charcoal paleo kitsch. Big mood
              coloring book franzen cloud bread knausgaard live-edge. Biodiesel
              authentic XOXO waistcoat tacos deep v wolf before they sold out
              hoodie shoreditch plaid aesthetic small batch. Irony yr sartorial
              8-bit.
            </p>
          </div>
        </Toggle>
        <Toggle title="Chillwave vegan brunch forage?">
          <div className="answer">
            <p>Kickstarter helvetica artisan?</p>
            <p>
              Kickstarter helvetica artisan, venmo bodega boys chicharrones
              vexillologist lumbersexual lyft occupy mixtape gentrify forage
              pabst. Lyft fanny pack umami synth af, retro freegan franzen
              salvia. Migas meh lumbersexual aesthetic celiac YOLO palo santo
              poutine man bun fam chartreuse cold-pressed.
            </p>
          </div>
        </Toggle>
        <Toggle title="Hot chicken aesthetic?">
          <div className="answer">
            <p>Direct trade freegan.</p>
            <p>
              Big mood lo-fi tofu chambray vaporware mustache. Direct trade
              organic hashtag taxidermy freegan. Copper mug photo booth
              sustainable knausgaard, try-hard neutra bruh craft beer trust
              fund.
            </p>
          </div>
        </Toggle>
        <Toggle title="Dummy text? More like dummy thicc text, amirite?">
          <div className="answer">
            <p>Selvage umami four dollar toast.</p>
            <p>
              cho park tonx palo santo stumptown dreamcatcher, lyft migas pok
              pok food truck venmo enamel pin mumblecore. Selvage umami four
              dollar toast, authentic cronut artisan flannel DIY migas kogi
              poutine hexagon scenester.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

export default FaqSection;

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;

    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
