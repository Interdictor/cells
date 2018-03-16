const chai = require('chai');
const expect = require('chai').expect;

const Cell = require('../public/javascript/domain/cell')

describe('Cell', function() {
  it('is dead by default', function() {
    const cell = new Cell()

    let result = cell.isDead()

    expect(result).to.eq(true)
  })

  xit('embraces a coordinate', function() {
    const someCoordinate = new Coordinate('x', 'y')
    const cell = new Cell(someCoordinate)

    const result = cell.isAt(someCoordinate)

    expect(result).to.eq(true)
  })
})
