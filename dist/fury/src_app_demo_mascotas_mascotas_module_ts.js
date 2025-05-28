"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_demo_mascotas_mascotas_module_ts"],{

/***/ 66142:
/*!****************************************************************************************!*\
  !*** ./src/app/demo/mascotas/mascota-create-update/mascota-create-update.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MascotaCreateUpdateComponent: () => (/* binding */ MascotaCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_mascota_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/mascota.service */ 31585);
/* harmony import */ var src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/toast/toast.service */ 77966);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);











class MascotaCreateUpdateComponent {
  constructor(defaults, dialogRef, fb, mascotaService, toast) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.mascotaService = mascotaService;
    this.toast = toast;
    this.mode = 'create';
  }
  ngOnInit() {
    if (this.defaults && this.defaults.id_mascota) {
      this.mode = 'update';
    }
    this.form = this.fb.group({
      id_user: [this.defaults?.id_user || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      id_tipo_mascota: [this.defaults?.id_tipo_mascota || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      id_tamanho: [this.defaults?.id_tamanho || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      edad: [this.defaults?.edad || 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      id_temperamento: [this.defaults?.id_temperamento || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      nombre: [this.defaults?.nombre || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      id_mascota: [this.defaults?.id_mascota || null]
    });
    console.log("payload: ");
    console.log(this.form);
  }
  save() {
    const payload = this.form.value;
    if (this.mode === 'create') {
      this.mascotaService.createMascota(payload).subscribe({
        next: res => {
          this.toast.success('Mascota registrada', 'Registro exitoso');
          this.dialogRef.close(res);
        },
        error: err => {
          this.toast.error('Error al registrar', err?.error?.detail || 'Ocurrió un error');
        }
      });
    } else {
      this.mascotaService.updateMascota(payload).subscribe({
        next: res => {
          this.toast.success('Mascota actualizada', 'Cambios guardados');
          this.dialogRef.close(res);
        },
        error: err => {
          this.toast.error('Error al actualizar', err?.error?.detail || 'No se pudo guardar');
        }
      });
    }
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  static #_ = this.ɵfac = function MascotaCreateUpdateComponent_Factory(t) {
    return new (t || MascotaCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_mascota_service__WEBPACK_IMPORTED_MODULE_0__.MascotaService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: MascotaCreateUpdateComponent,
    selectors: [["fury-mascota-create-update"]],
    decls: 33,
    vars: 4,
    consts: [["mat-dialog-title", ""], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "16px"], ["appearance", "outline"], ["matInput", "", "type", "number", "formControlName", "id_user"], ["matInput", "", "type", "number", "formControlName", "id_tipo_mascota"], ["matInput", "", "type", "number", "formControlName", "id_tamanho"], ["matInput", "", "type", "number", "formControlName", "edad"], ["matInput", "", "type", "number", "formControlName", "id_temperamento"], ["matInput", "", "formControlName", "nombre"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"]],
    template: function MascotaCreateUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "div", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "ID Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 3)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Tipo de Mascota");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-form-field", 3)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Tama\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 3)(17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Edad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-form-field", 3)(21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Temperamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "mat-form-field", 3)(25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-dialog-actions", 10)(29, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MascotaCreateUpdateComponent_Template_button_click_31_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isCreateMode() ? "Registrar Mascota" : "Editar Mascota");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isCreateMode() ? "Registrar" : "Guardar", " ");
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutGapDirective, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 84810:
/*!*************************************************************************************!*\
  !*** ./src/app/demo/mascotas/mascota-create-update/mascota-create-update.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MascotaCreateUpdateModule: () => (/* binding */ MascotaCreateUpdateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 95249);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _mascota_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mascota-create-update.component */ 66142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);









class MascotaCreateUpdateModule {
  static #_ = this.ɵfac = function MascotaCreateUpdateModule_Factory(t) {
    return new (t || MascotaCreateUpdateModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MascotaCreateUpdateModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MascotaCreateUpdateModule, {
    declarations: [_mascota_create_update_component__WEBPACK_IMPORTED_MODULE_0__.MascotaCreateUpdateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialogModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule],
    exports: [_mascota_create_update_component__WEBPACK_IMPORTED_MODULE_0__.MascotaCreateUpdateComponent]
  });
})();

/***/ }),

/***/ 14293:
/*!**********************************************************************!*\
  !*** ./src/app/demo/mascotas/mascota-create-update/mascota.model.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Mascota: () => (/* binding */ Mascota)
/* harmony export */ });
class Mascota {
  constructor(data) {
    this.id_mascota = data.id_mascota || null;
    this.id_user = data.id_user || 0;
    this.id_tipo_mascota = data.id_tipo_mascota || 0;
    this.id_tamanho = data.id_tamanho || 0;
    this.edad = data.edad || 0;
    this.id_temperamento = data.id_temperamento || 0;
    this.nombre = data.nombre || '';
  }
}

