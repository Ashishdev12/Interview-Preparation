
// 99. Write a JavaScript program to check whether it is possible to rearrange the characters of a given string. This is in such a way that it will become equal to another given string. 

let rearrangement_characters = (str1, str2) => {
  let result1 = str1.split("").sort().join("")
  console.log(result1);

  let result2 = str2.split("").sort().join("")
  console.log(result2);
  return result1 === result2;
}

console.log(rearrangement_characters("JavaScript", "ScriptJava"));
