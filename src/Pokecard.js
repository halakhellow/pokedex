import React, { Component } from "react";
import "./Pokecard.css";

function formatId(id) {
  id = id.toString();
  if (id.length == 1) return `00${id}`;
  if (id.length == 2) return `0${id}`;
  if (id.length == 3) return `${id}`;
}
class Pokecard extends Component {
  render() {
    let imgId = formatId(this.props.id),
      imgLink = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgId}.png`;
    return (
      <div className="Pokecard">
        <h2 data-testid="title"> {this.props.name} </h2>
        <div className="Pokecard-img">
          <img src={imgLink} alt={this.props.name} />
        </div>
        <p className="Pokecard-data">Type : {this.props.type}</p>
        <span className="Pokecard-data">EXP : {this.props.experience} </span>
      </div>
    );
  }
}

export default Pokecard;
