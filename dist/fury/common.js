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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);



class RolService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.rol;
  }
  getRoles() {
    return this.http.get(this.baseUrl.list);
  }
  getRol(id) {
    return this.http.get(this.baseUrl.getById(id));
  }
  crearRol(user) {
    return this.http.post(this.baseUrl.create, user);
  }
  actualizarRol(user) {
    return this.http.patch(this.baseUrl.update, user);
  }
  eliminarRol(id) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  static #_ = this.ɵfac = function RolService_Factory(t) {
    return new (t || RolService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 54860);



class UserService {
  constructor(http) {
    this.http = http;
    this.baseUrl = src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.users;
  }
  getUsers() {
    return this.http.get(this.baseUrl.list);
  }
  getUser(id) {
    return this.http.get(this.baseUrl.getById(id));
  }
  createUser(user) {
    return this.http.post(this.baseUrl.create, user);
  }
  updateUser(uuid, user) {
    return this.http.put(`${this.baseUrl.update}/${uuid}`, user);
  }
  deleteUser(user_uuid) {
    console.log('[DEBUG] Endpoint DELETE:', src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.users.delete(user_uuid)); // 👈
    return this.http.delete(src_config_api_endpoints__WEBPACK_IMPORTED_MODULE_0__.API_ENDPOINTS.users.delete(user_uuid));
  }
  static #_ = this.ɵfac = function UserService_Factory(t) {
    return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: UserService,
    factory: UserService.ɵfac,
    providedIn: 'root'
  });
}


/***/ })

}]);
//# sourceMappingURL=common.js.map