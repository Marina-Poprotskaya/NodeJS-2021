const commander = require("commander");
const program = new commander.Command();

const myParseInt = (value) => {
  const parsedValue = parseInt(value, 10);
  if (isNaN(parsedValue)) {
    throw new commander.InvalidOptionArgumentError(
      "Not a number. You must pass the number."
    );
  }
  return parsedValue;
};

const defineActionType = (type) => {
  if (type.trim() === "encode" || type.trim() === "decode") {
    return type;
  }

  throw new commander.InvalidOptionArgumentError(
    "Only 'decode' and 'encode' options are available"
  );
};

program
  .requiredOption(
    "-a --action <type>",
    "an action encode/decode",
    defineActionType
  )
  .requiredOption(
    "-s, --shift <value>",
    "how many letters do we shift the text by",
    myParseInt
  )
  .option("-i, --input <path>", "an input file")
  .option("-o, --output <path>", "an output file");

program.parse();

const options = program.opts();

module.exports = {
  options,
};
