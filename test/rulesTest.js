const chai = require('chai');
const assertArrays = require('chai-arrays');
const assert = require('chai').assert;
const expect = require('chai').expect;

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
});
