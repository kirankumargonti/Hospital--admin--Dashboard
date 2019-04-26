(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-page-module"],{

/***/ "./src/app/common/core/module/material-patient/page-material.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/common/core/module/material-patient/page-material.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PageMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMaterialModule", function() { return PageMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PageMaterialModule = /** @class */ (function () {
    function PageMaterialModule() {
    }
    PageMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"]
            ]
        })
    ], PageMaterialModule);
    return PageMaterialModule;
}());



/***/ }),

/***/ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n\r\n    <mat-form-field color=\"accent\" appearance=\"outline\">\r\n      <mat-label>Doctor</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"recipient\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"accent\" appearance=\"outline\">\r\n      <mat-label>Message</mat-label>\r\n      <textarea\r\n        matInput cdkTextareaAutosize cdkAutosizeMaxRows=\"10\"\r\n        maxLength=\"200\" #textarea\r\n        formControlName=\"message\"></textarea>\r\n      <mat-hint align=\"end\">\r\n        {{ textarea.value.length }} / 200\r\n      </mat-hint>\r\n      <mat-hint *ngIf=\"isDisable\" align=\"start\">Message must be greater than 10 characters.</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button [disabled]=\"isDisable\">\r\n      <span>SEND</span>\r\n    </button>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n  .mat-form-field textarea {\n    overflow-y: hidden; }\n  .mat-raised-button {\n  float: right; }\n  .mat-raised-button span {\n    margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvbWVzc2FnZS1kb2N0b3ItZGlhbG9nL0M6XFxVc2Vyc1xcS2lyYW5rdW1hciBHb250aVxcRGVza3RvcFxcUHJvZ3JhbW1pbmcuLldvcmxkXFxNYWpvclByb2plY3RcXEhvc3BpdGFsLURhc2hib2FyZFxcSG9zcGl0YWwtRGFzaGJvYXJkLUFwcC9zcmNcXGFwcFxcY29tbW9uXFxzaGFyZWRcXGNvbXBvbmVudFxcbWVzc2FnZS1kb2N0b3ItZGlhbG9nXFxtZXNzYWdlLWRvY3Rvci1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7RUFEYjtJQUlJLGtCQUFrQixFQUFBO0VBSXRCO0VBQ0UsWUFBWSxFQUFBO0VBRGQ7SUFJSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaGFyZWQvY29tcG9uZW50L21lc3NhZ2UtZG9jdG9yLWRpYWxvZy9tZXNzYWdlLWRvY3Rvci1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICB0ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: MessageDoctorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDoctorDialogComponent", function() { return MessageDoctorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
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




var MessageDoctorDialogComponent = /** @class */ (function () {
    function MessageDoctorDialogComponent(fb, data, dialog, firestoreService) {
        this.fb = fb;
        this.data = data;
        this.dialog = dialog;
        this.firestoreService = firestoreService;
        this.isDisable = true;
        this.form = fb.group({
            'recipient': ["Dr. " + data.doctor.fullname],
            'message': ['']
        });
    }
    MessageDoctorDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.get('recipient').disable();
        this.form.valueChanges.subscribe(function (response) {
            _this.isDisable = response.message.length < 10 ? true : false;
        });
    };
    MessageDoctorDialogComponent.prototype.onSubmit = function () {
        var to = this.data.doctor.fullname;
        var from = this.data.patient.fullname;
        var message = this.form.value.message;
        this.firestoreService.sendMessageToDoctor(to, from, message);
        this.dialog.closeAll();
    };
    MessageDoctorDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message-doctor-dialog',
            template: __webpack_require__(/*! ./message-doctor-dialog.component.html */ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.html"),
            styles: [__webpack_require__(/*! ./message-doctor-dialog.component.scss */ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], MessageDoctorDialogComponent);
    return MessageDoctorDialogComponent;
}());



/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/page/page-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/page/page-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageRoutingModule", function() { return PageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.component */ "./src/app/entry-patient/dashboard-patient/page/page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _page_component__WEBPACK_IMPORTED_MODULE_2__["PageComponent"] }
];
var PageRoutingModule = /** @class */ (function () {
    function PageRoutingModule() {
    }
    PageRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PageRoutingModule);
    return PageRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/page/page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/page/page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <div id=\"col-01\">\r\n\r\n    <mat-card>\r\n      <mat-card-content>\r\n\r\n        <p>Patient details</p>\r\n        <div id=\"spinner\" *ngIf=\"patientDetails === undefined\">\r\n          <mat-progress-spinner mode=\"indeterminate\" color=\"warn\"></mat-progress-spinner>\r\n        </div>\r\n        <h4>{{ patientDetails?.patientNo }}</h4>\r\n        <h4>{{ patientDetails?.fullname }}</h4>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n    </div>\r\n<div id=\"col-02\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n\r\n        <p>Assigned doctor/s</p>\r\n        <div id=\"spinner\" *ngIf=\"isDoctorsLoading\">\r\n          <mat-progress-spinner mode=\"indeterminate\" color=\"warn\"></mat-progress-spinner>\r\n        </div>\r\n        <mat-nav-list>\r\n          <mat-list-item *ngFor=\"let doctor of patientDoctors | async\">\r\n            <h5 mat-line>{{ doctor?.fullname }}</h5>\r\n            <button mat-icon-button matTooltip=\"{{ 'Message Dr. ' + doctor?.fullname }}\" (click)=\"messageDoctor(doctor)\">\r\n              <mat-icon>comment</mat-icon>\r\n            </button>\r\n          </mat-list-item>\r\n        </mat-nav-list>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n "

/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/page/page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/page/page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  margin-top: 30px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n  #wrapper #spinner {\n    width: 100%;\n    display: flex; }\n  #wrapper #spinner .mat-progress-spinner {\n      margin: auto; }\n  #wrapper #col-01:nth-child(1) {\n    flex-basis: calc(30% - 10px); }\n  #wrapper #col-01:nth-child(1) p {\n      color: #b3b3b3;\n      margin-bottom: 5px; }\n  #wrapper #col-01:nth-child(1) .mat-card {\n      margin-bottom: 20px; }\n  #wrapper #col-02:nth-child(2) {\n    flex-basis: calc(70% - 10px); }\n  #wrapper #col-02:nth-child(2) #heading {\n      display: flex;\n      flex-flow: row wrap;\n      margin-top: 15px; }\n  #wrapper #col-02:nth-child(2) #heading span {\n        flex-grow: 1; }\n  #wrapper #col-02:nth-child(2) #content {\n      display: flex;\n      flex-flow: row wrap;\n      margin-top: 7px; }\n  #wrapper #col-02:nth-child(2) #content h5 {\n        flex-grow: 1; }\n  #wrapper #col-02:nth-child(2) .mat-divider {\n      margin: 30px 0; }\n  #wrapper #col-02:nth-child(2) .mat-table {\n      width: 100%;\n      margin: 20px auto auto; }\n  @media (max-width: 991px) {\n  #col-01 {\n    flex-grow: 1;\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between; }\n    #col-01 .mat-card {\n      flex-basis: 48%; }\n  #col-02 {\n    flex-grow: 1; } }\n  @media (max-width: 569px) {\n  #col-01 {\n    display: flex;\n    flex-flow: column;\n    flex-wrap: wrap;\n    justify-content: space-between; }\n    #col-01 .mat-card {\n      flex-basis: 20%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktcGF0aWVudC9kYXNoYm9hcmQtcGF0aWVudC9wYWdlL0M6XFxVc2Vyc1xcS2lyYW5rdW1hciBHb250aVxcRGVza3RvcFxcUHJvZ3JhbW1pbmcuLldvcmxkXFxNYWpvclByb2plY3RcXEhvc3BpdGFsLURhc2hib2FyZFxcSG9zcGl0YWwtRGFzaGJvYXJkLUFwcC9zcmNcXGFwcFxcZW50cnktcGF0aWVudFxcZGFzaGJvYXJkLXBhdGllbnRcXHBhZ2VcXHBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEIsRUFBQTtFQUpoQztJQU9JLFdBQVc7SUFDWCxhQUFhLEVBQUE7RUFSakI7TUFXTSxZQUFZLEVBQUE7RUFYbEI7SUFnQkksNEJBQTRCLEVBQUE7RUFoQmhDO01BbUJNLGNBQXlCO01BQ3pCLGtCQUFrQixFQUFBO0VBcEJ4QjtNQXdCTSxtQkFBbUIsRUFBQTtFQXhCekI7SUE2QkksNEJBQTRCLEVBQUE7RUE3QmhDO01BZ0NNLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsZ0JBQWdCLEVBQUE7RUFsQ3RCO1FBcUNRLFlBQVksRUFBQTtFQXJDcEI7TUEwQ00sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixlQUFlLEVBQUE7RUE1Q3JCO1FBK0NRLFlBQVksRUFBQTtFQS9DcEI7TUFvRE0sY0FBYyxFQUFBO0VBcERwQjtNQXdETSxXQUFXO01BQ1gsc0JBQXNCLEVBQUE7RUFLNUI7RUFDRTtJQUNFLFlBQVk7SUFFWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBO0lBTGhDO01BUUksZUFBZSxFQUFBO0VBSW5CO0lBQ0UsWUFBWSxFQUFBLEVBQ2I7RUFHSDtFQUNFO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsOEJBQThCLEVBQUE7SUFKaEM7TUFPSSxlQUFlLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9lbnRyeS1wYXRpZW50L2Rhc2hib2FyZC1wYXRpZW50L3BhZ2UvcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICNzcGlubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAubWF0LXByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjY29sLTAxOm50aC1jaGlsZCgxKSB7XHJcbiAgICBmbGV4LWJhc2lzOiBjYWxjKDMwJSAtIDEwcHgpO1xyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogcmdiKDE3OSwgMTc5LCAxNzkpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1jYXJkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNjb2wtMDI6bnRoLWNoaWxkKDIpIHtcclxuICAgIGZsZXgtYmFzaXM6IGNhbGMoNzAlIC0gMTBweCk7XHJcblxyXG4gICAgI2hlYWRpbmcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2NvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICBtYXJnaW4tdG9wOiA3cHg7XHJcblxyXG4gICAgICBoNSB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1kaXZpZGVyIHtcclxuICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC10YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDIwcHggYXV0byBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgI2NvbC0wMSB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgLm1hdC1jYXJkIHtcclxuICAgICAgZmxleC1iYXNpczogNDglO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2NvbC0wMiB7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTY5cHgpIHtcclxuICAjY29sLTAxIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAubWF0LWNhcmQge1xyXG4gICAgICBmbGV4LWJhc2lzOiAyMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/page/page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/page/page.component.ts ***!
  \************************************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_shared_component_message_doctor_dialog_message_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/shared/component/message-doctor-dialog/message-doctor-dialog.component */ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.ts");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/service/database.service */ "./src/app/common/core/service/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PageComponent = /** @class */ (function () {
    function PageComponent(dialog, firestoreService, databaseService) {
        this.dialog = dialog;
        this.firestoreService = firestoreService;
        this.databaseService = databaseService;
        this.displayedColumns = ['sbp', 'dbp', 'hr'];
        this.isDoctorsLoading = true;
    }
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firestoreService.getOnlinePatient().subscribe(function (patient) {
            if (patient === undefined)
                return;
            _this.databaseService.getPatientReadings(patient.patientNo).subscribe(function (response) {
                _this.readings = response[0];
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](response.slice(1));
                _this.dataSource.paginator = _this.paginator;
            });
            _this.patientDetails = patient;
            _this.patientDoctors = _this.firestoreService.getPatientDoctors(patient.fullname);
            _this.patientDoctors.subscribe(function () { return (_this.isDoctorsLoading = false); });
        });
    };
    PageComponent.prototype.messageDoctor = function (doctor) {
        this.dialgoRef = this.dialog.open(_common_shared_component_message_doctor_dialog_message_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_2__["MessageDoctorDialogComponent"], { data: { doctor: doctor, patient: this.patientDetails } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], PageComponent.prototype, "paginator", void 0);
    PageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/entry-patient/dashboard-patient/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.scss */ "./src/app/entry-patient/dashboard-patient/page/page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/page/page.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/page/page.module.ts ***!
  \*********************************************************************/
/*! exports provided: PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _page_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-routing.module */ "./src/app/entry-patient/dashboard-patient/page/page-routing.module.ts");
/* harmony import */ var _common_core_module_material_patient_page_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/module/material-patient/page-material.module */ "./src/app/common/core/module/material-patient/page-material.module.ts");
/* harmony import */ var _page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.component */ "./src/app/entry-patient/dashboard-patient/page/page.component.ts");
/* harmony import */ var _common_shared_component_message_doctor_dialog_message_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/shared/component/message-doctor-dialog/message-doctor-dialog.component */ "./src/app/common/shared/component/message-doctor-dialog/message-doctor-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _page_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageRoutingModule"],
                _common_core_module_material_patient_page_material_module__WEBPACK_IMPORTED_MODULE_4__["PageMaterialModule"]
            ],
            declarations: [
                _page_component__WEBPACK_IMPORTED_MODULE_5__["PageComponent"],
                _common_shared_component_message_doctor_dialog_message_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MessageDoctorDialogComponent"],
            ],
            entryComponents: [
                _common_shared_component_message_doctor_dialog_message_doctor_dialog_component__WEBPACK_IMPORTED_MODULE_6__["MessageDoctorDialogComponent"]
            ]
        })
    ], PageModule);
    return PageModule;
}());



/***/ })

}]);
//# sourceMappingURL=page-page-module.js.map