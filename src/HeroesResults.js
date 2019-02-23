import React, { Component } from "react";
import "./HeroesResults.css";

import HeroesResultRow from "./HeroesResultRow";
export default class HeroesResults extends Component {
  render() {
    return (
      <div className="">
        {this.props.heroesData.map(elem => (
          <HeroesResultRow
            // name={
            //   elem.name.indexOf(" ") === -1
            //     ? elem.name
            //     : elem.name.slice(0, elem.name.indexOf(" "))
            // }
            name={elem.name}
          />
        ))}
      </div>
    );
  }
}
