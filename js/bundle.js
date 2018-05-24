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

/* harmony default export */ __webpack_exports__["default"] = (Canvas);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map