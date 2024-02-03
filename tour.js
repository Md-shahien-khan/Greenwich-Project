
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
  "(Entry of Dreadnought) Greenwich Everything students require on the Greenwich campus is conveniently located in Dreadnought. The lab, cafeteria, prayer room, meeting room, etc. are all available to students in one location.",   // Index 0
  "Ground Floor",    // Index 1
  "Ground Floor",   // Index 2 (Updated filename)
  "Student Center Departement | It Support Desk",   // Index 3
  "The Galley Cafeteria",  // Index 4
  "Lift 1",   // Index 5
  "Lift 2",  // Index 6
  "Lift 1 | Rooms | Stair", // Index 7
  "Sitting Area", // Index 8
  "Walk Straight to Enter the Lift", // Index 9
  "Washroom | 011 Advice Counselling Room  ", // Index 10
  "Advice Service Room", // Index 11
  "016 Post Graduate Room | Mosque (Straight)", // Index 12
  "Stairs to go Upstair",  // 13
"Washroom | Advicing Rooms | Mosque", //14
"Entry point of Lift 1", //15
"Sitting Area", // 16
"Lift to Go Up or Down", // 17
"SAS Rooms", // 18
"Faculty of Education, Health and Human Sciences(FEHHS) Breakout Room 1-4 162, 163a, 163b & 164", // 19 
"In left side Faculty of Education, Health and Human Sciences(FEHHS) Breakout Room 1-4 162, 163a, 163b & 164, If you go Straight Faculty of Education, Health and Human Sciences(FEHHS) and right you will get the lift.", //20
"Lab 166", //21
"Faculty of Education, Health and Human Sciences(FEHHS) social and development lab 125 & 128|Psychology store 130a|Observation office 130b|Lab 130c|Lab 131-133", //22
"Faculty of Education, Health and Human Sciences(FEHHS) Faculty Office 145", //23
"Faculty of Education, Health and Human Sciences(FEHHS) Library 160 FEHHS Offices 150, 150C, 150F, 150G", //24
"Faculty of Education, Health & Human Sciences(FEHHS)|FEHHS Manager's Office 105a & 105b|FEHHS Staff Office|FEHHS Deputy Heads' Office 103|FEHHS Research Office 101|FEHHS Professors and Readers Office 104", // 25
"Sas leadership team room 111", // 26
"Student and Academic Services(SAS)|SAS Offices 109, 111, 117b, 117c & 117d|Faculty of Education, Health and Human Sciences(FEHHS) Postgraduate Doctoral Space 117a & 117e|FEHHS Post Graduate Space", // 27
"3rd Floor Lift", // 28
"Information & Library Services(ILS)", // 29
"IT lab 264 and Meeting room 266", // 30
"Stairs", // 31
"Sitting Area", // 32
"Sitting Area|(If you go left) 264 IT lab and bookable group space 265|If you go straight IT Labs and Desks", // 33
"Information & Library Services|Directors Office 211|Infrastructure 205|Switchboard 260|Networks 203|Head Offices 201,261,262|Toilets", // 34
"208 Information & Library Services(ILS) Administration Office", // 35
"Information & Library Services|215 Class Room|Business Solutions 218|Project Space 226|Service Development(AV) 225|Switch Board 260", // 36
"Student and Academic Services SAS Offices 232 & 234|Information & Library Services|Desktop & Licensing 231|IT Teaching Lab 235 & 236|Workshop 230|Service Delivery 233|Project Space 226|Service Development(AV) 225|Washroom", // 37
"245 Information & Library Services(ILS) IT Service Desk", // 38
"Open Access IT Lab 250", // 39
];


let currentImageIndex = 0;
const currentImageElement = document.getElementById("current-image");
const upButton = document.getElementById("up-button");
const downButton = document.getElementById("down-button");
const leftButton = document.getElementById("left-button");
const rightButton = document.getElementById("right-button");



