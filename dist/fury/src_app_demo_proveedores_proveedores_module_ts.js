"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_demo_proveedores_proveedores_module_ts"],{

/***/ 60047:
/*!***********************************************************************************************!*\
  !*** ./src/app/demo/proveedores/proveedor-create-update/proveedor-create-update.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedorCreateUpdateComponent: () => (/* binding */ ProveedorCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_proveedor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/proveedor.service */ 21064);
/* harmony import */ var src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/toast/toast.service */ 77966);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);











class ProveedorCreateUpdateComponent {
  constructor(defaults, dialogRef, fb, proveedorService, toast) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.proveedorService = proveedorService;
    this.toast = toast;
    this.mode = 'create';
  }
  ngOnInit() {
    if (this.defaults && this.defaults.id_proveedor) {
      this.mode = 'update';
    } else {
      this.defaults = {};
    }
    this.form = this.fb.group({
      nombre: [this.defaults.nombre || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      tipo_servicio: [this.defaults.tipo_servicio || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      telefono: [this.defaults.telefono || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      correo: [this.defaults.correo || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      url_imagen: [this.defaults.url_imagen || '']
    });
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  save() {
    if (this.isCreateMode()) {
      this.createProveedor();
    } else {
      this.updateProveedor();
    }
  }
  createProveedor() {
    const payload = {
      ...this.form.value,
      id_fraccionamiento: 1
    };
    this.proveedorService.createProveedor(payload).subscribe({
      next: response => {
        this.toast.success('Proveedor creado', 'Se ha creado exitosamente');
        this.dialogRef.close(response);
      },
      error: error => {
        this.toast.error('Error al crear proveedor', error?.error?.detail || 'Error inesperado');
      }
    });
  }
  updateProveedor() {
    const payload = {
      ...this.form.value,
      id_proveedor: this.defaults.id_proveedor
    };
    this.proveedorService.updateProveedor(payload).subscribe({
      next: response => {
        this.toast.success('Proveedor actualizado', 'Cambios guardados correctamente');
        this.dialogRef.close(response);
      },
      error: error => {
        this.toast.error('Error al actualizar proveedor', error?.error?.detail || 'Error inesperado');
      }
    });
  }
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function ProveedorCreateUpdateComponent_Factory(t) {
    return new (t || ProveedorCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_proveedor_service__WEBPACK_IMPORTED_MODULE_0__.ProveedorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: ProveedorCreateUpdateComponent,
    selectors: [["fury-proveedor-create-update"]],
    decls: 29,
    vars: 4,
    consts: [["mat-dialog-title", ""], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "16px"], ["appearance", "outline"], ["matInput", "", "formControlName", "nombre"], ["matInput", "", "formControlName", "tipo_servicio"], ["matInput", "", "formControlName", "telefono", "type", "tel"], ["matInput", "", "formControlName", "correo", "type", "email"], ["matInput", "", "formControlName", "url_imagen"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"]],
    template: function ProveedorCreateUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "div", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 3)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Tipo de Servicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 3)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Tel\u00E9fono");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 3)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Correo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 3)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "URL Imagen");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-dialog-actions", 9)(25, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProveedorCreateUpdateComponent_Template_button_click_27_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isCreateMode() ? "Crear Proveedor" : "Editar Proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isCreateMode() ? "Crear" : "Guardar", " ");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutGapDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 59075:
/*!********************************************************************************************!*\
  !*** ./src/app/demo/proveedores/proveedor-create-update/proveedor-create-update.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedorCreateUpdateModule: () => (/* binding */ ProveedorCreateUpdateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 95249);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _proveedor_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proveedor-create-update.component */ 60047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);










class ProveedorCreateUpdateModule {
  static #_ = this.ɵfac = function ProveedorCreateUpdateModule_Factory(t) {
    return new (t || ProveedorCreateUpdateModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ProveedorCreateUpdateModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProveedorCreateUpdateModule, {
    declarations: [_proveedor_create_update_component__WEBPACK_IMPORTED_MODULE_0__.ProveedorCreateUpdateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule],
    exports: [_proveedor_create_update_component__WEBPACK_IMPORTED_MODULE_0__.ProveedorCreateUpdateComponent]
  });
})();

/***/ }),

/***/ 75669:
/*!*****************************************************************************!*\
  !*** ./src/app/demo/proveedores/proveedor-create-update/proveedor.model.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Proveedor: () => (/* binding */ Proveedor)
