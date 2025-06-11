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
/* harmony export */   GetMascota: () => (/* binding */ GetMascota),
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
class GetMascota {
  constructor(data) {
    this.id_mascota = data.id_mascota || '';
    this.username = data.username || '';
    this.tipo_mascota = data.tipo_mascota || '';
    this.tamanho = data.tamanho || '';
    this.edad = data.edad || '';
    this.temperamento = data.temperamento || '';
    this.nombre = data.nombre || '';
    this.numero_casa = data.numero_casa || '';
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
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _mascota_create_update_mascota_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mascota-create-update/mascota-create-update.component */ 66142);
/* harmony import */ var _mascota_create_update_mascota_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mascota-create-update/mascota.model */ 14293);
/* harmony import */ var _src_fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/@fury/animations/fade-in-right.animation */ 83341);
/* harmony import */ var _src_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/@fury/animations/fade-in-up.animation */ 72785);
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/const */ 48684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_mascota_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/mascota.service */ 31585);
/* harmony import */ var src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/toast/toast.service */ 77966);
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loader/loader.service */ 18329);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ 32333);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@fury/shared/list/list.component */ 32283);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/card */ 18497);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.directive */ 16261);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-header.directive */ 34675);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-content.directive */ 85364);




























function MascotasComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 8)(1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MascotasComponent_div_5_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r2.createMascota());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
  }
}
function MascotasComponent_div_8_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"]("", column_r7.name, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", row_r4[column_r7.property] || "\u2014", " ");
  }
}
function MascotasComponent_div_8_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, MascotasComponent_div_8_ng_container_8_div_1_Template, 4, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", column_r7.isModelProperty);
  }
}
function MascotasComponent_div_8_div_9_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MascotasComponent_div_8_div_9_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r14.editMascota(row_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function MascotasComponent_div_8_div_9_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MascotasComponent_div_8_div_9_button_7_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r19);
      const row_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2).$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](ctx_r17.deleteMascota(row_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}
function MascotasComponent_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 21)(1, "button", 22)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "mat-menu", null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, MascotasComponent_div_8_div_9_button_6_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, MascotasComponent_div_8_div_9_button_7_Template, 2, 0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](5);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("matMenuTriggerFor", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.hasPermission("UPDTMSCTMET01"));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r6.hasPermission("DELTMSCTMET01"));
  }
}
function MascotasComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 10)(1, "mat-card", 11)(2, "div", 12)(3, "div", 13)(4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("error", function MascotasComponent_div_8_Template_img_error_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r21);
      const row_r4 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵresetView"](row_r4.foto_url = "../../assets/img/default-pet.png");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, MascotasComponent_div_8_ng_container_8_Template, 2, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, MascotasComponent_div_8_div_9_Template, 8, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpropertyInterpolate"]("alt", row_r4.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("src", row_r4.foto_url || "../../assets/img/default-pet.png", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" \uD83C\uDFE0 ", row_r4.ubicacion || "Sin casa asignada", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r1.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r1.hasPermission("UPDTMSCTMET01") || ctx_r1.hasPermission("DELTMSCTMET01"));
  }
}
const _c0 = function () {
  return ["Mascotas"];
};
class MascotasComponent {
  constructor(dialog, mascotaService, toast, loader, authService) {
    this.dialog = dialog;
    this.mascotaService = mascotaService;
    this.toast = toast;
    this.loader = loader;
    this.authService = authService;
    this.pageSize = 2;
    this.pageSizeOptions = _shared_const__WEBPACK_IMPORTED_MODULE_4__.PAGE_SIZE_OPTIONS_CARDS;
    this.pageIndex = 0;
    this.paginatedData = [];
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
    this.mascotas = [];
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
      name: 'Teléfono',
      property: 'hola',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Tipo de mascota',
      property: 'tipo_mascota',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Temperamento',
      property: 'temperamento',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Tamaño',
      property: 'tamanho',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Número Casa',
      property: 'numero_casa',
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
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableDataSource();
  }
  ngOnInit() {
    this.getMascotas();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.filter)(data => !!data)).subscribe(mascotas => {
      this.mascotas = mascotas;
      this.dataSource.data = mascotas;
      this.pageIndex = 0;
      this.loadPaginatedData();
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  getMascotas() {
    const id_fraccionamiento = 1; // Cambia a dinámico si es necesario
    this.mascotaService.getMascotas(id_fraccionamiento).subscribe({
      next: data => {
        const mascotas = data.message.map(m => new _mascota_create_update_mascota_model__WEBPACK_IMPORTED_MODULE_1__.GetMascota(m));
        this.subject$.next(mascotas);
      },
      error: err => console.error('Error al cargar mascotas', err)
    });
  }
  createMascota() {
    this.dialog.open(_mascota_create_update_mascota_create_update_component__WEBPACK_IMPORTED_MODULE_0__.MascotaCreateUpdateComponent).afterClosed().subscribe(mascota => {
      if (mascota) {
        this.mascotas.unshift(new _mascota_create_update_mascota_model__WEBPACK_IMPORTED_MODULE_1__.GetMascota(mascota));
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
        this.mascotas[index] = new _mascota_create_update_mascota_model__WEBPACK_IMPORTED_MODULE_1__.GetMascota(result);
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
    const id_fraccionamiento = 1; // Cambia si es necesario
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
    this.pageIndex = 0;
    this.loadPaginatedData();
  }
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadPaginatedData();
  }
  loadPaginatedData() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedData = this.dataSource.filteredData.slice(start, end);
  }
  hasPermission(permiso) {
    return this.authService.hasPermission(permiso);
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function MascotasComponent_Factory(t) {
    return new (t || MascotasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_mascota_service__WEBPACK_IMPORTED_MODULE_5__.MascotaService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: MascotasComponent,
    selectors: [["fury-mascotas"]],
    viewQuery: function MascotasComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    inputs: {
      columns: "columns"
    },
    decls: 10,
    vars: 10,
    consts: [["mode", "card"], ["current", "Lista", 3, "crumbs"], ["name", "mascotas", 3, "columns", "filterChange"], ["class", "actions", 4, "ngIf"], [1, "tabla-body-scroll"], [1, "matriz-mascotas"], ["class", "mascota-item", 4, "ngFor", "ngForOf"], [1, "paginator", 3, "length", "pageSize", "pageSizeOptions", "page"], [1, "actions"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "create", 3, "click"], [1, "mascota-item"], [1, "mat-elevation-z4", "mascota-card-horizontal"], ["fxLayout", "row", "fxFlexFill", "", 1, "card-wrapper"], ["fxFlex", "0 0 180px", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "lado-izquierdo"], [1, "foto-mascota", 3, "src", "alt", "error"], [1, "casa"], ["fxFlex", "1 1 0", "fxLayout", "column", "fxLayoutGap", "6px", "fxLayoutAlign", "center start", 1, "lado-derecho"], [4, "ngFor", "ngForOf"], ["class", "acciones-menu", 4, "ngIf"], ["class", "dato", 4, "ngIf"], [1, "dato"], [1, "acciones-menu"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"]],
    template: function MascotasComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("filterChange", function MascotasComponent_Template_fury_list_filterChange_4_listener($event) {
          return ctx.onFilterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, MascotasComponent_div_5_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, MascotasComponent_div_8_Template, 10, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "mat-paginator", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("page", function MascotasComponent_Template_mat_paginator_page_9_listener($event) {
          return ctx.onPageChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInRight", undefined)("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.hasPermission("CREATUSRMET01"));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.paginatedData);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("length", (ctx.dataSource == null ? null : ctx.dataSource.data.length) || 0)("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_21__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_21__.NgIf, _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_9__.ListComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_23__.MatMiniFabButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_24__.MatMenuTrigger, _angular_material_card__WEBPACK_IMPORTED_MODULE_25__.MatCard, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginator, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.FlexFillDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_26__.DefaultFlexDirective, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_10__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_11__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_12__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_13__.PageLayoutContentDirective],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.tabla-body-scroll[_ngcontent-%COMP%] {\n  max-height: 500px;\n  overflow-y: auto;\n  padding-right: 8px;\n  scrollbar-width: thin;\n  scrollbar-color: #ccc transparent;\n}\n.tabla-body-scroll[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n.tabla-body-scroll[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n}\n\n.matriz-mascotas[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 24px;\n  padding: 16px;\n}\n.matriz-mascotas[_ngcontent-%COMP%]   .mascota-item[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.mascota-card-horizontal[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n  background: #ffffff;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n  transition: box-shadow 0.3s ease;\n  position: relative;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n}\n.mascota-card-horizontal[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);\n}\n.mascota-card-horizontal[_ngcontent-%COMP%]   .card-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  gap: 20px;\n}\n.mascota-card-horizontal[_ngcontent-%COMP%]   .lado-izquierdo[_ngcontent-%COMP%] {\n  min-width: 100px;\n  max-width: 120px;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n}\n.mascota-card-horizontal[_ngcontent-%COMP%]   .lado-izquierdo[_ngcontent-%COMP%]   .foto-mascota[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 16px;\n  object-fit: cover;\n  margin-bottom: 12px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n.mascota-card-horizontal[_ngcontent-%COMP%]   .lado-izquierdo[_ngcontent-%COMP%]   .casa[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  text-align: center;\n}\n.mascota-card-horizontal[_ngcontent-%COMP%]   .lado-derecho[_ngcontent-%COMP%] {\n  padding: 4px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 6px;\n}\n.mascota-card-horizontal[_ngcontent-%COMP%]   .lado-derecho[_ngcontent-%COMP%]   .dato[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #374151;\n}\n.mascota-card-horizontal[_ngcontent-%COMP%]   .lado-derecho[_ngcontent-%COMP%]   .dato[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #111827;\n  font-weight: 600;\n}\n.mascota-card-horizontal[_ngcontent-%COMP%]   .acciones-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n}\n\n.paginator[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL21hc2NvdGFzL21hc2NvdGFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3hHQTtFQUNFLGVBQUE7QUFpQkY7O0FBZEE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxxQkFBQTtFQUNBLGlDQUFBO0FBZ0JGO0FBZEU7RUFDRSxVQUFBO0FBZ0JKO0FBYkU7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0FBZUo7O0FBWEE7RUFDRSxhQUFBO0VBQ0EsNERBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQWNGO0FBWkU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQWNKOztBQVZBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFhRjtBQVhFO0VBQ0UsMkNBQUE7QUFhSjtBQVZFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0FBWUo7QUFURTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVdKO0FBVEk7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0FBV047QUFSSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFVTjtBQU5FO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtBQVFKO0FBTkk7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQVFOO0FBTk07RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFRUjtBQUhFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUtKOztBQUFBO0VBQ0UsZ0JBQUE7QUFHRiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90aGVtaW5nL3BhbGV0dGVcIjtcclxuXHJcbi8qKlxyXG4gIEdlbmVyYWxcclxuICovXHJcblxyXG4kcGFnZS1sb2FkLWJhY2tncm91bmQ6ICMxMzI5M2Q7XHJcbiRlbGV2YXRpb246IDI7XHJcblxyXG4kY29sb3Itc3VjY2VzczogIzdjYjM0MjtcclxuXHJcbiRzcGFjaW5nOiAyNHB4O1xyXG4kYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuJHBhZGRpbmcteGw6IDQ4cHg7XHJcbiRwYWRkaW5nLWxnOiAzMnB4O1xyXG4kcGFkZGluZzogMjRweDtcclxuJHBhZGRpbmctbWQ6IDE2cHg7XHJcbiRwYWRkaW5nLXNtOiAxMnB4O1xyXG4kcGFkZGluZy14czogOHB4O1xyXG4kcGFkZGluZy14eHM6IDRweDtcclxuJHBhZGRpbmctMDogMHB4O1xyXG5cclxuJHBhZGRpbmdzOiAoXHJcbiAgJy0wJzogJHBhZGRpbmctMCxcclxuICAteHhzOiAkcGFkZGluZy14eHMsXHJcbiAgLXhzOiAkcGFkZGluZy14cyxcclxuICAtc206ICRwYWRkaW5nLXNtLFxyXG4gIC1tZDogJHBhZGRpbmctbWQsXHJcbiAgJyc6ICRwYWRkaW5nLFxyXG4gIC1sZzogJHBhZGRpbmctbGcsXHJcbiAgLXhsOiAkcGFkZGluZy14bCxcclxuKTtcclxuXHJcbiRpY29uLXNpemVzOiAoXHJcbiAgLXhzOiAxNHB4LFxyXG4gIC1zbTogMThweCxcclxuICAtbWQ6IDIwcHgsXHJcbiAgJyc6IDI0cHgsXHJcbiAgLWxnOiAyOHB4LFxyXG4gIC14bDogMzJweFxyXG4pO1xyXG5cclxuLyoqXHJcbiAgQ2FyZFxyXG4gKi9cclxuJGNhcmQtaGVhZGVyLWhlaWdodDogNjRweDtcclxuXHJcbi8qKlxyXG4gIFRvb2xiYXJcclxuICovXHJcbiR0b29sYmFyLWhlaWdodDogNjRweDtcclxuJHRvb2xiYXItei1pbmRleDogNTAwO1xyXG4kdG9vbGJhci1idXR0b24td2lkdGg6IDY0cHg7XHJcblxyXG4vKipcclxuICBGb290ZXJcclxuICovXHJcbiRmb290ZXItaGVpZ2h0OiA1NnB4O1xyXG4kZm9vdGVyLXotaW5kZXg6IDEwMDtcclxuXHJcbi8vIFNpZGVuYXZcclxuJHNpZGVuYXYtd2lkdGg6IDI4MHB4O1xyXG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDc0cHg7XHJcbiRzaWRlbmF2LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XHJcblxyXG4vLyBTaWRlbmF2IEl0ZW1cclxuXHJcbiRzaWRlbmF2LWl0ZW0taWNvbi1zaXplOiAyMnB4O1xyXG5cclxuJHNpZGVuYXYtaXRlbS1oZWlnaHQ6IDQ0cHg7XHJcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiRzaWRlbmF2LWl0ZW0tbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMTogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ7XHJcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMjogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxICsgOHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDM6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMiArIDhweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWw0OiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDMgKyA4cHg7XHJcblxyXG4vLyBTaWRlbmF2IHdpZHRoIGNhbiBiZSBjaGFuZ2VkIGluIHNyYy9AZnVyeS9hbmltYXRpb25zL3NpZGVuYXYuYW5pbWF0aW9uLnRzXHJcbiRzaWRlbmF2LXotaW5kZXg6IDcwMDtcclxuXHJcbiRibGluay1zY3JvbGxiYXItd2lkdGg6IDEycHg7XHJcblxyXG4vLyBQYWdlIExheW91dFxyXG4kcGFnZS1sYXlvdXQtaGVpZ2h0OiAyMDBweDtcclxuJHBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XHJcblxyXG4vKipcclxuICBNaXhpbnNcclxuICovXHJcbiRtZWRpYS14czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJztcclxuQG1peGluIG1lZGlhLXhzIHtcclxuICBAbWVkaWEgI3skbWVkaWEteHN9IHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuJG1lZGlhLXNtOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1OTlweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSc7XHJcbkBtaXhpbiBtZWRpYS1zbSB7XHJcbiAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gIEluYm94XHJcbiAqL1xyXG4kaW5ib3gtaGVhZGVyLWhlaWdodDogNjRweDtcclxuJGluYm94LXNlYXJjaGJhci1oZWlnaHQ6IDU0cHg7XHJcbiRpbmJveC1zdGFyLWNvbG9yOiAjZmZjMTA3O1xyXG4kaW5ib3gtbWFpbC1saXN0LWl0ZW0taGVpZ2h0OiA1NHB4O1xyXG4iLCJAaW1wb3J0IFwidmFyXCI7XG5cbi5jbGlja2FibGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YWJsYS1ib2R5LXNjcm9sbCB7XG4gIG1heC1oZWlnaHQ6IDUwMHB4OyAvLyBhanVzdGEgc2Vnw4PCum4gdHUgZGlzZcODwrFvXG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcblxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XG4gIHNjcm9sbGJhci1jb2xvcjogI2NjYyB0cmFuc3BhcmVudDtcblxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB9XG59XG5cbi5tYXRyaXotbWFzY290YXMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMjBweCwgMWZyKSk7XG4gIGdhcDogMjRweDtcbiAgcGFkZGluZzogMTZweDtcblxuICAubWFzY290YS1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxufVxuXG4ubWFzY290YS1jYXJkLWhvcml6b250YWwge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgZWFzZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAmOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAwIDEycHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB9XG5cbiAgLmNhcmQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBnYXA6IDIwcHg7XG4gIH1cblxuICAubGFkby1penF1aWVyZG8ge1xuICAgIG1pbi13aWR0aDogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMjBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG5cbiAgICAuZm90by1tYXNjb3RhIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB9XG5cbiAgICAuY2FzYSB7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBjb2xvcjogIzZiNzI4MDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAubGFkby1kZXJlY2hvIHtcbiAgICBwYWRkaW5nOiA0cHggMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG5cbiAgICAuZGF0byB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzM3NDE1MTtcblxuICAgICAgc3Ryb25nIHtcbiAgICAgICAgY29sb3I6ICMxMTE4Mjc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmFjY2lvbmVzLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEycHg7XG4gICAgcmlnaHQ6IDEycHg7XG4gIH1cbn1cblxuXG4ucGFnaW5hdG9yIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 32333);
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/toast/toast.service */ 77966);





class MascotaService {
  constructor(http, authService, toast) {
    this.http = http;
    this.authService = authService;
    this.toast = toast;
    this.baseUrl = src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.mascotas;
  }
  getMascotas(id_fraccionamiento) {
    if (!this.authService.hasPermission('GETMSCTSMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get(`${this.baseUrl.list}/${id_fraccionamiento}`);
  }
  getMascota(id) {
    if (!this.authService.hasPermission('GETMSCTMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get(this.baseUrl.getById(id));
  }
  createMascota(data) {
    if (!this.authService.hasPermission('CREATMSCTMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.post(this.baseUrl.create, data);
  }
  updateMascota(data) {
    if (!this.authService.hasPermission('UPDTMSCTMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.patch(this.baseUrl.update, data);
  }
  deleteMascota(id_fraccionamiento, id_mascota) {
    if (!this.authService.hasPermission('DELTMSCTMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.delete(`${this.baseUrl.delete}/${id_fraccionamiento}/${id_mascota}`);
  }
  static #_ = this.ɵfac = function MascotaService_Factory(t) {
    return new (t || MascotaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: MascotaService,
    factory: MascotaService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_demo_mascotas_mascotas_module_ts.js.map