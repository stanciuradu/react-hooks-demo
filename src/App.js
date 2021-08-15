// componenta de tip functie prin care se importa un prim hook->useState
import React, { useState } from "react";
import UseStateCounter from "./components/UseStateCounter";
import UseStateDecrement from "./components/UseStateDecrement";
import "./App.css";
import UseEffect from "./components/UseEffect";

function useStateExameple() {
  // se preiau prin destructuring din useState doi parametri
  // primul este reprezentat de valoarea state-ului initial
  // al doilea parametru este functia care reseteaza state-ul
  // in cadrul useState()->se trece state-ul initial al aplicatiei
  const [string, setString] = useState("Radu");
  return (
    <div className="App">
      <h1>{string}</h1>
      <button type="button" onClick={() => setString("Andrei")}>
        Set Strig to Andrei
      </button>
      <UseStateCounter />
      <UseStateDecrement />
      <UseEffect />
    </div>
  );
}
export default useStateExameple;

