import React, { Component } from "react";
import "./index.css";
//import SearchComponent from "./components/SearchComponent";
import ZipSearchField from "./components/ZipSearchField";
import City from "./components/City";
import ReactDOM from 'react-dom'
import axios from 'axios'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      zipcode: "10018",
	  myData: []
    };
	console.log(this)
	this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  //this goes and fetches city information based on the value in this.state.zipcode
  // note: this state value is updated whenever the value of the text input changes
  componentDidMount() {
    fetch('https://ctp-zip-api.herokuapp.com/zip/'+this.state.zipcode)
    .then(res => res.json())
    .then((data) => {
      this.setState({ myData: data })
      console.log(this.state.myData)
    })
    .catch(console.log)
  }

		
	//this gets called whenever the text field changes
	handleInputChange(e) {
		if(e.length ==5){
			this.state.zipcode=e //or should we use setState somehow? didn't work for me
			this.componentDidMount()// is there a more elegant way to trigger this?
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
    return (
      <div>
        <div className="container bg-black text-white text-center">
          <h1 className="text-3xl p-2 m-0">Zip Code Search</h1>
          <h3 className="p-2 m-0"> by Team Foodies </h3>
        </div>
        <div className="container text-center">
          <div className="row">
            <div className="column">

                    <form className = "form-inline my-4">
					<label>
					  Enter Zip Code: <br />
					</label>
					<input
					  type = "text"
						defaultValue= {this.state.zipcode}
					  onChange={e => this.handleInputChange(e.target.value)}

					/>
				  </form>
            </div>
          </div>
		<div>
		
		
		{this.state.myData.map((currentZip) => (
			//TODO: we still need to style those tables so they don't look like from the 90s..
            <div className="zipTable">
		<table><tr><td>
              {currentZip.LocationText}
			  </td></tr>
			  <tr>State: {currentZip.State}</tr>	
			  <tr>Location: ({currentZip.Lat}, {currentZip.Long})</tr>
			  <tr>Population (estimated): {currentZip.EstimatedPopulation}</tr>
			  <tr>Total Wages: {currentZip.TotalWages}</tr>
			  		  
			  </table>
			</div>

        ))}
		
		
		
		
      </div>
        </div>
	
        
		
      </div>
    );
  }
}

export default App;
