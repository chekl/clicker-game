//inisialize user
const user = {
  name: '',
  email: '',
  score: 0,
  level: 0,
};

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
  getHP() {
    return this.hp;
  }
  getImg() {
    return this.img;
  }
  getBgImg() {
    return this.bgImg;
  }
  getTop() {
    return this.top;
  }
  getLeft() {
    return this.left;
  }

  //set health
  setHP(hp) {
    this.hp = hp;
  }

  //decrease health by one
  damage() {
    this.hp--;
  }
}

//create array with enemies
const enemies = [
  //(health, image of enemy, theme, position-top, position-left)
  new Enemy('./images/tv.png', './images/bg-tv.jpg', '140px', '280px'),
  new Enemy('./images/troop.png', './images/bg-troop.jpg', '100px', '300px'),
  new Enemy('./images/ship.png', './images/bg-ship.jpg', '100px', '170px'),
  new Enemy('./images/putin.png', './images/bg-putin.jpeg', '15px', '320px'),
  new Enemy('./images/moskov.png', './images/bg-moskov.jpg', '0px', '150px'),
];

//get number between 1 and 20
function randomNum() {
  return Math.round(Math.random() * 20 + 1);
}

//go to next page by changing css property display
function nextPage(id, nextId) {
  document.getElementById(`${id}`).style.display = 'none';
  document.getElementById(`${nextId}`).style.display = 'block';
}

//cheking for empty inputs and valid email
function isUserValid(name, email) {
  return name.trim() != '' &&
    email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/)
    ? true
    : false;
}

//creating valid user
function createUser() {
  //getting values of inputs
  const userName = document.getElementById('userName').value;
  const userEmail = document.getElementById('userEmail').value;

  //checking values
  if (isUserValid(userName, userEmail)) {
    //set name to user
    user.name = userName;
    //set email to user
    user.email = userEmail;
    //remove error
    document.getElementById('userError').innerHTML = '';
    //go to page with rules of game
    nextPage('gameCreateUser', 'gameRules');
  } else {
    //thrown error and notify user about
    document.getElementById('userError').innerHTML =
      'Перевірте, чи поля заповнені, та правильність написання пошти';
  }
}

//get level-bar elements and set values
function setLevelBar(user, enemy) {
  //level
  document.getElementById('levelNum').innerHTML = Number(user.level + 1);
  //username
  document.getElementById('user').innerHTML = user.name;
  //user score
  document.getElementById('score').innerHTML = user.score;
  //health of enemy
  document.getElementById('enemyHP').innerHTML = enemy.getHP();
}

//add image of theme, enemy and position of enemy
function setLevelStyle(enemyContainer, enemy) {
  //set theme
  document.getElementById(
    'level-container'
  ).style.background = `url(${enemy.getBgImg()})`;
  document.getElementById('level-container').style.filter = 'blur(0)';
  //set enemy`s position
  enemyContainer.style.cssText = `
  top: ${enemy.getTop()};
  left: ${enemy.getLeft()};
  `;
  //set enemy look
  enemyContainer.setAttribute('src', `${enemy.getImg()}`);
}

//creating level
function currentLevel(user, enemy) {
  //create variables of
  //user score
  let score = document.getElementById('score');
  //enemy health
  let enemyHP = document.getElementById('enemyHP');
  //enemy container
  let enemyContainer = document.getElementById('enemy');

  //set enemy health, username, score and level to level-bar
  setLevelBar(user, enemy);
  //set theme and look of enemy
  setLevelStyle(enemyContainer, enemy);

  //damage enemy by clicking
  function handelClick() {
    //decrease enemy`s health by one
    enemy.damage();
    //increase user score by one
    user.score++;
    //set changed values to level bar
    //enemy health
    enemyHP.innerHTML = enemy.getHP();
    //user score
    score.innerHTML = user.score;
    if (enemy.getHP() == 0) {
      //next level
      user.level++;
      //remove processing click
      enemyContainer.removeEventListener('click', handelClick);
      //create next level
      nextLevel(user, enemies[user.level]);
    }
  }
  //add processing click
  enemyContainer.addEventListener('click', handelClick);
}

//start game after page with rules
document.getElementById('startBtn').addEventListener('click', function () {
  //go to start level
  nextPage('gameRules', 'level-container');
  //create first level
  currentLevel(user, enemies[user.level]);
});

//create notification of pass level
function userResult(score) {
  //create container
  const winDiv = document.createElement('div');
  //add id
  winDiv.setAttribute('id', 'win-div');
  //add class
  winDiv.classList.add('container');
  //add class for centering
  winDiv.classList.add('center-position');
  //add text and score
  winDiv.innerHTML = `
  <h2>Виграш!</h2>
  <br/>
  <p>Pахунок:${score}</p>
  <input id="nextLevel" class="btn" type="button" value="Наступний рівень"/>
  `;
  //add container to page
  document.body.appendChild(winDiv);
  //add bluring style to level
  document.getElementById('level-container').style.filter = 'blur(1rem)';
  //remove enemy from view
  document.getElementById("enemy").setAttribute("src", "#")
}

//remove container with current user result
function removeWinDiv() {
  //get container by id
  const winDiv = document.getElementById('win-div');
  //remove from body
  document.body.removeChild(winDiv);
}

//go to next level
function nextLevel(user, enemy) {
  if (enemies[enemies.length] != enemy) {
    //create notice of winning
    userResult(user.score);
    //create level
    document.getElementById('nextLevel').onclick = () => {
      //remove user result
      removeWinDiv();
      //create level with new enemy
      currentLevel(user, enemy);
    };
  } else {
    //go to end page of game
    nextPage('level-container', 'gameEnd');

    document.getElementById('userTotalScore').innerHTML = user.score;
  }
}

//change user and enemies
function newGame() {
  //set score and level to initial
  user.score = 0;
  user.level = 0;
  //set new HP to enemies
  for (let i = 0; i < enemies.length; i++) {
    enemies[i].setHP(randomNum());
  }
}
