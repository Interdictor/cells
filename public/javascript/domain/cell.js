class Cell {
  constructor(coordinate) {
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
