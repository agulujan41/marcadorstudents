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
                <h4 key={id}>{""+((data.indexOf(element))+1)}</h4>
                <img src={element["url"]} alt="" key={id} />
                <h2 key={id}>{element["team"]}</h2>
                <h3 key={id}>{element["puntos"]} puntos</h3>
              </div>
            
            </>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Posiciones;
