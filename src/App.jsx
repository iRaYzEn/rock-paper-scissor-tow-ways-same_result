import { useState } from 'react'
import './App.css'

function App() {
    const [person, setPerson] = useState("");
    // i make this isClicked because when you click the same button twice the component willn't be refreshed because there are no changes in the state (this is react)
    // i don't know another way and i don't want to fight react i just want to make different ways to solve the same problem.
    const [isClicked, setIsClicked] = useState(false);

    const randomNum = Math.round(Math.random() * 2) + 1;

    // old logic
    // // const randomNum = Math.round(Math.random() * 2) + 1;
    // const ROCK_POINT = 3;
    // const SCISSOR_POINT = 2;
    // const PAPER_POINT = 1;
    // let computer;
    // if (person.length == 0)
    //     computer = ""
    // else if (randomNum == PAPER_POINT)
    //     computer = "paper"
    // else if (randomNum == SCISSOR_POINT)
    //     computer = "scissor"
    // else if (randomNum == ROCK_POINT)
    //     computer = "rock"
    // let result;
    // if (person == computer)
    //     result = "draw";
    // else if (person == "rock" && computer == "paper")
    //     result = "Lost";
    // else if (person == "paper" && computer == "scissor")
    //     result = "Lost";
    // else if (person == "scissor" && computer == "rock")
    //     result = "Lost"
    // else if (person == "rock" && computer == "scissor")
    //     result = "Win";
    // else if (person == "paper" && computer == "rock")
    //     result = "Win";
    // else if (person == "scissor" && computer == "paper")
    //     result = "Win";

    // new logic
    const ROCK_POINT = 3;
    const SCISSOR_POINT = 2;
    const PAPER_POINT = 1;

    let computer;
    if (person.length == 0)
        computer = ""
    else if (randomNum == PAPER_POINT)
        computer = "paper"
    else if (randomNum == SCISSOR_POINT)
        computer = "scissor"
    else if (randomNum == ROCK_POINT)
        computer = "rock"
    let result = person - randomNum

    const WIN = 1;
    const LOST = -1;
    const DRAW = 0;
    const EDGE_CASE = 2;

    if (result == DRAW)
        result = "draw"
    else if (result == WIN) 
        result = "win";
    else if (result == EDGE_CASE)
        result = "lost";
    else if (result == LOST)
        result = "lost";
    else if (result == -EDGE_CASE)
        result = "win";

    return (
        <>
        {
            // <div className="buttons">
            //     <button onClick={() => {
            //         setPerson("rock");
            //         setIsClicked(state => !state);
            //     }} className="btn">Rock</button>
            //     <button onClick={() => {
            //         setPerson("paper");
            //         setIsClicked(state => !state);
            //     }} className="btn">Paper</button>
            //     <button onClick={() => {
            //         setPerson("scissor");
            //         setIsClicked(state => !state);
            //     }} className="btn">Scissor</button>
            // </div>
            // <h1>{person} Vs {computer} = {result}</h1>
        }
            <div className="buttons">
                <button onClick={() => {
                    setPerson(3);
                    setIsClicked(state => !state);
                }} className="btn">Rock</button>
                <button onClick={() => {
                    setPerson(1);
                    setIsClicked(state => !state);
                }} className="btn">Paper</button>
                <button onClick={() => {
                    setPerson(2);
                    setIsClicked(state => !state);
                }} className="btn">Scissor</button>
            </div>
            <h1>{person == 3 ? "rock" : person == 2 ? "scissor" : person == 1 ? "paper" : null} Vs {computer} = {person == "" ? "" : result }</h1>
        </>
    )
}

export default App


