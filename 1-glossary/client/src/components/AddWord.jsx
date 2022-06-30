import React from "react";

class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }
  }

  // function that gets current word and sets state for it
  changeWord(e, bar) {
    if (bar === 'word') {
      this.setState({word: e.target.value});
    } else {
      this.setState({definition: e.target.value})
    }
  }

  // function that posts word to server
  add(e) {
    e.preventDefault()
    this.props.add(this.state);
  }

  render () {
    return (
     <form>
      <input type="text" onChange={this.changeWord.bind(this, event, 'word')}></input>
      <input type="text" onChange={this.changeWord.bind(this, event)}></input>
      <button onClick={this.add.bind(this)}>ADD WORD</button>
     </form>
    )
  }
}

export default AddWord;