const employeeJSON = [
  {
    id: 1,
    firstname: "Rosanne",
    lastname: "Fancie",
    email: "Rosanne.Fancie@yopmail.com",
    email2: "Rosanne.Fancie@gmail.com",
    profession: "firefighter",
  },
  {
    id: 2,
    firstname: "Elsie",
    lastname: "Mathilde",
    email: "Elsie.Mathilde@yopmail.com",
    email2: "Elsie.Mathilde@gmail.com",
    profession: "firefighter",
  },
  {
    id: 3,
    firstname: "Britni",
    lastname: "Si",
    email: "Britni.Si@yopmail.com",
    email2: "Britni.Si@gmail.com",
    profession: "police officer",
  },
  {
    id: 4,
    firstname: "Brynna",
    lastname: "Warthman",
    email: "Brynna.Warthman@yopmail.com",
    email2: "Brynna.Warthman@gmail.com",
    profession: "worker",
  },
  {
    id: 5,
    firstname: "Nessie",
    lastname: "Septima",
    email: "Nessie.Septima@yopmail.com",
    email2: "Nessie.Septima@gmail.com",
    profession: "doctor",
  }
];

const musicGenreJSONData = [
  {
    instance_id: 32894,
    artist_name: "Röyksopp",
    track_name: "Röyksopp's Night Out",
    popularity: 27,
    acousticness: 0.00468,
    danceability: 0.652,
    duration_ms: -1,
    energy: 0.941,
    instrumentalness: 0.792,
    key: "A#",
    liveness: 0.115,
    loudness: -5.2010000000000005,
    mode: "Minor",
    speechiness: 0.0748,
    tempo: 100.889,
    obtained_date: "4-Apr",
    valence: 0.759,
    music_genre: "Electronic",
  },
  {
    instance_id: 46652,
    artist_name: "Thievery Corporation",
    track_name: "The Shining Path",
    popularity: 31,
    acousticness: 0.0127,
    danceability: 0.622,
    duration_ms: 218293,
    energy: 0.89,
    instrumentalness: 0.95,
    key: "D",
    liveness: 0.124,
    loudness: -7.042999999999999,
    mode: "Minor",
    speechiness: 0.03,
    tempo: 115.00200000000001,
    obtained_date: "4-Apr",
    valence: 0.531,
    music_genre: "Electronic",
  },
  {
    instance_id: 30097,
    artist_name: "Dillon Francis",
    track_name: "Hurricane",
    popularity: 28,
    acousticness: 0.00306,
    danceability: 0.62,
    duration_ms: 215613,
    energy: 0.755,
    instrumentalness: 0.0118,
    key: "G#",
    liveness: 0.534,
    loudness: -4.617,
    mode: "Major",
    speechiness: 0.0345,
    tempo: 127.994,
    obtained_date: "4-Apr",
    valence: 0.3329999999999999,
    music_genre: "Electronic",
  },
  {
    instance_id: 62177,
    artist_name: "Dubloadz",
    track_name: "Nitro",
    popularity: 34,
    acousticness: 0.0254,
    danceability: 0.774,
    duration_ms: 166875,
    energy: 0.7,
    instrumentalness: 0.00253,
    key: "C#",
    liveness: 0.157,
    loudness: -4.498,
    mode: "Major",
    speechiness: 0.239,
    tempo: 128.014,
    obtained_date: "4-Apr",
    valence: 0.27,
    music_genre: "Electronic",
  },
  {
    instance_id: 24907,
    artist_name: "What So Not",
    track_name: "Divide & Conquer",
    popularity: 32,
    acousticness: 0.00465,
    danceability: 0.638,
    duration_ms: 222369,
    energy: 0.5870000000000001,
    instrumentalness: 0.909,
    key: "F#",
    liveness: 0.157,
    loudness: -6.266,
    mode: "Major",
    speechiness: 0.0413,
    tempo: 145.036,
    obtained_date: "4-Apr",
    valence: 0.3229999999999999,
    music_genre: "Electronic",
  }
];

