import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
return (
    <div className="start">
      <h1 className="titleSticker">
        <span className="titleStroke">Secret Word</span>
        <span className="titleFill">Secret Word</span>
      </h1>
      <p>Guess the secret word in 5 tries</p>
      <button onClick={startGame} id="start_button">Start Game</button>
    </div>
  );
};

export default StartScreen