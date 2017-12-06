const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

const assert = require('assert');


describe('Park', function () {

  let park;

  beforeEach('Park', function () {
    park = new Park;
  });

  it('Enclosure Starts Empty', function () {
    // const park = new Park();
  assert.strictEqual(park.countDinosaurs(), 0);
  });

  it('Enclosure Can Add Dinosaur', function () {
    dinosaur = new Dinosaur("Triffid", 2);
    park.addDinosaur(dinosaur);
  assert.strictEqual(park.countDinosaurs(), 1);
  });


});
