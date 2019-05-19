(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["store-store-module"],{

/***/ "./src/app/store/cartDetail.component.html":
/*!*************************************************!*\
  !*** ./src/app/store/cartDetail.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col bg-dark text-white\">\r\n            <a class=\"navbar-brand\">SPORTS STORE</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col mt-2\">\r\n            <h2 class=\"text-center\">Your Cart</h2>\r\n            <table class=\"table table-bordered table-striped p-2\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Quantity</th>\r\n                        <th>Product</th>\r\n                        <th class=\"text-right\">Price</th>\r\n                        <th class=\"text-right\">Subtotal</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngIf=\"cart.lines.length == 0\">\r\n                        <td colspan=\"4\" class=\"text-center\">\r\n                            Your cart is empty\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngFor=\"let line of cart.lines\">\r\n                        <td>\r\n                            <input type=\"number\" class=\"form-control-sm\" style=\"width:5em\" [value]=\"line.quantity\"\r\n                                (change)=\"cart.updateQuantity(line.product, $event.target.value)\" />\r\n                        </td>\r\n                        <td>{{line.product.name}}</td>\r\n                        <td class=\"text-right\">\r\n                            {{line.product.price | currency:\"USD\":'symbol':\"2.2-2\"}}\r\n                        </td>\r\n                        <td class=\"text-right\">\r\n                            {{(line.lineTotal) | currency:\"USD\":'symbol':\"2.2-2\" }}\r\n                        </td>\r\n                        <td class=\"text-center\"><button class=\"btn btn-sm btn-danger\"\r\n                                (click)=\"cart.removeLine(line.product.id)\">\r\n                                Remove\r\n                            </button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                    <tr>\r\n                        <td colspan=\"3\" class=\"text-right\">Total:</td>\r\n                        <td class=\"text-right\">\r\n                            {{cart.cartPrice | currency:\"USD\":\"symbol\":\"2.2-2\"}}\r\n                        </td>\r\n                    </tr>\r\n                </tfoot>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col\">\r\n            <div class=\"text-center\">\r\n                <button class=\"btn btn-primary m-1\" routerLink=\"/store\">\r\n                    Continue Shopping\r\n                </button>\r\n                <button class=\"btn btn-secondary m-1\" routerLink=\"/store/checkout\" [disabled]=\"cart.lines.length == 0\">\r\n                    Checkout\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/store/cartDetail.component.ts":
/*!***********************************************!*\
  !*** ./src/app/store/cartDetail.component.ts ***!
  \***********************************************/
/*! exports provided: CartDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartDetailComponent", function() { return CartDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");



var CartDetailComponent = /** @class */ (function () {
    function CartDetailComponent(cart) {
        this.cart = cart;
    }
    CartDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // template: `<div><h3 class="bg-info p-1 text-white">Cart Detail Component</h3></div>`,
            template: __webpack_require__(/*! ./cartDetail.component.html */ "./src/app/store/cartDetail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_cart_model__WEBPACK_IMPORTED_MODULE_2__["Cart"]])
    ], CartDetailComponent);
    return CartDetailComponent;
}());



/***/ }),

/***/ "./src/app/store/cartSummary.component.html":
/*!**************************************************!*\
  !*** ./src/app/store/cartSummary.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"float-right\">\r\n    <small>\r\n        Your cart:\r\n        <span *ngIf=\"cart.itemCount > 0\">\r\n            {{ cart.itemCount }} item(s)\r\n            {{ cart.cartPrice | currency:\"USD\":\"symbol\":\"2.2-2\" }}\r\n        </span>\r\n        <span *ngIf=\"cart.itemCount == 0\">\r\n            (empty)\r\n        </span>\r\n    </small>\r\n    <button class=\"btn btn-sm bg-dark text-white\" [disabled]=\"cart.itemCount == 0\" routerLink=\"/store/cart\">\r\n        <i class=\"fa fa-shopping-cart\"></i>\r\n    </button>\r\n</div>"

/***/ }),

/***/ "./src/app/store/cartSummary.component.ts":
/*!************************************************!*\
  !*** ./src/app/store/cartSummary.component.ts ***!
  \************************************************/
