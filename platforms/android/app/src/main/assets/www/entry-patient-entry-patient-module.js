(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entry-patient-entry-patient-module"],{

/***/ "./src/app/common/core/module/material-patient/entry-material.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/common/core/module/material-patient/entry-material.module.ts ***!
  \******************************************************************************/
/*! exports provided: EntryMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryMaterialModule", function() { return EntryMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EntryMaterialModule = /** @class */ (function () {
    function EntryMaterialModule() {
    }
    EntryMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"]
            ]
        })
    ], EntryMaterialModule);
    return EntryMaterialModule;
}());



/***/ }),

/***/ "./src/app/entry-patient/entry-patient-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/entry-patient/entry-patient-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: EntryPatientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryPatientRoutingModule", function() { return EntryPatientRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entry_patient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entry-patient.component */ "./src/app/entry-patient/entry-patient.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _entry_patient_component__WEBPACK_IMPORTED_MODULE_2__["EntryPatientComponent"], children: [
            { path: '', loadChildren: './dashboard-patient/dashboard-patient.module#DashboardPatientModule' }
        ] }
];
var EntryPatientRoutingModule = /** @class */ (function () {
    function EntryPatientRoutingModule() {
    }
    EntryPatientRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EntryPatientRoutingModule);
    return EntryPatientRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-patient/entry-patient.component.html":
/*!************************************************************!*\
  !*** ./src/app/entry-patient/entry-patient.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n\r\n  <mat-sidenav>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n\r\n    <mat-toolbar>\r\n      <div class=\"wrap\">\r\n        <mat-toolbar>\r\n          <span routerLink=\"/\">Hyperdetect</span>\r\n          <button mat-icon-button [mat-menu-trigger-for]=\"posXMenuOverlay\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n        </mat-toolbar>\r\n      </div>\r\n    </mat-toolbar>\r\n\r\n    <div id=\"app-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n  </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>\r\n\r\n<mat-menu xPosition=\"before\" [overlapTrigger]=\"false\" #posXMenuOverlay=\"matMenu\">\r\n  <button mat-menu-item disabled>\r\n    <mat-icon>settings</mat-icon>\r\n    Settings\r\n  </button>\r\n  <button mat-menu-item (click)=\"onSignout()\" >\r\n    <mat-icon>power_settings_new</mat-icon>\r\n    Sign out\r\n  </button>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./src/app/entry-patient/entry-patient.component.scss":
/*!************************************************************!*\
  !*** ./src/app/entry-patient/entry-patient.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap .mat-toolbar {\n  padding: 0; }\n  .wrap .mat-toolbar .mat-icon-button {\n    margin-left: auto; }\n  #app-content {\n  height: calc(100vh - 64px);\n  overflow-y: auto;\n  overflow-x: hidden; }\n  @media (max-width: 575px) {\n  .mat-toolbar .wrap {\n    padding: 0; } }\n  @media (max-width: 599px) {\n  #app-content {\n    height: calc(100vh - 56px); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktcGF0aWVudC9DOlxcVXNlcnNcXEtpcmFua3VtYXIgR29udGlcXERlc2t0b3BcXFByb2dyYW1taW5nLi5Xb3JsZFxcTWFqb3JQcm9qZWN0XFxIb3NwaXRhbC1EYXNoYm9hcmRcXEhvc3BpdGFsLURhc2hib2FyZC1BcHAvc3JjXFxhcHBcXGVudHJ5LXBhdGllbnRcXGVudHJ5LXBhdGllbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7RUFEWjtJQUlJLGlCQUFpQixFQUFBO0VBSXJCO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUdwQjtFQUNFO0lBQ0UsVUFBVSxFQUFBLEVBQ1g7RUFHSDtFQUNFO0lBQ0UsMEJBQTBCLEVBQUEsRUFDM0IiLCJmaWxlIjoic3JjL2FwcC9lbnRyeS1wYXRpZW50L2VudHJ5LXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCAubWF0LXRvb2xiYXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC5tYXQtaWNvbi1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4jYXBwLWNvbnRlbnQge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAubWF0LXRvb2xiYXIgLndyYXAge1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1OTlweCkge1xyXG4gICNhcHAtY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/entry-patient/entry-patient.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/entry-patient/entry-patient.component.ts ***!
  \**********************************************************/
/*! exports provided: EntryPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryPatientComponent", function() { return EntryPatientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/core/service/auth.service */ "./src/app/common/core/service/auth.service.ts");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/core/service/database.service */ "./src/app/common/core/service/database.service.ts");
/* harmony import */ var _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EntryPatientComponent = /** @class */ (function () {
    function EntryPatientComponent(router, authService, firestoreService, databaseService, sharedService) {
        this.router = router;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.databaseService = databaseService;
        this.sharedService = sharedService;
    }
    EntryPatientComponent.prototype.ngOnInit = function () {
        // this.sharedService.loop();
    };
    EntryPatientComponent.prototype.onSignout = function () {
        var _this = this;
        this.authService.signOut().then(function () {
            _this.databaseService.goOffline();
            _this.firestoreService.disableNetwork().then(function () {
                _this.router.navigate(['/']);
                _this.sharedService.signOutSuccess();
            });
        });
    };
    EntryPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry-patient',
            template: __webpack_require__(/*! ./entry-patient.component.html */ "./src/app/entry-patient/entry-patient.component.html"),
            styles: [__webpack_require__(/*! ./entry-patient.component.scss */ "./src/app/entry-patient/entry-patient.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], EntryPatientComponent);
    return EntryPatientComponent;
}());



/***/ }),

/***/ "./src/app/entry-patient/entry-patient.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/entry-patient/entry-patient.module.ts ***!
  \*******************************************************/
/*! exports provided: EntryPatientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryPatientModule", function() { return EntryPatientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _entry_patient_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entry-patient-routing.module */ "./src/app/entry-patient/entry-patient-routing.module.ts");
/* harmony import */ var _common_core_module_material_patient_entry_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/core/module/material-patient/entry-material.module */ "./src/app/common/core/module/material-patient/entry-material.module.ts");
/* harmony import */ var _entry_patient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entry-patient.component */ "./src/app/entry-patient/entry-patient.component.ts");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/core/service/database.service */ "./src/app/common/core/service/database.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EntryPatientModule = /** @class */ (function () {
    function EntryPatientModule() {
    }
    EntryPatientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _entry_patient_routing_module__WEBPACK_IMPORTED_MODULE_2__["EntryPatientRoutingModule"],
                _common_core_module_material_patient_entry_material_module__WEBPACK_IMPORTED_MODULE_3__["EntryMaterialModule"]
            ],
            declarations: [
                _entry_patient_component__WEBPACK_IMPORTED_MODULE_4__["EntryPatientComponent"]
            ],
            providers: [
                _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"],
                _common_core_service_database_service__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"]
            ]
        })
    ], EntryPatientModule);
    return EntryPatientModule;
}());



/***/ })

}]);
//# sourceMappingURL=entry-patient-entry-patient-module.js.map