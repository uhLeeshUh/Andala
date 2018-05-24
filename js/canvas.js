class Canvas {
  constructor(id){
    this.canvasElement = document.getElementById(id);
    this.ctx = this.canvasElement.getContext('2d');

    this.axisPoint = [400, 325];

    this.startingX = 0;
    this.startingY = 0;
    this.drawing = false;
    this.lineWidth = 3;
    this.strokeStyle = 'red';
    // this.ctx.fillStyle = 'purple';
    // this.ctx.fillRect(10, 10, 100, 100);
    this.draw = this.draw.bind(this);

    this.canvasElement.addEventListener('mousedown', (e) => this.setDrawingParameters('down', e));
    this.canvasElement.addEventListener('mouseup', (e) => this.setDrawingParameters('up', e));
    this.canvasElement.addEventListener('mousemove', this.draw);

    //test for center point
    // this.ctx.fillRect(this.axisPoint[0], this.axisPoint[1], 1, 1);
  }

  draw(e){
    if (this.drawing){
      this.ctx.moveTo(this.startingX, this.startingY);
      this.ctx.lineTo(e.clientX, e.clientY);
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.strokeStyle = this.strokeStyle;
      this.ctx.stroke();


      this.startingX = e.clientX;
      this.startingY = e.clientY;
    }
  }

  drawSymmetricCurve(){
    //PICK UP HERE!
  }


  setDrawingParameters(action, e){
    switch (action) {
      case 'down':
        this.drawing = true;
        this.startingX = e.clientX;
        this.startingY = e.clientY;
        // console.log(`starting coordinates are ${this.startingX}, ${this.startingY}`);
        return;
      case 'up':
        this.drawing = false;
        // console.log(`now drawing is ${this.drawing}`);
        return;
    }


    }



}

export default Canvas;
