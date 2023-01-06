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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://leaderboard-project/./src/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\nconst clientId = '106558cb9bed438da1dd5a61c7cf01dd';\nconst clienSecret = 'b4fd420bddfd49b7898748d73902eb20';\n\nconst getToken = async () => {\n  const result = await fetch(\"https://accounts.spotify.com/api/token\", {\n    method: \"POST\",\n    headers: {\n      \"Content-Type\": \"application/x-www-form-urlencoded\",\n      Authorization: \"Basic \" + btoa(clientId + \":\" + clienSecret),\n    },\n    body: \"grant_type=client_credentials\",\n  });\n\n  const data = await result.json();\n  return data.access_token;\n}\n\nconst getData = async (token) => {\n  const result = await fetch('https://api.spotify.com/v1/playlists/2bEVbGRbmxC7pwenhutQJu/tracks', {\n    method: 'GET',\n    headers: { 'Authorization': 'Bearer ' + token }\n  });\n  const data = await result.json();\n  // console.log(data);\n  return data;\n}\n\nconst getList = async (token) => {\n  const result = await fetch('https://api.spotify.com/v1/playlists/27Ry92QJXlch6Vsn6UxsVL/tracks', {\n    method: 'GET',\n    headers: { 'Authorization': 'Bearer ' + token }\n  });\n  const data = await result.json();\n  // console.log(data);\n  return data;\n}\n\nconst callData = async () => {\n  const token = await getToken();\n  getData(token)\n  const list = await getList(token)\nlet tracks =''\n  for (let index = 0; index < 100; index++) {\n    if(list.items[index].track.preview_url){\n        const image = list.items[index].track.album.images[0].url\n        const name = list.items[index].track.name\n        const prev = list.items[index].track.preview_url\n    \n        tracks += `<div class=\"track\"><img class=\"album_image\" src=\"${image}\" alt=\"img_${name}\"> <span>${name}</span> <video controls muted autoplay=\"disable\" name=\"track ${index}\" class=\"reproductor\"><source src=\"${prev}\" type=\"audio/mpeg\"></video></div>`\n    }\n  }\n\n  //console.log(list.items)\n  console.log(list.items)\n\n  document.getElementById('song').innerHTML = `${tracks}`\n}\n\ncallData();\n\n\n//# sourceURL=webpack://leaderboard-project/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;