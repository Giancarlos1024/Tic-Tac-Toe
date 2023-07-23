export const TURNS = {
    X: "⭕",
    O: "⚪",
  };
  
  export const WINNER_COMBOS = [
    // Horzontales
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Verticales
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal iz
    [0, 4, 8],
    [2, 4, 6],
  ];