export const setPenColorsListener = () => {
  const penColors = document.querySelector('.pen-colors');
  // debugger
  penColors.addEventListener("click", toggleClass('drawing-color-selected'));
};



const toggleClass = (className, iVar) => {
  // debugger
  return (e) => {
    // debugger
    const previouslySelected = document.querySelector(`.${className}`);
    previouslySelected.className = "";
    e.target.className = `${className}`;
    // this.send(`${iVar}=`, )

  };
};
