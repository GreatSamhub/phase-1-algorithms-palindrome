function isPalindrome(word){
  // Remove any spaces and convert the word to lowercase
  word = word.toLowerCase();

  // Check if the word is equal to its reverse
  if (word === word.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}
isPalindrome('abba')

/* 
remove the spaces and change to lowercase
Assign input variable as word.lowerCase
initialize an if statement

/*
 If reverse of input is same to the palindrome, print condition true else print false 
*/

// You can run node index.js to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;