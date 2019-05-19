(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col bg-info p-2 text-white\">\r\n            <a class=\"navbar-brand\">SPORTS STORE admin</a>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class=\"row mt-2\">\r\n        <div class=\"col-3\">\r\n            <button class=\"btn btn-outline-info btn-block\" routerLink=\"/admin/main/products\" routerLinkActive=\"active\">\r\n                Products\r\n            </button>\r\n            <button class=\"btn btn-outline-info btn-block\" routerLink=\"/admin/main/orders\" routerLinkActive=\"active\">\r\n                Orders\r\n            </button>\r\n            <button class=\"btn btn-outline-info btn-block\" routerLink=\"/admin/main/categories\" routerLinkActive=\"active\">\r\n                Categories\r\n            </button>\r\n            <button class=\"btn btn-outline-danger btn-block\" (click)=\"logout()\">\r\n                Logout\r\n            </button>\r\n        </div>\r\n        <div class=\"col-9\">\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n</div>"

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
        this.router.navigateByUrl("/");
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
/* harmony import */ var _model_model_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/model.module */ "./src/app/model/model.module.ts");
/* harmony import */ var _productEditor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./productEditor.component */ "./src/app/admin/productEditor.component.ts");
/* harmony import */ var _productTable_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./productTable.component */ "./src/app/admin/productTable.component.ts");
/* harmony import */ var _orderTable_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./orderTable.component */ "./src/app/admin/orderTable.component.ts");
/* harmony import */ var _categoryTable_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categoryTable.component */ "./src/app/admin/categoryTable.component.ts");
/* harmony import */ var _categoryEditor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./categoryEditor.component */ "./src/app/admin/categoryEditor.component.ts");














var routing = _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
    { path: "auth", component: _auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"] },
    {
        path: "main", component: _admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
        children: [
            { path: "products/:mode/:id", component: _productEditor_component__WEBPACK_IMPORTED_MODULE_9__["ProductEditorComponent"] },
            { path: "products/:mode", component: _productEditor_component__WEBPACK_IMPORTED_MODULE_9__["ProductEditorComponent"] },
            { path: "products", component: _productTable_component__WEBPACK_IMPORTED_MODULE_10__["ProductTableComponent"] },
            { path: "categories/:mode/:id", component: _categoryEditor_component__WEBPACK_IMPORTED_MODULE_13__["CategoryEditorComponent"] },
            { path: "categories/:mode", component: _categoryEditor_component__WEBPACK_IMPORTED_MODULE_13__["CategoryEditorComponent"] },
            { path: "categories", component: _categoryTable_component__WEBPACK_IMPORTED_MODULE_12__["CategoryTableComponent"] },
            { path: "orders", component: _orderTable_component__WEBPACK_IMPORTED_MODULE_11__["OrderTableComponent"] },
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_model_model_module__WEBPACK_IMPORTED_MODULE_8__["ModelModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], routing],
            providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], _admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
                _productTable_component__WEBPACK_IMPORTED_MODULE_10__["ProductTableComponent"], _productEditor_component__WEBPACK_IMPORTED_MODULE_9__["ProductEditorComponent"],
                _categoryTable_component__WEBPACK_IMPORTED_MODULE_12__["CategoryTableComponent"], _categoryEditor_component__WEBPACK_IMPORTED_MODULE_13__["CategoryEditorComponent"],
                _orderTable_component__WEBPACK_IMPORTED_MODULE_11__["OrderTableComponent"]]
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

module.exports = "<div class=\"bg-info p-2 text-center text-white\">\r\n    <h3>SportsStore Admin</h3>\r\n</div>\r\n<div class=\"bg-danger mt-2 p-2 text-center text-white\" *ngIf=\"errorMessage != null\">\r\n    {{errorMessage}}\r\n</div>\r\n<div class=\"p-2\">\r\n    <form novalidate #form=\"ngForm\" (ngSubmit)=\"authenticate(form)\">\r\n        <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" required />\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" required />\r\n        </div>\r\n        <div class=\"text-center\">\r\n            <button class=\"btn btn-secondary m-1\" routerLink=\"/\" type=\"button\">Go back</button>\r\n            <button class=\"btn btn-primary m-1\" type=\"submit\">Log In</button>\r\n        </div>\r\n    </form>\r\n</div>"

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
            }, function (error) {
                _this.errorMessage = error.message;
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



/***/ }),

