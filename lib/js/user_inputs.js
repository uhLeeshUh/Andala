export const setUserInputListeners = () => {
  const brushColors = document.querySelector('.brush-colors');
  brushColors.addEventListener("click", toggleBrushColor);
};

export const toggleBrushColor = (e) => {
  const previousBrush = document.querySelector('.drawing-color-selected');
  previousBrush.className = "";
  e.target.className = 'drawing-color-selected';
  this.strokeStyle = e.target.dataset.color;
};
