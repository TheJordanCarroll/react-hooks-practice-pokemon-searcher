import React, { useState, useEffect } from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then((pokemonArray) => {
        setPokemon(pokemonArray);
      });
  }, []);

  return (
    <div className="App">
      <PokemonPage pokemon={pokemon}/>
    </div>
  );
}

export default App;
