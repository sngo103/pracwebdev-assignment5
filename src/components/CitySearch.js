import React, { Component } from "react";

class CitySearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      resData: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // This goes and fetches zip code information based on the value in this.state.city
  // Note: this state value is updated whenever the value of the text input changes
  // Runs everytime setState is called.
  componentDidUpdate() {
    fetch("https://ctp-zip-api.herokuapp.com/city/" + this.state.city)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ resData: data});
      })
      .catch((e) => {
        console.log("Error:", e);
        //Modified - to account for extra characters
        //this.setState({resData: []});
      });
  }

  handleInputChange(e) {
    let query = e.trim().toUpperCase();
    this.setState({resData: [], city: query})
  }

  /*MARK: we need to put a constructor for an array 
  of the cities to return the multiple cities from that zipcode
  after we create constructor, below that we are going to grab value of zipcode.
  when we grab the value of the zipcode, we have to check if its 5 char. long 
  */
  //REF TO LINE 53 we have to do the same thing for another variable change in that field
  /*REF TO LINE before 60, have to check the length of the given zip, if its  = 0 (nothing) return no results, 
 otherwise return city component
 			  <input name="someUniqueName" value={this.state.someState} onChange={this.handleInputChange} />

			  */
  render() {
    let validResponse = (
      <div className="grid grid-cols-5 gap-4">
        {this.state.resData.map((zipcode) => (
          <div className="border-2"> { zipcode } </div>
        ))}
      </div>
    );

    let invalidResponse = <div>No Results. </div>;

    return (
      <div>
        <form className="form-inline my-4">
          <label>
            Enter City Name: <br />
          </label>
          <input
            type="text"
            placeholder="Sushi City"
            defaultValue={this.state.city}
            onChange={(e) => this.handleInputChange(e.target.value)}
            className="border-2 border-black rounded-md px-2 text-center m-2"
          />
        </form>
        {this.state.resData.length === 0 ? invalidResponse : validResponse}
      </div>
    );
  }
}

export default CitySearch;
