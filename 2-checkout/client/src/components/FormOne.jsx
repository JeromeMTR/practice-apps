import React from "react";
import FormTwo from "./FormTwo.jsx";

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formOne: {
        username: '',
        email: '',
        password: ''
      }
    };
    this.showFormTwo = this.showFormTwo.bind(this);
  }

  showFormTwo(e) {
    e.preventDefault();
    this.props.showFormTwo();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.showFormTwo}>
          {/* <label>Username : </label><input type="text"></input><p></p>
          <label>Email : </label><input type="text"></input><p></p>
          <label>Password : </label><input type="text"></input><p></p> */}
          <p>Username : </p><input type="text"></input>
          <p>Email : </p><input type="text"></input>
          <p>Password : </p><input type="text"></input>
          <input type="submit" value="next"></input>
        </form>
      </div>
    )
  }
}

export default FormOne;