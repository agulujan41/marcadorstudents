import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle,SocialMediaIcons,SocialMediaIcon, ResumeButton } from './HeroStyle';
import { useParams, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import Typewriter from 'typewriter-effect';
const HeroSection = () => {
    const navigate = useNavigate();
  const goSomethingBad = () => {
    navigate("/error");
  };
  const [alumno, setAlumno] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { idPlayer } = useParams();
  useEffect(() => {
    fetch(`https://agulujan41.pythonanywhere.com/api/students/${idPlayer}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setError(true);
          goSomethingBad();
        }
        setAlumno(data[0]);
        setLoading(false);

        return;
      })
      .catch((err) => {
        console.log(err.message);
        setError(true);
      });
  });
    return (
        <>
        {loading ? (
          <>
            <div className="loadingContainer">
              <span>CARGANDO</span>
            </div>
          </>
        ) : error ? (
          <div className="errorContainer">
            <span>UPS ALGO ANDUVO MAL</span>
          </div>
        ) : (
            <>
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>EQUIPO <br /> {alumno["team"]}</Title>
                        <TextLoop>
                            Yo soy
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: [alumno["nombre"] + " " + alumno["apellido"]],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{alumno["puntos"]} XP</SubTitle>
                       
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={alumno["url"]} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
        </>
        )}
    </>
    )
}

export default HeroSection