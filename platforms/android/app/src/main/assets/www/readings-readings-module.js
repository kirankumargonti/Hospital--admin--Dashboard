(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["readings-readings-module"],{

/***/ "./src/app/common/core/module/material-doctor/readings-material.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/common/core/module/material-doctor/readings-material.module.ts ***!
  \********************************************************************************/
/*! exports provided: ReadingsMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingsMaterialModule", function() { return ReadingsMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReadingsMaterialModule = /** @class */ (function () {
    function ReadingsMaterialModule() {
    }
    ReadingsMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_1__["CdkAccordionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"]
            ]
        })
    ], ReadingsMaterialModule);
    return ReadingsMaterialModule;
}());



/***/ }),

/***/ "./src/app/common/shared/component/add-remarks-dialog/add-remarks-dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/common/shared/component/add-remarks-dialog/add-remarks-dialog.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n\r\n    <mat-form-field color=\"accent\" appearance=\"outline\">\r\n      <mat-label>Patient</mat-label>\r\n      <input matInput type=\"text\" formControlName=\"recipient\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field color=\"accent\" appearance=\"outline\">\r\n      <mat-label>Message</mat-label>\r\n      <textarea\r\n        matInput cdkTextareaAutosize cdkAutosizeMaxRows=\"10\"\r\n        maxLength=\"200\" #textarea\r\n        formControlName=\"message\"></textarea>\r\n      <mat-hint align=\"end\">\r\n        {{ textarea.value.length }} / 200\r\n      </mat-hint>\r\n      <mat-hint *ngIf=\"isDisable\" align=\"start\">Message must be greater than 10 characters.</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button [disabled]=\"isDisable\">\r\n      <span>SEND</span>\r\n    </button>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/shared/component/add-remarks-dialog/add-remarks-dialog.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/common/shared/component/add-remarks-dialog/add-remarks-dialog.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 100%; }\n  .mat-form-field textarea {\n    overflow-y: hidden; }\n  .mat-raised-button {\n  float: right; }\n  .mat-raised-button span {\n    margin-right: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvYWRkLXJlbWFya3MtZGlhbG9nL0M6XFxVc2Vyc1xcS2lyYW5rdW1hciBHb250aVxcRGVza3RvcFxcUHJvZ3JhbW1pbmcuLldvcmxkXFxNYWpvclByb2plY3RcXEhvc3BpdGFsLURhc2hib2FyZFxcSG9zcGl0YWwtRGFzaGJvYXJkLUFwcC9zcmNcXGFwcFxcY29tbW9uXFxzaGFyZWRcXGNvbXBvbmVudFxcYWRkLXJlbWFya3MtZGlhbG9nXFxhZGQtcmVtYXJrcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7RUFEYjtJQUlJLGtCQUFrQixFQUFBO0VBSXRCO0VBQ0UsWUFBWSxFQUFBO0VBRGQ7SUFJSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaGFyZWQvY29tcG9uZW50L2FkZC1yZW1hcmtzLWRpYWxvZy9hZGQtcmVtYXJrcy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICB0ZXh0YXJlYSB7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/common/shared/component/add-remarks-dialog/add-remarks-dialog.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/common/shared/component/add-remarks-dialog/add-remarks-dialog.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AddRemarksDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddRemarksDialogComponent", function() { return AddRemarksDialogComponent; });
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




