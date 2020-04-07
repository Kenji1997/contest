(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-diagnose-diagnose-module"],{

/***/ "./src/app/modules/diagnose/diagnose-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/diagnose/diagnose-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DiagnoseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnoseRoutingModule", function() { return DiagnoseRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _diagnose_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./diagnose.component */ "./src/app/modules/diagnose/diagnose.component.ts");





const routes = [
    {
        path: '',
        component: _diagnose_component__WEBPACK_IMPORTED_MODULE_2__["DiagnoseComponent"]
    }
];
class DiagnoseRoutingModule {
}
DiagnoseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DiagnoseRoutingModule });
DiagnoseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DiagnoseRoutingModule_Factory(t) { return new (t || DiagnoseRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DiagnoseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiagnoseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/diagnose/diagnose-text/diagnose-text.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/diagnose/diagnose-text/diagnose-text.component.ts ***!
  \***************************************************************************/
/*! exports provided: DiagnoseTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnoseTextComponent", function() { return DiagnoseTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../topic/topic.component */ "./src/app/modules/diagnose/topic/topic.component.ts");
/* harmony import */ var src_app_pipes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/pipes */ "./src/app/pipes/index.ts");






function DiagnoseTextComponent_div_1_div_8_app_topic_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-topic", 14);
} if (rf & 2) {
    const topic_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("topic", topic_r48.key)("level", topic_r48.value);
} }
function DiagnoseTextComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "riskLevelToColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DiagnoseTextComponent_div_1_div_8_app_topic_13_Template, 1, 2, "app-topic", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rule_r46 = ctx.$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--rule-risk-level", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, rule_r46.topics[ctx_r45.generalRiskTopic]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rule_r46.topics[ctx_r45.generalRiskTopic]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rule_r46.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](rule_r46.language);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 8, rule_r46.topics));
} }
function DiagnoseTextComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "riskLevelToColor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DiagnoseTextComponent_div_1_div_8_Template, 15, 10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](word_r44.original);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--bg-color", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, word_r44.level));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](word_r44.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", word_r44.tokens);
} }
class DiagnoseTextComponent {
    constructor() {
    }
    ngOnInit() {
        this.wordDiagnosed = this.handleGroupWord(this.extended);
        this.generalRiskTopic = src_constants__WEBPACK_IMPORTED_MODULE_1__["generalRiskTopic"];
    }
    /* Note:
     * + The rule we're using to group 2 or many word is the [text]
     *   property will be empty when it was used on the prev token
     * + We need to group [original] & tokens
     */
    handleGroupWord(extended) {
        const dataGrouped = extended.reduce((memo, slot, index) => {
            const { text, original, tokens } = slot;
            if (text === '') {
                let previousWord = memo[index - 1];
                let { original: prevOriginal, tokens: prevTokens } = previousWord;
                // append the current original text to the previous one
                prevOriginal = `${prevOriginal} ${original}`;
                // merge tokens
                prevTokens = this.mergeTokens(prevTokens, tokens);
                previousWord = Object.assign(previousWord, {
                    original: prevOriginal,
                    tokens: prevTokens
                });
            }
            else {
                const word = this.wordFromSlot(slot);
                memo.push(word);
            }
            return memo;
        }, []);
        return dataGrouped;
    }
    /*
     * Handle [slot] data to set some properties like color, topics...
     * Note: The color we're using get by trisk level of general-riskhe
     */
    wordFromSlot(slot) {
        const { text, solution, original, tokens } = slot;
        const chosenToken = tokens.find(token => token.text === solution);
        const level = chosenToken.topics[src_constants__WEBPACK_IMPORTED_MODULE_1__["generalRiskTopic"]];
        // Note: Reverse array to show the grouping at the top. Need to confirm
        const tokensReverse = tokens.reverse();
        const filterToken = this.mergeTokens(tokensReverse);
        return { text, original, level, tokens: filterToken };
    }
    /*
     * Merge tokens which have dulpicate [text] property
     */
    mergeTokens(...tokens) {
        const tokenFlated = tokens.flat();
        const mapTextToken = tokenFlated.reduce((memo, slot) => {
            if (!memo.hasOwnProperty(slot.text)) {
                memo[slot.text] = slot;
            }
            return memo;
        }, {});
        return Object.values(mapTextToken);
    }
}
DiagnoseTextComponent.ɵfac = function DiagnoseTextComponent_Factory(t) { return new (t || DiagnoseTextComponent)(); };
DiagnoseTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiagnoseTextComponent, selectors: [["app-diagnose-text"]], inputs: { extended: "extended" }, decls: 2, vars: 1, consts: [[1, "diagnose-text"], ["class", "text-box", 4, "ngFor", "ngForOf"], [1, "text-box"], [1, "text__item", "original"], [1, "text__item", "solution"], [1, "table", "detail-box"], ["class", "tr", 4, "ngFor", "ngForOf"], [1, "tr"], [1, "td"], [1, "risk-level"], [1, "name"], [1, "language"], [1, "topics"], ["type", "compact", 3, "topic", "level", 4, "ngFor", "ngForOf"], ["type", "compact", 3, "topic", "level"]], template: function DiagnoseTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiagnoseTextComponent_div_1_Template, 9, 7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wordDiagnosed);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _topic_topic_component__WEBPACK_IMPORTED_MODULE_3__["TopicComponent"]], pipes: [src_app_pipes__WEBPACK_IMPORTED_MODULE_4__["RiskLevelToColorPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: [".diagnose-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  background-color: var(--diagnose-text-bg);\n  padding: 15px 13px 0;\n}\n.text-box[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n.text-box[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 15px;\n}\n.text__item[_ngcontent-%COMP%] {\n  padding: 10px 22px;\n  border-radius: 4px;\n  font: 600 20px/24px \"Open Sans\";\n}\n.original[_ngcontent-%COMP%] {\n  background-color: var(--diagnose-text-original-bg);\n  color: var(--diagnose-text-original-fg);\n  margin-bottom: 18px;\n}\n.solution[_ngcontent-%COMP%] {\n  background-color: var(--bg-color);\n  color: var(--diagnose-text-solution-fg);\n  position: relative;\n}\n.solution[_ngcontent-%COMP%]:hover   .detail-box[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.detail-box[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 10;\n  background-color: var(--diagnose-text-deatil-box-bg);\n  max-height: var(--diagnose-text-deatil-box-max-height);\n  overflow-y: auto;\n  border-radius: 2px 2px 4px 4px;\n  opacity: 0;\n  visibility: hidden;\n  transition: all var(--transition-speed) var(--transition-timing);\n}\n.detail-box[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #414D55;\n}\n.detail-box[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 12px;\n  background-color: #F5F5F5;\n}\n.detail-box[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  box-sizing: border-box;\n  border: 3px solid #414D55;\n  background-color: #1b1f20;\n}\n.detail-box[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%] {\n  display: table-row;\n}\n.detail-box[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:hover {\n  background-color: var(--diagnose-text-deatil-box-hover-bg);\n}\n.detail-box[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:hover   .topics[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.detail-box[_ngcontent-%COMP%]   .tr[_ngcontent-%COMP%]:not(:last-child)   .td[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--diagnose-text-deatil-box-hover-bg);\n}\n.detail-box[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%] {\n  display: table-cell;\n  padding: 7px 0;\n}\n.detail-box[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:first-child {\n  padding-left: 10px;\n}\n.detail-box[_ngcontent-%COMP%]   .td[_ngcontent-%COMP%]:last-child {\n  padding-right: 10px;\n}\n.risk-level[_ngcontent-%COMP%] {\n  line-height: 20px;\n  font-size: 12px;\n  font-weight: 700;\n  text-align: center;\n  color: #333;\n  margin-right: 10px;\n  display: inline-block;\n  width: 25px;\n  height: 20px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  background-color: var(--rule-risk-level);\n}\n.name[_ngcontent-%COMP%] {\n  color: #FFF;\n  font: 400 13px/20px \"Open Sans\";\n  margin-right: 10px;\n}\n.language[_ngcontent-%COMP%] {\n  color: var(--diagnose-text-language-fg);\n  font-size: 12px;\n  margin-right: 10px;\n}\n.topics[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  opacity: 0;\n  visibility: hidden;\n  transition: all var(--transition-speed) var(--transition-timing);\n}\n.topics[_ngcontent-%COMP%]   app-topic[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbW9kdWxlcy9kaWFnbm9zZS9kaWFnbm9zZS10ZXh0L2RpYWdub3NlLXRleHQuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL21vZHVsZXMvZGlhZ25vc2UvZGlhZ25vc2UtdGV4dC9kaWFnbm9zZS10ZXh0LmNvbXBvbmVudC5sZXNzIiwiL2hvbWUvYmVlL0JlZS9zb3RhdGVrL21vZHRvb2xzLWFwcC1vbGQvc3JjL191dGlscy5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7RUFDQSxvQkFBQTtBQ0RKO0FESUE7RUFDSSxtQkFBQTtBQ0ZKO0FESUk7RUFDSSxrQkFBQTtBQ0ZSO0FETUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUNKSjtBRE9BO0VBQ0ksa0RBQUE7RUFDQSx1Q0FBQTtFQUNBLG1CQUFBO0FDTEo7QURRQTtFQUNJLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtBQ05KO0FEU0k7RUU3QkEsVUFBQTtFQUNBLG1CQUFBO0FEdUJKO0FEVUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG9EQUFBO0VBQ0Esc0RBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VFaERBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0FEeUNKO0FDL0JJO0VBQ0ksb0RBQUE7RUFDQSx5QkFBQTtBRGlDUjtBQzlCSTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBRGdDUjtBQzdCSTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FEK0JSO0FEakJBO0VBYVEsa0JBQUE7QUNPUjtBRE5RO0VBQ0ksMERBQUE7QUNRWjtBRFRRO0VFaERKLFVBQUE7RUFDQSxtQkFBQTtBRDRESjtBRDNCQTtFQTBCWSxpRUFBQTtBQ0laO0FEOUJBO0VBK0JRLG1CQUFBO0VBQ0EsY0FBQTtBQ0VSO0FEQ1E7RUFDSSxrQkFBQTtBQ0NaO0FERVE7RUFDSSxtQkFBQTtBQ0FaO0FES0E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBQ0hKO0FETUE7RUFDSSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtBQ0pKO0FET0E7RUFDSSx1Q0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEUUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUVsSEEsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0VBQUE7QUQ2R0o7QURDQTtFQU1RLGtCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RpYWdub3NlL2RpYWdub3NlLXRleHQvZGlhZ25vc2UtdGV4dC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9fdXRpbHMubGVzc1wiO1xuXG4uZGlhZ25vc2UtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlhZ25vc2UtdGV4dC1iZyk7XG4gICAgcGFkZGluZzogMTVweCAxM3B4IDA7XG59XG5cbi50ZXh0LWJveCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICB9XG59XG5cbi50ZXh0X19pdGVtIHtcbiAgICBwYWRkaW5nOiAxMHB4IDIycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGZvbnQ6IDYwMCAyMHB4LzI0cHggXCJPcGVuIFNhbnNcIjtcbn1cblxuLm9yaWdpbmFsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWFnbm9zZS10ZXh0LW9yaWdpbmFsLWJnKTtcbiAgICBjb2xvcjogdmFyKC0tZGlhZ25vc2UtdGV4dC1vcmlnaW5hbC1mZyk7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLnNvbHV0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gICAgY29sb3I6IHZhcigtLWRpYWdub3NlLXRleHQtc29sdXRpb24tZmcpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBcbiAgICBcbiAgICAmOmhvdmVyIC5kZXRhaWwtYm94IHtcbiAgICAgICAgLnNob3ctZWZmZWN0KCk7XG4gICAgfVxufVxuXG4uZGV0YWlsLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpYWdub3NlLXRleHQtZGVhdGlsLWJveC1iZyk7XG4gICAgbWF4LWhlaWdodDogdmFyKC0tZGlhZ25vc2UtdGV4dC1kZWF0aWwtYm94LW1heC1oZWlnaHQpO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMnB4IDJweCA0cHggNHB4O1xuICAgIC5oaWRkZW4tZWZmZWN0KCk7XG4gICAgLnNjcm9sbC1iYXItMDEoKTtcblxuICAgIC50ciB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLXJvdztcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWFnbm9zZS10ZXh0LWRlYXRpbC1ib3gtaG92ZXItYmcpO1xuXG4gICAgICAgICAgICAvLyBzaG93IHRvcGljcyB3aGVuIGhvdmVyIHRvIHJvd1xuICAgICAgICAgICAgLnRvcGljcyB7XG4gICAgICAgICAgICAgICAgLnNob3ctZWZmZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHI6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIC50ZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGlhZ25vc2UtdGV4dC1kZWF0aWwtYm94LWhvdmVyLWJnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZCB7XG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgICAgIHBhZGRpbmc6IDdweCAwO1xuXG4gICAgICAgIC8vIHBhZGRpbmcgbGVmdCAmIHJpZ2h0IGZvciB0aGUgcm93c1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucmlzay1sZXZlbCB7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ydWxlLXJpc2stbGV2ZWwpO1xufVxuXG4ubmFtZSB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZm9udDogNDAwIDEzcHgvMjBweCBcIk9wZW4gU2Fuc1wiO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmxhbmd1YWdlIHtcbiAgICBjb2xvcjogdmFyKC0tZGlhZ25vc2UtdGV4dC1sYW5ndWFnZS1mZyk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnRvcGljcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5oaWRkZW4tZWZmZWN0KCk7XG5cbiAgICBhcHAtdG9waWM6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG59XG4iLCIuZGlhZ25vc2UtdGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpYWdub3NlLXRleHQtYmcpO1xuICBwYWRkaW5nOiAxNXB4IDEzcHggMDtcbn1cbi50ZXh0LWJveCB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4udGV4dC1ib3g6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbi50ZXh0X19pdGVtIHtcbiAgcGFkZGluZzogMTBweCAyMnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQ6IDYwMCAyMHB4LzI0cHggXCJPcGVuIFNhbnNcIjtcbn1cbi5vcmlnaW5hbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpYWdub3NlLXRleHQtb3JpZ2luYWwtYmcpO1xuICBjb2xvcjogdmFyKC0tZGlhZ25vc2UtdGV4dC1vcmlnaW5hbC1mZyk7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG4uc29sdXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XG4gIGNvbG9yOiB2YXIoLS1kaWFnbm9zZS10ZXh0LXNvbHV0aW9uLWZnKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnNvbHV0aW9uOmhvdmVyIC5kZXRhaWwtYm94IHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5kZXRhaWwtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWFnbm9zZS10ZXh0LWRlYXRpbC1ib3gtYmcpO1xuICBtYXgtaGVpZ2h0OiB2YXIoLS1kaWFnbm9zZS10ZXh0LWRlYXRpbC1ib3gtbWF4LWhlaWdodCk7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDJweCAycHggNHB4IDRweDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xufVxuLmRldGFpbC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNEQ1NTtcbn1cbi5kZXRhaWwtYm94Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuLmRldGFpbC1ib3g6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzQxNEQ1NTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWYyMDtcbn1cbi5kZXRhaWwtYm94IC50ciB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cbi5kZXRhaWwtYm94IC50cjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpYWdub3NlLXRleHQtZGVhdGlsLWJveC1ob3Zlci1iZyk7XG59XG4uZGV0YWlsLWJveCAudHI6aG92ZXIgLnRvcGljcyB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uZGV0YWlsLWJveCAudHI6bm90KDpsYXN0LWNoaWxkKSAudGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tZGlhZ25vc2UtdGV4dC1kZWF0aWwtYm94LWhvdmVyLWJnKTtcbn1cbi5kZXRhaWwtYm94IC50ZCB7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBhZGRpbmc6IDdweCAwO1xufVxuLmRldGFpbC1ib3ggLnRkOmZpcnN0LWNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLmRldGFpbC1ib3ggLnRkOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuLnJpc2stbGV2ZWwge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzMzO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcnVsZS1yaXNrLWxldmVsKTtcbn1cbi5uYW1lIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQ6IDQwMCAxM3B4LzIwcHggXCJPcGVuIFNhbnNcIjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmxhbmd1YWdlIHtcbiAgY29sb3I6IHZhcigtLWRpYWdub3NlLXRleHQtbGFuZ3VhZ2UtZmcpO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi50b3BpY3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG59XG4udG9waWNzIGFwcC10b3BpYzpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuIiwiLmhpZGRlbi1lZmZlY3QgKCkge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG59XG5cbi5zaG93LWVmZmVjdCAoKSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vLyBzY3JvbGwgYmFyXG4uc2Nyb2xsLWJhci0wMSAoKSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0RDU1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNDE0RDU1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZjIwO1xuICAgIH1cbn1cblxuLnNjcm9sbC1iYXItMDIgKCkge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNEQ1NTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIC8vIHdpZHRoOiAxMnB4O1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgIzQxNEQ1NTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2NzE1YjtcbiAgICB9XG59XG5cbi8vIGNyZWF0ZSBtYXRlcmlhbCBJY29uIGFzIHBzZXVkbyBlbGVtZW50XG4ubWF0ZXJpYWxJY29uRnJvbShAY29udGVudCwgQHR5cGU6IGFmdGVyKSB7XG4gICAgJjpAe3R5cGV9IHtcbiAgICAgICAgY29udGVudDogQGNvbnRlbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgd29yZC13cmFwOiBub3JtYWw7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xuICAgIH1cbn1cblxuLy8gdGV4dCBvbmVsaW5lIG92ZXJmbG93XG4udGV4dC1vdmVyZmxvdygpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiagnoseTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-diagnose-text',
                templateUrl: './diagnose-text.component.html',
                styleUrls: ['./diagnose-text.component.less']
            }]
    }], function () { return []; }, { extended: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/diagnose/diagnose.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/diagnose/diagnose.component.ts ***!
  \********************************************************/
/*! exports provided: DiagnoseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnoseComponent", function() { return DiagnoseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_components_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared-components/user.service */ "./src/app/shared-components/user.service.ts");
/* harmony import */ var src_app_services_policy_policy_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/policy/policy.service */ "./src/app/services/policy/policy.service.ts");
/* harmony import */ var src_app_services_diagnose_diagnose_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/diagnose/diagnose.service */ "./src/app/services/diagnose/diagnose.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared-components/breadcrumbs/breadcrumbs.component */ "./src/app/shared-components/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _shared_components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared-components/tooltip/tooltip.component */ "./src/app/shared-components/tooltip/tooltip.component.ts");
/* harmony import */ var _main_language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../main/language-picker/language-picker.component */ "./src/app/main/language-picker/language-picker.component.ts");
/* harmony import */ var _shared_components_select_box_select_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared-components/select-box/select-box.component */ "./src/app/shared-components/select-box/select-box.component.ts");
/* harmony import */ var _main_client_picker_client_picker_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../main/client-picker/client-picker.component */ "./src/app/main/client-picker/client-picker.component.ts");
/* harmony import */ var _shared_components_toogle_slider_toogle_slider_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared-components/toogle-slider/toogle-slider.component */ "./src/app/shared-components/toogle-slider/toogle-slider.component.ts");
/* harmony import */ var _shared_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared-components/loading-indicator/loading-indicator.component */ "./src/app/shared-components/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _diagnose_text_diagnose_text_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./diagnose-text/diagnose-text.component */ "./src/app/modules/diagnose/diagnose-text/diagnose-text.component.ts");
/* harmony import */ var _regression_test_box_regression_test_box_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./regression-test-box/regression-test-box.component */ "./src/app/modules/diagnose/regression-test-box/regression-test-box.component.ts");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/modules/diagnose/topic/topic.component.ts");
/* harmony import */ var _policy_guide_policy_guide_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./policy-guide/policy-guide.component */ "./src/app/modules/diagnose/policy-guide/policy-guide.component.ts");
/* harmony import */ var _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared-components/progress-bar/progress-bar.component */ "./src/app/shared-components/progress-bar/progress-bar.component.ts");
/* harmony import */ var src_app_pipes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/pipes */ "./src/app/pipes/index.ts");

