//inisialize user
const user = {
  name: '',
  email: '',
  score: 0,
  level: 0
}

//class for creating enemies
class Enemy {
  constructor(hp, img, bgImg, top, left) {
    this.hp = hp;
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
  getLeft() { return this.left; }
  //decrease health by one
  damage() { this.hp--; } 
}

//create array with enemies
const enemies = [
  //(health, image of enemy, theme, position-top, position-left)
  new Enemy(5, './images/tv.png', './images/bg-tv.jpg', "140px", "280px"),
  new Enemy(10, './images/troop.png', './images/bg-troop.jpg', "100px", "300px"),
  new Enemy(15, './images/ship.png', './images/bg-ship.jpg', "100px", "170px"),
  new Enemy(20, './images/putin.png', './images/bg-putin.jpeg', "15px", "320px"),
  new Enemy(1, './images/moskov.png', './images/bg-moskov.jpg', "0px", "150px"),
];

//go to next page by changing css property display 
function nextPage(id, nextId) {
  document.getElementById(`${id}`).style.display = "none";
  document.getElementById(`${nextId}`).style.display = "block";
}

//cheking for empty inputs and valid email
function isUserValid(name, email) {
  return name != '' && 
    email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/) 
    ? true : false;
}

//creating valid user
function createUser() {
  //getting values of inputs
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  //checking values
  const validation = isUserValid(userName, userEmail)
  
  if(validation) {
    //set values to user
    user.name = userName;
    user.email = userEmail
    //go to page with rules of game
    nextPage('gameCreateUser','gameRules');
  } else {
    //thrown error and notify user about
    document.getElementById("userError").innerHTML = "Перевірте, чи поля заповнені, та правильність написання пошти";
  }
}

//get level-bar elements and set values
function setLevelBar(user, enemy) {
  //level
  document.getElementById('levelNum').innerHTML = "Рівень:" + Number(user.level + 1);
  //username
  document.getElementById('user').innerHTML = "Ім'я:" + user.name;
  //user score
  document.getElementById('score').innerHTML = "Рахунок:" + user.score;
  //health of enemy
  document.getElementById('enemyHP').innerHTML = "Здоров'я:" + enemy.getHP();
}

//add image of theme, enemy and position of enemy
function setLevelStyle(enemyContainer, enemy) {
  //set theme
  document.getElementById('level-container').style.background = `url(${enemy.getBgImg()})`;
  //set enemy`s position
  enemyContainer.style.cssText = `
  top: ${enemy.getTop()};
  left: ${enemy.getLeft()};
  `;
  //set enemy look
  enemyContainer.setAttribute('src', `${enemy.getImg()}`)
}

//creation level
function level(user, enemy) {
  //create variables of
  //user score
  let score = document.getElementById('score');
  //health of enemy
  let enemyHP = document.getElementById('enemyHP');
  //enemy container
  let enemyContainer = document.getElementById('enemy');
  
  //set enemy health, username, score and number of level to level-bar
  setLevelBar(user, enemy)
  //set theme and look of enemy
  setLevelStyle(enemyContainer, enemy)

  //damage enemy by clicking
  function handelClick() {
    //decrease enemy`s health by one
    enemy.damage();
    //increase user score by one
    user.score = user.score + 1;
    //set changed values to level bar
    //enemy`s health
    enemyHP.innerHTML = "Здоров'я:" + enemy.getHP();
    //user score
    score.innerHTML = "Рахунок:" + user.score;
    if(enemy.getHP() == 0) {
      //increase user level by one
      user.level++;
      //congratulation on winning to user
      alert("Вітаю, Ви виграли!");
      //remove processing click
      enemyContainer.removeEventListener("click", handelClick)
      //create level with new enemy
      level(user, enemies[user.level])
    }
  }
  //add processing click
  enemyContainer.addEventListener("click", handelClick)
}

//start game after page with rules
document.getElementById('startBtn').addEventListener("click", function(){
  //go to level
  nextPage('gameRules','level-container')
  //create first level
  level(user, enemies[0])
})