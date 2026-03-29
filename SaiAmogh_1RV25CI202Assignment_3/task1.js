function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  const result = divide(10, 2);
  console.log(result);
} catch (error) {
  console.log(error.message);
}