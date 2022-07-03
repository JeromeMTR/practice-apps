import React from "react";

class AddWord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }
    this.changeWord = this.changeWord.bind(this)
  }

  // function that gets current word and sets state for it
  changeWord(e, bar) {
    if (bar === 'word') {
      this.setState({word: e.target.value}, ()=> {
        console.log(this.state.word)
      })
    } else if (bar === 'def') {
      this.setState({definition: e.target.value})
    }
  }

  // function that posts word to server
  add(e) {
    e.preventDefault()
    if (this.state.definition.length === 0 || this.state.word.length === 0) {
      alert ('Oh silly, left an INPUT BLANK!')
    } else {
      this.props.add(this.state)
        .then(() => {
      })
    }
  }

  render () {
    return (
     <form onSubmit={this.add.bind(this)}>
      <input
        type="text"
        // value={this.state.word}
        onChange={(event) => this.changeWord(event, 'word')}
        placeholder="Add Word Silly Goose">
      </input>
      <input
      type="text"
      // value={this.state.definition}
      onChange={this.changeWord.bind(this, event, 'def')}
      placeholder="Add a definition silly">
      </input>
      <input type="submit" value="Add"></input>
     </form>
    )
  }
}

export default AddWord;