// Original promise
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Operation Successful!");
    } else {
      reject("Operation Failed!");
    }
  }, 1000);
});

// Async/Await version
async function runOperation() {
  try {
    const result = await myPromise;
    console.log("Result:", result);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Call the function
runOperation();