var AddRemarksDialogComponent = /** @class */ (function () {
    function AddRemarksDialogComponent(fb, data, dialog, firestoreService) {
        this.fb = fb;
        this.data = data;
        this.dialog = dialog;
        this.firestoreService = firestoreService;
        this.isDisable = true;
        this.form = fb.group({
            'recipient': [this.data.patient.fullname],
            'message': ['']
        });
    }
    AddRemarksDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.get('recipient').disable();
        this.form.valueChanges.subscribe(function (response) {
            _this.isDisable = response.message.length < 10 ? true : false;
        });
    };
    AddRemarksDialogComponent.prototype.onSubmit = function () {
        var to = this.data.patient.fullname;
        var from = this.data.doctor.fullname;
        var message = this.form.value.message;
        this.firestoreService.sendRemarkToPatient(to, from, message);
        this.dialog.closeAll();
    };
    AddRemarksDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-remarks-dialog',
            template: __webpack_require__(/*! ./add-remarks-dialog.component.html */ "./src/app/common/shared/component/add-remarks-dialog/add-remarks-dialog.component.html"),
            styles: [__webpack_require__(/*! ./add-remarks-dialog.component.scss */ "./src/app/common/shared/component/add-remarks-dialog/add-remarks-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], AddRemarksDialogComponent);
    return AddRemarksDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/component/all-readings-dialog/all-readings-dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/common/shared/component/all-readings-dialog/all-readings-dialog.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <h3>Readings</h3>\r\n\r\n  <mat-divider></mat-divider>\r\n\r\n  <div id=\"spinner\" *ngIf=\"!isAdded\">\r\n    <mat-progress-spinner mode=\"indeterminate\" color=\"warn\"></mat-progress-spinner>\r\n  </div>\r\n\r\n  <mat-nav-list>\r\n    <mat-list-item *ngFor=\"let reading of readings | async\">\r\n      <h1 mat-line>\r\n        <span id=\"timestamp\"> {{ reading?.timestamm }} </span>\r\n        <span> SBP: {{ reading?.sbpVal }} </span>\r\n        <span> DBP: {{ reading?.dbpVal }} </span>\r\n        <span> HR: {{ reading?.hrVal }} </span>\r\n      </h1>\r\n    </mat-list-item>\r\n  </mat-nav-list>\r\n\r\n  <div id=\"endline\">\r\n\r\n    <h5>< End of data ></h5>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/shared/component/all-readings-dialog/all-readings-dialog.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/common/shared/component/all-readings-dialog/all-readings-dialog.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  max-width: 500px;\n  max-height: 70vh;\n  overflow-y: auto;\n  overflow-x: hidden; }\n  #wrapper > h3 {\n    width: 500px; }\n  #wrapper .mat-divider {\n    margin: 15px 0;\n    margin-right: 20px; }\n  #wrapper #spinner {\n    width: 100%;\n    display: flex; }\n  #wrapper #spinner .mat-progress-spinner {\n      margin: auto; }\n  #wrapper .mat-nav-list {\n    margin: -12px; }\n  #wrapper .mat-nav-list .mat-line {\n      display: flex;\n      justify-content: space-around;\n      flex-flow: row wrap; }\n  #wrapper .mat-nav-list .mat-line span {\n        flex-basis: 30%; }\n  #wrapper #endline {\n    width: 100%;\n    margin-top: 25px; }\n  #wrapper #endline h5 {\n      text-align: center; }\n  @media (max-width: 379px) {\n  .mat-list-item {\n    margin-bottom: 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvYWxsLXJlYWRpbmdzLWRpYWxvZy9DOlxcVXNlcnNcXEtpcmFua3VtYXIgR29udGlcXERlc2t0b3BcXFByb2dyYW1taW5nLi5Xb3JsZFxcTWFqb3JQcm9qZWN0XFxIb3NwaXRhbC1EYXNoYm9hcmRcXEhvc3BpdGFsLURhc2hib2FyZC1BcHAvc3JjXFxhcHBcXGNvbW1vblxcc2hhcmVkXFxjb21wb25lbnRcXGFsbC1yZWFkaW5ncy1kaWFsb2dcXGFsbC1yZWFkaW5ncy1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUpwQjtJQU9JLFlBQVksRUFBQTtFQVBoQjtJQVdJLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTtFQVp0QjtJQWdCSSxXQUFXO0lBQ1gsYUFBYSxFQUFBO0VBakJqQjtNQW9CTSxZQUFZLEVBQUE7RUFwQmxCO0lBeUJJLGFBQWEsRUFBQTtFQXpCakI7TUE0Qk0sYUFBYTtNQUNiLDZCQUE2QjtNQUM3QixtQkFBbUIsRUFBQTtFQTlCekI7UUFpQ1EsZUFBZSxFQUFBO0VBakN2QjtJQXdDSSxXQUFXO0lBQ1gsZ0JBQWdCLEVBQUE7RUF6Q3BCO01BNENNLGtCQUFrQixFQUFBO0VBS3hCO0VBRUU7SUFDRSxtQkFBbUIsRUFBQSxFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaGFyZWQvY29tcG9uZW50L2FsbC1yZWFkaW5ncy1kaWFsb2cvYWxsLXJlYWRpbmdzLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDcwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gID4gaDMge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgLm1hdC1kaXZpZGVyIHtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgI3NwaW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lciB7XHJcbiAgICAgIG1hcmdpbjogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtbmF2LWxpc3Qge1xyXG4gICAgbWFyZ2luOiAtMTJweDtcclxuXHJcbiAgICAubWF0LWxpbmUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDMwJTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNlbmRsaW5lIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNzlweCkge1xyXG5cclxuICAubWF0LWxpc3QtaXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/common/shared/component/all-readings-dialog/all-readings-dialog.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/common/shared/component/all-readings-dialog/all-readings-dialog.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AllReadingsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllReadingsDialogComponent", function() { return AllReadingsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _core_service_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/service/database.service */ "./src/app/common/core/service/database.service.ts");
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



var AllReadingsDialogComponent = /** @class */ (function () {
    function AllReadingsDialogComponent(data, dialog, databaseService) {
        this.data = data;
        this.dialog = dialog;
        this.databaseService = databaseService;
        this.isAdded = false;
    }
    AllReadingsDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.readings = this.databaseService.getPatientReadings(this.data.patientNo);
        this.readings.subscribe(function () { return (_this.isAdded = true); });
    };
    AllReadingsDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-readings-dialog',
            template: __webpack_require__(/*! ./all-readings-dialog.component.html */ "./src/app/common/shared/component/all-readings-dialog/all-readings-dialog.component.html"),
            styles: [__webpack_require__(/*! ./all-readings-dialog.component.scss */ "./src/app/common/shared/component/all-readings-dialog/all-readings-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _core_service_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]])
    ], AllReadingsDialogComponent);
    return AllReadingsDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/component/set-time-dialog/set-time-dialog.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/common/shared/component/set-time-dialog/set-time-dialog.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <mat-card>\r\n    <mat-card-title>\r\n      Set device time\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n\r\n      <form [formGroup]=\"form\">\r\n\r\n        <mat-form-field color=\"accent\" appearance=\"outline\">\r\n          <mat-label>Patient</mat-label>\r\n          <input matInput type=\"text\" formControlName=\"recipient\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field color=\"accent\" appearance=\"outline\">\r\n          <mat-label>Time Duration</mat-label>\r\n          <mat-select formControlName=\"duration\" (selectionChange)=\"onChange(dtn.value)\" #dtn>\r\n            <mat-option>None</mat-option>\r\n            <mat-option *ngFor=\"let value of duration\" [value]=\"value\">\r\n              <div *ngIf=\"value === 0.5\">{{ value + ' hr' }}</div>\r\n              <div *ngIf=\"value === 1\">{{ value + ' hr' }}</div>\r\n              <div *ngIf=\"value > 1\">{{ value + ' hrs' }}</div>\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error data-error *ngIf=\"form.get('duration').invalid\">\r\n            <mat-error *ngIf=\"form.get('duration').errors['required']\">This is required.</mat-error>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field color=\"accent\" appearance=\"outline\">\r\n          <mat-label>Time Intervals Between</mat-label>\r\n          <mat-select formControlName=\"between\">\r\n            <mat-option>None</mat-option>\r\n            <mat-option *ngFor=\"let value of between\" [value]=\"value\">\r\n              <div *ngIf=\"value === 0.5\">{{ value + ' hr' }}</div>\r\n              <div *ngIf=\"value === 1\">{{ value + ' hr' }}</div>\r\n              <div *ngIf=\"value > 1\">{{ value + ' hrs' }}</div>\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error data-error *ngIf=\"form.get('between').invalid\">\r\n            <mat-error *ngIf=\"form.get('between').errors['required']\">This is required.</mat-error>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n      </form>\r\n\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-raised-button [disabled]=\"isDisabledButton\" (click)=\"onSubmit()\">SET</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/common/shared/component/set-time-dialog/set-time-dialog.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/common/shared/component/set-time-dialog/set-time-dialog.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper .mat-card {\n  max-width: 300px;\n  margin: -24px; }\n  #wrapper .mat-card .mat-card-content {\n    margin: 0; }\n  #wrapper .mat-card .mat-card-content .mat-form-field {\n      width: 100%; }\n  #wrapper .mat-card .mat-card-actions {\n    padding: 0; }\n  #wrapper .mat-card .mat-card-actions .mat-raised-button {\n      width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tbW9uL3NoYXJlZC9jb21wb25lbnQvc2V0LXRpbWUtZGlhbG9nL0M6XFxVc2Vyc1xcS2lyYW5rdW1hciBHb250aVxcRGVza3RvcFxcUHJvZ3JhbW1pbmcuLldvcmxkXFxNYWpvclByb2plY3RcXEhvc3BpdGFsLURhc2hib2FyZFxcSG9zcGl0YWwtRGFzaGJvYXJkLUFwcC9zcmNcXGFwcFxcY29tbW9uXFxzaGFyZWRcXGNvbXBvbmVudFxcc2V0LXRpbWUtZGlhbG9nXFxzZXQtdGltZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBO0VBRmY7SUFLSSxTQUFTLEVBQUE7RUFMYjtNQVFNLFdBQVcsRUFBQTtFQVJqQjtJQWFJLFVBQVUsRUFBQTtFQWJkO01BZ0JNLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbW1vbi9zaGFyZWQvY29tcG9uZW50L3NldC10aW1lLWRpYWxvZy9zZXQtdGltZS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd3JhcHBlciAubWF0LWNhcmQge1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiAtMjRweDtcclxuXHJcbiAgLm1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/common/shared/component/set-time-dialog/set-time-dialog.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/common/shared/component/set-time-dialog/set-time-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SetTimeDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTimeDialogComponent", function() { return SetTimeDialogComponent; });
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




var SetTimeDialogComponent = /** @class */ (function () {
    function SetTimeDialogComponent(fb, data, dialog, firestoreService) {
        this.fb = fb;
        this.data = data;
        this.dialog = dialog;
        this.firestoreService = firestoreService;
        this.isDisabledButton = true;
        this.isDisabledInterval = true;
        this.duration = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.between = [];
        this.form = fb.group({
            'recipient': [this.data.patient.fullname],
            'duration': [''],
            'between': [''],
        });
    }
    SetTimeDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form.get('recipient').disable();
        this.form.get('between').disable();
        this.initBetween();
        this.form.valueChanges.subscribe(function (response) {
            var duration = !(response.duration === undefined || response.duration === null);
            var interval = !(response.between === undefined || response.between === null || response.between === '');
            _this.isDisabledInterval = duration ? false : true;
            _this.isDisabledButton = duration && interval ? false : true;
        });
    };
    SetTimeDialogComponent.prototype.initBetween = function () {
        this.between = [
            { number: 1, numbers: [0.5] },
            { number: 2, numbers: [0.5, 1] },
            { number: 3, numbers: [0.5, 1] },
            { number: 4, numbers: [0.5, 1, 2] },
            { number: 5, numbers: [0.5, 1] },
            { number: 6, numbers: [0.5, 1, 2, 3] },
            { number: 7, numbers: [0.5, 1] },
            { number: 8, numbers: [0.5, 1, 2, 4] },
            { number: 9, numbers: [0.5, 1, 3] },
            { number: 10, numbers: [0.5, 1, 2, 5] }
        ];
    };
    SetTimeDialogComponent.prototype.onChange = function (value) {
        if (value === undefined) {
            this.form.get('between').setValue('');
            this.form.get('between').disable();
            return;
        }
        this.form.get('between').enable();
        this.initBetween();
        var filtered = this.between.filter(function (el) { return el.number === value; });
        this.between = filtered[0].numbers;
    };
    SetTimeDialogComponent.prototype.onSubmit = function () {
        delete this.data.doctor['email'];
        delete this.data.doctor['password'];
        var duration = this.form.value.duration * 1000 * 60 * 60;
        var between = this.form.value.between * 1000 * 60 * 60;
        var setTime = {
            duration: duration,
            between: between,
            to: this.data.patient,
            from: this.data.doctor
        };
        this.firestoreService.setTime(setTime);
        this.dialog.closeAll();
    };
    SetTimeDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-set-time-dialog',
            template: __webpack_require__(/*! ./set-time-dialog.component.html */ "./src/app/common/shared/component/set-time-dialog/set-time-dialog.component.html"),
            styles: [__webpack_require__(/*! ./set-time-dialog.component.scss */ "./src/app/common/shared/component/set-time-dialog/set-time-dialog.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
    ], SetTimeDialogComponent);
    return SetTimeDialogComponent;
}());



/***/ }),

