// https://www.youtube.com/watch?v=exPKDGVsi6g&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=16

let data = [];
let currentSize = data.length;
console.log(currentSize);

let maxVal = 7;

function push(val){

    if(currentSize > maxVal){
        alert("max value has ended " +val)
    }

    data[currentSize] = val
    currentSize+= 1;

}

function pop(){
    if(currentSize>0){
        currentSize-= 1
        data.length = currentSize

    } else{
        alert('stack is alredy emplty')
    }
}


push(20)
push(21)
push(22)
push(23)
push(24)
push(25)
push(26)
push(27)
pop()
pop()
pop()
pop()
pop()
push(24)
push(25)
push(26)
push(27)

console.log(data);