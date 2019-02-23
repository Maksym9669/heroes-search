import React, { Component } from "react";
import "./SearchHero.css";
export default class SearchHero extends Component {
  render() {
    return (
      <div className="component-search-input">
        <div>
          <input type="text" onChange={this.props.handleChange} />
        </div>
      </div>
    );
  }
}
