import React, { Component } from "react";
import "./index.css";
import ZipSearchField from "./components/ZipSearchField";
import SearchComponent from "./components/SearchComponent";
import City from "./components/City";
import ReactDOM from "react-dom";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="container bg-black text-white text-center">
          <h1 className="text-3xl p-2 m-0">Zip Code Search</h1>
          <h3 className="p-2 m-0"> by Team Foodies </h3>
        </div>
        <div className="container text-center">
          <ZipSearchField />
        </div>
      </div>
    );
  }
}

export default App;
