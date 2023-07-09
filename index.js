function isPalindrome(word) {
  // Write your algorithm here
  //Split the string into an array of single letters
  const wordArray = word.split("");
  console.log(wordArray)
  

  //reverse the array
  const reverseArray = wordArray.reverse()
  console.log(reverseArray)
  
  

  //combine the array back to a string
  const closeUpArray = reverseArray.join("")
  console.log(closeUpArray)
  

  //compare the new reversed array string from the original word
  if(closeUpArray === word){
    console.log('true')
    return "true"
  }else{
    console.log('false')
    return "false"
  }
}


/* 
  Add your pseudocode here
  1. Function that receives one string argument 
  2. Return "True" if the string equals a palindrome
  3. Else Return "False" if not a palindrome.
  EX: Input: "madam"    Output: "True"
 */

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
