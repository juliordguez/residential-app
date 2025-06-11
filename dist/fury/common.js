"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["common"],{

/***/ 756:
/*!******************************************!*\
  !*** ./src/app/services/role.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RolService: () => (/* binding */ RolService)
/* harmony export */ });
/* harmony import */ var src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api-endpoints */ 27325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 32333);
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/toast/toast.service */ 77966);





class RolService {
  constructor(http, authService, toast) {
    this.http = http;
    this.authService = authService;
    this.toast = toast;
    this.baseUrl = src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.rol;
  }
  getRoles() {
    if (!this.authService.hasPermission('GETROLSMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get(this.baseUrl.list);
  }
  getRol(id) {
    if (!this.authService.hasPermission('GETROLMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get(this.baseUrl.getById(id));
  }
  crearRol(user) {
    if (!this.authService.hasPermission('CREATROLMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.post(this.baseUrl.create, user);
  }
  actualizarRol(user) {
    if (!this.authService.hasPermission('UPDTROLMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.patch(this.baseUrl.update, user);
  }
  eliminarRol(id) {
    if (!this.authService.hasPermission('DELTROLMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static #_ = this.ɵfac = function RolService_Factory(t) {
    return new (t || RolService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: RolService,
    factory: RolService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 37048:
/*!*******************************************!*\
  !*** ./src/app/services/user.services.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserService: () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/config/api-endpoints */ 27325);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 54860);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ 32333);
/* harmony import */ var _shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/toast/toast.service */ 77966);





class UserService {
  constructor(http, authService, toast) {
    this.http = http;
    this.authService = authService;
    this.toast = toast;
    this.baseUrl = src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.users;
  }
  getUsers() {
    if (!this.authService.hasPermission('GETUSRSMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get(this.baseUrl.list);
  }
  getUser(id) {
    if (!this.authService.hasPermission('GETUSRMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get(this.baseUrl.getById(id));
  }
  createUser(user) {
    if (!this.authService.hasPermission('CRATUSRMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.post(this.baseUrl.create, user);
  }
  updateUser(uuid, user) {
    if (!this.authService.hasPermission('UPDTUSRMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.put(`${this.baseUrl.update}/${uuid}`, user);
  }
  deleteUser(user_uuid) {
    if (!this.authService.hasPermission('DELUSRMET01')) {
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.delete(src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.users.delete(user_uuid));
  }
  static #_ = this.ɵfac = function UserService_Factory(t) {
    return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_shared_toast_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=common.js.map