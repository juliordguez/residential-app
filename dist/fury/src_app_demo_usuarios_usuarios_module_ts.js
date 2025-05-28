"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_demo_usuarios_usuarios_module_ts"],{

/***/ 99159:
/*!**********************************************************************************!*\
  !*** ./src/app/demo/usuarios/user-create-update/user-create-update.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserCreateUpdateComponent: () => (/* binding */ UserCreateUpdateComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _services_role_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/role.service */ 756);
/* harmony import */ var _services_user_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.services */ 37048);
/* harmony import */ var _services_casas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/casas.service */ 31283);
/* harmony import */ var src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/toast/toast.service */ 77966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 10026);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 55309);
















function UserCreateUpdateComponent_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rol_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", rol_r2.id_rol);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", rol_r2.name_rol, " ");
  }
}
function UserCreateUpdateComponent_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const casa_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", casa_r3.id_casa);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", casa_r3.numero_casa, " ");
  }
}
class UserCreateUpdateComponent {
  constructor(defaults, dialogRef, fb, rolService, userService, casasService, toast) {
    this.defaults = defaults;
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.rolService = rolService;
    this.userService = userService;
    this.casasService = casasService;
    this.toast = toast;
    this.mode = 'create';
    this.roles = [];
    this.casas = [];
  }
  ngOnInit() {
    this.loadRoles();
    this.loadCasas();
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {};
    }
    this.form = this.fb.group({
      email: [this.defaults.email || '', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      nick_name: [this.defaults.nick_name || ''],
      username: [this.defaults.username || '', this.isCreateMode() ? _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required : []],
      id_casa: [this.defaults.id_casa || null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      id_rol: [this.defaults.id_rol || null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
    });
    console.log('[DEBUG] Usuario recibido para edición:', this.defaults);
  }
  loadRoles() {
    this.rolService.getRoles().subscribe({
      next: data => {
        this.roles = data.message; // ✅ SOLO el array
        console.log('[DEBUG] Roles cargados:', this.roles);
      },
      error: err => console.error('Error al cargar roles', err)
    });
  }
  loadCasas() {
    this.casasService.getCasas().subscribe({
      next: data => {
        this.casas = data.message;
        console.log('[DEBUG] Casas cargadas:', this.casas);
      },
      error: err => console.error('Error al cargar casas', err)
    });
  }
  save() {
    if (this.mode === 'create') {
      this.createUser();
    } else {
      this.updateUser();
    }
  }
  createUser() {
    const user = this.form.value;
    const payload = {
      email: user.email,
      username: user.username,
      id_casa: user.id_casa,
      id_rol: user.id_rol,
      id_fraccionamiento: 1
    };
    console.log('[DEBUG] Payload para crear usuario:', payload);
    this.userService.createUser(payload).subscribe({
      next: response => {
        this.toast.success('Usuario creado', 'Se ha creado exitosamente');
        this.dialogRef.close(response);
      },
      error: error => {
        this.toast.error('Error al crear usuario', error?.error?.detail || 'Ocurrió un error inesperado');
        console.error(error);
      }
    });
  }
  updateUser() {
    const body = this.form.value;
    console.log('[DEBUG] Body para PUT:', body);
    console.log('[DEBUG] UUID recibido:', this.defaults.user_uuid); // 👈 esta línea
    this.userService.updateUser(this.defaults.user_uuid, body).subscribe({
      next: response => {
        this.dialogRef.close(response);
        this.toast.success('Usuario modificado', 'Cambios guardados correctamente');
      },
      error: error => {
        console.error('Error al actualizar usuario:', error);
        this.toast.error('Error al modificar usuario', error?.error?.detail || 'No se pudo actualizar');
      }
    });
  }
  isCreateMode() {
    return this.mode === 'create';
  }
  isUpdateMode() {
    return this.mode === 'update';
  }
  static #_ = this.ɵfac = function UserCreateUpdateComponent_Factory(t) {
    return new (t || UserCreateUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.UntypedFormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_role_service__WEBPACK_IMPORTED_MODULE_0__.RolService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_user_services__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_casas_service__WEBPACK_IMPORTED_MODULE_2__.CasaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: UserCreateUpdateComponent,
    selectors: [["fury-user-create-update"]],
    decls: 31,
    vars: 10,
    consts: [["mat-dialog-title", ""], [2, "padding-top", "16px", 3, "formGroup"], ["fxLayout", "column", "fxLayoutGap", "16px"], ["appearance", "outline"], ["matInput", "", "formControlName", "email", "type", "email"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "required", "", 3, "formControlName"], ["formControlName", "id_rol"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "id_casa"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-flat-button", "", "color", "primary", 3, "disabled", "click"]],
    template: function UserCreateUpdateComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-dialog-content", 1)(3, "div", 2)(4, "mat-form-field", 3)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-form-field", 5)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-form-field", 3)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Rol");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-select", 7)(16, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "-- Selecciona un rol --");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, UserCreateUpdateComponent_mat_option_18_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "mat-form-field", 3)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Casa");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-select", 10)(23, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "-- Selecciona una casa --");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, UserCreateUpdateComponent_mat_option_25_Template, 2, 2, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "mat-dialog-actions", 11)(27, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function UserCreateUpdateComponent_Template_button_click_29_listener() {
          return ctx.save();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.isCreateMode() ? "Crear Usuario" : "Editar Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.isCreateMode() ? "Username" : "Nick Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControlName", ctx.isCreateMode() ? "username" : "nick_name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.casas);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.isCreateMode() ? "Crear" : "Guardar", " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__.DefaultLayoutGapDirective, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogActions, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatOption],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 28523:
/*!****************************************************************!*\
  !*** ./src/app/demo/usuarios/user-create-update/user.model.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Usuario: () => (/* binding */ Usuario)
/* harmony export */ });
class Usuario {
  constructor(usuario) {
    this.id = usuario.id;
    this.username = usuario.username;
    this.name_fraccionamiento = usuario.name_fraccionamiento;
    this.casa = usuario.casa;
    this.fraccionamiento = usuario.fraccionamiento;
    this.phoneNumber = usuario.phoneNumber;
    this.email = usuario.email;
    this.user_uuid = usuario.user_uuid;
    this.nick_name = usuario.nick_name;
  }
  get name() {
    return this.username;
  }
  set name(value) {}
  set address(value) {}
}

