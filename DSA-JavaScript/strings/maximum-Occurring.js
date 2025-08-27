// https://www.youtube.com/watch?v=igm742M5aGY&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=32

function findMaximumString(str){
    // take an empty object
    let ObjStr = {};
    let maxKey = ''
    for(let i =0; i<str.length; i++){
     
       let key = str[i];
       // if key does'nt exist then make it 0 bcz on undefined we can't increase our key value
      if(!ObjStr[key]){
        ObjStr[key] = 0
      } 

      ObjStr[key]++;
      // initvalue maxkey is empty we did not add any char and we made maxkey = key 
      if(maxKey == '' || ObjStr[key]> ObjStr[maxKey]){
        maxKey = key
      }
    }
    
    // console.log(ObjStr);
    console.log(maxKey);
}

findMaximumString('hello');


