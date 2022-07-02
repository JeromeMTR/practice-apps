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
      showFormThree: false,
    };
    this.showFormOne = this.showFormOne.bind(this);
    this.showFormTwo = this.showFormTwo.bind(this);
    this.showFormThree = this.showFormThree.bind(this);
  }

  showFormOne() {
    return this.setState({showFormOne: !this.state.showFormOne});
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


  render() {
    let showFormOne, showFormTwo, showFormThree;
    if (this.state.showFormOne) {
      showFormOne = (<FormOne showFormTwo={this.showFormTwo}/>)
    }
    if (this.state.showFormTwo) {
      showFormTwo = (<FormTwo showFormThree={this.showFormThree}/>)
    }
    if (this.state.showFormThree) {
      showFormThree = (<FormThree/>)
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