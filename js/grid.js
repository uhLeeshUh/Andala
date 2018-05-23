class Grid {
  constructor(){

  }

  buildGrid(){
    const gridHolder = document.querySelector('.grid-holder');

    for (let i = 0; i < 8181; i++){
      let gridCell = document.createElement('div')
      gridCell.className = 'grid-cell';
      gridHolder.appendChild(gridCell);
    }
  }


}

export default Grid;
