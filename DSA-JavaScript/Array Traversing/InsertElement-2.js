// https://www.youtube.com/watch?v=aPRn4TBnI20&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=4

const arr = [10,20,30,40,50,60];
let newEle = 70;
let position = 2;

function insetElement(arr){
    console.log(arr);
    
    for(let i=arr.length-1; i>=0; i--){
        // console.log(i,arr[i]);
        if(i>=position){
            arr[i+1] = arr[i] 
            if(i === position){
                arr[i] = newEle
            }       
        }
        
    }
    console.log(arr);
    
}

// console.log(insetElement(arr));
insetElement(arr)

// You can use splice method in JavaScript build in method to solve this problem splice(position,delete,add)