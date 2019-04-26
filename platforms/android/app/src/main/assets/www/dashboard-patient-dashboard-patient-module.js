(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-patient-dashboard-patient-module"],{

/***/ "./src/app/common/core/module/material-patient/dashboard-material.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/common/core/module/material-patient/dashboard-material.module.ts ***!
  \**********************************************************************************/
/*! exports provided: DashboardMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardMaterialModule", function() { return DashboardMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DashboardMaterialModule = /** @class */ (function () {
    function DashboardMaterialModule() {
    }
    DashboardMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"]
            ]
        })
    ], DashboardMaterialModule);
    return DashboardMaterialModule;
}());



/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/dashboard-patient-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/dashboard-patient-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: DashboardPatientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPatientRoutingModule", function() { return DashboardPatientRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_patient_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-patient.component */ "./src/app/entry-patient/dashboard-patient/dashboard-patient.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _dashboard_patient_component__WEBPACK_IMPORTED_MODULE_2__["DashboardPatientComponent"], children: [
            { path: '', loadChildren: './page/page.module#PageModule' },
            { path: 'readings', loadChildren: './page/page.module#PageModule' },
            { path: 'remarks', loadChildren: './remarks/remarks.module#RemarksModule' }
        ] }
];
var DashboardPatientRoutingModule = /** @class */ (function () {
    function DashboardPatientRoutingModule() {
    }
    DashboardPatientRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardPatientRoutingModule);
    return DashboardPatientRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/dashboard-patient.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/dashboard-patient.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\r\n\r\n  <nav mat-tab-nav-bar>\r\n    <p mat-tab-link\r\n      *ngFor=\"let tabLink of tabLinks; let i = index\"\r\n      [routerLink]=\"tabLink.link\"\r\n      routerLinkActive #rla=\"routerLinkActive\"\r\n      [active]=\"rla.isActive\" (click)=\"onClick(i)\">\r\n      {{ tabLink.label }}\r\n    </p>\r\n  </nav>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/dashboard-patient.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/dashboard-patient.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin-top: 50px;\n  margin-bottom: 50px; }\n  div p {\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktcGF0aWVudC9kYXNoYm9hcmQtcGF0aWVudC9DOlxcVXNlcnNcXEtpcmFua3VtYXIgR29udGlcXERlc2t0b3BcXFByb2dyYW1taW5nLi5Xb3JsZFxcTWFqb3JQcm9qZWN0XFxIb3NwaXRhbC1EYXNoYm9hcmRcXEhvc3BpdGFsLURhc2hib2FyZC1BcHAvc3JjXFxhcHBcXGVudHJ5LXBhdGllbnRcXGRhc2hib2FyZC1wYXRpZW50XFxkYXNoYm9hcmQtcGF0aWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTtFQUZyQjtJQUtJLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VudHJ5LXBhdGllbnQvZGFzaGJvYXJkLXBhdGllbnQvZGFzaGJvYXJkLXBhdGllbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/dashboard-patient.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/dashboard-patient.component.ts ***!
  \********************************************************************************/
/*! exports provided: DashboardPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPatientComponent", function() { return DashboardPatientComponent; });
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


var DashboardPatientComponent = /** @class */ (function () {
    function DashboardPatientComponent(router, route) {
        this.router = router;
        this.route = route;
        this.tabLinks = [];
        this.links = [
            { label: 'Doctor\'s Remarks', link: 'remarks' },
            { label: 'Vital Signs', link: 'readings' },
            { label: 'Vital Signs', link: ['/', 'p'] },
        ];
    }
    DashboardPatientComponent.prototype.ngOnInit = function () {
        this.tabLinks = this.links.filter(function (e) { return e.link !== 'readings'; });
    };
    DashboardPatientComponent.prototype.onClick = function (index) {
        index === 1 ? this.router.navigate(['readings'], { relativeTo: this.route }) : 0;
        this.tabLinks = this.links.filter(function (e) { return typeof e.link !== 'object'; });
    };
    DashboardPatientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-patient',
            template: __webpack_require__(/*! ./dashboard-patient.component.html */ "./src/app/entry-patient/dashboard-patient/dashboard-patient.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-patient.component.scss */ "./src/app/entry-patient/dashboard-patient/dashboard-patient.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DashboardPatientComponent);
    return DashboardPatientComponent;
}());



/***/ }),

/***/ "./src/app/entry-patient/dashboard-patient/dashboard-patient.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/entry-patient/dashboard-patient/dashboard-patient.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DashboardPatientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPatientModule", function() { return DashboardPatientModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_patient_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-patient-routing.module */ "./src/app/entry-patient/dashboard-patient/dashboard-patient-routing.module.ts");
/* harmony import */ var _common_core_module_material_patient_dashboard_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/core/module/material-patient/dashboard-material.module */ "./src/app/common/core/module/material-patient/dashboard-material.module.ts");
/* harmony import */ var _dashboard_patient_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-patient.component */ "./src/app/entry-patient/dashboard-patient/dashboard-patient.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardPatientModule = /** @class */ (function () {
    function DashboardPatientModule() {
    }
    DashboardPatientModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_patient_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardPatientRoutingModule"],
                _common_core_module_material_patient_dashboard_material_module__WEBPACK_IMPORTED_MODULE_3__["DashboardMaterialModule"]
            ],
            declarations: [
                _dashboard_patient_component__WEBPACK_IMPORTED_MODULE_4__["DashboardPatientComponent"]
            ]
        })
    ], DashboardPatientModule);
    return DashboardPatientModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-patient-dashboard-patient-module.js.map