import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import "./styles/style.css";
import Navbar from "./Navbar";
import SpaceBlank from "./utils/SpaceBlank";

const Jugadores = () => {
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

  const [detailsTitle] = useTypewriter({
    words: [alumno["nombre"] + " " + alumno["apellido"]],
    loop: {},
    typeSpeed: 40,
    deleteSpeed: 10,
  });

  return (
    <>
      <Navbar />

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
          <SpaceBlank />
          <div className="avatarContainer">
            <div className="presentationName">
              <span>Jugador</span>
              <div>
                <h1>{detailsTitle}</h1>
                <Cursor />
              </div>
            </div>

            <p>{alumno["desc"]}</p>
            <img id="avatar" src={alumno["url"]} alt="Avatar del jugador" />
            <h2>Team: {alumno["team"]}</h2>
            <div id="score">{alumno["puntos"]} puntos</div>
            <h3>Actualizado: {alumno["updated"]}</h3>
          </div>
        </>
      )}
    </>
  );
};

export default Jugadores;
