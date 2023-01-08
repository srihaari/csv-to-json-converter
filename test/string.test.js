const csvtojson = require("../src/index");
const {
  CSVString,
  employeeJSON,
  singleLineString,
  multipleNewLineString,
  inBetweenNewLineString,
  missingComaString,
} = require("../resources/mock");

test("Convert to JSON from CSV string", () => {
  const jsonData = csvtojson().fromString(CSVString);

  expect(jsonData).toStrictEqual(employeeJSON);
});

test("Convert to JSON from CSV singleLineString", () => {
  const jsonData = csvtojson().fromString(singleLineString);

  expect(jsonData).toStrictEqual(employeeJSON);
});

test("Should throw invalid syntax for multiple newline at the end", () => {
  const throwSyntaxError = () => {
    csvtojson().fromString(multipleNewLineString);
  };

  expect(throwSyntaxError).toThrow(`Invalid CSV Syntax: `);
});

test("Should throw invalid syntax error for in between new line", () => {
  const throwSyntaxError = () => {
    csvtojson().fromString(inBetweenNewLineString);
  };

  expect(throwSyntaxError).toThrow(`Invalid CSV Syntax: `);
});

test("Should throw invalid syntax for missing ,", () => {
  const throwSyntaxError = () => {
    csvtojson().fromString(missingComaString);
  };

  expect(throwSyntaxError).toThrow(
    "Invalid CSV Syntax:  1,Rosanne,FancieRosanne.Fancie@yopmail.com,Rosanne.Fancie@gmail.com,firefighter"
  );
});

test("Should throw error while passing empty string", () => {
  const throwSyntaxError = () => {
    csvtojson().fromString("");
  };
  const throwSyntaxErrorForSingleLine = () => {
    csvtojson().fromString("id,firstName,lastName,gmail,gmail2,proffesion");
  };

  expect(throwSyntaxError).toThrow("Invalid CSV file");
  expect(throwSyntaxErrorForSingleLine).toThrow("Invalid CSV file");
});

test("Should throw error when input is not available", () => {
  const throwSyntaxError = () => {
    csvtojson().fromString();
  };
  expect(throwSyntaxError).toThrow("Invalid parameter");
});
