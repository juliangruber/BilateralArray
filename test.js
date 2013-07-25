var test = require('tape')
var BilateralArray = require('./index')

test(function (t) {
  var ba1 = BilateralArray()
  ba1.right('apple')
  ba1.right('orange')
  ba1.right('pear')
  ba1.left('kiwi')

  t.equal(ba1.length, 4, 'the whole array should have four items')
  t.equal(ba1.offsetLeft, 1, 'should be offset to the left by a length of one')
  t.equal(ba1.offsetRight, 3, 'should be offset to the right by a length of three')

  var ba2 = BilateralArray()
  ba2.right('apple', 'orange', 'grape')
  ba2.right('pear')
  ba2.left('kiwi')

  t.equal(ba2.length, 5, 'the whole array should have five items')
  t.equal(ba2.offsetLeft, 1, 'should be offset to the left by a length of one')
  t.equal(ba2.offsetRight, 4, 'should be offset to the right by a length of three')

  t.equal(ba2.right()[0], 'apple', 'equal')
  t.equal(ba2.right()[1], 'orange', 'equal')
  t.equal(ba2.right()[2], 'grape', 'equal')
  t.equal(ba2.right()[3], 'pear', 'equal')

  t.equal(Array.isArray(ba2.right()), true, 'is an array')

  t.deepEqual(ba2.right(), ['apple', 'orange', 'grape', 'pear'], 'same same')

  t.equal(ba2.right().length, [ 'apple', 'orange', 'grape', 'pear' ].length)
  t.equal(ba2.left()[0], 'kiwi', 'equal')

  t.end()
})

