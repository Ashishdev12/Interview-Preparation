// https://www.youtube.com/watch?v=CRryTuR-4Jo&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=6

function searchElement(){

    const arr = [10,20,30,40,50,60,30]
    const position = 60
    let index=[];

    for(let i=0; i<arr.length; i++){
        if(arr[i] === position){
            console.log("find element:", arr[i]);
            
            index = i;
            // break;
            // continue;
        }
    }
//    console.log("index Position:", index);
   console.log(arr.indexOf(position));
   
   

}

searchElement()