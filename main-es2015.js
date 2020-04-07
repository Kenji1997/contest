(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./projects/classify-text-swagger-client/dist/fesm2015/classify-text-swagger-client.js":
/*!*********************************************************************************************!*\
  !*** ./projects/classify-text-swagger-client/dist/fesm2015/classify-text-swagger-client.js ***!
  \*********************************************************************************************/
/*! exports provided: APIS, ApiModule, BASE_PATH, COLLECTION_FORMATS, Configuration, DefaultService, TextInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultService", function() { return DefaultService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return TextInput; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
class CustomHttpUrlEncodingCodec extends _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpUrlEncodingCodec"] {
    encodeKey(k) {
        k = super.encodeKey(k);
        return k.replace(/\+/gi, '%2B');
    }
    encodeValue(v) {
        v = super.encodeValue(v);
        return v.replace(/\+/gi, '%2B');
    }
}

const BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};

class Configuration {
    constructor(configurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderContentType(contentTypes) {
        if (contentTypes.length == 0) {
            return undefined;
        }
        let type = contentTypes.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    selectHeaderAccept(accepts) {
        if (accepts.length == 0) {
            return undefined;
        }
        let type = accepts.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    isJsonMime(mime) {
        const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}

/**
 * Classify text into risk scores
 * Will take text and classify it via risk
 *
 * OpenAPI spec version: 2.0.1
 * Contact: support@twohat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */ /* tslint:disable:no-unused-variable member-ordering */
class DefaultService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://virtserver.swaggerhub.com/twohat/classifyText/2.0.1';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new Configuration();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    canConsumeForm(consumes) {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }
    classifyLanguage(observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        return this.httpClient.request('post', `${this.basePath}/classify/language`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    classifyText(body, extended, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new CustomHttpUrlEncodingCodec() });
        if (extended !== undefined && extended !== null) {
            queryParameters = queryParameters.set('extended', extended);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.request('post', `${this.basePath}/classify/text`, {
            body: body,
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    classifyTextBulk(body, extended, observe = 'body', reportProgress = false) {
        let queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new CustomHttpUrlEncodingCodec() });
        if (extended !== undefined && extended !== null) {
            queryParameters = queryParameters.set('extended', extended);
        }
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [
            'application/json'
        ];
        const httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }
        return this.httpClient.request('post', `${this.basePath}/classify/textBulk`, {
            body: body,
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    statusGet(observe = 'body', reportProgress = false) {
        let headers = this.defaultHeaders;
        // to determine the Accept header
        let httpHeaderAccepts = [
            'application/json'
        ];
        const httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        const consumes = [];
        return this.httpClient.request('get', `${this.basePath}/status`, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    }
}
DefaultService.ɵfac = function DefaultService_Factory(t) { return new (t || DefaultService)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(BASE_PATH, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(Configuration, 8)); };
DefaultService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: DefaultService, factory: DefaultService.ɵfac });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(DefaultService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [BASE_PATH]
            }] }, { type: Configuration, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();

const APIS = [DefaultService];

var TextInput;
(function (TextInput) {
    TextInput.ContentTypeEnum = {
        SHORTTEXT: 'SHORT_TEXT',
        LONGTEXT: 'LONG_TEXT',
        USERNAME: 'USERNAME'
    };
})(TextInput || (TextInput = {}));

class ApiModule {
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    }
}
ApiModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: ApiModule });
ApiModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function ApiModule_Factory(t) { return new (t || ApiModule)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ApiModule, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], 8)); }, providers: [
        DefaultService
    ], imports: [[]] });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(ApiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [],
                declarations: [],
                exports: [],
                providers: [
                    DefaultService
                ]
            }]
    }], function () { return [{ type: ApiModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=classify-text-swagger-client.js.map


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | modules-generic-view-generic-view-module */ "modules-generic-view-generic-view-module").then(__webpack_require__.bind(null, /*! ./modules/generic-view/generic-view.module */ "./src/app/modules/generic-view/generic-view.module.ts")).then(m => m.GenericViewModule),
        data: { breadcrumb: '' }
    },
    {
        path: 'filter-quality',
        data: { breadcrumb: 'Filter Quality' },
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'audit-rules'
            },
            {
                path: 'audit-rules',
                data: { breadcrumb: 'Audit Rules' },
                children: [
                    {
                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'diagnose'
                    },
                    {
                        path: 'diagnose',
                        loadChildren: () => __webpack_require__.e(/*! import() | modules-diagnose-diagnose-module */ "modules-diagnose-diagnose-module").then(__webpack_require__.bind(null, /*! ./modules/diagnose/diagnose.module */ "./src/app/modules/diagnose/diagnose.module.ts")).then(m => m.DiagnoseModule),
                        data: { breadcrumb: 'Diagnose' },
                    }
                ],
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/header/header.component */ "./src/app/main/header/header.component.ts");
/* harmony import */ var _subnav_sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subnav/sub-navigation/sub-navigation.component */ "./src/app/subnav/sub-navigation/sub-navigation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor() {
        this.title = 'modtools-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-main-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-sub-navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_main_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _subnav_sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_2__["SubNavigationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["main[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: var(--max-page-width);\n  margin: 0 auto;\n  grid-area: core;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1em var(--page-content-padding);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0NBQUE7QUNBRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBncmlkLWFyZWE6IGNvcmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC1wYWdlLXdpZHRoKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGdyaWQtYXJlYTogY29yZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbSB2YXIoLS1wYWdlLWNvbnRlbnQtcGFkZGluZyk7XG59IiwibWFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC1wYWdlLXdpZHRoKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGdyaWQtYXJlYTogY29yZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbSB2YXIoLS1wYWdlLWNvbnRlbnQtcGFkZGluZyk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xng-breadcrumb */ "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");
/* harmony import */ var classify_text_swagger_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classify-text-swagger-client */ "./projects/classify-text-swagger-client/dist/fesm2015/classify-text-swagger-client.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subnav/subnav.module */ "./src/app/subnav/subnav.module.ts");
/* harmony import */ var src_app_shared_components_sentry_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared-components/sentry.service */ "./src/app/shared-components/sentry.service.ts");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: src_app_shared_components_sentry_service__WEBPACK_IMPORTED_MODULE_11__["SentryErrorHandler"] },
        { provide: classify_text_swagger_client__WEBPACK_IMPORTED_MODULE_5__["BASE_PATH"], useValue: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_9__["MainModule"],
            _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_10__["SubnavModule"],
            xng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            classify_text_swagger_client__WEBPACK_IMPORTED_MODULE_5__["ApiModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _main_main_module__WEBPACK_IMPORTED_MODULE_9__["MainModule"],
        _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_10__["SubnavModule"],
        xng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        classify_text_swagger_client__WEBPACK_IMPORTED_MODULE_5__["ApiModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _main_main_module__WEBPACK_IMPORTED_MODULE_9__["MainModule"],
                    _subnav_subnav_module__WEBPACK_IMPORTED_MODULE_10__["SubnavModule"],
                    xng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    classify_text_swagger_client__WEBPACK_IMPORTED_MODULE_5__["ApiModule"],
                ],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: src_app_shared_components_sentry_service__WEBPACK_IMPORTED_MODULE_11__["SentryErrorHandler"] },
                    { provide: classify_text_swagger_client__WEBPACK_IMPORTED_MODULE_5__["BASE_PATH"], useValue: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiBaseUrl },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/a11y-flyout/a11y-flyout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/a11y-flyout/a11y-flyout.component.ts ***!
  \***********************************************************/
/*! exports provided: A11yFlyoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11yFlyoutComponent", function() { return A11yFlyoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_6705781466055765630$$SRC_APP_MAIN_A11Y_FLYOUT_A11Y_FLYOUT_COMPONENT_TS_1 = goog.getMsg("ACCESSIBILITY");
    I18N_0 = MSG_EXTERNAL_6705781466055765630$$SRC_APP_MAIN_A11Y_FLYOUT_A11Y_FLYOUT_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟31b3555032404f9f4bbe13302c62ccbabb112453␟6705781466055765630:ACCESSIBILITY`;
}
class A11yFlyoutComponent {
    constructor() {
    }
}
A11yFlyoutComponent.ɵfac = function A11yFlyoutComponent_Factory(t) { return new (t || A11yFlyoutComponent)(); };
A11yFlyoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: A11yFlyoutComponent, selectors: [["app-a11y-flyout"]], decls: 2, vars: 0, consts: [[1, "disabled"]], template: function A11yFlyoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: contents;\n}\nheader[_nghost-%COMP%]   button[_ngcontent-%COMP%], header   [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: var(--button-spacing);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbWFpbi9hMTF5LWZseW91dC9hMTF5LWZseW91dC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbWFpbi9hMTF5LWZseW91dC9hMTF5LWZseW91dC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7QURFQTtFQUVJLGtDQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9tYWluL2ExMXktZmx5b3V0L2ExMXktZmx5b3V0LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBjb250ZW50cztcbn1cblxuOmhvc3QtY29udGV4dChoZWFkZXIpIHtcbiAgYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tYnV0dG9uLXNwYWNpbmcpO1xuICB9XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuOmhvc3QtY29udGV4dChoZWFkZXIpIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1idXR0b24tc3BhY2luZyk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](A11yFlyoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-a11y-flyout',
                templateUrl: './a11y-flyout.component.html',
                styleUrls: ['./a11y-flyout.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/client-picker/client-picker.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main/client-picker/client-picker.component.ts ***!
  \***************************************************************/
/*! exports provided: ClientPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPickerComponent", function() { return ClientPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var _shared_components_select_box_select_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-components/select-box/select-box.component */ "./src/app/shared-components/select-box/select-box.component.ts");




class ClientPickerComponent {
    constructor() {
        this.selectedClient = src_constants__WEBPACK_IMPORTED_MODULE_1__["DefaultClient"];
        this.clientChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // TODO: This needs to be externally sourced
        this.clients = [
            { id: 60, name: 'Live' },
            { id: 61, name: 'Sandbox' },
            { id: 0, name: 'Community Sift' }
        ];
        this.selectBoxList = this.clients.map(client => ({
            content: client.name,
            value: client.id
        }));
    }
    onClientChanged(selectedValue) {
        this.clientChanged.emit(selectedValue);
    }
}
ClientPickerComponent.ɵfac = function ClientPickerComponent_Factory(t) { return new (t || ClientPickerComponent)(); };
ClientPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClientPickerComponent, selectors: [["app-client-picker"]], inputs: { selectedClient: "selectedClient" }, outputs: { clientChanged: "clientChanged" }, decls: 1, vars: 2, consts: [[3, "listData", "selectedValue", "selectChanged"]], template: function ClientPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-select-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectChanged", function ClientPickerComponent_Template_app_select_box_selectChanged_0_listener($event) { return ctx.onClientChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("listData", ctx.selectBoxList)("selectedValue", ctx.selectedClient);
    } }, directives: [_shared_components_select_box_select_box_component__WEBPACK_IMPORTED_MODULE_2__["SelectBoxComponent"]], styles: ["header[_nghost-%COMP%], header   [_nghost-%COMP%] {\n  margin-right: var(--button-spacing);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbWFpbi9jbGllbnQtcGlja2VyL2NsaWVudC1waWNrZXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL21haW4vY2xpZW50LXBpY2tlci9jbGllbnQtcGlja2VyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21haW4vY2xpZW50LXBpY2tlci9jbGllbnQtcGlja2VyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QtY29udGV4dChoZWFkZXIpIHtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1idXR0b24tc3BhY2luZylcbn0iLCI6aG9zdC1jb250ZXh0KGhlYWRlcikge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWJ1dHRvbi1zcGFjaW5nKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-client-picker',
                templateUrl: './client-picker.component.html',
                styleUrls: ['./client-picker.component.less']
            }]
    }], function () { return []; }, { selectedClient: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], clientChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/main/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var src_app_shared_components_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared-components/user.service */ "./src/app/shared-components/user.service.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../logo/logo.component */ "./src/app/main/logo/logo.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search/search.component */ "./src/app/main/search/search.component.ts");
/* harmony import */ var _language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../language-picker/language-picker.component */ "./src/app/main/language-picker/language-picker.component.ts");
/* harmony import */ var _a11y_flyout_a11y_flyout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../a11y-flyout/a11y-flyout.component */ "./src/app/main/a11y-flyout/a11y-flyout.component.ts");
/* harmony import */ var _user_flyout_user_flyout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-flyout/user-flyout.component */ "./src/app/main/user-flyout/user-flyout.component.ts");










