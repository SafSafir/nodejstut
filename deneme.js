const fs = require("fs");
const util = require("util");

readFielPromise = util.promisify(fs.readFile);
writeFilePromise = util.promisify(fs.writeFile);

const start = async () => {
  try {
    const first = await readFielPromise("./content/first.txt", "utf8");
    const second = await readFielPromise("./content/second.txt", "utf8");
    await writeFilePromise("content/result.txt", `${first} , ${second}`);
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("./first.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