/* eslint-disable import/extensions */
/* eslint-disable no-unused-vars */
/* eslint-disable sort-imports */






















function DiagnoseComponent_div_23_p_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mistake_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mistake_r24.original);
} }
function DiagnoseComponent_div_23_div_11_app_topic_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-topic", 46);
} if (rf & 2) {
    const topic_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("topic", topic_r27.key)("level", topic_r27.value);
} }
function DiagnoseComponent_div_23_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DiagnoseComponent_div_23_div_11_app_topic_1_Template, 1, 2, "app-topic", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mistake_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 2, mistake_r25.failTopic));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](mistake_r25.text);
} }
function DiagnoseComponent_div_23_app_topic_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-topic", 46);
} if (rf & 2) {
    const topic_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("topic", topic_r28.key)("level", topic_r28.value);
} }
function DiagnoseComponent_div_23_app_policy_guide_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-policy-guide", 47);
} if (rf & 2) {
    const policy_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("policy", policy_r29);
} }
function DiagnoseComponent_div_23_app_progress_bar_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-progress-bar", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "rightUnderscore");
} if (rf & 2) {
    const predic_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 2, predic_r30.key))("value", predic_r30.value);
} }
const _c0 = function (a0) { return { show: a0 }; };
function DiagnoseComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-diagnose-text", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Spelling Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, DiagnoseComponent_div_23_p_7_Template, 2, 1, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "What caused which tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DiagnoseComponent_div_23_div_11_Template, 5, 4, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Topics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, DiagnoseComponent_div_23_app_topic_19_Template, 1, 2, "app-topic", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Policy Guides");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DiagnoseComponent_div_23_app_policy_guide_24_Template, 1, 1, "app-policy-guide", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "h5", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "AI Prediction");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, DiagnoseComponent_div_23_app_progress_bar_28_Template, 2, 4, "app-progress-bar", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DiagnoseComponent_div_23_Template_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r31.onShowRegressionBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Escalate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Gerkin Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Create Rule");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "app-regression-test-box", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("_close", function DiagnoseComponent_div_23_Template_app_regression_test_box__close_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r33.onCloseRegressionBox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("extended", ctx_r18.extended);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, ctx_r18.isDeep));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.failingFragments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.failingFragments);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r18.keyWord);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 10, ctx_r18.topics));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r18.policies);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 12, ctx_r18.predictions));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("isShow", ctx_r18.isShowRegressionBox)("topics", ctx_r18.topics);
} }
class DiagnoseComponent {
    constructor(userService, policyService, diagnoseService, route) {
        this.userService = userService;
        this.policyService = policyService;
        this.diagnoseService = diagnoseService;
        this.route = route;
        this.isDeep = false;
        this.isLoading = true;
        this.isShowRegressionBox = false;
        this.isError = false;
        this.keyWord = '';
        this.predictions = {};
        this.topics = {};
        this.policyGuides = [];
        this.policies = [];
        this.failingFragments = [];
        this.extended = [];
        // Content type variables
        this.selectedContentType = src_constants__WEBPACK_IMPORTED_MODULE_2__["DefaultContentType"];
        this.contentTypeList = src_constants__WEBPACK_IMPORTED_MODULE_2__["ContentType"];
        this.isDefaultActiveDeeperAnalysis = false;
        this.searchSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.searchInput = {
            text: '',
            clientId: src_constants__WEBPACK_IMPORTED_MODULE_2__["DefaultClient"],
            language: src_constants__WEBPACK_IMPORTED_MODULE_2__["DefaultLanguage"],
            contentType: src_constants__WEBPACK_IMPORTED_MODULE_2__["DefaultContentType"],
        };
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // get user data
            this.user = yield this.userService.me();
            // get policy data
            this.policyGuides = this.policyService.getPolicyGuides();
            // get keyWord from url & call search
            this.searchSubscription.add(this.route.queryParams.subscribe(params => {
                if (params.hasOwnProperty(src_constants__WEBPACK_IMPORTED_MODULE_2__["DiagnoseSearchParams"])) {
                    // update search input to memo
                    const { lastClientId, lastContentType, language } = this.userService.preferences;
                    this.searchInput = {
                        text: params[src_constants__WEBPACK_IMPORTED_MODULE_2__["DiagnoseSearchParams"]],
                        clientId: lastClientId,
                        contentType: lastContentType,
                        language,
                    };
                    this.onSearch();
                }
                else {
                    this.isLoading = false;
                    this.isError = true;
                }
            }));
        });
    }
    ngOnDestroy() {
        this.searchSubscription.unsubscribe();
    }
    onSearch() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                // handle loading-indicator
                this.isError = false;
                this.isLoading = true;
                // get data from Backend API
                const searchResult = yield this.diagnoseService.search(this.searchInput);
                // Show original text on the sidebar
                this.keyWord = searchResult.text;
                // Prediction data for AI prediction component
                this.predictions = searchResult.predictions;
                // Extended data for diagnose-text component
                this.extended = searchResult.extended;
                // set topic data for topic component
                const topics = searchResult.topics;
                this.topics = this.handleTopics(topics, this.policyGuides);
                // set policies data for policy component
                const { policyModels } = this.handlePolicies(topics, this.policyGuides);
                this.policies = policyModels;
                this.hideLoading();
                // FailingFragments data for the spelling mistakes component
                const failingFragments = searchResult.failingFragments;
                this.failingFragments = this.handleFailingFragments(failingFragments, this.policyGuides, this.keyWord);
            }
            catch (e) {
                console.error('[Diagnose Component] onSearch get error: ', e);
                this.isLoading = false;
                this.isError = true;
            }
        });
    }
    /*
     * get all topic relative with policy guide
     */
    handleTopics(topics, policyGuides) {
        // combine all rules of policies to an array
        const combineRule = policyGuides.map(policyGuide => policyGuide.rules).flat();
        const ruleTopics = combineRule.map(rule => rule.topic);
        for (const topic in topics) {
            if (!ruleTopics.includes(topic)) {
                delete topics[topic];
            }
        }
        return topics;
    }
    /*
     * Note: This function have 2 usecases for now:
     *  + handle & add isSafe property for policy
     *  + get all fail topic
     */
    handlePolicies(topics, policyGuides) {
        const failTopic = {};
        // get array policies
        const policyModels = policyGuides.map(policyGuide => {
            let isSafe = true;
            // check a policy is safe
            for (const rule of policyGuide.rules) {
                const { topic } = rule;
                if (topics.hasOwnProperty(topic)) {
                    const riskLevel = topics[topic];
                    const riskThreshold = rule.riskThreshold;
                    if (riskLevel >= riskThreshold) {
                        failTopic[topic] = riskLevel;
                        isSafe = false;
                        // Don't break here, we still need to get all fail topics
                    }
                }
            }
            return ({ isSafe, policyGuide });
        });
        return { policyModels, failTopic };
    }
    handleFailingFragments(failingFragments, policyGuides, searchText) {
        return failingFragments.map(fragment => {
            const { topics, startPos, endPos } = fragment;
            const { failTopic } = this.handlePolicies(topics, policyGuides);
            const original = searchText.slice(startPos, endPos);
            return Object.assign(Object.assign({}, fragment), { failTopic, original });
        });
    }
    hideLoading() {
        setTimeout(() => { this.isLoading = false; }, 300);
    }
    onRefresh() {
        this.onSearch();
    }
    onLanguageChanged(language) {
        this.searchInput.language = language;
        this.userService.updatePreferences({ language });
    }
    onContentTypeChanged(contentType) {
        this.searchInput.contentType = contentType;
        this.userService.updatePreferences({ lastContentType: contentType });
    }
    onUserChangedClient(newClient) {
        this.searchInput.clientId = newClient;
        this.userService.updatePreferences({ lastClientId: newClient });
    }
    onDeeperAnalysisChanged(value) {
        this.isDeep = value;
    }
    onShowRegressionBox() {
        this.isShowRegressionBox = true;
    }
    onCloseRegressionBox() {
        this.isShowRegressionBox = false;
    }
    onCopy() {
        const currentUrl = window.location.href;
        const el = document.createElement('textarea');
        el.value = currentUrl;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
}
DiagnoseComponent.ɵfac = function DiagnoseComponent_Factory(t) { return new (t || DiagnoseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_components_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_policy_policy_service__WEBPACK_IMPORTED_MODULE_5__["PolicyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_diagnose_diagnose_service__WEBPACK_IMPORTED_MODULE_6__["DiagnoseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
DiagnoseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DiagnoseComponent, selectors: [["app-diagnose"]], decls: 24, vars: 8, consts: [["id", "diagnose"], [1, "header"], [1, "left-content"], [1, "title"], [1, "header-breadcrumb"], [1, "copy-button", 3, "click"], ["text", "Copy URL to Clipboard"], ["src", "/contest.io/assets/icons/copy.svg", "alt", "copy"], [1, "right-content"], [1, "refresh-button", 3, "click"], ["text", "Refresh"], [1, "material-icons"], ["type", "code", 1, "language--code", 3, "selectedLanguage", "languageChanged"], [3, "listData", "selectedValue", "selectChanged"], [3, "selectedClient", "clientChanged"], [1, "deeper-analysis-box"], [3, "defaultActive", "_onChanged"], [3, "loading", "error"], ["class", "diagnose-main-content", 4, "ngIf"], [1, "diagnose-main-content"], [1, "diagnose-text"], [3, "extended"], [1, "deeper-box", 3, "ngClass"], [1, "deeper__title"], [1, "spelling-mistake"], ["class", "spelling-mistake__text", 4, "ngFor", "ngForOf"], [1, "fail-topic"], ["class", "fail-topic__item", 4, "ngFor", "ngForOf"], [1, "diagnose-side"], [1, "side-item", "keyword"], [1, "side-item", "topic-policy"], [1, "topic-box"], [1, "side-item-title"], [3, "topic", "level", 4, "ngFor", "ngForOf"], [1, "policy-box"], [3, "policy", 4, "ngFor", "ngForOf"], [1, "side-item", "ai-prediction"], [3, "label", "value", 4, "ngFor", "ngForOf"], [1, "button-group"], [1, "item", "button--grey", 3, "click"], [1, "item", "button--fountain-blue"], [1, "item", "button--light-green"], [3, "isShow", "topics", "_close"], [1, "spelling-mistake__text"], [1, "fail-topic__item"], [1, "fail-topic__text"], [3, "topic", "level"], [3, "policy"], [3, "label", "value"]], template: function DiagnoseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Diagnose");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-breadcrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DiagnoseComponent_Template_div_click_7_listener() { return ctx.onCopy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-tooltip", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DiagnoseComponent_Template_div_click_11_listener() { return ctx.onRefresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "app-tooltip", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "autorenew");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "app-language-picker", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("languageChanged", function DiagnoseComponent_Template_app_language_picker_languageChanged_15_listener($event) { return ctx.onLanguageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "app-select-box", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectChanged", function DiagnoseComponent_Template_app_select_box_selectChanged_16_listener($event) { return ctx.onContentTypeChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "app-client-picker", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("clientChanged", function DiagnoseComponent_Template_app_client_picker_clientChanged_17_listener($event) { return ctx.onUserChangedClient($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "app-toogle-slider", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("_onChanged", function DiagnoseComponent_Template_app_toogle_slider__onChanged_19_listener($event) { return ctx.onDeeperAnalysisChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Deeper Analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "app-loading-indicator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, DiagnoseComponent_div_23_Template, 38, 16, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedLanguage", ctx.userService.preferences.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("listData", ctx.contentTypeList)("selectedValue", ctx.userService.preferences.lastContentType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("selectedClient", ctx.userService.preferences.lastClientId);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("defaultActive", ctx.isDefaultActiveDeeperAnalysis);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("loading", ctx.isLoading)("error", ctx.isError);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading && !ctx.isError);
    } }, directives: [_shared_components_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__["BreadcrumbsComponent"], _shared_components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_9__["TooltipComponent"], _main_language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_10__["LanguagePickerComponent"], _shared_components_select_box_select_box_component__WEBPACK_IMPORTED_MODULE_11__["SelectBoxComponent"], _main_client_picker_client_picker_component__WEBPACK_IMPORTED_MODULE_12__["ClientPickerComponent"], _shared_components_toogle_slider_toogle_slider_component__WEBPACK_IMPORTED_MODULE_13__["ToogleSliderComponent"], _shared_components_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_14__["LoadingIndicatorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], _diagnose_text_diagnose_text_component__WEBPACK_IMPORTED_MODULE_16__["DiagnoseTextComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], _regression_test_box_regression_test_box_component__WEBPACK_IMPORTED_MODULE_17__["RegressionTestBoxComponent"], _topic_topic_component__WEBPACK_IMPORTED_MODULE_18__["TopicComponent"], _policy_guide_policy_guide_component__WEBPACK_IMPORTED_MODULE_19__["PolicyGuideComponent"], _shared_components_progress_bar_progress_bar_component__WEBPACK_IMPORTED_MODULE_20__["ProgressBarComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["KeyValuePipe"], src_app_pipes__WEBPACK_IMPORTED_MODULE_21__["RightUnderscorePipe"]], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 18px;\n  position: relative;\n  z-index: 100;\n}\n.diagnose-main-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: auto 398px;\n  grid-gap: 16px;\n}\n.diagnose-side[_ngcontent-%COMP%] {\n  padding: 30px 13px 29px;\n  background-color: var(--diagnose-side-bg);\n}\n.title[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0 0 12px 0;\n  font: Bold 20px/24px \"Montserrat\";\n  color: #F4F4F4;\n  text-transform: capitalize;\n}\n.right-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.right-content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 14px;\n}\n.deeper-analysis-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.deeper-analysis-box[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--deeper-analysis-text-fg);\n  font-size: 12px;\n  margin-left: 10px;\n}\napp-toogle-slider[_ngcontent-%COMP%] {\n  line-height: 0;\n}\n.refresh-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  line-height: 0;\n  transition: all 3s var(--transition-timing);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.refresh-button[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n  transform: rotateZ(45deg);\n  color: var(--refresh-button-fg);\n}\n.refresh-button.refreshing[_ngcontent-%COMP%] {\n  transform: rotateZ(360deg);\n}\n.header-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.copy-button[_ngcontent-%COMP%] {\n  margin-left: 12px;\n  font-size: 0;\n  cursor: pointer;\n}\n.copy-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  fill: red;\n  width: 14px;\n}\napp-loading-indicator[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.diagnose-side[_ngcontent-%COMP%]   .side-item[_ngcontent-%COMP%] {\n  padding-bottom: 21px;\n  border-bottom: 1px solid #414D55;\n  margin-bottom: 17px;\n}\n.side-item-title[_ngcontent-%COMP%] {\n  font: 600 12px/20px \"Open Sans\";\n  color: var(--topic-policy-title);\n  text-transform: capitalize;\n  margin-bottom: 12px;\n  margin-top: 0;\n}\n.keyword[_ngcontent-%COMP%] {\n  font: bold 20px/32px \"Montserrat\";\n  color: var(--diagnose-side-keyword-fg);\n}\n.topic-policy[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 21px;\n}\n.topic-policy[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n.topic-box[_ngcontent-%COMP%], .policy-box[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.topic-box[_ngcontent-%COMP%]:not(:last-child), .policy-box[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 20px;\n}\napp-topic[_ngcontent-%COMP%]:not(:last-child)  .topic, app-policy-guide[_ngcontent-%COMP%]:not(:last-child)  .policy {\n  margin-bottom: 12px;\n}\napp-progress-bar[_ngcontent-%COMP%]:not(:last-child)  .progress-bar {\n  margin-bottom: 20px;\n}\n.button-group[_ngcontent-%COMP%] {\n  margin-top: 26px;\n  font-size: 0;\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n}\n.button-group[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: inline-block;\n}\napp-diagnose-text[_ngcontent-%COMP%]  .diagnose-text {\n  margin-bottom: 25px;\n}\n.deeper-box[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  transition: all var(--transition-speed) var(--transition-timing);\n}\n.deeper-box.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.deeper__title[_ngcontent-%COMP%] {\n  color: var(--diagnose-deeper-title-fg);\n  margin: 0 0 16px 0;\n  font-weight: normal;\n}\n.spelling-mistake[_ngcontent-%COMP%] {\n  padding: 13px 20px;\n  background-color: var(--diagnose-deeper-item-bg);\n  margin-bottom: 30px;\n}\n.spelling-mistake__text[_ngcontent-%COMP%] {\n  font: bold 20px/24px \"Montserrat\";\n  margin: 0;\n}\n.fail-topic__item[_ngcontent-%COMP%] {\n  padding: 6px 20px;\n  display: flex;\n  align-items: center;\n  background-color: var(--diagnose-deeper-item-bg);\n}\n.fail-topic__item[_ngcontent-%COMP%]   app-topic[_ngcontent-%COMP%] {\n  min-width: 171px;\n}\n.fail-topic__item[_ngcontent-%COMP%]   app-topic[_ngcontent-%COMP%]  .topic {\n  margin-bottom: 0;\n}\n.fail-topic__text[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  font: bold 20px/24px \"Montserrat\";\n}\napp-regression-test-box[_ngcontent-%COMP%]  .regression-wrapper {\n  position: fixed;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 9999;\n  width: 600px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbW9kdWxlcy9kaWFnbm9zZS9kaWFnbm9zZS5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9kaWFnbm9zZS9kaWFnbm9zZS5jb21wb25lbnQubGVzcyIsIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9fdXRpbHMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNJLE9BQUE7QUNISjtBRE1BO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0pKO0FET0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtBQ0xKO0FEUUE7RUFDSSx1QkFBQTtFQUNBLHlDQUFBO0FDTko7QURVQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0FDUko7QURXQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ1RKO0FET0E7RUFLUSxpQkFBQTtBQ1RSO0FEYUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNYSjtBRFNBO0VBSVEscUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNWUjtBRGNBO0VBQ0ksY0FBQTtBQ1pKO0FEZUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNiSjtBRFNBO0VBTVEsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUNaUjtBRGVJO0VBQ0ksMEJBQUE7QUNiUjtBRGlCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2ZKO0FEa0JBO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ2hCSjtBRGFBO0VBTVEsU0FBQTtFQUNBLFdBQUE7QUNoQlI7QURvQkE7RUFDSSxTQUFBO0FDbEJKO0FEc0JBO0VBQ0ksb0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FDcEJKO0FEdUJBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDckJKO0FEd0JBO0VBQ0ksaUNBQUE7RUFDQSxzQ0FBQTtBQ3RCSjtBRHlCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ3ZCSjtBRHlCSTtFQUNJLGtCQUFBO0FDdkJSO0FEMkJBOztFQUVJLFVBQUE7QUN6Qko7QUQwQkk7O0VBQ0ksa0JBQUE7QUN2QlI7QUQyQkE7O0VBRUksbUJBQUE7QUN6Qko7QUQ0QkE7RUFDSSxtQkFBQTtBQzFCSjtBRDZCQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7QUMzQko7QURzQkE7RUFRUSxxQkFBQTtBQzNCUjtBRGdDQTtFQUNJLG1CQUFBO0FDOUJKO0FEa0NBO0VFaEtJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGdFQUFBO0FEaUlKO0FEZ0NJO0VFN0pBLFVBQUE7RUFDQSxtQkFBQTtBRGdJSjtBRGlDQTtFQUNJLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQy9CSjtBRGtDQTtFQUNJLGtCQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtBQ2hDSjtBRGtDSTtFQUNJLGlDQUFBO0VBQ0EsU0FBQTtBQ2hDUjtBRHFDSTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7QUNuQ1I7QUQrQkk7RUFPUSxnQkFBQTtBQ25DWjtBRG9DWTtFQUNJLGdCQUFBO0FDbENoQjtBRHVDSTtFQUNJLGlCQUFBO0VBQ0EsaUNBQUE7QUNyQ1I7QUQwQ0E7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUN4Q0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RpYWdub3NlL2RpYWdub3NlLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL191dGlscy5sZXNzXCI7XG5cbkBzaWRlLXdpZHRoLXBjOiAzOThweDtcblxuOmhvc3Qge1xuICAgIGZsZXg6IDE7XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTAwO1xufVxuXG4uZGlhZ25vc2UtbWFpbi1jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAzOThweDtcbiAgICBncmlkLWdhcDogMTZweDtcbn1cblxuLmRpYWdub3NlLXNpZGUge1xuICAgIHBhZGRpbmc6IDMwcHggMTNweCAyOXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpYWdub3NlLXNpZGUtYmcpO1xufVxuXG4vLyBIZWFkZXIgU3R5bGVcbi50aXRsZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDAgMCAxMnB4IDA7XG4gICAgZm9udDogQm9sZCAyMHB4LzI0cHggXCJNb250c2VycmF0XCI7XG4gICAgY29sb3I6ICNGNEY0RjQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5yaWdodC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTRweDtcbiAgICB9XG59XG5cbi5kZWVwZXItYW5hbHlzaXMtYm94IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kZWVwZXItYW5hbHlzaXMtdGV4dC1mZyk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxufVxuXG5hcHAtdG9vZ2xlLXNsaWRlciB7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbi5yZWZyZXNoLWJ1dHRvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAzcyB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooNDVkZWcpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcmVmcmVzaC1idXR0b24tZmcpO1xuICAgIH1cblxuICAgICYucmVmcmVzaGluZyB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigzNjBkZWcpO1xuICAgIH1cbn1cblxuLmhlYWRlci1icmVhZGNydW1iIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb3B5LWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIGltZyB7XG4gICAgICAgIGZpbGw6IHJlZDtcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgfVxufVxuXG5hcHAtbG9hZGluZy1pbmRpY2F0b3Ige1xuICAgIG1hcmdpbjogMDtcbn1cblxuLy8gU2lkZSBCb3ggU3R5bGVcbi5kaWFnbm9zZS1zaWRlIC5zaWRlLWl0ZW0ge1xuICAgIHBhZGRpbmctYm90dG9tOiAyMXB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDE0RDU1O1xuICAgIG1hcmdpbi1ib3R0b206IDE3cHg7XG59XG5cbi5zaWRlLWl0ZW0tdGl0bGUge1xuICAgIGZvbnQ6IDYwMCAxMnB4LzIwcHggXCJPcGVuIFNhbnNcIjtcbiAgICBjb2xvcjogdmFyKC0tdG9waWMtcG9saWN5LXRpdGxlKTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5rZXl3b3JkIHtcbiAgICBmb250OiBib2xkIDIwcHgvMzJweCBcIk1vbnRzZXJyYXRcIjtcbiAgICBjb2xvcjogdmFyKC0tZGlhZ25vc2Utc2lkZS1rZXl3b3JkLWZnKTtcbn1cblxuLnRvcGljLXBvbGljeSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMXB4O1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG59XG5cbi50b3BpYy1ib3gsXG4ucG9saWN5LWJveCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxufVxuXG5hcHAtdG9waWM6bm90KDpsYXN0LWNoaWxkKTo6bmctZGVlcCAudG9waWMsXG5hcHAtcG9saWN5LWd1aWRlOm5vdCg6bGFzdC1jaGlsZCk6Om5nLWRlZXAgLnBvbGljeSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuYXBwLXByb2dyZXNzLWJhcjpub3QoOmxhc3QtY2hpbGQpOjpuZy1kZWVwIC5wcm9ncmVzcy1iYXIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5idXR0b24tZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IDI2cHg7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXg6IDE7XG5cbiAgICAuaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG59XG5cbi8vIE1haW4tY29udGVudFxuYXBwLWRpYWdub3NlLXRleHQ6Om5nLWRlZXAgLmRpYWdub3NlLXRleHQge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi8vIERlZXBlci1ib3hcbi5kZWVwZXItYm94IHtcbiAgICAuaGlkZGVuLWVmZmVjdCgpO1xuXG4gICAgJi5zaG93IHtcbiAgICAgICAgLnNob3ctZWZmZWN0KCk7XG4gICAgfVxufVxuXG4uZGVlcGVyX190aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWRpYWdub3NlLWRlZXBlci10aXRsZS1mZyk7XG4gICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5zcGVsbGluZy1taXN0YWtlIHtcbiAgICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlhZ25vc2UtZGVlcGVyLWl0ZW0tYmcpO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgXG4gICAgJl9fdGV4dCB7XG4gICAgICAgIGZvbnQ6IGJvbGQgMjBweC8yNHB4IFwiTW9udHNlcnJhdFwiO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufVxuXG4uZmFpbC10b3BpYyB7XG4gICAgJl9faXRlbSB7XG4gICAgICAgIHBhZGRpbmc6IDZweCAyMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWFnbm9zZS1kZWVwZXItaXRlbS1iZyk7XG5cbiAgICAgICAgYXBwLXRvcGljIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTcxcHg7XG4gICAgICAgICAgICAmOjpuZy1kZWVwIC50b3BpYyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX3RleHQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgZm9udDogYm9sZCAyMHB4LzI0cHggXCJNb250c2VycmF0XCI7XG4gICAgfVxufVxuXG4vLyBzaWRlIHBvcHVwIHJlZ3Jlc3Npb24tdGVzdC1ib3hcbmFwcC1yZWdyZXNzaW9uLXRlc3QtYm94OjpuZy1kZWVwIC5yZWdyZXNzaW9uLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgd2lkdGg6IDYwMHB4O1xufSIsIjpob3N0IHtcbiAgZmxleDogMTtcbn1cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwO1xufVxuLmRpYWdub3NlLW1haW4tY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMzk4cHg7XG4gIGdyaWQtZ2FwOiAxNnB4O1xufVxuLmRpYWdub3NlLXNpZGUge1xuICBwYWRkaW5nOiAzMHB4IDEzcHggMjlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlhZ25vc2Utc2lkZS1iZyk7XG59XG4udGl0bGUge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCAxMnB4IDA7XG4gIGZvbnQ6IEJvbGQgMjBweC8yNHB4IFwiTW9udHNlcnJhdFwiO1xuICBjb2xvcjogI0Y0RjRGNDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ucmlnaHQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmlnaHQtY29udGVudCA+ICo6bm90KDpmaXJzdC1jaGlsZCkge1xuICBtYXJnaW4tbGVmdDogMTRweDtcbn1cbi5kZWVwZXItYW5hbHlzaXMtYm94IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kZWVwZXItYW5hbHlzaXMtYm94IHNwYW4ge1xuICBjb2xvcjogdmFyKC0tZGVlcGVyLWFuYWx5c2lzLXRleHQtZmcpO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuYXBwLXRvb2dsZS1zbGlkZXIge1xuICBsaW5lLWhlaWdodDogMDtcbn1cbi5yZWZyZXNoLWJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAzcyB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuLnJlZnJlc2gtYnV0dG9uIC5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDQ1ZGVnKTtcbiAgY29sb3I6IHZhcigtLXJlZnJlc2gtYnV0dG9uLWZnKTtcbn1cbi5yZWZyZXNoLWJ1dHRvbi5yZWZyZXNoaW5nIHtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDM2MGRlZyk7XG59XG4uaGVhZGVyLWJyZWFkY3J1bWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvcHktYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gIGZvbnQtc2l6ZTogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNvcHktYnV0dG9uIGltZyB7XG4gIGZpbGw6IHJlZDtcbiAgd2lkdGg6IDE0cHg7XG59XG5hcHAtbG9hZGluZy1pbmRpY2F0b3Ige1xuICBtYXJnaW46IDA7XG59XG4uZGlhZ25vc2Utc2lkZSAuc2lkZS1pdGVtIHtcbiAgcGFkZGluZy1ib3R0b206IDIxcHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDE0RDU1O1xuICBtYXJnaW4tYm90dG9tOiAxN3B4O1xufVxuLnNpZGUtaXRlbS10aXRsZSB7XG4gIGZvbnQ6IDYwMCAxMnB4LzIwcHggXCJPcGVuIFNhbnNcIjtcbiAgY29sb3I6IHZhcigtLXRvcGljLXBvbGljeS10aXRsZSk7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAwO1xufVxuLmtleXdvcmQge1xuICBmb250OiBib2xkIDIwcHgvMzJweCBcIk1vbnRzZXJyYXRcIjtcbiAgY29sb3I6IHZhcigtLWRpYWdub3NlLXNpZGUta2V5d29yZC1mZyk7XG59XG4udG9waWMtcG9saWN5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWJvdHRvbTogMjFweDtcbn1cbi50b3BpYy1wb2xpY3k6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4udG9waWMtYm94LFxuLnBvbGljeS1ib3gge1xuICB3aWR0aDogNTAlO1xufVxuLnRvcGljLWJveDpub3QoOmxhc3QtY2hpbGQpLFxuLnBvbGljeS1ib3g6bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbmFwcC10b3BpYzpub3QoOmxhc3QtY2hpbGQpOjpuZy1kZWVwIC50b3BpYyxcbmFwcC1wb2xpY3ktZ3VpZGU6bm90KDpsYXN0LWNoaWxkKTo6bmctZGVlcCAucG9saWN5IHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbmFwcC1wcm9ncmVzcy1iYXI6bm90KDpsYXN0LWNoaWxkKTo6bmctZGVlcCAucHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5idXR0b24tZ3JvdXAge1xuICBtYXJnaW4tdG9wOiAyNnB4O1xuICBmb250LXNpemU6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleDogMTtcbn1cbi5idXR0b24tZ3JvdXAgLml0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5hcHAtZGlhZ25vc2UtdGV4dDo6bmctZGVlcCAuZGlhZ25vc2UtdGV4dCB7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4uZGVlcGVyLWJveCB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbn1cbi5kZWVwZXItYm94LnNob3cge1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuLmRlZXBlcl9fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tZGlhZ25vc2UtZGVlcGVyLXRpdGxlLWZnKTtcbiAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnNwZWxsaW5nLW1pc3Rha2Uge1xuICBwYWRkaW5nOiAxM3B4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpYWdub3NlLWRlZXBlci1pdGVtLWJnKTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zcGVsbGluZy1taXN0YWtlX190ZXh0IHtcbiAgZm9udDogYm9sZCAyMHB4LzI0cHggXCJNb250c2VycmF0XCI7XG4gIG1hcmdpbjogMDtcbn1cbi5mYWlsLXRvcGljX19pdGVtIHtcbiAgcGFkZGluZzogNnB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpYWdub3NlLWRlZXBlci1pdGVtLWJnKTtcbn1cbi5mYWlsLXRvcGljX19pdGVtIGFwcC10b3BpYyB7XG4gIG1pbi13aWR0aDogMTcxcHg7XG59XG4uZmFpbC10b3BpY19faXRlbSBhcHAtdG9waWM6Om5nLWRlZXAgLnRvcGljIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbi5mYWlsLXRvcGljX190ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIGZvbnQ6IGJvbGQgMjBweC8yNHB4IFwiTW9udHNlcnJhdFwiO1xufVxuYXBwLXJlZ3Jlc3Npb24tdGVzdC1ib3g6Om5nLWRlZXAgLnJlZ3Jlc3Npb24td3JhcHBlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiA5OTk5O1xuICB3aWR0aDogNjAwcHg7XG59XG4iLCIuaGlkZGVuLWVmZmVjdCAoKSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbn1cblxuLnNob3ctZWZmZWN0ICgpIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8vIHNjcm9sbCBiYXJcbi5zY3JvbGwtYmFyLTAxICgpIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTRENTU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM0MTRENTU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFmMjA7XG4gICAgfVxufVxuXG4uc2Nyb2xsLWJhci0wMiAoKSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0RDU1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgLy8gd2lkdGg6IDEycHg7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjNDE0RDU1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjY3MTViO1xuICAgIH1cbn1cblxuLy8gY3JlYXRlIG1hdGVyaWFsIEljb24gYXMgcHNldWRvIGVsZW1lbnRcbi5tYXRlcmlhbEljb25Gcm9tKEBjb250ZW50LCBAdHlwZTogYWZ0ZXIpIHtcbiAgICAmOkB7dHlwZX0ge1xuICAgICAgICBjb250ZW50OiBAY29udGVudDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XG4gICAgfVxufVxuXG4vLyB0ZXh0IG9uZWxpbmUgb3ZlcmZsb3dcbi50ZXh0LW92ZXJmbG93KCkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DiagnoseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-diagnose',
                templateUrl: './diagnose.component.html',
                styleUrls: ['./diagnose.component.less']
            }]
    }], function () { return [{ type: src_app_shared_components_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: src_app_services_policy_policy_service__WEBPACK_IMPORTED_MODULE_5__["PolicyService"] }, { type: src_app_services_diagnose_diagnose_service__WEBPACK_IMPORTED_MODULE_6__["DiagnoseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/diagnose/diagnose.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/diagnose/diagnose.module.ts ***!
  \*****************************************************/
/*! exports provided: DiagnoseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnoseModule", function() { return DiagnoseModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xng-breadcrumb */ "./node_modules/xng-breadcrumb/__ivy_ngcc__/fesm2015/xng-breadcrumb.js");
/* harmony import */ var _diagnose_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./diagnose.component */ "./src/app/modules/diagnose/diagnose.component.ts");
/* harmony import */ var _diagnose_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./diagnose-routing.module */ "./src/app/modules/diagnose/diagnose-routing.module.ts");
/* harmony import */ var src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared-components/shared-components.module */ "./src/app/shared-components/shared-components.module.ts");
/* harmony import */ var src_app_main_main_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _topic_topic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topic/topic.component */ "./src/app/modules/diagnose/topic/topic.component.ts");
/* harmony import */ var _policy_guide_policy_guide_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./policy-guide/policy-guide.component */ "./src/app/modules/diagnose/policy-guide/policy-guide.component.ts");
/* harmony import */ var src_app_pipes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pipes */ "./src/app/pipes/index.ts");
/* harmony import */ var _diagnose_text_diagnose_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./diagnose-text/diagnose-text.component */ "./src/app/modules/diagnose/diagnose-text/diagnose-text.component.ts");
/* harmony import */ var _regression_test_box_regression_test_box_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./regression-test-box/regression-test-box.component */ "./src/app/modules/diagnose/regression-test-box/regression-test-box.component.ts");