const CSVString = `id,firstname,lastname,email,email2,profession
1,Rosanne,Fancie,Rosanne.Fancie@yopmail.com,Rosanne.Fancie@gmail.com,firefighter
2,Elsie,Mathilde,Elsie.Mathilde@yopmail.com,Elsie.Mathilde@gmail.com,firefighter
3,Britni,Si,Britni.Si@yopmail.com,Britni.Si@gmail.com,police officer
4,Brynna,Warthman,Brynna.Warthman@yopmail.com,Brynna.Warthman@gmail.com,worker
5,Nessie,Septima,Nessie.Septima@yopmail.com,Nessie.Septima@gmail.com,doctor`;

const singleLineString = `id,firstname,lastname,email,email2,profession\n 1,Rosanne,Fancie,Rosanne.Fancie@yopmail.com,Rosanne.Fancie@gmail.com,firefighter\n 2,Elsie,Mathilde,Elsie.Mathilde@yopmail.com,Elsie.Mathilde@gmail.com,firefighter\n 3,Britni,Si,Britni.Si@yopmail.com,Britni.Si@gmail.com,police officer\n 4,Brynna,Warthman,Brynna.Warthman@yopmail.com,Brynna.Warthman@gmail.com,worker\n 5,Nessie,Septima,Nessie.Septima@yopmail.com,Nessie.Septima@gmail.com,doctor`;

const multipleNewLineString = `id,firstname,lastname,email,email2,profession\n 1,Rosanne,Fancie,Rosanne.Fancie@yopmail.com,Rosanne.Fancie@gmail.com,firefighter\n 2,Elsie,Mathilde,Elsie.Mathilde@yopmail.com,Elsie.Mathilde@gmail.com,firefighter\n 3,Britni,Si,Britni.Si@yopmail.com,Britni.Si@gmail.com,police officer\n 4,Brynna,Warthman,Brynna.Warthman@yopmail.com,Brynna.Warthman@gmail.com,worker\n 5,Nessie,Septima,Nessie.Septima@yopmail.com,Nessie.Septima@gmail.com,doctor\n \n \n `
const inBetweenNewLineString = `id,firstname,lastname,email,email2,profession\n 1,Rosanne,Fancie,Rosanne.Fancie@yopmail.com,Rosanne.Fancie@gmail.com,firefighter\n 2,Elsie,Mathilde,Elsie.Mathilde@yopmail.com,Elsie.Mathilde@gmail.com,firefighter\n 3,Britni,Si,Britni.Si@yopmail.com,Britni.Si@gmail.com,police officer\n \n \n 4,Brynna,Warthman,Brynna.Warthman@yopmail.com,Brynna.Warthman@gmail.com,worker\n 5,Nessie,Septima,Nessie.Septima@yopmail.com,Nessie.Septima@gmail.com,doctor\n `

const missingComaString = `id,firstname,lastname,email,email2,profession\n 1,Rosanne,FancieRosanne.Fancie@yopmail.com,Rosanne.Fancie@gmail.com,firefighter\n 2,Elsie,Mathilde,Elsie.Mathilde@yopmail.com,Elsie.Mathilde@gmail.com,firefighter\n`;

const arrayOfCSV = [
  "id,firstname,lastname,email,email2,profession\r",
  "1,Rosanne,Fancie,Rosanne.Fancie@yopmail.com,Rosanne.Fancie@gmail.com,firefighter\r",
  "2,Elsie,Mathilde,Elsie.Mathilde@yopmail.com,Elsie.Mathilde@gmail.com,firefighter\r",
  "3,Britni,Si,Britni.Si@yopmail.com,Britni.Si@gmail.com,police officer\r",
  "4,Brynna,Warthman,Brynna.Warthman@yopmail.com,Brynna.Warthman@gmail.com,worker\r",
  "5,Nessie,Septima,Nessie.Septima@yopmail.com,Nessie.Septima@gmail.com,doctor\r"
];

