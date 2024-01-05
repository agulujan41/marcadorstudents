import React from "react";
import { useParams } from "react-router-dom";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import "./styles/style.css";

const Jugadores = () => {
  const [alumno, setAlumno] = useState([]);
  const [loading, setLoading] = useState(true);
  const { idPlayer } = useParams();
  useEffect(() => {
    fetch(`https://agulujan41.pythonanywhere.com/api/students/${idPlayer}`)
      .then((res) => res.json())
      .then((data) => {
        setAlumno(data[0]);
        setLoading(false);
        return;
      })
      .catch((err) => {
        console.log(err.message);
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
      {loading ? (
        <>CARGANDO</>
      ) : (
        <>
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
