import React from "react";

import Posiciones from "./utils/Posiciones";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "../components/Navbar"
import HeroSection from "./HeroSection";
const Jugadores = () => {
  const Body = styled.body`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;
const Wrapper = styled.div`
  
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
 

  return (
 
        <>
          <ThemeProvider theme={darkTheme}>
           
              <Navbar />
              <Body>
                
                <Wrapper>
                    <HeroSection />
                    <Posiciones />
                </Wrapper>
              </Body>
           
          </ThemeProvider>
        </>
  
   
  );
};

export default Jugadores;
