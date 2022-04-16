// 1. Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. 

function maxOfTwoNumbers (a, d){
    if (a > d){
      console.log(a + " is larger")
    }
      else
      if (d > a){
        console.log (
          d + " is larger");
      }
  }

maxOfTwoNumbers(40,90)



// 2.Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.


let maxOfThree = (Math.max(7,8,9));
console.log(Math.max(7,8,9));



// 3. Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.


isCharacterAVowel = (arr) => {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(arr)){
  return true;
  }
  else {
    return false;
  }
}
console.log(isCharacterAVowel('p'))



// 4. Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.


function multiplyArray(arr){
  let total = 1;
  for (let i = 0; i<arr.length;i++)
   total *= arr[i];
  return total;
}
console.log(multiplyArray([3,4,5,6]))


  function sumArray(arr){
    let sum = 0;
    for (let a of arr)
      sum += a;
    return sum;
  }
  console.log(sumArray([3,4,5,6]))
    



// 5.Write a function that returns the number of arguments passed to the function when called.

numArguments = (arg1, arg2) => {
  return numArguments.length;
}
console.log(numArguments("Detroit","Lions"));

// 6. Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".


function reverseString(str){
  let arr = [];

  for (let i=0; i < str.length; i++) {
    arr.unshift(str[i])
  }
  return arr.join('');
};
console.log(reverseString('Yomi'))



// 7. Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord(word) {
  let wordSplit = word.split(" ");
  let longestWord = 0;
  for (let i = 0; i < wordSplit.length; i++) {
    if (wordSplit[i].length > longestWord) {
      longestWord = wordSplit[i].length;
    }
  }
  return longestWord;
}
console.log(findLongestWord("Yomi likes sunshine and sushi"));


// 8. Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.


function filterLongWords 
  let arr = ["sun","alphabet","garden","kombucha", "5"];
  for (i =0) if arr[i].length >= i {
    return array[i];
  }
