function convertToCamelCase(sentence) {
    if(!sentence){
        return "";
    }
  const separateWord = sentence.trim().split(" ");
  const newStr = separateWord.map((word,num)=> 
    { if(num===0)
        {return word.toLowerCase();
        }
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
const finalStr= newStr.join("");
return finalStr;
  
}

//console.log(convertToCamelCase(

//))

function countEvenOdd(numbers) {
    
  const even = numbers.filter(num => num%2===0).length;
  const odd = numbers.filter(num => num%2!==0).length;
  return  {
    even:even,
    odd:odd
  };
}
// console.log(countEvenOdd([1]))

function findFirstUniqueChar(s) {

    if(s===""){
        return "";
    }
  
    let count = {};
    for(let char of s){
        if(count[char]){
            count[char]++;
        }
        else{
            count[char] = 1;
        }
    }
  let singleValue = s.split("").find(char=>count[char]===1)
  if(!singleValue){
    return -1;
  }
  return singleValue;
}
// console.log(findFirstUniqueChar("bb"))

function findLongestWord(sentence) {
  if(!sentence){
    return "";
  }
  const wordsCheck = sentence.match(/[a-zA-Z]+/g);
  if (!wordsCheck) {
    return "";
  }
    let longestWord = "";
    for (let word of wordsCheck) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
//console.log(findLongestWord("The quick brown fox jumpsd!! over the lazy dog"))

function findSecondLargestUnique(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  const uniqueNumbers = [...new Set(numbers)];
  if (uniqueNumbers.length < 2) {
    return null;
  }
  const largest = Math.max(...uniqueNumbers);
  const secondLargest = Math.max(...uniqueNumbers.filter(num => num !== largest));
  return secondLargest;
}
console.log(findSecondLargestUnique([3,3,3])); // Output: null