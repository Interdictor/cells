const expect = require('chai').expect

const Coordinate = require('../public/javascript/domain/coordinate')

describe('Coordinate', function() {
  it('requires two dimensions', function() {
    const coordinate = new Coordinate('x', 'y')

    expect(coordinate.x).to.eq('x')
    expect(coordinate.y).to.eq('y')
  })
})
