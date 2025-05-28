"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_demo_coming-soon_coming-soon_module_ts"],{

/***/ 3526:
/*!****************************************************************!*\
  !*** ./src/app/demo/coming-soon/coming-soon-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComingSoonRoutingModule: () => (/* binding */ ComingSoonRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _coming_soon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coming-soon.component */ 36157);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _coming_soon_component__WEBPACK_IMPORTED_MODULE_0__.ComingSoonComponent
}];
class ComingSoonRoutingModule {
  static #_ = this.ɵfac = function ComingSoonRoutingModule_Factory(t) {
    return new (t || ComingSoonRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ComingSoonRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ComingSoonRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 36157:
/*!***********************************************************!*\
  !*** ./src/app/demo/coming-soon/coming-soon.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComingSoonComponent: () => (/* binding */ ComingSoonComponent)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebook */ 22541);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTwitter */ 19373);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faPinterest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faPinterest */ 85970);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faGithub */ 15745);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faInstagram__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faInstagram */ 92611);
/* harmony import */ var _fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@fury/animations/fade-in-up.animation */ 72785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 72049);













class ComingSoonComponent {
  constructor() {
    this.faFacebook = _fortawesome_free_brands_svg_icons_faFacebook__WEBPACK_IMPORTED_MODULE_1__.faFacebook;
    this.faTwitter = _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__.faTwitter;
    this.faInstagram = _fortawesome_free_brands_svg_icons_faInstagram__WEBPACK_IMPORTED_MODULE_3__.faInstagram;
    this.faPinterest = _fortawesome_free_brands_svg_icons_faPinterest__WEBPACK_IMPORTED_MODULE_4__.faPinterest;
    this.faGithub = _fortawesome_free_brands_svg_icons_faGithub__WEBPACK_IMPORTED_MODULE_5__.faGithub;
  }
  ngOnInit() {}
  static #_ = this.ɵfac = function ComingSoonComponent_Factory(t) {
    return new (t || ComingSoonComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ComingSoonComponent,
    selectors: [["fury-coming-soon"]],
    decls: 33,
    vars: 6,
    consts: [[1, "card"], [1, "card-content"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "logo"], ["viewBox", "0 0 33.74 33.99", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M26.83,19.33c-.36.37-.73.71-1.09,1l.31,3.22a5.41,5.41,0,0,1-2.43,5.14L15.72,34l-.67-8.74a6.54,6.54,0,0,1-6.57-6.53L0,18.18l5-7.93a5.41,5.41,0,0,1,5.23-2.54l3.1.31q.49-.55,1.05-1.11C20.78.54,30.82-.62,33.48.26,34.37,2.93,33.2,13,26.83,19.33Zm-.45-12a3.77,3.77,0,1,0,0,5.33A3.77,3.77,0,0,0,26.38,7.36ZM2.82,23.72l3.24-3.24a8.24,8.24,0,0,0,7.11,7.1L10.5,30.25,7.74,33V29.46L2.41,31.23l1.78-5.32H.64Z"], [1, "socials"], [1, "social", "facebook"], ["size", "lg", 3, "icon"], [1, "social", "twitter"], [1, "social", "instagram"], [1, "social", "pinterest"], [1, "social", "github"], ["fxLayout", "column", 1, "card-footer"], ["matInput", ""], ["matSuffix", ""], ["color", "primary", "mat-raised-button", "", "type", "button"]],
    template: function ComingSoonComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "svg", 3)(4, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "COMING SOON");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Our website is under construction.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 5)(12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 12)(23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "If you would like to get notified as soon as we launch, subscribe below and follow us on socials!");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-form-field")(26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "SUBSCRIBE");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faFacebook);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faTwitter);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faInstagram);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faPinterest);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("icon", ctx.faGithub);
      }
    },
    dependencies: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  justify-items: center;\n  align-content: center;\n  align-items: center;\n  background: #fff url(\"/assets/img/backgrounds/editor.jpg\");\n  background-size: cover;\n  height: 100%;\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  width: 380px;\n  max-width: 100%;\n  text-align: center;\n  overflow: hidden;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  margin: 24px 0;\n}\n.logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n}\n\n.socials[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.socials[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]    + .social[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.socials[_ngcontent-%COMP%]   .social.facebook[_ngcontent-%COMP%] {\n  color: #3b5998;\n}\n.socials[_ngcontent-%COMP%]   .social.twitter[_ngcontent-%COMP%] {\n  color: #00aced;\n}\n.socials[_ngcontent-%COMP%]   .social.instagram[_ngcontent-%COMP%] {\n  color: #cd486b;\n}\n.socials[_ngcontent-%COMP%]   .social.pinterest[_ngcontent-%COMP%] {\n  color: #C92228;\n}\n.socials[_ngcontent-%COMP%]   .social.github[_ngcontent-%COMP%] {\n  color: #000;\n}\n\nh1[_ngcontent-%COMP%] {\n  font: var(--font-display-1);\n  font-weight: 500;\n  margin: 24px 0 0;\n}\n\np[_ngcontent-%COMP%] {\n  font: var(--font-body-2);\n  margin: 0 0 24px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2NvbWluZy1zb29uL2NvbWluZy1zb29uLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC90aGVtZS9fY3NzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O0VBQUE7QUF5Q0E7O0VBQUE7QUFLQTs7RUFBQTtBQU9BOztFQUFBO0FBaUNBOztFQUFBO0FBaUJBOztFQUFBO0FDdkdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwREFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFnQkY7O0FBYkE7RUFDRSxrQkRKYztFQ0tkLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQ3lERSwySEFBQTtBRHhDSjs7QUFiQTtFQUNFLGFEZFE7QUM4QlY7O0FBYkE7RUFDRSxhRGxCUTtBQ2tDVjs7QUFiQTtFQUNFLGNBQUE7QUFnQkY7QUFkRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBZ0JKOztBQUxFO0VBQ0UsZUFBQTtBQVFKO0FBTkk7RUFDRSxpQkFBQTtBQVFOO0FBTEk7RUFDRSxjQWRhO0FBcUJuQjtBQUpJO0VBQ0UsY0FqQlk7QUF1QmxCO0FBSEk7RUFDRSxjQXBCYztBQXlCcEI7QUFGSTtFQUNFLGNBdkJjO0FBMkJwQjtBQURJO0VBQ0UsV0ExQlc7QUE2QmpCOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvdGhlbWluZy9wYWxldHRlXCI7XHJcblxyXG4vKipcclxuICBHZW5lcmFsXHJcbiAqL1xyXG5cclxuJHBhZ2UtbG9hZC1iYWNrZ3JvdW5kOiAjMTMyOTNkO1xyXG4kZWxldmF0aW9uOiAyO1xyXG5cclxuJGNvbG9yLXN1Y2Nlc3M6ICM3Y2IzNDI7XHJcblxyXG4kc3BhY2luZzogMjRweDtcclxuJGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiRwYWRkaW5nLXhsOiA0OHB4O1xyXG4kcGFkZGluZy1sZzogMzJweDtcclxuJHBhZGRpbmc6IDI0cHg7XHJcbiRwYWRkaW5nLW1kOiAxNnB4O1xyXG4kcGFkZGluZy1zbTogMTJweDtcclxuJHBhZGRpbmcteHM6IDhweDtcclxuJHBhZGRpbmcteHhzOiA0cHg7XHJcbiRwYWRkaW5nLTA6IDBweDtcclxuXHJcbiRwYWRkaW5nczogKFxyXG4gICctMCc6ICRwYWRkaW5nLTAsXHJcbiAgLXh4czogJHBhZGRpbmcteHhzLFxyXG4gIC14czogJHBhZGRpbmcteHMsXHJcbiAgLXNtOiAkcGFkZGluZy1zbSxcclxuICAtbWQ6ICRwYWRkaW5nLW1kLFxyXG4gICcnOiAkcGFkZGluZyxcclxuICAtbGc6ICRwYWRkaW5nLWxnLFxyXG4gIC14bDogJHBhZGRpbmcteGwsXHJcbik7XHJcblxyXG4kaWNvbi1zaXplczogKFxyXG4gIC14czogMTRweCxcclxuICAtc206IDE4cHgsXHJcbiAgLW1kOiAyMHB4LFxyXG4gICcnOiAyNHB4LFxyXG4gIC1sZzogMjhweCxcclxuICAteGw6IDMycHhcclxuKTtcclxuXHJcbi8qKlxyXG4gIENhcmRcclxuICovXHJcbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XHJcblxyXG4vKipcclxuICBUb29sYmFyXHJcbiAqL1xyXG4kdG9vbGJhci1oZWlnaHQ6IDY0cHg7XHJcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcclxuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xyXG5cclxuLyoqXHJcbiAgRm9vdGVyXHJcbiAqL1xyXG4kZm9vdGVyLWhlaWdodDogNTZweDtcclxuJGZvb3Rlci16LWluZGV4OiAxMDA7XHJcblxyXG4vLyBTaWRlbmF2XHJcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcclxuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiA3NHB4O1xyXG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuLy8gU2lkZW5hdiBJdGVtXHJcblxyXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcclxuXHJcbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDI6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMSArIDhweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XHJcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xyXG5cclxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xyXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XHJcblxyXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xyXG5cclxuLy8gUGFnZSBMYXlvdXRcclxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XHJcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuLyoqXHJcbiAgTWl4aW5zXHJcbiAqL1xyXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XHJcbkBtaXhpbiBtZWRpYS14cyB7XHJcbiAgQG1lZGlhICN7JG1lZGlhLXhzfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xyXG5AbWl4aW4gbWVkaWEtc20ge1xyXG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICBJbmJveFxyXG4gKi9cclxuJGluYm94LWhlYWRlci1oZWlnaHQ6IDY0cHg7XHJcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xyXG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcclxuJGluYm94LW1haWwtbGlzdC1pdGVtLWhlaWdodDogNTRweDtcclxuIiwiQHVzZSAnQGFuZ3VsYXIvbWF0ZXJpYWwnIGFzIG1hdDtcclxuQGltcG9ydCBcInZhclwiO1xyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJy9hc3NldHMvaW1nL2JhY2tncm91bmRzL2VkaXRvci5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xyXG4gIHdpZHRoOiAzODBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgQGluY2x1ZGUgbWF0LmVsZXZhdGlvbig4KTtcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgcGFkZGluZzogJHNwYWNpbmc7XHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgcGFkZGluZzogJHNwYWNpbmc7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtYXJnaW46ICRzcGFjaW5nIDA7XHJcblxyXG4gIHN2ZyB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zb2NpYWxzIHtcclxuICAkY29sb3ItZmFjZWJvb2s6ICMzYjU5OTg7XHJcbiAgJGNvbG9yLXR3aXR0ZXI6ICMwMGFjZWQ7XHJcbiAgJGNvbG9yLWluc3RhZ3JhbTogI2NkNDg2YjtcclxuICAkY29sb3ItcGludGVyZXN0OiAjQzkyMjI4O1xyXG4gICRjb2xvci1naXRodWI6ICMwMDA7XHJcblxyXG4gIC5zb2NpYWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICYgKyAuc29jaWFsIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5mYWNlYm9vayB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItZmFjZWJvb2s7XHJcbiAgICB9XHJcblxyXG4gICAgJi50d2l0dGVyIHtcclxuICAgICAgY29sb3I6ICRjb2xvci10d2l0dGVyO1xyXG4gICAgfVxyXG5cclxuICAgICYuaW5zdGFncmFtIHtcclxuICAgICAgY29sb3I6ICRjb2xvci1pbnN0YWdyYW07XHJcbiAgICB9XHJcblxyXG4gICAgJi5waW50ZXJlc3Qge1xyXG4gICAgICBjb2xvcjogJGNvbG9yLXBpbnRlcmVzdDtcclxuICAgIH1cclxuXHJcbiAgICAmLmdpdGh1YiB7XHJcbiAgICAgIGNvbG9yOiAkY29sb3ItZ2l0aHViO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQ6IHZhcigtLWZvbnQtZGlzcGxheS0xKTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIG1hcmdpbjogJHNwYWNpbmcgMCAwO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250OiB2YXIoLS1mb250LWJvZHktMik7XHJcbiAgbWFyZ2luOiAwIDAgJHNwYWNpbmc7XHJcbn1cclxuIiwiLy9cbi8vIENvcHlyaWdodCAyMDIwIEdvb2dsZSBJbmMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuLy8gb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuLy8gaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuLy8gdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuLy8gY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4vLyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4vLyBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4vLyBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbi8vIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuLy8gQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuLy8gTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbi8vIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbi8vIFRIRSBTT0ZUV0FSRS5cbi8vXG5cbkB1c2UgJ3Nhc3M6bGlzdCc7XG5AdXNlICdzYXNzOm1hcCc7XG5AdXNlICdzYXNzOm1ldGEnO1xuQHVzZSAnLi9nc3MnO1xuXG4vLy8gV2hlbiB0cnVlLCBhZGQgYW4gYWRkaXRpb25hbCBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbiBiZWZvcmUgZGVjbGFyYXRpb25zXG4vLy8gdGhhdCB1c2UgYWR2YW5jZWQgZmVhdHVyZXMgc3VjaCBhcyBjdXN0b20gcHJvcGVydGllcyBvciBDU1MgZnVuY3Rpb25zLiBUaGlzXG4vLy8gYWRkcyBmYWxsYmFjayBzdXBwb3J0IGZvciBvbGRlciBicm93c2VycyBzdWNoIGFzIElFMTEgdGhhdCBkbyBub3Qgc3VwcG9ydFxuLy8vIHRoZXNlIGZlYXR1cmVzIGF0IHRoZSBjb3N0IG9mIGFkZGl0aW9uYWwgQ1NTLiBTZXQgdGhpcyB2YXJpYWJsZSB0byBmYWxzZSB0b1xuLy8vIGRpc2FibGUgZ2VuZXJhdGluZyBmYWxsYmFjayBkZWNsYXJhdGlvbnMuXG4kZW5hYmxlLWZhbGxiYWNrLWRlY2xhcmF0aW9uczogdHJ1ZSAhZGVmYXVsdDtcblxuLy8vIFdyaXRlcyBhIENTUyBwcm9wZXJ0eS92YWx1ZSBkZWNsYXJhdGlvbi4gVGhpcyBtaXhpbiBpcyB1c2VkIHRocm91Z2hvdXQgdGhlXG4vLy8gdGhlbWUgcGFja2FnZSBmb3IgY29uc2lzdGVuY3kgZm9yIGR5bmFtaWNhbGx5IHNldHRpbmcgQ1NTIHByb3BlcnR5IHZhbHVlcy5cbi8vL1xuLy8vIFRoaXMgbWl4aW4gbWF5IG9wdGlvbmFsbHkgdGFrZSBhIGZhbGxiYWNrIHZhbHVlLiBGb3IgYWR2YW5jZWQgZmVhdHVyZXMgc3VjaFxuLy8vIGFzIGN1c3RvbSBwcm9wZXJ0aWVzIG9yIENTUyBmdW5jdGlvbnMgbGlrZSBtaW4gYW5kIG1heCwgYSBmYWxsYmFjayB2YWx1ZSBpc1xuLy8vIHJlY29tbWVuZGVkIHRvIHN1cHBvcnQgb2xkZXIgYnJvd3NlcnMuXG4vLy9cbi8vLyBAcGFyYW0ge1N0cmluZ30gJHByb3BlcnR5IC0gVGhlIENTUyBwcm9wZXJ0eSBvZiB0aGUgZGVjbGFyYXRpb24uXG4vLy8gQHBhcmFtIHsqfSAkdmFsdWUgLSBUaGUgdmFsdWUgb2YgdGhlIENTUyBkZWNsYXJhdGlvbi4gVGhlIHZhbHVlIHNob3VsZCBiZVxuLy8vICAgICByZXNvbHZlZCBieSBvdGhlciB0aGVtZSBmdW5jdGlvbnMgZmlyc3QgKGkuZS4gY3VzdG9tIHByb3BlcnR5IE1hcHMgYW5kXG4vLy8gICAgIE1hdGVyaWFsIHRoZW1lIGtleXMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBtaXhpbikuIElmIHRoZSB2YWx1ZSBpc1xuLy8vICAgICBudWxsLCBubyBkZWNsYXJhdGlvbnMgd2lsbCBiZSBlbWl0dGVkLlxuLy8vIEBwYXJhbSB7Kn0gJGZhbGxiYWNrIC0gQW4gb3B0aW9uYWwgZmFsbGJhY2sgdmFsdWUgZm9yIG9sZGVyIGJyb3dzZXJzLiBJZlxuLy8vICAgICBwcm92aWRlZCwgYSBzZWNvbmQgcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24gd2lsbCBiZSBhZGRlZCBiZWZvcmUgdGhlXG4vLy8gICAgIG1haW4gcHJvcGVydHkvdmFsdWUgZGVjbGFyYXRpb24uXG4vLy8gQHBhcmFtIHtNYXB9ICRnc3MgLSBBbiBvcHRpb25hbCBNYXAgb2YgR1NTIGFubm90YXRpb25zIHRvIGFkZC5cbi8vLyBAcGFyYW0ge0Jvb2x9ICRpbXBvcnRhbnQgLSBJZiB0cnVlLCBhZGQgYCFpbXBvcnRhbnRgIHRvIHRoZSBkZWNsYXJhdGlvbi5cbkBtaXhpbiBkZWNsYXJhdGlvbihcbiAgJHByb3BlcnR5LFxuICAkdmFsdWUsXG4gICRmYWxsYmFjay12YWx1ZTogbnVsbCxcbiAgJGdzczogKCksXG4gICRpbXBvcnRhbnQ6IGZhbHNlXG4pIHtcbiAgLy8gTm9ybWFsbHkgc2V0dGluZyBhIG51bGwgdmFsdWUgdG8gYSBwcm9wZXJ0eSB3aWxsIG5vdCBlbWl0IENTUywgc28gbWl4aW5zXG4gIC8vIHdvdWxkbid0IG5lZWQgdG8gY2hlY2sgdGhpcy4gSG93ZXZlciwgU2FzcyB3aWxsIHRocm93IGFuIGVycm9yIGlmIHRoZVxuICAvLyBpbnRlcnBvbGF0ZWQgcHJvcGVydHkgaXMgYSBjdXN0b20gcHJvcGVydHkuXG4gIEBpZiAkdmFsdWUgIT0gbnVsbCB7XG4gICAgJGltcG9ydGFudC1ydWxlOiBpZigkaW1wb3J0YW50LCAnICFpbXBvcnRhbnQnLCAnJyk7XG5cbiAgICBAaWYgJGZhbGxiYWNrLXZhbHVlIGFuZCAkZW5hYmxlLWZhbGxiYWNrLWRlY2xhcmF0aW9ucyB7XG4gICAgICBAaW5jbHVkZSBnc3MuYW5ub3RhdGUoJGdzcyk7XG4gICAgICAjeyRwcm9wZXJ0eX06ICN7JGZhbGxiYWNrLXZhbHVlfSAjeyRpbXBvcnRhbnQtcnVsZX07XG5cbiAgICAgIC8vIEFkZCBAYWx0ZXJuYXRlIHRvIGFubm90YXRpb25zLlxuICAgICAgJGdzczogbWFwLm1lcmdlKFxuICAgICAgICAkZ3NzLFxuICAgICAgICAoXG4gICAgICAgICAgYWx0ZXJuYXRlOiB0cnVlLFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGdzcy5hbm5vdGF0ZSgkZ3NzKTtcbiAgICAjeyRwcm9wZXJ0eX06ICN7JHZhbHVlfSN7JGltcG9ydGFudC1ydWxlfTtcbiAgfVxufVxuXG4vLy8gVW5wYWNrcyBzaG9ydGhhbmQgdmFsdWVzIGZvciBDU1MgcHJvcGVydGllcyAoaS5lLiBsaXN0cyBvZiAxLTMgdmFsdWVzKS5cbi8vLyBJZiBhIGxpc3Qgb2YgNCB2YWx1ZXMgaXMgZ2l2ZW4sIGl0IGlzIHJldHVybmVkIGFzLWlzLlxuLy8vXG4vLy8gRXhhbXBsZXM6XG4vLy9cbi8vLyB1bnBhY2stdmFsdWUoNHB4KSA9PiA0cHggNHB4IDRweCA0cHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCkgPT4gNHB4IDJweCA0cHggMnB4XG4vLy8gdW5wYWNrLXZhbHVlKDRweCAycHggMnB4KSA9PiA0cHggMnB4IDJweCAycHhcbi8vLyB1bnBhY2stdmFsdWUoNHB4IDJweCAwIDJweCkgPT4gNHB4IDJweCAwIDJweFxuLy8vXG4vLy8gQHBhcmFtIHtOdW1iZXIgfCBNYXAgfCBMaXN0fSAkdmFsdWUgLSBMaXN0IG9mIDEgdG8gNCB2YWx1ZSBudW1iZXJzLlxuLy8vIEByZXR1cm4ge0xpc3R9IGEgTGlzdCBvZiA0IHZhbHVlIG51bWJlcnMuXG5AZnVuY3Rpb24gdW5wYWNrLXZhbHVlKCR2YWx1ZSkge1xuICBAaWYgbWV0YS50eXBlLW9mKCR2YWx1ZSkgPT0gJ21hcCcgb3IgbGlzdC5sZW5ndGgoJHZhbHVlKSA9PSAxIHtcbiAgICBAcmV0dXJuICR2YWx1ZSAkdmFsdWUgJHZhbHVlICR2YWx1ZTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDQge1xuICAgIEByZXR1cm4gJHZhbHVlO1xuICB9IEBlbHNlIGlmIGxpc3QubGVuZ3RoKCR2YWx1ZSkgPT0gMyB7XG4gICAgQHJldHVybiBsaXN0Lm50aCgkdmFsdWUsIDEpIGxpc3QubnRoKCR2YWx1ZSwgMikgbGlzdC5udGgoJHZhbHVlLCAzKVxuICAgICAgbGlzdC5udGgoJHZhbHVlLCAyKTtcbiAgfSBAZWxzZSBpZiBsaXN0Lmxlbmd0aCgkdmFsdWUpID09IDIge1xuICAgIEByZXR1cm4gbGlzdC5udGgoJHZhbHVlLCAxKSBsaXN0Lm50aCgkdmFsdWUsIDIpIGxpc3QubnRoKCR2YWx1ZSwgMSlcbiAgICAgIGxpc3QubnRoKCR2YWx1ZSwgMik7XG4gIH1cblxuICBAZXJyb3IgXCJJbnZhbGlkIENTUyBwcm9wZXJ0eSB2YWx1ZTogJyN7JHZhbHVlfScgaXMgbW9yZSB0aGFuIDQgdmFsdWVzXCI7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUpAnimation]
    }
  });
}


