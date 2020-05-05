import React from "react";
import styled from "styled-components";
import logo from "./en_sigfox.png";
import { Link } from "react-router-dom";

const Brand = () => {
  return (
    <div>
      <a href="https://sigfox.gr/" target="_blank">
        <Image src={logo} alt="Company Logo" />
      </a>
    </div>
  );
};

export default Brand;

const Image = styled.img`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;
