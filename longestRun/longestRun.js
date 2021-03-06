/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function(string) {
  var prevCount = 0;
  var currCount = 0;
  var hold = {
    char: '',
    length: ''
  };

  if (string.length === 0) {
    return [0, 0];
  } else {
    for (var i = 0; i < string.length; i++) {
      if (string[i] === string[i + 1]) {
        currCount++;

      } else {


        if (currCount > prevCount) {
          hold['length'] = currCount;
          hold['char'] = string[i];
          prevCount = currCount;
          currCount = 0;

        } else {


          currCount = 0;
        }
      }
    };

    if (hold['char'] !== '') {
      // var last = hold.shift();
      var holdd = [];
      holdd.push(string.indexOf(hold['char']));
      var sum = hold['length'] + string.indexOf(hold['char']);
      holdd.push(sum);

      return holdd;
    } else {
      return [0, 0];
    }


  }


};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function(len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
