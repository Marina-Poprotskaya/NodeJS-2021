const fs = require("fs");
const { caesarShift } = require("./caesarShift");
const stream = require("stream");
const { pipeline } = require("stream");
const { options } = require("./options-common");

const shift = options.action === 'decode' ? -options.shift : options.shift;

class CaesarChipher extends stream.Transform {
  constructor(options = {}) {
    options = { ...options, decodeStrings: false };
    super(options);
  }

  _transform(chunk, encoding, callback) {
    if (encoding !== "utf8") {
      this.emit("error", new Error("Only UTF-8 sourses are supported"));
      return callback;
    }
    this.push(caesarShift(chunk, shift));
    callback();
  }
}

pipeline(
  fs.createReadStream(options.input, "utf8"),
  new CaesarChipher(),
  fs.createWriteStream(options.output, { flags: "a" }),
  (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.error("File not found.");
      } else {
        console.error("Pipeline failed.");
      }
    } else {
      console.log("Pipeline succeeded.");
    }
  }
);
