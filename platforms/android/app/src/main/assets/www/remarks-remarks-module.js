(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["remarks-remarks-module"],{

/***/ "./src/app/common/core/module/material-patient/remarks-material.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/common/core/module/material-patient/remarks-material.module.ts ***!
  \********************************************************************************/
/*! exports provided: RemarksMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarksMaterialModule", function() { return RemarksMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RemarksMaterialModule = /** @class */ (function () {
    function RemarksMaterialModule() {
    }
    RemarksMaterialModule = __decorate([
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
    ], RemarksMaterialModule);
    return RemarksMaterialModule;
}());



/***/ }),

/***/ "./src/app/common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <p>{{ data.message }}</p>\r\n\r\n  <br>\r\n\r\n  <p>{{ data.from }}</p>\r\n  <p>{{ data.timestamp | timestamp }}</p>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  max-width: 500px; }\n  #wrapper p {\n    text-align: right;\n    margin: 0; }\n  #wrapper p:first-child {\n    text-align: left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvZXhwYW5kLXJlbWFya3MtZGlhbG9nL0M6XFxVc2Vyc1xcS2lyYW5rdW1hciBHb250aVxcRGVza3RvcFxcUHJvZ3JhbW1pbmcuLldvcmxkXFxNYWpvclByb2plY3RcXEhvc3BpdGFsLURhc2hib2FyZFxcSG9zcGl0YWwtRGFzaGJvYXJkLUFwcC9zcmNcXGFwcFxcY29tbW9uXFxzaGFyZWRcXGNvbXBvbmVudFxcZXhwYW5kLXJlbWFya3MtZGlhbG9nXFxleHBhbmQtcmVtYXJrcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQURsQjtJQUlJLGlCQUFpQjtJQUNqQixTQUFTLEVBQUE7RUFMYjtJQVNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvZXhwYW5kLXJlbWFya3MtZGlhbG9nL2V4cGFuZC1yZW1hcmtzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG5cclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgcDpmaXJzdC1jaGlsZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ExpandRemarksDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandRemarksDialogComponent", function() { return ExpandRemarksDialogComponent; });
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


