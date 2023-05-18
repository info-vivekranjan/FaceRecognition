import React from "react";
import { Button } from "../common/Button";
import styled from "styled-components";
import logo from '../logo.svg';

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
    width: 70px;
`;

const Home = () => {
  return (
    <Section>
      <div>
        <Image src={logo} alt="logo" />
        <br/>
        <div><b>Welcome to FaceRecognition</b></div>
        <br/>
        <div>Log in with your account to continue</div>
        <br />
        <Button style={{ marginRight: "10px" }}>Sign In</Button>
        <Button style={{ marginLeft: "10px" }}>Sign Up</Button>
      </div>
    </Section>
  );
};

export default Home;
