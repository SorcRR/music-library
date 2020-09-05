const simulateApiCall = (dataToReturn) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataToReturn)
    }, 300);
  });
}

export default simulateApiCall;