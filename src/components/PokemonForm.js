import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({newPokemon}) {
  const [name, setname] = useState("")
  const [hp, sethp] = useState("")
  const [front, setfront] = useState("")
  const [back, setback] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    const formData = {name, hp, sprites:{front, back}};

    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((formData) => {
       newPokemon(formData);
      });}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => setname(e.target.value)} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => sethp(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => setfront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => setback(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
