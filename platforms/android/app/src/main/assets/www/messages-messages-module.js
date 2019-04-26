(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"],{

/***/ "./src/app/common/core/module/material-doctor/messages-material.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/common/core/module/material-doctor/messages-material.module.ts ***!
  \********************************************************************************/
/*! exports provided: MessagesMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesMaterialModule", function() { return MessagesMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessagesMaterialModule = /** @class */ (function () {
    function MessagesMaterialModule() {
    }
    MessagesMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"]
            ]
        })
    ], MessagesMaterialModule);
    return MessagesMaterialModule;
}());



/***/ }),

/***/ "./src/app/common/shared/component/expand-messages-dialog/expand-messages-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/common/shared/component/expand-messages-dialog/expand-messages-dialog.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <p>{{ data.message }}</p>\r\n\r\n  <br>\r\n\r\n  <p>{{ data.from }}</p>\r\n  <p>{{ data.timestamp | timestamp }}</p>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/shared/component/expand-messages-dialog/expand-messages-dialog.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/common/shared/component/expand-messages-dialog/expand-messages-dialog.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  max-width: 500px; }\n  #wrapper p {\n    text-align: right;\n    margin: 0; }\n  #wrapper p:first-child {\n    text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvZXhwYW5kLW1lc3NhZ2VzLWRpYWxvZy9DOlxcVXNlcnNcXEtpcmFua3VtYXIgR29udGlcXERlc2t0b3BcXFByb2dyYW1taW5nLi5Xb3JsZFxcTWFqb3JQcm9qZWN0XFxIb3NwaXRhbC1EYXNoYm9hcmRcXEhvc3BpdGFsLURhc2hib2FyZC1BcHAvc3JjXFxhcHBcXGNvbW1vblxcc2hhcmVkXFxjb21wb25lbnRcXGV4cGFuZC1tZXNzYWdlcy1kaWFsb2dcXGV4cGFuZC1tZXNzYWdlcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLGlCQUFpQjtJQUNqQixTQUFTLEVBQUE7RUFMYjtJQVNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvZXhwYW5kLW1lc3NhZ2VzLWRpYWxvZy9leHBhbmQtbWVzc2FnZXMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3dyYXBwZXIge1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcblxyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBwOmZpcnN0LWNoaWxkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/common/shared/component/expand-messages-dialog/expand-messages-dialog.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/common/shared/component/expand-messages-dialog/expand-messages-dialog.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ExpandMessagesDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandMessagesDialogComponent", function() { return ExpandMessagesDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ExpandMessagesDialogComponent = /** @class */ (function () {
    function ExpandMessagesDialogComponent(data, dialog) {
        this.data = data;
        this.dialog = dialog;
    }
    ExpandMessagesDialogComponent.prototype.ngOnInit = function () {
    };
    ExpandMessagesDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expand-messages-dialog',
            template: __webpack_require__(/*! ./expand-messages-dialog.component.html */ "./src/app/common/shared/component/expand-messages-dialog/expand-messages-dialog.component.html"),
            styles: [__webpack_require__(/*! ./expand-messages-dialog.component.scss */ "./src/app/common/shared/component/expand-messages-dialog/expand-messages-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ExpandMessagesDialogComponent);
    return ExpandMessagesDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/pipe/timestampDoctor.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/common/shared/pipe/timestampDoctor.pipe.ts ***!
  \************************************************************/
/*! exports provided: TimestampPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimestampPipe", function() { return TimestampPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimestampPipe = /** @class */ (function () {
    function TimestampPipe() {
    }
    TimestampPipe.prototype.transform = function (unix, args) {
        var newDate = new Date(unix * 1000);
        var timestamp = moment__WEBPACK_IMPORTED_MODULE_1__(newDate).fromNow();
        return timestamp;
    };
    TimestampPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'timestamp'
        })
    ], TimestampPipe);
    return TimestampPipe;
}());



/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/messages/messages-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/messages/messages-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: MessagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesRoutingModule", function() { return MessagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages.component */ "./src/app/entry-doctor/dashboard-doctor/messages/messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _messages_component__WEBPACK_IMPORTED_MODULE_2__["MessagesComponent"] }
];
var MessagesRoutingModule = /** @class */ (function () {
    function MessagesRoutingModule() {
    }
    MessagesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], MessagesRoutingModule);
    return MessagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/messages/messages.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/messages/messages.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n\r\n    <mat-nav-list>\r\n\r\n      <mat-list-item *ngFor=\"let message of patientMessages | async\">\r\n        <span mat-line id=\"message\">{{ message?.message }}</span>\r\n        <span mat-line id=\"time\">{{ message?.timestamp | timestamp }} &nbsp;&nbsp;|&nbsp;&nbsp; {{ message?.from }}</span>\r\n        <button mat-icon-button (click)=\"expandMessages(message)\">\r\n          <mat-icon>fullscreen</mat-icon>\r\n        </button>\r\n      </mat-list-item>\r\n\r\n    </mat-nav-list>\r\n    \r\n    <div id=\"spinner\" *ngIf=\"isLoading\">\r\n      <mat-progress-spinner mode=\"indeterminate\" color=\"warn\"></mat-progress-spinner>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/messages/messages.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/messages/messages.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  margin-top: 30px;\n  padding: 5px 12px; }\n  .mat-card #spinner {\n    width: 100%;\n    display: flex; }\n  .mat-card #spinner .mat-progress-spinner {\n      margin: auto; }\n  .mat-card .mat-nav-list {\n    padding: 0; }\n  .mat-card .mat-nav-list #time {\n      color: #b3b3b3; }\n  .mat-card .mat-nav-list .mat-icon {\n      font-size: 2em;\n      -webkit-transform: translateX(-2px);\n              transform: translateX(-2px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktZG9jdG9yL2Rhc2hib2FyZC1kb2N0b3IvbWVzc2FnZXMvQzpcXFVzZXJzXFxLaXJhbmt1bWFyIEdvbnRpXFxEZXNrdG9wXFxQcm9ncmFtbWluZy4uV29ybGRcXE1ham9yUHJvamVjdFxcSG9zcGl0YWwtRGFzaGJvYXJkXFxIb3NwaXRhbC1EYXNoYm9hcmQtQXBwL3NyY1xcYXBwXFxlbnRyeS1kb2N0b3JcXGRhc2hib2FyZC1kb2N0b3JcXG1lc3NhZ2VzXFxtZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBQTtFQUZuQjtJQUtJLFdBQVc7SUFDWCxhQUFhLEVBQUE7RUFOakI7TUFTTSxZQUFZLEVBQUE7RUFUbEI7SUFjSSxVQUFVLEVBQUE7RUFkZDtNQWlCTSxjQUF5QixFQUFBO0VBakIvQjtNQXFCTSxjQUFjO01BQ2QsbUNBQTJCO2NBQTNCLDJCQUEyQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW50cnktZG9jdG9yL2Rhc2hib2FyZC1kb2N0b3IvbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWNhcmQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgcGFkZGluZzogNXB4IDEycHg7XHJcblxyXG4gICNzcGlubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAubWF0LXByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LW5hdi1saXN0IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgI3RpbWUge1xyXG4gICAgICBjb2xvcjogcmdiKDE3OSwgMTc5LCAxNzkpO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/messages/messages.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/messages/messages.component.ts ***!
  \******************************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_shared_component_expand_messages_dialog_expand_messages_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/shared/component/expand-messages-dialog/expand-messages-dialog.component */ "./src/app/common/shared/component/expand-messages-dialog/expand-messages-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(dialog, firestoreService) {
        this.dialog = dialog;
        this.firestoreService = firestoreService;
        this.isLoading = true;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firestoreService.getOnlineDoctor().subscribe(function (doctor) {
            if (doctor === undefined)
                return;
            _this.patientMessages = _this.firestoreService.getPatientMessages(doctor.fullname);
            _this.patientMessages.subscribe(function () { return (_this.isLoading = false); });
        });
    };
    MessagesComponent.prototype.expandMessages = function (message) {
        this.dialogRef = this.dialog.open(_common_shared_component_expand_messages_dialog_expand_messages_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ExpandMessagesDialogComponent"], { data: message });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/entry-doctor/dashboard-doctor/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/app/entry-doctor/dashboard-doctor/messages/messages.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/messages/messages.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/messages/messages.module.ts ***!
  \***************************************************************************/
/*! exports provided: MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _messages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messages-routing.module */ "./src/app/entry-doctor/dashboard-doctor/messages/messages-routing.module.ts");
/* harmony import */ var _common_core_module_material_doctor_messages_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/module/material-doctor/messages-material.module */ "./src/app/common/core/module/material-doctor/messages-material.module.ts");
/* harmony import */ var _messages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.component */ "./src/app/entry-doctor/dashboard-doctor/messages/messages.component.ts");
/* harmony import */ var _common_shared_component_expand_messages_dialog_expand_messages_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/shared/component/expand-messages-dialog/expand-messages-dialog.component */ "./src/app/common/shared/component/expand-messages-dialog/expand-messages-dialog.component.ts");
/* harmony import */ var _common_shared_pipe_timestampDoctor_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/shared/pipe/timestampDoctor.pipe */ "./src/app/common/shared/pipe/timestampDoctor.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MessagesModule = /** @class */ (function () {
    function MessagesModule() {
    }
    MessagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _messages_routing_module__WEBPACK_IMPORTED_MODULE_2__["MessagesRoutingModule"],
                _common_core_module_material_doctor_messages_material_module__WEBPACK_IMPORTED_MODULE_3__["MessagesMaterialModule"]
            ],
            declarations: [
                _messages_component__WEBPACK_IMPORTED_MODULE_4__["MessagesComponent"],
                _common_shared_component_expand_messages_dialog_expand_messages_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ExpandMessagesDialogComponent"],
                _common_shared_pipe_timestampDoctor_pipe__WEBPACK_IMPORTED_MODULE_6__["TimestampPipe"]
            ],
            entryComponents: [
                _common_shared_component_expand_messages_dialog_expand_messages_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ExpandMessagesDialogComponent"]
            ]
        })
    ], MessagesModule);
    return MessagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=messages-messages-module.js.map