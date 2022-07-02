import React from "react";
import FormThree from "./FormThree.jsx";

class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: '',
      line2: '',
      city: '',
      state: '',
      zipcode: ''
    };
    this.showFormThree = this.showFormThree.bind(this);
  }

  showFormThree(e) {
    e.preventDefault();
    for (let key in this.state) {
      if (this.state[key].length === 0) {
        return alert (`${key} is missing`);
      }
    }
    this.props.showFormThree('showFormTwo', 'showFormThree'); // non blocking
    this.props.lift(this.state, 'form2');
  }

  render() {
    return(
      <div><h2>Address</h2>
      <form onSubmit={this.showFormThree}>
        <p>Line 1 : </p>
          <input
            type="text"
            onChange={(e) => this.props.onChange.call(this, e, 'line1')}>
          </input>
        <p>Line 2 : </p>
          <input
            type="text"
            onChange={(e) => this.props.onChange.call(this, e, 'line2')}>
          </input>
        <p>City : </p>
          <input
            type="text"
            onChange={(e) => this.props.onChange.call(this, e, 'city')}>
          </input>
        <p>State : </p>
            <input
              type="text"
              onChange={(e) => this.props.onChange.call(this, e, 'state')}>
          </input>
        <p>Zip code : </p>
          <input
              type="text"
              onChange={(e) => this.props.onChange.call(this, e, 'zipcode')}>
          </input>
        <input type="submit" value="next"></input>
      </form>
      </div>
    )
  }
}

export default FormTwo;