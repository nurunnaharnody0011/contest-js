function reverseEachWord(str) {
  const words = str.split(" ");
  const reversedWords = words.map(word => word.split("").reverse().join(""));
  return reversedWords.join(" ");
}

// console.log(reverseEachWord("Hello World")); // Output: "olleH dlroW"
// console.log(reverseEachWord("JavaScript is fun")); // Output: "tpircSavaJ si nuf"


function convertTemperature(value, unit) {
    if (unit === "C") {
        return (value * 9/5) + 32;
    } else if (unit === "F") {
        const fahrenheitValue = (value - 32) * 5/9;
        return  Math.round(fahrenheitValue * 100) / 100; // Round to 2 decimal places
    }
}

// console.log(convertTemperature(0, "C")); // Output: 32
// console.log(convertTemperature(32, "F")); // Output: 0
// console.log(convertTemperature(170, "F")); // Output: 212


function isPalindrome(str) {
   const newStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
   const reversedStr = newStr.split('').reverse().join('');
   return newStr === reversedStr;
}



function classifyPassword(password) {
    const isLongEnough = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);
    const conditionCount = hasUpperCase + hasLowerCase + hasDigit + hasSpecialChar;

    if (isLongEnough && hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar) {
        return "Strong";
    } else if (password.length >= 6 && conditionCount >= 2) {
        return "Medium";
    } else {
        return "Weak";
    }
 }
//  console.log(classifyPassword("Password123!")); // Output: "Strong"
//  console.log(classifyPassword("Pass12")); // Output: "Medium"
//  console.log(classifyPassword("pass"));

function repeatedDigitSum(n) {
  while (n >= 10) {
    n = n.toString().split('').reduce((sum, num) => sum + parseInt(num), 0);
  }
  return n;
}
console.log(repeatedDigitSum(38)); // Output: 2 (3 + 8 = 11, 1 + 1 = 2)
console.log(repeatedDigitSum(12345)); // Output: 6 (1 + 2 + 3 + 4 + 5 = 15, 1 + 5 = 6)