// Solution #1 (Array.prototype.forEach)
Array.prototype.square1 = function () {
  let copy = this.slice();

  copy.forEach(function(a, i){
    copy[i] = a*a;
  })

  return copy;
};

// Solution #2 (for loop)
Array.prototype.square2 = function () {
    let length = this.length;
    let arr = new Array(length);

    for (let i = 0; i < length; i++) {
        arr[i] = this[i] * this[i];
    }

    return arr;
}

// Solution #3 (Array.prototype.map)
Array.prototype.square3 = function () {
    return this.map((a) => a*a);
}

