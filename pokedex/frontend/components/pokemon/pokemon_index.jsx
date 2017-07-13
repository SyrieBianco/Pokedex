import connect from "./pokemon_index_container";
import React from 'react';


export default class PokemonIndex extends React.Component {
  componentDidMount(){
    this.props.getAllPokemon();
  }

  render(){
    const { pokemon } = this.props;
    const pokeListItem = pokemon.map(poke => (
      <li key={poke.id}>
        { poke.name }
        <img src={ poke.image_url } height="50" width="50"/>
      </li>
    ));
    return(
      <ul>
        { pokeListItem }
      </ul>
    );
  }
}
