import React from 'react'
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import SearchBox from '../SearchBox/SearchBox';
import { Column, Row } from 'styled-grid-system-component';
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <Row>
      <Column md={12}>
        <NavBar style={barAnimation}>
          <FlexContainer>
            <Brand />
            <SearchBox />
            <NavLinks style={linkAnimation}>
              <a href="/">link n1</a>
              <a href="/">link n2</a>
              <a href="https:/google.gr">link n3</a>
              <a href="/">link n4</a>
            </NavLinks>
            <BurgerWrapper>
              <BurgerMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
              />
            </BurgerWrapper>
          </FlexContainer>
        </NavBar>
        <CollapseMenu
          navbarState={props.navbarState}
          handleNavbar={props.handleNavbar}
        />
      </Column>
    </Row>
  )
}
export default Navbar

const NavBar = styled(animated.nav)`
  position: relative;
  width: 100%;
  display:flex;
  justify-content:center;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  width: 90vw;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  & a {
    color: #666;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #7824ff;
      border-bottom: 1px solid #7824ff;
    }
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  @media (min-width: 769px) {
    display: none;
  }
`;