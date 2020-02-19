import React from 'react'
import styled from "styled-components";
import logo from "./en_sigfox.png";
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <div>
      <Link to = "/">
        <Image src={logo} alt="Company Logo" />
      </Link>
    </div>
  )
}

export default Brand

const Image = styled.img`
  border-radius: 5px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;