/* harmony export */ });
class Proveedor {
  constructor(data) {
    this.id_proveedor = data.id_proveedor;
    this.nombre = data.nombre;
    this.tipo_servicio = data.tipo_servicio;
    this.telefono = data.telefono;
    this.correo = data.correo;
    this.url_imagen = data.url_imagen;
  }
}

/***/ }),

/***/ 19472:
/*!****************************************************************!*\
  !*** ./src/app/demo/proveedores/proveedores-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedoresRoutingModule: () => (/* binding */ ProveedoresRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _proveedores_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proveedores.component */ 16530);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _proveedores_component__WEBPACK_IMPORTED_MODULE_0__.ProveedoresComponent
}];
class ProveedoresRoutingModule {
  static #_ = this.ɵfac = function ProveedoresRoutingModule_Factory(t) {
    return new (t || ProveedoresRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: ProveedoresRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProveedoresRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 16530:
/*!***********************************************************!*\
  !*** ./src/app/demo/proveedores/proveedores.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedoresComponent: () => (/* binding */ ProveedoresComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _proveedor_create_update_proveedor_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proveedor-create-update/proveedor-create-update.component */ 60047);
/* harmony import */ var _proveedor_create_update_proveedor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proveedor-create-update/proveedor.model */ 75669);
/* harmony import */ var src_fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@fury/animations/fade-in-right.animation */ 83341);
/* harmony import */ var src_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@fury/animations/fade-in-up.animation */ 72785);
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/const */ 48684);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_proveedor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/proveedor.service */ 21064);
/* harmony import */ var src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/toast/toast.service */ 77966);
/* harmony import */ var src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/loader/loader.service */ 18329);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ 32333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/card */ 18497);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.directive */ 16261);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-header.directive */ 34675);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-content.directive */ 85364);
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@fury/shared/list/list.component */ 32283);

























function ProveedoresComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 10)(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProveedoresComponent_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r5.createProveedor());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function ProveedoresComponent_div_8_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const row_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r7[column_r11.property] || "\u2014", " ");
  }
}
function ProveedoresComponent_div_8_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, ProveedoresComponent_div_8_ng_container_10_div_1_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", column_r11.isModelProperty);
  }
}
function ProveedoresComponent_div_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 27)(1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProveedoresComponent_div_8_div_16_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().index;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r15.activeMenuIndex = i_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r2);
  }
}
function ProveedoresComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "mat-card", 13)(2, "div", 14)(3, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("error", function ProveedoresComponent_div_8_Template_img_error_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19);
      const row_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](row_r7.url_imagen = "assets/img/default-service.png");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 16)(5, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, ProveedoresComponent_div_8_ng_container_10_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](11, "div", 21)(12, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](13, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](14, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, ProveedoresComponent_div_8_div_16_Template, 4, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("alt", row_r7.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", row_r7.url_imagen || "assets/img/default-service.png", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](row_r7.nombre || "Sin nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](row_r7.tipo_servicio || "Sin tipo asignado");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.hasPermission("UPDTPRVDRMET01") || ctx_r1.hasPermission("DELTPRVDRMET01"));
  }
}
function ProveedoresComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProveedoresComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r20.updateProveedor(ctx_r20.paginatedData[ctx_r20.activeMenuIndex]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function ProveedoresComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function ProveedoresComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r22.deleteProveedor(ctx_r22.paginatedData[ctx_r22.activeMenuIndex]));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["Cat\u00E1logos"];
};
class ProveedoresComponent {
  constructor(dialog, proveedorService, toast, loader, cdr, authService) {
    this.dialog = dialog;
    this.proveedorService = proveedorService;
    this.toast = toast;
    this.loader = loader;
    this.cdr = cdr;
    this.authService = authService;
    this.pageSize = 2;
    this.pageSizeOptions = _shared_const__WEBPACK_IMPORTED_MODULE_4__.PAGE_SIZE_OPTIONS_CARDS;
    this.pageIndex = 0;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.proveedores = [];
    this.paginatedData = [];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource();
    this.columns = [{
      name: 'Nombre',
      property: 'nombre',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Tipo Servicio',
      property: 'tipo_servicio',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Teléfono',
      property: 'telefono',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Correo',
      property: 'correo',
      visible: true,
      isModelProperty: true
    }];
  }
  hasPermission(permiso) {
    return this.authService.hasPermission(permiso);
  }
  ngOnInit() {
    this.getProveedores();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(data => !!data)).subscribe(proveedores => {
      this.proveedores = proveedores;
      this.dataSource.data = proveedores;
      this.updatePaginatedData();
    });
  }
  getProveedores() {
    const id_fraccionamiento = 1;
    this.proveedorService.getProveedores().subscribe({
      next: data => {
        const lista = data.message.map(p => new _proveedor_create_update_proveedor_model__WEBPACK_IMPORTED_MODULE_1__.Proveedor(p));
        this.subject$.next(lista);
      },
      error: err => console.error('Error al cargar proveedores', err)
    });
  }
  updatePaginatedData() {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedData = this.dataSource.filteredData.slice(startIndex, endIndex);
    this.cdr.markForCheck();
  }
  onPageChange(event) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePaginatedData();
  }
  createProveedor() {
    this.dialog.open(_proveedor_create_update_proveedor_create_update_component__WEBPACK_IMPORTED_MODULE_0__.ProveedorCreateUpdateComponent).afterClosed().subscribe(proveedor => {
      if (proveedor) this.getProveedores();
    });
  }
  updateProveedor(proveedor) {
    this.dialog.open(_proveedor_create_update_proveedor_create_update_component__WEBPACK_IMPORTED_MODULE_0__.ProveedorCreateUpdateComponent, {
      data: proveedor
    }).afterClosed().subscribe(actualizado => {
      if (actualizado) this.getProveedores();
    });
  }
  deleteProveedor(proveedor) {
    const confirmed = confirm(`¿Eliminar proveedor ${proveedor.nombre}?`);
    if (!confirmed) return;
    this.loader.show();
    this.proveedorService.deleteProveedor(proveedor.id_proveedor).subscribe({
      next: () => {
        this.getProveedores();
        this.toast.success('Proveedor eliminado', `${proveedor.nombre} fue eliminado correctamente`);
      },
      error: err => {
        this.toast.error('Error al eliminar proveedor', err?.error?.detail || 'No se pudo eliminar');
      },
      complete: () => this.loader.hide()
    });
  }
  onFilterChange(value) {
    this.dataSource.filter = value.trim().toLowerCase();
    this.updatePaginatedData();
  }
  getAvatarName(row) {
    return String((row.id_proveedor + 1) % 10 || 1);
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function ProveedoresComponent_Factory(t) {
    return new (t || ProveedoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_proveedor_service__WEBPACK_IMPORTED_MODULE_5__.ProveedorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: ProveedoresComponent,
    selectors: [["fury-proveedores"]],
    inputs: {
      columns: "columns"
    },
    decls: 14,
    vars: 12,
    consts: [["mode", "card"], ["current", "Proveedores", 3, "crumbs"], ["name", "proveedores", 3, "columns", "filterChange"], ["class", "actions", 4, "ngIf"], [1, "tabla-body-scroll"], [1, "matriz-proveedores"], ["class", "proveedor-item", 4, "ngFor", "ngForOf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], [1, "paginator", 3, "length", "pageSize", "pageSizeOptions", "page"], [1, "actions"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "create", 3, "click"], [1, "proveedor-item"], [1, "mat-elevation-z4", "proveedor-card-moderno"], [1, "foto-proveedor-wrapper"], [1, "foto-proveedor", 3, "src", "alt", "error"], [1, "card-content"], [1, "nombre"], [1, "rol"], [1, "info-extra"], [4, "ngFor", "ngForOf"], [1, "acciones-sociales"], ["href", "#"], [1, "fas", "fa-times"], [1, "fab", "fa-linkedin-in"], ["class", "acciones-menu", 4, "ngIf"], [4, "ngIf"], [1, "acciones-menu"], ["mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["mat-menu-item", "", 3, "click"]],
    template: function ProveedoresComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("filterChange", function ProveedoresComponent_Template_fury_list_filterChange_4_listener($event) {
          return ctx.onFilterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, ProveedoresComponent_div_5_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, ProveedoresComponent_div_8_Template, 17, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "mat-menu", null, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, ProveedoresComponent_button_11_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](12, ProveedoresComponent_button_12_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "mat-paginator", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("page", function ProveedoresComponent_Template_mat_paginator_page_13_listener($event) {
          return ctx.onPageChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInRight", undefined)("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.hasPermission("CREATPRVDRMET01"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.paginatedData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.hasPermission("UPDTPRVDRMET01"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.hasPermission("DELTPRVDRMET01"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("length", (ctx.dataSource == null ? null : ctx.dataSource.data.length) || 0)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatMiniFabButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuTrigger, _angular_material_card__WEBPACK_IMPORTED_MODULE_23__.MatCard, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_24__.MatPaginator, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_10__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_11__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_12__.PageLayoutContentDirective, _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_13__.ListComponent],
    styles: [".tabla-body-scroll[_ngcontent-%COMP%] {\n  max-height: 550px;\n  overflow-y: auto;\n  padding: 8px 12px;\n  scrollbar-width: thin;\n  scrollbar-color: #cbd5e1 transparent;\n}\n.tabla-body-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.tabla-body-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n\n.matriz-proveedores[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n  padding: 16px;\n}\n\n.proveedor-item[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  justify-content: center;\n}\n\n.proveedor-card-moderno[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 340px;\n  background-color: #334155;\n  border-radius: 16px;\n  padding: 16px 16px 24px;\n  color: white;\n  position: relative;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  min-height: 360px;\n}\n.proveedor-card-moderno[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);\n}\n\n.foto-proveedor-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 12px;\n}\n\n.foto-proveedor[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  object-fit: cover;\n  border-radius: 50%;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);\n  background-color: white;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 10px;\n  width: 100%;\n}\n\n.nombre[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  margin: 0;\n}\n\n.rol[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #e2e8f0;\n}\n\n.info-extra[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-align: center;\n  width: 100%;\n  padding: 0 8px;\n}\n\n.acciones-sociales[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 12px;\n}\n.acciones-sociales[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 1.2rem;\n}\n.acciones-sociales[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n\n.acciones-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVtby9wcm92ZWVkb3Jlcy9wcm92ZWVkb3Jlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0Esb0NBQUE7QUFBRjtBQUVFO0VBQ0UsVUFBQTtBQUFKO0FBR0U7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFGRjtBQUlFO0VBQ0UsMENBQUE7QUFGSjs7QUFNQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHVCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBSEY7QUFLRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUhKO0FBS0k7RUFDRSxZQUFBO0FBSE47O0FBUUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBTEYiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGEtYm9keS1zY3JvbGwge1xuICBtYXgtaGVpZ2h0OiA1NTBweDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogOHB4IDEycHg7XG5cbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xuICBzY3JvbGxiYXItY29sb3I6ICNjYmQ1ZTEgdHJhbnNwYXJlbnQ7XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiA2cHg7XG4gIH1cblxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxufVxuXG4ubWF0cml6LXByb3ZlZWRvcmVzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzIwcHgsIDFmcikpO1xuICBnYXA6IDI0cHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5wcm92ZWVkb3ItaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wcm92ZWVkb3ItY2FyZC1tb2Rlcm5vIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMzQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzQxNTU7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHBhZGRpbmc6IDE2cHggMTZweCAyNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIG1pbi1oZWlnaHQ6IDM2MHB4O1xuXG4gICY6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6IDAgMTJweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxufVxuXG4uZm90by1wcm92ZWVkb3Itd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZm90by1wcm92ZWVkb3Ige1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ub21icmUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucm9sIHtcbiAgZm9udC1zaXplOiAwLjk1cmVtO1xuICBjb2xvcjogI2UyZThmMDtcbn1cblxuLmluZm8tZXh0cmEge1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCA4cHg7XG59XG5cbi5hY2Npb25lcy1zb2NpYWxlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG5cbiAgYSB7XG4gICAgY29sb3I6ICM5NGEzYjg7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuLmFjY2lvbmVzLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"],
    data: {
      animation: [src_fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInRightAnimation, src_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInUpAnimation]
    }
  });
}


/***/ }),

/***/ 51438:
/*!********************************************************!*\
  !*** ./src/app/demo/proveedores/proveedores.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedoresModule: () => (/* binding */ ProveedoresModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@fury/shared/material-components.module */ 57665);
/* harmony import */ var src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@fury/shared/breadcrumbs/breadcrumbs.module */ 98996);
/* harmony import */ var src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@fury/shared/list/list.module */ 55429);
/* harmony import */ var src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@fury/fury-shared.module */ 27095);
/* harmony import */ var _proveedores_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proveedores.component */ 16530);
/* harmony import */ var _proveedor_create_update_proveedor_create_update_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proveedor-create-update/proveedor-create-update.module */ 59075);
/* harmony import */ var _proveedores_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proveedores-routing.module */ 19472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);










