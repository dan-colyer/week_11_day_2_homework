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

  it('Enclosure Can Remove Dinosaur by Type', function () {
    dinosaur1 = new Dinosaur("Triffid", 2);
    dinosaur2 = new Dinosaur("Triffid", 2);
    dinosaur3 = new Dinosaur("Goat", 20);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
  assert.strictEqual(park.countDinosaurs(), 3);
  park.removeDinosaursByType("Triffid")
  assert.strictEqual(park.countDinosaurs(), 0);
  });

  it('Get Dino with Offspring more than 2', function () {
    dinosaur1 = new Dinosaur("Triffid", 2);
    dinosaur2 = new Dinosaur("Triffid", 3);
    dinosaur3 = new Dinosaur("Goat", 20);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    result = park.dinoByOffspringCountGreaterThanTwo();
  assert.strictEqual(result.length, 2);
  });




});
