// https://www.youtube.com/watch?v=wdZZyIt3ELk&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=22

// Circular Queue in JavaScript
// Understand Circular Queue -- In circular queue initially both front and rear will be same
// Make class for Queue - when ever we call our class constructor will get called.
// Enqueue and Dequeue operations
// Enqueue, which adds an element to the rear/tail of the collection
// dequeue, which removes an element from the front/head of the collection
// Test Flow

class circleQueue {
  constructor(size) {
    this.maxSize = size;
    // we defined new array and default size is (5) we gt max 5 elements
    this.items = new Array(size);
    // we need pointer to check current element and size
    this.currentSize = 0;
    // initially rear and front will -1 as we add value there initial value start to increase from -1 to 0,1,2,3...
    this.rear = -1;
    this.front = -1;
  }
  // enqueue start adding elements as we do we get elements(val)
   enqueue(val){
    // checking current and maxSize were both are not equal then do add el
        if(this.currentSize != this.maxSize){
            // as we add value from rear the rear value is increase form -1 to 0
            // After doing 39 line we need to check after 5 size reset rear to zero
            if(this.rear === this.maxSize-1){
                this.rear = 0
            } else {
                this.rear++
            }
            // then we need to move this rear element into new array with value 
            this.items[this.rear] = val
            // as we added value into this we need to increase our current size form -1 to 1 again
            this.currentSize++
            // as we got our first element we get defined our front also init val is -1 for front
            if(this.front === -1){
                // by this our front and rear both are stable doing this. -(39)
                this.front= this.rear
                
            }
        }else{
            alert('stack is full')
        }
    }

    dequeue(){
        // check for empty condition
        if(this.currentSize != 0){
            // before adding value in rear when rear is maxSize we need to empty the front value to null as we need to delete value from front by default our front value is 0
            this.items[this.front] = null;
            // check the maxSize length need to be equal
            if(this.front === this.maxSize-1){
                this.front = 0
            }else{
                this.front++
            }
            this.currentSize--;
        }else{
            // if our queue is empty need to perform 2things when we don't have value in the current make it -1 back again
                this.front = -1;
                this.rear  = -1;
            alert('queue stack is empty')

        }
    
    }
    
}

let queue = new circleQueue(5);
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// console.log(queue);
