
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorialRecursive(n - 1);
    }
  }
  
  // Example usage:
  const num = 5;
  const result = factorialRecursive(num);
  console.log(`The factorial of ${num} is ${result}`);
  