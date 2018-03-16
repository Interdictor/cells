class Cell {
  constructor(coordinate) {
    if(coordinate == undefined) {
      throw 'Cell embraces a coordinate'
    }

    this.coordinate = coordinate
  }
  isDead() {
    return true
  }

  isAt(particularCoordinate) {
    return this.coordinate.isTheSame(particularCoordinate)
  }
}

module.exports = Cell
