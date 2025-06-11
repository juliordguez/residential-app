"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_demo_noticias_noticias_module_ts"],{

/***/ 54886:
/*!****************************************************************************************!*\
  !*** ./src/app/demo/noticias/noticia-create-update/noticia-create-update.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoticiaCreateUpdateComponent: () => (/* binding */ NoticiaCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_noticia_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/noticia.service */ 45682);
/* harmony import */ var src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/toast/toast.service */ 77966);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ 82226);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);












class NoticiaCreateUpdateComponent {
  constructor(defaults, dialogRef, fb, noticiaService, toast) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.noticiaService = noticiaService;
    this.toast = toast;
    this.mode = 'create';
  }
  ngOnInit() {
    this.mode = this.defaults && this.defaults.id_noticia ? 'update' : 'create';
    this.defaults = this.defaults || {};
    this.form = this.fb.group({
      titulo: [this.defaults.titulo || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      contenido: [this.defaults.contenido || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      categoria: [this.defaults.categoria || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      prioridad: [this.defaults.prioridad || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      estado: [this.defaults.estado || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      fecha_expiracion: [this.defaults.fecha_expiracion || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
    });
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  save() {
    if (this.form.invalid) return;
    this.isCreateMode() ? this.createNoticia() : this.updateNoticia();
  }
  createNoticia() {
    const payload = {
      ...this.form.value,
      id_fraccionamiento: 1
    };
    this.noticiaService.createNoticia(payload).subscribe({
      next: () => {
        this.toast.success('Noticia creada', 'Se ha creado exitosamente');
        this.dialogRef.close(true);
      },
      error: error => {
        this.toast.error('Error al crear noticia', error?.error?.detail || 'Error inesperado');
      }
    });
  }
  updateNoticia() {
    const body = {
      ...this.form.value,
      id_noticia: this.defaults.id_noticia
    };
    this.noticiaService.updateNoticia(body).subscribe({
      next: () => {
        this.toast.success('Noticia actualizada', 'Cambios guardados correctamente');
        this.dialogRef.close(true);
      },
      error: error => {
        this.toast.error('Error al actualizar noticia', error?.error?.detail || 'No se pudo actualizar');
      }
    });
  }
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function NoticiaCreateUpdateComponent_Factory(t) {
    return new (t || NoticiaCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_noticia_service__WEBPACK_IMPORTED_MODULE_0__.NoticiaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: NoticiaCreateUpdateComponent,
    selectors: [["fury-noticia-create-update"]],
    decls: 36,
    vars: 6,
    consts: [["mat-dialog-title", ""], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "16px"], ["appearance", "outline"], ["matInput", "", "formControlName", "titulo"], ["matInput", "", "formControlName", "contenido", "rows", "4"], ["matInput", "", "formControlName", "estado"], ["matInput", "", "formControlName", "categoria"], ["matInput", "", "formControlName", "prioridad"], ["matInput", "", "formControlName", "fecha_expiracion", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"]],
    template: function NoticiaCreateUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "div", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "T\u00EDtulo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 3)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Contenido");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 3)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 3)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Categor\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 3)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Prioridad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 3)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Fecha de Expiraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 9)(28, "mat-datepicker-toggle", 10)(29, "mat-datepicker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "mat-dialog-actions", 12)(32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoticiaCreateUpdateComponent_Template_button_click_32_listener() {
          return ctx.close();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NoticiaCreateUpdateComponent_Template_button_click_34_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isCreateMode() ? "Crear Noticia" : "Editar Noticia");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isCreateMode() ? "Crear" : "Actualizar", " ");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__.MatDatepickerToggle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutGapDirective],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 67014:
/*!*************************************************************************************!*\
  !*** ./src/app/demo/noticias/noticia-create-update/noticia-create-update.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoticiaCreateUpdateModule: () => (/* binding */ NoticiaCreateUpdateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _noticia_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticia-create-update.component */ 54886);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/@fury/shared/material-components.module */ 57665);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ 95249);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ 92106);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);












