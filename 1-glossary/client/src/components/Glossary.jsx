import React from "react";
import Word from "./Word.jsx";

const Glossary = (props) => {
  return <div>
    {props.glossary.map((word, i) =>
      <Word word={word} key={i}/>
    )}
    </div>

}

export default Glossary;