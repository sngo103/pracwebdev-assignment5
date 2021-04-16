import React, {Component} from 'react';
import './index.css';
import './App.css';
import SearchComponent from './components/SearchComponent';
import ZipSearchField from './components/ZipSearchField';
import City from './components/City';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipcode: ''
    };
  }

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
        <div className = "container text-center">
          <div className = "row">
            <div className = "column">
              <ZipSearchField  
                zipcode={this.state.zipcode}
              />
            </div>
          </div>
          <div>
            <City />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
