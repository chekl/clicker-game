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
    new Enemy('./images/tv.png', './images/bg-tv.jpg', '140px', '280px'),
    new Enemy('./images/troop.png', './images/bg-troop.jpg', '100px', '300px'),
    new Enemy('./images/ship.png', './images/bg-ship.jpg', '100px', '170px'),
    new Enemy('./images/putin.png', './images/bg-putin.jpeg', '15px', '320px'),
    new Enemy('./images/moskov.png', './images/bg-moskov.jpg', '0px', '150px'),
];