import { createEnemies } from './functions/enemies';
import { createUser } from './functions/userValidation';
import { setLevelBar, setLevelStyle } from './functions/styling';
import { nextPage, removeWinDiv, newGame } from './functions/navigation';
import { userResult } from './functions/notification';

//global variable for user and enemies
let enemies = createEnemies();
let user = {};

//add functional to buttons
//start process of game
document
  .getElementById('btnGameStart')
  .addEventListener('click', () => nextPage('gameStart', 'gameCreateUser'));

//user validation
document.getElementById('btnGameCreateUser').addEventListener('click', () => {
  user = createUser();
  if(user) {
   nextPage('gameCreateUser', 'gameRules'); 
  }
});

//start game after page with rules
document.getElementById('btnGameRules').addEventListener('click', () => {
  nextPage('gameRules', 'levelContainer');
  //create first level
  currentLevel(user, enemies[user.level]);
});

//create new game
document.getElementById('btnGameEnd').addEventListener('click', () => {
  //set initial values and create new enemies
  user = {
    ...user,
    score: 0,
    level: 0
  }
  enemies = createEnemies();
  nextPage('gameEnd', 'gameStart');
});

//creating level
function currentLevel(user, enemy) {
  //create variables of user score, enemy health, enemy container
  let score = document.getElementById('score');
  let enemyHP = document.getElementById('enemyHP');
  let enemyContainer = document.getElementById('enemy');

  //set enemy health, username, score and level to level-bar
  setLevelBar(user, enemy);
  //set theme and look of enemy
  setLevelStyle(enemyContainer, enemy);

  //damage enemy by clicking
  function handelClick() {
    //decrease enemy`s health
    enemy.damage();
    //increase user score
    user.score++;
    //set changed values to level bar
    enemyHP.innerHTML = enemy.getHP();
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

//go to next level
function nextLevel(user, enemy) {
  if (enemies[enemies.length] != enemy) {
    //create notice of winning
    userResult(user.score);

    document.getElementById('nextLevel').onclick = () => {
      //remove user result
      removeWinDiv();
      //create level with new enemy
      currentLevel(user, enemy);
    };
  } else {
    //go to end page of game
    nextPage('levelContainer', 'gameEnd');
    document.getElementById('userTotalScore').innerHTML = user.score;
  }
}
