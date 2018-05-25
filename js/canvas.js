class Canvas {
  constructor(id){
    this.canvasElement = document.getElementById(id);
    this.ctx = this.canvasElement.getContext('2d');

    this.axisPoint = [400, 325];
    this.symDirection = 'RADIAL';
    this.radialOrder = 9;

    this.startCoordinates = [];
    this.nextCoordinates = [];
    this.drawing = false;
    this.lineWidth = 3;
    this.strokeStyle = 'red';

    this.determineDraw = this.determineDraw.bind(this);

    this.canvasElement.addEventListener('mousedown', (e) => this.setDrawingParameters('DOWN', e));
    this.canvasElement.addEventListener('mouseup', (e) => this.setDrawingParameters('UP', e));
    this.canvasElement.addEventListener('mousemove', this.determineDraw);

  }

  determineDraw(e){
    if (this.drawing){
      this.setCoordinates(e, 'NEXT');

      this.startCoordinates.forEach((coordPair, idx) => {
        this.ctx.moveTo(coordPair[0], coordPair[1]);
        this.ctx.lineTo(this.nextCoordinates[idx][0], this.nextCoordinates[idx][1]);
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.stroke();

        this.startCoordinates[idx] = this.nextCoordinates[idx];
      });
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

    let firstPair = [e.clientX, e.clientY];
    let symmetricPairSet;
    switch(this.symDirection){
      case 'HORIZONTAL':
        ({ symmetricPairSet } = this.computeAxisSymPairs(e, 'HORIZONTAL'));
        break;
      case 'VERTICAL':
        ({ symmetricPairSet } = this.computeAxisSymPairs(e, 'VERTICAL'));
        break;
      case 'RADIAL':
        ({ symmetricPairSet } = this.computeRadialSymPairs(e));
        break;
    }

    if (startOrNext === 'START'){
      this.startCoordinates = [firstPair].concat(symmetricPairSet);
    } else {
      this.nextCoordinates = [firstPair].concat(symmetricPairSet);
    }
  }

  computeAxisSymPairs(e, axis){
    let symmetricPairX, symmetricPairY, symmetricPairSet;
    switch (axis) {
      case 'HORIZONTAL':
        symmetricPairX = e.clientX;
        symmetricPairY = ((this.axisPoint[1] - e.clientY) * 2) + e.clientY;
        symmetricPairSet = [[symmetricPairX, symmetricPairY]];
        return { symmetricPairSet };
      case 'VERTICAL':
        symmetricPairX = ((this.axisPoint[0] - e.clientX) * 2) + e.clientX;
        symmetricPairY = e.clientY;
        symmetricPairSet = [[symmetricPairX, symmetricPairY]];
        return { symmetricPairSet };
      case 'DIAGONAL-RIGHT':
        return;
      case 'DIAGONAL-LEFT':
        return;
    }
  }

  computeRadialSymPairs(e){
    const symmetricPairSet = [];

    const xDistance = (e.clientX - this.axisPoint[0]);
    const yDistance = -(e.clientY - this.axisPoint[1]);
    const pythagoreanSum = Math.pow(xDistance, 2) + Math.pow(yDistance, 2);
    const radius =  Math.sqrt(pythagoreanSum);

    // this.ctx.beginPath();
    // this.ctx.arc(this.axisPoint[0], this.axisPoint[1],radius,0,2*Math.PI);
    // this.ctx.stroke();
    // debugger
    let theta;
    if (xDistance >= 0 && yDistance >= 0){
      theta = Math.atan(yDistance / xDistance);
    } else if (xDistance <= 0 && yDistance >= 0){
      theta = Math.PI - Math.asin(yDistance / radius);
    } else if (xDistance <= 0 && yDistance <= 0){
      theta = Math.PI + Math.atan(yDistance / xDistance);
    } else if (xDistance >= 0 && yDistance <= 0){
      theta = (2 * Math.PI) - Math.acos(xDistance / radius);
    }

    // const theta = Math.atan(yDistance / xDistance);
    const sliceSizeRadians = (2 * Math.PI) / this.radialOrder;

    const thetaPrimes = [];
    //note: thetaPrimes will not include theta since firstPair coordinates are
    //      already known from the user's click
    for (let i = 1; i <= this.radialOrder; i ++){
      thetaPrimes.push(theta + (sliceSizeRadians * i));
    }

    console.log(theta);

    thetaPrimes.forEach(angle => {
      let canvasX;
      let canvasY;
      // if (angle < (Math.PI / 2)){
        canvasX = (radius * Math.cos(angle)) + this.axisPoint[0];
        canvasY = this.axisPoint[1] - (radius * Math.sin(angle));
      //   console.log(`quad 1 canvasY: ${canvasY}`);
      // } else if (angle <= Math.PI){
      //   canvasX = (radius * Math.cos(angle)) + this.axisPoint[0];
      //   canvasY = this.axisPoint[1] - (radius * Math.sin(angle));
      //   console.log(`quad 2 canvasY: ${canvasY}`);
      // } else if (angle <= 3 * Math.PI / 2){
      //   canvasX = (radius * Math.cos(angle)) + this.axisPoint[0];
      //   canvasY = this.axisPoint[1] - (radius * Math.sin(angle));
      //   console.log(`quad 3 canvasY: ${canvasY}`);
      // } else if (angle > 3 * Math.PI / 2){
      //   canvasX = (radius * Math.cos(angle)) + this.axisPoint[0];
      //   canvasY = this.axisPoint[1] - (radius * Math.sin(angle));
      //   console.log(`quad 4 canvasY: ${canvasY}`);
      // }

      symmetricPairSet.push([canvasX, canvasY]);
    });
    return { symmetricPairSet };
  }


}

export default Canvas;