class DiagnoseModule {
}
DiagnoseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DiagnoseModule });
DiagnoseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DiagnoseModule_Factory(t) { return new (t || DiagnoseModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"],
            _diagnose_routing_module__WEBPACK_IMPORTED_MODULE_4__["DiagnoseRoutingModule"],
            src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
            src_app_main_main_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DiagnoseModule, { declarations: [_diagnose_component__WEBPACK_IMPORTED_MODULE_3__["DiagnoseComponent"],
        _topic_topic_component__WEBPACK_IMPORTED_MODULE_7__["TopicComponent"],
        _policy_guide_policy_guide_component__WEBPACK_IMPORTED_MODULE_8__["PolicyGuideComponent"],
        src_app_pipes__WEBPACK_IMPORTED_MODULE_9__["RightUnderscorePipe"],
        src_app_pipes__WEBPACK_IMPORTED_MODULE_9__["RiskLevelToColorPipe"],
        _diagnose_text_diagnose_text_component__WEBPACK_IMPORTED_MODULE_10__["DiagnoseTextComponent"],
        _regression_test_box_regression_test_box_component__WEBPACK_IMPORTED_MODULE_11__["RegressionTestBoxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"],
        _diagnose_routing_module__WEBPACK_IMPORTED_MODULE_4__["DiagnoseRoutingModule"],
        src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
        src_app_main_main_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiagnoseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _diagnose_component__WEBPACK_IMPORTED_MODULE_3__["DiagnoseComponent"],
                    _topic_topic_component__WEBPACK_IMPORTED_MODULE_7__["TopicComponent"],
                    _policy_guide_policy_guide_component__WEBPACK_IMPORTED_MODULE_8__["PolicyGuideComponent"],
                    src_app_pipes__WEBPACK_IMPORTED_MODULE_9__["RightUnderscorePipe"],
                    src_app_pipes__WEBPACK_IMPORTED_MODULE_9__["RiskLevelToColorPipe"],
                    _diagnose_text_diagnose_text_component__WEBPACK_IMPORTED_MODULE_10__["DiagnoseTextComponent"],
                    _regression_test_box_regression_test_box_component__WEBPACK_IMPORTED_MODULE_11__["RegressionTestBoxComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    xng_breadcrumb__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"],
                    _diagnose_routing_module__WEBPACK_IMPORTED_MODULE_4__["DiagnoseRoutingModule"],
                    src_app_shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_5__["SharedComponentsModule"],
                    src_app_main_main_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/diagnose/policy-guide/policy-guide.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/diagnose/policy-guide/policy-guide.component.ts ***!
  \*************************************************************************/
/*! exports provided: PolicyGuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyGuideComponent", function() { return PolicyGuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const SAFE_POLICY = {
    icon: 'fas fa-thumbs-up',
    color: '#7ED321',
};
const UN_SAFE_POLICY = {
    icon: 'fas fa-thumbs-down',
    color: '#ED0423',
};
class PolicyGuideComponent {
    constructor() {
    }
    ngOnInit() {
        const { isSafe, policyGuide } = this.policy;
        const { icon, color } = isSafe ? SAFE_POLICY : UN_SAFE_POLICY;
        this.icon = icon;
        this.color = color;
        this.name = policyGuide.name;
    }
}
PolicyGuideComponent.ɵfac = function PolicyGuideComponent_Factory(t) { return new (t || PolicyGuideComponent)(); };
PolicyGuideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PolicyGuideComponent, selectors: [["app-policy-guide"]], inputs: { policy: "policy" }, decls: 4, vars: 6, consts: [[1, "policy"], [1, "policy__icon", "fas"], [1, "policy__name", 3, "title"]], template: function PolicyGuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
    } }, styles: [".policy[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 4px 4.5px 4px 9px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 4px;\n  overflow: hidden;\n  background-color: var(--policy-comp-bg);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  min-height: 38px;\n}\n.policy[_ngcontent-%COMP%]::before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 3px;\n  background-color: var(--color);\n}\n.policy__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--policy-comp-icon-fg);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 0.5s var(--transition-timing);\n}\n.policy__name[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 0 10px;\n  color: var(--policy-comp-fg);\n  font: 400 14px/20px \"Open Sans\";\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbW9kdWxlcy9kaWFnbm9zZS9wb2xpY3ktZ3VpZGUvcG9saWN5LWd1aWRlLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9tb2R1bGVzL2RpYWdub3NlL3BvbGljeS1ndWlkZS9wb2xpY3ktZ3VpZGUuY29tcG9uZW50Lmxlc3MiLCIvaG9tZS9iZWUvQmVlL3NvdGF0ZWsvbW9kdG9vbHMtYXBwLW9sZC9zcmMvX3V0aWxzLmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0FDREo7QURHSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7QUNEUjtBRElJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSw2Q0FBQTtBQ0ZSO0FES0k7RUFDSSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFRXVDSixnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUR6Q0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2RpYWdub3NlL3BvbGljeS1ndWlkZS9wb2xpY3ktZ3VpZGUuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vX3V0aWxzLmxlc3NcIjtcblxuLnBvbGljeSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDRweCA0LjVweCA0cHggOXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcG9saWN5LWNvbXAtYmcpO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIG1pbi1oZWlnaHQ6IDM4cHg7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcbiAgICB9XG4gICAgXG4gICAgJl9faWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXBvbGljeS1jb21wLWljb24tZmcpO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xuICAgIH1cblxuICAgICZfX25hbWUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wb2xpY3ktY29tcC1mZyk7XG4gICAgICAgIGZvbnQ6IDQwMCAxNHB4LzIwcHggXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgLnRleHQtb3ZlcmZsb3coKTtcbiAgICB9XG59XG4iLCIucG9saWN5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiA0cHggNC41cHggNHB4IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBvbGljeS1jb21wLWJnKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG1pbi1oZWlnaHQ6IDM4cHg7XG59XG4ucG9saWN5OjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yKTtcbn1cbi5wb2xpY3lfX2ljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1wb2xpY3ktY29tcC1pY29uLWZnKTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbn1cbi5wb2xpY3lfX25hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1wb2xpY3ktY29tcC1mZyk7XG4gIGZvbnQ6IDQwMCAxNHB4LzIwcHggXCJPcGVuIFNhbnNcIjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4iLCIuaGlkZGVuLWVmZmVjdCAoKSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbn1cblxuLnNob3ctZWZmZWN0ICgpIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi8vIHNjcm9sbCBiYXJcbi5zY3JvbGwtYmFyLTAxICgpIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTRENTU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM0MTRENTU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjFmMjA7XG4gICAgfVxufVxuXG4uc2Nyb2xsLWJhci0wMiAoKSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0RDU1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgLy8gd2lkdGg6IDEycHg7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjNDE0RDU1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjY3MTViO1xuICAgIH1cbn1cblxuLy8gY3JlYXRlIG1hdGVyaWFsIEljb24gYXMgcHNldWRvIGVsZW1lbnRcbi5tYXRlcmlhbEljb25Gcm9tKEBjb250ZW50LCBAdHlwZTogYWZ0ZXIpIHtcbiAgICAmOkB7dHlwZX0ge1xuICAgICAgICBjb250ZW50OiBAY29udGVudDtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgICAgICB3b3JkLXdyYXA6IG5vcm1hbDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XG4gICAgfVxufVxuXG4vLyB0ZXh0IG9uZWxpbmUgb3ZlcmZsb3dcbi50ZXh0LW92ZXJmbG93KCkge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolicyGuideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-policy-guide',
                templateUrl: './policy-guide.component.html',
                styleUrls: ['./policy-guide.component.less']
            }]
    }], function () { return []; }, { policy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/diagnose/regression-test-box/regression-test-box.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/diagnose/regression-test-box/regression-test-box.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RegressionTestBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegressionTestBoxComponent", function() { return RegressionTestBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _main_topic_picker_topic_picker_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../main/topic-picker/topic-picker.component */ "./src/app/main/topic-picker/topic-picker.component.ts");
/* harmony import */ var _main_language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../main/language-picker/language-picker.component */ "./src/app/main/language-picker/language-picker.component.ts");
/* harmony import */ var _shared_components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared-components/tooltip/tooltip.component */ "./src/app/shared-components/tooltip/tooltip.component.ts");







const _c0 = function (a0) { return { "active": a0 }; };
function RegressionTestBoxComponent_div_9_app_tooltip_5_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-tooltip", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegressionTestBoxComponent_div_9_app_tooltip_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const level_r52 = ctx.$implicit; const topic_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r53.onChangeLevel(topic_r50, level_r52.key); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r52 = ctx.$implicit;
    const topic_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", level_r52.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--background-color", level_r52.value.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, level_r52.key == topic_r50.level));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-label", level_r52.value.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", level_r52.key, " ");
} }
function RegressionTestBoxComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegressionTestBoxComponent_div_9_app_tooltip_5_Template, 3, 8, "app-tooltip", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "keyvalue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const topic_r50 = ctx.$implicit;
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](topic_r50.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", topic_r50.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](topic_r50.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx_r49.riskLevels));
} }
const _c1 = function (a0) { return { "show": a0 }; };
class RegressionTestBoxComponent {
    constructor() {
        this.defaultLanguage = src_constants__WEBPACK_IMPORTED_MODULE_1__["DefaultLanguage"];
        this.topicArray = [];
        this.riskLevels = src_constants__WEBPACK_IMPORTED_MODULE_1__["RiskLevels"];
        this.topics = {};
        this.isShow = false;
        this._close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        // Handle topicArray
        this.topicArray = Object.entries(this.topics).map(([topic, level]) => {
            const { name, faIcon: icon } = src_constants__WEBPACK_IMPORTED_MODULE_1__["Topics"][topic];
            const riskColor = src_constants__WEBPACK_IMPORTED_MODULE_1__["RiskLevels"][level].color;
            return { name, level, icon, riskColor };
        });
    }
    onClose() {
        console.log('[app-regression-test-box] onClose exec ...');
        this.isShow = false;
        this._close.emit(false);
    }
    // Todo: handle language change
    onLanguageChanged(language) {
        console.log('[app-regression-test-box] onLanguageChanged selected language: ', language);
    }
    // Todo: handle level change
    onChangeLevel(currentTopic, newLevel) {
        console.log('[app-regression-test-box] onChangeLevel get currentTopic: [%s], newLevel: [%s]', currentTopic, newLevel);
    }
    // Todo: handle selected topic change
    onTopicPickerChanged(topicSelected) {
        console.log('[app-regression-test-box] onTopicPickerChanged get topicSelected: ', topicSelected);
    }
}
RegressionTestBoxComponent.ɵfac = function RegressionTestBoxComponent_Factory(t) { return new (t || RegressionTestBoxComponent)(); };
RegressionTestBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegressionTestBoxComponent, selectors: [["app-regression-test-box"]], inputs: { topics: "topics", isShow: "isShow" }, outputs: { _close: "_close" }, decls: 32, vars: 6, consts: [[1, "regression-wrapper", 3, "ngClass"], [1, "overlay", 3, "click"], [1, "regression-box"], [1, "title"], [1, "label-box"], [1, "box-title"], [1, "topics"], ["class", "topic-item", 4, "ngFor", "ngForOf"], [1, "topic-box"], [3, "topicSelected", "onSelectChanged"], [1, "language-box"], [3, "selectedLanguage", "languageChanged"], [1, "comment"], ["name", "", "id", "", "rows", "4", "placeholder", "Type your Comment (Optional)"], [1, "button-group"], [1, "item", "button--light-green"], [1, "item", "button--black", 3, "click"], [1, "button-close", 3, "click"], [1, "material-icons"], [1, "topic-item"], [1, "topic__icon", "fas"], [1, "topic__name", 3, "title"], [1, "topic__level"], [3, "text", 4, "ngFor", "ngForOf"], [3, "text"], [1, "level", 3, "ngClass", "click"]], template: function RegressionTestBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegressionTestBoxComponent_Template_div_click_1_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add it to the regression tests");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "How should it be labelled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegressionTestBoxComponent_div_9_Template, 7, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add Topics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-topic-picker", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectChanged", function RegressionTestBoxComponent_Template_app_topic_picker_onSelectChanged_13_listener($event) { return ctx.onTopicPickerChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Wrong Language?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "app-language-picker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("languageChanged", function RegressionTestBoxComponent_Template_app_language_picker_languageChanged_17_listener($event) { return ctx.onLanguageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Leave a comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Apply");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegressionTestBoxComponent_Template_button_click_25_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegressionTestBoxComponent_Template_div_click_27_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.isShow));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topicArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("topicSelected", ctx.topics);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedLanguage", ctx.defaultLanguage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _main_topic_picker_topic_picker_component__WEBPACK_IMPORTED_MODULE_3__["TopicPickerComponent"], _main_language_picker_language_picker_component__WEBPACK_IMPORTED_MODULE_4__["LanguagePickerComponent"], _shared_components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_5__["TooltipComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]], styles: [".regression-wrapper[_ngcontent-%COMP%] {\n  opacity: 0;\n  visibility: hidden;\n  transition: all var(--transition-speed) var(--transition-timing);\n}\n.regression-wrapper.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.regression-box[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"title          title\" \"label-box      label-box\" \"topic-select   language-select\" \"comment        comment\" \"button-group   button-group\";\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: repeat(5, -webkit-min-content);\n  grid-template-rows: repeat(5, min-content);\n  background-color: var(--regression-test-bg);\n  height: 100%;\n  grid-gap: 1.78rem;\n  padding: 1.78rem;\n  position: relative;\n  z-index: 2;\n}\n.title[_ngcontent-%COMP%] {\n  grid-area: title;\n  font: 400 16px/20px \"Montserrat\";\n  color: var(--regression-test-title-fg);\n  padding-bottom: 1.78125em;\n  margin: 0;\n  border-bottom: 1px solid var(--regression-test-title-border-bg);\n}\n.box-title[_ngcontent-%COMP%] {\n  color: var(--regression-test-title-fg);\n  font: 400 12px/20px \"Open Sans\";\n  margin: 0 0 1.15em 0;\n}\n.label-box[_ngcontent-%COMP%] {\n  grid-area: label-box;\n  margin-bottom: 0.4em;\n}\n.topic-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 13px;\n  background-color: var(--regression-test-topic-bg);\n}\n.topic-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.15em;\n}\n.topic__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--regression-test-icon-fg);\n  margin-right: 12px;\n}\n.topic__name[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 100%;\n  color: var(--regression-test-name-fg);\n  font: 400 14px/20px \"Open Sans\";\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.topic__level[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.topic__level[_ngcontent-%COMP%]   app-tooltip[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 11px;\n}\n.topic__level[_ngcontent-%COMP%]   app-tooltip[_ngcontent-%COMP%]:first-child   .level[_ngcontent-%COMP%] {\n  border-radius: 4px 0px 0px 4px;\n}\n.topic__level[_ngcontent-%COMP%]   app-tooltip[_ngcontent-%COMP%]:last-child   .level[_ngcontent-%COMP%] {\n  border-radius: 0 4px 4px 0;\n}\n.topic__level[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%] {\n  position: relative;\n  width: 38px;\n  height: 38px;\n  text-align: center;\n  color: var(--regression-test-topic-fg);\n  background-color: var(--regression-test-topic-level-bg);\n  transition: all var(--transition-speed) var(--transition-timing);\n  font: bold 14px/38px \"Open Sans\";\n  cursor: pointer;\n}\n.topic__level[_ngcontent-%COMP%]   .level.active[_ngcontent-%COMP%], .topic__level[_ngcontent-%COMP%]   .level[_ngcontent-%COMP%]:hover {\n  background-color: var(--background-color);\n  color: var(--regression-test-topic-active-fg);\n}\n.topic-box[_ngcontent-%COMP%] {\n  grid-area: topic-select;\n}\n.language-box[_ngcontent-%COMP%] {\n  grid-area: language-select;\n}\napp-topic-picker[_ngcontent-%COMP%]  .select-box, app-language-picker[_ngcontent-%COMP%]  .select-box {\n  width: 100%;\n}\n.comment[_ngcontent-%COMP%] {\n  grid-area: comment;\n  margin-bottom: 24px;\n}\n.comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font: 600 0.78rem/1.7 \"Montserrat\";\n  padding: 1.7em 1.1em;\n  background-color: var(--regression-test-textarea-bg);\n  border: none;\n  display: block;\n  width: 100%;\n  color: var(--regression-test-textarea-fg);\n}\n.comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: var(--regression-test-textarea-placeholder-fg);\n}\n.comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder {\n  color: var(--regression-test-textarea-placeholder-fg);\n}\n.comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: var(--regression-test-textarea-placeholder-fg);\n}\n.comment[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--regression-test-textarea-placeholder-fg);\n}\n.button-group[_ngcontent-%COMP%] {\n  grid-area: \"button-group\";\n  font-size: 0;\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n.button-group[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.button-group[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 14px;\n}\n.button-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.78rem;\n  right: 1.78rem;\n  display: flex;\n  align-items: center;\n  font: 400 14px/20px \"Montserrat\";\n  text-transform: uppercase;\n  cursor: pointer;\n  transition: color var(--transition-speed) var(--transition-timing);\n}\n.button-close[_ngcontent-%COMP%]:hover {\n  color: var(--accent-highlight);\n}\n.button-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 18px;\n  margin-right: 7px;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: -1;\n  right: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbW9kdWxlcy9kaWFnbm9zZS9yZWdyZXNzaW9uLXRlc3QtYm94L3JlZ3Jlc3Npb24tdGVzdC1ib3guY29tcG9uZW50Lmxlc3MiLCIvaG9tZS9iZWUvQmVlL3NvdGF0ZWsvbW9kdG9vbHMtYXBwLW9sZC9zcmMvX3V0aWxzLmxlc3MiLCJzcmMvYXBwL21vZHVsZXMvZGlhZ25vc2UvcmVncmVzc2lvbi10ZXN0LWJveC9yZWdyZXNzaW9uLXRlc3QtYm94LmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VDSEksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0VBQUE7QUNDSjtBRkdJO0VDQUEsVUFBQTtFQUNBLG1CQUFBO0FDQUo7QUZJQTtFQUNJLGFBQUE7RUFDQSw4SkFBQTtFQU1BLDhCQUFBO0VBQ0Esa0RBQUE7RUFBQSwwQ0FBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUVQSjtBRlVBO0VBQ0ksZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0VBQ0EsK0RBQUE7QUVSSjtBRldBO0VBQ0ksc0NBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0FFVEo7QUZhQTtFQUNJLG9CQUFBO0VBQ0Esb0JBQUE7QUVYSjtBRmNBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsaURBQUE7QUVaSjtBRmNJO0VBQ0kscUJBQUE7QUVaUjtBRmdCQTtFQUNJLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0FFZEo7QUZpQkE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsK0JBQUE7RUNHQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNqQko7QUZnQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUVkSjtBRmlCUTtFQUNJLGtCQUFBO0FFZlo7QUZrQlE7RUFDSSw4QkFBQTtBRWhCWjtBRm1CUTtFQUNJLDBCQUFBO0FFakJaO0FGR0E7RUFtQlEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1REFBQTtFQUNBLGdFQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FFbkJSO0FGcUJROztFQUVJLHlDQUFBO0VBQ0EsNkNBQUE7QUVuQlo7QUZ5QkE7RUFDSSx1QkFBQTtBRXZCSjtBRjBCQTtFQUNJLDBCQUFBO0FFeEJKO0FGMkJBOztFQUdRLFdBQUE7QUUxQlI7QUYrQkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FFN0JKO0FGMkJBO0VBSVEsa0NBQUE7RUFDQSxvQkFBQTtFQUNBLG9EQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUNBQUE7QUU1QlI7QUY4QlE7RUFDSSxxREFBQTtBRTVCWjtBRjJCUTtFQUNJLHFEQUFBO0FFNUJaO0FGMkJRO0VBQ0kscURBQUE7QUU1Qlo7QUYyQlE7RUFDSSxxREFBQTtBRTVCWjtBRmtDQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLE9BQUE7QUVoQ0o7QUYyQkE7RUFRUSxxQkFBQTtBRWhDUjtBRmlDUTtFQUNJLGtCQUFBO0FFL0JaO0FGcUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0VBQUE7QUVuQ0o7QUZxQ0k7RUFDSSw4QkFBQTtBRW5DUjtBRnVCQTtFQWdCUSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRXBDUjtBRnlDQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FFdkNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9kaWFnbm9zZS9yZWdyZXNzaW9uLXRlc3QtYm94L3JlZ3Jlc3Npb24tdGVzdC1ib3guY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vX3V0aWxzLmxlc3NcIjtcblxuQHJlZ3Jlc3Npb24tYm94LXBhZGRpbmc6IDEuNzhyZW07XG5cbi5yZWdyZXNzaW9uLXdyYXBwZXIge1xuICAgIC5oaWRkZW4tZWZmZWN0KCk7XG5cbiAgICAmLnNob3cge1xuICAgICAgICAuc2hvdy1lZmZlY3QoKTtcbiAgICB9XG59XG5cbi5yZWdyZXNzaW9uLWJveCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICAgICAgXCJ0aXRsZSAgICAgICAgICB0aXRsZVwiXG4gICAgICAgIFwibGFiZWwtYm94ICAgICAgbGFiZWwtYm94XCJcbiAgICAgICAgXCJ0b3BpYy1zZWxlY3QgICBsYW5ndWFnZS1zZWxlY3RcIlxuICAgICAgICBcImNvbW1lbnQgICAgICAgIGNvbW1lbnRcIlxuICAgICAgICBcImJ1dHRvbi1ncm91cCAgIGJ1dHRvbi1ncm91cFwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCBtaW4tY29udGVudCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVncmVzc2lvbi10ZXN0LWJnKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ3JpZC1nYXA6IDEuNzhyZW07XG4gICAgcGFkZGluZzogQHJlZ3Jlc3Npb24tYm94LXBhZGRpbmc7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi50aXRsZSB7XG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcbiAgICBmb250OiA0MDAgMTZweC8yMHB4IFwiTW9udHNlcnJhdFwiO1xuICAgIGNvbG9yOiB2YXIoLS1yZWdyZXNzaW9uLXRlc3QtdGl0bGUtZmcpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjc4MTI1ZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1yZWdyZXNzaW9uLXRlc3QtdGl0bGUtYm9yZGVyLWJnKTtcbn1cblxuLmJveC10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLXJlZ3Jlc3Npb24tdGVzdC10aXRsZS1mZyk7XG4gICAgZm9udDogNDAwIDEycHgvMjBweCBcIk9wZW4gU2Fuc1wiO1xuICAgIG1hcmdpbjogMCAwIDEuMTVlbSAwO1xufVxuXG4vLyBsYWJlbC1ib3ggc3R5bGVcbi5sYWJlbC1ib3gge1xuICAgIGdyaWQtYXJlYTogbGFiZWwtYm94O1xuICAgIG1hcmdpbi1ib3R0b206IDAuNGVtO1xufVxuXG4udG9waWMtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAxM3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZ3Jlc3Npb24tdGVzdC10b3BpYy1iZyk7XG5cbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjE1ZW07XG4gICAgfVxufVxuXG4udG9waWNfX2ljb24ge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogdmFyKC0tcmVncmVzc2lvbi10ZXN0LWljb24tZmcpO1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLnRvcGljX19uYW1lIHtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IHZhcigtLXJlZ3Jlc3Npb24tdGVzdC1uYW1lLWZnKTtcbiAgICBmb250OiA0MDAgMTRweC8yMHB4IFwiT3BlbiBTYW5zXCI7XG4gICAgLnRleHQtb3ZlcmZsb3coKTtcbn1cblxuLnRvcGljX19sZXZlbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYXBwLXRvb2x0aXAge1xuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpmaXJzdC1jaGlsZCAubGV2ZWwge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIC5sZXZlbCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sZXZlbCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDM4cHg7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tcmVncmVzc2lvbi10ZXN0LXRvcGljLWZnKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVncmVzc2lvbi10ZXN0LXRvcGljLWxldmVsLWJnKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbiAgICAgICAgZm9udDogYm9sZCAxNHB4LzM4cHggXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICYuYWN0aXZlLFxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXJlZ3Jlc3Npb24tdGVzdC10b3BpYy1hY3RpdmUtZmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyB0b3BpYy1zZWxlY3QgJiBsYW5ndWFnZS1zZWxlY3Qgc3R5bGVcbi50b3BpYy1ib3gge1xuICAgIGdyaWQtYXJlYTogdG9waWMtc2VsZWN0O1xufVxuXG4ubGFuZ3VhZ2UtYm94IHtcbiAgICBncmlkLWFyZWE6IGxhbmd1YWdlLXNlbGVjdDtcbn1cblxuYXBwLXRvcGljLXBpY2tlcjo6bmctZGVlcCxcbmFwcC1sYW5ndWFnZS1waWNrZXI6Om5nLWRlZXAge1xuICAgIC5zZWxlY3QtYm94IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4vLyBjb21tZW50IHN0eWxlXG4uY29tbWVudCB7XG4gICAgZ3JpZC1hcmVhOiBjb21tZW50O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgdGV4dGFyZWEge1xuICAgICAgICBmb250OiA2MDAgMC43OHJlbS8xLjcgXCJNb250c2VycmF0XCI7XG4gICAgICAgIHBhZGRpbmc6IDEuN2VtIDEuMWVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWdyZXNzaW9uLXRlc3QtdGV4dGFyZWEtYmcpO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgY29sb3I6IHZhcigtLXJlZ3Jlc3Npb24tdGVzdC10ZXh0YXJlYS1mZyk7XG5cbiAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXJlZ3Jlc3Npb24tdGVzdC10ZXh0YXJlYS1wbGFjZWhvbGRlci1mZyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIGJ1dHRvbi1ncm91cCBzdHlsZVxuLmJ1dHRvbi1ncm91cCB7XG4gICAgZ3JpZC1hcmVhOiBcImJ1dHRvbi1ncm91cFwiO1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleDogMTtcblxuICAgIC5pdGVtIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICAgICAgICB9O1xuICAgIH1cbn1cblxuLy8gYnV0dG9uLWNsb3NlXG4uYnV0dG9uLWNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBAcmVncmVzc2lvbi1ib3gtcGFkZGluZztcbiAgICByaWdodDogQHJlZ3Jlc3Npb24tYm94LXBhZGRpbmc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQ6IDQwMCAxNHB4LzIwcHggXCJNb250c2VycmF0XCI7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtaGlnaGxpZ2h0KTtcbiAgICB9XG5cbiAgICBpIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgfVxufVxuXG4vLyBPdmVybGF5XG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAwLjcpO1xufVxuIiwiLmhpZGRlbi1lZmZlY3QgKCkge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLXNwZWVkKSB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG59XG5cbi5zaG93LWVmZmVjdCAoKSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4vLyBzY3JvbGwgYmFyXG4uc2Nyb2xsLWJhci0wMSAoKSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwwLjMpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE0RDU1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjNDE0RDU1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIxZjIwO1xuICAgIH1cbn1cblxuLnNjcm9sbC1iYXItMDIgKCkge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNEQ1NTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIC8vIHdpZHRoOiAxMnB4O1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgIzQxNEQ1NTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y2NzE1YjtcbiAgICB9XG59XG5cbi8vIGNyZWF0ZSBtYXRlcmlhbCBJY29uIGFzIHBzZXVkbyBlbGVtZW50XG4ubWF0ZXJpYWxJY29uRnJvbShAY29udGVudCwgQHR5cGU6IGFmdGVyKSB7XG4gICAgJjpAe3R5cGV9IHtcbiAgICAgICAgY29udGVudDogQGNvbnRlbnQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAgICAgd29yZC13cmFwOiBub3JtYWw7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xuICAgIH1cbn1cblxuLy8gdGV4dCBvbmVsaW5lIG92ZXJmbG93XG4udGV4dC1vdmVyZmxvdygpIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59IiwiLnJlZ3Jlc3Npb24td3JhcHBlciB7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tc3BlZWQpIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbn1cbi5yZWdyZXNzaW9uLXdyYXBwZXIuc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4ucmVncmVzc2lvbi1ib3gge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcInRpdGxlICAgICAgICAgIHRpdGxlXCIgXCJsYWJlbC1ib3ggICAgICBsYWJlbC1ib3hcIiBcInRvcGljLXNlbGVjdCAgIGxhbmd1YWdlLXNlbGVjdFwiIFwiY29tbWVudCAgICAgICAgY29tbWVudFwiIFwiYnV0dG9uLWdyb3VwICAgYnV0dG9uLWdyb3VwXCI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgbWluLWNvbnRlbnQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWdyZXNzaW9uLXRlc3QtYmcpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtZ2FwOiAxLjc4cmVtO1xuICBwYWRkaW5nOiAxLjc4cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4udGl0bGUge1xuICBncmlkLWFyZWE6IHRpdGxlO1xuICBmb250OiA0MDAgMTZweC8yMHB4IFwiTW9udHNlcnJhdFwiO1xuICBjb2xvcjogdmFyKC0tcmVncmVzc2lvbi10ZXN0LXRpdGxlLWZnKTtcbiAgcGFkZGluZy1ib3R0b206IDEuNzgxMjVlbTtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcmVncmVzc2lvbi10ZXN0LXRpdGxlLWJvcmRlci1iZyk7XG59XG4uYm94LXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXJlZ3Jlc3Npb24tdGVzdC10aXRsZS1mZyk7XG4gIGZvbnQ6IDQwMCAxMnB4LzIwcHggXCJPcGVuIFNhbnNcIjtcbiAgbWFyZ2luOiAwIDAgMS4xNWVtIDA7XG59XG4ubGFiZWwtYm94IHtcbiAgZ3JpZC1hcmVhOiBsYWJlbC1ib3g7XG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xufVxuLnRvcGljLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDEzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZ3Jlc3Npb24tdGVzdC10b3BpYy1iZyk7XG59XG4udG9waWMtaXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLWJvdHRvbTogMS4xNWVtO1xufVxuLnRvcGljX19pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0tcmVncmVzc2lvbi10ZXN0LWljb24tZmcpO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG4udG9waWNfX25hbWUge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tcmVncmVzc2lvbi10ZXN0LW5hbWUtZmcpO1xuICBmb250OiA0MDAgMTRweC8yMHB4IFwiT3BlbiBTYW5zXCI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuLnRvcGljX19sZXZlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9waWNfX2xldmVsIGFwcC10b29sdGlwOm5vdCg6bGFzdC1jaGlsZCkge1xuICBtYXJnaW4tcmlnaHQ6IDExcHg7XG59XG4udG9waWNfX2xldmVsIGFwcC10b29sdGlwOmZpcnN0LWNoaWxkIC5sZXZlbCB7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcbn1cbi50b3BpY19fbGV2ZWwgYXBwLXRvb2x0aXA6bGFzdC1jaGlsZCAubGV2ZWwge1xuICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHggMDtcbn1cbi50b3BpY19fbGV2ZWwgLmxldmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMzhweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1yZWdyZXNzaW9uLXRlc3QtdG9waWMtZmcpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWdyZXNzaW9uLXRlc3QtdG9waWMtbGV2ZWwtYmcpO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xuICBmb250OiBib2xkIDE0cHgvMzhweCBcIk9wZW4gU2Fuc1wiO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udG9waWNfX2xldmVsIC5sZXZlbC5hY3RpdmUsXG4udG9waWNfX2xldmVsIC5sZXZlbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBjb2xvcjogdmFyKC0tcmVncmVzc2lvbi10ZXN0LXRvcGljLWFjdGl2ZS1mZyk7XG59XG4udG9waWMtYm94IHtcbiAgZ3JpZC1hcmVhOiB0b3BpYy1zZWxlY3Q7XG59XG4ubGFuZ3VhZ2UtYm94IHtcbiAgZ3JpZC1hcmVhOiBsYW5ndWFnZS1zZWxlY3Q7XG59XG5hcHAtdG9waWMtcGlja2VyOjpuZy1kZWVwIC5zZWxlY3QtYm94LFxuYXBwLWxhbmd1YWdlLXBpY2tlcjo6bmctZGVlcCAuc2VsZWN0LWJveCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbW1lbnQge1xuICBncmlkLWFyZWE6IGNvbW1lbnQ7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uY29tbWVudCB0ZXh0YXJlYSB7XG4gIGZvbnQ6IDYwMCAwLjc4cmVtLzEuNyBcIk1vbnRzZXJyYXRcIjtcbiAgcGFkZGluZzogMS43ZW0gMS4xZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZ3Jlc3Npb24tdGVzdC10ZXh0YXJlYS1iZyk7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogdmFyKC0tcmVncmVzc2lvbi10ZXN0LXRleHRhcmVhLWZnKTtcbn1cbi5jb21tZW50IHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB2YXIoLS1yZWdyZXNzaW9uLXRlc3QtdGV4dGFyZWEtcGxhY2Vob2xkZXItZmcpO1xufVxuLmJ1dHRvbi1ncm91cCB7XG4gIGdyaWQtYXJlYTogXCJidXR0b24tZ3JvdXBcIjtcbiAgZm9udC1zaXplOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAxO1xufVxuLmJ1dHRvbi1ncm91cCAuaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5idXR0b24tZ3JvdXAgLml0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gIG1hcmdpbi1yaWdodDogMTRweDtcbn1cbi5idXR0b24tY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMS43OHJlbTtcbiAgcmlnaHQ6IDEuNzhyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQ6IDQwMCAxNHB4LzIwcHggXCJNb250c2VycmF0XCI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xufVxuLmJ1dHRvbi1jbG9zZTpob3ZlciB7XG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtaGlnaGxpZ2h0KTtcbn1cbi5idXR0b24tY2xvc2UgaSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IC0xO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegressionTestBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-regression-test-box',
                templateUrl: './regression-test-box.component.html',
                styleUrls: ['./regression-test-box.component.less']
            }]
    }], function () { return []; }, { topics: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isShow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/modules/diagnose/topic/topic.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/diagnose/topic/topic.component.ts ***!
  \***********************************************************/
/*! exports provided: TopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicComponent", function() { return TopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function TopicComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--level-color", ctx_r41.riskColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r41.topicData.faIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r41.level);
} }
function TopicComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--level-color", ctx_r42.riskColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r42.topicData.faIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r42.topicData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.topicData.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.level);
} }
var Type;
(function (Type) {
    Type["compact"] = "compact";
})(Type || (Type = {}));
class TopicComponent {
    constructor() {
        this.type = null;
    }
    ngOnInit() {
        this.topicData = src_constants__WEBPACK_IMPORTED_MODULE_1__["Topics"][this.topic];
        this.riskColor = src_constants__WEBPACK_IMPORTED_MODULE_1__["RiskLevels"][this.level].color;
    }
}
TopicComponent.ɵfac = function TopicComponent_Factory(t) { return new (t || TopicComponent)(); };
TopicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopicComponent, selectors: [["app-topic"]], inputs: { topic: "topic", level: "level", type: "type" }, decls: 3, vars: 2, consts: [[3, "ngSwitch"], ["class", "topic topic--compact", 3, "--level-color", 4, "ngSwitchCase"], ["class", "topic", 3, "--level-color", 4, "ngSwitchDefault"], [1, "topic", "topic--compact"], [1, "topic__icon", "fas"], [1, "topic__risk"], [1, "topic"], [1, "topic__name", 3, "title"]], template: function TopicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "container-element", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TopicComponent_div_1_Template, 4, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TopicComponent_div_2_Template, 6, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "compact");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"]], styles: [".topic[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 4px 34.5px 4px 9px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 4px;\n  overflow: hidden;\n  background-color: var(--topic-comp-bg);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  min-height: 38px;\n}\n.topic[_ngcontent-%COMP%]:hover   .topic__icon[_ngcontent-%COMP%] {\n  color: var(--level-color);\n}\n.topic[_ngcontent-%COMP%]::before {\n  content: '';\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 3px;\n  background-color: var(--level-color);\n}\n.topic__icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--topic-comp-icon-fg);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: all 0.5s var(--transition-timing);\n}\n.topic__name[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 100%;\n  padding: 0 10px;\n  color: var(--topic-comp-fg);\n  font: 400 14px/20px \"Open Sans\";\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.topic__risk[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4.5px;\n  top: 50%;\n  transform: translateY(-50%);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: #000000;\n  color: #fff;\n  font: bold 16px/20px \"Montserrat\";\n  text-align: center;\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 50%;\n}\n.topic--compact[_ngcontent-%COMP%] {\n  border-radius: 0;\n  padding-right: 25px;\n  min-height: 22px;\n}\n.topic--compact[_ngcontent-%COMP%]   .topic__icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.topic--compact[_ngcontent-%COMP%]   .topic__risk[_ngcontent-%COMP%] {\n  font-size: 10px;\n  width: 20px;\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9hcHAvbW9kdWxlcy9kaWFnbm9zZS90b3BpYy90b3BpYy5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvbW9kdWxlcy9kaWFnbm9zZS90b3BpYy90b3BpYy5jb21wb25lbnQubGVzcyIsIi9ob21lL2JlZS9CZWUvc290YXRlay9tb2R0b29scy1hcHAtb2xkL3NyYy9fdXRpbHMubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREdJO0VBRVEseUJBQUE7QUNGWjtBRE1JO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBQ0pSO0FET0k7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLDZDQUFBO0FDTFI7QURRSTtFQUNJLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VFaUNKLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBRHRDSjtBRE9JO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTFI7QURXSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ1RSO0FETUk7RUFNUSxlQUFBO0FDVFo7QURHSTtFQVVRLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNWWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGlhZ25vc2UvdG9waWMvdG9waWMuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vX3V0aWxzLmxlc3NcIjtcblxuLnRvcGljIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogNHB4IDM0LjVweCA0cHggOXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG9waWMtY29tcC1iZyk7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgbWluLWhlaWdodDogMzhweDtcblxuICAgICY6aG92ZXIge1xuICAgICAgICAudG9waWNfX2ljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWxldmVsLWNvbG9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGV2ZWwtY29sb3IpO1xuICAgIH1cbiAgICBcbiAgICAmX19pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdG9waWMtY29tcC1pY29uLWZnKTtcbiAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIHZhcigtLXRyYW5zaXRpb24tdGltaW5nKTtcbiAgICB9XG5cbiAgICAmX19uYW1lIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tdG9waWMtY29tcC1mZyk7XG4gICAgICAgIGZvbnQ6IDQwMCAxNHB4LzIwcHggXCJPcGVuIFNhbnNcIjtcbiAgICAgICAgLnRleHQtb3ZlcmZsb3coKVxuICAgIH1cbiAgICBcbiAgICAmX19yaXNrIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogNC41cHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgZm9udDogYm9sZCAxNnB4LzIwcHggXCJNb250c2VycmF0XCI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG59XG5cbi8vIHN0eWxlLW1vZGlmeVxuLnRvcGljIHtcbiAgICAmLS1jb21wYWN0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgICAgICAgbWluLWhlaWdodDogMjJweDtcblxuICAgICAgICAudG9waWNfX2ljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvcGljX19yaXNrIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIudG9waWMge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDRweCAzNC41cHggNHB4IDlweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvcGljLWNvbXAtYmcpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWluLWhlaWdodDogMzhweDtcbn1cbi50b3BpYzpob3ZlciAudG9waWNfX2ljb24ge1xuICBjb2xvcjogdmFyKC0tbGV2ZWwtY29sb3IpO1xufVxuLnRvcGljOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxldmVsLWNvbG9yKTtcbn1cbi50b3BpY19faWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLXRvcGljLWNvbXAtaWNvbi1mZyk7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyB2YXIoLS10cmFuc2l0aW9uLXRpbWluZyk7XG59XG4udG9waWNfX25hbWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGNvbG9yOiB2YXIoLS10b3BpYy1jb21wLWZnKTtcbiAgZm9udDogNDAwIDE0cHgvMjBweCBcIk9wZW4gU2Fuc1wiO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi50b3BpY19fcmlzayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDQuNXB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQ6IGJvbGQgMTZweC8yMHB4IFwiTW9udHNlcnJhdFwiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udG9waWMtLWNvbXBhY3Qge1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xuICBtaW4taGVpZ2h0OiAyMnB4O1xufVxuLnRvcGljLS1jb21wYWN0IC50b3BpY19faWNvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi50b3BpYy0tY29tcGFjdCAudG9waWNfX3Jpc2sge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbiIsIi5oaWRkZW4tZWZmZWN0ICgpIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1zcGVlZCkgdmFyKC0tdHJhbnNpdGlvbi10aW1pbmcpO1xufVxuXG4uc2hvdy1lZmZlY3QgKCkge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLy8gc2Nyb2xsIGJhclxuLnNjcm9sbC1iYXItMDEgKCkge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQxNEQ1NTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgIzQxNEQ1NTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMWYyMDtcbiAgICB9XG59XG5cbi5zY3JvbGwtYmFyLTAyICgpIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgICAgIC8vIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTRENTU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAvLyB3aWR0aDogMTJweDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIC8vIGJvcmRlcjogM3B4IHNvbGlkICM0MTRENTU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNjcxNWI7XG4gICAgfVxufVxuXG4vLyBjcmVhdGUgbWF0ZXJpYWwgSWNvbiBhcyBwc2V1ZG8gZWxlbWVudFxuLm1hdGVyaWFsSWNvbkZyb20oQGNvbnRlbnQsIEB0eXBlOiBhZnRlcikge1xuICAgICY6QHt0eXBlfSB7XG4gICAgICAgIGNvbnRlbnQ6IEBjb250ZW50O1xuICAgICAgICBmb250LWZhbWlseTogXCJNYXRlcmlhbCBJY29uc1wiO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgICAgIHdvcmQtd3JhcDogbm9ybWFsO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbiAgICB9XG59XG5cbi8vIHRleHQgb25lbGluZSBvdmVyZmxvd1xuLnRleHQtb3ZlcmZsb3coKSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-topic',
                templateUrl: './topic.component.html',
                styleUrls: ['./topic.component.less']
            }]
    }], function () { return []; }, { topic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/pipes/index.ts":
/*!********************************!*\
  !*** ./src/app/pipes/index.ts ***!
  \********************************/
/*! exports provided: RightUnderscorePipe, RiskLevelToColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _right_underscore_right_underscore_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./right-underscore/right-underscore.pipe */ "./src/app/pipes/right-underscore/right-underscore.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightUnderscorePipe", function() { return _right_underscore_right_underscore_pipe__WEBPACK_IMPORTED_MODULE_0__["RightUnderscorePipe"]; });

