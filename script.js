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
  xPositie;
  yPositie;
  speedX;
  speedY;
  breedte = 100;
  isBesmet;
  img;

  constructor(x, y, speedX, speedY, dvdimg) {
    this.img = dvdimg;
    this.xPositie = x;
    this.yPositie = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.isBesmet = false;
  }

  show() {

    if (this.isBesmet = true) {
      this.img = loadImage('dvd-red.png')
    }

    else {
      this.img = loadImage('dvd-gold.png')
    }

    image(this.img, this.xPositie, this.yPositie, this.breedte, this.breedte);

  }

  update() {

    this.xPositie = this.xPositie + this.speedX;
    this.yPositie = this.yPositie + this.speedY;

    if (this.xPositie <= 0 || this.xPositie + this.breedte >= width) {
      this.speedX = this.speedX * -1;
    }
    if (this.yPositie <= 0 || this.yPositie + this.breedte >= height) {
      this.speedY = this.speedY * -1;
    }

    /* this.speedX.push(random(-10, 10));
     this.speedY.push(random(-10, 10));
 
     this.xPositie.push(random(0, 1200));
     this.yPositie.push(random(0, 680));
 */
  }

}
var dvds = [];
var dvdimg_gold;
var dvdimg_red;

function preload() {
  dvdimg_gold = loadImage('dvd-gold.png');
  dvdimg_red = loadImage('dvd-red.png')
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

  /*
  for (let i = 0; i < 1; i++) {
    // initialiseer waarden
    speedX.push(random(-10, 10)); //, random(-5, 5), random(-5, 5)];      // random waarde tussen -5 en 5
    speedY.push(random(-10, 10)); //, random(-5, 5), random(-5, 5)];  

    xPosities.push(random(0, 1200)); //, random(0, 720), random(0, 720)];
    yPosities.push(random(0, 680)); //, random(0, 720), random(0, 720)];
  }
  */

  // maak 25 random mensen
  for (var i = 0; i < 5; i++) {
    // we moeten ze niet te dicht bij de rand tekenen
    // om geen problemen met stuiteren te krijgen
    var ruimteTotRand = 50;

    // creëer random positie en snelheid
    var randomX = random(ruimteTotRand, width - ruimteTotRand);
    var randomY = random(ruimteTotRand, height - ruimteTotRand);
    var randomSpeedX = random(-5, 5);
    var randomSpeedY = random(-5, 5);

    // maak nieuw mensobject
    var DVDA = new DVD(randomX, randomY, randomSpeedX, randomSpeedY, dvdimg);

    // voeg mensobject toe aan array
    dvds.push(DVDA);


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

  for (var i = 0; i < dvds.length; i++) {
    DVD.show();
    DVD.update();
  }
  //for (let i = 0; i < xPositie.length; i++) {


  // teken
  //noStroke;
  //fill(255, 255, 255);
  // img(xPosities[i], yPosities[i], BREEDTE, BREEDTE);
  // image(img, xPosities[i], yPosities[i], BREEDTE, BREEDTE);



  // update positie


  // stuiter evt. tegen de kanten

  // }
}
