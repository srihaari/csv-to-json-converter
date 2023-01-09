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

const multipleNewLineString = `id,firstname,lastname,email,email2,profession\n 1,Rosanne,Fancie,Rosanne.Fancie@yopmail.com,Rosanne.Fancie@gmail.com,firefighter\n 2,Elsie,Mathilde,Elsie.Mathilde@yopmail.com,Elsie.Mathilde@gmail.com,firefighter\n 3,Britni,Si,Britni.Si@yopmail.com,Britni.Si@gmail.com,police officer\n 4,Brynna,Warthman,Brynna.Warthman@yopmail.com,Brynna.Warthman@gmail.com,worker\n 5,Nessie,Septima,Nessie.Septima@yopmail.com,Nessie.Septima@gmail.com,doctor\n 6,Tina,Rona,Tina.Rona@yopmail.com,Tina.Rona@gmail.com,developer\n 7,Dania,Thad,Dania.Thad@yopmail.com,Dania.Thad@gmail.com,firefighter\n 8,Genevra,Susannah,Genevra.Susannah@yopmail.com,Genevra.Susannah@gmail.com,police officer\n 9,Ivett,Alexandr,Ivett.Alexandr@yopmail.com,Ivett.Alexandr@gmail.com,police officer\n 10,Mady,Chrystel,Mady.Chrystel@yopmail.com,Mady.Chrystel@gmail.com,doctor\n 11,Belinda,Anderea,Belinda.Anderea@yopmail.com,Belinda.Anderea@gmail.com,worker\n 12,Kristan,Gavrila,Kristan.Gavrila@yopmail.com,Kristan.Gavrila@gmail.com,firefighter\n 13,Antonietta,Nance,Antonietta.Nance@yopmail.com,Antonietta.Nance@gmail.com,doctor\n 14,Carmela,Jefferey,Carmela.Jefferey@yopmail.com,Carmela.Jefferey@gmail.com,developer\n 15,Ebonee,Shields,Ebonee.Shields@yopmail.com,Ebonee.Shields@gmail.com,firefighter\n 16,Allis,Norvol,Allis.Norvol@yopmail.com,Allis.Norvol@gmail.com,police officer\n 17,Mireielle,Ahab,Mireielle.Ahab@yopmail.com,Mireielle.Ahab@gmail.com,doctor\n 18,Tracey,Laverne,Tracey.Laverne@yopmail.com,Tracey.Laverne@gmail.com,doctor\n 19,Robinia,Autrey,Robinia.Autrey@yopmail.com,Robinia.Autrey@gmail.com,police officer\n 20,Imojean,Alarise,Imojean.Alarise@yopmail.com,Imojean.Alarise@gmail.com,police officer\n 21,Basia,Leler,Basia.Leler@yopmail.com,Basia.Leler@gmail.com,developer\n 22,Maryellen,Kylander,Maryellen.Kylander@yopmail.com,Maryellen.Kylander@gmail.com,police officer\n 23,Rivalee,Heidt,Rivalee.Heidt@yopmail.com,Rivalee.Heidt@gmail.com,firefighter\n 24,Barbi,Shanley,Barbi.Shanley@yopmail.com,Barbi.Shanley@gmail.com,doctor\n 25,Lilith,Old,Lilith.Old@yopmail.com,Lilith.Old@gmail.com,developer\n 26,Caressa,Rolf,Caressa.Rolf@yopmail.com,Caressa.Rolf@gmail.com,developer\n 27,Misha,Toni,Misha.Toni@yopmail.com,Misha.Toni@gmail.com,doctor\n 28,Elena,Douglass,Elena.Douglass@yopmail.com,Elena.Douglass@gmail.com,firefighter\n 29,Liana,Kiersten,Liana.Kiersten@yopmail.com,Liana.Kiersten@gmail.com,police officer\n 30,Tera,Dalli,Tera.Dalli@yopmail.com,Tera.Dalli@gmail.com,police officer\n 31,Catrina,Behre,Catrina.Behre@yopmail.com,Catrina.Behre@gmail.com,police officer\n 32,Carmela,Douglass,Carmela.Douglass@yopmail.com,Carmela.Douglass@gmail.com,worker\n 33,Kathy,Sidonius,Kathy.Sidonius@yopmail.com,Kathy.Sidonius@gmail.com,worker\n 34,Nerta,Monk,Nerta.Monk@yopmail.com,Nerta.Monk@gmail.com,doctor\n 35,Shirlee,Mata,Shirlee.Mata@yopmail.com,Shirlee.Mata@gmail.com,police officer\n 36,Joane,Tybald,Joane.Tybald@yopmail.com,Joane.Tybald@gmail.com,police officer\n 37,Flo,Sheedy,Flo.Sheedy@yopmail.com,Flo.Sheedy@gmail.com,doctor\n 38,Concettina,Libna,Concettina.Libna@yopmail.com,Concettina.Libna@gmail.com,firefighter\n 39,Petronia,Middleton,Petronia.Middleton@yopmail.com,Petronia.Middleton@gmail.com,firefighter\n 40,Sissy,Sammons,Sissy.Sammons@yopmail.com,Sissy.Sammons@gmail.com,police officer\n 41,Paulita,Isidore,Paulita.Isidore@yopmail.com,Paulita.Isidore@gmail.com,worker\n 42,Deedee,Raychel,Deedee.Raychel@yopmail.com,Deedee.Raychel@gmail.com,worker\n 43,Cathyleen,Ivens,Cathyleen.Ivens@yopmail.com,Cathyleen.Ivens@gmail.com,developer\n 44,Kaia,Adlare,Kaia.Adlare@yopmail.com,Kaia.Adlare@gmail.com,worker\n 45,Romona,Rossner,Romona.Rossner@yopmail.com,Romona.Rossner@gmail.com,worker\n 46,Fanny,Faro,Fanny.Faro@yopmail.com,Fanny.Faro@gmail.com,worker\n 47,Genovera,Hamil,Genovera.Hamil@yopmail.com,Genovera.Hamil@gmail.com,developer\n 48,Randa,Maribeth,Randa.Maribeth@yopmail.com,Randa.Maribeth@gmail.com,worker\n 49,Claresta,Larochelle,Claresta.Larochelle@yopmail.com,Claresta.Larochelle@gmail.com,worker\n 50,Rani,Olin,Rani.Olin@yopmail.com,Rani.Olin@gmail.com,firefighter\n 51,Dulcinea,Erskine,Dulcinea.Erskine@yopmail.com,Dulcinea.Erskine@gmail.com,worker\n 52,Doro,Camden,Doro.Camden@yopmail.com,Doro.Camden@gmail.com,firefighter\n 53,Winny,Engdahl,Winny.Engdahl@yopmail.com,Winny.Engdahl@gmail.com,firefighter\n 54,Linet,Modie,Linet.Modie@yopmail.com,Linet.Modie@gmail.com,police officer\n 55,Tatiania,Peti,Tatiania.Peti@yopmail.com,Tatiania.Peti@gmail.com,doctor\n 56,Daune,Elephus,Daune.Elephus@yopmail.com,Daune.Elephus@gmail.com,police officer\n 57,Olwen,Seagraves,Olwen.Seagraves@yopmail.com,Olwen.Seagraves@gmail.com,police officer\n 58,Binny,Merna,Binny.Merna@yopmail.com,Binny.Merna@gmail.com,police officer\n 59,Darlleen,Hubert,Darlleen.Hubert@yopmail.com,Darlleen.Hubert@gmail.com,doctor\n 60,June,Bouchard,June.Bouchard@yopmail.com,June.Bouchard@gmail.com,firefighter\n 61,Karly,Turne,Karly.Turne@yopmail.com,Karly.Turne@gmail.com,doctor\n 62,Lynde,Eldrid,Lynde.Eldrid@yopmail.com,Lynde.Eldrid@gmail.com,developer\n 63,Deloria,Ardeha,Deloria.Ardeha@yopmail.com,Deloria.Ardeha@gmail.com,police officer\n 64,Cassandra,Fabiola,Cassandra.Fabiola@yopmail.com,Cassandra.Fabiola@gmail.com,doctor\n 65,Blake,Edee,Blake.Edee@yopmail.com,Blake.Edee@gmail.com,worker\n 66,Julieta,Decato,Julieta.Decato@yopmail.com,Julieta.Decato@gmail.com,developer\n 67,Yolane,Lubin,Yolane.Lubin@yopmail.com,Yolane.Lubin@gmail.com,developer\n 68,Averyl,Duwalt,Averyl.Duwalt@yopmail.com,Averyl.Duwalt@gmail.com,firefighter\n 69,Meriel,Ovid,Meriel.Ovid@yopmail.com,Meriel.Ovid@gmail.com,doctor\n 70,Cacilie,Jotham,Cacilie.Jotham@yopmail.com,Cacilie.Jotham@gmail.com,developer\n 71,Lorne,Schalles,Lorne.Schalles@yopmail.com,Lorne.Schalles@gmail.com,developer\n 72,Adriana,Suzetta,Adriana.Suzetta@yopmail.com,Adriana.Suzetta@gmail.com,worker\n 73,Annabela,Ogren,Annabela.Ogren@yopmail.com,Annabela.Ogren@gmail.com,doctor\n 74,Lulita,Voletta,Lulita.Voletta@yopmail.com,Lulita.Voletta@gmail.com,worker\n 75,Rosaline,Nerita,Rosaline.Nerita@yopmail.com,Rosaline.Nerita@gmail.com,police officer\n 76,Minne,Florina,Minne.Florina@yopmail.com,Minne.Florina@gmail.com,firefighter\n 77,Genovera,Warthman,Genovera.Warthman@yopmail.com,Genovera.Warthman@gmail.com,firefighter\n 78,Sonni,Eachern,Sonni.Eachern@yopmail.com,Sonni.Eachern@gmail.com,firefighter\n 79,Kassey,Daniele,Kassey.Daniele@yopmail.com,Kassey.Daniele@gmail.com,worker\n 80,Annabela,Felizio,Annabela.Felizio@yopmail.com,Annabela.Felizio@gmail.com,firefighter\n 81,Ingrid,Weinreb,Ingrid.Weinreb@yopmail.com,Ingrid.Weinreb@gmail.com,firefighter\n 82,Fawne,Dreda,Fawne.Dreda@yopmail.com,Fawne.Dreda@gmail.com,worker\n 83,Vonny,Ezar,Vonny.Ezar@yopmail.com,Vonny.Ezar@gmail.com,firefighter\n 84,Janenna,Pattin,Janenna.Pattin@yopmail.com,Janenna.Pattin@gmail.com,police officer\n 85,Modestia,Truc,Modestia.Truc@yopmail.com,Modestia.Truc@gmail.com,firefighter\n 86,Brandise,Oster,Brandise.Oster@yopmail.com,Brandise.Oster@gmail.com,worker\n 87,Averyl,Daniele,Averyl.Daniele@yopmail.com,Averyl.Daniele@gmail.com,developer\n 88,Tamqrah,Hedve,Tamqrah.Hedve@yopmail.com,Tamqrah.Hedve@gmail.com,police officer\n 89,Brana,Sharl,Brana.Sharl@yopmail.com,Brana.Sharl@gmail.com,doctor\n 90,Lorenza,Lory,Lorenza.Lory@yopmail.com,Lorenza.Lory@gmail.com,doctor\n 91,Jennica,Tybald,Jennica.Tybald@yopmail.com,Jennica.Tybald@gmail.com,worker\n 92,Desirae,Pacorro,Desirae.Pacorro@yopmail.com,Desirae.Pacorro@gmail.com,police officer\n 93,Deedee,Zitvaa,Deedee.Zitvaa@yopmail.com,Deedee.Zitvaa@gmail.com,worker\n 94,Tori,Allare,Tori.Allare@yopmail.com,Tori.Allare@gmail.com,developer\n 95,Aimil,Schroth,Aimil.Schroth@yopmail.com,Aimil.Schroth@gmail.com,worker\n 96,Blinni,Creamer,Blinni.Creamer@yopmail.com,Blinni.Creamer@gmail.com,doctor\n 97,Jackie,Ledah,Jackie.Ledah@yopmail.com,Jackie.Ledah@gmail.com,doctor\n 98,Genevra,Peg,Genevra.Peg@yopmail.com,Genevra.Peg@gmail.com,developer\n 99,Kirstin,Lytton,Kirstin.Lytton@yopmail.com,Kirstin.Lytton@gmail.com,developer\n 100,Jemie,Francene,Jemie.Francene@yopmail.com,Jemie.Francene@gmail.com,worker\n \n \n`;