function updateButtonsVisibility() {
  upButton.style.display = "none";
  downButton.style.display = "none";
  leftButton.style.display = "none";
  rightButton.style.display = "none";

  if (currentImageIndex === 0) {
    upButton.style.display = "block";
  } 
  else if (currentImageIndex === 1 || currentImageIndex === 2 || currentImageIndex === 17 || currentImageIndex === 14 
    
    ) { // All visible
    upButton.style.display = "block";
    downButton.style.display = "block";
    leftButton.style.display = "block";
    rightButton.style.display = "block";
  }
  
  else if (currentImageIndex === 10 || currentImageIndex === 3 || currentImageIndex === 5 
    || currentImageIndex === 15  
    || currentImageIndex === 22 
    || currentImageIndex === 25 || currentImageIndex === 34
    || currentImageIndex === 37) { //right button visible
    rightButton.style.display = "block";
    
  }
  
  else if (currentImageIndex === 12 || currentImageIndex === 4 || currentImageIndex === 6  ||
      currentImageIndex === 9  || currentImageIndex === 24
      
      || currentImageIndex === 27  || currentImageIndex === 30 || currentImageIndex === 36 || currentImageIndex === 39) { //left button visible
    leftButton.style.display = "block";
  }

  else if (currentImageIndex === 21) { //Down button visible
    downButton.style.display = "block";
}
  
  else if (currentImageIndex === 25 || currentImageIndex === 13 
    || currentImageIndex === 18) { //up and left button visible
    upButton.style.display = "block";
    leftButton.style.display = "block";
}

else if (currentImageIndex === 7 || currentImageIndex === 19) { //up and right button visible
  upButton.style.display = "block";
    rightButton.style.display = "block";
}

else if (currentImageIndex === 25 || currentImageIndex === 20) { //up and down button visible
  upButton.style.display = "block";
  downButton.style.display = "block";
}
else if (currentImageIndex === 8 || currentImageIndex === 11 
 || currentImageIndex === 23 || currentImageIndex === 26 || currentImageIndex === 28 
 
 || currentImageIndex === 38 || currentImageIndex === 35) { //left, right and down button visible
  downButton.style.display = "block";
  leftButton.style.display = "block";
  rightButton.style.display = "block";
}

else if (currentImageIndex === 16 || currentImageIndex === 29 ) { //left, right and up button visible
  upButton.style.display = "block";
  leftButton.style.display = "block";
  rightButton.style.display = "block";
}

else if (currentImageIndex === 31) { //right and down button visible
   downButton.style.display = "block";
   rightButton.style.display = "block";
 }

 else if (currentImageIndex === 33 || currentImageIndex === 32 ) { //left and right button visible
  leftButton.style.display = "block";
  rightButton.style.display = "block";
}

 


  document.getElementById("place-name").textContent = placeNames[currentImageIndex];
}



function changeImage(index) {
  if (currentImageIndex === 0) {
    currentImageIndex = index;
    currentImageElement.src = images[currentImageIndex];
    updateButtonsVisibility();
  } else {
    currentImageElement.style.opacity = 0; // Set opacity to 0 for fade-out effect
    setTimeout(() => {
      currentImageIndex = index;
      currentImageElement.src = images[currentImageIndex];
      currentImageElement.style.opacity = 1; // Set opacity back to 1 for fade-in effect
      updateButtonsVisibility();
    }, 300); // Match the new transition duration (0.3 seconds)
  }
}




upButton.addEventListener("click", () => {//Up button
  if (currentImageIndex === 0) {
    changeImage(1);
  } else if (currentImageIndex === 1 || currentImageIndex === 3 || currentImageIndex === 4) {
    changeImage(2);
  }
  else if (currentImageIndex === 2) {
    changeImage(8);
  }
  else if (currentImageIndex === 7) {
    changeImage(14);
  }
  else if (currentImageIndex === 14) {
    changeImage(11);
  }
  else if (currentImageIndex === 13) {
    changeImage(17);
  }
  else if (currentImageIndex === 16) {
    changeImage(20);
  }
  else if (currentImageIndex === 19) {
    changeImage(21);
  }
  else if (currentImageIndex === 20) {
    changeImage(23);
  }
  else if (currentImageIndex === 18) {
    changeImage(26);
  }
  else if (currentImageIndex === 17) {
    changeImage(28);
  }
  else if (currentImageIndex === 29) {
    changeImage(35);
  }
});

downButton.addEventListener("click", () => { //Down button
  if (currentImageIndex === 1 || currentImageIndex === 3 || currentImageIndex === 4) {
    changeImage(0);
  }
  else if (currentImageIndex === 2) {
    changeImage(1);}
    else if (currentImageIndex === 8) {
      changeImage(2);}
      else if (currentImageIndex === 14) {
        changeImage(7);}
        else if (currentImageIndex === 11) {
          changeImage(14);
        }
        else if (currentImageIndex === 17) {
          changeImage(13);
        }
        else if (currentImageIndex === 21) {
          changeImage(19);
        }

        else if (currentImageIndex === 20) {
          changeImage(16);
        }
        else if (currentImageIndex === 23) {
          changeImage(20);
}

else if (currentImageIndex === 26) {
  changeImage(18);
}

else if (currentImageIndex === 28) {
  changeImage(17);
}
else if (currentImageIndex === 35) {
  changeImage(29);
}
else if (currentImageIndex === 31) {
  changeImage(28);
}
else if (currentImageIndex === 38) {
  changeImage(33);
}

});

