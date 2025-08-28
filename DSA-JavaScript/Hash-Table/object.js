//In JavaScript, a hashmap (also known as an associative array or an object) is a data structure that allows you to store key-value pairs. The keys in a hashmap can be any value (including objects and functions), while the values can be any data type.
// Map: Is directly iterable, allowing the use of for...of loops and forEach for easy iteration over its key-value pairs.
// Object: Is not directly iterable. Iteration requires methods like Object.keys(), Object.values(), or   Object.entries().

let data = {
    name: 'Ashish',
    age: 33,
    mail: 'ashish@gmail.com',
    getName(){
        return this.name
    }
}
data.contact= 123456
// console.log(data.getName());
// delete data.name;
console.log(data.mail);