const inBetweenNewLineString = `id,firstname,lastname,email,email2,profession\n 1,Rosanne,Fancie,Rosanne.Fancie@yopmail.com,Rosanne.Fancie@gmail.com,firefighter\n 2,Elsie,Mathilde,Elsie.Mathilde@yopmail.com,Elsie.Mathilde@gmail.com,firefighter\n 3,Britni,Si,Britni.Si@yopmail.com,Britni.Si@gmail.com,police officer\n 4,Brynna,Warthman,Brynna.Warthman@yopmail.com,Brynna.Warthman@gmail.com,worker\n 5,Nessie,Septima,Nessie.Septima@yopmail.com,Nessie.Septima@gmail.com,doctor\n 6,Tina,Rona,Tina.Rona@yopmail.com,Tina.Rona@gmail.com,developer\n 7,Dania,Thad,Dania.Thad@yopmail.com,Dania.Thad@gmail.com,firefighter\n\n\n\n 8,Genevra,Susannah,Genevra.Susannah@yopmail.com,Genevra.Susannah@gmail.com,police officer\n 9,Ivett,Alexandr,Ivett.Alexandr@yopmail.com,Ivett.Alexandr@gmail.com,police officer\n 10,Mady,Chrystel,Mady.Chrystel@yopmail.com,Mady.Chrystel@gmail.com,doctor\n`;

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
  locationJSON
};
