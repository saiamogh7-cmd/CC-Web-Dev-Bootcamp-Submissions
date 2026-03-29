function checkAge(age) {
  if (age <= 0) {
    throw new Error("Age must be a positive number!");
  }
  if (age < 18) {
    throw new Error("Too young! Must be 18 or above.");
  }
  console.log("Access granted!");
}


const testAges = [25, 15, -1];

testAges.forEach(age => {
  try {
    console.log(`Testing age: ${age}`);
    checkAge(age);
  } catch (error) {
    console.log(error.message);
  }
});