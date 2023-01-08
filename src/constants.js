const Errors = {
  ENOENT: "ENOENT",
};

const Messages = {
  INVALID_PARAMS: "Invalid parameter",
  INVALID_PATH: "Invalid file path",
  INVALID_SYNTAX: "Invalid CSV Syntax:",
  INVALID_FILE: "Invalid CSV file",
};

Object.freeze(Errors);
Object.freeze(Messages);

module.exports = { Errors, Messages };
