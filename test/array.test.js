const csvtojson = require("../src/index");
const {
  employeeJSON,
  arrayOfCSV,
  emptyLineArray,
  emptyLineAtCenterArray,
  arrayComaRemovedBetween,
} = require("../resources/mock");

test("Convert Json from CSV array", () => {
  const jsonData = csvtojson().fromArray(arrayOfCSV);
  expect(jsonData).toStrictEqual(employeeJSON);
});

test("Should throw invalid syntax error for multiple empty line at the end", () => {
  const throwSyntaxError = () => {
    csvtojson().fromArray(emptyLineArray);
  };

  expect(throwSyntaxError).toThrow("Invalid CSV Syntax:");
});

test("Should throw invalid syntax error for the empty line at the middle", () => {
  const throwSyntaxError = () => {
    csvtojson().fromArray(emptyLineAtCenterArray);
  };

  expect(throwSyntaxError).toThrow("Invalid CSV Syntax: ");
});

test("Should throw invalid syntax error for empty array", () => {
  const throwSyntaxError = () => {
    csvtojson().fromArray([]);
  };

  expect(throwSyntaxError).toThrow("Invalid CSV file");
});

test("Should throw error when parameter is not available", () => {
  const throwSyntaxError = () => {
    csvtojson().fromArray();
  };

  expect(throwSyntaxError).toThrow("Invalid parameter");
});

test("Should throw invalid syntax error for missing , ", () => {
  const throwSyntaxError = () => {
    csvtojson().fromArray(arrayComaRemovedBetween);
  };

  expect(throwSyntaxError).toThrow(
    "Invalid CSV Syntax: 2,Elsie,Mathilde,Elsie.Mathilde@yopmail.comElsie.Mathilde@gmail.com,firefighter"
  );
});