/*! exports provided: CartSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartSummaryComponent", function() { return CartSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");



var CartSummaryComponent = /** @class */ (function () {
    function CartSummaryComponent(cart) {
        this.cart = cart;
    }
    CartSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "cart-summary",
            template: __webpack_require__(/*! ./cartSummary.component.html */ "./src/app/store/cartSummary.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_cart_model__WEBPACK_IMPORTED_MODULE_2__["Cart"]])
    ], CartSummaryComponent);
    return CartSummaryComponent;
}());



/***/ }),

/***/ "./src/app/store/checkout.component.css":
/*!**********************************************!*\
  !*** ./src/app/store/checkout.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.ng-dirty.ng-invalid { border: 2px solid #ff0000 }\r\ninput.ng-dirty.ng-valid { border: 2px solid #6bc502 }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvcmUvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIsMEJBQTBCO0FBQ3RELDBCQUEwQiwwQkFBMEIiLCJmaWxlIjoic3JjL2FwcC9zdG9yZS9jaGVja291dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQubmctZGlydHkubmctaW52YWxpZCB7IGJvcmRlcjogMnB4IHNvbGlkICNmZjAwMDAgfVxyXG5pbnB1dC5uZy1kaXJ0eS5uZy12YWxpZCB7IGJvcmRlcjogMnB4IHNvbGlkICM2YmM1MDIgfSJdfQ== */"

/***/ }),

/***/ "./src/app/store/checkout.component.html":
/*!***********************************************!*\
  !*** ./src/app/store/checkout.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col bg-dark text-white\">\r\n            <a class=\"navbar-brand\">SPORTS STORE</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"orderSent\" class=\"m-2 text-center\">\r\n    <h2>Thanks!</h2>\r\n    <p>Thanks for placing your order.</p>\r\n    <p>We'll ship your goods as soon as possible.</p>\r\n    <button class=\"btn btn-primary\" routerLink=\"/store\">Return to Store</button>\r\n</div>\r\n<form *ngIf=\"!orderSent\" #form=\"ngForm\" novalidate (ngSubmit)=\"submitOrder(form)\" class=\"m-2\">\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input class=\"form-control\" #name=\"ngModel\" name=\"name\" [(ngModel)]=\"order.name\" required />\r\n        <span *ngIf=\"submitted && name.invalid\" class=\"text-danger\">\r\n            Please enter your name\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Address</label>\r\n        <input class=\"form-control\" #address=\"ngModel\" name=\"address\" [(ngModel)]=\"order.address\" required />\r\n        <span *ngIf=\"submitted && address.invalid\" class=\"text-danger\">\r\n            Please enter your address\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>City</label>\r\n        <input class=\"form-control\" #city=\"ngModel\" name=\"city\" [(ngModel)]=\"order.city\" required />\r\n        <span *ngIf=\"submitted && city.invalid\" class=\"text-danger\">\r\n            Please enter your city\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>State</label>\r\n        <input class=\"form-control\" #state=\"ngModel\" name=\"state\" [(ngModel)]=\"order.state\" required />\r\n        <span *ngIf=\"submitted && state.invalid\" class=\"text-danger\">\r\n            Please enter your state\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Zip/Postal Code</label>\r\n        <input class=\"form-control\" #zip=\"ngModel\" name=\"zip\" [(ngModel)]=\"order.zip\" required />\r\n        <span *ngIf=\"submitted && zip.invalid\" class=\"text-danger\">\r\n            Please enter your zip/postal code\r\n        </span>\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label>Country</label>\r\n        <input class=\"form-control\" #country=\"ngModel\" name=\"country\" [(ngModel)]=\"order.country\" required />\r\n        <span *ngIf=\"submitted && country.invalid\" class=\"text-danger\">\r\n            Please enter your country\r\n        </span>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <button class=\"btn btn-secondary m-1\" routerLink=\"/store/cart\" type=\"button\">Back</button>\r\n        <button class=\"btn btn-primary m-1\" type=\"submit\">Complete Order</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./src/app/store/checkout.component.ts":
/*!*********************************************!*\
  !*** ./src/app/store/checkout.component.ts ***!
  \*********************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_order_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/order.model */ "./src/app/model/order.model.ts");
/* harmony import */ var _model_order_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/order.repository */ "./src/app/model/order.repository.ts");




