import React from "react";
import "./styles/style.css";
import "./styles/posiciones.css"
import "./styles/navbar.css"
import Posiciones from "./utils/Posiciones";
import Navbar from "./Navbar";
import SpaceBlank from "./utils/SpaceBlank";
const Principal = () => {
  
  return (
    <>
      <Navbar />
      <SpaceBlank/>
      <section id='inicioSection'>

      </section>
      <section id='posicionesSection'>
        <Posiciones/>
      </section>

    </>
  );
};

export default Principal;
