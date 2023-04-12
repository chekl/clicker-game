const user = {
    name: '',
    score: 0,
    level: 0
}

function nextPage(id, nextId) {
    document.getElementById(`${id}`).style.display = "none";
    document.getElementById(`${nextId}`).style.display = "block";
}

function isUserValid(name, email) {
    return name != '' && 
           email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/) 
           ? true : false;
}

function createUser() {
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;

  const validation = isUserValid(userName, userEmail)

  if(validation) {
    user.name = userName;
    nextPage('gameCreateUser','gameRules');
  } else {
    document.getElementById("userError").innerHTML = "Перевірте чи поля заповнені <br/> та правильність написання пошти";
  }
}

class Enemy {
    constructor(hp, img, bgImg, width, height, top, left) {
        this.hp = hp;
        this.img = img;
        this.bgImg = bgImg;
        this.width = width;
        this.height = height;
        this.top = top;
        this.left = left;
    }

    getHP() { return this.hp; }
    getImg() { return this.img; }
    getBgImg() { return this.bgImg; }
    getWidth() { return this.width; }
    getHeight() { return this.height; }
    getTop() { return this.top; }
    getLeft() { return this.left; }

    damage() { this.hp--; } 
}

let enemy1 = new Enemy(5, './images/tv.png', './images/bg-tv.jpg', "150px", "120px", "140px", "280px");
let enemy2 = new Enemy(10, './images/troop.png', './images/bg-troop.jpg', "150px", "300px", "100px", "300px");
let enemy3 = new Enemy(15, './images/ship.png', './images/bg-ship.jpg', "450px", "300px", "100px", "170px");
let enemy4 = new Enemy(20, './images/putin.png', './images/bg-putin.jpeg', "175px", "250px", "15px", "320px");
let enemy5 = new Enemy(1, './images/moskov.png', './images/bg-moskov.jpg', "450px", "350px", "0px", "150px");

const enemies = [
    enemy1,
/*     enemy2,
    enemy3, */
    enemy4,
    enemy5
  ];

function level(user, enemy) {
    document.getElementById('levelNum').innerHTML = "Рівень:" + Number(user.level + 1);
    document.getElementById('user').innerHTML = "Ім'я:" + user.name;
    let score = document.getElementById('score');
    let enemyHP = document.getElementById('enemyHP');
    let enemyDiv = document.getElementById('enemy');
    score.innerHTML = "Рахунок:" + user.score;
    enemyHP.innerHTML = "Здоров'я:" + enemy.getHP();

    document.getElementById('level-container').style.background = `url(${enemy.getBgImg()})`;
    enemyDiv.style.cssText = `
    background: url(${enemy.getImg()});
    background-size: cover;
    top: ${enemy.getTop()};
    left: ${enemy.getLeft()};
    height: ${enemy.getHeight()};
    width: ${enemy.getWidth()};
  `;

    function cliker() {
                enemy.damage();
        user.score = user.score + 1;
        enemyHP.innerHTML = "Здоров'я:" + enemy.getHP();
        score.innerHTML = "Рахунок:" + user.score;
        if(enemy.getHP() == 0) {
            user.level++;
            alert("Вітаю, Ви виграли!");
            enemyDiv.removeEventListener("click", cliker)
            level(user, enemies[user.level])
        }
    }


    enemyDiv.addEventListener("click", cliker)
}

document.getElementById('startBtn').addEventListener("click", function(){
    nextPage('gameRules','level-container')
    level(user, enemy1)
})