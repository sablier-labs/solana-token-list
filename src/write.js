// Import the buildList function from a local module
const buildList = require("./buildList");

// Call the buildList function which returns a Promise
buildList()
  .then((data) => {
    // Format the data as a pretty-printed JSON string with 2-space indentation
    const formattedData = JSON.stringify(data, null, 2);

    // Output the formatted data to the console
    console.log(formattedData);
  })
  .catch((error) => {
    // Deal with potential failures
    console.error("Failed to build list:", error);
  });
