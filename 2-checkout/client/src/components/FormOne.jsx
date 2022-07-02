import React from "react";
import FormTwo from "./FormTwo.jsx";

class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        username: '',
        email: '',
        password: ''
    };
    this.showFormTwo = this.showFormTwo.bind(this);
  }

  showFormTwo(e) {
    e.preventDefault();
    for (let key in this.state) {
      if (this.state[key].length === 0) {
        return alert (`${key} is missing`);
      }
    }
    this.props.showFormTwo('showFormOne', 'showFormTwo'); // none blocking asychronous
    this.props.lift(this.state, 'form1');
  }

  render() {
    return(
      <div>
        <h2>CREATE ACCOUNT</h2>
        <form onSubmit={this.showFormTwo}>
          <p>Username : </p>
          <input
            type="text"
            onChange={(e) => this.props.onChange.call(this, e, 'username')}>
          </input>
          <p>Email : </p>
          <input
            type="text"
            onChange={(e) => this.props.onChange.call(this, e, 'email')}>
          </input>
          <p>Password : </p>
          <input
            type="text"
            onChange={(e) => this.props.onChange.call(this, e, 'password')}>
          </input>
          <input type="submit" value="next"></input>
        </form>
      </div>
    )
  }
}

export default FormOne;