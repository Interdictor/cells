class Cell {
  constructor(coordinate) {
    this.coordinate = coordinate
  }
  isDead() {
    return true
  }

  isAt(particularCoordinate) {
    const isAtSameColumn = this.coordinate.x === particularCoordinate.x
    const isAtSameRow = this.coordinate.y === particularCoordinate.y

    return (isAtSameColumn && isAtSameRow)
  }
}

module.exports = Cell
