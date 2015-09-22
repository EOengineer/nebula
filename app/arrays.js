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
    for (var i = arr.length; i--;) {
      i > 0 ? arr[i + 1] = arr[i] : arr[i] = item;
    }
    return arr;
  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
