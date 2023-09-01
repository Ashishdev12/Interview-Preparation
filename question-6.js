// Write a javaScript function that reverse a number

// Method-1

// function reverseThis(num){
//   return Number(num.toString().split("").reverse().join(""));
// }


// let ans = reverseThis(1234);
// console.log( typeof ans);

// Method = 2;

function reverseThis(num){
reverse = 0;
   while(num>0){
    let reminder = num%10
    reverse = reverse*10 + reminder;

    num = Math.floor(num/10);
   }

   return reverse;
}

let ans = reverseThis(1234);
let ans1 = reverseThis(8987654);
console.log(ans1);