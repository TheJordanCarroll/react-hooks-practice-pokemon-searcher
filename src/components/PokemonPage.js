import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon}) {
  const allPokemon = pokemon.map((pokemon) => <PokemonCollection key={pokemon.id} pokemon={pokemon}/>)
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search />
      <br />
      {allPokemon}
    </Container>
  );
}

export default PokemonPage;
