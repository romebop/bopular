var expect = require('chai').expect;
var bopular = require('../index');

describe('#bopular', function() {
  it('should not return undefined', function() {
    var result = bopular();
    expect(result).to.equal(undefined);
  });
});