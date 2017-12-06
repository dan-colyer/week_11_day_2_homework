const Park = require('../park.js');
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

});


// beforeEach('Athlete', function () {
//   athlete = new Athlete;
// })
