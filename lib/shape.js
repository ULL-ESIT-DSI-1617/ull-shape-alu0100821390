'use strict';

let util = require('util');

/**
* Clase que representa figuras genéricas
* @class Shape
* @param {hash} options Alto y Ancho
* @param {string} shape Figura
*/
class Shape {
 /**
 * Constructor de la clase Shape
 * @construct Shape
 * @param {hash} options Alto y Ancho
 * @param {string} shape Figura
 */
  constructor(options, shape) {
    Object.assign(this, options);
    this.shape =  shape || this.constructor.name;
  }
 /**
 * Función que devuelve el área de la figura
 * @function getArea
 * @return {number} Área de la figura
 */
  getArea() {
   try {
      let shape = this;
      if (this.constructor.name === 'Shape')
        shape = new Shape.Shapes[this.shape](this);
      return shape.area();
   }
   catch(e) {
     console.error(`Can't compute area of '${this.shape}' shape.`);
     return null;
   }
  }

}

Shape.Shapes = Shape.Shapes || {};

module.exports = Shape;
