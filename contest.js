function getMonthName(monthNumber) {
  if(monthNumber === 1){
    return "January";
  }
    else if(monthNumber === 2){
    return "February";
  }
    else if(monthNumber === 3){
    return "March";
}
else if(monthNumber === 4){
    return "April";
}
else if(monthNumber === 5){
    return "May";
}
else if(monthNumber === 6){
    return "June";
}
else if(monthNumber === 7){
    return "July";
}
else if(monthNumber === 8){
    return "August";
}
else if(monthNumber === 9){
    return "September";
}
else if(monthNumber === 10){
    return "October";
}
else if(monthNumber === 11){
    return "November";
}
else if(monthNumber === 12){
    return "December";
}
}

 // Output: January

function countNumberProperties(numbers) {

   const even = numbers.filter(num => num%2===0);
   const odd = numbers.filter(num => num% 2!== 0);
   const negative =numbers.filter(num=> num<0);
   const positive = numbers.filter(num => num>0);
return `"{"even":${even.length},"negative":${negative.length},"odd":${odd.length},"positive":${positive.length}`

}

function checkMathOperationsForNine(a, b) {
    
  const sum = a+b;
  const difference = a-b;
  const product = a*b;
  const quotient = a/b;

if(sum===9 || difference===9 || product===9|| quotient===9){
    return "Nine";
}
return "Nein";
}

function extractBodyContent(htmlString) {
  let start = htmlString.split("<body>")[1];
  let end = start.split("</body>")[0]
  return(end)
}
// console.log(extractBodyContent(
// `"<!DOCTYPE html>
// <html>
//   <body>
//     <p>Hello world!</p>
//     <div>
//       <span>Nested content.</span>
//     </div>
//   </body>
// </html>"`))


function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {


  let remainingMoneyAfterBuyingCake = totalMoney-cakeCost;
  if(remainingMoneyAfterBuyingCake<0){
    return remainingMoneyAfterBuyingCake;
  }
  let donutICanBuy = Math.floor(remainingMoneyAfterBuyingCake/donutCost);
  let remainingMoneyAfterBuyingDonut = donutICanBuy*donutCost;
  let remainingMoney = remainingMoneyAfterBuyingCake-remainingMoneyAfterBuyingDonut;
  return remainingMoney;
}

console.log(calculateRemainingMoney(50,30,7));