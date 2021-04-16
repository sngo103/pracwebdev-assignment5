/*
Function takes in Zipcode
takes in the user zipcode 
MARK: we need a second parameter to change the zipcode
*/
export default function ZipSearchField(props) {
    return (
    <div>
      <form className = "form-inline my-4">
        <label>
          Enter Zip Code: <br />
        </label>
        <input
          type = "text"
          className = "border-2 form-control ml-2"
          value = {props.zipcode}
        />
      </form>
    </div>
    );
  }