/***/ "./src/app/common/shared/pipe/get-email.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/common/shared/pipe/get-email.pipe.ts ***!
  \******************************************************/
/*! exports provided: GetEmailPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetEmailPipe", function() { return GetEmailPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GetEmailPipe = /** @class */ (function () {
    function GetEmailPipe(firestoreService) {
        this.firestoreService = firestoreService;
    }
    GetEmailPipe.prototype.transform = function (value, args) {
        return this.firestoreService.getPatientDetails().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (patients) {
            return patients.filter(function (e) { return e.fullname === value.fullname; })[0].email;
        }));
    };
    GetEmailPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'email'
        }),
        __metadata("design:paramtypes", [_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"]])
    ], GetEmailPipe);
    return GetEmailPipe;
}());



/***/ }),

/***/ "./src/app/common/shared/pipe/latest-dbp.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/shared/pipe/latest-dbp.pipe.ts ***!
  \*******************************************************/
/*! exports provided: LatestDbpPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestDbpPipe", function() { return LatestDbpPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _core_service_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/service/database.service */ "./src/app/common/core/service/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LatestDbpPipe = /** @class */ (function () {
    function LatestDbpPipe(firestoreService, databaseService) {
        this.firestoreService = firestoreService;
        this.databaseService = databaseService;
    }
    LatestDbpPipe.prototype.transform = function (value, args) {
        // return this.firestoreService.getPatientReadings(value.patientNo).pipe(
        //   map((readings: any[]) => {
        //     return readings.map((reading) => reading.dbpVal)[0];
        //   })
        // );
        return this.databaseService.getPatientReadings(value.patientNo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (readings) {
            return readings.map(function (reading) { return reading.dbpVal; })[0];
        }));
    };
    LatestDbpPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'latestDbp'
        }),
        __metadata("design:paramtypes", [_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"],
            _core_service_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], LatestDbpPipe);
    return LatestDbpPipe;
}());



