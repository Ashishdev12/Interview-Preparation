// https://www.youtube.com/watch?v=fm6dAEPiCkA&list=PL8p2I9GklV47TMMnPzqnkCtSOS3ebr4O7&index=8

function mergeTwoArrayWhile() {

  let data1 = [3, 7, 12, 34, 56, 90];
  let data2 = [4, 9, 25, 45];
  let data3 = [];
  let d1 = 0;
  let d2 = 0;
  let d3 = 0;

  while (d1 < data1.length && d2 < data2.length) {
    if (data1[d1] < data2[d2]) {
      data3[d3] = data1[d1];
      d1++;
    //   console.log(data3[d3]);
    } else {
      data3[d3] = data2[d2];
      d2++;
    }
    d3++;
}
while(d1<data1.length){
    data3[d3] = data1[d1];
    d1++;
    d3++
}

console.log(data3);
}

// console.log(mergeTwoArrayWhile());
mergeTwoArrayWhile();
