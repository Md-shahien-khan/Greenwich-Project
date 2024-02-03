const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'greenwich'
});



const images = [
    "tour/home.jpg",   // Index 0
    "tour/two.jpg",    // Index 1
    "tour/next.jpg",   // Index 2 (Updated filename)
    "tour/four.jpg",   // Index 3
    "tour/three.jpg",  // Index 4
    "tour/left.jpg",   // Index 5
    "tour/right.jpg",  // Index 6
    "tour/5837.1.jpg", // Index 7
    "tour/5837.2.jpg", // Index 8
    "tour/5837.3.jpg", // Index 9
    "tour/5829.1.jpg", // Index 10
    "tour/5829.2.jpg", // Index 11
    "tour/5829.3.jpg", // Index 12
    "tour/IMG_5820.jpg",  // 13
  "tour/IMG_5818.jpg", //14
  "tour/IMG_5822.jpg", //15
  "tour/part_1.jpg", // 16
  "tour/part_2.jpg", // 17
  "tour/part_3.jpg", // 18
  "tour/scpart_1.jpg", // 19 
  "tour/scpart_3.jpg", //20
  "tour/IMG_5858.jpg", //21
  "tour/pxpart_1.jpg", //22
  "tour/pxpart_2.jpg", //23
  "tour/pxpart_3.jpg", //24
  "tour/5865part_1.jpg", // 25
  "tour/5865part_2.jpg", // 26
  "tour/5865part_3.jpg", // 27
  "tour/5882part_1.jpg", // 28
  "tour/5882part_2.jpg", // 29
  "tour/5882part_3.jpg", // 30
  "tour/5884part_1.jpg", // 31
  "tour/5884part_2.jpg", // 32
  "tour/5884part_3.jpg", // 33
  "tour/5899part_1.jpg", // 34
  "tour/5899part_2.jpg", // 35
  "tour/5899part_3.jpg", // 36
  "tour/5906pcpart_1.jpg", // 37
  "tour/5906pcpart_2.jpg", // 38
  "tour/5906pcpart_3.jpg", // 39
  
  ];
  
  
  const placeNames = [
    "Entry of Dreadnought Greenwich",   // Index 0
    "Ground Floor",    // Index 1
    "Ground Floor",   // Index 2 (Updated filename)
    "Student Center Departement | It Support Desk",   // Index 3
    "The Galley Cafeteria",  // Index 4
    "Lift 1",   // Index 5
    "Lift 2",  // Index 6
    "Lift 1 | Rooms | Stair", // Index 7
    "Sitting Area", // Index 8
    "Walk Straight to Enter the Lift", // Index 9
    "Washroom | Advice Counselling Room  ", // Index 10
    "Advice Service Room", // Index 11
    "Post Graduate Room | Mosque (Straight)", // Index 12
    "Stairs to go Upstair",  // 13
  "Washroom | Advicing Rooms | Mosque", //14
  "Entry point of Lift 1", //15
  "Sitting Area", // 16
  "Lift to Go Up or Down", // 17
  "SAS Rooms", // 18
  "FEHHS Breakout Room 1-4 162, 163a, 163b & 164", // 19 
  "Lifts | FEHHS | FRHHS", //20
  "Lab 166", //21
  "Faculty of Education, Health and Human Sciences|FEHHS social and development lab 125 & 128|Psychology store 130a|Observation office 130b|Lab 130c|Lab 131-133", //22
  "FRHHS Faculty Office 145", //23
  "FEHHS Library 160 | FEHHS Offices 150, 150C, 150F, 150G", //24
  "Faculty of Education, Health & Human Sciences (FEHHS)|FEHHS Manager's Office 105a & 105b|FEHHS Staff Office|FEHHS Deputy Heads' Office 103|FEHHS Research Office 101|FEHHS Professors and Readers Office 104", // 25
  "Sas leadership team room 111", // 26
  "Student and Academic Services(SAS)|SAS Offices 109, 111, 117b, 117c & 117d|FEHHS Postgraduate Doctoral Space 117a & 117e|FEHHS Post Graduate Space", // 27
  "3rd Floor Lift", // 28
  "Information & Library Services(ILS)", // 29
  "IT lab 264 and Meeting room 266", // 30
  "Stairs", // 31
  "Sitting Area", // 32
  "Sitting Area|(If you go left) 264 IT lab and bookable group space 265|If you go straight IT Labs and Desks", // 33
  "Information & Library Services|Directors Office 211|Infrastructure 205|Switchboard 260|Networks 203|Head Offices 201,261,262|Toilets", // 34
  "208 ILS", // 35
  "Information & Library Services|215 Class Room|Business Solutions 218|Project Space 226|Service Development(AV) 225", // 36
  "Student and Academic Services SAS Offices 232 & 234|Information & Library Services|Desktop & Licensing 231|IT Teaching Lab 235 & 236|Workshop 230|Service Delivery 233|Project Space 226|Service Development(AV) 225|Washroom", // 37
  "245 ILS IT Service Desk", // 38
  "Open Access IT Lab 250", // 39
  ];
  

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ', err);
    return;
  }
  console.log('Connected to the database.');

  const insertQuery = 'INSERT INTO tour (image_path, place_name) VALUES (?, ?)';

  images.forEach((imagePath, index) => {
    const placeName = placeNames[index];

    connection.query(insertQuery, [imagePath, placeName], (err, result) => {
      if (err) {
        console.error(`Error inserting image ${imagePath}: `, err);
      } else {
        console.log(`Image ${imagePath} inserted successfully.`);
      }

      if (index === images.length - 1) {
        connection.end();
        console.log('Disconnected from the database.');
      }
    });
  });
});
