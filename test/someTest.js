const chai = require('chai');
const assertArrays = require('chai-arrays');
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('Mocha', function() {
  it('works', function(){
      expect(function() { 'hi' }).to.not.throw();
  });

  it('works', function() {
    expect(true).to.eq(true)
  });
});
