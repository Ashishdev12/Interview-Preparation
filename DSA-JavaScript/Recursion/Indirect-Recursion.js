// let money = 100;
// let totalApple = 0;

// function buyApple(x) {
//   if (x > 0) {
//     console.log("I have", x, "RS", totalApple);

//     buyMore(x);
//   } else {
//     console.log("I dont have money", totalApple);
//   }
// }

// function buyMore(x) {
//   totalApple++;
//   buyApple(x - 5);
// }

// buyApple(money);


function buyApple(x){
    console.log(x);
    
    if(x >0){
        buyApple(x-1)
    }
    console.log(x);
}

let data = 5;
buyApple(data)