class HeaderComponent {
    constructor(userService) {
        this.userService = userService;
        this.defaultLanguage = src_constants__WEBPACK_IMPORTED_MODULE_2__["DefaultLanguage"];
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.user = yield this.userService.me();
        });
    }
    onUserChangedLanguage(newLanguage) {
        // Todo: Update language of page
        console.log('[HeaderComponent] onUserChangedLanguage get newLanguage:', newLanguage);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_components_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-main-header"]], decls: 6, vars: 1, consts: [[1, "main"], [3, "selectedLanguage", "languageChanged"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-main-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-main-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "app-language-picker", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("languageChanged", function HeaderComponent_Template_app_language_picker_languageChanged_3_listener($event) { return ctx.onUserChangedLanguage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-a11y-flyout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-user-flyout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedLanguage", ctx.defaultLanguage);
    } }, directives: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_4__["LogoComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_6__["LanguagePickerComponent"], _a11y_flyout_a11y_flyout_component__WEBPACK_IMPORTED_MODULE_7__["A11yFlyoutComponent"], _user_flyout_user_flyout_component__WEBPACK_IMPORTED_MODULE_8__["UserFlyoutComponent"]], styles: ["[_nghost-%COMP%] {\n  background: var(--page-header-bg);\n  padding: 1em var(--page-content-padding);\n  grid-area: header;\n}\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  max-width: var(--max-page-width);\n  margin: 0 auto;\n  position: relative;\n  z-index: 999;\n}\nlanguage-picker[_ngcontent-%COMP%]  .select-box {\n  background-color: var(--select-box-hover-bg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbWFpbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tYWluL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUNDRjtBREVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGO0FER0E7RUFDRSw0Q0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWhlYWRlci1iZyk7XG4gIHBhZGRpbmc6IDFlbSB2YXIoLS1wYWdlLWNvbnRlbnQtcGFkZGluZyk7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1heC13aWR0aDogdmFyKC0tbWF4LXBhZ2Utd2lkdGgpO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiA5OTk7XG59XG5cbmxhbmd1YWdlLXBpY2tlcjo6bmctZGVlcCAuc2VsZWN0LWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtaG92ZXItYmcpO1xufSIsIjpob3N0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tcGFnZS1oZWFkZXItYmcpO1xuICBwYWRkaW5nOiAxZW0gdmFyKC0tcGFnZS1jb250ZW50LXBhZGRpbmcpO1xuICBncmlkLWFyZWE6IGhlYWRlcjtcbn1cbmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtcGFnZS13aWR0aCk7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDk5OTtcbn1cbmxhbmd1YWdlLXBpY2tlcjo6bmctZGVlcCAuc2VsZWN0LWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtaG92ZXItYmcpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-main-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.less']
            }]
    }], function () { return [{ type: src_app_shared_components_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/language-picker/language-picker.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main/language-picker/language-picker.component.ts ***!
  \*******************************************************************/
/*! exports provided: LanguagePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagePickerComponent", function() { return LanguagePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var _shared_components_select_box_select_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared-components/select-box/select-box.component */ "./src/app/shared-components/select-box/select-box.component.ts");






var type;
(function (type) {
    type["name"] = "name";
    type["code"] = "code";
})(type || (type = {}));
class LanguagePickerComponent {
    constructor() {
        // type of selectedValue: Language name or
        this.type = type.name;
        this.selectedLanguage = 'en';
        this.languageChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.languages = [];
        this.selectBoxList = [];
        this.transformSelectedContent = null;
    }
    // Todo: Apply some logic to show allowed language by user account
    // constructor (private userService: UserService) { }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Get the current user
            // const user = await this.userService.me();
            // Filter the user's languages by the ones they're allowed to use
            // if (user?.config?.allowedLanguages) {
            //   this.languages = Languages.filter(lang =>
            //     user.config.allowedLanguages.includes(lang.code)
            //   );
            // }
            // Dummy languages for now
            this.languages = src_constants__WEBPACK_IMPORTED_MODULE_3__["Languages"];
            // Sort by language name, not code.
            this.languages = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["sortBy"])(this.languages, 'name');
            // get selectBoxList from languages
            this.selectBoxList = this.languages.map(language => ({
                content: language.name,
                value: language.code
            }));
            // transform selected content of select box
            // TODO: add more transform function here
            if (this.type === type.code) {
                this.transformSelectedContent = value => {
                    var _a;
                    const currentItem = this.languages.find(item => item.code === value);
                    return (_a = currentItem) === null || _a === void 0 ? void 0 : _a.code;
                };
            }
        });
    }
    /**
     * Fired when the user changes their language
     */
    onLanguageChanged(languageCode) {
        this.languageChanged.emit(languageCode);
    }
}
LanguagePickerComponent.ɵfac = function LanguagePickerComponent_Factory(t) { return new (t || LanguagePickerComponent)(); };
LanguagePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LanguagePickerComponent, selectors: [["app-language-picker"]], inputs: { type: "type", selectedLanguage: "selectedLanguage" }, outputs: { languageChanged: "languageChanged" }, decls: 1, vars: 3, consts: [[3, "listData", "selectedValue", "transformSelectedContent", "selectChanged"]], template: function LanguagePickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-select-box", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectChanged", function LanguagePickerComponent_Template_app_select_box_selectChanged_0_listener($event) { return ctx.onLanguageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("listData", ctx.selectBoxList)("selectedValue", ctx.selectedLanguage)("transformSelectedContent", ctx.transformSelectedContent);
    } }, directives: [_shared_components_select_box_select_box_component__WEBPACK_IMPORTED_MODULE_4__["SelectBoxComponent"]], styles: ["app-select-box[_ngcontent-%COMP%]     .select-box {\n  width: 138px;\n}\n.language--code[_nghost-%COMP%]   app-select-box[_ngcontent-%COMP%]     .select-box {\n  width: 60px;\n}\n.language--code[_nghost-%COMP%]   app-select-box[_ngcontent-%COMP%]     .select-box__list {\n  right: 0;\n  left: auto;\n  width: 138px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbWFpbi9sYW5ndWFnZS1waWNrZXIvbGFuZ3VhZ2UtcGlja2VyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tYWluL2xhbmd1YWdlLXBpY2tlci9sYW5ndWFnZS1waWNrZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFUSxZQUFBO0FDRlI7QURPQTtFQUdZLFdBQUE7QUNQWjtBRFNZO0VBQ0ksUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FDUGhCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9sYW5ndWFnZS1waWNrZXIvbGFuZ3VhZ2UtcGlja2VyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQHNlbGVjdC1ib3gtbGlzdC13aWR0aDogMTM4cHg7XG5cbmFwcC1zZWxlY3QtYm94IDo6bmctZGVlcCB7XG4gICAgLnNlbGVjdC1ib3gge1xuICAgICAgICB3aWR0aDogQHNlbGVjdC1ib3gtbGlzdC13aWR0aDtcbiAgICB9XG59XG5cbi8vIGNvZGUgc3R5bGVcbjpob3N0Lmxhbmd1YWdlLS1jb2RlIHtcbiAgICBhcHAtc2VsZWN0LWJveCA6Om5nLWRlZXAge1xuICAgICAgICAuc2VsZWN0LWJveCB7XG4gICAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJl9fbGlzdCB7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICB3aWR0aDogQHNlbGVjdC1ib3gtbGlzdC13aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJhcHAtc2VsZWN0LWJveCA6Om5nLWRlZXAgLnNlbGVjdC1ib3gge1xuICB3aWR0aDogMTM4cHg7XG59XG46aG9zdC5sYW5ndWFnZS0tY29kZSBhcHAtc2VsZWN0LWJveCA6Om5nLWRlZXAgLnNlbGVjdC1ib3gge1xuICB3aWR0aDogNjBweDtcbn1cbjpob3N0Lmxhbmd1YWdlLS1jb2RlIGFwcC1zZWxlY3QtYm94IDo6bmctZGVlcCAuc2VsZWN0LWJveF9fbGlzdCB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xuICB3aWR0aDogMTM4cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LanguagePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-language-picker',
                templateUrl: './language-picker.component.html',
                styleUrls: ['./language-picker.component.less']
            }]
    }], function () { return []; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], selectedLanguage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], languageChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/main/logo/logo.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/logo/logo.component.ts ***!
  \*********************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class LogoComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-main-logo"]], decls: 2, vars: 0, consts: [["routerLink", "/"], ["src", "/assets/community_sift-logo-rgb_official_copy.svg", 1, "logo"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  display: contents;\n}\na[_ngcontent-%COMP%], img[_ngcontent-%COMP%] {\n  display: block;\n  max-height: 50px;\n}\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbWFpbi9sb2dvL2xvZ28uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL21haW4vbG9nby9sb2dvLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUNDRjtBREVBOztFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQ0NGO0FERUE7RUFDRSxZQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9tYWluL2xvZ28vbG9nby5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5cbmEsIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXgtaGVpZ2h0OiA1MHB4O1xufVxuXG5hIGltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogY29udGVudHM7XG59XG5hLFxuaW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC1oZWlnaHQ6IDUwcHg7XG59XG5hIGltZyB7XG4gIGhlaWdodDogNTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared-components/shared-components.module */ "./src/app/shared-components/shared-components.module.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/main/logo/logo.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/main/header/header.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./search/search.component */ "./src/app/main/search/search.component.ts");
/* harmony import */ var _language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./language-picker/language-picker.component */ "./src/app/main/language-picker/language-picker.component.ts");
/* harmony import */ var _a11y_flyout_a11y_flyout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./a11y-flyout/a11y-flyout.component */ "./src/app/main/a11y-flyout/a11y-flyout.component.ts");
/* harmony import */ var _user_flyout_user_flyout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-flyout/user-flyout.component */ "./src/app/main/user-flyout/user-flyout.component.ts");
/* harmony import */ var _client_picker_client_picker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client-picker/client-picker.component */ "./src/app/main/client-picker/client-picker.component.ts");
/* harmony import */ var _topic_picker_topic_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./topic-picker/topic-picker.component */ "./src/app/main/topic-picker/topic-picker.component.ts");














