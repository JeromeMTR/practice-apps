import React from "react";

class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.purchase = this.purchase.bind(this);
  }

  // does a post request
  purchase(e) {
    e.preventDefault()
    this.props.post()
  }

  render() {
      return(
        <div> <h2>CHECKOUT SUMMARY</h2>
        <h3> User Information</h3>
          <p>Username : {this.props.form1.username}</p>
          <p>Email : {this.props.form1.email}</p>
          <p>Password : ********</p>
        <h3> Adress Information</h3>
          <p>Line 1 : {this.props.form2.line1}</p>
          <p>Line 2 : {this.props.form2.line2}</p>
          <p>City : {this.props.form2.city}</p>
          <p>State : {this.props.form2.state}</p>
          <p>Zipcode : {this.props.form2.zipcode}</p>
        <h3> Card Information</h3>
          <p>Credi Card Number : {this.props.form3.creditCard}</p>
          <p>Exipiration Date : {this.props.form3.expirationDate}</p>
          <p>CVV : {this.props.form3.cvv}</p>
          <p>Billing Zip Code : {this.props.form3.billingCode}</p>
        <form onSubmit={this.purchase}>
          <input type="submit" value="PURCHASE"></input>
        </form>
        </div>
      )
    }
}

export default Purchase;