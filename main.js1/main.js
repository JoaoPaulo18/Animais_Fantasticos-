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

/***/ "./js/Modules/Accordion.js":
/*!*********************************!*\
  !*** ./js/Modules/Accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion{\r\n  constructor(list){\r\n    this.quests = document.querySelectorAll(list);\r\n    this.activeClass = 'ativo';\r\n  }\r\n\r\n   handleClick(item){\r\n   item.classList.toggle(this.activeClass);\r\n   item.nextElementSibling.classList.toggle(this.activeClass)\r\n  }\r\n\r\n  // Add event listener at the quests\r\n  addAccordionEvent(){\r\n    this.quests.forEach(quest =>{\r\n      quest.addEventListener('click',() => this.handleClick(quest))\r\n    })\r\n  }\r\n  //Start function\r\n  init(){\r\n    if(this.quests.length){\r\n      //Init first item\r\n      this.handleClick(this.quests[0])\r\n      this.addAccordionEvent();\r\n    }\r\n    return this;\r\n  }\r\n\r\n}\r\n\n\n//# sourceURL=webpack://projeto-javascript/./js/Modules/Accordion.js?");

/***/ }),

/***/ "./js/Modules/Anima-numeros.js":
/*!*************************************!*\
  !*** ./js/Modules/Anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AnimNum)\n/* harmony export */ });\nclass AnimNum {\r\n  constructor(elements,Target,Class){\r\n    this.numeros = document.querySelectorAll(elements);\r\n    this.observeTarget = document.querySelector(Target);\r\n    this.observer;\r\n    this.observerClass = Class;\r\n    this.animaNumeros = this.animaNumeros.bind(this);\r\n    this.handleMutation = this.handleMutation.bind(this);\r\n  } \r\n\r\n  //Recebe um elemento do dom, com número em seu texto\r\n  //incrementa a partir de 0 até o número final\r\n static incremetarNumber(numero){\r\n    const total = +numero.innerHTML\r\n    const incremento = Math.floor(total / 100);\r\n    let soma  = 0;\r\n    numero.innerHTML = 0;\r\n\r\n    const Interval = setInterval(()=>{\r\n        soma += incremento;\r\n        numero.innerHTML = soma;\r\n        if(soma >= total){\r\n          numero.innerHTML = total;\r\n          clearInterval(Interval);\r\n        }\r\n    },25 * Math.random())\r\n  }\r\n\r\n  //Ativa incrementar número para cada\r\n  //número selecionado no DOM\r\n   animaNumeros(){\r\n    this.numeros.forEach(number => this.constructor.incremetarNumber(number))\r\n}\r\n\r\n handleMutation(mutation){\r\n  if(mutation[0].target.classList.contains(this.observerClass)){\r\n  this.observer.disconnect();\r\n  this.animaNumeros();\r\n}\r\n}\r\n\r\n  init(){\r\n    if(this.numeros.length && this.observeTarget && this.observerClass){\r\n      this.observer = new MutationObserver(this.handleMutation);\r\n      this.observer.observe(this.observeTarget, { attributes: true });\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto-javascript/./js/Modules/Anima-numeros.js?");

/***/ }),

/***/ "./js/Modules/FetchAnimais.js":
/*!************************************!*\
  !*** ./js/Modules/FetchAnimais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Fecth)\n/* harmony export */ });\n/* harmony import */ var _Anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Anima-numeros.js */ \"./js/Modules/Anima-numeros.js\");\n\r\n\r\nfunction Fecth(){\r\n    function createAnimal(Animal){\r\n      const div = document.createElement('div');\r\n      div.classList.add('numero-animal');\r\n      div.innerHTML = `<h3>${Animal.especie}</h3><span data-numero>${Animal.quantidade}</span>`;\r\n      return div;\r\n    }\r\n\r\n    async function FecthAnimal(url){\r\n      try{\r\n        const animaisResponse = await fetch(url);\r\n        const animaisJSON = await animaisResponse.json();\r\n        const numerosGrid = document.querySelector('.numeros-grid');\r\n        animaisJSON.forEach(animal => {\r\n          const divAnimal = createAnimal(animal);\r\n          numerosGrid.appendChild(divAnimal);\r\n        })\r\n        const animaNumeros = new _Anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"[data-numero]\",\".numeros\",'ativo');\r\n        animaNumeros.init();\r\n      }catch(erro){\r\n        console.log(erro)\r\n      }\r\n    }\r\n    FecthAnimal('.././Animais.json');\r\n}\n\n//# sourceURL=webpack://projeto-javascript/./js/Modules/FetchAnimais.js?");