const emptyLineArray = [
  "id,firstname,lastname,email,email2,profession\r",
  "1,Rosanne,Fancie,Rosanne.Fancie@yopmail.com,Rosanne.Fancie@gmail.com,firefighter\r",
  "2,Elsie,Mathilde,Elsie.Mathilde@yopmail.com,Elsie.Mathilde@gmail.com,firefighter\r",
  "3,Britni,Si,Britni.Si@yopmail.com,Britni.Si@gmail.com,police officer\r",
  "",
  "",
  "",
];

const emptyLineAtCenterArray = [
  "id,firstname,lastname,email,email2,profession\r",
  "1,Rosanne,Fancie,Rosanne.Fancie@yopmail.com,Rosanne.Fancie@gmail.com,firefighter\r",
  "2,Elsie,Mathilde,Elsie.Mathilde@yopmail.com,Elsie.Mathilde@gmail.com,firefighter\r",
  "20,Imojean,Alarise,Imojean.Alarise@yopmail.com,Imojean.Alarise@gmail.com,police officer\r",
  "21,Basia,Leler,Basia.Leler@yopmail.com,Basia.Leler@gmail.com,developer\r",
  "",
  "22,Maryellen,Kylander,Maryellen.Kylander@yopmail.com,Maryellen.Kylander@gmail.com,police officer\r",
  "23,Rivalee,Heidt,Rivalee.Heidt@yopmail.com,Rivalee.Heidt@gmail.com,firefighter\r",
];
const arrayComaRemovedBetween = [
  "id,firstname,lastname,email,email2,profession\r",
  "1,Rosanne,Fancie,Rosanne.Fancie@yopmail.com,Rosanne.Fancie@gmail.com,firefighter\r",
  "2,Elsie,Mathilde,Elsie.Mathilde@yopmail.comElsie.Mathilde@gmail.com,firefighter\r",
  "3,Britni,Si,Britni.Si@yopmail.com,Britni.Si@gmail.com,police officer\r",
];

const twoDArray = [
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
];

const locationJSON = [
  {
    "id": 28,
    "age": "(223) 692-6221",
    "gmail": "gmail",
    "profession": "Planning Director",
    "city": "Ulpozi",
    "state": "AZ",
    "country": "NE",
    "latitude": -74.61897,
    "longitude": 152.16858
  },
  {
    "id": 56,
    "age": "(256) 607-7589",
    "gmail": "gmail",
    "profession": "Product Manager",
    "city": "Datmiruf",
    "state": "MS",
    "country": "GH",
    "latitude": 32.46726,
    "longitude": -167.77519
  },
  {
    "id": 28,
    "age": "(968) 927-2942",
    "gmail": "gmail",
    "profession": "Managing Partner",
    "city": "Itzupnir",
    "state": "IN",
    "country": "PS",
    "latitude": -35.68292,
    "longitude": -149.68989
  },
  {
    "id": 53,
    "age": "(835) 202-6550",
    "gmail": "gmail",
    "profession": "Economist",
    "city": "Baurivo",
    "state": "MA",
    "country": "SY",
    "latitude": 35.40762,
    "longitude": -50.90459
  },
  {
    "id": 51,
    "age": "(982) 230-2595",
    "gmail": "gmail",
    "profession": "Podiatrist",
    "city": "Hakebu",
    "state": "HI",
    "country": "BT",
    "latitude": 39.44278,
    "longitude": 104.08914
  }
]

const booleanJson = [
  {
    "id": 1,
    "isBoolean": true
  },
  {
    "id": 2,
    "isBoolean": true
  },
  {
    "id": 3,
    "isBoolean": true
  },
  {
    "id": 4,
    "isBoolean": false
  },
  {
    "id": 5,
    "isBoolean": true
  }
]
module.exports = {
  employeeJSON,
  CSVString,
  singleLineString,
  multipleNewLineString,
  inBetweenNewLineString,
  missingComaString,
  arrayOfCSV,
  emptyLineArray,
  emptyLineAtCenterArray,
  arrayComaRemovedBetween,
  musicGenreJSONData,
  twoDArray,
  locationJSON,
  booleanJson
};
