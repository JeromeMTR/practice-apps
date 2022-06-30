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
    return <div>
      {this.props.glossary.map((wordObj, i) =>
        <Word word={wordObj.word} def={wordObj.definition} key={i}/>
      )}
      </div>

  }
}

export default Glossary;