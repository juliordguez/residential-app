"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_demo_authentication_register_register_module_ts"],{

/***/ 23766:
/*!*************************************************************************!*\
  !*** ./src/app/demo/authentication/register/register-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterRoutingModule: () => (/* binding */ RegisterRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ 61520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent
}];
class RegisterRoutingModule {
  static #_ = this.ɵfac = function RegisterRoutingModule_Factory(t) {
    return new (t || RegisterRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: RegisterRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RegisterRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 61520:
/*!********************************************************************!*\
  !*** ./src/app/demo/authentication/register/register.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@fury/animations/fade-in-up.animation */ 72785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 60702);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);













function RegisterComponent_mat_icon_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_icon_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_icon_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function RegisterComponent_mat_icon_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/login"];
};
class RegisterComponent {
  constructor(router, fb, cd) {
    this.router = router;
    this.fb = fb;
    this.cd = cd;
    this.inputType = 'password';
    this.visible = false;
  }
  ngOnInit() {
    this.form = this.fb.group({
      name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      passwordConfirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  send() {
    // this.router.navigate(['/']);
  }
  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
  static #_ = this.ɵfac = function RegisterComponent_Factory(t) {
    return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RegisterComponent,
    selectors: [["fury-register"]],
    decls: 48,
    vars: 10,
    consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "background-pattern", "page"], [1, "card", "border-radius", "elevation"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "header", "padding", "background-primary"], [1, "logo", "fill-primary-contrast"], ["viewBox", "0 0 33.74 33.99", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M26.83,19.33c-.36.37-.73.71-1.09,1l.31,3.22a5.41,5.41,0,0,1-2.43,5.14L15.72,34l-.67-8.74a6.54,6.54,0,0,1-6.57-6.53L0,18.18l5-7.93a5.41,5.41,0,0,1,5.23-2.54l3.1.31q.49-.55,1.05-1.11C20.78.54,30.82-.62,33.48.26,34.37,2.93,33.2,13,26.83,19.33Zm-.45-12a3.77,3.77,0,1,0,0,5.33A3.77,3.77,0,0,0,26.38,7.36ZM2.82,23.72l3.24-3.24a8.24,8.24,0,0,0,7.11,7.1L10.5,30.25,7.74,33V29.46L2.41,31.23l1.78-5.32H.64Z"], ["fxLayout", "column", "fxLayoutGap", "16px", 1, "padding", 3, "formGroup"], ["fxFlex", "auto", "fxLayout", "column"], ["fxFlex", "grow"], ["matInput", "", "required", "", "formControlName", "name"], ["matInput", "", "required", "", "formControlName", "email"], ["matInput", "", "formControlName", "password", "required", "", 3, "type"], ["type", "button", "mat-icon-button", "", "matSuffix", "", "matTooltip", "Toggle Visibility", 3, "click"], [4, "ngIf"], ["matInput", "", "formControlName", "passwordConfirm", "required", "", 3, "type"], ["fxLayout", "row", "fxLayoutAlign", "center center"], [1, "caption"], ["href", "#"], ["type", "button", "color", "primary", "mat-raised-button", "", 3, "click"], [1, "secondary-text", "text-center"], [3, "routerLink"]],
    template: function RegisterComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 4)(5, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "mat-form-field", 8)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-form-field", 8)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "E-Mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-form-field", 8)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_22_listener() {
          return ctx.toggleVisibility();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RegisterComponent_mat_icon_23_Template, 2, 0, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RegisterComponent_mat_icon_24_Template, 2, 0, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Click the eye to toggle visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-form-field", 8)(28, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Password (Confirm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_31_listener() {
          return ctx.toggleVisibility();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RegisterComponent_mat_icon_32_Template, 2, 0, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, RegisterComponent_mat_icon_33_Template, 2, 0, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Please repeat your password from above");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 15)(37, "mat-checkbox", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "I accept the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "terms and conditions.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_41_listener() {
          return ctx.send();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " CREATE ACCOUNT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " Already have an account?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Sign in here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.inputType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltip, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckbox, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.page[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.card[_ngcontent-%COMP%] {\n  width: 380px;\n}\n@media screen and (max-width: 599px) {\n  .card[_ngcontent-%COMP%] {\n    width: 300px;\n  }\n}\n.card[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2F1dGhlbnRpY2F0aW9uL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3hHQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWlCRjs7QUFkQTtFQUNFLFlBQUE7QUFpQkY7QURvRUU7RUN0RkY7SUFJSSxZQUFBO0VBa0JGO0FBQ0Y7QUFoQkU7RUFDRSwyQkRIWTtFQ0laLDRCREpZO0FDc0JoQjs7QUFkQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBaUJGIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3RoZW1pbmcvcGFsZXR0ZVwiO1xyXG5cclxuLyoqXHJcbiAgR2VuZXJhbFxyXG4gKi9cclxuXHJcbiRwYWdlLWxvYWQtYmFja2dyb3VuZDogIzEzMjkzZDtcclxuJGVsZXZhdGlvbjogMjtcclxuXHJcbiRjb2xvci1zdWNjZXNzOiAjN2NiMzQyO1xyXG5cclxuJHNwYWNpbmc6IDI0cHg7XHJcbiRib3JkZXItcmFkaXVzOiA4cHg7XHJcblxyXG4kcGFkZGluZy14bDogNDhweDtcclxuJHBhZGRpbmctbGc6IDMycHg7XHJcbiRwYWRkaW5nOiAyNHB4O1xyXG4kcGFkZGluZy1tZDogMTZweDtcclxuJHBhZGRpbmctc206IDEycHg7XHJcbiRwYWRkaW5nLXhzOiA4cHg7XHJcbiRwYWRkaW5nLXh4czogNHB4O1xyXG4kcGFkZGluZy0wOiAwcHg7XHJcblxyXG4kcGFkZGluZ3M6IChcclxuICAnLTAnOiAkcGFkZGluZy0wLFxyXG4gIC14eHM6ICRwYWRkaW5nLXh4cyxcclxuICAteHM6ICRwYWRkaW5nLXhzLFxyXG4gIC1zbTogJHBhZGRpbmctc20sXHJcbiAgLW1kOiAkcGFkZGluZy1tZCxcclxuICAnJzogJHBhZGRpbmcsXHJcbiAgLWxnOiAkcGFkZGluZy1sZyxcclxuICAteGw6ICRwYWRkaW5nLXhsLFxyXG4pO1xyXG5cclxuJGljb24tc2l6ZXM6IChcclxuICAteHM6IDE0cHgsXHJcbiAgLXNtOiAxOHB4LFxyXG4gIC1tZDogMjBweCxcclxuICAnJzogMjRweCxcclxuICAtbGc6IDI4cHgsXHJcbiAgLXhsOiAzMnB4XHJcbik7XHJcblxyXG4vKipcclxuICBDYXJkXHJcbiAqL1xyXG4kY2FyZC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xyXG5cclxuLyoqXHJcbiAgVG9vbGJhclxyXG4gKi9cclxuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xyXG4kdG9vbGJhci16LWluZGV4OiA1MDA7XHJcbiR0b29sYmFyLWJ1dHRvbi13aWR0aDogNjRweDtcclxuXHJcbi8qKlxyXG4gIEZvb3RlclxyXG4gKi9cclxuJGZvb3Rlci1oZWlnaHQ6IDU2cHg7XHJcbiRmb290ZXItei1pbmRleDogMTAwO1xyXG5cclxuLy8gU2lkZW5hdlxyXG4kc2lkZW5hdi13aWR0aDogMjgwcHg7XHJcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNzRweDtcclxuJHNpZGVuYXYtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcclxuXHJcbi8vIFNpZGVuYXYgSXRlbVxyXG5cclxuJHNpZGVuYXYtaXRlbS1pY29uLXNpemU6IDIycHg7XHJcblxyXG4kc2lkZW5hdi1pdGVtLWhlaWdodDogNDRweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1yaWdodDogMTZweDtcclxuJHNpZGVuYXYtaXRlbS1tYXJnaW4tcmlnaHQ6IDhweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDEgKyA4cHg7XHJcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMzogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyICsgOHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDQ6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMyArIDhweDtcclxuXHJcbi8vIFNpZGVuYXYgd2lkdGggY2FuIGJlIGNoYW5nZWQgaW4gc3JjL0BmdXJ5L2FuaW1hdGlvbnMvc2lkZW5hdi5hbmltYXRpb24udHNcclxuJHNpZGVuYXYtei1pbmRleDogNzAwO1xyXG5cclxuJGJsaW5rLXNjcm9sbGJhci13aWR0aDogMTJweDtcclxuXHJcbi8vIFBhZ2UgTGF5b3V0XHJcbiRwYWdlLWxheW91dC1oZWlnaHQ6IDIwMHB4O1xyXG4kcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcclxuXHJcbi8qKlxyXG4gIE1peGluc1xyXG4gKi9cclxuJG1lZGlhLXhzOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCknO1xyXG5AbWl4aW4gbWVkaWEteHMge1xyXG4gIEBtZWRpYSAjeyRtZWRpYS14c30ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4kbWVkaWEtc206ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJztcclxuQG1peGluIG1lZGlhLXNtIHtcclxuICBAbWVkaWEgI3skbWVkaWEtc219IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAgSW5ib3hcclxuICovXHJcbiRpbmJveC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xyXG4kaW5ib3gtc2VhcmNoYmFyLWhlaWdodDogNTRweDtcclxuJGluYm94LXN0YXItY29sb3I6ICNmZmMxMDc7XHJcbiRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ6IDU0cHg7XHJcbiIsIkBpbXBvcnQgXCJ2YXJcIjtcclxuXHJcbi5wYWdlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICB3aWR0aDogMzgwcHg7XHJcblxyXG4gIEBpbmNsdWRlIG1lZGlhLXhzIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUpAnimation]
    }
  });
}


/***/ }),

/***/ 99108:
/*!*****************************************************************!*\
  !*** ./src/app/demo/authentication/register/register.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterModule: () => (/* binding */ RegisterModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register-routing.module */ 23766);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component */ 61520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);






class RegisterModule {
  static #_ = this.ɵfac = function RegisterModule_Factory(t) {
    return new (t || RegisterModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
    type: RegisterModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_1__.RegisterRoutingModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RegisterModule, {
    declarations: [_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_1__.RegisterRoutingModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_authentication_register_register_module_ts.js.map