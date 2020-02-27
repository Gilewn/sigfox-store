import React from 'react'
import styled from "styled-components";
import logo from "./en_sigfox.png";
import { Link } from 'react-router-dom';

const Brand = () => {
  const divImageStyle = {
    backgroundColor: '#fff',
    borderRadius: '5px',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '10vh',
    width: 'fit-content'
  };

  return (
    <div style={divImageStyle}>
      <Link to="/">
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
  padding: 0 10%;
`;