import React from "react";
import { useEffect, useState } from "react";

const Posiciones = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(`https://agulujan41.pythonanywhere.com/api/positions/`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length === 0) {
          setError(true);
        }
        setData(data);
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
      <section id="positionSection">

      
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
        
        <div className="posiciones">
          <h1>Posiciones</h1>
          <div className="grillaEquipos">
            {data?.map((element,id) => (<>
              <div className="equipo" key={id}>
                <h4 >{""+((data.indexOf(element))+1)}</h4>
                <img src={element["url"]} alt="" />
                <h2>{element["team"]}</h2>
                <h3>{element["puntos"]} XP</h3>
              </div>
            
            </>
            ))}
          </div>
        </div>
      )}
      </section>
    </>
  );
};

export default Posiciones;
