(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.css":
/*!***********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".socialMedia::after {\n    content: \"\";\n    clear: both;\n    display: table;\n}\n.column {\n    float: left;\n    padding: 5px;\n    margin-left:auto;\n    margin-right:auto;\n}\n.linkedin{\n    height:400px;\n    width:400px;\n}\n.github{\n    height:400px;\n    width:400px;\n}\n.dulguun{\n    height:400px;\n    width:300px;\n}"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutme/aboutme.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar routerLink='/basicInfo' color=\"basic\">\n        <button mat-fab >Dulguun</button>\n        <button routerLink='/aboutme' mat-button>About me</button>\n        <button mat-button>Contact</button>\n        <button mat-button>Blog</button>\n</mat-toolbar>\n<div class=\"jumbotron\">\n    <h1 class=\"display-4\">Hello there!</h1>\n    <p class=\"lead\">My Name is Dulguun. I am currently pursuing a Bachelor degree of Computer science at Eötvös Loránd University.</p>\n    ​<picture>\n    <img src=\"assets/a2/Dulguun.jpg\"  class=\"img-fluid dulguun\">\n    </picture>\n    <hr class=\"my-4\">\n    <p class=\"lead\" >I build websites and web-services. I am well versed with modern-web technologies. I can build and deploy mid-sized web-application in MEAN and LAMP stacks. </p>\n    <h2> You can check out my LinkedIn and Github account! </h2>    \n      <div class=\"socialMedia\">\n        <div class=\"column\">\n          <a target='_blank'  href=\"https://www.linkedin.com/in/dulguun-bold-b6004a112/\">\n          <img class=\"img-fluid linkedin rounded mx-auto d-block\" alt=\"linkedin logo\" src=\"assets/a2/linkedin.png\">\n          </a>\n        </div>\n        <div class=\"column\">\n          <a target='_blank' href=\"https://github.com/dulguunb\">\n            <img class=\"img-fluid github rounded mx-auto d-block\"  alt=\"github logo\" src=\"assets/a2/github.png\">\n          </a>\n        </div>\n      </div>\n      <hr class=\"my-4\">\n      <div class=\"Experience\">\n        <h2>Working experiences:</h2>\n          <ul>\n          <li>Junior C++ developer at <a href=\"https://asuratechnologies.com/\"> Asura </a>in 2017 in Budapest</li>\n          <li>Intern at <a href=\"http://ericsson.com/\">Ericsson</a> ETH from 2018 - Present</li>\n          </ul>\n      </div>\n      <hr class=\"my-4\">\n      <div class=\"University-Experience\">\n        <h2>Academic:</h2>\n        <p>\n        I studied software engineering at National University of Mongolia for two years. I got transfered to Eötvös Loránd University in Budapest.\n        During my time at National University of Mongolia. I have completed a project called BUS-Project which is a web-based application that finds bus-routes in capital city Ulaanbaatar.\n        </p>\n        <p>\n         I am also working on research project called \"smart house\" at my current university.\n        </p>\n      </div>\n      <hr class=\"my-4\">\n      <div class=\"Technologies\">\n        <h2> Skills: </h2>\n        <p>I am well versed with following technologies,frameworks,tools and languages: \n          <ul>\n            <li>C++[QT]</li>\n            <li>Java[JavaFx,JPA,Android-studio]</li>\n            <li>Javascript[Nodejs,Angular] including ES5 and ES6</li>\n            <li>NPM (package manager for javascript) </li>\n            <li>PHP7</li>\n            <li>Python3 [Flask - for web development]</li>\n            <li> Python3 for general scripting </li>\n          </ul> \n      </div>     \n      <hr class=\"my-4\"> \n      <p>I also do freelance work for building web-sites , if you would like to work with me contact me via: bolddulguun2 at gmail dot com</p>\n    </div>"

/***/ }),

