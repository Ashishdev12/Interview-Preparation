// https://www.youtube.com/watch?v=Ao2VwQSy8zY&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=21



let data = [];
let currentSize = data.length;
let maxValue = 5

function queue(){
    let newVal = document.getElementById('input').value
    if(currentSize >= maxValue){
        alert('stack is overflow')
    }
    data[currentSize] = newVal;
    currentSize+= 1;
    document.getElementById('input').value = '';
    console.log('element queue');
    
}

function dequeue(){
    if(!isEmpty()){

        for(let i =0; i<data.length; i++){
            data[i] = data[i +1]
        }
        currentSize--;
        data.length = currentSize
        console.log('element dequeue');
    }else{
        alert('stack is empty')
    }
    
}

function display(){
    console.log(data);
    // data
    
}

function front(){
    if(!isEmpty()){
        data[0]
        console.log(data[0]);
    }else{
        alert('queue is already empty as')
    }
    
}

function rear(){
    if(!isEmpty()){
        data[currentSize-1]
        console.log(data[currentSize-1]);
    }else{
        alert('queue is already empty')
    }
  
}

function isEmpty(){
    if(currentSize<=0){
        return true
    } else{
        return false
    }
}

// queue(20);
// queue(30);
// queue(40);
// dequeue()
// front()
// rear()
// display()


// Html code 

// <input type="text"  id="input">
// <button onclick="queue()">queue Element</button>
// <button onclick="dequeue()">dequeue Element</button>
// <button onclick="display()">display Element</button>
// <button onclick="front()">front Element</button>
// <button onclick="rear()">rear Element</button>