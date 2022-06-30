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

  componentDidMount() {
    this.setState({currentWord: this.props.word});
  }

  render () {
    return (
      <div>
          <button >{this.props.word}</button>
          {this.props.def}
      </div>
    )
  }
}

export default Word;