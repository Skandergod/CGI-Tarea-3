const fs = require("fs");
const fetch = require("node-fetch");

var download = async function (url, dest, cb) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  fs.writeFile(dest, buffer, cb);
};

for (let i = 0; i < 100; i++) {
  const rand = Math.floor(Math.random() * 50) + 30;
  const url = `https://picsum.photos/${rand}.jpg`;
  download(
    url,
    `./dataset/ffile_${
      i + 100 + 100 + 100 + 100 + 100 + 100 + 100 + 100 + 100
    }.jpg`,
    function () {
      console.log("finished " + i);
    }
  );
}
