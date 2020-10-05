import React, { Component } from "react";
import "./css/Pokecard.css";
const picAPI = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let configu = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    /* You can do any JS you want */
    let imgSrc = `${picAPI}${configu(this.props.id)}.png`;
    return (
      <div className="Card">
        <h3>{this.props.name}</h3>
        <div className="caracterPok">
          <img src={imgSrc} alt="{this.props.name}" />
        </div>

        <p>Tipo: {this.props.type}</p>
        <p>EXP: {this.props.exp}</p>
      </div>
    );
  }
}

export default Pokecard;