class NoticiaCreateUpdateModule {
  static #_ = this.ɵfac = function NoticiaCreateUpdateModule_Factory(t) {
    return new (t || NoticiaCreateUpdateModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: NoticiaCreateUpdateModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NoticiaCreateUpdateModule, {
    declarations: [_noticia_create_update_component__WEBPACK_IMPORTED_MODULE_0__.NoticiaCreateUpdateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__.FlexLayoutModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__.MatRadioModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelectModule],
    exports: [_noticia_create_update_component__WEBPACK_IMPORTED_MODULE_0__.NoticiaCreateUpdateComponent]
  });
})();

/***/ }),

/***/ 70136:
/*!**********************************************************************!*\
  !*** ./src/app/demo/noticias/noticia-create-update/noticia.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Noticia: () => (/* binding */ Noticia)
/* harmony export */ });
class Noticia {
  constructor(data) {
    this.id_noticia = data.id_noticia;
    this.titulo = data.titulo;
    this.contenido = data.contenido;
    this.fecha_expiracion = data.fecha_expiracion;
    this.categoria = data.categoria;
    this.prioridad = data.prioridad;
    this.estado = data.estado;
  }
}

/***/ }),

/***/ 56433:
/*!**********************************************************!*\
  !*** ./src/app/demo/noticias/noticias-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoticiasRoutingModule: () => (/* binding */ NoticiasRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _noticias_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias.component */ 46996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _noticias_component__WEBPACK_IMPORTED_MODULE_0__.NoticiasComponent
}];
class NoticiasRoutingModule {
  static #_ = this.ɵfac = function NoticiasRoutingModule_Factory(t) {
    return new (t || NoticiasRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NoticiasRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NoticiasRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 46996:
/*!*****************************************************!*\
  !*** ./src/app/demo/noticias/noticias.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoticiasComponent: () => (/* binding */ NoticiasComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _noticia_create_update_noticia_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticia-create-update/noticia-create-update.component */ 54886);
/* harmony import */ var _noticia_create_update_noticia_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticia-create-update/noticia.model */ 70136);
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/const */ 48684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_noticia_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/noticia.service */ 45682);
/* harmony import */ var src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/toast/toast.service */ 77966);
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/loader/loader.service */ 18329);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth.service */ 32333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.directive */ 16261);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-header.directive */ 34675);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-content.directive */ 85364);
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@fury/shared/list/list.component */ 32283);



























function NoticiasComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 13)(1, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NoticiasComponent_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r8.createNoticia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
  }
}
function NoticiasComponent_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function NoticiasComponent_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
function NoticiasComponent_ng_container_10_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](column_r11.name);
  }
}
function NoticiasComponent_ng_container_10_ng_container_1_td_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const row_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const column_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](2, 1, row_r16[column_r11.property], "yyyy-MM-dd HH:mm"), " ");
  }
}
function NoticiasComponent_ng_container_10_ng_container_1_td_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
  }
  if (rf & 2) {
    const row_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const column_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", row_r16[column_r11.property], " ");
  }
}
function NoticiasComponent_ng_container_10_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, NoticiasComponent_ng_container_10_ng_container_1_td_2_ng_container_1_Template, 3, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, NoticiasComponent_ng_container_10_ng_container_1_td_2_ng_template_2_Template, 1, 1, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    const column_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r14.isDate(row_r16[column_r11.property]))("ngIfElse", _r18);
  }
}
function NoticiasComponent_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, NoticiasComponent_ng_container_10_ng_container_1_th_1_Template, 2, 1, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, NoticiasComponent_ng_container_10_ng_container_1_td_2_Template, 4, 2, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matColumnDef", column_r11.property);
  }
}
function NoticiasComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, NoticiasComponent_ng_container_10_ng_container_1_Template, 3, 1, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", column_r11.isModelProperty);
  }
}
function NoticiasComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "th", 15);
  }
}
function NoticiasComponent_td_13_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NoticiasComponent_td_13_button_1_Template_button_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matMenuTriggerFor", _r28);
  }
}
function NoticiasComponent_td_13_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NoticiasComponent_td_13_ng_container_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r34);
      const row_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r32.updateNoticia(row_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}
