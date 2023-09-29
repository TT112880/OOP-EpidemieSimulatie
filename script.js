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
  img_normal;
  img_infected;

  constructor(x, y, speedX, speedY, dvdimg_gold, dvdimg_red) {
    this.img_normal = dvdimg_gold;
    this.img_infected = dvdimg_red;
    this.xPositie = x;
    this.yPositie = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.isBesmet = false;
  }

  show() {

    if (this.isBesmet === true) {
      this.img = this.img_infected;
    }

    else {
      this.img = this.img_normal;
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
  isOverlappend(andereDvd) {
    // zet teruggeefwaarde standaard op false
    var overlappend = false;
  
    if ( // valt linkerbovenhoek binnen randen van 'andereDvd'?
         (this.xPositie >= andereDvd.xPositie &&
          this.xPositie <= andereDvd.xPositie + andereDvd.breedte &&
          this.yPositie >= andereDvd.yPositie &&
          this.yPositie <= andereDvd.yPositie + andereDvd.breedte)
        ||
         // OF valt rechterbovenhoek binnen randen van 'andereDvd'?
         (this.xPositie + this.breedte >= andereDvd.xPositie &&
          this.xPositie + this.breedte <= andereDvd.xPositie + andereDvd.breedte &&
          this.yPositie >= andereDvd.yPositie &&
          this.yPositie <= andereDvd.yPositie + andereDvd.breedte)
        || // OF de linkeronderhoek?
         (this.xPositie >= andereDvd.xPositie &&
          this.xPositie <= andereDvd.xPositie + andereDvd.breedte &&
          this.yPositie + this.breedte >= andereDvd.yPositie &&
          this.yPositie + this.breedte <= andereDvd.yPositie + andereDvd.breedte)
        || // OF de hoek rechtsonder?
         (this.xPositie >= andereDvd.xPositie &&
          this.xPositie <= andereDvd.xPositie + andereDvd.breedte &&
          this.yPositie + this.breedte >= andereDvd.yPositie &&
          this.yPositie + this.breedte <= andereDvd.yPositie + andereDvd.breedte)
       ) {
          
      overlappend = true;
    }
  
    // stuur de teruggeefwaarde terug
    return overlappend;
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
    var DVDA = new DVD(randomX, randomY, randomSpeedX, randomSpeedY, dvdimg_gold, dvdimg_red);

    // voeg mensobject toe aan array
    dvds.push(DVDA);

    


  }

  dvds[0].isBesmet = true;
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
    dvds[i].show();
    dvds[i].update();
  }
  
    for (var i = 0; i < dvds.length; i++) {
      var DVD_A = dvds[i];
      // ga met mensA opnieuw alle mensen langs om te checken op overlap, behalve met zichzelf
      for (var j = 0; j < dvds.length; j++) {
        var DVD_B = dvds[j];
        if (DVD_A != DVD_BB) {
          // check overlap
          var dvdsOverlappen = DVD_A.isOverlappend(DVD_B);
          if (dvdsOverlappen) {
            // check of er een besmetting optreedt
            if (DVD_A.isBesmet || DVD_B.isBesmet) {
              // als er één besmet is, wordt ze allebei besmet
              // als ze allebei besmet zijn, verandert deze code niets.
              DVD_AA.isBesmet = true;
              DVD_BB.isBesmet = true;
            }
          }
        }
      }
    }

  // teken
  //noStroke;
  //fill(255, 255, 255);
  // img(xPosities[i], yPosities[i], BREEDTE, BREEDTE);
  // image(img, xPosities[i], yPosities[i], BREEDTE, BREEDTE);



  // update positie


  // stuiter evt. tegen de kanten

  // }
}
