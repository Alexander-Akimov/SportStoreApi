(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-info p-2 text-white\">\r\n    <h3>Placeholder for Admin Features</h3>\r\n</div>\r\n\r\n<div class=\"text-center\">\r\n    <button class=\"btn btn-secondary m-1\" routerLink=\"/\">Go back</button>\r\n    <button class=\"btn btn-primary m-1\" (click)=\"logout()\">Log out</button>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../AngularTypeScript/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/auth.service */ "./src/app/model/auth.service.ts");




var AdminComponent = /** @class */ (function () {
    function AdminComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AdminComponent.prototype.logout = function () {
        this.auth.clear();
        this.router.navigateByUrl("/admin/auth");
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _model_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../AngularTypeScript/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../AngularTypeScript/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../AngularTypeScript/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.component */ "./src/app/admin/auth.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.guard */ "./src/app/admin/auth.guard.ts");








var routing = _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
    { path: "auth", component: _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"] },
    { path: "main", component: _admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] /**/ },
    { path: "**", redirectTo: "main" }
]);
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], routing],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], _admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/auth.component.html":
/*!*******************************************!*\
  !*** ./src/app/admin/auth.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-info p-2 text-center text-white\">\r\n    <h3>SportsStore Admin</h3>\r\n</div>\r\n<div class=\"bg-danger mt-2 p-2 text-center text-white\" *ngIf=\"errorMessage != null\">\r\n    {{errorMessage}}\r\n</div>\r\n<div class=\"p-2\">\r\n    <form novalidate #form=\"ngForm\" (ngSubmit)=\"authenticate(form)\">\r\n        <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" required />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" required />\r\n        </div>\r\n        <div class=\"text-center\">\r\n            <button class=\"btn btn-secondary m-1\" routerLink=\"/\">Go back</button>\r\n            <button class=\"btn btn-primary m-1\" type=\"submit\">Log In</button>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./src/app/admin/auth.component.ts":
/*!*****************************************!*\
  !*** ./src/app/admin/auth.component.ts ***!
  \*****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../AngularTypeScript/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/auth.service */ "./src/app/model/auth.service.ts");




var AuthComponent = /** @class */ (function () {
    function AuthComponent(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthComponent.prototype.authenticate = function (form) {
        var _this = this;
        if (form.valid) {
            this.auth.authenticate(this.username, this.password) // perform authentication
                .subscribe(function (response) {
                if (response) {
                    _this.router.navigateByUrl("/admin/main");
                }
                _this.errorMessage = "Authentication Failed";
            });
            // this.router.navigateByUrl("/admin/main");
        }
        else {
            this.errorMessage = "Form Data Invalid";
        }
    };
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/admin/auth.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _model_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/admin/auth.guard.ts":
/*!*************************************!*\
  !*** ./src/app/admin/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../AngularTypeScript/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/auth.service */ "./src/app/model/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (!this.auth.authenticated) {
            this.router.navigateByUrl("/admin/auth");
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _model_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map