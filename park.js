const Park = function () {
  this.enclosure = [];
}

Park.prototype.countDinosaurs = function () {
  return this.enclosure.length;
}

module.exports = Park;
