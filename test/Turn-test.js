const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn.js');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should instantiate a class', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });
});