var ExpandRemarksDialogComponent = /** @class */ (function () {
    function ExpandRemarksDialogComponent(data, dialog) {
        this.data = data;
        this.dialog = dialog;
    }
    ExpandRemarksDialogComponent.prototype.ngOnInit = function () {
    };
    ExpandRemarksDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-expand-remarks-dialog',
            template: __webpack_require__(/*! ./expand-remarks-dialog.component.html */ "./src/app/common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component.html"),
            styles: [__webpack_require__(/*! ./expand-remarks-dialog.component.scss */ "./src/app/common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ExpandRemarksDialogComponent);
    return ExpandRemarksDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/pipe/timestampPatient.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/common/shared/pipe/timestampPatient.pipe.ts ***!
  \*************************************************************/
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

/***/ "./src/app/entry-patient/dashboard-patient/remarks/remarks-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/remarks/remarks-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RemarksRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarksRoutingModule", function() { return RemarksRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _remarks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remarks.component */ "./src/app/entry-patient/dashboard-patient/remarks/remarks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _remarks_component__WEBPACK_IMPORTED_MODULE_2__["RemarksComponent"] }
];
var RemarksRoutingModule = /** @class */ (function () {
    function RemarksRoutingModule() {
    }
    RemarksRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RemarksRoutingModule);
    return RemarksRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/remarks/remarks.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/remarks/remarks.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content>\r\n\r\n    <mat-nav-list>\r\n\r\n      <mat-list-item *ngFor=\"let remark of doctorsRemarks | async\">\r\n        <span mat-line id=\"message\">{{ remark?.message }}</span>\r\n        <span mat-line id=\"time\">{{ remark?.timestamp | timestamp }} &nbsp;&nbsp;|&nbsp;&nbsp; {{ remark?.from }}</span>\r\n        <button mat-icon-button (click)=\"expandRemarks(remark)\">\r\n          <mat-icon>fullscreen</mat-icon>\r\n        </button>\r\n      </mat-list-item>\r\n\r\n    </mat-nav-list>\r\n    \r\n    <div id=\"spinner\" *ngIf=\"isLoading\">\r\n      <mat-progress-spinner mode=\"indeterminate\" color=\"warn\"></mat-progress-spinner>\r\n    </div>\r\n\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/remarks/remarks.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/remarks/remarks.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  margin-top: 30px;\n  padding: 5px 12px; }\n  .mat-card #spinner {\n    width: 100%;\n    display: flex; }\n  .mat-card #spinner .mat-progress-spinner {\n      margin: auto; }\n  .mat-card .mat-nav-list {\n    padding: 0; }\n  .mat-card .mat-nav-list #time {\n      color: #b3b3b3; }\n  .mat-card .mat-nav-list .mat-icon {\n      font-size: 2em;\n      -webkit-transform: translateX(-2px);\n              transform: translateX(-2px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktcGF0aWVudC9kYXNoYm9hcmQtcGF0aWVudC9yZW1hcmtzL0M6XFxVc2Vyc1xcS2lyYW5rdW1hciBHb250aVxcRGVza3RvcFxcUHJvZ3JhbW1pbmcuLldvcmxkXFxNYWpvclByb2plY3RcXEhvc3BpdGFsLURhc2hib2FyZFxcSG9zcGl0YWwtRGFzaGJvYXJkLUFwcC9zcmNcXGFwcFxcZW50cnktcGF0aWVudFxcZGFzaGJvYXJkLXBhdGllbnRcXHJlbWFya3NcXHJlbWFya3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCLEVBQUE7RUFGbkI7SUFLSSxXQUFXO0lBQ1gsYUFBYSxFQUFBO0VBTmpCO01BU00sWUFBWSxFQUFBO0VBVGxCO0lBY0ksVUFBVSxFQUFBO0VBZGQ7TUFpQk0sY0FBeUIsRUFBQTtFQWpCL0I7TUFxQk0sY0FBYztNQUNkLG1DQUEyQjtjQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VudHJ5LXBhdGllbnQvZGFzaGJvYXJkLXBhdGllbnQvcmVtYXJrcy9yZW1hcmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xyXG5cclxuICAjc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLm1hdC1wcm9ncmVzcy1zcGlubmVyIHtcclxuICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1uYXYtbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICN0aW1lIHtcclxuICAgICAgY29sb3I6IHJnYigxNzksIDE3OSwgMTc5KTtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/remarks/remarks.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/remarks/remarks.component.ts ***!
  \******************************************************************************/
/*! exports provided: RemarksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarksComponent", function() { return RemarksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_shared_component_expand_remarks_dialog_expand_remarks_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component */ "./src/app/common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RemarksComponent = /** @class */ (function () {
    function RemarksComponent(dialog, firestoreService) {
        this.dialog = dialog;
        this.firestoreService = firestoreService;
        this.isLoading = true;
    }
    RemarksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firestoreService.getOnlinePatient().subscribe(function (patient) {
            if (patient === undefined)
                return;
            _this.doctorsRemarks = _this.firestoreService.getDoctorsRemarks(patient.fullname);
            _this.doctorsRemarks.subscribe(function () { return (_this.isLoading = false); });
        });
    };
    RemarksComponent.prototype.expandRemarks = function (remark) {
        this.dialogRef = this.dialog.open(_common_shared_component_expand_remarks_dialog_expand_remarks_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ExpandRemarksDialogComponent"], { data: remark });
    };
    RemarksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remarks',
            template: __webpack_require__(/*! ./remarks.component.html */ "./src/app/entry-patient/dashboard-patient/remarks/remarks.component.html"),
            styles: [__webpack_require__(/*! ./remarks.component.scss */ "./src/app/entry-patient/dashboard-patient/remarks/remarks.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
    ], RemarksComponent);
    return RemarksComponent;
}());



/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/remarks/remarks.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/remarks/remarks.module.ts ***!
  \***************************************************************************/
/*! exports provided: RemarksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemarksModule", function() { return RemarksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _remarks_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remarks-routing.module */ "./src/app/entry-patient/dashboard-patient/remarks/remarks-routing.module.ts");
/* harmony import */ var _common_core_module_material_patient_remarks_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/module/material-patient/remarks-material.module */ "./src/app/common/core/module/material-patient/remarks-material.module.ts");
/* harmony import */ var _remarks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./remarks.component */ "./src/app/entry-patient/dashboard-patient/remarks/remarks.component.ts");
/* harmony import */ var _common_shared_pipe_timestampPatient_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/shared/pipe/timestampPatient.pipe */ "./src/app/common/shared/pipe/timestampPatient.pipe.ts");
/* harmony import */ var _common_shared_component_expand_remarks_dialog_expand_remarks_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component */ "./src/app/common/shared/component/expand-remarks-dialog/expand-remarks-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RemarksModule = /** @class */ (function () {
    function RemarksModule() {
    }
    RemarksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _remarks_routing_module__WEBPACK_IMPORTED_MODULE_2__["RemarksRoutingModule"],
                _common_core_module_material_patient_remarks_material_module__WEBPACK_IMPORTED_MODULE_3__["RemarksMaterialModule"]
            ],
            declarations: [
                _remarks_component__WEBPACK_IMPORTED_MODULE_4__["RemarksComponent"],
                _common_shared_component_expand_remarks_dialog_expand_remarks_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ExpandRemarksDialogComponent"],
                _common_shared_pipe_timestampPatient_pipe__WEBPACK_IMPORTED_MODULE_5__["TimestampPipe"]
            ],
            entryComponents: [
                _common_shared_component_expand_remarks_dialog_expand_remarks_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ExpandRemarksDialogComponent"]
            ]
        })
    ], RemarksModule);
    return RemarksModule;
}());



/***/ })

}]);
//# sourceMappingURL=remarks-remarks-module.js.map