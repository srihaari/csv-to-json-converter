const csvToJson = require("./index");

function main() {
  // csv().filePath("./mock/csv/employee_details.csv");
  csvToJson().fromFilePath("./resources/csv/location/geolocation.csv");
  // csvToJson().fromString();
  // csvToJson().fromArray();
  // csvToJson().fromTwoDimensonArray();
}
main()

module.exports = main;
