function crackStack(){
    const data = [];

    function push(value){
        data.push(value)
    }

    function pop(){
       return data.pop()
    }

    function size(){
       return data.length
    }
    return {push, pop, size}
}


function reverseString(str){
    const stack = crackStack();

    for(const char of str){
        stack.push(char)
    }

    let reversed = '';
    while (stack.size() > 0){
        reversed += stack.pop()
    }
    return reversed
}

let str = 'Ashish kumar';
let str1 = 'Sindhu Tuprani';
console.log(reverseString(str).toLocaleUpperCase());
console.log(reverseString(str1).toLocaleUpperCase());
