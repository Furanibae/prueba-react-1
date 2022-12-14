import React, { useEffect } from "react";

const MiApi = ({ setFeriados }) => {
  // 2. LLamamos al función que consume la API al momento de montar el componente
  useEffect(() => {
    consultarInformacion();
  }, []);
  // 1. Función que consulta la API
  const consultarInformacion = async () => {
    const url = "https://api.victorsanmartin.com/feriados/en.json";
    const response = await fetch(url);
    const data = await response.json();
    setFeriados(data.data.reverse());
  };
};

export default MiApi;