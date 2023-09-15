/* Opdracht Objectgeorienteerd programmeren
   Informatica - Emmauscollege Rotterdam
*/

/* ******************************************************* */
/* instellingen om foutcontrole van je code beter te maken */
/* ******************************************************* */
///<reference path="p5.global-mode.d.ts" />
"use strict"


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
// class voor het dvd-icoon

class DVD {
  img;
  xPositie;
  yPositie;
  speedX;
  speedY;
  BREEDTE;
  img;

  constructor(x, y, speedX, speedY, BREEDTE) {
    this.xPositie = x;
    this.yPositie = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.BREEDTE = BREEDTE;
  }

  show(){
    
  }

  update() {
    
    for (let i = 0; i < xPosities.length; i++) {

      image(img, xPosities[i], yPosities[i], BREEDTE, BREEDTE);

      xPosities[i] = xPosities[i] + speedX[i];
      yPosities[i] = yPosities[i] + speedY[i];

      if (xPosities[i] <= 0 || xPosities[i] + BREEDTE >= width) {
        speedX[i] = speedX[i] * -1;
      }
      if (yPosities[i] <= 0 || yPosities[i] + BREEDTE >= height) {
        speedY[i] = speedY[i] * -1;
      }

    }

  }
}
 var speedX = [];
var speedY = [];
var xPosities = [];
var yPosities = [];
const BREEDTE = 100;
let img;

function preload() {
  img = loadImage('dvd-gold.png');
}



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  for (let i = 0; i < 1; i++) {
    // initialiseer waarden
    speedX.push(random(-10, 10)); //, random(-5, 5), random(-5, 5)];      // random waarde tussen -5 en 5
    speedY.push(random(-10, 10)); //, random(-5, 5), random(-5, 5)];  

    xPosities.push(random(0, 1200)); //, random(0, 720), random(0, 720)];
    yPosities.push(random(0, 680)); //, random(0, 720), random(0, 720)];
  }



}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);


  for (let i = 0; i < xPosities.length; i++) {


    // teken
    //noStroke;
    //fill(255, 255, 255);
    // img(xPosities[i], yPosities[i], BREEDTE, BREEDTE);
    image(img, xPosities[i], yPosities[i], BREEDTE, BREEDTE);



    // update positie
    xPosities[i] = xPosities[i] + speedX[i];
    yPosities[i] = yPosities[i] + speedY[i];

    // stuiter evt. tegen de kanten
    if (xPosities[i] <= 0 || xPosities[i] + BREEDTE >= width) {
      speedX[i] = speedX[i] * -1;
    }

    if (yPosities[i] <= 0 || yPosities[i] + BREEDTE >= height) {
      speedY[i] = speedY[i] * -1;
    }
  }
}
