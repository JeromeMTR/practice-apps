import React from "react";

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        creditCard: '',
        expirationDate: '',
        cvv: '',
        billingCode: ''
      }
    this.showCheckout = this.showCheckout.bind(this);
  }

  showCheckout(e) {
    e.preventDefault()
    for (let key in this.state) {
      if (this.state[key].length === 0) {
        return alert (`${key} is missing`);
      }
    }
    this.props.showPurchase('showFormThree', 'purchase');
    this.props.lift(this.state, 'form3');
  }


  render() {
    return(
      <div><h2>Card Information</h2>
      <form onSubmit={this.showCheckout}>
        <p>Credit Card Number : </p>
        <input
          type="text"
          onChange={e => this.props.onChange.call(this, e, 'creditCard')}
          >
        </input>
        <p>Exipiration Date : </p>
        <input
          type="text"
          onChange={e => this.props.onChange.call(this, e, 'expirationDate')}
          >
        </input>
        <p>CVV : </p>
        <input
          type="text"
          onChange={e => this.props.onChange.call(this, e, 'cvv')}
        >
        </input>
        <p>Billing Zip Code : </p>
        <input
          type="text"
          onChange={e => this.props.onChange.call(this, e, 'billingCode')}
        >
        </input>
        <input type="submit" value="next"></input>
      </form>
      </div>
    )
  }
}

export default FormThree;