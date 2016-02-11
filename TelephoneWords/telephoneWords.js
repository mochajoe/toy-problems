// Telephone Words
// Each number key on a standard phone keypad has a set of Latin letters written on it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg

// Businesses often try to come up with clever ways to spell out their phone number in advertisements to make it more memorable. But there are a lot of combinations!

// Write a function that takes up to four digits of a phone number, and returns a list of all of the words that can be written on the phone with that number. (You should return all permutations, not only English words.)


Input
digitString:
  "0002"
Output
  ["000A", "000B", "000C"]

digitString:
  "1123"

["11AD", "11AE", "11AF", "11BD", "11BE", "11BF", "11CD", "11CE", "11CF"]




var num = {
  1: [1],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],



  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
  0: [0]

}

function telephoneWords(digitString) {



}
