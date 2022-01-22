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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initial */ \"./src/modules/initial.js\");\n\r\n\r\n(0,_modules_initial__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction about(){\r\n    const div = document.createElement('div');\r\n    div.classList.add('about');\r\n\r\n    const h3 = document.createElement('h3');\r\n    h3.textContent='Información';\r\n\r\n    const p = document.createElement('p');\r\n    p.textContent = 'Atendemos en Quito/Cuenca/Ambato de 12H00 a 23H00 y en Guayaquil de 12H00 a 24H00 de lunes a domingo. Zona de reparto limitada. La garantía de 30 minutos o gratis aplica hasta su portería en órdenes hasta 4 productos que pasan por horno. La garantía de 30 minutos o gratis No aplica en Ambato y Cuenca. Las pizzas gratis no son cobradas a nuestros repartidores. Los precios pueden cambiar sin previo aviso. Precios válidos hasta el 31 de Diciembre del 2021.';\r\n\r\n    div.appendChild(h3);\r\n    div.appendChild(p);\r\n    return div;\r\n}\r\n\r\nfunction loadAbout(){\r\n    const main = document.getElementById('main');\r\n    main.textContent=''\r\n    main.appendChild(about());\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/about.js?");

/***/ }),

/***/ "./src/modules/content.js":
/*!********************************!*\
  !*** ./src/modules/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menuPizza = [\r\n    {\r\n        name: 'Pizza Pepperoni Lovers',\r\n        img : 'https://images.pizzahut.services/vol/phec/images/content/productos/ppel_d.jpg'\r\n    },\r\n    {\r\n        name: 'Pizza Hawaiana Lovers',\r\n        img : 'https://images.pizzahut.services/vol/phec/images/content/productos/phyl_d.jpg'\r\n    },\r\n    {\r\n        name: 'Pizza Veggie Lovers',\r\n        img : 'https://images.pizzahut.services/vol/phec/images/content/productos/pvel_d.jpg'\r\n    },\r\n    {\r\n        name: 'Pizza Meat Suprema',\r\n        img : 'https://images.pizzahut.services/vol/phec/images/content/productos/pmes_d.jpg'\r\n    },\r\n    {\r\n        name: 'Pizza Chicken BBQ Suprema',\r\n        img : 'https://images.pizzahut.services/vol/phec/images/content/productos/pcbs_d.jpg'\r\n    },\r\n    {\r\n        name: 'Pizza Suprema',\r\n        img : 'https://images.pizzahut.services/vol/phec/images/content/productos/psup_d.jpg'\r\n    }\r\n]\r\n\r\nfunction cellPizza(p){\r\n    let pizza = document.createElement('div');\r\n    pizza.classList.add('pizza');\r\n    let h3 = document.createElement('h3');\r\n    h3.textContent = p.name;\r\n    let img = document.createElement('img');\r\n    img.classList.add('imgPizza');\r\n    img.setAttribute('src', p.img);\r\n    pizza.appendChild(h3);\r\n    pizza.appendChild(img);\r\n\r\n    return pizza;\r\n}\r\n\r\nfunction gridPizzas (){\r\n    const divGrid = document.createElement('div');\r\n    divGrid.classList.add('menuGrid');\r\n        \r\n    for(let i of menuPizza){\r\n        const pizza = cellPizza(i);\r\n        divGrid.appendChild(pizza); \r\n    }\r\n    return divGrid;\r\n}\r\n\r\nfunction loadContent(){\r\n    const main = document.getElementById('main');\r\n    main.textContent = \"\";\r\n    const div = document.createElement('div');\r\n    div.appendChild(gridPizzas());\r\n\r\n    main.appendChild(div);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContent);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/content.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction messageHome(){\r\n    const divTitle = document.createElement('div');\r\n    divTitle.classList.add('titleHome');\r\n    const i = document.createElement('i');\r\n    i.classList.add('fa-pizza-slice');\r\n    i.classList.add('fas');\r\n    const h2 = document.createElement('h2');\r\n    h2.textContent = \"Si tienes hambre y quieres comer una deliciosa pizza, Mou´s pizza es la mejor opción. \"\r\n\r\n    \r\n\r\n    divTitle.appendChild(i);\r\n    divTitle.appendChild(h2);\r\n    return divTitle;\r\n}\r\n\r\n\r\nfunction loadHome(){\r\n    const main = document.getElementById('main');\r\n    main.textContent = \"\";\r\n    const div = document.createElement('div');\r\n    div.classList.add('home');\r\n\r\n    const img = document.createElement('img');\r\n    img.setAttribute('src','./images/pizzaHome.svg');\r\n\r\n    div.appendChild(messageHome());\r\n    div.appendChild(img)\r\n    main.appendChild(div);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/initial.js":
/*!********************************!*\
  !*** ./src/modules/initial.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/modules/home.js\");\n/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content */ \"./src/modules/content.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/modules/about.js\");\n\r\n\r\n\r\n\r\n\r\nfunction createHeader(){\r\n    const header = document.createElement('header');\r\n    header.classList.add('header');\r\n    header.innerHTML = `\r\n        <div class=\"title\">\r\n            <h1>Mou´sPizza</h1>\r\n            <i class=\"fas fa-pizza-slice\"></i>\r\n        </div>\r\n    `\r\n    const nav = createNav();\r\n    header.appendChild(nav);\r\n\r\n    return header;\r\n}\r\n\r\nfunction createNav(){\r\n    const nav = document.createElement('nav');\r\n    nav.classList.add('nav');\r\n    const buttonHome = document.createElement('button');\r\n    buttonHome.textContent= 'Home';\r\n    buttonHome.addEventListener('click',(e)=>{\r\n        \r\n        if(e.target.classList.contains('active')) return;\r\n        setActiveButton(buttonHome);\r\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    })\r\n\r\n    const buttonContent = document.createElement('button');\r\n    buttonContent.textContent = 'Content';\r\n    buttonContent.addEventListener('click',(e)=>{\r\n        \r\n        if(e.target.classList.contains('active')) return;\r\n        setActiveButton(buttonContent);\r\n        (0,_content__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n    })\r\n\r\n    const buttonAbout = document.createElement('button');\r\n    buttonAbout.textContent= 'About';\r\n    buttonAbout.addEventListener('click',(e)=>{\r\n        \r\n        if(e.target.classList.contains('active')) return;\r\n        setActiveButton(buttonAbout);\r\n        (0,_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\r\n    })\r\n    \r\n    nav.appendChild(buttonHome);\r\n    nav.appendChild(buttonContent);\r\n    nav.appendChild(buttonAbout);\r\n\r\n    return nav\r\n}\r\n\r\nfunction createMain(){\r\n    const main = document.createElement('div');\r\n    main.id = 'main';\r\n    main.classList.add('main');\r\n    return main;\r\n}\r\n\r\nfunction setActiveButton(button) {\r\n    const buttons = document.querySelectorAll(\".nav button\");\r\n  \r\n    buttons.forEach((button) => {\r\n      if (button !== this) {\r\n        button.classList.remove('active');\r\n      }\r\n    }); \r\n  \r\n    button.classList.add(\"active\");\r\n  }\r\n\r\n  function createFooter(){\r\n      const footer = document.createElement('footer')\r\n      footer.classList.add('footer');\r\n      footer.style.backgroundColor='reb'\r\n      footer.innerHTML= `\r\n        <p>Copyright © 2021 ZevaGuillo</p>\r\n        <a href=\"https://github.com/ZevaGuillo\">\r\n            <i class=\"fab fa-github\" aria-hidden=\"true\"></i>\r\n        </a>\r\n      `\r\n      return footer;\r\n  }\r\n\r\nfunction initialPage(){\r\n    const content = document.getElementById('content');\r\n\r\n    content.appendChild(createHeader());\r\n    content.appendChild(createMain())\r\n    content.appendChild(createFooter());\r\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialPage);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initial.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
