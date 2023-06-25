/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./functions/enemies.js":
/*!******************************!*\
  !*** ./functions/enemies.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEnemies: () => (/* binding */ createEnemies)\n/* harmony export */ });\n//class for creating enemies\r\nclass Enemy {\r\n    constructor(img, bgImg, top, left) {\r\n      this.hp = randomNum();\r\n      this.img = img;\r\n      this.bgImg = bgImg;\r\n      this.top = top;\r\n      this.left = left;\r\n    }\r\n  \r\n    //get values\r\n    getHP() { return this.hp; }\r\n    getImg() { return this.img; }\r\n    getBgImg() { return this.bgImg; }\r\n    getTop() { return this.top; }\r\n    getLeft() { return this.left;}\r\n  \r\n    //set health\r\n    setHP(hp) { this.hp = hp; }\r\n  \r\n    //decrease health by one\r\n    damage() { this.hp--; }\r\n}\r\n  \r\n//get number between 1 and 20\r\nfunction randomNum() {\r\n    return Math.round(Math.random() * 20 + 1);\r\n}\r\n\r\n  //create array with enemies\r\nconst createEnemies = () => [\r\n    //(health, image of enemy, theme, position-top, position-left)\r\n    new Enemy('./images/tv.webp', './images/bg-tv.webp', '140px', '280px'),\r\n    new Enemy('./images/troop.webp', './images/bg-troop.webp', '100px', '300px'),\r\n    new Enemy('./images/ship.webp', './images/bg-ship.webp', '100px', '170px'),\r\n    new Enemy('./images/putin.webp', './images/bg-putin.webp', '15px', '320px'),\r\n    new Enemy('./images/moskov.webp', './images/bg-moskov.webp', '0px', '150px'),\r\n];\n\n//# sourceURL=webpack:///./functions/enemies.js?");

/***/ }),

/***/ "./functions/navigation.js":
/*!*********************************!*\
  !*** ./functions/navigation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   nextPage: () => (/* binding */ nextPage),\n/* harmony export */   removeWinDiv: () => (/* binding */ removeWinDiv)\n/* harmony export */ });\n//go to next page by changing css property display\r\nfunction nextPage(id, nextId) {\r\n  document.getElementById(`${id}`).style.display = 'none';\r\n  document.getElementById(`${nextId}`).style.display = 'block';\r\n}\r\n\r\n//remove container with current user result\r\nfunction removeWinDiv() {\r\n  let winDiv = document.getElementById('win-div');\r\n  //get container by id //remove from body\r\n  document.body.removeChild(winDiv);\r\n}\r\n\n\n//# sourceURL=webpack:///./functions/navigation.js?");

/***/ }),

/***/ "./functions/notification.js":
/*!***********************************!*\
  !*** ./functions/notification.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   userResult: () => (/* binding */ userResult)\n/* harmony export */ });\n/* harmony import */ var _styling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styling */ \"./functions/styling.js\");\n\r\n\r\n//create notification of pass level\r\nfunction userResult(score) {\r\n  //create container\r\n  const winDiv = document.createElement('div');\r\n  //add id\r\n  winDiv.setAttribute('id', 'win-div');\r\n  //add classes\r\n  winDiv.classList.add('container', 'center-position');\r\n  //add text and score\r\n  winDiv.innerHTML = `\r\n    <h2>Виграш!</h2>\r\n    <br/>\r\n    <p>Pахунок:${score}</p>\r\n    <input id=\"nextLevel\" class=\"btn\" type=\"button\" value=\"Наступний рівень\"/>\r\n    `;\r\n  //add container to page\r\n  document.body.appendChild(winDiv);\r\n  //change style for previous level\r\n  (0,_styling__WEBPACK_IMPORTED_MODULE_0__.setWinLevelStyle)();\r\n}\r\n\n\n//# sourceURL=webpack:///./functions/notification.js?");

/***/ }),

/***/ "./functions/styling.js":
/*!******************************!*\
  !*** ./functions/styling.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setLevelBar: () => (/* binding */ setLevelBar),\n/* harmony export */   setLevelStyle: () => (/* binding */ setLevelStyle),\n/* harmony export */   setWinLevelStyle: () => (/* binding */ setWinLevelStyle)\n/* harmony export */ });\n//get level-bar elements and set values\r\nfunction setLevelBar(user, enemy) {\r\n  //level, username, user score, health of enemy\r\n  document.getElementById('levelNum').innerHTML = Number(user.level + 1);\r\n  document.getElementById('user').innerHTML = user.name;\r\n  document.getElementById('score').innerHTML = user.score;\r\n  document.getElementById('enemyHP').innerHTML = enemy.getHP();\r\n}\r\n\r\n//add image of theme, enemy and position of enemy\r\nfunction setLevelStyle(enemyContainer, enemy) {\r\n  //set theme\r\n  document.getElementById('levelContainer').style.cssText = `\r\n    display: block;\r\n    background: url(${enemy.getBgImg()}); \r\n    filter: blur(0);\r\n    `;\r\n  //set enemy`s position\r\n  enemyContainer.style.cssText = `\r\n    top: ${enemy.getTop()};\r\n    left: ${enemy.getLeft()};\r\n    `;\r\n  //set enemy look\r\n  enemyContainer.setAttribute('src', `${enemy.getImg()}`);\r\n}\r\n\r\n//change level style when user won\r\nfunction setWinLevelStyle() {\r\n  //add bluring style to level\r\n  document.getElementById('levelContainer').style.filter = 'blur(1rem)';\r\n  //remove enemy from view\r\n  document.getElementById('enemy').setAttribute('src', '#');\r\n}\r\n\n\n//# sourceURL=webpack:///./functions/styling.js?");

/***/ }),