/***/ "./src/app/admin/categoryEditor.component.html":
/*!*****************************************************!*\
  !*** ./src/app/admin/categoryEditor.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-primary p-2 text-white\" [class.bg-warning]=\"editing\" [class.text-dark]=\"editing\">\r\n    <h5>{{editing ? \"Edit\" : \"Create\"}} Category</h5>\r\n</div>\r\n\r\n<form novalidate #form=\"ngForm\" (ngSubmit)=\"save(form)\">\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input class=\"form-control\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"category.name\" required />\r\n        <span *ngIf=\"submitted && name.invalid \" class=\"text-danger\">\r\n            Please enter Category name\r\n        </span>\r\n    </div>   \r\n    \r\n    <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea class=\"form-control\" #description=\"ngModel\" name=\"description\" [(ngModel)]=\"category.description\" required>\r\n        </textarea>\r\n        <span *ngIf=\"submitted && description.invalid \" class=\"text-danger\">\r\n            Please enter Product Description\r\n        </span>\r\n    </div>\r\n    \r\n    <button type=\"submit\" class=\"btn btn-primary mr-1\" [class.btn-warning]=\"editing\">\r\n        {{editing ? \"Save\" : \"Create\"}}\r\n    </button>\r\n    <button type=\"reset\" class=\"btn btn-secondary\" routerLink=\"/admin/main/categories\">\r\n        Cancel\r\n    </button>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/categoryEditor.component.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/categoryEditor.component.ts ***!
  \***************************************************/
/*! exports provided: CategoryEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryEditorComponent", function() { return CategoryEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../AngularTypeScript/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");
/* harmony import */ var _model_category_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/category.model */ "./src/app/model/category.model.ts");





var CategoryEditorComponent = /** @class */ (function () {
    function CategoryEditorComponent(repository, router, activeRoute) {
        this.repository = repository;
        this.router = router;
        this.editing = false;
        this.category = new _model_category_model__WEBPACK_IMPORTED_MODULE_4__["default"]();
        this.submitted = false;
        this.categoryId = "";
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        this.categoryId = activeRoute.snapshot.params["id"];
    }
    CategoryEditorComponent.prototype.save = function (form) {
        // console.log(this.product.categoryId);
        this.submitted = true;
        if (form.valid) {
            // console.log(this.category);
            this.repository.saveCategory(this.category);
            this.router.navigateByUrl("/admin/main/categories");
        }
    };
    CategoryEditorComponent.prototype.ngOnInit = function () {
        if (this.editing) {
            Object.assign(this.category, this.repository.getCategory(this.categoryId));
        }
    };
    CategoryEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./categoryEditor.component.html */ "./src/app/admin/categoryEditor.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_product_repository__WEBPACK_IMPORTED_MODULE_3__["ProductRepository"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CategoryEditorComponent);
    return CategoryEditorComponent;
}());



/***/ }),

/***/ "./src/app/admin/categoryTable.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/categoryTable.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <!-- <th>ID</th> -->\r\n            <th>Category Name</th>\r\n            <th>Description</th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let c of categories\">\r\n            <!-- <td>{{c.id}}</td> -->\r\n            <td>{{c.name}}</td>\r\n            <td>{{c.description}}</td>\r\n            <td>\r\n                <button class=\"btn btn-sm btn-warning mr-1\" [routerLink]=\"['/admin/main/categories/edit', c.id]\">\r\n                    Edit\r\n                </button>\r\n                <button class=\"btn btn-sm btn-danger\" (click)=\"deleteCategory(c.id)\">\r\n                    Delete\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-primary\" routerLink=\"/admin/main/categories/create\">\r\n    Create New Category\r\n</button>"