class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
        _language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_8__["LanguagePickerComponent"],
        _a11y_flyout_a11y_flyout_component__WEBPACK_IMPORTED_MODULE_9__["A11yFlyoutComponent"],
        _user_flyout_user_flyout_component__WEBPACK_IMPORTED_MODULE_10__["UserFlyoutComponent"],
        _client_picker_client_picker_component__WEBPACK_IMPORTED_MODULE_11__["ClientPickerComponent"],
        _topic_picker_topic_picker_component__WEBPACK_IMPORTED_MODULE_12__["TopicPickerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_8__["LanguagePickerComponent"],
        _client_picker_client_picker_component__WEBPACK_IMPORTED_MODULE_11__["ClientPickerComponent"],
        _topic_picker_topic_picker_component__WEBPACK_IMPORTED_MODULE_12__["TopicPickerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                    _language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_8__["LanguagePickerComponent"],
                    _a11y_flyout_a11y_flyout_component__WEBPACK_IMPORTED_MODULE_9__["A11yFlyoutComponent"],
                    _user_flyout_user_flyout_component__WEBPACK_IMPORTED_MODULE_10__["UserFlyoutComponent"],
                    _client_picker_client_picker_component__WEBPACK_IMPORTED_MODULE_11__["ClientPickerComponent"],
                    _topic_picker_topic_picker_component__WEBPACK_IMPORTED_MODULE_12__["TopicPickerComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_4__["SharedComponentsModule"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_8__["LanguagePickerComponent"],
                    _client_picker_client_picker_component__WEBPACK_IMPORTED_MODULE_11__["ClientPickerComponent"],
                    _topic_picker_topic_picker_component__WEBPACK_IMPORTED_MODULE_12__["TopicPickerComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/search/search.component.ts":
/*!*************************************************!*\
  !*** ./src/app/main/search/search.component.ts ***!
  \*************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* eslint-disable no-unused-vars */





var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_4175737412520043049$$SRC_APP_MAIN_SEARCH_SEARCH_COMPONENT_TS_1 = goog.getMsg("Search for keywords, phrases, etc.");
    I18N_0 = MSG_EXTERNAL_4175737412520043049$$SRC_APP_MAIN_SEARCH_SEARCH_COMPONENT_TS_1;
}
else {
    I18N_0 = $localize `:␟704866d0ddbf5f130e4631c4ac6856c26b49d77f␟4175737412520043049:Search for keywords, phrases, etc.`;
}
const _c2 = ["placeholder", I18N_0];
const ENTER_KEY_CODE = 13;
const DIAGNOSE_URL = '/filter-quality/audit-rules/diagnose';
class SearchComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.keyWord = '';
        // initialize keyword value by url
        this.route.queryParams.subscribe(params => {
            let keyWord = '';
            if (params.hasOwnProperty(src_constants__WEBPACK_IMPORTED_MODULE_1__["DiagnoseSearchParams"])) {
                keyWord = params[src_constants__WEBPACK_IMPORTED_MODULE_1__["DiagnoseSearchParams"]];
            }
            this.keyWord = keyWord;
        });
    }
    ngOnInit() {
    }
    // binding Enter press to onSearch()
    onKey($event) {
        if ($event.keyCode === ENTER_KEY_CODE && this.keyWord.trim()) {
            this.onSearch();
        }
    }
    onSearch() {
        this.router.navigate([DIAGNOSE_URL], {
            queryParams: {
                [src_constants__WEBPACK_IMPORTED_MODULE_1__["DiagnoseSearchParams"]]: this.keyWord
            }
        });
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-main-search"]], decls: 5, vars: 1, consts: [[1, "search-wrapper"], ["type", "search", 3, "ngModel", "ngModelChange", "keyup", 6, "placeholder"], [1, "material-icons", "search-icon"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nAttributes"](2, _c2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.keyWord = $event; })("keyup", function SearchComponent_Template_input_keyup_1_listener($event) { return ctx.onKey($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keyWord);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  margin-left: 2em;\n  margin-right: 2em;\n  flex: 1;\n}\n.search-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n}\n.search-wrapper[_ngcontent-%COMP%]:hover   input[type='search'][_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: var(--input-search-hover-placeholder-fg);\n}\n.search-wrapper[_ngcontent-%COMP%]:hover   input[type='search'][_ngcontent-%COMP%]::-moz-placeholder {\n  color: var(--input-search-hover-placeholder-fg);\n}\n.search-wrapper[_ngcontent-%COMP%]:hover   input[type='search'][_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: var(--input-search-hover-placeholder-fg);\n}\n.search-wrapper[_ngcontent-%COMP%]:hover   input[type='search'][_ngcontent-%COMP%]::placeholder {\n  color: var(--input-search-hover-placeholder-fg);\n}\n.search-wrapper[_ngcontent-%COMP%]:hover   .search-icon[_ngcontent-%COMP%] {\n  color: var(--input-search-hover-icon-fg);\n}\n.search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 18px;\n  font-weight: bold;\n  left: 23px;\n  top: 50%;\n  transform: translateY(-50%);\n  color: var(--input-search-icon-fg);\n  transition: color 0.3s var(--transition-timing);\n}\n\ninput[type='search'][_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.7em 1em 0.7em calc(0.7em + 45px);\n  border: none;\n  background: transparent;\n  border: solid 2px transparent;\n  border-left: solid 2px var(--input-focus-border-color);\n  position: relative;\n  color: var(--input-text-fg);\n  transition: border-radius ease-in-out 150ms, border-color ease-in-out 250ms;\n}\ninput[type='search'][_ngcontent-%COMP%]::-webkit-input-placeholder {\n  font-size: 12px;\n  -webkit-transition: color 0.3s var(--transition-timing);\n  transition: color 0.3s var(--transition-timing);\n  color: var(--input-text-placeholder);\n}\ninput[type='search'][_ngcontent-%COMP%]::-moz-placeholder {\n  font-size: 12px;\n  -moz-transition: color 0.3s var(--transition-timing);\n  transition: color 0.3s var(--transition-timing);\n  color: var(--input-text-placeholder);\n}\ninput[type='search'][_ngcontent-%COMP%]::-ms-input-placeholder {\n  font-size: 12px;\n  -ms-transition: color 0.3s var(--transition-timing);\n  transition: color 0.3s var(--transition-timing);\n  color: var(--input-text-placeholder);\n}\ninput[type='search'][_ngcontent-%COMP%]::placeholder {\n  font-size: 12px;\n  transition: color 0.3s var(--transition-timing);\n  color: var(--input-text-placeholder);\n}\ninput[type='search'][_ngcontent-%COMP%]:focus {\n  outline: none;\n}\ninput[type='search'][_ngcontent-%COMP%]:focus::-webkit-input-placeholder {\n  color: var(--input-search-hover-placeholder-fg);\n}\ninput[type='search'][_ngcontent-%COMP%]:focus::-moz-placeholder {\n  color: var(--input-search-hover-placeholder-fg);\n}\ninput[type='search'][_ngcontent-%COMP%]:focus::-ms-input-placeholder {\n  color: var(--input-search-hover-placeholder-fg);\n}\ninput[type='search'][_ngcontent-%COMP%]:focus::placeholder {\n  color: var(--input-search-hover-placeholder-fg);\n}\ninput[type='search'][_ngcontent-%COMP%]:focus    + .search-icon[_ngcontent-%COMP%] {\n  color: var(--input-search-hover-icon-fg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbWFpbi9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tYWluL3NlYXJjaC9zZWFyY2guY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsT0FBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtBQ0ZGO0FER0U7RUFFSSwrQ0FBQTtBQ0ZOO0FEQUU7RUFFSSwrQ0FBQTtBQ0ZOO0FEQUU7RUFFSSwrQ0FBQTtBQ0ZOO0FEQUU7RUFFSSwrQ0FBQTtBQ0ZOO0FEQUU7RUFNSSx3Q0FBQTtBQ0hOO0FEUUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQ0FBQTtFQUNBLCtDQUFBO0FDTkY7QUFDQSx1Q0FBdUM7QURTdkM7RUFDRSxXQUFBO0VBQ0EsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNEQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJFQUFBO0FDUEY7QURTRTtFQUNFLGVBQUE7RUFDQSx1REFBQTtFQUFBLCtDQUFBO0VBQ0Esb0NBQUE7QUNQSjtBRElFO0VBQ0UsZUFBQTtFQUNBLG9EQUFBO0VBQUEsK0NBQUE7RUFDQSxvQ0FBQTtBQ1BKO0FESUU7RUFDRSxlQUFBO0VBQ0EsbURBQUE7RUFBQSwrQ0FBQTtFQUNBLG9DQUFBO0FDUEo7QURJRTtFQUNFLGVBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0FDUEo7QURVRTtFQUNFLGFBQUE7QUNSSjtBRFNJO0VBQ0UsK0NBQUE7QUNQTjtBRE1JO0VBQ0UsK0NBQUE7QUNQTjtBRE1JO0VBQ0UsK0NBQUE7QUNQTjtBRE1JO0VBQ0UsK0NBQUE7QUNQTjtBRFVJO0VBQ0Usd0NBQUE7QUNSTiIsImZpbGUiOiJzcmMvYXBwL21haW4vc2VhcmNoL3NlYXJjaC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9fdXRpbHMubGVzc1wiO1xuXG46aG9zdCB7XG4gIG1hcmdpbi1sZWZ0OiAyZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xuICBmbGV4OiAxO1xufVxuXG4uc2VhcmNoLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICY6aG92ZXIge1xuICAgIGlucHV0W3R5cGU9J3NlYXJjaCddOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdmFyKC0taW5wdXQtc2VhcmNoLWhvdmVyLXBsYWNlaG9sZGVyLWZnKVxuICAgIH1cblxuICAgIC5zZWFyY2gtaWNvbiB7XG4gICAgICBjb2xvcjogdmFyKC0taW5wdXQtc2VhcmNoLWhvdmVyLWljb24tZmcpO1xuICAgIH1cbiAgfVxufVxuXG4uc2VhcmNoLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxlZnQ6IDIzcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1zZWFyY2gtaWNvbi1mZyk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xufVxuXG4vKiBUT0RPOiBGaWd1cmUgb3V0IHJlc3BvbnNpdmUgc2l6aW5nICovXG5pbnB1dFt0eXBlPSdzZWFyY2gnXSB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjdlbSAxZW0gMC43ZW0gY2FsYygwLjdlbSArIDQ1cHgpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDJweCB2YXIoLS1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3IpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC10ZXh0LWZnKTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLXJhZGl1cyBlYXNlLWluLW91dCAxNTBtcywgYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IDI1MG1zO1xuXG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG4gICAgY29sb3I6IHZhcigtLWlucHV0LXRleHQtcGxhY2Vob2xkZXIpO1xuICB9XG5cbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdmFyKC0taW5wdXQtc2VhcmNoLWhvdmVyLXBsYWNlaG9sZGVyLWZnKVxuICAgIH1cblxuICAgICYgKyAuc2VhcmNoLWljb24ge1xuICAgICAgY29sb3I6IHZhcigtLWlucHV0LXNlYXJjaC1ob3Zlci1pY29uLWZnKTtcbiAgICB9XG4gIH1cbn0iLCI6aG9zdCB7XG4gIG1hcmdpbi1sZWZ0OiAyZW07XG4gIG1hcmdpbi1yaWdodDogMmVtO1xuICBmbGV4OiAxO1xufVxuLnNlYXJjaC13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNlYXJjaC13cmFwcGVyOmhvdmVyIGlucHV0W3R5cGU9J3NlYXJjaCddOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1zZWFyY2gtaG92ZXItcGxhY2Vob2xkZXItZmcpO1xufVxuLnNlYXJjaC13cmFwcGVyOmhvdmVyIC5zZWFyY2gtaWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1zZWFyY2gtaG92ZXItaWNvbi1mZyk7XG59XG4uc2VhcmNoLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxlZnQ6IDIzcHg7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1zZWFyY2gtaWNvbi1mZyk7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xufVxuLyogVE9ETzogRmlndXJlIG91dCByZXNwb25zaXZlIHNpemluZyAqL1xuaW5wdXRbdHlwZT0nc2VhcmNoJ10ge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC43ZW0gMWVtIDAuN2VtIGNhbGMoMC43ZW0gKyA0NXB4KTtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAycHggdmFyKC0taW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjb2xvcjogdmFyKC0taW5wdXQtdGV4dC1mZyk7XG4gIHRyYW5zaXRpb246IGJvcmRlci1yYWRpdXMgZWFzZS1pbi1vdXQgMTUwbXMsIGJvcmRlci1jb2xvciBlYXNlLWluLW91dCAyNTBtcztcbn1cbmlucHV0W3R5cGU9J3NlYXJjaCddOjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC10ZXh0LXBsYWNlaG9sZGVyKTtcbn1cbmlucHV0W3R5cGU9J3NlYXJjaCddOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmlucHV0W3R5cGU9J3NlYXJjaCddOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1zZWFyY2gtaG92ZXItcGxhY2Vob2xkZXItZmcpO1xufVxuaW5wdXRbdHlwZT0nc2VhcmNoJ106Zm9jdXMgKyAuc2VhcmNoLWljb24ge1xuICBjb2xvcjogdmFyKC0taW5wdXQtc2VhcmNoLWhvdmVyLWljb24tZmcpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.less']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/topic-picker/topic-picker.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main/topic-picker/topic-picker.component.ts ***!
  \*************************************************************/
/*! exports provided: TopicPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPickerComponent", function() { return TopicPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "active": a0 }; };
function TopicPickerComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopicPickerComponent_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const topic_r38 = ctx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.onSelect(topic_r38.key, topic_r38.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r38 = ctx.$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r37.isSelected(topic_r38.key)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", topic_r38.value.name, " ");
} }
const defaultTitle = 'Add more topics';
const hoverTitle = 'Choose Topic';
class TopicPickerComponent {
    constructor() {
        this.title = defaultTitle;
        this.topics = src_constants__WEBPACK_IMPORTED_MODULE_1__["Topics"];
        this.selecteds = {};
        this.maximumItemShow = 8;
        this.topicSelected = {};
        this._onSelectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.originalOrder = (a, b) => {
            return 0;
        };
    }
    ngOnInit() {
        // add selected topic on @Input to memo
        for (const topicNumber in this.topics) {
            if (this.topicSelected.hasOwnProperty(topicNumber)) {
                this.selecteds[topicNumber] = this.topics[topicNumber];
            }
        }
    }
    // Handle event mouse enter
    onMouseEnter() {
        this.title = hoverTitle;
    }
    // Handle event mouse leave
    onMouseLeave() {
        this.title = defaultTitle;
    }
    // Handle select & unSelect item
    onSelect(topicNumber, topic) {
        if (this.selecteds.hasOwnProperty(topicNumber)) {
            delete this.selecteds[topicNumber];
        }
        else {
            this.selecteds[topicNumber] = topic;
        }
        // Event emit
        this._onSelectChanged.emit(this.selecteds);
    }
    // check a topic is selected
    isSelected(topicNumber) {
        return this.selecteds.hasOwnProperty(topicNumber);
    }
}
TopicPickerComponent.ɵfac = function TopicPickerComponent_Factory(t) { return new (t || TopicPickerComponent)(); };
TopicPickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopicPickerComponent, selectors: [["app-topic-picker"]], inputs: { maximumItemShow: "maximumItemShow", topicSelected: "topicSelected" }, outputs: { _onSelectChanged: "_onSelectChanged" }, decls: 8, vars: 7, consts: [[1, "select-box", 3, "mouseenter", "mouseleave"], [1, "select-box__selected"], [1, "material-icons", "select-box__icon"], [1, "select-box__list"], ["class", "select-box__item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "select-box__item", 3, "ngClass", "click"]], template: function TopicPickerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TopicPickerComponent_Template_div_mouseenter_0_listener() { return ctx.onMouseEnter(); })("mouseleave", function TopicPickerComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TopicPickerComponent_li_6_Template, 2, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--data-maximum", ctx.maximumItemShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, ctx.topics, ctx.originalOrder));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: [".select-box[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  font-size: 12px;\n  transition: background-color 0.3s var(--transition-timing);\n  background-color: var(--select-box-bg);\n  width: var(--select-box-default-width);\n  padding: var(--select-box-padding);\n  border-radius: var(--select-box-radius);\n}\n.select-box__icon[_ngcontent-%COMP%] {\n  color: var(--select-box-arrow-fg);\n  font-size: 18px;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transition: transform 0.3s var(--transition-timing);\n  transform: translateY(-50%);\n  transform-origin: 50% 45%;\n}\n.select-box[_ngcontent-%COMP%]   .select-box__list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  width: 100%;\n  padding: 5px 0 10px;\n  background-color: var(--select-box-hover-bg);\n  border-bottom-left-radius: var(--select-box-radius);\n  border-bottom-right-radius: var(--select-box-radius);\n  overflow-y: auto;\n  max-height: calc(var(--select-box-default-item-height) * var(--data-maximum));\n  opacity: 0;\n  visibility: hidden;\n  transition: all var(--transition-speed) var(--transition-timing);\n}\n.select-box[_ngcontent-%COMP%]   .select-box__list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #414D55;\n}\n.select-box[_ngcontent-%COMP%]   .select-box__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5;\n}\n.select-box[_ngcontent-%COMP%]   .select-box__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  box-sizing: border-box;\n  border: 3px solid #414D55;\n  background-color: #1b1f20;\n}\n.select-box__item[_ngcontent-%COMP%] {\n  padding: 0 0.75em 0 3.5em;\n  height: var(--select-box-default-item-height);\n  line-height: var(--select-box-default-item-height);\n  color: var(--select-box-item-fg);\n  position: relative;\n  transition: all 0.3s var(--transition-timing);\n}\n.select-box__item[_ngcontent-%COMP%]:before {\n  content: '';\n  display: block;\n  position: absolute;\n  width: 13px;\n  height: 13px;\n  border-radius: 3px;\n  background-color: transparent;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 1em;\n  border: 2px solid var(--topic-picker-square-bc);\n  transition: all var(--transition-speed) var(--transition-timing);\n}\n.select-box__item.active[_ngcontent-%COMP%]:before {\n  background-color: var(--topic-picker-tick-bg);\n}\n.select-box[_ngcontent-%COMP%]:hover {\n  background-color: var(--select-box-hover-bg);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.select-box[_ngcontent-%COMP%]:hover   .select-box__icon[_ngcontent-%COMP%] {\n  transform: translateY(-50%) rotateZ(180deg);\n}\n.select-box[_ngcontent-%COMP%]:hover   .select-box__list[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbWFpbi90b3BpYy1waWNrZXIvdG9waWMtcGlja2VyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tYWluL3RvcGljLXBpY2tlci90b3BpYy1waWNrZXIuY29tcG9uZW50Lmxlc3MiLCIvaG9tZS9iZWUvQmVlL3NvdGF0ZWsvbW9kdG9vbHMtYXBwLW9sZC9zcmMvX3V0aWxzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMERBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQSx1Q0FBQTtBQ0RGO0FER0U7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsbURBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FDREo7QURJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2RUFBQTtFRWpDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtBRGdDSjtBQ3RCSTtFQUNJLG9EQUFBO0VBQ0EseUJBQUE7QUR3QlI7QUNyQkk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUR1QlI7QUNwQkk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBRHNCUjtBRFZFO0VBQ0UseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDWUo7QURWSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsK0NBQUE7RUFDQSxnRUFBQTtBQ1lSO0FEVEk7RUFDSSw2Q0FBQTtBQ1dSO0FEUEU7RUFDRSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNTSjtBRFpFO0VBTUksMkNBQUE7QUNTTjtBRE5JO0VFckVBLFVBQUE7RUFDQSxtQkFBQTtBRDhFSiIsImZpbGUiOiJzcmMvYXBwL21haW4vdG9waWMtcGlja2VyL3RvcGljLXBpY2tlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9fdXRpbHMubGVzc1wiO1xuXG4uc2VsZWN0LWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtYmcpO1xuICB3aWR0aDogdmFyKC0tc2VsZWN0LWJveC1kZWZhdWx0LXdpZHRoKTtcbiAgcGFkZGluZzogdmFyKC0tc2VsZWN0LWJveC1wYWRkaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2VsZWN0LWJveC1yYWRpdXMpO1xuXG4gICZfX2ljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QtYm94LWFycm93LWZnKTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDQ1JTtcbiAgfVxuXG4gICYgJl9fbGlzdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweCAwIDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0LWJveC1ob3Zlci1iZyk7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tc2VsZWN0LWJveC1yYWRpdXMpO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1zZWxlY3QtYm94LXJhZGl1cyk7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKHZhcigtLXNlbGVjdC1ib3gtZGVmYXVsdC1pdGVtLWhlaWdodCkgKiB2YXIoLS1kYXRhLW1heGltdW0pKTtcbiAgICAuaGlkZGVuLWVmZmVjdCgpO1xuICAgIC5zY3JvbGwtYmFyLTAxKCk7XG4gIH1cblxuICAmX19pdGVtIHtcbiAgICBwYWRkaW5nOiAwIDAuNzVlbSAwIDMuNWVtO1xuICAgIGhlaWdodDogdmFyKC0tc2VsZWN0LWJveC1kZWZhdWx0LWl0ZW0taGVpZ2h0KTtcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tc2VsZWN0LWJveC1kZWZhdWx0LWl0ZW0taGVpZ2h0KTtcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0LWJveC1pdGVtLWZnKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEzcHg7XG4gICAgICAgIGhlaWdodDogMTNweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgbGVmdDogMWVtO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10b3BpYy1waWNrZXItc3F1YXJlLWJjKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZTpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b3BpYy1waWNrZXItdGljay1iZyk7XG4gICAgfVxuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0LWJveC1ob3Zlci1iZyk7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcblxuICAgIC5zZWxlY3QtYm94X19pY29uIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGVaKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgJiAuc2VsZWN0LWJveF9fbGlzdCB7XG4gICAgICAuc2hvdy1lZmZlY3QoKTtcbiAgICB9XG4gIH1cbn0iLCIuc2VsZWN0LWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtYmcpO1xuICB3aWR0aDogdmFyKC0tc2VsZWN0LWJveC1kZWZhdWx0LXdpZHRoKTtcbiAgcGFkZGluZzogdmFyKC0tc2VsZWN0LWJveC1wYWRkaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2VsZWN0LWJveC1yYWRpdXMpO1xufVxuLnNlbGVjdC1ib3hfX2ljb24ge1xuICBjb2xvcjogdmFyKC0tc2VsZWN0LWJveC1hcnJvdy1mZyk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNDUlO1xufVxuLnNlbGVjdC1ib3ggLnNlbGVjdC1ib3hfX2xpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtYm94LWhvdmVyLWJnKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tc2VsZWN0LWJveC1yYWRpdXMpO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tc2VsZWN0LWJveC1yYWRpdXMpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiBjYWxjKHZhcigtLXNlbGVjdC1ib3gtZGVmYXVsdC1pdGVtLWhlaWdodCkgKiB2YXIoLS1kYXRhLW1heGltdW0pKTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xufVxuLnNlbGVjdC1ib3ggLnNlbGVjdC1ib3hfX2xpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNEQ1NTtcbn1cbi5zZWxlY3QtYm94IC5zZWxlY3QtYm94X19saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuLnNlbGVjdC1ib3ggLnNlbGVjdC1ib3hfX2xpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzQxNEQ1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWYyMDtcbn1cbi5zZWxlY3QtYm94X19pdGVtIHtcbiAgcGFkZGluZzogMCAwLjc1ZW0gMCAzLjVlbTtcbiAgaGVpZ2h0OiB2YXIoLS1zZWxlY3QtYm94LWRlZmF1bHQtaXRlbS1oZWlnaHQpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tc2VsZWN0LWJveC1kZWZhdWx0LWl0ZW0taGVpZ2h0KTtcbiAgY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtaXRlbS1mZyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xufVxuLnNlbGVjdC1ib3hfX2l0ZW06YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxM3B4O1xuICBoZWlnaHQ6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGxlZnQ6IDFlbTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdG9waWMtcGlja2VyLXNxdWFyZS1iYyk7XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG59XG4uc2VsZWN0LWJveF9faXRlbS5hY3RpdmU6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9waWMtcGlja2VyLXRpY2stYmcpO1xufVxuLnNlbGVjdC1ib3g6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtYm94LWhvdmVyLWJnKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG4uc2VsZWN0LWJveDpob3ZlciAuc2VsZWN0LWJveF9faWNvbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGVaKDE4MGRlZyk7XG59XG4uc2VsZWN0LWJveDpob3ZlciAuc2VsZWN0LWJveF9fbGlzdCB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4iLCIuaGlkZGVuLWVmZmVjdCAoKSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbn1cblxuLnNob3ctZWZmZWN0ICgpIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8vIHNjcm9sbCBiYXJcbi5zY3JvbGwtYmFyLTAxICgpIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTRENTU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM0MTRENTU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFmMjA7XG4gICAgfVxufVxuXG4uc2Nyb2xsLWJhci0wMiAoKSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0RDU1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgLy8gd2lkdGg6IDEycHg7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjNDE0RDU1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjY3MTViO1xuICAgIH1cbn1cblxuLy8gY3JlYXRlIG1hdGVyaWFsIEljb24gYXMgcHNldWRvIGVsZW1lbnRcbi5tYXRlcmlhbEljb25Gcm9tKEBjb250ZW50LCBAdHlwZTogYWZ0ZXIpIHtcbiAgICAmOkB7dHlwZX0ge1xuICAgICAgICBjb250ZW50OiBAY29udGVudDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XG4gICAgfVxufVxuXG4vLyB0ZXh0IG9uZWxpbmUgb3ZlcmZsb3dcbi50ZXh0LW92ZXJmbG93KCkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicPickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topic-picker',
                templateUrl: './topic-picker.component.html',
                styleUrls: ['./topic-picker.component.less']
            }]
    }], function () { return []; }, { maximumItemShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], topicSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _onSelectChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/main/user-flyout/user-flyout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/user-flyout/user-flyout.component.ts ***!
  \***********************************************************/
/*! exports provided: UserFlyoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFlyoutComponent", function() { return UserFlyoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared-components/user.service */ "./src/app/shared-components/user.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function UserFlyoutComponent_button_0_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 4);
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r36.currentUser.photos[0].value, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "Profile picture for ", ctx_r36.currentUser.displayName, "");
} }
function UserFlyoutComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserFlyoutComponent_button_0_img_1_Template, 1, 2, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r34.currentUser.photos && ctx_r34.currentUser.photos.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r34.currentUser.name.givenName);
} }
function UserFlyoutComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UserFlyoutComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.currentUser = yield this.userService.me();
        });
    }
}
UserFlyoutComponent.ɵfac = function UserFlyoutComponent_Factory(t) { return new (t || UserFlyoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_components_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
UserFlyoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserFlyoutComponent, selectors: [["app-user-flyout"]], decls: 2, vars: 2, consts: [["class", "disabled", 4, "ngIf"], [4, "ngIf"], [1, "disabled"], ["aria-hidden", "true", 3, "src", "alt", 4, "ngIf"], ["aria-hidden", "true", 3, "src", "alt"], [1, "mdi", "mdi-account-off"]], template: function UserFlyoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, UserFlyoutComponent_button_0_Template, 4, 2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserFlyoutComponent_button_1_Template, 2, 0, "button", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.currentUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.currentUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  display: contents;\n}\nheader[_nghost-%COMP%]   button[_ngcontent-%COMP%], header   [_nghost-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: var(--button-spacing);\n}\nbutton[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nbutton[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  border-radius: 18px;\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbWFpbi91c2VyLWZseW91dC91c2VyLWZseW91dC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbWFpbi91c2VyLWZseW91dC91c2VyLWZseW91dC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0FDQ0Y7QURFQTtFQUVJLGtDQUFBO0FDREo7QURLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0hGO0FEQ0E7RUFLSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL21haW4vdXNlci1mbHlvdXQvdXNlci1mbHlvdXQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuXG46aG9zdC1jb250ZXh0KGhlYWRlcikge1xuICBidXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1idXR0b24tc3BhY2luZyk7XG4gIH1cbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBpbWcge1xuICAgIHdpZHRoOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG5cbn0iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xufVxuOmhvc3QtY29udGV4dChoZWFkZXIpIGJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1idXR0b24tc3BhY2luZyk7XG59XG5idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYnV0dG9uIGltZyB7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserFlyoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-flyout',
                templateUrl: './user-flyout.component.html',
                styleUrls: ['./user-flyout.component.less']
            }]
    }], function () { return [{ type: _shared_components_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared-components/app-grid/app-grid.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared-components/app-grid/app-grid.component.ts ***!
  \******************************************************************/
/*! exports provided: AppGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGridComponent", function() { return AppGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function AppGridComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", app_r1.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", app_r1.text, " ");
} }
class AppGridComponent {
    constructor() {
        this._apps = [];
        this._gridColumns = 4;
    }
    ngOnInit() { }
    get apps() { return this._apps; }
    set apps(apps) {
        this._apps = apps;
    }
    get columns() { return this._gridColumns; }
    set columns(columns) {
        this._gridColumns = columns;
    }
}
AppGridComponent.ɵfac = function AppGridComponent_Factory(t) { return new (t || AppGridComponent)(); };
AppGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppGridComponent, selectors: [["app-grid"]], inputs: { apps: "apps", columns: "columns" }, decls: 3, vars: 4, consts: [[1, "app-grid"], [4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "material-icons"]], template: function AppGridComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppGridComponent_li_2_Template, 5, 3, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("apps-list grid-columns-", ctx._gridColumns, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._apps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n.apps-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-template-rows: auto;\n  gap: 2em;\n  margin: 0;\n  padding: 0;\n}\n.apps-list.grid-columns-5[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n}\n.apps-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.apps-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background-color: var(--dashboard-item-bg);\n  min-height: 10em;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  transition: background-color var(--transition-speed) var(--transition-timing);\n}\n.apps-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .apps-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: var(--dashboard-item-focus-bg);\n}\n.apps-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  margin-bottom: 0.75em;\n  font-size: 30px;\n  color: var(--accent-1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYXBwLWdyaWQvYXBwLWdyaWQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2FwcC1ncmlkL2FwcC1ncmlkLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsT0FBQTtBQ0NGO0FERUE7RUFDRSxhQUFBO0VBQ0Esc0NBQUE7RUFDQSx3QkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0FGO0FEQ0U7RUFDRSwwQ0FBQTtBQ0NKO0FER0E7RUFDRSxnQkFBQTtBQ0RGO0FEQUE7RUFHSSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZFQUFBO0FDQUo7QURDSTs7RUFDRSxnREFBQTtBQ0VOO0FEYkE7RUFjTSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ0VOIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYXBwLWdyaWQvYXBwLWdyaWQuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXg6IDE7XG59XG5cbi5hcHBzLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xuICBnYXA6IDJlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICAmLmdyaWQtY29sdW1ucy01IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XG4gIH1cbn1cblxuLmFwcHMtbGlzdCA+IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFzaGJvYXJkLWl0ZW0tYmcpO1xuICAgIG1pbi1oZWlnaHQ6IDEwZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG4gICAgJjpmb2N1cywgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXNoYm9hcmQtaXRlbS1mb2N1cy1iZyk7XG4gICAgfVxuICAgIGkubWF0ZXJpYWwtaWNvbnMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgY29sb3I6IHZhcigtLWFjY2VudC0xKTtcbiAgICB9XG4gIH1cbn0iLCI6aG9zdCB7XG4gIGZsZXg6IDE7XG59XG4uYXBwcy1saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgZ2FwOiAyZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5hcHBzLWxpc3QuZ3JpZC1jb2x1bW5zLTUge1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XG59XG4uYXBwcy1saXN0ID4gbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLmFwcHMtbGlzdCA+IGxpIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXNoYm9hcmQtaXRlbS1iZyk7XG4gIG1pbi1oZWlnaHQ6IDEwZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbn1cbi5hcHBzLWxpc3QgPiBsaSBhOmZvY3VzLFxuLmFwcHMtbGlzdCA+IGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXNoYm9hcmQtaXRlbS1mb2N1cy1iZyk7XG59XG4uYXBwcy1saXN0ID4gbGkgYSBpLm1hdGVyaWFsLWljb25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtMSk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-grid',
                templateUrl: './app-grid.component.html',
                styleUrls: ['./app-grid.component.less']
            }]
    }], function () { return []; }, { apps: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared-components/breadcrumbs/breadcrumbs.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared-components/breadcrumbs/breadcrumbs.component.ts ***!
  \************************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xng-breadcrumb */ "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");




function BreadcrumbsComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BreadcrumbsComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(); };
BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["app-breadcrumbs"]], decls: 7, vars: 1, consts: [[1, "breadcrumb"], [1, "breadcrumb__icon"], ["routerLink", "/"], ["src", "/assets/comunity_sift-logo-compact.svg", "alt", "home"], [3, "separator"], ["iconTemplate", ""], [1, "material-icons"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "xng-breadcrumb", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BreadcrumbsComponent_ng_template_5_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("separator", _r2);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbComponent"]], styles: [".breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.breadcrumb__icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  line-height: 0;\n}\n.breadcrumb__icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 16px;\n}\nxng-breadcrumb[_ngcontent-%COMP%]     .xng-breadcrumb-separator {\n  color: var(--breadcrumb-arrow-fg);\n}\nxng-breadcrumb[_ngcontent-%COMP%]     .xng-breadcrumb-item a {\n  color: var(--breadcrumb-link-fg);\n  text-decoration: none;\n  font: 600 11px/20px \"Open Sans\";\n}\nxng-breadcrumb[_ngcontent-%COMP%]     .xng-breadcrumb-trail {\n  color: var(--breadcrumb-link-active);\n  font: 600 11px/20px \"Open Sans\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2JyZWFkY3J1bWJzL2JyZWFkY3J1bWJzLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQzNCRjtBRDhCQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQzVCRjtBRDBCQTtFQUtJLFdBQUE7QUM1Qko7QURnQ0E7RUFFSSxpQ0FBQTtBQy9CSjtBRDZCQTtFQU9NLGdDQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtBQ2pDTjtBRHdCQTtFQWNJLG9DQUFBO0VBQ0EsK0JBQUE7QUNuQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG9sIHtcbi8vICAgcGFkZGluZzogMDtcbi8vICAgbWFyZ2luOiAwO1xuLy8gICBsaXN0LXN0eWxlOiBub25lO1xuLy8gfVxuXG4vLyBsaSB7XG4vLyAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbi8vIH1cblxuLy8gbGkgKyBsaSB7XG4vLyAgIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbi8vICAgJjpiZWZvcmUge1xuLy8gICAgIGNvbnRlbnQ6ICfCuyc7XG4vLyAgICAgZm9udC1zaXplOiAxLjVlbTtcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAwLjFlbTtcbi8vICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMnB4KTtcbi8vICAgfVxuLy8gfVxuXG4vLyBsaSBhIHtcbi8vICAgY29sb3I6IHZhcigtLWxpbmstYnJlYWRjcnVtYi1pbmFjdGl2ZSk7XG4vLyAgICYucm91dGVyLWxpbmstYWN0aXZlIHtcbi8vICAgICBjb2xvcjogdmFyKC0tbGluay1icmVhZGNydW1iLWFjdGl2ZSk7XG4vLyAgIH1cbi8vIH1cblxuLmJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnJlYWRjcnVtYl9faWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDA7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTZweDtcbiAgfVxufVxuXG54bmctYnJlYWRjcnVtYiA6Om5nLWRlZXAge1xuICAueG5nLWJyZWFkY3J1bWItc2VwYXJhdG9yIHtcbiAgICBjb2xvcjogdmFyKC0tYnJlYWRjcnVtYi1hcnJvdy1mZyk7XG4gIH1cblxuICAueG5nLWJyZWFkY3J1bWItaXRlbSB7XG4gICAgYSB7XG4gICAgICBjb2xvcjogdmFyKC0tYnJlYWRjcnVtYi1saW5rLWZnKTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQ6IDYwMCAxMXB4LzIwcHggXCJPcGVuIFNhbnNcIjtcbiAgICB9XG4gIH1cbiAgXG4gIC54bmctYnJlYWRjcnVtYi10cmFpbCB7XG4gICAgY29sb3I6IHZhcigtLWJyZWFkY3J1bWItbGluay1hY3RpdmUpO1xuICAgIGZvbnQ6IDYwMCAxMXB4LzIwcHggXCJPcGVuIFNhbnNcIjtcbiAgfVxufSIsIi5icmVhZGNydW1iIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5icmVhZGNydW1iX19pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi5icmVhZGNydW1iX19pY29uIGltZyB7XG4gIHdpZHRoOiAxNnB4O1xufVxueG5nLWJyZWFkY3J1bWIgOjpuZy1kZWVwIC54bmctYnJlYWRjcnVtYi1zZXBhcmF0b3Ige1xuICBjb2xvcjogdmFyKC0tYnJlYWRjcnVtYi1hcnJvdy1mZyk7XG59XG54bmctYnJlYWRjcnVtYiA6Om5nLWRlZXAgLnhuZy1icmVhZGNydW1iLWl0ZW0gYSB7XG4gIGNvbG9yOiB2YXIoLS1icmVhZGNydW1iLWxpbmstZmcpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQ6IDYwMCAxMXB4LzIwcHggXCJPcGVuIFNhbnNcIjtcbn1cbnhuZy1icmVhZGNydW1iIDo6bmctZGVlcCAueG5nLWJyZWFkY3J1bWItdHJhaWwge1xuICBjb2xvcjogdmFyKC0tYnJlYWRjcnVtYi1saW5rLWFjdGl2ZSk7XG4gIGZvbnQ6IDYwMCAxMXB4LzIwcHggXCJPcGVuIFNhbnNcIjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumbs',
                templateUrl: './breadcrumbs.component.html',
                styleUrls: ['./breadcrumbs.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared-components/loading-indicator/loading-indicator.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared-components/loading-indicator/loading-indicator.component.ts ***!
  \************************************************************************************/
/*! exports provided: LoadingIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicatorComponent", function() { return LoadingIndicatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function LoadingIndicatorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "svg", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "rect", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "animate", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "animate", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "rect", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "animate", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "animate", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "rect", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "animate", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "animate", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoadingIndicatorComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Somethings went wrong !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class LoadingIndicatorComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
LoadingIndicatorComponent.ɵfac = function LoadingIndicatorComponent_Factory(t) { return new (t || LoadingIndicatorComponent)(); };
LoadingIndicatorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingIndicatorComponent, selectors: [["app-loading-indicator"]], inputs: { error: "error", loading: "loading" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["class", "loader", 4, "ngIf"], ["class", "error", 4, "ngIf"], [1, "loader"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "width", "24px", "height", "30px", "viewBox", "0 0 24 30", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 50 50"], ["x", "0", "y", "13", "width", "4", "height", "5", "fill", "#333"], ["attributeName", "height", "attributeType", "XML", "values", "5;21;5", "begin", "0s", "dur", "0.6s", "repeatCount", "indefinite"], ["attributeName", "y", "attributeType", "XML", "values", "13; 5; 13", "begin", "0s", "dur", "0.6s", "repeatCount", "indefinite"], ["x", "10", "y", "13", "width", "4", "height", "5", "fill", "#333"], ["attributeName", "height", "attributeType", "XML", "values", "5;21;5", "begin", "0.15s", "dur", "0.6s", "repeatCount", "indefinite"], ["attributeName", "y", "attributeType", "XML", "values", "13; 5; 13", "begin", "0.15s", "dur", "0.6s", "repeatCount", "indefinite"], ["x", "20", "y", "13", "width", "4", "height", "5", "fill", "#333"], ["attributeName", "height", "attributeType", "XML", "values", "5;21;5", "begin", "0.3s", "dur", "0.6s", "repeatCount", "indefinite"], ["attributeName", "y", "attributeType", "XML", "values", "13; 5; 13", "begin", "0.3s", "dur", "0.6s", "repeatCount", "indefinite"], [1, "error"], [1, "mdi", "mdi-alert-circle-outline", "mdi-48px"], [1, "error-text"]], template: function LoadingIndicatorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoadingIndicatorComponent_div_0_Template, 11, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoadingIndicatorComponent_div_1_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  margin: var(--section-padding);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  min-height: 300px;\n}\n.loader[_ngcontent-%COMP%], .error[_ngcontent-%COMP%] {\n  margin-bottom: var(--button-spacing);\n  text-align: center;\n}\n.loader[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transform: scale(1.4);\n}\n.loader[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .loader[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%] {\n  fill: var(--loading-indicator-fg);\n}\n.error[_ngcontent-%COMP%]   i.mdi[_ngcontent-%COMP%] {\n  color: var(--error-indicator-fg);\n}\n.error-text[_ngcontent-%COMP%] {\n  color: var(--error-indicator-text-fg);\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL2xvYWRpbmctaW5kaWNhdG9yL2xvYWRpbmctaW5kaWNhdG9yLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNDRjtBREVBOztFQUVFLG9DQUFBO0VBQ0Esa0JBQUE7QUNBRjtBREdBO0VBQ0UscUJBQUE7QUNERjtBREFBOztFQUtJLGlDQUFBO0FDREo7QURLQTtFQUNFLGdDQUFBO0FDSEY7QURNQTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtBQ0pGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIG1hcmdpbjogdmFyKC0tc2VjdGlvbi1wYWRkaW5nKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xufVxuXG4ubG9hZGVyLFxuLmVycm9yIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tYnV0dG9uLXNwYWNpbmcpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2FkZXIgc3ZnIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xuXG4gIHBhdGgsXG4gIHJlY3Qge1xuICAgIGZpbGw6IHZhcigtLWxvYWRpbmctaW5kaWNhdG9yLWZnKTtcbiAgfVxufVxuXG4uZXJyb3IgaS5tZGkge1xuICBjb2xvcjogdmFyKC0tZXJyb3ItaW5kaWNhdG9yLWZnKTtcbn1cblxuLmVycm9yLXRleHQge1xuICBjb2xvcjogdmFyKC0tZXJyb3ItaW5kaWNhdG9yLXRleHQtZmcpO1xuICBmb250LXNpemU6IDIwcHg7XG59IiwiOmhvc3Qge1xuICBtYXJnaW46IHZhcigtLXNlY3Rpb24tcGFkZGluZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbn1cbi5sb2FkZXIsXG4uZXJyb3Ige1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1idXR0b24tc3BhY2luZyk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sb2FkZXIgc3ZnIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjQpO1xufVxuLmxvYWRlciBzdmcgcGF0aCxcbi5sb2FkZXIgc3ZnIHJlY3Qge1xuICBmaWxsOiB2YXIoLS1sb2FkaW5nLWluZGljYXRvci1mZyk7XG59XG4uZXJyb3IgaS5tZGkge1xuICBjb2xvcjogdmFyKC0tZXJyb3ItaW5kaWNhdG9yLWZnKTtcbn1cbi5lcnJvci10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWVycm9yLWluZGljYXRvci10ZXh0LWZnKTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingIndicatorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-indicator',
                templateUrl: './loading-indicator.component.html',
                styleUrls: ['./loading-indicator.component.less']
            }]
    }], function () { return []; }, { error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared-components/more-button/more-button.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared-components/more-button/more-button.component.ts ***!
  \************************************************************************/
/*! exports provided: MoreButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreButtonComponent", function() { return MoreButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MoreButtonComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MoreButtonComponent.ɵfac = function MoreButtonComponent_Factory(t) { return new (t || MoreButtonComponent)(); };
MoreButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoreButtonComponent, selectors: [["app-more-button"]], decls: 2, vars: 0, template: function MoreButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL21vcmUtYnV0dG9uL21vcmUtYnV0dG9uLmNvbXBvbmVudC5sZXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoreButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-more-button',
                templateUrl: './more-button.component.html',
                styleUrls: ['./more-button.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared-components/option-button-group/option-button-group.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shared-components/option-button-group/option-button-group.component.ts ***!
  \****************************************************************************************/
/*! exports provided: OptionButtonGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionButtonGroupComponent", function() { return OptionButtonGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function OptionButtonGroupComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r6.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.label);
} }
function OptionButtonGroupComponent_li_2_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const option_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("mdi mdi-", option_r8.icon, "");
} }
function OptionButtonGroupComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptionButtonGroupComponent_li_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.value = $event; })("ngModelChange", function OptionButtonGroupComponent_li_2_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onValueChanged($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OptionButtonGroupComponent_li_2_i_4_Template, 1, 3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", option_r8.ariaLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", ctx_r7.groupId)("ngModel", ctx_r7.value)("value", option_r8.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("button ", option_r8.icon ? "icon" : "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", option_r8.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r8.label, " ");
} }
class OptionButtonGroupComponent {
    constructor() {
        this.groupId = '';
        this.label = '';
        this.options = [];
        this.value = '';
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.groupId = Math.random().toString(36).substring(2);
    }
    onValueChanged($event) {
        this.valueChange.emit($event);
    }
}
OptionButtonGroupComponent.ɵfac = function OptionButtonGroupComponent_Factory(t) { return new (t || OptionButtonGroupComponent)(); };
OptionButtonGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionButtonGroupComponent, selectors: [["app-option-button-group"]], inputs: { label: "label", options: "options", value: "value" }, outputs: { valueChange: "valueChange" }, decls: 3, vars: 2, consts: [["id", "label", 4, "ngIf"], ["aria-labelledby", "label", "role", "radiogroup"], ["role", "radio", "tabindex", "0", 4, "ngFor", "ngForOf"], ["id", "label"], ["role", "radio", "tabindex", "0"], ["type", "radio", 3, "name", "ngModel", "value", "ngModelChange"], [3, "class", 4, "ngIf"]], template: function OptionButtonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OptionButtonGroupComponent_span_0_Template, 2, 2, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OptionButtonGroupComponent_li_2_Template, 6, 9, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.options);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  justify-content: evenly-spaced;\n  align-items: center;\n  flex-direction: row;\n  width: 100%;\n}\n[_nghost-%COMP%]     #label {\n  margin-right: var(--button-spacing);\n}\n[_nghost-%COMP%]     ul {\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]     li {\n  list-style: none;\n  display: inline-block;\n}\n[_nghost-%COMP%]     li:focus {\n  outline: none;\n  box-shadow: var(--button-focus-ring);\n}\n[_nghost-%COMP%]     li + li {\n  margin-left: var(--button-spacing-tight);\n}\n[_nghost-%COMP%]     li {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n[_nghost-%COMP%]     li:first-of-type span {\n  border-radius: var(--button-radius) 0 0 var(--button-radius);\n}\n[_nghost-%COMP%]     li:last-of-type span {\n  border-radius: 0 var(--button-radius) var(--button-radius) 0;\n}\n[_nghost-%COMP%]     li:not(:first-of-type):not(:last-of-type) span {\n  border-radius: 0;\n}\n[_nghost-%COMP%]     li input + span {\n  transition-property: background-color, opacity;\n  transition-duration: var(--transition-speed);\n  transition-timing-function: var(--transition-timing);\n  padding: var(--button-padding);\n  background: var(--button-bg);\n  color: var(--button-fg);\n  display: block;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     li input {\n  display: none;\n}\n[_nghost-%COMP%]     li input:checked + span {\n  background-color: var(--button-active-bg);\n  color: var(--button-active-fg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvb3B0aW9uLWJ1dHRvbi1ncm91cC9vcHRpb24tYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9vcHRpb24tYnV0dG9uLWdyb3VwL29wdGlvbi1idXR0b24tZ3JvdXAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGO0FES0E7RUFHSSxtQ0FBQTtBQ0xKO0FERUE7RUFPSSxTQUFBO0VBQ0EsVUFBQTtBQ05KO0FERkE7RUFZSSxnQkFBQTtFQUNBLHFCQUFBO0FDUEo7QURTSTtFQUNFLGFBQUE7RUFDQSxvQ0FBQTtBQ1BOO0FEVkE7RUFzQkksd0NBQUE7QUNUSjtBRGJBO0VBMEJJLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtBQ1ZKO0FEWUk7RUFDRSw0REFBQTtBQ1ZOO0FEYUk7RUFDRSw0REFBQTtBQ1hOO0FEY0k7RUFDRSxnQkFBQTtBQ1pOO0FEMUJBO0VBMENNLDhDQUFBO0VBQ0EsNENBQUE7RUFDQSxvREFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDYk47QURwQ0E7RUFxRE0sYUFBQTtBQ2ROO0FEZ0JNO0VBQ0UseUNBQUE7RUFDQSw4QkFBQTtBQ2RSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvb3B0aW9uLWJ1dHRvbi1ncm91cC9vcHRpb24tYnV0dG9uLWdyb3VwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGV2ZW5seS1zcGFjZWQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vLyBAZGVwcmVjYXRlZFxuLy8gVXNlIG9mIDo6bmctZGVlcCBpcyBkZXByZWNhdGVkIGJ1dCBubyB2aWFibGUgYWx0ZXJuYXRpdmVzXG4vLyBhcmUgZXZpZGVudCB5ZXQuIFRoaXMgbWF5IGJyZWFrIGluIHRoZSBmdXR1cmUuXG46aG9zdCA6Om5nLWRlZXAge1xuICBcbiAgI2xhYmVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IHZhcigtLWJ1dHRvbi1zcGFjaW5nKTtcbiAgfVxuXG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIGxpIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBcbiAgICAmOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1idXR0b24tZm9jdXMtcmluZyk7XG4gICAgfVxuICB9XG5cbiAgbGkgKyBsaSB7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLWJ1dHRvbi1zcGFjaW5nLXRpZ2h0KTtcbiAgfVxuXG4gIGxpIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIFxuICAgICY6Zmlyc3Qtb2YtdHlwZSBzcGFuIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJ1dHRvbi1yYWRpdXMpIDAgMCB2YXIoLS1idXR0b24tcmFkaXVzKTtcbiAgICB9XG4gIFxuICAgICY6bGFzdC1vZi10eXBlIHNwYW4ge1xuICAgICAgYm9yZGVyLXJhZGl1czogMCB2YXIoLS1idXR0b24tcmFkaXVzKSB2YXIoLS1idXR0b24tcmFkaXVzKSAwO1xuICAgIH1cblxuICAgICY6bm90KDpmaXJzdC1vZi10eXBlKTpub3QoOmxhc3Qtb2YtdHlwZSkgc3BhbiB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgXG4gICAgaW5wdXQgKyBzcGFuIHtcbiAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIG9wYWNpdHk7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKTtcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG4gICAgICBwYWRkaW5nOiB2YXIoLS1idXR0b24tcGFkZGluZyk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmcpO1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1mZyk7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBpbnB1dCB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICBcbiAgICAgICY6Y2hlY2tlZCArIHNwYW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYWN0aXZlLWJnKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUtZmcpO1xuICAgICAgfVxuICAgIH1cbiAgXG4gIH1cblxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBldmVubHktc3BhY2VkO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0IDo6bmctZGVlcCAjbGFiZWwge1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWJ1dHRvbi1zcGFjaW5nKTtcbn1cbjpob3N0IDo6bmctZGVlcCB1bCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IDo6bmctZGVlcCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbjpob3N0IDo6bmctZGVlcCBsaTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJveC1zaGFkb3c6IHZhcigtLWJ1dHRvbi1mb2N1cy1yaW5nKTtcbn1cbjpob3N0IDo6bmctZGVlcCBsaSArIGxpIHtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWJ1dHRvbi1zcGFjaW5nLXRpZ2h0KTtcbn1cbjpob3N0IDo6bmctZGVlcCBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG46aG9zdCA6Om5nLWRlZXAgbGk6Zmlyc3Qtb2YtdHlwZSBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYnV0dG9uLXJhZGl1cykgMCAwIHZhcigtLWJ1dHRvbi1yYWRpdXMpO1xufVxuOmhvc3QgOjpuZy1kZWVwIGxpOmxhc3Qtb2YtdHlwZSBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogMCB2YXIoLS1idXR0b24tcmFkaXVzKSB2YXIoLS1idXR0b24tcmFkaXVzKSAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIGxpOm5vdCg6Zmlyc3Qtb2YtdHlwZSk6bm90KDpsYXN0LW9mLXR5cGUpIHNwYW4ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuOmhvc3QgOjpuZy1kZWVwIGxpIGlucHV0ICsgc3BhbiB7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQtY29sb3IsIG9wYWNpdHk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IHZhcigtLXRyYW5zaXRpb24tc3BlZWQpO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xuICBwYWRkaW5nOiB2YXIoLS1idXR0b24tcGFkZGluZyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1iZyk7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tZmcpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIGxpIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IDo6bmctZGVlcCBsaSBpbnB1dDpjaGVja2VkICsgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUtYmcpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLWFjdGl2ZS1mZyk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionButtonGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-option-button-group',
                templateUrl: './option-button-group.component.html',
                styleUrls: ['./option-button-group.component.less']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared-components/progress-bar/progress-bar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared-components/progress-bar/progress-bar.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return ProgressBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ProgressBarComponent {
    constructor() {
        this.percent = '0';
    }
    ngOnInit() {
        setTimeout(() => {
            this.percent = Math.round(this.value * 100) + '%';
        }, 400);
    }
}
ProgressBarComponent.ɵfac = function ProgressBarComponent_Factory(t) { return new (t || ProgressBarComponent)(); };
ProgressBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressBarComponent, selectors: [["app-progress-bar"]], inputs: { label: "label", value: "value" }, decls: 6, vars: 4, consts: [[1, "progress-bar"], [1, "label"], [1, "line"], [1, "percent-text"]], template: function ProgressBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--percent", ctx.percent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.percent);
    } }, styles: [".progress-bar[_ngcontent-%COMP%] {\n  color: var(--progress-bar-fg);\n  font: 600 16px/20px \"Open Sans\";\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.label[_ngcontent-%COMP%] {\n  width: 20.5%;\n  padding-right: 10px;\n  box-sizing: border-box;\n  font: 600 16px/20px \"Open Sans\";\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.percent-text[_ngcontent-%COMP%] {\n  width: 45px;\n  text-align: right;\n  display: inline-block;\n}\n.line[_ngcontent-%COMP%] {\n  width: 68%;\n  height: 5px;\n  background-color: var(--progress-bar-line-bg);\n  border-radius: 10px;\n  overflow: hidden;\n  position: relative;\n}\n.line[_ngcontent-%COMP%]:before {\n  content: '';\n  position: absolute;\n  display: block;\n  background-color: var(--progress-bar-line-success-bg);\n  width: var(--percent);\n  height: 100%;\n  transition: all 0.7s var(--transition-timing);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQubGVzcyIsIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9fdXRpbHMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0pKO0FET0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VFMkRBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRC9ESjtBRE1BO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNKSjtBRE9BO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xKO0FET0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscURBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9fdXRpbHMubGVzc1wiOyBcblxuQGxpbmUtd2lkdGgtcGM6IDY4JTtcbkBsaW5lLWhlaWdodC1wYzogNXB4O1xuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgICBjb2xvcjogdmFyKC0tcHJvZ3Jlc3MtYmFyLWZnKTtcbiAgICBmb250OiA2MDAgMTZweC8yMHB4IFwiT3BlbiBTYW5zXCI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmxhYmVsIHtcbiAgICB3aWR0aDogMjAuNSU7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQ6IDYwMCAxNnB4LzIwcHggXCJPcGVuIFNhbnNcIjtcbiAgICAudGV4dC1vdmVyZmxvdygpO1xufVxuXG4ucGVyY2VudC10ZXh0IHtcbiAgICB3aWR0aDogNDVweDsgLy9tYXggd2lkdGggYXMgMTAwJSBmb3IgcGNcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5saW5lIHtcbiAgICB3aWR0aDogQGxpbmUtd2lkdGgtcGM7XG4gICAgaGVpZ2h0OiBAbGluZS1oZWlnaHQtcGM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJvZ3Jlc3MtYmFyLWxpbmUtYmcpO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcm9ncmVzcy1iYXItbGluZS1zdWNjZXNzLWJnKTtcbiAgICAgICAgd2lkdGg6IHZhcigtLXBlcmNlbnQpO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjdzIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbiAgICB9XG59IiwiLnByb2dyZXNzLWJhciB7XG4gIGNvbG9yOiB2YXIoLS1wcm9ncmVzcy1iYXItZmcpO1xuICBmb250OiA2MDAgMTZweC8yMHB4IFwiT3BlbiBTYW5zXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5sYWJlbCB7XG4gIHdpZHRoOiAyMC41JTtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udDogNjAwIDE2cHgvMjBweCBcIk9wZW4gU2Fuc1wiO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5wZXJjZW50LXRleHQge1xuICB3aWR0aDogNDVweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5saW5lIHtcbiAgd2lkdGg6IDY4JTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2dyZXNzLWJhci1saW5lLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxpbmU6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByb2dyZXNzLWJhci1saW5lLXN1Y2Nlc3MtYmcpO1xuICB3aWR0aDogdmFyKC0tcGVyY2VudCk7XG4gIGhlaWdodDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuN3MgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xufVxuIiwiLmhpZGRlbi1lZmZlY3QgKCkge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG59XG5cbi5zaG93LWVmZmVjdCAoKSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vLyBzY3JvbGwgYmFyXG4uc2Nyb2xsLWJhci0wMSAoKSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0RDU1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNDE0RDU1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZjIwO1xuICAgIH1cbn1cblxuLnNjcm9sbC1iYXItMDIgKCkge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNEQ1NTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIC8vIHdpZHRoOiAxMnB4O1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgIzQxNEQ1NTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2NzE1YjtcbiAgICB9XG59XG5cbi8vIGNyZWF0ZSBtYXRlcmlhbCBJY29uIGFzIHBzZXVkbyBlbGVtZW50XG4ubWF0ZXJpYWxJY29uRnJvbShAY29udGVudCwgQHR5cGU6IGFmdGVyKSB7XG4gICAgJjpAe3R5cGV9IHtcbiAgICAgICAgY29udGVudDogQGNvbnRlbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgd29yZC13cmFwOiBub3JtYWw7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xuICAgIH1cbn1cblxuLy8gdGV4dCBvbmVsaW5lIG92ZXJmbG93XG4udGV4dC1vdmVyZmxvdygpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress-bar',
                templateUrl: './progress-bar.component.html',
                styleUrls: ['./progress-bar.component.less']
            }]
    }], function () { return []; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared-components/select-box/select-box.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared-components/select-box/select-box.component.ts ***!
  \**********************************************************************/
/*! exports provided: SelectBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBoxComponent", function() { return SelectBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { active: a0 }; };
function SelectBoxComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectBoxComponent_li_6_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onSelect(item_r15.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r15.value === ctx_r14.selectedValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15.content, " ");
} }
class SelectBoxComponent {
    constructor() {
        this.listData = [];
        this.maximumItemShow = 8;
        this.selectedValue = null;
        this.transformSelectedContent = null;
        this.selectChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    // return the first item or empty item
    get firstItem() {
        var _a;
        return ((_a = this.listData) === null || _a === void 0 ? void 0 : _a.length) ? this.listData[0]
            : { content: '', value: '' };
    }
    // if listData is null || undefined || empty just return an item with empty content
    // return the first item if the default selectedValue have not passed
    get currentSelected() {
        var _a;
        if (!((_a = this.listData) === null || _a === void 0 ? void 0 : _a.length)) {
            return { content: '', value: '' };
        }
        return this.selectedValue === null
            ? this.listData[0]
            : this.listData.find(item => item.value === this.selectedValue);
    }
    get selectedContent() {
        return this.transformSelectedContent ? this.transformSelectedContent(this.currentSelected.value) : this.currentSelected.content;
    }
    // emit selectChanged event
    onSelect(value) {
        this.selectedValue = value;
        this.selectChanged.emit(value);
    }
}
SelectBoxComponent.ɵfac = function SelectBoxComponent_Factory(t) { return new (t || SelectBoxComponent)(); };
SelectBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectBoxComponent, selectors: [["app-select-box"]], inputs: { listData: "listData", maximumItemShow: "maximumItemShow", selectedValue: "selectedValue", transformSelectedContent: "transformSelectedContent" }, outputs: { selectChanged: "selectChanged" }, decls: 7, vars: 4, consts: [[1, "select-box"], [1, "select-box__selected"], [1, "material-icons", "select-box__icon"], [1, "select-box__list"], ["class", "select-box__item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "select-box__item", 3, "ngClass", "click"]], template: function SelectBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "keyboard_arrow_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SelectBoxComponent_li_6_Template, 2, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--data-maximum", ctx.maximumItemShow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.listData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".select-box[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  font-size: 12px;\n  transition: background-color 0.3s var(--transition-timing);\n  background-color: var(--select-box-bg);\n  width: var(--select-box-default-width);\n  padding: var(--select-box-padding);\n  border-radius: var(--select-box-radius);\n}\n.select-box__selected[_ngcontent-%COMP%] {\n  color: var(--select-box-selected-fg);\n}\n.select-box__icon[_ngcontent-%COMP%] {\n  color: var(--select-box-arrow-fg);\n  font-size: 18px;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  transition: transform 0.3s var(--transition-timing);\n  transform: translateY(-50%);\n  transform-origin: 50% 45%;\n}\n.select-box[_ngcontent-%COMP%]   .select-box__list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  width: 100%;\n  padding: 5px 0 10px;\n  background-color: var(--select-box-hover-bg);\n  border-bottom-left-radius: var(--select-box-radius);\n  border-bottom-right-radius: var(--select-box-radius);\n  overflow-y: auto;\n  max-height: calc(var(--select-box-default-item-height) * var(--data-maximum));\n  opacity: 0;\n  visibility: hidden;\n  transition: all var(--transition-speed) var(--transition-timing);\n}\n.select-box[_ngcontent-%COMP%]   .select-box__list[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #414D55;\n}\n.select-box[_ngcontent-%COMP%]   .select-box__list[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5;\n}\n.select-box[_ngcontent-%COMP%]   .select-box__list[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  box-sizing: border-box;\n  border: 3px solid #414D55;\n  background-color: #1b1f20;\n}\n.select-box__item[_ngcontent-%COMP%] {\n  padding: 0 0.75em;\n  height: var(--select-box-default-item-height);\n  line-height: var(--select-box-default-item-height);\n  color: var(--select-box-item-fg);\n  position: relative;\n  transition: all 0.3s var(--transition-timing);\n}\n.select-box__item[_ngcontent-%COMP%]:after {\n  content: \"check\";\n  font-family: \"Material Icons\";\n  display: block;\n  position: absolute;\n  right: 15px;\n  font-weight: bold;\n  top: 0;\n  color: var(--select-box-hover-selection-fg);\n  display: none;\n}\n.select-box__item.active[_ngcontent-%COMP%] {\n  background-color: var(--select-box-hover-selection-bg);\n  color: var(--select-box-hover-selection-fg);\n}\n.select-box__item.active[_ngcontent-%COMP%]:after {\n  display: inline;\n}\n.select-box[_ngcontent-%COMP%]:hover {\n  background-color: var(--select-box-hover-bg);\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.select-box[_ngcontent-%COMP%]:hover   .select-box__selected[_ngcontent-%COMP%] {\n  color: var(--select-box-hover-fg);\n}\n.select-box[_ngcontent-%COMP%]:hover   .select-box__icon[_ngcontent-%COMP%] {\n  transform: translateY(-50%) rotateZ(180deg);\n}\n.select-box[_ngcontent-%COMP%]:hover   .select-box__list[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvc2VsZWN0LWJveC9zZWxlY3QtYm94LmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy9zZWxlY3QtYm94L3NlbGVjdC1ib3guY29tcG9uZW50Lmxlc3MiLCIvaG9tZS9iZWUvQmVlL3NvdGF0ZWsvbW9kdG9vbHMtYXBwLW9sZC9zcmMvX3V0aWxzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMERBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esa0NBQUE7RUFDQSx1Q0FBQTtBQ0RGO0FER0U7RUFDRSxvQ0FBQTtBQ0RKO0FESUU7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsbURBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FDRko7QURLRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2RUFBQTtFRXJDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtBRG1DSjtBQ3pCSTtFQUNJLG9EQUFBO0VBQ0EseUJBQUE7QUQyQlI7QUN4Qkk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7QUQwQlI7QUN2Qkk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBRHlCUjtBRFRFO0VBQ0UsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtEQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0FDV0o7QURUSTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsMkNBQUE7RUFDQSxhQUFBO0FDV047QURSSTtFQUNFLHNEQUFBO0VBQ0EsMkNBQUE7QUNVTjtBRFJNO0VBQ0UsZUFBQTtBQ1VSO0FETEU7RUFDRSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNPSjtBRFZFO0VBTUksaUNBQUE7QUNPTjtBRGJFO0VBVUksMkNBQUE7QUNNTjtBREhJO0VFL0VBLFVBQUE7RUFDQSxtQkFBQTtBRHFGSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC1jb21wb25lbnRzL3NlbGVjdC1ib3gvc2VsZWN0LWJveC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9fdXRpbHMubGVzc1wiO1xuXG4uc2VsZWN0LWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtYmcpO1xuICB3aWR0aDogdmFyKC0tc2VsZWN0LWJveC1kZWZhdWx0LXdpZHRoKTtcbiAgcGFkZGluZzogdmFyKC0tc2VsZWN0LWJveC1wYWRkaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2VsZWN0LWJveC1yYWRpdXMpO1xuXG4gICZfX3NlbGVjdGVkIHtcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0LWJveC1zZWxlY3RlZC1mZyk7XG4gIH1cblxuICAmX19pY29uIHtcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0LWJveC1hcnJvdy1mZyk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA0NSU7XG4gIH1cblxuICAmICZfX2xpc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHggMCAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtaG92ZXItYmcpO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXNlbGVjdC1ib3gtcmFkaXVzKTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tc2VsZWN0LWJveC1yYWRpdXMpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgbWF4LWhlaWdodDogY2FsYyh2YXIoLS1zZWxlY3QtYm94LWRlZmF1bHQtaXRlbS1oZWlnaHQpICogdmFyKC0tZGF0YS1tYXhpbXVtKSk7XG4gICAgLmhpZGRlbi1lZmZlY3QoKTtcbiAgICAuc2Nyb2xsLWJhci0wMSgpO1xuICB9XG5cbiAgJl9faXRlbSB7XG4gICAgcGFkZGluZzogMCAwLjc1ZW07XG4gICAgaGVpZ2h0OiB2YXIoLS1zZWxlY3QtYm94LWRlZmF1bHQtaXRlbS1oZWlnaHQpO1xuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1zZWxlY3QtYm94LWRlZmF1bHQtaXRlbS1oZWlnaHQpO1xuICAgIGNvbG9yOiB2YXIoLS1zZWxlY3QtYm94LWl0ZW0tZmcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiY2hlY2tcIjtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAxNXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0b3A6IDA7XG4gICAgICBjb2xvcjogdmFyKC0tc2VsZWN0LWJveC1ob3Zlci1zZWxlY3Rpb24tZmcpO1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtYm94LWhvdmVyLXNlbGVjdGlvbi1iZyk7XG4gICAgICBjb2xvcjogdmFyKC0tc2VsZWN0LWJveC1ob3Zlci1zZWxlY3Rpb24tZmcpO1xuXG4gICAgICAmOmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtaG92ZXItYmcpO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG5cbiAgICAuc2VsZWN0LWJveF9fc2VsZWN0ZWQge1xuICAgICAgY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtaG92ZXItZmcpO1xuICAgIH1cblxuICAgIC5zZWxlY3QtYm94X19pY29uIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSByb3RhdGVaKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgJiAuc2VsZWN0LWJveF9fbGlzdCB7XG4gICAgICAuc2hvdy1lZmZlY3QoKTtcbiAgICB9XG4gIH1cbn0iLCIuc2VsZWN0LWJveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtYmcpO1xuICB3aWR0aDogdmFyKC0tc2VsZWN0LWJveC1kZWZhdWx0LXdpZHRoKTtcbiAgcGFkZGluZzogdmFyKC0tc2VsZWN0LWJveC1wYWRkaW5nKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tc2VsZWN0LWJveC1yYWRpdXMpO1xufVxuLnNlbGVjdC1ib3hfX3NlbGVjdGVkIHtcbiAgY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtc2VsZWN0ZWQtZmcpO1xufVxuLnNlbGVjdC1ib3hfX2ljb24ge1xuICBjb2xvcjogdmFyKC0tc2VsZWN0LWJveC1hcnJvdy1mZyk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNDUlO1xufVxuLnNlbGVjdC1ib3ggLnNlbGVjdC1ib3hfX2xpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiA1cHggMCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtYm94LWhvdmVyLWJnKTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tc2VsZWN0LWJveC1yYWRpdXMpO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tc2VsZWN0LWJveC1yYWRpdXMpO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiBjYWxjKHZhcigtLXNlbGVjdC1ib3gtZGVmYXVsdC1pdGVtLWhlaWdodCkgKiB2YXIoLS1kYXRhLW1heGltdW0pKTtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xufVxuLnNlbGVjdC1ib3ggLnNlbGVjdC1ib3hfX2xpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNEQ1NTtcbn1cbi5zZWxlY3QtYm94IC5zZWxlY3QtYm94X19saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuLnNlbGVjdC1ib3ggLnNlbGVjdC1ib3hfX2xpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzQxNEQ1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWYyMDtcbn1cbi5zZWxlY3QtYm94X19pdGVtIHtcbiAgcGFkZGluZzogMCAwLjc1ZW07XG4gIGhlaWdodDogdmFyKC0tc2VsZWN0LWJveC1kZWZhdWx0LWl0ZW0taGVpZ2h0KTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLXNlbGVjdC1ib3gtZGVmYXVsdC1pdGVtLWhlaWdodCk7XG4gIGNvbG9yOiB2YXIoLS1zZWxlY3QtYm94LWl0ZW0tZmcpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbn1cbi5zZWxlY3QtYm94X19pdGVtOmFmdGVyIHtcbiAgY29udGVudDogXCJjaGVja1wiO1xuICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRvcDogMDtcbiAgY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtaG92ZXItc2VsZWN0aW9uLWZnKTtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zZWxlY3QtYm94X19pdGVtLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtaG92ZXItc2VsZWN0aW9uLWJnKTtcbiAgY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtaG92ZXItc2VsZWN0aW9uLWZnKTtcbn1cbi5zZWxlY3QtYm94X19pdGVtLmFjdGl2ZTphZnRlciB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5zZWxlY3QtYm94OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0LWJveC1ob3Zlci1iZyk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xufVxuLnNlbGVjdC1ib3g6aG92ZXIgLnNlbGVjdC1ib3hfX3NlbGVjdGVkIHtcbiAgY29sb3I6IHZhcigtLXNlbGVjdC1ib3gtaG92ZXItZmcpO1xufVxuLnNlbGVjdC1ib3g6aG92ZXIgLnNlbGVjdC1ib3hfX2ljb24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgcm90YXRlWigxODBkZWcpO1xufVxuLnNlbGVjdC1ib3g6aG92ZXIgLnNlbGVjdC1ib3hfX2xpc3Qge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuIiwiLmhpZGRlbi1lZmZlY3QgKCkge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG59XG5cbi5zaG93LWVmZmVjdCAoKSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vLyBzY3JvbGwgYmFyXG4uc2Nyb2xsLWJhci0wMSAoKSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0RDU1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNDE0RDU1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZjIwO1xuICAgIH1cbn1cblxuLnNjcm9sbC1iYXItMDIgKCkge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNEQ1NTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIC8vIHdpZHRoOiAxMnB4O1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgIzQxNEQ1NTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2NzE1YjtcbiAgICB9XG59XG5cbi8vIGNyZWF0ZSBtYXRlcmlhbCBJY29uIGFzIHBzZXVkbyBlbGVtZW50XG4ubWF0ZXJpYWxJY29uRnJvbShAY29udGVudCwgQHR5cGU6IGFmdGVyKSB7XG4gICAgJjpAe3R5cGV9IHtcbiAgICAgICAgY29udGVudDogQGNvbnRlbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgd29yZC13cmFwOiBub3JtYWw7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xuICAgIH1cbn1cblxuLy8gdGV4dCBvbmVsaW5lIG92ZXJmbG93XG4udGV4dC1vdmVyZmxvdygpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-box',
                templateUrl: './select-box.component.html',
                styleUrls: ['./select-box.component.less']
            }]
    }], function () { return []; }, { listData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], maximumItemShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transformSelectedContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared-components/sentry.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared-components/sentry.service.ts ***!
  \*****************************************************/
/*! exports provided: SentryErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SentryErrorHandler", function() { return SentryErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");




_sentry_browser__WEBPACK_IMPORTED_MODULE_2__["init"](_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].sentry);
class SentryErrorHandler {
    constructor() {
    }
    handleError(error) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production === true) {
            const eventId = _sentry_browser__WEBPACK_IMPORTED_MODULE_2__["captureException"](error.originalError || error);
            _sentry_browser__WEBPACK_IMPORTED_MODULE_2__["showReportDialog"]({ eventId });
        }
        throw error;
    }
}
SentryErrorHandler.ɵfac = function SentryErrorHandler_Factory(t) { return new (t || SentryErrorHandler)(); };
SentryErrorHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SentryErrorHandler, factory: SentryErrorHandler.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SentryErrorHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared-components/shared-components.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared-components/shared-components.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! xng-breadcrumb */ "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");
/* harmony import */ var _app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-grid/app-grid.component */ "./src/app/shared-components/app-grid/app-grid.component.ts");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "./src/app/shared-components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading-indicator/loading-indicator.component */ "./src/app/shared-components/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var _more_button_more_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./more-button/more-button.component */ "./src/app/shared-components/more-button/more-button.component.ts");
/* harmony import */ var _option_button_group_option_button_group_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./option-button-group/option-button-group.component */ "./src/app/shared-components/option-button-group/option-button-group.component.ts");
/* harmony import */ var _select_box_select_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./select-box/select-box.component */ "./src/app/shared-components/select-box/select-box.component.ts");
/* harmony import */ var _toogle_slider_toogle_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toogle-slider/toogle-slider.component */ "./src/app/shared-components/toogle-slider/toogle-slider.component.ts");
/* harmony import */ var _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./progress-bar/progress-bar.component */ "./src/app/shared-components/progress-bar/progress-bar.component.ts");
/* harmony import */ var _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tooltip/tooltip.component */ "./src/app/shared-components/tooltip/tooltip.component.ts");















