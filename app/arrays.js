exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (var i = arr.length; i--;) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  append : function(arr, item) {
    // arr.push(item); <- jquery
    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {
    // arr.pop(); <- jquery
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend : function(arr, item) {
    // arr.unshift(item); <= jquery
    for (var i = arr.length; i--;) {
      i > 0 ? arr[i + 1] = arr[i] : arr[i] = item;
    }
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0, 1);
    return arr;
  },

  concat : function(arr1, arr2) {
    // $.merge(arr1, arr2); <- jquery
    for (i = 0; i < arr2.length; i++) {
      arr1[i + arr2.length] = arr2[i];
    }
    return arr1;
  },

  insert : function(arr, item, index) {

    for (i = arr.length; i >= index; i--) {
      i > index ? arr[i] = arr[i - 1] : arr[index] = item;
    }
    return arr;
  },

  count : function(arr, item) {
    var counter = 0;
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === item) {counter++};
    }
    return counter;
  },

  duplicates : function(arr) {
    var newArr = [];
    for (i = 0; i < arr.length; i++) {
      for (x = 1; x < arr.length; x++) {
        if (arr[x] === arr[i]) {
          arr.splice(x, 1);
        }
      }
    }
    return arr;
  },

  square : function(arr) {
    for (i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {

  }
};
