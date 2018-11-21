/**
 * @author: Azan Muhammad
 * Date: January 4th, 2018
 * 
 * Description: The program runs and based on which
 * kind of dietary restriction you have, the program
 * will display the names of the restaurant that meet
 * the limitations.
 */

var resFile = [];
var resInfo = [];
var restrictFile = [];


//loads the information from text docs
function preload() {
  resFile = loadJSON('restaurants.json');
  restrictFile = loadStrings('Restriction.txt');
}

/**
 * Function puts the restrictions of each restaurant
 * in an array. Creates the background for the program
 * and the buttons that are to be clicked.
 */
function setup() {
  for (var i = 0; i < resFile.results.length; i++) {
    resInfo.push(resFile.results[i].restriction);
  }
  createCanvas(500, 180);
  background(204, 255, 255);
  textSize(20);
  var button1 = createButton("Halal Restaurants");
  button1.mousePressed(halalRestaurant);
  var button2 = createButton("Vegetarian Restaurants");
  button2.mousePressed(vegetarianRestaurant);
  var button3 = createButton("Seafood Restaurant");
  button3.mousePressed(seafoodRestaurant);
}

/**
 * Checks to see if any of the restaurants serve
 * halal food.
 */
function halalRestaurant() {
  var resRestrict = []; //temporary array to store results
  for (var i = 0; i < resInfo.length; i++) {
    for (var s = 0; s < resInfo[i].length; s++) {
      if (resInfo[i][s] == restrictFile[0]) {
        resRestrict.push(resFile.results[i].name);
      }
    }
  }
  if (resRestrict.length > 0) {
    background(204, 255, 255);
    text(resRestrict, 0, 0, width, height);
    return
  } else {
    background(204, 255, 255);
    text('No restaurants cater to that restriction.', 0, 0, width, height);
    return
  }
}

/**
 * Checks to see if any of the restaurants serve
 * vegetarian food.
 */
function vegetarianRestaurant() {
  var resRestrict = []; //temporary array to store results
  for (var i = 0; i < resInfo.length; i++) {
    for (var s = 0; s < resInfo[i].length; s++) {
      if (resInfo[i][s] == restrictFile[1]) {
        resRestrict.push(resFile.results[i].name);
      }
    }
  }
  if (resRestrict.length > 0) {
    background(204, 255, 255);
    text(resRestrict, 0, 0, width, height);
    return
  } else {
    background(204, 255, 255);
    text('No restaurants cater to that restriction.', 0, 0, width, height);
    return
  }
}

/**
 * Checks to see if any of the restaurants serve
 * seafood food.
 */
function seafoodRestaurant() {
  var resRestrict = []; //temporary array to store results
  for (var i = 0; i < resInfo.length; i++) {
    for (var s = 0; s < resInfo[i].length; s++) {
      if (resInfo[i][s] == restrictFile[2]) {
        resRestrict.push(resFile.results[i].name);
      }
    }
  }
  if (resRestrict.length > 0) {
    background(204, 255, 255);
    text(resRestrict, 0, 0, width, height);
    return
  } else {
    background(204, 255, 255);
    text('No restaurants cater to that restriction.', 0, 0, width, height);
    return
  }
}