import React from "react";
import { useParams } from "react-router-dom";
import {Cursor,useTypewriter} from 'react-simple-typewriter'
import "./styles/style.css";
const Jugadores = () => {
    
   
  const jugadores = {
    "GVM13026":{ nombre: "Guilmer", apellido: "Valencia Montes", puntos: 3.9,url:"https://i.ibb.co/DLv7Rzh/cr7.png" , desc:"Programador en Python - desarrollador de Software",team:"club de cr7" ,updated:'03-01-2024 00:00:00'},
    "JHSB13231":{ nombre: "Jhon Hilton", apellido: "Sejas B", puntos: 8,url:"https://i.ibb.co/Kjp4rG9/taek.png", desc:"Programador en Python - desarrollador de Software",team:"tae kwon do club",updated:'03-01-2024 00:00:00' },
  };
  const { idPlayer } = useParams();
  const [detailsTitle] =useTypewriter({
    words:[jugadores[idPlayer]["nombre"]+" "+jugadores[idPlayer]["apellido"]],
    loop:{},
    typeSpeed:80,
    deleteSpeed:30
  })

  return (
    <>
      <div className="avatarContainer">
        <div className="presentationName">
            <span>Jugador</span>
            <div>
            <h1>{detailsTitle}</h1>
            <Cursor/>
            </div>
           
        </div>
        
        <p>{jugadores[idPlayer]["desc"]}</p>
        <img
          id="avatar"
          src={jugadores[idPlayer]["url"]}
          alt="Avatar del jugador"
        />
        <h2>Team: {jugadores[idPlayer]["team"]}</h2>
        <div id="score">{jugadores[idPlayer]["puntos"]} puntos</div>
        <h3>Actualizado: {jugadores[idPlayer]["updated"]}</h3>
      </div>
    </>
  );
};

export default Jugadores;
