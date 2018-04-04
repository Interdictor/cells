const Tissue = require('../../source/domain/tissue')
const Coordinate = require('../../source/domain/coordinate')


describe('Tissue', function() {
  it('represents a conglomerate of cells', function() {
    const tissue = new TestTissue(3, 3)

    const size = tissue.exposeSize()

    expect(size).to.eq(9)
  })

  it('may be populated', function() {
    const someCoordinate = new Coordinate(0, 0)
    const anotherCoordinate = new Coordinate(1, 1)

    const tissue = new TestTissue(2, 2)

    tissue.populate(someCoordinate)
    tissue.populate(anotherCoordinate)

    expect(tissue.isAliveAt(new Coordinate(0, 0))).to.eq(true)
    expect(tissue.isAliveAt(new Coordinate(1, 1))).to.eq(true)
    expect(tissue.isAliveAt(new Coordinate(2, 2))).to.eq(false)
  })

  it('evolves into another tissue', function() {
    const tissue = new Tissue(2, 2)

    const evolvedTissue = tissue.evolve()

    expect(evolvedTissue).to.be.instanceOf(Tissue)
  })

  xit('evolves into next generation', function() {
    const tissue = new Tissue(3, 3)
    tissue.populate(new Coordinate(1, 0))
    tissue.populate(new Coordinate(1, 1))
    tissue.populate(new Coordinate(1, 2))

    const nextTissue = tissue.evolve()

    expect(nextTissue.population.size()).to.eq(3)
    expect(nextTissue.isAliveAt(new Coordinate(2, 0))).to.eq(true)
  })

  xit('have influenced coordinates', function() {
    const tissue = new Tissue(2, 2)
    tissue.populate(new Coordinate(0, 0))

    const nextTissue = tissue.evolve()

    expect(nextTissue.influencedPoints.size()).to.eq(3)
    expect(nextTissue.wasInfluenced(Coordinate.new(0, 1))).to.eq(true)
    expect(nextTissue.wasInfluenced(Coordinate.new(1, 0))).to.eq(true)
    expect(nextTissue.wasInfluenced(Coordinate.new(1, 1))).to.eq(true)
  })
})

class TestTissue extends Tissue {
  exposeSize() {
    return this.width * this.length
  }
}
