function foo(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a === 1;
}

console.log(foo(10, 2)); // Output: false
console.log(foo(10, 5)); // Output: true
console.log(foo(12, 18)); // Output: false
console.log(foo(15, 20)); // Output: false