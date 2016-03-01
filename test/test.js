var expect = require('chai').expect;
var bopular = require('../index');

describe('#bopular', function() {
  it('should not return unefined', function() {
    var result = bopular();
    expect(result).to.equal(undefined);
  });
});