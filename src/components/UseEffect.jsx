import React, { useState, useEffect } from "react";
function UseState() {
  // ->in useState se trece meu state-ul initial al aplicatiei iar prin destructuing se preiau atat campul state-ului cat si metoda de resetare a acestuia
  const [string, setString] = useState("users");
  //   initial array-ul cu ite-muri este gol, pana ce datele vin de la back-end
  // motiv pentru care avem useState cu un array gol
  const [items, setItems] = useState([]);

  //   practic prin useEffect se face request catre server pentru preluarea de date
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${string}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  });
  return (
    <div>
      <h1>{string}</h1>
      <button type="button" onClick={() => setString("posts")}>
        Posts
      </button>
      <button type="button" onClick={() => setString("users")}>
        Users
      </button>
      <button type="button" onClick={() => setString("comments")}>
        Comments
      </button>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
          </div>
        );
      })}
    </div>
  );
}
export default UseState;