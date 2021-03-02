import React, { useState, useEffect } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {
  const [showFront, setShowFront] = useState(true);

  function togglePokemon(){
    setShowFront(showFront => !showFront)
  }
  
  return (
    <Card>
      <div>
        <div className="image">
        <img onClick={togglePokemon} src={showFront ? pokemon.sprites.front : pokemon.sprites.back} alt={pokemon.name}/>
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
