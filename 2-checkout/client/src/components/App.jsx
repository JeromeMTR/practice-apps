import React from "react";
import FormOne from './FormOne.jsx';
import FormTwo from './FormTwo.jsx';
import FormThree from './FormThree.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFormOne: false,
      showFormTwo: false,
      showFormThree: false
    };
    this.showFormOne = this.showFormOne.bind(this);
    this.showForm = this.showForm.bind(this);
    this.showFormTwo = this.showFormTwo.bind(this);
    this.showFormThree = this.showFormThree.bind(this);
    this.liftState = this.liftState.bind(this);
  }

  showFormOne() {
    this.setState({showFormOne: !this.state.showFormOne});
  }
  showForm() {
    this.setState({showFormThree: !this.state.showFormThree});
  }

  showFormTwo() {
    this.setState({showFormOne: !this.state.showFormOne}, () => {
      this.setState({showFormTwo: !this.state.showFormTwo});
    })
  }

  showFormThree() {
    this.setState({showFormTwo: !this.state.showFormTwo}, () => {
      this.setState({showFormThree: !this.state.showFormThree});
    });
  }

  liftState(componentState, form) {
    for (var key in componentState) {
      let obj = {};
      obj[key] = componentState[key];
      this.setState(obj, ()=> {
        console.log(this.state);
      })
    }
  }


  render() {
    let showFormOne, showFormTwo, showFormThree;
    if (this.state.showFormOne && (this.state.showFormTwo === this.state.showFormThree)) {
      showFormOne = (<FormOne showFormTwo={this.showFormTwo} lift={this.liftState}/>)
    }
    if (this.state.showFormTwo) {
      showFormTwo = (<FormTwo showFormThree={this.showFormThree}/>)
    }
    if (this.state.showFormThree) {
      showFormThree = (<FormThree showForm={this.showForm}/>)
    }

    return(
      <div>
        <button onClick={this.showFormOne}>CHECKOUT</button>
        {showFormOne}
        {showFormTwo}
        {showFormThree}
      </div>
    )
  }
}

export default App;