/***/ }),

/***/ "./src/app/admin/categoryTable.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/categoryTable.component.ts ***!
  \**************************************************/
/*! exports provided: CategoryTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryTableComponent", function() { return CategoryTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");



var CategoryTableComponent = /** @class */ (function () {
    function CategoryTableComponent(repository) {
        this.repository = repository;
    }
    CategoryTableComponent.prototype.deleteCategory = function (id) {
        this.repository.deleteCategory(id);
    };
    Object.defineProperty(CategoryTableComponent.prototype, "categories", {
        get: function () {
            return this.repository.getCategories();
        },
        enumerable: true,
        configurable: true
    });
    CategoryTableComponent.prototype.ngOnInit = function () {
        this.repository.loadData();
    };
    CategoryTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./categoryTable.component.html */ "./src/app/admin/categoryTable.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_product_repository__WEBPACK_IMPORTED_MODULE_2__["ProductRepository"]])
    ], CategoryTableComponent);
    return CategoryTableComponent;
}());



/***/ }),

/***/ "./src/app/admin/orderTable.component.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/orderTable.component.ts ***!
  \***********************************************/
/*! exports provided: OrderTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderTableComponent", function() { return OrderTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");


var OrderTableComponent = /** @class */ (function () {
    function OrderTableComponent() {
    }
    OrderTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: "<div class=\"bg-primary p-2 text-white\">\n            <h3>Order Table Placeholder</h3>\n            </div>"
        })
    ], OrderTableComponent);
    return OrderTableComponent;
}());



/***/ }),

/***/ "./src/app/admin/productEditor.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/productEditor.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-primary p-2 text-white\" [class.bg-warning]=\"editing\" [class.text-dark]=\"editing\">\r\n    <h5>{{editing ? \"Edit\" : \"Create\"}} Product</h5>\r\n</div>\r\n\r\n<form novalidate #form=\"ngForm\" (ngSubmit)=\"save(form)\">\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input class=\"form-control\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"product.name\" required />\r\n        <span *ngIf=\"submitted && name.invalid \" class=\"text-danger\">\r\n            Please enter Product name\r\n        </span>\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n        <label>Category</label>\r\n        <select class=\"form-control\" #categoryId=\"ngModel\" name=\"categoryId\" [(ngModel)]=\"product.categoryId\" required\r\n            (change)=\"changeCategory($event.target.value)\" >\r\n            <option *ngFor=\"let category of categories\" value={{category.id}}>\r\n                {{category.name}}\r\n            </option>\r\n        </select>\r\n        <span *ngIf=\"submitted && categoryId.invalid \" class=\"text-danger\">\r\n            Please select Product category\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea class=\"form-control\" #description=\"ngModel\" name=\"description\" [(ngModel)]=\"product.description\" required>\r\n        </textarea>\r\n        <span *ngIf=\"submitted && description.invalid \" class=\"text-danger\">\r\n            Please enter Product Description\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Price</label>\r\n        <input class=\"form-control\" #price=\"ngModel\" name=\"price\" [(ngModel)]=\"product.price\" required />\r\n        <span *ngIf=\"submitted && price.invalid \" class=\"text-danger\">\r\n            Please enter Product Price\r\n        </span>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary mr-1\" [class.btn-warning]=\"editing\">\r\n        {{editing ? \"Save\" : \"Create\"}}\r\n    </button>\r\n    <button type=\"reset\" class=\"btn btn-secondary\" routerLink=\"/admin/main/products\">\r\n        Cancel\r\n    </button>\r\n</form>"

/***/ }),

/***/ "./src/app/admin/productEditor.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/productEditor.component.ts ***!
  \**************************************************/
/*! exports provided: ProductEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditorComponent", function() { return ProductEditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../AngularTypeScript/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/product.model */ "./src/app/model/product.model.ts");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");





