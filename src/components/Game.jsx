import "./Game.css";
import { useCallback, useRef, useState } from 'react';


const Game = ({verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score}) => {

    const [letter,setLetter] = useState("");

    const letterInputRef = useRef(null);

    const handleSubmit = (e) =>{
      e.preventDefault();
      verifyLetter(letter);
      setLetter("");

      letterInputRef.current.focus();
    };

  return (
    <div className="game">
      <div className="gameCard">
        <p className="points">
          Score: {score}
        </p>
        <h1 className="gameTitle">Guess the word: </h1>
        <h3 className="tip">
        Hint: <span>{pickedCategory}</span>
        </h3>
        <p className="triesText">You still have <span className="spanGuesses">{guesses}</span> tries left</p>

        <div className="wordContainer">
          {letters.map((letter,i) => (
            guessedLetters.includes(letter) ? (
              <span key={i} className="letter">
                {letter}
              </span>
            ) : (
              <span key={i} className="blankSquare"></span>
            )
            )
          )}
        </div>

      <div className="letterContainer">
        <p>Try to guess a letter of the word:</p>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name="letter" 
          maxLength="1" 
          required 
          onChange={(e) => setLetter(e.target.value)}
          value={letter}
          ref={letterInputRef}/>
          <button>Guess!</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p>Wrong letters:</p>
      
          <div className="wrongLettersChips">
            {wrongLetters.map((letter,i) => (
            <span key={i}>{letter}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game