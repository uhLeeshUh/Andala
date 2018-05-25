/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas */ "./js/canvas.js");
// import Grid from './grid';


document.addEventListener('DOMContentLoaded', () => {
  // const grid = new Grid();
  // grid.buildGrid();

  const canvas = new _canvas__WEBPACK_IMPORTED_MODULE_0__["default"]('andala-canvas');
  // canvas.setupCanvas();

});


/***/ }),

/***/ "./js/canvas.js":
/*!**********************!*\
  !*** ./js/canvas.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
        debugger
        this.setCoordinates(e, 'START');
        // console.log(`starting coordinates are ${this.startingX}, ${this.startingY}`);
        return;
      case 'UP':
        this.drawing = false;
        debugger
        // console.log(`now drawing is ${this.drawing}`);
        return;
      }
    }

  setCoordinates(e, startOrNext){
    // let firstPair, symmetricPairX, symmetricPairY, symmetricPair;
    switch(this.symDirection){
      case 'HORIZONTAL':

        let { firstPair, symmetricPair } = this.computeAxisSymPairs(e, 'HORIZONTAL');
        // const firstPair = [e.clientX, e.clientY];
        // const symmetricPairX = e.clientX;
        // const symmetricPairY = ((this.axisPoint[1] - e.clientY) * 2) + e.clientY;
        // const symmetricPair = [symmetricPairX, symmetricPairY];
        if (startOrNext === 'START'){
          this.startCoordinates = [];
          this.startCoordinates.push(firstPair);
          this.startCoordinates.push(symmetricPair);
        } else {
          this.nextCoordinates = [];
          this.nextCoordinates.push(firstPair);
          this.nextCoordinates.push(symmetricPair);
        }
        break;
      case 'VERTICAL':
        // co firstPair = [e.clientX, e.clientY];

        break;
      case 'RADIAL':
        break;
    }
  }

  computeAxisSymPairs(e, axis){
    const firstPair = [e.clientX, e.clientY];
    switch (axis) {
      case 'HORIZONTAL':
        let symmetricPairX = e.clientX;
        let symmetricPairY = ((this.axisPoint[1] - e.clientY) * 2) + e.clientY;
        let symmetricPair = [symmetricPairX, symmetricPairY];
        return { firstPair, symmetricPair };
      case 'VERTICAL':
        return;
    }
  }


}

/* harmony default export */ __webpack_exports__["default"] = (Canvas);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map