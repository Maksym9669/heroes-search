import React, { Component } from "react";
import "./HeroesResultRow.css";

export default class HeroesResultRow extends Component {
  render() {
    let name = "";
    if (this.props.name.indexOf(" ") !== -1) {
      if (this.props.name.includes("Phantom")) {
        name = this.props.name === "Phantom Assasin" ? "PhantomA" : "PhantomL";
      } else if (this.props.name.includes("Fiend")) {
        name = "ShadowF";
      } else if (this.props.name.includes("Demon")) {
        name = "ShadowD";
      } else if (this.props.name.includes("Shaman")) {
        name = "ShadowS";
      } else if (this.props.name.includes("Seer")) {
        name = "DarkS";
      } else if (this.props.name.includes("Willow")) {
        name = "DarkW";
      } else {
        name = this.props.name.slice(0, this.props.name.indexOf(" "));
      }
    } else {
      name = this.props.name;
    }

    // if (this.props.name.indexOf(" ") != -1) {
    //   name = this.props.name.slice(0, this.props.name.indexOf(" "));
    // } else {
    // if (this.props.name.includes("Phantom")) {
    //   name = this.props.name === "Phantom Assasin" ? "PhantomA" : "PhantomL";
    // } else {
    //     name = this.props.name;
    //   }
    // }

    const src = `https://res.cloudinary.com/maksym9669/image/upload/v1550862656/${name}.jpg`;
    return (
      <div className="component-hero-result-row ">
        <img src={src} alt="" />
        {this.props.name}
      </div>
    );
  }
}