/***/ }),

/***/ "./js/Modules/InitFetchBitcoin.js":
/*!****************************************!*\
  !*** ./js/Modules/InitFetchBitcoin.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FetchBitcoin)\n/* harmony export */ });\nfunction FetchBitcoin() {\r\n  fetch(\"https://blockchain.info/ticker\")\r\n.then(Response => Response.json())\r\n.then(Response => {\r\n  const btcPreco = document.querySelector(\".btcPreco\");\r\n\r\nbtcPreco.innerHTML = (1000 / Response.BRL.sell).toFixed(4);\r\n})\r\n}\r\n\n\n//# sourceURL=webpack://projeto-javascript/./js/Modules/InitFetchBitcoin.js?");

/***/ }),

/***/ "./js/Modules/Outside.js":
/*!*******************************!*\
  !*** ./js/Modules/Outside.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outsideClick)\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const outside = \"data-outside\";\r\n\r\nif(!element.hasAttribute(outside)){\r\n  events.forEach(()=>{\r\n    setTimeout(()=>{\r\n      html.addEventListener('click',HandleClickOutside);\r\n    },0)\r\n  })\r\n  element.setAttribute(outside,'');\r\n}\r\n  function HandleClickOutside(event){\r\n    if(!element.contains(event.target)){\r\n      element.removeAttribute(outside);\r\n      events.forEach((userEvent) => {\r\n        html.removeEventListener(userEvent, HandleClickOutside);\r\n      });\r\n      callback();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://projeto-javascript/./js/Modules/Outside.js?");

/***/ }),

/***/ "./js/Modules/Tabnavigation.js":
/*!*************************************!*\
  !*** ./js/Modules/Tabnavigation.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TabNav)\n/* harmony export */ });\nclass TabNav{\r\n  constructor(tabLi, tabcontents){\r\n    this.tabMenu = document.querySelectorAll(tabLi);\r\n    this.tabContent = document.querySelectorAll(tabcontents);\r\n  }\r\n\r\n  //Mudando texto ao clique\r\n    changeText(index) {\r\n        this.tabContent.forEach((text) => {\r\n        text.classList.remove(\"ativo\");\r\n      });\r\n      const direction = this.tabContent[index].dataset.anim;\r\n      this.tabContent[index].classList.add(\"ativo\", direction);\r\n    }\r\n\r\n    //Iniciar TabNav\r\n    init(){\r\n      //Acionando o primeiro texto da lista\r\n      this.tabContent[0].classList.add(\"ativo\", this.tabContent[0].dataset.anim);\r\n      this.tabMenu.forEach((item, index) => {\r\n        item.addEventListener(\"click\", () => {\r\n          this.changeText(index);\r\n        });   \r\n      });\r\n      return this;\r\n  }\r\n  \r\n}\r\n\n\n//# sourceURL=webpack://projeto-javascript/./js/Modules/Tabnavigation.js?");

/***/ }),

/***/ "./js/Modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/Modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropdownMenu)\n/* harmony export */ });\n/* harmony import */ var _Outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Outside.js */ \"./js/Modules/Outside.js\");\n   \r\nfunction initDropdownMenu() {\r\n  const dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\r\n\r\ndropdownMenus.forEach(drop =>{\r\n  ['touchstart','click'].forEach(event => drop.addEventListener(event,HandleClick))\r\n})\r\n\r\nfunction HandleClick(event){\r\n  event.preventDefault();\r\n  this.classList.toggle('active');\r\n  (0,_Outside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this,['touchstart','click'], ()=> this.classList.remove('active'))\r\n}\r\n}\r\n\n\n//# sourceURL=webpack://projeto-javascript/./js/Modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/Modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/Modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\r\n  const funcionamento = document.querySelector(\"[data-semana]\");\r\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\r\n  const horarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\r\n\r\n    const newDate = new Date();\r\n    const Days = newDate.getDay();\r\n    const Hour = newDate.getHours();\r\n  \r\n    const DateCorrect = diasSemana.indexOf(Days) != -1;\r\n    const HoursCorrect = Hour > 8 && Hour <= 18;\r\n\r\n    if(DateCorrect && HoursCorrect)\r\n    funcionamento.classList.add(\"aberto\");\r\n}\n\n//# sourceURL=webpack://projeto-javascript/./js/Modules/funcionamento.js?");