/***/ "./functions/userValidation.js":
/*!*************************************!*\
  !*** ./functions/userValidation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createUser: () => (/* binding */ createUser)\n/* harmony export */ });\n//inisialize user\r\nconst user = {\r\n  name: '',\r\n  email: '',\r\n  score: 0,\r\n  level: 0,\r\n};\r\n\r\n//cheking for empty inputs and valid email\r\nfunction isUserValid(name, email) {\r\n  return (\r\n    name.toString().trim() != '' &&\r\n    email.toString().match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9]+$/)\r\n  );\r\n}\r\n\r\n//manage error text\r\nfunction createError(valid) {\r\n  document.getElementById('userError').innerHTML = valid\r\n    ? ''\r\n    : 'Перевірте, чи поля заповнені, та правильність написання пошти';\r\n}\r\n\r\n//creating valid user\r\nfunction createUser() {\r\n  //getting values of inputs\r\n  const name = document.getElementById('userName').value;\r\n  const email = document.getElementById('userEmail').value;\r\n\r\n  //checking values\r\n  let valid = isUserValid(name, email);\r\n  //set error text\r\n  createError(valid);\r\n  //set values when validation is correct\r\n  if (valid) {\r\n    return { ...user, name, email };\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./functions/userValidation.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_enemies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/enemies */ \"./functions/enemies.js\");\n/* harmony import */ var _functions_userValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/userValidation */ \"./functions/userValidation.js\");\n/* harmony import */ var _functions_styling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/styling */ \"./functions/styling.js\");\n/* harmony import */ var _functions_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/navigation */ \"./functions/navigation.js\");\n/* harmony import */ var _functions_notification__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/notification */ \"./functions/notification.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n//global variable for user and enemies\r\nlet enemies = (0,_functions_enemies__WEBPACK_IMPORTED_MODULE_0__.createEnemies)();\r\nlet user = {};\r\n\r\n//add functional to buttons\r\n//start process of game\r\ndocument\r\n  .getElementById('btnGameStart')\r\n  .addEventListener('click', () => (0,_functions_navigation__WEBPACK_IMPORTED_MODULE_3__.nextPage)('gameStart', 'gameCreateUser'));\r\n\r\n//user validation\r\ndocument.getElementById('btnGameCreateUser').addEventListener('click', () => {\r\n  user = (0,_functions_userValidation__WEBPACK_IMPORTED_MODULE_1__.createUser)();\r\n  if(user) {\r\n   (0,_functions_navigation__WEBPACK_IMPORTED_MODULE_3__.nextPage)('gameCreateUser', 'gameRules'); \r\n  }\r\n});\r\n\r\n//start game after page with rules\r\ndocument.getElementById('btnGameRules').addEventListener('click', () => {\r\n  (0,_functions_navigation__WEBPACK_IMPORTED_MODULE_3__.nextPage)('gameRules', 'levelContainer');\r\n  //create first level\r\n  currentLevel(user, enemies[user.level]);\r\n});\r\n\r\n//create new game\r\ndocument.getElementById('btnGameEnd').addEventListener('click', () => {\r\n  //set initial values and create new enemies\r\n  user = {\r\n    ...user,\r\n    score: 0,\r\n    level: 0\r\n  }\r\n  enemies = (0,_functions_enemies__WEBPACK_IMPORTED_MODULE_0__.createEnemies)();\r\n  (0,_functions_navigation__WEBPACK_IMPORTED_MODULE_3__.nextPage)('gameEnd', 'gameStart');\r\n});\r\n\r\n//creating level\r\nfunction currentLevel(user, enemy) {\r\n  //create variables of user score, enemy health, enemy container\r\n  let score = document.getElementById('score');\r\n  let enemyHP = document.getElementById('enemyHP');\r\n  let enemyContainer = document.getElementById('enemy');\r\n\r\n  //set enemy health, username, score and level to level-bar\r\n  (0,_functions_styling__WEBPACK_IMPORTED_MODULE_2__.setLevelBar)(user, enemy);\r\n  //set theme and look of enemy\r\n  (0,_functions_styling__WEBPACK_IMPORTED_MODULE_2__.setLevelStyle)(enemyContainer, enemy);\r\n\r\n  //damage enemy by clicking\r\n  function handelClick() {\r\n    //decrease enemy`s health\r\n    enemy.damage();\r\n    //increase user score\r\n    user.score++;\r\n    //set changed values to level bar\r\n    enemyHP.innerHTML = enemy.getHP();\r\n    score.innerHTML = user.score;\r\n\r\n    if (enemy.getHP() == 0) {\r\n      //next level\r\n      user.level++;\r\n      //remove processing click\r\n      enemyContainer.removeEventListener('click', handelClick);\r\n      //create next level\r\n      nextLevel(user, enemies[user.level]);\r\n    }\r\n  }\r\n  //add processing click\r\n  enemyContainer.addEventListener('click', handelClick);\r\n}\r\n\r\n//go to next level\r\nfunction nextLevel(user, enemy) {\r\n  if (enemies[enemies.length] != enemy) {\r\n    //create notice of winning\r\n    (0,_functions_notification__WEBPACK_IMPORTED_MODULE_4__.userResult)(user.score);\r\n\r\n    document.getElementById('nextLevel').onclick = () => {\r\n      //remove user result\r\n      (0,_functions_navigation__WEBPACK_IMPORTED_MODULE_3__.removeWinDiv)();\r\n      //create level with new enemy\r\n      currentLevel(user, enemy);\r\n    };\r\n  } else {\r\n    //go to end page of game\r\n    (0,_functions_navigation__WEBPACK_IMPORTED_MODULE_3__.nextPage)('levelContainer', 'gameEnd');\r\n    document.getElementById('userTotalScore').innerHTML = user.score;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;