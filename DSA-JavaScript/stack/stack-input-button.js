//  https://www.youtube.com/watch?v=hMa16WdvDI4&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=17
// In Stack first come last out

function getDetails() {
  let data = [];
  let currentSize = data.length;
  let max = 7;

  function push() {
    const newEle = document.getElementById("input").value;
    if (currentSize > max) {
      alert("stack is overflow");
    }
    data[currentSize] = newEle;
    currentSize += 1;
    document.getElementById("input").value = "";
    console.log("Element Added", newEle);
    
  }

  function pop() {
    if (currentSize > 0) {
      currentSize -= 1;
      data.length = currentSize;
      console.log("Element Deleted", currentSize);
      
    } else {
      alert("data is empty");
    }
  }

  function display() {
    for (let i = 0; i <= data.length - 1; i++) {
      console.log("stack element no",i, "value is", data[i]);
    }
  }
  return {push, pop, display}
}

const stack = getDetails()


// html code  

// <input type="text" id="input" placeholder="please enter value">
// <button onclick="stack.push()">Add Element</button>
// <button onclick="stack.pop()">Delete Element</button>
// <button onclick="stack.display()">Display Element</button>
// 