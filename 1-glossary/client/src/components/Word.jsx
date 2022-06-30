import React from "react";

class Word extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentWord: ''
    }
  }

  componentDidMount() {
    this.setState({currentWord: this.props.word});
  }

  update(e) {
    this.setState({currentWord: e.target.value});
    console.log(this.state.currentWord)
  }

  render () {
    return (
      <div>
          <button>{this.props.word}</button>
      </div>
    )
  }
}

export default Word;