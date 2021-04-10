import React, {Component} from 'react';
import './App.css';
import './SearchComponent';

/*
Function that returns info from that city
*/
function City(props) {
  return (
    <div>
      This is the City component
    </div>
  );
}
/*
Function takes in Zipcode
takes in the user zipcode 
MARK: we need a second parameter to change the zipcode
*/
function ZipSearchField({zipCode}) {
  return (
  <div>
    <form className = "form-inline my-4">
      <label>
        Zipcode:
      </label>
      <input
        type = "text"
        className = "form-control ml-2"
        value = {zipCode}
      />
    </form>
  </div>

  );
}

class App extends Component {
  /*MARK: we need to put a constructor for an array 
  of the cities to return the multiple cities from that zipcode
  after we create constructor, below that we are going to grab value of zipcode.
  when we grab the value of the zipcode, we have to check if its 5 char. long 
  */
 //REF TO LINE 53 we have to do the same thing for another variable change in that field
 /*REF TO LINE before 60, have to check the length of the given zip, if its  = 0 (nothing) return no results, 
 otherwise return city component
 */
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <div className = "container">
          <div className = "row">
            <div className = "column">
              <ZipSearchField  
                //zipCode = {this.state.zipCode}
              />
            </div>
          </div>

          
          <div>
            <City />
            <City />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
