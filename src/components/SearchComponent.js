import { Component } from 'react';
import axios from 'axios';

class SearchAPI extends Component {
    constructor(props){
        super(props);
        this.state = {
            apiData: [],
            zipcode: "",
            found: false
        }
    }

    handleInputChange = (event) => {
        this.setState({zipcode: event.target.value});
    }

    // handleSearchClick = () => {
    //     let zipcodeName = this.state.pokemon;
    //     let linkToAPI = 'https://pokeapi.co/api/v2/pokemon/'+zipcodeName;
    //     fetch(linkToAPI)
    //         .then((response) => {
    //             if(response.status === 404){
    //                 return;
    //             }
    //             return response.json();
    //         })
    //         .then((data) => { //data is response.json()
    //             this.setState({apiData: data});
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });

    // }

    handleSearchClick = async () => {
        let zipcodeName = this.state.zipcode;
        let linkToAPI = 'http://ctp-zip-api.herokuapp.com/zip/'+zipcodeName;

        try {
            let response = await axios.get(linkToAPI);
            this.setState({apiData: response.data, found: true});
        } catch (error) {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data); //Not Found
                console.log(error.response.status); //404
                this.setState({found: false});
            }
       
        }
    }
    //MARK: ADDED BY GABBY
    zipCodeComponent() {
        if (this.state.zipcode.length !== 5) {
            if (this.state.found === true) //if its true, make it false b/c it is not found
                this.setState({found: false});
        } 
        else {    
            axios.get("http://ctp-zip-api.herokuapp.com/zip/" + this.state.zipcode).then((response) => {
            });
        }
      }

    makeTable = () => {
        let currData = this.state.apiData;
        let foundMatch = this.state.found;
        let table = [];
        //found is false when we get 404 error
        if(!foundMatch){
            table.push(<tr key={-1}><td>No Results</td></tr>);
            return table;
        } else {
            let height = currData.height;
            let weight = currData.weight;
            table.push(
              <tr key={currData.id}>
                <td>Height: {height}</td>
                <td>Weight: {weight}</td>
              </tr>
            );
            return table;
        }
    }   

    render() {
        return (
            <div className="container">
                <div className = "search">
                    <h3>Search Zipcode:</h3>
                    <input type="text" value={this.state.zipcode
                    } onChange={this.handleInputChange} placeholder="Enter Zipcode"/>
                    <button className="search-button" onClick={this.handleSearchClick}>Search</button>
                </div>
                <br/>
                <table id="data">
                    <tbody>
                    {this.makeTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default SearchAPI;