function NoticiasComponent_td_13_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NoticiasComponent_td_13_ng_container_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r37);
      const row_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r35.deleteNoticia(row_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }
}
function NoticiasComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, NoticiasComponent_td_13_button_1_Template, 3, 1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-menu", null, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, NoticiasComponent_td_13_ng_container_4_Template, 4, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, NoticiasComponent_td_13_ng_container_5_Template, 4, 0, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.hasPermission("DELTNTCMET01") || ctx_r5.hasPermission("UPDTNTCMET01"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.hasPermission("UPDTNTCMET01"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r5.hasPermission("DELTNTCMET01"));
  }
}
function NoticiasComponent_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 29);
  }
}
function NoticiasComponent_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function NoticiasComponent_tr_15_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r40);
      const row_r38 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r39.hasPermission("UPDTNTCMET01") && ctx_r39.updateNoticia(row_r38));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["Gesti\u00F3n"];
};
class NoticiasComponent {
  constructor(dialog, noticiaService, toast, loader, authService) {
    this.dialog = dialog;
    this.noticiaService = noticiaService;
    this.toast = toast;
    this.loader = loader;
    this.authService = authService;
    this.pageSize = 5;
    this.pageSizeOptions = _shared_const__WEBPACK_IMPORTED_MODULE_2__.PAGE_SIZE_OPTIONS;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.columns = [{
      name: 'Checkbox',
      property: 'checkbox',
      visible: false
    }, {
      name: 'Título',
      property: 'titulo',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Categoría',
      property: 'categoria',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Prioridad',
      property: 'prioridad',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Expira',
      property: 'fecha_expiracion',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Acciones',
      property: 'actions',
      visible: true
    }];
  }
  hasPermission(permiso) {
    return this.authService.hasPermission(permiso);
  }
  isDate(value) {
    return typeof value === 'string' && !isNaN(Date.parse(value)) && value.includes('T') // Esto ayuda a filtrar valores ISO como "2025-05-20T23:59:59"
    ;
  }

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  getNoticias() {
    this.noticiaService.getNoticias().subscribe({
      next: data => {
        const noticias = data.message.map(n => new _noticia_create_update_noticia_model__WEBPACK_IMPORTED_MODULE_1__.Noticia(n));
        this.subject$.next(noticias);
      },
      error: err => console.error('Error al cargar noticias', err)
    });
  }
  ngOnInit() {
    this.getNoticias();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.filter)(data => !!data)).subscribe(noticias => {
      this.noticias = noticias;
      this.dataSource.data = noticias;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  createNoticia() {
    this.dialog.open(_noticia_create_update_noticia_create_update_component__WEBPACK_IMPORTED_MODULE_0__.NoticiaCreateUpdateComponent).afterClosed().subscribe(noticia => {
      if (noticia) this.getNoticias();
    });
  }
  updateNoticia(noticia) {
    this.dialog.open(_noticia_create_update_noticia_create_update_component__WEBPACK_IMPORTED_MODULE_0__.NoticiaCreateUpdateComponent, {
      data: noticia
    }).afterClosed().subscribe(updated => {
      if (updated) this.getNoticias();
    });
  }
  deleteNoticia(noticia) {
    if (!noticia.id_noticia) {
      this.toast.warning('ID no definido', 'No se puede eliminar esta noticia');
      return;
    }
    const confirmed = confirm(`¿Seguro que deseas eliminar la noticia "${noticia.titulo}"?`);
    if (!confirmed) return;
    this.loader.show();
    this.noticiaService.deleteNoticia(noticia.id_noticia).subscribe({
      next: () => {
        this.getNoticias();
        this.toast.success('Noticia eliminada', `"${noticia.titulo}" fue eliminada correctamente`);
      },
      error: err => {
        this.toast.error('Error al eliminar noticia', err?.error?.detail || 'No se pudo eliminar');
      },
      complete: () => this.loader.hide()
    });
  }
  onFilterChange(value) {
    if (!this.dataSource) return;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function NoticiasComponent_Factory(t) {
    return new (t || NoticiasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_noticia_service__WEBPACK_IMPORTED_MODULE_3__.NoticiaService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
    type: NoticiasComponent,
    selectors: [["fury-noticias"]],
    viewQuery: function NoticiasComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    inputs: {
      columns: "columns"
    },
    decls: 17,
    vars: 12,
    consts: [["mode", "card"], ["current", "Noticias", 3, "crumbs"], ["name", "noticias", 3, "columns", "filterChange"], ["class", "actions", 4, "ngIf"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "clickable route-animations-elements", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize", "pageSizeOptions"], [1, "actions"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "create", 3, "click"], ["mat-header-cell", ""], ["color", "primary"], ["mat-cell", ""], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], [4, "ngIf", "ngIfElse"], ["noFormato", ""], ["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor", "click", 4, "ngIf"], ["actionsMenu", "matMenu"], [4, "ngIf"], ["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable", "route-animations-elements", 3, "click"]],
    template: function NoticiasComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("filterChange", function NoticiasComponent_Template_fury_list_filterChange_4_listener($event) {
          return ctx.onFilterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, NoticiasComponent_div_5_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, NoticiasComponent_th_8_Template, 2, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, NoticiasComponent_td_9_Template, 2, 0, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, NoticiasComponent_ng_container_10_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](11, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](12, NoticiasComponent_th_12_Template, 1, 0, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, NoticiasComponent_td_13_Template, 6, 3, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, NoticiasComponent_tr_14_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, NoticiasComponent_tr_15_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@fadeInRight", undefined)("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.hasPermission("CREATNTCMET01"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatMiniFabButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__.MatMenuTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_23__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_18__.MatSortHeader, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_8__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_9__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_10__.PageLayoutContentDirective, _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_11__.ListComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL25vdGljaWFzL25vdGljaWFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3hHQTtFQUNFLGVBQUE7QUFpQkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvdGhlbWluZy9wYWxldHRlXCI7XHJcblxyXG4vKipcclxuICBHZW5lcmFsXHJcbiAqL1xyXG5cclxuJHBhZ2UtbG9hZC1iYWNrZ3JvdW5kOiAjMTMyOTNkO1xyXG4kZWxldmF0aW9uOiAyO1xyXG5cclxuJGNvbG9yLXN1Y2Nlc3M6ICM3Y2IzNDI7XHJcblxyXG4kc3BhY2luZzogMjRweDtcclxuJGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiRwYWRkaW5nLXhsOiA0OHB4O1xyXG4kcGFkZGluZy1sZzogMzJweDtcclxuJHBhZGRpbmc6IDI0cHg7XHJcbiRwYWRkaW5nLW1kOiAxNnB4O1xyXG4kcGFkZGluZy1zbTogMTJweDtcclxuJHBhZGRpbmcteHM6IDhweDtcclxuJHBhZGRpbmcteHhzOiA0cHg7XHJcbiRwYWRkaW5nLTA6IDBweDtcclxuXHJcbiRwYWRkaW5nczogKFxyXG4gICctMCc6ICRwYWRkaW5nLTAsXHJcbiAgLXh4czogJHBhZGRpbmcteHhzLFxyXG4gIC14czogJHBhZGRpbmcteHMsXHJcbiAgLXNtOiAkcGFkZGluZy1zbSxcclxuICAtbWQ6ICRwYWRkaW5nLW1kLFxyXG4gICcnOiAkcGFkZGluZyxcclxuICAtbGc6ICRwYWRkaW5nLWxnLFxyXG4gIC14bDogJHBhZGRpbmcteGwsXHJcbik7XHJcblxyXG4kaWNvbi1zaXplczogKFxyXG4gIC14czogMTRweCxcclxuICAtc206IDE4cHgsXHJcbiAgLW1kOiAyMHB4LFxyXG4gICcnOiAyNHB4LFxyXG4gIC1sZzogMjhweCxcclxuICAteGw6IDMycHhcclxuKTtcclxuXHJcbi8qKlxyXG4gIENhcmRcclxuICovXHJcbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XHJcblxyXG4vKipcclxuICBUb29sYmFyXHJcbiAqL1xyXG4kdG9vbGJhci1oZWlnaHQ6IDY0cHg7XHJcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcclxuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xyXG5cclxuLyoqXHJcbiAgRm9vdGVyXHJcbiAqL1xyXG4kZm9vdGVyLWhlaWdodDogNTZweDtcclxuJGZvb3Rlci16LWluZGV4OiAxMDA7XHJcblxyXG4vLyBTaWRlbmF2XHJcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcclxuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiA3NHB4O1xyXG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuLy8gU2lkZW5hdiBJdGVtXHJcblxyXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcclxuXHJcbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDI6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMSArIDhweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XHJcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xyXG5cclxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xyXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XHJcblxyXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xyXG5cclxuLy8gUGFnZSBMYXlvdXRcclxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XHJcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuLyoqXHJcbiAgTWl4aW5zXHJcbiAqL1xyXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XHJcbkBtaXhpbiBtZWRpYS14cyB7XHJcbiAgQG1lZGlhICN7JG1lZGlhLXhzfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xyXG5AbWl4aW4gbWVkaWEtc20ge1xyXG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICBJbmJveFxyXG4gKi9cclxuJGluYm94LWhlYWRlci1oZWlnaHQ6IDY0cHg7XHJcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xyXG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcclxuJGluYm94LW1haWwtbGlzdC1pdGVtLWhlaWdodDogNTRweDtcclxuIiwiQGltcG9ydCBcInZhclwiO1xuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 5482:
/*!**************************************************!*\
  !*** ./src/app/demo/noticias/noticias.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoticiasModule: () => (/* binding */ NoticiasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _noticias_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./noticias.component */ 46996);
/* harmony import */ var _noticias_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noticias-routing.module */ 56433);
/* harmony import */ var src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@fury/shared/material-components.module */ 57665);
/* harmony import */ var src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@fury/fury-shared.module */ 27095);
/* harmony import */ var src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@fury/shared/breadcrumbs/breadcrumbs.module */ 98996);
/* harmony import */ var src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@fury/shared/list/list.module */ 55429);
/* harmony import */ var _noticia_create_update_noticia_create_update_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./noticia-create-update/noticia-create-update.module */ 67014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);









class NoticiasModule {
  static #_ = this.ɵfac = function NoticiasModule_Factory(t) {
    return new (t || NoticiasModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: NoticiasModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _noticias_routing_module__WEBPACK_IMPORTED_MODULE_1__.NoticiasRoutingModule, src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__.FurySharedModule, src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule, src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_5__.ListModule, _noticia_create_update_noticia_create_update_module__WEBPACK_IMPORTED_MODULE_6__.NoticiaCreateUpdateModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](NoticiasModule, {
    declarations: [_noticias_component__WEBPACK_IMPORTED_MODULE_0__.NoticiasComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _noticias_routing_module__WEBPACK_IMPORTED_MODULE_1__.NoticiasRoutingModule, src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__.FurySharedModule, src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule, src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_5__.ListModule, _noticia_create_update_noticia_create_update_module__WEBPACK_IMPORTED_MODULE_6__.NoticiaCreateUpdateModule],
    exports: [_noticias_component__WEBPACK_IMPORTED_MODULE_0__.NoticiasComponent]
  });
})();

/***/ }),

