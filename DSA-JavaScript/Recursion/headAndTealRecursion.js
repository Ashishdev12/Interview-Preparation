// https://www.youtube.com/watch?v=vzTqM04YbiY&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=14


// function colors(){
//     let data = 20;
//     console.log(data);
    
// }

// function days(){
//     colors()
// }

// function fruits(){
//     days()
// }

// function topFunction(){
//     fruits()
// }

// topFunction()


function test(x){
    console.log(x);
    if(x>0){
        test(x - 1)
    }
    console.log(x);
    
}

let data = 5;
test(data)