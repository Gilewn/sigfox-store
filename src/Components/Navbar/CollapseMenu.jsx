import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useSpring, animated } from "react-spring";

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper
        style={{
          transform: open
            .interpolate({
              range: [0, 0.2, 0.3, 1],
              output: [0, -20, 0, -200],
            })
            .interpolate((openValue) => `translate3d(0, ${openValue}px, 0`),
        }}
      >
        <NavLinks>
          <li>
            <Link to="/" onClick={props.handleNavbar}>
              Solution Sectors
            </Link>
          </li>
          <li>
            <Link to="/All_products" onClick={props.handleNavbar}>
              All Products
            </Link>
          </li>
          <li>
            <a
              href="https://sigfox.gr/#about-us"
              target="_blank"
              onClick={props.handleNavbar}
            >
              About Us
            </a>
          </li>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #7824ff;
  position: fixed;
  right: 0;
  z-index: 1007;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem;
  & li {
    transition: all 300ms linear 0s;
  }
  & a {
    font-size: 1.4rem;
    line-height: 1.5;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
