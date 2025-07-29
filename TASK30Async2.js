// Function that returns a promise resolving after 1 second with "Hello!"
function delayedGreeting() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello!");
    }, 1000); // 1 second delay
  });
}

// Async function that waits for the greeting and logs it
async function greet() {
  const message = await delayedGreeting();
  console.log(message); // Logs "Hello!" after 1 second
}

// Call the async function
greet();
