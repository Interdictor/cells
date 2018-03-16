const expect = require('chai').expect

const Coordinate = require('../public/javascript/domain/coordinate')

describe('Coordinate', function() {
  it('requires two dimensions', function() {
    const coordinate = new Coordinate('x', 'y')

    expect(coordinate.x).to.eq('x')
    expect(coordinate.y).to.eq('y')
  })

  it('cannot be instatiated without its values', function() {
    expect(function() { new Coordinate('invalid_argument') }).to
    .throw('Coordinate requires two values')
  })

  it('may be compared with other coordinates', function() {
    const someCoordinate = new Coordinate(0, 0)
    const otherCoordinate = new Coordinate(1, 1)
    const anotherCoordinate = new Coordinate(0, 0)


    expect(someCoordinate.isTheSame(otherCoordinate)).to.eq(false)
    expect(someCoordinate.isTheSame(anotherCoordinate)).to.eq(true)
  })
})
