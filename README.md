![CSV-TO-JSON](https://images.madrasvalley.com/csv-to-json.png)

CSV to JSON converter is a lightweight and powerful utility that uses **node.js** to convert CSV files to JSON in an easy and customizable manner.

## Installation

```
npm install csv-to-json-converter
```

## Usage

```javascript
const csvtojson = require("csv-to-json-converter");

// Convert a CSV file at the specified file path to a JSON object
const jsonFromFilePath = csvtojson.fromFilePath("/path/to/file.csv");

// Convert a CSV string to a JSON object
const jsonFromString = csvtojson.fromString(
  "header1,header2\nvalue1,value2\nvalue3,value4"
);

// Convert a CSV array to a JSON object
const jsonFromArray = csvtojson.fromArray([
  "header1,header2",
  "value1,value2",
  "value3,value4",
]);

// Convert a CSV two-dimensional array to a JSON object
const jsonFromTwoDArray = csvtojson.fromTwoDimensonArray([
  ["header1", "header2"],
  ["value1", "value2"],
  ["value3", "value4"],
]);
```

## Error Handling

The `csvtojson` object has four methods: `fromFilePath`, `fromString`, `fromArray`, and `fromTwoDimensonArray`. If an error occurs while using one of these methods, an error will be thrown with a message indicating the cause of the error.

The possible error messages are:

- `Invalid file`: The file specified by filePath is empty or contains only the headers.
- `Invalid path`: The file specified by filePath does not exist.
- `Invalid file format`: The file specified by filePath is not a CSV file.
- `Invalid syntax`: The number of headers does not match the number of values in a row of the CSV file.

## Notes

- The `fromFilePath` method expects the file path to be specified as a string.
- The `fromString`, `fromArray`, and `fromTwoDimensonArray` methods expect the CSV data to be in the form of a string, array, or two-dimensional array, respectively.
- The first row of the CSV data is assumed to contain the headers.
- The values in the JSON objects will be of the appropriate data type (e.g. numbers will be converted to numbers, strings will be left as strings).

## Motivation

The reason for this tool is that I was in charge of converting a couple of csv files to JSON and I couldn't find anything simple that did exactly what I expected. So I built this to be flexible enough for any file.

## Author

<a href="https://github.com/srihaari" title="Srihari">
  <img src="https://avatars.githubusercontent.com/u/54111662?v=4" style="border-radius: 12%;" width="50;" alt="fw_qaq"/>
</a>
<a href="https://github.com/VishwaiOSDev" title="VishwaiOSDev">
  <img src="https://avatars.githubusercontent.com/u/71421776?v=4"style="border-radius: 12%;" width="50;" alt="fw_qaq"/>
</a>

## License

csv-to-json-converter is released under the MIT license.
