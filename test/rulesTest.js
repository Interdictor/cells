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

        const result = rules.evaluate(0)

        expect(result).to.eq('dead')
      })
    })
  })
});
