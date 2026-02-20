import "./GameOver.css";

const GameOver = ({retry,score}) => {
  return (
    <div className="gameOver">
      <h1>Game Over!</h1>
      <p className="scoreLabel">
        Your score was: 
      </p>
      <div className="scoreValue">
        {score}
      </div>
      <button onClick={retry}>RESTART GAME</button>
    </div>
  )
}

export default GameOver