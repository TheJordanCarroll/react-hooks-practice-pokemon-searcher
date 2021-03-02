import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon, search}) {
  const filteredPokemon = pokemon.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(search.toLowerCase());
  });
  const allPokemon = filteredPokemon.map((pokemon) => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)
  return (
    <Card.Group itemsPerRow={6}>{allPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
