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
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, inputBar) {
    if (inputBar === 'username') {
      this.setState({username: e.target.value});
    }
    if (inputBar === 'email') {
      this.setState({email: e.target.value});
    }
    if (inputBar === 'password') {
      this.setState({password: e.target.value});
    }
  }

  showFormTwo(e) {
    e.preventDefault();
    for (let key in this.state) {
      if (this.state[key].length === 0) {
        return alert ('missing input');
      }
    }
    this.props.lift(this.state);
    this.props.showFormTwo();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.showFormTwo}>
          {/* <label>Username : </label><input type="text"></input><p></p>
          <label>Email : </label><input type="text"></input><p></p>
          <label>Password : </label><input type="text"></input><p></p> */}
          <p>Username : </p><input type="text" onChange={(e) => this.onChange(e, 'username')}></input>
          <p>Email : </p><input type="text" onChange={(e) => this.onChange(e, 'email')}></input>
          <p>Password : </p><input type="text" onChange={(e) => this.onChange(e, 'password')}></input>
          <input type="submit" value="next"></input>
        </form>
      </div>
    )
  }
}

export default FormOne;