// Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(array){
     return array.concat(array);
}

const ans = duplicate([1,2,3,4,5]);

console.log(ans);

