
function BilateralArray() {

  if (!(this instanceof BilateralArray)) {
    return new BilateralArray()
  }

  var that = this
  this.data = []
  this.offsetLeft = 0
  this.offsetRight = 0

  if (Object.defineProperty) {
    Object.defineProperty(this, 'length', {
     get: function() {
      return that.data.length
     },
    })    
  }
  else {
    this.length = 0
  }
}

BilateralArray.prototype.indexOf = function() {
  return this.data.indexOf.apply(this.data, arguments)
}

BilateralArray.prototype.right = function() {
  if (arguments.length) {
    this.data.push.apply(this.data, arguments)
    this.offsetRight += arguments.length
    if (!Object.defineProperty) {
      this.length += arguments.length
    }
    return this.offsetRight
  }
  return this.data.slice(this.offsetLeft)
}

BilateralArray.prototype.left = function() {
  if (arguments.length) {
    this.data.unshift.apply(this.data, arguments)
    this.offsetLeft += arguments.length
    if (!Object.defineProperty) {
      this.length += arguments.length
    }
    return this.offsetLeft
  }
  return this.data.slice(0, this.offsetRight)
}

if (!!module && module.exports) {
  module.exports = BilateralArray;
}
