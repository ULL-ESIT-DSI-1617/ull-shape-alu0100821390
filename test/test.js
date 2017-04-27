'use strict'
var Shape = require('../lib/shape.js');


describe("Shape", function(){
  it("Creación objeto Shape", function(){
    let sh = new Shape ({width: 200, height: 100}, 'Rectangle');
    sh.should.not.undefined();
  })
});
