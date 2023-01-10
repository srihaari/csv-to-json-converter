const fs = require("fs");
const path = require("path");
const { Errors, Messages } = require("./constants");

/**
 * Converts a CSV file, string, array, or two-dimensional array to a JSON object.
 * @return {Object} An object with four methods: fromFilePath, fromString, fromArray, and fromTwoDimensonArray.
 */
function csvtojson() {
  return {
    /**
     * Converts a CSV file at the specified file path to a JSON object.
     * @param {string} filePath - The file path of the CSV file.
     * @return {Array} An array of objects, where each object represents a row in the CSV file.
     * @throws {Error} If the file specified by filePath is not a CSV file, or if the file is empty or contains only the headers.
     */
    fromFilePath: csvFileToJSON,
    /**
     * Converts a CSV string to a JSON object.
     * @param {string} fileContentInString - The CSV string.
     * @return {Array} An array of objects, where each object represents a row in the CSV string.
     * @throws {Error} If the CSV string is empty or contains only the headers.
     */
    fromString: csvStringToJSON,
    /**
     * Converts a CSV array to a JSON object.
     * @param {Array} fileContentInArray - The CSV array.
     * @return {Array} An array of objects, where each object represents a row in the CSV array.
     * @throws {Error} If the CSV array is empty or contains only the headers.
     */
    fromArray: csvArrayToJSON,
    /**
     * Converts a CSV two-dimensional array to a JSON object.
     * @param {Array} fileContentInTwoDArray - The CSV two-dimensional array.
     * @return {Array} An array of objects, where each object represents a row in the CSV two-dimensional array.
     * @throws {Error} If the CSV two-dimensional array is empty or contains only the headers.
     */
    fromTwoDimensonArray: csvTwoDArrayToJSON,
  };
}

function csvFileToJSON(filePath) {
  try {
    checkParamsAreNotNull(filePath);
    // Check that the file specified by filePath is a valid CSV file
    checkIsFileValidOrNot(filePath);

    // Read the contents of the file at filePath and convert it to a string
    let csvFileContent = fs.readFileSync(filePath);
    const csvFileContentInString = csvFileContent.toString().split("\n");

    return JSONConverter(csvFileContentInString);
  } catch (error) {
    throwErrors(error);
  }
}

function csvStringToJSON(fileContentInString) {
  try {
    checkParamsAreNotNull(fileContentInString);
    const csvContentInString = fileContentInString.split("\n");
    return JSONConverter(csvContentInString);
  } catch (error) {
    throwErrors(error);
  }
}

function csvArrayToJSON(fileContentInArray) {
  try {
    checkParamsAreNotNull(fileContentInArray);
    return JSONConverter(fileContentInArray);
  } catch (error) {
    throwErrors(error);
  }
}

function csvTwoDArrayToJSON(fileContentInTwoDArray) {
  try {
    checkParamsAreNotNull(fileContentInTwoDArray);
    return twoDimensionArrayJSONConverter(fileContentInTwoDArray);
  } catch (error) {
    throwErrors(error);
  }
}

function JSONConverter(csvFileContentInString) {
  // If the file is empty or contains only the headers, throw an error
  if (csvFileContentInString.length <= 1) {
    throw new Error(Messages.INVALID_FILE);
  }

  // Split the first row of the file (assumed to be the headers) into an array
  let fileHeaders = csvFileContentInString[0].split(",");
  const trimmedCSVFileContent = checkForNewLine(csvFileContentInString);

  // Map over the remaining rows of the file, creating a new object for each row
  // The keys of the object are the headers from the first row of the file
  // The values are the corresponding values from the row being processed
  let jsonObject = trimmedCSVFileContent.map((stringContent) => {
    let csvData = stringContent.split(",");

    // If the number of headers does not match the number of values in the row, throw an erro
    if (fileHeaders.length != csvData.length) {
      throw new Error(`${Messages.INVALID_SYNTAX} ${csvData}`);
    }

    var object = {};
    csvData.map((item, index) => {
      // Set the key-value pair in the object using the appropriate data type
      object[fileHeaders[index].trim()] = extractValues(item);
    });
    return object;
  });
  // Remove the first element of the array (the headers) before returning the array
  jsonObject.shift();
  return jsonObject;
}

function twoDimensionArrayJSONConverter(csvFileContentAsArray) {
  // If the file is empty or contains only the headers, throw an error

  if (csvFileContentAsArray.length <= 1) {
    throw new Error(Messages.INVALID_FILE);
  }

  // Split the first row of the file (assumed to be the headers) into an array
  let fileHeaders = csvFileContentAsArray[0];
  const trimmedCSVFileContent = checkForNewLine(csvFileContentAsArray);

  // Map over the remaining rows of the file, creating a new object for each row
  // The keys of the object are the headers from the first row of the file
  // The values are the corresponding values from the row being processed
  let jsonObject = trimmedCSVFileContent.map((stringContent) => {
    let csvData = stringContent;

    // If the number of headers does not match the number of values in the row, throw an erro
    if (fileHeaders.length != csvData.length) {
      throw new Error(`${Messages.INVALID_SYNTAX} ${csvData}`);
    }

    var object = {};
    csvData.map((item, index) => {
      // Set the key-value pair in the object using the appropriate data type
      // const checkBoolean = extractValues(item);
      object[fileHeaders[index].trim()] = extractValues(item);
    });
    return object;
  });
  // Remove the first element of the array (the headers) before returning the array
  jsonObject.shift();
  return jsonObject;
}

function checkIsFileValidOrNot(filePath) {
  const fileExtension = path.extname(filePath).slice(1);
  if (fileExtension != "csv" || !fileExtension == "CSV") {
    throw new Error(`${fileExtension} file format is not supported`);
  }
}

function extractValues(item) {
  // Return the value of the item string as a number if possible, or the number 0 if the item string represents the number 0, or a boolean
  const value = item.trim();

  switch (value.toLowerCase()) {
    case "true":
      return true;
    case "false":
      return false;
    default:
      return value === "0" ||
        value === "+0" ||
        value === "-0" ||
        value === "0.0" ||
        value == "-0.0" ||
        value == "+0.0"
        ? 0
        : Number(value) || (isNaN(Number(value)) ? value : "");
  }
}

function checkForNewLine(csvFileContentInString) {
  const lastElement = csvFileContentInString.pop();
  if (lastElement !== "") {
    csvFileContentInString.push(lastElement);
  }
  return csvFileContentInString;
}

function checkParamsAreNotNull(validParameter) {
  if (validParameter == null || undefined) {
    throw new Error(Messages.INVALID_PARAMS);
  }
}

function throwErrors(error) {
  switch (error.code) {
    case Errors.ENOENT:
      throw Error(Messages.INVALID_PATH);
    default:
      throw error;
  }
}

module.exports = csvtojson;
