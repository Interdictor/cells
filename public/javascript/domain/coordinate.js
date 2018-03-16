class Coordinate {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  isTheSame(otherCoordinate) {
    const xMatches = this.x == otherCoordinate.x
    const yMatches = this.y == otherCoordinate.y

    return xMatches && yMatches
  }
}

module.exports = Coordinate