/***/ }),

/***/ 16983:
/*!**********************************************************!*\
  !*** ./src/app/demo/mascotas/mascotas-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MascotasRoutingModule: () => (/* binding */ MascotasRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _mascotas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mascotas.component */ 11951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _mascotas_component__WEBPACK_IMPORTED_MODULE_0__.MascotasComponent
}];
class MascotasRoutingModule {
  static #_ = this.ɵfac = function MascotasRoutingModule_Factory(t) {
    return new (t || MascotasRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: MascotasRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MascotasRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 11951:
/*!*****************************************************!*\
  !*** ./src/app/demo/mascotas/mascotas.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MascotasComponent: () => (/* binding */ MascotasComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _mascota_create_update_mascota_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mascota-create-update/mascota-create-update.component */ 66142);
/* harmony import */ var _mascota_create_update_mascota_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mascota-create-update/mascota.model */ 14293);
/* harmony import */ var _src_fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/@fury/animations/fade-in-right.animation */ 83341);
/* harmony import */ var _src_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/@fury/animations/fade-in-up.animation */ 72785);
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/const */ 48684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_mascota_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/mascota.service */ 31585);
/* harmony import */ var src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/toast/toast.service */ 77966);
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loader/loader.service */ 18329);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@fury/shared/list/list.component */ 32283);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.directive */ 16261);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-header.directive */ 34675);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-content.directive */ 85364);




























function MascotasComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 14)(1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MascotasComponent_th_11_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MascotasComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 16)(1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MascotasComponent_td_12_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function MascotasComponent_ng_container_13_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", column_r10.name, " ");
  }
}
function MascotasComponent_ng_container_13_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", row_r15[column_r10.property], " ");
  }
}
function MascotasComponent_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, MascotasComponent_ng_container_13_ng_container_1_th_1_Template, 2, 1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, MascotasComponent_ng_container_13_ng_container_1_td_2_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matColumnDef", column_r10.property);
  }
}
function MascotasComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, MascotasComponent_ng_container_13_ng_container_1_Template, 3, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", column_r10.isModelProperty);
  }
}
function MascotasComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 14);
  }
}
function MascotasComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 16)(1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MascotasComponent_td_16_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "mat-menu", null, 22)(6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MascotasComponent_td_16_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r22);
      const row_r18 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r21.editMascota(row_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MascotasComponent_td_16_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r22);
      const row_r18 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r23.deleteMascota(row_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerFor", _r19);
  }
}
function MascotasComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 24);
  }
}
function MascotasComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 25);
  }
}
const _c0 = function () {
  return ["Gesti\u00F3n"];
};
class MascotasComponent {
  constructor(dialog, mascotaService, toast, loader) {
    this.dialog = dialog;
    this.mascotaService = mascotaService;
    this.toast = toast;
    this.loader = loader;
    this.pageSize = 5;
    this.pageSizeOptions = _shared_const__WEBPACK_IMPORTED_MODULE_4__.PAGE_SIZE_OPTIONS;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.columns = [{
      name: 'Checkbox',
      property: 'checkbox',
      visible: false
    }, {
      name: 'Nombre',
      property: 'nombre',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Edad',
      property: 'edad',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Acciones',
      property: 'actions',
      visible: true
    }];
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  getMascotas() {
    const id_fraccionamiento = 1; // Reemplaza con valor dinámico
    this.mascotaService.getMascotas(id_fraccionamiento).subscribe({
      next: data => {
        const mascotas = data.message.map(m => new _mascota_create_update_mascota_model__WEBPACK_IMPORTED_MODULE_1__.Mascota(m));
        console.log(mascotas);
        this.subject$.next(mascotas);
      },
      error: err => console.error('Error al cargar mascotas', err)
    });
  }
  ngOnInit() {
    this.getMascotas();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(data => !!data)).subscribe(mascotas => {
      this.mascotas = mascotas;
      this.dataSource.data = mascotas;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  createMascota() {
    this.dialog.open(_mascota_create_update_mascota_create_update_component__WEBPACK_IMPORTED_MODULE_0__.MascotaCreateUpdateComponent).afterClosed().subscribe(mascota => {
      if (mascota) {
        this.mascotas.unshift(new _mascota_create_update_mascota_model__WEBPACK_IMPORTED_MODULE_1__.Mascota(mascota));
        this.subject$.next(this.mascotas);
      }
    });
  }
  editMascota(mascota) {
    this.dialog.open(_mascota_create_update_mascota_create_update_component__WEBPACK_IMPORTED_MODULE_0__.MascotaCreateUpdateComponent, {
      data: mascota
    }).afterClosed().subscribe(result => {
      if (result) {
        const index = this.mascotas.findIndex(m => m.id_mascota === result.id_mascota);
        this.mascotas[index] = new _mascota_create_update_mascota_model__WEBPACK_IMPORTED_MODULE_1__.Mascota(result);
        this.subject$.next(this.mascotas);
      }
    });
  }
  deleteMascota(mascota) {
    if (!mascota.id_mascota) {
      this.toast.warning('ID no definido', 'No se puede eliminar esta mascota');
      return;
    }
    const confirmed = confirm(`¿Seguro que deseas eliminar a ${mascota.nombre}?`);
    if (!confirmed) return;
    this.loader.show();
    const id_fraccionamiento = 1; // Reemplaza con dinámico
    this.mascotaService.deleteMascota(id_fraccionamiento, mascota.id_mascota).subscribe({
      next: () => {
        this.mascotas = this.mascotas.filter(m => m.id_mascota !== mascota.id_mascota);
        this.subject$.next(this.mascotas);
        this.toast.success('Mascota eliminada', `${mascota.nombre} fue eliminada correctamente`);
      },
      error: err => {
        this.toast.error('Error al eliminar mascota', err?.error?.detail || 'No se pudo eliminar');
      },
      complete: () => this.loader.hide()
    });
  }
  onFilterChange(value) {
    if (!this.dataSource) return;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function MascotasComponent_Factory(t) {
    return new (t || MascotasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_mascota_service__WEBPACK_IMPORTED_MODULE_5__.MascotaService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: MascotasComponent,
    selectors: [["fury-mascotas"]],
    viewQuery: function MascotasComponent_Query(rf, ctx) {
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
    decls: 20,
    vars: 11,
    consts: [["mode", "card"], ["current", "Mascotas", 3, "crumbs"], ["name", "mascotas", 3, "columns", "filterChange"], [1, "actions"], ["mat-mini-fab", "", "color", "primary", 1, "create", 3, "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "clickable route-animations-elements", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], [3, "click"], ["mat-cell", ""], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["actionsMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable", "route-animations-elements"]],
    template: function MascotasComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("filterChange", function MascotasComponent_Template_fury_list_filterChange_4_listener($event) {
          return ctx.onFilterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function MascotasComponent_Template_button_click_6_listener() {
          return ctx.createMascota();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, MascotasComponent_th_11_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, MascotasComponent_td_12_Template, 2, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](13, MascotasComponent_ng_container_13_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, MascotasComponent_th_15_Template, 1, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, MascotasComponent_td_16_Template, 10, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, MascotasComponent_tr_17_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, MascotasComponent_tr_18_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](19, "mat-paginator", 13);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_8__.ListComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatMiniFabButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__.MatMenuTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_24__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__.MatSortHeader, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_9__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_10__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_11__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_12__.PageLayoutContentDirective],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL21hc2NvdGFzL21hc2NvdGFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3hHQTtFQUNFLGVBQUE7QUFpQkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvdGhlbWluZy9wYWxldHRlXCI7XHJcblxyXG4vKipcclxuICBHZW5lcmFsXHJcbiAqL1xyXG5cclxuJHBhZ2UtbG9hZC1iYWNrZ3JvdW5kOiAjMTMyOTNkO1xyXG4kZWxldmF0aW9uOiAyO1xyXG5cclxuJGNvbG9yLXN1Y2Nlc3M6ICM3Y2IzNDI7XHJcblxyXG4kc3BhY2luZzogMjRweDtcclxuJGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiRwYWRkaW5nLXhsOiA0OHB4O1xyXG4kcGFkZGluZy1sZzogMzJweDtcclxuJHBhZGRpbmc6IDI0cHg7XHJcbiRwYWRkaW5nLW1kOiAxNnB4O1xyXG4kcGFkZGluZy1zbTogMTJweDtcclxuJHBhZGRpbmcteHM6IDhweDtcclxuJHBhZGRpbmcteHhzOiA0cHg7XHJcbiRwYWRkaW5nLTA6IDBweDtcclxuXHJcbiRwYWRkaW5nczogKFxyXG4gICctMCc6ICRwYWRkaW5nLTAsXHJcbiAgLXh4czogJHBhZGRpbmcteHhzLFxyXG4gIC14czogJHBhZGRpbmcteHMsXHJcbiAgLXNtOiAkcGFkZGluZy1zbSxcclxuICAtbWQ6ICRwYWRkaW5nLW1kLFxyXG4gICcnOiAkcGFkZGluZyxcclxuICAtbGc6ICRwYWRkaW5nLWxnLFxyXG4gIC14bDogJHBhZGRpbmcteGwsXHJcbik7XHJcblxyXG4kaWNvbi1zaXplczogKFxyXG4gIC14czogMTRweCxcclxuICAtc206IDE4cHgsXHJcbiAgLW1kOiAyMHB4LFxyXG4gICcnOiAyNHB4LFxyXG4gIC1sZzogMjhweCxcclxuICAteGw6IDMycHhcclxuKTtcclxuXHJcbi8qKlxyXG4gIENhcmRcclxuICovXHJcbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XHJcblxyXG4vKipcclxuICBUb29sYmFyXHJcbiAqL1xyXG4kdG9vbGJhci1oZWlnaHQ6IDY0cHg7XHJcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcclxuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xyXG5cclxuLyoqXHJcbiAgRm9vdGVyXHJcbiAqL1xyXG4kZm9vdGVyLWhlaWdodDogNTZweDtcclxuJGZvb3Rlci16LWluZGV4OiAxMDA7XHJcblxyXG4vLyBTaWRlbmF2XHJcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcclxuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiA3NHB4O1xyXG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuLy8gU2lkZW5hdiBJdGVtXHJcblxyXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcclxuXHJcbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDI6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMSArIDhweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XHJcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xyXG5cclxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xyXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XHJcblxyXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xyXG5cclxuLy8gUGFnZSBMYXlvdXRcclxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XHJcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuLyoqXHJcbiAgTWl4aW5zXHJcbiAqL1xyXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XHJcbkBtaXhpbiBtZWRpYS14cyB7XHJcbiAgQG1lZGlhICN7JG1lZGlhLXhzfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xyXG5AbWl4aW4gbWVkaWEtc20ge1xyXG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICBJbmJveFxyXG4gKi9cclxuJGluYm94LWhlYWRlci1oZWlnaHQ6IDY0cHg7XHJcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xyXG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcclxuJGluYm94LW1haWwtbGlzdC1pdGVtLWhlaWdodDogNTRweDtcclxuIiwiQGltcG9ydCBcInZhclwiO1xuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"],
    data: {
      animation: [_src_fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInRightAnimation, _src_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInUpAnimation]
    }
  });
}


/***/ }),

/***/ 35163:
/*!**************************************************!*\
  !*** ./src/app/demo/mascotas/mascotas.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MascotasModule: () => (/* binding */ MascotasModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _mascotas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mascotas.component */ 11951);
/* harmony import */ var _mascotas_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mascotas-routing.module */ 16983);
/* harmony import */ var _mascota_create_update_mascota_create_update_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mascota-create-update/mascota-create-update.module */ 84810);
/* harmony import */ var _src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/@fury/shared/material-components.module */ 57665);
/* harmony import */ var _src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module */ 98996);
/* harmony import */ var _src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/@fury/fury-shared.module */ 27095);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../src/@fury/shared/list/list.module */ 55429);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);










