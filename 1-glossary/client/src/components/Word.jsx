import React from "react";

class Word extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentWord: ''
    }
  }


  update(e) {
    this.setState({currentWord: e.target.value});
    console.log(this.state.currentWord)
  }

  rm () {
    console.log(this.props.word);
    this.props.rm(this.props.word);
  }

  componentDidMount() {
    this.setState({currentWord: this.props.word});
  }


  render () {
    return (
      <li>
        <button onClick={this.rm.bind(this)}>Delete</button>
        <button >Edit</button>
        <ul>
          <div>Word : {this.props.word}</div>
          <div>  Definition : {this.props.def}</div>
        </ul>
      </li>
    )
  }
}

export default Word;