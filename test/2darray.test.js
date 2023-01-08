const csvtojson = require("../src/index");
const { twoDArray } = require("../resources/mock");

test("Should  covert 2d array to JSON content", () => {
  const JSONData = csvtojson().fromTwoDimensonArray(twoDArray);

  const output = [
    {
      id: 1,
      firstname: "Rosanne",
      lastname: "Fancie",
      email: "mailto:Rosanne.Fancie@yopmail.com",
      email2: "mailto:Rosanne.Fancie@gmail.com",
      profession: "firefighter",
    },
    {
      id: 2,
      firstname: "Elsie",
      lastname: "Mathilde",
      email: "mailto:Elsie.Mathilde@yopmail.com",
      email2: "mailto:Elsie.Mathilde@gmail.com",
      profession: "firefighter",
    },
    {
      id: 3,
      firstname: "Britni",
      lastname: "Si",
      email: "mailto:Britni.Si@yopmail.com",
      email2: "mailto:Britni.Si@gmail.com",
      profession: "police officer",
    },
  ];

  expect(JSONData).toStrictEqual(output);
});

test("should throw error when parameter is not available", () => {
  const throwSyntaxError = () => {
    csvtojson().fromTwoDimensonArray();
  };

  expect(throwSyntaxError).toThrow("Invalid parameter");
});

test("Should throw invalid syntax for multiple newline at the end", () => {
  const throwSyntaxError = () => {
    const emptyLineAtEndTwodArray = [
      ["id", "firstname", "lastname", "email", "email2", "profession"],
      [
        "1",
        "Rosanne",
        "Fancie",
        "mailto:Rosanne.Fancie@yopmail.com",
        "mailto:Rosanne.Fancie@gmail.com",
        "firefighter",
      ],
      [
        "2",
        "Elsie",
        "Mathilde",
        "mailto:Elsie.Mathilde@yopmail.com",
        "mailto:Elsie.Mathilde@gmail.com",
        "firefighter",
      ],
      [
        "3",
        "Britni",
        "Si",
        "mailto:Britni.Si@yopmail.com",
        "mailto:Britni.Si@gmail.com",
        "police officer",
      ],
      [],
    ];
    csvtojson().fromTwoDimensonArray(emptyLineAtEndTwodArray);
  };
  expect(throwSyntaxError).toThrow("Invalid CSV Syntax: ");
});

test("should throw syntax error for missing value in middle", () => {
  const throwSyntaxError = () => {
    const missingValueInBetween = [
      ["id", "firstname", "lastname", "email", "email2", "profession"],
      [
        "1",
        "Rosanne",
        "Fancie",
        "mailto:Rosanne.Fancie@yopmail.com",
        "mailto:Rosanne.Fancie@gmail.com",
        "firefighter",
      ],
      ["2", "Elsie", "mailto:Elsie.Mathilde@gmail.com", "firefighter"],
      [
        "3",
        "Britni",
        "Si",
        "mailto:Britni.Si@yopmail.com",
        "mailto:Britni.Si@gmail.com",
        "police officer",
      ],
    ];
    csvtojson().fromTwoDimensonArray(missingValueInBetween);
  };

  expect(throwSyntaxError).toThrow(
    "Invalid CSV Syntax: 2,Elsie,mailto:Elsie.Mathilde@gmail.com,firefighter"
  );
});
