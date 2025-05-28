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
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _proveedor_create_update_proveedor_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proveedor-create-update/proveedor-create-update.component */ 60047);
/* harmony import */ var _proveedor_create_update_proveedor_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proveedor-create-update/proveedor.model */ 75669);
/* harmony import */ var src_fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@fury/animations/fade-in-right.animation */ 83341);
/* harmony import */ var src_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@fury/animations/fade-in-up.animation */ 72785);
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/const */ 48684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_proveedor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/proveedor.service */ 21064);
/* harmony import */ var src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/toast/toast.service */ 77966);
/* harmony import */ var src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/loader/loader.service */ 18329);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.directive */ 16261);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-header.directive */ 34675);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-content.directive */ 85364);
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@fury/shared/list/list.component */ 32283);




























function ProveedoresComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 18)(1, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProveedoresComponent_th_11_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function ProveedoresComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 20)(1, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProveedoresComponent_td_12_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function ProveedoresComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 21);
  }
}
function ProveedoresComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("src", row_r12.url_imagen || "assets/img/avatars/" + ctx_r3.getAvatarName(row_r12) + ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function ProveedoresComponent_ng_container_16_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", column_r13.name, "");
  }
}
function ProveedoresComponent_ng_container_16_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", row_r18[column_r13.property], " ");
  }
}
function ProveedoresComponent_ng_container_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProveedoresComponent_ng_container_16_ng_container_1_th_1_Template, 2, 1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, ProveedoresComponent_ng_container_16_ng_container_1_td_2_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matColumnDef", column_r13.property);
  }
}
function ProveedoresComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ProveedoresComponent_ng_container_16_ng_container_1_Template, 3, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", column_r13.isModelProperty);
  }
}
function ProveedoresComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 30);
  }
}
function ProveedoresComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 20)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProveedoresComponent_td_19_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "mat-menu", 32, 33)(6, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProveedoresComponent_td_19_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25);
      const row_r21 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r24.updateProveedor(row_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProveedoresComponent_td_19_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25);
      const row_r21 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r26.deleteProveedor(row_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerFor", _r22);
  }
}
function ProveedoresComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 35);
  }
}
function ProveedoresComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProveedoresComponent_tr_21_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const row_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r28.updateProveedor(row_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["Cat\u00E1logos"];
};
class ProveedoresComponent {
  constructor(dialog, proveedorService, toast, loader, cdr) {
    this.dialog = dialog;
    this.proveedorService = proveedorService;
    this.toast = toast;
    this.loader = loader;
    this.cdr = cdr;
    this.pageSize = 5;
    this.pageSizeOptions = _shared_const__WEBPACK_IMPORTED_MODULE_4__.PAGE_SIZE_OPTIONS;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.columns = [{
      name: 'Checkbox',
      property: 'checkbox',
      visible: false
    }, {
      name: 'Image',
      property: 'image',
      visible: true
    }, {
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
    }, {
      name: 'Actions',
      property: 'actions',
      visible: true
    }];
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
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
  ngOnInit() {
    this.getProveedores();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(data => !!data)).subscribe(proveedores => {
      this.proveedores = proveedores;
      this.dataSource.data = proveedores;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
    const id_fraccionamiento = 1;
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
    if (!this.dataSource) return;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  getAvatarName(row) {
    return String((row.id_proveedor + 1) % 10 || 1);
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function ProveedoresComponent_Factory(t) {
    return new (t || ProveedoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_proveedor_service__WEBPACK_IMPORTED_MODULE_5__.ProveedorService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: ProveedoresComponent,
    selectors: [["fury-proveedores"]],
    viewQuery: function ProveedoresComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    inputs: {
      columns: "columns"
    },
    decls: 23,
    vars: 11,
    consts: [["mode", "card"], ["current", "Proveedores", 3, "crumbs"], ["name", "proveedores", 3, "columns", "filterChange"], [1, "actions"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "create", 3, "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "checkbox"], ["class", "actions-cell", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "actions-cell", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "image"], ["class", "image-cell", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "image-cell", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["class", "actions-cell", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "clickable route-animations-elements", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", 1, "actions-cell"], ["color", "primary", 3, "click"], ["mat-cell", "", 1, "actions-cell"], ["mat-header-cell", "", 1, "image-cell"], ["mat-cell", "", 1, "image-cell"], ["alt", "Proveedor", "width", "40", "height", "40", 2, "object-fit", "cover", "border-radius", "50%", 3, "src"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "actions-cell"], ["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["yPosition", "below", "xPosition", "before"], ["actionsMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable", "route-animations-elements", 3, "click"]],
    template: function ProveedoresComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("filterChange", function ProveedoresComponent_Template_fury_list_filterChange_4_listener($event) {
          return ctx.onFilterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ProveedoresComponent_Template_button_click_6_listener() {
          return ctx.createProveedor();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, ProveedoresComponent_th_11_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, ProveedoresComponent_td_12_Template, 2, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, ProveedoresComponent_th_14_Template, 1, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, ProveedoresComponent_td_15_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, ProveedoresComponent_ng_container_16_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](17, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, ProveedoresComponent_th_18_Template, 1, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, ProveedoresComponent_td_19_Template, 12, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, ProveedoresComponent_tr_20_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, ProveedoresComponent_tr_21_Template, 1, 0, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "mat-paginator", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInRight", undefined)("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatMiniFabButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortHeader, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_8__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_9__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_10__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_11__.PageLayoutContentDirective, _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_12__.ListComponent],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);



class ProveedorService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.proveedores;
  }
  getProveedores() {
    return this.http.get(this.baseUrl.list);
  }
  getProveedor(id) {
    return this.http.get(this.baseUrl.getById(id));
  }
  createProveedor(data) {
    return this.http.post(this.baseUrl.create, data);
  }
  updateProveedor(data) {
    return this.http.patch(this.baseUrl.update, data);
  }
  deleteProveedor(id_proveedor) {
    return this.http.delete(this.baseUrl.delete(id_proveedor));
  }
  static #_ = this.ɵfac = function ProveedorService_Factory(t) {
    return new (t || ProveedorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ProveedorService,
    factory: ProveedorService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_demo_proveedores_proveedores_module_ts.js.map