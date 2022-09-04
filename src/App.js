import React, { useState } from "react";
import MiApi from "./components/MiApi";
import Header from "./components/Header";
import Descripcion from "./components/Descripcion";
import Footer from "./components/Footer";

export default function App() {
  const [feriados, setFeriados] = useState([]);

  return (
    <div className="App">
      <Header />
      <Descripcion feriados={feriados} />
      <MiApi setFeriados={setFeriados} />
      <Footer />
    </div>
  );
}


