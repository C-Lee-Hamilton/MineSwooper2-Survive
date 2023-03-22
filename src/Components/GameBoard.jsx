import { useState, useEffect } from "react";
import "./GameBoard.css";
import splat from "./splat.png";
import { Scores } from "./Scores";

export const GameBoard = () => {
  let random = Math.floor(Math.random() * 3);
  const [board, setBoard] = useState(
    Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ({})))
  );
  const [toggle, setToggle] = useState(false);
  const [trytoggle, setTrytoggle] = useState(false);
  const [pictoggle, setPictoggle] = useState(false);
  const [size, setSize] = useState(4);
  const [color, setColor] = useState("black");
  const [game, setGame] = useState(true);
  const [manual, setManual] = useState(true);
  const [score, setScore] = useState(0);
  const [topscore, setTopscore] = useState(0);

  useEffect(() => {
    board[random][random].bomb = true;
    if (color === "yellow") {
      setToggle(true);
      setTrytoggle(false);
      setPictoggle(false);
    } else {
    }
    if (color === "red") {
      setTrytoggle(true);
      setToggle(false);
      setPictoggle(true);
    } else {
    }

    if (score > topscore) {
      setTopscore(score);
    } else {
    }
  }, [board, random, color, score, topscore]);

  const move = (row, col) => {
    let i = row;
    let j = col;
    setGame(false);
    setManual(false);
    board[i][j].bomb === true ? setColor("yellow") : setColor("red");
  };

  const nextLevel = () => {
    setToggle(false);
    setScore(score + 1);

    setTrytoggle(false);
    setPictoggle(false);
    setColor("black");
    setGame(true);
    setSize(size + 1);
    setBoard(
      Array.from({ length: size }, () =>
        Array.from({ length: size }, () => ({}))
      )
    );
  };
  const retryLevel = () => {
    setScore(0);
    setManual(true);
    setPictoggle(false);
    setToggle(false);
    setTrytoggle(false);
    setColor("black");
    setGame(true);
    setSize(4);
    setBoard(
      Array.from({ length: 3 }, () => Array.from({ length: 3 }, () => ({})))
    );
  };
  return (
    <div className="gameboard">
      {board.map((row, rowIndex) => {
        return (
          <div key={rowIndex}>
            {row.map((square, sqIndex) => (
              <div
                style={{ backgroundColor: color }}
                onClick={() => {
                  game && move(rowIndex, sqIndex);
                }}
                key={sqIndex}
                className="thebutton"
              >
                <br />
              </div>
            ))}
          </div>
        );
      })}
      {pictoggle && <img className="popup" src={splat} alt="x" />}
      {toggle && (
        <button className="clickers" onClick={nextLevel}>
          Next
        </button>
      )}
      {trytoggle && (
        <button className="clickers" onClick={retryLevel}>
          Try Again
        </button>
      )}
      {manual && (
        <div className="manual">
          You have one chance to find the light, good luck...{" "}
        </div>
      )}
      <Scores score={score} topscore={topscore} />
    </div>
  );
};
