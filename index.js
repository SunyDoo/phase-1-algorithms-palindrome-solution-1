function isPalindrome(word) {
  // Write your algorithm here 
  const arr = word.split('').reverse()
  const string2 = arr.join('')
  if(word == string2){
    return (true)
  }  
  else return false  
}

/* 
  Add your pseudocode here
  make a variable '1' that converts string into an array of letters and reverses the array
  make a variable '2' that joins variable '1' into a new string
  if else statement if variable 2 and the argument are == 
*/

/*
  Add written explanation of your solution here
  turn the string into an array of letters and reverse the array
  join the new array into a new string and check to see if matches given argument
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
