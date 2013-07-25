BilateralArray
==============

An array-like object where the zero index is at the middle of the array. tracks left and right offsets as items are added

[![Build Status](https://travis-ci.org/hij1nx/BilateralArray.png?branch=master)](https://travis-ci.org/hij1nx/BilateralArray)

[![testling badge](https://ci.testling.com/hij1nx/BilateralArray.png)](https://ci.testling.com/hij1nx/BilateralArray)

## Methods
### `array.left(value, ...)`
Add the specified values to the left side of the array. When no values are specified, the entire left side of the array is returned.

### `array.right(value, ...)`
Add the specified values to the right side of the array. When no values are specified, the entire right side of the array is returned.

## Members

### `array.length`
Get the length of the array

### `array.offsetLeft`
The number of items that have been added to the left

### `array.offsetRight`
The number of items that have been added to the right

### `array.data`
Access to the actual array
