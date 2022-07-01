import React from "react";

class Word extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentWord: '',
      definition: '',
      showForm: false
    }
  }

  // add remove function to each word
  rm () {
    if (this.state.showForm) {
      this.show();
    }
    this.props.rm(this.props.word);
  }

  // shows form to edit word and definition
  show (e) {
    this.setState({showForm: !this.state.showForm})
  }

  // changes state depending on input bar
  changeHandler(e, inputBar) {
    if (inputBar === 'word') {
      this.setState({currentWord: e.target.value});
    } else {
      this.setState({definition: e.target.value});
    }
  }

  submitHandler(e) {
    e.preventDefault();
    let replacement = {
      word: this.props.word,
      wordEdit: this.state.currentWord,
      defEdit: this.state.definition
    }
    this.props.edit(replacement);
  }

  // once component mount update the current word
  componentDidMount() {
    this.setState({currentWord: this.props.word});
  }


  render () {
    let showForm;
    if (this.state.showForm) {
      showForm = (<form onSubmit={this.submitHandler.bind(this)}>
        <input
          type="text"
          placeholder="edit word"
          onChange={this.changeHandler.bind(this, event, 'word')}>
        </input>
        <input
          type="text"
          placeholder="edit definition"
          onChange={this.changeHandler.bind(this, event)}></input>
        <input type="submit" value="submit"></input>
      </form>)
    }

    return (
      <ul>
        <li>
        Word : {this.props.word}
        </li>
        Definition : {this.props.def}
        <div>
        <button onClick={this.show.bind(this)}>Edit</button>
        {showForm}
        <button onClick={this.rm.bind(this)}>Delete</button>
        </div>


      </ul>
    )
  }
}

export default Word;