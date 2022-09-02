const { default: axios } = require("axios");
const fs = require("fs/promises");
const path = require("path");

axios("https://umami.gdscloyola.org/umami.js").then((res) => {
  fs.writeFile(path.join(__dirname, "../public/abcdefg.js"), res.data).then(
    () => {
      console.log("Umami script created");
    }
  );
});
