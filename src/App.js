import React, { Component } from "react";
import "./index.css";
import ZipSearch from "./components/ZipSearch";
import CitySearch from "./components/CitySearch";

class App extends Component {
  render() {
    return (
      <div>
        <div className="bg-black text-white text-center">
          <h1 className="text-3xl p-2 m-0">Zip Code Search</h1>
          <h3 className="p-2 m-0"> by Team Foodies </h3>
        </div>
        <div className="text-center">
          <ZipSearch />
          <CitySearch />
        </div>
        <br />
        <hr />
        <br />
        <div className="text-center">
          ❤️ Brought to you by Team Food: Samantha Ngo, Gabby Gonzalez, Nirmala
          Kuhl, Kristy Lau ❤️ <br />
          April 2021
          <br /><br />
        </div>
      </div>
    );
  }
}

export default App;
