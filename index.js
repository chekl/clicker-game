const user = {
    name: '',
    score: 0
}

function u() {
    var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
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
  } else {
    document.getElementById("userError").innerHTML = "Перевірте чи поля заповнені та правильність написання пошти";
  }
}

class Enemy {
    constructor(name, hp, level, img, bgImg) {
        this.name = name;
        this.hp = hp;
        this.level = level;
        this.img = img;
        this.bgImg = bgImg;
    }

    getLevel() {
        return this.level;
    }

    getHP() {
        return this.hp;
    }

    getName() {
        return this.name;
    }

    getBgImg() {
        return this.bgImg;
    }

    damage() {
        this.hp--;
    } 

    move() {

    }
}

let TV = new Enemy('TV', 5, 1, './images/tv.png', './images/bg-tv.jpg');

function level(user, enemy) {
    document.getElementById('user').innerHTML = user.name;
    document.getElementById('score').innerHTML = user.score;
    document.getElementById('levelNum').innerHTML = enemy.getLevel();
    document.getElementById('enemyHP').innerHTML = enemy.getHP();

    document.getElementById('levelContainer').style.background = `url(${enemy.getBgImg()})`;
}

level(user, TV)