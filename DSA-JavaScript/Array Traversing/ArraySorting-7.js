// https://www.youtube.com/watch?v=qI950QWh2Qs&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=11

// Bubble sort 

const arr = [40,30,12,24];


function sortElement(num){
    for(let i = 0; i<num.length; i++){
        for(let j =0; j<num.length; j++){   
            console.log(num);
            
            if(num[j] > num[j+1]){  
                let temp = num[j]   
                num[j] = num[j+1]
                num[j+1] = temp      
                 
            }
            
        }
   
    }
    return num
    
}

const result = sortElement(arr);
console.log(result);  // [12,24,30,40]


// i ==0   j == 0, 1,2,3
// i = 1   j == 0, 1,2,3
// i = 2   j == 0, 1,2,3
// i = 3   j == 0, 1,2,3
