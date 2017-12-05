const Dinosaur = require('../dinosaur.js');
const assert = require('assert');


describe('Dinosaur', function () {

  let dinosaur;

  beforeEach('Dinosaur', function () {
    dinosaur = new Dinosaur("Triffid", 2);
  })

  it('Dinosaur has Type', function () {
  assert.strictEqual(dinosaur.type, "Triffid");
});
});