/***/ }),

/***/ 90137:
/*!********************************************************!*\
  !*** ./src/app/demo/coming-soon/coming-soon.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComingSoonModule: () => (/* binding */ ComingSoonModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coming-soon-routing.module */ 3526);
/* harmony import */ var _coming_soon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coming-soon.component */ 36157);
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/fury-shared.module */ 27095);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);






class ComingSoonModule {
  static #_ = this.ɵfac = function ComingSoonModule_Factory(t) {
    return new (t || ComingSoonModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: ComingSoonModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComingSoonRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__.FurySharedModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__.FuryCardModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ComingSoonModule, {
    declarations: [_coming_soon_component__WEBPACK_IMPORTED_MODULE_1__.ComingSoonComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _coming_soon_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComingSoonRoutingModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_2__.FurySharedModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__.FuryCardModule]
  });
})();

/***/ }),

/***/ 22541:
/*!***********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faFacebook.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var prefix = 'fab';
var iconName = 'facebook';
var width = 512;
var height = 512;
var aliases = [62000];
var unicode = 'f09a';
var svgPathData = 'M504 256C504 119 393 8 256 8S8 119 8 256c0 123.8 90.69 226.4 209.3 245V327.7h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.3 482.4 504 379.8 504 256z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, aliases, unicode, svgPathData]
};
exports.faFacebook = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 15745:
/*!*********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faGithub.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var prefix = 'fab';
var iconName = 'github';
var width = 496;
var height = 512;
var aliases = [];
var unicode = 'f09b';
var svgPathData = 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, aliases, unicode, svgPathData]
};
exports.faGithub = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 92611:
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faInstagram.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var prefix = 'fab';
var iconName = 'instagram';
var width = 448;
var height = 512;
var aliases = [];
var unicode = 'f16d';
var svgPathData = 'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, aliases, unicode, svgPathData]
};
exports.faInstagram = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 85970:
/*!************************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faPinterest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var prefix = 'fab';
var iconName = 'pinterest';
var width = 496;
var height = 512;
var aliases = [];
var unicode = 'f0d2';
var svgPathData = 'M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, aliases, unicode, svgPathData]
};
exports.faPinterest = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ }),

/***/ 19373:
/*!**********************************************************************!*\
  !*** ./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var prefix = 'fab';
var iconName = 'twitter';
var width = 512;
var height = 512;
var aliases = [];
var unicode = 'f099';
var svgPathData = 'M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z';
exports.definition = {
  prefix: prefix,
  iconName: iconName,
  icon: [width, height, aliases, unicode, svgPathData]
};
exports.faTwitter = exports.definition;
exports.prefix = prefix;
exports.iconName = iconName;
exports.width = width;
exports.height = height;
exports.ligatures = aliases;
exports.unicode = unicode;
exports.svgPathData = svgPathData;
exports.aliases = aliases;

/***/ })

}]);
//# sourceMappingURL=src_app_demo_coming-soon_coming-soon_module_ts.js.map