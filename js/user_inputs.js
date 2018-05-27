export const setUserInputListeners = () => {
  const brushColors = document.querySelector('.brush-colors');
  brushColors.addEventListener("click", toggleBrushColors);

  // const canvasBackgrounds = document.querySelector('.canvas-backgrounds');
  // canvasBackgrounds.addEventListener("click", toggleCanvasBackground);
};

export const toggleBrushColors = (e) => {
  const previousBrush = document.querySelector('.drawing-color-selected');
  previousBrush.className = "";
  e.target.className = 'drawing-color-selected';
  this.strokeStyle = e.target.dataset.color;
};



// export const setPenColorsListener = () => {
//   const penColors = document.querySelector('.pen-colors');
//   // debugger
//   penColors.addEventListener("click", toggleClass('drawing-color-selected'));
// };
//
//
//
// const toggleClass = (className, iVar) => {
//   // debugger
//   return (e) => {
//     // debugger
//     const previouslySelected = document.querySelector(`.${className}`);
//     previouslySelected.className = "";
//     e.target.className = `${className}`;
//     // this.send(`${iVar}=`, )
//
//   };
// };
