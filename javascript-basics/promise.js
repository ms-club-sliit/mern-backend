const main = async () => {
  let result = new Promise((resolve, reject) => {
    let isCodeImplemented = false;

    if (isCodeImplemented) {
      resolve("Congratulations, you implement the code :)");
    } else {
      reject("Sorry :(");
    }
  });

  result
    .then((message) => {
      console.log(message);
    })
    .catch((message) => {
      console.log(message);
    });

  try {
    let output = await result;
    console.log(output);
  } catch (error) {
    console.log(error);
  }
};

main();
