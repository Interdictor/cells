const Rules = require('../source/domain/rules')

describe('Game of life rules', function() {
  context('given a dead cell', function() {
    context('with zero alive neighbours', function() {
      it('does not resurrect', function() {
        const rules = new Rules()
        const aliveNeighboursCount = 0

        const result = rules.evaluate(aliveNeighboursCount)

        expect(result).to.eq('dead')
      })
    })

    context('with three alive neighbours', function() {
      it('resurrects', function() {
        const rules = new Rules()
        const aliveNeighboursCount = 3

        const result = rules.evaluate(aliveNeighboursCount)

        expect(result).to.eq('alive')
      })
    })

    context('with four alive neighbours', function() {
      it('does not resurrect', function() {
        const rules = new Rules()
        const aliveNeighboursCount = 4

        const result = rules.evaluate(aliveNeighboursCount)

        expect(result).to.eq('dead')
      })
    })
  })

  context('given an alive cell', function() {
    context('with only one alive neighbour', function() {
      it('dies', function() {
        const originalCellStatus = 'alive'
        const rules = new Rules()
        const aliveNeighboursCount = 1

        const result = rules.evaluate(aliveNeighboursCount, originalCellStatus)

        expect(result).to.eq('dead')
      })
    })

    context('with exact two alive neighbours', function() {
      it('does not die', function() {
        const originalCellStatus = 'alive'
        const rules = new Rules()
        const aliveNeighboursCount = 2

        const result = rules.evaluate(aliveNeighboursCount, originalCellStatus)

        expect(result).to.eq('alive')
      })
    })

    context('with three alive neighbours', function() {
      it('does not die', function() {
        const originalCellStatus = 'alive'
        const rules = new Rules()
        const aliveNeighboursCount = 3

        const result = rules.evaluate(aliveNeighboursCount, originalCellStatus)

        expect(result).to.eq('alive')
      })
    })

    context('with too many alive neighbours', function() {
      it('dies', function() {
        const originalCellStatus = 'alive'
        const rules = new Rules()
        const tooManyAliveNeighbours = 4

        const result = rules.evaluate(tooManyAliveNeighbours, originalCellStatus)

        expect(result).to.eq('dead')
      })
    })
  })
});
