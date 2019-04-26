(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-doctor-dashboard-doctor-module"],{

/***/ "./src/app/common/core/module/material-doctor/dashboard-material.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/common/core/module/material-doctor/dashboard-material.module.ts ***!
  \*********************************************************************************/
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

/***/ "./src/app/common/core/service/set-time-event.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/common/core/service/set-time-event.service.ts ***!
  \***************************************************************/
/*! exports provided: SetTimeEventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTimeEventService", function() { return SetTimeEventService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetTimeEventService = /** @class */ (function () {
    function SetTimeEventService(firestore) {
        this.firestore = firestore;
        this.dataTimings = firestore.collection('data-timings');
    }
    SetTimeEventService.prototype.setTimeEventHandler = function () {
        this.dataTimings.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (values) {
            return values.map(function (value) {
                var duration = value.payload.doc.data()['duration'];
                var between = value.payload.doc.data()['between'];
                var current = value.payload.doc.data()['current'];
                setTimeout(function () {
                    // value.payload.doc.ref.update({ timing: true });
                }, duration);
                return value.payload.doc.data();
            });
        })).subscribe(function (response) {
            // console.log(response);
        });
    };
    SetTimeEventService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], SetTimeEventService);
    return SetTimeEventService;
}());



/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/dashboard-doctor-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/dashboard-doctor-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: DashboardDoctorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDoctorRoutingModule", function() { return DashboardDoctorRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_doctor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-doctor.component */ "./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _dashboard_doctor_component__WEBPACK_IMPORTED_MODULE_2__["DashboardDoctorComponent"], children: [
            { path: '', loadChildren: './readings/readings.module#ReadingsModule' },
            { path: 'readings', loadChildren: './readings/readings.module#ReadingsModule' },
            { path: 'message', loadChildren: './messages/messages.module#MessagesModule' }
        ] }
];
var DashboardDoctorRoutingModule = /** @class */ (function () {
    function DashboardDoctorRoutingModule() {
    }
    DashboardDoctorRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardDoctorRoutingModule);
    return DashboardDoctorRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\r\n\r\n  <nav mat-tab-nav-bar>\r\n    <p mat-tab-link\r\n      *ngFor=\"let tabLink of tabLinks; let i = index\"\r\n      [routerLink]=\"tabLink.link\"\r\n      routerLinkActive #rla=\"routerLinkActive\"\r\n      [active]=\"rla.isActive\" (click)=\"onClick(i)\">\r\n      {{ tabLink.label }}\r\n    </p>\r\n  </nav>\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  margin-top: 50px;\n  margin-bottom: 50px; }\n  div p {\n    margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktZG9jdG9yL2Rhc2hib2FyZC1kb2N0b3IvQzpcXFVzZXJzXFxLaXJhbmt1bWFyIEdvbnRpXFxEZXNrdG9wXFxQcm9ncmFtbWluZy4uV29ybGRcXE1ham9yUHJvamVjdFxcSG9zcGl0YWwtRGFzaGJvYXJkXFxIb3NwaXRhbC1EYXNoYm9hcmQtQXBwL3NyY1xcYXBwXFxlbnRyeS1kb2N0b3JcXGRhc2hib2FyZC1kb2N0b3JcXGRhc2hib2FyZC1kb2N0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7RUFGckI7SUFLSSxTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9lbnRyeS1kb2N0b3IvZGFzaGJvYXJkLWRvY3Rvci9kYXNoYm9hcmQtZG9jdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DashboardDoctorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDoctorComponent", function() { return DashboardDoctorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_core_service_set_time_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/core/service/set-time-event.service */ "./src/app/common/core/service/set-time-event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardDoctorComponent = /** @class */ (function () {
    function DashboardDoctorComponent(router, route, setTimeEventService) {
        this.router = router;
        this.route = route;
        this.setTimeEventService = setTimeEventService;
        this.tabLinks = [];
        this.links = [
            { label: 'Patient\'s Messages', link: 'message' },
            { label: 'Patient Readings', link: 'readings' },
            { label: 'Patient Readings', link: ['/', 'd'] }
        ];
    }
    DashboardDoctorComponent.prototype.ngOnInit = function () {
        this.tabLinks = this.links.filter(function (e) { return e.link !== 'readings'; });
        this.setTimeEventService.setTimeEventHandler();
    };
    DashboardDoctorComponent.prototype.onClick = function (index) {
        index === 1 ? this.router.navigate(['readings'], { relativeTo: this.route }) : 0;
        this.tabLinks = this.links.filter(function (e) { return typeof e.link !== 'object'; });
    };
    DashboardDoctorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-doctor',
            template: __webpack_require__(/*! ./dashboard-doctor.component.html */ "./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-doctor.component.scss */ "./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _common_core_service_set_time_event_service__WEBPACK_IMPORTED_MODULE_2__["SetTimeEventService"]])
    ], DashboardDoctorComponent);
    return DashboardDoctorComponent;
}());



/***/ }),

/***/ "./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.module.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardDoctorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardDoctorModule", function() { return DashboardDoctorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_doctor_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-doctor-routing.module */ "./src/app/entry-doctor/dashboard-doctor/dashboard-doctor-routing.module.ts");
/* harmony import */ var _common_core_module_material_doctor_dashboard_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/core/module/material-doctor/dashboard-material.module */ "./src/app/common/core/module/material-doctor/dashboard-material.module.ts");
/* harmony import */ var _dashboard_doctor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-doctor.component */ "./src/app/entry-doctor/dashboard-doctor/dashboard-doctor.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DashboardDoctorModule = /** @class */ (function () {
    function DashboardDoctorModule() {
    }
    DashboardDoctorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_doctor_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardDoctorRoutingModule"],
                _common_core_module_material_doctor_dashboard_material_module__WEBPACK_IMPORTED_MODULE_3__["DashboardMaterialModule"]
            ],
            declarations: [
                _dashboard_doctor_component__WEBPACK_IMPORTED_MODULE_4__["DashboardDoctorComponent"]
            ]
        })
    ], DashboardDoctorModule);
    return DashboardDoctorModule;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-doctor-dashboard-doctor-module.js.map