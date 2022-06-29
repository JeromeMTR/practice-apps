import React from "react";

class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
    }
  }

  // function that gets current word and sets state for it
  changeWord(e) {
    this.setState({word: e.target.value});
    console.log(this.state);
  }

  // function that posts word to server
  add(e) {
    e.preventDefault()
    this.props.add(this.state.word);
  }

  render () {
    return (
     <form>
      <input onChange={this.changeWord.bind(this)}></input>
      <button onClick={this.add.bind(this)}></button>
     </form>
    )
  }
}

export default AddWord;