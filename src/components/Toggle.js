import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ children, title }) => {
  //So, here i've created a reusable component that acts as a visibility toggle for whatever you wrap inside the <Toggle></Toggle> tag.
  //the component is an arrow function that takes in {children}. {children} is literally the child of whatever is inside what is returned.
  // first, created toggle variable, set to use state, with it's default value set to true.
  // then, inside the return, is just a div, with an onclick. The onclick is an arrow function that uses the state to set the toggle variable to the opposite of what it's current
  // state is. when we defined toggle, we set the default as true.
  //finally, a ternary operator that checks if toggle is true. if it is, it renders the children of whatever is inside the element. if not, it returns an empty string, so will show
  //nothing.
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default Toggle;
