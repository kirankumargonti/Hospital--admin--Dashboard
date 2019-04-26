(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["entry-admin-entry-admin-module"],{

/***/ "./src/app/common/core/module/material-admin/entry-material.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/common/core/module/material-admin/entry-material.module.ts ***!
  \****************************************************************************/
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
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"]
            ]
        })
    ], EntryMaterialModule);
    return EntryMaterialModule;
}());



/***/ }),

/***/ "./src/app/entry-admin/entry-admin-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/entry-admin/entry-admin-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: EntryAdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryAdminRoutingModule", function() { return EntryAdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _entry_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entry-admin.component */ "./src/app/entry-admin/entry-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _entry_admin_component__WEBPACK_IMPORTED_MODULE_2__["EntryAdminComponent"], children: [
            { path: '', loadChildren: './dashboard-admin/dashboard-admin.module#DashboardAdminModule' },
            { path: 'z', loadChildren: './buffer/buffer.module#BufferModule' }
        ] }
];
var EntryAdminRoutingModule = /** @class */ (function () {
    function EntryAdminRoutingModule() {
    }
    EntryAdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], EntryAdminRoutingModule);
    return EntryAdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/entry-admin/entry-admin.component.html":
/*!********************************************************!*\
  !*** ./src/app/entry-admin/entry-admin.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n\r\n  <mat-sidenav>\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n\r\n    <mat-toolbar>\r\n      <div class=\"wrap\">\r\n        <mat-toolbar>\r\n          <span routerLink=\"/\">Hyperdetect</span>\r\n          <button mat-icon-button [mat-menu-trigger-for]=\"posXMenuOverlay\">\r\n            <mat-icon>more_vert</mat-icon>\r\n          </button>\r\n        </mat-toolbar>\r\n      </div>\r\n    </mat-toolbar>\r\n\r\n    <div id=\"app-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n  </mat-sidenav-content>\r\n\r\n</mat-sidenav-container>\r\n\r\n<mat-menu xPosition=\"before\" [overlapTrigger]=\"false\" #posXMenuOverlay=\"matMenu\">\r\n  <button mat-menu-item disabled>\r\n    <mat-icon>settings</mat-icon>\r\n    Settings\r\n  </button>\r\n  <button mat-menu-item (click)=\"onSignout()\" >\r\n    <mat-icon>power_settings_new</mat-icon>\r\n    Sign out\r\n  </button>\r\n</mat-menu>\r\n"

/***/ }),

/***/ "./src/app/entry-admin/entry-admin.component.scss":
/*!********************************************************!*\
  !*** ./src/app/entry-admin/entry-admin.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap .mat-toolbar {\n  padding: 0; }\n  .wrap .mat-toolbar .mat-icon-button {\n    margin-left: auto; }\n  #app-content {\n  height: calc(100vh - 64px);\n  overflow-y: auto;\n  overflow-x: hidden; }\n  @media (max-width: 575px) {\n  .mat-toolbar .wrap {\n    padding: 0; } }\n  @media (max-width: 599px) {\n  #app-content {\n    height: calc(100vh - 56px); } }\n  @media (max-width: 767px) {\n  .mat-toolbar > .wrap {\n    padding: 0;\n    margin: 0; } }\n  @media (max-width: 752px) {\n  .mat-toolbar > .wrap {\n    padding: 0 15px;\n    margin: auto; } }\n  @media (max-width: 532px) {\n  .mat-toolbar > .wrap {\n    padding: 0;\n    margin: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW50cnktYWRtaW4vQzpcXFVzZXJzXFxLaXJhbmt1bWFyIEdvbnRpXFxEZXNrdG9wXFxQcm9ncmFtbWluZy4uV29ybGRcXE1ham9yUHJvamVjdFxcSG9zcGl0YWwtRGFzaGJvYXJkXFxIb3NwaXRhbC1EYXNoYm9hcmQtQXBwL3NyY1xcYXBwXFxlbnRyeS1hZG1pblxcZW50cnktYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVLEVBQUE7RUFEWjtJQUlJLGlCQUFpQixFQUFBO0VBSXJCO0VBQ0UsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTtFQUdwQjtFQUNFO0lBQ0UsVUFBVSxFQUFBLEVBQ1g7RUFHSDtFQUNFO0lBQ0UsMEJBQTBCLEVBQUEsRUFDM0I7RUFHSDtFQUNFO0lBQ0UsVUFBVTtJQUNWLFNBQVMsRUFBQSxFQUNWO0VBR0g7RUFDRTtJQUNFLGVBQWU7SUFDZixZQUFZLEVBQUEsRUFDYjtFQUdIO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsU0FBUyxFQUFBLEVBQ1YiLCJmaWxlIjoic3JjL2FwcC9lbnRyeS1hZG1pbi9lbnRyeS1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwIC5tYXQtdG9vbGJhciB7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbiAgLm1hdC1pY29uLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbiNhcHAtY29udGVudCB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzVweCkge1xyXG4gIC5tYXQtdG9vbGJhciAud3JhcCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgI2FwcC1jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLm1hdC10b29sYmFyID4gLndyYXAge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NTJweCkge1xyXG4gIC5tYXQtdG9vbGJhciA+IC53cmFwIHtcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MzJweCkge1xyXG4gIC5tYXQtdG9vbGJhciA+IC53cmFwIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/entry-admin/entry-admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/entry-admin/entry-admin.component.ts ***!
  \******************************************************/
