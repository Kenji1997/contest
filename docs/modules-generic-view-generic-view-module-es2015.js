(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-generic-view-generic-view-module"],{

/***/ "./src/app/modules/generic-view/generic-view-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/generic-view/generic-view-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: GenericViewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericViewRoutingModule", function() { return GenericViewRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _generic_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./generic-view.component */ "./src/app/modules/generic-view/generic-view.component.ts");





const routes = [{
        path: '',
        component: _generic_view_component__WEBPACK_IMPORTED_MODULE_2__["GenericViewComponent"]
    }];
class GenericViewRoutingModule {
}
GenericViewRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GenericViewRoutingModule });
GenericViewRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GenericViewRoutingModule_Factory(t) { return new (t || GenericViewRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GenericViewRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericViewRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/generic-view/generic-view.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/generic-view/generic-view.component.ts ***!
  \****************************************************************/
/*! exports provided: GenericViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericViewComponent", function() { return GenericViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GenericViewComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
GenericViewComponent.ɵfac = function GenericViewComponent_Factory(t) { return new (t || GenericViewComponent)(); };
GenericViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GenericViewComponent, selectors: [["app-generic-view"]], decls: 10, vars: 0, consts: [["id", "generic-view"]], template: function GenericViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Generic View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hello guys,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This is a default page.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Please enter some texts to the search box and press Enter to go to the Diagnostic Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbW9kdWxlcy9nZW5lcmljLXZpZXcvZ2VuZXJpYy12aWV3LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tb2R1bGVzL2dlbmVyaWMtdmlldy9nZW5lcmljLXZpZXcuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2dlbmVyaWMtdmlldy9nZW5lcmljLXZpZXcuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDE7XG59IiwiOmhvc3Qge1xuICBmbGV4OiAxO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-generic-view',
                templateUrl: './generic-view.component.html',
                styleUrls: ['./generic-view.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/modules/generic-view/generic-view.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/generic-view/generic-view.module.ts ***!
  \*************************************************************/
/*! exports provided: GenericViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericViewModule", function() { return GenericViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xng-breadcrumb */ "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");
/* harmony import */ var _generic_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generic-view.component */ "./src/app/modules/generic-view/generic-view.component.ts");
/* harmony import */ var _generic_view_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generic-view-routing.module */ "./src/app/modules/generic-view/generic-view-routing.module.ts");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared-components/shared-components.module */ "./src/app/shared-components/shared-components.module.ts");







class GenericViewModule {
}
GenericViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GenericViewModule });
GenericViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GenericViewModule_Factory(t) { return new (t || GenericViewModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _generic_view_routing_module__WEBPACK_IMPORTED_MODULE_4__["GenericViewRoutingModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
            xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GenericViewModule, { declarations: [_generic_view_component__WEBPACK_IMPORTED_MODULE_3__["GenericViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _generic_view_routing_module__WEBPACK_IMPORTED_MODULE_4__["GenericViewRoutingModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
        xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GenericViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_generic_view_component__WEBPACK_IMPORTED_MODULE_3__["GenericViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _generic_view_routing_module__WEBPACK_IMPORTED_MODULE_4__["GenericViewRoutingModule"],
                    _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
                    xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"],
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-generic-view-generic-view-module-es2015.js.map