// 33. Write a JavaScript program to check whether two numbers are in the range 40..60 or 70..100 inclusive.

function near_100(x, y) {
  if (x != y)
  {
  x1 = Math.abs(x - 100);
  y1 = Math.abs(y - 100);

  if (x1 < y1)
  {
    return x;
  }
  if (y1 < x1)
  {
    return y;
  }
  return 0;
  }
  else
    return false;
}

console.log(near_100(90, 89));
console.log(near_100(-90, -89));
console.log(near_100(90, 90));