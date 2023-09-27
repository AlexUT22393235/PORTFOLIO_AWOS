import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

function CondicionAtmosferica() {
  const url = "https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=5000";
  const [datos, setDatos] = useState([]);
  const [estadoActual, setEstadoActual] = useState("");

  useEffect(() => {
    fetch(url)
      .then((rest) => rest.json())
      .then((data) => {
        if (Array.isArray(data.results)) {
          setDatos(data.results);
          setCargando(false);
        } else {
          console.error(
            "Error: La API no devolvió resultados válidos."
          );
          setCargando(false);
        }
      })
      .catch((error) => {
        console.error("Error al consultar datos:", error);
        setCargando(false);
      });
  }, []);

  

  
    return(
      <>
          <select 
          onChange ={(e) => setEstadoActual(e.target.value)}>
              <option value ="">Selecciona una opcion</option>
              {estadosMx.map((opcion)=> (
                  <option key = {opcion.id} value ={opcion.name}></option>
              ))}
              </select>
              {estadoActual}
              <h1>Estado del tiempo</h1>
              {datos.map((ciudad, index) => {
                  reutrn (    
                      <div>
                          <p>{ciudad.name} - <i>{ciudad.skydescriptionlong}</i></p>
                      </div>
                  );
              
              })}
         </>
      
  );
}

export default CondicionAtmosferica;