/***/ }),

/***/ "./src/app/common/shared/pipe/latest-hr.pipe.ts":
/*!******************************************************!*\
  !*** ./src/app/common/shared/pipe/latest-hr.pipe.ts ***!
  \******************************************************/
/*! exports provided: LatestHrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestHrPipe", function() { return LatestHrPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _core_service_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/service/database.service */ "./src/app/common/core/service/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LatestHrPipe = /** @class */ (function () {
    function LatestHrPipe(firestoreService, databaseService) {
        this.firestoreService = firestoreService;
        this.databaseService = databaseService;
    }
    LatestHrPipe.prototype.transform = function (value, args) {
        // return this.firestoreService.getPatientReadings(value.patientNo).pipe(
        //   map((readings: any[]) => {
        //     return readings.map((reading) => reading.hrVal)[0];
        //   })
        // );
        return this.databaseService.getPatientReadings(value.patientNo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (readings) {
            return readings.map(function (reading) { return reading.hrVal; })[0];
        }));
    };
    LatestHrPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'latestHr'
        }),
        __metadata("design:paramtypes", [_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"],
            _core_service_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], LatestHrPipe);
    return LatestHrPipe;
}());



/***/ }),

/***/ "./src/app/common/shared/pipe/latest-sbp.pipe.ts":
/*!*******************************************************!*\
  !*** ./src/app/common/shared/pipe/latest-sbp.pipe.ts ***!
  \*******************************************************/
