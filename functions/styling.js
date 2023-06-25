//get level-bar elements and set values
export function setLevelBar(user, enemy) {
  //level, username, user score, health of enemy
  document.getElementById('levelNum').innerHTML = Number(user.level + 1);
  document.getElementById('user').innerHTML = user.name;
  document.getElementById('score').innerHTML = user.score;
  document.getElementById('enemyHP').innerHTML = enemy.getHP();
}

//add image of theme, enemy and position of enemy
export function setLevelStyle(enemyContainer, enemy) {
  //set theme
  document.getElementById('levelContainer').style.cssText = `
    display: block;
    background: url(${enemy.getBgImg()}); 
    filter: blur(0);
    `;
  //set enemy`s position
  enemyContainer.style.cssText = `
    top: ${enemy.getTop()};
    left: ${enemy.getLeft()};
    `;
  //set enemy look
  enemyContainer.setAttribute('src', `${enemy.getImg()}`);
}

//change level style when user won
export function setWinLevelStyle() {
  //add bluring style to level
  document.getElementById('levelContainer').style.filter = 'blur(1rem)';
  //remove enemy from view
  document.getElementById('enemy').setAttribute('src', '#');
}
