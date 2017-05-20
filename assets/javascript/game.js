keyPress = [];
parkSet = ['Denali', 'Gates of the Arctic', 'Glacier Bay', 'Katmai', 'Kenai Fjords', 'Kobuk Valley', 'Lake Clark', 'Wrangell St Elias', 'American Samoa', 'Grand Canyon', 'Petrified Forest', 'Saguaro', 'Hot Springs', 'Channel Islands', 'Death Valley', 'Joshua Tree', 'Kings Canyon', 'Lassen Volcanic', 'Redwood', 'Sequoia', 'Yosemite', 'Black Canyon of the Gunnison', 'Great Sand Dunes', 'Mesa Verde', 'Rocky Mountain', 'Biscayne', 'Dry Tortugas', 'Everglades', 'Haleakala', 'Hawaii Volcanoes', 'Yellowstone', 'Mammoth Cave', 'Acadia', 'Isle Royale', 'Voyageurs', 'Glacier', 'Yellowstone', 'Great Basin', 'Carlsbad Caverns', 'Great Smoky Mountains', 'Theodore Roosevelt', 'Cuyahoga Valley', 'Crater Lake', 'Congaree', 'Badlands', 'Wind Cave', 'Great Smoky Mountains', 'Big Bend', 'Guadalupe Mountains', 'Virgin Islands', 'Arches', 'Bryce Canyon', 'Capitol Reef', 'Canyonlands', 'Zion', 'Shenandoah', 'Mount Rainier', 'North Cascades', 'Olympic', 'Grand Teton', 'Yellowstone'];
keyRandom = [];
var i = 0;
var n = 9;
var wins = 0;
var losses = 0;
var maskPark = [];
var pressPark = [];
var randomNumber = Math.floor(Math.random() * 60);
var randomPark = parkSet[randomNumber].toUpperCase();
var arrayPark = [];

document.getElementById("kn").innerHTML = n;
document.getElementById("wi").innerHTML = wins;
document.getElementById("lo").innerHTML = 0;
document.getElementById("wo").innerHTML = randomPark;

for (var i = 0; i < randomPark.length; i++) {
  var letterPark = randomPark.substring(i, i + 1);
  if (letterPark === ' ') {
    maskPark.push(" - ");
  } else {
    maskPark.push('_')
  }
}
document.getElementById("mw").innerHTML = maskPark.join(" ");

for (var i = 0; i < randomPark.length; i++) {
  var letterPark = randomPark.substring(i, i + 1);
  if (letterPark === ' ') {
    arrayPark.push(" - ");
  } else {
    arrayPark.push(letterPark)
  }
}
document.getElementById("ap").innerHTML = arrayPark.join(" ");

document.onkeypress = function(event) {
  var pressLetter = String.fromCharCode(event.keyCode).toUpperCase();
  pressPark.push(String.fromCharCode(event.keyCode).toUpperCase());
  document.getElementById("kp").innerHTML = pressPark.join(", ");

  //    if (randomPark.indexOf(pressLetter) >= 0) {
  //     document.getElementById("wi").innerHTML = wins+1;
  //      wins++;

  for (var j = 0; j < arrayPark.length; j++) {
    if (arrayPark[j] === pressLetter) {
      maskPark[j] = pressLetter;
    }
  }
  document.getElementById("mw").innerHTML = maskPark.join(" ");
  i++;
  //    };

};
