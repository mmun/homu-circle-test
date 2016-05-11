var assert = require('assert');
var greet = require('..').greet;

describe('My lib', function() {
  describe('#greet', function() {
    it('should say hello', function() {
      assert.notEqual(greet().indexOf('hello'), -1);
    });

    it('should not say goodbye', function() {
      assert.equal(greet().indexOf('goodbye'), -1);
    });
  });
});
