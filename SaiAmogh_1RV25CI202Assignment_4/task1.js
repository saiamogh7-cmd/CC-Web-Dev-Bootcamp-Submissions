let success = true;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) {
      resolve("Operation Successful!");
    } else {
      reject("Operation Failed!");
    }
  }, 2000);
});

// Handling the Promise
myPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });