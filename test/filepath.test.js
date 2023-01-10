const csvtojson = require("../src/index");
const employeeFilePath = "./resources/csv/employee/employee_details.csv"
const musicFilePath = "./resources/csv/music/music_genre.csv"
const locationFilePath = "./resources/csv/location/geolocation.csv"
const booleanFilepath = "./resources/csv/boolean/isBoolean.csv"


const { employeeJSON, musicGenreJSONData, booleanJson, locationJSON } = require("../resources/mock.js");

test("Convert to JSON from filepath", () => {
  const employeeJSONData = csvtojson().fromFilePath(employeeFilePath);
  const musicJSONData = csvtojson().fromFilePath(musicFilePath);

  expect(musicJSONData).toStrictEqual(musicGenreJSONData);
  expect(employeeJSONData).toStrictEqual(employeeJSON);
});

test("To check wheather it can change convert Number", () => {
  const locationJSONData = csvtojson().fromFilePath(locationFilePath);

  expect(locationJSONData).toStrictEqual(locationJSON);
});

test("To check wheather it can change convert boolean", () => {
  const booleanJSONData = csvtojson().fromFilePath(booleanFilepath);

  expect(booleanJSONData).toStrictEqual(booleanJson);
});

test("Should throw error providing invalid filepath", () => {
  const errorFilePath = () => {
    csvtojson().fromFilePath("./resources/csv/employeeeeee_details.csv");
  };

  expect(errorFilePath).toThrow("Invalid file path");
});

test("Should throw error providing invalid fileExtension", () => {
  const JSONError = () => {
    csvtojson().fromFilePath("./resources/csv/employee_details.json");
  };
  const txtError = () => {
    csvtojson().fromFilePath("./resources/csv/employee_details.txt");
  };

  expect(JSONError).toThrow("json file format is not supported");
  expect(txtError).toThrow("txt file format is not supported");
});

test("Should throw invalid CSV file synatx", () => {
  const invalidSyntaxError = () => {
    csvtojson().fromFilePath("./resources/csv/employee/invalid_details.csv");
  };

  expect(invalidSyntaxError).toThrow(
    "Invalid CSV Syntax: 6,Tina,Rona,Tina.Rona@yopmail.com,Tina.Rona@gmail.comdeveloper"
  );
});

test("Should throw error when passing empty CSV file", () => {
  const emptyFileError = () => {
    csvtojson().fromFilePath("./resources/csv/empty.csv");
  };
  const emptyFileErrorForFileHeader = () => {
    csvtojson().fromFilePath("./resources/csv/employee/single_line.csv");
  };

  expect(emptyFileError).toThrow("Invalid CSV file");
  expect(emptyFileErrorForFileHeader).toThrow("Invalid CSV file");
});

test("Should throw error when input is not Avaiable", () => {
  const throwSyntaxError = () => {
    csvtojson().fromFilePath();
  };
  expect(throwSyntaxError).toThrow("Invalid parameter");
});
