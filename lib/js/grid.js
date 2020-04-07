class Grid {
  constructor(){
    this.colorChangeOn = false;
    this.axisCell = []; //this should be reset when user selects a new
      // symmetry direction at the sidebar, right before they click the grid
      // to reassign the axis

    this.colorCell = this.colorCell.bind(this);
    this.toggleColorChangeOn = this.toggleColorChangeOn.bind(this);
  }

  toggleColorChangeOn(e){
    if (this.axisCell.length === 0){
      const clickedCell = e.target;
      this.axisCell = clickedCell.getAttribute('data-coordinates');
    }

    this.colorChangeOn =
      this.colorChangeOn === false ? true : false;
  }

  colorCell(e){
    if (this.colorChangeOn){
      const cell = e.target;
      cell.style.backgroundColor = 'red';
      cell.style.border = 'none';
      console.log(cell.getAttribute('data-coordinates'));
    }
  }

  buildGrid(){
    const gridHolder = document.querySelector('.grid-holder');
    gridHolder.addEventListener('click', this.toggleColorChangeOn);
    gridHolder.addEventListener('mouseover', this.colorCell);


    for (let i = 0; i < 81; i++){
      for (let j = 0; j < 101; j++){
        let gridCell = document.createElement('div');
        gridCell.className = 'grid-cell';
        gridCell.setAttribute('data-coordinates', `[${i}, ${j}]`)
        gridHolder.appendChild(gridCell);
      }
    }
  }


}

export default Grid;
