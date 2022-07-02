import React from "react";

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      formTwo: {
        line1: '',
        line2: '',
        city: '',
        state: '',
        zipcode: ''
      }
    };
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault()
  }


  render() {
    return(
      <form onSubmit={this.submitHandler}>
        <p>Credit Card Number : </p><input type="text"></input>
        <p>Exipiration Date : </p><input type="text"></input>
        <p>CVV : </p><input type="text"></input>
        <p>Billing Zip Code : </p><input type="text"></input>
        <input type="submit" value="next"></input>
      </form>
    )
  }
}

export default FormThree;