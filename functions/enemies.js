//class for creating enemies
class Enemy {
    constructor(img, bgImg, top, left) {
      this.hp = randomNum();
      this.img = img;
      this.bgImg = bgImg;
      this.top = top;
      this.left = left;
    }
  
    //get values
    getHP() { return this.hp; }
    getImg() { return this.img; }
    getBgImg() { return this.bgImg; }
    getTop() { return this.top; }
    getLeft() { return this.left;}
  
    //set health
    setHP(hp) { this.hp = hp; }
  
    //decrease health by one
    damage() { this.hp--; }
}
  
//get number between 1 and 20
function randomNum() {
    return Math.round(Math.random() * 20 + 1);
}

  //create array with enemies
export const createEnemies = () => [
    //(health, image of enemy, theme, position-top, position-left)
    new Enemy('./images/tv.webp', './images/bg-tv.webp', '140px', '280px'),
    new Enemy('./images/troop.webp', './images/bg-troop.webp', '100px', '300px'),
    new Enemy('./images/ship.webp', './images/bg-ship.webp', '100px', '170px'),
    new Enemy('./images/putin.webp', './images/bg-putin.webp', '15px', '320px'),
    new Enemy('./images/moskov.webp', './images/bg-moskov.webp', '0px', '150px'),
];