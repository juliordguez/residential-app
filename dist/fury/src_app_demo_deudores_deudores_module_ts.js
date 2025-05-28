"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_demo_deudores_deudores_module_ts"],{

/***/ 81032:
/*!**************************************************************************************!*\
  !*** ./src/app/demo/deudores/deudor-create-update/deudor-create-update.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeudorCreateUpdateComponent: () => (/* binding */ DeudorCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_deudor_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/deudor.service */ 45380);
/* harmony import */ var _services_user_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.services */ 37048);
/* harmony import */ var src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/toast/toast.service */ 77966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 55309);















function DeudorCreateUpdateComponent_mat_form_field_12_mat_option_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const user_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", user_r2.id_user);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", user_r2.username, " ");
  }
}
function DeudorCreateUpdateComponent_mat_form_field_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-form-field", 3)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-select", 10)(4, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "-- Selecciona un usuario --");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DeudorCreateUpdateComponent_mat_form_field_12_mat_option_6_Template, 2, 2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.usuarios);
  }
}
class DeudorCreateUpdateComponent {
  constructor(defaults, dialogRef, fb, deudorService, userService, toast) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.deudorService = deudorService;
    this.userService = userService;
    this.toast = toast;
    this.mode = 'create';
    this.usuarios = [];
  }
  ngOnInit() {
    if (this.defaults && this.defaults.id_deudor) {
      this.mode = 'update';
    } else {
      this.defaults = {};
      this.loadUsuarios();
    }
    this.form = this.fb.group({
      meses_deuda: [this.defaults.meses_deuda || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      cantidad_deuda: [this.defaults.cantidad_deuda || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      id_user: [this.defaults.id_user || null, this.isCreateMode() ? _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required : []]
    });
    console.log('[DEBUG] Deudor recibido para edición:', this.defaults);
  }
  loadUsuarios() {
    this.userService.getUsers().subscribe({
      next: data => {
        this.usuarios = data.message;
        console.log('[DEBUG] Usuarios cargados:', this.usuarios);
      },
      error: err => console.error('Error al cargar usuarios', err)
    });
  }
  save() {
    if (this.isCreateMode()) {
      this.createDeudor();
    } else {
      this.updateDeudor();
    }
  }
  createDeudor() {
    const payload = this.form.value;
    console.log('[DEBUG] Payload para crear deudor:', payload);
    this.deudorService.createDeudor(payload).subscribe({
      next: response => {
        this.toast.success('Deudor creado', 'Se ha registrado exitosamente');
        this.dialogRef.close(response);
      },
      error: error => {
        this.toast.error('Error al crear deudor', error?.error?.detail || 'Ocurrió un error inesperado');
        console.error(error);
      }
    });
  }
  updateDeudor() {
    const payload = {
      id_deudor: this.defaults.id_deudor,
      meses_deuda: this.form.value.meses_deuda,
      cantidad_deuda: this.form.value.cantidad_deuda
    };
    console.log('[DEBUG] Payload para actualizar deudor:', payload);
    this.deudorService.updateDeudor(payload).subscribe({
      next: response => {
        this.toast.success('Deudor actualizado', 'Cambios guardados correctamente');
        this.dialogRef.close(response);
      },
      error: error => {
        this.toast.error('Error al actualizar deudor', error?.error?.detail || 'No se pudo actualizar');
        console.error(error);
      }
    });
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  isUpdateMode() {
    return this.mode === 'update';
  }
  close() {
    this.dialogRef.close();
  }
  static #_ = this.ɵfac = function DeudorCreateUpdateComponent_Factory(t) {
    return new (t || DeudorCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_deudor_service__WEBPACK_IMPORTED_MODULE_0__.DeudorService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_services__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DeudorCreateUpdateComponent,
    selectors: [["fury-deudor-create-update"]],
    decls: 18,
    vars: 5,
    consts: [["mat-dialog-title", ""], [3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "16px"], ["appearance", "outline"], ["matInput", "", "formControlName", "meses_deuda", "type", "number"], ["matInput", "", "formControlName", "cantidad_deuda", "type", "number"], ["appearance", "outline", 4, "ngIf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"], ["formControlName", "id_user"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"]],
    template: function DeudorCreateUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "div", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Meses de Deuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-form-field", 3)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Cantidad de Deuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DeudorCreateUpdateComponent_mat_form_field_12_Template, 7, 2, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-dialog-actions", 7)(14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DeudorCreateUpdateComponent_Template_button_click_16_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.isCreateMode() ? "Crear Deudor" : "Editar Deudor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isCreateMode());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.isCreateMode() ? "Crear" : "Actualizar", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutGapDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogActions, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 35274:
/*!***********************************************************************************!*\
  !*** ./src/app/demo/deudores/deudor-create-update/deudor-create-update.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeudorCreateUpdateModule: () => (/* binding */ DeudorCreateUpdateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _deudor_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deudor-create-update.component */ 81032);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ 95249);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);










class DeudorCreateUpdateModule {
  static #_ = this.ɵfac = function DeudorCreateUpdateModule_Factory(t) {
    return new (t || DeudorCreateUpdateModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DeudorCreateUpdateModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DeudorCreateUpdateModule, {
    declarations: [_deudor_create_update_component__WEBPACK_IMPORTED_MODULE_0__.DeudorCreateUpdateComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__.FlexLayoutModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_9__.MatSelectModule],
    exports: [_deudor_create_update_component__WEBPACK_IMPORTED_MODULE_0__.DeudorCreateUpdateComponent]
  });
})();

/***/ }),

