// 22. Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

function removeChart(index, element){
  let part1 = index.substring(0, element)
  console.log(part1);
  let part2 = index.substring(element + 1, index.length)
  console.log(part2);
  return(part1+part2);
}

// console.log(removeChart('python', 0));
console.log(removeChart('python', 1));
// console.log(removeChart('python', 2));

function remove(string, index){
  return string.replace(string.charAt(index), '');
}

console.log(remove('Ashish', 2));