/***/ }),

/***/ "./js/Modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/Modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menumobile)\n/* harmony export */ });\n/* harmony import */ var _Outside_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Outside.js */ \"./js/Modules/Outside.js\");\n\r\nclass Menumobile {\r\n  constructor(Menubutton,menuList,events){    \r\n    this.Menubutton = document.querySelector(Menubutton);\r\n    this.menuList = document.querySelector(menuList);\r\n    this.eventos = events;\r\n    this.HandleClick = this.HandleClick.bind(this);\r\n  }\r\n \r\n  HandleClick(){\r\n  this.Menubutton.classList.add('active');\r\n  this.menuList.classList.add('active');\r\n    (0,_Outside_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.menuList,this.eventos, ()=>{\r\n     this.Menubutton.classList.remove('active');\r\n     this.menuList.classList.remove('active');\r\n})\r\n}\r\n\r\ninit(){\r\n  if(this.Menubutton){ \r\n    this.eventos.forEach(event => this.Menubutton.addEventListener(event, this.HandleClick));\r\n  }\r\n  return this;\r\n}\r\n}\r\n\n\n//# sourceURL=webpack://projeto-javascript/./js/Modules/menu-mobile.js?");

/***/ }),

/***/ "./js/Modules/modal.js":
/*!*****************************!*\
  !*** ./js/Modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(botaoAbrir,botaoFechar,containerModal){\r\n    this.botaoAbrir = document.querySelector(botaoAbrir);\r\n    this.botaoFechar = document.querySelector(botaoFechar);\r\n    this.containerModal = document.querySelector(containerModal);\r\n\r\n    this.preventDefaulter = this.preventDefaulter.bind(this);\r\n    this.clickForaModal = this.clickForaModal.bind(this);\r\n  }\r\n\r\n  addEventListeners(){\r\n    this.botaoAbrir.addEventListener(\"click\", this.preventDefaulter);\r\n    this.botaoFechar.addEventListener(\"click\", this.preventDefaulter);\r\n    this.containerModal.addEventListener(\"click\", this.clickForaModal);\r\n  }\r\n\r\n    toggleClass(item,classe){\r\n      item.classList.toggle(classe)\r\n    }\r\n\r\n     preventDefaulter(event) {\r\n      event.preventDefault();\r\n      this.toggleClass(this.containerModal,'ativo');\r\n    }\r\n\r\n     clickForaModal(event) {\r\n      if (event.target === this.containerModal) this.preventDefaulter(event);\r\n    }\r\n\r\n    //Caso todos os items existam \r\n    //coloca EventListener nos mesmos\r\n    init(){\r\n      if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\r\n        this.addEventListeners();\r\n      }\r\n      return this;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://projeto-javascript/./js/Modules/modal.js?");

/***/ }),

/***/ "./js/Modules/scroll-animation.js":
/*!****************************************!*\
  !*** ./js/Modules/scroll-animation.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animationScroll)\n/* harmony export */ });\nclass animationScroll {\r\n  constructor(sections){\r\n    this.sections = document.querySelectorAll(sections);\r\n    this.animaScroll = this.animaScroll.bind(this)\r\n  }\r\n\r\nanimaScroll(){\r\n  //Pegando a metade da tela do usuário \r\n  const windowMetade = window.innerHeight * 0.6;\r\n    this.sections.forEach(section => {\r\n      //Pegando o quão longe \r\n      //está a section do topo\r\n      const sectionTop = section.getBoundingClientRect().top;\r\n      const isSectionVisible = sectionTop - windowMetade < 0;\r\n    if(isSectionVisible) section.classList.add('ativo');\r\n    })\r\n  }\r\n  \r\ninit(){\r\n  if(this.sections.length){\r\n  //Faz com que pelo menos a primeira section\r\n  //apareça sem haver scroll\r\n  this.animaScroll();\r\n  window.addEventListener('scroll', this.animaScroll);\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://projeto-javascript/./js/Modules/scroll-animation.js?");

/***/ }),

