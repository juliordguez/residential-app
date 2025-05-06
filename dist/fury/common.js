"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["common"],{

/***/ 72785:
/*!******************************************************!*\
  !*** ./src/@fury/animations/fade-in-up.animation.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fadeInUpAnimation: () => (/* binding */ fadeInUpAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 12501);

const fadeInUpAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInUp', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateY(3vh)',
  opacity: 0
}), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)('400ms cubic-bezier(0.35, 0, 0.25, 1)', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
  transform: 'translateY(0)',
  opacity: 1
}))])]);

/***/ })

}]);
//# sourceMappingURL=common.js.map