
import { useState } from "react";

function Body() {
  const [userPlayer, setUserPlayer] = useState("start");
  const [computerPlayer, setComputerPlayer] = useState("start");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState("null");

  const choice = ["rock", "scissors", "paper"];

  return (
    <div className="body">
      <h1 className="heading"> Let's Rock Paper Scissors Dude !</h1>
      <div className="score-board">
        <h1> UserPoints:{userScore}</h1>
        <h1> ComputerPoints:{computerScore}</h1>
      </div>

      <div className="choices">
        <div className="user-choice">
          <img className="user-hand" src={userPlayer==="start" ?"/images/start.png":`/images/${userPlayer}.gif`} />
        </div>

        <div className="choices-computer">
          <img
            className="computer-hand"
            src={computerPlayer==="start" ?"/images/start.png":`/images/${computerPlayer}.gif`}
          />
        </div>
      </div>
      <div className="result">
        <h1> Result:{result}</h1>
      </div>
    </div>
  );
}
export default Body;
