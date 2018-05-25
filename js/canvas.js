class Canvas {
  constructor(id){
    this.canvasElement = document.getElementById(id);
    this.ctx = this.canvasElement.getContext('2d');

    this.axisPoint = [400, 325];
    this.symDirection = 'HORIZONTAL';
    this.radialOrder = 0;

    this.startCoordinates = [];
    this.nextCoordinates = [];
    this.drawing = false;
    this.lineWidth = 3;
    this.strokeStyle = 'red';

    this.determineDraw = this.determineDraw.bind(this);

    this.canvasElement.addEventListener('mousedown', (e) => this.setDrawingParameters('DOWN', e));
    this.canvasElement.addEventListener('mouseup', (e) => this.setDrawingParameters('UP', e));
    this.canvasElement.addEventListener('mousemove', this.determineDraw);

    //test for center point
    // this.ctx.beginPath();
    // this.ctx.arc(400,325,50,Math.PI * (2/5), Math.PI * (2/5));
    // this.ctx.fill();
    // this.ctx.fillRect(this.axisPoint[0], this.axisPoint[1], 1, 1);
//     ctx.beginPath();
// ctx.arc(100,75,50,0,2*Math.PI);
// ctx.stroke();
  }

  determineDraw(e){
    if (this.drawing){
      this.setCoordinates(e, 'NEXT');
      //will this be an async problem?
      this.startCoordinates.forEach((coordPair, idx) => {
        this.ctx.moveTo(coordPair[0], coordPair[1]);
        this.ctx.lineTo(this.nextCoordinates[idx][0], this.nextCoordinates[idx][1]);
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.stroke();

        this.startCoordinates[idx] = this.nextCoordinates[idx];
      });

      //
      // this.ctx.moveTo(this.startCoordinates[0][0], this.startCoordinates[0][1]);
      // this.ctx.lineTo(e.clientX, e.clientY);
      // this.ctx.lineWidth = this.lineWidth;
      // this.ctx.strokeStyle = this.strokeStyle;
      // this.ctx.stroke();
      //
      // this.startCoordinates[0][0] = e.clientX;
      // this.startCoordinates[0][1] = e.clientY;
      }
    }

  setDrawingParameters(action, e){
    switch (action) {
      case 'DOWN':
        this.drawing = true;
        this.setCoordinates(e, 'START');
        // console.log(`starting coordinates are ${this.startingX}, ${this.startingY}`);
        return;
      case 'UP':
        this.drawing = false;
        // console.log(`now drawing is ${this.drawing}`);
        return;
      }
    }

  setCoordinates(e, startOrNext){
    switch(this.symDirection){
      case 'HORIZONTAL':
        const firstPair = [e.clientX, e.clientY];
        const symmetricPairX = e.clientX;
        const symmetricPairY = ((this.axisPoint[1] - e.clientY) * 2) + e.clientY;
        const symmetricPair = [symmetricPairX, symmetricPairY];
        if (startOrNext === 'START'){
          this.startCoordinates.push(firstPair);
          this.startCoordinates.push(symmetricPair);
        } else {
          this.nextCoordinates = [];
          this.nextCoordinates.push(firstPair);
          this.nextCoordinates.push(symmetricPair);
        }
        return;
      case 'VERTICAL':
        return;
      case 'RADIAL':
        return;
    }
  }


}

export default Canvas;