var ProductEditorComponent = /** @class */ (function () {
    function ProductEditorComponent(repository, router, activeRoute) {
        this.repository = repository;
        this.router = router;
        this.editing = false;
        this.product = new _model_product_model__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.productId = "";
        this.categories = [];
        this.submitted = false;
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        this.productId = activeRoute.snapshot.params["id"];
    }
    ProductEditorComponent.prototype.save = function (form) {
        // console.log(this.product.categoryId);
        this.submitted = true;
        if (form.valid) {
            //console.log(this.product);
            this.repository.saveProduct(this.product);
            this.router.navigateByUrl("/admin/main/products");
        }
        else {
            //this.submitted = false;
        }
    };
    ProductEditorComponent.prototype.changeCategory = function (categoryId) {
        console.log(categoryId);
    };
    ProductEditorComponent.prototype.ngOnInit = function () {
        if (this.editing) {
            Object.assign(this.product, this.repository.getProduct(this.productId));
            // console.log(product);
        }
        this.categories = this.repository.getCategories();
    };
    ProductEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./productEditor.component.html */ "./src/app/admin/productEditor.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_product_repository__WEBPACK_IMPORTED_MODULE_4__["ProductRepository"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProductEditorComponent);
    return ProductEditorComponent;
}());



/***/ }),

/***/ "./src/app/admin/productTable.component.html":
/*!***************************************************!*\
  !*** ./src/app/admin/productTable.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-sm table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <!-- <th>ID</th> -->\r\n            <th>Name</th>\r\n            <th>Category</th>\r\n            <th>Price</th>\r\n            <th></th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let p of products\">\r\n            <!-- <td>{{p.id}}</td> -->\r\n            <td>{{p.name}}</td>\r\n            <td>{{p.categoryName}}</td>\r\n            <td>{{p.price | currency:\"USD\":\"symbol\":\"2.2-2\"}}</td>\r\n            <td>\r\n                <button class=\"btn btn-sm btn-warning mr-1\" [routerLink]=\"['/admin/main/products/edit', p.id]\">\r\n                    Edit\r\n                </button>\r\n                <button class=\"btn btn-sm btn-danger\" (click)=\"deleteProduct(p.id)\">\r\n                    Delete\r\n                </button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<button class=\"btn btn-primary\" routerLink=\"/admin/main/products/create\">\r\n    Create New Product\r\n</button>"

/***/ }),

/***/ "./src/app/admin/productTable.component.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/productTable.component.ts ***!
  \*************************************************/
/*! exports provided: ProductTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTableComponent", function() { return ProductTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");



var ProductTableComponent = /** @class */ (function () {
    function ProductTableComponent(repository) {
        this.repository = repository;
    }
    Object.defineProperty(ProductTableComponent.prototype, "products", {
        get: function () {
            return this.repository.getProducts();
        },
        enumerable: true,
        configurable: true
    });
    ProductTableComponent.prototype.deleteProduct = function (id) {
        this.repository.deleteProduct(id);
    };
    ProductTableComponent.prototype.ngOnInit = function () {
        this.repository.loadData();
    };
    ProductTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./productTable.component.html */ "./src/app/admin/productTable.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_product_repository__WEBPACK_IMPORTED_MODULE_2__["ProductRepository"]])
    ], ProductTableComponent);
    return ProductTableComponent;
}());



/***/ }),

/***/ "./src/app/model/category.model.ts":
/*!*****************************************!*\
  !*** ./src/app/model/category.model.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Category = /** @class */ (function () {
    function Category(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    return Category;
}());
/* harmony default export */ __webpack_exports__["default"] = (Category);


/***/ }),

/***/ "./src/app/model/product.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/product.model.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Product = /** @class */ (function () {
    function Product(id, name, description, price, categoryId, categoryName) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        // categoryId = category.id;
        //console.log("constructor call: " + this);
    }
    return Product;
}());
/* harmony default export */ __webpack_exports__["default"] = (Product);


/***/ })

}]);
//# sourceMappingURL=admin-admin-module.js.map