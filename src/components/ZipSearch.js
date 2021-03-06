import React, { Component } from "react";

/*
Function takes in Zipcode
takes in the user zipcode 
MARK: we need a second parameter to change the zipcode
*/
class ZipSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: "",
      invalid: true,
      myData: [],
      noResponse: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // This goes and fetches city information based on the value in this.state.zipcode
  // Note: this state value is updated whenever the value of the text input changes
  // Runs everytime setState is called.
  componentDidUpdate() {
    fetch("https://ctp-zip-api.herokuapp.com/zip/" + this.state.zipcode)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ myData: data, noResponse: false });
      })
      .catch((e) => {
        this.setState({ noResponse: true });
        console.log("Error:", e);
      });
  }

  //this gets called whenever the text field changes
  handleInputChange(e) {
    //Modified
    if (e.length === 5) {
      this.setState({ zipcode: e, invalid: false, myData: [] });
    } else {
      this.setState({ zipcode: e, invalid: true, myData: [] });
    }
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
      <div className="inline-block">
        {this.state.myData.map((currentZip) => (
          <div className="p-3">
            <table className="border-black border">
              <tr>
                <td className="border-black border px-10 font-bold bg-gray-200">
                  {currentZip.LocationText}
                </td>
              </tr>
              <tr>
                <td className="border-black border px-10">
                  State: {currentZip.State}
                </td>
              </tr>
              <tr>
                <td className="border-black border px-10">
                  Location: ({currentZip.Lat}, {currentZip.Long}){" "}
                </td>
              </tr>
              <tr>
                <td className="border-black border px-10">
                  Population (estimated): {currentZip.EstimatedPopulation}
                </td>
              </tr>
              <tr>
                {" "}
                <td className="border-black border px-10">
                  Total Wages: {currentZip.TotalWages}
                </td>
              </tr>
            </table>
          </div>
        ))}
      </div>
    );

    let invalidResponse = <div>No Results. </div>;

    return (
      <div>
        <form className="form-inline my-4">
          <label>
            Enter Zip Code: <br />
          </label>
          <input
            type="text"
            placeholder="10065"
            defaultValue={this.state.zipcode}
            onChange={(e) => this.handleInputChange(e.target.value)}
            className="border-2 border-black rounded-md px-2 text-center m-2"
          />
        </form>
        {this.state.invalid || this.state.noResponse ? invalidResponse : validResponse}
      </div>
    );
  }
}

export default ZipSearch;
