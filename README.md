# andala

## About
andala is a drawing web application which allows users to create beautiful, symmetrical designs. The app is powered through vanilla JavaScript DOM manipulation of an HTML canvas element.

Access the live site [here](https://aliciaunderhill.github.io/Andala/
).

(live demo gif here)

## How to use andala
* Choose your initial drawing preferences at the left of the page
* Begin drawing by clicking into the canvas
* Change your drawing preferences at any time and continue drawing
* Clear your canvas with the button at the right

## Technical Implementation
The two most complicated components of the application are:
1. Its canvas auto-calibration relative to user screen size & scroll
2. Its real-time symmetry calculation via conversion of the canvas grid into a Cartesian coordinate plane

### Canvas auto-calibration
Since an HTML canvas does not provide mouse coordinates when a user clicks over it, I dynamically calculated canvas coordinates from full window MouseEvent coordinates via the `getCanvasCoords` function. This translates the window's mouse coordinates into canvas coordinates which are agnostic to screen size and window scroll. The result is a precise drawing experience for the user even if s/he scrolls or changes screen size during a drawing session.

```
// from canvas.js

getCanvasCoords(){
  const canvasPosition = this.canvasElement.getBoundingClientRect();
  const canvasLeft = canvasPosition.left + window.scrollX;
  const canvasTop = canvasPosition.top + window.scrollY;
  return [canvasLeft, canvasTop];
}
```

### Cartesian canvas symmetric calculations
Since an HTML canvas begins its coordinate system with (0,0) at the top left corner, I translated the canvas grid into a Cartesian plane. When a user clicks anywhere on the canvas, the distance from the origin is calculated as well as a set of symmetric point(s) which will be simultaneously drawn.

In the case of radial symmetry, the first user click calculates an initial angle `theta` about the origin. This, in conjunction with the `radialOrder` -- or number of symmetry slices -- is used to determine equidistantly-spaced points in radians whose canvas coordinates are calculated using trigonometry.

```
// from canvas.js

computeRadialSymPairs(e){
  const symmetricPairSet = [];

  const xDistance = (e.pageX - this.canvasLeftSide() - this.axisPoint[0]);
  const yDistance = -(e.pageY - this.canvasTop() - this.axisPoint[1]);
  const pythagoreanSum = Math.pow(xDistance, 2) + Math.pow(yDistance, 2);
  const radius =  Math.sqrt(pythagoreanSum);

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

  const sliceSizeRadians = (2 * Math.PI) / this.radialOrder;

  const thetaPrimes = [];
  //note: thetaPrimes will not include theta since firstPair coordinates are already known from the user's click
  for (let i = 1; i <= this.radialOrder; i ++){
    thetaPrimes.push(theta + (sliceSizeRadians * i));
  }

  thetaPrimes.forEach(angle => {
    const canvasX = (radius * Math.cos(angle)) + this.axisPoint[0];
    const canvasY = this.axisPoint[1] - (radius * Math.sin(angle));
    symmetricPairSet.push([canvasX, canvasY]);
  });
  return { symmetricPairSet };
}

```

## Future Features
In the future, I plan to add the following features:

* User may customize canvas size
* User may undo a previous action
* User may draw with circles and other shapes in addition to line drawing
