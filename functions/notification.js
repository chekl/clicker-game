import { setWinLevelStyle } from './styling';

//create notification of pass level
export function userResult(score) {
  //create container
  const winDiv = document.createElement('div');
  //add id
  winDiv.setAttribute('id', 'win-div');
  //add classes
  winDiv.classList.add('container', 'center-position');
  //add text and score
  winDiv.innerHTML = `
    <h2>Виграш!</h2>
    <br/>
    <p>Pахунок:${score}</p>
    <input id="nextLevel" class="btn" type="button" value="Наступний рівень"/>
    `;
  //add container to page
  document.body.appendChild(winDiv);
  //change style for previous level
  setWinLevelStyle();
}