/***/ 82819:
/*!********************************************************************!*\
  !*** ./src/app/demo/deudores/deudor-create-update/deudor.model.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Deudor: () => (/* binding */ Deudor)
/* harmony export */ });
class Deudor {
  constructor(data) {
    this.id = data.id;
    this.correo = data.correo;
    this.nombre = data.nombre;
    this.monto = data.monto;
  }
}

/***/ }),

/***/ 94428:
/*!**********************************************************!*\
  !*** ./src/app/demo/deudores/deudores-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeudoresRoutingModule: () => (/* binding */ DeudoresRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _deudores_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deudores.component */ 94552);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _deudores_component__WEBPACK_IMPORTED_MODULE_0__.DeudoresComponent
}];
class DeudoresRoutingModule {
  static #_ = this.ɵfac = function DeudoresRoutingModule_Factory(t) {
    return new (t || DeudoresRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DeudoresRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DeudoresRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 94552:
/*!*****************************************************!*\
  !*** ./src/app/demo/deudores/deudores.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeudoresComponent: () => (/* binding */ DeudoresComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _deudor_create_update_deudor_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deudor-create-update/deudor.model */ 82819);
/* harmony import */ var _deudor_create_update_deudor_create_update_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deudor-create-update/deudor-create-update.component */ 81032);
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/const */ 48684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_deudor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/deudor.service */ 45380);
/* harmony import */ var src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/toast/toast.service */ 77966);
/* harmony import */ var src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/loader/loader.service */ 18329);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/checkbox */ 56658);
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ 57120);
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout.directive */ 16261);
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-header.directive */ 34675);
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@fury/shared/page-layout/page-layout-content.directive */ 85364);
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../@fury/shared/list/list.component */ 32283);


























function DeudoresComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DeudoresComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
}
function DeudoresComponent_ng_container_13_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](column_r8.name);
  }
}
function DeudoresComponent_ng_container_13_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtextInterpolate"](row_r13[column_r8.property]);
  }
}
function DeudoresComponent_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DeudoresComponent_ng_container_13_ng_container_1_th_1_Template, 2, 1, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, DeudoresComponent_ng_container_13_ng_container_1_td_2_Template, 2, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matColumnDef", column_r8.property);
  }
}
function DeudoresComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, DeudoresComponent_ng_container_13_ng_container_1_Template, 3, 1, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", column_r8.isModelProperty);
  }
}
function DeudoresComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "th", 14);
  }
}
function DeudoresComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "td", 16)(1, "button", 21)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "mat-menu", null, 22)(6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DeudoresComponent_td_16_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19);
      const row_r16 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r18.updateDeudor(row_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "Editar");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DeudoresComponent_td_16_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r19);
      const row_r16 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresetView"](ctx_r20.deleteDeudor(row_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](11, "Eliminar");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matMenuTriggerFor", _r17);
  }
}
function DeudoresComponent_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 24);
  }
}
function DeudoresComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "tr", 25);
  }
}
const _c0 = function () {
  return ["Gesti\u00F3n"];
};
class DeudoresComponent {
  constructor(dialog, deudorService, toast, loader) {
    this.dialog = dialog;
    this.deudorService = deudorService;
    this.toast = toast;
    this.loader = loader;
    this.pageSize = 5;
    this.pageSizeOptions = _shared_const__WEBPACK_IMPORTED_MODULE_2__.PAGE_SIZE_OPTIONS;
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_12__.ReplaySubject(1);
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
      name: 'Correo',
      property: 'correo',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Monto Adeudado',
      property: 'monto',
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
  getDeudores() {
    this.deudorService.getDeudores().subscribe({
      next: data => {
        const lista = data.message.map(d => new _deudor_create_update_deudor_model__WEBPACK_IMPORTED_MODULE_0__.Deudor(d));
        this.subject$.next(lista);
      },
      error: err => console.error('Error al cargar deudores', err)
    });
  }
  ngOnInit() {
    this.getDeudores();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.filter)(data => !!data)).subscribe(deudores => {
      this.deudores = deudores;
      this.dataSource.data = deudores;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  createDeudor() {
    this.dialog.open(_deudor_create_update_deudor_create_update_component__WEBPACK_IMPORTED_MODULE_1__.DeudorCreateUpdateComponent).afterClosed().subscribe(nuevo => {
      if (nuevo) this.getDeudores();
    });
  }
  updateDeudor(deudor) {
    this.dialog.open(_deudor_create_update_deudor_create_update_component__WEBPACK_IMPORTED_MODULE_1__.DeudorCreateUpdateComponent, {
      data: deudor
    }).afterClosed().subscribe(actualizado => {
      if (actualizado) this.getDeudores();
    });
  }
  deleteDeudor(deudor) {
    if (!deudor.id) {
      this.toast.warning('ID no definido', 'No se puede eliminar este deudor');
      return;
    }
    const confirmed = confirm(`¿Eliminar deudor ${deudor.nombre}?`);
    if (!confirmed) return;
    this.loader.show();
    this.deudorService.deleteDeudor(deudor.id).subscribe({
      next: () => {
        this.getDeudores();
        this.toast.success('Deudor eliminado', `${deudor.nombre} fue eliminado correctamente`);
      },
      error: err => {
        this.toast.error('Error al eliminar', err?.error?.detail || 'No se pudo eliminar');
      },
      complete: () => this.loader.hide()
    });
  }
  onFilterChange(value) {
    if (!this.dataSource) return;
    this.dataSource.filter = value.trim().toLowerCase();
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function DeudoresComponent_Factory(t) {
    return new (t || DeudoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_deudor_service__WEBPACK_IMPORTED_MODULE_3__.DeudorService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_5__.LoaderService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
    type: DeudoresComponent,
    selectors: [["fury-deudores"]],
    viewQuery: function DeudoresComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    inputs: {
      columns: "columns"
    },
    decls: 20,
    vars: 11,
    consts: [["mode", "card"], ["current", "Deudores", 3, "crumbs"], ["name", "deudores", 3, "columns", "filterChange"], [1, "actions"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "create", 3, "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "checkbox"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "clickable", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", ""], ["color", "primary"], ["mat-cell", ""], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["actionsMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable"]],
    template: function DeudoresComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("filterChange", function DeudoresComponent_Template_fury_list_filterChange_4_listener($event) {
          return ctx.onFilterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function DeudoresComponent_Template_button_click_6_listener() {
          return ctx.createDeudor();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, DeudoresComponent_th_11_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](12, DeudoresComponent_td_12_Template, 2, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](13, DeudoresComponent_ng_container_13_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](14, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](15, DeudoresComponent_th_15_Template, 1, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](16, DeudoresComponent_td_16_Template, 12, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](17, DeudoresComponent_tr_17_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](18, DeudoresComponent_tr_18_Template, 1, 0, "tr", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](19, "mat-paginator", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInRight", undefined)("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("columns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("pageSize", ctx.pageSize)("pageSizeOptions", ctx.pageSizeOptions);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatIconButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatMiniFabButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuTrigger, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_22__.MatCheckbox, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_16__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_6__.BreadcrumbsComponent, _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_7__.PageLayoutDirective, _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_8__.PageLayoutHeaderDirective, _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_9__.PageLayoutContentDirective, _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_10__.ListComponent],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2RldWRvcmVzL2RldWRvcmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3hHQTtFQUNFLGVBQUE7QUFpQkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvdGhlbWluZy9wYWxldHRlXCI7XHJcblxyXG4vKipcclxuICBHZW5lcmFsXHJcbiAqL1xyXG5cclxuJHBhZ2UtbG9hZC1iYWNrZ3JvdW5kOiAjMTMyOTNkO1xyXG4kZWxldmF0aW9uOiAyO1xyXG5cclxuJGNvbG9yLXN1Y2Nlc3M6ICM3Y2IzNDI7XHJcblxyXG4kc3BhY2luZzogMjRweDtcclxuJGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiRwYWRkaW5nLXhsOiA0OHB4O1xyXG4kcGFkZGluZy1sZzogMzJweDtcclxuJHBhZGRpbmc6IDI0cHg7XHJcbiRwYWRkaW5nLW1kOiAxNnB4O1xyXG4kcGFkZGluZy1zbTogMTJweDtcclxuJHBhZGRpbmcteHM6IDhweDtcclxuJHBhZGRpbmcteHhzOiA0cHg7XHJcbiRwYWRkaW5nLTA6IDBweDtcclxuXHJcbiRwYWRkaW5nczogKFxyXG4gICctMCc6ICRwYWRkaW5nLTAsXHJcbiAgLXh4czogJHBhZGRpbmcteHhzLFxyXG4gIC14czogJHBhZGRpbmcteHMsXHJcbiAgLXNtOiAkcGFkZGluZy1zbSxcclxuICAtbWQ6ICRwYWRkaW5nLW1kLFxyXG4gICcnOiAkcGFkZGluZyxcclxuICAtbGc6ICRwYWRkaW5nLWxnLFxyXG4gIC14bDogJHBhZGRpbmcteGwsXHJcbik7XHJcblxyXG4kaWNvbi1zaXplczogKFxyXG4gIC14czogMTRweCxcclxuICAtc206IDE4cHgsXHJcbiAgLW1kOiAyMHB4LFxyXG4gICcnOiAyNHB4LFxyXG4gIC1sZzogMjhweCxcclxuICAteGw6IDMycHhcclxuKTtcclxuXHJcbi8qKlxyXG4gIENhcmRcclxuICovXHJcbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XHJcblxyXG4vKipcclxuICBUb29sYmFyXHJcbiAqL1xyXG4kdG9vbGJhci1oZWlnaHQ6IDY0cHg7XHJcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcclxuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xyXG5cclxuLyoqXHJcbiAgRm9vdGVyXHJcbiAqL1xyXG4kZm9vdGVyLWhlaWdodDogNTZweDtcclxuJGZvb3Rlci16LWluZGV4OiAxMDA7XHJcblxyXG4vLyBTaWRlbmF2XHJcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcclxuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiA3NHB4O1xyXG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuLy8gU2lkZW5hdiBJdGVtXHJcblxyXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcclxuXHJcbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDI6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMSArIDhweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XHJcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xyXG5cclxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xyXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XHJcblxyXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xyXG5cclxuLy8gUGFnZSBMYXlvdXRcclxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XHJcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuLyoqXHJcbiAgTWl4aW5zXHJcbiAqL1xyXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XHJcbkBtaXhpbiBtZWRpYS14cyB7XHJcbiAgQG1lZGlhICN7JG1lZGlhLXhzfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xyXG5AbWl4aW4gbWVkaWEtc20ge1xyXG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICBJbmJveFxyXG4gKi9cclxuJGluYm94LWhlYWRlci1oZWlnaHQ6IDY0cHg7XHJcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xyXG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcclxuJGluYm94LW1haWwtbGlzdC1pdGVtLWhlaWdodDogNTRweDtcclxuIiwiQGltcG9ydCBcInZhclwiO1xuXG4uY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 85439:
/*!**************************************************!*\
  !*** ./src/app/demo/deudores/deudores.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeudoresModule: () => (/* binding */ DeudoresModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _deudores_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deudores.component */ 94552);
/* harmony import */ var _deudores_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deudores-routing.module */ 94428);
/* harmony import */ var src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/@fury/shared/material-components.module */ 57665);
/* harmony import */ var src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/@fury/fury-shared.module */ 27095);
/* harmony import */ var src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/@fury/shared/breadcrumbs/breadcrumbs.module */ 98996);
/* harmony import */ var src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/@fury/shared/list/list.module */ 55429);
/* harmony import */ var _deudor_create_update_deudor_create_update_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deudor-create-update/deudor-create-update.module */ 35274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 61699);









class DeudoresModule {
  static #_ = this.ɵfac = function DeudoresModule_Factory(t) {
    return new (t || DeudoresModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: DeudoresModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _deudores_routing_module__WEBPACK_IMPORTED_MODULE_1__.DeudoresRoutingModule, src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__.FurySharedModule, src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule, src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_5__.ListModule, _deudor_create_update_deudor_create_update_module__WEBPACK_IMPORTED_MODULE_6__.DeudorCreateUpdateModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DeudoresModule, {
    declarations: [_deudores_component__WEBPACK_IMPORTED_MODULE_0__.DeudoresComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _deudores_routing_module__WEBPACK_IMPORTED_MODULE_1__.DeudoresRoutingModule, src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__.FurySharedModule, src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__.BreadcrumbsModule, src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_5__.ListModule, _deudor_create_update_deudor_create_update_module__WEBPACK_IMPORTED_MODULE_6__.DeudorCreateUpdateModule],
    exports: [_deudores_component__WEBPACK_IMPORTED_MODULE_0__.DeudoresComponent]
  });
})();

/***/ }),

/***/ 45380:
/*!********************************************!*\
  !*** ./src/app/services/deudor.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeudorService: () => (/* binding */ DeudorService)
/* harmony export */ });
/* harmony import */ var src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api-endpoints */ 27325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);



class DeudorService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.deudores;
  }
  getDeudores() {
    return this.http.get(this.baseUrl.list);
  }
  getDeudor(id) {
    return this.http.get(this.baseUrl.getById(id));
  }
  createDeudor(data) {
    return this.http.post(this.baseUrl.create, data);
  }
  updateDeudor(data) {
    return this.http.patch(this.baseUrl.update, data);
  }
  deleteDeudor(id_deudor) {
    return this.http.delete(this.baseUrl.delete(id_deudor));
  }
  static #_ = this.ɵfac = function DeudorService_Factory(t) {
    return new (t || DeudorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DeudorService,
    factory: DeudorService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=src_app_demo_deudores_deudores_module_ts.js.map