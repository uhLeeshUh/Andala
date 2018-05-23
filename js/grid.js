class Grid {
  constructor(){
    this.colorChangeOn = false;
    this.colorCell = this.colorCell.bind(this);
    this.toggleColorChangeOn = this.toggleColorChangeOn.bind(this);
  }

  toggleColorChangeOn(e){
    this.colorChangeOn =
      this.colorChangeOn === false ? true : false;
  }

  colorCell(e){
    if (this.colorChangeOn){
      const cell = e.target;
      cell.style.backgroundColor = 'red';
      cell.style.border = 'none';
    }
  }

  buildGrid(){
    const gridHolder = document.querySelector('.grid-holder');
    gridHolder.addEventListener('click', this.toggleColorChangeOn);
    gridHolder.addEventListener('mouseover', this.colorCell);

    for (let i = 0; i < 8181; i++){
      let gridCell = document.createElement('div');
      gridCell.className = 'grid-cell';
      gridHolder.appendChild(gridCell);
    }
  }


}

export default Grid;
