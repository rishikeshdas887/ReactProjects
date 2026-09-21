import { useState, useEffect } from "react";
import "./Body.css";
function Body() {
  const [userPlayer, setUserPlayer] = useState("start");
  const [computerPlayer, setComputerPlayer] = useState("start");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [turnResult, setTurnResult] = useState("");
  const [result, setResult] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const choices = ["rock", "scissors", "paper"];
  const handleOnClick = (choice) => {
    if (gameOver)return ;
    setUserPlayer(choice);
    generateComputerPlayerChoice();
  };
  const generateComputerPlayerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerPlayer(randomChoice);
  };
  const reset = () => {
    window.location.reload();
  };


  useEffect (() => {
    const comboMoves = userPlayer + computerPlayer;
    if (userScore <= 4 && computerScore <= 4) {
      if (
        comboMoves === "rockscissors" ||
        comboMoves === "paperrock" ||
        comboMoves === "scissorspaper"
      ) {
        const updatedUserScores = userScore + 1;
        setUserScore(updatedUserScores);
        setTurnResult("Hurray ! User got the point dude ");
        if (updatedUserScores === 5) {
          setGameOver(true);
          setResult("User wins");
        }
      }
      if (
        comboMoves === "scissorsrock" ||
        comboMoves === "paperscissors" ||
        comboMoves === "rockpaper"
      ) {
        const updatedComputerScores = computerScore + 1;
        setComputerScore(updatedComputerScores);
        setTurnResult("Ssssshhhhhhhh Computer got the point dude ");
        if (updatedComputerScores === 5) {
          setGameOver(true);
          setResult("Computer wins");
        }
      }

if (
        comboMoves === "scissorsscissors" ||
        comboMoves === "paperpaper" ||
        comboMoves === "rockrock"
      ) {
  setTurnResult('Tie,No Points Yep')
    }
  }
},[userPlayer,computerPlayer]);

  
  return (
    <div className="body">
      <h1 className="heading"> Let's Rock Paper Scissors Dude !</h1>
      <div className="score-board">
        <h1> UserPoints:{userScore}</h1>
        <h1> ComputerPoints:{computerScore}</h1>
      </div>

      <div className="choice">
        <div className="user-choice">
          <img
            className="user-hand"
            src={
              userPlayer === "start"
                ? "/images/start.png"
                : `/images/${userPlayer}.gif`
            }
          />
        </div>

        <div className="choice-computer">
          <img
            className="computer-hand"
            src={
              computerPlayer === "start"
                ? "/images/start.png"
                : `/images/${computerPlayer}.gif`
            }
          />
        </div>
        <div className="button-div">
          {choices.map((choice, index) => (
            <button
              className="btn"
              key={index}
              onClick={() => handleOnClick(choice)}
            >
              {choice}
            </button>
          ))}
        </div>
      </div>

      <div className="result">
        <h1> Turn Result:{turnResult}</h1>
        <h2> Final Result:{result}</h2>
      </div>

      <div className="button-div">
        {gameOver && (
          <button className="button" onClick={() => reset()}>
            Restart Game ?
          </button>
        )}
      </div>
    </div>
  );
}
export default Body;