/***/ "./js/Modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/Modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tooltip)\n/* harmony export */ });\nclass Tooltip {\r\n  constructor(tooltips){\r\n    this.tooltips = document.querySelectorAll(tooltips);\r\n    this.MouseOver = this.MouseOver.bind(this);\r\n    this.MouseMove = this.MouseMove.bind(this);\r\n    this.MouseLeave = this.MouseLeave.bind(this);\r\n  }\r\n\r\n  //Inicia os eventos de mover o mouse e de retirar o cursor\r\n  MouseOver( {currentTarget} ){\r\n    this.CreateBox(currentTarget);\r\n    currentTarget.addEventListener('mousemove',this.MouseMove);\r\n    currentTarget.addEventListener('mouseleave',this.MouseLeave); \r\n  }\r\n\r\n  //É verificado toda vez que movermos o mouse\r\n  //a posição do cursor e é jogado para o top e left da Box\r\n  MouseMove(event){\r\n        this.box.style.top = event.pageY + 20 + 'px';\r\n  if(event.pageX + 200 > window.innerWidth){\r\n    this.box.style.left = event.pageX - 150 + 'px';\r\n      }else{\r\n          this.box.style.left = event.pageX + 20 + 'px';\r\n        }\r\n  }\r\n\r\n  MouseLeave(event){\r\n    this.box.remove();\r\n    event.currentTarget.removeEventListener('mousemove',this.MouseMove)\r\n    event.currentTarget.removeEventListener('mouseleave',this.MouseLeave)\r\n}\r\n\r\n//Cria uma nova Box com\r\n//O texto colocado dentro do elemento\r\n  CreateBox(element){\r\n    const box = document.createElement('div');\r\n    box.classList.add('tooltip');\r\n    box.innerHTML = element.getAttribute('aria-label');\r\n    document.body.appendChild(box);\r\n    this.box = box;\r\n  }\r\n\r\n  init(){\r\n    if(this.tooltips.length)\r\n    this.tooltips.forEach((tool) => tool.addEventListener(\"mouseover\",this.MouseOver));\r\n    return this;\r\n  }\r\n}\r\n/* - ------------------------------------- */\r\n\n\n//# sourceURL=webpack://projeto-javascript/./js/Modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modules/scroll-animation.js */ \"./js/Modules/scroll-animation.js\");\n/* harmony import */ var _Modules_Tabnavigation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/Tabnavigation.js */ \"./js/Modules/Tabnavigation.js\");\n/* harmony import */ var _Modules_modal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/modal.js */ \"./js/Modules/modal.js\");\n/* harmony import */ var _Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Modules/tooltip.js */ \"./js/Modules/tooltip.js\");\n/* harmony import */ var _Modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Modules/dropdown-menu.js */ \"./js/Modules/dropdown-menu.js\");\n/* harmony import */ var _Modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/menu-mobile.js */ \"./js/Modules/menu-mobile.js\");\n/* harmony import */ var _Modules_FetchAnimais__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Modules/FetchAnimais */ \"./js/Modules/FetchAnimais.js\");\n/* harmony import */ var _Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modules/funcionamento.js */ \"./js/Modules/funcionamento.js\");\n/* harmony import */ var _Modules_InitFetchBitcoin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Modules/InitFetchBitcoin.js */ \"./js/Modules/InitFetchBitcoin.js\");\n/* harmony import */ var _Modules_Accordion_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Modules/Accordion.js */ \"./js/Modules/Accordion.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst accordion = new _Modules_Accordion_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]('#faq dt');\r\naccordion.init();\r\n\r\nconst tabNav = new _Modules_Tabnavigation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('[data-tab=\"menu\"] li','[data-tab=\"content\"] section');\r\ntabNav.init();\r\n\r\nconst modal = new _Modules_modal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('[data-modal=\"abrir\"]','[data-modal=\"fechar\"]','[data-modal=\"container\"]')\r\nmodal.init();\r\n\r\nconst tooltip = new _Modules_tooltip_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"[data-tooltip]\");\r\ntooltip.init();\r\n\r\nconst scroll = new _Modules_scroll_animation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('[data-anime=\"scroll\"]')\r\nscroll.init();\r\n\r\nconst menuMobile = new _Modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-menu=\"button\"]','[data-menu=\"list\"]',[\"click\", \"touchstart\"])\r\nmenuMobile.init();\r\n\r\n(0,_Modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_Modules_FetchAnimais__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_Modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_Modules_InitFetchBitcoin_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\n\n//# sourceURL=webpack://projeto-javascript/./js/script.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;