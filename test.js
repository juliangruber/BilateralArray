var assert = require('assert')
var BilateralArray = require('./index')

var ba1 = BilateralArray()
ba1.right('apple')
ba1.right('orange')
ba1.right('pear')
ba1.left('kiwi')

assert.equal(ba1.length, 4, 'the whole array should have four items')
assert.equal(ba1.offsetLeft, 1, 'should be offset to the left by a length of one')
assert.equal(ba1.offsetRight, 3, 'should be offset to the right by a length of three')

var ba2 = BilateralArray()
ba2.right('apple', 'orange', 'grape')
ba2.right('pear')
ba2.left('kiwi')

assert.equal(ba2.length, 5, 'the whole array should have five items')
assert.equal(ba2.offsetLeft, 1, 'should be offset to the left by a length of one')
assert.equal(ba2.offsetRight, 4, 'should be offset to the right by a length of three')

assert.equal(ba2.right()[0], 'apple', 'equal')
assert.equal(ba2.right()[1], 'orange', 'equal')
assert.equal(ba2.right()[2], 'grape', 'equal')
assert.equal(ba2.right()[3], 'pear', 'equal')

assert.equal(Array.isArray(ba2.right()), true, 'is an array')

assert.deepEqual(ba2.right(), ['apple', 'orange', 'grape', 'pear'], 'same same')

assert.equal(ba2.right().length, [ 'apple', 'orange', 'grape', 'pear' ].length)
assert.equal(ba2.left()[0], 'kiwi', 'equal')
