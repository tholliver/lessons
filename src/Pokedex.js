import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./css/Pokedex.css";

class Pokedex extends Component {
  render() {
    let titulo;
    if (this.props.won) {
      titulo = <h2 className="win-hand">This hand wons!!!</h2>;
    } else {
      titulo = titulo = <h2 className="lose-hand">This hand lost</h2>;
    }
    return (
      <div className="Pokedex">
        {titulo}
        <p>Total EXP you got is: {this.props.exp}</p>
        <div className="pokeCards">
          {this.props.pokes.map((p) => (
            <Pokecard
              id={p.id}
              name ={p.name}
              type ={p.type}
              exp ={p.base_experience}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default Pokedex;