/*! exports provided: LatestSbpPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestSbpPipe", function() { return LatestSbpPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _core_service_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/service/database.service */ "./src/app/common/core/service/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LatestSbpPipe = /** @class */ (function () {
    function LatestSbpPipe(firestoreService, databaseService) {
        this.firestoreService = firestoreService;
        this.databaseService = databaseService;
    }
    LatestSbpPipe.prototype.transform = function (value, args) {
        // return this.firestoreService.getPatientReadings(value.patientNo).pipe(
        //   map((readings: any[]) => {
        //     return readings.map((reading) => reading.sbpVal)[0];
        //   })
        // );
        return this.databaseService.getPatientReadings(value.patientNo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (readings) {
            return readings.map(function (reading) { return reading.sbpVal; })[0];
        }));
    };
    LatestSbpPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'latestSbp'
        }),
        __metadata("design:paramtypes", [_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_2__["FirestoreService"],
            _core_service_database_service__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], LatestSbpPipe);
    return LatestSbpPipe;
}());



/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/readings/readings-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/readings/readings-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ReadingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingsRoutingModule", function() { return ReadingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _readings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readings.component */ "./src/app/entry-doctor/dashboard-doctor/readings/readings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _readings_component__WEBPACK_IMPORTED_MODULE_2__["ReadingsComponent"] }
];
var ReadingsRoutingModule = /** @class */ (function () {
    function ReadingsRoutingModule() {
    }
    ReadingsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReadingsRoutingModule);
    return ReadingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/readings/readings.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/readings/readings.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\r\n\r\n  <div id=\"col-01\">\r\n    <mat-card>\r\n      <mat-card-content>\r\n\r\n        <p>Account details</p>\r\n        <div id=\"spinner\" *ngIf=\"isUndefined\">\r\n          <mat-progress-spinner mode=\"indeterminate\" color=\"warn\"></mat-progress-spinner>\r\n        </div>\r\n        <h4>{{ doctorDetails?.doctorNo }}</h4>\r\n        <h4>{{ doctorDetails?.fullname }}</h4>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n\r\n  <div id=\"col-02\">\r\n\r\n    <div id=\"spinner\" *ngIf=\"isLoadingList\">\r\n      <mat-progress-spinner mode=\"indeterminate\" color=\"warn\"></mat-progress-spinner>\r\n    </div>\r\n    <mat-accordion>\r\n      <mat-expansion-panel *ngFor=\"let patient of (doctorPatients | async); index as i\" [expanded]=\"i === 0\">\r\n        <mat-expansion-panel-header>\r\n          {{ patient?.fullname }} - No. {{ patient?.patientNo }}\r\n        </mat-expansion-panel-header>\r\n        <mat-card>\r\n          <mat-card-content>\r\n\r\n            <div>\r\n              <p>Patient details:</p>\r\n              <h5>{{ patient?.fullname }}</h5>\r\n              <h5>{{ patient?.patientNo }}</h5>\r\n              <h5>{{ patient | email | async }}</h5>\r\n            </div>\r\n          </mat-card-content>\r\n          <mat-card-actions>\r\n            <!-- <button mat-raised-button (click)=\"setTime(patient)\">SET DEVICE TIME</button> -->\r\n            <button mat-raised-button (click)=\"addRemarks(patient)\">ADD REMARKS</button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/readings/readings.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/readings/readings.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#wrapper {\n  margin-top: 30px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between; }\n  #wrapper #spinner {\n    width: 100%;\n    display: flex; }\n  #wrapper #spinner .mat-progress-spinner {\n      margin: auto; }\n  #wrapper #col-01 {\n    flex-basis: calc(30% - 10px); }\n  #wrapper #col-01 .mat-raised-button {\n      width: 100%;\n      margin-top: 8px; }\n  #wrapper #col-01 .mat-divider {\n      margin: 0 24px;\n      width: 290px; }\n  #wrapper #col-01 p {\n      color: #b3b3b3;\n      margin-bottom: 5px; }\n  #wrapper #col-02 {\n    flex-basis: calc(70% - 10px); }\n  #wrapper #col-02 p {\n      color: #b3b3b3;\n      margin-bottom: 5px; }\n  #wrapper #col-02 .mat-card-content {\n      display: flex;\n      flex-flow: row wrap; }\n  #wrapper #col-02 .mat-card-content div:first-child {\n        flex-basis: 50%; }\n  #wrapper #col-02 .mat-card-content div:last-child {\n        flex-basis: 50%; }\n  #wrapper #col-02 .mat-card-actions {\n      display: flex;\n      flex-flow: row wrap;\n      justify-content: space-between; }\n  #wrapper #col-02 .mat-card-actions .mat-raised-button {\n        flex-basis: 49%; }\n  @media (max-width: 824px) {\n  #wrapper {\n    flex-direction: column; }\n    #wrapper #col-01 {\n      margin-bottom: 20px; }\n    #wrapper #col-02 .mat-card {\n      padding: 24px 16px; }\n    #wrapper #col-02 .mat-card-content {\n      display: flex;\n      flex-flow: row wrap; }\n      #wrapper #col-02 .mat-card-content > div:last-child {\n        flex-grow: 1; }\n    #wrapper #col-02 .mat-card-actions {\n      flex-direction: column; }\n      #wrapper #col-02 .mat-card-actions .mat-raised-button {\n        margin: 5px 0; } }\n  @media (max-width: 449px) {\n  #col-02 .mat-card-content {\n    display: flex;\n    flex-flow: column wrap; }\n    #col-02 .mat-card-content > div:first-child,\n    #col-02 .mat-card-content > div:last-child {\n      flex-grow: 1; }\n  #col-02 .mat-card-actions {\n    flex-direction: column; }\n    #col-02 .mat-card-actions .mat-raised-button {\n      margin: 5px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktZG9jdG9yL2Rhc2hib2FyZC1kb2N0b3IvcmVhZGluZ3MvQzpcXFVzZXJzXFxLaXJhbmt1bWFyIEdvbnRpXFxEZXNrdG9wXFxQcm9ncmFtbWluZy4uV29ybGRcXE1ham9yUHJvamVjdFxcSG9zcGl0YWwtRGFzaGJvYXJkXFxIb3NwaXRhbC1EYXNoYm9hcmQtQXBwL3NyY1xcYXBwXFxlbnRyeS1kb2N0b3JcXGRhc2hib2FyZC1kb2N0b3JcXHJlYWRpbmdzXFxyZWFkaW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QixFQUFBO0VBSmhDO0lBT0ksV0FBVztJQUNYLGFBQWEsRUFBQTtFQVJqQjtNQVdNLFlBQVksRUFBQTtFQVhsQjtJQWdCSSw0QkFBNEIsRUFBQTtFQWhCaEM7TUFtQk0sV0FBVztNQUNYLGVBQWUsRUFBQTtFQXBCckI7TUF3Qk0sY0FBYztNQUNkLFlBQVksRUFBQTtFQXpCbEI7TUE2Qk0sY0FBeUI7TUFDekIsa0JBQWtCLEVBQUE7RUE5QnhCO0lBbUNJLDRCQUE0QixFQUFBO0VBbkNoQztNQXNDTSxjQUF5QjtNQUN6QixrQkFBa0IsRUFBQTtFQXZDeEI7TUEyQ00sYUFBYTtNQUNiLG1CQUFtQixFQUFBO0VBNUN6QjtRQStDUSxlQUFlLEVBQUE7RUEvQ3ZCO1FBbURRLGVBQWUsRUFBQTtFQW5EdkI7TUF3RE0sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEIsRUFBQTtFQTFEcEM7UUE4RFEsZUFBZSxFQUFBO0VBTXZCO0VBQ0U7SUFDRSxzQkFBc0IsRUFBQTtJQUR4QjtNQUlJLG1CQUFtQixFQUFBO0lBSnZCO01BUUksa0JBQWtCLEVBQUE7SUFSdEI7TUFhSSxhQUFhO01BQ2IsbUJBQW1CLEVBQUE7TUFkdkI7UUFpQk0sWUFBWSxFQUFBO0lBakJsQjtNQXNCSSxzQkFBc0IsRUFBQTtNQXRCMUI7UUF5Qk0sYUFBYSxFQUFBLEVBQ2Q7RUFLUDtFQUVFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0lBRnhCOztNQU1JLFlBQVksRUFBQTtFQUloQjtJQUNFLHNCQUFzQixFQUFBO0lBRHhCO01BSUksYUFBYSxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9lbnRyeS1kb2N0b3IvZGFzaGJvYXJkLWRvY3Rvci9yZWFkaW5ncy9yZWFkaW5ncy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN3cmFwcGVyIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICNzcGlubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAubWF0LXByb2dyZXNzLXNwaW5uZXIge1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjY29sLTAxIHtcclxuICAgIGZsZXgtYmFzaXM6IGNhbGMoMzAlIC0gMTBweCk7XHJcblxyXG4gICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWRpdmlkZXIge1xyXG4gICAgICBtYXJnaW46IDAgMjRweDtcclxuICAgICAgd2lkdGg6IDI5MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBjb2xvcjogcmdiKDE3OSwgMTc5LCAxNzkpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjY29sLTAyIHtcclxuICAgIGZsZXgtYmFzaXM6IGNhbGMoNzAlIC0gMTBweCk7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcblxyXG4gICAgICBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtY2FyZC1hY3Rpb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICAvLyBmbGV4LWJhc2lzOiAzMiU7XHJcbiAgICAgICAgZmxleC1iYXNpczogNDklO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODI0cHgpIHtcclxuICAjd3JhcHBlciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICNjb2wtMDEge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNjb2wtMDIgLm1hdC1jYXJkIHtcclxuICAgICAgcGFkZGluZzogMjRweCAxNnB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAjY29sLTAyIC5tYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuXHJcbiAgICAgID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICNjb2wtMDIgLm1hdC1jYXJkLWFjdGlvbnMge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDQ5cHgpIHtcclxuXHJcbiAgI2NvbC0wMiAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuXHJcbiAgICA+IGRpdjpmaXJzdC1jaGlsZCxcclxuICAgID4gZGl2Omxhc3QtY2hpbGQsIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2NvbC0wMiAubWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/readings/readings.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/readings/readings.component.ts ***!
  \******************************************************************************/
/*! exports provided: ReadingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingsComponent", function() { return ReadingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_shared_component_add_remarks_dialog_add_remarks_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/shared/component/add-remarks-dialog/add-remarks-dialog.component */ "./src/app/common/shared/component/add-remarks-dialog/add-remarks-dialog.component.ts");
/* harmony import */ var _common_shared_component_all_readings_dialog_all_readings_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/shared/component/all-readings-dialog/all-readings-dialog.component */ "./src/app/common/shared/component/all-readings-dialog/all-readings-dialog.component.ts");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReadingsComponent = /** @class */ (function () {
    function ReadingsComponent(dialog, firestoreService) {
        this.dialog = dialog;
        this.firestoreService = firestoreService;
        this.isUndefined = true;
        this.isLoadingList = true;
    }
    ReadingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firestoreService.getOnlineDoctor().subscribe(function (doctor) {
            if (doctor === undefined)
                return;
            _this.isUndefined = false;
            _this.doctorDetails = doctor;
            _this.doctorPatients = _this.firestoreService.getDoctorPatients(doctor.fullname);
            _this.doctorPatients.subscribe(function () { return (_this.isLoadingList = false); });
        });
    };
    // setTime(patient: any) {
    //   this.dialogRef_ST = this.dialog.open(SetTimeDialogComponent, { data: { patient, doctor: this.doctorDetails}});
    // }
    ReadingsComponent.prototype.addRemarks = function (patient) {
        this.dialogRef_AR = this.dialog.open(_common_shared_component_add_remarks_dialog_add_remarks_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AddRemarksDialogComponent"], { data: { patient: patient, doctor: this.doctorDetails } });
    };
    ReadingsComponent.prototype.showAllReadings = function (patient) {
        this.dialogRef_SR = this.dialog.open(_common_shared_component_all_readings_dialog_all_readings_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AllReadingsDialogComponent"], { data: patient });
    };
    ReadingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-readings',
            template: __webpack_require__(/*! ./readings.component.html */ "./src/app/entry-doctor/dashboard-doctor/readings/readings.component.html"),
            styles: [__webpack_require__(/*! ./readings.component.scss */ "./src/app/entry-doctor/dashboard-doctor/readings/readings.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
    ], ReadingsComponent);
    return ReadingsComponent;
}());



/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/readings/readings.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/readings/readings.module.ts ***!
  \***************************************************************************/
/*! exports provided: ReadingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadingsModule", function() { return ReadingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _readings_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./readings-routing.module */ "./src/app/entry-doctor/dashboard-doctor/readings/readings-routing.module.ts");
/* harmony import */ var _common_core_module_material_doctor_readings_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/module/material-doctor/readings-material.module */ "./src/app/common/core/module/material-doctor/readings-material.module.ts");
/* harmony import */ var _readings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./readings.component */ "./src/app/entry-doctor/dashboard-doctor/readings/readings.component.ts");
/* harmony import */ var _common_shared_component_set_time_dialog_set_time_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/shared/component/set-time-dialog/set-time-dialog.component */ "./src/app/common/shared/component/set-time-dialog/set-time-dialog.component.ts");
/* harmony import */ var _common_shared_component_add_remarks_dialog_add_remarks_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/shared/component/add-remarks-dialog/add-remarks-dialog.component */ "./src/app/common/shared/component/add-remarks-dialog/add-remarks-dialog.component.ts");
/* harmony import */ var _common_shared_component_all_readings_dialog_all_readings_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/shared/component/all-readings-dialog/all-readings-dialog.component */ "./src/app/common/shared/component/all-readings-dialog/all-readings-dialog.component.ts");
/* harmony import */ var _common_shared_pipe_latest_sbp_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/shared/pipe/latest-sbp.pipe */ "./src/app/common/shared/pipe/latest-sbp.pipe.ts");
/* harmony import */ var _common_shared_pipe_latest_dbp_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/shared/pipe/latest-dbp.pipe */ "./src/app/common/shared/pipe/latest-dbp.pipe.ts");
/* harmony import */ var _common_shared_pipe_latest_hr_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/shared/pipe/latest-hr.pipe */ "./src/app/common/shared/pipe/latest-hr.pipe.ts");
/* harmony import */ var _common_shared_pipe_get_email_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/shared/pipe/get-email.pipe */ "./src/app/common/shared/pipe/get-email.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ReadingsModule = /** @class */ (function () {
    function ReadingsModule() {
    }
    ReadingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _readings_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReadingsRoutingModule"],
                _common_core_module_material_doctor_readings_material_module__WEBPACK_IMPORTED_MODULE_4__["ReadingsMaterialModule"]
            ],
            declarations: [
                _readings_component__WEBPACK_IMPORTED_MODULE_5__["ReadingsComponent"],
                _common_shared_component_set_time_dialog_set_time_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SetTimeDialogComponent"],
                _common_shared_component_add_remarks_dialog_add_remarks_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddRemarksDialogComponent"],
                _common_shared_component_all_readings_dialog_all_readings_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AllReadingsDialogComponent"],
                _common_shared_pipe_latest_sbp_pipe__WEBPACK_IMPORTED_MODULE_9__["LatestSbpPipe"],
                _common_shared_pipe_latest_dbp_pipe__WEBPACK_IMPORTED_MODULE_10__["LatestDbpPipe"],
                _common_shared_pipe_latest_hr_pipe__WEBPACK_IMPORTED_MODULE_11__["LatestHrPipe"],
                _common_shared_pipe_get_email_pipe__WEBPACK_IMPORTED_MODULE_12__["GetEmailPipe"]
            ],
            entryComponents: [
                _common_shared_component_set_time_dialog_set_time_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SetTimeDialogComponent"],
                _common_shared_component_add_remarks_dialog_add_remarks_dialog_component__WEBPACK_IMPORTED_MODULE_7__["AddRemarksDialogComponent"],
                _common_shared_component_all_readings_dialog_all_readings_dialog_component__WEBPACK_IMPORTED_MODULE_8__["AllReadingsDialogComponent"]
            ]
        })
    ], ReadingsModule);
    return ReadingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=readings-readings-module.js.map