leftButton.addEventListener("click", () => { //left button
  if (currentImageIndex === 1) {
    changeImage(3);
  } else if (currentImageIndex === 2) {
    changeImage(5);
  } else if (currentImageIndex === 4) {
    changeImage(1);
  }
  else if (currentImageIndex === 6) {
    changeImage(2);
  }

  else if (currentImageIndex === 8) {
    changeImage(7);
  }

  else if (currentImageIndex === 9) {
    changeImage(8);
  }
  else if (currentImageIndex === 14) {
    changeImage(15);
  }

  else if (currentImageIndex === 13) {
    changeImage(14);
  }

  else if (currentImageIndex === 11) {
    changeImage(10);
  }
  else if (currentImageIndex === 12) {
    changeImage(11);
  }
  else if (currentImageIndex === 17) {
    changeImage(16);
  } 
   else if (currentImageIndex === 18) {
    changeImage(17);
  }
  else if (currentImageIndex === 16) {
    changeImage(19);
  }
  else if (currentImageIndex === 23) {
    changeImage(22);
  }
  else if (currentImageIndex === 24) {
    changeImage(23);
  }

  else if (currentImageIndex === 26) {
    changeImage(25);
  }
  else if (currentImageIndex === 27) {
    changeImage(26);
  }
  else if (currentImageIndex === 28) {
    changeImage(31);
  }
  else if (currentImageIndex === 29) {
    changeImage(28);
  }
  else if (currentImageIndex === 30) {
    changeImage(29);
  }
  else if (currentImageIndex === 35) {
    changeImage(34);
  }
  else if (currentImageIndex === 36) {
    changeImage(35);
  }
  else if (currentImageIndex === 38) {
    changeImage(37);
  }
  else if (currentImageIndex === 39) {
    changeImage(38);
  }

  else if (currentImageIndex === 33) {
    changeImage(32);
  }
  else if (currentImageIndex === 32) {
    changeImage(31);
  }
});


rightButton.addEventListener("click", () => { //right button
  if (currentImageIndex === 1) {
    changeImage(4);
  } else if (currentImageIndex === 2) {
    changeImage(6);
  } else if (currentImageIndex === 3) {
    changeImage(1);
  }
  else if (currentImageIndex === 5) {
    changeImage(2);
  }
  else if (currentImageIndex === 8) {
    changeImage(9);
  }
  else if (currentImageIndex === 7) {
    changeImage(8);
  }
  else if (currentImageIndex === 14) {
    changeImage(13);
  }
  else if (currentImageIndex === 15) {
    changeImage(14);
  }

  else if (currentImageIndex === 11) {
    changeImage(12);
  }
  else if (currentImageIndex === 10) {
    changeImage(11);
  }
  else if (currentImageIndex === 17) {
    changeImage(18);
  }

  else if (currentImageIndex === 16) {
    changeImage(17);
  } 
   else if (currentImageIndex === 19) {
    changeImage(16);
  }
  else if (currentImageIndex === 23) {
    changeImage(24);
  }
  else if (currentImageIndex === 22) {
    changeImage(23);
  }
  else if (currentImageIndex === 26) {
    changeImage(27);
  }
  else if (currentImageIndex === 25) {
    changeImage(26);
  }
  else if (currentImageIndex === 28) {
    changeImage(29);
  }
  else if (currentImageIndex === 29) {
    changeImage(30);
  }
  else if (currentImageIndex === 35) {
    changeImage(36);
  }
  else if (currentImageIndex === 34) {
    changeImage(35);
  }
  else if (currentImageIndex === 31) {
    changeImage(32);
  }
  else if (currentImageIndex === 32) {
    changeImage(33);
  } 
  else if (currentImageIndex === 33) {
    changeImage(38);
  }
  else if (currentImageIndex === 38) {
    changeImage(39);
  }
  else if (currentImageIndex === 37) {
    changeImage(38);
  }
});

// Initialize with default image
changeImage(0);