/* harmony import */ var _risk_level_to_color_risk_level_to_color_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./risk-level-to-color/risk-level-to-color.pipe */ "./src/app/pipes/risk-level-to-color/risk-level-to-color.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RiskLevelToColorPipe", function() { return _risk_level_to_color_risk_level_to_color_pipe__WEBPACK_IMPORTED_MODULE_1__["RiskLevelToColorPipe"]; });





/***/ }),

/***/ "./src/app/pipes/right-underscore/right-underscore.pipe.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pipes/right-underscore/right-underscore.pipe.ts ***!
  \*****************************************************************/
/*! exports provided: RightUnderscorePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightUnderscorePipe", function() { return RightUnderscorePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RightUnderscorePipe {
    transform(value, args) {
        value = value.replace(/.*_/, '');
        return value;
    }
}
RightUnderscorePipe.ɵfac = function RightUnderscorePipe_Factory(t) { return new (t || RightUnderscorePipe)(); };
RightUnderscorePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "rightUnderscore", type: RightUnderscorePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RightUnderscorePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'rightUnderscore'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pipes/risk-level-to-color/risk-level-to-color.pipe.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pipes/risk-level-to-color/risk-level-to-color.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: RiskLevelToColorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RiskLevelToColorPipe", function() { return RiskLevelToColorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/constants */ "./src/constants.ts");