/*! exports provided: EntryAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryAdminComponent", function() { return EntryAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/core/service/auth.service */ "./src/app/common/core/service/auth.service.ts");
/* harmony import */ var _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/core/service/firestore.service */ "./src/app/common/core/service/firestore.service.ts");
/* harmony import */ var _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/core/service/shared.service */ "./src/app/common/core/service/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EntryAdminComponent = /** @class */ (function () {
    function EntryAdminComponent(router, authService, firestoreService, sharedService) {
        this.router = router;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.sharedService = sharedService;
    }
    EntryAdminComponent.prototype.ngOnInit = function () {
    };
    EntryAdminComponent.prototype.onSignout = function () {
        var _this = this;
        this.authService.signOut().then(function () {
            _this.firestoreService.disableNetwork().then(function () {
                _this.router.navigate(['/']);
                _this.sharedService.signOutSuccess();
            });
        });
    };
    EntryAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-entry-admin',
            template: __webpack_require__(/*! ./entry-admin.component.html */ "./src/app/entry-admin/entry-admin.component.html"),
            styles: [__webpack_require__(/*! ./entry-admin.component.scss */ "./src/app/entry-admin/entry-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _common_core_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _common_core_service_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"],
            _common_core_service_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
    ], EntryAdminComponent);
    return EntryAdminComponent;
}());



/***/ }),

/***/ "./src/app/entry-admin/entry-admin.module.ts":
/*!***************************************************!*\
  !*** ./src/app/entry-admin/entry-admin.module.ts ***!
  \***************************************************/
/*! exports provided: EntryAdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryAdminModule", function() { return EntryAdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _entry_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entry-admin-routing.module */ "./src/app/entry-admin/entry-admin-routing.module.ts");
/* harmony import */ var _common_core_module_material_admin_entry_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/core/module/material-admin/entry-material.module */ "./src/app/common/core/module/material-admin/entry-material.module.ts");
/* harmony import */ var _entry_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entry-admin.component */ "./src/app/entry-admin/entry-admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EntryAdminModule = /** @class */ (function () {
    function EntryAdminModule() {
    }
    EntryAdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _entry_admin_routing_module__WEBPACK_IMPORTED_MODULE_3__["EntryAdminRoutingModule"],
                _common_core_module_material_admin_entry_material_module__WEBPACK_IMPORTED_MODULE_4__["EntryMaterialModule"]
            ],
            declarations: [
                _entry_admin_component__WEBPACK_IMPORTED_MODULE_5__["EntryAdminComponent"]
            ]
        })
    ], EntryAdminModule);
    return EntryAdminModule;
}());



/***/ })

}]);
//# sourceMappingURL=entry-admin-entry-admin-module.js.map