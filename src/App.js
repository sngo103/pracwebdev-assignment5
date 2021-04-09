import React, {Component} from 'react';
import './App.css';

/*
Function that returns info from that city
*/
function City(props) {
  return (<div>This is the City component</div>);
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
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Zip Code Search</h2>
        </div>
        <div className = "container">
          <div className = "row">
            <div className = "column">
              <ZipSearchField />
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