class RiskLevelToColorPipe {
    transform(level) {
        const riskLevel = src_constants__WEBPACK_IMPORTED_MODULE_1__["RiskLevels"][level];
        return riskLevel.color;
    }
}
RiskLevelToColorPipe.ɵfac = function RiskLevelToColorPipe_Factory(t) { return new (t || RiskLevelToColorPipe)(); };
RiskLevelToColorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "riskLevelToColor", type: RiskLevelToColorPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RiskLevelToColorPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'riskLevelToColor'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/diagnose/diagnose.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/diagnose/diagnose.service.ts ***!
  \*******************************************************/
/*! exports provided: DiagnoseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnoseService", function() { return DiagnoseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var classify_text_swagger_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classify-text-swagger-client */ "./projects/classify-text-swagger-client/dist/fesm2015/classify-text-swagger-client.js");



class DiagnoseService {
    constructor(api) {
        this.api = api;
    }
    search(params) {
        return this.api.classifyText(params).toPromise();
    }
}
DiagnoseService.ɵfac = function DiagnoseService_Factory(t) { return new (t || DiagnoseService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](classify_text_swagger_client__WEBPACK_IMPORTED_MODULE_1__["DefaultService"])); };
DiagnoseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DiagnoseService, factory: DiagnoseService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiagnoseService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: classify_text_swagger_client__WEBPACK_IMPORTED_MODULE_1__["DefaultService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/policy/policy.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/policy/policy.service.ts ***!
  \***************************************************/
/*! exports provided: PolicyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyService", function() { return PolicyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PolicyService {
    constructor() {
        this.defaultPolicyGuide = [
            {
                name: 'Global Chat',
                rules: [
                    { topic: '0', riskThreshold: 6 },
                    { topic: '5', riskThreshold: 5 },
                ]
            },
            {
                name: 'Private Chat',
                rules: [
                    { topic: '5', riskThreshold: 6 },
                ]
            }
        ];
    }
    getPolicyGuides() {
        // Todo: HttpRequest to get data from Backend API
        // let return default data for now
        return this.defaultPolicyGuide;
    }
}
PolicyService.ɵfac = function PolicyService_Factory(t) { return new (t || PolicyService)(); };
PolicyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PolicyService, factory: PolicyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolicyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-diagnose-diagnose-module-es2015.js.map