const Park = function () {
  this.enclosure = [];
}

Park.prototype.countDinosaurs = function () {
  return this.enclosure.length;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
}

Park.prototype.removeDinosaursByType = function (type) {
  for(var dino of this.enclosure) {
    if (dino.type === type) {
      this.enclosure.splice(type);
    }
  }
}



module.exports = Park;