/***/ "./src/app/aboutme/aboutme.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutmeComponent = /** @class */ (function () {
    function AboutmeComponent() {
    }
    AboutmeComponent.prototype.ngOnInit = function () {
        this.tiles = [
            { title: 'About Me', content: 'Hi, My Name is Dulguun', image: 'https://scontent.fuln7-1.fna.fbcdn.net/v/t1.0-9/27459330_558321701193384_1684160613539778627_n.jpg?_nc_cat=0&oh=b9c0f7e97190c4d6b5904c7c6f9b5778&oe=5BD7400C' },
        ];
    };
    AboutmeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutme',
            template: __webpack_require__(/*! ./aboutme.component.html */ "./src/app/aboutme/aboutme.component.html"),
            styles: [__webpack_require__(/*! ./aboutme.component.css */ "./src/app/aboutme/aboutme.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutmeComponent);
    return AboutmeComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basic-info/basic-info.component */ "./src/app/basic-info/basic-info.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_1__["BasicInfoComponent"] },
    { path: 'basicInfo', component: _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_1__["BasicInfoComponent"] },
    { path: 'aboutme', component: _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_3__["AboutmeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic-info/basic-info.component */ "./src/app/basic-info/basic-info.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./aboutme/aboutme.component */ "./src/app/aboutme/aboutme.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_5__["BasicInfoComponent"],
                _aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_11__["AboutmeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            ],
            exports: [
                _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/basic-info/basic-info.component.css":
/*!*****************************************************!*\
  !*** ./src/app/basic-info/basic-info.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dulguun-astronaut{\n    height:90%;\n    position:relative;\n}\n.tile-title{\n    text-align:center;\n}\n.tile-texts{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/basic-info/basic-info.component.html":
/*!******************************************************!*\
  !*** ./src/app/basic-info/basic-info.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar  color=\"basic\">\n  <button mat-fab >Dulguun</button>\n  <button routerLink='/aboutme' mat-button>About me</button>\n  <button mat-button>Contact</button>\n  <button mat-button>Blog</button>\n</mat-toolbar>\n\n<div (scroll)=\"onScroll($event)\">\n<mat-grid-list cols=\"1\" rowHeight=\"300px\">\n\n  <mat-grid-tile\n    *ngFor=\"let tile of tiles\"\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [ngStyle]=\"{\n        'background': 'url(' + tile.background + ')  no-repeat center center fixed',\n        'background-size': 'cover',\n        'color':'white',\n        'height': '60%',\n        'background-size': ' cover'\n        }\">\n  \n  <div \n    [ngStyle]=\"{\n    'height' :       '90%',\n    'position' :     'relative',\n    'margin-top' :   tile.top * yAxis * tile.direction + 'px',\n    'margin-left' :  tile.left * yAxis * tile.direction + 'px',\n    'margin-right':  tile.right * yAxis * tile.direction + 'px',\n    'margin-bottom': tile.bottom * yAxis * tile.direction + 'px'\n  }\">\n    <img \n    *ngFor=\"let image of tile.images\"\n    [ngStyle]=\"{\n      'height' : '90%'\n    }\" \n    class='dulguun-astronaut' [src]=\"image\"/>\n\n  </div>\n\n  <div class=\"text\" [ngStyle]=\"{\n    'color': 'white',\n    'z-index': '1',\n    'position': 'absolute'\n    \n  }\">\n  <mat-card>\n  <mat-card-title class=\"tile-title\"> {{tile.title}} </mat-card-title>\n    <mat-card-content *ngFor=\"let text of tile.texts\">\n        {{text}}\n    </mat-card-content>\n   </mat-card>\n  </div>\n  </mat-grid-tile>\n</mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/basic-info/basic-info.component.ts":
/*!****************************************************!*\
  !*** ./src/app/basic-info/basic-info.component.ts ***!
  \****************************************************/
/*! exports provided: BasicInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicInfoComponent", function() { return BasicInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicInfoComponent = /** @class */ (function () {
    function BasicInfoComponent() {
        this.yAxis = 30;
    }
    BasicInfoComponent.prototype.ngOnInit = function () {
        this.tiles = [
            { texts: [" I am glad you're here :)"], title: 'Hello World!',
                cols: 1,
                rows: 3,
                top: 4,
                left: 0,
                right: 0,
                bottom: 0,
                direction: -1,
                background: 'assets/a1/astr1-background.png',
                images: ['assets/a1/rocket1.png']
            },
            { title: 'Who is drifting into the space?',
                texts: ["Hi, My name is Dulguun. I am currently pursuing a Bachelor of Computer Science.",
                    "I'm fond of creating web/mobile/desktop applications. /The artworks are done by my lovely sister./"],
                cols: 1,
                rows: 3,
                top: 0,
                left: 1,
                right: 0,
                bottom: 0,
                direction: -1,
                background: 'assets/a1/astr1-background.png',
                images: [
                    'assets/a1/astr1-dulguun1.png',
                    'assets/a1/astr1-dulguun2.png'
                ]
            },
        ];
    };
    BasicInfoComponent.prototype.ngOnDestroy = function () {
    };
    BasicInfoComponent.prototype.onScroll = function (event) {
        if (event.pageY === undefined) {
            this.yAxis = event.path[1].scrollY; //for Chrome  
        }
        else {
            this.yAxis = (event.pageY); // for mozila
        }
        console.log(this.yAxis);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], BasicInfoComponent.prototype, "onScroll", null);
    BasicInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basic-info',
            template: __webpack_require__(/*! ./basic-info.component.html */ "./src/app/basic-info/basic-info.component.html"),
            styles: [__webpack_require__(/*! ./basic-info.component.css */ "./src/app/basic-info/basic-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BasicInfoComponent);
    return BasicInfoComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dulguun/GitHub/Portfolio/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map