var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(repository, order) {
        this.repository = repository;
        this.order = order;
        this.orderSent = false;
        this.submitted = false;
    }
    CheckoutComponent.prototype.submitOrder = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(function (order) {
                //TODO: do something with order
                _this.order.clear();
                _this.orderSent = true;
                _this.submitted = false;
            });
        }
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // template: `<div><h3 class="bg-info p-1 text-white">Checkout Component</h3></div>`
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/store/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/store/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_order_repository__WEBPACK_IMPORTED_MODULE_3__["OrderRepository"], _model_order_model__WEBPACK_IMPORTED_MODULE_2__["Order"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/store/counter.directive.ts":
/*!********************************************!*\
  !*** ./src/app/store/counter.directive.ts ***!
  \********************************************/
/*! exports provided: CounterDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterDirective", function() { return CounterDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");


var CounterDirective = /** @class */ (function () {
    function CounterDirective(container, template) {
        this.container = container;
        this.template = template;
    }
    CounterDirective.prototype.ngOnChanges = function (changes) {
        this.container.clear();
        for (var i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("counterOf"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CounterDirective.prototype, "counter", void 0);
    CounterDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[counterOf]"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], CounterDirective);
    return CounterDirective;
}());

var CounterDirectiveContext = /** @class */ (function () {
    function CounterDirectiveContext($implicit) {
        this.$implicit = $implicit;
    }
    return CounterDirectiveContext;
}());


/***/ }),

/***/ "./src/app/store/store.component.html":
/*!********************************************!*\
  !*** ./src/app/store/store.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"navbar navbar-inverse bg-inverse\">\r\n    <a class=\"navbar-brand\">SPORTS STORE</a>\r\n</div>\r\n<div class=\"col-xs-3 bg-info p-1\">\r\n    {{categories.length}} Categories\r\n</div>\r\n<div class=\"col-xs-9 bg-success p-1\">\r\n    {{products.length}} Products\r\n</div> -->\r\n\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"col bg-dark text-white\">\r\n            <a class=\"navbar-brand\">SPORTS STORE</a>\r\n            <cart-summary></cart-summary>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-3 p-2\">\r\n            <button class=\"btn btn-block btn-outline-primary\" [class.active]=\"undefined == selectedCategoryId\"\r\n                (click)=\"changeCategory()\">\r\n                Home\r\n            </button>\r\n            <button *ngFor=\"let cat of categories\" class=\"btn btn-outline-primary btn-block\"\r\n                [class.active]=\"cat.id == selectedCategoryId\" (click)=\"changeCategory(cat.id)\">\r\n                {{cat.name}}\r\n            </button>\r\n            <button class=\"btn btn-block btn-danger mt-3\" routerLink=\"/admin\">\r\n                Admin\r\n            </button>\r\n        </div>\r\n        <div class=\"col-9 p-2\">\r\n            <div *ngFor=\"let product of products\" class=\"card m-1 p-1 bg-light\">\r\n                <h4>\r\n                    {{product.name}}\r\n                    <span class=\"badge badge-pill badge-primary float-right\">\r\n                        {{ product.price | currency:\"USD\":\"symbol\":\"2.2-2\" }}\r\n                    </span>\r\n                </h4>\r\n                <div class=\"card-text bg-white p-1\">\r\n                    {{product.description}}\r\n                    <button class=\"btn btn-success btn-sm float-right\" (click)=\"addProductToCart(product)\">\r\n                        Add To Cart\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-inline float-left\">\r\n                <select class=\"form-control\" [value]=\"productsPerPage\" (change)=\"changePageSize($event.target.value)\">\r\n                    <option value=\"3\">3 per Page</option>\r\n                    <option value=\"4\">4 per Page</option>\r\n                    <option value=\"6\">6 per Page</option>\r\n                    <option value=\"8\">8 per Page</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"btn-group float-right\">\r\n                <button *counter=\"let page of pageCount\" (click)=\"changePage(page)\" class=\"btn btn-outline-primary\"\r\n                    [class.active]=\"page == selectedPage\">\r\n                    {{page}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../AngularTypeScript/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _model_product_repository__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/product.repository */ "./src/app/model/product.repository.ts");
/* harmony import */ var _model_cart_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/cart.model */ "./src/app/model/cart.model.ts");





