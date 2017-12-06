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

Park.prototype.dinoByOffspringCountGreaterThanTwo = function () {
  var dinoList = [];
  for(var dino of this.enclosure) {
    if (dino.offspringPerYear > 2) {
      dinoList.push(dino);
    }
  }
  return dinoList;
}




module.exports = Park;
