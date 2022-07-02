import React from "react";
import FormThree from "./FormThree.jsx";

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormThree: false,
      formTwo: {
        line1: '',
        line2: '',
        city: '',
        state: '',
        zipcode: ''
      }
    };
    this.showFormThree = this.showFormThree.bind(this);
  }

  showFormThree(e) {
    e.preventDefault();
    this.props.showFormThree();
  }

  render() {
    return(
      <form onSubmit={this.showFormThree}>
        <p>Line 1 : </p><input type="text"></input>
        <p>Line 2 : </p><input type="text"></input>
        <p>City : </p><input type="text"></input>
        <p>State : </p><input type="text"></input>
        <p>Zip code : </p><input type="text"></input>
        <input type="submit" value="next"></input>
      </form>
    )
  }
}

export default FormTwo;