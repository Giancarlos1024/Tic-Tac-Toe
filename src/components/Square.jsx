
export const Square = ({ children, updateBoard, isSelected, index }) => {
    const className = `square ${isSelected ? "is-selected" : ""}`;
    // Funcion con la cual podemos pasar el index el cual se ah seleccionado
    const handleClick = () => {
      updateBoard(index);
    };
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    );
  };