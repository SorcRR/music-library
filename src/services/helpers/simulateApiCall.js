const simulateApiCall = (dataToReturn) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataToReturn)
    }, 500);
  });
}

export default simulateApiCall;