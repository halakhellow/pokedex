import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: "Charmander", type: "fire", experience: 62 },
      { id: 7, name: "Squirtle", type: "water", experience: 63 },
      { id: 11, name: "Metapod", type: "bug", experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", experience: 95 },
      { id: 94, name: "Gengar", type: "poison", experience: 225 },
      { id: 133, name: "Eevee", type: "normal", experience: 65 },
    ],
  };
  render() {
    let group1 = [],
      group2 = [...this.props.pokemons];
    while (group1.length < group2.length) {
      let index = Math.floor(Math.random() * group2.length),
        randomPokemon = group2.splice(index, 1)[0]; // here splice returns array and push adds element that's why we used square brackets (0 means the first element in the array)
      group1.push(randomPokemon);
    }
    let totalEXP1 = group1.reduce(
      (total, pokemons) => total + pokemons.experience,
      0
    );
    let totalEXP2 = group2.reduce(
      (total, pokemons) => total + pokemons.experience,
      0
    );
    return (
      <div>
        <Pokedex
          pokemons={group1}
          total={totalEXP1}
          isWinner={totalEXP1 > totalEXP2}
        />
        <Pokedex
          pokemons={group2}
          total={totalEXP2}
          isWinner={totalEXP2 > totalEXP1}
        />
      </div>
    );
  }
}

export default Pokegame;
