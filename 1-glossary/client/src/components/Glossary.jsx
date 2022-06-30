import React from "react";
import Word from "./Word.jsx";

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: ''
    }
  }
  render() {
    console.log(this.props);
    return <div>
      {this.props.glossary.map((wordObj, i) =>
        <Word word={wordObj.word} def={wordObj.definition} rm={this.props.rm} key={i}/>
      )}
      </div>

  }
}

export default Glossary;