/***/ }),

/***/ 4889:
/*!**********************************************************!*\
  !*** ./src/app/demo/usuarios/usuarios-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   usuariosRoutingModule: () => (/* binding */ usuariosRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _usuarios_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usuarios.component */ 97919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _usuarios_component__WEBPACK_IMPORTED_MODULE_0__.UsuariosComponent
}];
class usuariosRoutingModule {
  static #_ = this.ɵfac = function usuariosRoutingModule_Factory(t) {
    return new (t || usuariosRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: usuariosRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](usuariosRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 97919:
/*!*****************************************************!*\
  !*** ./src/app/demo/usuarios/usuarios.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuariosComponent: () => (/* binding */ UsuariosComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _user_create_update_user_create_update_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-create-update/user-create-update.component */ 99159);
/* harmony import */ var _user_create_update_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-create-update/user.model */ 28523);
/* harmony import */ var _src_fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src//@fury/animations/fade-in-right.animation */ 83341);
/* harmony import */ var _src_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../src/@fury/animations/fade-in-up.animation */ 72785);
/* harmony import */ var _shared_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/const */ 48684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _services_user_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.services */ 37048);
/* harmony import */ var src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/toast/toast.service */ 77966);
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/loader/loader.service */ 18329);
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




























function UsuariosComponent_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 18)(1, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UsuariosComponent_th_11_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function UsuariosComponent_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 20)(1, "mat-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UsuariosComponent_td_12_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
}
function UsuariosComponent_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 21);
  }
}
function UsuariosComponent_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpropertyInterpolate1"]("src", "assets/img/avatars/", ctx_r3.getAvatarName(row_r12), ".jpg", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsanitizeUrl"]);
  }
}
function UsuariosComponent_ng_container_16_ng_container_1_th_1_Template(rf, ctx) {
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
function UsuariosComponent_ng_container_16_ng_container_1_td_2_Template(rf, ctx) {
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
function UsuariosComponent_ng_container_16_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, UsuariosComponent_ng_container_16_ng_container_1_th_1_Template, 2, 1, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, UsuariosComponent_ng_container_16_ng_container_1_td_2_Template, 2, 1, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matColumnDef", column_r13.property);
  }
}
function UsuariosComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, UsuariosComponent_ng_container_16_ng_container_1_Template, 3, 1, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", column_r13.isModelProperty);
  }
}
function UsuariosComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "th", 30);
  }
}
function UsuariosComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 20)(1, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UsuariosComponent_td_19_Template_button_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3, "more_horiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "mat-menu", 32, 33)(6, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UsuariosComponent_td_19_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25);
      const row_r21 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r24.updateUsuario(row_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "Modify");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UsuariosComponent_td_19_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25);
      const row_r21 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r26.deleteUsuario(row_r21));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerFor", _r22);
  }
}
function UsuariosComponent_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 35);
  }
}
function UsuariosComponent_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UsuariosComponent_tr_21_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r29);
      const row_r27 = restoredCtx.$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r28.updateUsuario(row_r27));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["Tables"];
};
class UsuariosComponent {
  constructor(dialog, userService, toast, loader, cdr) {
    this.dialog = dialog;
    this.userService = userService;
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
      name: 'Username',
      property: 'username',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Email',
      property: 'email',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Rol',
      property: 'rol',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Casa',
      property: 'casa',
      visible: true,
      isModelProperty: true
    }, {
      name: 'Actions',
      property: 'actions',
      visible: true
    }];
    this.Users = [];
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  getUsers() {
    this.userService.getUsers().subscribe({
      next: data => {
        console.log('[DEBUG] Respuesta cruda del backend:', data); // 🔍 aquí
        const usuarios = data.message.map(user => new _user_create_update_user_model__WEBPACK_IMPORTED_MODULE_1__.Usuario(user));
        this.subject$.next(usuarios);
      },
      error: err => console.error('Error al cargar usuarios', err)
    });
    return;
  }
  ngOnInit() {
    this.getUsers();
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.filter)(data => !!data)).subscribe(Usuarios => {
      this.users = Usuarios;
      this.dataSource.data = Usuarios;
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  createUsuario() {
    this.dialog.open(_user_create_update_user_create_update_component__WEBPACK_IMPORTED_MODULE_0__.UserCreateUpdateComponent).afterClosed().subscribe(usuario => {
      /**
       * Usuario is the updated Usuario (if the user pressed Save - otherwise it's null)
       */
      if (usuario) {
        /**
         * Here we are updating our local array.
         * You would probably make an HTTP request here.
         */
        this.users.unshift(new _user_create_update_user_model__WEBPACK_IMPORTED_MODULE_1__.Usuario(usuario));
        this.subject$.next(this.users);
        this.getUsers();
      }
    });
  }
  updateUsuario(Usuario) {
    console.log('[DEBUG] Usuario que se enviará al modal actualizar:', Usuario); // 👈
    this.dialog.open(_user_create_update_user_create_update_component__WEBPACK_IMPORTED_MODULE_0__.UserCreateUpdateComponent, {
      data: Usuario
    }).afterClosed().subscribe(Usuario => {
      if (Usuario) {
        const index = this.users.findIndex(existingUsuario => existingUsuario.id === Usuario.id);
        this.users[index] = new Usuario(Usuario);
        this.subject$.next(this.users);
        this.getUsers();
      }
    });
  }
  deleteUsuario(usuario) {
    console.log('[DEBUG] Usuario que se enviará a eliminación:', usuario);
    if (!usuario.user_uuid) {
      this.toast.warning('UUID no definido', 'No se puede eliminar este usuario');
      return;
    }
    const confirmed = confirm(`¿Seguro que deseas eliminar a ${usuario.username}?`);
    if (!confirmed) return;
    this.loader.show(); // 👈 Inicia el loader
    this.userService.deleteUser(usuario.user_uuid).subscribe({
      next: () => {
        this.users = this.users.filter(u => u.user_uuid !== usuario.user_uuid);
        this.subject$.next(this.users);
        this.toast.success('Usuario eliminado', `${usuario.username} fue eliminado correctamente`);
      },
      error: err => {
        console.error('[ERROR] Falló la eliminación del usuario:', err);
        this.toast.error('Error al eliminar usuario', err?.error?.detail || 'No se pudo eliminar el usuario');
      },
      complete: () => this.loader.hide() // 👈 Oculta el loader al finalizar
    });
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    value = value.trim();
    value = value.toLowerCase();
    this.dataSource.filter = value;
  }
  getAvatarName(row) {
    return String(row.id + 1 > 20 ? row.id + 1 - Math.floor(row.id / 10) * 10 : row.id + 1);
  }
  ngOnDestroy() {}
  static #_ = this.ɵfac = function UsuariosComponent_Factory(t) {
    return new (t || UsuariosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_user_services__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_app_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
    type: UsuariosComponent,
    selectors: [["fury-usuarios"]],
    viewQuery: function UsuariosComponent_Query(rf, ctx) {
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
    consts: [["mode", "card"], ["current", "Usuarios", 3, "crumbs"], ["name", "usuarios", 3, "columns", "filterChange"], [1, "actions"], ["type", "button", "mat-mini-fab", "", "color", "primary", 1, "create", 3, "click"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "checkbox"], ["class", "actions-cell", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "actions-cell", "mat-cell", "", 4, "matCellDef"], ["matColumnDef", "image"], ["class", "image-cell", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "image-cell", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["class", "actions-cell", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "clickable route-animations-elements", "mat-row", "", 3, "click", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize", "pageSizeOptions"], ["mat-header-cell", "", 1, "actions-cell"], ["color", "primary", 3, "click"], ["mat-cell", "", 1, "actions-cell"], ["mat-header-cell", "", 1, "image-cell"], ["mat-cell", "", 1, "image-cell"], [3, "src"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "actions-cell"], ["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["yPosition", "below", "xPosition", "before"], ["actionsMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable", "route-animations-elements", 3, "click"]],
    template: function UsuariosComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "fury-page-layout", 0)(1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "fury-page-layout-content")(4, "fury-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("filterChange", function UsuariosComponent_Template_fury_list_filterChange_4_listener($event) {
          return ctx.onFilterChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "div", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function UsuariosComponent_Template_button_click_6_listener() {
          return ctx.createUsuario();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](8, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](10, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, UsuariosComponent_th_11_Template, 2, 0, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, UsuariosComponent_td_12_Template, 2, 0, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](13, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, UsuariosComponent_th_14_Template, 1, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](15, UsuariosComponent_td_15_Template, 2, 1, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, UsuariosComponent_ng_container_16_Template, 2, 1, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](17, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](18, UsuariosComponent_th_18_Template, 1, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, UsuariosComponent_td_19_Template, 12, 1, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](20, UsuariosComponent_tr_20_Template, 1, 0, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, UsuariosComponent_tr_21_Template, 1, 0, "tr", 16);
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
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.clickable[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL3VzdWFyaW9zL3VzdWFyaW9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3hHQTtFQUNFLGVBQUE7QUFpQkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvdGhlbWluZy9wYWxldHRlXCI7XHJcblxyXG4vKipcclxuICBHZW5lcmFsXHJcbiAqL1xyXG5cclxuJHBhZ2UtbG9hZC1iYWNrZ3JvdW5kOiAjMTMyOTNkO1xyXG4kZWxldmF0aW9uOiAyO1xyXG5cclxuJGNvbG9yLXN1Y2Nlc3M6ICM3Y2IzNDI7XHJcblxyXG4kc3BhY2luZzogMjRweDtcclxuJGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiRwYWRkaW5nLXhsOiA0OHB4O1xyXG4kcGFkZGluZy1sZzogMzJweDtcclxuJHBhZGRpbmc6IDI0cHg7XHJcbiRwYWRkaW5nLW1kOiAxNnB4O1xyXG4kcGFkZGluZy1zbTogMTJweDtcclxuJHBhZGRpbmcteHM6IDhweDtcclxuJHBhZGRpbmcteHhzOiA0cHg7XHJcbiRwYWRkaW5nLTA6IDBweDtcclxuXHJcbiRwYWRkaW5nczogKFxyXG4gICctMCc6ICRwYWRkaW5nLTAsXHJcbiAgLXh4czogJHBhZGRpbmcteHhzLFxyXG4gIC14czogJHBhZGRpbmcteHMsXHJcbiAgLXNtOiAkcGFkZGluZy1zbSxcclxuICAtbWQ6ICRwYWRkaW5nLW1kLFxyXG4gICcnOiAkcGFkZGluZyxcclxuICAtbGc6ICRwYWRkaW5nLWxnLFxyXG4gIC14bDogJHBhZGRpbmcteGwsXHJcbik7XHJcblxyXG4kaWNvbi1zaXplczogKFxyXG4gIC14czogMTRweCxcclxuICAtc206IDE4cHgsXHJcbiAgLW1kOiAyMHB4LFxyXG4gICcnOiAyNHB4LFxyXG4gIC1sZzogMjhweCxcclxuICAteGw6IDMycHhcclxuKTtcclxuXHJcbi8qKlxyXG4gIENhcmRcclxuICovXHJcbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XHJcblxyXG4vKipcclxuICBUb29sYmFyXHJcbiAqL1xyXG4kdG9vbGJhci1oZWlnaHQ6IDY0cHg7XHJcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcclxuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xyXG5cclxuLyoqXHJcbiAgRm9vdGVyXHJcbiAqL1xyXG4kZm9vdGVyLWhlaWdodDogNTZweDtcclxuJGZvb3Rlci16LWluZGV4OiAxMDA7XHJcblxyXG4vLyBTaWRlbmF2XHJcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcclxuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiA3NHB4O1xyXG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuLy8gU2lkZW5hdiBJdGVtXHJcblxyXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcclxuXHJcbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xyXG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDI6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMSArIDhweDtcclxuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XHJcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xyXG5cclxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xyXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XHJcblxyXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xyXG5cclxuLy8gUGFnZSBMYXlvdXRcclxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XHJcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xyXG5cclxuLyoqXHJcbiAgTWl4aW5zXHJcbiAqL1xyXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XHJcbkBtaXhpbiBtZWRpYS14cyB7XHJcbiAgQG1lZGlhICN7JG1lZGlhLXhzfSB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xyXG5AbWl4aW4gbWVkaWEtc20ge1xyXG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICBJbmJveFxyXG4gKi9cclxuJGluYm94LWhlYWRlci1oZWlnaHQ6IDY0cHg7XHJcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xyXG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcclxuJGluYm94LW1haWwtbGlzdC1pdGVtLWhlaWdodDogNTRweDtcclxuIiwiQGltcG9ydCBcInZhclwiO1xyXG5cclxuLmNsaWNrYWJsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"],
    data: {
      animation: [_src_fury_animations_fade_in_right_animation__WEBPACK_IMPORTED_MODULE_2__.fadeInRightAnimation, _src_fury_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_3__.fadeInUpAnimation]
    }
  });
}


/***/ }),

/***/ 72053:
/*!**************************************************!*\
  !*** ./src/app/demo/usuarios/usuarios.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UsuariosModule: () => (/* binding */ UsuariosModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../src/@fury/shared/breadcrumbs/breadcrumbs.module */ 98996);
/* harmony import */ var _src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../src/@fury/shared/list/list.module */ 55429);
/* harmony import */ var _src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../src/@fury/shared/material-components.module */ 57665);
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usuarios-routing.module */ 4889);
/* harmony import */ var _usuarios_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuarios.component */ 97919);
/* harmony import */ var _src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../src/@fury/fury-shared.module */ 27095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);









class UsuariosModule {
  static #_ = this.ɵfac = function UsuariosModule_Factory(t) {
    return new (t || UsuariosModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: UsuariosModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_3__.usuariosRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_5__.FurySharedModule,
    // Core
    _src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_1__.ListModule, _src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](UsuariosModule, {
    declarations: [_usuarios_component__WEBPACK_IMPORTED_MODULE_4__.UsuariosComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_3__.usuariosRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _src_fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _src_fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_5__.FurySharedModule,
    // Core
    _src_fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_1__.ListModule, _src_fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_0__.BreadcrumbsModule],
    exports: [_usuarios_component__WEBPACK_IMPORTED_MODULE_4__.UsuariosComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_demo_usuarios_usuarios_module_ts.js.map