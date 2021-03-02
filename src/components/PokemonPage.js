import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon, newPokemon}) {
  const [search, setSearch] = useState("")

  function newSearchTerm(newSearch) {
    setSearch(newSearch)
  }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm newPokemon={newPokemon}/>
      <br />
      <Search search={search} newSearchTerm={newSearchTerm}/>
      <br />
      <PokemonCollection pokemon={pokemon} search={search}/>
    </Container>
  );
}

export default PokemonPage;