class SharedComponentsModule {
}
SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            xng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_5__["AppGridComponent"],
        _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsComponent"],
        _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_7__["LoadingIndicatorComponent"],
        _more_button_more_button_component__WEBPACK_IMPORTED_MODULE_8__["MoreButtonComponent"],
        _option_button_group_option_button_group_component__WEBPACK_IMPORTED_MODULE_9__["OptionButtonGroupComponent"],
        _select_box_select_box_component__WEBPACK_IMPORTED_MODULE_10__["SelectBoxComponent"],
        _toogle_slider_toogle_slider_component__WEBPACK_IMPORTED_MODULE_11__["ToogleSliderComponent"],
        _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__["ProgressBarComponent"],
        _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__["TooltipComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        xng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"]], exports: [_app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_5__["AppGridComponent"],
        _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsComponent"],
        _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_7__["LoadingIndicatorComponent"],
        _more_button_more_button_component__WEBPACK_IMPORTED_MODULE_8__["MoreButtonComponent"],
        _option_button_group_option_button_group_component__WEBPACK_IMPORTED_MODULE_9__["OptionButtonGroupComponent"],
        _select_box_select_box_component__WEBPACK_IMPORTED_MODULE_10__["SelectBoxComponent"],
        _toogle_slider_toogle_slider_component__WEBPACK_IMPORTED_MODULE_11__["ToogleSliderComponent"],
        _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__["ProgressBarComponent"],
        _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__["TooltipComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_5__["AppGridComponent"],
                    _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsComponent"],
                    _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_7__["LoadingIndicatorComponent"],
                    _more_button_more_button_component__WEBPACK_IMPORTED_MODULE_8__["MoreButtonComponent"],
                    _option_button_group_option_button_group_component__WEBPACK_IMPORTED_MODULE_9__["OptionButtonGroupComponent"],
                    _select_box_select_box_component__WEBPACK_IMPORTED_MODULE_10__["SelectBoxComponent"],
                    _toogle_slider_toogle_slider_component__WEBPACK_IMPORTED_MODULE_11__["ToogleSliderComponent"],
                    _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__["ProgressBarComponent"],
                    _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__["TooltipComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                    xng_breadcrumb__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbModule"],
                ],
                exports: [
                    _app_grid_app_grid_component__WEBPACK_IMPORTED_MODULE_5__["AppGridComponent"],
                    _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbsComponent"],
                    _loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_7__["LoadingIndicatorComponent"],
                    _more_button_more_button_component__WEBPACK_IMPORTED_MODULE_8__["MoreButtonComponent"],
                    _option_button_group_option_button_group_component__WEBPACK_IMPORTED_MODULE_9__["OptionButtonGroupComponent"],
                    _select_box_select_box_component__WEBPACK_IMPORTED_MODULE_10__["SelectBoxComponent"],
                    _toogle_slider_toogle_slider_component__WEBPACK_IMPORTED_MODULE_11__["ToogleSliderComponent"],
                    _progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_12__["ProgressBarComponent"],
                    _tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_13__["TooltipComponent"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared-components/toogle-slider/toogle-slider.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared-components/toogle-slider/toogle-slider.component.ts ***!
  \****************************************************************************/
/*! exports provided: ToogleSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToogleSliderComponent", function() { return ToogleSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0) { return { active: a0 }; };
class ToogleSliderComponent {
    constructor() {
        this.defaultActive = false;
        this._onChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isActive = this.defaultActive;
    }
    ngOnInit() { }
    onClick() {
        this.isActive = !this.isActive;
        this._onChanged.emit(this.isActive);
    }
}
ToogleSliderComponent.ɵfac = function ToogleSliderComponent_Factory(t) { return new (t || ToogleSliderComponent)(); };
ToogleSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToogleSliderComponent, selectors: [["app-toogle-slider"]], inputs: { defaultActive: "defaultActive" }, outputs: { _onChanged: "_onChanged" }, decls: 1, vars: 3, consts: [[1, "toggle-slider", 3, "ngClass", "click"]], template: function ToogleSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToogleSliderComponent_Template_div_click_0_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.isActive));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["app-toogle-slider[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n.toggle-slider[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 14px;\n  position: relative;\n  background-color: var(--toggle-slider-bg);\n  border-radius: 30px;\n  display: inline-block;\n  cursor: pointer;\n}\n.toggle-slider[_ngcontent-%COMP%]:after {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-color: var(--toggle-slider-ball-bg);\n  border-radius: 50%;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  transition: all 0.2s var(--transition-timing);\n}\n.toggle-slider.active[_ngcontent-%COMP%] {\n  background-color: var(--toggle-slider-active-bg);\n}\n.toggle-slider.active[_ngcontent-%COMP%]:after {\n  background-color: var(--toggle-slider-active-ball-bg);\n  left: calc(100% - 20px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvdG9vZ2xlLXNsaWRlci90b29nbGUtc2xpZGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy90b29nbGUtc2xpZGVyL3Rvb2dsZS1zbGlkZXIuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFBO0FDREo7QURJQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDRko7QURLSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7QUNIUjtBRE1JO0VBQ0ksZ0RBQUE7QUNKUjtBRE1RO0VBQ0kscURBQUE7RUFDQSx1QkFBQTtBQ0paIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvdG9vZ2xlLXNsaWRlci90b29nbGUtc2xpZGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGJhbGwtd2lkdGg6IDIwcHg7XG5cbmFwcC10b29nbGUtc2xpZGVyIHtcbiAgICBsaW5lLWhlaWdodDogMDtcbn1cblxuLnRvZ2dsZS1zbGlkZXIge1xuICAgIHdpZHRoOiAzNnB4O1xuICAgIGhlaWdodDogMTRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlLXNsaWRlci1iZyk7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLy8gYmFsbFxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiBAYmFsbC13aWR0aDtcbiAgICAgICAgaGVpZ2h0OiBAYmFsbC13aWR0aDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlLXNsaWRlci1iYWxsLWJnKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZS1zbGlkZXItYWN0aXZlLWJnKTtcbiAgICAgICAgXG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlLXNsaWRlci1hY3RpdmUtYmFsbC1iZyk7XG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDEwMCUgLSBAYmFsbC13aWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiYXBwLXRvb2dsZS1zbGlkZXIge1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi50b2dnbGUtc2xpZGVyIHtcbiAgd2lkdGg6IDM2cHg7XG4gIGhlaWdodDogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10b2dnbGUtc2xpZGVyLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udG9nZ2xlLXNsaWRlcjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9nZ2xlLXNsaWRlci1iYWxsLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbn1cbi50b2dnbGUtc2xpZGVyLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZS1zbGlkZXItYWN0aXZlLWJnKTtcbn1cbi50b2dnbGUtc2xpZGVyLmFjdGl2ZTphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvZ2dsZS1zbGlkZXItYWN0aXZlLWJhbGwtYmcpO1xuICBsZWZ0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToogleSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-toogle-slider',
                templateUrl: './toogle-slider.component.html',
                styleUrls: ['./toogle-slider.component.less']
            }]
    }], function () { return []; }, { defaultActive: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _onChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared-components/tooltip/tooltip.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared-components/tooltip/tooltip.component.ts ***!
  \****************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class TooltipComponent {
    constructor() {
        this.text = '';
    }
    ngOnInit() {
    }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(); };
TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["app-tooltip"]], inputs: { text: "text" }, ngContentSelectors: _c0, decls: 2, vars: 1, consts: [[1, "tooltip"]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-label", ctx.text);
    } }, styles: [".tooltip[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n}\n.tooltip[_ngcontent-%COMP%]:hover:before, .tooltip[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  visibility: visible;\n}\n[_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after {\n  content: attr(data-label);\n  color: var(--tooltip-fg);\n  background-color: var(--tooltip-bg);\n  padding: 0 10px;\n  min-width: 50px;\n  white-space: nowrap;\n  display: block;\n  position: absolute;\n  top: calc(100% + 7px);\n  left: 50%;\n  transform: translateX(-50%);\n  border-radius: 3px;\n  font: 400 10px/32px \"Open Sans\";\n  opacity: 0;\n  visibility: hidden;\n  transition: all var(--transition-speed) var(--transition-timing);\n}\n[_ngcontent-%COMP%]:after {\n  content: '';\n  top: 100%;\n  background-color: transparent;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid var(--tooltip-bg);\n  min-width: unset;\n  padding: 0;\n  opacity: 0;\n  visibility: hidden;\n  transition: all var(--transition-speed) var(--transition-timing);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvc2hhcmVkLWNvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50Lmxlc3MiLCIvaG9tZS9iZWUvQmVlL3NvdGF0ZWsvbW9kdG9vbHMtYXBwLW9sZC9zcmMvX3V0aWxzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJUTs7RUVBSixVQUFBO0VBQ0EsbUJBQUE7QURBSjtBRE9DOztFQUVHLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUU1QkEsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0VBQUE7QUR3Qko7QURPQztFQUNHLFdBQUE7RUFDQSxTQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMENBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUV6Q0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0VBQUE7QURxQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQtY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vX3V0aWxzLmxlc3NcIjtcblxuLnRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgJjpiZWZvcmUsXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgIC5zaG93LWVmZmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBsYWJlbCBsZXZlbCBuYW1lXG4mOmJlZm9yZSxcbiY6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgY29sb3I6IHZhcigtLXRvb2x0aXAtZmcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvb2x0aXAtYmcpO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBjYWxjKDEwMCUgKyA3cHgpO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQ6IDQwMCAxMHB4LzMycHggXCJPcGVuIFNhbnNcIjtcbiAgICAuaGlkZGVuLWVmZmVjdCgpO1xufVxuXG4vLyB0cmlhbmdsZVxuJjphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgdG9wOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHZhcigtLXRvb2x0aXAtYmcpO1xuICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gICAgcGFkZGluZzogMDtcbiAgICAuaGlkZGVuLWVmZmVjdCgpO1xufSIsIi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udG9vbHRpcDpob3ZlcjpiZWZvcmUsXG4udG9vbHRpcDpob3Zlcjo6YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuOmJlZm9yZSxcbjphZnRlciB7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gIGNvbG9yOiB2YXIoLS10b29sdGlwLWZnKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9vbHRpcC1iZyk7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgbWluLXdpZHRoOiA1MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoMTAwJSArIDdweCk7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGZvbnQ6IDQwMCAxMHB4LzMycHggXCJPcGVuIFNhbnNcIjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xufVxuOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHRvcDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgdmFyKC0tdG9vbHRpcC1iZyk7XG4gIG1pbi13aWR0aDogdW5zZXQ7XG4gIHBhZGRpbmc6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbn1cbiIsIi5oaWRkZW4tZWZmZWN0ICgpIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xufVxuXG4uc2hvdy1lZmZlY3QgKCkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLy8gc2Nyb2xsIGJhclxuLnNjcm9sbC1iYXItMDEgKCkge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNEQ1NTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzQxNEQ1NTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWYyMDtcbiAgICB9XG59XG5cbi5zY3JvbGwtYmFyLTAyICgpIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTRENTU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAvLyB3aWR0aDogMTJweDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkICM0MTRENTU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNjcxNWI7XG4gICAgfVxufVxuXG4vLyBjcmVhdGUgbWF0ZXJpYWwgSWNvbiBhcyBwc2V1ZG8gZWxlbWVudFxuLm1hdGVyaWFsSWNvbkZyb20oQGNvbnRlbnQsIEB0eXBlOiBhZnRlcikge1xuICAgICY6QHt0eXBlfSB7XG4gICAgICAgIGNvbnRlbnQ6IEBjb250ZW50O1xuICAgICAgICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbiAgICB9XG59XG5cbi8vIHRleHQgb25lbGluZSBvdmVyZmxvd1xuLnRleHQtb3ZlcmZsb3coKSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tooltip',
                templateUrl: './tooltip.component.html',
                styleUrls: ['./tooltip.component.less']
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared-components/user.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared-components/user.service.ts ***!
  \***************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sentry_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sentry/browser */ "./node_modules/@sentry/browser/esm/index.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class UserService {
    constructor(http) {
        this.http = http;
        this.defaultPrefs = {
            language: src_constants__WEBPACK_IMPORTED_MODULE_3__["DefaultLanguage"],
            lastClientId: src_constants__WEBPACK_IMPORTED_MODULE_3__["DefaultClient"],
            lastContentType: src_constants__WEBPACK_IMPORTED_MODULE_3__["DefaultContentType"],
        };
        this.defaultUser = {
            moderatorId: 'user@example.com',
            displayName: 'DEFAULT USER',
            email: 'user@example.com',
            emails: [{ value: 'user@example.com', verified: false }],
            id: 'user@example.com',
            name: { familyName: 'User', givenName: 'Default' },
            photos: [],
            provider: 'NONE',
            config: {
                allowedLanguages: ['en'],
                allowedClients: [60]
            }
        };
    }
    me() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // If we already have a user, don't get it again
            if (this.user)
                return this.user;
            try {
                this.user = this.defaultUser;
                // this.user = await this.http.get<User>('/me').toPromise();
                // // Set the user in Sentry
                // Sentry.setUser({
                //   email: this.user?.email,
                //   name: this.user?.displayName
                // });
            }
            catch (error) {
                // If we failed to get a user, return a default one.
                if (error.status === 404)
                    this.user = this.defaultUser;
                // Unset the Sentry user
                _sentry_browser__WEBPACK_IMPORTED_MODULE_2__["setUser"](null);
            }
            return this.user;
        });
    }
    get preferences() {
        // Use in-memory prefs first
        if (this.prefs)
            return this.prefs;
        // Try getting prefs from LocalStorage
        if ('localStorage' in window) {
            const savedPrefs = window.localStorage.getItem('prefs');
            if (savedPrefs) {
                try {
                    this.prefs = JSON.parse(savedPrefs);
                    return this.prefs;
                }
                catch (error) {
                    _sentry_browser__WEBPACK_IMPORTED_MODULE_2__["addBreadcrumb"]({ category: 'user', message: 'Tried loading user prefs from LocalStorage', level: _sentry_browser__WEBPACK_IMPORTED_MODULE_2__["Severity"].Error });
                    _sentry_browser__WEBPACK_IMPORTED_MODULE_2__["captureException"](error);
                    console.error(error);
                }
            }
        }
        // Fail back to default prefs
        return this.defaultPrefs;
    }
    updatePreferences(value) {
        // Merge prefs
        this.prefs = Object.assign(Object.assign({}, this.preferences), value);
        // Serialize and save to LocalStorage
        if ('localStorage' in window) {
            try {
                // Serialize and save the prefs to LocalStorage
                // TODO: #scooter - Persist these with the user's prefs on the server
                const savedPrefs = JSON.stringify(this.prefs);
                window.localStorage.setItem('prefs', savedPrefs);
            }
            catch (error) {
                _sentry_browser__WEBPACK_IMPORTED_MODULE_2__["addBreadcrumb"]({ category: 'user', message: 'Tried saving user prefs to LocalStorage', level: _sentry_browser__WEBPACK_IMPORTED_MODULE_2__["Severity"].Error });
                _sentry_browser__WEBPACK_IMPORTED_MODULE_2__["captureException"](error);
                console.error(error);
            }
        }
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/subnav/admin-button/admin-button.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/subnav/admin-button/admin-button.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminButtonComponent", function() { return AdminButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AdminButtonComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AdminButtonComponent.ɵfac = function AdminButtonComponent_Factory(t) { return new (t || AdminButtonComponent)(); };
AdminButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminButtonComponent, selectors: [["app-admin-button"]], decls: 2, vars: 0, consts: [[1, "disabled"]], template: function AdminButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".subnav[_nghost-%COMP%]   a[_ngcontent-%COMP%], .subnav   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 3em;\n  font: 600 12px/20px \"Montserrat\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvc3VibmF2L2FkbWluLWJ1dHRvbi9hZG1pbi1idXR0b24uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3N1Ym5hdi9hZG1pbi1idXR0b24vYWRtaW4tYnV0dG9uLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxnQ0FBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc3VibmF2L2FkbWluLWJ1dHRvbi9hZG1pbi1idXR0b24uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5zdWJuYXYpIHtcbiAgYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNlbTtcbiAgICBmb250OiA2MDAgMTJweC8yMHB4IFwiTW9udHNlcnJhdFwiO1xuICB9XG59IiwiOmhvc3QtY29udGV4dCguc3VibmF2KSBhIHtcbiAgbWFyZ2luLWxlZnQ6IDNlbTtcbiAgZm9udDogNjAwIDEycHgvMjBweCBcIk1vbnRzZXJyYXRcIjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-button',
                templateUrl: './admin-button.component.html',
                styleUrls: ['./admin-button.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/subnav/api-button/api-button.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/subnav/api-button/api-button.component.ts ***!
  \***********************************************************/
/*! exports provided: ApiButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiButtonComponent", function() { return ApiButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ApiButtonComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ApiButtonComponent.ɵfac = function ApiButtonComponent_Factory(t) { return new (t || ApiButtonComponent)(); };
ApiButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApiButtonComponent, selectors: [["app-api-button"]], decls: 2, vars: 0, consts: [[1, "disabled"]], template: function ApiButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".subnav[_nghost-%COMP%]   a[_ngcontent-%COMP%], .subnav   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 3em;\n  font: 600 12px/20px \"Montserrat\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvc3VibmF2L2FwaS1idXR0b24vYXBpLWJ1dHRvbi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc3VibmF2L2FwaS1idXR0b24vYXBpLWJ1dHRvbi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsZ0NBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3N1Ym5hdi9hcGktYnV0dG9uL2FwaS1idXR0b24uY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5zdWJuYXYpIHtcbiAgYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNlbTtcbiAgICBmb250OiA2MDAgMTJweC8yMHB4IFwiTW9udHNlcnJhdFwiO1xuICB9XG59IiwiOmhvc3QtY29udGV4dCguc3VibmF2KSBhIHtcbiAgbWFyZ2luLWxlZnQ6IDNlbTtcbiAgZm9udDogNjAwIDEycHgvMjBweCBcIk1vbnRzZXJyYXRcIjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-api-button',
                templateUrl: './api-button.component.html',
                styleUrls: ['./api-button.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/subnav/help/help.component.ts":
/*!***********************************************!*\
  !*** ./src/app/subnav/help/help.component.ts ***!
  \***********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HelpComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-subnav-help"]], decls: 2, vars: 0, consts: [[1, "disabled"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".subnav[_nghost-%COMP%]   a[_ngcontent-%COMP%], .subnav   [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-left: 3em;\n  font: 600 12px/20px \"Montserrat\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvc3VibmF2L2hlbHAvaGVscC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc3VibmF2L2hlbHAvaGVscC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0EsZ0NBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3N1Ym5hdi9oZWxwL2hlbHAuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KC5zdWJuYXYpIHtcbiAgYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDNlbTtcbiAgICBmb250OiA2MDAgMTJweC8yMHB4IFwiTW9udHNlcnJhdFwiO1xuICB9XG59IiwiOmhvc3QtY29udGV4dCguc3VibmF2KSBhIHtcbiAgbWFyZ2luLWxlZnQ6IDNlbTtcbiAgZm9udDogNjAwIDEycHgvMjBweCBcIk1vbnRzZXJyYXRcIjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subnav-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/subnav/sub-navigation/sub-navigation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/subnav/sub-navigation/sub-navigation.component.ts ***!
  \*******************************************************************/
/*! exports provided: SubNavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubNavigationComponent", function() { return SubNavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../help/help.component */ "./src/app/subnav/help/help.component.ts");
/* harmony import */ var _api_button_api_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api-button/api-button.component */ "./src/app/subnav/api-button/api-button.component.ts");
/* harmony import */ var _admin_button_admin_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin-button/admin-button.component */ "./src/app/subnav/admin-button/admin-button.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    const MSG_EXTERNAL_7862995079320170383$$SRC_APP_SUBNAV_SUB_NAVIGATION_SUB_NAVIGATION_COMPONENT_TS__1 = goog.getMsg("{$interpolation}", { "interpolation": "\uFFFD0\uFFFD" });
    I18N_0 = MSG_EXTERNAL_7862995079320170383$$SRC_APP_SUBNAV_SUB_NAVIGATION_SUB_NAVIGATION_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:␟d6d405dde1445088b0fcf9e4ebc219507323824e␟7862995079320170383:${"\uFFFD0\uFFFD"}:INTERPOLATION:`;
}
function SubNavigationComponent_li_4_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} if (rf & 2) {
    const item_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("mdi-" + item_r58.icon);
} }
function SubNavigationComponent_li_4_i_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SubNavigationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubNavigationComponent_li_4_i_2_Template, 1, 2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SubNavigationComponent_li_4_i_5_Template, 2, 0, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r58.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r58.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](item_r58.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r58.subMenu);
} }
const navList = [
    {
        text: 'Home',
        link: '/',
        icon: 'view-dashboard-outline',
    },
    {
        text: 'Policy Guides',
        link: '#',
        icon: 'book-multiple',
    },
    {
        text: 'Filter Quality',
        link: '/filter-quality',
        icon: 'filter-outline',
        subMenu: [
            {
                text: 'Audit Rules',
                link: '/audit-rules',
            },
        ]
    },
    {
        text: 'User Reputation',
        link: '#',
        icon: 'account-check-outline',
    },
    {
        text: 'Reported Content',
        link: '#',
        icon: 'table-of-contents',
    },
    {
        text: 'Transparency Reports',
        link: '#',
        icon: 'chart-bar',
    },
];
class SubNavigationComponent {
    constructor() {
        this.navList = navList;
        this.collapseEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    toggleCollapse(event) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_1__["has"])(event, 'target.checked')) {
            this.collapseEvent.emit(event.target.checked);
        }
    }
}
SubNavigationComponent.ɵfac = function SubNavigationComponent_Factory(t) { return new (t || SubNavigationComponent)(); };
SubNavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubNavigationComponent, selectors: [["app-sub-navigation"]], outputs: { collapseEvent: "collapseEvent" }, decls: 8, vars: 1, consts: [[1, "subnav"], [1, "collapse-toggle", "disabled"], ["type", "checkbox", 3, "click", "change"], [1, "top-level-nav"], [4, "ngFor", "ngForOf"], [3, "routerLink"], ["class", "nav-icon mdi", 3, "class", 4, "ngIf"], ["class", "material-icons", 4, "ngIf"], [1, "nav-icon", "mdi"], [1, "material-icons"]], template: function SubNavigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubNavigationComponent_Template_input_click_2_listener($event) { return ctx.toggleCollapse($event); })("change", function SubNavigationComponent_Template_input_change_2_listener() { return 0; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SubNavigationComponent_li_4_Template, 6, 4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-subnav-help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-api-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-admin-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"], _api_button_api_button_component__WEBPACK_IMPORTED_MODULE_4__["ApiButtonComponent"], _admin_button_admin_button_component__WEBPACK_IMPORTED_MODULE_5__["AdminButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["nav[_ngcontent-%COMP%] {\n  grid-area: nav;\n  width: 100%;\n  max-width: var(--max-page-width);\n  margin: 0 auto;\n  border-bottom: solid 1px var(--section-separator);\n  padding: 9px var(--page-content-padding);\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\nnav.collapsed[_ngcontent-%COMP%] {\n  opacity: 0.3;\n}\nnav[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n  font-size: 16px;\n}\n.collapse-toggle[_ngcontent-%COMP%] {\n  background-color: var(--button-bg);\n  border-radius: 20px;\n  padding: 0.5rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.collapse-toggle[_ngcontent-%COMP%]:before {\n  content: 'expand_less';\n  font-family: 'Material Icons';\n  font-size: 21px;\n  color: #636D73;\n  font-weight: bold;\n}\n.collapse-toggle[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n.top-level-nav[_ngcontent-%COMP%] {\n  margin-right: auto;\n  list-style: none;\n  padding-left: 1.5em;\n}\n.top-level-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.top-level-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  font: 600 12px/20px \"Montserrat\";\n  transition: color var(--transition-speed) var(--transition-timing);\n}\n.top-level-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent-brand);\n}\n.top-level-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    + li[_ngcontent-%COMP%] {\n  margin-left: 2em;\n}\n.top-level-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-left: 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvc3VibmF2L3N1Yi1uYXZpZ2F0aW9uL3N1Yi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zdWJuYXYvc3ViLW5hdmlnYXRpb24vc3ViLW5hdmlnYXRpb24uY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0VBQ0Esd0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7QUNDSjtBRGRBO0VBaUJJLG1CQUFBO0VBQ0EsZUFBQTtBQ0FKO0FESUE7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0ZGO0FER0U7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0RKO0FEWEE7RUFlSSxhQUFBO0FDREo7QURLQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0hGO0FEQUE7RUFNSSxxQkFBQTtBQ0hKO0FESEE7RUFRTSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrRUFBQTtBQ0ZOO0FESU07RUFDRSwwQkFBQTtBQ0ZSO0FEWkE7RUFvQkksZ0JBQUE7QUNMSjtBRGZBO0VBd0JJLGVBQUE7RUFDQSxtQkFBQTtBQ05KIiwiZmlsZSI6InNyYy9hcHAvc3VibmF2L3N1Yi1uYXZpZ2F0aW9uL3N1Yi1uYXZpZ2F0aW9uLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsibmF2IHtcbiAgZ3JpZC1hcmVhOiBuYXY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC1wYWdlLXdpZHRoKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1zZWN0aW9uLXNlcGFyYXRvcik7XG4gIHBhZGRpbmc6IDlweCB2YXIoLS1wYWdlLWNvbnRlbnQtcGFkZGluZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmLmNvbGxhcHNlZCB7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG5cbiAgLm5hdi1pY29uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuXG4uY29sbGFwc2UtdG9nZ2xlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJnKTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnZXhwYW5kX2xlc3MnO1xuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICBjb2xvcjogIzYzNkQ3MztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBpbnB1dCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4udG9wLWxldmVsLW5hdiB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAxLjVlbTtcblxuICBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGEge1xuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udDogNjAwIDEycHgvMjBweCBcIk1vbnRzZXJyYXRcIjtcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtYnJhbmQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxpICsgbGkge1xuICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gIH1cblxuICBsaSBpLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDAuMjVlbTtcbiAgfVxuXG59IiwibmF2IHtcbiAgZ3JpZC1hcmVhOiBuYXY7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHZhcigtLW1heC1wYWdlLXdpZHRoKTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1zZWN0aW9uLXNlcGFyYXRvcik7XG4gIHBhZGRpbmc6IDlweCB2YXIoLS1wYWdlLWNvbnRlbnQtcGFkZGluZyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbm5hdi5jb2xsYXBzZWQge1xuICBvcGFjaXR5OiAwLjM7XG59XG5uYXYgLm5hdi1pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLmNvbGxhcHNlLXRvZ2dsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iZyk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNvbGxhcHNlLXRvZ2dsZTpiZWZvcmUge1xuICBjb250ZW50OiAnZXhwYW5kX2xlc3MnO1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjb2xvcjogIzYzNkQ3MztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29sbGFwc2UtdG9nZ2xlIGlucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi50b3AtbGV2ZWwtbmF2IHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xufVxuLnRvcC1sZXZlbC1uYXYgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4udG9wLWxldmVsLW5hdiBsaSBhIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQ6IDYwMCAxMnB4LzIwcHggXCJNb250c2VycmF0XCI7XG4gIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbn1cbi50b3AtbGV2ZWwtbmF2IGxpIGE6aG92ZXIge1xuICBjb2xvcjogdmFyKC0tYWNjZW50LWJyYW5kKTtcbn1cbi50b3AtbGV2ZWwtbmF2IGxpICsgbGkge1xuICBtYXJnaW4tbGVmdDogMmVtO1xufVxuLnRvcC1sZXZlbC1uYXYgbGkgaS5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVlbTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubNavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sub-navigation',
                templateUrl: './sub-navigation.component.html',
                styleUrls: ['./sub-navigation.component.less']
            }]
    }], function () { return []; }, { collapseEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/subnav/subnav.module.ts":
/*!*****************************************!*\
  !*** ./src/app/subnav/subnav.module.ts ***!
  \*****************************************/
/*! exports provided: SubnavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubnavModule", function() { return SubnavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help/help.component */ "./src/app/subnav/help/help.component.ts");
/* harmony import */ var _sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sub-navigation/sub-navigation.component */ "./src/app/subnav/sub-navigation/sub-navigation.component.ts");
/* harmony import */ var _api_button_api_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api-button/api-button.component */ "./src/app/subnav/api-button/api-button.component.ts");
/* harmony import */ var _admin_button_admin_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-button/admin-button.component */ "./src/app/subnav/admin-button/admin-button.component.ts");








class SubnavModule {
}
SubnavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SubnavModule });
SubnavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SubnavModule_Factory(t) { return new (t || SubnavModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SubnavModule, { declarations: [_help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"],
        _sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_4__["SubNavigationComponent"],
        _api_button_api_button_component__WEBPACK_IMPORTED_MODULE_5__["ApiButtonComponent"],
        _admin_button_admin_button_component__WEBPACK_IMPORTED_MODULE_6__["AdminButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_4__["SubNavigationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubnavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _help_help_component__WEBPACK_IMPORTED_MODULE_3__["HelpComponent"],
                    _sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_4__["SubNavigationComponent"],
                    _api_button_api_button_component__WEBPACK_IMPORTED_MODULE_5__["ApiButtonComponent"],
                    _admin_button_admin_button_component__WEBPACK_IMPORTED_MODULE_6__["AdminButtonComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ],
                exports: [
                    _sub_navigation_sub_navigation_component__WEBPACK_IMPORTED_MODULE_4__["SubNavigationComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/*! exports provided: Topics, generalRiskTopic, Policy, RiskLevels, Languages, ContentType, DiagnoseSearchParams, DefaultClient, DefaultLanguage, DefaultContentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Topics", function() { return Topics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalRiskTopic", function() { return generalRiskTopic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Policy", function() { return Policy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskLevels", function() { return RiskLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Languages", function() { return Languages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentType", function() { return ContentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnoseSearchParams", function() { return DiagnoseSearchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultClient", function() { return DefaultClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLanguage", function() { return DefaultLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultContentType", function() { return DefaultContentType; });
const Topics = {
    0: { name: 'General Risk', icon: 'numeric-${risk}-box', faIcon: 'fa-comments' },
    1: { name: 'Bullying', icon: 'account-group', faIcon: 'fa-comments' },
    2: { name: 'Fighting', icon: 'kabaddi', faIcon: 'fa-comments' },
    3: { name: 'Personal Information', icon: 'account-search', faIcon: 'fa-comments' },
    4: { name: 'Dating and Sexting', icon: 'heart', faIcon: 'fa-heart' },
    5: { name: 'Vulgar', icon: 'chat-alert', faIcon: 'fa-angry' },
    6: { name: 'Drugs and Alcohol', icon: 'cannabis', faIcon: 'fa-comments' },
    7: { name: 'In-Game Items', icon: 'cube-outline', faIcon: 'fa-comments' },
    8: { name: 'Alarm', icon: 'alert-decagram', faIcon: 'fa-comments' },
    9: { name: 'Fraud', icon: 'cash', faIcon: 'fa-comments' },
    10: { name: 'Racist', icon: 'whistle', faIcon: 'fa-comments' },
    11: { name: 'Religion', icon: 'church', faIcon: 'fa-comments' },
    13: { name: 'Website', icon: 'link', faIcon: 'fa-comments' },
    14: { name: 'Grooming', icon: 'account-child', faIcon: 'fa-comments' },
    15: { name: 'Public Threats', icon: 'target-account', faIcon: 'fa-comments' },
    16: { name: 'Real Name', icon: 'account-badge-horizontal', faIcon: 'fa-comments' },
    17: { name: 'Radicalization', icon: 'bullhorn', faIcon: 'fa-comments' },
    18: { name: 'Subversive', icon: 'guy-fawkes-mask', faIcon: 'fa-comments' },
    19: { name: 'Sentiment', icon: 'emoticon', faIcon: 'fa-comments' },
    20: { name: 'Politics', icon: 'gavel', faIcon: 'fa-comments' },
    27: { name: 'Custom1', icon: 'number-1-circle-outline', faIcon: 'fa-comments' },
    28: { name: 'Custom2', icon: 'number-2-circle-outline', faIcon: 'fa-comments' },
    29: { name: 'Custom3', icon: 'number-3-circle-outline', faIcon: 'fa-comments' },
    30: { name: 'Custom4', icon: 'number-4-circle-outline', faIcon: 'fa-comments' },
    31: { name: 'Custom5', icon: 'number-5-circle-outline', faIcon: 'fa-comments' },
};
const generalRiskTopic = 0;
class Policy {
}
const RiskLevels = {
    0: { name: 'Always Safe', color: '#7ED321' },
    1: { name: 'Very Safe', color: '#4de761' },
    2: { name: 'Grey', color: '#afb8a1' },
    3: { name: 'Questionable', color: '#fbcb40' },
    4: { name: 'Unknow', color: '#2d96fe' },
    5: { name: 'Mild', color: '#f6715b' },
    6: { name: 'Offensive', color: '#f17209' },
    7: { name: 'Obscene', color: '#ed1c24' },
};
const Languages = [
    { code: 'ar', name: 'Arabic', partial: false },
    { code: 'da', name: 'Danish', partial: true },
    { code: 'de', name: 'German', partial: false },
    { code: 'en', name: 'English', partial: false },
    { code: 'es', name: 'Spanish', partial: false },
    { code: 'fi', name: 'Finnish', partial: false },
    { code: 'fr', name: 'French', partial: false },
    { code: 'hi', name: 'Hindi', partial: true },
    { code: 'id', name: 'Indonesian', partial: false },
    { code: 'it', name: 'Italian', partial: false },
    { code: 'ja', name: 'Japanese', partial: false },
    { code: 'ko', name: 'Korean', partial: false },
    { code: 'nl', name: 'Dutch', partial: false },
    { code: 'no', name: 'Norwegian', partial: true },
    { code: 'pl', name: 'Polish', partial: false },
    { code: 'pt', name: 'Portuguese', partial: false },
    { code: 'ro', name: 'Romanian', partial: false },
    { code: 'ru', name: 'Russian', partial: false },
    { code: 'sv', name: 'Swedish', partial: true },
    { code: 'th', name: 'Thai', partial: false },
    { code: 'tr', name: 'Turkish', partial: false },
    { code: 'vi', name: 'Vietnamese', partial: false },
    { code: 'zh', name: 'Chinese', partial: false },
];
const ContentType = [
    { content: 'Short Text', value: 'SHORT_TEXT' },
    { content: 'Long Text', value: 'LONG_TEXT' },
    { content: 'User Name', value: 'USERNAME' },
];
const DiagnoseSearchParams = 'keyword';
// Set the default client
const DefaultClient = 0;
// Set the default language to English
const DefaultLanguage = 'en';
// Set the default ContentType to SHORT_TEXT
const DefaultContentType = 'SHORT_TEXT';


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: 'https://virtserver.swaggerhub.com/twohat/classifyText/2.0.1',
    sentry: {
        dsn: 'https://1f168fd1b0fa4b6999f1a901c0804a91@sentry.io/1788710',
        environment: 'development',
        ignoreErrors: [
            'Non-Error exception captured'
        ]
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/bee/Bee/sotatek/modtools-app-old/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map