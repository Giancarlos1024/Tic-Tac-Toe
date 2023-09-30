import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { checkPlayerWinner } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";
export const App = () => {
  const [board, setboard] = useState(() => {
    const boardStorage = localStorage.getItem("board");
    return boardStorage ? JSON.parse(boardStorage) : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnStorage = localStorage.getItem("turn");
    return turnStorage ? turnStorage : TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  // resetear el juego
  const resetGame = () => {
    setboard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
  };

  const checkEndGame = (boardToCheck = []) => {
    // Verfifcar que todas las posiciones del arrat del board  sean dferentes a null con el metodo every
    return boardToCheck.every((square) => square !== null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;
    // Actualizar los valores ya sea X o O
    const newBoard = [...board];
    newBoard[index] = turn;
    setboard(newBoard);
    // Asignar nuevo turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    // Guardar partida
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
    // Revisar si hay un ganador
    const playerWinner = checkPlayerWinner(newBoard);
    if (playerWinner) {
      confetti();
      setWinner(() => {
        return playerWinner;
      });
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };
  return (
    <>
      <main className="board">
        <h1>TRES EN RAYA</h1>
        <button onClick={resetGame}>Reniciar el Juego</button>
        <section className="game">
          {board.map((_, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {board[index]}
              </Square>
            );
          })}
        </section>
        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
        <WinnerModal winner={winner} resetGame={resetGame} />
      </main>
    </>
  );
};
