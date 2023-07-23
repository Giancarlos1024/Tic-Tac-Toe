import { WINNER_COMBOS } from "../constants";

// Verficcar el ganador
export const checkPlayerWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    // Desestructurar los valos de cada combo
    const [a, b, c] = combo;

    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  // No hay ganador
  return null;
};