var StoreComponent = /** @class */ (function () {
    // public valueType;
    function StoreComponent(repository, cart, router) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.selectedCategoryId = null;
        this.productsPerPage = 4;
        this.selectedPage = 1;
    }
    Object.defineProperty(StoreComponent.prototype, "products", {
        get: function () {
            // console.log('produts getter called')        
            var pageIndex = (this.selectedPage - 1) * this.productsPerPage;
            return this.repository.getProducts(this.selectedCategoryId)
                .slice(pageIndex, pageIndex + this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreComponent.prototype, "categories", {
        get: function () {
            return this.repository.getCategories();
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.changeCategory = function (newCategoryId) {
        this.selectedCategoryId = newCategoryId;
    };
    StoreComponent.prototype.changePage = function (newPage) {
        this.selectedPage = newPage;
    };
    StoreComponent.prototype.changePageSize = function (newSize) {
        //console.log('--------');// dosn't work
        // this.valueType = Number(newSize);
        // console.log(this.valueType);
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    };
    Object.defineProperty(StoreComponent.prototype, "pageCount", {
        // get pageNumbers(): number[] {
        //     return Array(Math.ceil(this.repository
        //         .getProducts(this.selectedCategory).length / this.productsPerPage))
        //         .fill(0).map((x, i) => i + 1);
        // }
        get: function () {
            return Math.ceil(this.repository
                .getProducts(this.selectedCategoryId).length / this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.addProductToCart = function (product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/store/cart");
    };
    StoreComponent.prototype.ngOnInit = function () {
        this.repository.loadData();
    };
    StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "store",
            template: __webpack_require__(/*! ./store.component.html */ "./src/app/store/store.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_model_product_repository__WEBPACK_IMPORTED_MODULE_3__["ProductRepository"], _model_cart_model__WEBPACK_IMPORTED_MODULE_4__["Cart"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StoreComponent);
    return StoreComponent;
}());



/***/ }),

/***/ "./src/app/store/store.module.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.module.ts ***!
  \***************************************/
/*! exports provided: StoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreModule", function() { return StoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../AngularTypeScript/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../AngularTypeScript/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _model_model_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/model.module */ "./src/app/model/model.module.ts");
/* harmony import */ var _counter_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./counter.directive */ "./src/app/store/counter.directive.ts");
/* harmony import */ var _cartSummary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cartSummary.component */ "./src/app/store/cartSummary.component.ts");
/* harmony import */ var _cartDetail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cartDetail.component */ "./src/app/store/cartDetail.component.ts");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout.component */ "./src/app/store/checkout.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "../AngularTypeScript/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _storeFirst_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../storeFirst.guard */ "./src/app/storeFirst.guard.ts");












var routing = _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild([
    { path: "", component: _store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"] },
    { path: "cart", component: _cartDetail_component__WEBPACK_IMPORTED_MODULE_8__["CartDetailComponent"] },
    { path: "checkout", component: _checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"] },
    { path: "**", redirectTo: "" }
]);
var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_model_model_module__WEBPACK_IMPORTED_MODULE_5__["ModelModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"], routing],
            declarations: [_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"], _counter_directive__WEBPACK_IMPORTED_MODULE_6__["CounterDirective"], _cartSummary_component__WEBPACK_IMPORTED_MODULE_7__["CartSummaryComponent"], _cartDetail_component__WEBPACK_IMPORTED_MODULE_8__["CartDetailComponent"], _checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"]],
            providers: [_storeFirst_guard__WEBPACK_IMPORTED_MODULE_11__["StoreFirstGuard"]],
            exports: [_store_component__WEBPACK_IMPORTED_MODULE_4__["StoreComponent"], _cartDetail_component__WEBPACK_IMPORTED_MODULE_8__["CartDetailComponent"], _checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"]]
        })
    ], StoreModule);
    return StoreModule;
}());



/***/ }),

/***/ "./src/app/storeFirst.guard.ts":
/*!*************************************!*\
  !*** ./src/app/storeFirst.guard.ts ***!
  \*************************************/
/*! exports provided: StoreFirstGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFirstGuard", function() { return StoreFirstGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../AngularTypeScript/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../AngularTypeScript/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../AngularTypeScript/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");




var StoreFirstGuard = /** @class */ (function () {
    function StoreFirstGuard(router) {
        this.router = router;
        this.firstNavigation = true;
    }
    StoreFirstGuard.prototype.canActivate = function (route, state) {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component != _store_store_component__WEBPACK_IMPORTED_MODULE_3__["StoreComponent"]) {
                this.router.navigateByUrl("/store");
                return false;
            }
        }
        return true;
    };
    StoreFirstGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], StoreFirstGuard);
    return StoreFirstGuard;
}());



/***/ })

}]);
//# sourceMappingURL=store-store-module.js.map