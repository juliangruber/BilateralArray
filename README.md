BilateralArray
==============

An array-like object where the zero index is at the middle of the array. tracks left and right offsets as items are added

## Methods
### `array.left(value, ...)`
Add the specified values to the left side of the array.

### `array.right(value, ...)`
Add the specified values to the right side of the array.

## Members

### `array.length`
Get the length of the array

### `array.offsetLeft`
The number of items that have been added to the left

### `array.offsetRight`
The number of items that have been added to the right

### `array.data`
Access to the actual array