/***/ 45682:
/*!*********************************************!*\
  !*** ./src/app/services/noticia.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NoticiaService: () => (/* binding */ NoticiaService)
/* harmony export */ });
/* harmony import */ var src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api-endpoints */ 27325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 32333);
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/toast/toast.service */ 77966);





class NoticiaService {
  constructor(http, authService, toast) {
    this.http = http;
    this.authService = authService;
    this.toast = toast;
    this.baseUrl = src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.noticias;
  }
  getNoticias() {
    if (!this.authService.hasPermission('GETNTCSMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get(this.baseUrl.list);
  }
  getNoticia(id) {
    if (!this.authService.hasPermission('GETNTCMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get(this.baseUrl.getById(id));
  }
  createNoticia(data) {
    if (!this.authService.hasPermission('CREATNTCMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.post(this.baseUrl.create, data);
  }
  updateNoticia(data) {
    if (!this.authService.hasPermission('UPDTNTCMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.patch(this.baseUrl.update, data);
  }
  deleteNoticia(id_noticia) {
    if (!this.authService.hasPermission('DELTNTCMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.delete(this.baseUrl.delete(id_noticia));
  }
  static #_ = this.ɵfac = function NoticiaService_Factory(t) {
    return new (t || NoticiaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: NoticiaService,
    factory: NoticiaService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_demo_noticias_noticias_module_ts.js.map