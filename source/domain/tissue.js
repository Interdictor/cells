const Coordinate = require('./coordinate')

class Tissue {
  constructor(width, length) {
    this.width = width
    this.length = length
    this.population = new Population()
  }

  populate(coordinate) {
    this.population.addAt(coordinate)
  }

  evolve() {
    const evolved = new Tissue(this.width, this.length)

    this.population.addAllTo(evolved)

    return evolved
  }

  isAliveAt(coordinate) {
    return this.population.existsAt(coordinate)
  }
}

class Population {
  constructor() {
    this.collection = {}
  }

  addAt(coordinate) {
    this.collection[coordinate.serialize()] = true
  }

  addAllTo(tissue) {
    for(let key in this.collection) {
      let coordinate = Coordinate.from(key)
      tissue.populate(coordinate)
    }
  }

  size() {
    return Object.keys(this.collection).length
  }

  existsAt(coordinate) {
    return this.collection[coordinate.serialize()] || false
  }
}

module.exports = Tissue
