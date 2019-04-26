(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["buffer-buffer-module"],{

/***/ "./src/app/entry-admin/buffer/buffer-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/entry-admin/buffer/buffer-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: BufferRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferRoutingModule", function() { return BufferRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _buffer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buffer.component */ "./src/app/entry-admin/buffer/buffer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _buffer_component__WEBPACK_IMPORTED_MODULE_2__["BufferComponent"] }
];
var BufferRoutingModule = /** @class */ (function () {
    function BufferRoutingModule() {
    }
    BufferRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], BufferRoutingModule);
    return BufferRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-admin/buffer/buffer.component.html":
/*!**********************************************************!*\
  !*** ./src/app/entry-admin/buffer/buffer.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/entry-admin/buffer/buffer.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/entry-admin/buffer/buffer.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudHJ5LWFkbWluL2J1ZmZlci9idWZmZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/entry-admin/buffer/buffer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/entry-admin/buffer/buffer.component.ts ***!
  \********************************************************/
/*! exports provided: BufferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferComponent", function() { return BufferComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BufferComponent = /** @class */ (function () {
    function BufferComponent(router) {
        this.router = router;
    }
    BufferComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { _this.router.navigate(['/', 'a']); });
    };
    BufferComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buffer',
            template: __webpack_require__(/*! ./buffer.component.html */ "./src/app/entry-admin/buffer/buffer.component.html"),
            styles: [__webpack_require__(/*! ./buffer.component.scss */ "./src/app/entry-admin/buffer/buffer.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BufferComponent);
    return BufferComponent;
}());



/***/ }),

/***/ "./src/app/entry-admin/buffer/buffer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/entry-admin/buffer/buffer.module.ts ***!
  \*****************************************************/
/*! exports provided: BufferModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferModule", function() { return BufferModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _buffer_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buffer-routing.module */ "./src/app/entry-admin/buffer/buffer-routing.module.ts");
/* harmony import */ var _buffer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buffer.component */ "./src/app/entry-admin/buffer/buffer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BufferModule = /** @class */ (function () {
    function BufferModule() {
    }
    BufferModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _buffer_routing_module__WEBPACK_IMPORTED_MODULE_2__["BufferRoutingModule"]
            ],
            declarations: [
                _buffer_component__WEBPACK_IMPORTED_MODULE_3__["BufferComponent"]
            ]
        })
    ], BufferModule);
    return BufferModule;
}());



/***/ })

}]);
//# sourceMappingURL=buffer-buffer-module.js.map