class Coordinate {
  constructor(x, y) {
    if(x == undefined || y == undefined) {
      throw 'Coordinate requires two values'
    }

    this.x = x
    this.y = y
  }

  isTheSame(otherCoordinate) {
    const xMatches = this.x == otherCoordinate.x
    const yMatches = this.y == otherCoordinate.y

    return xMatches && yMatches
  }

  serialize() {
    return `${this.x}/${this.y}`
  }

  static from(descriptor) {
    const x = descriptor.split('/')[0]
    const y = descriptor.split('/')[1]

    return new Coordinate(x, y)
  }
}

module.exports = Coordinate
