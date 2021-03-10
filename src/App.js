import './App.css';
import React from "react";

function App() {
  const [textInput, setTextInput] = React.useState(`This is
a badly formatted file. This line is pretty long! It's way more than 80 characters! I feel a line wrap coming on!

This      is a second paragraph with extraneous whitespace.`);
  const [textOutput, setTextOutput] = React.useState('');

  const handleChange = event => {
    setTextInput(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    transformText(textInput);
  };

  const transformText = input => {

    // split by paragraph and remove extra blank lines

    let formattedParagraphs = []

    let paragraphArr = input.split(/\n\n/)

    for(let i = 0; i < paragraphArr.length; i++){
      if(paragraphArr[i] === "") continue;
      formattedParagraphs.push(paragraphArr[i].replace(/(\r\n|\n|\r)/gm, " "))
    }

    formattedParagraphs = formattedParagraphs.join('\n\n')

    // remove extra white spaces in between words

    let formattedWords = [];

    let wordsArr = formattedParagraphs.split(" ")

    for(let i = 0; i < wordsArr.length; i++){
      if(wordsArr[i] === "") continue;
      formattedWords.push(wordsArr[i])
    }

    formattedWords = formattedWords.join(" ")

    let output = formattedWords

    setTextOutput(output);
  }
  
  return (
    <div className="App">
      <header>
        <h1>Career Lab | Take-Home Assignment</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <label>
          <textarea onChange={handleChange} value={textInput}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
      <div id="result">
        {textOutput}
      </div>
    </div>
  );
}

export default App;
