import { useState } from "react";

const initialGmeBoard = [
  [null, null, null] ,
  [null, null, null] ,
  [null, null, null] ,
];
export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGmeBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((prevGameBoard) => {     // preGameBoard passed in automatically by React, return the updated gameboard
      const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];   // use spread operator to put the element to a new  (copy the array)
      updatedBoard[rowIndex][colIndex] = 'X';
      return updatedBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}