class ProveedoresModule {
  static #_ = this.ɵfac = function ProveedoresModule_Factory(t) {
    return new (t || ProveedoresModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: ProveedoresModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__.FurySharedModule, src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsModule, src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_2__.ListModule, _proveedor_create_update_proveedor_create_update_module__WEBPACK_IMPORTED_MODULE_5__.ProveedorCreateUpdateModule, _proveedores_routing_module__WEBPACK_IMPORTED_MODULE_6__.ProveedoresRoutingModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ProveedoresModule, {
    declarations: [_proveedores_component__WEBPACK_IMPORTED_MODULE_4__.ProveedoresComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__.FurySharedModule, src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_1__.BreadcrumbsModule, src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_2__.ListModule, _proveedor_create_update_proveedor_create_update_module__WEBPACK_IMPORTED_MODULE_5__.ProveedorCreateUpdateModule, _proveedores_routing_module__WEBPACK_IMPORTED_MODULE_6__.ProveedoresRoutingModule],
    exports: [_proveedores_component__WEBPACK_IMPORTED_MODULE_4__.ProveedoresComponent]
  });
})();

/***/ }),

/***/ 21064:
/*!***********************************************!*\
  !*** ./src/app/services/proveedor.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProveedorService: () => (/* binding */ ProveedorService)
/* harmony export */ });
/* harmony import */ var src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api-endpoints */ 27325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 32333);
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/toast/toast.service */ 77966);





class ProveedorService {
  constructor(http, authService, toast) {
    this.http = http;
    this.authService = authService;
    this.toast = toast;
    this.baseUrl = src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.proveedores;
  }
  getProveedores() {
    if (!this.authService.hasPermission('GETPRVDRSMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get(this.baseUrl.list);
  }
  getProveedor(id) {
    if (!this.authService.hasPermission('GETPRVDRMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get(this.baseUrl.getById(id));
  }
  createProveedor(data) {
    if (!this.authService.hasPermission('CREATPRVDRMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.post(this.baseUrl.create, data);
  }
  updateProveedor(data) {
    if (!this.authService.hasPermission('UPDTPRVDRMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.patch(this.baseUrl.update, data);
  }
  deleteProveedor(id_proveedor) {
    if (!this.authService.hasPermission('DELTPRVDRMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.delete(this.baseUrl.delete(id_proveedor));
  }
  static #_ = this.ɵfac = function ProveedorService_Factory(t) {
    return new (t || ProveedorService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: ProveedorService,
    factory: ProveedorService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_demo_proveedores_proveedores_module_ts.js.map