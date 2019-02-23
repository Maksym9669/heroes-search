import React, { Component } from "react";
import filterHeroes from "./filterHeroes";
import Header from "./Header";
import SearchHero from "./SearchHero";
import HeroesResults from "./HeroesResults";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredHeroes: filterHeroes("", 100)
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(event) {
    this.setState({ filteredHeroes: filterHeroes(event.target.value, 30) });
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchHero handleChange={this.handleSearch} />
        <HeroesResults heroesData={this.state.filteredHeroes} />
      </div>
    );
  }
}

export default App;
