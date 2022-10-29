import React, { useState } from "react";
import styled from "styled-components";
//import link abilitiy from react router - allowig us to swap a href tags on nav to simple Link component
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "../components/navStyle.css";
const Nav = () => {
  const { pathname } = useLocation();
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <StyledNav className="navbar">
      <div className="nav-container">
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links">
              About Us
            </NavLink>
            <Line
              class="line"
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/" ? "50%" : "0%" }}
            />
          </li>
          <li className="nav-item">
            <NavLink to="/Work" className="nav-links">
              Our Work
            </NavLink>
            <Line
              transition={{ duration: 0.75 }}
              initial={{ width: "0%" }}
              animate={{ width: pathname === "/Work" ? "50%" : "0%" }}
            />
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};
//Always stlye outside of the component function -otherwise it'll render this code every time the page loads

const StyledNav = styled.nav`
  a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #ec008c;
  width: 0%;

  bottom: -10%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;
