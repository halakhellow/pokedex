import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let winLose;
    if (this.props.isWinner) {
      winLose = <h1 className="Pokedex-winner">Winning Group !</h1>;
    } else {
      winLose = <h1 className="Pokedex-loser">Losing Group !</h1>;
    }
    return (
      <div className="Pokedex">
        {winLose}
        <h2 className="Pokedex-total">Total Experience : {this.props.total}</h2>
        <div className="Pokedex-cards">
          {this.props.pokemons.map((pokemon) => {
            return (
              <Pokecard
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                experience={pokemon.experience}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Pokedex;