class MascotasModule {
  static #_ = this.ɵfac = function MascotasModule_Factory(t) {
    return new (t || MascotasModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: MascotasModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_6__.ListModule, _mascotas_routing_module__WEBPACK_IMPORTED_MODULE_1__.MascotasRoutingModule, _mascota_create_update_mascota_create_update_module__WEBPACK_IMPORTED_MODULE_2__.MascotaCreateUpdateModule, _src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule, _src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_5__.FurySharedModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MascotasModule, {
    declarations: [_mascotas_component__WEBPACK_IMPORTED_MODULE_0__.MascotasComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_6__.ListModule, _mascotas_routing_module__WEBPACK_IMPORTED_MODULE_1__.MascotasRoutingModule, _mascota_create_update_mascota_create_update_module__WEBPACK_IMPORTED_MODULE_2__.MascotaCreateUpdateModule, _src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule, _src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule, _src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_5__.FurySharedModule],
    exports: [_mascotas_component__WEBPACK_IMPORTED_MODULE_0__.MascotasComponent]
  });
})();

/***/ }),

/***/ 31585:
/*!*********************************************!*\
  !*** ./src/app/services/mascota.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MascotaService: () => (/* binding */ MascotaService)
/* harmony export */ });
/* harmony import */ var src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api-endpoints */ 27325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);



class MascotaService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.mascotas;
  }
  getMascotas(id_fraccionamiento) {
    return this.http.get(`${this.baseUrl.list}/${id_fraccionamiento}`);
  }
  createMascota(data) {
    return this.http.post(this.baseUrl.create, data);
  }
  updateMascota(data) {
    return this.http.patch(this.baseUrl.update, data);
  }
  deleteMascota(id_fraccionamiento, id_mascota) {
    return this.http.delete(`${this.baseUrl.delete}/${id_fraccionamiento}/${id_mascota}`);
  }
  static #_ = this.ɵfac = function MascotaService_Factory(t) {
    return new (t || MascotaService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MascotaService,
    factory: MascotaService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_demo_mascotas_mascotas_module_ts.js.map