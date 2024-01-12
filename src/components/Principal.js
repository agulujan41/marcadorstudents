import React from "react";
import "./styles/style.css";
import "./styles/posiciones.css"
import Posiciones from "./utils/Posiciones";


const Principal = () => {
  
  return (
    <>
      <div className="espacio"></div>
      <section id='inicioSection'>

      </section>
      <section id='posicionesSection'>
        <Posiciones/>
      </section>

    </>
  );
};

export default Principal;