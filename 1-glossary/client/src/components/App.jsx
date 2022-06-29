import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    };
  }

  render() {
    return (
      <div>
        <p>Hello, World!</p>
        <WordList/>
        <Add/>
      </div>
    )
  }
}

export default App;