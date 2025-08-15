
// function printData(num){
//     console.log(num);
//     if(num < 10){
//         printData(num + 1)
   
//     }
    

// }
// let num = 0
// printData(num)

function findFactorial(item){
    if(item == 0){
        return 1
    } 
    return item * findFactorial(item - 1)
}

console.log(findFactorial(10));
