// A promise that resolves with "Done!" after 1 second
function oneSecondTask() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Done!"), 1000);
  });
}

async function getResult() {
  try {
    const result = await oneSecondTask();
    console.log(result);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Error:", msg);
  }
}

// Example call
getResult();
