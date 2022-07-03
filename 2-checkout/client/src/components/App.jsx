import React from "react";
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
import FormThree from './FormThree.jsx';
import Purchase from './Purchase.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormOne: false,
      showFormTwo: false,
      showFormThree: false,
      checkout: true,
      purchase: false
    };
    this.post = this.post.bind(this);
    this.nextForm = this.nextForm.bind(this);
    this.liftState = this.liftState.bind(this);
  }

  post() {
    let allForms = {
      form1: this.state.form1,
      form2: this.state.form2,
      form3: this.state.form3,
    };

    axios.post('http://localhost:8080/checkout', allForms)
      .then(() => {
        this.setState({
          checkout: !this.state.checkout,
          purchase: !this.staet.purchase
        })
      })
      .catch(err => console.log(err))
  }

  nextForm(oldForm, newForm) {
    let obj = {};
    obj[oldForm] = !this.state[oldForm];
    obj[newForm] = !this.state[newForm];
    return this.setState(obj);
  }

  liftState(componentState, form) {
    let obj = {};
    obj[form] = componentState;
    this.setState(obj);
  }

  onChange(e, inputBar) {
    let obj = {};
    obj[inputBar] = e.target.value;
    this.setState(obj)
  }

  render() {
    let showFormOne, showFormTwo, showFormThree, checkout, purchase;

    if (this.state.checkout) {
      checkout = (<button onClick={this.nextForm.bind(this, 'checkout', 'showFormOne')}>CHECKOUT</button>);
    }
    if (this.state.showFormOne && (this.state.showFormTwo === this.state.showFormThree)) {
      showFormOne = (<FormOne
        showFormTwo={this.nextForm}
        lift={this.liftState}
        onChange={this.onChange}
      />)
    }
    if (this.state.showFormTwo) {
      showFormTwo = (<FormTwo
        showFormThree={this.nextForm}
        lift={this.liftState}
        onChange={this.onChange}
      />)
    }
    if (this.state.showFormThree) {
      showFormThree = (<FormThree
        showPurchase={this.nextForm}
        lift={this.liftState}
        onChange={this.onChange}
      />)
    }
    if (this.state.purchase) {
      purchase =(<Purchase
        post={this.post}
        homepage={this.nextForm}
        form1={this.state.form1}
        form2={this.state.form2}
        form3={this.state.form3}
        />)
    }

    return(
      <div>
        {checkout}
        {showFormOne}
        {showFormTwo}
        {showFormThree}
        {purchase}
      </div>
    )
  }
}

export default App;