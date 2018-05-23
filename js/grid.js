class Grid {
  constructor(){
    this.colorCell = this.colorCell.bind(this);
  }

  colorCell(e){
    const cell = e.target;
    cell.style.backgroundColor = 'red';
    cell.style.border = 'none';
  }

  buildGrid(){
    const gridHolder = document.querySelector('.grid-holder');
    gridHolder.addEventListener('mouseover', this.colorCell);

    for (let i = 0; i < 8181; i++){
      let gridCell = document.createElement('div');
      gridCell.className = 'grid-cell';
      gridHolder.appendChild(gridCell);
    }
  }


}

export default Grid;
