"use strict";
(self["webpackChunkfury"] = self["webpackChunkfury"] || []).push([["src_app_demo_dashboard_dashboard_module_ts"],{

/***/ 14576:
/*!****************************************************************!*\
  !*** ./src/@fury/shared/chart-widget/chart-widget-defaults.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultChartOptions: () => (/* binding */ defaultChartOptions)
/* harmony export */ });
const defaultChartOptions = {
  responsive: true,
  animation: {
    duration: 0
  },
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      titleFont: {
        family: 'Roboto, \'Helvetica Neue\', Arial, sans-serif'
      },
      bodyFont: {
        family: 'Roboto, \'Helvetica Neue\', Arial, sans-serif'
      },
      footerFont: {
        family: 'Roboto, \'Helvetica Neue\', Arial, sans-serif'
      }
    }
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  }
};

/***/ }),

/***/ 15013:
/*!***********************************************************************!*\
  !*** ./src/@fury/shared/loading-overlay/loading-overlay.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingOverlayComponent: () => (/* binding */ LoadingOverlayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-bar */ 78173);


class LoadingOverlayComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function LoadingOverlayComponent_Factory(t) {
    return new (t || LoadingOverlayComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LoadingOverlayComponent,
    selectors: [["fury-loading-overlay"]],
    inputs: {
      isLoading: "isLoading"
    },
    decls: 2,
    vars: 2,
    consts: [[1, "loading-overlay"], ["mode", "indeterminate"]],
    template: function LoadingOverlayComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.isLoading);
      }
    },
    dependencies: [_angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_1__.MatProgressBar],
    styles: [".loading-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  transition: all 0.25s ease-in-out;\n  opacity: 0;\n  visibility: hidden;\n}\n.loading-overlay.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zaGFyZWQvbG9hZGluZy1vdmVybGF5L2xvYWRpbmctb3ZlcmxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLmxvYWRpbmctb3ZlcmxheSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsIDAuNyk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxMDtcbiAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1pbi1vdXQ7XG4gIG9wYWNpdHk6IDA7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAmLnNob3cge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6354:
/*!********************************************************************!*\
  !*** ./src/@fury/shared/loading-overlay/loading-overlay.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingOverlayModule: () => (/* binding */ LoadingOverlayModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _material_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material-components.module */ 57665);
/* harmony import */ var _loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading-overlay.component */ 15013);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);




class LoadingOverlayModule {
  static #_ = this.ɵfac = function LoadingOverlayModule_Factory(t) {
    return new (t || LoadingOverlayModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: LoadingOverlayModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoadingOverlayModule, {
    declarations: [_loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule],
    exports: [_loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayComponent]
  });
})();

/***/ }),

/***/ 48726:
/*!************************************************************!*\
  !*** ./src/app/demo/dashboard/dashboard-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 52317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);




const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];
class DashboardRoutingModule {
  static #_ = this.ɵfac = function DashboardRoutingModule_Factory(t) {
    return new (t || DashboardRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DashboardRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 52317:
/*!*******************************************************!*\
  !*** ./src/app/demo/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.service */ 56300);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 27947);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ 18497);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _fury_shared_page_page_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/shared/page/page.directive */ 73857);
/* harmony import */ var _widgets_bar_chart_widget_bar_chart_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/bar-chart-widget/bar-chart-widget.component */ 44792);
/* harmony import */ var _widgets_line_chart_widget_line_chart_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/line-chart-widget/line-chart-widget.component */ 21169);
/* harmony import */ var _widgets_donut_chart_widget_donut_chart_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/donut-chart-widget/donut-chart-widget.component */ 70198);
/* harmony import */ var _widgets_sales_summary_widget_sales_summary_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/sales-summary-widget/sales-summary-widget.component */ 95986);
/* harmony import */ var _widgets_audience_overview_widget_audience_overview_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/audience-overview-widget/audience-overview-widget.component */ 56993);
/* harmony import */ var _widgets_realtime_users_widget_realtime_users_widget_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgets/realtime-users-widget/realtime-users-widget.component */ 77473);
/* harmony import */ var _widgets_quick_info_widget_quick_info_widget_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/quick-info-widget/quick-info-widget.component */ 69497);
/* harmony import */ var _widgets_recent_sales_widget_recent_sales_widget_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/recent-sales-widget/recent-sales-widget.component */ 22775);
/* harmony import */ var _widgets_advanced_pie_chart_widget_advanced_pie_chart_widget_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./widgets/advanced-pie-chart-widget/advanced-pie-chart-widget.component */ 57372);
/* harmony import */ var _widgets_market_widget_market_widget_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./widgets/market-widget/market-widget.component */ 31946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 26575);




















class DashboardComponent {
  static #_ = this.isInitialLoad = true;
  constructor(dashboardService, router) {
    this.dashboardService = dashboardService;
    this.router = router;
    this.totalSalesOptions = {
      title: 'Total Sales',
      gain: 16.3,
      subTitle: 'compared to last month',
      background: '#3F51B5',
      color: '#FFFFFF'
    };
    this.totalVisitsOptions = {
      title: 'Visits',
      gain: 42.5,
      subTitle: 'compared to last month',
      background: '#03A9F4',
      color: '#FFFFFF'
    };
    this.totalClicksOptions = {
      title: 'Total Clicks',
      gain: -6.1,
      subTitle: 'compared to last month',
      background: '#4CAF50',
      color: '#FFFFFF'
    };
    this.conversionsOptions = {
      title: 'Conversions',
      gain: 10.4,
      subTitle: 'compared to last month',
      background: '#009688',
      color: '#FFFFFF'
    };
    this.salesSummaryOptions = {
      title: 'Sales Summary',
      subTitle: 'Compare Sales by Time',
      gain: 37.2
    };
    this.top5CategoriesOptions = {
      title: 'Top Categories',
      subTitle: 'Compare Sales by Category'
    };
    this.audienceOverviewOptions = [];
    this.recentSalesOptions = {
      title: 'Recent Sales',
      subTitle: 'See who bought what in realtime'
    };
    this.recentSalesTableOptions = {
      pageSize: 5,
      columns: [{
        name: 'Product',
        property: 'name',
        visible: true,
        isModelProperty: true
      }, {
        name: '$ Price',
        property: 'price',
        visible: true,
        isModelProperty: true
      }, {
        name: 'Time ago',
        property: 'timestamp',
        visible: true,
        isModelProperty: true
      }]
    };
    this.advancedPieChartOptions = {
      title: 'Sales by country',
      subTitle: 'Top 3 countries sold 34% more items this month\n'
    };
    this._realtimeUsersDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__.ReplaySubject(30);
    this.realtimeUsersData$ = this._realtimeUsersDataSubject.asObservable();
    this._realtimeUsersPagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__.ReplaySubject(1);
    this.realtimeUsersPages$ = this._realtimeUsersPagesSubject.asObservable();
    /**
     * Needed for the Layout
     */
    this._gap = 16;
    this.gap = `${this._gap}px`;
    /**
     * Edge wrong drawing fix
     * Navigate anywhere and on Promise right back
     */
    if (/Edge/.test(navigator.userAgent)) {
      if (DashboardComponent.isInitialLoad) {
        this.router.navigate(['/apps/chat']).then(() => {
          this.router.navigate(['/']);
        });
        DashboardComponent.isInitialLoad = false;
      }
    }
  }
  col(colAmount) {
    return `1 1 calc(${100 / colAmount}% - ${this._gap - this._gap / colAmount}px)`;
  }
  /**
   * Everything implemented here is purely for Demo-Demonstration and can be removed and replaced with your implementation
   */
  ngOnInit() {
    this.salesData$ = this.dashboardService.getSales();
    this.visitsData$ = this.dashboardService.getVisits();
    this.clicksData$ = this.dashboardService.getClicks();
    this.conversionsData$ = this.dashboardService.getConversions();
    this.salesSummaryData$ = this.dashboardService.getSalesSummary();
    this.top5CategoriesData$ = this.dashboardService.getTop5Categories();
    // Audience Overview Widget
    this.dashboardService.getAudienceOverviewUsers().subscribe(response => {
      this.audienceOverviewOptions.push({
        label: 'Users',
        data: response
      });
    });
    this.dashboardService.getAudienceOverviewSessions().subscribe(response => {
      this.audienceOverviewOptions.push({
        label: 'Sessions',
        data: response
      });
    });
    this.dashboardService.getAudienceOverviewBounceRate().subscribe(response => {
      const property = {
        label: 'Bounce Rate',
        data: response
      };
      // Calculate Bounce Rate Average
      const data = response.datasets[0].data;
      property.sum = `${(data.reduce((sum, x) => sum + x) / data.length).toFixed(2)}%`;
      this.audienceOverviewOptions.push(property);
    });
    this.dashboardService.getAudienceOverviewSessionDuration().subscribe(response => {
      const property = {
        label: 'Session Duration',
        data: response
      };
      // Calculate Average Session Duration and Format to Human Readable Format
      const data = response.datasets[0].data;
      const averageSeconds = (data.reduce((sum, x) => sum + x) / data.length).toFixed(0);
      property.sum = `${averageSeconds} sec`;
      this.audienceOverviewOptions.push(property);
    });
    // Prefill realtimeUsersData with 30 random values
    for (let i = 0; i < 30; i++) {
      this._realtimeUsersDataSubject.next({
        label: moment__WEBPACK_IMPORTED_MODULE_0__().fromNow(),
        value: Math.round(Math.random() * (100 - 10) + 10)
      });
    }
    // Simulate incoming values for Realtime Users Widget
    setInterval(() => {
      this._realtimeUsersDataSubject.next({
        label: moment__WEBPACK_IMPORTED_MODULE_0__().fromNow(),
        value: Math.round(Math.random() * (100 - 10) + 10)
      });
    }, 5000);
    // Prefill realtimeUsersPages with 3 random values
    const demoPages = [];
    const demoPagesPossibleValues = ['/components', '/tables/all-in-one-table', '/apps/inbox', '/apps/chat', '/dashboard', '/login', '/register', '/apps/calendar', '/forms/form-elements'];
    for (let i = 0; i < 3; i++) {
      const nextPossibleValue = demoPagesPossibleValues[+Math.round(Math.random() * (demoPagesPossibleValues.length - 1))];
      if (demoPages.indexOf(nextPossibleValue) === -1) {
        demoPages.push(nextPossibleValue);
      }
      this._realtimeUsersPagesSubject.next(demoPages.map(pages => {
        return {
          'page': pages
        };
      }));
    }
    // Simulate incoming values for Realtime Users Widget
    setInterval(() => {
      const nextPossibleValue = demoPagesPossibleValues[+Math.round(Math.random() * (demoPagesPossibleValues.length - 1))];
      if (demoPages.indexOf(nextPossibleValue) === -1) {
        demoPages.push(nextPossibleValue);
      }
      if (demoPages.length > Math.random() * (5 - 1) + 1) {
        demoPages.splice(Math.round(Math.random() * demoPages.length), 1);
      }
      this._realtimeUsersPagesSubject.next(demoPages.map(pages => {
        return {
          'page': pages
        };
      }));
    }, 5000);
    this.recentSalesTableData$ = this.dashboardService.getRecentSalesTableData();
    this.recentSalesData$ = this.dashboardService.getRecentSalesData();
    this.advancedPieChartData$ = this.dashboardService.getAdvancedPieChartData();
  }
  static #_2 = this.ɵfac = function DashboardComponent_Factory(t) {
    return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_dashboard_service__WEBPACK_IMPORTED_MODULE_1__.DashboardService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router));
  };
  static #_3 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
    type: DashboardComponent,
    selectors: [["fury-dashboard"]],
    decls: 57,
    vars: 66,
    consts: [["fxLayout", "column", 1, "dashboard", 3, "fxLayoutGap"], ["fxFlex", "noshrink", "fxLayout", "column", "fxLayout.gt-lg", "row", 3, "fxLayoutGap"], ["fxLayout", "column", "fxLayout.gt-sm", "row", 3, "fxLayoutGap", "fxFlex"], ["fxFlex", "auto", 3, "fxFlex.gt-sm"], [1, "widget", "route-animations-elements", 3, "data", "options"], [1, "route-animations-elements", 3, "data", "options"], ["fxFlex", "grow"], [1, "route-animations-elements", 3, "options"], ["fxFlex", "grow", "fxLayout", "column", 3, "fxFlex.gt-sm", "fxLayoutGap"], [1, "fullheight", 3, "data", "options"], ["fxFlex", "grow", "value", "234", "label", "Customers", "color", "white", "icon", "people", 1, "route-animations-elements", 3, "background"], ["fxFlex", "grow", 3, "data$", "fxFlex.gt-sm", "pages$"], ["fxLayout", "column", 3, "fxLayoutGap", "fxFlex"], ["fxLayout", "column", "fxLayout.gt-sm", "row", 3, "fxLayoutGap"], [1, "route-animations-elements", 3, "data", "options", "fxFlex"], [3, "fxFlex"], [1, "fury-card"], ["mat-card-avatar", "", "src", "assets/img/avatars/1.jpg"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["align", "end"], ["mat-button", ""], ["fxFlex", "grow", 1, "route-animations-elements"], [3, "options", "chartData", "tableOptions", "tableData"]],
    template: function DashboardComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "fury-page", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](4, "fury-bar-chart-widget", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](7, "fury-line-chart-widget", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](9, "div", 2)(10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](11, "fury-line-chart-widget", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](14, "fury-line-chart-widget", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](15, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](16, "div", 1)(17, "div", 2)(18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](19, "fury-audience-overview-widget", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](20, "div", 2)(21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](22, "fury-sales-summary-widget", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](24, "fury-quick-info-widget", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](25, "fury-realtime-users-widget", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](26, "div", 1)(27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](28, "fury-advanced-pie-chart-widget", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](31, "fury-donut-chart-widget", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](32, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](33, "div", 15)(34, "mat-card", 16)(35, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](37, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](38, "Shiba Inu");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](39, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](40, "Dog Breed");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](41, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](42, "mat-card-content")(43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](44, " The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](45, "mat-card-actions", 19)(46, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](47, "LIKE");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](48, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](49, "SHARE");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](50, "div", 12)(51, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](52, "fury-recent-sales-widget", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](53, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](54, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](55, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](56, "fury-market-widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxLayoutGap", ctx.gap)("fxFlex", ctx.col(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxFlex.gt-sm", ctx.col(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 48, ctx.salesData$))("options", ctx.totalSalesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxFlex.gt-sm", ctx.col(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](8, 50, ctx.visitsData$))("options", ctx.totalVisitsOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxLayoutGap", ctx.gap)("fxFlex", ctx.col(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxFlex.gt-sm", ctx.col(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](12, 52, ctx.clicksData$))("options", ctx.totalClicksOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxFlex.gt-sm", ctx.col(4));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](15, 54, ctx.conversionsData$))("options", ctx.conversionsOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxLayoutGap", ctx.gap)("fxFlex", ctx.col(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx.audienceOverviewOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxLayoutGap", ctx.gap)("fxFlex", ctx.col(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxFlex.gt-sm", ctx.col(2))("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](23, 56, ctx.salesSummaryData$))("options", ctx.salesSummaryOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("background", "#009688");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data$", ctx.realtimeUsersData$)("fxFlex.gt-sm", ctx.col(2))("pages$", ctx.realtimeUsersPages$);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxLayoutGap", ctx.gap)("fxFlex", ctx.col(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](29, 58, ctx.advancedPieChartData$))("options", ctx.advancedPieChartOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("data", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](32, 60, ctx.top5CategoriesData$))("options", ctx.top5CategoriesOptions)("fxFlex", ctx.col(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxFlex", ctx.col(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("fxLayoutGap", ctx.gap)("fxFlex", ctx.col(2));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("options", ctx.recentSalesOptions)("chartData", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](53, 62, ctx.recentSalesData$))("tableOptions", ctx.recentSalesTableOptions)("tableData", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](54, 64, ctx.recentSalesTableData$));
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_16__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardActions, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardImage, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_17__.MatCardTitle, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_18__.DefaultFlexDirective, _fury_shared_page_page_directive__WEBPACK_IMPORTED_MODULE_2__.PageDirective, _widgets_bar_chart_widget_bar_chart_widget_component__WEBPACK_IMPORTED_MODULE_3__.BarChartWidgetComponent, _widgets_line_chart_widget_line_chart_widget_component__WEBPACK_IMPORTED_MODULE_4__.LineChartWidgetComponent, _widgets_donut_chart_widget_donut_chart_widget_component__WEBPACK_IMPORTED_MODULE_5__.DonutChartWidgetComponent, _widgets_sales_summary_widget_sales_summary_widget_component__WEBPACK_IMPORTED_MODULE_6__.SalesSummaryWidgetComponent, _widgets_audience_overview_widget_audience_overview_widget_component__WEBPACK_IMPORTED_MODULE_7__.AudienceOverviewWidgetComponent, _widgets_realtime_users_widget_realtime_users_widget_component__WEBPACK_IMPORTED_MODULE_8__.RealtimeUsersWidgetComponent, _widgets_quick_info_widget_quick_info_widget_component__WEBPACK_IMPORTED_MODULE_9__.QuickInfoWidgetComponent, _widgets_recent_sales_widget_recent_sales_widget_component__WEBPACK_IMPORTED_MODULE_10__.RecentSalesWidgetComponent, _widgets_advanced_pie_chart_widget_advanced_pie_chart_widget_component__WEBPACK_IMPORTED_MODULE_11__.AdvancedPieChartWidgetComponent, _widgets_market_widget_market_widget_component__WEBPACK_IMPORTED_MODULE_12__.MarketWidgetComponent, _angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 55901:
/*!****************************************************!*\
  !*** ./src/app/demo/dashboard/dashboard.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _widgets_advanced_pie_chart_widget_advanced_pie_chart_widget_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/advanced-pie-chart-widget/advanced-pie-chart-widget.module */ 88459);
/* harmony import */ var _widgets_audience_overview_widget_audience_overview_widget_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/audience-overview-widget/audience-overview-widget.module */ 17449);
/* harmony import */ var _widgets_bar_chart_widget_bar_chart_widget_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./widgets/bar-chart-widget/bar-chart-widget.module */ 32837);
/* harmony import */ var _widgets_donut_chart_widget_donut_chart_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets/donut-chart-widget/donut-chart-widget.module */ 81148);
/* harmony import */ var _widgets_line_chart_widget_line_chart_widget_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets/line-chart-widget/line-chart-widget.module */ 91345);
/* harmony import */ var _widgets_market_widget_market_widget_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widgets/market-widget/market-widget.module */ 14871);
/* harmony import */ var _widgets_quick_info_widget_quick_info_widget_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/quick-info-widget/quick-info-widget.module */ 74445);
/* harmony import */ var _widgets_realtime_users_widget_realtime_users_widget_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./widgets/realtime-users-widget/realtime-users-widget.module */ 68710);
/* harmony import */ var _widgets_recent_sales_widget_recent_sales_widget_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./widgets/recent-sales-widget/recent-sales-widget.module */ 93875);
/* harmony import */ var _widgets_sales_summary_widget_sales_summary_widget_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widgets/sales-summary-widget/sales-summary-widget.module */ 96501);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard-routing.module */ 48726);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard.component */ 52317);
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard.service */ 56300);
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../@fury/fury-shared.module */ 27095);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 61699);

















class DashboardModule {
  static #_ = this.ɵfac = function DashboardModule_Factory(t) {
    return new (t || DashboardModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({
    type: DashboardModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({
    providers: [_dashboard_service__WEBPACK_IMPORTED_MODULE_13__.DashboardService],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__.DashboardRoutingModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_14__.FurySharedModule,
    // Widgets
    _widgets_bar_chart_widget_bar_chart_widget_module__WEBPACK_IMPORTED_MODULE_3__.BarChartWidgetModule, _widgets_line_chart_widget_line_chart_widget_module__WEBPACK_IMPORTED_MODULE_5__.LineChartWidgetModule, _widgets_donut_chart_widget_donut_chart_widget_module__WEBPACK_IMPORTED_MODULE_4__.DonutChartWidgetModule, _widgets_sales_summary_widget_sales_summary_widget_module__WEBPACK_IMPORTED_MODULE_10__.SalesSummaryWidgetModule, _widgets_audience_overview_widget_audience_overview_widget_module__WEBPACK_IMPORTED_MODULE_2__.AudienceOverviewWidgetModule, _widgets_realtime_users_widget_realtime_users_widget_module__WEBPACK_IMPORTED_MODULE_8__.RealtimeUsersWidgetModule, _widgets_quick_info_widget_quick_info_widget_module__WEBPACK_IMPORTED_MODULE_7__.QuickInfoWidgetModule, _widgets_recent_sales_widget_recent_sales_widget_module__WEBPACK_IMPORTED_MODULE_9__.RecentSalesWidgetModule, _widgets_advanced_pie_chart_widget_advanced_pie_chart_widget_module__WEBPACK_IMPORTED_MODULE_1__.AdvancedPieChartWidgetModule, _widgets_market_widget_market_widget_module__WEBPACK_IMPORTED_MODULE_6__.MarketWidgetModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_12__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_11__.DashboardRoutingModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule, _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_14__.FurySharedModule,
    // Widgets
    _widgets_bar_chart_widget_bar_chart_widget_module__WEBPACK_IMPORTED_MODULE_3__.BarChartWidgetModule, _widgets_line_chart_widget_line_chart_widget_module__WEBPACK_IMPORTED_MODULE_5__.LineChartWidgetModule, _widgets_donut_chart_widget_donut_chart_widget_module__WEBPACK_IMPORTED_MODULE_4__.DonutChartWidgetModule, _widgets_sales_summary_widget_sales_summary_widget_module__WEBPACK_IMPORTED_MODULE_10__.SalesSummaryWidgetModule, _widgets_audience_overview_widget_audience_overview_widget_module__WEBPACK_IMPORTED_MODULE_2__.AudienceOverviewWidgetModule, _widgets_realtime_users_widget_realtime_users_widget_module__WEBPACK_IMPORTED_MODULE_8__.RealtimeUsersWidgetModule, _widgets_quick_info_widget_quick_info_widget_module__WEBPACK_IMPORTED_MODULE_7__.QuickInfoWidgetModule, _widgets_recent_sales_widget_recent_sales_widget_module__WEBPACK_IMPORTED_MODULE_9__.RecentSalesWidgetModule, _widgets_advanced_pie_chart_widget_advanced_pie_chart_widget_module__WEBPACK_IMPORTED_MODULE_1__.AdvancedPieChartWidgetModule, _widgets_market_widget_market_widget_module__WEBPACK_IMPORTED_MODULE_6__.MarketWidgetModule]
  });
})();

/***/ }),

/***/ 56300:
/*!*****************************************************!*\
  !*** ./src/app/demo/dashboard/dashboard.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardService: () => (/* binding */ DashboardService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 84980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 79736);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 20553);
/* harmony import */ var _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../demo-data/widget-demo-data */ 12435);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 54860);






/**
 * @class DashboardService
 * This is just a pages service for populating the charts on the dashboard.
 * You will have to implement a similiar service for the data to be populated.
 * Examples are provided below :)
 */
class DashboardService {
  constructor(http) {
    this.http = http;
    this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.backend;
  }
  getSales() {
    /**
     * Example for real request
          return this.http.get(this.url + '/sales').pipe(
     map(response => this.toSalesChartData(response))
     );
     */
    // Simulating request from local data
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      labels: (0,_demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.salesChartDemoLabels)(),
      data: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.salesChartDemoValues
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => this.toSalesChartData(values)));
  }
  /**
   * Converting Data from Server to Chart compatible format
   * @returns {Chart.ChartData}
   */
  toSalesChartData(chartData) {
    return {
      labels: chartData.labels,
      datasets: [{
        label: '# of Sales',
        data: chartData.data,
        backgroundColor: '#FFFFFF',
        barPercentage: 0.5
      }]
    };
  }
  getVisits() {
    // Simulating request from local data
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      labels: (0,_demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.visitsChartDemoLabels)(),
      data: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.visitsChartDemoValues
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => this.toVisitsChartData(values)));
  }
  toVisitsChartData(chartData) {
    return {
      labels: chartData.labels,
      datasets: [{
        label: '# of Visits',
        data: chartData.data,
        backgroundColor: '#FFFFFF',
        fill: false,
        borderColor: '#FFFFFF',
        borderWidth: 2,
        tension: 0
      }]
    };
  }
  getClicks() {
    // Simulating request from local data
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      labels: (0,_demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.clicksChartDemoLabels)(),
      data: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.clicksChartDemoValues
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => this.toClicksChartData(values)));
  }
  toClicksChartData(chartData) {
    return {
      labels: chartData.labels,
      datasets: [{
        label: '# of Clicks',
        data: chartData.data,
        fill: false,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 2
      }]
    };
  }
  getConversions() {
    // Simulating request from local data
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      labels: (0,_demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.conversionsChartDemoLabels)(),
      data: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.conversionsChartDemoValues
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => this.toConversionsChartData(values)));
  }
  toConversionsChartData(chartData) {
    return {
      labels: chartData.labels,
      datasets: [{
        label: '# of Conversions',
        data: chartData.data,
        fill: false,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 2,
        pointRadius: 0,
        tension: 0
      }]
    };
  }
  getSalesSummary() {
    // Simulating request from local data
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      labels: (0,_demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.salesSummaryDemoLabels)(),
      data: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.salesSummaryDemoData
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => this.toSalesSummaryChartData(values)));
  }
  toSalesSummaryChartData(chartData) {
    return {
      labels: chartData.labels,
      datasets: [{
        label: 'Revenue',
        backgroundColor: '#7cb342',
        fill: 'start',
        borderColor: '#7cb342',
        data: chartData.data.revenue
      }, {
        label: 'Expenses',
        backgroundColor: '#EEEEEE',
        fill: 'start',
        borderColor: '#EEEEEE',
        data: chartData.data.expenses
      }]
    };
  }
  getTop5Categories() {
    // Simulating request from local data
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.top5CategoriesDemoData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => this.toTop5CategoriesChartData(values)));
  }
  toTop5CategoriesChartData(chartData) {
    return {
      labels: chartData.map(data => data.label),
      datasets: [{
        data: chartData.map(data => data.value),
        backgroundColor: ['#2196F3', '#009688', '#4CAF50', '#607D8B', '#E91E63']
      }]
    };
  }
  getAudienceOverviewUsers() {
    // Simulating request from local data
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      labels: (0,_demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.audienceOverviewUsersDemoLabels)(),
      data: {
        thisWeek: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.audienceOverviewUsersDemoData,
        lastWeek: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.audienceOverviewUsersDemoDataLastWeek
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => this.toAudienceOverviewUsersChartData(values)));
  }
  toAudienceOverviewUsersChartData(chartData) {
    return {
      labels: chartData.labels,
      datasets: [{
        label: 'Users',
        data: chartData.data.thisWeek,
        tension: 0,
        fill: false,
        borderColor: '#4285f4',
        pointRadius: 0
      }, {
        label: 'Users - Last Week',
        data: chartData.data.lastWeek,
        tension: 0,
        fill: false,
        borderColor: 'rgba(66, 133, 244, 0.3)',
        borderDash: [3, 5],
        pointRadius: 0
      }]
    };
  }
  getAudienceOverviewSessions() {
    // Simulating request from local data
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      labels: (0,_demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.audienceOverviewSessionsDemoLabels)(),
      data: {
        thisWeek: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.audienceOverviewSessionsDemoData,
        lastWeek: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.audienceOverviewSessionsDemoDataLastWeek
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => this.toAudienceOverviewSessionsChartData(values)));
  }
  toAudienceOverviewSessionsChartData(chartData) {
    return {
      labels: chartData.labels,
      datasets: [{
        label: 'Sessions',
        data: chartData.data.thisWeek,
        tension: 0,
        fill: false,
        backgroundColor: '#4285f4',
        borderColor: '#4285f4'
      }, {
        label: 'Sessions - Last Week',
        data: chartData.data.lastWeek,
        tension: 0,
        fill: false,
        borderColor: 'rgba(66, 133, 244, 0.3)',
        borderDash: [3, 5],
        pointRadius: 0
      }]
    };
  }
  getAudienceOverviewBounceRate() {
    // Simulating request from local data
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      labels: (0,_demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.audienceOverviewBounceRateDemoLabels)(),
      data: {
        thisWeek: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.audienceOverviewBounceRateDemoData,
        lastWeek: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.audienceOverviewBounceRateDemoDataLastWeek
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => this.toAudienceOverviewBounceRateChartData(values)));
  }
  toAudienceOverviewBounceRateChartData(chartData) {
    return {
      labels: chartData.labels,
      datasets: [{
        label: 'Bounce Rate',
        data: chartData.data.thisWeek,
        tension: 0,
        fill: false,
        backgroundColor: '#4285f4',
        borderColor: '#4285f4'
      }, {
        label: 'Bounce Rate - Last Week',
        data: chartData.data.lastWeek,
        tension: 0,
        fill: false,
        borderColor: 'rgba(66, 133, 244, 0.3)',
        borderDash: [3, 5],
        pointRadius: 0
      }]
    };
  }
  getAudienceOverviewSessionDuration() {
    // Simulating request from local data
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      labels: (0,_demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.audienceOverviewSessionDurationDemoLabels)(),
      data: {
        thisWeek: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.audienceOverviewSessionDurationDemoData,
        lastWeek: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.audienceOverviewSessionDurationDemoLastWeek
      }
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => this.toAudienceOverviewSessionDurationChartData(values)));
  }
  toAudienceOverviewSessionDurationChartData(chartData) {
    return {
      labels: chartData.labels,
      datasets: [{
        label: 'Session Duration',
        data: chartData.data.thisWeek,
        tension: 0,
        fill: false,
        backgroundColor: '#4285f4',
        borderColor: '#4285f4'
      }, {
        label: 'Session Duration - Last Week',
        data: chartData.data.lastWeek,
        tension: 0,
        fill: false,
        borderColor: 'rgba(66, 133, 244, 0.3)',
        borderDash: [3, 5],
        pointRadius: 0
      }]
    };
  }
  getRecentSalesTableData() {
    // Simulating request from local data
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(_demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.recentSalesTableDemoData);
  }
  getRecentSalesData() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      labels: (0,_demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.recentSalesChartDemoLabels)(),
      data: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.recentSalesChartDemoValues
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => this.toRecentSalesChartData(values)));
  }
  toRecentSalesChartData(chartData) {
    return {
      labels: chartData.labels,
      datasets: [{
        label: 'Sales',
        fill: 'start',
        backgroundColor: '#DBF6F9',
        borderColor: '#DBF6F9',
        data: chartData.data,
        tension: 0
      }]
    };
  }
  getAdvancedPieChartData() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)({
      labels: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.advancedPieChartDemoLabels,
      data: _demo_data_widget_demo_data__WEBPACK_IMPORTED_MODULE_1__.advancedPieChartDemoValues
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(values => this.toAdvancedPieChartData(values)));
  }
  toAdvancedPieChartData(chartData) {
    return {
      labels: chartData.labels,
      datasets: [{
        label: 'Sales',
        backgroundColor: ['#009688', '#2196F3', '#9C27B0', '#00BCD4', '#F44336', '#FF9800'],
        borderColor: 'transparent',
        data: chartData.data
      }]
    };
  }
  static #_ = this.ɵfac = function DashboardService_Factory(t) {
    return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: DashboardService,
    factory: DashboardService.ɵfac
  });
}


/***/ }),

/***/ 57372:
/*!*********************************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/advanced-pie-chart-widget/advanced-pie-chart-widget.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedPieChartWidgetComponent: () => (/* binding */ AdvancedPieChartWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/defaultsDeep */ 44010);
/* harmony import */ var _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/chart-widget/chart-widget-defaults */ 14576);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.component */ 61864);
/* harmony import */ var _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/scrollbar/scrollbar.component */ 86056);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 16667);












const _c0 = ["canvas"];
function AdvancedPieChartWidgetComponent_fury_card_header_subheading_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fury-card-header-subheading");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.options == null ? null : ctx_r0.options.subTitle);
  }
}
function AdvancedPieChartWidgetComponent_canvas_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 16);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx_r1.data.datasets)("labels", ctx_r1.data.labels)("legend", false)("options", ctx_r1.chartOptions);
  }
}
function AdvancedPieChartWidgetComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const value_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background-color", ctx_r2.getLegendBackground(i_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](value_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.getLegendLabel(i_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.getPercentageValue(value_r4));
  }
}
class AdvancedPieChartWidgetComponent {
  constructor() {
    this.chartOptions = (0,lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_4__["default"])({
      cutoutPercentage: 70,
      legend: {
        display: false
      }
    }, _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__.defaultChartOptions);
  }
  get data() {
    return this._data;
  }
  set data(data) {
    let total = 0;
    data.datasets.forEach(dataset => {
      total += dataset.data.reduce((pv, cv) => pv + cv, 0);
    });
    this._data = data;
    this.total = total;
  }
  get legendData() {
    return this._data.datasets[0].data;
  }
  getLegendLabel(index) {
    return this._data && this._data.labels.length > 0 ? this._data.labels[index] : null;
  }
  getLegendBackground(index) {
    return this._data && this._data.datasets && this._data.datasets[0] && this._data.datasets[0].backgroundColor ? this._data.datasets[0].backgroundColor[index] : null;
  }
  ngOnInit() {}
  getPercentageValue(value) {
    return `${Math.round(value / this.total * 100)}%`;
  }
  reload() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  static #_ = this.ɵfac = function AdvancedPieChartWidgetComponent_Factory(t) {
    return new (t || AdvancedPieChartWidgetComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: AdvancedPieChartWidgetComponent,
    selectors: [["fury-advanced-pie-chart-widget"]],
    viewQuery: function AdvancedPieChartWidgetComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
      }
    },
    inputs: {
      options: "options",
      chartOptions: "chartOptions",
      data: "data"
    },
    decls: 42,
    vars: 6,
    consts: [[4, "ngIf"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["fxLayout", "row", 1, "content"], ["fxFlex", "150px", 1, "chart"], ["baseChart", "", "type", "doughnut", "height", "150", "width", "150", 3, "datasets", "labels", "legend", "options", 4, "ngIf"], ["fxLayout", "column", "fxFlex", "0 1 100%", 1, "legend"], ["fxFlex", "none", 1, "total-value"], ["fxFlex", "none", 1, "total-label"], [1, "legend-items"], ["fxLayout", "row", "fxLayoutAlign", "space-between stretch"], ["class", "legend-item", "fxLayout", "row", 4, "ngFor", "ngForOf"], [1, "fade-out-overlay"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""], ["baseChart", "", "type", "doughnut", "height", "150", "width", "150", 3, "datasets", "labels", "legend", "options"], ["fxLayout", "row", 1, "legend-item"], [1, "item-color"], ["fxLayout", "column"], [1, "item-value"], [1, "item-label"], [1, "item-percent"]],
    template: function AdvancedPieChartWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fury-card")(1, "fury-card-header")(2, "fury-card-header-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AdvancedPieChartWidgetComponent_fury_card_header_subheading_4_Template, 2, 1, "fury-card-header-subheading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "fury-card-header-actions")(6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AdvancedPieChartWidgetComponent_Template_button_click_6_listener() {
          return ctx.reload();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 2)(10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "fury-card-content")(13, "div", 3)(14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AdvancedPieChartWidgetComponent_canvas_15_Template, 1, 4, "canvas", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 6)(17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "fury-scrollbar", 9)(22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, AdvancedPieChartWidgetComponent_div_23_Template, 9, 5, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-menu", null, 13)(27, "button", 14)(28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 15)(33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " more");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " More Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 14)(38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " remove_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, " Remove Widget ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.options == null ? null : ctx.options.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.options == null ? null : ctx.options.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.legendData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCard, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardHeader, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardHeaderTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardHeaderSubTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardHeaderActions, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardContent, _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__.ScrollbarComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.BaseChartDirective],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.chart[_ngcontent-%COMP%] {\n  padding: 12px 0;\n  width: 150px;\n}\n\n.legend[_ngcontent-%COMP%] {\n  margin-left: 16px;\n  font-weight: 300;\n  width: calc(100% - 150px - 16px);\n}\n.legend[_ngcontent-%COMP%]   .total-value[_ngcontent-%COMP%] {\n  font-size: 36px;\n  line-height: 1.15;\n}\n.legend[_ngcontent-%COMP%]   .total-label[_ngcontent-%COMP%] {\n  font-size: 24px;\n  line-height: 1.15;\n}\n.legend[_ngcontent-%COMP%]   .legend-items[_ngcontent-%COMP%] {\n  margin-top: 16px;\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  cursor: pointer;\n  min-width: 72px;\n  transition: color 300ms cubic-bezier(0.55, 0, 0.55, 0.2), opacity 300ms cubic-bezier(0.55, 0, 0.55, 0.2);\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]:hover   .item-label[_ngcontent-%COMP%], .legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]:hover   .item-percent[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .item-color[_ngcontent-%COMP%] {\n  width: 4px;\n  height: 32px;\n  margin-top: 6px;\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .item-value[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-left: 10px;\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .item-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.7;\n  margin-left: 10px;\n  margin-top: 2px;\n}\n.legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .item-percent[_ngcontent-%COMP%] {\n  font-size: 24px;\n  opacity: 0.7;\n  margin-left: 10px;\n  margin-top: 4px;\n}\n.legend[_ngcontent-%COMP%]   .fade-out-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  height: 100%;\n  width: 50px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2Rhc2hib2FyZC93aWRnZXRzL2FkdmFuY2VkLXBpZS1jaGFydC13aWRnZXQvYWR2YW5jZWQtcGllLWNoYXJ0LXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQXlDQTs7RUFBQTtBQUtBOztFQUFBO0FBT0E7O0VBQUE7QUFpQ0E7O0VBQUE7QUFpQkE7O0VBQUE7QUN2R0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQWdCRjs7QUFiQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQWdCRjtBQWRFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBZ0JKO0FBYkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFlSjtBQVpFO0VBQ0UsZ0JBQUE7QUFjSjtBQVhFO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHdHQUFBO0FBYUo7QUFUTTtFQUNFLFVBQUE7QUFXUjtBQVBJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBU047QUFOSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQVFOO0FBTEk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQU9OO0FBSkk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQU1OO0FBRkU7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSUoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3RoZW1pbmcvcGFsZXR0ZVwiO1xuXG4vKipcbiAgR2VuZXJhbFxuICovXG5cbiRwYWdlLWxvYWQtYmFja2dyb3VuZDogIzEzMjkzZDtcbiRlbGV2YXRpb246IDI7XG5cbiRjb2xvci1zdWNjZXNzOiAjN2NiMzQyO1xuXG4kc3BhY2luZzogMjRweDtcbiRib3JkZXItcmFkaXVzOiA4cHg7XG5cbiRwYWRkaW5nLXhsOiA0OHB4O1xuJHBhZGRpbmctbGc6IDMycHg7XG4kcGFkZGluZzogMjRweDtcbiRwYWRkaW5nLW1kOiAxNnB4O1xuJHBhZGRpbmctc206IDEycHg7XG4kcGFkZGluZy14czogOHB4O1xuJHBhZGRpbmcteHhzOiA0cHg7XG4kcGFkZGluZy0wOiAwcHg7XG5cbiRwYWRkaW5nczogKFxuICAnLTAnOiAkcGFkZGluZy0wLFxuICAteHhzOiAkcGFkZGluZy14eHMsXG4gIC14czogJHBhZGRpbmcteHMsXG4gIC1zbTogJHBhZGRpbmctc20sXG4gIC1tZDogJHBhZGRpbmctbWQsXG4gICcnOiAkcGFkZGluZyxcbiAgLWxnOiAkcGFkZGluZy1sZyxcbiAgLXhsOiAkcGFkZGluZy14bCxcbik7XG5cbiRpY29uLXNpemVzOiAoXG4gIC14czogMTRweCxcbiAgLXNtOiAxOHB4LFxuICAtbWQ6IDIwcHgsXG4gICcnOiAyNHB4LFxuICAtbGc6IDI4cHgsXG4gIC14bDogMzJweFxuKTtcblxuLyoqXG4gIENhcmRcbiAqL1xuJGNhcmQtaGVhZGVyLWhlaWdodDogNjRweDtcblxuLyoqXG4gIFRvb2xiYXJcbiAqL1xuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJHRvb2xiYXItei1pbmRleDogNTAwO1xuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xuXG4vKipcbiAgRm9vdGVyXG4gKi9cbiRmb290ZXItaGVpZ2h0OiA1NnB4O1xuJGZvb3Rlci16LWluZGV4OiAxMDA7XG5cbi8vIFNpZGVuYXZcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNzRweDtcbiRzaWRlbmF2LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8vIFNpZGVuYXYgSXRlbVxuXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcblxuJHNpZGVuYXYtaXRlbS1oZWlnaHQ6IDQ0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1yaWdodDogMTZweDtcbiRzaWRlbmF2LWl0ZW0tbWFyZ2luLXJpZ2h0OiA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDEgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDM6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMiArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xuXG4vLyBTaWRlbmF2IHdpZHRoIGNhbiBiZSBjaGFuZ2VkIGluIHNyYy9AZnVyeS9hbmltYXRpb25zL3NpZGVuYXYuYW5pbWF0aW9uLnRzXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XG5cbiRibGluay1zY3JvbGxiYXItd2lkdGg6IDEycHg7XG5cbi8vIFBhZ2UgTGF5b3V0XG4kcGFnZS1sYXlvdXQtaGVpZ2h0OiAyMDBweDtcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vKipcbiAgTWl4aW5zXG4gKi9cbiRtZWRpYS14czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJztcbkBtaXhpbiBtZWRpYS14cyB7XG4gIEBtZWRpYSAjeyRtZWRpYS14c30ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gIEluYm94XG4gKi9cbiRpbmJveC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuJGluYm94LXNlYXJjaGJhci1oZWlnaHQ6IDU0cHg7XG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcbiRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ6IDU0cHg7XG4iLCJAdXNlIFwic2FzczptYXRoXCI7XG5AaW1wb3J0IFwidmFyXCI7XG5cbi5jaGFydCB7XG4gIHBhZGRpbmc6IG1hdGguZGl2KCRzcGFjaW5nLCAyKSAwO1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5sZWdlbmQge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1MHB4IC0gMTZweCk7XG5cbiAgLnRvdGFsLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gIH1cblxuICAudG90YWwtbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgfVxuXG4gIC5sZWdlbmQtaXRlbXMge1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cblxuICAubGVnZW5kLWl0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWluLXdpZHRoOiA3MnB4O1xuICAgIHRyYW5zaXRpb246IGNvbG9yICRzd2lmdC1lYXNlLWluLWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbixcbiAgICBvcGFjaXR5ICRzd2lmdC1lYXNlLWluLWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLXRpbWluZy1mdW5jdGlvbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgLml0ZW0tbGFiZWwsIC5pdGVtLXBlcmNlbnQge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pdGVtLWNvbG9yIHtcbiAgICAgIHdpZHRoOiA0cHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgfVxuXG4gICAgLml0ZW0tdmFsdWUge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgfVxuXG4gICAgLml0ZW0tbGFiZWwge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAycHg7XG4gICAgfVxuXG4gICAgLml0ZW0tcGVyY2VudCB7XG4gICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICBvcGFjaXR5OiAwLjc7XG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG4gIH1cblxuICAuZmFkZS1vdXQtb3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA1MHB4O1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 88459:
/*!******************************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/advanced-pie-chart-widget/advanced-pie-chart-widget.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdvancedPieChartWidgetModule: () => (/* binding */ AdvancedPieChartWidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/loading-overlay/loading-overlay.module */ 6354);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@fury/shared/scrollbar/scrollbar.module */ 31907);
/* harmony import */ var _advanced_pie_chart_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./advanced-pie-chart-widget.component */ 57372);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 16667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 61699);








class AdvancedPieChartWidgetModule {
  static #_ = this.ɵfac = function AdvancedPieChartWidgetModule_Factory(t) {
    return new (t || AdvancedPieChartWidgetModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AdvancedPieChartWidgetModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
    // Core
    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__.FuryCardModule, _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayModule, _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_3__.ScrollbarModule, ng2_charts__WEBPACK_IMPORTED_MODULE_7__.NgChartsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AdvancedPieChartWidgetModule, {
    declarations: [_advanced_pie_chart_widget_component__WEBPACK_IMPORTED_MODULE_4__.AdvancedPieChartWidgetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
    // Core
    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__.FuryCardModule, _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayModule, _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_3__.ScrollbarModule, ng2_charts__WEBPACK_IMPORTED_MODULE_7__.NgChartsModule],
    exports: [_advanced_pie_chart_widget_component__WEBPACK_IMPORTED_MODULE_4__.AdvancedPieChartWidgetComponent]
  });
})();

/***/ }),

/***/ 56993:
/*!*******************************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/audience-overview-widget/audience-overview-widget.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudienceOverviewWidgetComponent: () => (/* binding */ AudienceOverviewWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash-es/defaultsDeep */ 44010);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/chart-widget/chart-widget-defaults */ 14576);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 51333);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ 69400);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 55309);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ 96355);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.component */ 61864);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-charts */ 16667);

















const _c0 = ["canvas"];
function AudienceOverviewWidgetComponent_div_2_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "trending_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AudienceOverviewWidgetComponent_div_2_mat_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "trending_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function AudienceOverviewWidgetComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AudienceOverviewWidgetComponent_div_2_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const property_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.setActiveOptions(property_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AudienceOverviewWidgetComponent_div_2_mat_icon_6_Template, 2, 0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AudienceOverviewWidgetComponent_div_2_mat_icon_7_Template, 2, 0, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "vs last 7 days");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const property_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r0.isActive(property_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](property_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](property_r2.sum);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("success", property_r2.gain >= 0)("warn", property_r2.gain < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", property_r2.gain >= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", property_r2.gain < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", property_r2.gain, "% ");
  }
}
function AudienceOverviewWidgetComponent_canvas_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "canvas", 20);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("datasets", ctx_r1.activeOptions.data.datasets)("labels", ctx_r1.activeOptions.data.labels)("legend", false)("options", ctx_r1.chartOptions);
  }
}
class AudienceOverviewWidgetComponent {
  constructor() {
    this.chartOptions = (0,lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_3__["default"])({
      scales: {
        x: {
          display: true,
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            fontColor: '#9e9e9e',
            padding: 12
          }
        },
        y: {
          display: true,
          position: 'right',
          gridLines: {
            drawBorder: false,
            offsetGridLines: true
          },
          ticks: {
            fontColor: '#9e9e9e',
            maxTicksLimit: 5
          }
        }
      },
      layout: {
        padding: {
          left: 5,
          right: 5,
          top: 5
        }
      },
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      hover: {
        intersect: true
      }
    }, _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__.defaultChartOptions);
    this.timeframe = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.UntypedFormControl('last7');
    this._activeOptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject({
      label: ''
    });
  }
  get options() {
    return this._options;
  }
  set options(options) {
    if (options) {
      this._options = options;
      options.forEach(option => {
        if (!option.sum) {
          const data = option.data.datasets[0].data;
          option.sum = data.reduce((sum, x) => sum + x);
        }
        if (!option.gain && option.data.datasets && option.data.datasets.length > 1) {
          const data1 = option.data.datasets[0].data;
          const data2 = option.data.datasets[1].data;
          const sum1 = data1.reduce((sum, x) => sum + x);
          const sum2 = data2.reduce((sum, x) => sum + x);
          option.gain = Math.round((sum1 - sum2) / sum2 * 100 * 100) / 100;
        }
      });
      this.setActiveOptions(options[0]);
    }
  }
  get activeOptions() {
    return this._activeOptions.getValue();
  }
  set activeOptions(options) {
    this._activeOptions.next(options);
  }
  setActiveOptions(options) {
    this.activeOptions = options;
  }
  isActive(options) {
    return this.activeOptions === options;
  }
  reload() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  static #_ = this.ɵfac = function AudienceOverviewWidgetComponent_Factory(t) {
    return new (t || AudienceOverviewWidgetComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AudienceOverviewWidgetComponent,
    selectors: [["fury-audience-overview-widget"]],
    viewQuery: function AudienceOverviewWidgetComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
      }
    },
    inputs: {
      chartOptions: "chartOptions",
      options: "options"
    },
    decls: 19,
    vars: 3,
    consts: [["fxFlex", "auto"], ["fxLayout", "column", "fxLayout.gt-xs", "row", 1, "header"], ["class", "property", "fxLayout", "row", "fxLayout.gt-xs", "column", "fxLayoutAlign", "start center", "fxLayoutAlign.gt-xs", "start stretch", "fxLayoutGap", "8px", "fxLayoutGap.gt-xs", "0", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "card-content"], ["baseChart", "", "type", "line", 3, "datasets", "labels", "legend", "options", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "actions"], [1, "select"], [3, "formControl"], ["value", "last7"], ["value", "last14"], ["value", "lastMonth"], ["value", "custom"], ["color", "primary", "mat-button", "", "type", "button"], ["fxLayout", "row", "fxLayout.gt-xs", "column", "fxLayoutAlign", "start center", "fxLayoutAlign.gt-xs", "start stretch", "fxLayoutGap", "8px", "fxLayoutGap.gt-xs", "0", 1, "property", 3, "click"], ["fxFlex", "grow", 1, "label"], ["fxFlex", "grow", 1, "value"], ["fxFlex", "grow", 1, "gain"], ["class", "icon", 4, "ngIf"], ["fxFlex", "grow", 1, "compared"], [1, "icon"], ["baseChart", "", "type", "line", 3, "datasets", "labels", "legend", "options"]],
    template: function AudienceOverviewWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "fury-card", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AudienceOverviewWidgetComponent_div_2_Template, 11, 11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AudienceOverviewWidgetComponent_canvas_4_Template, 1, 4, "canvas", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "fury-card-actions", 5)(6, "mat-form-field", 6)(7, "mat-select", 7)(8, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Last 7 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Last 14 Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Last Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Custom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " AUDIENCE OVERVIEW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.options);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.activeOptions == null ? null : ctx.activeOptions.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.timeframe);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__.MatDivider, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatOption, _angular_material_select__WEBPACK_IMPORTED_MODULE_12__.MatSelect, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutGapDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__.DefaultFlexDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCard, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardContent, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardActions, ng2_charts__WEBPACK_IMPORTED_MODULE_14__.BaseChartDirective],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[_nghost-%COMP%] {\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%]   .property[_ngcontent-%COMP%] {\n  padding: 24px;\n  cursor: pointer;\n  border-top: 4px solid transparent;\n}\n.header[_ngcontent-%COMP%]   .property[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font: var(--font-body-1);\n  padding-bottom: 6px;\n}\n.header[_ngcontent-%COMP%]   .property[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font: var(--font-headline);\n}\n.header[_ngcontent-%COMP%]   .property[_ngcontent-%COMP%]   .gain[_ngcontent-%COMP%] {\n  font: var(--font-caption);\n}\n.header[_ngcontent-%COMP%]   .property[_ngcontent-%COMP%]   .gain[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  height: 13px;\n  width: 13px;\n  vertical-align: middle;\n}\n.header[_ngcontent-%COMP%]   .property[_ngcontent-%COMP%]   .compared[_ngcontent-%COMP%] {\n  font: var(--font-caption);\n  visibility: hidden;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  height: 248px;\n}\n\n.actions[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  margin-bottom: -1.34375em;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2Rhc2hib2FyZC93aWRnZXRzL2F1ZGllbmNlLW92ZXJ2aWV3LXdpZGdldC9hdWRpZW5jZS1vdmVydmlldy13aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O0VBQUE7QUF5Q0E7O0VBQUE7QUFLQTs7RUFBQTtBQU9BOztFQUFBO0FBaUNBOztFQUFBO0FBaUJBOztFQUFBO0FDdkdBO0VBQ0UsWUFBQTtBQWdCRjs7QUFYRTtFQUNFLGFERU07RUNETixlQUFBO0VBQ0EsaUNBQUE7QUFjSjtBQVpJO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtBQWNOO0FBWEk7RUFDRSwwQkFBQTtBQWFOO0FBVkk7RUFDRSx5QkFBQTtBQVlOO0FBVk07RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQVlSO0FBUkk7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBVU47O0FBTEE7RUFDRSxhQUFBO0FBUUY7O0FBSkU7RUFDRSx5QkFBQTtBQU9KIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90aGVtaW5nL3BhbGV0dGVcIjtcblxuLyoqXG4gIEdlbmVyYWxcbiAqL1xuXG4kcGFnZS1sb2FkLWJhY2tncm91bmQ6ICMxMzI5M2Q7XG4kZWxldmF0aW9uOiAyO1xuXG4kY29sb3Itc3VjY2VzczogIzdjYjM0MjtcblxuJHNwYWNpbmc6IDI0cHg7XG4kYm9yZGVyLXJhZGl1czogOHB4O1xuXG4kcGFkZGluZy14bDogNDhweDtcbiRwYWRkaW5nLWxnOiAzMnB4O1xuJHBhZGRpbmc6IDI0cHg7XG4kcGFkZGluZy1tZDogMTZweDtcbiRwYWRkaW5nLXNtOiAxMnB4O1xuJHBhZGRpbmcteHM6IDhweDtcbiRwYWRkaW5nLXh4czogNHB4O1xuJHBhZGRpbmctMDogMHB4O1xuXG4kcGFkZGluZ3M6IChcbiAgJy0wJzogJHBhZGRpbmctMCxcbiAgLXh4czogJHBhZGRpbmcteHhzLFxuICAteHM6ICRwYWRkaW5nLXhzLFxuICAtc206ICRwYWRkaW5nLXNtLFxuICAtbWQ6ICRwYWRkaW5nLW1kLFxuICAnJzogJHBhZGRpbmcsXG4gIC1sZzogJHBhZGRpbmctbGcsXG4gIC14bDogJHBhZGRpbmcteGwsXG4pO1xuXG4kaWNvbi1zaXplczogKFxuICAteHM6IDE0cHgsXG4gIC1zbTogMThweCxcbiAgLW1kOiAyMHB4LFxuICAnJzogMjRweCxcbiAgLWxnOiAyOHB4LFxuICAteGw6IDMycHhcbik7XG5cbi8qKlxuICBDYXJkXG4gKi9cbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XG5cbi8qKlxuICBUb29sYmFyXG4gKi9cbiR0b29sYmFyLWhlaWdodDogNjRweDtcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcbiR0b29sYmFyLWJ1dHRvbi13aWR0aDogNjRweDtcblxuLyoqXG4gIEZvb3RlclxuICovXG4kZm9vdGVyLWhlaWdodDogNTZweDtcbiRmb290ZXItei1pbmRleDogMTAwO1xuXG4vLyBTaWRlbmF2XG4kc2lkZW5hdi13aWR0aDogMjgwcHg7XG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDc0cHg7XG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vLyBTaWRlbmF2IEl0ZW1cblxuJHNpZGVuYXYtaXRlbS1pY29uLXNpemU6IDIycHg7XG5cbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ6IDI0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctcmlnaHQ6IDE2cHg7XG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMjogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxICsgOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDQ6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMyArIDhweDtcblxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xuJHNpZGVuYXYtei1pbmRleDogNzAwO1xuXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xuXG4vLyBQYWdlIExheW91dFxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XG4kcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcblxuLyoqXG4gIE1peGluc1xuICovXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgI3skbWVkaWEteHN9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4kbWVkaWEtc206ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJztcbkBtaXhpbiBtZWRpYS1zbSB7XG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICBJbmJveFxuICovXG4kaW5ib3gtaGVhZGVyLWhlaWdodDogNjRweDtcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xuJGluYm94LXN0YXItY29sb3I6ICNmZmMxMDc7XG4kaW5ib3gtbWFpbC1saXN0LWl0ZW0taGVpZ2h0OiA1NHB4O1xuIiwiQHVzZSAnc2FzczptYXRoJztcbkBpbXBvcnQgXCJ2YXJcIjtcblxuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5oZWFkZXIge1xuXG4gIC5wcm9wZXJ0eSB7XG4gICAgcGFkZGluZzogJHNwYWNpbmc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAgIC5sYWJlbCB7XG4gICAgICBmb250OiB2YXIoLS1mb250LWJvZHktMSk7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogbWF0aC5kaXYoJHNwYWNpbmcsIDQpO1xuICAgIH1cblxuICAgIC52YWx1ZSB7XG4gICAgICBmb250OiB2YXIoLS1mb250LWhlYWRsaW5lKTtcbiAgICB9XG5cbiAgICAuZ2FpbiB7XG4gICAgICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xuXG4gICAgICAuaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgaGVpZ2h0OiAxM3B4O1xuICAgICAgICB3aWR0aDogMTNweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29tcGFyZWQge1xuICAgICAgZm9udDogdmFyKC0tZm9udC1jYXB0aW9uKTtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gIH1cbn1cblxuLmNhcmQtY29udGVudCB7XG4gIGhlaWdodDogMjQ4cHg7XG59XG5cbi5hY3Rpb25zIHtcbiAgLnNlbGVjdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEuMzQzNzVlbTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 17449:
/*!****************************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/audience-overview-widget/audience-overview-widget.module.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AudienceOverviewWidgetModule: () => (/* binding */ AudienceOverviewWidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 28849);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/loading-overlay/loading-overlay.module */ 6354);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _audience_overview_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audience-overview-widget.component */ 56993);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 16667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);








class AudienceOverviewWidgetModule {
  static #_ = this.ɵfac = function AudienceOverviewWidgetModule_Factory(t) {
    return new (t || AudienceOverviewWidgetModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: AudienceOverviewWidgetModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
    // Core
    _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__.FuryCardModule, ng2_charts__WEBPACK_IMPORTED_MODULE_7__.NgChartsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AudienceOverviewWidgetModule, {
    declarations: [_audience_overview_widget_component__WEBPACK_IMPORTED_MODULE_3__.AudienceOverviewWidgetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
    // Core
    _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__.FuryCardModule, ng2_charts__WEBPACK_IMPORTED_MODULE_7__.NgChartsModule],
    exports: [_audience_overview_widget_component__WEBPACK_IMPORTED_MODULE_3__.AudienceOverviewWidgetComponent]
  });
})();

/***/ }),

/***/ 44792:
/*!***************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/bar-chart-widget/bar-chart-widget.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarChartWidgetComponent: () => (/* binding */ BarChartWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/defaultsDeep */ 44010);
/* harmony import */ var _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/chart-widget/chart-widget-defaults */ 14576);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _fury_shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/loading-overlay/loading-overlay.component */ 15013);
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.component */ 61864);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ 16667);











const _c0 = ["canvas"];
function BarChartWidgetComponent_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BarChartWidgetComponent_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function BarChartWidgetComponent_canvas_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 11);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx_r2.data.datasets)("labels", ctx_r2.data.labels)("legend", false)("options", ctx_r2.chartOptions);
  }
}
class BarChartWidgetComponent {
  constructor() {
    this.chartOptions = (0,lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_4__["default"])({
      layout: {
        padding: {
          left: 24,
          right: 24,
          top: 16,
          bottom: 24
        }
      },
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      hover: {
        intersect: true
      }
    }, _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__.defaultChartOptions);
  }
  reload() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  static #_ = this.ɵfac = function BarChartWidgetComponent_Factory(t) {
    return new (t || BarChartWidgetComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: BarChartWidgetComponent,
    selectors: [["fury-bar-chart-widget"]],
    viewQuery: function BarChartWidgetComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
      }
    },
    inputs: {
      data: "data",
      options: "options",
      chartOptions: "chartOptions"
    },
    decls: 35,
    vars: 16,
    consts: [[1, "header"], [1, "subheading"], [4, "ngIf"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "card-content"], ["baseChart", "", "type", "bar", 3, "datasets", "labels", "legend", "options", 4, "ngIf"], [3, "isLoading"], ["menu", "matMenu"], ["mat-menu-item", ""], ["disabled", "", "mat-menu-item", ""], ["baseChart", "", "type", "bar", 3, "datasets", "labels", "legend", "options"]],
    template: function BarChartWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fury-card")(1, "fury-card-header", 0)(2, "fury-card-header-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "fury-card-header-subheading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, BarChartWidgetComponent_mat_icon_5_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BarChartWidgetComponent_mat_icon_6_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "fury-card-header-actions")(9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BarChartWidgetComponent_Template_button_click_9_listener() {
          return ctx.reload();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 4)(13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "fury-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, BarChartWidgetComponent_canvas_16_Template, 1, 4, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "fury-loading-overlay", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-menu", null, 8)(20, "button", 9)(21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 10)(26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " more");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " More Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 9)(31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " remove_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Remove Widget ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx.options.background)("color", ctx.options.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx.options.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.options.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx.options.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.options.gain >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.options.gain < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.options.gain, "% ", ctx.options.subTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoading", ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _fury_shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayComponent, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCard, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeader, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeaderTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeaderSubTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeaderActions, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardContent, ng2_charts__WEBPACK_IMPORTED_MODULE_9__.BaseChartDirective],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 150px;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n}\n.header[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  font: var(--font-caption);\n}\n.header[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n  vertical-align: text-top;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2Rhc2hib2FyZC93aWRnZXRzL2Jhci1jaGFydC13aWRnZXQvYmFyLWNoYXJ0LXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQXlDQTs7RUFBQTtBQUtBOztFQUFBO0FBT0E7O0VBQUE7QUFpQ0E7O0VBQUE7QUFpQkE7O0VBQUE7QUN2R0E7RUFDRSxVQUFBO0VBQ0EsYUFBQTtBQWdCRjs7QUFiQTtFQUNFLGtCQUFBO0FBZ0JGO0FBZEU7RUFDRSx5QkFBQTtBQWdCSjtBQWRJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFnQk4iLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3RoZW1pbmcvcGFsZXR0ZVwiO1xuXG4vKipcbiAgR2VuZXJhbFxuICovXG5cbiRwYWdlLWxvYWQtYmFja2dyb3VuZDogIzEzMjkzZDtcbiRlbGV2YXRpb246IDI7XG5cbiRjb2xvci1zdWNjZXNzOiAjN2NiMzQyO1xuXG4kc3BhY2luZzogMjRweDtcbiRib3JkZXItcmFkaXVzOiA4cHg7XG5cbiRwYWRkaW5nLXhsOiA0OHB4O1xuJHBhZGRpbmctbGc6IDMycHg7XG4kcGFkZGluZzogMjRweDtcbiRwYWRkaW5nLW1kOiAxNnB4O1xuJHBhZGRpbmctc206IDEycHg7XG4kcGFkZGluZy14czogOHB4O1xuJHBhZGRpbmcteHhzOiA0cHg7XG4kcGFkZGluZy0wOiAwcHg7XG5cbiRwYWRkaW5nczogKFxuICAnLTAnOiAkcGFkZGluZy0wLFxuICAteHhzOiAkcGFkZGluZy14eHMsXG4gIC14czogJHBhZGRpbmcteHMsXG4gIC1zbTogJHBhZGRpbmctc20sXG4gIC1tZDogJHBhZGRpbmctbWQsXG4gICcnOiAkcGFkZGluZyxcbiAgLWxnOiAkcGFkZGluZy1sZyxcbiAgLXhsOiAkcGFkZGluZy14bCxcbik7XG5cbiRpY29uLXNpemVzOiAoXG4gIC14czogMTRweCxcbiAgLXNtOiAxOHB4LFxuICAtbWQ6IDIwcHgsXG4gICcnOiAyNHB4LFxuICAtbGc6IDI4cHgsXG4gIC14bDogMzJweFxuKTtcblxuLyoqXG4gIENhcmRcbiAqL1xuJGNhcmQtaGVhZGVyLWhlaWdodDogNjRweDtcblxuLyoqXG4gIFRvb2xiYXJcbiAqL1xuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJHRvb2xiYXItei1pbmRleDogNTAwO1xuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xuXG4vKipcbiAgRm9vdGVyXG4gKi9cbiRmb290ZXItaGVpZ2h0OiA1NnB4O1xuJGZvb3Rlci16LWluZGV4OiAxMDA7XG5cbi8vIFNpZGVuYXZcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNzRweDtcbiRzaWRlbmF2LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8vIFNpZGVuYXYgSXRlbVxuXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcblxuJHNpZGVuYXYtaXRlbS1oZWlnaHQ6IDQ0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1yaWdodDogMTZweDtcbiRzaWRlbmF2LWl0ZW0tbWFyZ2luLXJpZ2h0OiA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDEgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDM6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMiArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xuXG4vLyBTaWRlbmF2IHdpZHRoIGNhbiBiZSBjaGFuZ2VkIGluIHNyYy9AZnVyeS9hbmltYXRpb25zL3NpZGVuYXYuYW5pbWF0aW9uLnRzXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XG5cbiRibGluay1zY3JvbGxiYXItd2lkdGg6IDEycHg7XG5cbi8vIFBhZ2UgTGF5b3V0XG4kcGFnZS1sYXlvdXQtaGVpZ2h0OiAyMDBweDtcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vKipcbiAgTWl4aW5zXG4gKi9cbiRtZWRpYS14czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJztcbkBtaXhpbiBtZWRpYS14cyB7XG4gIEBtZWRpYSAjeyRtZWRpYS14c30ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gIEluYm94XG4gKi9cbiRpbmJveC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuJGluYm94LXNlYXJjaGJhci1oZWlnaHQ6IDU0cHg7XG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcbiRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ6IDU0cHg7XG4iLCJAdXNlICdzYXNzOm1hdGgnO1xuQGltcG9ydCBcInZhclwiO1xuXG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmc6IG1hdGguZGl2KCRzcGFjaW5nLCAxLjUpICRzcGFjaW5nO1xuXG4gIC5zdWJoZWFkaW5nIHtcbiAgICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICAgIH1cbiAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 32837:
/*!************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/bar-chart-widget/bar-chart-widget.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BarChartWidgetModule: () => (/* binding */ BarChartWidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/loading-overlay/loading-overlay.module */ 6354);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _bar_chart_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar-chart-widget.component */ 44792);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 16667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







class BarChartWidgetModule {
  static #_ = this.ɵfac = function BarChartWidgetModule_Factory(t) {
    return new (t || BarChartWidgetModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: BarChartWidgetModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
    // Core
    _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_0__.LoadingOverlayModule,
    // Chart Widget Style
    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__.FuryCardModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](BarChartWidgetModule, {
    declarations: [_bar_chart_widget_component__WEBPACK_IMPORTED_MODULE_2__.BarChartWidgetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
    // Core
    _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_0__.LoadingOverlayModule,
    // Chart Widget Style
    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__.FuryCardModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule],
    exports: [_bar_chart_widget_component__WEBPACK_IMPORTED_MODULE_2__.BarChartWidgetComponent]
  });
})();

/***/ }),

/***/ 70198:
/*!*******************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/donut-chart-widget/donut-chart-widget.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DonutChartWidgetComponent: () => (/* binding */ DonutChartWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/defaultsDeep */ 44010);
/* harmony import */ var _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/chart-widget/chart-widget-defaults */ 14576);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.component */ 61864);
/* harmony import */ var _fury_shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/loading-overlay/loading-overlay.component */ 15013);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 16667);












const _c0 = ["canvas"];
function DonutChartWidgetComponent_canvas_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 13);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx_r0.data.datasets)("labels", ctx_r0.data.labels)("legend", false)("options", ctx_r0.chartOptions);
  }
}
class DonutChartWidgetComponent {
  constructor() {
    this.chartOptions = (0,lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_4__["default"])({
      layout: {
        padding: {
          left: 5,
          right: 5,
          top: 5
        }
      }
    }, _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__.defaultChartOptions);
  }
  reload() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  static #_ = this.ɵfac = function DonutChartWidgetComponent_Factory(t) {
    return new (t || DonutChartWidgetComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DonutChartWidgetComponent,
    selectors: [["fury-donut-chart-widget"]],
    viewQuery: function DonutChartWidgetComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
      }
    },
    inputs: {
      data: "data",
      options: "options",
      chartOptions: "chartOptions"
    },
    decls: 45,
    vars: 5,
    consts: [["fxFlex", "auto"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "content"], ["baseChart", "", "type", "pie", 3, "datasets", "labels", "legend", "options", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "footer"], ["fxFlex", "grow", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "section"], [1, "value"], [1, "label"], [3, "isLoading"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""], ["baseChart", "", "type", "pie", 3, "datasets", "labels", "legend", "options"]],
    template: function DonutChartWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fury-card", 0)(1, "fury-card-header")(2, "fury-card-header-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "fury-card-header-subheading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "fury-card-header-actions")(7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DonutChartWidgetComponent_Template_button_click_7_listener() {
          return ctx.reload();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 2)(11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "fury-card-content")(14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DonutChartWidgetComponent_canvas_15_Template, 1, 4, "canvas", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "fury-card-actions", 5)(17, "div", 6)(18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "1096");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Total Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 6)(23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "598");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Top Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "fury-loading-overlay", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "mat-menu", null, 10)(30, "button", 11)(31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "button", 12)(36, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, " more");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, " More Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "button", 11)(41, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, " remove_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, " Remove Widget ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.options.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.options.subTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoading", ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCard, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardHeader, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardHeaderTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardHeaderSubTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardHeaderActions, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardContent, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardActions, _fury_shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_2__.LoadingOverlayComponent, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.BaseChartDirective],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.content[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: flex;\n  flex: 1;\n  position: relative;\n}\n\n.footer[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font: var(--font-title);\n}\n.footer[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font: var(--font-body-2);\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2Rhc2hib2FyZC93aWRnZXRzL2RvbnV0LWNoYXJ0LXdpZGdldC9kb251dC1jaGFydC13aWRnZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O0VBQUE7QUF5Q0E7O0VBQUE7QUFLQTs7RUFBQTtBQU9BOztFQUFBO0FBaUNBOztFQUFBO0FBaUJBOztFQUFBO0FDeEdBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUFpQkY7O0FBWEk7RUFDRSx1QkFBQTtBQWNOO0FBWEk7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FBYU4iLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3RoZW1pbmcvcGFsZXR0ZVwiO1xuXG4vKipcbiAgR2VuZXJhbFxuICovXG5cbiRwYWdlLWxvYWQtYmFja2dyb3VuZDogIzEzMjkzZDtcbiRlbGV2YXRpb246IDI7XG5cbiRjb2xvci1zdWNjZXNzOiAjN2NiMzQyO1xuXG4kc3BhY2luZzogMjRweDtcbiRib3JkZXItcmFkaXVzOiA4cHg7XG5cbiRwYWRkaW5nLXhsOiA0OHB4O1xuJHBhZGRpbmctbGc6IDMycHg7XG4kcGFkZGluZzogMjRweDtcbiRwYWRkaW5nLW1kOiAxNnB4O1xuJHBhZGRpbmctc206IDEycHg7XG4kcGFkZGluZy14czogOHB4O1xuJHBhZGRpbmcteHhzOiA0cHg7XG4kcGFkZGluZy0wOiAwcHg7XG5cbiRwYWRkaW5nczogKFxuICAnLTAnOiAkcGFkZGluZy0wLFxuICAteHhzOiAkcGFkZGluZy14eHMsXG4gIC14czogJHBhZGRpbmcteHMsXG4gIC1zbTogJHBhZGRpbmctc20sXG4gIC1tZDogJHBhZGRpbmctbWQsXG4gICcnOiAkcGFkZGluZyxcbiAgLWxnOiAkcGFkZGluZy1sZyxcbiAgLXhsOiAkcGFkZGluZy14bCxcbik7XG5cbiRpY29uLXNpemVzOiAoXG4gIC14czogMTRweCxcbiAgLXNtOiAxOHB4LFxuICAtbWQ6IDIwcHgsXG4gICcnOiAyNHB4LFxuICAtbGc6IDI4cHgsXG4gIC14bDogMzJweFxuKTtcblxuLyoqXG4gIENhcmRcbiAqL1xuJGNhcmQtaGVhZGVyLWhlaWdodDogNjRweDtcblxuLyoqXG4gIFRvb2xiYXJcbiAqL1xuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJHRvb2xiYXItei1pbmRleDogNTAwO1xuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xuXG4vKipcbiAgRm9vdGVyXG4gKi9cbiRmb290ZXItaGVpZ2h0OiA1NnB4O1xuJGZvb3Rlci16LWluZGV4OiAxMDA7XG5cbi8vIFNpZGVuYXZcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNzRweDtcbiRzaWRlbmF2LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8vIFNpZGVuYXYgSXRlbVxuXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcblxuJHNpZGVuYXYtaXRlbS1oZWlnaHQ6IDQ0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1yaWdodDogMTZweDtcbiRzaWRlbmF2LWl0ZW0tbWFyZ2luLXJpZ2h0OiA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDEgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDM6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMiArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xuXG4vLyBTaWRlbmF2IHdpZHRoIGNhbiBiZSBjaGFuZ2VkIGluIHNyYy9AZnVyeS9hbmltYXRpb25zL3NpZGVuYXYuYW5pbWF0aW9uLnRzXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XG5cbiRibGluay1zY3JvbGxiYXItd2lkdGg6IDEycHg7XG5cbi8vIFBhZ2UgTGF5b3V0XG4kcGFnZS1sYXlvdXQtaGVpZ2h0OiAyMDBweDtcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vKipcbiAgTWl4aW5zXG4gKi9cbiRtZWRpYS14czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJztcbkBtaXhpbiBtZWRpYS14cyB7XG4gIEBtZWRpYSAjeyRtZWRpYS14c30ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gIEluYm94XG4gKi9cbiRpbmJveC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuJGluYm94LXNlYXJjaGJhci1oZWlnaHQ6IDU0cHg7XG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcbiRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ6IDU0cHg7XG4iLCJAaW1wb3J0IFwidmFyXCI7XG5cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb290ZXIge1xuICAuc2VjdGlvbiB7XG5cbiAgICAudmFsdWUge1xuICAgICAgZm9udDogdmFyKC0tZm9udC10aXRsZSk7XG4gICAgfVxuXG4gICAgLmxhYmVsIHtcbiAgICAgIGZvbnQ6IHZhcigtLWZvbnQtYm9keS0yKTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 81148:
/*!****************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/donut-chart-widget/donut-chart-widget.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DonutChartWidgetModule: () => (/* binding */ DonutChartWidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/loading-overlay/loading-overlay.module */ 6354);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _donut_chart_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./donut-chart-widget.component */ 70198);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 16667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







class DonutChartWidgetModule {
  static #_ = this.ɵfac = function DonutChartWidgetModule_Factory(t) {
    return new (t || DonutChartWidgetModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: DonutChartWidgetModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
    // Core
    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__.FuryCardModule, _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DonutChartWidgetModule, {
    declarations: [_donut_chart_widget_component__WEBPACK_IMPORTED_MODULE_3__.DonutChartWidgetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
    // Core
    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__.FuryCardModule, _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule],
    exports: [_donut_chart_widget_component__WEBPACK_IMPORTED_MODULE_3__.DonutChartWidgetComponent]
  });
})();

/***/ }),

/***/ 21169:
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/line-chart-widget/line-chart-widget.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineChartWidgetComponent: () => (/* binding */ LineChartWidgetComponent)
/* harmony export */ });
/* harmony import */ var lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/defaultsDeep */ 44010);
/* harmony import */ var _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/chart-widget/chart-widget-defaults */ 14576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _fury_shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/loading-overlay/loading-overlay.component */ 15013);
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.component */ 61864);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ 16667);










function LineChartWidgetComponent_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "arrow_upward");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LineChartWidgetComponent_mat_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "arrow_downward");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function LineChartWidgetComponent_canvas_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 11);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx_r2.data.datasets)("labels", ctx_r2.data.labels)("legend", false)("options", ctx_r2.chartOptions);
  }
}
class LineChartWidgetComponent {
  constructor() {
    this.chartOptions = (0,lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_4__["default"])({
      layout: {
        padding: {
          left: 24,
          right: 24,
          top: 16,
          bottom: 24
        }
      },
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      hover: {
        intersect: true
      }
    }, _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__.defaultChartOptions);
  }
  reload() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  static #_ = this.ɵfac = function LineChartWidgetComponent_Factory(t) {
    return new (t || LineChartWidgetComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: LineChartWidgetComponent,
    selectors: [["fury-line-chart-widget"]],
    inputs: {
      data: "data",
      options: "options",
      chartOptions: "chartOptions"
    },
    decls: 35,
    vars: 16,
    consts: [[1, "header"], [1, "subheading"], [4, "ngIf"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "card-content"], ["baseChart", "", "type", "line", 3, "datasets", "labels", "legend", "options", 4, "ngIf"], [3, "isLoading"], ["menu", "matMenu"], ["mat-menu-item", ""], ["disabled", "", "mat-menu-item", ""], ["baseChart", "", "type", "line", 3, "datasets", "labels", "legend", "options"]],
    template: function LineChartWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fury-card")(1, "fury-card-header", 0)(2, "fury-card-header-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "fury-card-header-subheading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, LineChartWidgetComponent_mat_icon_5_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, LineChartWidgetComponent_mat_icon_6_Template, 2, 0, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "fury-card-header-actions")(9, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LineChartWidgetComponent_Template_button_click_9_listener() {
          return ctx.reload();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 4)(13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "fury-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LineChartWidgetComponent_canvas_16_Template, 1, 4, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "fury-loading-overlay", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-menu", null, 8)(20, "button", 9)(21, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 10)(26, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " more");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " More Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 9)(31, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, " remove_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " Remove Widget ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx.options.background)("color", ctx.options.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx.options.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.options.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", ctx.options.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.options.gain >= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.options.gain < 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.options.gain, "% ", ctx.options.subTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoading", ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _fury_shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayComponent, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCard, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeader, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeaderTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeaderSubTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeaderActions, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardContent, ng2_charts__WEBPACK_IMPORTED_MODULE_9__.BaseChartDirective],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 150px;\n}\n\n.header[_ngcontent-%COMP%] {\n  padding: 8px 24px;\n}\n.header[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%] {\n  font: var(--font-caption);\n}\n.header[_ngcontent-%COMP%]   .subheading[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n  vertical-align: text-top;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2Rhc2hib2FyZC93aWRnZXRzL2xpbmUtY2hhcnQtd2lkZ2V0L2xpbmUtY2hhcnQtd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3ZHQTtFQUNFLFVBQUE7RUFDQSxhQUFBO0FBZ0JGOztBQWJBO0VBQ0UsaUJBQUE7QUFnQkY7QUFkRTtFQUNFLHlCQUFBO0FBZ0JKO0FBZEk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQWdCTiIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3N0eWxlL3ZhcmlhYmxlc1wiO1xuQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvdGhlbWluZy9wYWxldHRlXCI7XG5cbi8qKlxuICBHZW5lcmFsXG4gKi9cblxuJHBhZ2UtbG9hZC1iYWNrZ3JvdW5kOiAjMTMyOTNkO1xuJGVsZXZhdGlvbjogMjtcblxuJGNvbG9yLXN1Y2Nlc3M6ICM3Y2IzNDI7XG5cbiRzcGFjaW5nOiAyNHB4O1xuJGJvcmRlci1yYWRpdXM6IDhweDtcblxuJHBhZGRpbmcteGw6IDQ4cHg7XG4kcGFkZGluZy1sZzogMzJweDtcbiRwYWRkaW5nOiAyNHB4O1xuJHBhZGRpbmctbWQ6IDE2cHg7XG4kcGFkZGluZy1zbTogMTJweDtcbiRwYWRkaW5nLXhzOiA4cHg7XG4kcGFkZGluZy14eHM6IDRweDtcbiRwYWRkaW5nLTA6IDBweDtcblxuJHBhZGRpbmdzOiAoXG4gICctMCc6ICRwYWRkaW5nLTAsXG4gIC14eHM6ICRwYWRkaW5nLXh4cyxcbiAgLXhzOiAkcGFkZGluZy14cyxcbiAgLXNtOiAkcGFkZGluZy1zbSxcbiAgLW1kOiAkcGFkZGluZy1tZCxcbiAgJyc6ICRwYWRkaW5nLFxuICAtbGc6ICRwYWRkaW5nLWxnLFxuICAteGw6ICRwYWRkaW5nLXhsLFxuKTtcblxuJGljb24tc2l6ZXM6IChcbiAgLXhzOiAxNHB4LFxuICAtc206IDE4cHgsXG4gIC1tZDogMjBweCxcbiAgJyc6IDI0cHgsXG4gIC1sZzogMjhweCxcbiAgLXhsOiAzMnB4XG4pO1xuXG4vKipcbiAgQ2FyZFxuICovXG4kY2FyZC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuXG4vKipcbiAgVG9vbGJhclxuICovXG4kdG9vbGJhci1oZWlnaHQ6IDY0cHg7XG4kdG9vbGJhci16LWluZGV4OiA1MDA7XG4kdG9vbGJhci1idXR0b24td2lkdGg6IDY0cHg7XG5cbi8qKlxuICBGb290ZXJcbiAqL1xuJGZvb3Rlci1oZWlnaHQ6IDU2cHg7XG4kZm9vdGVyLXotaW5kZXg6IDEwMDtcblxuLy8gU2lkZW5hdlxuJHNpZGVuYXYtd2lkdGg6IDI4MHB4O1xuJHNpZGVuYXYtY29sbGFwc2VkLXdpZHRoOiA3NHB4O1xuJHNpZGVuYXYtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcblxuLy8gU2lkZW5hdiBJdGVtXG5cbiRzaWRlbmF2LWl0ZW0taWNvbi1zaXplOiAyMnB4O1xuXG4kc2lkZW5hdi1pdGVtLWhlaWdodDogNDRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0OiAyNHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLXJpZ2h0OiAxNnB4O1xuJHNpZGVuYXYtaXRlbS1tYXJnaW4tcmlnaHQ6IDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMTogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDI6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMSArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMzogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyICsgOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWw0OiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDMgKyA4cHg7XG5cbi8vIFNpZGVuYXYgd2lkdGggY2FuIGJlIGNoYW5nZWQgaW4gc3JjL0BmdXJ5L2FuaW1hdGlvbnMvc2lkZW5hdi5hbmltYXRpb24udHNcbiRzaWRlbmF2LXotaW5kZXg6IDcwMDtcblxuJGJsaW5rLXNjcm9sbGJhci13aWR0aDogMTJweDtcblxuLy8gUGFnZSBMYXlvdXRcbiRwYWdlLWxheW91dC1oZWlnaHQ6IDIwMHB4O1xuJHBhZ2UtbGF5b3V0LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8qKlxuICBNaXhpbnNcbiAqL1xuJG1lZGlhLXhzOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCknO1xuQG1peGluIG1lZGlhLXhzIHtcbiAgQG1lZGlhICN7JG1lZGlhLXhzfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuJG1lZGlhLXNtOiAnc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1OTlweCkgYW5kIChtYXgtd2lkdGg6IDk1OXB4KSc7XG5AbWl4aW4gbWVkaWEtc20ge1xuICBAbWVkaWEgI3skbWVkaWEtc219IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vKipcbiAgSW5ib3hcbiAqL1xuJGluYm94LWhlYWRlci1oZWlnaHQ6IDY0cHg7XG4kaW5ib3gtc2VhcmNoYmFyLWhlaWdodDogNTRweDtcbiRpbmJveC1zdGFyLWNvbG9yOiAjZmZjMTA3O1xuJGluYm94LW1haWwtbGlzdC1pdGVtLWhlaWdodDogNTRweDtcbiIsIkB1c2UgJ3Nhc3M6bWF0aCc7XG5AaW1wb3J0IFwidmFyXCI7XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4uaGVhZGVyIHtcbiAgcGFkZGluZzogbWF0aC5kaXYoJHNwYWNpbmcsIDMpICRzcGFjaW5nO1xuXG4gIC5zdWJoZWFkaW5nIHtcbiAgICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgaGVpZ2h0OiAxNHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xuICAgIH1cbiAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 91345:
/*!**************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/line-chart-widget/line-chart-widget.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LineChartWidgetModule: () => (/* binding */ LineChartWidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/loading-overlay/loading-overlay.module */ 6354);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _line_chart_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-chart-widget.component */ 21169);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 16667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







class LineChartWidgetModule {
  static #_ = this.ɵfac = function LineChartWidgetModule_Factory(t) {
    return new (t || LineChartWidgetModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: LineChartWidgetModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
    // Core
    _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_0__.LoadingOverlayModule,
    // Chart Widget Style
    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__.FuryCardModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LineChartWidgetModule, {
    declarations: [_line_chart_widget_component__WEBPACK_IMPORTED_MODULE_2__.LineChartWidgetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
    // Core
    _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_0__.LoadingOverlayModule,
    // Chart Widget Style
    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__.FuryCardModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule],
    exports: [_line_chart_widget_component__WEBPACK_IMPORTED_MODULE_2__.LineChartWidgetComponent]
  });
})();

/***/ }),

/***/ 31946:
/*!*********************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/market-widget/market-widget.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketWidgetComponent: () => (/* binding */ MarketWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);



class MarketWidgetComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function MarketWidgetComponent_Factory(t) {
    return new (t || MarketWidgetComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MarketWidgetComponent,
    selectors: [["fury-market-widget"]],
    decls: 5,
    vars: 0,
    consts: [["fxLayout", "column", "fxLayoutAlign", "center center", 1, "market-widget"], [1, "title"], ["type", "button", "mat-raised-button", "", "color", "primary", 1, "action"]],
    template: function MarketWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "6 more widgets available");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "COMING SOON");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
    },
    dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.market-widget[_ngcontent-%COMP%] {\n  padding: 48px 24px;\n  border: 3px dashed #888;\n}\n.market-widget[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin-bottom: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2Rhc2hib2FyZC93aWRnZXRzL21hcmtldC13aWRnZXQvbWFya2V0LXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQXlDQTs7RUFBQTtBQUtBOztFQUFBO0FBT0E7O0VBQUE7QUFpQ0E7O0VBQUE7QUFpQkE7O0VBQUE7QUN2R0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0FBZ0JGO0FBZEU7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFnQkoiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3RoZW1pbmcvcGFsZXR0ZVwiO1xuXG4vKipcbiAgR2VuZXJhbFxuICovXG5cbiRwYWdlLWxvYWQtYmFja2dyb3VuZDogIzEzMjkzZDtcbiRlbGV2YXRpb246IDI7XG5cbiRjb2xvci1zdWNjZXNzOiAjN2NiMzQyO1xuXG4kc3BhY2luZzogMjRweDtcbiRib3JkZXItcmFkaXVzOiA4cHg7XG5cbiRwYWRkaW5nLXhsOiA0OHB4O1xuJHBhZGRpbmctbGc6IDMycHg7XG4kcGFkZGluZzogMjRweDtcbiRwYWRkaW5nLW1kOiAxNnB4O1xuJHBhZGRpbmctc206IDEycHg7XG4kcGFkZGluZy14czogOHB4O1xuJHBhZGRpbmcteHhzOiA0cHg7XG4kcGFkZGluZy0wOiAwcHg7XG5cbiRwYWRkaW5nczogKFxuICAnLTAnOiAkcGFkZGluZy0wLFxuICAteHhzOiAkcGFkZGluZy14eHMsXG4gIC14czogJHBhZGRpbmcteHMsXG4gIC1zbTogJHBhZGRpbmctc20sXG4gIC1tZDogJHBhZGRpbmctbWQsXG4gICcnOiAkcGFkZGluZyxcbiAgLWxnOiAkcGFkZGluZy1sZyxcbiAgLXhsOiAkcGFkZGluZy14bCxcbik7XG5cbiRpY29uLXNpemVzOiAoXG4gIC14czogMTRweCxcbiAgLXNtOiAxOHB4LFxuICAtbWQ6IDIwcHgsXG4gICcnOiAyNHB4LFxuICAtbGc6IDI4cHgsXG4gIC14bDogMzJweFxuKTtcblxuLyoqXG4gIENhcmRcbiAqL1xuJGNhcmQtaGVhZGVyLWhlaWdodDogNjRweDtcblxuLyoqXG4gIFRvb2xiYXJcbiAqL1xuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJHRvb2xiYXItei1pbmRleDogNTAwO1xuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xuXG4vKipcbiAgRm9vdGVyXG4gKi9cbiRmb290ZXItaGVpZ2h0OiA1NnB4O1xuJGZvb3Rlci16LWluZGV4OiAxMDA7XG5cbi8vIFNpZGVuYXZcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNzRweDtcbiRzaWRlbmF2LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8vIFNpZGVuYXYgSXRlbVxuXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcblxuJHNpZGVuYXYtaXRlbS1oZWlnaHQ6IDQ0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1yaWdodDogMTZweDtcbiRzaWRlbmF2LWl0ZW0tbWFyZ2luLXJpZ2h0OiA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDEgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDM6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMiArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xuXG4vLyBTaWRlbmF2IHdpZHRoIGNhbiBiZSBjaGFuZ2VkIGluIHNyYy9AZnVyeS9hbmltYXRpb25zL3NpZGVuYXYuYW5pbWF0aW9uLnRzXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XG5cbiRibGluay1zY3JvbGxiYXItd2lkdGg6IDEycHg7XG5cbi8vIFBhZ2UgTGF5b3V0XG4kcGFnZS1sYXlvdXQtaGVpZ2h0OiAyMDBweDtcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vKipcbiAgTWl4aW5zXG4gKi9cbiRtZWRpYS14czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJztcbkBtaXhpbiBtZWRpYS14cyB7XG4gIEBtZWRpYSAjeyRtZWRpYS14c30ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gIEluYm94XG4gKi9cbiRpbmJveC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuJGluYm94LXNlYXJjaGJhci1oZWlnaHQ6IDU0cHg7XG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcbiRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ6IDU0cHg7XG4iLCJAdXNlICdzYXNzOm1hdGgnO1xuQGltcG9ydCBcInZhclwiO1xuXG4ubWFya2V0LXdpZGdldCB7XG4gIHBhZGRpbmc6ICRzcGFjaW5nKjIgJHNwYWNpbmc7XG4gIGJvcmRlcjogM3B4IGRhc2hlZCAjODg4O1xuXG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IG1hdGguZGl2KCRzcGFjaW5nLCAyKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 14871:
/*!******************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/market-widget/market-widget.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MarketWidgetModule: () => (/* binding */ MarketWidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _market_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./market-widget.component */ 31946);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);




class MarketWidgetModule {
  static #_ = this.ɵfac = function MarketWidgetModule_Factory(t) {
    return new (t || MarketWidgetModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: MarketWidgetModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MarketWidgetModule, {
    declarations: [_market_widget_component__WEBPACK_IMPORTED_MODULE_1__.MarketWidgetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule],
    exports: [_market_widget_component__WEBPACK_IMPORTED_MODULE_1__.MarketWidgetComponent]
  });
})();

/***/ }),

/***/ 69497:
/*!*****************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/quick-info-widget/quick-info-widget.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickInfoWidgetComponent: () => (/* binding */ QuickInfoWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);



class QuickInfoWidgetComponent {
  constructor() {}
  ngOnInit() {}
  static #_ = this.ɵfac = function QuickInfoWidgetComponent_Factory(t) {
    return new (t || QuickInfoWidgetComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: QuickInfoWidgetComponent,
    selectors: [["fury-quick-info-widget"]],
    inputs: {
      value: "value",
      label: "label",
      background: "background",
      color: "color",
      icon: "icon"
    },
    decls: 8,
    vars: 7,
    consts: [["fxFlex", "grow", "fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "quick-info-widget", "elevation"], ["fxLayout", "column"], [1, "value"], [1, "label"], [1, "icon"]],
    template: function QuickInfoWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx.background)("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.label);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.icon);
      }
    },
    dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__.DefaultFlexDirective],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.quick-info-widget[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 8px;\n}\n.quick-info-widget[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font: var(--font-display-1);\n}\n.quick-info-widget[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font: var(--font-body-1);\n}\n.quick-info-widget[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  height: 48px;\n  width: 48px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2Rhc2hib2FyZC93aWRnZXRzL3F1aWNrLWluZm8td2lkZ2V0L3F1aWNrLWluZm8td2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3hHQTtFQUNFLGlCQUFBO0VBQ0EsYURRUTtFQ1BSLGtCRFFjO0FDU2hCO0FBZkU7RUFDRSwyQkFBQTtBQWlCSjtBQWRFO0VBQ0Usd0JBQUE7QUFnQko7QUFiRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQWVKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90aGVtaW5nL3BhbGV0dGVcIjtcblxuLyoqXG4gIEdlbmVyYWxcbiAqL1xuXG4kcGFnZS1sb2FkLWJhY2tncm91bmQ6ICMxMzI5M2Q7XG4kZWxldmF0aW9uOiAyO1xuXG4kY29sb3Itc3VjY2VzczogIzdjYjM0MjtcblxuJHNwYWNpbmc6IDI0cHg7XG4kYm9yZGVyLXJhZGl1czogOHB4O1xuXG4kcGFkZGluZy14bDogNDhweDtcbiRwYWRkaW5nLWxnOiAzMnB4O1xuJHBhZGRpbmc6IDI0cHg7XG4kcGFkZGluZy1tZDogMTZweDtcbiRwYWRkaW5nLXNtOiAxMnB4O1xuJHBhZGRpbmcteHM6IDhweDtcbiRwYWRkaW5nLXh4czogNHB4O1xuJHBhZGRpbmctMDogMHB4O1xuXG4kcGFkZGluZ3M6IChcbiAgJy0wJzogJHBhZGRpbmctMCxcbiAgLXh4czogJHBhZGRpbmcteHhzLFxuICAteHM6ICRwYWRkaW5nLXhzLFxuICAtc206ICRwYWRkaW5nLXNtLFxuICAtbWQ6ICRwYWRkaW5nLW1kLFxuICAnJzogJHBhZGRpbmcsXG4gIC1sZzogJHBhZGRpbmctbGcsXG4gIC14bDogJHBhZGRpbmcteGwsXG4pO1xuXG4kaWNvbi1zaXplczogKFxuICAteHM6IDE0cHgsXG4gIC1zbTogMThweCxcbiAgLW1kOiAyMHB4LFxuICAnJzogMjRweCxcbiAgLWxnOiAyOHB4LFxuICAteGw6IDMycHhcbik7XG5cbi8qKlxuICBDYXJkXG4gKi9cbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XG5cbi8qKlxuICBUb29sYmFyXG4gKi9cbiR0b29sYmFyLWhlaWdodDogNjRweDtcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcbiR0b29sYmFyLWJ1dHRvbi13aWR0aDogNjRweDtcblxuLyoqXG4gIEZvb3RlclxuICovXG4kZm9vdGVyLWhlaWdodDogNTZweDtcbiRmb290ZXItei1pbmRleDogMTAwO1xuXG4vLyBTaWRlbmF2XG4kc2lkZW5hdi13aWR0aDogMjgwcHg7XG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDc0cHg7XG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vLyBTaWRlbmF2IEl0ZW1cblxuJHNpZGVuYXYtaXRlbS1pY29uLXNpemU6IDIycHg7XG5cbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ6IDI0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctcmlnaHQ6IDE2cHg7XG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMjogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxICsgOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDQ6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMyArIDhweDtcblxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xuJHNpZGVuYXYtei1pbmRleDogNzAwO1xuXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xuXG4vLyBQYWdlIExheW91dFxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XG4kcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcblxuLyoqXG4gIE1peGluc1xuICovXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgI3skbWVkaWEteHN9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4kbWVkaWEtc206ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJztcbkBtaXhpbiBtZWRpYS1zbSB7XG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICBJbmJveFxuICovXG4kaW5ib3gtaGVhZGVyLWhlaWdodDogNjRweDtcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xuJGluYm94LXN0YXItY29sb3I6ICNmZmMxMDc7XG4kaW5ib3gtbWFpbC1saXN0LWl0ZW0taGVpZ2h0OiA1NHB4O1xuIiwiQGltcG9ydCBcInZhclwiO1xuXG4ucXVpY2staW5mby13aWRnZXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcGFkZGluZzogJHNwYWNpbmc7XG4gIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuXG4gIC52YWx1ZSB7XG4gICAgZm9udDogdmFyKC0tZm9udC1kaXNwbGF5LTEpO1xuICB9XG5cbiAgLmxhYmVsIHtcbiAgICBmb250OiB2YXIoLS1mb250LWJvZHktMSk7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICAgIGhlaWdodDogNDhweDtcbiAgICB3aWR0aDogNDhweDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 74445:
/*!**************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/quick-info-widget/quick-info-widget.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuickInfoWidgetModule: () => (/* binding */ QuickInfoWidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _quick_info_widget_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quick-info-widget.component */ 69497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 61699);




class QuickInfoWidgetModule {
  static #_ = this.ɵfac = function QuickInfoWidgetModule_Factory(t) {
    return new (t || QuickInfoWidgetModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
    type: QuickInfoWidgetModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](QuickInfoWidgetModule, {
    declarations: [_quick_info_widget_component__WEBPACK_IMPORTED_MODULE_1__.QuickInfoWidgetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule],
    exports: [_quick_info_widget_component__WEBPACK_IMPORTED_MODULE_1__.QuickInfoWidgetComponent]
  });
})();

/***/ }),

/***/ 77473:
/*!*************************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/realtime-users-widget/realtime-users-widget.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RealtimeUsersWidgetComponent: () => (/* binding */ RealtimeUsersWidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ 17005);
/* harmony import */ var lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es/defaultsDeep */ 44010);
/* harmony import */ var _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/chart-widget/chart-widget-defaults */ 14576);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.component */ 61864);
/* harmony import */ var _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/scrollbar/scrollbar.component */ 86056);









const _c0 = ["canvas"];
function RealtimeUsersWidgetComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const page_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", page_r2.page, " ");
  }
}
class RealtimeUsersWidgetComponent {
  constructor(cd) {
    this.cd = cd;
    this.maxLength = 30;
  }
  ngAfterViewInit() {
    this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_4__.Chart(this.canvas.nativeElement.getContext('2d'), {
      type: 'bar',
      data: {
        labels: [],
        datasets: [{
          data: [],
          backgroundColor: 'rgba(0, 0, 0, 0.12)'
        }]
      },
      options: (0,lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_5__["default"])({
        plugins: {
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        hover: {
          intersect: true
        }
      }, _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__.defaultChartOptions)
    });
    let first = true;
    this.data$.subscribe(newData => {
      const oldData = this.chart.data.datasets[0].data;
      this.addData(newData);
      setTimeout(() => {
        this.currentUsers = newData.value;
      }, 1);
      if (oldData.length > this.maxLength) {
        this.removeData();
      }
      this.cd.markForCheck();
      this.chart.update();
    });
  }
  addData(data) {
    this.chart.data.labels.push(data.label);
    const chartData = this.chart.data.datasets[0].data;
    chartData.push(data.value);
  }
  removeData() {
    this.chart.data.labels.shift();
    const data = this.chart.data.datasets[0].data;
    data.shift();
  }
  static #_ = this.ɵfac = function RealtimeUsersWidgetComponent_Factory(t) {
    return new (t || RealtimeUsersWidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: RealtimeUsersWidgetComponent,
    selectors: [["fury-realtime-users-widget"]],
    viewQuery: function RealtimeUsersWidgetComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
      }
    },
    inputs: {
      pages$: "pages$",
      data$: "data$",
      maxLength: "maxLength"
    },
    decls: 19,
    vars: 4,
    consts: [[1, "realtime-users-widget"], ["fxLayout", "column", 1, "header"], [1, "value"], [1, "section"], [1, "heading"], [1, "canvas-content"], ["canvas", ""], [1, "pages"], ["class", "page", 4, "ngFor", "ngForOf"], [1, "page"]],
    template: function RealtimeUsersWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fury-card", 0)(1, "fury-card-header", 1)(2, "fury-card-header-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Active Users right now");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "fury-card-content")(7, "div", 3)(8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Page views per minute");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "canvas", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 3)(14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Top Active Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "fury-scrollbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, RealtimeUsersWidgetComponent_div_17_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.currentUsers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 2, ctx.pages$));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCard, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardHeader, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardHeaderTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__.FuryCardContent, _fury_shared_scrollbar_scrollbar_component__WEBPACK_IMPORTED_MODULE_2__.ScrollbarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.realtime-users-widget[_ngcontent-%COMP%] {\n  background: #4285f4;\n  color: white;\n}\n.realtime-users-widget[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font: var(--font-display-2);\n  font-weight: 300;\n  margin-top: 12px;\n}\n.realtime-users-widget[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.realtime-users-widget[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  font: var(--font-caption);\n  color: rgba(255, 255, 255, 0.7);\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12);\n}\n.realtime-users-widget[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .canvas-content[_ngcontent-%COMP%] {\n  max-width: 100%;\n  display: flex;\n  flex: 1;\n  position: relative;\n  padding-top: 12px;\n  padding-bottom: 12px;\n}\n.realtime-users-widget[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%] {\n  height: 86px;\n  padding-top: 12px;\n}\n.realtime-users-widget[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .pages[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]    + .page[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2Rhc2hib2FyZC93aWRnZXRzL3JlYWx0aW1lLXVzZXJzLXdpZGdldC9yZWFsdGltZS11c2Vycy13aWRnZXQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9ub2RlX21vZHVsZXMvQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90aGVtaW5nL19wYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7O0VBQUE7QUF5Q0E7O0VBQUE7QUFLQTs7RUFBQTtBQU9BOztFQUFBO0FBaUNBOztFQUFBO0FBaUJBOztFQUFBO0FDdkdBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBZ0JGO0FBYkk7RUFDRSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFlTjtBQVhFO0VBQ0UsT0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQWFKO0FBWEk7RUFDRSx5QkFBQTtFQUNBLCtCQ1lpQjtFRFhqQixrREFBQTtBQWFOO0FBVkk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFZTjtBQVRJO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FBV047QUFQUTtFQUNFLGdCQUFBO0FBU1YiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3RoZW1pbmcvcGFsZXR0ZVwiO1xuXG4vKipcbiAgR2VuZXJhbFxuICovXG5cbiRwYWdlLWxvYWQtYmFja2dyb3VuZDogIzEzMjkzZDtcbiRlbGV2YXRpb246IDI7XG5cbiRjb2xvci1zdWNjZXNzOiAjN2NiMzQyO1xuXG4kc3BhY2luZzogMjRweDtcbiRib3JkZXItcmFkaXVzOiA4cHg7XG5cbiRwYWRkaW5nLXhsOiA0OHB4O1xuJHBhZGRpbmctbGc6IDMycHg7XG4kcGFkZGluZzogMjRweDtcbiRwYWRkaW5nLW1kOiAxNnB4O1xuJHBhZGRpbmctc206IDEycHg7XG4kcGFkZGluZy14czogOHB4O1xuJHBhZGRpbmcteHhzOiA0cHg7XG4kcGFkZGluZy0wOiAwcHg7XG5cbiRwYWRkaW5nczogKFxuICAnLTAnOiAkcGFkZGluZy0wLFxuICAteHhzOiAkcGFkZGluZy14eHMsXG4gIC14czogJHBhZGRpbmcteHMsXG4gIC1zbTogJHBhZGRpbmctc20sXG4gIC1tZDogJHBhZGRpbmctbWQsXG4gICcnOiAkcGFkZGluZyxcbiAgLWxnOiAkcGFkZGluZy1sZyxcbiAgLXhsOiAkcGFkZGluZy14bCxcbik7XG5cbiRpY29uLXNpemVzOiAoXG4gIC14czogMTRweCxcbiAgLXNtOiAxOHB4LFxuICAtbWQ6IDIwcHgsXG4gICcnOiAyNHB4LFxuICAtbGc6IDI4cHgsXG4gIC14bDogMzJweFxuKTtcblxuLyoqXG4gIENhcmRcbiAqL1xuJGNhcmQtaGVhZGVyLWhlaWdodDogNjRweDtcblxuLyoqXG4gIFRvb2xiYXJcbiAqL1xuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJHRvb2xiYXItei1pbmRleDogNTAwO1xuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xuXG4vKipcbiAgRm9vdGVyXG4gKi9cbiRmb290ZXItaGVpZ2h0OiA1NnB4O1xuJGZvb3Rlci16LWluZGV4OiAxMDA7XG5cbi8vIFNpZGVuYXZcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNzRweDtcbiRzaWRlbmF2LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8vIFNpZGVuYXYgSXRlbVxuXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcblxuJHNpZGVuYXYtaXRlbS1oZWlnaHQ6IDQ0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1yaWdodDogMTZweDtcbiRzaWRlbmF2LWl0ZW0tbWFyZ2luLXJpZ2h0OiA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDEgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDM6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMiArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xuXG4vLyBTaWRlbmF2IHdpZHRoIGNhbiBiZSBjaGFuZ2VkIGluIHNyYy9AZnVyeS9hbmltYXRpb25zL3NpZGVuYXYuYW5pbWF0aW9uLnRzXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XG5cbiRibGluay1zY3JvbGxiYXItd2lkdGg6IDEycHg7XG5cbi8vIFBhZ2UgTGF5b3V0XG4kcGFnZS1sYXlvdXQtaGVpZ2h0OiAyMDBweDtcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vKipcbiAgTWl4aW5zXG4gKi9cbiRtZWRpYS14czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJztcbkBtaXhpbiBtZWRpYS14cyB7XG4gIEBtZWRpYSAjeyRtZWRpYS14c30ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gIEluYm94XG4gKi9cbiRpbmJveC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuJGluYm94LXNlYXJjaGJhci1oZWlnaHQ6IDU0cHg7XG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcbiRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ6IDU0cHg7XG4iLCJAdXNlICdzYXNzOm1hdGgnO1xuQGltcG9ydCBcInZhclwiO1xuXG4ucmVhbHRpbWUtdXNlcnMtd2lkZ2V0IHtcbiAgYmFja2dyb3VuZDogIzQyODVmNDtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIC5oZWFkZXIge1xuICAgIC52YWx1ZSB7XG4gICAgICBmb250OiB2YXIoLS1mb250LWRpc3BsYXktMik7XG4gICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgbWFyZ2luLXRvcDogbWF0aC5kaXYoJHNwYWNpbmcsIDIpO1xuICAgIH1cbiAgfVxuXG4gIC5zZWN0aW9uIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5oZWFkaW5nIHtcbiAgICAgIGZvbnQ6IHZhcigtLWZvbnQtY2FwdGlvbik7XG4gICAgICBjb2xvcjogJGxpZ2h0LXNlY29uZGFyeS10ZXh0O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRsaWdodC1kaXZpZGVycztcbiAgICB9XG5cbiAgICAuY2FudmFzLWNvbnRlbnQge1xuICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBwYWRkaW5nLXRvcDogbWF0aC5kaXYoJHNwYWNpbmcsIDIpO1xuICAgICAgcGFkZGluZy1ib3R0b206IG1hdGguZGl2KCRzcGFjaW5nLCAyKTtcbiAgICB9XG5cbiAgICAucGFnZXMge1xuICAgICAgaGVpZ2h0OiA4NnB4O1xuICAgICAgcGFkZGluZy10b3A6IG1hdGguZGl2KCRzcGFjaW5nLCAyKTtcblxuICAgICAgLnBhZ2Uge1xuXG4gICAgICAgICYgKyAucGFnZSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IG1hdGguZGl2KCRzcGFjaW5nLCAzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiQHVzZSAnc2FzczptYXAnO1xuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG4vLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvXG4vL1xuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cbi8vIGNhbGN1bGF0ZSB0aGVtLiBUaGVzZSBjb250cmFzdCBjb2xvcnMgYXJlIHB1bGxlZCBmcm9tIHRoZSBwdWJsaWMgTWF0ZXJpYWwgRGVzaWduIHNwZWMgc3dhdGNoZXMuXG4vLyBXaGlsZSB0aGUgY29udHJhc3QgY29sb3JzIGluIHRoZSBzcGVjIGFyZSBub3QgcHJlc2NyaXB0aXZlLCB3ZSB1c2UgdGhlbSBmb3IgY29udmVuaWVuY2UuXG5cblxuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkZGFyay1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stODctb3BhY2l0eTogcmdiYShibGFjaywgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRsaWdodC1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtODctb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay0xMi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtNi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjA2KTtcblxuJGRhcmstcHJpbWFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjg3KTtcbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjU0KTtcbiRkYXJrLWRpc2FibGVkLXRleHQ6IHJnYmEoYmxhY2ssIDAuMzgpO1xuJGRhcmstZGl2aWRlcnM6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYShibGFjaywgMC4xMik7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiB3aGl0ZTtcbiRsaWdodC1zZWNvbmRhcnktdGV4dDogcmdiYSh3aGl0ZSwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKHdoaXRlLCAwLjUpO1xuJGxpZ2h0LWRpdmlkZXJzOiByZ2JhKHdoaXRlLCAwLjEyKTtcbiRsaWdodC1mb2N1c2VkOiByZ2JhKHdoaXRlLCAwLjEyKTtcblxuJHJlZC1wYWxldHRlOiAoXG4gIDUwOiAjZmZlYmVlLFxuICAxMDA6ICNmZmNkZDIsXG4gIDIwMDogI2VmOWE5YSxcbiAgMzAwOiAjZTU3MzczLFxuICA0MDA6ICNlZjUzNTAsXG4gIDUwMDogI2Y0NDMzNixcbiAgNjAwOiAjZTUzOTM1LFxuICA3MDA6ICNkMzJmMmYsXG4gIDgwMDogI2M2MjgyOCxcbiAgOTAwOiAjYjcxYzFjLFxuICBBMTAwOiAjZmY4YTgwLFxuICBBMjAwOiAjZmY1MjUyLFxuICBBNDAwOiAjZmYxNzQ0LFxuICBBNzAwOiAjZDUwMDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRwaW5rLXBhbGV0dGU6IChcbiAgNTA6ICNmY2U0ZWMsXG4gIDEwMDogI2Y4YmJkMCxcbiAgMjAwOiAjZjQ4ZmIxLFxuICAzMDA6ICNmMDYyOTIsXG4gIDQwMDogI2VjNDA3YSxcbiAgNTAwOiAjZTkxZTYzLFxuICA2MDA6ICNkODFiNjAsXG4gIDcwMDogI2MyMTg1YixcbiAgODAwOiAjYWQxNDU3LFxuICA5MDA6ICM4ODBlNGYsXG4gIEExMDA6ICNmZjgwYWIsXG4gIEEyMDA6ICNmZjQwODEsXG4gIEE0MDA6ICNmNTAwNTcsXG4gIEE3MDA6ICNjNTExNjIsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJHB1cnBsZS1wYWxldHRlOiAoXG4gIDUwOiAjZjNlNWY1LFxuICAxMDA6ICNlMWJlZTcsXG4gIDIwMDogI2NlOTNkOCxcbiAgMzAwOiAjYmE2OGM4LFxuICA0MDA6ICNhYjQ3YmMsXG4gIDUwMDogIzljMjdiMCxcbiAgNjAwOiAjOGUyNGFhLFxuICA3MDA6ICM3YjFmYTIsXG4gIDgwMDogIzZhMWI5YSxcbiAgOTAwOiAjNGExNDhjLFxuICBBMTAwOiAjZWE4MGZjLFxuICBBMjAwOiAjZTA0MGZiLFxuICBBNDAwOiAjZDUwMGY5LFxuICBBNzAwOiAjYWEwMGZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJGRlZXAtcHVycGxlLXBhbGV0dGU6IChcbiAgNTA6ICNlZGU3ZjYsXG4gIDEwMDogI2QxYzRlOSxcbiAgMjAwOiAjYjM5ZGRiLFxuICAzMDA6ICM5NTc1Y2QsXG4gIDQwMDogIzdlNTdjMixcbiAgNTAwOiAjNjczYWI3LFxuICA2MDA6ICM1ZTM1YjEsXG4gIDcwMDogIzUxMmRhOCxcbiAgODAwOiAjNDUyN2EwLFxuICA5MDA6ICMzMTFiOTIsXG4gIEExMDA6ICNiMzg4ZmYsXG4gIEEyMDA6ICM3YzRkZmYsXG4gIEE0MDA6ICM2NTFmZmYsXG4gIEE3MDA6ICM2MjAwZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kaW5kaWdvLXBhbGV0dGU6IChcbiAgNTA6ICNlOGVhZjYsXG4gIDEwMDogI2M1Y2FlOSxcbiAgMjAwOiAjOWZhOGRhLFxuICAzMDA6ICM3OTg2Y2IsXG4gIDQwMDogIzVjNmJjMCxcbiAgNTAwOiAjM2Y1MWI1LFxuICA2MDA6ICMzOTQ5YWIsXG4gIDcwMDogIzMwM2Y5ZixcbiAgODAwOiAjMjgzNTkzLFxuICA5MDA6ICMxYTIzN2UsXG4gIEExMDA6ICM4YzllZmYsXG4gIEEyMDA6ICM1MzZkZmUsXG4gIEE0MDA6ICMzZDVhZmUsXG4gIEE3MDA6ICMzMDRmZmUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kYmx1ZS1wYWxldHRlOiAoXG4gIDUwOiAjZTNmMmZkLFxuICAxMDA6ICNiYmRlZmIsXG4gIDIwMDogIzkwY2FmOSxcbiAgMzAwOiAjNjRiNWY2LFxuICA0MDA6ICM0MmE1ZjUsXG4gIDUwMDogIzIxOTZmMyxcbiAgNjAwOiAjMWU4OGU1LFxuICA3MDA6ICMxOTc2ZDIsXG4gIDgwMDogIzE1NjVjMCxcbiAgOTAwOiAjMGQ0N2ExLFxuICBBMTAwOiAjODJiMWZmLFxuICBBMjAwOiAjNDQ4YWZmLFxuICBBNDAwOiAjMjk3OWZmLFxuICBBNzAwOiAjMjk2MmZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRsaWdodC1ibHVlLXBhbGV0dGU6IChcbiAgNTA6ICNlMWY1ZmUsXG4gIDEwMDogI2IzZTVmYyxcbiAgMjAwOiAjODFkNGZhLFxuICAzMDA6ICM0ZmMzZjcsXG4gIDQwMDogIzI5YjZmNixcbiAgNTAwOiAjMDNhOWY0LFxuICA2MDA6ICMwMzliZTUsXG4gIDcwMDogIzAyODhkMSxcbiAgODAwOiAjMDI3N2JkLFxuICA5MDA6ICMwMTU3OWIsXG4gIEExMDA6ICM4MGQ4ZmYsXG4gIEEyMDA6ICM0MGM0ZmYsXG4gIEE0MDA6ICMwMGIwZmYsXG4gIEE3MDA6ICMwMDkxZWEsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRjeWFuLXBhbGV0dGU6IChcbiAgNTA6ICNlMGY3ZmEsXG4gIDEwMDogI2IyZWJmMixcbiAgMjAwOiAjODBkZWVhLFxuICAzMDA6ICM0ZGQwZTEsXG4gIDQwMDogIzI2YzZkYSxcbiAgNTAwOiAjMDBiY2Q0LFxuICA2MDA6ICMwMGFjYzEsXG4gIDcwMDogIzAwOTdhNyxcbiAgODAwOiAjMDA4MzhmLFxuICA5MDA6ICMwMDYwNjQsXG4gIEExMDA6ICM4NGZmZmYsXG4gIEEyMDA6ICMxOGZmZmYsXG4gIEE0MDA6ICMwMGU1ZmYsXG4gIEE3MDA6ICMwMGI4ZDQsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJHRlYWwtcGFsZXR0ZTogKFxuICA1MDogI2UwZjJmMSxcbiAgMTAwOiAjYjJkZmRiLFxuICAyMDA6ICM4MGNiYzQsXG4gIDMwMDogIzRkYjZhYyxcbiAgNDAwOiAjMjZhNjlhLFxuICA1MDA6ICMwMDk2ODgsXG4gIDYwMDogIzAwODk3YixcbiAgNzAwOiAjMDA3OTZiLFxuICA4MDA6ICMwMDY5NWMsXG4gIDkwMDogIzAwNGQ0MCxcbiAgQTEwMDogI2E3ZmZlYixcbiAgQTIwMDogIzY0ZmZkYSxcbiAgQTQwMDogIzFkZTliNixcbiAgQTcwMDogIzAwYmZhNSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kZ3JlZW4tcGFsZXR0ZTogKFxuICA1MDogI2U4ZjVlOSxcbiAgMTAwOiAjYzhlNmM5LFxuICAyMDA6ICNhNWQ2YTcsXG4gIDMwMDogIzgxYzc4NCxcbiAgNDAwOiAjNjZiYjZhLFxuICA1MDA6ICM0Y2FmNTAsXG4gIDYwMDogIzQzYTA0NyxcbiAgNzAwOiAjMzg4ZTNjLFxuICA4MDA6ICMyZTdkMzIsXG4gIDkwMDogIzFiNWUyMCxcbiAgQTEwMDogI2I5ZjZjYSxcbiAgQTIwMDogIzY5ZjBhZSxcbiAgQTQwMDogIzAwZTY3NixcbiAgQTcwMDogIzAwYzg1MyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRsaWdodC1ncmVlbi1wYWxldHRlOiAoXG4gIDUwOiAjZjFmOGU5LFxuICAxMDA6ICNkY2VkYzgsXG4gIDIwMDogI2M1ZTFhNSxcbiAgMzAwOiAjYWVkNTgxLFxuICA0MDA6ICM5Y2NjNjUsXG4gIDUwMDogIzhiYzM0YSxcbiAgNjAwOiAjN2NiMzQyLFxuICA3MDA6ICM2ODlmMzgsXG4gIDgwMDogIzU1OGIyZixcbiAgOTAwOiAjMzM2OTFlLFxuICBBMTAwOiAjY2NmZjkwLFxuICBBMjAwOiAjYjJmZjU5LFxuICBBNDAwOiAjNzZmZjAzLFxuICBBNzAwOiAjNjRkZDE3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbGltZS1wYWxldHRlOiAoXG4gIDUwOiAjZjlmYmU3LFxuICAxMDA6ICNmMGY0YzMsXG4gIDIwMDogI2U2ZWU5YyxcbiAgMzAwOiAjZGNlNzc1LFxuICA0MDA6ICNkNGUxNTcsXG4gIDUwMDogI2NkZGMzOSxcbiAgNjAwOiAjYzBjYTMzLFxuICA3MDA6ICNhZmI0MmIsXG4gIDgwMDogIzllOWQyNCxcbiAgOTAwOiAjODI3NzE3LFxuICBBMTAwOiAjZjRmZjgxLFxuICBBMjAwOiAjZWVmZjQxLFxuICBBNDAwOiAjYzZmZjAwLFxuICBBNzAwOiAjYWVlYTAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJHllbGxvdy1wYWxldHRlOiAoXG4gIDUwOiAjZmZmZGU3LFxuICAxMDA6ICNmZmY5YzQsXG4gIDIwMDogI2ZmZjU5ZCxcbiAgMzAwOiAjZmZmMTc2LFxuICA0MDA6ICNmZmVlNTgsXG4gIDUwMDogI2ZmZWIzYixcbiAgNjAwOiAjZmRkODM1LFxuICA3MDA6ICNmYmMwMmQsXG4gIDgwMDogI2Y5YTgyNSxcbiAgOTAwOiAjZjU3ZjE3LFxuICBBMTAwOiAjZmZmZjhkLFxuICBBMjAwOiAjZmZmZjAwLFxuICBBNDAwOiAjZmZlYTAwLFxuICBBNzAwOiAjZmZkNjAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kYW1iZXItcGFsZXR0ZTogKFxuICA1MDogI2ZmZjhlMSxcbiAgMTAwOiAjZmZlY2IzLFxuICAyMDA6ICNmZmUwODIsXG4gIDMwMDogI2ZmZDU0ZixcbiAgNDAwOiAjZmZjYTI4LFxuICA1MDA6ICNmZmMxMDcsXG4gIDYwMDogI2ZmYjMwMCxcbiAgNzAwOiAjZmZhMDAwLFxuICA4MDA6ICNmZjhmMDAsXG4gIDkwMDogI2ZmNmYwMCxcbiAgQTEwMDogI2ZmZTU3ZixcbiAgQTIwMDogI2ZmZDc0MCxcbiAgQTQwMDogI2ZmYzQwMCxcbiAgQTcwMDogI2ZmYWIwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG9yYW5nZS1wYWxldHRlOiAoXG4gIDUwOiAjZmZmM2UwLFxuICAxMDA6ICNmZmUwYjIsXG4gIDIwMDogI2ZmY2M4MCxcbiAgMzAwOiAjZmZiNzRkLFxuICA0MDA6ICNmZmE3MjYsXG4gIDUwMDogI2ZmOTgwMCxcbiAgNjAwOiAjZmI4YzAwLFxuICA3MDA6ICNmNTdjMDAsXG4gIDgwMDogI2VmNmMwMCxcbiAgOTAwOiAjZTY1MTAwLFxuICBBMTAwOiAjZmZkMTgwLFxuICBBMjAwOiAjZmZhYjQwLFxuICBBNDAwOiAjZmY5MTAwLFxuICBBNzAwOiAjZmY2ZDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiBibGFjayxcbiAgKVxuKTtcblxuJGRlZXAtb3JhbmdlLXBhbGV0dGU6IChcbiAgNTA6ICNmYmU5ZTcsXG4gIDEwMDogI2ZmY2NiYyxcbiAgMjAwOiAjZmZhYjkxLFxuICAzMDA6ICNmZjhhNjUsXG4gIDQwMDogI2ZmNzA0MyxcbiAgNTAwOiAjZmY1NzIyLFxuICA2MDA6ICNmNDUxMWUsXG4gIDcwMDogI2U2NGExOSxcbiAgODAwOiAjZDg0MzE1LFxuICA5MDA6ICNiZjM2MGMsXG4gIEExMDA6ICNmZjllODAsXG4gIEEyMDA6ICNmZjZlNDAsXG4gIEE0MDA6ICNmZjNkMDAsXG4gIEE3MDA6ICNkZDJjMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kYnJvd24tcGFsZXR0ZTogKFxuICA1MDogI2VmZWJlOSxcbiAgMTAwOiAjZDdjY2M4LFxuICAyMDA6ICNiY2FhYTQsXG4gIDMwMDogI2ExODg3ZixcbiAgNDAwOiAjOGQ2ZTYzLFxuICA1MDA6ICM3OTU1NDgsXG4gIDYwMDogIzZkNGM0MSxcbiAgNzAwOiAjNWQ0MDM3LFxuICA4MDA6ICM0ZTM0MmUsXG4gIDkwMDogIzNlMjcyMyxcbiAgQTEwMDogI2Q3Y2NjOCxcbiAgQTIwMDogI2JjYWFhNCxcbiAgQTQwMDogIzhkNmU2MyxcbiAgQTcwMDogIzVkNDAzNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJGdyZXktcGFsZXR0ZTogKFxuICA1MDogI2ZhZmFmYSxcbiAgMTAwOiAjZjVmNWY1LFxuICAyMDA6ICNlZWVlZWUsXG4gIDMwMDogI2UwZTBlMCxcbiAgNDAwOiAjYmRiZGJkLFxuICA1MDA6ICM5ZTllOWUsXG4gIDYwMDogIzc1NzU3NSxcbiAgNzAwOiAjNjE2MTYxLFxuICA4MDA6ICM0MjQyNDIsXG4gIDkwMDogIzIxMjEyMSxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2VlZWVlZSxcbiAgQTQwMDogI2JkYmRiZCxcbiAgQTcwMDogIzYxNjE2MSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJGdyYXktcGFsZXR0ZTogJGdyZXktcGFsZXR0ZTtcblxuJGJsdWUtZ3JleS1wYWxldHRlOiAoXG4gIDUwOiAjZWNlZmYxLFxuICAxMDA6ICNjZmQ4ZGMsXG4gIDIwMDogI2IwYmVjNSxcbiAgMzAwOiAjOTBhNGFlLFxuICA0MDA6ICM3ODkwOWMsXG4gIDUwMDogIzYwN2Q4YixcbiAgNjAwOiAjNTQ2ZTdhLFxuICA3MDA6ICM0NTVhNjQsXG4gIDgwMDogIzM3NDc0ZixcbiAgOTAwOiAjMjYzMjM4LFxuICBBMTAwOiAjY2ZkOGRjLFxuICBBMjAwOiAjYjBiZWM1LFxuICBBNDAwOiAjNzg5MDljLFxuICBBNzAwOiAjNDU1YTY0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kYmx1ZS1ncmF5LXBhbGV0dGU6ICRibHVlLWdyZXktcGFsZXR0ZTtcblxuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRsaWdodC10aGVtZS1iYWNrZ3JvdW5kLXBhbGV0dGU6IChcbiAgc3RhdHVzLWJhcjogbWFwLmdldCgkZ3JleS1wYWxldHRlLCAzMDApLFxuICBhcHAtYmFyOiAgICBtYXAuZ2V0KCRncmV5LXBhbGV0dGUsIDEwMCksXG4gIGJhY2tncm91bmQ6IG1hcC5nZXQoJGdyZXktcGFsZXR0ZSwgNTApLFxuICBob3ZlcjogICAgICByZ2JhKGJsYWNrLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgd2hpdGUsXG4gIGRpYWxvZzogICAgIHdoaXRlLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEoYmxhY2ssIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiB3aGl0ZSxcbiAgZm9jdXNlZC1idXR0b246ICRkYXJrLWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwLmdldCgkZ3JleS1wYWxldHRlLCAzMDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcC5nZXQoJGdyZXktcGFsZXR0ZSwgNDAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogbWFwLmdldCgkZ3JleS1wYWxldHRlLCAyMDApLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcC5nZXQoJGdyZXktcGFsZXR0ZSwgMzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IG1hcC5nZXQoJGdyZXktcGFsZXR0ZSwgMjAwKSxcbiAgdG9vbHRpcDogbWFwLmdldCgkZ3JleS1wYWxldHRlLCA3MDApLFxuKTtcblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRkYXJrLXRoZW1lLWJhY2tncm91bmQtcGFsZXR0ZTogKFxuICBzdGF0dXMtYmFyOiBibGFjayxcbiAgYXBwLWJhcjogICAgbWFwLmdldCgkZ3JleS1wYWxldHRlLCA5MDApLFxuICBiYWNrZ3JvdW5kOiAjMzAzMDMwLFxuICBob3ZlcjogICAgICByZ2JhKHdoaXRlLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgbWFwLmdldCgkZ3JleS1wYWxldHRlLCA4MDApLFxuICBkaWFsb2c6ICAgICBtYXAuZ2V0KCRncmV5LXBhbGV0dGUsIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYSh3aGl0ZSwgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IG1hcC5nZXQoJGdyZXktcGFsZXR0ZSwgODAwKSxcbiAgZm9jdXNlZC1idXR0b246ICRsaWdodC1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcC5nZXQoJGdyZXktcGFsZXR0ZSwgOTAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXAuZ2V0KCRncmV5LXBhbGV0dGUsIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IGJsYWNrLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcC5nZXQoJGdyZXktcGFsZXR0ZSwgNzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IHJnYmEod2hpdGUsIDAuMTIpLFxuICB0b29sdGlwOiBtYXAuZ2V0KCRncmV5LXBhbGV0dGUsIDcwMCksXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRsaWdodC10aGVtZS1mb3JlZ3JvdW5kLXBhbGV0dGU6IChcbiAgYmFzZTogICAgICAgICAgICAgIGJsYWNrLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkZGFyay1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICBpY29uczogICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIHRleHQ6ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYShibGFjaywgMC4yNiksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKGJsYWNrLCAwLjM4KSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kZGFyay10aGVtZS1mb3JlZ3JvdW5kLXBhbGV0dGU6IChcbiAgYmFzZTogICAgICAgICAgICAgIHdoaXRlLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXZpZGVyczogICAgICAgICAgJGxpZ2h0LWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKHdoaXRlLCAwLjMpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBzZWNvbmRhcnktdGV4dDogICAgJGxpZ2h0LXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGljb25zOiAgICAgICAgICAgICB3aGl0ZSxcbiAgdGV4dDogICAgICAgICAgICAgIHdoaXRlLFxuICBzbGlkZXItbWluOiAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKHdoaXRlLCAwLjMpLFxuICBzbGlkZXItb2ZmLWFjdGl2ZTogcmdiYSh3aGl0ZSwgMC4zKSxcbik7XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 68710:
/*!**********************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/realtime-users-widget/realtime-users-widget.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RealtimeUsersWidgetModule: () => (/* binding */ RealtimeUsersWidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _realtime_users_widget_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./realtime-users-widget.component */ 77473);
/* harmony import */ var _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@fury/shared/scrollbar/scrollbar.module */ 31907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);






class RealtimeUsersWidgetModule {
  static #_ = this.ɵfac = function RealtimeUsersWidgetModule_Factory(t) {
    return new (t || RealtimeUsersWidgetModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: RealtimeUsersWidgetModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
    // Core
    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__.FuryCardModule, _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_3__.ScrollbarModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](RealtimeUsersWidgetModule, {
    declarations: [_realtime_users_widget_component__WEBPACK_IMPORTED_MODULE_2__.RealtimeUsersWidgetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
    // Core
    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__.FuryCardModule, _fury_shared_scrollbar_scrollbar_module__WEBPACK_IMPORTED_MODULE_3__.ScrollbarModule],
    exports: [_realtime_users_widget_component__WEBPACK_IMPORTED_MODULE_2__.RealtimeUsersWidgetComponent]
  });
})();

/***/ }),

/***/ 71575:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/recent-sales-widget/recent-sales-widget-table/recent-sales-widget-table.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentSalesWidgetTableComponent: () => (/* binding */ RecentSalesWidgetTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ 39687);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ 87963);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 46798);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 55400);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 74520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 17401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../@fury/shared/list/list.component */ 32283);













function RecentSalesWidgetTableComponent_ng_container_2_ng_container_1_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", column_r3.name, "");
  }
}
function RecentSalesWidgetTableComponent_ng_container_2_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r8[column_r3.property]);
  }
}
function RecentSalesWidgetTableComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecentSalesWidgetTableComponent_ng_container_2_ng_container_1_th_1_Template, 2, 1, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecentSalesWidgetTableComponent_ng_container_2_ng_container_1_td_2_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matColumnDef", column_r3.property);
  }
}
function RecentSalesWidgetTableComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecentSalesWidgetTableComponent_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const column_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", column_r3.isModelProperty);
  }
}
function RecentSalesWidgetTableComponent_tr_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 12);
  }
}
function RecentSalesWidgetTableComponent_tr_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 13);
  }
}
class RecentSalesWidgetTableComponent {
  constructor(dialog) {
    this.dialog = dialog;
    this.pageSize = 10;
    /**
     * Simulating a service with HTTP that returns Observables
     * You probably want to remove this and do all requests in a service with HTTP
     */
    this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.ReplaySubject(1);
    this.data$ = this.subject$.asObservable();
  }
  set data(value) {
    this.subject$.next(value);
  }
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }
  ngOnInit() {
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource();
    this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(data => !!data)).subscribe(values => this.dataSource.data = values);
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  static #_ = this.ɵfac = function RecentSalesWidgetTableComponent_Factory(t) {
    return new (t || RecentSalesWidgetTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: RecentSalesWidgetTableComponent,
    selectors: [["fury-recent-sales-widget-table"]],
    viewQuery: function RecentSalesWidgetTableComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
      }
    },
    inputs: {
      columns: "columns",
      pageSize: "pageSize",
      data: "data"
    },
    decls: 6,
    vars: 6,
    consts: [["fxFlex", "grow", "fxLayout", "column", 1, "list", 3, "hideHeader"], ["mat-table", "", "matSort", "", 1, "table", 3, "dataSource"], [4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
    template: function RecentSalesWidgetTableComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "fury-list", 0)(1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecentSalesWidgetTableComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RecentSalesWidgetTableComponent_tr_3_Template, 1, 0, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RecentSalesWidgetTableComponent_tr_4_Template, 1, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "mat-paginator", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hideHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", ctx.pageSize);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__.MatPaginator, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__.MatSortHeader, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.list[_ngcontent-%COMP%] {\n  box-shadow: none;\n  border-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2Rhc2hib2FyZC93aWRnZXRzL3JlY2VudC1zYWxlcy13aWRnZXQvcmVjZW50LXNhbGVzLXdpZGdldC10YWJsZS9yZWNlbnQtc2FsZXMtd2lkZ2V0LXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3hHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFpQkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3RoZW1pbmcvcGFsZXR0ZVwiO1xuXG4vKipcbiAgR2VuZXJhbFxuICovXG5cbiRwYWdlLWxvYWQtYmFja2dyb3VuZDogIzEzMjkzZDtcbiRlbGV2YXRpb246IDI7XG5cbiRjb2xvci1zdWNjZXNzOiAjN2NiMzQyO1xuXG4kc3BhY2luZzogMjRweDtcbiRib3JkZXItcmFkaXVzOiA4cHg7XG5cbiRwYWRkaW5nLXhsOiA0OHB4O1xuJHBhZGRpbmctbGc6IDMycHg7XG4kcGFkZGluZzogMjRweDtcbiRwYWRkaW5nLW1kOiAxNnB4O1xuJHBhZGRpbmctc206IDEycHg7XG4kcGFkZGluZy14czogOHB4O1xuJHBhZGRpbmcteHhzOiA0cHg7XG4kcGFkZGluZy0wOiAwcHg7XG5cbiRwYWRkaW5nczogKFxuICAnLTAnOiAkcGFkZGluZy0wLFxuICAteHhzOiAkcGFkZGluZy14eHMsXG4gIC14czogJHBhZGRpbmcteHMsXG4gIC1zbTogJHBhZGRpbmctc20sXG4gIC1tZDogJHBhZGRpbmctbWQsXG4gICcnOiAkcGFkZGluZyxcbiAgLWxnOiAkcGFkZGluZy1sZyxcbiAgLXhsOiAkcGFkZGluZy14bCxcbik7XG5cbiRpY29uLXNpemVzOiAoXG4gIC14czogMTRweCxcbiAgLXNtOiAxOHB4LFxuICAtbWQ6IDIwcHgsXG4gICcnOiAyNHB4LFxuICAtbGc6IDI4cHgsXG4gIC14bDogMzJweFxuKTtcblxuLyoqXG4gIENhcmRcbiAqL1xuJGNhcmQtaGVhZGVyLWhlaWdodDogNjRweDtcblxuLyoqXG4gIFRvb2xiYXJcbiAqL1xuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJHRvb2xiYXItei1pbmRleDogNTAwO1xuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xuXG4vKipcbiAgRm9vdGVyXG4gKi9cbiRmb290ZXItaGVpZ2h0OiA1NnB4O1xuJGZvb3Rlci16LWluZGV4OiAxMDA7XG5cbi8vIFNpZGVuYXZcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNzRweDtcbiRzaWRlbmF2LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8vIFNpZGVuYXYgSXRlbVxuXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcblxuJHNpZGVuYXYtaXRlbS1oZWlnaHQ6IDQ0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1yaWdodDogMTZweDtcbiRzaWRlbmF2LWl0ZW0tbWFyZ2luLXJpZ2h0OiA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDEgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDM6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMiArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xuXG4vLyBTaWRlbmF2IHdpZHRoIGNhbiBiZSBjaGFuZ2VkIGluIHNyYy9AZnVyeS9hbmltYXRpb25zL3NpZGVuYXYuYW5pbWF0aW9uLnRzXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XG5cbiRibGluay1zY3JvbGxiYXItd2lkdGg6IDEycHg7XG5cbi8vIFBhZ2UgTGF5b3V0XG4kcGFnZS1sYXlvdXQtaGVpZ2h0OiAyMDBweDtcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vKipcbiAgTWl4aW5zXG4gKi9cbiRtZWRpYS14czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJztcbkBtaXhpbiBtZWRpYS14cyB7XG4gIEBtZWRpYSAjeyRtZWRpYS14c30ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gIEluYm94XG4gKi9cbiRpbmJveC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuJGluYm94LXNlYXJjaGJhci1oZWlnaHQ6IDU0cHg7XG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcbiRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ6IDU0cHg7XG4iLCJAaW1wb3J0IFwidmFyXCI7XG5cbi5saXN0IHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 22775:
/*!*********************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/recent-sales-widget/recent-sales-widget.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentSalesWidgetComponent: () => (/* binding */ RecentSalesWidgetComponent)
/* harmony export */ });
/* harmony import */ var lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash-es/defaultsDeep */ 44010);
/* harmony import */ var _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/chart-widget/chart-widget-defaults */ 14576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _fury_shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/loading-overlay/loading-overlay.component */ 15013);
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.component */ 61864);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 16667);
/* harmony import */ var _recent_sales_widget_table_recent_sales_widget_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recent-sales-widget-table/recent-sales-widget-table.component */ 71575);











function RecentSalesWidgetComponent_fury_card_header_subheading_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "fury-card-header-subheading");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.options.subTitle);
  }
}
function RecentSalesWidgetComponent_canvas_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "canvas", 11);
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("datasets", ctx_r1.chartData.datasets)("labels", ctx_r1.chartData.labels)("legend", false)("options", ctx_r1.chartOptions);
  }
}
class RecentSalesWidgetComponent {
  constructor() {
    this.chartOptions = (0,lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_5__["default"])({
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        }
      },
      elements: {
        point: {
          radius: 0
        }
      },
      layout: {
        autoPadding: false
      }
    }, _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__.defaultChartOptions);
  }
  reload() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  static #_ = this.ɵfac = function RecentSalesWidgetComponent_Factory(t) {
    return new (t || RecentSalesWidgetComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: RecentSalesWidgetComponent,
    selectors: [["fury-recent-sales-widget"]],
    inputs: {
      tableOptions: "tableOptions",
      tableData: "tableData",
      chartData: "chartData",
      options: "options",
      chartOptions: "chartOptions"
    },
    decls: 34,
    vars: 8,
    consts: [[4, "ngIf"], ["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "card-content"], [3, "data", "columns", "pageSize"], [1, "content"], ["baseChart", "", "type", "line", 3, "datasets", "labels", "legend", "options", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""], [3, "isLoading"], ["baseChart", "", "type", "line", 3, "datasets", "labels", "legend", "options"]],
    template: function RecentSalesWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "fury-card")(1, "fury-card-header")(2, "fury-card-header-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, RecentSalesWidgetComponent_fury_card_header_subheading_4_Template, 2, 1, "fury-card-header-subheading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "fury-card-header-actions")(6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function RecentSalesWidgetComponent_Template_button_click_6_listener() {
          return ctx.reload();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 2)(10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "fury-recent-sales-widget-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, RecentSalesWidgetComponent_canvas_15_Template, 1, 4, "canvas", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-menu", null, 7)(18, "button", 8)(19, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 9)(24, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, " more");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, " More Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "button", 8)(29, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, " remove_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, " Remove Widget ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "fury-loading-overlay", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.options.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.options.subTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("data", ctx.tableData)("columns", ctx.tableOptions == null ? null : ctx.tableOptions.columns)("pageSize", ctx.tableOptions == null ? null : ctx.tableOptions.pageSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.chartData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isLoading", ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_9__.MatMenuTrigger, _fury_shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayComponent, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCard, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeader, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeaderTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeaderSubTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeaderActions, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardContent, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.BaseChartDirective, _recent_sales_widget_table_recent_sales_widget_table_component__WEBPACK_IMPORTED_MODULE_3__.RecentSalesWidgetTableComponent],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.content[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  height: 180px;\n  max-width: 100%;\n  display: flex;\n  flex: 1;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2Rhc2hib2FyZC93aWRnZXRzL3JlY2VudC1zYWxlcy13aWRnZXQvcmVjZW50LXNhbGVzLXdpZGdldC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFBQTtBQXlDQTs7RUFBQTtBQUtBOztFQUFBO0FBT0E7O0VBQUE7QUFpQ0E7O0VBQUE7QUFpQkE7O0VBQUE7QUN4R0E7RUFDRSxVQUFBO0FBaUJGOztBQWRBO0VBQ0UsZ0JES1E7RUNKUixhQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7QUFpQkYiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS9zdHlsZS92YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCJAYW5ndWxhci9tYXRlcmlhbC9jb3JlL3RoZW1pbmcvcGFsZXR0ZVwiO1xuXG4vKipcbiAgR2VuZXJhbFxuICovXG5cbiRwYWdlLWxvYWQtYmFja2dyb3VuZDogIzEzMjkzZDtcbiRlbGV2YXRpb246IDI7XG5cbiRjb2xvci1zdWNjZXNzOiAjN2NiMzQyO1xuXG4kc3BhY2luZzogMjRweDtcbiRib3JkZXItcmFkaXVzOiA4cHg7XG5cbiRwYWRkaW5nLXhsOiA0OHB4O1xuJHBhZGRpbmctbGc6IDMycHg7XG4kcGFkZGluZzogMjRweDtcbiRwYWRkaW5nLW1kOiAxNnB4O1xuJHBhZGRpbmctc206IDEycHg7XG4kcGFkZGluZy14czogOHB4O1xuJHBhZGRpbmcteHhzOiA0cHg7XG4kcGFkZGluZy0wOiAwcHg7XG5cbiRwYWRkaW5nczogKFxuICAnLTAnOiAkcGFkZGluZy0wLFxuICAteHhzOiAkcGFkZGluZy14eHMsXG4gIC14czogJHBhZGRpbmcteHMsXG4gIC1zbTogJHBhZGRpbmctc20sXG4gIC1tZDogJHBhZGRpbmctbWQsXG4gICcnOiAkcGFkZGluZyxcbiAgLWxnOiAkcGFkZGluZy1sZyxcbiAgLXhsOiAkcGFkZGluZy14bCxcbik7XG5cbiRpY29uLXNpemVzOiAoXG4gIC14czogMTRweCxcbiAgLXNtOiAxOHB4LFxuICAtbWQ6IDIwcHgsXG4gICcnOiAyNHB4LFxuICAtbGc6IDI4cHgsXG4gIC14bDogMzJweFxuKTtcblxuLyoqXG4gIENhcmRcbiAqL1xuJGNhcmQtaGVhZGVyLWhlaWdodDogNjRweDtcblxuLyoqXG4gIFRvb2xiYXJcbiAqL1xuJHRvb2xiYXItaGVpZ2h0OiA2NHB4O1xuJHRvb2xiYXItei1pbmRleDogNTAwO1xuJHRvb2xiYXItYnV0dG9uLXdpZHRoOiA2NHB4O1xuXG4vKipcbiAgRm9vdGVyXG4gKi9cbiRmb290ZXItaGVpZ2h0OiA1NnB4O1xuJGZvb3Rlci16LWluZGV4OiAxMDA7XG5cbi8vIFNpZGVuYXZcbiRzaWRlbmF2LXdpZHRoOiAyODBweDtcbiRzaWRlbmF2LWNvbGxhcHNlZC13aWR0aDogNzRweDtcbiRzaWRlbmF2LXRvb2xiYXItaGVpZ2h0OiAkdG9vbGJhci1oZWlnaHQ7XG5cbi8vIFNpZGVuYXYgSXRlbVxuXG4kc2lkZW5hdi1pdGVtLWljb24tc2l6ZTogMjJweDtcblxuJHNpZGVuYXYtaXRlbS1oZWlnaHQ6IDQ0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDogMjRweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1yaWdodDogMTZweDtcbiRzaWRlbmF2LWl0ZW0tbWFyZ2luLXJpZ2h0OiA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDE6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwyOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDEgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDM6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMiArIDhweDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsNDogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzICsgOHB4O1xuXG4vLyBTaWRlbmF2IHdpZHRoIGNhbiBiZSBjaGFuZ2VkIGluIHNyYy9AZnVyeS9hbmltYXRpb25zL3NpZGVuYXYuYW5pbWF0aW9uLnRzXG4kc2lkZW5hdi16LWluZGV4OiA3MDA7XG5cbiRibGluay1zY3JvbGxiYXItd2lkdGg6IDEycHg7XG5cbi8vIFBhZ2UgTGF5b3V0XG4kcGFnZS1sYXlvdXQtaGVpZ2h0OiAyMDBweDtcbiRwYWdlLWxheW91dC10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vKipcbiAgTWl4aW5zXG4gKi9cbiRtZWRpYS14czogJ3NjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJztcbkBtaXhpbiBtZWRpYS14cyB7XG4gIEBtZWRpYSAjeyRtZWRpYS14c30ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbiRtZWRpYS1zbTogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogNTk5cHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknO1xuQG1peGluIG1lZGlhLXNtIHtcbiAgQG1lZGlhICN7JG1lZGlhLXNtfSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLyoqXG4gIEluYm94XG4gKi9cbiRpbmJveC1oZWFkZXItaGVpZ2h0OiA2NHB4O1xuJGluYm94LXNlYXJjaGJhci1oZWlnaHQ6IDU0cHg7XG4kaW5ib3gtc3Rhci1jb2xvcjogI2ZmYzEwNztcbiRpbmJveC1tYWlsLWxpc3QtaXRlbS1oZWlnaHQ6IDU0cHg7XG4iLCJAaW1wb3J0IFwidmFyXCI7XG5cbi5jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uY29udGVudCB7XG4gIG1hcmdpbi10b3A6ICRzcGFjaW5nO1xuICBoZWlnaHQ6IDE4MHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 93875:
/*!******************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/recent-sales-widget/recent-sales-widget.module.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RecentSalesWidgetModule: () => (/* binding */ RecentSalesWidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/list/list.module */ 55429);
/* harmony import */ var _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/loading-overlay/loading-overlay.module */ 6354);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _recent_sales_widget_table_recent_sales_widget_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recent-sales-widget-table/recent-sales-widget-table.component */ 71575);
/* harmony import */ var _recent_sales_widget_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./recent-sales-widget.component */ 22775);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 16667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 61699);









class RecentSalesWidgetModule {
  static #_ = this.ɵfac = function RecentSalesWidgetModule_Factory(t) {
    return new (t || RecentSalesWidgetModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: RecentSalesWidgetModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
    // Core
    _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_2__.LoadingOverlayModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__.FuryCardModule, _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_1__.ListModule, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RecentSalesWidgetModule, {
    declarations: [_recent_sales_widget_component__WEBPACK_IMPORTED_MODULE_5__.RecentSalesWidgetComponent, _recent_sales_widget_table_recent_sales_widget_table_component__WEBPACK_IMPORTED_MODULE_4__.RecentSalesWidgetTableComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_3__.MaterialModule,
    // Core
    _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_2__.LoadingOverlayModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__.FuryCardModule, _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_1__.ListModule, ng2_charts__WEBPACK_IMPORTED_MODULE_8__.NgChartsModule],
    exports: [_recent_sales_widget_component__WEBPACK_IMPORTED_MODULE_5__.RecentSalesWidgetComponent]
  });
})();

/***/ }),

/***/ 95986:
/*!***********************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/sales-summary-widget/sales-summary-widget.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesSummaryWidgetComponent: () => (/* binding */ SalesSummaryWidgetComponent)
/* harmony export */ });
/* harmony import */ var lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es/defaultsDeep */ 44010);
/* harmony import */ var _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/chart-widget/chart-widget-defaults */ 14576);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 86515);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 90895);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ 78128);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/flex */ 45356);
/* harmony import */ var _fury_shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/loading-overlay/loading-overlay.component */ 15013);
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.component */ 61864);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-charts */ 16667);











function SalesSummaryWidgetComponent_canvas_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "canvas", 15);
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("datasets", ctx_r0.data.datasets)("labels", ctx_r0.data.labels)("legend", false)("options", ctx_r0.chartOptions);
  }
}
class SalesSummaryWidgetComponent {
  constructor() {
    this.chartOptions = (0,lodash_es_defaultsDeep__WEBPACK_IMPORTED_MODULE_4__["default"])({
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true
        }
      },
      elements: {
        point: {
          radius: 0
        },
        line: {
          tension: 0.4
        }
      },
      layout: {
        autoPadding: false,
        padding: 0
      },
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false
        }
      }
    }, _fury_shared_chart_widget_chart_widget_defaults__WEBPACK_IMPORTED_MODULE_0__.defaultChartOptions);
  }
  reload() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
  static #_ = this.ɵfac = function SalesSummaryWidgetComponent_Factory(t) {
    return new (t || SalesSummaryWidgetComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: SalesSummaryWidgetComponent,
    selectors: [["fury-sales-summary-widget"]],
    inputs: {
      data: "data",
      options: "options",
      chartOptions: "chartOptions"
    },
    decls: 51,
    vars: 5,
    consts: [["mat-icon-button", "", 3, "click"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [1, "card-content"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "sections"], ["fxFlex", "grow", 1, "section"], [1, "label"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "value"], [1, "indicator", "success"], [1, "indicator", "warn"], [1, "content"], ["baseChart", "", "type", "line", 3, "datasets", "labels", "legend", "options", 4, "ngIf"], [3, "isLoading"], ["menu", "matMenu"], ["mat-menu-item", ""], ["mat-menu-item", "", "disabled", ""], ["baseChart", "", "type", "line", 3, "datasets", "labels", "legend", "options"]],
    template: function SalesSummaryWidgetComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "fury-card")(1, "fury-card-header")(2, "fury-card-header-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "fury-card-header-subheading");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "fury-card-header-actions")(7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SalesSummaryWidgetComponent_Template_button_click_7_listener() {
          return ctx.reload();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "refresh");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 1)(11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "fury-card-content", 2)(14, "div", 3)(15, "div", 4)(16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Monthly Sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 6)(19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "473");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "trending_up");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 4)(24, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Sales Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 6)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "46");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "trending_down");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, SalesSummaryWidgetComponent_canvas_32_Template, 1, 4, "canvas", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "fury-loading-overlay", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-menu", null, 12)(36, "button", 13)(37, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "button", 14)(42, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, " more");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " More Info ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "button", 13)(47, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, " remove_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, " Remove Widget ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      }
      if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.options.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.options.subTitle, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isLoading", ctx.isLoading);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatIconButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__.MatMenuTrigger, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__.DefaultFlexDirective, _fury_shared_loading_overlay_loading_overlay_component__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayComponent, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCard, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeader, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeaderTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeaderSubTitle, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardHeaderActions, _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__.FuryCardContent, ng2_charts__WEBPACK_IMPORTED_MODULE_10__.BaseChartDirective],
    styles: ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.gain[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font: var(--font-caption);\n}\n.gain[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  height: 18px;\n  width: 18px;\n  line-height: 18px;\n}\n\n.card-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.card-content[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%] {\n  padding: 0 24px 24px;\n}\n.card-content[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font: var(--font-body-1);\n  text-transform: uppercase;\n}\n.card-content[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font: var(--font-display-1);\n}\n.card-content[_ngcontent-%COMP%]   .sections[_ngcontent-%COMP%]   .section[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .indicator[_ngcontent-%COMP%] {\n  margin-left: 3px;\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n}\n.card-content[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  height: 170px;\n  max-width: 100%;\n  display: flex;\n  flex: 1;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9AZnVyeS9zdHlsZXMvX3Zhci5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZW1vL2Rhc2hib2FyZC93aWRnZXRzL3NhbGVzLXN1bW1hcnktd2lkZ2V0L3NhbGVzLXN1bW1hcnktd2lkZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOztFQUFBO0FBeUNBOztFQUFBO0FBS0E7O0VBQUE7QUFPQTs7RUFBQTtBQWlDQTs7RUFBQTtBQWlCQTs7RUFBQTtBQ3ZHQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7QUFnQkY7QUFkRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBZ0JKOztBQVpBO0VBQ0UsVUFBQTtBQWVGO0FBYkU7RUFDRSxvQkFBQTtBQWVKO0FBWE07RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FBYVI7QUFWTTtFQUNFLDJCQUFBO0FBWVI7QUFWUTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBWVY7QUFORTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtBQVFKIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBhbmd1bGFyL21hdGVyaWFsL2NvcmUvc3R5bGUvdmFyaWFibGVzXCI7XG5AaW1wb3J0IFwiQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZS90aGVtaW5nL3BhbGV0dGVcIjtcblxuLyoqXG4gIEdlbmVyYWxcbiAqL1xuXG4kcGFnZS1sb2FkLWJhY2tncm91bmQ6ICMxMzI5M2Q7XG4kZWxldmF0aW9uOiAyO1xuXG4kY29sb3Itc3VjY2VzczogIzdjYjM0MjtcblxuJHNwYWNpbmc6IDI0cHg7XG4kYm9yZGVyLXJhZGl1czogOHB4O1xuXG4kcGFkZGluZy14bDogNDhweDtcbiRwYWRkaW5nLWxnOiAzMnB4O1xuJHBhZGRpbmc6IDI0cHg7XG4kcGFkZGluZy1tZDogMTZweDtcbiRwYWRkaW5nLXNtOiAxMnB4O1xuJHBhZGRpbmcteHM6IDhweDtcbiRwYWRkaW5nLXh4czogNHB4O1xuJHBhZGRpbmctMDogMHB4O1xuXG4kcGFkZGluZ3M6IChcbiAgJy0wJzogJHBhZGRpbmctMCxcbiAgLXh4czogJHBhZGRpbmcteHhzLFxuICAteHM6ICRwYWRkaW5nLXhzLFxuICAtc206ICRwYWRkaW5nLXNtLFxuICAtbWQ6ICRwYWRkaW5nLW1kLFxuICAnJzogJHBhZGRpbmcsXG4gIC1sZzogJHBhZGRpbmctbGcsXG4gIC14bDogJHBhZGRpbmcteGwsXG4pO1xuXG4kaWNvbi1zaXplczogKFxuICAteHM6IDE0cHgsXG4gIC1zbTogMThweCxcbiAgLW1kOiAyMHB4LFxuICAnJzogMjRweCxcbiAgLWxnOiAyOHB4LFxuICAteGw6IDMycHhcbik7XG5cbi8qKlxuICBDYXJkXG4gKi9cbiRjYXJkLWhlYWRlci1oZWlnaHQ6IDY0cHg7XG5cbi8qKlxuICBUb29sYmFyXG4gKi9cbiR0b29sYmFyLWhlaWdodDogNjRweDtcbiR0b29sYmFyLXotaW5kZXg6IDUwMDtcbiR0b29sYmFyLWJ1dHRvbi13aWR0aDogNjRweDtcblxuLyoqXG4gIEZvb3RlclxuICovXG4kZm9vdGVyLWhlaWdodDogNTZweDtcbiRmb290ZXItei1pbmRleDogMTAwO1xuXG4vLyBTaWRlbmF2XG4kc2lkZW5hdi13aWR0aDogMjgwcHg7XG4kc2lkZW5hdi1jb2xsYXBzZWQtd2lkdGg6IDc0cHg7XG4kc2lkZW5hdi10b29sYmFyLWhlaWdodDogJHRvb2xiYXItaGVpZ2h0O1xuXG4vLyBTaWRlbmF2IEl0ZW1cblxuJHNpZGVuYXYtaXRlbS1pY29uLXNpemU6IDIycHg7XG5cbiRzaWRlbmF2LWl0ZW0taGVpZ2h0OiA0NHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQ6IDI0cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctcmlnaHQ6IDE2cHg7XG4kc2lkZW5hdi1pdGVtLW1hcmdpbi1yaWdodDogOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdDtcbiRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMjogJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwxICsgOHB4O1xuJHNpZGVuYXYtaXRlbS1wYWRkaW5nLWxlZnQtbGV2ZWwzOiAkc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDIgKyA4cHg7XG4kc2lkZW5hdi1pdGVtLXBhZGRpbmctbGVmdC1sZXZlbDQ6ICRzaWRlbmF2LWl0ZW0tcGFkZGluZy1sZWZ0LWxldmVsMyArIDhweDtcblxuLy8gU2lkZW5hdiB3aWR0aCBjYW4gYmUgY2hhbmdlZCBpbiBzcmMvQGZ1cnkvYW5pbWF0aW9ucy9zaWRlbmF2LmFuaW1hdGlvbi50c1xuJHNpZGVuYXYtei1pbmRleDogNzAwO1xuXG4kYmxpbmstc2Nyb2xsYmFyLXdpZHRoOiAxMnB4O1xuXG4vLyBQYWdlIExheW91dFxuJHBhZ2UtbGF5b3V0LWhlaWdodDogMjAwcHg7XG4kcGFnZS1sYXlvdXQtdG9vbGJhci1oZWlnaHQ6ICR0b29sYmFyLWhlaWdodDtcblxuLyoqXG4gIE1peGluc1xuICovXG4kbWVkaWEteHM6ICdzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSc7XG5AbWl4aW4gbWVkaWEteHMge1xuICBAbWVkaWEgI3skbWVkaWEteHN9IHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4kbWVkaWEtc206ICdzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU5OXB4KSBhbmQgKG1heC13aWR0aDogOTU5cHgpJztcbkBtaXhpbiBtZWRpYS1zbSB7XG4gIEBtZWRpYSAjeyRtZWRpYS1zbX0ge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8qKlxuICBJbmJveFxuICovXG4kaW5ib3gtaGVhZGVyLWhlaWdodDogNjRweDtcbiRpbmJveC1zZWFyY2hiYXItaGVpZ2h0OiA1NHB4O1xuJGluYm94LXN0YXItY29sb3I6ICNmZmMxMDc7XG4kaW5ib3gtbWFpbC1saXN0LWl0ZW0taGVpZ2h0OiA1NHB4O1xuIiwiQHVzZSAnc2FzczptYXRoJztcbkBpbXBvcnQgXCJ2YXJcIjtcblxuLmdhaW4ge1xuICBtYXJnaW4tbGVmdDogbWF0aC5kaXYoJHNwYWNpbmcsIDMpO1xuICBmb250OiB2YXIoLS1mb250LWNhcHRpb24pO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGhlaWdodDogMThweDtcbiAgICB3aWR0aDogMThweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgfVxufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcblxuICAuc2VjdGlvbnMge1xuICAgIHBhZGRpbmc6IDAgJHNwYWNpbmcgJHNwYWNpbmc7XG5cbiAgICAuc2VjdGlvbiB7XG5cbiAgICAgIC5sYWJlbCB7XG4gICAgICAgIGZvbnQ6IHZhcigtLWZvbnQtYm9keS0xKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIH1cblxuICAgICAgLnZhbHVlIHtcbiAgICAgICAgZm9udDogdmFyKC0tZm9udC1kaXNwbGF5LTEpO1xuXG4gICAgICAgIC5pbmRpY2F0b3Ige1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiBtYXRoLmRpdigkc3BhY2luZywgOCk7XG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG5cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 96501:
/*!********************************************************************************************!*\
  !*** ./src/app/demo/dashboard/widgets/sales-summary-widget/sales-summary-widget.module.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesSummaryWidgetModule: () => (/* binding */ SalesSummaryWidgetModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 26575);
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.module */ 33718);
/* harmony import */ var _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/loading-overlay/loading-overlay.module */ 6354);
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../@fury/shared/material-components.module */ 57665);
/* harmony import */ var _sales_summary_widget_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sales-summary-widget.component */ 95986);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-charts */ 16667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 61699);







class SalesSummaryWidgetModule {
  static #_ = this.ɵfac = function SalesSummaryWidgetModule_Factory(t) {
    return new (t || SalesSummaryWidgetModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
    type: SalesSummaryWidgetModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
    // Core
    _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__.FuryCardModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SalesSummaryWidgetModule, {
    declarations: [_sales_summary_widget_component__WEBPACK_IMPORTED_MODULE_3__.SalesSummaryWidgetComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
    // Core
    _fury_shared_loading_overlay_loading_overlay_module__WEBPACK_IMPORTED_MODULE_1__.LoadingOverlayModule, _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_0__.FuryCardModule, ng2_charts__WEBPACK_IMPORTED_MODULE_6__.NgChartsModule],
    exports: [_sales_summary_widget_component__WEBPACK_IMPORTED_MODULE_3__.SalesSummaryWidgetComponent]
  });
})();

/***/ }),

/***/ 12435:
/*!****************************************************!*\
  !*** ./src/app/demo/demo-data/widget-demo-data.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   advancedPieChartDemoLabels: () => (/* binding */ advancedPieChartDemoLabels),
/* harmony export */   advancedPieChartDemoValues: () => (/* binding */ advancedPieChartDemoValues),
/* harmony export */   audienceOverviewBounceRateDemoData: () => (/* binding */ audienceOverviewBounceRateDemoData),
/* harmony export */   audienceOverviewBounceRateDemoDataLastWeek: () => (/* binding */ audienceOverviewBounceRateDemoDataLastWeek),
/* harmony export */   audienceOverviewBounceRateDemoLabels: () => (/* binding */ audienceOverviewBounceRateDemoLabels),
/* harmony export */   audienceOverviewSessionDurationDemoData: () => (/* binding */ audienceOverviewSessionDurationDemoData),
/* harmony export */   audienceOverviewSessionDurationDemoLabels: () => (/* binding */ audienceOverviewSessionDurationDemoLabels),
/* harmony export */   audienceOverviewSessionDurationDemoLastWeek: () => (/* binding */ audienceOverviewSessionDurationDemoLastWeek),
/* harmony export */   audienceOverviewSessionsDemoData: () => (/* binding */ audienceOverviewSessionsDemoData),
/* harmony export */   audienceOverviewSessionsDemoDataLastWeek: () => (/* binding */ audienceOverviewSessionsDemoDataLastWeek),
/* harmony export */   audienceOverviewSessionsDemoLabels: () => (/* binding */ audienceOverviewSessionsDemoLabels),
/* harmony export */   audienceOverviewUsersDemoData: () => (/* binding */ audienceOverviewUsersDemoData),
/* harmony export */   audienceOverviewUsersDemoDataLastWeek: () => (/* binding */ audienceOverviewUsersDemoDataLastWeek),
/* harmony export */   audienceOverviewUsersDemoLabels: () => (/* binding */ audienceOverviewUsersDemoLabels),
/* harmony export */   clicksChartDemoLabels: () => (/* binding */ clicksChartDemoLabels),
/* harmony export */   clicksChartDemoValues: () => (/* binding */ clicksChartDemoValues),
/* harmony export */   conversionsChartDemoLabels: () => (/* binding */ conversionsChartDemoLabels),
/* harmony export */   conversionsChartDemoValues: () => (/* binding */ conversionsChartDemoValues),
/* harmony export */   recentSalesChartDemoLabels: () => (/* binding */ recentSalesChartDemoLabels),
/* harmony export */   recentSalesChartDemoValues: () => (/* binding */ recentSalesChartDemoValues),
/* harmony export */   recentSalesTableDemoData: () => (/* binding */ recentSalesTableDemoData),
/* harmony export */   salesChartDemoLabels: () => (/* binding */ salesChartDemoLabels),
/* harmony export */   salesChartDemoValues: () => (/* binding */ salesChartDemoValues),
/* harmony export */   salesSummaryDemoData: () => (/* binding */ salesSummaryDemoData),
/* harmony export */   salesSummaryDemoLabels: () => (/* binding */ salesSummaryDemoLabels),
/* harmony export */   top5CategoriesDemoData: () => (/* binding */ top5CategoriesDemoData),
/* harmony export */   visitsChartDemoLabels: () => (/* binding */ visitsChartDemoLabels),
/* harmony export */   visitsChartDemoValues: () => (/* binding */ visitsChartDemoValues)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 58540);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);

const today = moment__WEBPACK_IMPORTED_MODULE_0__().minutes(0);
const now = moment__WEBPACK_IMPORTED_MODULE_0__();
const salesChartDemoValues = [193, 82, 195, 62, 112, 73, 193, 199, 111, 177, 34, 143, 53, 90, 161, 31, 190, 129, 185, 133, 188, 107, 123, 125, 184, 152, 78, 172, 86, 152, 185, 139, 147, 65, 111, 86, 89, 117, 101, 128, 126, 178, 198, 110, 140, 121, 151, 142, 178, 11, 88, 182, 104, 26, 38, 72, 196, 132, 22, 81, 22, 159, 40, 124, 123, 133, 135, 167, 83, 111, 179, 83, 121, 136, 113];
const salesChartDemoLabels = () => {
  return salesChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};
const visitsChartDemoValues = [55, 128, 155, 26, 37, 136, 91, 12, 7, 184, 88, 107, 128, 153, 59, 24, 135, 26, 85, 123, 161, 53, 116, 134];
const visitsChartDemoLabels = () => {
  return visitsChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};
const clicksChartDemoValues = [186, 34, 172, 161, 27, 163, 87, 119, 123, 15, 180, 7, 72, 107, 181, 33, 45, 143, 91, 200];
const clicksChartDemoLabels = () => {
  return clicksChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};
const conversionsChartDemoValues = [160, 45, 77, 162, 55, 87, 102, 159, 87, 34, 98, 88, 176, 140, 102, 187, 72, 87, 46, 99];
const conversionsChartDemoLabels = () => {
  return conversionsChartDemoValues.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};
const salesSummaryDemoData = {
  revenue: [6, 4, 8, 3, 10, 8, 4],
  expenses: [6, 4, 8, 3, 10, 8, 4]
};
const salesSummaryDemoLabels = () => {
  return salesSummaryDemoData.revenue.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};
let top5CategoriesDemoData = [{
  'label': 'Scanners',
  'value': 24
}, {
  'label': 'Smartphones',
  'value': 33
}, {
  'label': 'Printers',
  'value': 16
}, {
  'label': 'TVs',
  'value': 8
}, {
  'label': 'DVDs',
  'value': 19
}];
const audienceOverviewUsersDemoDataLastWeek = [81, 71, 98, 54, 99, 120, 132];
const audienceOverviewUsersDemoData = [108, 78, 63, 119, 85, 140, 101];
const audienceOverviewUsersDemoLabels = () => {
  return audienceOverviewUsersDemoData.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};
const audienceOverviewSessionsDemoDataLastWeek = [81, 46, 99, 102, 66, 140, 173];
const audienceOverviewSessionsDemoData = [125, 43, 87, 150, 120, 100, 164];
const audienceOverviewSessionsDemoLabels = () => {
  return audienceOverviewSessionsDemoData.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};
const audienceOverviewBounceRateDemoDataLastWeek = [8.8, 14.5, 12.3, 16.7, 7.2, 6.1, 8.4];
const audienceOverviewBounceRateDemoData = [5.5, 12.3, 8.4, 7.3, 9.8, 6.6, 9.2];
const audienceOverviewBounceRateDemoLabels = () => {
  return audienceOverviewBounceRateDemoData.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};
const audienceOverviewSessionDurationDemoLastWeek = [80, 98, 87, 102, 120, 108, 145];
const audienceOverviewSessionDurationDemoData = [125, 43, 87, 150, 120, 100, 164];
const audienceOverviewSessionDurationDemoLabels = () => {
  return audienceOverviewSessionDurationDemoData.map((value, index) => today.clone().subtract(index, 'day').format('DD/MM')).reverse();
};
const recentSalesTableDemoData = [{
  name: 'Apple iPhone 8',
  price: '$899.99',
  timestamp: now.clone().subtract(2, 'minutes').fromNow()
}, {
  name: 'USB-C Cable',
  price: '$8.99',
  timestamp: now.clone().subtract(6, 'minutes').fromNow()
}, {
  name: 'Apple MacBook Pro',
  price: '$1299.99',
  timestamp: now.clone().subtract(14, 'minutes').fromNow()
}, {
  name: 'Samsung Galaxy S9',
  price: '$799.99',
  timestamp: now.clone().subtract(17, 'minutes').fromNow()
}, {
  name: 'Lightning to USB-C Adapter',
  price: '$16.99',
  timestamp: now.clone().subtract(25, 'minutes').fromNow()
}, {
  name: 'Samsung Galaxy S8 256GB',
  price: '$599.99',
  timestamp: now.clone().subtract(42, 'minutes').fromNow()
}, {
  name: 'Apple iPhone X',
  price: '$1099.99',
  timestamp: now.clone().subtract(87, 'minutes').fromNow()
}, {
  name: 'Apple iPhone 7 128GB',
  price: '$699.99',
  timestamp: now.clone().subtract(97, 'minutes').fromNow()
}, {
  name: 'Apple Mac Pro',
  price: '$999.99',
  timestamp: now.clone().subtract(104, 'minutes').fromNow()
}, {
  name: 'Samsung DEX',
  price: '$54.99',
  timestamp: now.clone().subtract(150, 'minutes').fromNow()
}];
const recentSalesChartDemoValues = [13, 11, 11, 18, 10, 15, 18, 21, 19, 14, 20, 20, 19, 25, 30, 26, 26, 16, 24, 26, 29, 21, 28, 20, 22, 26, 16, 11, 19, 10, 14, 15, 10, 14, 22, 12, 13, 18, 11, 12, 22, 12, 12, 12, 11, 19, 23, 20, 11, 17];
const recentSalesChartDemoLabels = () => {
  return recentSalesChartDemoValues.map((value, index) => now.clone().subtract(index * 10, 'minutes').fromNow()).reverse();
};
const advancedPieChartDemoValues = [1012, 1656, 1132, 1025, 655, 453];
const advancedPieChartDemoLabels = ['Germany', 'France', 'USA', 'India', 'Italy', 'China'];
/*
export const widget1Data = [
  {
    key: 'Users',
    area: true,
    color: '#7986CC',
    values: [
      {
        'date': today - 1000 * 60 * 60 * 24 * 7,
        'value': 0
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 6,
        'value': 135
      },s
      {
        'date': today - 1000 * 60 * 60 * 24 * 5,
        'value': 412
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 4,
        'value': 242
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 3,
        'value': 546
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 2,
        'value': 167
      },
      {
        'date': today - 1000 * 60 * 60 * 24,
        'value': 240
      },
      {
        'date': today,
        'value': 0
      },
    ]
  }
];

export const widget2Data = [
  {
    key: 'Visits',
    area: true,
    color: '#FFD54F',
    values: [
      {
        'date': today - 1000 * 60 * 60 * 24 * 7,
        'value': 0
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 6,
        'value': 122
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 5,
        'value': 732
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 4,
        'value': 555
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 3,
        'value': 332
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 2,
        'value': 585
      },
      {
        'date': today - 1000 * 60 * 60 * 24,
        'value': 287
      },
      {
        'date': today,
        'value': 0
      },
    ]
  }
];

export const widget3Data = [
  {
    key: 'Total Clicks',
    area: true,
    color: '#4DD0E2',
    values: [
      {
        'date': today - 1000 * 60 * 60 * 24 * 7,
        'value': 0
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 6,
        'value': 360
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 5,
        'value': 186
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 4,
        'value': 434
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 3,
        'value': 558
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 2,
        'value': 372
      },
      {
        'date': today - 1000 * 60 * 60 * 24,
        'value': 496
      },
      {
        'date': today,
        'value': 0
      },
    ]
  }
];

export const widget4Data = [
  {
    key: 'Conversions',
    area: true,
    color: '#81C683',
    values: [
      {
        'date': today - 1000 * 60 * 60 * 24 * 7,
        'value': 0
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 6,
        'value': 89
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 5,
        'value': 145
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 4,
        'value': 173
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 3,
        'value': 262
      },
      {
        'date': today - 1000 * 60 * 60 * 24 * 2,
        'value': 142
      },
      {
        'date': today - 1000 * 60 * 60 * 24,
        'value': 174
      },
      {
        'date': today,
        'value': 0
      },
    ]
  }
];

export const recentCustomersDemoValues = [
  13, 11, 11, 18, 10, 15, 18, 21, 19, 14, 20, 20, 19, 25, 30, 26, 26, 16, 24, 26, 29, 21, 28, 20, 22, 26, 16, 11, 19, 10, 14, 15, 10, 14, 22, 12, 13, 18, 11, 12, 22, 12, 12, 12, 11, 19, 23, 20, 11, 17
];

export let recentSalesDemoDataGenerator = () => {
  const temp = [
    {
      key: 'Sales',
      area: true,
      values: []
    }
  ];

  recentCustomersDemoValues.forEach((value, index) => {
    temp[0].values.unshift({
      'date': today - 1000 * 60 * 60 * index,
      'value': value
    });
  });

  return temp;
};

export let serverLoadDemoData = [
  {
    key: 'Web Server',
    area: true,
    color: '#E6E6E6',
    values: [
      {
        'xAxis': 8,
        'value': 0
      },
      {
        'xAxis': 7,
        'value': 89
      },
      {
        'xAxis': 6,
        'value': 145
      },
      {
        'xAxis': 5,
        'value': 173
      },
      {
        'xAxis': 4,
        'value': 262
      },
      {
        'xAxis': 3,
        'value': 142
      },
      {
        'xAxis': 2,
        'value': 174
      },
      {
        'xAxis': 1,
        'value': 0
      },
    ]
  }
];



export const trafficSourcesDemoData = [
  [
    {
      key: 'Direct',
      area: true,
      color: '#3F51B5',
      sum: 1348,
      values: [
        {
          'date': today - 1000 * 60 * 60 * 24 * 7,
          'value': 0
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 6,
          'value': 89
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 5,
          'value': 145
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 4,
          'value': 173
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 3,
          'value': 262
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 2,
          'value': 142
        },
        {
          'date': today - 1000 * 60 * 60 * 24,
          'value': 174
        },
        {
          'date': today,
          'value': 0
        },
      ]
    }
  ],
  [
    {
      key: 'Referral',
      area: true,
      color: '#2196F3',
      sum: 1252,
      values: [
        {
          'date': today - 1000 * 60 * 60 * 24 * 7,
          'value': 0
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 6,
          'value': 89
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 5,
          'value': 12
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 4,
          'value': 80
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 3,
          'value': 157
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 2,
          'value': 195
        },
        {
          'date': today - 1000 * 60 * 60 * 24,
          'value': 142
        },
        {
          'date': today,
          'value': 94
        },
      ]
    }
  ],
  [
    {
      key: 'Social',
      area: true,
      color: '#FF9800',
      sum: 954,
      values: [
        {
          'date': today - 1000 * 60 * 60 * 24 * 7,
          'value': 0
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 6,
          'value': 90
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 5,
          'value': 76
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 4,
          'value': 185
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 3,
          'value': 234
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 2,
          'value': 142
        },
        {
          'date': today - 1000 * 60 * 60 * 24,
          'value': 198
        },
        {
          'date': today,
          'value': 188
        },
      ]
    }
  ],
  [
    {
      key: 'Search',
      area: true,
      color: '#4CAF50',
      sum: 720,
      values: [
        {
          'date': today - 1000 * 60 * 60 * 24 * 7,
          'value': 89
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 6,
          'value': 54
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 5,
          'value': 99
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 4,
          'value': 132
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 3,
          'value': 85
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 2,
          'value': 54
        },
        {
          'date': today - 1000 * 60 * 60 * 24,
          'value': 104
        },
        {
          'date': today,
          'value': 80
        },
      ]
    }
  ],
  [
    {
      key: 'Internal',
      area: true,
      color: '#f44336',
      sum: 42,
      values: [
        {
          'date': today - 1000 * 60 * 60 * 24 * 7,
          'value': 0
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 6,
          'value': 12
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 5,
          'value': 6
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 4,
          'value': 10
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 3,
          'value': 16
        },
        {
          'date': today - 1000 * 60 * 60 * 24 * 2,
          'value': 14
        },
        {
          'date': today - 1000 * 60 * 60 * 24,
          'value': 18
        },
        {
          'date': today,
          'value': 10
        },
      ]
    }
  ],
];
*/

/***/ }),

/***/ 53446:
/*!******************************************************!*\
  !*** ./node_modules/@kurkle/color/dist/color.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Color: () => (/* binding */ Color),
/* harmony export */   b2n: () => (/* binding */ b2n),
/* harmony export */   b2p: () => (/* binding */ b2p),
/* harmony export */   "default": () => (/* binding */ index_esm),
/* harmony export */   hexParse: () => (/* binding */ hexParse),
/* harmony export */   hexString: () => (/* binding */ hexString),
/* harmony export */   hsl2rgb: () => (/* binding */ hsl2rgb),
/* harmony export */   hslString: () => (/* binding */ hslString),
/* harmony export */   hsv2rgb: () => (/* binding */ hsv2rgb),
/* harmony export */   hueParse: () => (/* binding */ hueParse),
/* harmony export */   hwb2rgb: () => (/* binding */ hwb2rgb),
/* harmony export */   lim: () => (/* binding */ lim),
/* harmony export */   n2b: () => (/* binding */ n2b),
/* harmony export */   n2p: () => (/* binding */ n2p),
/* harmony export */   nameParse: () => (/* binding */ nameParse),
/* harmony export */   p2b: () => (/* binding */ p2b),
/* harmony export */   rgb2hsl: () => (/* binding */ rgb2hsl),
/* harmony export */   rgbParse: () => (/* binding */ rgbParse),
/* harmony export */   rgbString: () => (/* binding */ rgbString),
/* harmony export */   rotate: () => (/* binding */ rotate),
/* harmony export */   round: () => (/* binding */ round)
/* harmony export */ });
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */
function round(v) {
  return v + 0.5 | 0;
}
const lim = (v, l, h) => Math.max(Math.min(v, h), l);
function p2b(v) {
  return lim(round(v * 2.55), 0, 255);
}
function b2p(v) {
  return lim(round(v / 2.55), 0, 100);
}
function n2b(v) {
  return lim(round(v * 255), 0, 255);
}
function b2n(v) {
  return lim(round(v / 2.55) / 100, 0, 1);
}
function n2p(v) {
  return lim(round(v * 100), 0, 100);
}
const map$1 = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};
const hex = [...'0123456789ABCDEF'];
const h1 = b => hex[b & 0xF];
const h2 = b => hex[(b & 0xF0) >> 4] + hex[b & 0xF];
const eq = b => (b & 0xF0) >> 4 === (b & 0xF);
const isShort = v => eq(v.r) && eq(v.g) && eq(v.b) && eq(v.a);
function hexParse(str) {
  var len = str.length;
  var ret;
  if (str[0] === '#') {
    if (len === 4 || len === 5) {
      ret = {
        r: 255 & map$1[str[1]] * 17,
        g: 255 & map$1[str[2]] * 17,
        b: 255 & map$1[str[3]] * 17,
        a: len === 5 ? map$1[str[4]] * 17 : 255
      };
    } else if (len === 7 || len === 9) {
      ret = {
        r: map$1[str[1]] << 4 | map$1[str[2]],
        g: map$1[str[3]] << 4 | map$1[str[4]],
        b: map$1[str[5]] << 4 | map$1[str[6]],
        a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
      };
    }
  }
  return ret;
}
const alpha = (a, f) => a < 255 ? f(a) : '';
function hexString(v) {
  var f = isShort(v) ? h1 : h2;
  return v ? '#' + f(v.r) + f(v.g) + f(v.b) + alpha(v.a, f) : undefined;
}
const HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function hsl2rgbn(h, s, l) {
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return [f(0), f(8), f(4)];
}
function hsv2rgbn(h, s, v) {
  const f = (n, k = (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
  return [f(5), f(3), f(1)];
}
function hwb2rgbn(h, w, b) {
  const rgb = hsl2rgbn(h, 1, 0.5);
  let i;
  if (w + b > 1) {
    i = 1 / (w + b);
    w *= i;
    b *= i;
  }
  for (i = 0; i < 3; i++) {
    rgb[i] *= 1 - w - b;
    rgb[i] += w;
  }
  return rgb;
}
function hueValue(r, g, b, d, max) {
  if (r === max) {
    return (g - b) / d + (g < b ? 6 : 0);
  }
  if (g === max) {
    return (b - r) / d + 2;
  }
  return (r - g) / d + 4;
}
function rgb2hsl(v) {
  const range = 255;
  const r = v.r / range;
  const g = v.g / range;
  const b = v.b / range;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h, s, d;
  if (max !== min) {
    d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = hueValue(r, g, b, d, max);
    h = h * 60 + 0.5;
  }
  return [h | 0, s || 0, l];
}
function calln(f, a, b, c) {
  return (Array.isArray(a) ? f(a[0], a[1], a[2]) : f(a, b, c)).map(n2b);
}
function hsl2rgb(h, s, l) {
  return calln(hsl2rgbn, h, s, l);
}
function hwb2rgb(h, w, b) {
  return calln(hwb2rgbn, h, w, b);
}
function hsv2rgb(h, s, v) {
  return calln(hsv2rgbn, h, s, v);
}
function hue(h) {
  return (h % 360 + 360) % 360;
}
function hueParse(str) {
  const m = HUE_RE.exec(str);
  let a = 255;
  let v;
  if (!m) {
    return;
  }
  if (m[5] !== v) {
    a = m[6] ? p2b(+m[5]) : n2b(+m[5]);
  }
  const h = hue(+m[2]);
  const p1 = +m[3] / 100;
  const p2 = +m[4] / 100;
  if (m[1] === 'hwb') {
    v = hwb2rgb(h, p1, p2);
  } else if (m[1] === 'hsv') {
    v = hsv2rgb(h, p1, p2);
  } else {
    v = hsl2rgb(h, p1, p2);
  }
  return {
    r: v[0],
    g: v[1],
    b: v[2],
    a: a
  };
}
function rotate(v, deg) {
  var h = rgb2hsl(v);
  h[0] = hue(h[0] + deg);
  h = hsl2rgb(h);
  v.r = h[0];
  v.g = h[1];
  v.b = h[2];
}
function hslString(v) {
  if (!v) {
    return;
  }
  const a = rgb2hsl(v);
  const h = a[0];
  const s = n2p(a[1]);
  const l = n2p(a[2]);
  return v.a < 255 ? `hsla(${h}, ${s}%, ${l}%, ${b2n(v.a)})` : `hsl(${h}, ${s}%, ${l}%)`;
}
const map = {
  x: 'dark',
  Z: 'light',
  Y: 're',
  X: 'blu',
  W: 'gr',
  V: 'medium',
  U: 'slate',
  A: 'ee',
  T: 'ol',
  S: 'or',
  B: 'ra',
  C: 'lateg',
  D: 'ights',
  R: 'in',
  Q: 'turquois',
  E: 'hi',
  P: 'ro',
  O: 'al',
  N: 'le',
  M: 'de',
  L: 'yello',
  F: 'en',
  K: 'ch',
  G: 'arks',
  H: 'ea',
  I: 'ightg',
  J: 'wh'
};
const names$1 = {
  OiceXe: 'f0f8ff',
  antiquewEte: 'faebd7',
  aqua: 'ffff',
  aquamarRe: '7fffd4',
  azuY: 'f0ffff',
  beige: 'f5f5dc',
  bisque: 'ffe4c4',
  black: '0',
  blanKedOmond: 'ffebcd',
  Xe: 'ff',
  XeviTet: '8a2be2',
  bPwn: 'a52a2a',
  burlywood: 'deb887',
  caMtXe: '5f9ea0',
  KartYuse: '7fff00',
  KocTate: 'd2691e',
  cSO: 'ff7f50',
  cSnflowerXe: '6495ed',
  cSnsilk: 'fff8dc',
  crimson: 'dc143c',
  cyan: 'ffff',
  xXe: '8b',
  xcyan: '8b8b',
  xgTMnPd: 'b8860b',
  xWay: 'a9a9a9',
  xgYF: '6400',
  xgYy: 'a9a9a9',
  xkhaki: 'bdb76b',
  xmagFta: '8b008b',
  xTivegYF: '556b2f',
  xSange: 'ff8c00',
  xScEd: '9932cc',
  xYd: '8b0000',
  xsOmon: 'e9967a',
  xsHgYF: '8fbc8f',
  xUXe: '483d8b',
  xUWay: '2f4f4f',
  xUgYy: '2f4f4f',
  xQe: 'ced1',
  xviTet: '9400d3',
  dAppRk: 'ff1493',
  dApskyXe: 'bfff',
  dimWay: '696969',
  dimgYy: '696969',
  dodgerXe: '1e90ff',
  fiYbrick: 'b22222',
  flSOwEte: 'fffaf0',
  foYstWAn: '228b22',
  fuKsia: 'ff00ff',
  gaRsbSo: 'dcdcdc',
  ghostwEte: 'f8f8ff',
  gTd: 'ffd700',
  gTMnPd: 'daa520',
  Way: '808080',
  gYF: '8000',
  gYFLw: 'adff2f',
  gYy: '808080',
  honeyMw: 'f0fff0',
  hotpRk: 'ff69b4',
  RdianYd: 'cd5c5c',
  Rdigo: '4b0082',
  ivSy: 'fffff0',
  khaki: 'f0e68c',
  lavFMr: 'e6e6fa',
  lavFMrXsh: 'fff0f5',
  lawngYF: '7cfc00',
  NmoncEffon: 'fffacd',
  ZXe: 'add8e6',
  ZcSO: 'f08080',
  Zcyan: 'e0ffff',
  ZgTMnPdLw: 'fafad2',
  ZWay: 'd3d3d3',
  ZgYF: '90ee90',
  ZgYy: 'd3d3d3',
  ZpRk: 'ffb6c1',
  ZsOmon: 'ffa07a',
  ZsHgYF: '20b2aa',
  ZskyXe: '87cefa',
  ZUWay: '778899',
  ZUgYy: '778899',
  ZstAlXe: 'b0c4de',
  ZLw: 'ffffe0',
  lime: 'ff00',
  limegYF: '32cd32',
  lRF: 'faf0e6',
  magFta: 'ff00ff',
  maPon: '800000',
  VaquamarRe: '66cdaa',
  VXe: 'cd',
  VScEd: 'ba55d3',
  VpurpN: '9370db',
  VsHgYF: '3cb371',
  VUXe: '7b68ee',
  VsprRggYF: 'fa9a',
  VQe: '48d1cc',
  VviTetYd: 'c71585',
  midnightXe: '191970',
  mRtcYam: 'f5fffa',
  mistyPse: 'ffe4e1',
  moccasR: 'ffe4b5',
  navajowEte: 'ffdead',
  navy: '80',
  Tdlace: 'fdf5e6',
  Tive: '808000',
  TivedBb: '6b8e23',
  Sange: 'ffa500',
  SangeYd: 'ff4500',
  ScEd: 'da70d6',
  pOegTMnPd: 'eee8aa',
  pOegYF: '98fb98',
  pOeQe: 'afeeee',
  pOeviTetYd: 'db7093',
  papayawEp: 'ffefd5',
  pHKpuff: 'ffdab9',
  peru: 'cd853f',
  pRk: 'ffc0cb',
  plum: 'dda0dd',
  powMrXe: 'b0e0e6',
  purpN: '800080',
  YbeccapurpN: '663399',
  Yd: 'ff0000',
  Psybrown: 'bc8f8f',
  PyOXe: '4169e1',
  saddNbPwn: '8b4513',
  sOmon: 'fa8072',
  sandybPwn: 'f4a460',
  sHgYF: '2e8b57',
  sHshell: 'fff5ee',
  siFna: 'a0522d',
  silver: 'c0c0c0',
  skyXe: '87ceeb',
  UXe: '6a5acd',
  UWay: '708090',
  UgYy: '708090',
  snow: 'fffafa',
  sprRggYF: 'ff7f',
  stAlXe: '4682b4',
  tan: 'd2b48c',
  teO: '8080',
  tEstN: 'd8bfd8',
  tomato: 'ff6347',
  Qe: '40e0d0',
  viTet: 'ee82ee',
  JHt: 'f5deb3',
  wEte: 'ffffff',
  wEtesmoke: 'f5f5f5',
  Lw: 'ffff00',
  LwgYF: '9acd32'
};
function unpack() {
  const unpacked = {};
  const keys = Object.keys(names$1);
  const tkeys = Object.keys(map);
  let i, j, k, ok, nk;
  for (i = 0; i < keys.length; i++) {
    ok = nk = keys[i];
    for (j = 0; j < tkeys.length; j++) {
      k = tkeys[j];
      nk = nk.replace(k, map[k]);
    }
    k = parseInt(names$1[ok], 16);
    unpacked[nk] = [k >> 16 & 0xFF, k >> 8 & 0xFF, k & 0xFF];
  }
  return unpacked;
}
let names;
function nameParse(str) {
  if (!names) {
    names = unpack();
    names.transparent = [0, 0, 0, 0];
  }
  const a = names[str.toLowerCase()];
  return a && {
    r: a[0],
    g: a[1],
    b: a[2],
    a: a.length === 4 ? a[3] : 255
  };
}
const RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function rgbParse(str) {
  const m = RGB_RE.exec(str);
  let a = 255;
  let r, g, b;
  if (!m) {
    return;
  }
  if (m[7] !== r) {
    const v = +m[7];
    a = m[8] ? p2b(v) : lim(v * 255, 0, 255);
  }
  r = +m[1];
  g = +m[3];
  b = +m[5];
  r = 255 & (m[2] ? p2b(r) : lim(r, 0, 255));
  g = 255 & (m[4] ? p2b(g) : lim(g, 0, 255));
  b = 255 & (m[6] ? p2b(b) : lim(b, 0, 255));
  return {
    r: r,
    g: g,
    b: b,
    a: a
  };
}
function rgbString(v) {
  return v && (v.a < 255 ? `rgba(${v.r}, ${v.g}, ${v.b}, ${b2n(v.a)})` : `rgb(${v.r}, ${v.g}, ${v.b})`);
}
const to = v => v <= 0.0031308 ? v * 12.92 : Math.pow(v, 1.0 / 2.4) * 1.055 - 0.055;
const from = v => v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
function interpolate(rgb1, rgb2, t) {
  const r = from(b2n(rgb1.r));
  const g = from(b2n(rgb1.g));
  const b = from(b2n(rgb1.b));
  return {
    r: n2b(to(r + t * (from(b2n(rgb2.r)) - r))),
    g: n2b(to(g + t * (from(b2n(rgb2.g)) - g))),
    b: n2b(to(b + t * (from(b2n(rgb2.b)) - b))),
    a: rgb1.a + t * (rgb2.a - rgb1.a)
  };
}
function modHSL(v, i, ratio) {
  if (v) {
    let tmp = rgb2hsl(v);
    tmp[i] = Math.max(0, Math.min(tmp[i] + tmp[i] * ratio, i === 0 ? 360 : 1));
    tmp = hsl2rgb(tmp);
    v.r = tmp[0];
    v.g = tmp[1];
    v.b = tmp[2];
  }
}
function clone(v, proto) {
  return v ? Object.assign(proto || {}, v) : v;
}
function fromObject(input) {
  var v = {
    r: 0,
    g: 0,
    b: 0,
    a: 255
  };
  if (Array.isArray(input)) {
    if (input.length >= 3) {
      v = {
        r: input[0],
        g: input[1],
        b: input[2],
        a: 255
      };
      if (input.length > 3) {
        v.a = n2b(input[3]);
      }
    }
  } else {
    v = clone(input, {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    });
    v.a = n2b(v.a);
  }
  return v;
}
function functionParse(str) {
  if (str.charAt(0) === 'r') {
    return rgbParse(str);
  }
  return hueParse(str);
}
class Color {
  constructor(input) {
    if (input instanceof Color) {
      return input;
    }
    const type = typeof input;
    let v;
    if (type === 'object') {
      v = fromObject(input);
    } else if (type === 'string') {
      v = hexParse(input) || nameParse(input) || functionParse(input);
    }
    this._rgb = v;
    this._valid = !!v;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var v = clone(this._rgb);
    if (v) {
      v.a = b2n(v.a);
    }
    return v;
  }
  set rgb(obj) {
    this._rgb = fromObject(obj);
  }
  rgbString() {
    return this._valid ? rgbString(this._rgb) : undefined;
  }
  hexString() {
    return this._valid ? hexString(this._rgb) : undefined;
  }
  hslString() {
    return this._valid ? hslString(this._rgb) : undefined;
  }
  mix(color, weight) {
    if (color) {
      const c1 = this.rgb;
      const c2 = color.rgb;
      let w2;
      const p = weight === w2 ? 0.5 : weight;
      const w = 2 * p - 1;
      const a = c1.a - c2.a;
      const w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
      w2 = 1 - w1;
      c1.r = 0xFF & w1 * c1.r + w2 * c2.r + 0.5;
      c1.g = 0xFF & w1 * c1.g + w2 * c2.g + 0.5;
      c1.b = 0xFF & w1 * c1.b + w2 * c2.b + 0.5;
      c1.a = p * c1.a + (1 - p) * c2.a;
      this.rgb = c1;
    }
    return this;
  }
  interpolate(color, t) {
    if (color) {
      this._rgb = interpolate(this._rgb, color._rgb, t);
    }
    return this;
  }
  clone() {
    return new Color(this.rgb);
  }
  alpha(a) {
    this._rgb.a = n2b(a);
    return this;
  }
  clearer(ratio) {
    const rgb = this._rgb;
    rgb.a *= 1 - ratio;
    return this;
  }
  greyscale() {
    const rgb = this._rgb;
    const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
    rgb.r = rgb.g = rgb.b = val;
    return this;
  }
  opaquer(ratio) {
    const rgb = this._rgb;
    rgb.a *= 1 + ratio;
    return this;
  }
  negate() {
    const v = this._rgb;
    v.r = 255 - v.r;
    v.g = 255 - v.g;
    v.b = 255 - v.b;
    return this;
  }
  lighten(ratio) {
    modHSL(this._rgb, 2, ratio);
    return this;
  }
  darken(ratio) {
    modHSL(this._rgb, 2, -ratio);
    return this;
  }
  saturate(ratio) {
    modHSL(this._rgb, 1, ratio);
    return this;
  }
  desaturate(ratio) {
    modHSL(this._rgb, 1, -ratio);
    return this;
  }
  rotate(deg) {
    rotate(this._rgb, deg);
    return this;
  }
}
function index_esm(input) {
  return new Color(input);
}


/***/ }),

/***/ 17005:
/*!*********************************************!*\
  !*** ./node_modules/chart.js/dist/chart.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Animation: () => (/* binding */ Animation),
/* harmony export */   Animations: () => (/* binding */ Animations),
/* harmony export */   ArcElement: () => (/* binding */ ArcElement),
/* harmony export */   BarController: () => (/* binding */ BarController),
/* harmony export */   BarElement: () => (/* binding */ BarElement),
/* harmony export */   BasePlatform: () => (/* binding */ BasePlatform),
/* harmony export */   BasicPlatform: () => (/* binding */ BasicPlatform),
/* harmony export */   BubbleController: () => (/* binding */ BubbleController),
/* harmony export */   CategoryScale: () => (/* binding */ CategoryScale),
/* harmony export */   Chart: () => (/* binding */ Chart),
/* harmony export */   Colors: () => (/* binding */ plugin_colors),
/* harmony export */   DatasetController: () => (/* binding */ DatasetController),
/* harmony export */   Decimation: () => (/* binding */ plugin_decimation),
/* harmony export */   DomPlatform: () => (/* binding */ DomPlatform),
/* harmony export */   DoughnutController: () => (/* binding */ DoughnutController),
/* harmony export */   Element: () => (/* binding */ Element),
/* harmony export */   Filler: () => (/* binding */ index),
/* harmony export */   Interaction: () => (/* binding */ Interaction),
/* harmony export */   Legend: () => (/* binding */ plugin_legend),
/* harmony export */   LineController: () => (/* binding */ LineController),
/* harmony export */   LineElement: () => (/* binding */ LineElement),
/* harmony export */   LinearScale: () => (/* binding */ LinearScale),
/* harmony export */   LogarithmicScale: () => (/* binding */ LogarithmicScale),
/* harmony export */   PieController: () => (/* binding */ PieController),
/* harmony export */   PointElement: () => (/* binding */ PointElement),
/* harmony export */   PolarAreaController: () => (/* binding */ PolarAreaController),
/* harmony export */   RadarController: () => (/* binding */ RadarController),
/* harmony export */   RadialLinearScale: () => (/* binding */ RadialLinearScale),
/* harmony export */   Scale: () => (/* binding */ Scale),
/* harmony export */   ScatterController: () => (/* binding */ ScatterController),
/* harmony export */   SubTitle: () => (/* binding */ plugin_subtitle),
/* harmony export */   Ticks: () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aL),
/* harmony export */   TimeScale: () => (/* binding */ TimeScale),
/* harmony export */   TimeSeriesScale: () => (/* binding */ TimeSeriesScale),
/* harmony export */   Title: () => (/* binding */ plugin_title),
/* harmony export */   Tooltip: () => (/* binding */ plugin_tooltip),
/* harmony export */   _adapters: () => (/* binding */ adapters),
/* harmony export */   _detectPlatform: () => (/* binding */ _detectPlatform),
/* harmony export */   animator: () => (/* binding */ animator),
/* harmony export */   controllers: () => (/* binding */ controllers),
/* harmony export */   defaults: () => (/* reexport safe */ _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   elements: () => (/* binding */ elements),
/* harmony export */   layouts: () => (/* binding */ layouts),
/* harmony export */   plugins: () => (/* binding */ plugins),
/* harmony export */   registerables: () => (/* binding */ registerables),
/* harmony export */   registry: () => (/* binding */ registry),
/* harmony export */   scales: () => (/* binding */ scales)
/* harmony export */ });
/* harmony import */ var _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/helpers.segment.js */ 22730);
/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */


class Animator {
  constructor() {
    this._request = null;
    this._charts = new Map();
    this._running = false;
    this._lastDate = undefined;
  }
  _notify(chart, anims, date, type) {
    const callbacks = anims.listeners[type];
    const numSteps = anims.duration;
    callbacks.forEach(fn => fn({
      chart,
      initial: anims.initial,
      numSteps,
      currentStep: Math.min(date - anims.start, numSteps)
    }));
  }
  _refresh() {
    if (this._request) {
      return;
    }
    this._running = true;
    this._request = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.r.call(window, () => {
      this._update();
      this._request = null;
      if (this._running) {
        this._refresh();
      }
    });
  }
  _update(date = Date.now()) {
    let remaining = 0;
    this._charts.forEach((anims, chart) => {
      if (!anims.running || !anims.items.length) {
        return;
      }
      const items = anims.items;
      let i = items.length - 1;
      let draw = false;
      let item;
      for (; i >= 0; --i) {
        item = items[i];
        if (item._active) {
          if (item._total > anims.duration) {
            anims.duration = item._total;
          }
          item.tick(date);
          draw = true;
        } else {
          items[i] = items[items.length - 1];
          items.pop();
        }
      }
      if (draw) {
        chart.draw();
        this._notify(chart, anims, date, 'progress');
      }
      if (!items.length) {
        anims.running = false;
        this._notify(chart, anims, date, 'complete');
        anims.initial = false;
      }
      remaining += items.length;
    });
    this._lastDate = date;
    if (remaining === 0) {
      this._running = false;
    }
  }
  _getAnims(chart) {
    const charts = this._charts;
    let anims = charts.get(chart);
    if (!anims) {
      anims = {
        running: false,
        initial: true,
        items: [],
        listeners: {
          complete: [],
          progress: []
        }
      };
      charts.set(chart, anims);
    }
    return anims;
  }
  listen(chart, event, cb) {
    this._getAnims(chart).listeners[event].push(cb);
  }
  add(chart, items) {
    if (!items || !items.length) {
      return;
    }
    this._getAnims(chart).items.push(...items);
  }
  has(chart) {
    return this._getAnims(chart).items.length > 0;
  }
  start(chart) {
    const anims = this._charts.get(chart);
    if (!anims) {
      return;
    }
    anims.running = true;
    anims.start = Date.now();
    anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);
    this._refresh();
  }
  running(chart) {
    if (!this._running) {
      return false;
    }
    const anims = this._charts.get(chart);
    if (!anims || !anims.running || !anims.items.length) {
      return false;
    }
    return true;
  }
  stop(chart) {
    const anims = this._charts.get(chart);
    if (!anims || !anims.items.length) {
      return;
    }
    const items = anims.items;
    let i = items.length - 1;
    for (; i >= 0; --i) {
      items[i].cancel();
    }
    anims.items = [];
    this._notify(chart, anims, Date.now(), 'complete');
  }
  remove(chart) {
    return this._charts.delete(chart);
  }
}
var animator = /* #__PURE__ */new Animator();
const transparent = 'transparent';
const interpolators = {
  boolean(from, to, factor) {
    return factor > 0.5 ? to : from;
  },
  color(from, to, factor) {
    const c0 = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.c)(from || transparent);
    const c1 = c0.valid && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.c)(to || transparent);
    return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to;
  },
  number(from, to, factor) {
    return from + (to - from) * factor;
  }
};
class Animation {
  constructor(cfg, target, prop, to) {
    const currentValue = target[prop];
    to = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a)([cfg.to, to, currentValue, cfg.from]);
    const from = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a)([cfg.from, currentValue, to]);
    this._active = true;
    this._fn = cfg.fn || interpolators[cfg.type || typeof from];
    this._easing = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.e[cfg.easing] || _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.e.linear;
    this._start = Math.floor(Date.now() + (cfg.delay || 0));
    this._duration = this._total = Math.floor(cfg.duration);
    this._loop = !!cfg.loop;
    this._target = target;
    this._prop = prop;
    this._from = from;
    this._to = to;
    this._promises = undefined;
  }
  active() {
    return this._active;
  }
  update(cfg, to, date) {
    if (this._active) {
      this._notify(false);
      const currentValue = this._target[this._prop];
      const elapsed = date - this._start;
      const remain = this._duration - elapsed;
      this._start = date;
      this._duration = Math.floor(Math.max(remain, cfg.duration));
      this._total += elapsed;
      this._loop = !!cfg.loop;
      this._to = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a)([cfg.to, to, currentValue, cfg.from]);
      this._from = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a)([cfg.from, currentValue, to]);
    }
  }
  cancel() {
    if (this._active) {
      this.tick(Date.now());
      this._active = false;
      this._notify(false);
    }
  }
  tick(date) {
    const elapsed = date - this._start;
    const duration = this._duration;
    const prop = this._prop;
    const from = this._from;
    const loop = this._loop;
    const to = this._to;
    let factor;
    this._active = from !== to && (loop || elapsed < duration);
    if (!this._active) {
      this._target[prop] = to;
      this._notify(true);
      return;
    }
    if (elapsed < 0) {
      this._target[prop] = from;
      return;
    }
    factor = elapsed / duration % 2;
    factor = loop && factor > 1 ? 2 - factor : factor;
    factor = this._easing(Math.min(1, Math.max(0, factor)));
    this._target[prop] = this._fn(from, to, factor);
  }
  wait() {
    const promises = this._promises || (this._promises = []);
    return new Promise((res, rej) => {
      promises.push({
        res,
        rej
      });
    });
  }
  _notify(resolved) {
    const method = resolved ? 'res' : 'rej';
    const promises = this._promises || [];
    for (let i = 0; i < promises.length; i++) {
      promises[i][method]();
    }
  }
}
class Animations {
  constructor(chart, config) {
    this._chart = chart;
    this._properties = new Map();
    this.configure(config);
  }
  configure(config) {
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(config)) {
      return;
    }
    const animationOptions = Object.keys(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.animation);
    const animatedProps = this._properties;
    Object.getOwnPropertyNames(config).forEach(key => {
      const cfg = config[key];
      if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(cfg)) {
        return;
      }
      const resolved = {};
      for (const option of animationOptions) {
        resolved[option] = cfg[option];
      }
      ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(cfg.properties) && cfg.properties || [key]).forEach(prop => {
        if (prop === key || !animatedProps.has(prop)) {
          animatedProps.set(prop, resolved);
        }
      });
    });
  }
  _animateOptions(target, values) {
    const newOptions = values.options;
    const options = resolveTargetOptions(target, newOptions);
    if (!options) {
      return [];
    }
    const animations = this._createAnimations(options, newOptions);
    if (newOptions.$shared) {
      awaitAll(target.options.$animations, newOptions).then(() => {
        target.options = newOptions;
      }, () => {});
    }
    return animations;
  }
  _createAnimations(target, values) {
    const animatedProps = this._properties;
    const animations = [];
    const running = target.$animations || (target.$animations = {});
    const props = Object.keys(values);
    const date = Date.now();
    let i;
    for (i = props.length - 1; i >= 0; --i) {
      const prop = props[i];
      if (prop.charAt(0) === '$') {
        continue;
      }
      if (prop === 'options') {
        animations.push(...this._animateOptions(target, values));
        continue;
      }
      const value = values[prop];
      let animation = running[prop];
      const cfg = animatedProps.get(prop);
      if (animation) {
        if (cfg && animation.active()) {
          animation.update(cfg, value, date);
          continue;
        } else {
          animation.cancel();
        }
      }
      if (!cfg || !cfg.duration) {
        target[prop] = value;
        continue;
      }
      running[prop] = animation = new Animation(cfg, target, prop, value);
      animations.push(animation);
    }
    return animations;
  }
  update(target, values) {
    if (this._properties.size === 0) {
      Object.assign(target, values);
      return;
    }
    const animations = this._createAnimations(target, values);
    if (animations.length) {
      animator.add(this._chart, animations);
      return true;
    }
  }
}
function awaitAll(animations, properties) {
  const running = [];
  const keys = Object.keys(properties);
  for (let i = 0; i < keys.length; i++) {
    const anim = animations[keys[i]];
    if (anim && anim.active()) {
      running.push(anim.wait());
    }
  }
  return Promise.all(running);
}
function resolveTargetOptions(target, newOptions) {
  if (!newOptions) {
    return;
  }
  let options = target.options;
  if (!options) {
    target.options = newOptions;
    return;
  }
  if (options.$shared) {
    target.options = options = Object.assign({}, options, {
      $shared: false,
      $animations: {}
    });
  }
  return options;
}
function scaleClip(scale, allowedOverflow) {
  const opts = scale && scale.options || {};
  const reverse = opts.reverse;
  const min = opts.min === undefined ? allowedOverflow : 0;
  const max = opts.max === undefined ? allowedOverflow : 0;
  return {
    start: reverse ? max : min,
    end: reverse ? min : max
  };
}
function defaultClip(xScale, yScale, allowedOverflow) {
  if (allowedOverflow === false) {
    return false;
  }
  const x = scaleClip(xScale, allowedOverflow);
  const y = scaleClip(yScale, allowedOverflow);
  return {
    top: y.end,
    right: x.end,
    bottom: y.start,
    left: x.start
  };
}
function toClip(value) {
  let t, r, b, l;
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(value)) {
    t = value.top;
    r = value.right;
    b = value.bottom;
    l = value.left;
  } else {
    t = r = b = l = value;
  }
  return {
    top: t,
    right: r,
    bottom: b,
    left: l,
    disabled: value === false
  };
}
function getSortedDatasetIndices(chart, filterVisible) {
  const keys = [];
  const metasets = chart._getSortedDatasetMetas(filterVisible);
  let i, ilen;
  for (i = 0, ilen = metasets.length; i < ilen; ++i) {
    keys.push(metasets[i].index);
  }
  return keys;
}
function applyStack(stack, value, dsIndex, options = {}) {
  const keys = stack.keys;
  const singleMode = options.mode === 'single';
  let i, ilen, datasetIndex, otherValue;
  if (value === null) {
    return;
  }
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    datasetIndex = +keys[i];
    if (datasetIndex === dsIndex) {
      if (options.all) {
        continue;
      }
      break;
    }
    otherValue = stack.values[datasetIndex];
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(otherValue) && (singleMode || value === 0 || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(value) === (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(otherValue))) {
      value += otherValue;
    }
  }
  return value;
}
function convertObjectDataToArray(data) {
  const keys = Object.keys(data);
  const adata = new Array(keys.length);
  let i, ilen, key;
  for (i = 0, ilen = keys.length; i < ilen; ++i) {
    key = keys[i];
    adata[i] = {
      x: key,
      y: data[key]
    };
  }
  return adata;
}
function isStacked(scale, meta) {
  const stacked = scale && scale.options.stacked;
  return stacked || stacked === undefined && meta.stack !== undefined;
}
function getStackKey(indexScale, valueScale, meta) {
  return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
}
function getUserBounds(scale) {
  const {
    min,
    max,
    minDefined,
    maxDefined
  } = scale.getUserBounds();
  return {
    min: minDefined ? min : Number.NEGATIVE_INFINITY,
    max: maxDefined ? max : Number.POSITIVE_INFINITY
  };
}
function getOrCreateStack(stacks, stackKey, indexValue) {
  const subStack = stacks[stackKey] || (stacks[stackKey] = {});
  return subStack[indexValue] || (subStack[indexValue] = {});
}
function getLastIndexInStack(stack, vScale, positive, type) {
  for (const meta of vScale.getMatchingVisibleMetas(type).reverse()) {
    const value = stack[meta.index];
    if (positive && value > 0 || !positive && value < 0) {
      return meta.index;
    }
  }
  return null;
}
function updateStacks(controller, parsed) {
  const {
    chart,
    _cachedMeta: meta
  } = controller;
  const stacks = chart._stacks || (chart._stacks = {});
  const {
    iScale,
    vScale,
    index: datasetIndex
  } = meta;
  const iAxis = iScale.axis;
  const vAxis = vScale.axis;
  const key = getStackKey(iScale, vScale, meta);
  const ilen = parsed.length;
  let stack;
  for (let i = 0; i < ilen; ++i) {
    const item = parsed[i];
    const {
      [iAxis]: index,
      [vAxis]: value
    } = item;
    const itemStacks = item._stacks || (item._stacks = {});
    stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index);
    stack[datasetIndex] = value;
    stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
    stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
    const visualValues = stack._visualValues || (stack._visualValues = {});
    visualValues[datasetIndex] = value;
  }
}
function getFirstScaleId(chart, axis) {
  const scales = chart.scales;
  return Object.keys(scales).filter(key => scales[key].axis === axis).shift();
}
function createDatasetContext(parent, index) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j)(parent, {
    active: false,
    dataset: undefined,
    datasetIndex: index,
    index,
    mode: 'default',
    type: 'dataset'
  });
}
function createDataContext(parent, index, element) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j)(parent, {
    active: false,
    dataIndex: index,
    parsed: undefined,
    raw: undefined,
    element,
    index,
    mode: 'default',
    type: 'data'
  });
}
function clearStacks(meta, items) {
  const datasetIndex = meta.controller.index;
  const axis = meta.vScale && meta.vScale.axis;
  if (!axis) {
    return;
  }
  items = items || meta._parsed;
  for (const parsed of items) {
    const stacks = parsed._stacks;
    if (!stacks || stacks[axis] === undefined || stacks[axis][datasetIndex] === undefined) {
      return;
    }
    delete stacks[axis][datasetIndex];
    if (stacks[axis]._visualValues !== undefined && stacks[axis]._visualValues[datasetIndex] !== undefined) {
      delete stacks[axis]._visualValues[datasetIndex];
    }
  }
}
const isDirectUpdateMode = mode => mode === 'reset' || mode === 'none';
const cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);
const createStack = (canStack, meta, chart) => canStack && !meta.hidden && meta._stacked && {
  keys: getSortedDatasetIndices(chart, true),
  values: null
};
class DatasetController {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(chart, datasetIndex) {
    this.chart = chart;
    this._ctx = chart.ctx;
    this.index = datasetIndex;
    this._cachedDataOpts = {};
    this._cachedMeta = this.getMeta();
    this._type = this._cachedMeta.type;
    this.options = undefined;
    this._parsing = false;
    this._data = undefined;
    this._objectData = undefined;
    this._sharedOptions = undefined;
    this._drawStart = undefined;
    this._drawCount = undefined;
    this.enableOptionSharing = false;
    this.supportsDecimation = false;
    this.$context = undefined;
    this._syncList = [];
    this.datasetElementType = new.target.datasetElementType;
    this.dataElementType = new.target.dataElementType;
    this.initialize();
  }
  initialize() {
    const meta = this._cachedMeta;
    this.configure();
    this.linkScales();
    meta._stacked = isStacked(meta.vScale, meta);
    this.addElements();
    if (this.options.fill && !this.chart.isPluginEnabled('filler')) {
      console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
    }
  }
  updateIndex(datasetIndex) {
    if (this.index !== datasetIndex) {
      clearStacks(this._cachedMeta);
    }
    this.index = datasetIndex;
  }
  linkScales() {
    const chart = this.chart;
    const meta = this._cachedMeta;
    const dataset = this.getDataset();
    const chooseId = (axis, x, y, r) => axis === 'x' ? x : axis === 'r' ? r : y;
    const xid = meta.xAxisID = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(dataset.xAxisID, getFirstScaleId(chart, 'x'));
    const yid = meta.yAxisID = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(dataset.yAxisID, getFirstScaleId(chart, 'y'));
    const rid = meta.rAxisID = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(dataset.rAxisID, getFirstScaleId(chart, 'r'));
    const indexAxis = meta.indexAxis;
    const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
    const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
    meta.xScale = this.getScaleForId(xid);
    meta.yScale = this.getScaleForId(yid);
    meta.rScale = this.getScaleForId(rid);
    meta.iScale = this.getScaleForId(iid);
    meta.vScale = this.getScaleForId(vid);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(scaleID) {
    return this.chart.scales[scaleID];
  }
  _getOtherScale(scale) {
    const meta = this._cachedMeta;
    return scale === meta.iScale ? meta.vScale : meta.iScale;
  }
  reset() {
    this._update('reset');
  }
  _destroy() {
    const meta = this._cachedMeta;
    if (this._data) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.u)(this._data, this);
    }
    if (meta._stacked) {
      clearStacks(meta);
    }
  }
  _dataCheck() {
    const dataset = this.getDataset();
    const data = dataset.data || (dataset.data = []);
    const _data = this._data;
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(data)) {
      this._data = convertObjectDataToArray(data);
    } else if (_data !== data) {
      if (_data) {
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.u)(_data, this);
        const meta = this._cachedMeta;
        clearStacks(meta);
        meta._parsed = [];
      }
      if (data && Object.isExtensible(data)) {
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.l)(data, this);
      }
      this._syncList = [];
      this._data = data;
    }
  }
  addElements() {
    const meta = this._cachedMeta;
    this._dataCheck();
    if (this.datasetElementType) {
      meta.dataset = new this.datasetElementType();
    }
  }
  buildOrUpdateElements(resetNewElements) {
    const meta = this._cachedMeta;
    const dataset = this.getDataset();
    let stackChanged = false;
    this._dataCheck();
    const oldStacked = meta._stacked;
    meta._stacked = isStacked(meta.vScale, meta);
    if (meta.stack !== dataset.stack) {
      stackChanged = true;
      clearStacks(meta);
      meta.stack = dataset.stack;
    }
    this._resyncElements(resetNewElements);
    if (stackChanged || oldStacked !== meta._stacked) {
      updateStacks(this, meta._parsed);
    }
  }
  configure() {
    const config = this.chart.config;
    const scopeKeys = config.datasetScopeKeys(this._type);
    const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
    this.options = config.createResolver(scopes, this.getContext());
    this._parsing = this.options.parsing;
    this._cachedDataOpts = {};
  }
  parse(start, count) {
    const {
      _cachedMeta: meta,
      _data: data
    } = this;
    const {
      iScale,
      _stacked
    } = meta;
    const iAxis = iScale.axis;
    let sorted = start === 0 && count === data.length ? true : meta._sorted;
    let prev = start > 0 && meta._parsed[start - 1];
    let i, cur, parsed;
    if (this._parsing === false) {
      meta._parsed = data;
      meta._sorted = true;
      parsed = data;
    } else {
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(data[start])) {
        parsed = this.parseArrayData(meta, data, start, count);
      } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(data[start])) {
        parsed = this.parseObjectData(meta, data, start, count);
      } else {
        parsed = this.parsePrimitiveData(meta, data, start, count);
      }
      const isNotInOrderComparedToPrev = () => cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
      for (i = 0; i < count; ++i) {
        meta._parsed[i + start] = cur = parsed[i];
        if (sorted) {
          if (isNotInOrderComparedToPrev()) {
            sorted = false;
          }
          prev = cur;
        }
      }
      meta._sorted = sorted;
    }
    if (_stacked) {
      updateStacks(this, parsed);
    }
  }
  parsePrimitiveData(meta, data, start, count) {
    const {
      iScale,
      vScale
    } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = new Array(count);
    let i, ilen, index;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      parsed[i] = {
        [iAxis]: singleScale || iScale.parse(labels[index], index),
        [vAxis]: vScale.parse(data[index], index)
      };
    }
    return parsed;
  }
  parseArrayData(meta, data, start, count) {
    const {
      xScale,
      yScale
    } = meta;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse(item[0], index),
        y: yScale.parse(item[1], index)
      };
    }
    return parsed;
  }
  parseObjectData(meta, data, start, count) {
    const {
      xScale,
      yScale
    } = meta;
    const {
      xAxisKey = 'x',
      yAxisKey = 'y'
    } = this._parsing;
    const parsed = new Array(count);
    let i, ilen, index, item;
    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i + start;
      item = data[index];
      parsed[i] = {
        x: xScale.parse((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f)(item, xAxisKey), index),
        y: yScale.parse((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f)(item, yAxisKey), index)
      };
    }
    return parsed;
  }
  getParsed(index) {
    return this._cachedMeta._parsed[index];
  }
  getDataElement(index) {
    return this._cachedMeta.data[index];
  }
  applyStack(scale, parsed, mode) {
    const chart = this.chart;
    const meta = this._cachedMeta;
    const value = parsed[scale.axis];
    const stack = {
      keys: getSortedDatasetIndices(chart, true),
      values: parsed._stacks[scale.axis]._visualValues
    };
    return applyStack(stack, value, meta.index, {
      mode
    });
  }
  updateRangeFromParsed(range, scale, parsed, stack) {
    const parsedValue = parsed[scale.axis];
    let value = parsedValue === null ? NaN : parsedValue;
    const values = stack && parsed._stacks[scale.axis];
    if (stack && values) {
      stack.values = values;
      value = applyStack(stack, parsedValue, this._cachedMeta.index);
    }
    range.min = Math.min(range.min, value);
    range.max = Math.max(range.max, value);
  }
  getMinMax(scale, canStack) {
    const meta = this._cachedMeta;
    const _parsed = meta._parsed;
    const sorted = meta._sorted && scale === meta.iScale;
    const ilen = _parsed.length;
    const otherScale = this._getOtherScale(scale);
    const stack = createStack(canStack, meta, this.chart);
    const range = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    const {
      min: otherMin,
      max: otherMax
    } = getUserBounds(otherScale);
    let i, parsed;
    function _skip() {
      parsed = _parsed[i];
      const otherValue = parsed[otherScale.axis];
      return !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
    }
    for (i = 0; i < ilen; ++i) {
      if (_skip()) {
        continue;
      }
      this.updateRangeFromParsed(range, scale, parsed, stack);
      if (sorted) {
        break;
      }
    }
    if (sorted) {
      for (i = ilen - 1; i >= 0; --i) {
        if (_skip()) {
          continue;
        }
        this.updateRangeFromParsed(range, scale, parsed, stack);
        break;
      }
    }
    return range;
  }
  getAllParsedValues(scale) {
    const parsed = this._cachedMeta._parsed;
    const values = [];
    let i, ilen, value;
    for (i = 0, ilen = parsed.length; i < ilen; ++i) {
      value = parsed[i][scale.axis];
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(value)) {
        values.push(value);
      }
    }
    return values;
  }
  getMaxOverflow() {
    return false;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const parsed = this.getParsed(index);
    return {
      label: iScale ? '' + iScale.getLabelForValue(parsed[iScale.axis]) : '',
      value: vScale ? '' + vScale.getLabelForValue(parsed[vScale.axis]) : ''
    };
  }
  _update(mode) {
    const meta = this._cachedMeta;
    this.update(mode || 'default');
    meta._clip = toClip((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
  }
  update(mode) {}
  draw() {
    const ctx = this._ctx;
    const chart = this.chart;
    const meta = this._cachedMeta;
    const elements = meta.data || [];
    const area = chart.chartArea;
    const active = [];
    const start = this._drawStart || 0;
    const count = this._drawCount || elements.length - start;
    const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
    let i;
    if (meta.dataset) {
      meta.dataset.draw(ctx, area, start, count);
    }
    for (i = start; i < start + count; ++i) {
      const element = elements[i];
      if (element.hidden) {
        continue;
      }
      if (element.active && drawActiveElementsOnTop) {
        active.push(element);
      } else {
        element.draw(ctx, area);
      }
    }
    for (i = 0; i < active.length; ++i) {
      active[i].draw(ctx, area);
    }
  }
  getStyle(index, active) {
    const mode = active ? 'active' : 'default';
    return index === undefined && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index || 0, mode);
  }
  getContext(index, active, mode) {
    const dataset = this.getDataset();
    let context;
    if (index >= 0 && index < this._cachedMeta.data.length) {
      const element = this._cachedMeta.data[index];
      context = element.$context || (element.$context = createDataContext(this.getContext(), index, element));
      context.parsed = this.getParsed(index);
      context.raw = dataset.data[index];
      context.index = context.dataIndex = index;
    } else {
      context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
      context.dataset = dataset;
      context.index = context.datasetIndex = this.index;
    }
    context.active = !!active;
    context.mode = mode;
    return context;
  }
  resolveDatasetElementOptions(mode) {
    return this._resolveElementOptions(this.datasetElementType.id, mode);
  }
  resolveDataElementOptions(index, mode) {
    return this._resolveElementOptions(this.dataElementType.id, mode, index);
  }
  _resolveElementOptions(elementType, mode = 'default', index) {
    const active = mode === 'active';
    const cache = this._cachedDataOpts;
    const cacheKey = elementType + '-' + mode;
    const cached = cache[cacheKey];
    const sharing = this.enableOptionSharing && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h)(index);
    if (cached) {
      return cloneIfNotShared(cached, sharing);
    }
    const config = this.chart.config;
    const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
    const prefixes = active ? [`${elementType}Hover`, 'hover', elementType, ''] : [elementType, ''];
    const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
    const names = Object.keys(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.elements[elementType]);
    const context = () => this.getContext(index, active, mode);
    const values = config.resolveNamedOptions(scopes, names, context, prefixes);
    if (values.$shared) {
      values.$shared = sharing;
      cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
    }
    return values;
  }
  _resolveAnimations(index, transition, active) {
    const chart = this.chart;
    const cache = this._cachedDataOpts;
    const cacheKey = `animation-${transition}`;
    const cached = cache[cacheKey];
    if (cached) {
      return cached;
    }
    let options;
    if (chart.options.animation !== false) {
      const config = this.chart.config;
      const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
      options = config.createResolver(scopes, this.getContext(index, active, transition));
    }
    const animations = new Animations(chart, options && options.animations);
    if (options && options._cacheable) {
      cache[cacheKey] = Object.freeze(animations);
    }
    return animations;
  }
  getSharedOptions(options) {
    if (!options.$shared) {
      return;
    }
    return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
  }
  includeOptions(mode, sharedOptions) {
    return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
  }
  _getSharedOptions(start, mode) {
    const firstOpts = this.resolveDataElementOptions(start, mode);
    const previouslySharedOptions = this._sharedOptions;
    const sharedOptions = this.getSharedOptions(firstOpts);
    const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
    return {
      sharedOptions,
      includeOptions
    };
  }
  updateElement(element, index, properties, mode) {
    if (isDirectUpdateMode(mode)) {
      Object.assign(element, properties);
    } else {
      this._resolveAnimations(index, mode).update(element, properties);
    }
  }
  updateSharedOptions(sharedOptions, mode, newOptions) {
    if (sharedOptions && !isDirectUpdateMode(mode)) {
      this._resolveAnimations(undefined, mode).update(sharedOptions, newOptions);
    }
  }
  _setStyle(element, index, mode, active) {
    element.active = active;
    const options = this.getStyle(index, active);
    this._resolveAnimations(index, mode, active).update(element, {
      options: !active && this.getSharedOptions(options) || options
    });
  }
  removeHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', false);
  }
  setHoverStyle(element, datasetIndex, index) {
    this._setStyle(element, index, 'active', true);
  }
  _removeDatasetHoverStyle() {
    const element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', false);
    }
  }
  _setDatasetHoverStyle() {
    const element = this._cachedMeta.dataset;
    if (element) {
      this._setStyle(element, undefined, 'active', true);
    }
  }
  _resyncElements(resetNewElements) {
    const data = this._data;
    const elements = this._cachedMeta.data;
    for (const [method, arg1, arg2] of this._syncList) {
      this[method](arg1, arg2);
    }
    this._syncList = [];
    const numMeta = elements.length;
    const numData = data.length;
    const count = Math.min(numData, numMeta);
    if (count) {
      this.parse(0, count);
    }
    if (numData > numMeta) {
      this._insertElements(numMeta, numData - numMeta, resetNewElements);
    } else if (numData < numMeta) {
      this._removeElements(numData, numMeta - numData);
    }
  }
  _insertElements(start, count, resetNewElements = true) {
    const meta = this._cachedMeta;
    const data = meta.data;
    const end = start + count;
    let i;
    const move = arr => {
      arr.length += count;
      for (i = arr.length - 1; i >= end; i--) {
        arr[i] = arr[i - count];
      }
    };
    move(data);
    for (i = start; i < end; ++i) {
      data[i] = new this.dataElementType();
    }
    if (this._parsing) {
      move(meta._parsed);
    }
    this.parse(start, count);
    if (resetNewElements) {
      this.updateElements(data, start, count, 'reset');
    }
  }
  updateElements(element, start, count, mode) {}
  _removeElements(start, count) {
    const meta = this._cachedMeta;
    if (this._parsing) {
      const removed = meta._parsed.splice(start, count);
      if (meta._stacked) {
        clearStacks(meta, removed);
      }
    }
    meta.data.splice(start, count);
  }
  _sync(args) {
    if (this._parsing) {
      this._syncList.push(args);
    } else {
      const [method, arg1, arg2] = args;
      this[method](arg1, arg2);
    }
    this.chart._dataChanges.push([this.index, ...args]);
  }
  _onDataPush() {
    const count = arguments.length;
    this._sync(['_insertElements', this.getDataset().data.length - count, count]);
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1]);
  }
  _onDataSplice(start, count) {
    if (count) {
      this._sync(['_removeElements', start, count]);
    }
    const newCount = arguments.length - 2;
    if (newCount) {
      this._sync(['_insertElements', start, newCount]);
    }
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length]);
  }
}
function getAllScaleValues(scale, type) {
  if (!scale._cache.$bar) {
    const visibleMetas = scale.getMatchingVisibleMetas(type);
    let values = [];
    for (let i = 0, ilen = visibleMetas.length; i < ilen; i++) {
      values = values.concat(visibleMetas[i].controller.getAllParsedValues(scale));
    }
    scale._cache.$bar = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__._)(values.sort((a, b) => a - b));
  }
  return scale._cache.$bar;
}
function computeMinSampleSize(meta) {
  const scale = meta.iScale;
  const values = getAllScaleValues(scale, meta.type);
  let min = scale._length;
  let i, ilen, curr, prev;
  const updateMinAndPrev = () => {
    if (curr === 32767 || curr === -32768) {
      return;
    }
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h)(prev)) {
      min = Math.min(min, Math.abs(curr - prev) || min);
    }
    prev = curr;
  };
  for (i = 0, ilen = values.length; i < ilen; ++i) {
    curr = scale.getPixelForValue(values[i]);
    updateMinAndPrev();
  }
  prev = undefined;
  for (i = 0, ilen = scale.ticks.length; i < ilen; ++i) {
    curr = scale.getPixelForTick(i);
    updateMinAndPrev();
  }
  return min;
}
function computeFitCategoryTraits(index, ruler, options, stackCount) {
  const thickness = options.barThickness;
  let size, ratio;
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(thickness)) {
    size = ruler.min * options.categoryPercentage;
    ratio = options.barPercentage;
  } else {
    size = thickness * stackCount;
    ratio = 1;
  }
  return {
    chunk: size / stackCount,
    ratio,
    start: ruler.pixels[index] - size / 2
  };
}
function computeFlexCategoryTraits(index, ruler, options, stackCount) {
  const pixels = ruler.pixels;
  const curr = pixels[index];
  let prev = index > 0 ? pixels[index - 1] : null;
  let next = index < pixels.length - 1 ? pixels[index + 1] : null;
  const percent = options.categoryPercentage;
  if (prev === null) {
    prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
  }
  if (next === null) {
    next = curr + curr - prev;
  }
  const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
  const size = Math.abs(next - prev) / 2 * percent;
  return {
    chunk: size / stackCount,
    ratio: options.barPercentage,
    start
  };
}
function parseFloatBar(entry, item, vScale, i) {
  const startValue = vScale.parse(entry[0], i);
  const endValue = vScale.parse(entry[1], i);
  const min = Math.min(startValue, endValue);
  const max = Math.max(startValue, endValue);
  let barStart = min;
  let barEnd = max;
  if (Math.abs(min) > Math.abs(max)) {
    barStart = max;
    barEnd = min;
  }
  item[vScale.axis] = barEnd;
  item._custom = {
    barStart,
    barEnd,
    start: startValue,
    end: endValue,
    min,
    max
  };
}
function parseValue(entry, item, vScale, i) {
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(entry)) {
    parseFloatBar(entry, item, vScale, i);
  } else {
    item[vScale.axis] = vScale.parse(entry, i);
  }
  return item;
}
function parseArrayOrPrimitive(meta, data, start, count) {
  const iScale = meta.iScale;
  const vScale = meta.vScale;
  const labels = iScale.getLabels();
  const singleScale = iScale === vScale;
  const parsed = [];
  let i, ilen, item, entry;
  for (i = start, ilen = start + count; i < ilen; ++i) {
    entry = data[i];
    item = {};
    item[iScale.axis] = singleScale || iScale.parse(labels[i], i);
    parsed.push(parseValue(entry, item, vScale, i));
  }
  return parsed;
}
function isFloatBar(custom) {
  return custom && custom.barStart !== undefined && custom.barEnd !== undefined;
}
function barSign(size, vScale, actualBase) {
  if (size !== 0) {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(size);
  }
  return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
}
function borderProps(properties) {
  let reverse, start, end, top, bottom;
  if (properties.horizontal) {
    reverse = properties.base > properties.x;
    start = 'left';
    end = 'right';
  } else {
    reverse = properties.base < properties.y;
    start = 'bottom';
    end = 'top';
  }
  if (reverse) {
    top = 'end';
    bottom = 'start';
  } else {
    top = 'start';
    bottom = 'end';
  }
  return {
    start,
    end,
    reverse,
    top,
    bottom
  };
}
function setBorderSkipped(properties, options, stack, index) {
  let edge = options.borderSkipped;
  const res = {};
  if (!edge) {
    properties.borderSkipped = res;
    return;
  }
  if (edge === true) {
    properties.borderSkipped = {
      top: true,
      right: true,
      bottom: true,
      left: true
    };
    return;
  }
  const {
    start,
    end,
    reverse,
    top,
    bottom
  } = borderProps(properties);
  if (edge === 'middle' && stack) {
    properties.enableBorderRadius = true;
    if ((stack._top || 0) === index) {
      edge = top;
    } else if ((stack._bottom || 0) === index) {
      edge = bottom;
    } else {
      res[parseEdge(bottom, start, end, reverse)] = true;
      edge = top;
    }
  }
  res[parseEdge(edge, start, end, reverse)] = true;
  properties.borderSkipped = res;
}
function parseEdge(edge, a, b, reverse) {
  if (reverse) {
    edge = swap(edge, a, b);
    edge = startEnd(edge, b, a);
  } else {
    edge = startEnd(edge, a, b);
  }
  return edge;
}
function swap(orig, v1, v2) {
  return orig === v1 ? v2 : orig === v2 ? v1 : orig;
}
function startEnd(v, start, end) {
  return v === 'start' ? start : v === 'end' ? end : v;
}
function setInflateAmount(properties, {
  inflateAmount
}, ratio) {
  properties.inflateAmount = inflateAmount === 'auto' ? ratio === 1 ? 0.33 : 0 : inflateAmount;
}
class BarController extends DatasetController {
  static id = 'bar';
  static defaults = {
    datasetElementType: false,
    dataElementType: 'bar',
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: true,
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'base', 'width', 'height']
      }
    }
  };
  static overrides = {
    scales: {
      _index_: {
        type: 'category',
        offset: true,
        grid: {
          offset: true
        }
      },
      _value_: {
        type: 'linear',
        beginAtZero: true
      }
    }
  };
  parsePrimitiveData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }
  parseArrayData(meta, data, start, count) {
    return parseArrayOrPrimitive(meta, data, start, count);
  }
  parseObjectData(meta, data, start, count) {
    const {
      iScale,
      vScale
    } = meta;
    const {
      xAxisKey = 'x',
      yAxisKey = 'y'
    } = this._parsing;
    const iAxisKey = iScale.axis === 'x' ? xAxisKey : yAxisKey;
    const vAxisKey = vScale.axis === 'x' ? xAxisKey : yAxisKey;
    const parsed = [];
    let i, ilen, item, obj;
    for (i = start, ilen = start + count; i < ilen; ++i) {
      obj = data[i];
      item = {};
      item[iScale.axis] = iScale.parse((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f)(obj, iAxisKey), i);
      parsed.push(parseValue((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f)(obj, vAxisKey), item, vScale, i));
    }
    return parsed;
  }
  updateRangeFromParsed(range, scale, parsed, stack) {
    super.updateRangeFromParsed(range, scale, parsed, stack);
    const custom = parsed._custom;
    if (custom && scale === this._cachedMeta.vScale) {
      range.min = Math.min(range.min, custom.min);
      range.max = Math.max(range.max, custom.max);
    }
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const {
      iScale,
      vScale
    } = meta;
    const parsed = this.getParsed(index);
    const custom = parsed._custom;
    const value = isFloatBar(custom) ? '[' + custom.start + ', ' + custom.end + ']' : '' + vScale.getLabelForValue(parsed[vScale.axis]);
    return {
      label: '' + iScale.getLabelForValue(parsed[iScale.axis]),
      value
    };
  }
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
    const meta = this._cachedMeta;
    meta.stack = this.getDataset().stack;
  }
  update(mode) {
    const meta = this._cachedMeta;
    this.updateElements(meta.data, 0, meta.data.length, mode);
  }
  updateElements(bars, start, count, mode) {
    const reset = mode === 'reset';
    const {
      index,
      _cachedMeta: {
        vScale
      }
    } = this;
    const base = vScale.getBasePixel();
    const horizontal = vScale.isHorizontal();
    const ruler = this._getRuler();
    const {
      sharedOptions,
      includeOptions
    } = this._getSharedOptions(start, mode);
    for (let i = start; i < start + count; i++) {
      const parsed = this.getParsed(i);
      const vpixels = reset || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(parsed[vScale.axis]) ? {
        base,
        head: base
      } : this._calculateBarValuePixels(i);
      const ipixels = this._calculateBarIndexPixels(i, ruler);
      const stack = (parsed._stacks || {})[vScale.axis];
      const properties = {
        horizontal,
        base: vpixels.base,
        enableBorderRadius: !stack || isFloatBar(parsed._custom) || index === stack._top || index === stack._bottom,
        x: horizontal ? vpixels.head : ipixels.center,
        y: horizontal ? ipixels.center : vpixels.head,
        height: horizontal ? ipixels.size : Math.abs(vpixels.size),
        width: horizontal ? Math.abs(vpixels.size) : ipixels.size
      };
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, bars[i].active ? 'active' : mode);
      }
      const options = properties.options || bars[i].options;
      setBorderSkipped(properties, options, stack, index);
      setInflateAmount(properties, options, ruler.ratio);
      this.updateElement(bars[i], i, properties, mode);
    }
  }
  _getStacks(last, dataIndex) {
    const {
      iScale
    } = this._cachedMeta;
    const metasets = iScale.getMatchingVisibleMetas(this._type).filter(meta => meta.controller.options.grouped);
    const stacked = iScale.options.stacked;
    const stacks = [];
    const skipNull = meta => {
      const parsed = meta.controller.getParsed(dataIndex);
      const val = parsed && parsed[meta.vScale.axis];
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(val) || isNaN(val)) {
        return true;
      }
    };
    for (const meta of metasets) {
      if (dataIndex !== undefined && skipNull(meta)) {
        continue;
      }
      if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === undefined && meta.stack === undefined) {
        stacks.push(meta.stack);
      }
      if (meta.index === last) {
        break;
      }
    }
    if (!stacks.length) {
      stacks.push(undefined);
    }
    return stacks;
  }
  _getStackCount(index) {
    return this._getStacks(undefined, index).length;
  }
  _getStackIndex(datasetIndex, name, dataIndex) {
    const stacks = this._getStacks(datasetIndex, dataIndex);
    const index = name !== undefined ? stacks.indexOf(name) : -1;
    return index === -1 ? stacks.length - 1 : index;
  }
  _getRuler() {
    const opts = this.options;
    const meta = this._cachedMeta;
    const iScale = meta.iScale;
    const pixels = [];
    let i, ilen;
    for (i = 0, ilen = meta.data.length; i < ilen; ++i) {
      pixels.push(iScale.getPixelForValue(this.getParsed(i)[iScale.axis], i));
    }
    const barThickness = opts.barThickness;
    const min = barThickness || computeMinSampleSize(meta);
    return {
      min,
      pixels,
      start: iScale._startPixel,
      end: iScale._endPixel,
      stackCount: this._getStackCount(),
      scale: iScale,
      grouped: opts.grouped,
      ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
    };
  }
  _calculateBarValuePixels(index) {
    const {
      _cachedMeta: {
        vScale,
        _stacked,
        index: datasetIndex
      },
      options: {
        base: baseValue,
        minBarLength
      }
    } = this;
    const actualBase = baseValue || 0;
    const parsed = this.getParsed(index);
    const custom = parsed._custom;
    const floating = isFloatBar(custom);
    let value = parsed[vScale.axis];
    let start = 0;
    let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
    let head, size;
    if (length !== value) {
      start = length - value;
      length = value;
    }
    if (floating) {
      value = custom.barStart;
      length = custom.barEnd - custom.barStart;
      if (value !== 0 && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(value) !== (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(custom.barEnd)) {
        start = 0;
      }
      start += value;
    }
    const startValue = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(baseValue) && !floating ? baseValue : start;
    let base = vScale.getPixelForValue(startValue);
    if (this.chart.getDataVisibility(index)) {
      head = vScale.getPixelForValue(start + length);
    } else {
      head = base;
    }
    size = head - base;
    if (Math.abs(size) < minBarLength) {
      size = barSign(size, vScale, actualBase) * minBarLength;
      if (value === actualBase) {
        base -= size / 2;
      }
      const startPixel = vScale.getPixelForDecimal(0);
      const endPixel = vScale.getPixelForDecimal(1);
      const min = Math.min(startPixel, endPixel);
      const max = Math.max(startPixel, endPixel);
      base = Math.max(Math.min(base, max), min);
      head = base + size;
      if (_stacked && !floating) {
        parsed._stacks[vScale.axis]._visualValues[datasetIndex] = vScale.getValueForPixel(head) - vScale.getValueForPixel(base);
      }
    }
    if (base === vScale.getPixelForValue(actualBase)) {
      const halfGrid = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(size) * vScale.getLineWidthForValue(actualBase) / 2;
      base += halfGrid;
      size -= halfGrid;
    }
    return {
      size,
      base,
      head,
      center: head + size / 2
    };
  }
  _calculateBarIndexPixels(index, ruler) {
    const scale = ruler.scale;
    const options = this.options;
    const skipNull = options.skipNull;
    const maxBarThickness = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(options.maxBarThickness, Infinity);
    let center, size;
    if (ruler.grouped) {
      const stackCount = skipNull ? this._getStackCount(index) : ruler.stackCount;
      const range = options.barThickness === 'flex' ? computeFlexCategoryTraits(index, ruler, options, stackCount) : computeFitCategoryTraits(index, ruler, options, stackCount);
      const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index : undefined);
      center = range.start + range.chunk * stackIndex + range.chunk / 2;
      size = Math.min(maxBarThickness, range.chunk * range.ratio);
    } else {
      center = scale.getPixelForValue(this.getParsed(index)[scale.axis], index);
      size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
    }
    return {
      base: center - size / 2,
      head: center + size / 2,
      center,
      size
    };
  }
  draw() {
    const meta = this._cachedMeta;
    const vScale = meta.vScale;
    const rects = meta.data;
    const ilen = rects.length;
    let i = 0;
    for (; i < ilen; ++i) {
      if (this.getParsed(i)[vScale.axis] !== null) {
        rects[i].draw(this._ctx);
      }
    }
  }
}
class BubbleController extends DatasetController {
  static id = 'bubble';
  static defaults = {
    datasetElementType: false,
    dataElementType: 'point',
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'borderWidth', 'radius']
      }
    }
  };
  static overrides = {
    scales: {
      x: {
        type: 'linear'
      },
      y: {
        type: 'linear'
      }
    }
  };
  initialize() {
    this.enableOptionSharing = true;
    super.initialize();
  }
  parsePrimitiveData(meta, data, start, count) {
    const parsed = super.parsePrimitiveData(meta, data, start, count);
    for (let i = 0; i < parsed.length; i++) {
      parsed[i]._custom = this.resolveDataElementOptions(i + start).radius;
    }
    return parsed;
  }
  parseArrayData(meta, data, start, count) {
    const parsed = super.parseArrayData(meta, data, start, count);
    for (let i = 0; i < parsed.length; i++) {
      const item = data[start + i];
      parsed[i]._custom = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(item[2], this.resolveDataElementOptions(i + start).radius);
    }
    return parsed;
  }
  parseObjectData(meta, data, start, count) {
    const parsed = super.parseObjectData(meta, data, start, count);
    for (let i = 0; i < parsed.length; i++) {
      const item = data[start + i];
      parsed[i]._custom = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(item && item.r && +item.r, this.resolveDataElementOptions(i + start).radius);
    }
    return parsed;
  }
  getMaxOverflow() {
    const data = this._cachedMeta.data;
    let max = 0;
    for (let i = data.length - 1; i >= 0; --i) {
      max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
    }
    return max > 0 && max;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const labels = this.chart.data.labels || [];
    const {
      xScale,
      yScale
    } = meta;
    const parsed = this.getParsed(index);
    const x = xScale.getLabelForValue(parsed.x);
    const y = yScale.getLabelForValue(parsed.y);
    const r = parsed._custom;
    return {
      label: labels[index] || '',
      value: '(' + x + ', ' + y + (r ? ', ' + r : '') + ')'
    };
  }
  update(mode) {
    const points = this._cachedMeta.data;
    this.updateElements(points, 0, points.length, mode);
  }
  updateElements(points, start, count, mode) {
    const reset = mode === 'reset';
    const {
      iScale,
      vScale
    } = this._cachedMeta;
    const {
      sharedOptions,
      includeOptions
    } = this._getSharedOptions(start, mode);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    for (let i = start; i < start + count; i++) {
      const point = points[i];
      const parsed = !reset && this.getParsed(i);
      const properties = {};
      const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
      const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
      properties.skip = isNaN(iPixel) || isNaN(vPixel);
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
        if (reset) {
          properties.options.radius = 0;
        }
      }
      this.updateElement(point, i, properties, mode);
    }
  }
  resolveDataElementOptions(index, mode) {
    const parsed = this.getParsed(index);
    let values = super.resolveDataElementOptions(index, mode);
    if (values.$shared) {
      values = Object.assign({}, values, {
        $shared: false
      });
    }
    const radius = values.radius;
    if (mode !== 'active') {
      values.radius = 0;
    }
    values.radius += (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(parsed && parsed._custom, radius);
    return values;
  }
}
function getRatioAndOffset(rotation, circumference, cutout) {
  let ratioX = 1;
  let ratioY = 1;
  let offsetX = 0;
  let offsetY = 0;
  if (circumference < _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T) {
    const startAngle = rotation;
    const endAngle = startAngle + circumference;
    const startX = Math.cos(startAngle);
    const startY = Math.sin(startAngle);
    const endX = Math.cos(endAngle);
    const endY = Math.sin(endAngle);
    const calcMax = (angle, a, b) => (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.p)(angle, startAngle, endAngle, true) ? 1 : Math.max(a, a * cutout, b, b * cutout);
    const calcMin = (angle, a, b) => (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.p)(angle, startAngle, endAngle, true) ? -1 : Math.min(a, a * cutout, b, b * cutout);
    const maxX = calcMax(0, startX, endX);
    const maxY = calcMax(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H, startY, endY);
    const minX = calcMin(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P, startX, endX);
    const minY = calcMin(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H, startY, endY);
    ratioX = (maxX - minX) / 2;
    ratioY = (maxY - minY) / 2;
    offsetX = -(maxX + minX) / 2;
    offsetY = -(maxY + minY) / 2;
  }
  return {
    ratioX,
    ratioY,
    offsetX,
    offsetY
  };
}
class DoughnutController extends DatasetController {
  static id = 'doughnut';
  static defaults = {
    datasetElementType: false,
    dataElementType: 'arc',
    animation: {
      animateRotate: true,
      animateScale: false
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['circumference', 'endAngle', 'innerRadius', 'outerRadius', 'startAngle', 'x', 'y', 'offset', 'borderWidth', 'spacing']
      }
    },
    cutout: '50%',
    rotation: 0,
    circumference: 360,
    radius: '100%',
    spacing: 0,
    indexAxis: 'r'
  };
  static descriptors = {
    _scriptable: name => name !== 'spacing',
    _indexable: name => name !== 'spacing' && !name.startsWith('borderDash') && !name.startsWith('hoverBorderDash')
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              const {
                labels: {
                  pointStyle,
                  color
                }
              } = chart.legend.options;
              return data.labels.map((label, i) => {
                const meta = chart.getDatasetMeta(0);
                const style = meta.controller.getStyle(i);
                return {
                  text: label,
                  fillStyle: style.backgroundColor,
                  strokeStyle: style.borderColor,
                  fontColor: color,
                  lineWidth: style.borderWidth,
                  pointStyle: pointStyle,
                  hidden: !chart.getDataVisibility(i),
                  index: i
                };
              });
            }
            return [];
          }
        },
        onClick(e, legendItem, legend) {
          legend.chart.toggleDataVisibility(legendItem.index);
          legend.chart.update();
        }
      }
    }
  };
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.enableOptionSharing = true;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.offsetX = undefined;
    this.offsetY = undefined;
  }
  linkScales() {}
  parse(start, count) {
    const data = this.getDataset().data;
    const meta = this._cachedMeta;
    if (this._parsing === false) {
      meta._parsed = data;
    } else {
      let getter = i => +data[i];
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(data[start])) {
        const {
          key = 'value'
        } = this._parsing;
        getter = i => +(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f)(data[i], key);
      }
      let i, ilen;
      for (i = start, ilen = start + count; i < ilen; ++i) {
        meta._parsed[i] = getter(i);
      }
    }
  }
  _getRotation() {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.options.rotation - 90);
  }
  _getCircumference() {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.options.circumference);
  }
  _getRotationExtents() {
    let min = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T;
    let max = -_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T;
    for (let i = 0; i < this.chart.data.datasets.length; ++i) {
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const controller = this.chart.getDatasetMeta(i).controller;
        const rotation = controller._getRotation();
        const circumference = controller._getCircumference();
        min = Math.min(min, rotation);
        max = Math.max(max, rotation + circumference);
      }
    }
    return {
      rotation: min,
      circumference: max - min
    };
  }
  update(mode) {
    const chart = this.chart;
    const {
      chartArea
    } = chart;
    const meta = this._cachedMeta;
    const arcs = meta.data;
    const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
    const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
    const cutout = Math.min((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.m)(this.options.cutout, maxSize), 1);
    const chartWeight = this._getRingWeight(this.index);
    const {
      circumference,
      rotation
    } = this._getRotationExtents();
    const {
      ratioX,
      ratioY,
      offsetX,
      offsetY
    } = getRatioAndOffset(rotation, circumference, cutout);
    const maxWidth = (chartArea.width - spacing) / ratioX;
    const maxHeight = (chartArea.height - spacing) / ratioY;
    const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
    const outerRadius = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.n)(this.options.radius, maxRadius);
    const innerRadius = Math.max(outerRadius * cutout, 0);
    const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
    this.offsetX = offsetX * outerRadius;
    this.offsetY = offsetY * outerRadius;
    meta.total = this.calculateTotal();
    this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
    this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
    this.updateElements(arcs, 0, arcs.length, mode);
  }
  _circumference(i, reset) {
    const opts = this.options;
    const meta = this._cachedMeta;
    const circumference = this._getCircumference();
    if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i) || meta._parsed[i] === null || meta.data[i].hidden) {
      return 0;
    }
    return this.calculateCircumference(meta._parsed[i] * circumference / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T);
  }
  updateElements(arcs, start, count, mode) {
    const reset = mode === 'reset';
    const chart = this.chart;
    const chartArea = chart.chartArea;
    const opts = chart.options;
    const animationOpts = opts.animation;
    const centerX = (chartArea.left + chartArea.right) / 2;
    const centerY = (chartArea.top + chartArea.bottom) / 2;
    const animateScale = reset && animationOpts.animateScale;
    const innerRadius = animateScale ? 0 : this.innerRadius;
    const outerRadius = animateScale ? 0 : this.outerRadius;
    const {
      sharedOptions,
      includeOptions
    } = this._getSharedOptions(start, mode);
    let startAngle = this._getRotation();
    let i;
    for (i = 0; i < start; ++i) {
      startAngle += this._circumference(i, reset);
    }
    for (i = start; i < start + count; ++i) {
      const circumference = this._circumference(i, reset);
      const arc = arcs[i];
      const properties = {
        x: centerX + this.offsetX,
        y: centerY + this.offsetY,
        startAngle,
        endAngle: startAngle + circumference,
        circumference,
        outerRadius,
        innerRadius
      };
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, arc.active ? 'active' : mode);
      }
      startAngle += circumference;
      this.updateElement(arc, i, properties, mode);
    }
  }
  calculateTotal() {
    const meta = this._cachedMeta;
    const metaData = meta.data;
    let total = 0;
    let i;
    for (i = 0; i < metaData.length; i++) {
      const value = meta._parsed[i];
      if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i) && !metaData[i].hidden) {
        total += Math.abs(value);
      }
    }
    return total;
  }
  calculateCircumference(value) {
    const total = this._cachedMeta.total;
    if (total > 0 && !isNaN(value)) {
      return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T * (Math.abs(value) / total);
    }
    return 0;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const chart = this.chart;
    const labels = chart.data.labels || [];
    const value = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.o)(meta._parsed[index], chart.options.locale);
    return {
      label: labels[index] || '',
      value
    };
  }
  getMaxBorderWidth(arcs) {
    let max = 0;
    const chart = this.chart;
    let i, ilen, meta, controller, options;
    if (!arcs) {
      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);
          arcs = meta.data;
          controller = meta.controller;
          break;
        }
      }
    }
    if (!arcs) {
      return 0;
    }
    for (i = 0, ilen = arcs.length; i < ilen; ++i) {
      options = controller.resolveDataElementOptions(i);
      if (options.borderAlign !== 'inner') {
        max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
      }
    }
    return max;
  }
  getMaxOffset(arcs) {
    let max = 0;
    for (let i = 0, ilen = arcs.length; i < ilen; ++i) {
      const options = this.resolveDataElementOptions(i);
      max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
    }
    return max;
  }
  _getRingWeightOffset(datasetIndex) {
    let ringWeightOffset = 0;
    for (let i = 0; i < datasetIndex; ++i) {
      if (this.chart.isDatasetVisible(i)) {
        ringWeightOffset += this._getRingWeight(i);
      }
    }
    return ringWeightOffset;
  }
  _getRingWeight(datasetIndex) {
    return Math.max((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(this.chart.data.datasets[datasetIndex].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class LineController extends DatasetController {
  static id = 'line';
  static defaults = {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: true,
    spanGaps: false
  };
  static overrides = {
    scales: {
      _index_: {
        type: 'category'
      },
      _value_: {
        type: 'linear'
      }
    }
  };
  initialize() {
    this.enableOptionSharing = true;
    this.supportsDecimation = true;
    super.initialize();
  }
  update(mode) {
    const meta = this._cachedMeta;
    const {
      dataset: line,
      data: points = [],
      _dataset
    } = meta;
    const animationsDisabled = this.chart._animationsDisabled;
    let {
      start,
      count
    } = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.q)(meta, points, animationsDisabled);
    this._drawStart = start;
    this._drawCount = count;
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(meta)) {
      start = 0;
      count = points.length;
    }
    line._chart = this.chart;
    line._datasetIndex = this.index;
    line._decimated = !!_dataset._decimated;
    line.points = points;
    const options = this.resolveDatasetElementOptions(mode);
    if (!this.options.showLine) {
      options.borderWidth = 0;
    }
    options.segment = this.options.segment;
    this.updateElement(line, undefined, {
      animated: !animationsDisabled,
      options
    }, mode);
    this.updateElements(points, start, count, mode);
  }
  updateElements(points, start, count, mode) {
    const reset = mode === 'reset';
    const {
      iScale,
      vScale,
      _stacked,
      _dataset
    } = this._cachedMeta;
    const {
      sharedOptions,
      includeOptions
    } = this._getSharedOptions(start, mode);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const {
      spanGaps,
      segment
    } = this.options;
    const maxGapLength = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
    const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
    const end = start + count;
    const pointsCount = points.length;
    let prevParsed = start > 0 && this.getParsed(start - 1);
    for (let i = 0; i < pointsCount; ++i) {
      const point = points[i];
      const properties = directUpdate ? point : {};
      if (i < start || i >= end) {
        properties.skip = true;
        continue;
      }
      const parsed = this.getParsed(i);
      const nullData = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(parsed[vAxis]);
      const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
      const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
      properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
      properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
      if (segment) {
        properties.parsed = parsed;
        properties.raw = _dataset.data[i];
      }
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      }
      if (!directUpdate) {
        this.updateElement(point, i, properties, mode);
      }
      prevParsed = parsed;
    }
  }
  getMaxOverflow() {
    const meta = this._cachedMeta;
    const dataset = meta.dataset;
    const border = dataset.options && dataset.options.borderWidth || 0;
    const data = meta.data || [];
    if (!data.length) {
      return border;
    }
    const firstPoint = data[0].size(this.resolveDataElementOptions(0));
    const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
    return Math.max(border, firstPoint, lastPoint) / 2;
  }
  draw() {
    const meta = this._cachedMeta;
    meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
    super.draw();
  }
}
class PolarAreaController extends DatasetController {
  static id = 'polarArea';
  static defaults = {
    dataElementType: 'arc',
    animation: {
      animateRotate: true,
      animateScale: true
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius']
      }
    },
    indexAxis: 'r',
    startAngle: 0
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              const {
                labels: {
                  pointStyle,
                  color
                }
              } = chart.legend.options;
              return data.labels.map((label, i) => {
                const meta = chart.getDatasetMeta(0);
                const style = meta.controller.getStyle(i);
                return {
                  text: label,
                  fillStyle: style.backgroundColor,
                  strokeStyle: style.borderColor,
                  fontColor: color,
                  lineWidth: style.borderWidth,
                  pointStyle: pointStyle,
                  hidden: !chart.getDataVisibility(i),
                  index: i
                };
              });
            }
            return [];
          }
        },
        onClick(e, legendItem, legend) {
          legend.chart.toggleDataVisibility(legendItem.index);
          legend.chart.update();
        }
      }
    },
    scales: {
      r: {
        type: 'radialLinear',
        angleLines: {
          display: false
        },
        beginAtZero: true,
        grid: {
          circular: true
        },
        pointLabels: {
          display: false
        },
        startAngle: 0
      }
    }
  };
  constructor(chart, datasetIndex) {
    super(chart, datasetIndex);
    this.innerRadius = undefined;
    this.outerRadius = undefined;
  }
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const chart = this.chart;
    const labels = chart.data.labels || [];
    const value = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.o)(meta._parsed[index].r, chart.options.locale);
    return {
      label: labels[index] || '',
      value
    };
  }
  parseObjectData(meta, data, start, count) {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.y.bind(this)(meta, data, start, count);
  }
  update(mode) {
    const arcs = this._cachedMeta.data;
    this._updateRadius();
    this.updateElements(arcs, 0, arcs.length, mode);
  }
  getMinMax() {
    const meta = this._cachedMeta;
    const range = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    meta.data.forEach((element, index) => {
      const parsed = this.getParsed(index).r;
      if (!isNaN(parsed) && this.chart.getDataVisibility(index)) {
        if (parsed < range.min) {
          range.min = parsed;
        }
        if (parsed > range.max) {
          range.max = parsed;
        }
      }
    });
    return range;
  }
  _updateRadius() {
    const chart = this.chart;
    const chartArea = chart.chartArea;
    const opts = chart.options;
    const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    const outerRadius = Math.max(minSize / 2, 0);
    const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
    const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
    this.outerRadius = outerRadius - radiusLength * this.index;
    this.innerRadius = this.outerRadius - radiusLength;
  }
  updateElements(arcs, start, count, mode) {
    const reset = mode === 'reset';
    const chart = this.chart;
    const opts = chart.options;
    const animationOpts = opts.animation;
    const scale = this._cachedMeta.rScale;
    const centerX = scale.xCenter;
    const centerY = scale.yCenter;
    const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P;
    let angle = datasetStartAngle;
    let i;
    const defaultAngle = 360 / this.countVisibleElements();
    for (i = 0; i < start; ++i) {
      angle += this._computeAngle(i, mode, defaultAngle);
    }
    for (i = start; i < start + count; i++) {
      const arc = arcs[i];
      let startAngle = angle;
      let endAngle = angle + this._computeAngle(i, mode, defaultAngle);
      let outerRadius = chart.getDataVisibility(i) ? scale.getDistanceFromCenterForValue(this.getParsed(i).r) : 0;
      angle = endAngle;
      if (reset) {
        if (animationOpts.animateScale) {
          outerRadius = 0;
        }
        if (animationOpts.animateRotate) {
          startAngle = endAngle = datasetStartAngle;
        }
      }
      const properties = {
        x: centerX,
        y: centerY,
        innerRadius: 0,
        outerRadius,
        startAngle,
        endAngle,
        options: this.resolveDataElementOptions(i, arc.active ? 'active' : mode)
      };
      this.updateElement(arc, i, properties, mode);
    }
  }
  countVisibleElements() {
    const meta = this._cachedMeta;
    let count = 0;
    meta.data.forEach((element, index) => {
      if (!isNaN(this.getParsed(index).r) && this.chart.getDataVisibility(index)) {
        count++;
      }
    });
    return count;
  }
  _computeAngle(index, mode, defaultAngle) {
    return this.chart.getDataVisibility(index) ? (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.resolveDataElementOptions(index, mode).angle || defaultAngle) : 0;
  }
}
class PieController extends DoughnutController {
  static id = 'pie';
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: '100%'
  };
}
class RadarController extends DatasetController {
  static id = 'radar';
  static defaults = {
    datasetElementType: 'line',
    dataElementType: 'point',
    indexAxis: 'r',
    showLine: true,
    elements: {
      line: {
        fill: 'start'
      }
    }
  };
  static overrides = {
    aspectRatio: 1,
    scales: {
      r: {
        type: 'radialLinear'
      }
    }
  };
  getLabelAndValue(index) {
    const vScale = this._cachedMeta.vScale;
    const parsed = this.getParsed(index);
    return {
      label: vScale.getLabels()[index],
      value: '' + vScale.getLabelForValue(parsed[vScale.axis])
    };
  }
  parseObjectData(meta, data, start, count) {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.y.bind(this)(meta, data, start, count);
  }
  update(mode) {
    const meta = this._cachedMeta;
    const line = meta.dataset;
    const points = meta.data || [];
    const labels = meta.iScale.getLabels();
    line.points = points;
    if (mode !== 'resize') {
      const options = this.resolveDatasetElementOptions(mode);
      if (!this.options.showLine) {
        options.borderWidth = 0;
      }
      const properties = {
        _loop: true,
        _fullLoop: labels.length === points.length,
        options
      };
      this.updateElement(line, undefined, properties, mode);
    }
    this.updateElements(points, 0, points.length, mode);
  }
  updateElements(points, start, count, mode) {
    const scale = this._cachedMeta.rScale;
    const reset = mode === 'reset';
    for (let i = start; i < start + count; i++) {
      const point = points[i];
      const options = this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      const pointPosition = scale.getPointPositionForValue(i, this.getParsed(i).r);
      const x = reset ? scale.xCenter : pointPosition.x;
      const y = reset ? scale.yCenter : pointPosition.y;
      const properties = {
        x,
        y,
        angle: pointPosition.angle,
        skip: isNaN(x) || isNaN(y),
        options
      };
      this.updateElement(point, i, properties, mode);
    }
  }
}
class ScatterController extends DatasetController {
  static id = 'scatter';
  static defaults = {
    datasetElementType: false,
    dataElementType: 'point',
    showLine: false,
    fill: false
  };
  static overrides = {
    interaction: {
      mode: 'point'
    },
    scales: {
      x: {
        type: 'linear'
      },
      y: {
        type: 'linear'
      }
    }
  };
  getLabelAndValue(index) {
    const meta = this._cachedMeta;
    const labels = this.chart.data.labels || [];
    const {
      xScale,
      yScale
    } = meta;
    const parsed = this.getParsed(index);
    const x = xScale.getLabelForValue(parsed.x);
    const y = yScale.getLabelForValue(parsed.y);
    return {
      label: labels[index] || '',
      value: '(' + x + ', ' + y + ')'
    };
  }
  update(mode) {
    const meta = this._cachedMeta;
    const {
      data: points = []
    } = meta;
    const animationsDisabled = this.chart._animationsDisabled;
    let {
      start,
      count
    } = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.q)(meta, points, animationsDisabled);
    this._drawStart = start;
    this._drawCount = count;
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.w)(meta)) {
      start = 0;
      count = points.length;
    }
    if (this.options.showLine) {
      if (!this.datasetElementType) {
        this.addElements();
      }
      const {
        dataset: line,
        _dataset
      } = meta;
      line._chart = this.chart;
      line._datasetIndex = this.index;
      line._decimated = !!_dataset._decimated;
      line.points = points;
      const options = this.resolveDatasetElementOptions(mode);
      options.segment = this.options.segment;
      this.updateElement(line, undefined, {
        animated: !animationsDisabled,
        options
      }, mode);
    } else if (this.datasetElementType) {
      delete meta.dataset;
      this.datasetElementType = false;
    }
    this.updateElements(points, start, count, mode);
  }
  addElements() {
    const {
      showLine
    } = this.options;
    if (!this.datasetElementType && showLine) {
      this.datasetElementType = this.chart.registry.getElement('line');
    }
    super.addElements();
  }
  updateElements(points, start, count, mode) {
    const reset = mode === 'reset';
    const {
      iScale,
      vScale,
      _stacked,
      _dataset
    } = this._cachedMeta;
    const firstOpts = this.resolveDataElementOptions(start, mode);
    const sharedOptions = this.getSharedOptions(firstOpts);
    const includeOptions = this.includeOptions(mode, sharedOptions);
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const {
      spanGaps,
      segment
    } = this.options;
    const maxGapLength = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
    const directUpdate = this.chart._animationsDisabled || reset || mode === 'none';
    let prevParsed = start > 0 && this.getParsed(start - 1);
    for (let i = start; i < start + count; ++i) {
      const point = points[i];
      const parsed = this.getParsed(i);
      const properties = directUpdate ? point : {};
      const nullData = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(parsed[vAxis]);
      const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i);
      const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i);
      properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
      properties.stop = i > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
      if (segment) {
        properties.parsed = parsed;
        properties.raw = _dataset.data[i];
      }
      if (includeOptions) {
        properties.options = sharedOptions || this.resolveDataElementOptions(i, point.active ? 'active' : mode);
      }
      if (!directUpdate) {
        this.updateElement(point, i, properties, mode);
      }
      prevParsed = parsed;
    }
    this.updateSharedOptions(sharedOptions, mode, firstOpts);
  }
  getMaxOverflow() {
    const meta = this._cachedMeta;
    const data = meta.data || [];
    if (!this.options.showLine) {
      let max = 0;
      for (let i = data.length - 1; i >= 0; --i) {
        max = Math.max(max, data[i].size(this.resolveDataElementOptions(i)) / 2);
      }
      return max > 0 && max;
    }
    const dataset = meta.dataset;
    const border = dataset.options && dataset.options.borderWidth || 0;
    if (!data.length) {
      return border;
    }
    const firstPoint = data[0].size(this.resolveDataElementOptions(0));
    const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
    return Math.max(border, firstPoint, lastPoint) / 2;
  }
}
var controllers = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BarController: BarController,
  BubbleController: BubbleController,
  DoughnutController: DoughnutController,
  LineController: LineController,
  PieController: PieController,
  PolarAreaController: PolarAreaController,
  RadarController: RadarController,
  ScatterController: ScatterController
});

/**
 * @namespace Chart._adapters
 * @since 2.8.0
 * @private
 */
function abstract() {
  throw new Error('This method is not implemented: Check that a complete date adapter is provided.');
}
/**
 * Date adapter (current used by the time scale)
 * @namespace Chart._adapters._date
 * @memberof Chart._adapters
 * @private
 */
class DateAdapterBase {
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(members) {
    Object.assign(DateAdapterBase.prototype, members);
  }
  options;
  constructor(options) {
    this.options = options || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {}
  formats() {
    return abstract();
  }
  parse() {
    return abstract();
  }
  format() {
    return abstract();
  }
  add() {
    return abstract();
  }
  diff() {
    return abstract();
  }
  startOf() {
    return abstract();
  }
  endOf() {
    return abstract();
  }
}
var adapters = {
  _date: DateAdapterBase
};
function binarySearch(metaset, axis, value, intersect) {
  const {
    controller,
    data,
    _sorted
  } = metaset;
  const iScale = controller._cachedMeta.iScale;
  if (iScale && axis === iScale.axis && axis !== 'r' && _sorted && data.length) {
    const lookupMethod = iScale._reversePixels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.A : _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.B;
    if (!intersect) {
      return lookupMethod(data, axis, value);
    } else if (controller._sharedOptions) {
      const el = data[0];
      const range = typeof el.getRange === 'function' && el.getRange(axis);
      if (range) {
        const start = lookupMethod(data, axis, value - range);
        const end = lookupMethod(data, axis, value + range);
        return {
          lo: start.lo,
          hi: end.hi
        };
      }
    }
  }
  return {
    lo: 0,
    hi: data.length - 1
  };
}
function evaluateInteractionItems(chart, axis, position, handler, intersect) {
  const metasets = chart.getSortedVisibleDatasetMetas();
  const value = position[axis];
  for (let i = 0, ilen = metasets.length; i < ilen; ++i) {
    const {
      index,
      data
    } = metasets[i];
    const {
      lo,
      hi
    } = binarySearch(metasets[i], axis, value, intersect);
    for (let j = lo; j <= hi; ++j) {
      const element = data[j];
      if (!element.skip) {
        handler(element, index, j);
      }
    }
  }
}
function getDistanceMetricForAxis(axis) {
  const useX = axis.indexOf('x') !== -1;
  const useY = axis.indexOf('y') !== -1;
  return function (pt1, pt2) {
    const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
    const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
    return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
  };
}
function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
  const items = [];
  if (!includeInvisible && !chart.isPointInArea(position)) {
    return items;
  }
  const evaluationFunc = function (element, datasetIndex, index) {
    if (!includeInvisible && !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(element, chart.chartArea, 0)) {
      return;
    }
    if (element.inRange(position.x, position.y, useFinalPosition)) {
      items.push({
        element,
        datasetIndex,
        index
      });
    }
  };
  evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
  return items;
}
function getNearestRadialItems(chart, position, axis, useFinalPosition) {
  let items = [];
  function evaluationFunc(element, datasetIndex, index) {
    const {
      startAngle,
      endAngle
    } = element.getProps(['startAngle', 'endAngle'], useFinalPosition);
    const {
      angle
    } = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(element, {
      x: position.x,
      y: position.y
    });
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.p)(angle, startAngle, endAngle)) {
      items.push({
        element,
        datasetIndex,
        index
      });
    }
  }
  evaluateInteractionItems(chart, axis, position, evaluationFunc);
  return items;
}
function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
  let items = [];
  const distanceMetric = getDistanceMetricForAxis(axis);
  let minDistance = Number.POSITIVE_INFINITY;
  function evaluationFunc(element, datasetIndex, index) {
    const inRange = element.inRange(position.x, position.y, useFinalPosition);
    if (intersect && !inRange) {
      return;
    }
    const center = element.getCenterPoint(useFinalPosition);
    const pointInArea = !!includeInvisible || chart.isPointInArea(center);
    if (!pointInArea && !inRange) {
      return;
    }
    const distance = distanceMetric(position, center);
    if (distance < minDistance) {
      items = [{
        element,
        datasetIndex,
        index
      }];
      minDistance = distance;
    } else if (distance === minDistance) {
      items.push({
        element,
        datasetIndex,
        index
      });
    }
  }
  evaluateInteractionItems(chart, axis, position, evaluationFunc);
  return items;
}
function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
  if (!includeInvisible && !chart.isPointInArea(position)) {
    return [];
  }
  return axis === 'r' && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
}
function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
  const items = [];
  const rangeMethod = axis === 'x' ? 'inXRange' : 'inYRange';
  let intersectsItem = false;
  evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index) => {
    if (element[rangeMethod](position[axis], useFinalPosition)) {
      items.push({
        element,
        datasetIndex,
        index
      });
      intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
    }
  });
  if (intersect && !intersectsItem) {
    return [];
  }
  return items;
}
var Interaction = {
  evaluateInteractionItems,
  modes: {
    index(chart, e, options, useFinalPosition) {
      const position = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z)(e, chart);
      const axis = options.axis || 'x';
      const includeInvisible = options.includeInvisible || false;
      const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
      const elements = [];
      if (!items.length) {
        return [];
      }
      chart.getSortedVisibleDatasetMetas().forEach(meta => {
        const index = items[0].index;
        const element = meta.data[index];
        if (element && !element.skip) {
          elements.push({
            element,
            datasetIndex: meta.index,
            index
          });
        }
      });
      return elements;
    },
    dataset(chart, e, options, useFinalPosition) {
      const position = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z)(e, chart);
      const axis = options.axis || 'xy';
      const includeInvisible = options.includeInvisible || false;
      let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
      if (items.length > 0) {
        const datasetIndex = items[0].datasetIndex;
        const data = chart.getDatasetMeta(datasetIndex).data;
        items = [];
        for (let i = 0; i < data.length; ++i) {
          items.push({
            element: data[i],
            datasetIndex,
            index: i
          });
        }
      }
      return items;
    },
    point(chart, e, options, useFinalPosition) {
      const position = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z)(e, chart);
      const axis = options.axis || 'xy';
      const includeInvisible = options.includeInvisible || false;
      return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
    },
    nearest(chart, e, options, useFinalPosition) {
      const position = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z)(e, chart);
      const axis = options.axis || 'xy';
      const includeInvisible = options.includeInvisible || false;
      return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
    },
    x(chart, e, options, useFinalPosition) {
      const position = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z)(e, chart);
      return getAxisItems(chart, position, 'x', options.intersect, useFinalPosition);
    },
    y(chart, e, options, useFinalPosition) {
      const position = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z)(e, chart);
      return getAxisItems(chart, position, 'y', options.intersect, useFinalPosition);
    }
  }
};
const STATIC_POSITIONS = ['left', 'top', 'right', 'bottom'];
function filterByPosition(array, position) {
  return array.filter(v => v.pos === position);
}
function filterDynamicPositionByAxis(array, axis) {
  return array.filter(v => STATIC_POSITIONS.indexOf(v.pos) === -1 && v.box.axis === axis);
}
function sortByWeight(array, reverse) {
  return array.sort((a, b) => {
    const v0 = reverse ? b : a;
    const v1 = reverse ? a : b;
    return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
  });
}
function wrapBoxes(boxes) {
  const layoutBoxes = [];
  let i, ilen, box, pos, stack, stackWeight;
  for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
    box = boxes[i];
    ({
      position: pos,
      options: {
        stack,
        stackWeight = 1
      }
    } = box);
    layoutBoxes.push({
      index: i,
      box,
      pos,
      horizontal: box.isHorizontal(),
      weight: box.weight,
      stack: stack && pos + stack,
      stackWeight
    });
  }
  return layoutBoxes;
}
function buildStacks(layouts) {
  const stacks = {};
  for (const wrap of layouts) {
    const {
      stack,
      pos,
      stackWeight
    } = wrap;
    if (!stack || !STATIC_POSITIONS.includes(pos)) {
      continue;
    }
    const _stack = stacks[stack] || (stacks[stack] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    _stack.count++;
    _stack.weight += stackWeight;
  }
  return stacks;
}
function setLayoutDims(layouts, params) {
  const stacks = buildStacks(layouts);
  const {
    vBoxMaxWidth,
    hBoxMaxHeight
  } = params;
  let i, ilen, layout;
  for (i = 0, ilen = layouts.length; i < ilen; ++i) {
    layout = layouts[i];
    const {
      fullSize
    } = layout.box;
    const stack = stacks[layout.stack];
    const factor = stack && layout.stackWeight / stack.weight;
    if (layout.horizontal) {
      layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
      layout.height = hBoxMaxHeight;
    } else {
      layout.width = vBoxMaxWidth;
      layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
    }
  }
  return stacks;
}
function buildLayoutBoxes(boxes) {
  const layoutBoxes = wrapBoxes(boxes);
  const fullSize = sortByWeight(layoutBoxes.filter(wrap => wrap.box.fullSize), true);
  const left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
  const right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
  const top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
  const bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
  const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, 'x');
  const centerVertical = filterDynamicPositionByAxis(layoutBoxes, 'y');
  return {
    fullSize,
    leftAndTop: left.concat(top),
    rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
    chartArea: filterByPosition(layoutBoxes, 'chartArea'),
    vertical: left.concat(right).concat(centerVertical),
    horizontal: top.concat(bottom).concat(centerHorizontal)
  };
}
function getCombinedMax(maxPadding, chartArea, a, b) {
  return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);
}
function updateMaxPadding(maxPadding, boxPadding) {
  maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
  maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
  maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
  maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
}
function updateDims(chartArea, params, layout, stacks) {
  const {
    pos,
    box
  } = layout;
  const maxPadding = chartArea.maxPadding;
  if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(pos)) {
    if (layout.size) {
      chartArea[pos] -= layout.size;
    }
    const stack = stacks[layout.stack] || {
      size: 0,
      count: 1
    };
    stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
    layout.size = stack.size / stack.count;
    chartArea[pos] += layout.size;
  }
  if (box.getPadding) {
    updateMaxPadding(maxPadding, box.getPadding());
  }
  const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right'));
  const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom'));
  const widthChanged = newWidth !== chartArea.w;
  const heightChanged = newHeight !== chartArea.h;
  chartArea.w = newWidth;
  chartArea.h = newHeight;
  return layout.horizontal ? {
    same: widthChanged,
    other: heightChanged
  } : {
    same: heightChanged,
    other: widthChanged
  };
}
function handleMaxPadding(chartArea) {
  const maxPadding = chartArea.maxPadding;
  function updatePos(pos) {
    const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
    chartArea[pos] += change;
    return change;
  }
  chartArea.y += updatePos('top');
  chartArea.x += updatePos('left');
  updatePos('right');
  updatePos('bottom');
}
function getMargins(horizontal, chartArea) {
  const maxPadding = chartArea.maxPadding;
  function marginForPositions(positions) {
    const margin = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    positions.forEach(pos => {
      margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
    });
    return margin;
  }
  return horizontal ? marginForPositions(['left', 'right']) : marginForPositions(['top', 'bottom']);
}
function fitBoxes(boxes, chartArea, params, stacks) {
  const refitBoxes = [];
  let i, ilen, layout, box, refit, changed;
  for (i = 0, ilen = boxes.length, refit = 0; i < ilen; ++i) {
    layout = boxes[i];
    box = layout.box;
    box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
    const {
      same,
      other
    } = updateDims(chartArea, params, layout, stacks);
    refit |= same && refitBoxes.length;
    changed = changed || other;
    if (!box.fullSize) {
      refitBoxes.push(layout);
    }
  }
  return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
}
function setBoxDims(box, left, top, width, height) {
  box.top = top;
  box.left = left;
  box.right = left + width;
  box.bottom = top + height;
  box.width = width;
  box.height = height;
}
function placeBoxes(boxes, chartArea, params, stacks) {
  const userPadding = params.padding;
  let {
    x,
    y
  } = chartArea;
  for (const layout of boxes) {
    const box = layout.box;
    const stack = stacks[layout.stack] || {
      count: 1,
      placed: 0,
      weight: 1
    };
    const weight = layout.stackWeight / stack.weight || 1;
    if (layout.horizontal) {
      const width = chartArea.w * weight;
      const height = stack.size || box.height;
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h)(stack.start)) {
        y = stack.start;
      }
      if (box.fullSize) {
        setBoxDims(box, userPadding.left, y, params.outerWidth - userPadding.right - userPadding.left, height);
      } else {
        setBoxDims(box, chartArea.left + stack.placed, y, width, height);
      }
      stack.start = y;
      stack.placed += width;
      y = box.bottom;
    } else {
      const height = chartArea.h * weight;
      const width = stack.size || box.width;
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h)(stack.start)) {
        x = stack.start;
      }
      if (box.fullSize) {
        setBoxDims(box, x, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
      } else {
        setBoxDims(box, x, chartArea.top + stack.placed, width, height);
      }
      stack.start = x;
      stack.placed += height;
      x = box.right;
    }
  }
  chartArea.x = x;
  chartArea.y = y;
}
var layouts = {
  addBox(chart, item) {
    if (!chart.boxes) {
      chart.boxes = [];
    }
    item.fullSize = item.fullSize || false;
    item.position = item.position || 'top';
    item.weight = item.weight || 0;
    item._layers = item._layers || function () {
      return [{
        z: 0,
        draw(chartArea) {
          item.draw(chartArea);
        }
      }];
    };
    chart.boxes.push(item);
  },
  removeBox(chart, layoutItem) {
    const index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
    if (index !== -1) {
      chart.boxes.splice(index, 1);
    }
  },
  configure(chart, item, options) {
    item.fullSize = options.fullSize;
    item.position = options.position;
    item.weight = options.weight;
  },
  update(chart, width, height, minPadding) {
    if (!chart) {
      return;
    }
    const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(chart.options.layout.padding);
    const availableWidth = Math.max(width - padding.width, 0);
    const availableHeight = Math.max(height - padding.height, 0);
    const boxes = buildLayoutBoxes(chart.boxes);
    const verticalBoxes = boxes.vertical;
    const horizontalBoxes = boxes.horizontal;
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(chart.boxes, box => {
      if (typeof box.beforeLayout === 'function') {
        box.beforeLayout();
      }
    });
    const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap) => wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
    const params = Object.freeze({
      outerWidth: width,
      outerHeight: height,
      padding,
      availableWidth,
      availableHeight,
      vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
      hBoxMaxHeight: availableHeight / 2
    });
    const maxPadding = Object.assign({}, padding);
    updateMaxPadding(maxPadding, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(minPadding));
    const chartArea = Object.assign({
      maxPadding,
      w: availableWidth,
      h: availableHeight,
      x: padding.left,
      y: padding.top
    }, padding);
    const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
    fitBoxes(boxes.fullSize, chartArea, params, stacks);
    fitBoxes(verticalBoxes, chartArea, params, stacks);
    if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
      fitBoxes(verticalBoxes, chartArea, params, stacks);
    }
    handleMaxPadding(chartArea);
    placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
    chartArea.x += chartArea.w;
    chartArea.y += chartArea.h;
    placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
    chart.chartArea = {
      left: chartArea.left,
      top: chartArea.top,
      right: chartArea.left + chartArea.w,
      bottom: chartArea.top + chartArea.h,
      height: chartArea.h,
      width: chartArea.w
    };
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(boxes.chartArea, layout => {
      const box = layout.box;
      Object.assign(box, chart.chartArea);
      box.update(chartArea.w, chartArea.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class BasePlatform {
  acquireContext(canvas, aspectRatio) {}
  releaseContext(context) {
    return false;
  }
  addEventListener(chart, type, listener) {}
  removeEventListener(chart, type, listener) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(element, width, height, aspectRatio) {
    width = Math.max(0, width || element.width);
    height = height || element.height;
    return {
      width,
      height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
    };
  }
  isAttached(canvas) {
    return true;
  }
  updateConfig(config) {}
}
class BasicPlatform extends BasePlatform {
  acquireContext(item) {
    return item && item.getContext && item.getContext('2d') || null;
  }
  updateConfig(config) {
    config.options.animation = false;
  }
}
const EXPANDO_KEY = '$chartjs';
const EVENT_TYPES = {
  touchstart: 'mousedown',
  touchmove: 'mousemove',
  touchend: 'mouseup',
  pointerenter: 'mouseenter',
  pointerdown: 'mousedown',
  pointermove: 'mousemove',
  pointerup: 'mouseup',
  pointerleave: 'mouseout',
  pointerout: 'mouseout'
};
const isNullOrEmpty = value => value === null || value === '';
function initCanvas(canvas, aspectRatio) {
  const style = canvas.style;
  const renderHeight = canvas.getAttribute('height');
  const renderWidth = canvas.getAttribute('width');
  canvas[EXPANDO_KEY] = {
    initial: {
      height: renderHeight,
      width: renderWidth,
      style: {
        display: style.display,
        height: style.height,
        width: style.width
      }
    }
  };
  style.display = style.display || 'block';
  style.boxSizing = style.boxSizing || 'border-box';
  if (isNullOrEmpty(renderWidth)) {
    const displayWidth = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.J)(canvas, 'width');
    if (displayWidth !== undefined) {
      canvas.width = displayWidth;
    }
  }
  if (isNullOrEmpty(renderHeight)) {
    if (canvas.style.height === '') {
      canvas.height = canvas.width / (aspectRatio || 2);
    } else {
      const displayHeight = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.J)(canvas, 'height');
      if (displayHeight !== undefined) {
        canvas.height = displayHeight;
      }
    }
  }
  return canvas;
}
const eventListenerOptions = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.K ? {
  passive: true
} : false;
function addListener(node, type, listener) {
  node.addEventListener(type, listener, eventListenerOptions);
}
function removeListener(chart, type, listener) {
  chart.canvas.removeEventListener(type, listener, eventListenerOptions);
}
function fromNativeEvent(event, chart) {
  const type = EVENT_TYPES[event.type] || event.type;
  const {
    x,
    y
  } = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.z)(event, chart);
  return {
    type,
    chart,
    native: event,
    x: x !== undefined ? x : null,
    y: y !== undefined ? y : null
  };
}
function nodeListContains(nodeList, canvas) {
  for (const node of nodeList) {
    if (node === canvas || node.contains(canvas)) {
      return true;
    }
  }
}
function createAttachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const observer = new MutationObserver(entries => {
    let trigger = false;
    for (const entry of entries) {
      trigger = trigger || nodeListContains(entry.addedNodes, canvas);
      trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
    }
    if (trigger) {
      listener();
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true
  });
  return observer;
}
function createDetachObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const observer = new MutationObserver(entries => {
    let trigger = false;
    for (const entry of entries) {
      trigger = trigger || nodeListContains(entry.removedNodes, canvas);
      trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
    }
    if (trigger) {
      listener();
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true
  });
  return observer;
}
const drpListeningCharts = new Map();
let oldDevicePixelRatio = 0;
function onWindowResize() {
  const dpr = window.devicePixelRatio;
  if (dpr === oldDevicePixelRatio) {
    return;
  }
  oldDevicePixelRatio = dpr;
  drpListeningCharts.forEach((resize, chart) => {
    if (chart.currentDevicePixelRatio !== dpr) {
      resize();
    }
  });
}
function listenDevicePixelRatioChanges(chart, resize) {
  if (!drpListeningCharts.size) {
    window.addEventListener('resize', onWindowResize);
  }
  drpListeningCharts.set(chart, resize);
}
function unlistenDevicePixelRatioChanges(chart) {
  drpListeningCharts.delete(chart);
  if (!drpListeningCharts.size) {
    window.removeEventListener('resize', onWindowResize);
  }
}
function createResizeObserver(chart, type, listener) {
  const canvas = chart.canvas;
  const container = canvas && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.I)(canvas);
  if (!container) {
    return;
  }
  const resize = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)((width, height) => {
    const w = container.clientWidth;
    listener(width, height);
    if (w < container.clientWidth) {
      listener();
    }
  }, window);
  const observer = new ResizeObserver(entries => {
    const entry = entries[0];
    const width = entry.contentRect.width;
    const height = entry.contentRect.height;
    if (width === 0 && height === 0) {
      return;
    }
    resize(width, height);
  });
  observer.observe(container);
  listenDevicePixelRatioChanges(chart, resize);
  return observer;
}
function releaseObserver(chart, type, observer) {
  if (observer) {
    observer.disconnect();
  }
  if (type === 'resize') {
    unlistenDevicePixelRatioChanges(chart);
  }
}
function createProxyAndListen(chart, type, listener) {
  const canvas = chart.canvas;
  const proxy = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.L)(event => {
    if (chart.ctx !== null) {
      listener(fromNativeEvent(event, chart));
    }
  }, chart);
  addListener(canvas, type, proxy);
  return proxy;
}
class DomPlatform extends BasePlatform {
  acquireContext(canvas, aspectRatio) {
    const context = canvas && canvas.getContext && canvas.getContext('2d');
    if (context && context.canvas === canvas) {
      initCanvas(canvas, aspectRatio);
      return context;
    }
    return null;
  }
  releaseContext(context) {
    const canvas = context.canvas;
    if (!canvas[EXPANDO_KEY]) {
      return false;
    }
    const initial = canvas[EXPANDO_KEY].initial;
    ['height', 'width'].forEach(prop => {
      const value = initial[prop];
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(value)) {
        canvas.removeAttribute(prop);
      } else {
        canvas.setAttribute(prop, value);
      }
    });
    const style = initial.style || {};
    Object.keys(style).forEach(key => {
      canvas.style[key] = style[key];
    });
    canvas.width = canvas.width;
    delete canvas[EXPANDO_KEY];
    return true;
  }
  addEventListener(chart, type, listener) {
    this.removeEventListener(chart, type);
    const proxies = chart.$proxies || (chart.$proxies = {});
    const handlers = {
      attach: createAttachObserver,
      detach: createDetachObserver,
      resize: createResizeObserver
    };
    const handler = handlers[type] || createProxyAndListen;
    proxies[type] = handler(chart, type, listener);
  }
  removeEventListener(chart, type) {
    const proxies = chart.$proxies || (chart.$proxies = {});
    const proxy = proxies[type];
    if (!proxy) {
      return;
    }
    const handlers = {
      attach: releaseObserver,
      detach: releaseObserver,
      resize: releaseObserver
    };
    const handler = handlers[type] || removeListener;
    handler(chart, type, proxy);
    proxies[type] = undefined;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(canvas, width, height, aspectRatio) {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.G)(canvas, width, height, aspectRatio);
  }
  isAttached(canvas) {
    const container = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.I)(canvas);
    return !!(container && container.isConnected);
  }
}
function _detectPlatform(canvas) {
  if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.M)() || typeof OffscreenCanvas !== 'undefined' && canvas instanceof OffscreenCanvas) {
    return BasicPlatform;
  }
  return DomPlatform;
}
class Element {
  static defaults = {};
  static defaultRoutes = undefined;
  x;
  y;
  active = false;
  options;
  $animations;
  tooltipPosition(useFinalPosition) {
    const {
      x,
      y
    } = this.getProps(['x', 'y'], useFinalPosition);
    return {
      x,
      y
    };
  }
  hasValue() {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(this.x) && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(this.y);
  }
  getProps(props, final) {
    const anims = this.$animations;
    if (!final || !anims) {
      // let's not create an object, if not needed
      return this;
    }
    const ret = {};
    props.forEach(prop => {
      ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
    });
    return ret;
  }
}
function autoSkip(scale, ticks) {
  const tickOpts = scale.options.ticks;
  const determinedMaxTicks = determineMaxTicks(scale);
  const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
  const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
  const numMajorIndices = majorIndices.length;
  const first = majorIndices[0];
  const last = majorIndices[numMajorIndices - 1];
  const newTicks = [];
  if (numMajorIndices > ticksLimit) {
    skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
    return newTicks;
  }
  const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
  if (numMajorIndices > 0) {
    let i, ilen;
    const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
    skip(ticks, newTicks, spacing, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
    for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
      skip(ticks, newTicks, spacing, majorIndices[i], majorIndices[i + 1]);
    }
    skip(ticks, newTicks, spacing, last, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
    return newTicks;
  }
  skip(ticks, newTicks, spacing);
  return newTicks;
}
function determineMaxTicks(scale) {
  const offset = scale.options.offset;
  const tickLength = scale._tickSize();
  const maxScale = scale._length / tickLength + (offset ? 0 : 1);
  const maxChart = scale._maxLength / tickLength;
  return Math.floor(Math.min(maxScale, maxChart));
}
function calculateSpacing(majorIndices, ticks, ticksLimit) {
  const evenMajorSpacing = getEvenSpacing(majorIndices);
  const spacing = ticks.length / ticksLimit;
  if (!evenMajorSpacing) {
    return Math.max(spacing, 1);
  }
  const factors = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.N)(evenMajorSpacing);
  for (let i = 0, ilen = factors.length - 1; i < ilen; i++) {
    const factor = factors[i];
    if (factor > spacing) {
      return factor;
    }
  }
  return Math.max(spacing, 1);
}
function getMajorIndices(ticks) {
  const result = [];
  let i, ilen;
  for (i = 0, ilen = ticks.length; i < ilen; i++) {
    if (ticks[i].major) {
      result.push(i);
    }
  }
  return result;
}
function skipMajors(ticks, newTicks, majorIndices, spacing) {
  let count = 0;
  let next = majorIndices[0];
  let i;
  spacing = Math.ceil(spacing);
  for (i = 0; i < ticks.length; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = majorIndices[count * spacing];
    }
  }
}
function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
  const start = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(majorStart, 0);
  const end = Math.min((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(majorEnd, ticks.length), ticks.length);
  let count = 0;
  let length, i, next;
  spacing = Math.ceil(spacing);
  if (majorEnd) {
    length = majorEnd - majorStart;
    spacing = length / Math.floor(length / spacing);
  }
  next = start;
  while (next < 0) {
    count++;
    next = Math.round(start + count * spacing);
  }
  for (i = Math.max(start, 0); i < end; i++) {
    if (i === next) {
      newTicks.push(ticks[i]);
      count++;
      next = Math.round(start + count * spacing);
    }
  }
}
function getEvenSpacing(arr) {
  const len = arr.length;
  let i, diff;
  if (len < 2) {
    return false;
  }
  for (diff = arr[0], i = 1; i < len; ++i) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return diff;
}
const reverseAlign = align => align === 'left' ? 'right' : align === 'right' ? 'left' : align;
const offsetFromEdge = (scale, edge, offset) => edge === 'top' || edge === 'left' ? scale[edge] + offset : scale[edge] - offset;
const getTicksLimit = (ticksLength, maxTicksLimit) => Math.min(maxTicksLimit || ticksLength, ticksLength);
function sample(arr, numItems) {
  const result = [];
  const increment = arr.length / numItems;
  const len = arr.length;
  let i = 0;
  for (; i < len; i += increment) {
    result.push(arr[Math.floor(i)]);
  }
  return result;
}
function getPixelForGridLine(scale, index, offsetGridLines) {
  const length = scale.ticks.length;
  const validIndex = Math.min(index, length - 1);
  const start = scale._startPixel;
  const end = scale._endPixel;
  const epsilon = 1e-6;
  let lineValue = scale.getPixelForTick(validIndex);
  let offset;
  if (offsetGridLines) {
    if (length === 1) {
      offset = Math.max(lineValue - start, end - lineValue);
    } else if (index === 0) {
      offset = (scale.getPixelForTick(1) - lineValue) / 2;
    } else {
      offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
    }
    lineValue += validIndex < index ? offset : -offset;
    if (lineValue < start - epsilon || lineValue > end + epsilon) {
      return;
    }
  }
  return lineValue;
}
function garbageCollect(caches, length) {
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(caches, cache => {
    const gc = cache.gc;
    const gcLen = gc.length / 2;
    let i;
    if (gcLen > length) {
      for (i = 0; i < gcLen; ++i) {
        delete cache.data[gc[i]];
      }
      gc.splice(0, gcLen);
    }
  });
}
function getTickMarkLength(options) {
  return options.drawTicks ? options.tickLength : 0;
}
function getTitleHeight(options, fallback) {
  if (!options.display) {
    return 0;
  }
  const font = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(options.font, fallback);
  const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(options.padding);
  const lines = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(options.text) ? options.text.length : 1;
  return lines * font.lineHeight + padding.height;
}
function createScaleContext(parent, scale) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j)(parent, {
    scale,
    type: 'scale'
  });
}
function createTickContext(parent, index, tick) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j)(parent, {
    tick,
    index,
    type: 'tick'
  });
}
function titleAlign(align, position, reverse) {
  let ret = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a1)(align);
  if (reverse && position !== 'right' || !reverse && position === 'right') {
    ret = reverseAlign(ret);
  }
  return ret;
}
function titleArgs(scale, offset, position, align) {
  const {
    top,
    left,
    bottom,
    right,
    chart
  } = scale;
  const {
    chartArea,
    scales
  } = chart;
  let rotation = 0;
  let maxWidth, titleX, titleY;
  const height = bottom - top;
  const width = right - left;
  if (scale.isHorizontal()) {
    titleX = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, left, right);
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
      const positionAxisID = Object.keys(position)[0];
      const value = position[positionAxisID];
      titleY = scales[positionAxisID].getPixelForValue(value) + height - offset;
    } else if (position === 'center') {
      titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
    } else {
      titleY = offsetFromEdge(scale, position, offset);
    }
    maxWidth = right - left;
  } else {
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
      const positionAxisID = Object.keys(position)[0];
      const value = position[positionAxisID];
      titleX = scales[positionAxisID].getPixelForValue(value) - width + offset;
    } else if (position === 'center') {
      titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
    } else {
      titleX = offsetFromEdge(scale, position, offset);
    }
    titleY = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, bottom, top);
    rotation = position === 'left' ? -_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H : _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H;
  }
  return {
    titleX,
    titleY,
    maxWidth,
    rotation
  };
}
class Scale extends Element {
  constructor(cfg) {
    super();
    this.id = cfg.id;
    this.type = cfg.type;
    this.options = undefined;
    this.ctx = cfg.ctx;
    this.chart = cfg.chart;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    };
    this.maxWidth = undefined;
    this.maxHeight = undefined;
    this.paddingTop = undefined;
    this.paddingBottom = undefined;
    this.paddingLeft = undefined;
    this.paddingRight = undefined;
    this.axis = undefined;
    this.labelRotation = undefined;
    this.min = undefined;
    this.max = undefined;
    this._range = undefined;
    this.ticks = [];
    this._gridLineItems = null;
    this._labelItems = null;
    this._labelSizes = null;
    this._length = 0;
    this._maxLength = 0;
    this._longestTextCache = {};
    this._startPixel = undefined;
    this._endPixel = undefined;
    this._reversePixels = false;
    this._userMax = undefined;
    this._userMin = undefined;
    this._suggestedMax = undefined;
    this._suggestedMin = undefined;
    this._ticksLength = 0;
    this._borderValue = 0;
    this._cache = {};
    this._dataLimitsCached = false;
    this.$context = undefined;
  }
  init(options) {
    this.options = options.setContext(this.getContext());
    this.axis = options.axis;
    this._userMin = this.parse(options.min);
    this._userMax = this.parse(options.max);
    this._suggestedMin = this.parse(options.suggestedMin);
    this._suggestedMax = this.parse(options.suggestedMax);
  }
  parse(raw, index) {
    return raw;
  }
  getUserBounds() {
    let {
      _userMin,
      _userMax,
      _suggestedMin,
      _suggestedMax
    } = this;
    _userMin = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(_userMin, Number.POSITIVE_INFINITY);
    _userMax = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(_userMax, Number.NEGATIVE_INFINITY);
    _suggestedMin = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(_suggestedMin, Number.POSITIVE_INFINITY);
    _suggestedMax = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(_suggestedMax, Number.NEGATIVE_INFINITY);
    return {
      min: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(_userMin, _suggestedMin),
      max: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(_userMax, _suggestedMax),
      minDefined: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(_userMin),
      maxDefined: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(_userMax)
    };
  }
  getMinMax(canStack) {
    let {
      min,
      max,
      minDefined,
      maxDefined
    } = this.getUserBounds();
    let range;
    if (minDefined && maxDefined) {
      return {
        min,
        max
      };
    }
    const metas = this.getMatchingVisibleMetas();
    for (let i = 0, ilen = metas.length; i < ilen; ++i) {
      range = metas[i].controller.getMinMax(this, canStack);
      if (!minDefined) {
        min = Math.min(min, range.min);
      }
      if (!maxDefined) {
        max = Math.max(max, range.max);
      }
    }
    min = maxDefined && min > max ? max : min;
    max = minDefined && min > max ? min : max;
    return {
      min: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(min, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(max, min)),
      max: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(max, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(min, max))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const data = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
  }
  getLabelItems(chartArea = this.chart.chartArea) {
    const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
    return items;
  }
  beforeLayout() {
    this._cache = {};
    this._dataLimitsCached = false;
  }
  beforeUpdate() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options.beforeUpdate, [this]);
  }
  update(maxWidth, maxHeight, margins) {
    const {
      beginAtZero,
      grace,
      ticks: tickOpts
    } = this.options;
    const sampleSize = tickOpts.sampleSize;
    this.beforeUpdate();
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this._margins = margins = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, margins);
    this.ticks = null;
    this._labelSizes = null;
    this._gridLineItems = null;
    this._labelItems = null;
    this.beforeSetDimensions();
    this.setDimensions();
    this.afterSetDimensions();
    this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
    if (!this._dataLimitsCached) {
      this.beforeDataLimits();
      this.determineDataLimits();
      this.afterDataLimits();
      this._range = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.R)(this, grace, beginAtZero);
      this._dataLimitsCached = true;
    }
    this.beforeBuildTicks();
    this.ticks = this.buildTicks() || [];
    this.afterBuildTicks();
    const samplingEnabled = sampleSize < this.ticks.length;
    this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
    this.configure();
    this.beforeCalculateLabelRotation();
    this.calculateLabelRotation();
    this.afterCalculateLabelRotation();
    if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto')) {
      this.ticks = autoSkip(this, this.ticks);
      this._labelSizes = null;
      this.afterAutoSkip();
    }
    if (samplingEnabled) {
      this._convertTicksToLabels(this.ticks);
    }
    this.beforeFit();
    this.fit();
    this.afterFit();
    this.afterUpdate();
  }
  configure() {
    let reversePixels = this.options.reverse;
    let startPixel, endPixel;
    if (this.isHorizontal()) {
      startPixel = this.left;
      endPixel = this.right;
    } else {
      startPixel = this.top;
      endPixel = this.bottom;
      reversePixels = !reversePixels;
    }
    this._startPixel = startPixel;
    this._endPixel = endPixel;
    this._reversePixels = reversePixels;
    this._length = endPixel - startPixel;
    this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = 0;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = 0;
      this.bottom = this.height;
    }
    this.paddingLeft = 0;
    this.paddingTop = 0;
    this.paddingRight = 0;
    this.paddingBottom = 0;
  }
  afterSetDimensions() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options.afterSetDimensions, [this]);
  }
  _callHooks(name) {
    this.chart.notifyPlugins(name, this.getContext());
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options[name], [this]);
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits');
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits');
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks');
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks');
  }
  beforeTickToLabelConversion() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(ticks) {
    const tickOpts = this.options.ticks;
    let i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      tick = ticks[i];
      tick.label = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(tickOpts.callback, [tick.value, i, ticks], this);
    }
  }
  afterTickToLabelConversion() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const options = this.options;
    const tickOpts = options.ticks;
    const numTicks = getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
    const minRotation = tickOpts.minRotation || 0;
    const maxRotation = tickOpts.maxRotation;
    let labelRotation = minRotation;
    let tickWidth, maxHeight, maxLabelDiagonal;
    if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
      this.labelRotation = minRotation;
      return;
    }
    const labelSizes = this._getLabelSizes();
    const maxLabelWidth = labelSizes.widest.width;
    const maxLabelHeight = labelSizes.highest.height;
    const maxWidth = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(this.chart.width - maxLabelWidth, 0, this.maxWidth);
    tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
    if (maxLabelWidth + 6 > tickWidth) {
      tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
      maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
      maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
      labelRotation = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.U)(Math.min(Math.asin((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(maxLabelHeight / maxLabelDiagonal, -1, 1))));
      labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
    }
    this.labelRotation = labelRotation;
  }
  afterCalculateLabelRotation() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options.beforeFit, [this]);
  }
  fit() {
    const minSize = {
      width: 0,
      height: 0
    };
    const {
      chart,
      options: {
        ticks: tickOpts,
        title: titleOpts,
        grid: gridOpts
      }
    } = this;
    const display = this._isVisible();
    const isHorizontal = this.isHorizontal();
    if (display) {
      const titleHeight = getTitleHeight(titleOpts, chart.options.font);
      if (isHorizontal) {
        minSize.width = this.maxWidth;
        minSize.height = getTickMarkLength(gridOpts) + titleHeight;
      } else {
        minSize.height = this.maxHeight;
        minSize.width = getTickMarkLength(gridOpts) + titleHeight;
      }
      if (tickOpts.display && this.ticks.length) {
        const {
          first,
          last,
          widest,
          highest
        } = this._getLabelSizes();
        const tickPadding = tickOpts.padding * 2;
        const angleRadians = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.labelRotation);
        const cos = Math.cos(angleRadians);
        const sin = Math.sin(angleRadians);
        if (isHorizontal) {
          const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
          minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
        } else {
          const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
          minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
        }
        this._calculatePadding(first, last, sin, cos);
      }
    }
    this._handleMargins();
    if (isHorizontal) {
      this.width = this._length = chart.width - this._margins.left - this._margins.right;
      this.height = minSize.height;
    } else {
      this.width = minSize.width;
      this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
    }
  }
  _calculatePadding(first, last, sin, cos) {
    const {
      ticks: {
        align,
        padding
      },
      position
    } = this.options;
    const isRotated = this.labelRotation !== 0;
    const labelsBelowTicks = position !== 'top' && this.axis === 'x';
    if (this.isHorizontal()) {
      const offsetLeft = this.getPixelForTick(0) - this.left;
      const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
      let paddingLeft = 0;
      let paddingRight = 0;
      if (isRotated) {
        if (labelsBelowTicks) {
          paddingLeft = cos * first.width;
          paddingRight = sin * last.height;
        } else {
          paddingLeft = sin * first.height;
          paddingRight = cos * last.width;
        }
      } else if (align === 'start') {
        paddingRight = last.width;
      } else if (align === 'end') {
        paddingLeft = first.width;
      } else if (align !== 'inner') {
        paddingLeft = first.width / 2;
        paddingRight = last.width / 2;
      }
      this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
      this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
    } else {
      let paddingTop = last.height / 2;
      let paddingBottom = first.height / 2;
      if (align === 'start') {
        paddingTop = 0;
        paddingBottom = first.height;
      } else if (align === 'end') {
        paddingTop = last.height;
        paddingBottom = 0;
      }
      this.paddingTop = paddingTop + padding;
      this.paddingBottom = paddingBottom + padding;
    }
  }
  _handleMargins() {
    if (this._margins) {
      this._margins.left = Math.max(this.paddingLeft, this._margins.left);
      this._margins.top = Math.max(this.paddingTop, this._margins.top);
      this._margins.right = Math.max(this.paddingRight, this._margins.right);
      this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
    }
  }
  afterFit() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const {
      axis,
      position
    } = this.options;
    return position === 'top' || position === 'bottom' || axis === 'x';
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(ticks) {
    this.beforeTickToLabelConversion();
    this.generateTickLabels(ticks);
    let i, ilen;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(ticks[i].label)) {
        ticks.splice(i, 1);
        ilen--;
        i--;
      }
    }
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let labelSizes = this._labelSizes;
    if (!labelSizes) {
      const sampleSize = this.options.ticks.sampleSize;
      let ticks = this.ticks;
      if (sampleSize < ticks.length) {
        ticks = sample(ticks, sampleSize);
      }
      this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
    }
    return labelSizes;
  }
  _computeLabelSizes(ticks, length, maxTicksLimit) {
    const {
      ctx,
      _longestTextCache: caches
    } = this;
    const widths = [];
    const heights = [];
    const increment = Math.floor(length / getTicksLimit(length, maxTicksLimit));
    let widestLabelSize = 0;
    let highestLabelSize = 0;
    let i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
    for (i = 0; i < length; i += increment) {
      label = ticks[i].label;
      tickFont = this._resolveTickFontOptions(i);
      ctx.font = fontString = tickFont.string;
      cache = caches[fontString] = caches[fontString] || {
        data: {},
        gc: []
      };
      lineHeight = tickFont.lineHeight;
      width = height = 0;
      if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(label) && !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(label)) {
        width = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.V)(ctx, cache.data, cache.gc, width, label);
        height = lineHeight;
      } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(label)) {
        for (j = 0, jlen = label.length; j < jlen; ++j) {
          nestedLabel = label[j];
          if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(nestedLabel) && !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(nestedLabel)) {
            width = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.V)(ctx, cache.data, cache.gc, width, nestedLabel);
            height += lineHeight;
          }
        }
      }
      widths.push(width);
      heights.push(height);
      widestLabelSize = Math.max(width, widestLabelSize);
      highestLabelSize = Math.max(height, highestLabelSize);
    }
    garbageCollect(caches, length);
    const widest = widths.indexOf(widestLabelSize);
    const highest = heights.indexOf(highestLabelSize);
    const valueAt = idx => ({
      width: widths[idx] || 0,
      height: heights[idx] || 0
    });
    return {
      first: valueAt(0),
      last: valueAt(length - 1),
      widest: valueAt(widest),
      highest: valueAt(highest),
      widths,
      heights
    };
  }
  getLabelForValue(value) {
    return value;
  }
  getPixelForValue(value, index) {
    return NaN;
  }
  getValueForPixel(pixel) {}
  getPixelForTick(index) {
    const ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  }
  getPixelForDecimal(decimal) {
    if (this._reversePixels) {
      decimal = 1 - decimal;
    }
    const pixel = this._startPixel + decimal * this._length;
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.W)(this._alignToPixels ? (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(this.chart, pixel, 0) : pixel);
  }
  getDecimalForPixel(pixel) {
    const decimal = (pixel - this._startPixel) / this._length;
    return this._reversePixels ? 1 - decimal : decimal;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const {
      min,
      max
    } = this;
    return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
  }
  getContext(index) {
    const ticks = this.ticks || [];
    if (index >= 0 && index < ticks.length) {
      const tick = ticks[index];
      return tick.$context || (tick.$context = createTickContext(this.getContext(), index, tick));
    }
    return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
  }
  _tickSize() {
    const optionTicks = this.options.ticks;
    const rot = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.labelRotation);
    const cos = Math.abs(Math.cos(rot));
    const sin = Math.abs(Math.sin(rot));
    const labelSizes = this._getLabelSizes();
    const padding = optionTicks.autoSkipPadding || 0;
    const w = labelSizes ? labelSizes.widest.width + padding : 0;
    const h = labelSizes ? labelSizes.highest.height + padding : 0;
    return this.isHorizontal() ? h * cos > w * sin ? w / cos : h / sin : h * sin < w * cos ? h / cos : w / sin;
  }
  _isVisible() {
    const display = this.options.display;
    if (display !== 'auto') {
      return !!display;
    }
    return this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(chartArea) {
    const axis = this.axis;
    const chart = this.chart;
    const options = this.options;
    const {
      grid,
      position,
      border
    } = options;
    const offset = grid.offset;
    const isHorizontal = this.isHorizontal();
    const ticks = this.ticks;
    const ticksLength = ticks.length + (offset ? 1 : 0);
    const tl = getTickMarkLength(grid);
    const items = [];
    const borderOpts = border.setContext(this.getContext());
    const axisWidth = borderOpts.display ? borderOpts.width : 0;
    const axisHalfWidth = axisWidth / 2;
    const alignBorderValue = function (pixel) {
      return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(chart, pixel, axisWidth);
    };
    let borderValue, i, lineValue, alignedLineValue;
    let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
    if (position === 'top') {
      borderValue = alignBorderValue(this.bottom);
      ty1 = this.bottom - tl;
      ty2 = borderValue - axisHalfWidth;
      y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
      y2 = chartArea.bottom;
    } else if (position === 'bottom') {
      borderValue = alignBorderValue(this.top);
      y1 = chartArea.top;
      y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
      ty1 = borderValue + axisHalfWidth;
      ty2 = this.top + tl;
    } else if (position === 'left') {
      borderValue = alignBorderValue(this.right);
      tx1 = this.right - tl;
      tx2 = borderValue - axisHalfWidth;
      x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
      x2 = chartArea.right;
    } else if (position === 'right') {
      borderValue = alignBorderValue(this.left);
      x1 = chartArea.left;
      x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
      tx1 = borderValue + axisHalfWidth;
      tx2 = this.left + tl;
    } else if (axis === 'x') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
      } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
      }
      y1 = chartArea.top;
      y2 = chartArea.bottom;
      ty1 = borderValue + axisHalfWidth;
      ty2 = ty1 + tl;
    } else if (axis === 'y') {
      if (position === 'center') {
        borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
      } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
      }
      tx1 = borderValue - axisHalfWidth;
      tx2 = tx1 - tl;
      x1 = chartArea.left;
      x2 = chartArea.right;
    }
    const limit = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(options.ticks.maxTicksLimit, ticksLength);
    const step = Math.max(1, Math.ceil(ticksLength / limit));
    for (i = 0; i < ticksLength; i += step) {
      const context = this.getContext(i);
      const optsAtIndex = grid.setContext(context);
      const optsAtIndexBorder = border.setContext(context);
      const lineWidth = optsAtIndex.lineWidth;
      const lineColor = optsAtIndex.color;
      const borderDash = optsAtIndexBorder.dash || [];
      const borderDashOffset = optsAtIndexBorder.dashOffset;
      const tickWidth = optsAtIndex.tickWidth;
      const tickColor = optsAtIndex.tickColor;
      const tickBorderDash = optsAtIndex.tickBorderDash || [];
      const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
      lineValue = getPixelForGridLine(this, i, offset);
      if (lineValue === undefined) {
        continue;
      }
      alignedLineValue = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(chart, lineValue, lineWidth);
      if (isHorizontal) {
        tx1 = tx2 = x1 = x2 = alignedLineValue;
      } else {
        ty1 = ty2 = y1 = y2 = alignedLineValue;
      }
      items.push({
        tx1,
        ty1,
        tx2,
        ty2,
        x1,
        y1,
        x2,
        y2,
        width: lineWidth,
        color: lineColor,
        borderDash,
        borderDashOffset,
        tickWidth,
        tickColor,
        tickBorderDash,
        tickBorderDashOffset
      });
    }
    this._ticksLength = ticksLength;
    this._borderValue = borderValue;
    return items;
  }
  _computeLabelItems(chartArea) {
    const axis = this.axis;
    const options = this.options;
    const {
      position,
      ticks: optionTicks
    } = options;
    const isHorizontal = this.isHorizontal();
    const ticks = this.ticks;
    const {
      align,
      crossAlign,
      padding,
      mirror
    } = optionTicks;
    const tl = getTickMarkLength(options.grid);
    const tickAndPadding = tl + padding;
    const hTickAndPadding = mirror ? -padding : tickAndPadding;
    const rotation = -(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.labelRotation);
    const items = [];
    let i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
    let textBaseline = 'middle';
    if (position === 'top') {
      y = this.bottom - hTickAndPadding;
      textAlign = this._getXAxisLabelAlignment();
    } else if (position === 'bottom') {
      y = this.top + hTickAndPadding;
      textAlign = this._getXAxisLabelAlignment();
    } else if (position === 'left') {
      const ret = this._getYAxisLabelAlignment(tl);
      textAlign = ret.textAlign;
      x = ret.x;
    } else if (position === 'right') {
      const ret = this._getYAxisLabelAlignment(tl);
      textAlign = ret.textAlign;
      x = ret.x;
    } else if (axis === 'x') {
      if (position === 'center') {
        y = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
      } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        y = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
      }
      textAlign = this._getXAxisLabelAlignment();
    } else if (axis === 'y') {
      if (position === 'center') {
        x = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
      } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        x = this.chart.scales[positionAxisID].getPixelForValue(value);
      }
      textAlign = this._getYAxisLabelAlignment(tl).textAlign;
    }
    if (axis === 'y') {
      if (align === 'start') {
        textBaseline = 'top';
      } else if (align === 'end') {
        textBaseline = 'bottom';
      }
    }
    const labelSizes = this._getLabelSizes();
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      label = tick.label;
      const optsAtIndex = optionTicks.setContext(this.getContext(i));
      pixel = this.getPixelForTick(i) + optionTicks.labelOffset;
      font = this._resolveTickFontOptions(i);
      lineHeight = font.lineHeight;
      lineCount = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(label) ? label.length : 1;
      const halfCount = lineCount / 2;
      const color = optsAtIndex.color;
      const strokeColor = optsAtIndex.textStrokeColor;
      const strokeWidth = optsAtIndex.textStrokeWidth;
      let tickTextAlign = textAlign;
      if (isHorizontal) {
        x = pixel;
        if (textAlign === 'inner') {
          if (i === ilen - 1) {
            tickTextAlign = !this.options.reverse ? 'right' : 'left';
          } else if (i === 0) {
            tickTextAlign = !this.options.reverse ? 'left' : 'right';
          } else {
            tickTextAlign = 'center';
          }
        }
        if (position === 'top') {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = -lineCount * lineHeight + lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
          } else {
            textOffset = -labelSizes.highest.height + lineHeight / 2;
          }
        } else {
          if (crossAlign === 'near' || rotation !== 0) {
            textOffset = lineHeight / 2;
          } else if (crossAlign === 'center') {
            textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
          } else {
            textOffset = labelSizes.highest.height - lineCount * lineHeight;
          }
        }
        if (mirror) {
          textOffset *= -1;
        }
        if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) {
          x += lineHeight / 2 * Math.sin(rotation);
        }
      } else {
        y = pixel;
        textOffset = (1 - lineCount) * lineHeight / 2;
      }
      let backdrop;
      if (optsAtIndex.showLabelBackdrop) {
        const labelPadding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(optsAtIndex.backdropPadding);
        const height = labelSizes.heights[i];
        const width = labelSizes.widths[i];
        let top = textOffset - labelPadding.top;
        let left = 0 - labelPadding.left;
        switch (textBaseline) {
          case 'middle':
            top -= height / 2;
            break;
          case 'bottom':
            top -= height;
            break;
        }
        switch (textAlign) {
          case 'center':
            left -= width / 2;
            break;
          case 'right':
            left -= width;
            break;
        }
        backdrop = {
          left,
          top,
          width: width + labelPadding.width,
          height: height + labelPadding.height,
          color: optsAtIndex.backdropColor
        };
      }
      items.push({
        label,
        font,
        textOffset,
        options: {
          rotation,
          color,
          strokeColor,
          strokeWidth,
          textAlign: tickTextAlign,
          textBaseline,
          translation: [x, y],
          backdrop
        }
      });
    }
    return items;
  }
  _getXAxisLabelAlignment() {
    const {
      position,
      ticks
    } = this.options;
    const rotation = -(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.labelRotation);
    if (rotation) {
      return position === 'top' ? 'left' : 'right';
    }
    let align = 'center';
    if (ticks.align === 'start') {
      align = 'left';
    } else if (ticks.align === 'end') {
      align = 'right';
    } else if (ticks.align === 'inner') {
      align = 'inner';
    }
    return align;
  }
  _getYAxisLabelAlignment(tl) {
    const {
      position,
      ticks: {
        crossAlign,
        mirror,
        padding
      }
    } = this.options;
    const labelSizes = this._getLabelSizes();
    const tickAndPadding = tl + padding;
    const widest = labelSizes.widest.width;
    let textAlign;
    let x;
    if (position === 'left') {
      if (mirror) {
        x = this.right + padding;
        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += widest / 2;
        } else {
          textAlign = 'right';
          x += widest;
        }
      } else {
        x = this.right - tickAndPadding;
        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= widest / 2;
        } else {
          textAlign = 'left';
          x = this.left;
        }
      }
    } else if (position === 'right') {
      if (mirror) {
        x = this.left + padding;
        if (crossAlign === 'near') {
          textAlign = 'right';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x -= widest / 2;
        } else {
          textAlign = 'left';
          x -= widest;
        }
      } else {
        x = this.left + tickAndPadding;
        if (crossAlign === 'near') {
          textAlign = 'left';
        } else if (crossAlign === 'center') {
          textAlign = 'center';
          x += widest / 2;
        } else {
          textAlign = 'right';
          x = this.right;
        }
      }
    } else {
      textAlign = 'right';
    }
    return {
      textAlign,
      x
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) {
      return;
    }
    const chart = this.chart;
    const position = this.options.position;
    if (position === 'left' || position === 'right') {
      return {
        top: 0,
        left: this.left,
        bottom: chart.height,
        right: this.right
      };
    }
    if (position === 'top' || position === 'bottom') {
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: chart.width
      };
    }
  }
  drawBackground() {
    const {
      ctx,
      options: {
        backgroundColor
      },
      left,
      top,
      width,
      height
    } = this;
    if (backgroundColor) {
      ctx.save();
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(left, top, width, height);
      ctx.restore();
    }
  }
  getLineWidthForValue(value) {
    const grid = this.options.grid;
    if (!this._isVisible() || !grid.display) {
      return 0;
    }
    const ticks = this.ticks;
    const index = ticks.findIndex(t => t.value === value);
    if (index >= 0) {
      const opts = grid.setContext(this.getContext(index));
      return opts.lineWidth;
    }
    return 0;
  }
  drawGrid(chartArea) {
    const grid = this.options.grid;
    const ctx = this.ctx;
    const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
    let i, ilen;
    const drawLine = (p1, p2, style) => {
      if (!style.width || !style.color) {
        return;
      }
      ctx.save();
      ctx.lineWidth = style.width;
      ctx.strokeStyle = style.color;
      ctx.setLineDash(style.borderDash || []);
      ctx.lineDashOffset = style.borderDashOffset;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
      ctx.restore();
    };
    if (grid.display) {
      for (i = 0, ilen = items.length; i < ilen; ++i) {
        const item = items[i];
        if (grid.drawOnChartArea) {
          drawLine({
            x: item.x1,
            y: item.y1
          }, {
            x: item.x2,
            y: item.y2
          }, item);
        }
        if (grid.drawTicks) {
          drawLine({
            x: item.tx1,
            y: item.ty1
          }, {
            x: item.tx2,
            y: item.ty2
          }, {
            color: item.tickColor,
            width: item.tickWidth,
            borderDash: item.tickBorderDash,
            borderDashOffset: item.tickBorderDashOffset
          });
        }
      }
    }
  }
  drawBorder() {
    const {
      chart,
      ctx,
      options: {
        border,
        grid
      }
    } = this;
    const borderOpts = border.setContext(this.getContext());
    const axisWidth = border.display ? borderOpts.width : 0;
    if (!axisWidth) {
      return;
    }
    const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
    const borderValue = this._borderValue;
    let x1, x2, y1, y2;
    if (this.isHorizontal()) {
      x1 = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(chart, this.left, axisWidth) - axisWidth / 2;
      x2 = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(chart, this.right, lastLineWidth) + lastLineWidth / 2;
      y1 = y2 = borderValue;
    } else {
      y1 = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(chart, this.top, axisWidth) - axisWidth / 2;
      y2 = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.X)(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
      x1 = x2 = borderValue;
    }
    ctx.save();
    ctx.lineWidth = borderOpts.width;
    ctx.strokeStyle = borderOpts.color;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.restore();
  }
  drawLabels(chartArea) {
    const optionTicks = this.options.ticks;
    if (!optionTicks.display) {
      return;
    }
    const ctx = this.ctx;
    const area = this._computeLabelArea();
    if (area) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Y)(ctx, area);
    }
    const items = this.getLabelItems(chartArea);
    for (const item of items) {
      const renderTextOptions = item.options;
      const tickFont = item.font;
      const label = item.label;
      const y = item.textOffset;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(ctx, label, 0, y, tickFont, renderTextOptions);
    }
    if (area) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.$)(ctx);
    }
  }
  drawTitle() {
    const {
      ctx,
      options: {
        position,
        title,
        reverse
      }
    } = this;
    if (!title.display) {
      return;
    }
    const font = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(title.font);
    const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(title.padding);
    const align = title.align;
    let offset = font.lineHeight / 2;
    if (position === 'bottom' || position === 'center' || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(position)) {
      offset += padding.bottom;
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(title.text)) {
        offset += font.lineHeight * (title.text.length - 1);
      }
    } else {
      offset += padding.top;
    }
    const {
      titleX,
      titleY,
      maxWidth,
      rotation
    } = titleArgs(this, offset, position, align);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(ctx, title.text, 0, 0, font, {
      color: title.color,
      maxWidth,
      rotation,
      textAlign: titleAlign(align, position, reverse),
      textBaseline: 'middle',
      translation: [titleX, titleY]
    });
  }
  draw(chartArea) {
    if (!this._isVisible()) {
      return;
    }
    this.drawBackground();
    this.drawGrid(chartArea);
    this.drawBorder();
    this.drawTitle();
    this.drawLabels(chartArea);
  }
  _layers() {
    const opts = this.options;
    const tz = opts.ticks && opts.ticks.z || 0;
    const gz = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(opts.grid && opts.grid.z, -1);
    const bz = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(opts.border && opts.border.z, 0);
    if (!this._isVisible() || this.draw !== Scale.prototype.draw) {
      return [{
        z: tz,
        draw: chartArea => {
          this.draw(chartArea);
        }
      }];
    }
    return [{
      z: gz,
      draw: chartArea => {
        this.drawBackground();
        this.drawGrid(chartArea);
        this.drawTitle();
      }
    }, {
      z: bz,
      draw: () => {
        this.drawBorder();
      }
    }, {
      z: tz,
      draw: chartArea => {
        this.drawLabels(chartArea);
      }
    }];
  }
  getMatchingVisibleMetas(type) {
    const metas = this.chart.getSortedVisibleDatasetMetas();
    const axisID = this.axis + 'AxisID';
    const result = [];
    let i, ilen;
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      const meta = metas[i];
      if (meta[axisID] === this.id && (!type || meta.type === type)) {
        result.push(meta);
      }
    }
    return result;
  }
  _resolveTickFontOptions(index) {
    const opts = this.options.ticks.setContext(this.getContext(index));
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(opts.font);
  }
  _maxDigits() {
    const fontSize = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / fontSize;
  }
}
class TypedRegistry {
  constructor(type, scope, override) {
    this.type = type;
    this.scope = scope;
    this.override = override;
    this.items = Object.create(null);
  }
  isForType(type) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
  }
  register(item) {
    const proto = Object.getPrototypeOf(item);
    let parentScope;
    if (isIChartComponent(proto)) {
      parentScope = this.register(proto);
    }
    const items = this.items;
    const id = item.id;
    const scope = this.scope + '.' + id;
    if (!id) {
      throw new Error('class does not have id: ' + item);
    }
    if (id in items) {
      return scope;
    }
    items[id] = item;
    registerDefaults(item, scope, parentScope);
    if (this.override) {
      _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.override(item.id, item.overrides);
    }
    return scope;
  }
  get(id) {
    return this.items[id];
  }
  unregister(item) {
    const items = this.items;
    const id = item.id;
    const scope = this.scope;
    if (id in items) {
      delete items[id];
    }
    if (scope && id in _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d[scope]) {
      delete _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d[scope][id];
      if (this.override) {
        delete _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a3[id];
      }
    }
  }
}
function registerDefaults(item, scope, parentScope) {
  const itemDefaults = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a4)(Object.create(null), [parentScope ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.get(parentScope) : {}, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.get(scope), item.defaults]);
  _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.set(scope, itemDefaults);
  if (item.defaultRoutes) {
    routeDefaults(scope, item.defaultRoutes);
  }
  if (item.descriptors) {
    _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.describe(scope, item.descriptors);
  }
}
function routeDefaults(scope, routes) {
  Object.keys(routes).forEach(property => {
    const propertyParts = property.split('.');
    const sourceName = propertyParts.pop();
    const sourceScope = [scope].concat(propertyParts).join('.');
    const parts = routes[property].split('.');
    const targetName = parts.pop();
    const targetScope = parts.join('.');
    _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.route(sourceScope, sourceName, targetScope, targetName);
  });
}
function isIChartComponent(proto) {
  return 'id' in proto && 'defaults' in proto;
}
class Registry {
  constructor() {
    this.controllers = new TypedRegistry(DatasetController, 'datasets', true);
    this.elements = new TypedRegistry(Element, 'elements');
    this.plugins = new TypedRegistry(Object, 'plugins');
    this.scales = new TypedRegistry(Scale, 'scales');
    this._typedRegistries = [this.controllers, this.scales, this.elements];
  }
  add(...args) {
    this._each('register', args);
  }
  remove(...args) {
    this._each('unregister', args);
  }
  addControllers(...args) {
    this._each('register', args, this.controllers);
  }
  addElements(...args) {
    this._each('register', args, this.elements);
  }
  addPlugins(...args) {
    this._each('register', args, this.plugins);
  }
  addScales(...args) {
    this._each('register', args, this.scales);
  }
  getController(id) {
    return this._get(id, this.controllers, 'controller');
  }
  getElement(id) {
    return this._get(id, this.elements, 'element');
  }
  getPlugin(id) {
    return this._get(id, this.plugins, 'plugin');
  }
  getScale(id) {
    return this._get(id, this.scales, 'scale');
  }
  removeControllers(...args) {
    this._each('unregister', args, this.controllers);
  }
  removeElements(...args) {
    this._each('unregister', args, this.elements);
  }
  removePlugins(...args) {
    this._each('unregister', args, this.plugins);
  }
  removeScales(...args) {
    this._each('unregister', args, this.scales);
  }
  _each(method, args, typedRegistry) {
    [...args].forEach(arg => {
      const reg = typedRegistry || this._getRegistryForType(arg);
      if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) {
        this._exec(method, reg, arg);
      } else {
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(arg, item => {
          const itemReg = typedRegistry || this._getRegistryForType(item);
          this._exec(method, itemReg, item);
        });
      }
    });
  }
  _exec(method, registry, component) {
    const camelMethod = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a5)(method);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(component['before' + camelMethod], [], component);
    registry[method](component);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(component['after' + camelMethod], [], component);
  }
  _getRegistryForType(type) {
    for (let i = 0; i < this._typedRegistries.length; i++) {
      const reg = this._typedRegistries[i];
      if (reg.isForType(type)) {
        return reg;
      }
    }
    return this.plugins;
  }
  _get(id, typedRegistry, type) {
    const item = typedRegistry.get(id);
    if (item === undefined) {
      throw new Error('"' + id + '" is not a registered ' + type + '.');
    }
    return item;
  }
}
var registry = /* #__PURE__ */new Registry();
class PluginService {
  constructor() {
    this._init = [];
  }
  notify(chart, hook, args, filter) {
    if (hook === 'beforeInit') {
      this._init = this._createDescriptors(chart, true);
      this._notify(this._init, chart, 'install');
    }
    const descriptors = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
    const result = this._notify(descriptors, chart, hook, args);
    if (hook === 'afterDestroy') {
      this._notify(descriptors, chart, 'stop');
      this._notify(this._init, chart, 'uninstall');
    }
    return result;
  }
  _notify(descriptors, chart, hook, args) {
    args = args || {};
    for (const descriptor of descriptors) {
      const plugin = descriptor.plugin;
      const method = plugin[hook];
      const params = [chart, args, descriptor.options];
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(method, params, plugin) === false && args.cancelable) {
        return false;
      }
    }
    return true;
  }
  invalidate() {
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(this._cache)) {
      this._oldCache = this._cache;
      this._cache = undefined;
    }
  }
  _descriptors(chart) {
    if (this._cache) {
      return this._cache;
    }
    const descriptors = this._cache = this._createDescriptors(chart);
    this._notifyStateChanges(chart);
    return descriptors;
  }
  _createDescriptors(chart, all) {
    const config = chart && chart.config;
    const options = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(config.options && config.options.plugins, {});
    const plugins = allPlugins(config);
    return options === false && !all ? [] : createDescriptors(chart, plugins, options, all);
  }
  _notifyStateChanges(chart) {
    const previousDescriptors = this._oldCache || [];
    const descriptors = this._cache;
    const diff = (a, b) => a.filter(x => !b.some(y => x.plugin.id === y.plugin.id));
    this._notify(diff(previousDescriptors, descriptors), chart, 'stop');
    this._notify(diff(descriptors, previousDescriptors), chart, 'start');
  }
}
function allPlugins(config) {
  const localIds = {};
  const plugins = [];
  const keys = Object.keys(registry.plugins.items);
  for (let i = 0; i < keys.length; i++) {
    plugins.push(registry.getPlugin(keys[i]));
  }
  const local = config.plugins || [];
  for (let i = 0; i < local.length; i++) {
    const plugin = local[i];
    if (plugins.indexOf(plugin) === -1) {
      plugins.push(plugin);
      localIds[plugin.id] = true;
    }
  }
  return {
    plugins,
    localIds
  };
}
function getOpts(options, all) {
  if (!all && options === false) {
    return null;
  }
  if (options === true) {
    return {};
  }
  return options;
}
function createDescriptors(chart, {
  plugins,
  localIds
}, options, all) {
  const result = [];
  const context = chart.getContext();
  for (const plugin of plugins) {
    const id = plugin.id;
    const opts = getOpts(options[id], all);
    if (opts === null) {
      continue;
    }
    result.push({
      plugin,
      options: pluginOpts(chart.config, {
        plugin,
        local: localIds[id]
      }, opts, context)
    });
  }
  return result;
}
function pluginOpts(config, {
  plugin,
  local
}, opts, context) {
  const keys = config.pluginScopeKeys(plugin);
  const scopes = config.getOptionScopes(opts, keys);
  if (local && plugin.defaults) {
    scopes.push(plugin.defaults);
  }
  return config.createResolver(scopes, context, [''], {
    scriptable: false,
    indexable: false,
    allKeys: true
  });
}
function getIndexAxis(type, options) {
  const datasetDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.datasets[type] || {};
  const datasetOptions = (options.datasets || {})[type] || {};
  return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || 'x';
}
function getAxisFromDefaultScaleID(id, indexAxis) {
  let axis = id;
  if (id === '_index_') {
    axis = indexAxis;
  } else if (id === '_value_') {
    axis = indexAxis === 'x' ? 'y' : 'x';
  }
  return axis;
}
function getDefaultScaleIDFromAxis(axis, indexAxis) {
  return axis === indexAxis ? '_index_' : '_value_';
}
function idMatchesAxis(id) {
  if (id === 'x' || id === 'y' || id === 'r') {
    return id;
  }
}
function axisFromPosition(position) {
  if (position === 'top' || position === 'bottom') {
    return 'x';
  }
  if (position === 'left' || position === 'right') {
    return 'y';
  }
}
function determineAxis(id, ...scaleOptions) {
  if (idMatchesAxis(id)) {
    return id;
  }
  for (const opts of scaleOptions) {
    const axis = opts.axis || axisFromPosition(opts.position) || id.length > 1 && idMatchesAxis(id[0].toLowerCase());
    if (axis) {
      return axis;
    }
  }
  throw new Error(`Cannot determine type of '${id}' axis. Please provide 'axis' or 'position' option.`);
}
function getAxisFromDataset(id, axis, dataset) {
  if (dataset[axis + 'AxisID'] === id) {
    return {
      axis
    };
  }
}
function retrieveAxisFromDatasets(id, config) {
  if (config.data && config.data.datasets) {
    const boundDs = config.data.datasets.filter(d => d.xAxisID === id || d.yAxisID === id);
    if (boundDs.length) {
      return getAxisFromDataset(id, 'x', boundDs[0]) || getAxisFromDataset(id, 'y', boundDs[0]);
    }
  }
  return {};
}
function mergeScaleConfig(config, options) {
  const chartDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a3[config.type] || {
    scales: {}
  };
  const configScales = options.scales || {};
  const chartIndexAxis = getIndexAxis(config.type, options);
  const scales = Object.create(null);
  Object.keys(configScales).forEach(id => {
    const scaleConf = configScales[id];
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(scaleConf)) {
      return console.error(`Invalid scale configuration for scale: ${id}`);
    }
    if (scaleConf._proxy) {
      return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
    }
    const axis = determineAxis(id, scaleConf, retrieveAxisFromDatasets(id, config), _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.scales[scaleConf.type]);
    const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
    const defaultScaleOptions = chartDefaults.scales || {};
    scales[id] = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ab)(Object.create(null), [{
      axis
    }, scaleConf, defaultScaleOptions[axis], defaultScaleOptions[defaultId]]);
  });
  config.data.datasets.forEach(dataset => {
    const type = dataset.type || config.type;
    const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
    const datasetDefaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a3[type] || {};
    const defaultScaleOptions = datasetDefaults.scales || {};
    Object.keys(defaultScaleOptions).forEach(defaultID => {
      const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
      const id = dataset[axis + 'AxisID'] || axis;
      scales[id] = scales[id] || Object.create(null);
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ab)(scales[id], [{
        axis
      }, configScales[id], defaultScaleOptions[defaultID]]);
    });
  });
  Object.keys(scales).forEach(key => {
    const scale = scales[key];
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ab)(scale, [_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.scales[scale.type], _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.scale]);
  });
  return scales;
}
function initOptions(config) {
  const options = config.options || (config.options = {});
  options.plugins = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(options.plugins, {});
  options.scales = mergeScaleConfig(config, options);
}
function initData(data) {
  data = data || {};
  data.datasets = data.datasets || [];
  data.labels = data.labels || [];
  return data;
}
function initConfig(config) {
  config = config || {};
  config.data = initData(config.data);
  initOptions(config);
  return config;
}
const keyCache = new Map();
const keysCached = new Set();
function cachedKeys(cacheKey, generate) {
  let keys = keyCache.get(cacheKey);
  if (!keys) {
    keys = generate();
    keyCache.set(cacheKey, keys);
    keysCached.add(keys);
  }
  return keys;
}
const addIfFound = (set, obj, key) => {
  const opts = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.f)(obj, key);
  if (opts !== undefined) {
    set.add(opts);
  }
};
class Config {
  constructor(config) {
    this._config = initConfig(config);
    this._scopeCache = new Map();
    this._resolverCache = new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(type) {
    this._config.type = type;
  }
  get data() {
    return this._config.data;
  }
  set data(data) {
    this._config.data = initData(data);
  }
  get options() {
    return this._config.options;
  }
  set options(options) {
    this._config.options = options;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const config = this._config;
    this.clearCache();
    initOptions(config);
  }
  clearCache() {
    this._scopeCache.clear();
    this._resolverCache.clear();
  }
  datasetScopeKeys(datasetType) {
    return cachedKeys(datasetType, () => [[`datasets.${datasetType}`, '']]);
  }
  datasetAnimationScopeKeys(datasetType, transition) {
    return cachedKeys(`${datasetType}.transition.${transition}`, () => [[`datasets.${datasetType}.transitions.${transition}`, `transitions.${transition}`], [`datasets.${datasetType}`, '']]);
  }
  datasetElementScopeKeys(datasetType, elementType) {
    return cachedKeys(`${datasetType}-${elementType}`, () => [[`datasets.${datasetType}.elements.${elementType}`, `datasets.${datasetType}`, `elements.${elementType}`, '']]);
  }
  pluginScopeKeys(plugin) {
    const id = plugin.id;
    const type = this.type;
    return cachedKeys(`${type}-plugin-${id}`, () => [[`plugins.${id}`, ...(plugin.additionalOptionScopes || [])]]);
  }
  _cachedScopes(mainScope, resetCache) {
    const _scopeCache = this._scopeCache;
    let cache = _scopeCache.get(mainScope);
    if (!cache || resetCache) {
      cache = new Map();
      _scopeCache.set(mainScope, cache);
    }
    return cache;
  }
  getOptionScopes(mainScope, keyLists, resetCache) {
    const {
      options,
      type
    } = this;
    const cache = this._cachedScopes(mainScope, resetCache);
    const cached = cache.get(keyLists);
    if (cached) {
      return cached;
    }
    const scopes = new Set();
    keyLists.forEach(keys => {
      if (mainScope) {
        scopes.add(mainScope);
        keys.forEach(key => addIfFound(scopes, mainScope, key));
      }
      keys.forEach(key => addIfFound(scopes, options, key));
      keys.forEach(key => addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a3[type] || {}, key));
      keys.forEach(key => addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d, key));
      keys.forEach(key => addIfFound(scopes, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a6, key));
    });
    const array = Array.from(scopes);
    if (array.length === 0) {
      array.push(Object.create(null));
    }
    if (keysCached.has(keyLists)) {
      cache.set(keyLists, array);
    }
    return array;
  }
  chartOptionScopes() {
    const {
      options,
      type
    } = this;
    return [options, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a3[type] || {}, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.datasets[type] || {}, {
      type
    }, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a6];
  }
  resolveNamedOptions(scopes, names, context, prefixes = ['']) {
    const result = {
      $shared: true
    };
    const {
      resolver,
      subPrefixes
    } = getResolver(this._resolverCache, scopes, prefixes);
    let options = resolver;
    if (needContext(resolver, names)) {
      result.$shared = false;
      context = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a7)(context) ? context() : context;
      const subResolver = this.createResolver(scopes, context, subPrefixes);
      options = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a8)(resolver, context, subResolver);
    }
    for (const prop of names) {
      result[prop] = options[prop];
    }
    return result;
  }
  createResolver(scopes, context, prefixes = [''], descriptorDefaults) {
    const {
      resolver
    } = getResolver(this._resolverCache, scopes, prefixes);
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(context) ? (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a8)(resolver, context, undefined, descriptorDefaults) : resolver;
  }
}
function getResolver(resolverCache, scopes, prefixes) {
  let cache = resolverCache.get(scopes);
  if (!cache) {
    cache = new Map();
    resolverCache.set(scopes, cache);
  }
  const cacheKey = prefixes.join();
  let cached = cache.get(cacheKey);
  if (!cached) {
    const resolver = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a9)(scopes, prefixes);
    cached = {
      resolver,
      subPrefixes: prefixes.filter(p => !p.toLowerCase().includes('hover'))
    };
    cache.set(cacheKey, cached);
  }
  return cached;
}
const hasFunction = value => (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(value) && Object.getOwnPropertyNames(value).reduce((acc, key) => acc || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a7)(value[key]), false);
function needContext(proxy, names) {
  const {
    isScriptable,
    isIndexable
  } = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aa)(proxy);
  for (const prop of names) {
    const scriptable = isScriptable(prop);
    const indexable = isIndexable(prop);
    const value = (indexable || scriptable) && proxy[prop];
    if (scriptable && ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a7)(value) || hasFunction(value)) || indexable && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(value)) {
      return true;
    }
  }
  return false;
}
var version = "4.4.0";
const KNOWN_POSITIONS = ['top', 'bottom', 'left', 'right', 'chartArea'];
function positionIsHorizontal(position, axis) {
  return position === 'top' || position === 'bottom' || KNOWN_POSITIONS.indexOf(position) === -1 && axis === 'x';
}
function compare2Level(l1, l2) {
  return function (a, b) {
    return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
  };
}
function onAnimationsComplete(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  chart.notifyPlugins('afterRender');
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(animationOptions && animationOptions.onComplete, [context], chart);
}
function onAnimationProgress(context) {
  const chart = context.chart;
  const animationOptions = chart.options.animation;
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(animationOptions && animationOptions.onProgress, [context], chart);
}
function getCanvas(item) {
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.M)() && typeof item === 'string') {
    item = document.getElementById(item);
  } else if (item && item.length) {
    item = item[0];
  }
  if (item && item.canvas) {
    item = item.canvas;
  }
  return item;
}
const instances = {};
const getChart = key => {
  const canvas = getCanvas(key);
  return Object.values(instances).filter(c => c.canvas === canvas).pop();
};
function moveNumericKeys(obj, start, move) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    const intKey = +key;
    if (intKey >= start) {
      const value = obj[key];
      delete obj[key];
      if (move > 0 || intKey > start) {
        obj[intKey + move] = value;
      }
    }
  }
}
function determineLastEvent(e, lastEvent, inChartArea, isClick) {
  if (!inChartArea || e.type === 'mouseout') {
    return null;
  }
  if (isClick) {
    return lastEvent;
  }
  return e;
}
function getSizeForArea(scale, chartArea, field) {
  return scale.options.clip ? scale[field] : chartArea[field];
}
function getDatasetArea(meta, chartArea) {
  const {
    xScale,
    yScale
  } = meta;
  if (xScale && yScale) {
    return {
      left: getSizeForArea(xScale, chartArea, 'left'),
      right: getSizeForArea(xScale, chartArea, 'right'),
      top: getSizeForArea(yScale, chartArea, 'top'),
      bottom: getSizeForArea(yScale, chartArea, 'bottom')
    };
  }
  return chartArea;
}
class Chart {
  static defaults = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d;
  static instances = instances;
  static overrides = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a3;
  static registry = registry;
  static version = version;
  static getChart = getChart;
  static register(...items) {
    registry.add(...items);
    invalidatePlugins();
  }
  static unregister(...items) {
    registry.remove(...items);
    invalidatePlugins();
  }
  constructor(item, userConfig) {
    const config = this.config = new Config(userConfig);
    const initialCanvas = getCanvas(item);
    const existingChart = getChart(initialCanvas);
    if (existingChart) {
      throw new Error('Canvas is already in use. Chart with ID \'' + existingChart.id + '\'' + ' must be destroyed before the canvas with ID \'' + existingChart.canvas.id + '\' can be reused.');
    }
    const options = config.createResolver(config.chartOptionScopes(), this.getContext());
    this.platform = new (config.platform || _detectPlatform(initialCanvas))();
    this.platform.updateConfig(config);
    const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
    const canvas = context && context.canvas;
    const height = canvas && canvas.height;
    const width = canvas && canvas.width;
    this.id = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ac)();
    this.ctx = context;
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this._options = options;
    this._aspectRatio = this.aspectRatio;
    this._layers = [];
    this._metasets = [];
    this._stacks = undefined;
    this.boxes = [];
    this.currentDevicePixelRatio = undefined;
    this.chartArea = undefined;
    this._active = [];
    this._lastEvent = undefined;
    this._listeners = {};
    this._responsiveListeners = undefined;
    this._sortedMetasets = [];
    this.scales = {};
    this._plugins = new PluginService();
    this.$proxies = {};
    this._hiddenIndices = {};
    this.attached = false;
    this._animationsDisabled = undefined;
    this.$context = undefined;
    this._doResize = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ad)(mode => this.update(mode), options.resizeDelay || 0);
    this._dataChanges = [];
    instances[this.id] = this;
    if (!context || !canvas) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    animator.listen(this, 'complete', onAnimationsComplete);
    animator.listen(this, 'progress', onAnimationProgress);
    this._initialize();
    if (this.attached) {
      this.update();
    }
  }
  get aspectRatio() {
    const {
      options: {
        aspectRatio,
        maintainAspectRatio
      },
      width,
      height,
      _aspectRatio
    } = this;
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(aspectRatio)) {
      return aspectRatio;
    }
    if (maintainAspectRatio && _aspectRatio) {
      return _aspectRatio;
    }
    return height ? width / height : null;
  }
  get data() {
    return this.config.data;
  }
  set data(data) {
    this.config.data = data;
  }
  get options() {
    return this._options;
  }
  set options(options) {
    this.config.options = options;
  }
  get registry() {
    return registry;
  }
  _initialize() {
    this.notifyPlugins('beforeInit');
    if (this.options.responsive) {
      this.resize();
    } else {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ae)(this, this.options.devicePixelRatio);
    }
    this.bindEvents();
    this.notifyPlugins('afterInit');
    return this;
  }
  clear() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.af)(this.canvas, this.ctx);
    return this;
  }
  stop() {
    animator.stop(this);
    return this;
  }
  resize(width, height) {
    if (!animator.running(this)) {
      this._resize(width, height);
    } else {
      this._resizeBeforeDraw = {
        width,
        height
      };
    }
  }
  _resize(width, height) {
    const options = this.options;
    const canvas = this.canvas;
    const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
    const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
    const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
    const mode = this.width ? 'resize' : 'attach';
    this.width = newSize.width;
    this.height = newSize.height;
    this._aspectRatio = this.aspectRatio;
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ae)(this, newRatio, true)) {
      return;
    }
    this.notifyPlugins('resize', {
      size: newSize
    });
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(options.onResize, [this, newSize], this);
    if (this.attached) {
      if (this._doResize(mode)) {
        this.render();
      }
    }
  }
  ensureScalesHaveIDs() {
    const options = this.options;
    const scalesOptions = options.scales || {};
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(scalesOptions, (axisOptions, axisID) => {
      axisOptions.id = axisID;
    });
  }
  buildOrUpdateScales() {
    const options = this.options;
    const scaleOpts = options.scales;
    const scales = this.scales;
    const updated = Object.keys(scales).reduce((obj, id) => {
      obj[id] = false;
      return obj;
    }, {});
    let items = [];
    if (scaleOpts) {
      items = items.concat(Object.keys(scaleOpts).map(id => {
        const scaleOptions = scaleOpts[id];
        const axis = determineAxis(id, scaleOptions);
        const isRadial = axis === 'r';
        const isHorizontal = axis === 'x';
        return {
          options: scaleOptions,
          dposition: isRadial ? 'chartArea' : isHorizontal ? 'bottom' : 'left',
          dtype: isRadial ? 'radialLinear' : isHorizontal ? 'category' : 'linear'
        };
      }));
    }
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(items, item => {
      const scaleOptions = item.options;
      const id = scaleOptions.id;
      const axis = determineAxis(id, scaleOptions);
      const scaleType = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(scaleOptions.type, item.dtype);
      if (scaleOptions.position === undefined || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
        scaleOptions.position = item.dposition;
      }
      updated[id] = true;
      let scale = null;
      if (id in scales && scales[id].type === scaleType) {
        scale = scales[id];
      } else {
        const scaleClass = registry.getScale(scaleType);
        scale = new scaleClass({
          id,
          type: scaleType,
          ctx: this.ctx,
          chart: this
        });
        scales[scale.id] = scale;
      }
      scale.init(scaleOptions, options);
    });
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(updated, (hasUpdated, id) => {
      if (!hasUpdated) {
        delete scales[id];
      }
    });
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(scales, scale => {
      layouts.configure(this, scale, scale.options);
      layouts.addBox(this, scale);
    });
  }
  _updateMetasets() {
    const metasets = this._metasets;
    const numData = this.data.datasets.length;
    const numMeta = metasets.length;
    metasets.sort((a, b) => a.index - b.index);
    if (numMeta > numData) {
      for (let i = numData; i < numMeta; ++i) {
        this._destroyDatasetMeta(i);
      }
      metasets.splice(numData, numMeta - numData);
    }
    this._sortedMetasets = metasets.slice(0).sort(compare2Level('order', 'index'));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: metasets,
      data: {
        datasets
      }
    } = this;
    if (metasets.length > datasets.length) {
      delete this._stacks;
    }
    metasets.forEach((meta, index) => {
      if (datasets.filter(x => x === meta._dataset).length === 0) {
        this._destroyDatasetMeta(index);
      }
    });
  }
  buildOrUpdateControllers() {
    const newControllers = [];
    const datasets = this.data.datasets;
    let i, ilen;
    this._removeUnreferencedMetasets();
    for (i = 0, ilen = datasets.length; i < ilen; i++) {
      const dataset = datasets[i];
      let meta = this.getDatasetMeta(i);
      const type = dataset.type || this.config.type;
      if (meta.type && meta.type !== type) {
        this._destroyDatasetMeta(i);
        meta = this.getDatasetMeta(i);
      }
      meta.type = type;
      meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
      meta.order = dataset.order || 0;
      meta.index = i;
      meta.label = '' + dataset.label;
      meta.visible = this.isDatasetVisible(i);
      if (meta.controller) {
        meta.controller.updateIndex(i);
        meta.controller.linkScales();
      } else {
        const ControllerClass = registry.getController(type);
        const {
          datasetElementType,
          dataElementType
        } = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.datasets[type];
        Object.assign(ControllerClass, {
          dataElementType: registry.getElement(dataElementType),
          datasetElementType: datasetElementType && registry.getElement(datasetElementType)
        });
        meta.controller = new ControllerClass(this, i);
        newControllers.push(meta.controller);
      }
    }
    this._updateMetasets();
    return newControllers;
  }
  _resetElements() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(this.data.datasets, (dataset, datasetIndex) => {
      this.getDatasetMeta(datasetIndex).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements();
    this.notifyPlugins('reset');
  }
  update(mode) {
    const config = this.config;
    config.update();
    const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
    const animsDisabled = this._animationsDisabled = !options.animation;
    this._updateScales();
    this._checkEventBindings();
    this._updateHiddenIndices();
    this._plugins.invalidate();
    if (this.notifyPlugins('beforeUpdate', {
      mode,
      cancelable: true
    }) === false) {
      return;
    }
    const newControllers = this.buildOrUpdateControllers();
    this.notifyPlugins('beforeElementsUpdate');
    let minPadding = 0;
    for (let i = 0, ilen = this.data.datasets.length; i < ilen; i++) {
      const {
        controller
      } = this.getDatasetMeta(i);
      const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
      controller.buildOrUpdateElements(reset);
      minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
    }
    minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
    this._updateLayout(minPadding);
    if (!animsDisabled) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(newControllers, controller => {
        controller.reset();
      });
    }
    this._updateDatasets(mode);
    this.notifyPlugins('afterUpdate', {
      mode
    });
    this._layers.sort(compare2Level('z', '_idx'));
    const {
      _active,
      _lastEvent
    } = this;
    if (_lastEvent) {
      this._eventHandler(_lastEvent, true);
    } else if (_active.length) {
      this._updateHoverStyles(_active, _active, true);
    }
    this.render();
  }
  _updateScales() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(this.scales, scale => {
      layouts.removeBox(this, scale);
    });
    this.ensureScalesHaveIDs();
    this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const options = this.options;
    const existingEvents = new Set(Object.keys(this._listeners));
    const newEvents = new Set(options.events);
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ag)(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
      this.unbindEvents();
      this.bindEvents();
    }
  }
  _updateHiddenIndices() {
    const {
      _hiddenIndices
    } = this;
    const changes = this._getUniformDataChanges() || [];
    for (const {
      method,
      start,
      count
    } of changes) {
      const move = method === '_removeElements' ? -count : count;
      moveNumericKeys(_hiddenIndices, start, move);
    }
  }
  _getUniformDataChanges() {
    const _dataChanges = this._dataChanges;
    if (!_dataChanges || !_dataChanges.length) {
      return;
    }
    this._dataChanges = [];
    const datasetCount = this.data.datasets.length;
    const makeSet = idx => new Set(_dataChanges.filter(c => c[0] === idx).map((c, i) => i + ',' + c.splice(1).join(',')));
    const changeSet = makeSet(0);
    for (let i = 1; i < datasetCount; i++) {
      if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ag)(changeSet, makeSet(i))) {
        return;
      }
    }
    return Array.from(changeSet).map(c => c.split(',')).map(a => ({
      method: a[1],
      start: +a[2],
      count: +a[3]
    }));
  }
  _updateLayout(minPadding) {
    if (this.notifyPlugins('beforeLayout', {
      cancelable: true
    }) === false) {
      return;
    }
    layouts.update(this, this.width, this.height, minPadding);
    const area = this.chartArea;
    const noArea = area.width <= 0 || area.height <= 0;
    this._layers = [];
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(this.boxes, box => {
      if (noArea && box.position === 'chartArea') {
        return;
      }
      if (box.configure) {
        box.configure();
      }
      this._layers.push(...box._layers());
    }, this);
    this._layers.forEach((item, index) => {
      item._idx = index;
    });
    this.notifyPlugins('afterLayout');
  }
  _updateDatasets(mode) {
    if (this.notifyPlugins('beforeDatasetsUpdate', {
      mode,
      cancelable: true
    }) === false) {
      return;
    }
    for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this.getDatasetMeta(i).controller.configure();
    }
    for (let i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this._updateDataset(i, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a7)(mode) ? mode({
        datasetIndex: i
      }) : mode);
    }
    this.notifyPlugins('afterDatasetsUpdate', {
      mode
    });
  }
  _updateDataset(index, mode) {
    const meta = this.getDatasetMeta(index);
    const args = {
      meta,
      index,
      mode,
      cancelable: true
    };
    if (this.notifyPlugins('beforeDatasetUpdate', args) === false) {
      return;
    }
    meta.controller._update(mode);
    args.cancelable = false;
    this.notifyPlugins('afterDatasetUpdate', args);
  }
  render() {
    if (this.notifyPlugins('beforeRender', {
      cancelable: true
    }) === false) {
      return;
    }
    if (animator.has(this)) {
      if (this.attached && !animator.running(this)) {
        animator.start(this);
      }
    } else {
      this.draw();
      onAnimationsComplete({
        chart: this
      });
    }
  }
  draw() {
    let i;
    if (this._resizeBeforeDraw) {
      const {
        width,
        height
      } = this._resizeBeforeDraw;
      this._resize(width, height);
      this._resizeBeforeDraw = null;
    }
    this.clear();
    if (this.width <= 0 || this.height <= 0) {
      return;
    }
    if (this.notifyPlugins('beforeDraw', {
      cancelable: true
    }) === false) {
      return;
    }
    const layers = this._layers;
    for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
      layers[i].draw(this.chartArea);
    }
    this._drawDatasets();
    for (; i < layers.length; ++i) {
      layers[i].draw(this.chartArea);
    }
    this.notifyPlugins('afterDraw');
  }
  _getSortedDatasetMetas(filterVisible) {
    const metasets = this._sortedMetasets;
    const result = [];
    let i, ilen;
    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      const meta = metasets[i];
      if (!filterVisible || meta.visible) {
        result.push(meta);
      }
    }
    return result;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(true);
  }
  _drawDatasets() {
    if (this.notifyPlugins('beforeDatasetsDraw', {
      cancelable: true
    }) === false) {
      return;
    }
    const metasets = this.getSortedVisibleDatasetMetas();
    for (let i = metasets.length - 1; i >= 0; --i) {
      this._drawDataset(metasets[i]);
    }
    this.notifyPlugins('afterDatasetsDraw');
  }
  _drawDataset(meta) {
    const ctx = this.ctx;
    const clip = meta._clip;
    const useClip = !clip.disabled;
    const area = getDatasetArea(meta, this.chartArea);
    const args = {
      meta,
      index: meta.index,
      cancelable: true
    };
    if (this.notifyPlugins('beforeDatasetDraw', args) === false) {
      return;
    }
    if (useClip) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Y)(ctx, {
        left: clip.left === false ? 0 : area.left - clip.left,
        right: clip.right === false ? this.width : area.right + clip.right,
        top: clip.top === false ? 0 : area.top - clip.top,
        bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
      });
    }
    meta.controller.draw();
    if (useClip) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.$)(ctx);
    }
    args.cancelable = false;
    this.notifyPlugins('afterDatasetDraw', args);
  }
  isPointInArea(point) {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(point, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(e, mode, options, useFinalPosition) {
    const method = Interaction.modes[mode];
    if (typeof method === 'function') {
      return method(this, e, options, useFinalPosition);
    }
    return [];
  }
  getDatasetMeta(datasetIndex) {
    const dataset = this.data.datasets[datasetIndex];
    const metasets = this._metasets;
    let meta = metasets.filter(x => x && x._dataset === dataset).pop();
    if (!meta) {
      meta = {
        type: null,
        data: [],
        dataset: null,
        controller: null,
        hidden: null,
        xAxisID: null,
        yAxisID: null,
        order: dataset && dataset.order || 0,
        index: datasetIndex,
        _dataset: dataset,
        _parsed: [],
        _sorted: false
      };
      metasets.push(meta);
    }
    return meta;
  }
  getContext() {
    return this.$context || (this.$context = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j)(null, {
      chart: this,
      type: 'chart'
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(datasetIndex) {
    const dataset = this.data.datasets[datasetIndex];
    if (!dataset) {
      return false;
    }
    const meta = this.getDatasetMeta(datasetIndex);
    return typeof meta.hidden === 'boolean' ? !meta.hidden : !dataset.hidden;
  }
  setDatasetVisibility(datasetIndex, visible) {
    const meta = this.getDatasetMeta(datasetIndex);
    meta.hidden = !visible;
  }
  toggleDataVisibility(index) {
    this._hiddenIndices[index] = !this._hiddenIndices[index];
  }
  getDataVisibility(index) {
    return !this._hiddenIndices[index];
  }
  _updateVisibility(datasetIndex, dataIndex, visible) {
    const mode = visible ? 'show' : 'hide';
    const meta = this.getDatasetMeta(datasetIndex);
    const anims = meta.controller._resolveAnimations(undefined, mode);
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.h)(dataIndex)) {
      meta.data[dataIndex].hidden = !visible;
      this.update();
    } else {
      this.setDatasetVisibility(datasetIndex, visible);
      anims.update(meta, {
        visible
      });
      this.update(ctx => ctx.datasetIndex === datasetIndex ? mode : undefined);
    }
  }
  hide(datasetIndex, dataIndex) {
    this._updateVisibility(datasetIndex, dataIndex, false);
  }
  show(datasetIndex, dataIndex) {
    this._updateVisibility(datasetIndex, dataIndex, true);
  }
  _destroyDatasetMeta(datasetIndex) {
    const meta = this._metasets[datasetIndex];
    if (meta && meta.controller) {
      meta.controller._destroy();
    }
    delete this._metasets[datasetIndex];
  }
  _stop() {
    let i, ilen;
    this.stop();
    animator.remove(this);
    for (i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
      this._destroyDatasetMeta(i);
    }
  }
  destroy() {
    this.notifyPlugins('beforeDestroy');
    const {
      canvas,
      ctx
    } = this;
    this._stop();
    this.config.clearCache();
    if (canvas) {
      this.unbindEvents();
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.af)(canvas, ctx);
      this.platform.releaseContext(ctx);
      this.canvas = null;
      this.ctx = null;
    }
    delete instances[this.id];
    this.notifyPlugins('afterDestroy');
  }
  toBase64Image(...args) {
    return this.canvas.toDataURL(...args);
  }
  bindEvents() {
    this.bindUserEvents();
    if (this.options.responsive) {
      this.bindResponsiveEvents();
    } else {
      this.attached = true;
    }
  }
  bindUserEvents() {
    const listeners = this._listeners;
    const platform = this.platform;
    const _add = (type, listener) => {
      platform.addEventListener(this, type, listener);
      listeners[type] = listener;
    };
    const listener = (e, x, y) => {
      e.offsetX = x;
      e.offsetY = y;
      this._eventHandler(e);
    };
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(this.options.events, type => _add(type, listener));
  }
  bindResponsiveEvents() {
    if (!this._responsiveListeners) {
      this._responsiveListeners = {};
    }
    const listeners = this._responsiveListeners;
    const platform = this.platform;
    const _add = (type, listener) => {
      platform.addEventListener(this, type, listener);
      listeners[type] = listener;
    };
    const _remove = (type, listener) => {
      if (listeners[type]) {
        platform.removeEventListener(this, type, listener);
        delete listeners[type];
      }
    };
    const listener = (width, height) => {
      if (this.canvas) {
        this.resize(width, height);
      }
    };
    let detached;
    const attached = () => {
      _remove('attach', attached);
      this.attached = true;
      this.resize();
      _add('resize', listener);
      _add('detach', detached);
    };
    detached = () => {
      this.attached = false;
      _remove('resize', listener);
      this._stop();
      this._resize(0, 0);
      _add('attach', attached);
    };
    if (platform.isAttached(this.canvas)) {
      attached();
    } else {
      detached();
    }
  }
  unbindEvents() {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(this._listeners, (listener, type) => {
      this.platform.removeEventListener(this, type, listener);
    });
    this._listeners = {};
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(this._responsiveListeners, (listener, type) => {
      this.platform.removeEventListener(this, type, listener);
    });
    this._responsiveListeners = undefined;
  }
  updateHoverStyle(items, mode, enabled) {
    const prefix = enabled ? 'set' : 'remove';
    let meta, item, i, ilen;
    if (mode === 'dataset') {
      meta = this.getDatasetMeta(items[0].datasetIndex);
      meta.controller['_' + prefix + 'DatasetHoverStyle']();
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];
      const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
      if (controller) {
        controller[prefix + 'HoverStyle'](item.element, item.datasetIndex, item.index);
      }
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(activeElements) {
    const lastActive = this._active || [];
    const active = activeElements.map(({
      datasetIndex,
      index
    }) => {
      const meta = this.getDatasetMeta(datasetIndex);
      if (!meta) {
        throw new Error('No dataset found at index ' + datasetIndex);
      }
      return {
        datasetIndex,
        element: meta.data[index],
        index
      };
    });
    const changed = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah)(active, lastActive);
    if (changed) {
      this._active = active;
      this._lastEvent = null;
      this._updateHoverStyles(active, lastActive);
    }
  }
  notifyPlugins(hook, args, filter) {
    return this._plugins.notify(this, hook, args, filter);
  }
  isPluginEnabled(pluginId) {
    return this._plugins._cache.filter(p => p.plugin.id === pluginId).length === 1;
  }
  _updateHoverStyles(active, lastActive, replay) {
    const hoverOptions = this.options.hover;
    const diff = (a, b) => a.filter(x => !b.some(y => x.datasetIndex === y.datasetIndex && x.index === y.index));
    const deactivated = diff(lastActive, active);
    const activated = replay ? active : diff(active, lastActive);
    if (deactivated.length) {
      this.updateHoverStyle(deactivated, hoverOptions.mode, false);
    }
    if (activated.length && hoverOptions.mode) {
      this.updateHoverStyle(activated, hoverOptions.mode, true);
    }
  }
  _eventHandler(e, replay) {
    const args = {
      event: e,
      replay,
      cancelable: true,
      inChartArea: this.isPointInArea(e)
    };
    const eventFilter = plugin => (plugin.options.events || this.options.events).includes(e.native.type);
    if (this.notifyPlugins('beforeEvent', args, eventFilter) === false) {
      return;
    }
    const changed = this._handleEvent(e, replay, args.inChartArea);
    args.cancelable = false;
    this.notifyPlugins('afterEvent', args, eventFilter);
    if (changed || args.changed) {
      this.render();
    }
    return this;
  }
  _handleEvent(e, replay, inChartArea) {
    const {
      _active: lastActive = [],
      options
    } = this;
    const useFinalPosition = replay;
    const active = this._getActiveElements(e, lastActive, inChartArea, useFinalPosition);
    const isClick = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ai)(e);
    const lastEvent = determineLastEvent(e, this._lastEvent, inChartArea, isClick);
    if (inChartArea) {
      this._lastEvent = null;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(options.onHover, [e, active, this], this);
      if (isClick) {
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(options.onClick, [e, active, this], this);
      }
    }
    const changed = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah)(active, lastActive);
    if (changed || replay) {
      this._active = active;
      this._updateHoverStyles(active, lastActive, replay);
    }
    this._lastEvent = lastEvent;
    return changed;
  }
  _getActiveElements(e, lastActive, inChartArea, useFinalPosition) {
    if (e.type === 'mouseout') {
      return [];
    }
    if (!inChartArea) {
      return lastActive;
    }
    const hoverOptions = this.options.hover;
    return this.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions, useFinalPosition);
  }
}
function invalidatePlugins() {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(Chart.instances, chart => chart._plugins.invalidate());
}
function clipArc(ctx, element, endAngle) {
  const {
    startAngle,
    pixelMargin,
    x,
    y,
    outerRadius,
    innerRadius
  } = element;
  let angleMargin = pixelMargin / outerRadius;
  // Draw an inner border by clipping the arc and drawing a double-width border
  // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
  ctx.beginPath();
  ctx.arc(x, y, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
  if (innerRadius > pixelMargin) {
    angleMargin = pixelMargin / innerRadius;
    ctx.arc(x, y, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
  } else {
    ctx.arc(x, y, pixelMargin, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H, startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H);
  }
  ctx.closePath();
  ctx.clip();
}
function toRadiusCorners(value) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ak)(value, ['outerStart', 'outerEnd', 'innerStart', 'innerEnd']);
}
/**
 * Parse border radius from the provided options
 */
function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
  const o = toRadiusCorners(arc.options.borderRadius);
  const halfThickness = (outerRadius - innerRadius) / 2;
  const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
  // Outer limits are complicated. We want to compute the available angular distance at
  // a radius of outerRadius - borderRadius because for small angular distances, this term limits.
  // We compute at r = outerRadius - borderRadius because this circle defines the center of the border corners.
  //
  // If the borderRadius is large, that value can become negative.
  // This causes the outer borders to lose their radius entirely, which is rather unexpected. To solve that, if borderRadius > outerRadius
  // we know that the thickness term will dominate and compute the limits at that point
  const computeOuterLimit = val => {
    const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(val, 0, Math.min(halfThickness, outerArcLimit));
  };
  return {
    outerStart: computeOuterLimit(o.outerStart),
    outerEnd: computeOuterLimit(o.outerEnd),
    innerStart: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(o.innerStart, 0, innerLimit),
    innerEnd: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(o.innerEnd, 0, innerLimit)
  };
}
/**
 * Convert (r, 𝜃) to (x, y)
 */
function rThetaToXY(r, theta, x, y) {
  return {
    x: x + r * Math.cos(theta),
    y: y + r * Math.sin(theta)
  };
}
/**
 * Path the arc, respecting border radius by separating into left and right halves.
 *
 *   Start      End
 *
 *    1--->a--->2    Outer
 *   /           \
 *   8           3
 *   |           |
 *   |           |
 *   7           4
 *   \           /
 *    6<---b<---5    Inner
 */
function pathArc(ctx, element, offset, spacing, end, circular) {
  const {
    x,
    y,
    startAngle: start,
    pixelMargin,
    innerRadius: innerR
  } = element;
  const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
  const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
  let spacingOffset = 0;
  const alpha = end - start;
  if (spacing) {
    // When spacing is present, it is the same for all items
    // So we adjust the start and end angle of the arc such that
    // the distance is the same as it would be without the spacing
    const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
    const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
    const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
    const adjustedAngle = avNogSpacingRadius !== 0 ? alpha * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha;
    spacingOffset = (alpha - adjustedAngle) / 2;
  }
  const beta = Math.max(0.001, alpha * outerRadius - offset / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P) / outerRadius;
  const angleOffset = (alpha - beta) / 2;
  const startAngle = start + angleOffset + spacingOffset;
  const endAngle = end - angleOffset - spacingOffset;
  const {
    outerStart,
    outerEnd,
    innerStart,
    innerEnd
  } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
  const outerStartAdjustedRadius = outerRadius - outerStart;
  const outerEndAdjustedRadius = outerRadius - outerEnd;
  const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
  const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
  const innerStartAdjustedRadius = innerRadius + innerStart;
  const innerEndAdjustedRadius = innerRadius + innerEnd;
  const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
  const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
  ctx.beginPath();
  if (circular) {
    // The first arc segments from point 1 to point a to point 2
    const outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
    ctx.arc(x, y, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
    ctx.arc(x, y, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
    // The corner segment from point 2 to point 3
    if (outerEnd > 0) {
      const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H);
    }
    // The line from point 3 to point 4
    const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x, y);
    ctx.lineTo(p4.x, p4.y);
    // The corner segment from point 4 to point 5
    if (innerEnd > 0) {
      const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H, innerEndAdjustedAngle + Math.PI);
    }
    // The inner arc from point 5 to point b to point 6
    const innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
    ctx.arc(x, y, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
    ctx.arc(x, y, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
    // The corner segment from point 6 to point 7
    if (innerStart > 0) {
      const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H);
    }
    // The line from point 7 to point 8
    const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x, y);
    ctx.lineTo(p8.x, p8.y);
    // The corner segment from point 8 to point 1
    if (outerStart > 0) {
      const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x, y);
      ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H, outerStartAdjustedAngle);
    }
  } else {
    ctx.moveTo(x, y);
    const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x;
    const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y;
    ctx.lineTo(outerStartX, outerStartY);
    const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x;
    const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y;
    ctx.lineTo(outerEndX, outerEndY);
  }
  ctx.closePath();
}
function drawArc(ctx, element, offset, spacing, circular) {
  const {
    fullCircles,
    startAngle,
    circumference
  } = element;
  let endAngle = element.endAngle;
  if (fullCircles) {
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    for (let i = 0; i < fullCircles; ++i) {
      ctx.fill();
    }
    if (!isNaN(circumference)) {
      endAngle = startAngle + (circumference % _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T || _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T);
    }
  }
  pathArc(ctx, element, offset, spacing, endAngle, circular);
  ctx.fill();
  return endAngle;
}
function drawBorder(ctx, element, offset, spacing, circular) {
  const {
    fullCircles,
    startAngle,
    circumference,
    options
  } = element;
  const {
    borderWidth,
    borderJoinStyle,
    borderDash,
    borderDashOffset
  } = options;
  const inner = options.borderAlign === 'inner';
  if (!borderWidth) {
    return;
  }
  ctx.setLineDash(borderDash || []);
  ctx.lineDashOffset = borderDashOffset;
  if (inner) {
    ctx.lineWidth = borderWidth * 2;
    ctx.lineJoin = borderJoinStyle || 'round';
  } else {
    ctx.lineWidth = borderWidth;
    ctx.lineJoin = borderJoinStyle || 'bevel';
  }
  let endAngle = element.endAngle;
  if (fullCircles) {
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    for (let i = 0; i < fullCircles; ++i) {
      ctx.stroke();
    }
    if (!isNaN(circumference)) {
      endAngle = startAngle + (circumference % _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T || _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T);
    }
  }
  if (inner) {
    clipArc(ctx, element, endAngle);
  }
  if (!fullCircles) {
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.stroke();
  }
}
class ArcElement extends Element {
  static id = 'arc';
  static defaults = {
    borderAlign: 'center',
    borderColor: '#fff',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: undefined,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: undefined,
    circular: true
  };
  static defaultRoutes = {
    backgroundColor: 'backgroundColor'
  };
  static descriptors = {
    _scriptable: true,
    _indexable: name => name !== 'borderDash'
  };
  circumference;
  endAngle;
  fullCircles;
  innerRadius;
  outerRadius;
  pixelMargin;
  startAngle;
  constructor(cfg) {
    super();
    this.options = undefined;
    this.circumference = undefined;
    this.startAngle = undefined;
    this.endAngle = undefined;
    this.innerRadius = undefined;
    this.outerRadius = undefined;
    this.pixelMargin = 0;
    this.fullCircles = 0;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  inRange(chartX, chartY, useFinalPosition) {
    const point = this.getProps(['x', 'y'], useFinalPosition);
    const {
      angle,
      distance
    } = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.D)(point, {
      x: chartX,
      y: chartY
    });
    const {
      startAngle,
      endAngle,
      innerRadius,
      outerRadius,
      circumference
    } = this.getProps(['startAngle', 'endAngle', 'innerRadius', 'outerRadius', 'circumference'], useFinalPosition);
    const rAdjust = (this.options.spacing + this.options.borderWidth) / 2;
    const _circumference = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(circumference, endAngle - startAngle);
    const betweenAngles = _circumference >= _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.p)(angle, startAngle, endAngle);
    const withinRadius = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aj)(distance, innerRadius + rAdjust, outerRadius + rAdjust);
    return betweenAngles && withinRadius;
  }
  getCenterPoint(useFinalPosition) {
    const {
      x,
      y,
      startAngle,
      endAngle,
      innerRadius,
      outerRadius
    } = this.getProps(['x', 'y', 'startAngle', 'endAngle', 'innerRadius', 'outerRadius'], useFinalPosition);
    const {
      offset,
      spacing
    } = this.options;
    const halfAngle = (startAngle + endAngle) / 2;
    const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
    return {
      x: x + Math.cos(halfAngle) * halfRadius,
      y: y + Math.sin(halfAngle) * halfRadius
    };
  }
  tooltipPosition(useFinalPosition) {
    return this.getCenterPoint(useFinalPosition);
  }
  draw(ctx) {
    const {
      options,
      circumference
    } = this;
    const offset = (options.offset || 0) / 4;
    const spacing = (options.spacing || 0) / 2;
    const circular = options.circular;
    this.pixelMargin = options.borderAlign === 'inner' ? 0.33 : 0;
    this.fullCircles = circumference > _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T ? Math.floor(circumference / _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T) : 0;
    if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
      return;
    }
    ctx.save();
    const halfAngle = (this.startAngle + this.endAngle) / 2;
    ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
    const fix = 1 - Math.sin(Math.min(_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P, circumference || 0));
    const radiusOffset = offset * fix;
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    drawArc(ctx, this, radiusOffset, spacing, circular);
    drawBorder(ctx, this, radiusOffset, spacing, circular);
    ctx.restore();
  }
}
function setStyle(ctx, options, style = options) {
  ctx.lineCap = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderCapStyle, options.borderCapStyle);
  ctx.setLineDash((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderDash, options.borderDash));
  ctx.lineDashOffset = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderDashOffset, options.borderDashOffset);
  ctx.lineJoin = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderJoinStyle, options.borderJoinStyle);
  ctx.lineWidth = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderWidth, options.borderWidth);
  ctx.strokeStyle = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(style.borderColor, options.borderColor);
}
function lineTo(ctx, previous, target) {
  ctx.lineTo(target.x, target.y);
}
function getLineMethod(options) {
  if (options.stepped) {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ar;
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.as;
  }
  return lineTo;
}
function pathVars(points, segment, params = {}) {
  const count = points.length;
  const {
    start: paramsStart = 0,
    end: paramsEnd = count - 1
  } = params;
  const {
    start: segmentStart,
    end: segmentEnd
  } = segment;
  const start = Math.max(paramsStart, segmentStart);
  const end = Math.min(paramsEnd, segmentEnd);
  const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
  return {
    count,
    start,
    loop: segment.loop,
    ilen: end < start && !outside ? count + end - start : end - start
  };
}
function pathSegment(ctx, line, segment, params) {
  const {
    points,
    options
  } = line;
  const {
    count,
    start,
    loop,
    ilen
  } = pathVars(points, segment, params);
  const lineMethod = getLineMethod(options);
  let {
    move = true,
    reverse
  } = params || {};
  let i, point, prev;
  for (i = 0; i <= ilen; ++i) {
    point = points[(start + (reverse ? ilen - i : i)) % count];
    if (point.skip) {
      continue;
    } else if (move) {
      ctx.moveTo(point.x, point.y);
      move = false;
    } else {
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    prev = point;
  }
  if (loop) {
    point = points[(start + (reverse ? ilen : 0)) % count];
    lineMethod(ctx, prev, point, reverse, options.stepped);
  }
  return !!loop;
}
function fastPathSegment(ctx, line, segment, params) {
  const points = line.points;
  const {
    count,
    start,
    ilen
  } = pathVars(points, segment, params);
  const {
    move = true,
    reverse
  } = params || {};
  let avgX = 0;
  let countX = 0;
  let i, point, prevX, minY, maxY, lastY;
  const pointIndex = index => (start + (reverse ? ilen - index : index)) % count;
  const drawX = () => {
    if (minY !== maxY) {
      ctx.lineTo(avgX, maxY);
      ctx.lineTo(avgX, minY);
      ctx.lineTo(avgX, lastY);
    }
  };
  if (move) {
    point = points[pointIndex(0)];
    ctx.moveTo(point.x, point.y);
  }
  for (i = 0; i <= ilen; ++i) {
    point = points[pointIndex(i)];
    if (point.skip) {
      continue;
    }
    const x = point.x;
    const y = point.y;
    const truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
      } else if (y > maxY) {
        maxY = y;
      }
      avgX = (countX * avgX + x) / ++countX;
    } else {
      drawX();
      ctx.lineTo(x, y);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
    }
    lastY = y;
  }
  drawX();
}
function _getSegmentMethod(line) {
  const opts = line.options;
  const borderDash = opts.borderDash && opts.borderDash.length;
  const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== 'monotone' && !opts.stepped && !borderDash;
  return useFastPath ? fastPathSegment : pathSegment;
}
function _getInterpolationMethod(options) {
  if (options.stepped) {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ao;
  }
  if (options.tension || options.cubicInterpolationMode === 'monotone') {
    return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ap;
  }
  return _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aq;
}
function strokePathWithCache(ctx, line, start, count) {
  let path = line._path;
  if (!path) {
    path = line._path = new Path2D();
    if (line.path(path, start, count)) {
      path.closePath();
    }
  }
  setStyle(ctx, line.options);
  ctx.stroke(path);
}
function strokePathDirect(ctx, line, start, count) {
  const {
    segments,
    options
  } = line;
  const segmentMethod = _getSegmentMethod(line);
  for (const segment of segments) {
    setStyle(ctx, options, segment.style);
    ctx.beginPath();
    if (segmentMethod(ctx, line, segment, {
      start,
      end: start + count - 1
    })) {
      ctx.closePath();
    }
    ctx.stroke();
  }
}
const usePath2D = typeof Path2D === 'function';
function draw(ctx, line, start, count) {
  if (usePath2D && !line.options.segment) {
    strokePathWithCache(ctx, line, start, count);
  } else {
    strokePathDirect(ctx, line, start, count);
  }
}
class LineElement extends Element {
  static id = 'line';
  static defaults = {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: true,
    cubicInterpolationMode: 'default',
    fill: false,
    spanGaps: false,
    stepped: false,
    tension: 0
  };
  static defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor'
  };
  static descriptors = {
    _scriptable: true,
    _indexable: name => name !== 'borderDash' && name !== 'fill'
  };
  constructor(cfg) {
    super();
    this.animated = true;
    this.options = undefined;
    this._chart = undefined;
    this._loop = undefined;
    this._fullLoop = undefined;
    this._path = undefined;
    this._points = undefined;
    this._segments = undefined;
    this._decimated = false;
    this._pointsUpdated = false;
    this._datasetIndex = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  updateControlPoints(chartArea, indexAxis) {
    const options = this.options;
    if ((options.tension || options.cubicInterpolationMode === 'monotone') && !options.stepped && !this._pointsUpdated) {
      const loop = options.spanGaps ? this._loop : this._fullLoop;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.al)(this._points, options, chartArea, loop, indexAxis);
      this._pointsUpdated = true;
    }
  }
  set points(points) {
    this._points = points;
    delete this._segments;
    delete this._path;
    this._pointsUpdated = false;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.am)(this, this.options.segment));
  }
  first() {
    const segments = this.segments;
    const points = this.points;
    return segments.length && points[segments[0].start];
  }
  last() {
    const segments = this.segments;
    const points = this.points;
    const count = segments.length;
    return count && points[segments[count - 1].end];
  }
  interpolate(point, property) {
    const options = this.options;
    const value = point[property];
    const points = this.points;
    const segments = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.an)(this, {
      property,
      start: value,
      end: value
    });
    if (!segments.length) {
      return;
    }
    const result = [];
    const _interpolate = _getInterpolationMethod(options);
    let i, ilen;
    for (i = 0, ilen = segments.length; i < ilen; ++i) {
      const {
        start,
        end
      } = segments[i];
      const p1 = points[start];
      const p2 = points[end];
      if (p1 === p2) {
        result.push(p1);
        continue;
      }
      const t = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
      const interpolated = _interpolate(p1, p2, t, options.stepped);
      interpolated[property] = point[property];
      result.push(interpolated);
    }
    return result.length === 1 ? result[0] : result;
  }
  pathSegment(ctx, segment, params) {
    const segmentMethod = _getSegmentMethod(this);
    return segmentMethod(ctx, this, segment, params);
  }
  path(ctx, start, count) {
    const segments = this.segments;
    const segmentMethod = _getSegmentMethod(this);
    let loop = this._loop;
    start = start || 0;
    count = count || this.points.length - start;
    for (const segment of segments) {
      loop &= segmentMethod(ctx, this, segment, {
        start,
        end: start + count - 1
      });
    }
    return !!loop;
  }
  draw(ctx, chartArea, start, count) {
    const options = this.options || {};
    const points = this.points || [];
    if (points.length && options.borderWidth) {
      ctx.save();
      draw(ctx, this, start, count);
      ctx.restore();
    }
    if (this.animated) {
      this._pointsUpdated = false;
      this._path = undefined;
    }
  }
}
function inRange$1(el, pos, axis, useFinalPosition) {
  const options = el.options;
  const {
    [axis]: value
  } = el.getProps([axis], useFinalPosition);
  return Math.abs(pos - value) < options.radius + options.hitRadius;
}
class PointElement extends Element {
  static id = 'point';
  parsed;
  skip;
  stop;
  /**
  * @type {any}
  */
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0
  };
  /**
  * @type {any}
  */
  static defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor'
  };
  constructor(cfg) {
    super();
    this.options = undefined;
    this.parsed = undefined;
    this.skip = undefined;
    this.stop = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  inRange(mouseX, mouseY, useFinalPosition) {
    const options = this.options;
    const {
      x,
      y
    } = this.getProps(['x', 'y'], useFinalPosition);
    return Math.pow(mouseX - x, 2) + Math.pow(mouseY - y, 2) < Math.pow(options.hitRadius + options.radius, 2);
  }
  inXRange(mouseX, useFinalPosition) {
    return inRange$1(this, mouseX, 'x', useFinalPosition);
  }
  inYRange(mouseY, useFinalPosition) {
    return inRange$1(this, mouseY, 'y', useFinalPosition);
  }
  getCenterPoint(useFinalPosition) {
    const {
      x,
      y
    } = this.getProps(['x', 'y'], useFinalPosition);
    return {
      x,
      y
    };
  }
  size(options) {
    options = options || this.options || {};
    let radius = options.radius || 0;
    radius = Math.max(radius, radius && options.hoverRadius || 0);
    const borderWidth = radius && options.borderWidth || 0;
    return (radius + borderWidth) * 2;
  }
  draw(ctx, area) {
    const options = this.options;
    if (this.skip || options.radius < 0.1 || !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)(this, area, this.size(options) / 2)) {
      return;
    }
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.fillStyle = options.backgroundColor;
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.at)(ctx, options, this.x, this.y);
  }
  getRange() {
    const options = this.options || {};
    // @ts-expect-error Fallbacks should never be hit in practice
    return options.radius + options.hitRadius;
  }
}
function getBarBounds(bar, useFinalPosition) {
  const {
    x,
    y,
    base,
    width,
    height
  } = bar.getProps(['x', 'y', 'base', 'width', 'height'], useFinalPosition);
  let left, right, top, bottom, half;
  if (bar.horizontal) {
    half = height / 2;
    left = Math.min(x, base);
    right = Math.max(x, base);
    top = y - half;
    bottom = y + half;
  } else {
    half = width / 2;
    left = x - half;
    right = x + half;
    top = Math.min(y, base);
    bottom = Math.max(y, base);
  }
  return {
    left,
    top,
    right,
    bottom
  };
}
function skipOrLimit(skip, value, min, max) {
  return skip ? 0 : (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(value, min, max);
}
function parseBorderWidth(bar, maxW, maxH) {
  const value = bar.options.borderWidth;
  const skip = bar.borderSkipped;
  const o = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.av)(value);
  return {
    t: skipOrLimit(skip.top, o.top, 0, maxH),
    r: skipOrLimit(skip.right, o.right, 0, maxW),
    b: skipOrLimit(skip.bottom, o.bottom, 0, maxH),
    l: skipOrLimit(skip.left, o.left, 0, maxW)
  };
}
function parseBorderRadius(bar, maxW, maxH) {
  const {
    enableBorderRadius
  } = bar.getProps(['enableBorderRadius']);
  const value = bar.options.borderRadius;
  const o = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw)(value);
  const maxR = Math.min(maxW, maxH);
  const skip = bar.borderSkipped;
  const enableBorder = enableBorderRadius || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(value);
  return {
    topLeft: skipOrLimit(!enableBorder || skip.top || skip.left, o.topLeft, 0, maxR),
    topRight: skipOrLimit(!enableBorder || skip.top || skip.right, o.topRight, 0, maxR),
    bottomLeft: skipOrLimit(!enableBorder || skip.bottom || skip.left, o.bottomLeft, 0, maxR),
    bottomRight: skipOrLimit(!enableBorder || skip.bottom || skip.right, o.bottomRight, 0, maxR)
  };
}
function boundingRects(bar) {
  const bounds = getBarBounds(bar);
  const width = bounds.right - bounds.left;
  const height = bounds.bottom - bounds.top;
  const border = parseBorderWidth(bar, width / 2, height / 2);
  const radius = parseBorderRadius(bar, width / 2, height / 2);
  return {
    outer: {
      x: bounds.left,
      y: bounds.top,
      w: width,
      h: height,
      radius
    },
    inner: {
      x: bounds.left + border.l,
      y: bounds.top + border.t,
      w: width - border.l - border.r,
      h: height - border.t - border.b,
      radius: {
        topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
        topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
        bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
        bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
      }
    }
  };
}
function inRange(bar, x, y, useFinalPosition) {
  const skipX = x === null;
  const skipY = y === null;
  const skipBoth = skipX && skipY;
  const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
  return bounds && (skipX || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aj)(x, bounds.left, bounds.right)) && (skipY || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aj)(y, bounds.top, bounds.bottom));
}
function hasRadius(radius) {
  return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
}
function addNormalRectPath(ctx, rect) {
  ctx.rect(rect.x, rect.y, rect.w, rect.h);
}
function inflateRect(rect, amount, refRect = {}) {
  const x = rect.x !== refRect.x ? -amount : 0;
  const y = rect.y !== refRect.y ? -amount : 0;
  const w = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x;
  const h = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y;
  return {
    x: rect.x + x,
    y: rect.y + y,
    w: rect.w + w,
    h: rect.h + h,
    radius: rect.radius
  };
}
class BarElement extends Element {
  static id = 'bar';
  static defaults = {
    borderSkipped: 'start',
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: 'auto',
    pointStyle: undefined
  };
  static defaultRoutes = {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor'
  };
  constructor(cfg) {
    super();
    this.options = undefined;
    this.horizontal = undefined;
    this.base = undefined;
    this.width = undefined;
    this.height = undefined;
    this.inflateAmount = undefined;
    if (cfg) {
      Object.assign(this, cfg);
    }
  }
  draw(ctx) {
    const {
      inflateAmount,
      options: {
        borderColor,
        backgroundColor
      }
    } = this;
    const {
      inner,
      outer
    } = boundingRects(this);
    const addRectPath = hasRadius(outer.radius) ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au : addNormalRectPath;
    ctx.save();
    if (outer.w !== inner.w || outer.h !== inner.h) {
      ctx.beginPath();
      addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
      ctx.clip();
      addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
      ctx.fillStyle = borderColor;
      ctx.fill('evenodd');
    }
    ctx.beginPath();
    addRectPath(ctx, inflateRect(inner, inflateAmount));
    ctx.fillStyle = backgroundColor;
    ctx.fill();
    ctx.restore();
  }
  inRange(mouseX, mouseY, useFinalPosition) {
    return inRange(this, mouseX, mouseY, useFinalPosition);
  }
  inXRange(mouseX, useFinalPosition) {
    return inRange(this, mouseX, null, useFinalPosition);
  }
  inYRange(mouseY, useFinalPosition) {
    return inRange(this, null, mouseY, useFinalPosition);
  }
  getCenterPoint(useFinalPosition) {
    const {
      x,
      y,
      base,
      horizontal
    } = this.getProps(['x', 'y', 'base', 'horizontal'], useFinalPosition);
    return {
      x: horizontal ? (x + base) / 2 : x,
      y: horizontal ? y : (y + base) / 2
    };
  }
  getRange(axis) {
    return axis === 'x' ? this.width / 2 : this.height / 2;
  }
}
var elements = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ArcElement: ArcElement,
  BarElement: BarElement,
  LineElement: LineElement,
  PointElement: PointElement
});
const BORDER_COLORS = ['rgb(54, 162, 235)', 'rgb(255, 99, 132)', 'rgb(255, 159, 64)', 'rgb(255, 205, 86)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)', 'rgb(201, 203, 207)' // grey
];
// Border colors with 50% transparency
const BACKGROUND_COLORS = /* #__PURE__ */BORDER_COLORS.map(color => color.replace('rgb(', 'rgba(').replace(')', ', 0.5)'));
function getBorderColor(i) {
  return BORDER_COLORS[i % BORDER_COLORS.length];
}
function getBackgroundColor(i) {
  return BACKGROUND_COLORS[i % BACKGROUND_COLORS.length];
}
function colorizeDefaultDataset(dataset, i) {
  dataset.borderColor = getBorderColor(i);
  dataset.backgroundColor = getBackgroundColor(i);
  return ++i;
}
function colorizeDoughnutDataset(dataset, i) {
  dataset.backgroundColor = dataset.data.map(() => getBorderColor(i++));
  return i;
}
function colorizePolarAreaDataset(dataset, i) {
  dataset.backgroundColor = dataset.data.map(() => getBackgroundColor(i++));
  return i;
}
function getColorizer(chart) {
  let i = 0;
  return (dataset, datasetIndex) => {
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    if (controller instanceof DoughnutController) {
      i = colorizeDoughnutDataset(dataset, i);
    } else if (controller instanceof PolarAreaController) {
      i = colorizePolarAreaDataset(dataset, i);
    } else if (controller) {
      i = colorizeDefaultDataset(dataset, i);
    }
  };
}
function containsColorsDefinitions(descriptors) {
  let k;
  for (k in descriptors) {
    if (descriptors[k].borderColor || descriptors[k].backgroundColor) {
      return true;
    }
  }
  return false;
}
function containsColorsDefinition(descriptor) {
  return descriptor && (descriptor.borderColor || descriptor.backgroundColor);
}
var plugin_colors = {
  id: 'colors',
  defaults: {
    enabled: true,
    forceOverride: false
  },
  beforeLayout(chart, _args, options) {
    if (!options.enabled) {
      return;
    }
    const {
      data: {
        datasets
      },
      options: chartOptions
    } = chart.config;
    const {
      elements
    } = chartOptions;
    if (!options.forceOverride && (containsColorsDefinitions(datasets) || containsColorsDefinition(chartOptions) || elements && containsColorsDefinitions(elements))) {
      return;
    }
    const colorizer = getColorizer(chart);
    datasets.forEach(colorizer);
  }
};
function lttbDecimation(data, start, count, availableWidth, options) {
  const samples = options.samples || availableWidth;
  if (samples >= count) {
    return data.slice(start, start + count);
  }
  const decimated = [];
  const bucketWidth = (count - 2) / (samples - 2);
  let sampledIndex = 0;
  const endIndex = start + count - 1;
  let a = start;
  let i, maxAreaPoint, maxArea, area, nextA;
  decimated[sampledIndex++] = data[a];
  for (i = 0; i < samples - 2; i++) {
    let avgX = 0;
    let avgY = 0;
    let j;
    const avgRangeStart = Math.floor((i + 1) * bucketWidth) + 1 + start;
    const avgRangeEnd = Math.min(Math.floor((i + 2) * bucketWidth) + 1, count) + start;
    const avgRangeLength = avgRangeEnd - avgRangeStart;
    for (j = avgRangeStart; j < avgRangeEnd; j++) {
      avgX += data[j].x;
      avgY += data[j].y;
    }
    avgX /= avgRangeLength;
    avgY /= avgRangeLength;
    const rangeOffs = Math.floor(i * bucketWidth) + 1 + start;
    const rangeTo = Math.min(Math.floor((i + 1) * bucketWidth) + 1, count) + start;
    const {
      x: pointAx,
      y: pointAy
    } = data[a];
    maxArea = area = -1;
    for (j = rangeOffs; j < rangeTo; j++) {
      area = 0.5 * Math.abs((pointAx - avgX) * (data[j].y - pointAy) - (pointAx - data[j].x) * (avgY - pointAy));
      if (area > maxArea) {
        maxArea = area;
        maxAreaPoint = data[j];
        nextA = j;
      }
    }
    decimated[sampledIndex++] = maxAreaPoint;
    a = nextA;
  }
  decimated[sampledIndex++] = data[endIndex];
  return decimated;
}
function minMaxDecimation(data, start, count, availableWidth) {
  let avgX = 0;
  let countX = 0;
  let i, point, x, y, prevX, minIndex, maxIndex, startIndex, minY, maxY;
  const decimated = [];
  const endIndex = start + count - 1;
  const xMin = data[start].x;
  const xMax = data[endIndex].x;
  const dx = xMax - xMin;
  for (i = start; i < start + count; ++i) {
    point = data[i];
    x = (point.x - xMin) / dx * availableWidth;
    y = point.y;
    const truncX = x | 0;
    if (truncX === prevX) {
      if (y < minY) {
        minY = y;
        minIndex = i;
      } else if (y > maxY) {
        maxY = y;
        maxIndex = i;
      }
      avgX = (countX * avgX + point.x) / ++countX;
    } else {
      const lastIndex = i - 1;
      if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(minIndex) && !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(maxIndex)) {
        const intermediateIndex1 = Math.min(minIndex, maxIndex);
        const intermediateIndex2 = Math.max(minIndex, maxIndex);
        if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
          decimated.push({
            ...data[intermediateIndex1],
            x: avgX
          });
        }
        if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
          decimated.push({
            ...data[intermediateIndex2],
            x: avgX
          });
        }
      }
      if (i > 0 && lastIndex !== startIndex) {
        decimated.push(data[lastIndex]);
      }
      decimated.push(point);
      prevX = truncX;
      countX = 0;
      minY = maxY = y;
      minIndex = maxIndex = startIndex = i;
    }
  }
  return decimated;
}
function cleanDecimatedDataset(dataset) {
  if (dataset._decimated) {
    const data = dataset._data;
    delete dataset._decimated;
    delete dataset._data;
    Object.defineProperty(dataset, 'data', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: data
    });
  }
}
function cleanDecimatedData(chart) {
  chart.data.datasets.forEach(dataset => {
    cleanDecimatedDataset(dataset);
  });
}
function getStartAndCountOfVisiblePointsSimplified(meta, points) {
  const pointCount = points.length;
  let start = 0;
  let count;
  const {
    iScale
  } = meta;
  const {
    min,
    max,
    minDefined,
    maxDefined
  } = iScale.getUserBounds();
  if (minDefined) {
    start = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.B)(points, iScale.axis, min).lo, 0, pointCount - 1);
  }
  if (maxDefined) {
    count = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.B)(points, iScale.axis, max).hi + 1, start, pointCount) - start;
  } else {
    count = pointCount - start;
  }
  return {
    start,
    count
  };
}
var plugin_decimation = {
  id: 'decimation',
  defaults: {
    algorithm: 'min-max',
    enabled: false
  },
  beforeElementsUpdate: (chart, args, options) => {
    if (!options.enabled) {
      cleanDecimatedData(chart);
      return;
    }
    const availableWidth = chart.width;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const {
        _data,
        indexAxis
      } = dataset;
      const meta = chart.getDatasetMeta(datasetIndex);
      const data = _data || dataset.data;
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a)([indexAxis, chart.options.indexAxis]) === 'y') {
        return;
      }
      if (!meta.controller.supportsDecimation) {
        return;
      }
      const xAxis = chart.scales[meta.xAxisID];
      if (xAxis.type !== 'linear' && xAxis.type !== 'time') {
        return;
      }
      if (chart.options.parsing) {
        return;
      }
      let {
        start,
        count
      } = getStartAndCountOfVisiblePointsSimplified(meta, data);
      const threshold = options.threshold || 4 * availableWidth;
      if (count <= threshold) {
        cleanDecimatedDataset(dataset);
        return;
      }
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(_data)) {
        dataset._data = data;
        delete dataset.data;
        Object.defineProperty(dataset, 'data', {
          configurable: true,
          enumerable: true,
          get: function () {
            return this._decimated;
          },
          set: function (d) {
            this._data = d;
          }
        });
      }
      let decimated;
      switch (options.algorithm) {
        case 'lttb':
          decimated = lttbDecimation(data, start, count, availableWidth, options);
          break;
        case 'min-max':
          decimated = minMaxDecimation(data, start, count, availableWidth);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
      }
      dataset._decimated = decimated;
    });
  },
  destroy(chart) {
    cleanDecimatedData(chart);
  }
};
function _segments(line, target, property) {
  const segments = line.segments;
  const points = line.points;
  const tpoints = target.points;
  const parts = [];
  for (const segment of segments) {
    let {
      start,
      end
    } = segment;
    end = _findSegmentEnd(start, end, points);
    const bounds = _getBounds(property, points[start], points[end], segment.loop);
    if (!target.segments) {
      parts.push({
        source: segment,
        target: bounds,
        start: points[start],
        end: points[end]
      });
      continue;
    }
    const targetSegments = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.an)(target, bounds);
    for (const tgt of targetSegments) {
      const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
      const fillSources = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ax)(segment, points, subBounds);
      for (const fillSource of fillSources) {
        parts.push({
          source: fillSource,
          target: tgt,
          start: {
            [property]: _getEdge(bounds, subBounds, 'start', Math.max)
          },
          end: {
            [property]: _getEdge(bounds, subBounds, 'end', Math.min)
          }
        });
      }
    }
  }
  return parts;
}
function _getBounds(property, first, last, loop) {
  if (loop) {
    return;
  }
  let start = first[property];
  let end = last[property];
  if (property === 'angle') {
    start = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ay)(start);
    end = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ay)(end);
  }
  return {
    property,
    start,
    end
  };
}
function _pointsFromSegments(boundary, line) {
  const {
    x = null,
    y = null
  } = boundary || {};
  const linePoints = line.points;
  const points = [];
  line.segments.forEach(({
    start,
    end
  }) => {
    end = _findSegmentEnd(start, end, linePoints);
    const first = linePoints[start];
    const last = linePoints[end];
    if (y !== null) {
      points.push({
        x: first.x,
        y
      });
      points.push({
        x: last.x,
        y
      });
    } else if (x !== null) {
      points.push({
        x,
        y: first.y
      });
      points.push({
        x,
        y: last.y
      });
    }
  });
  return points;
}
function _findSegmentEnd(start, end, points) {
  for (; end > start; end--) {
    const point = points[end];
    if (!isNaN(point.x) && !isNaN(point.y)) {
      break;
    }
  }
  return end;
}
function _getEdge(a, b, prop, fn) {
  if (a && b) {
    return fn(a[prop], b[prop]);
  }
  return a ? a[prop] : b ? b[prop] : 0;
}
function _createBoundaryLine(boundary, line) {
  let points = [];
  let _loop = false;
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(boundary)) {
    _loop = true;
    points = boundary;
  } else {
    points = _pointsFromSegments(boundary, line);
  }
  return points.length ? new LineElement({
    points,
    options: {
      tension: 0
    },
    _loop,
    _fullLoop: _loop
  }) : null;
}
function _shouldApplyFill(source) {
  return source && source.fill !== false;
}
function _resolveTarget(sources, index, propagate) {
  const source = sources[index];
  let fill = source.fill;
  const visited = [index];
  let target;
  if (!propagate) {
    return fill;
  }
  while (fill !== false && visited.indexOf(fill) === -1) {
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(fill)) {
      return fill;
    }
    target = sources[fill];
    if (!target) {
      return false;
    }
    if (target.visible) {
      return fill;
    }
    visited.push(fill);
    fill = target.fill;
  }
  return false;
}
function _decodeFill(line, index, count) {
  const fill = parseFillOption(line);
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(fill)) {
    return isNaN(fill.value) ? false : fill;
  }
  let target = parseFloat(fill);
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(target) && Math.floor(target) === target) {
    return decodeTargetIndex(fill[0], index, target, count);
  }
  return ['origin', 'start', 'end', 'stack', 'shape'].indexOf(fill) >= 0 && fill;
}
function decodeTargetIndex(firstCh, index, target, count) {
  if (firstCh === '-' || firstCh === '+') {
    target = index + target;
  }
  if (target === index || target < 0 || target >= count) {
    return false;
  }
  return target;
}
function _getTargetPixel(fill, scale) {
  let pixel = null;
  if (fill === 'start') {
    pixel = scale.bottom;
  } else if (fill === 'end') {
    pixel = scale.top;
  } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(fill)) {
    pixel = scale.getPixelForValue(fill.value);
  } else if (scale.getBasePixel) {
    pixel = scale.getBasePixel();
  }
  return pixel;
}
function _getTargetValue(fill, scale, startValue) {
  let value;
  if (fill === 'start') {
    value = startValue;
  } else if (fill === 'end') {
    value = scale.options.reverse ? scale.min : scale.max;
  } else if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(fill)) {
    value = fill.value;
  } else {
    value = scale.getBaseValue();
  }
  return value;
}
function parseFillOption(line) {
  const options = line.options;
  const fillOption = options.fill;
  let fill = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(fillOption && fillOption.target, fillOption);
  if (fill === undefined) {
    fill = !!options.backgroundColor;
  }
  if (fill === false || fill === null) {
    return false;
  }
  if (fill === true) {
    return 'origin';
  }
  return fill;
}
function _buildStackLine(source) {
  const {
    scale,
    index,
    line
  } = source;
  const points = [];
  const segments = line.segments;
  const sourcePoints = line.points;
  const linesBelow = getLinesBelow(scale, index);
  linesBelow.push(_createBoundaryLine({
    x: null,
    y: scale.bottom
  }, line));
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    for (let j = segment.start; j <= segment.end; j++) {
      addPointsBelow(points, sourcePoints[j], linesBelow);
    }
  }
  return new LineElement({
    points,
    options: {}
  });
}
function getLinesBelow(scale, index) {
  const below = [];
  const metas = scale.getMatchingVisibleMetas('line');
  for (let i = 0; i < metas.length; i++) {
    const meta = metas[i];
    if (meta.index === index) {
      break;
    }
    if (!meta.hidden) {
      below.unshift(meta.dataset);
    }
  }
  return below;
}
function addPointsBelow(points, sourcePoint, linesBelow) {
  const postponed = [];
  for (let j = 0; j < linesBelow.length; j++) {
    const line = linesBelow[j];
    const {
      first,
      last,
      point
    } = findPoint(line, sourcePoint, 'x');
    if (!point || first && last) {
      continue;
    }
    if (first) {
      postponed.unshift(point);
    } else {
      points.push(point);
      if (!last) {
        break;
      }
    }
  }
  points.push(...postponed);
}
function findPoint(line, sourcePoint, property) {
  const point = line.interpolate(sourcePoint, property);
  if (!point) {
    return {};
  }
  const pointValue = point[property];
  const segments = line.segments;
  const linePoints = line.points;
  let first = false;
  let last = false;
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i];
    const firstValue = linePoints[segment.start][property];
    const lastValue = linePoints[segment.end][property];
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aj)(pointValue, firstValue, lastValue)) {
      first = pointValue === firstValue;
      last = pointValue === lastValue;
      break;
    }
  }
  return {
    first,
    last,
    point
  };
}
class simpleArc {
  constructor(opts) {
    this.x = opts.x;
    this.y = opts.y;
    this.radius = opts.radius;
  }
  pathSegment(ctx, bounds, opts) {
    const {
      x,
      y,
      radius
    } = this;
    bounds = bounds || {
      start: 0,
      end: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T
    };
    ctx.arc(x, y, radius, bounds.end, bounds.start, true);
    return !opts.bounds;
  }
  interpolate(point) {
    const {
      x,
      y,
      radius
    } = this;
    const angle = point.angle;
    return {
      x: x + Math.cos(angle) * radius,
      y: y + Math.sin(angle) * radius,
      angle
    };
  }
}
function _getTarget(source) {
  const {
    chart,
    fill,
    line
  } = source;
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(fill)) {
    return getLineByIndex(chart, fill);
  }
  if (fill === 'stack') {
    return _buildStackLine(source);
  }
  if (fill === 'shape') {
    return true;
  }
  const boundary = computeBoundary(source);
  if (boundary instanceof simpleArc) {
    return boundary;
  }
  return _createBoundaryLine(boundary, line);
}
function getLineByIndex(chart, index) {
  const meta = chart.getDatasetMeta(index);
  const visible = meta && chart.isDatasetVisible(index);
  return visible ? meta.dataset : null;
}
function computeBoundary(source) {
  const scale = source.scale || {};
  if (scale.getPointPositionForValue) {
    return computeCircularBoundary(source);
  }
  return computeLinearBoundary(source);
}
function computeLinearBoundary(source) {
  const {
    scale = {},
    fill
  } = source;
  const pixel = _getTargetPixel(fill, scale);
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(pixel)) {
    const horizontal = scale.isHorizontal();
    return {
      x: horizontal ? pixel : null,
      y: horizontal ? null : pixel
    };
  }
  return null;
}
function computeCircularBoundary(source) {
  const {
    scale,
    fill
  } = source;
  const options = scale.options;
  const length = scale.getLabels().length;
  const start = options.reverse ? scale.max : scale.min;
  const value = _getTargetValue(fill, scale, start);
  const target = [];
  if (options.grid.circular) {
    const center = scale.getPointPositionForValue(0, start);
    return new simpleArc({
      x: center.x,
      y: center.y,
      radius: scale.getDistanceFromCenterForValue(value)
    });
  }
  for (let i = 0; i < length; ++i) {
    target.push(scale.getPointPositionForValue(i, value));
  }
  return target;
}
function _drawfill(ctx, source, area) {
  const target = _getTarget(source);
  const {
    line,
    scale,
    axis
  } = source;
  const lineOpts = line.options;
  const fillOption = lineOpts.fill;
  const color = lineOpts.backgroundColor;
  const {
    above = color,
    below = color
  } = fillOption || {};
  if (target && line.points.length) {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Y)(ctx, area);
    doFill(ctx, {
      line,
      target,
      above,
      below,
      area,
      scale,
      axis
    });
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.$)(ctx);
  }
}
function doFill(ctx, cfg) {
  const {
    line,
    target,
    above,
    below,
    area,
    scale
  } = cfg;
  const property = line._loop ? 'angle' : cfg.axis;
  ctx.save();
  if (property === 'x' && below !== above) {
    clipVertical(ctx, target, area.top);
    fill(ctx, {
      line,
      target,
      color: above,
      scale,
      property
    });
    ctx.restore();
    ctx.save();
    clipVertical(ctx, target, area.bottom);
  }
  fill(ctx, {
    line,
    target,
    color: below,
    scale,
    property
  });
  ctx.restore();
}
function clipVertical(ctx, target, clipY) {
  const {
    segments,
    points
  } = target;
  let first = true;
  let lineLoop = false;
  ctx.beginPath();
  for (const segment of segments) {
    const {
      start,
      end
    } = segment;
    const firstPoint = points[start];
    const lastPoint = points[_findSegmentEnd(start, end, points)];
    if (first) {
      ctx.moveTo(firstPoint.x, firstPoint.y);
      first = false;
    } else {
      ctx.lineTo(firstPoint.x, clipY);
      ctx.lineTo(firstPoint.x, firstPoint.y);
    }
    lineLoop = !!target.pathSegment(ctx, segment, {
      move: lineLoop
    });
    if (lineLoop) {
      ctx.closePath();
    } else {
      ctx.lineTo(lastPoint.x, clipY);
    }
  }
  ctx.lineTo(target.first().x, clipY);
  ctx.closePath();
  ctx.clip();
}
function fill(ctx, cfg) {
  const {
    line,
    target,
    property,
    color,
    scale
  } = cfg;
  const segments = _segments(line, target, property);
  for (const {
    source: src,
    target: tgt,
    start,
    end
  } of segments) {
    const {
      style: {
        backgroundColor = color
      } = {}
    } = src;
    const notShape = target !== true;
    ctx.save();
    ctx.fillStyle = backgroundColor;
    clipBounds(ctx, scale, notShape && _getBounds(property, start, end));
    ctx.beginPath();
    const lineLoop = !!line.pathSegment(ctx, src);
    let loop;
    if (notShape) {
      if (lineLoop) {
        ctx.closePath();
      } else {
        interpolatedLineTo(ctx, target, end, property);
      }
      const targetLoop = !!target.pathSegment(ctx, tgt, {
        move: lineLoop,
        reverse: true
      });
      loop = lineLoop && targetLoop;
      if (!loop) {
        interpolatedLineTo(ctx, target, start, property);
      }
    }
    ctx.closePath();
    ctx.fill(loop ? 'evenodd' : 'nonzero');
    ctx.restore();
  }
}
function clipBounds(ctx, scale, bounds) {
  const {
    top,
    bottom
  } = scale.chart.chartArea;
  const {
    property,
    start,
    end
  } = bounds || {};
  if (property === 'x') {
    ctx.beginPath();
    ctx.rect(start, top, end - start, bottom - top);
    ctx.clip();
  }
}
function interpolatedLineTo(ctx, target, point, property) {
  const interpolatedPoint = target.interpolate(point, property);
  if (interpolatedPoint) {
    ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
  }
}
var index = {
  id: 'filler',
  afterDatasetsUpdate(chart, _args, options) {
    const count = (chart.data.datasets || []).length;
    const sources = [];
    let meta, i, line, source;
    for (i = 0; i < count; ++i) {
      meta = chart.getDatasetMeta(i);
      line = meta.dataset;
      source = null;
      if (line && line.options && line instanceof LineElement) {
        source = {
          visible: chart.isDatasetVisible(i),
          index: i,
          fill: _decodeFill(line, i, count),
          chart,
          axis: meta.controller.options.indexAxis,
          scale: meta.vScale,
          line
        };
      }
      meta.$filler = source;
      sources.push(source);
    }
    for (i = 0; i < count; ++i) {
      source = sources[i];
      if (!source || source.fill === false) {
        continue;
      }
      source.fill = _resolveTarget(sources, i, options.propagate);
    }
  },
  beforeDraw(chart, _args, options) {
    const draw = options.drawTime === 'beforeDraw';
    const metasets = chart.getSortedVisibleDatasetMetas();
    const area = chart.chartArea;
    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;
      if (!source) {
        continue;
      }
      source.line.updateControlPoints(area, source.axis);
      if (draw && source.fill) {
        _drawfill(chart.ctx, source, area);
      }
    }
  },
  beforeDatasetsDraw(chart, _args, options) {
    if (options.drawTime !== 'beforeDatasetsDraw') {
      return;
    }
    const metasets = chart.getSortedVisibleDatasetMetas();
    for (let i = metasets.length - 1; i >= 0; --i) {
      const source = metasets[i].$filler;
      if (_shouldApplyFill(source)) {
        _drawfill(chart.ctx, source, chart.chartArea);
      }
    }
  },
  beforeDatasetDraw(chart, args, options) {
    const source = args.meta.$filler;
    if (!_shouldApplyFill(source) || options.drawTime !== 'beforeDatasetDraw') {
      return;
    }
    _drawfill(chart.ctx, source, chart.chartArea);
  },
  defaults: {
    propagate: true,
    drawTime: 'beforeDatasetDraw'
  }
};
const getBoxSize = (labelOpts, fontSize) => {
  let {
    boxHeight = fontSize,
    boxWidth = fontSize
  } = labelOpts;
  if (labelOpts.usePointStyle) {
    boxHeight = Math.min(boxHeight, fontSize);
    boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
  }
  return {
    boxWidth,
    boxHeight,
    itemHeight: Math.max(fontSize, boxHeight)
  };
};
const itemsEqual = (a, b) => a !== null && b !== null && a.datasetIndex === b.datasetIndex && a.index === b.index;
class Legend extends Element {
  constructor(config) {
    super();
    this._added = false;
    this.legendHitBoxes = [];
    this._hoveredItem = null;
    this.doughnutMode = false;
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this.legendItems = undefined;
    this.columnSizes = undefined;
    this.lineWidths = undefined;
    this.maxHeight = undefined;
    this.maxWidth = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.height = undefined;
    this.width = undefined;
    this._margins = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }
  update(maxWidth, maxHeight, margins) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this._margins = margins;
    this.setDimensions();
    this.buildLabels();
    this.fit();
  }
  setDimensions() {
    if (this.isHorizontal()) {
      this.width = this.maxWidth;
      this.left = this._margins.left;
      this.right = this.width;
    } else {
      this.height = this.maxHeight;
      this.top = this._margins.top;
      this.bottom = this.height;
    }
  }
  buildLabels() {
    const labelOpts = this.options.labels || {};
    let legendItems = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(labelOpts.generateLabels, [this.chart], this) || [];
    if (labelOpts.filter) {
      legendItems = legendItems.filter(item => labelOpts.filter(item, this.chart.data));
    }
    if (labelOpts.sort) {
      legendItems = legendItems.sort((a, b) => labelOpts.sort(a, b, this.chart.data));
    }
    if (this.options.reverse) {
      legendItems.reverse();
    }
    this.legendItems = legendItems;
  }
  fit() {
    const {
      options,
      ctx
    } = this;
    if (!options.display) {
      this.width = this.height = 0;
      return;
    }
    const labelOpts = options.labels;
    const labelFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(labelOpts.font);
    const fontSize = labelFont.size;
    const titleHeight = this._computeTitleHeight();
    const {
      boxWidth,
      itemHeight
    } = getBoxSize(labelOpts, fontSize);
    let width, height;
    ctx.font = labelFont.string;
    if (this.isHorizontal()) {
      width = this.maxWidth;
      height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
    } else {
      height = this.maxHeight;
      width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
    }
    this.width = Math.min(width, options.maxWidth || this.maxWidth);
    this.height = Math.min(height, options.maxHeight || this.maxHeight);
  }
  _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
    const {
      ctx,
      maxWidth,
      options: {
        labels: {
          padding
        }
      }
    } = this;
    const hitboxes = this.legendHitBoxes = [];
    const lineWidths = this.lineWidths = [0];
    const lineHeight = itemHeight + padding;
    let totalHeight = titleHeight;
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    let row = -1;
    let top = -lineHeight;
    this.legendItems.forEach((legendItem, i) => {
      const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
      if (i === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
        totalHeight += lineHeight;
        lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
        top += lineHeight;
        row++;
      }
      hitboxes[i] = {
        left: 0,
        top,
        row,
        width: itemWidth,
        height: itemHeight
      };
      lineWidths[lineWidths.length - 1] += itemWidth + padding;
    });
    return totalHeight;
  }
  _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
    const {
      ctx,
      maxHeight,
      options: {
        labels: {
          padding
        }
      }
    } = this;
    const hitboxes = this.legendHitBoxes = [];
    const columnSizes = this.columnSizes = [];
    const heightLimit = maxHeight - titleHeight;
    let totalWidth = padding;
    let currentColWidth = 0;
    let currentColHeight = 0;
    let left = 0;
    let col = 0;
    this.legendItems.forEach((legendItem, i) => {
      const {
        itemWidth,
        itemHeight
      } = calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight);
      if (i > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
        totalWidth += currentColWidth + padding;
        columnSizes.push({
          width: currentColWidth,
          height: currentColHeight
        });
        left += currentColWidth + padding;
        col++;
        currentColWidth = currentColHeight = 0;
      }
      hitboxes[i] = {
        left,
        top: currentColHeight,
        col,
        width: itemWidth,
        height: itemHeight
      };
      currentColWidth = Math.max(currentColWidth, itemWidth);
      currentColHeight += itemHeight + padding;
    });
    totalWidth += currentColWidth;
    columnSizes.push({
      width: currentColWidth,
      height: currentColHeight
    });
    return totalWidth;
  }
  adjustHitBoxes() {
    if (!this.options.display) {
      return;
    }
    const titleHeight = this._computeTitleHeight();
    const {
      legendHitBoxes: hitboxes,
      options: {
        align,
        labels: {
          padding
        },
        rtl
      }
    } = this;
    const rtlHelper = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.az)(rtl, this.left, this.width);
    if (this.isHorizontal()) {
      let row = 0;
      let left = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, this.left + padding, this.right - this.lineWidths[row]);
      for (const hitbox of hitboxes) {
        if (row !== hitbox.row) {
          row = hitbox.row;
          left = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, this.left + padding, this.right - this.lineWidths[row]);
        }
        hitbox.top += this.top + titleHeight + padding;
        hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
        left += hitbox.width + padding;
      }
    } else {
      let col = 0;
      let top = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
      for (const hitbox of hitboxes) {
        if (hitbox.col !== col) {
          col = hitbox.col;
          top = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
        }
        hitbox.top = top;
        hitbox.left += this.left + padding;
        hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
        top += hitbox.height + padding;
      }
    }
  }
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom';
  }
  draw() {
    if (this.options.display) {
      const ctx = this.ctx;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Y)(ctx, this);
      this._draw();
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.$)(ctx);
    }
  }
  _draw() {
    const {
      options: opts,
      columnSizes,
      lineWidths,
      ctx
    } = this;
    const {
      align,
      labels: labelOpts
    } = opts;
    const defaultColor = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.color;
    const rtlHelper = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.az)(opts.rtl, this.left, this.width);
    const labelFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(labelOpts.font);
    const {
      padding
    } = labelOpts;
    const fontSize = labelFont.size;
    const halfFontSize = fontSize / 2;
    let cursor;
    this.drawTitle();
    ctx.textAlign = rtlHelper.textAlign('left');
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 0.5;
    ctx.font = labelFont.string;
    const {
      boxWidth,
      boxHeight,
      itemHeight
    } = getBoxSize(labelOpts, fontSize);
    const drawLegendBox = function (x, y, legendItem) {
      if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
        return;
      }
      ctx.save();
      const lineWidth = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineWidth, 1);
      ctx.fillStyle = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.fillStyle, defaultColor);
      ctx.lineCap = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineCap, 'butt');
      ctx.lineDashOffset = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineDashOffset, 0);
      ctx.lineJoin = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineJoin, 'miter');
      ctx.lineWidth = lineWidth;
      ctx.strokeStyle = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.strokeStyle, defaultColor);
      ctx.setLineDash((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(legendItem.lineDash, []));
      if (labelOpts.usePointStyle) {
        const drawOptions = {
          radius: boxHeight * Math.SQRT2 / 2,
          pointStyle: legendItem.pointStyle,
          rotation: legendItem.rotation,
          borderWidth: lineWidth
        };
        const centerX = rtlHelper.xPlus(x, boxWidth / 2);
        const centerY = y + halfFontSize;
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aD)(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
      } else {
        const yBoxTop = y + Math.max((fontSize - boxHeight) / 2, 0);
        const xBoxLeft = rtlHelper.leftForLtr(x, boxWidth);
        const borderRadius = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw)(legendItem.borderRadius);
        ctx.beginPath();
        if (Object.values(borderRadius).some(v => v !== 0)) {
          (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au)(ctx, {
            x: xBoxLeft,
            y: yBoxTop,
            w: boxWidth,
            h: boxHeight,
            radius: borderRadius
          });
        } else {
          ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
        }
        ctx.fill();
        if (lineWidth !== 0) {
          ctx.stroke();
        }
      }
      ctx.restore();
    };
    const fillText = function (x, y, legendItem) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(ctx, legendItem.text, x, y + itemHeight / 2, labelFont, {
        strikethrough: legendItem.hidden,
        textAlign: rtlHelper.textAlign(legendItem.textAlign)
      });
    };
    const isHorizontal = this.isHorizontal();
    const titleHeight = this._computeTitleHeight();
    if (isHorizontal) {
      cursor = {
        x: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, this.left + padding, this.right - lineWidths[0]),
        y: this.top + padding + titleHeight,
        line: 0
      };
    } else {
      cursor = {
        x: this.left + padding,
        y: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
        line: 0
      };
    }
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aA)(this.ctx, opts.textDirection);
    const lineHeight = itemHeight + padding;
    this.legendItems.forEach((legendItem, i) => {
      ctx.strokeStyle = legendItem.fontColor;
      ctx.fillStyle = legendItem.fontColor;
      const textWidth = ctx.measureText(legendItem.text).width;
      const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
      const width = boxWidth + halfFontSize + textWidth;
      let x = cursor.x;
      let y = cursor.y;
      rtlHelper.setWidth(this.width);
      if (isHorizontal) {
        if (i > 0 && x + width + padding > this.right) {
          y = cursor.y += lineHeight;
          cursor.line++;
          x = cursor.x = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, this.left + padding, this.right - lineWidths[cursor.line]);
        }
      } else if (i > 0 && y + lineHeight > this.bottom) {
        x = cursor.x = x + columnSizes[cursor.line].width + padding;
        cursor.line++;
        y = cursor.y = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
      }
      const realX = rtlHelper.x(x);
      drawLegendBox(realX, y, legendItem);
      x = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aB)(textAlign, x + boxWidth + halfFontSize, isHorizontal ? x + width : this.right, opts.rtl);
      fillText(rtlHelper.x(x), y, legendItem);
      if (isHorizontal) {
        cursor.x += width + padding;
      } else if (typeof legendItem.text !== 'string') {
        const fontLineHeight = labelFont.lineHeight;
        cursor.y += calculateLegendItemHeight(legendItem, fontLineHeight) + padding;
      } else {
        cursor.y += lineHeight;
      }
    });
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aC)(this.ctx, opts.textDirection);
  }
  drawTitle() {
    const opts = this.options;
    const titleOpts = opts.title;
    const titleFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(titleOpts.font);
    const titlePadding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(titleOpts.padding);
    if (!titleOpts.display) {
      return;
    }
    const rtlHelper = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.az)(opts.rtl, this.left, this.width);
    const ctx = this.ctx;
    const position = titleOpts.position;
    const halfFontSize = titleFont.size / 2;
    const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
    let y;
    let left = this.left;
    let maxWidth = this.width;
    if (this.isHorizontal()) {
      maxWidth = Math.max(...this.lineWidths);
      y = this.top + topPaddingPlusHalfFontSize;
      left = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(opts.align, left, this.right - maxWidth);
    } else {
      const maxHeight = this.columnSizes.reduce((acc, size) => Math.max(acc, size.height), 0);
      y = topPaddingPlusHalfFontSize + (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
    }
    const x = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(position, left, left + maxWidth);
    ctx.textAlign = rtlHelper.textAlign((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a1)(position));
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = titleOpts.color;
    ctx.fillStyle = titleOpts.color;
    ctx.font = titleFont.string;
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(ctx, titleOpts.text, x, y, titleFont);
  }
  _computeTitleHeight() {
    const titleOpts = this.options.title;
    const titleFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(titleOpts.font);
    const titlePadding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(titleOpts.padding);
    return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
  }
  _getLegendItemAt(x, y) {
    let i, hitBox, lh;
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aj)(x, this.left, this.right) && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aj)(y, this.top, this.bottom)) {
      lh = this.legendHitBoxes;
      for (i = 0; i < lh.length; ++i) {
        hitBox = lh[i];
        if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aj)(x, hitBox.left, hitBox.left + hitBox.width) && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aj)(y, hitBox.top, hitBox.top + hitBox.height)) {
          return this.legendItems[i];
        }
      }
    }
    return null;
  }
  handleEvent(e) {
    const opts = this.options;
    if (!isListened(e.type, opts)) {
      return;
    }
    const hoveredItem = this._getLegendItemAt(e.x, e.y);
    if (e.type === 'mousemove' || e.type === 'mouseout') {
      const previous = this._hoveredItem;
      const sameItem = itemsEqual(previous, hoveredItem);
      if (previous && !sameItem) {
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(opts.onLeave, [e, previous, this], this);
      }
      this._hoveredItem = hoveredItem;
      if (hoveredItem && !sameItem) {
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(opts.onHover, [e, hoveredItem, this], this);
      }
    } else if (hoveredItem) {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(opts.onClick, [e, hoveredItem, this], this);
    }
  }
}
function calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
  const itemWidth = calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
  const itemHeight = calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
  return {
    itemWidth,
    itemHeight
  };
}
function calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
  let legendItemText = legendItem.text;
  if (legendItemText && typeof legendItemText !== 'string') {
    legendItemText = legendItemText.reduce((a, b) => a.length > b.length ? a : b);
  }
  return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
}
function calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
  let itemHeight = _itemHeight;
  if (typeof legendItem.text !== 'string') {
    itemHeight = calculateLegendItemHeight(legendItem, fontLineHeight);
  }
  return itemHeight;
}
function calculateLegendItemHeight(legendItem, fontLineHeight) {
  const labelHeight = legendItem.text ? legendItem.text.length : 0;
  return fontLineHeight * labelHeight;
}
function isListened(type, opts) {
  if ((type === 'mousemove' || type === 'mouseout') && (opts.onHover || opts.onLeave)) {
    return true;
  }
  if (opts.onClick && (type === 'click' || type === 'mouseup')) {
    return true;
  }
  return false;
}
var plugin_legend = {
  id: 'legend',
  _element: Legend,
  start(chart, _args, options) {
    const legend = chart.legend = new Legend({
      ctx: chart.ctx,
      options,
      chart
    });
    layouts.configure(chart, legend, options);
    layouts.addBox(chart, legend);
  },
  stop(chart) {
    layouts.removeBox(chart, chart.legend);
    delete chart.legend;
  },
  beforeUpdate(chart, _args, options) {
    const legend = chart.legend;
    layouts.configure(chart, legend, options);
    legend.options = options;
  },
  afterUpdate(chart) {
    const legend = chart.legend;
    legend.buildLabels();
    legend.adjustHitBoxes();
  },
  afterEvent(chart, args) {
    if (!args.replay) {
      chart.legend.handleEvent(args.event);
    }
  },
  defaults: {
    display: true,
    position: 'top',
    align: 'center',
    fullSize: true,
    reverse: false,
    weight: 1000,
    onClick(e, legendItem, legend) {
      const index = legendItem.datasetIndex;
      const ci = legend.chart;
      if (ci.isDatasetVisible(index)) {
        ci.hide(index);
        legendItem.hidden = true;
      } else {
        ci.show(index);
        legendItem.hidden = false;
      }
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: ctx => ctx.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(chart) {
        const datasets = chart.data.datasets;
        const {
          labels: {
            usePointStyle,
            pointStyle,
            textAlign,
            color,
            useBorderRadius,
            borderRadius
          }
        } = chart.legend.options;
        return chart._getSortedDatasetMetas().map(meta => {
          const style = meta.controller.getStyle(usePointStyle ? 0 : undefined);
          const borderWidth = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(style.borderWidth);
          return {
            text: datasets[meta.index].label,
            fillStyle: style.backgroundColor,
            fontColor: color,
            hidden: !meta.visible,
            lineCap: style.borderCapStyle,
            lineDash: style.borderDash,
            lineDashOffset: style.borderDashOffset,
            lineJoin: style.borderJoinStyle,
            lineWidth: (borderWidth.width + borderWidth.height) / 4,
            strokeStyle: style.borderColor,
            pointStyle: pointStyle || style.pointStyle,
            rotation: style.rotation,
            textAlign: textAlign || style.textAlign,
            borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
            datasetIndex: meta.index
          };
        }, this);
      }
    },
    title: {
      color: ctx => ctx.chart.options.color,
      display: false,
      position: 'center',
      text: ''
    }
  },
  descriptors: {
    _scriptable: name => !name.startsWith('on'),
    labels: {
      _scriptable: name => !['generateLabels', 'filter', 'sort'].includes(name)
    }
  }
};
class Title extends Element {
  constructor(config) {
    super();
    this.chart = config.chart;
    this.options = config.options;
    this.ctx = config.ctx;
    this._padding = undefined;
    this.top = undefined;
    this.bottom = undefined;
    this.left = undefined;
    this.right = undefined;
    this.width = undefined;
    this.height = undefined;
    this.position = undefined;
    this.weight = undefined;
    this.fullSize = undefined;
  }
  update(maxWidth, maxHeight) {
    const opts = this.options;
    this.left = 0;
    this.top = 0;
    if (!opts.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = maxWidth;
    this.height = this.bottom = maxHeight;
    const lineCount = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(opts.text) ? opts.text.length : 1;
    this._padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(opts.padding);
    const textSize = lineCount * (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(opts.font).lineHeight + this._padding.height;
    if (this.isHorizontal()) {
      this.height = textSize;
    } else {
      this.width = textSize;
    }
  }
  isHorizontal() {
    const pos = this.options.position;
    return pos === 'top' || pos === 'bottom';
  }
  _drawArgs(offset) {
    const {
      top,
      left,
      bottom,
      right,
      options
    } = this;
    const align = options.align;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    if (this.isHorizontal()) {
      titleX = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, left, right);
      titleY = top + offset;
      maxWidth = right - left;
    } else {
      if (options.position === 'left') {
        titleX = left + offset;
        titleY = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, bottom, top);
        rotation = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P * -0.5;
      } else {
        titleX = right - offset;
        titleY = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a2)(align, top, bottom);
        rotation = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P * 0.5;
      }
      maxWidth = bottom - top;
    }
    return {
      titleX,
      titleY,
      maxWidth,
      rotation
    };
  }
  draw() {
    const ctx = this.ctx;
    const opts = this.options;
    if (!opts.display) {
      return;
    }
    const fontOpts = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(opts.font);
    const lineHeight = fontOpts.lineHeight;
    const offset = lineHeight / 2 + this._padding.top;
    const {
      titleX,
      titleY,
      maxWidth,
      rotation
    } = this._drawArgs(offset);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(ctx, opts.text, 0, 0, fontOpts, {
      color: opts.color,
      maxWidth,
      rotation,
      textAlign: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a1)(opts.align),
      textBaseline: 'middle',
      translation: [titleX, titleY]
    });
  }
}
function createTitle(chart, titleOpts) {
  const title = new Title({
    ctx: chart.ctx,
    options: titleOpts,
    chart
  });
  layouts.configure(chart, title, titleOpts);
  layouts.addBox(chart, title);
  chart.titleBlock = title;
}
var plugin_title = {
  id: 'title',
  _element: Title,
  start(chart, _args, options) {
    createTitle(chart, options);
  },
  stop(chart) {
    const titleBlock = chart.titleBlock;
    layouts.removeBox(chart, titleBlock);
    delete chart.titleBlock;
  },
  beforeUpdate(chart, _args, options) {
    const title = chart.titleBlock;
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'bold'
    },
    fullSize: true,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2000
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false
  }
};
const map = new WeakMap();
var plugin_subtitle = {
  id: 'subtitle',
  start(chart, _args, options) {
    const title = new Title({
      ctx: chart.ctx,
      options,
      chart
    });
    layouts.configure(chart, title, options);
    layouts.addBox(chart, title);
    map.set(chart, title);
  },
  stop(chart) {
    layouts.removeBox(chart, map.get(chart));
    map.delete(chart);
  },
  beforeUpdate(chart, _args, options) {
    const title = map.get(chart);
    layouts.configure(chart, title, options);
    title.options = options;
  },
  defaults: {
    align: 'center',
    display: false,
    font: {
      weight: 'normal'
    },
    fullSize: true,
    padding: 0,
    position: 'top',
    text: '',
    weight: 1500
  },
  defaultRoutes: {
    color: 'color'
  },
  descriptors: {
    _scriptable: true,
    _indexable: false
  }
};
const positioners = {
  average(items) {
    if (!items.length) {
      return false;
    }
    let i, len;
    let x = 0;
    let y = 0;
    let count = 0;
    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;
      if (el && el.hasValue()) {
        const pos = el.tooltipPosition();
        x += pos.x;
        y += pos.y;
        ++count;
      }
    }
    return {
      x: x / count,
      y: y / count
    };
  },
  nearest(items, eventPosition) {
    if (!items.length) {
      return false;
    }
    let x = eventPosition.x;
    let y = eventPosition.y;
    let minDistance = Number.POSITIVE_INFINITY;
    let i, len, nearestElement;
    for (i = 0, len = items.length; i < len; ++i) {
      const el = items[i].element;
      if (el && el.hasValue()) {
        const center = el.getCenterPoint();
        const d = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aE)(eventPosition, center);
        if (d < minDistance) {
          minDistance = d;
          nearestElement = el;
        }
      }
    }
    if (nearestElement) {
      const tp = nearestElement.tooltipPosition();
      x = tp.x;
      y = tp.y;
    }
    return {
      x,
      y
    };
  }
};
function pushOrConcat(base, toPush) {
  if (toPush) {
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(toPush)) {
      Array.prototype.push.apply(base, toPush);
    } else {
      base.push(toPush);
    }
  }
  return base;
}
function splitNewlines(str) {
  if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
    return str.split('\n');
  }
  return str;
}
function createTooltipItem(chart, item) {
  const {
    element,
    datasetIndex,
    index
  } = item;
  const controller = chart.getDatasetMeta(datasetIndex).controller;
  const {
    label,
    value
  } = controller.getLabelAndValue(index);
  return {
    chart,
    label,
    parsed: controller.getParsed(index),
    raw: chart.data.datasets[datasetIndex].data[index],
    formattedValue: value,
    dataset: controller.getDataset(),
    dataIndex: index,
    datasetIndex,
    element
  };
}
function getTooltipSize(tooltip, options) {
  const ctx = tooltip.chart.ctx;
  const {
    body,
    footer,
    title
  } = tooltip;
  const {
    boxWidth,
    boxHeight
  } = options;
  const bodyFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(options.bodyFont);
  const titleFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(options.titleFont);
  const footerFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(options.footerFont);
  const titleLineCount = title.length;
  const footerLineCount = footer.length;
  const bodyLineItemCount = body.length;
  const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(options.padding);
  let height = padding.height;
  let width = 0;
  let combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
  combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
  if (titleLineCount) {
    height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
  }
  if (combinedBodyLength) {
    const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
    height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
  }
  if (footerLineCount) {
    height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
  }
  let widthPadding = 0;
  const maxLineWidth = function (line) {
    width = Math.max(width, ctx.measureText(line).width + widthPadding);
  };
  ctx.save();
  ctx.font = titleFont.string;
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(tooltip.title, maxLineWidth);
  ctx.font = bodyFont.string;
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
  widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(body, bodyItem => {
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(bodyItem.before, maxLineWidth);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(bodyItem.lines, maxLineWidth);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(bodyItem.after, maxLineWidth);
  });
  widthPadding = 0;
  ctx.font = footerFont.string;
  (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(tooltip.footer, maxLineWidth);
  ctx.restore();
  width += padding.width;
  return {
    width,
    height
  };
}
function determineYAlign(chart, size) {
  const {
    y,
    height
  } = size;
  if (y < height / 2) {
    return 'top';
  } else if (y > chart.height - height / 2) {
    return 'bottom';
  }
  return 'center';
}
function doesNotFitWithAlign(xAlign, chart, options, size) {
  const {
    x,
    width
  } = size;
  const caret = options.caretSize + options.caretPadding;
  if (xAlign === 'left' && x + width + caret > chart.width) {
    return true;
  }
  if (xAlign === 'right' && x - width - caret < 0) {
    return true;
  }
}
function determineXAlign(chart, options, size, yAlign) {
  const {
    x,
    width
  } = size;
  const {
    width: chartWidth,
    chartArea: {
      left,
      right
    }
  } = chart;
  let xAlign = 'center';
  if (yAlign === 'center') {
    xAlign = x <= (left + right) / 2 ? 'left' : 'right';
  } else if (x <= width / 2) {
    xAlign = 'left';
  } else if (x >= chartWidth - width / 2) {
    xAlign = 'right';
  }
  if (doesNotFitWithAlign(xAlign, chart, options, size)) {
    xAlign = 'center';
  }
  return xAlign;
}
function determineAlignment(chart, options, size) {
  const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
  return {
    xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
    yAlign
  };
}
function alignX(size, xAlign) {
  let {
    x,
    width
  } = size;
  if (xAlign === 'right') {
    x -= width;
  } else if (xAlign === 'center') {
    x -= width / 2;
  }
  return x;
}
function alignY(size, yAlign, paddingAndSize) {
  let {
    y,
    height
  } = size;
  if (yAlign === 'top') {
    y += paddingAndSize;
  } else if (yAlign === 'bottom') {
    y -= height + paddingAndSize;
  } else {
    y -= height / 2;
  }
  return y;
}
function getBackgroundPoint(options, size, alignment, chart) {
  const {
    caretSize,
    caretPadding,
    cornerRadius
  } = options;
  const {
    xAlign,
    yAlign
  } = alignment;
  const paddingAndSize = caretSize + caretPadding;
  const {
    topLeft,
    topRight,
    bottomLeft,
    bottomRight
  } = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw)(cornerRadius);
  let x = alignX(size, xAlign);
  const y = alignY(size, yAlign, paddingAndSize);
  if (yAlign === 'center') {
    if (xAlign === 'left') {
      x += paddingAndSize;
    } else if (xAlign === 'right') {
      x -= paddingAndSize;
    }
  } else if (xAlign === 'left') {
    x -= Math.max(topLeft, bottomLeft) + caretSize;
  } else if (xAlign === 'right') {
    x += Math.max(topRight, bottomRight) + caretSize;
  }
  return {
    x: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(x, 0, chart.width - size.width),
    y: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(y, 0, chart.height - size.height)
  };
}
function getAlignedX(tooltip, align, options) {
  const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(options.padding);
  return align === 'center' ? tooltip.x + tooltip.width / 2 : align === 'right' ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
}
function getBeforeAfterBodyLines(callback) {
  return pushOrConcat([], splitNewlines(callback));
}
function createTooltipContext(parent, tooltip, tooltipItems) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j)(parent, {
    tooltip,
    tooltipItems,
    type: 'tooltip'
  });
}
function overrideCallbacks(callbacks, context) {
  const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
  return override ? callbacks.override(override) : callbacks;
}
const defaultCallbacks = {
  beforeTitle: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aF,
  title(tooltipItems) {
    if (tooltipItems.length > 0) {
      const item = tooltipItems[0];
      const labels = item.chart.data.labels;
      const labelCount = labels ? labels.length : 0;
      if (this && this.options && this.options.mode === 'dataset') {
        return item.dataset.label || '';
      } else if (item.label) {
        return item.label;
      } else if (labelCount > 0 && item.dataIndex < labelCount) {
        return labels[item.dataIndex];
      }
    }
    return '';
  },
  afterTitle: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aF,
  beforeBody: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aF,
  beforeLabel: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aF,
  label(tooltipItem) {
    if (this && this.options && this.options.mode === 'dataset') {
      return tooltipItem.label + ': ' + tooltipItem.formattedValue || tooltipItem.formattedValue;
    }
    let label = tooltipItem.dataset.label || '';
    if (label) {
      label += ': ';
    }
    const value = tooltipItem.formattedValue;
    if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(value)) {
      label += value;
    }
    return label;
  },
  labelColor(tooltipItem) {
    const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
    const options = meta.controller.getStyle(tooltipItem.dataIndex);
    return {
      borderColor: options.borderColor,
      backgroundColor: options.backgroundColor,
      borderWidth: options.borderWidth,
      borderDash: options.borderDash,
      borderDashOffset: options.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(tooltipItem) {
    const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
    const options = meta.controller.getStyle(tooltipItem.dataIndex);
    return {
      pointStyle: options.pointStyle,
      rotation: options.rotation
    };
  },
  afterLabel: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aF,
  afterBody: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aF,
  beforeFooter: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aF,
  footer: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aF,
  afterFooter: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aF
};
function invokeCallbackWithFallback(callbacks, name, ctx, arg) {
  const result = callbacks[name].call(ctx, arg);
  if (typeof result === 'undefined') {
    return defaultCallbacks[name].call(ctx, arg);
  }
  return result;
}
class Tooltip extends Element {
  static positioners = positioners;
  constructor(config) {
    super();
    this.opacity = 0;
    this._active = [];
    this._eventPosition = undefined;
    this._size = undefined;
    this._cachedAnimations = undefined;
    this._tooltipItems = [];
    this.$animations = undefined;
    this.$context = undefined;
    this.chart = config.chart;
    this.options = config.options;
    this.dataPoints = undefined;
    this.title = undefined;
    this.beforeBody = undefined;
    this.body = undefined;
    this.afterBody = undefined;
    this.footer = undefined;
    this.xAlign = undefined;
    this.yAlign = undefined;
    this.x = undefined;
    this.y = undefined;
    this.height = undefined;
    this.width = undefined;
    this.caretX = undefined;
    this.caretY = undefined;
    this.labelColors = undefined;
    this.labelPointStyles = undefined;
    this.labelTextColors = undefined;
  }
  initialize(options) {
    this.options = options;
    this._cachedAnimations = undefined;
    this.$context = undefined;
  }
  _resolveAnimations() {
    const cached = this._cachedAnimations;
    if (cached) {
      return cached;
    }
    const chart = this.chart;
    const options = this.options.setContext(this.getContext());
    const opts = options.enabled && chart.options.animation && options.animations;
    const animations = new Animations(this.chart, opts);
    if (opts._cacheable) {
      this._cachedAnimations = Object.freeze(animations);
    }
    return animations;
  }
  getContext() {
    return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(context, options) {
    const {
      callbacks
    } = options;
    const beforeTitle = invokeCallbackWithFallback(callbacks, 'beforeTitle', this, context);
    const title = invokeCallbackWithFallback(callbacks, 'title', this, context);
    const afterTitle = invokeCallbackWithFallback(callbacks, 'afterTitle', this, context);
    let lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeTitle));
    lines = pushOrConcat(lines, splitNewlines(title));
    lines = pushOrConcat(lines, splitNewlines(afterTitle));
    return lines;
  }
  getBeforeBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'beforeBody', this, tooltipItems));
  }
  getBody(tooltipItems, options) {
    const {
      callbacks
    } = options;
    const bodyItems = [];
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(tooltipItems, context => {
      const bodyItem = {
        before: [],
        lines: [],
        after: []
      };
      const scoped = overrideCallbacks(callbacks, context);
      pushOrConcat(bodyItem.before, splitNewlines(invokeCallbackWithFallback(scoped, 'beforeLabel', this, context)));
      pushOrConcat(bodyItem.lines, invokeCallbackWithFallback(scoped, 'label', this, context));
      pushOrConcat(bodyItem.after, splitNewlines(invokeCallbackWithFallback(scoped, 'afterLabel', this, context)));
      bodyItems.push(bodyItem);
    });
    return bodyItems;
  }
  getAfterBody(tooltipItems, options) {
    return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, 'afterBody', this, tooltipItems));
  }
  getFooter(tooltipItems, options) {
    const {
      callbacks
    } = options;
    const beforeFooter = invokeCallbackWithFallback(callbacks, 'beforeFooter', this, tooltipItems);
    const footer = invokeCallbackWithFallback(callbacks, 'footer', this, tooltipItems);
    const afterFooter = invokeCallbackWithFallback(callbacks, 'afterFooter', this, tooltipItems);
    let lines = [];
    lines = pushOrConcat(lines, splitNewlines(beforeFooter));
    lines = pushOrConcat(lines, splitNewlines(footer));
    lines = pushOrConcat(lines, splitNewlines(afterFooter));
    return lines;
  }
  _createItems(options) {
    const active = this._active;
    const data = this.chart.data;
    const labelColors = [];
    const labelPointStyles = [];
    const labelTextColors = [];
    let tooltipItems = [];
    let i, len;
    for (i = 0, len = active.length; i < len; ++i) {
      tooltipItems.push(createTooltipItem(this.chart, active[i]));
    }
    if (options.filter) {
      tooltipItems = tooltipItems.filter((element, index, array) => options.filter(element, index, array, data));
    }
    if (options.itemSort) {
      tooltipItems = tooltipItems.sort((a, b) => options.itemSort(a, b, data));
    }
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(tooltipItems, context => {
      const scoped = overrideCallbacks(options.callbacks, context);
      labelColors.push(invokeCallbackWithFallback(scoped, 'labelColor', this, context));
      labelPointStyles.push(invokeCallbackWithFallback(scoped, 'labelPointStyle', this, context));
      labelTextColors.push(invokeCallbackWithFallback(scoped, 'labelTextColor', this, context));
    });
    this.labelColors = labelColors;
    this.labelPointStyles = labelPointStyles;
    this.labelTextColors = labelTextColors;
    this.dataPoints = tooltipItems;
    return tooltipItems;
  }
  update(changed, replay) {
    const options = this.options.setContext(this.getContext());
    const active = this._active;
    let properties;
    let tooltipItems = [];
    if (!active.length) {
      if (this.opacity !== 0) {
        properties = {
          opacity: 0
        };
      }
    } else {
      const position = positioners[options.position].call(this, active, this._eventPosition);
      tooltipItems = this._createItems(options);
      this.title = this.getTitle(tooltipItems, options);
      this.beforeBody = this.getBeforeBody(tooltipItems, options);
      this.body = this.getBody(tooltipItems, options);
      this.afterBody = this.getAfterBody(tooltipItems, options);
      this.footer = this.getFooter(tooltipItems, options);
      const size = this._size = getTooltipSize(this, options);
      const positionAndSize = Object.assign({}, position, size);
      const alignment = determineAlignment(this.chart, options, positionAndSize);
      const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
      this.xAlign = alignment.xAlign;
      this.yAlign = alignment.yAlign;
      properties = {
        opacity: 1,
        x: backgroundPoint.x,
        y: backgroundPoint.y,
        width: size.width,
        height: size.height,
        caretX: position.x,
        caretY: position.y
      };
    }
    this._tooltipItems = tooltipItems;
    this.$context = undefined;
    if (properties) {
      this._resolveAnimations().update(this, properties);
    }
    if (changed && options.external) {
      options.external.call(this, {
        chart: this.chart,
        tooltip: this,
        replay
      });
    }
  }
  drawCaret(tooltipPoint, ctx, size, options) {
    const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
    ctx.lineTo(caretPosition.x1, caretPosition.y1);
    ctx.lineTo(caretPosition.x2, caretPosition.y2);
    ctx.lineTo(caretPosition.x3, caretPosition.y3);
  }
  getCaretPosition(tooltipPoint, size, options) {
    const {
      xAlign,
      yAlign
    } = this;
    const {
      caretSize,
      cornerRadius
    } = options;
    const {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight
    } = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw)(cornerRadius);
    const {
      x: ptX,
      y: ptY
    } = tooltipPoint;
    const {
      width,
      height
    } = size;
    let x1, x2, x3, y1, y2, y3;
    if (yAlign === 'center') {
      y2 = ptY + height / 2;
      if (xAlign === 'left') {
        x1 = ptX;
        x2 = x1 - caretSize;
        y1 = y2 + caretSize;
        y3 = y2 - caretSize;
      } else {
        x1 = ptX + width;
        x2 = x1 + caretSize;
        y1 = y2 - caretSize;
        y3 = y2 + caretSize;
      }
      x3 = x1;
    } else {
      if (xAlign === 'left') {
        x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
      } else if (xAlign === 'right') {
        x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
      } else {
        x2 = this.caretX;
      }
      if (yAlign === 'top') {
        y1 = ptY;
        y2 = y1 - caretSize;
        x1 = x2 - caretSize;
        x3 = x2 + caretSize;
      } else {
        y1 = ptY + height;
        y2 = y1 + caretSize;
        x1 = x2 + caretSize;
        x3 = x2 - caretSize;
      }
      y3 = y1;
    }
    return {
      x1,
      x2,
      x3,
      y1,
      y2,
      y3
    };
  }
  drawTitle(pt, ctx, options) {
    const title = this.title;
    const length = title.length;
    let titleFont, titleSpacing, i;
    if (length) {
      const rtlHelper = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.az)(options.rtl, this.x, this.width);
      pt.x = getAlignedX(this, options.titleAlign, options);
      ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
      ctx.textBaseline = 'middle';
      titleFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(options.titleFont);
      titleSpacing = options.titleSpacing;
      ctx.fillStyle = options.titleColor;
      ctx.font = titleFont.string;
      for (i = 0; i < length; ++i) {
        ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
        pt.y += titleFont.lineHeight + titleSpacing;
        if (i + 1 === length) {
          pt.y += options.titleMarginBottom - titleSpacing;
        }
      }
    }
  }
  _drawColorBox(ctx, pt, i, rtlHelper, options) {
    const labelColor = this.labelColors[i];
    const labelPointStyle = this.labelPointStyles[i];
    const {
      boxHeight,
      boxWidth
    } = options;
    const bodyFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(options.bodyFont);
    const colorX = getAlignedX(this, 'left', options);
    const rtlColorX = rtlHelper.x(colorX);
    const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
    const colorY = pt.y + yOffSet;
    if (options.usePointStyle) {
      const drawOptions = {
        radius: Math.min(boxWidth, boxHeight) / 2,
        pointStyle: labelPointStyle.pointStyle,
        rotation: labelPointStyle.rotation,
        borderWidth: 1
      };
      const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
      const centerY = colorY + boxHeight / 2;
      ctx.strokeStyle = options.multiKeyBackground;
      ctx.fillStyle = options.multiKeyBackground;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.at)(ctx, drawOptions, centerX, centerY);
      ctx.strokeStyle = labelColor.borderColor;
      ctx.fillStyle = labelColor.backgroundColor;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.at)(ctx, drawOptions, centerX, centerY);
    } else {
      ctx.lineWidth = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.i)(labelColor.borderWidth) ? Math.max(...Object.values(labelColor.borderWidth)) : labelColor.borderWidth || 1;
      ctx.strokeStyle = labelColor.borderColor;
      ctx.setLineDash(labelColor.borderDash || []);
      ctx.lineDashOffset = labelColor.borderDashOffset || 0;
      const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth);
      const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2);
      const borderRadius = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw)(labelColor.borderRadius);
      if (Object.values(borderRadius).some(v => v !== 0)) {
        ctx.beginPath();
        ctx.fillStyle = options.multiKeyBackground;
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au)(ctx, {
          x: outerX,
          y: colorY,
          w: boxWidth,
          h: boxHeight,
          radius: borderRadius
        });
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = labelColor.backgroundColor;
        ctx.beginPath();
        (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au)(ctx, {
          x: innerX,
          y: colorY + 1,
          w: boxWidth - 2,
          h: boxHeight - 2,
          radius: borderRadius
        });
        ctx.fill();
      } else {
        ctx.fillStyle = options.multiKeyBackground;
        ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
        ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
        ctx.fillStyle = labelColor.backgroundColor;
        ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
      }
    }
    ctx.fillStyle = this.labelTextColors[i];
  }
  drawBody(pt, ctx, options) {
    const {
      body
    } = this;
    const {
      bodySpacing,
      bodyAlign,
      displayColors,
      boxHeight,
      boxWidth,
      boxPadding
    } = options;
    const bodyFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(options.bodyFont);
    let bodyLineHeight = bodyFont.lineHeight;
    let xLinePadding = 0;
    const rtlHelper = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.az)(options.rtl, this.x, this.width);
    const fillLineOfText = function (line) {
      ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
      pt.y += bodyLineHeight + bodySpacing;
    };
    const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
    let bodyItem, textColor, lines, i, j, ilen, jlen;
    ctx.textAlign = bodyAlign;
    ctx.textBaseline = 'middle';
    ctx.font = bodyFont.string;
    pt.x = getAlignedX(this, bodyAlignForCalculation, options);
    ctx.fillStyle = options.bodyColor;
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(this.beforeBody, fillLineOfText);
    xLinePadding = displayColors && bodyAlignForCalculation !== 'right' ? bodyAlign === 'center' ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
    for (i = 0, ilen = body.length; i < ilen; ++i) {
      bodyItem = body[i];
      textColor = this.labelTextColors[i];
      ctx.fillStyle = textColor;
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(bodyItem.before, fillLineOfText);
      lines = bodyItem.lines;
      if (displayColors && lines.length) {
        this._drawColorBox(ctx, pt, i, rtlHelper, options);
        bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
      }
      for (j = 0, jlen = lines.length; j < jlen; ++j) {
        fillLineOfText(lines[j]);
        bodyLineHeight = bodyFont.lineHeight;
      }
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(bodyItem.after, fillLineOfText);
    }
    xLinePadding = 0;
    bodyLineHeight = bodyFont.lineHeight;
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.F)(this.afterBody, fillLineOfText);
    pt.y -= bodySpacing;
  }
  drawFooter(pt, ctx, options) {
    const footer = this.footer;
    const length = footer.length;
    let footerFont, i;
    if (length) {
      const rtlHelper = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.az)(options.rtl, this.x, this.width);
      pt.x = getAlignedX(this, options.footerAlign, options);
      pt.y += options.footerMarginTop;
      ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
      ctx.textBaseline = 'middle';
      footerFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(options.footerFont);
      ctx.fillStyle = options.footerColor;
      ctx.font = footerFont.string;
      for (i = 0; i < length; ++i) {
        ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
        pt.y += footerFont.lineHeight + options.footerSpacing;
      }
    }
  }
  drawBackground(pt, ctx, tooltipSize, options) {
    const {
      xAlign,
      yAlign
    } = this;
    const {
      x,
      y
    } = pt;
    const {
      width,
      height
    } = tooltipSize;
    const {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight
    } = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw)(options.cornerRadius);
    ctx.fillStyle = options.backgroundColor;
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.beginPath();
    ctx.moveTo(x + topLeft, y);
    if (yAlign === 'top') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + width - topRight, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + topRight);
    if (yAlign === 'center' && xAlign === 'right') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + width, y + height - bottomRight);
    ctx.quadraticCurveTo(x + width, y + height, x + width - bottomRight, y + height);
    if (yAlign === 'bottom') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x + bottomLeft, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - bottomLeft);
    if (yAlign === 'center' && xAlign === 'left') {
      this.drawCaret(pt, ctx, tooltipSize, options);
    }
    ctx.lineTo(x, y + topLeft);
    ctx.quadraticCurveTo(x, y, x + topLeft, y);
    ctx.closePath();
    ctx.fill();
    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  }
  _updateAnimationTarget(options) {
    const chart = this.chart;
    const anims = this.$animations;
    const animX = anims && anims.x;
    const animY = anims && anims.y;
    if (animX || animY) {
      const position = positioners[options.position].call(this, this._active, this._eventPosition);
      if (!position) {
        return;
      }
      const size = this._size = getTooltipSize(this, options);
      const positionAndSize = Object.assign({}, position, this._size);
      const alignment = determineAlignment(chart, options, positionAndSize);
      const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
      if (animX._to !== point.x || animY._to !== point.y) {
        this.xAlign = alignment.xAlign;
        this.yAlign = alignment.yAlign;
        this.width = size.width;
        this.height = size.height;
        this.caretX = position.x;
        this.caretY = position.y;
        this._resolveAnimations().update(this, point);
      }
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(ctx) {
    const options = this.options.setContext(this.getContext());
    let opacity = this.opacity;
    if (!opacity) {
      return;
    }
    this._updateAnimationTarget(options);
    const tooltipSize = {
      width: this.width,
      height: this.height
    };
    const pt = {
      x: this.x,
      y: this.y
    };
    opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
    const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(options.padding);
    const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    if (options.enabled && hasTooltipContent) {
      ctx.save();
      ctx.globalAlpha = opacity;
      this.drawBackground(pt, ctx, tooltipSize, options);
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aA)(ctx, options.textDirection);
      pt.y += padding.top;
      this.drawTitle(pt, ctx, options);
      this.drawBody(pt, ctx, options);
      this.drawFooter(pt, ctx, options);
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aC)(ctx, options.textDirection);
      ctx.restore();
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(activeElements, eventPosition) {
    const lastActive = this._active;
    const active = activeElements.map(({
      datasetIndex,
      index
    }) => {
      const meta = this.chart.getDatasetMeta(datasetIndex);
      if (!meta) {
        throw new Error('Cannot find a dataset at index ' + datasetIndex);
      }
      return {
        datasetIndex,
        element: meta.data[index],
        index
      };
    });
    const changed = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah)(lastActive, active);
    const positionChanged = this._positionChanged(active, eventPosition);
    if (changed || positionChanged) {
      this._active = active;
      this._eventPosition = eventPosition;
      this._ignoreReplayEvents = true;
      this.update(true);
    }
  }
  handleEvent(e, replay, inChartArea = true) {
    if (replay && this._ignoreReplayEvents) {
      return false;
    }
    this._ignoreReplayEvents = false;
    const options = this.options;
    const lastActive = this._active || [];
    const active = this._getActiveElements(e, lastActive, replay, inChartArea);
    const positionChanged = this._positionChanged(active, e);
    const changed = replay || !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ah)(active, lastActive) || positionChanged;
    if (changed) {
      this._active = active;
      if (options.enabled || options.external) {
        this._eventPosition = {
          x: e.x,
          y: e.y
        };
        this.update(true, replay);
      }
    }
    return changed;
  }
  _getActiveElements(e, lastActive, replay, inChartArea) {
    const options = this.options;
    if (e.type === 'mouseout') {
      return [];
    }
    if (!inChartArea) {
      return lastActive;
    }
    const active = this.chart.getElementsAtEventForMode(e, options.mode, options, replay);
    if (options.reverse) {
      active.reverse();
    }
    return active;
  }
  _positionChanged(active, e) {
    const {
      caretX,
      caretY,
      options
    } = this;
    const position = positioners[options.position].call(this, active, e);
    return position !== false && (caretX !== position.x || caretY !== position.y);
  }
}
var plugin_tooltip = {
  id: 'tooltip',
  _element: Tooltip,
  positioners,
  afterInit(chart, _args, options) {
    if (options) {
      chart.tooltip = new Tooltip({
        chart,
        options
      });
    }
  },
  beforeUpdate(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  reset(chart, _args, options) {
    if (chart.tooltip) {
      chart.tooltip.initialize(options);
    }
  },
  afterDraw(chart) {
    const tooltip = chart.tooltip;
    if (tooltip && tooltip._willRender()) {
      const args = {
        tooltip
      };
      if (chart.notifyPlugins('beforeTooltipDraw', {
        ...args,
        cancelable: true
      }) === false) {
        return;
      }
      tooltip.draw(chart.ctx);
      chart.notifyPlugins('afterTooltipDraw', args);
    }
  },
  afterEvent(chart, args) {
    if (chart.tooltip) {
      const useFinalPosition = args.replay;
      if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
        args.changed = true;
      }
    }
  },
  defaults: {
    enabled: true,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: {
      weight: 'bold'
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: 'bold'
    },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (ctx, opts) => opts.bodyFont.size,
    boxWidth: (ctx, opts) => opts.bodyFont.size,
    multiKeyBackground: '#fff',
    displayColors: true,
    boxPadding: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: 'easeOutQuart'
    },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY']
      },
      opacity: {
        easing: 'linear',
        duration: 200
      }
    },
    callbacks: defaultCallbacks
  },
  defaultRoutes: {
    bodyFont: 'font',
    footerFont: 'font',
    titleFont: 'font'
  },
  descriptors: {
    _scriptable: name => name !== 'filter' && name !== 'itemSort' && name !== 'external',
    _indexable: false,
    callbacks: {
      _scriptable: false,
      _indexable: false
    },
    animation: {
      _fallback: false
    },
    animations: {
      _fallback: 'animation'
    }
  },
  additionalOptionScopes: ['interaction']
};
var plugins = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Colors: plugin_colors,
  Decimation: plugin_decimation,
  Filler: index,
  Legend: plugin_legend,
  SubTitle: plugin_subtitle,
  Title: plugin_title,
  Tooltip: plugin_tooltip
});
const addIfString = (labels, raw, index, addedLabels) => {
  if (typeof raw === 'string') {
    index = labels.push(raw) - 1;
    addedLabels.unshift({
      index,
      label: raw
    });
  } else if (isNaN(raw)) {
    index = null;
  }
  return index;
};
function findOrAddLabel(labels, raw, index, addedLabels) {
  const first = labels.indexOf(raw);
  if (first === -1) {
    return addIfString(labels, raw, index, addedLabels);
  }
  const last = labels.lastIndexOf(raw);
  return first !== last ? index : first;
}
const validIndex = (index, max) => index === null ? null : (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(Math.round(index), 0, max);
function _getLabelForValue(value) {
  const labels = this.getLabels();
  if (value >= 0 && value < labels.length) {
    return labels[value];
  }
  return value;
}
class CategoryScale extends Scale {
  static id = 'category';
  static defaults = {
    ticks: {
      callback: _getLabelForValue
    }
  };
  constructor(cfg) {
    super(cfg);
    this._startValue = undefined;
    this._valueRange = 0;
    this._addedLabels = [];
  }
  init(scaleOptions) {
    const added = this._addedLabels;
    if (added.length) {
      const labels = this.getLabels();
      for (const {
        index,
        label
      } of added) {
        if (labels[index] === label) {
          labels.splice(index, 1);
        }
      }
      this._addedLabels = [];
    }
    super.init(scaleOptions);
  }
  parse(raw, index) {
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(raw)) {
      return null;
    }
    const labels = this.getLabels();
    index = isFinite(index) && labels[index] === raw ? index : findOrAddLabel(labels, raw, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(index, raw), this._addedLabels);
    return validIndex(index, labels.length - 1);
  }
  determineDataLimits() {
    const {
      minDefined,
      maxDefined
    } = this.getUserBounds();
    let {
      min,
      max
    } = this.getMinMax(true);
    if (this.options.bounds === 'ticks') {
      if (!minDefined) {
        min = 0;
      }
      if (!maxDefined) {
        max = this.getLabels().length - 1;
      }
    }
    this.min = min;
    this.max = max;
  }
  buildTicks() {
    const min = this.min;
    const max = this.max;
    const offset = this.options.offset;
    const ticks = [];
    let labels = this.getLabels();
    labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
    this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
    this._startValue = this.min - (offset ? 0.5 : 0);
    for (let value = min; value <= max; value++) {
      ticks.push({
        value
      });
    }
    return ticks;
  }
  getLabelForValue(value) {
    return _getLabelForValue.call(this, value);
  }
  configure() {
    super.configure();
    if (!this.isHorizontal()) {
      this._reversePixels = !this._reversePixels;
    }
  }
  getPixelForValue(value) {
    if (typeof value !== 'number') {
      value = this.parse(value);
    }
    return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
  }
  getPixelForTick(index) {
    const ticks = this.ticks;
    if (index < 0 || index > ticks.length - 1) {
      return null;
    }
    return this.getPixelForValue(ticks[index].value);
  }
  getValueForPixel(pixel) {
    return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
function generateTicks$1(generationOptions, dataRange) {
  const ticks = [];
  const MIN_SPACING = 1e-14;
  const {
    bounds,
    step,
    min,
    max,
    precision,
    count,
    maxTicks,
    maxDigits,
    includeBounds
  } = generationOptions;
  const unit = step || 1;
  const maxSpaces = maxTicks - 1;
  const {
    min: rmin,
    max: rmax
  } = dataRange;
  const minDefined = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(min);
  const maxDefined = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(max);
  const countDefined = !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(count);
  const minSpacing = (rmax - rmin) / (maxDigits + 1);
  let spacing = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aH)((rmax - rmin) / maxSpaces / unit) * unit;
  let factor, niceMin, niceMax, numSpaces;
  if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
    return [{
      value: rmin
    }, {
      value: rmax
    }];
  }
  numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
  if (numSpaces > maxSpaces) {
    spacing = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aH)(numSpaces * spacing / maxSpaces / unit) * unit;
  }
  if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(precision)) {
    factor = Math.pow(10, precision);
    spacing = Math.ceil(spacing * factor) / factor;
  }
  if (bounds === 'ticks') {
    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing;
  } else {
    niceMin = rmin;
    niceMax = rmax;
  }
  if (minDefined && maxDefined && step && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aI)((max - min) / step, spacing / 1000)) {
    numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
    spacing = (max - min) / numSpaces;
    niceMin = min;
    niceMax = max;
  } else if (countDefined) {
    niceMin = minDefined ? min : niceMin;
    niceMax = maxDefined ? max : niceMax;
    numSpaces = count - 1;
    spacing = (niceMax - niceMin) / numSpaces;
  } else {
    numSpaces = (niceMax - niceMin) / spacing;
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aJ)(numSpaces, Math.round(numSpaces), spacing / 1000)) {
      numSpaces = Math.round(numSpaces);
    } else {
      numSpaces = Math.ceil(numSpaces);
    }
  }
  const decimalPlaces = Math.max((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aK)(spacing), (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aK)(niceMin));
  factor = Math.pow(10, (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(precision) ? decimalPlaces : precision);
  niceMin = Math.round(niceMin * factor) / factor;
  niceMax = Math.round(niceMax * factor) / factor;
  let j = 0;
  if (minDefined) {
    if (includeBounds && niceMin !== min) {
      ticks.push({
        value: min
      });
      if (niceMin < min) {
        j++;
      }
      if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aJ)(Math.round((niceMin + j * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
        j++;
      }
    } else if (niceMin < min) {
      j++;
    }
  }
  for (; j < numSpaces; ++j) {
    const tickValue = Math.round((niceMin + j * spacing) * factor) / factor;
    if (maxDefined && tickValue > max) {
      break;
    }
    ticks.push({
      value: tickValue
    });
  }
  if (maxDefined && includeBounds && niceMax !== max) {
    if (ticks.length && (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aJ)(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
      ticks[ticks.length - 1].value = max;
    } else {
      ticks.push({
        value: max
      });
    }
  } else if (!maxDefined || niceMax === max) {
    ticks.push({
      value: niceMax
    });
  }
  return ticks;
}
function relativeLabelSize(value, minSpacing, {
  horizontal,
  minRotation
}) {
  const rad = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(minRotation);
  const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 0.001;
  const length = 0.75 * minSpacing * ('' + value).length;
  return Math.min(minSpacing / ratio, length);
}
class LinearScaleBase extends Scale {
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._endValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(raw)) {
      return null;
    }
    if ((typeof raw === 'number' || raw instanceof Number) && !isFinite(+raw)) {
      return null;
    }
    return +raw;
  }
  handleTickRangeOptions() {
    const {
      beginAtZero
    } = this.options;
    const {
      minDefined,
      maxDefined
    } = this.getUserBounds();
    let {
      min,
      max
    } = this;
    const setMin = v => min = minDefined ? min : v;
    const setMax = v => max = maxDefined ? max : v;
    if (beginAtZero) {
      const minSign = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(min);
      const maxSign = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.s)(max);
      if (minSign < 0 && maxSign < 0) {
        setMax(0);
      } else if (minSign > 0 && maxSign > 0) {
        setMin(0);
      }
    }
    if (min === max) {
      let offset = max === 0 ? 1 : Math.abs(max * 0.05);
      setMax(max + offset);
      if (!beginAtZero) {
        setMin(min - offset);
      }
    }
    this.min = min;
    this.max = max;
  }
  getTickLimit() {
    const tickOpts = this.options.ticks;
    let {
      maxTicksLimit,
      stepSize
    } = tickOpts;
    let maxTicks;
    if (stepSize) {
      maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
      if (maxTicks > 1000) {
        console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
        maxTicks = 1000;
      }
    } else {
      maxTicks = this.computeTickLimit();
      maxTicksLimit = maxTicksLimit || 11;
    }
    if (maxTicksLimit) {
      maxTicks = Math.min(maxTicksLimit, maxTicks);
    }
    return maxTicks;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const opts = this.options;
    const tickOpts = opts.ticks;
    let maxTicks = this.getTickLimit();
    maxTicks = Math.max(2, maxTicks);
    const numericGeneratorOptions = {
      maxTicks,
      bounds: opts.bounds,
      min: opts.min,
      max: opts.max,
      precision: tickOpts.precision,
      step: tickOpts.stepSize,
      count: tickOpts.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: tickOpts.minRotation || 0,
      includeBounds: tickOpts.includeBounds !== false
    };
    const dataRange = this._range || this;
    const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
    if (opts.bounds === 'ticks') {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aG)(ticks, this, 'value');
    }
    if (opts.reverse) {
      ticks.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return ticks;
  }
  configure() {
    const ticks = this.ticks;
    let start = this.min;
    let end = this.max;
    super.configure();
    if (this.options.offset && ticks.length) {
      const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
      start -= offset;
      end += offset;
    }
    this._startValue = start;
    this._endValue = end;
    this._valueRange = end - start;
  }
  getLabelForValue(value) {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.o)(value, this.chart.options.locale, this.options.ticks.format);
  }
}
class LinearScale extends LinearScaleBase {
  static id = 'linear';
  static defaults = {
    ticks: {
      callback: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aL.formatters.numeric
    }
  };
  determineDataLimits() {
    const {
      min,
      max
    } = this.getMinMax(true);
    this.min = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(min) ? min : 0;
    this.max = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(max) ? max : 1;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const horizontal = this.isHorizontal();
    const length = horizontal ? this.width : this.height;
    const minRotation = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.options.ticks.minRotation);
    const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 0.001;
    const tickFont = this._resolveTickFontOptions(0);
    return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
  }
  getPixelForValue(value) {
    return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
  }
  getValueForPixel(pixel) {
    return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
  }
}
const log10Floor = v => Math.floor((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aM)(v));
const changeExponent = (v, m) => Math.pow(10, log10Floor(v) + m);
function isMajor(tickVal) {
  const remain = tickVal / Math.pow(10, log10Floor(tickVal));
  return remain === 1;
}
function steps(min, max, rangeExp) {
  const rangeStep = Math.pow(10, rangeExp);
  const start = Math.floor(min / rangeStep);
  const end = Math.ceil(max / rangeStep);
  return end - start;
}
function startExp(min, max) {
  const range = max - min;
  let rangeExp = log10Floor(range);
  while (steps(min, max, rangeExp) > 10) {
    rangeExp++;
  }
  while (steps(min, max, rangeExp) < 10) {
    rangeExp--;
  }
  return Math.min(rangeExp, log10Floor(min));
}
function generateTicks(generationOptions, {
  min,
  max
}) {
  min = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(generationOptions.min, min);
  const ticks = [];
  const minExp = log10Floor(min);
  let exp = startExp(min, max);
  let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
  const stepSize = Math.pow(10, exp);
  const base = minExp > exp ? Math.pow(10, minExp) : 0;
  const start = Math.round((min - base) * precision) / precision;
  const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
  let significand = Math.floor((start - offset) / Math.pow(10, exp));
  let value = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
  while (value < max) {
    ticks.push({
      value,
      major: isMajor(value),
      significand
    });
    if (significand >= 10) {
      significand = significand < 15 ? 15 : 20;
    } else {
      significand++;
    }
    if (significand >= 20) {
      exp++;
      significand = 2;
      precision = exp >= 0 ? 1 : precision;
    }
    value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
  }
  const lastTick = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.O)(generationOptions.max, value);
  ticks.push({
    value: lastTick,
    major: isMajor(lastTick),
    significand
  });
  return ticks;
}
class LogarithmicScale extends Scale {
  static id = 'logarithmic';
  static defaults = {
    ticks: {
      callback: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aL.formatters.logarithmic,
      major: {
        enabled: true
      }
    }
  };
  constructor(cfg) {
    super(cfg);
    this.start = undefined;
    this.end = undefined;
    this._startValue = undefined;
    this._valueRange = 0;
  }
  parse(raw, index) {
    const value = LinearScaleBase.prototype.parse.apply(this, [raw, index]);
    if (value === 0) {
      this._zero = true;
      return undefined;
    }
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(value) && value > 0 ? value : null;
  }
  determineDataLimits() {
    const {
      min,
      max
    } = this.getMinMax(true);
    this.min = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(min) ? Math.max(0, min) : null;
    this.max = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(max) ? Math.max(0, max) : null;
    if (this.options.beginAtZero) {
      this._zero = true;
    }
    if (this._zero && this.min !== this._suggestedMin && !(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(this._userMin)) {
      this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
    }
    this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const {
      minDefined,
      maxDefined
    } = this.getUserBounds();
    let min = this.min;
    let max = this.max;
    const setMin = v => min = minDefined ? min : v;
    const setMax = v => max = maxDefined ? max : v;
    if (min === max) {
      if (min <= 0) {
        setMin(1);
        setMax(10);
      } else {
        setMin(changeExponent(min, -1));
        setMax(changeExponent(max, +1));
      }
    }
    if (min <= 0) {
      setMin(changeExponent(max, -1));
    }
    if (max <= 0) {
      setMax(changeExponent(min, +1));
    }
    this.min = min;
    this.max = max;
  }
  buildTicks() {
    const opts = this.options;
    const generationOptions = {
      min: this._userMin,
      max: this._userMax
    };
    const ticks = generateTicks(generationOptions, this);
    if (opts.bounds === 'ticks') {
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aG)(ticks, this, 'value');
    }
    if (opts.reverse) {
      ticks.reverse();
      this.start = this.max;
      this.end = this.min;
    } else {
      this.start = this.min;
      this.end = this.max;
    }
    return ticks;
  }
  getLabelForValue(value) {
    return value === undefined ? '0' : (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.o)(value, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const start = this.min;
    super.configure();
    this._startValue = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aM)(start);
    this._valueRange = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aM)(this.max) - (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aM)(start);
  }
  getPixelForValue(value) {
    if (value === undefined || value === 0) {
      value = this.min;
    }
    if (value === null || isNaN(value)) {
      return NaN;
    }
    return this.getPixelForDecimal(value === this.min ? 0 : ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aM)(value) - this._startValue) / this._valueRange);
  }
  getValueForPixel(pixel) {
    const decimal = this.getDecimalForPixel(pixel);
    return Math.pow(10, this._startValue + decimal * this._valueRange);
  }
}
function getTickBackdropHeight(opts) {
  const tickOpts = opts.ticks;
  if (tickOpts.display && opts.display) {
    const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(tickOpts.backdropPadding);
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(tickOpts.font && tickOpts.font.size, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.d.font.size) + padding.height;
  }
  return 0;
}
function measureLabelSize(ctx, font, label) {
  label = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.b)(label) ? label : [label];
  return {
    w: (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aN)(ctx, font.string, label),
    h: label.length * font.lineHeight
  };
}
function determineLimits(angle, pos, size, min, max) {
  if (angle === min || angle === max) {
    return {
      start: pos - size / 2,
      end: pos + size / 2
    };
  } else if (angle < min || angle > max) {
    return {
      start: pos - size,
      end: pos
    };
  }
  return {
    start: pos,
    end: pos + size
  };
}
function fitWithPointLabels(scale) {
  const orig = {
    l: scale.left + scale._padding.left,
    r: scale.right - scale._padding.right,
    t: scale.top + scale._padding.top,
    b: scale.bottom - scale._padding.bottom
  };
  const limits = Object.assign({}, orig);
  const labelSizes = [];
  const padding = [];
  const valueCount = scale._pointLabels.length;
  const pointLabelOpts = scale.options.pointLabels;
  const additionalAngle = pointLabelOpts.centerPointLabels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P / valueCount : 0;
  for (let i = 0; i < valueCount; i++) {
    const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i));
    padding[i] = opts.padding;
    const pointPosition = scale.getPointPosition(i, scale.drawingArea + padding[i], additionalAngle);
    const plFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(opts.font);
    const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i]);
    labelSizes[i] = textSize;
    const angleRadians = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ay)(scale.getIndexAngle(i) + additionalAngle);
    const angle = Math.round((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.U)(angleRadians));
    const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
    const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
    updateLimits(limits, orig, angleRadians, hLimits, vLimits);
  }
  scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
  scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
}
function updateLimits(limits, orig, angle, hLimits, vLimits) {
  const sin = Math.abs(Math.sin(angle));
  const cos = Math.abs(Math.cos(angle));
  let x = 0;
  let y = 0;
  if (hLimits.start < orig.l) {
    x = (orig.l - hLimits.start) / sin;
    limits.l = Math.min(limits.l, orig.l - x);
  } else if (hLimits.end > orig.r) {
    x = (hLimits.end - orig.r) / sin;
    limits.r = Math.max(limits.r, orig.r + x);
  }
  if (vLimits.start < orig.t) {
    y = (orig.t - vLimits.start) / cos;
    limits.t = Math.min(limits.t, orig.t - y);
  } else if (vLimits.end > orig.b) {
    y = (vLimits.end - orig.b) / cos;
    limits.b = Math.max(limits.b, orig.b + y);
  }
}
function createPointLabelItem(scale, index, itemOpts) {
  const outerDistance = scale.drawingArea;
  const {
    extra,
    additionalAngle,
    padding,
    size
  } = itemOpts;
  const pointLabelPosition = scale.getPointPosition(index, outerDistance + extra + padding, additionalAngle);
  const angle = Math.round((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.U)((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ay)(pointLabelPosition.angle + _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H)));
  const y = yForAngle(pointLabelPosition.y, size.h, angle);
  const textAlign = getTextAlignForAngle(angle);
  const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
  return {
    visible: true,
    x: pointLabelPosition.x,
    y,
    textAlign,
    left,
    top: y,
    right: left + size.w,
    bottom: y + size.h
  };
}
function isNotOverlapped(item, area) {
  if (!area) {
    return true;
  }
  const {
    left,
    top,
    right,
    bottom
  } = item;
  const apexesInArea = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)({
    x: left,
    y: top
  }, area) || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)({
    x: left,
    y: bottom
  }, area) || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)({
    x: right,
    y: top
  }, area) || (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.C)({
    x: right,
    y: bottom
  }, area);
  return !apexesInArea;
}
function buildPointLabelItems(scale, labelSizes, padding) {
  const items = [];
  const valueCount = scale._pointLabels.length;
  const opts = scale.options;
  const {
    centerPointLabels,
    display
  } = opts.pointLabels;
  const itemOpts = {
    extra: getTickBackdropHeight(opts) / 2,
    additionalAngle: centerPointLabels ? _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.P / valueCount : 0
  };
  let area;
  for (let i = 0; i < valueCount; i++) {
    itemOpts.padding = padding[i];
    itemOpts.size = labelSizes[i];
    const item = createPointLabelItem(scale, i, itemOpts);
    items.push(item);
    if (display === 'auto') {
      item.visible = isNotOverlapped(item, area);
      if (item.visible) {
        area = item;
      }
    }
  }
  return items;
}
function getTextAlignForAngle(angle) {
  if (angle === 0 || angle === 180) {
    return 'center';
  } else if (angle < 180) {
    return 'left';
  }
  return 'right';
}
function leftForTextAlign(x, w, align) {
  if (align === 'right') {
    x -= w;
  } else if (align === 'center') {
    x -= w / 2;
  }
  return x;
}
function yForAngle(y, h, angle) {
  if (angle === 90 || angle === 270) {
    y -= h / 2;
  } else if (angle > 270 || angle < 90) {
    y -= h;
  }
  return y;
}
function drawPointLabelBox(ctx, opts, item) {
  const {
    left,
    top,
    right,
    bottom
  } = item;
  const {
    backdropColor
  } = opts;
  if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(backdropColor)) {
    const borderRadius = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aw)(opts.borderRadius);
    const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(opts.backdropPadding);
    ctx.fillStyle = backdropColor;
    const backdropLeft = left - padding.left;
    const backdropTop = top - padding.top;
    const backdropWidth = right - left + padding.width;
    const backdropHeight = bottom - top + padding.height;
    if (Object.values(borderRadius).some(v => v !== 0)) {
      ctx.beginPath();
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.au)(ctx, {
        x: backdropLeft,
        y: backdropTop,
        w: backdropWidth,
        h: backdropHeight,
        radius: borderRadius
      });
      ctx.fill();
    } else {
      ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
    }
  }
}
function drawPointLabels(scale, labelCount) {
  const {
    ctx,
    options: {
      pointLabels
    }
  } = scale;
  for (let i = labelCount - 1; i >= 0; i--) {
    const item = scale._pointLabelItems[i];
    if (!item.visible) {
      continue;
    }
    const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i));
    drawPointLabelBox(ctx, optsAtIndex, item);
    const plFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(optsAtIndex.font);
    const {
      x,
      y,
      textAlign
    } = item;
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(ctx, scale._pointLabels[i], x, y + plFont.lineHeight / 2, plFont, {
      color: optsAtIndex.color,
      textAlign: textAlign,
      textBaseline: 'middle'
    });
  }
}
function pathRadiusLine(scale, radius, circular, labelCount) {
  const {
    ctx
  } = scale;
  if (circular) {
    ctx.arc(scale.xCenter, scale.yCenter, radius, 0, _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T);
  } else {
    let pointPosition = scale.getPointPosition(0, radius);
    ctx.moveTo(pointPosition.x, pointPosition.y);
    for (let i = 1; i < labelCount; i++) {
      pointPosition = scale.getPointPosition(i, radius);
      ctx.lineTo(pointPosition.x, pointPosition.y);
    }
  }
}
function drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
  const ctx = scale.ctx;
  const circular = gridLineOpts.circular;
  const {
    color,
    lineWidth
  } = gridLineOpts;
  if (!circular && !labelCount || !color || !lineWidth || radius < 0) {
    return;
  }
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.setLineDash(borderOpts.dash);
  ctx.lineDashOffset = borderOpts.dashOffset;
  ctx.beginPath();
  pathRadiusLine(scale, radius, circular, labelCount);
  ctx.closePath();
  ctx.stroke();
  ctx.restore();
}
function createPointLabelContext(parent, index, label) {
  return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.j)(parent, {
    label,
    index,
    type: 'pointLabel'
  });
}
class RadialLinearScale extends LinearScaleBase {
  static id = 'radialLinear';
  static defaults = {
    display: true,
    animate: true,
    position: 'chartArea',
    angleLines: {
      display: true,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0.0
    },
    grid: {
      circular: false
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: true,
      callback: _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aL.formatters.numeric
    },
    pointLabels: {
      backdropColor: undefined,
      backdropPadding: 2,
      display: true,
      font: {
        size: 10
      },
      callback(label) {
        return label;
      },
      padding: 5,
      centerPointLabels: false
    }
  };
  static defaultRoutes = {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color'
  };
  static descriptors = {
    angleLines: {
      _fallback: 'grid'
    }
  };
  constructor(cfg) {
    super(cfg);
    this.xCenter = undefined;
    this.yCenter = undefined;
    this.drawingArea = undefined;
    this._pointLabels = [];
    this._pointLabelItems = [];
  }
  setDimensions() {
    const padding = this._padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(getTickBackdropHeight(this.options) / 2);
    const w = this.width = this.maxWidth - padding.width;
    const h = this.height = this.maxHeight - padding.height;
    this.xCenter = Math.floor(this.left + w / 2 + padding.left);
    this.yCenter = Math.floor(this.top + h / 2 + padding.top);
    this.drawingArea = Math.floor(Math.min(w, h) / 2);
  }
  determineDataLimits() {
    const {
      min,
      max
    } = this.getMinMax(false);
    this.min = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(min) && !isNaN(min) ? min : 0;
    this.max = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(max) && !isNaN(max) ? max : 0;
    this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
  }
  generateTickLabels(ticks) {
    LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
    this._pointLabels = this.getLabels().map((value, index) => {
      const label = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(this.options.pointLabels.callback, [value, index], this);
      return label || label === 0 ? label : '';
    }).filter((v, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const opts = this.options;
    if (opts.display && opts.pointLabels.display) {
      fitWithPointLabels(this);
    } else {
      this.setCenterPoint(0, 0, 0, 0);
    }
  }
  setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
    this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
    this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
    this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
  }
  getIndexAngle(index) {
    const angleMultiplier = _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.T / (this._pointLabels.length || 1);
    const startAngle = this.options.startAngle || 0;
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ay)(index * angleMultiplier + (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(startAngle));
  }
  getDistanceFromCenterForValue(value) {
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(value)) {
      return NaN;
    }
    const scalingFactor = this.drawingArea / (this.max - this.min);
    if (this.options.reverse) {
      return (this.max - value) * scalingFactor;
    }
    return (value - this.min) * scalingFactor;
  }
  getValueForDistanceFromCenter(distance) {
    if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(distance)) {
      return NaN;
    }
    const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
  }
  getPointLabelContext(index) {
    const pointLabels = this._pointLabels || [];
    if (index >= 0 && index < pointLabels.length) {
      const pointLabel = pointLabels[index];
      return createPointLabelContext(this.getContext(), index, pointLabel);
    }
  }
  getPointPosition(index, distanceFromCenter, additionalAngle = 0) {
    const angle = this.getIndexAngle(index) - _chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.H + additionalAngle;
    return {
      x: Math.cos(angle) * distanceFromCenter + this.xCenter,
      y: Math.sin(angle) * distanceFromCenter + this.yCenter,
      angle
    };
  }
  getPointPositionForValue(index, value) {
    return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
  }
  getBasePosition(index) {
    return this.getPointPositionForValue(index || 0, this.getBaseValue());
  }
  getPointLabelPosition(index) {
    const {
      left,
      top,
      right,
      bottom
    } = this._pointLabelItems[index];
    return {
      left,
      top,
      right,
      bottom
    };
  }
  drawBackground() {
    const {
      backgroundColor,
      grid: {
        circular
      }
    } = this.options;
    if (backgroundColor) {
      const ctx = this.ctx;
      ctx.save();
      ctx.beginPath();
      pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
      ctx.closePath();
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore();
    }
  }
  drawGrid() {
    const ctx = this.ctx;
    const opts = this.options;
    const {
      angleLines,
      grid,
      border
    } = opts;
    const labelCount = this._pointLabels.length;
    let i, offset, position;
    if (opts.pointLabels.display) {
      drawPointLabels(this, labelCount);
    }
    if (grid.display) {
      this.ticks.forEach((tick, index) => {
        if (index !== 0) {
          offset = this.getDistanceFromCenterForValue(tick.value);
          const context = this.getContext(index);
          const optsAtIndex = grid.setContext(context);
          const optsAtIndexBorder = border.setContext(context);
          drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
        }
      });
    }
    if (angleLines.display) {
      ctx.save();
      for (i = labelCount - 1; i >= 0; i--) {
        const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i));
        const {
          color,
          lineWidth
        } = optsAtIndex;
        if (!lineWidth || !color) {
          continue;
        }
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.setLineDash(optsAtIndex.borderDash);
        ctx.lineDashOffset = optsAtIndex.borderDashOffset;
        offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
        position = this.getPointPosition(i, offset);
        ctx.beginPath();
        ctx.moveTo(this.xCenter, this.yCenter);
        ctx.lineTo(position.x, position.y);
        ctx.stroke();
      }
      ctx.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const ctx = this.ctx;
    const opts = this.options;
    const tickOpts = opts.ticks;
    if (!tickOpts.display) {
      return;
    }
    const startAngle = this.getIndexAngle(0);
    let offset, width;
    ctx.save();
    ctx.translate(this.xCenter, this.yCenter);
    ctx.rotate(startAngle);
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    this.ticks.forEach((tick, index) => {
      if (index === 0 && !opts.reverse) {
        return;
      }
      const optsAtIndex = tickOpts.setContext(this.getContext(index));
      const tickFont = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.a0)(optsAtIndex.font);
      offset = this.getDistanceFromCenterForValue(this.ticks[index].value);
      if (optsAtIndex.showLabelBackdrop) {
        ctx.font = tickFont.string;
        width = ctx.measureText(tick.label).width;
        ctx.fillStyle = optsAtIndex.backdropColor;
        const padding = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.E)(optsAtIndex.backdropPadding);
        ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
      }
      (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Z)(ctx, tick.label, 0, -offset, tickFont, {
        color: optsAtIndex.color,
        strokeColor: optsAtIndex.textStrokeColor,
        strokeWidth: optsAtIndex.textStrokeWidth
      });
    });
    ctx.restore();
  }
  drawTitle() {}
}
const INTERVALS = {
  millisecond: {
    common: true,
    size: 1,
    steps: 1000
  },
  second: {
    common: true,
    size: 1000,
    steps: 60
  },
  minute: {
    common: true,
    size: 60000,
    steps: 60
  },
  hour: {
    common: true,
    size: 3600000,
    steps: 24
  },
  day: {
    common: true,
    size: 86400000,
    steps: 30
  },
  week: {
    common: false,
    size: 604800000,
    steps: 4
  },
  month: {
    common: true,
    size: 2.628e9,
    steps: 12
  },
  quarter: {
    common: false,
    size: 7.884e9,
    steps: 4
  },
  year: {
    common: true,
    size: 3.154e10
  }
};
const UNITS = /* #__PURE__ */Object.keys(INTERVALS);
function sorter(a, b) {
  return a - b;
}
function parse(scale, input) {
  if ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.k)(input)) {
    return null;
  }
  const adapter = scale._adapter;
  const {
    parser,
    round,
    isoWeekday
  } = scale._parseOpts;
  let value = input;
  if (typeof parser === 'function') {
    value = parser(value);
  }
  if (!(0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(value)) {
    value = typeof parser === 'string' ? adapter.parse(value, parser) : adapter.parse(value);
  }
  if (value === null) {
    return null;
  }
  if (round) {
    value = round === 'week' && ((0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, 'isoWeek', isoWeekday) : adapter.startOf(value, round);
  }
  return +value;
}
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
  const ilen = UNITS.length;
  for (let i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
    const interval = INTERVALS[UNITS[i]];
    const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
    if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
      return UNITS[i];
    }
  }
  return UNITS[ilen - 1];
}
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
  for (let i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
    const unit = UNITS[i];
    if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
      return unit;
    }
  }
  return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}
function determineMajorUnit(unit) {
  for (let i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
    if (INTERVALS[UNITS[i]].common) {
      return UNITS[i];
    }
  }
}
function addTick(ticks, time, timestamps) {
  if (!timestamps) {
    ticks[time] = true;
  } else if (timestamps.length) {
    const {
      lo,
      hi
    } = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aP)(timestamps, time);
    const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
    ticks[timestamp] = true;
  }
}
function setMajorTicks(scale, ticks, map, majorUnit) {
  const adapter = scale._adapter;
  const first = +adapter.startOf(ticks[0].value, majorUnit);
  const last = ticks[ticks.length - 1].value;
  let major, index;
  for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
    index = map[major];
    if (index >= 0) {
      ticks[index].major = true;
    }
  }
  return ticks;
}
function ticksFromTimestamps(scale, values, majorUnit) {
  const ticks = [];
  const map = {};
  const ilen = values.length;
  let i, value;
  for (i = 0; i < ilen; ++i) {
    value = values[i];
    map[value] = i;
    ticks.push({
      value,
      major: false
    });
  }
  return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map, majorUnit);
}
class TimeScale extends Scale {
  static id = 'time';
  static defaults = {
    bounds: 'data',
    adapters: {},
    time: {
      parser: false,
      unit: false,
      round: false,
      isoWeekday: false,
      minUnit: 'millisecond',
      displayFormats: {}
    },
    ticks: {
      source: 'auto',
      callback: false,
      major: {
        enabled: false
      }
    }
  };
  constructor(props) {
    super(props);
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
    this._unit = 'day';
    this._majorUnit = undefined;
    this._offsets = {};
    this._normalized = false;
    this._parseOpts = undefined;
  }
  init(scaleOpts, opts = {}) {
    const time = scaleOpts.time || (scaleOpts.time = {});
    const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
    adapter.init(opts);
    (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.ab)(time.displayFormats, adapter.formats());
    this._parseOpts = {
      parser: time.parser,
      round: time.round,
      isoWeekday: time.isoWeekday
    };
    super.init(scaleOpts);
    this._normalized = opts.normalized;
  }
  parse(raw, index) {
    if (raw === undefined) {
      return null;
    }
    return parse(this, raw);
  }
  beforeLayout() {
    super.beforeLayout();
    this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const options = this.options;
    const adapter = this._adapter;
    const unit = options.time.unit || 'day';
    let {
      min,
      max,
      minDefined,
      maxDefined
    } = this.getUserBounds();
    function _applyBounds(bounds) {
      if (!minDefined && !isNaN(bounds.min)) {
        min = Math.min(min, bounds.min);
      }
      if (!maxDefined && !isNaN(bounds.max)) {
        max = Math.max(max, bounds.max);
      }
    }
    if (!minDefined || !maxDefined) {
      _applyBounds(this._getLabelBounds());
      if (options.bounds !== 'ticks' || options.ticks.source !== 'labels') {
        _applyBounds(this.getMinMax(false));
      }
    }
    min = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
    max = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.g)(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
    this.min = Math.min(min, max - 1);
    this.max = Math.max(min + 1, max);
  }
  _getLabelBounds() {
    const arr = this.getLabelTimestamps();
    let min = Number.POSITIVE_INFINITY;
    let max = Number.NEGATIVE_INFINITY;
    if (arr.length) {
      min = arr[0];
      max = arr[arr.length - 1];
    }
    return {
      min,
      max
    };
  }
  buildTicks() {
    const options = this.options;
    const timeOpts = options.time;
    const tickOpts = options.ticks;
    const timestamps = tickOpts.source === 'labels' ? this.getLabelTimestamps() : this._generate();
    if (options.bounds === 'ticks' && timestamps.length) {
      this.min = this._userMin || timestamps[0];
      this.max = this._userMax || timestamps[timestamps.length - 1];
    }
    const min = this.min;
    const max = this.max;
    const ticks = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.aO)(timestamps, min, max);
    this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
    this._majorUnit = !tickOpts.major.enabled || this._unit === 'year' ? undefined : determineMajorUnit(this._unit);
    this.initOffsets(timestamps);
    if (options.reverse) {
      ticks.reverse();
    }
    return ticksFromTimestamps(this, ticks, this._majorUnit);
  }
  afterAutoSkip() {
    if (this.options.offsetAfterAutoskip) {
      this.initOffsets(this.ticks.map(tick => +tick.value));
    }
  }
  initOffsets(timestamps = []) {
    let start = 0;
    let end = 0;
    let first, last;
    if (this.options.offset && timestamps.length) {
      first = this.getDecimalForValue(timestamps[0]);
      if (timestamps.length === 1) {
        start = 1 - first;
      } else {
        start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
      }
      last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
      if (timestamps.length === 1) {
        end = last;
      } else {
        end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
      }
    }
    const limit = timestamps.length < 3 ? 0.5 : 0.25;
    start = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(start, 0, limit);
    end = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.S)(end, 0, limit);
    this._offsets = {
      start,
      end,
      factor: 1 / (start + 1 + end)
    };
  }
  _generate() {
    const adapter = this._adapter;
    const min = this.min;
    const max = this.max;
    const options = this.options;
    const timeOpts = options.time;
    const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
    const stepSize = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.v)(options.ticks.stepSize, 1);
    const weekday = minor === 'week' ? timeOpts.isoWeekday : false;
    const hasWeekday = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.x)(weekday) || weekday === true;
    const ticks = {};
    let first = min;
    let time, count;
    if (hasWeekday) {
      first = +adapter.startOf(first, 'isoWeek', weekday);
    }
    first = +adapter.startOf(first, hasWeekday ? 'day' : minor);
    if (adapter.diff(max, min, minor) > 100000 * stepSize) {
      throw new Error(min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor);
    }
    const timestamps = options.ticks.source === 'data' && this.getDataTimestamps();
    for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
      addTick(ticks, time, timestamps);
    }
    if (time === max || options.bounds === 'ticks' || count === 1) {
      addTick(ticks, time, timestamps);
    }
    return Object.keys(ticks).sort(sorter).map(x => +x);
  }
  getLabelForValue(value) {
    const adapter = this._adapter;
    const timeOpts = this.options.time;
    if (timeOpts.tooltipFormat) {
      return adapter.format(value, timeOpts.tooltipFormat);
    }
    return adapter.format(value, timeOpts.displayFormats.datetime);
  }
  format(value, format) {
    const options = this.options;
    const formats = options.time.displayFormats;
    const unit = this._unit;
    const fmt = format || formats[unit];
    return this._adapter.format(value, fmt);
  }
  _tickFormatFunction(time, index, ticks, format) {
    const options = this.options;
    const formatter = options.ticks.callback;
    if (formatter) {
      return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.Q)(formatter, [time, index, ticks], this);
    }
    const formats = options.time.displayFormats;
    const unit = this._unit;
    const majorUnit = this._majorUnit;
    const minorFormat = unit && formats[unit];
    const majorFormat = majorUnit && formats[majorUnit];
    const tick = ticks[index];
    const major = majorUnit && majorFormat && tick && tick.major;
    return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
  }
  generateTickLabels(ticks) {
    let i, ilen, tick;
    for (i = 0, ilen = ticks.length; i < ilen; ++i) {
      tick = ticks[i];
      tick.label = this._tickFormatFunction(tick.value, i, ticks);
    }
  }
  getDecimalForValue(value) {
    return value === null ? NaN : (value - this.min) / (this.max - this.min);
  }
  getPixelForValue(value) {
    const offsets = this._offsets;
    const pos = this.getDecimalForValue(value);
    return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
  }
  getValueForPixel(pixel) {
    const offsets = this._offsets;
    const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return this.min + pos * (this.max - this.min);
  }
  _getLabelSize(label) {
    const ticksOpts = this.options.ticks;
    const tickLabelWidth = this.ctx.measureText(label).width;
    const angle = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.t)(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
    const cosRotation = Math.cos(angle);
    const sinRotation = Math.sin(angle);
    const tickFontSize = this._resolveTickFontOptions(0).size;
    return {
      w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
      h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
    };
  }
  _getLabelCapacity(exampleTime) {
    const timeOpts = this.options.time;
    const displayFormats = timeOpts.displayFormats;
    const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
    const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [exampleTime], this._majorUnit), format);
    const size = this._getLabelSize(exampleLabel);
    const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
    return capacity > 0 ? capacity : 1;
  }
  getDataTimestamps() {
    let timestamps = this._cache.data || [];
    let i, ilen;
    if (timestamps.length) {
      return timestamps;
    }
    const metas = this.getMatchingVisibleMetas();
    if (this._normalized && metas.length) {
      return this._cache.data = metas[0].controller.getAllParsedValues(this);
    }
    for (i = 0, ilen = metas.length; i < ilen; ++i) {
      timestamps = timestamps.concat(metas[i].controller.getAllParsedValues(this));
    }
    return this._cache.data = this.normalize(timestamps);
  }
  getLabelTimestamps() {
    const timestamps = this._cache.labels || [];
    let i, ilen;
    if (timestamps.length) {
      return timestamps;
    }
    const labels = this.getLabels();
    for (i = 0, ilen = labels.length; i < ilen; ++i) {
      timestamps.push(parse(this, labels[i]));
    }
    return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
  }
  normalize(values) {
    return (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__._)(values.sort(sorter));
  }
}
function interpolate(table, val, reverse) {
  let lo = 0;
  let hi = table.length - 1;
  let prevSource, nextSource, prevTarget, nextTarget;
  if (reverse) {
    if (val >= table[lo].pos && val <= table[hi].pos) {
      ({
        lo,
        hi
      } = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.B)(table, 'pos', val));
    }
    ({
      pos: prevSource,
      time: prevTarget
    } = table[lo]);
    ({
      pos: nextSource,
      time: nextTarget
    } = table[hi]);
  } else {
    if (val >= table[lo].time && val <= table[hi].time) {
      ({
        lo,
        hi
      } = (0,_chunks_helpers_segment_js__WEBPACK_IMPORTED_MODULE_0__.B)(table, 'time', val));
    }
    ({
      time: prevSource,
      pos: prevTarget
    } = table[lo]);
    ({
      time: nextSource,
      pos: nextTarget
    } = table[hi]);
  }
  const span = nextSource - prevSource;
  return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
}
class TimeSeriesScale extends TimeScale {
  static id = 'timeseries';
  static defaults = TimeScale.defaults;
  constructor(props) {
    super(props);
    this._table = [];
    this._minPos = undefined;
    this._tableRange = undefined;
  }
  initOffsets() {
    const timestamps = this._getTimestampsForTable();
    const table = this._table = this.buildLookupTable(timestamps);
    this._minPos = interpolate(table, this.min);
    this._tableRange = interpolate(table, this.max) - this._minPos;
    super.initOffsets(timestamps);
  }
  buildLookupTable(timestamps) {
    const {
      min,
      max
    } = this;
    const items = [];
    const table = [];
    let i, ilen, prev, curr, next;
    for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
      curr = timestamps[i];
      if (curr >= min && curr <= max) {
        items.push(curr);
      }
    }
    if (items.length < 2) {
      return [{
        time: min,
        pos: 0
      }, {
        time: max,
        pos: 1
      }];
    }
    for (i = 0, ilen = items.length; i < ilen; ++i) {
      next = items[i + 1];
      prev = items[i - 1];
      curr = items[i];
      if (Math.round((next + prev) / 2) !== curr) {
        table.push({
          time: curr,
          pos: i / (ilen - 1)
        });
      }
    }
    return table;
  }
  _generate() {
    const min = this.min;
    const max = this.max;
    let timestamps = super.getDataTimestamps();
    if (!timestamps.includes(min) || !timestamps.length) {
      timestamps.splice(0, 0, min);
    }
    if (!timestamps.includes(max) || timestamps.length === 1) {
      timestamps.push(max);
    }
    return timestamps.sort((a, b) => a - b);
  }
  _getTimestampsForTable() {
    let timestamps = this._cache.all || [];
    if (timestamps.length) {
      return timestamps;
    }
    const data = this.getDataTimestamps();
    const label = this.getLabelTimestamps();
    if (data.length && label.length) {
      timestamps = this.normalize(data.concat(label));
    } else {
      timestamps = data.length ? data : label;
    }
    timestamps = this._cache.all = timestamps;
    return timestamps;
  }
  getDecimalForValue(value) {
    return (interpolate(this._table, value) - this._minPos) / this._tableRange;
  }
  getValueForPixel(pixel) {
    const offsets = this._offsets;
    const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
    return interpolate(this._table, decimal * this._tableRange + this._minPos, true);
  }
}
var scales = /*#__PURE__*/Object.freeze({
  __proto__: null,
  CategoryScale: CategoryScale,
  LinearScale: LinearScale,
  LogarithmicScale: LogarithmicScale,
  RadialLinearScale: RadialLinearScale,
  TimeScale: TimeScale,
  TimeSeriesScale: TimeSeriesScale
});
const registerables = [controllers, elements, plugins, scales];


/***/ }),

/***/ 22730:
/*!**************************************************************!*\
  !*** ./node_modules/chart.js/dist/chunks/helpers.segment.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ unclipArea),
/* harmony export */   A: () => (/* binding */ _rlookupByKey),
/* harmony export */   B: () => (/* binding */ _lookupByKey),
/* harmony export */   C: () => (/* binding */ _isPointInArea),
/* harmony export */   D: () => (/* binding */ getAngleFromPoint),
/* harmony export */   E: () => (/* binding */ toPadding),
/* harmony export */   F: () => (/* binding */ each),
/* harmony export */   G: () => (/* binding */ getMaximumSize),
/* harmony export */   H: () => (/* binding */ HALF_PI),
/* harmony export */   I: () => (/* binding */ _getParentNode),
/* harmony export */   J: () => (/* binding */ readUsedSize),
/* harmony export */   K: () => (/* binding */ supportsEventListenerOptions),
/* harmony export */   L: () => (/* binding */ throttled),
/* harmony export */   M: () => (/* binding */ _isDomSupported),
/* harmony export */   N: () => (/* binding */ _factorize),
/* harmony export */   O: () => (/* binding */ finiteOrDefault),
/* harmony export */   P: () => (/* binding */ PI),
/* harmony export */   Q: () => (/* binding */ callback),
/* harmony export */   R: () => (/* binding */ _addGrace),
/* harmony export */   S: () => (/* binding */ _limitValue),
/* harmony export */   T: () => (/* binding */ TAU),
/* harmony export */   U: () => (/* binding */ toDegrees),
/* harmony export */   V: () => (/* binding */ _measureText),
/* harmony export */   W: () => (/* binding */ _int16Range),
/* harmony export */   X: () => (/* binding */ _alignPixel),
/* harmony export */   Y: () => (/* binding */ clipArea),
/* harmony export */   Z: () => (/* binding */ renderText),
/* harmony export */   _: () => (/* binding */ _arrayUnique),
/* harmony export */   a: () => (/* binding */ resolve),
/* harmony export */   a$: () => (/* binding */ fontString),
/* harmony export */   a0: () => (/* binding */ toFont),
/* harmony export */   a1: () => (/* binding */ _toLeftRightCenter),
/* harmony export */   a2: () => (/* binding */ _alignStartEnd),
/* harmony export */   a3: () => (/* binding */ overrides),
/* harmony export */   a4: () => (/* binding */ merge),
/* harmony export */   a5: () => (/* binding */ _capitalize),
/* harmony export */   a6: () => (/* binding */ descriptors),
/* harmony export */   a7: () => (/* binding */ isFunction),
/* harmony export */   a8: () => (/* binding */ _attachContext),
/* harmony export */   a9: () => (/* binding */ _createResolver),
/* harmony export */   aA: () => (/* binding */ overrideTextDirection),
/* harmony export */   aB: () => (/* binding */ _textX),
/* harmony export */   aC: () => (/* binding */ restoreTextDirection),
/* harmony export */   aD: () => (/* binding */ drawPointLegend),
/* harmony export */   aE: () => (/* binding */ distanceBetweenPoints),
/* harmony export */   aF: () => (/* binding */ noop),
/* harmony export */   aG: () => (/* binding */ _setMinAndMaxByKey),
/* harmony export */   aH: () => (/* binding */ niceNum),
/* harmony export */   aI: () => (/* binding */ almostWhole),
/* harmony export */   aJ: () => (/* binding */ almostEquals),
/* harmony export */   aK: () => (/* binding */ _decimalPlaces),
/* harmony export */   aL: () => (/* binding */ Ticks),
/* harmony export */   aM: () => (/* binding */ log10),
/* harmony export */   aN: () => (/* binding */ _longestText),
/* harmony export */   aO: () => (/* binding */ _filterBetween),
/* harmony export */   aP: () => (/* binding */ _lookup),
/* harmony export */   aQ: () => (/* binding */ isPatternOrGradient),
/* harmony export */   aR: () => (/* binding */ getHoverColor),
/* harmony export */   aS: () => (/* binding */ clone),
/* harmony export */   aT: () => (/* binding */ _merger),
/* harmony export */   aU: () => (/* binding */ _mergerIf),
/* harmony export */   aV: () => (/* binding */ _deprecated),
/* harmony export */   aW: () => (/* binding */ _splitKey),
/* harmony export */   aX: () => (/* binding */ toFontString),
/* harmony export */   aY: () => (/* binding */ splineCurve),
/* harmony export */   aZ: () => (/* binding */ splineCurveMonotone),
/* harmony export */   a_: () => (/* binding */ getStyle),
/* harmony export */   aa: () => (/* binding */ _descriptors),
/* harmony export */   ab: () => (/* binding */ mergeIf),
/* harmony export */   ac: () => (/* binding */ uid),
/* harmony export */   ad: () => (/* binding */ debounce),
/* harmony export */   ae: () => (/* binding */ retinaScale),
/* harmony export */   af: () => (/* binding */ clearCanvas),
/* harmony export */   ag: () => (/* binding */ setsEqual),
/* harmony export */   ah: () => (/* binding */ _elementsEqual),
/* harmony export */   ai: () => (/* binding */ _isClickEvent),
/* harmony export */   aj: () => (/* binding */ _isBetween),
/* harmony export */   ak: () => (/* binding */ _readValueToProps),
/* harmony export */   al: () => (/* binding */ _updateBezierControlPoints),
/* harmony export */   am: () => (/* binding */ _computeSegments),
/* harmony export */   an: () => (/* binding */ _boundSegments),
/* harmony export */   ao: () => (/* binding */ _steppedInterpolation),
/* harmony export */   ap: () => (/* binding */ _bezierInterpolation),
/* harmony export */   aq: () => (/* binding */ _pointInLine),
/* harmony export */   ar: () => (/* binding */ _steppedLineTo),
/* harmony export */   as: () => (/* binding */ _bezierCurveTo),
/* harmony export */   at: () => (/* binding */ drawPoint),
/* harmony export */   au: () => (/* binding */ addRoundedRectPath),
/* harmony export */   av: () => (/* binding */ toTRBL),
/* harmony export */   aw: () => (/* binding */ toTRBLCorners),
/* harmony export */   ax: () => (/* binding */ _boundSegment),
/* harmony export */   ay: () => (/* binding */ _normalizeAngle),
/* harmony export */   az: () => (/* binding */ getRtlAdapter),
/* harmony export */   b: () => (/* binding */ isArray),
/* harmony export */   b0: () => (/* binding */ toLineHeight),
/* harmony export */   b1: () => (/* binding */ PITAU),
/* harmony export */   b2: () => (/* binding */ INFINITY),
/* harmony export */   b3: () => (/* binding */ RAD_PER_DEG),
/* harmony export */   b4: () => (/* binding */ QUARTER_PI),
/* harmony export */   b5: () => (/* binding */ TWO_THIRDS_PI),
/* harmony export */   b6: () => (/* binding */ _angleDiff),
/* harmony export */   c: () => (/* binding */ color),
/* harmony export */   d: () => (/* binding */ defaults),
/* harmony export */   e: () => (/* binding */ effects),
/* harmony export */   f: () => (/* binding */ resolveObjectKey),
/* harmony export */   g: () => (/* binding */ isNumberFinite),
/* harmony export */   h: () => (/* binding */ defined),
/* harmony export */   i: () => (/* binding */ isObject),
/* harmony export */   j: () => (/* binding */ createContext),
/* harmony export */   k: () => (/* binding */ isNullOrUndef),
/* harmony export */   l: () => (/* binding */ listenArrayEvents),
/* harmony export */   m: () => (/* binding */ toPercentage),
/* harmony export */   n: () => (/* binding */ toDimension),
/* harmony export */   o: () => (/* binding */ formatNumber),
/* harmony export */   p: () => (/* binding */ _angleBetween),
/* harmony export */   q: () => (/* binding */ _getStartAndCountOfVisiblePoints),
/* harmony export */   r: () => (/* binding */ requestAnimFrame),
/* harmony export */   s: () => (/* binding */ sign),
/* harmony export */   t: () => (/* binding */ toRadians),
/* harmony export */   u: () => (/* binding */ unlistenArrayEvents),
/* harmony export */   v: () => (/* binding */ valueOrDefault),
/* harmony export */   w: () => (/* binding */ _scaleRangesChanged),
/* harmony export */   x: () => (/* binding */ isNumber),
/* harmony export */   y: () => (/* binding */ _parseObjectDataRadialScale),
/* harmony export */   z: () => (/* binding */ getRelativePosition)
/* harmony export */ });
/* harmony import */ var _kurkle_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kurkle/color */ 53446);
/*!
 * Chart.js v4.4.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */


/**
 * @namespace Chart.helpers
 */ /**
    * An empty function that can be used, for example, for optional callback.
    */
function noop() {
  /* noop */}
/**
 * Returns a unique id, sequentially generated from a global variable.
 */
const uid = (() => {
  let id = 0;
  return () => id++;
})();
/**
 * Returns true if `value` is neither null nor undefined, else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */
function isNullOrUndef(value) {
  return value === null || typeof value === 'undefined';
}
/**
 * Returns true if `value` is an array (including typed arrays), else returns false.
 * @param value - The value to test.
 * @function
 */
function isArray(value) {
  if (Array.isArray && Array.isArray(value)) {
    return true;
  }
  const type = Object.prototype.toString.call(value);
  if (type.slice(0, 7) === '[object' && type.slice(-6) === 'Array]') {
    return true;
  }
  return false;
}
/**
 * Returns true if `value` is an object (excluding null), else returns false.
 * @param value - The value to test.
 * @since 2.7.0
 */
function isObject(value) {
  return value !== null && Object.prototype.toString.call(value) === '[object Object]';
}
/**
 * Returns true if `value` is a finite number, else returns false
 * @param value  - The value to test.
 */
function isNumberFinite(value) {
  return (typeof value === 'number' || value instanceof Number) && isFinite(+value);
}
/**
 * Returns `value` if finite, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is not finite.
 */
function finiteOrDefault(value, defaultValue) {
  return isNumberFinite(value) ? value : defaultValue;
}
/**
 * Returns `value` if defined, else returns `defaultValue`.
 * @param value - The value to return if defined.
 * @param defaultValue - The value to return if `value` is undefined.
 */
function valueOrDefault(value, defaultValue) {
  return typeof value === 'undefined' ? defaultValue : value;
}
const toPercentage = (value, dimension) => typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 : +value / dimension;
const toDimension = (value, dimension) => typeof value === 'string' && value.endsWith('%') ? parseFloat(value) / 100 * dimension : +value;
/**
 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
 * @param fn - The function to call.
 * @param args - The arguments with which `fn` should be called.
 * @param [thisArg] - The value of `this` provided for the call to `fn`.
 */
function callback(fn, args, thisArg) {
  if (fn && typeof fn.call === 'function') {
    return fn.apply(thisArg, args);
  }
}
function each(loopable, fn, thisArg, reverse) {
  let i, len, keys;
  if (isArray(loopable)) {
    len = loopable.length;
    if (reverse) {
      for (i = len - 1; i >= 0; i--) {
        fn.call(thisArg, loopable[i], i);
      }
    } else {
      for (i = 0; i < len; i++) {
        fn.call(thisArg, loopable[i], i);
      }
    }
  } else if (isObject(loopable)) {
    keys = Object.keys(loopable);
    len = keys.length;
    for (i = 0; i < len; i++) {
      fn.call(thisArg, loopable[keys[i]], keys[i]);
    }
  }
}
/**
 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
 * @param a0 - The array to compare
 * @param a1 - The array to compare
 * @private
 */
function _elementsEqual(a0, a1) {
  let i, ilen, v0, v1;
  if (!a0 || !a1 || a0.length !== a1.length) {
    return false;
  }
  for (i = 0, ilen = a0.length; i < ilen; ++i) {
    v0 = a0[i];
    v1 = a1[i];
    if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
      return false;
    }
  }
  return true;
}
/**
 * Returns a deep copy of `source` without keeping references on objects and arrays.
 * @param source - The value to clone.
 */
function clone(source) {
  if (isArray(source)) {
    return source.map(clone);
  }
  if (isObject(source)) {
    const target = Object.create(null);
    const keys = Object.keys(source);
    const klen = keys.length;
    let k = 0;
    for (; k < klen; ++k) {
      target[keys[k]] = clone(source[keys[k]]);
    }
    return target;
  }
  return source;
}
function isValidKey(key) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
}
/**
 * The default merger when Chart.helpers.merge is called without merger option.
 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
 * @private
 */
function _merger(key, target, source, options) {
  if (!isValidKey(key)) {
    return;
  }
  const tval = target[key];
  const sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    merge(tval, sval, options);
  } else {
    target[key] = clone(sval);
  }
}
function merge(target, source, options) {
  const sources = isArray(source) ? source : [source];
  const ilen = sources.length;
  if (!isObject(target)) {
    return target;
  }
  options = options || {};
  const merger = options.merger || _merger;
  let current;
  for (let i = 0; i < ilen; ++i) {
    current = sources[i];
    if (!isObject(current)) {
      continue;
    }
    const keys = Object.keys(current);
    for (let k = 0, klen = keys.length; k < klen; ++k) {
      merger(keys[k], target, current, options);
    }
  }
  return target;
}
function mergeIf(target, source) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  return merge(target, source, {
    merger: _mergerIf
  });
}
/**
 * Merges source[key] in target[key] only if target[key] is undefined.
 * @private
 */
function _mergerIf(key, target, source) {
  if (!isValidKey(key)) {
    return;
  }
  const tval = target[key];
  const sval = source[key];
  if (isObject(tval) && isObject(sval)) {
    mergeIf(tval, sval);
  } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
    target[key] = clone(sval);
  }
}
/**
 * @private
 */
function _deprecated(scope, value, previous, current) {
  if (value !== undefined) {
    console.warn(scope + ': "' + previous + '" is deprecated. Please use "' + current + '" instead');
  }
}
// resolveObjectKey resolver cache
const keyResolvers = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  '': v => v,
  // default resolvers
  x: o => o.x,
  y: o => o.y
};
/**
 * @private
 */
function _splitKey(key) {
  const parts = key.split('.');
  const keys = [];
  let tmp = '';
  for (const part of parts) {
    tmp += part;
    if (tmp.endsWith('\\')) {
      tmp = tmp.slice(0, -1) + '.';
    } else {
      keys.push(tmp);
      tmp = '';
    }
  }
  return keys;
}
function _getKeyResolver(key) {
  const keys = _splitKey(key);
  return obj => {
    for (const k of keys) {
      if (k === '') {
        break;
      }
      obj = obj && obj[k];
    }
    return obj;
  };
}
function resolveObjectKey(obj, key) {
  const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
  return resolver(obj);
}
/**
 * @private
 */
function _capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const defined = value => typeof value !== 'undefined';
const isFunction = value => typeof value === 'function';
// Adapted from https://stackoverflow.com/questions/31128855/comparing-ecma6-sets-for-equality#31129384
const setsEqual = (a, b) => {
  if (a.size !== b.size) {
    return false;
  }
  for (const item of a) {
    if (!b.has(item)) {
      return false;
    }
  }
  return true;
};
/**
 * @param e - The event
 * @private
 */
function _isClickEvent(e) {
  return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu';
}

/**
 * @alias Chart.helpers.math
 * @namespace
 */
const PI = Math.PI;
const TAU = 2 * PI;
const PITAU = TAU + PI;
const INFINITY = Number.POSITIVE_INFINITY;
const RAD_PER_DEG = PI / 180;
const HALF_PI = PI / 2;
const QUARTER_PI = PI / 4;
const TWO_THIRDS_PI = PI * 2 / 3;
const log10 = Math.log10;
const sign = Math.sign;
function almostEquals(x, y, epsilon) {
  return Math.abs(x - y) < epsilon;
}
/**
 * Implementation of the nice number algorithm used in determining where axis labels will go
 */
function niceNum(range) {
  const roundedRange = Math.round(range);
  range = almostEquals(range, roundedRange, range / 1000) ? roundedRange : range;
  const niceRange = Math.pow(10, Math.floor(log10(range)));
  const fraction = range / niceRange;
  const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
  return niceFraction * niceRange;
}
/**
 * Returns an array of factors sorted from 1 to sqrt(value)
 * @private
 */
function _factorize(value) {
  const result = [];
  const sqrt = Math.sqrt(value);
  let i;
  for (i = 1; i < sqrt; i++) {
    if (value % i === 0) {
      result.push(i);
      result.push(value / i);
    }
  }
  if (sqrt === (sqrt | 0)) {
    result.push(sqrt);
  }
  result.sort((a, b) => a - b).pop();
  return result;
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
function almostWhole(x, epsilon) {
  const rounded = Math.round(x);
  return rounded - epsilon <= x && rounded + epsilon >= x;
}
/**
 * @private
 */
function _setMinAndMaxByKey(array, target, property) {
  let i, ilen, value;
  for (i = 0, ilen = array.length; i < ilen; i++) {
    value = array[i][property];
    if (!isNaN(value)) {
      target.min = Math.min(target.min, value);
      target.max = Math.max(target.max, value);
    }
  }
}
function toRadians(degrees) {
  return degrees * (PI / 180);
}
function toDegrees(radians) {
  return radians * (180 / PI);
}
/**
 * Returns the number of decimal places
 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @param x - A number.
 * @returns The number of decimal places.
 * @private
 */
function _decimalPlaces(x) {
  if (!isNumberFinite(x)) {
    return;
  }
  let e = 1;
  let p = 0;
  while (Math.round(x * e) / e !== x) {
    e *= 10;
    p++;
  }
  return p;
}
// Gets the angle from vertical upright to the point about a centre.
function getAngleFromPoint(centrePoint, anglePoint) {
  const distanceFromXCenter = anglePoint.x - centrePoint.x;
  const distanceFromYCenter = anglePoint.y - centrePoint.y;
  const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
  let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
  if (angle < -0.5 * PI) {
    angle += TAU; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
  }

  return {
    angle,
    distance: radialDistanceFromCenter
  };
}
function distanceBetweenPoints(pt1, pt2) {
  return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
}
/**
 * Shortest distance between angles, in either direction.
 * @private
 */
function _angleDiff(a, b) {
  return (a - b + PITAU) % TAU - PI;
}
/**
 * Normalize angle to be between 0 and 2*PI
 * @private
 */
function _normalizeAngle(a) {
  return (a % TAU + TAU) % TAU;
}
/**
 * @private
 */
function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
  const a = _normalizeAngle(angle);
  const s = _normalizeAngle(start);
  const e = _normalizeAngle(end);
  const angleToStart = _normalizeAngle(s - a);
  const angleToEnd = _normalizeAngle(e - a);
  const startToAngle = _normalizeAngle(a - s);
  const endToAngle = _normalizeAngle(a - e);
  return a === s || a === e || sameAngleIsFullCircle && s === e || angleToStart > angleToEnd && startToAngle < endToAngle;
}
/**
 * Limit `value` between `min` and `max`
 * @param value
 * @param min
 * @param max
 * @private
 */
function _limitValue(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
/**
 * @param {number} value
 * @private
 */
function _int16Range(value) {
  return _limitValue(value, -32768, 32767);
}
/**
 * @param value
 * @param start
 * @param end
 * @param [epsilon]
 * @private
 */
function _isBetween(value, start, end, epsilon = 1e-6) {
  return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
}
function _lookup(table, value, cmp) {
  cmp = cmp || (index => table[index] < value);
  let hi = table.length - 1;
  let lo = 0;
  let mid;
  while (hi - lo > 1) {
    mid = lo + hi >> 1;
    if (cmp(mid)) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  return {
    lo,
    hi
  };
}
/**
 * Binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @param last - lookup last index
 * @private
 */
const _lookupByKey = (table, key, value, last) => _lookup(table, value, last ? index => {
  const ti = table[index][key];
  return ti < value || ti === value && table[index + 1][key] === value;
} : index => table[index][key] < value);
/**
 * Reverse binary search
 * @param table - the table search. must be sorted!
 * @param key - property name for the value in each entry
 * @param value - value to find
 * @private
 */
const _rlookupByKey = (table, key, value) => _lookup(table, value, index => table[index][key] >= value);
/**
 * Return subset of `values` between `min` and `max` inclusive.
 * Values are assumed to be in sorted order.
 * @param values - sorted array of values
 * @param min - min value
 * @param max - max value
 */
function _filterBetween(values, min, max) {
  let start = 0;
  let end = values.length;
  while (start < end && values[start] < min) {
    start++;
  }
  while (end > start && values[end - 1] > max) {
    end--;
  }
  return start > 0 || end < values.length ? values.slice(start, end) : values;
}
const arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
function listenArrayEvents(array, listener) {
  if (array._chartjs) {
    array._chartjs.listeners.push(listener);
    return;
  }
  Object.defineProperty(array, '_chartjs', {
    configurable: true,
    enumerable: false,
    value: {
      listeners: [listener]
    }
  });
  arrayEvents.forEach(key => {
    const method = '_onData' + _capitalize(key);
    const base = array[key];
    Object.defineProperty(array, key, {
      configurable: true,
      enumerable: false,
      value(...args) {
        const res = base.apply(this, args);
        array._chartjs.listeners.forEach(object => {
          if (typeof object[method] === 'function') {
            object[method](...args);
          }
        });
        return res;
      }
    });
  });
}
function unlistenArrayEvents(array, listener) {
  const stub = array._chartjs;
  if (!stub) {
    return;
  }
  const listeners = stub.listeners;
  const index = listeners.indexOf(listener);
  if (index !== -1) {
    listeners.splice(index, 1);
  }
  if (listeners.length > 0) {
    return;
  }
  arrayEvents.forEach(key => {
    delete array[key];
  });
  delete array._chartjs;
}
/**
 * @param items
 */
function _arrayUnique(items) {
  const set = new Set(items);
  if (set.size === items.length) {
    return items;
  }
  return Array.from(set);
}
function fontString(pixelSize, fontStyle, fontFamily) {
  return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
}
/**
* Request animation polyfill
*/
const requestAnimFrame = function () {
  if (typeof window === 'undefined') {
    return function (callback) {
      return callback();
    };
  }
  return window.requestAnimationFrame;
}();
/**
 * Throttles calling `fn` once per animation frame
 * Latest arguments are used on the actual call
 */
function throttled(fn, thisArg) {
  let argsToUse = [];
  let ticking = false;
  return function (...args) {
    // Save the args for use later
    argsToUse = args;
    if (!ticking) {
      ticking = true;
      requestAnimFrame.call(window, () => {
        ticking = false;
        fn.apply(thisArg, argsToUse);
      });
    }
  };
}
/**
 * Debounces calling `fn` for `delay` ms
 */
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    if (delay) {
      clearTimeout(timeout);
      timeout = setTimeout(fn, delay, args);
    } else {
      fn.apply(this, args);
    }
    return delay;
  };
}
/**
 * Converts 'start' to 'left', 'end' to 'right' and others to 'center'
 * @private
 */
const _toLeftRightCenter = align => align === 'start' ? 'left' : align === 'end' ? 'right' : 'center';
/**
 * Returns `start`, `end` or `(start + end) / 2` depending on `align`. Defaults to `center`
 * @private
 */
const _alignStartEnd = (align, start, end) => align === 'start' ? start : align === 'end' ? end : (start + end) / 2;
/**
 * Returns `left`, `right` or `(left + right) / 2` depending on `align`. Defaults to `left`
 * @private
 */
const _textX = (align, left, right, rtl) => {
  const check = rtl ? 'left' : 'right';
  return align === check ? right : align === 'center' ? (left + right) / 2 : left;
};
/**
 * Return start and count of visible points.
 * @private
 */
function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
  const pointCount = points.length;
  let start = 0;
  let count = pointCount;
  if (meta._sorted) {
    const {
      iScale,
      _parsed
    } = meta;
    const axis = iScale.axis;
    const {
      min,
      max,
      minDefined,
      maxDefined
    } = iScale.getUserBounds();
    if (minDefined) {
      start = _limitValue(Math.min(
      // @ts-expect-error Need to type _parsed
      _lookupByKey(_parsed, axis, min).lo,
      // @ts-expect-error Need to fix types on _lookupByKey
      animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo), 0, pointCount - 1);
    }
    if (maxDefined) {
      count = _limitValue(Math.max(
      // @ts-expect-error Need to type _parsed
      _lookupByKey(_parsed, iScale.axis, max, true).hi + 1,
      // @ts-expect-error Need to fix types on _lookupByKey
      animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1), start, pointCount) - start;
    } else {
      count = pointCount - start;
    }
  }
  return {
    start,
    count
  };
}
/**
 * Checks if the scale ranges have changed.
 * @param {object} meta - dataset meta.
 * @returns {boolean}
 * @private
 */
function _scaleRangesChanged(meta) {
  const {
    xScale,
    yScale,
    _scaleRanges
  } = meta;
  const newRanges = {
    xmin: xScale.min,
    xmax: xScale.max,
    ymin: yScale.min,
    ymax: yScale.max
  };
  if (!_scaleRanges) {
    meta._scaleRanges = newRanges;
    return true;
  }
  const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
  Object.assign(_scaleRanges, newRanges);
  return changed;
}
const atEdge = t => t === 0 || t === 1;
const elasticIn = (t, s, p) => -(Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * TAU / p));
const elasticOut = (t, s, p) => Math.pow(2, -10 * t) * Math.sin((t - s) * TAU / p) + 1;
/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easing.effects
 * @see http://www.robertpenner.com/easing/
 */
const effects = {
  linear: t => t,
  easeInQuad: t => t * t,
  easeOutQuad: t => -t * (t - 2),
  easeInOutQuad: t => (t /= 0.5) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1),
  easeInCubic: t => t * t * t,
  easeOutCubic: t => (t -= 1) * t * t + 1,
  easeInOutCubic: t => (t /= 0.5) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2),
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => -((t -= 1) * t * t * t - 1),
  easeInOutQuart: t => (t /= 0.5) < 1 ? 0.5 * t * t * t * t : -0.5 * ((t -= 2) * t * t * t - 2),
  easeInQuint: t => t * t * t * t * t,
  easeOutQuint: t => (t -= 1) * t * t * t * t + 1,
  easeInOutQuint: t => (t /= 0.5) < 1 ? 0.5 * t * t * t * t * t : 0.5 * ((t -= 2) * t * t * t * t + 2),
  easeInSine: t => -Math.cos(t * HALF_PI) + 1,
  easeOutSine: t => Math.sin(t * HALF_PI),
  easeInOutSine: t => -0.5 * (Math.cos(PI * t) - 1),
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => t === 1 ? 1 : -Math.pow(2, -10 * t) + 1,
  easeInOutExpo: t => atEdge(t) ? t : t < 0.5 ? 0.5 * Math.pow(2, 10 * (t * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t * 2 - 1)) + 2),
  easeInCirc: t => t >= 1 ? t : -(Math.sqrt(1 - t * t) - 1),
  easeOutCirc: t => Math.sqrt(1 - (t -= 1) * t),
  easeInOutCirc: t => (t /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t * t) - 1) : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1),
  easeInElastic: t => atEdge(t) ? t : elasticIn(t, 0.075, 0.3),
  easeOutElastic: t => atEdge(t) ? t : elasticOut(t, 0.075, 0.3),
  easeInOutElastic(t) {
    const s = 0.1125;
    const p = 0.45;
    return atEdge(t) ? t : t < 0.5 ? 0.5 * elasticIn(t * 2, s, p) : 0.5 + 0.5 * elasticOut(t * 2 - 1, s, p);
  },
  easeInBack(t) {
    const s = 1.70158;
    return t * t * ((s + 1) * t - s);
  },
  easeOutBack(t) {
    const s = 1.70158;
    return (t -= 1) * t * ((s + 1) * t + s) + 1;
  },
  easeInOutBack(t) {
    let s = 1.70158;
    if ((t /= 0.5) < 1) {
      return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
    }
    return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
  },
  easeInBounce: t => 1 - effects.easeOutBounce(1 - t),
  easeOutBounce(t) {
    const m = 7.5625;
    const d = 2.75;
    if (t < 1 / d) {
      return m * t * t;
    }
    if (t < 2 / d) {
      return m * (t -= 1.5 / d) * t + 0.75;
    }
    if (t < 2.5 / d) {
      return m * (t -= 2.25 / d) * t + 0.9375;
    }
    return m * (t -= 2.625 / d) * t + 0.984375;
  },
  easeInOutBounce: t => t < 0.5 ? effects.easeInBounce(t * 2) * 0.5 : effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5
};
function isPatternOrGradient(value) {
  if (value && typeof value === 'object') {
    const type = value.toString();
    return type === '[object CanvasPattern]' || type === '[object CanvasGradient]';
  }
  return false;
}
function color(value) {
  return isPatternOrGradient(value) ? value : new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__.Color(value);
}
function getHoverColor(value) {
  return isPatternOrGradient(value) ? value : new _kurkle_color__WEBPACK_IMPORTED_MODULE_0__.Color(value).saturate(0.5).darken(0.1).hexString();
}
const numbers = ['x', 'y', 'borderWidth', 'radius', 'tension'];
const colors = ['color', 'borderColor', 'backgroundColor'];
function applyAnimationsDefaults(defaults) {
  defaults.set('animation', {
    delay: undefined,
    duration: 1000,
    easing: 'easeOutQuart',
    fn: undefined,
    from: undefined,
    loop: undefined,
    to: undefined,
    type: undefined
  });
  defaults.describe('animation', {
    _fallback: false,
    _indexable: false,
    _scriptable: name => name !== 'onProgress' && name !== 'onComplete' && name !== 'fn'
  });
  defaults.set('animations', {
    colors: {
      type: 'color',
      properties: colors
    },
    numbers: {
      type: 'number',
      properties: numbers
    }
  });
  defaults.describe('animations', {
    _fallback: 'animation'
  });
  defaults.set('transitions', {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: 'transparent'
        },
        visible: {
          type: 'boolean',
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: 'transparent'
        },
        visible: {
          type: 'boolean',
          easing: 'linear',
          fn: v => v | 0
        }
      }
    }
  });
}
function applyLayoutsDefaults(defaults) {
  defaults.set('layout', {
    autoPadding: true,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const intlCache = new Map();
function getNumberFormat(locale, options) {
  options = options || {};
  const cacheKey = locale + JSON.stringify(options);
  let formatter = intlCache.get(cacheKey);
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, options);
    intlCache.set(cacheKey, formatter);
  }
  return formatter;
}
function formatNumber(num, locale, options) {
  return getNumberFormat(locale, options).format(num);
}
const formatters = {
  values(value) {
    return isArray(value) ? value : '' + value;
  },
  numeric(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    const locale = this.chart.options.locale;
    let notation;
    let delta = tickValue;
    if (ticks.length > 1) {
      const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
      if (maxTick < 1e-4 || maxTick > 1e+15) {
        notation = 'scientific';
      }
      delta = calculateDelta(tickValue, ticks);
    }
    const logDelta = log10(Math.abs(delta));
    const numDecimal = isNaN(logDelta) ? 1 : Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
    const options = {
      notation,
      minimumFractionDigits: numDecimal,
      maximumFractionDigits: numDecimal
    };
    Object.assign(options, this.options.ticks.format);
    return formatNumber(tickValue, locale, options);
  },
  logarithmic(tickValue, index, ticks) {
    if (tickValue === 0) {
      return '0';
    }
    const remain = ticks[index].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
    if ([1, 2, 3, 5, 10, 15].includes(remain) || index > 0.8 * ticks.length) {
      return formatters.numeric.call(this, tickValue, index, ticks);
    }
    return '';
  }
};
function calculateDelta(tickValue, ticks) {
  let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
  if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
    delta = tickValue - Math.floor(tickValue);
  }
  return delta;
}
var Ticks = {
  formatters
};
function applyScaleDefaults(defaults) {
  defaults.set('scale', {
    display: true,
    offset: false,
    reverse: false,
    beginAtZero: false,
    bounds: 'ticks',
    clip: true,
    grace: 0,
    grid: {
      display: true,
      lineWidth: 1,
      drawOnChartArea: true,
      drawTicks: true,
      tickLength: 8,
      tickWidth: (_ctx, options) => options.lineWidth,
      tickColor: (_ctx, options) => options.color,
      offset: false
    },
    border: {
      display: true,
      dash: [],
      dashOffset: 0.0,
      width: 1
    },
    title: {
      display: false,
      text: '',
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: true,
      autoSkip: true,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Ticks.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: false,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2
    }
  });
  defaults.route('scale.ticks', 'color', '', 'color');
  defaults.route('scale.grid', 'color', '', 'borderColor');
  defaults.route('scale.border', 'color', '', 'borderColor');
  defaults.route('scale.title', 'color', '', 'color');
  defaults.describe('scale', {
    _fallback: false,
    _scriptable: name => !name.startsWith('before') && !name.startsWith('after') && name !== 'callback' && name !== 'parser',
    _indexable: name => name !== 'borderDash' && name !== 'tickBorderDash' && name !== 'dash'
  });
  defaults.describe('scales', {
    _fallback: 'scale'
  });
  defaults.describe('scale.ticks', {
    _scriptable: name => name !== 'backdropPadding' && name !== 'callback',
    _indexable: name => name !== 'backdropPadding'
  });
}
const overrides = Object.create(null);
const descriptors = Object.create(null);
function getScope$1(node, key) {
  if (!key) {
    return node;
  }
  const keys = key.split('.');
  for (let i = 0, n = keys.length; i < n; ++i) {
    const k = keys[i];
    node = node[k] || (node[k] = Object.create(null));
  }
  return node;
}
function set(root, scope, values) {
  if (typeof scope === 'string') {
    return merge(getScope$1(root, scope), values);
  }
  return merge(getScope$1(root, ''), scope);
}
class Defaults {
  constructor(_descriptors, _appliers) {
    this.animation = undefined;
    this.backgroundColor = 'rgba(0,0,0,0.1)';
    this.borderColor = 'rgba(0,0,0,0.1)';
    this.color = '#666';
    this.datasets = {};
    this.devicePixelRatio = context => context.chart.platform.getDevicePixelRatio();
    this.elements = {};
    this.events = ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'];
    this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: 'normal',
      lineHeight: 1.2,
      weight: null
    };
    this.hover = {};
    this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);
    this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);
    this.hoverColor = (ctx, options) => getHoverColor(options.color);
    this.indexAxis = 'x';
    this.interaction = {
      mode: 'nearest',
      intersect: true,
      includeInvisible: false
    };
    this.maintainAspectRatio = true;
    this.onHover = null;
    this.onClick = null;
    this.parsing = true;
    this.plugins = {};
    this.responsive = true;
    this.scale = undefined;
    this.scales = {};
    this.showLine = true;
    this.drawActiveElementsOnTop = true;
    this.describe(_descriptors);
    this.apply(_appliers);
  }
  set(scope, values) {
    return set(this, scope, values);
  }
  get(scope) {
    return getScope$1(this, scope);
  }
  describe(scope, values) {
    return set(descriptors, scope, values);
  }
  override(scope, values) {
    return set(overrides, scope, values);
  }
  route(scope, name, targetScope, targetName) {
    const scopeObject = getScope$1(this, scope);
    const targetScopeObject = getScope$1(this, targetScope);
    const privateName = '_' + name;
    Object.defineProperties(scopeObject, {
      [privateName]: {
        value: scopeObject[name],
        writable: true
      },
      [name]: {
        enumerable: true,
        get() {
          const local = this[privateName];
          const target = targetScopeObject[targetName];
          if (isObject(local)) {
            return Object.assign({}, target, local);
          }
          return valueOrDefault(local, target);
        },
        set(value) {
          this[privateName] = value;
        }
      }
    });
  }
  apply(appliers) {
    appliers.forEach(apply => apply(this));
  }
}
var defaults = /* #__PURE__ */new Defaults({
  _scriptable: name => !name.startsWith('on'),
  _indexable: name => name !== 'events',
  hover: {
    _fallback: 'interaction'
  },
  interaction: {
    _scriptable: false,
    _indexable: false
  }
}, [applyAnimationsDefaults, applyLayoutsDefaults, applyScaleDefaults]);

/**
 * Converts the given font object into a CSS font string.
 * @param font - A font object.
 * @return The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
 * @private
 */
function toFontString(font) {
  if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
    return null;
  }
  return (font.style ? font.style + ' ' : '') + (font.weight ? font.weight + ' ' : '') + font.size + 'px ' + font.family;
}
/**
 * @private
 */
function _measureText(ctx, data, gc, longest, string) {
  let textWidth = data[string];
  if (!textWidth) {
    textWidth = data[string] = ctx.measureText(string).width;
    gc.push(string);
  }
  if (textWidth > longest) {
    longest = textWidth;
  }
  return longest;
}
/**
 * @private
 */ // eslint-disable-next-line complexity
function _longestText(ctx, font, arrayOfThings, cache) {
  cache = cache || {};
  let data = cache.data = cache.data || {};
  let gc = cache.garbageCollect = cache.garbageCollect || [];
  if (cache.font !== font) {
    data = cache.data = {};
    gc = cache.garbageCollect = [];
    cache.font = font;
  }
  ctx.save();
  ctx.font = font;
  let longest = 0;
  const ilen = arrayOfThings.length;
  let i, j, jlen, thing, nestedThing;
  for (i = 0; i < ilen; i++) {
    thing = arrayOfThings[i];
    // Undefined strings and arrays should not be measured
    if (thing !== undefined && thing !== null && !isArray(thing)) {
      longest = _measureText(ctx, data, gc, longest, thing);
    } else if (isArray(thing)) {
      // if it is an array lets measure each element
      // to do maybe simplify this function a bit so we can do this more recursively?
      for (j = 0, jlen = thing.length; j < jlen; j++) {
        nestedThing = thing[j];
        // Undefined strings and arrays should not be measured
        if (nestedThing !== undefined && nestedThing !== null && !isArray(nestedThing)) {
          longest = _measureText(ctx, data, gc, longest, nestedThing);
        }
      }
    }
  }
  ctx.restore();
  const gcLen = gc.length / 2;
  if (gcLen > arrayOfThings.length) {
    for (i = 0; i < gcLen; i++) {
      delete data[gc[i]];
    }
    gc.splice(0, gcLen);
  }
  return longest;
}
/**
 * Returns the aligned pixel value to avoid anti-aliasing blur
 * @param chart - The chart instance.
 * @param pixel - A pixel value.
 * @param width - The width of the element.
 * @returns The aligned pixel value.
 * @private
 */
function _alignPixel(chart, pixel, width) {
  const devicePixelRatio = chart.currentDevicePixelRatio;
  const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
  return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
}
/**
 * Clears the entire canvas.
 */
function clearCanvas(canvas, ctx) {
  ctx = ctx || canvas.getContext('2d');
  ctx.save();
  // canvas.width and canvas.height do not consider the canvas transform,
  // while clearRect does
  ctx.resetTransform();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.restore();
}
function drawPoint(ctx, options, x, y) {
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  drawPointLegend(ctx, options, x, y, null);
}
// eslint-disable-next-line complexity
function drawPointLegend(ctx, options, x, y, w) {
  let type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
  const style = options.pointStyle;
  const rotation = options.rotation;
  const radius = options.radius;
  let rad = (rotation || 0) * RAD_PER_DEG;
  if (style && typeof style === 'object') {
    type = style.toString();
    if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rad);
      ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
      ctx.restore();
      return;
    }
  }
  if (isNaN(radius) || radius <= 0) {
    return;
  }
  ctx.beginPath();
  switch (style) {
    // Default includes circle
    default:
      if (w) {
        ctx.ellipse(x, y, w / 2, radius, 0, 0, TAU);
      } else {
        ctx.arc(x, y, radius, 0, TAU);
      }
      ctx.closePath();
      break;
    case 'triangle':
      width = w ? w / 2 : radius;
      ctx.moveTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
      rad += TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
      rad += TWO_THIRDS_PI;
      ctx.lineTo(x + Math.sin(rad) * width, y - Math.cos(rad) * radius);
      ctx.closePath();
      break;
    case 'rectRounded':
      // NOTE: the rounded rect implementation changed to use `arc` instead of
      // `quadraticCurveTo` since it generates better results when rect is
      // almost a circle. 0.516 (instead of 0.5) produces results with visually
      // closer proportion to the previous impl and it is inscribed in the
      // circle with `radius`. For more details, see the following PRs:
      // https://github.com/chartjs/Chart.js/issues/5597
      // https://github.com/chartjs/Chart.js/issues/5858
      cornerRadius = radius * 0.516;
      size = radius - cornerRadius;
      xOffset = Math.cos(rad + QUARTER_PI) * size;
      xOffsetW = Math.cos(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
      yOffset = Math.sin(rad + QUARTER_PI) * size;
      yOffsetW = Math.sin(rad + QUARTER_PI) * (w ? w / 2 - cornerRadius : size);
      ctx.arc(x - xOffsetW, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
      ctx.arc(x + yOffsetW, y - xOffset, cornerRadius, rad - HALF_PI, rad);
      ctx.arc(x + xOffsetW, y + yOffset, cornerRadius, rad, rad + HALF_PI);
      ctx.arc(x - yOffsetW, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
      ctx.closePath();
      break;
    case 'rect':
      if (!rotation) {
        size = Math.SQRT1_2 * radius;
        width = w ? w / 2 : size;
        ctx.rect(x - width, y - size, 2 * width, 2 * size);
        break;
      }
      rad += QUARTER_PI;
    /* falls through */
    case 'rectRot':
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      ctx.closePath();
      break;
    case 'crossRot':
      rad += QUARTER_PI;
    /* falls through */
    case 'cross':
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.moveTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      break;
    case 'star':
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.moveTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      rad += QUARTER_PI;
      xOffsetW = Math.cos(rad) * (w ? w / 2 : radius);
      xOffset = Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      yOffsetW = Math.sin(rad) * (w ? w / 2 : radius);
      ctx.moveTo(x - xOffsetW, y - yOffset);
      ctx.lineTo(x + xOffsetW, y + yOffset);
      ctx.moveTo(x + yOffsetW, y - xOffset);
      ctx.lineTo(x - yOffsetW, y + xOffset);
      break;
    case 'line':
      xOffset = w ? w / 2 : Math.cos(rad) * radius;
      yOffset = Math.sin(rad) * radius;
      ctx.moveTo(x - xOffset, y - yOffset);
      ctx.lineTo(x + xOffset, y + yOffset);
      break;
    case 'dash':
      ctx.moveTo(x, y);
      ctx.lineTo(x + Math.cos(rad) * (w ? w / 2 : radius), y + Math.sin(rad) * radius);
      break;
    case false:
      ctx.closePath();
      break;
  }
  ctx.fill();
  if (options.borderWidth > 0) {
    ctx.stroke();
  }
}
/**
 * Returns true if the point is inside the rectangle
 * @param point - The point to test
 * @param area - The rectangle
 * @param margin - allowed margin
 * @private
 */
function _isPointInArea(point, area, margin) {
  margin = margin || 0.5; // margin - default is to match rounded decimals
  return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
}
function clipArea(ctx, area) {
  ctx.save();
  ctx.beginPath();
  ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
  ctx.clip();
}
function unclipArea(ctx) {
  ctx.restore();
}
/**
 * @private
 */
function _steppedLineTo(ctx, previous, target, flip, mode) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  if (mode === 'middle') {
    const midpoint = (previous.x + target.x) / 2.0;
    ctx.lineTo(midpoint, previous.y);
    ctx.lineTo(midpoint, target.y);
  } else if (mode === 'after' !== !!flip) {
    ctx.lineTo(previous.x, target.y);
  } else {
    ctx.lineTo(target.x, previous.y);
  }
  ctx.lineTo(target.x, target.y);
}
/**
 * @private
 */
function _bezierCurveTo(ctx, previous, target, flip) {
  if (!previous) {
    return ctx.lineTo(target.x, target.y);
  }
  ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
}
function setRenderOpts(ctx, opts) {
  if (opts.translation) {
    ctx.translate(opts.translation[0], opts.translation[1]);
  }
  if (!isNullOrUndef(opts.rotation)) {
    ctx.rotate(opts.rotation);
  }
  if (opts.color) {
    ctx.fillStyle = opts.color;
  }
  if (opts.textAlign) {
    ctx.textAlign = opts.textAlign;
  }
  if (opts.textBaseline) {
    ctx.textBaseline = opts.textBaseline;
  }
}
function decorateText(ctx, x, y, line, opts) {
  if (opts.strikethrough || opts.underline) {
    /**
    * Now that IE11 support has been dropped, we can use more
    * of the TextMetrics object. The actual bounding boxes
    * are unflagged in Chrome, Firefox, Edge, and Safari so they
    * can be safely used.
    * See https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics#Browser_compatibility
    */
    const metrics = ctx.measureText(line);
    const left = x - metrics.actualBoundingBoxLeft;
    const right = x + metrics.actualBoundingBoxRight;
    const top = y - metrics.actualBoundingBoxAscent;
    const bottom = y + metrics.actualBoundingBoxDescent;
    const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
    ctx.strokeStyle = ctx.fillStyle;
    ctx.beginPath();
    ctx.lineWidth = opts.decorationWidth || 2;
    ctx.moveTo(left, yDecoration);
    ctx.lineTo(right, yDecoration);
    ctx.stroke();
  }
}
function drawBackdrop(ctx, opts) {
  const oldColor = ctx.fillStyle;
  ctx.fillStyle = opts.color;
  ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
  ctx.fillStyle = oldColor;
}
/**
 * Render text onto the canvas
 */
function renderText(ctx, text, x, y, font, opts = {}) {
  const lines = isArray(text) ? text : [text];
  const stroke = opts.strokeWidth > 0 && opts.strokeColor !== '';
  let i, line;
  ctx.save();
  ctx.font = font.string;
  setRenderOpts(ctx, opts);
  for (i = 0; i < lines.length; ++i) {
    line = lines[i];
    if (opts.backdrop) {
      drawBackdrop(ctx, opts.backdrop);
    }
    if (stroke) {
      if (opts.strokeColor) {
        ctx.strokeStyle = opts.strokeColor;
      }
      if (!isNullOrUndef(opts.strokeWidth)) {
        ctx.lineWidth = opts.strokeWidth;
      }
      ctx.strokeText(line, x, y, opts.maxWidth);
    }
    ctx.fillText(line, x, y, opts.maxWidth);
    decorateText(ctx, x, y, line, opts);
    y += Number(font.lineHeight);
  }
  ctx.restore();
}
/**
 * Add a path of a rectangle with rounded corners to the current sub-path
 * @param ctx - Context
 * @param rect - Bounding rect
 */
function addRoundedRectPath(ctx, rect) {
  const {
    x,
    y,
    w,
    h,
    radius
  } = rect;
  // top left arc
  ctx.arc(x + radius.topLeft, y + radius.topLeft, radius.topLeft, 1.5 * PI, PI, true);
  // line from top left to bottom left
  ctx.lineTo(x, y + h - radius.bottomLeft);
  // bottom left arc
  ctx.arc(x + radius.bottomLeft, y + h - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
  // line from bottom left to bottom right
  ctx.lineTo(x + w - radius.bottomRight, y + h);
  // bottom right arc
  ctx.arc(x + w - radius.bottomRight, y + h - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
  // line from bottom right to top right
  ctx.lineTo(x + w, y + radius.topRight);
  // top right arc
  ctx.arc(x + w - radius.topRight, y + radius.topRight, radius.topRight, 0, -HALF_PI, true);
  // line from top right to top left
  ctx.lineTo(x + radius.topLeft, y);
}
const LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
const FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
/**
 * @alias Chart.helpers.options
 * @namespace
 */ /**
    * Converts the given line height `value` in pixels for a specific font `size`.
    * @param value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
    * @param size - The font size (in pixels) used to resolve relative `value`.
    * @returns The effective line height in pixels (size * 1.2 if value is invalid).
    * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
    * @since 2.7.0
    */
function toLineHeight(value, size) {
  const matches = ('' + value).match(LINE_HEIGHT);
  if (!matches || matches[1] === 'normal') {
    return size * 1.2;
  }
  value = +matches[2];
  switch (matches[3]) {
    case 'px':
      return value;
    case '%':
      value /= 100;
      break;
  }
  return size * value;
}
const numberOrZero = v => +v || 0;
function _readValueToProps(value, props) {
  const ret = {};
  const objProps = isObject(props);
  const keys = objProps ? Object.keys(props) : props;
  const read = isObject(value) ? objProps ? prop => valueOrDefault(value[prop], value[props[prop]]) : prop => value[prop] : () => value;
  for (const prop of keys) {
    ret[prop] = numberOrZero(read(prop));
  }
  return ret;
}
/**
 * Converts the given value into a TRBL object.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left)
 * @since 3.0.0
 */
function toTRBL(value) {
  return _readValueToProps(value, {
    top: 'y',
    right: 'x',
    bottom: 'y',
    left: 'x'
  });
}
/**
 * Converts the given value into a TRBL corners object (similar with css border-radius).
 * @param value - If a number, set the value to all TRBL corner components,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 * @returns The TRBL corner values (topLeft, topRight, bottomLeft, bottomRight)
 * @since 3.0.0
 */
function toTRBLCorners(value) {
  return _readValueToProps(value, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
}
/**
 * Converts the given value into a padding object with pre-computed width/height.
 * @param value - If a number, set the value to all TRBL component,
 *  else, if an object, use defined properties and sets undefined ones to 0.
 *  x / y are shorthands for same value for left/right and top/bottom.
 * @returns The padding values (top, right, bottom, left, width, height)
 * @since 2.7.0
 */
function toPadding(value) {
  const obj = toTRBL(value);
  obj.width = obj.left + obj.right;
  obj.height = obj.top + obj.bottom;
  return obj;
}
/**
 * Parses font options and returns the font object.
 * @param options - A object that contains font options to be parsed.
 * @param fallback - A object that contains fallback font options.
 * @return The font object.
 * @private
 */
function toFont(options, fallback) {
  options = options || {};
  fallback = fallback || defaults.font;
  let size = valueOrDefault(options.size, fallback.size);
  if (typeof size === 'string') {
    size = parseInt(size, 10);
  }
  let style = valueOrDefault(options.style, fallback.style);
  if (style && !('' + style).match(FONT_STYLE)) {
    console.warn('Invalid font style specified: "' + style + '"');
    style = undefined;
  }
  const font = {
    family: valueOrDefault(options.family, fallback.family),
    lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
    size,
    style,
    weight: valueOrDefault(options.weight, fallback.weight),
    string: ''
  };
  font.string = toFontString(font);
  return font;
}
/**
 * Evaluates the given `inputs` sequentially and returns the first defined value.
 * @param inputs - An array of values, falling back to the last value.
 * @param context - If defined and the current value is a function, the value
 * is called with `context` as first argument and the result becomes the new input.
 * @param index - If defined and the current value is an array, the value
 * at `index` become the new input.
 * @param info - object to return information about resolution in
 * @param info.cacheable - Will be set to `false` if option is not cacheable.
 * @since 2.7.0
 */
function resolve(inputs, context, index, info) {
  let cacheable = true;
  let i, ilen, value;
  for (i = 0, ilen = inputs.length; i < ilen; ++i) {
    value = inputs[i];
    if (value === undefined) {
      continue;
    }
    if (context !== undefined && typeof value === 'function') {
      value = value(context);
      cacheable = false;
    }
    if (index !== undefined && isArray(value)) {
      value = value[index % value.length];
      cacheable = false;
    }
    if (value !== undefined) {
      if (info && !cacheable) {
        info.cacheable = false;
      }
      return value;
    }
  }
}
/**
 * @param minmax
 * @param grace
 * @param beginAtZero
 * @private
 */
function _addGrace(minmax, grace, beginAtZero) {
  const {
    min,
    max
  } = minmax;
  const change = toDimension(grace, (max - min) / 2);
  const keepZero = (value, add) => beginAtZero && value === 0 ? 0 : value + add;
  return {
    min: keepZero(min, -Math.abs(change)),
    max: keepZero(max, change)
  };
}
function createContext(parentContext, context) {
  return Object.assign(Object.create(parentContext), context);
}

/**
 * Creates a Proxy for resolving raw values for options.
 * @param scopes - The option scopes to look for values, in resolution order
 * @param prefixes - The prefixes for values, in resolution order.
 * @param rootScopes - The root option scopes
 * @param fallback - Parent scopes fallback
 * @param getTarget - callback for getting the target for changed values
 * @returns Proxy
 * @private
 */
function _createResolver(scopes, prefixes = [''], rootScopes, fallback, getTarget = () => scopes[0]) {
  const finalRootScopes = rootScopes || scopes;
  if (typeof fallback === 'undefined') {
    fallback = _resolve('_fallback', scopes);
  }
  const cache = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: true,
    _scopes: scopes,
    _rootScopes: finalRootScopes,
    _fallback: fallback,
    _getTarget: getTarget,
    override: scope => _createResolver([scope, ...scopes], prefixes, finalRootScopes, fallback)
  };
  return new Proxy(cache, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(target, prop) {
      delete target[prop]; // remove from cache
      delete target._keys; // remove cached keys
      delete scopes[0][prop]; // remove from top level scope
      return true;
    },
    /**
    * A trap for getting property values.
    */
    get(target, prop) {
      return _cached(target, prop, () => _resolveWithPrefixes(prop, prefixes, scopes, target));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(target, prop) {
      return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(scopes[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(target, prop) {
      return getKeysFromAllScopes(target).includes(prop);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(target) {
      return getKeysFromAllScopes(target);
    },
    /**
    * A trap for setting property values.
    */
    set(target, prop, value) {
      const storage = target._storage || (target._storage = getTarget());
      target[prop] = storage[prop] = value; // set to top level scope + cache
      delete target._keys; // remove cached keys
      return true;
    }
  });
}
/**
 * Returns an Proxy for resolving option values with context.
 * @param proxy - The Proxy returned by `_createResolver`
 * @param context - Context object for scriptable/indexable options
 * @param subProxy - The proxy provided for scriptable options
 * @param descriptorDefaults - Defaults for descriptors
 * @private
 */
function _attachContext(proxy, context, subProxy, descriptorDefaults) {
  const cache = {
    _cacheable: false,
    _proxy: proxy,
    _context: context,
    _subProxy: subProxy,
    _stack: new Set(),
    _descriptors: _descriptors(proxy, descriptorDefaults),
    setContext: ctx => _attachContext(proxy, ctx, subProxy, descriptorDefaults),
    override: scope => _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
  };
  return new Proxy(cache, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(target, prop) {
      delete target[prop]; // remove from cache
      delete proxy[prop]; // remove from proxy
      return true;
    },
    /**
    * A trap for getting property values.
    */
    get(target, prop, receiver) {
      return _cached(target, prop, () => _resolveWithContext(target, prop, receiver));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(target, prop) {
      return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
        enumerable: true,
        configurable: true
      } : undefined : Reflect.getOwnPropertyDescriptor(proxy, prop);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(proxy);
    },
    /**
    * A trap for the in operator.
    */
    has(target, prop) {
      return Reflect.has(proxy, prop);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(proxy);
    },
    /**
    * A trap for setting property values.
    */
    set(target, prop, value) {
      proxy[prop] = value; // set to proxy
      delete target[prop]; // remove from cache
      return true;
    }
  });
}
/**
 * @private
 */
function _descriptors(proxy, defaults = {
  scriptable: true,
  indexable: true
}) {
  const {
    _scriptable = defaults.scriptable,
    _indexable = defaults.indexable,
    _allKeys = defaults.allKeys
  } = proxy;
  return {
    allKeys: _allKeys,
    scriptable: _scriptable,
    indexable: _indexable,
    isScriptable: isFunction(_scriptable) ? _scriptable : () => _scriptable,
    isIndexable: isFunction(_indexable) ? _indexable : () => _indexable
  };
}
const readKey = (prefix, name) => prefix ? prefix + _capitalize(name) : name;
const needsSubResolver = (prop, value) => isObject(value) && prop !== 'adapters' && (Object.getPrototypeOf(value) === null || value.constructor === Object);
function _cached(target, prop, resolve) {
  if (Object.prototype.hasOwnProperty.call(target, prop)) {
    return target[prop];
  }
  const value = resolve();
  // cache the resolved value
  target[prop] = value;
  return value;
}
function _resolveWithContext(target, prop, receiver) {
  const {
    _proxy,
    _context,
    _subProxy,
    _descriptors: descriptors
  } = target;
  let value = _proxy[prop]; // resolve from proxy
  // resolve with context
  if (isFunction(value) && descriptors.isScriptable(prop)) {
    value = _resolveScriptable(prop, value, target, receiver);
  }
  if (isArray(value) && value.length) {
    value = _resolveArray(prop, value, target, descriptors.isIndexable);
  }
  if (needsSubResolver(prop, value)) {
    // if the resolved value is an object, create a sub resolver for it
    value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors);
  }
  return value;
}
function _resolveScriptable(prop, getValue, target, receiver) {
  const {
    _proxy,
    _context,
    _subProxy,
    _stack
  } = target;
  if (_stack.has(prop)) {
    throw new Error('Recursion detected: ' + Array.from(_stack).join('->') + '->' + prop);
  }
  _stack.add(prop);
  let value = getValue(_context, _subProxy || receiver);
  _stack.delete(prop);
  if (needsSubResolver(prop, value)) {
    // When scriptable option returns an object, create a resolver on that.
    value = createSubResolver(_proxy._scopes, _proxy, prop, value);
  }
  return value;
}
function _resolveArray(prop, value, target, isIndexable) {
  const {
    _proxy,
    _context,
    _subProxy,
    _descriptors: descriptors
  } = target;
  if (typeof _context.index !== 'undefined' && isIndexable(prop)) {
    return value[_context.index % value.length];
  } else if (isObject(value[0])) {
    // Array of objects, return array or resolvers
    const arr = value;
    const scopes = _proxy._scopes.filter(s => s !== arr);
    value = [];
    for (const item of arr) {
      const resolver = createSubResolver(scopes, _proxy, prop, item);
      value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors));
    }
  }
  return value;
}
function resolveFallback(fallback, prop, value) {
  return isFunction(fallback) ? fallback(prop, value) : fallback;
}
const getScope = (key, parent) => key === true ? parent : typeof key === 'string' ? resolveObjectKey(parent, key) : undefined;
function addScopes(set, parentScopes, key, parentFallback, value) {
  for (const parent of parentScopes) {
    const scope = getScope(key, parent);
    if (scope) {
      set.add(scope);
      const fallback = resolveFallback(scope._fallback, key, value);
      if (typeof fallback !== 'undefined' && fallback !== key && fallback !== parentFallback) {
        // When we reach the descriptor that defines a new _fallback, return that.
        // The fallback will resume to that new scope.
        return fallback;
      }
    } else if (scope === false && typeof parentFallback !== 'undefined' && key !== parentFallback) {
      // Fallback to `false` results to `false`, when falling back to different key.
      // For example `interaction` from `hover` or `plugins.tooltip` and `animation` from `animations`
      return null;
    }
  }
  return false;
}
function createSubResolver(parentScopes, resolver, prop, value) {
  const rootScopes = resolver._rootScopes;
  const fallback = resolveFallback(resolver._fallback, prop, value);
  const allScopes = [...parentScopes, ...rootScopes];
  const set = new Set();
  set.add(value);
  let key = addScopesFromKey(set, allScopes, prop, fallback || prop, value);
  if (key === null) {
    return false;
  }
  if (typeof fallback !== 'undefined' && fallback !== prop) {
    key = addScopesFromKey(set, allScopes, fallback, key, value);
    if (key === null) {
      return false;
    }
  }
  return _createResolver(Array.from(set), [''], rootScopes, fallback, () => subGetTarget(resolver, prop, value));
}
function addScopesFromKey(set, allScopes, key, fallback, item) {
  while (key) {
    key = addScopes(set, allScopes, key, fallback, item);
  }
  return key;
}
function subGetTarget(resolver, prop, value) {
  const parent = resolver._getTarget();
  if (!(prop in parent)) {
    parent[prop] = {};
  }
  const target = parent[prop];
  if (isArray(target) && isObject(value)) {
    // For array of objects, the object is used to store updated values
    return value;
  }
  return target || {};
}
function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
  let value;
  for (const prefix of prefixes) {
    value = _resolve(readKey(prefix, prop), scopes);
    if (typeof value !== 'undefined') {
      return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
    }
  }
}
function _resolve(key, scopes) {
  for (const scope of scopes) {
    if (!scope) {
      continue;
    }
    const value = scope[key];
    if (typeof value !== 'undefined') {
      return value;
    }
  }
}
function getKeysFromAllScopes(target) {
  let keys = target._keys;
  if (!keys) {
    keys = target._keys = resolveKeysFromAllScopes(target._scopes);
  }
  return keys;
}
function resolveKeysFromAllScopes(scopes) {
  const set = new Set();
  for (const scope of scopes) {
    for (const key of Object.keys(scope).filter(k => !k.startsWith('_'))) {
      set.add(key);
    }
  }
  return Array.from(set);
}
function _parseObjectDataRadialScale(meta, data, start, count) {
  const {
    iScale
  } = meta;
  const {
    key = 'r'
  } = this._parsing;
  const parsed = new Array(count);
  let i, ilen, index, item;
  for (i = 0, ilen = count; i < ilen; ++i) {
    index = i + start;
    item = data[index];
    parsed[i] = {
      r: iScale.parse(resolveObjectKey(item, key), index)
    };
  }
  return parsed;
}
const EPSILON = Number.EPSILON || 1e-14;
const getPoint = (points, i) => i < points.length && !points[i].skip && points[i];
const getValueAxis = indexAxis => indexAxis === 'x' ? 'y' : 'x';
function splineCurve(firstPoint, middlePoint, afterPoint, t) {
  // Props to Rob Spencer at scaled innovation for his post on splining between points
  // http://scaledinnovation.com/analytics/splines/aboutSplines.html
  // This function must also respect "skipped" points
  const previous = firstPoint.skip ? middlePoint : firstPoint;
  const current = middlePoint;
  const next = afterPoint.skip ? middlePoint : afterPoint;
  const d01 = distanceBetweenPoints(current, previous);
  const d12 = distanceBetweenPoints(next, current);
  let s01 = d01 / (d01 + d12);
  let s12 = d12 / (d01 + d12);
  // If all points are the same, s01 & s02 will be inf
  s01 = isNaN(s01) ? 0 : s01;
  s12 = isNaN(s12) ? 0 : s12;
  const fa = t * s01; // scaling factor for triangle Ta
  const fb = t * s12;
  return {
    previous: {
      x: current.x - fa * (next.x - previous.x),
      y: current.y - fa * (next.y - previous.y)
    },
    next: {
      x: current.x + fb * (next.x - previous.x),
      y: current.y + fb * (next.y - previous.y)
    }
  };
}
/**
 * Adjust tangents to ensure monotonic properties
 */
function monotoneAdjust(points, deltaK, mK) {
  const pointsLen = points.length;
  let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (let i = 0; i < pointsLen - 1; ++i) {
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent || !pointAfter) {
      continue;
    }
    if (almostEquals(deltaK[i], 0, EPSILON)) {
      mK[i] = mK[i + 1] = 0;
      continue;
    }
    alphaK = mK[i] / deltaK[i];
    betaK = mK[i + 1] / deltaK[i];
    squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
    if (squaredMagnitude <= 9) {
      continue;
    }
    tauK = 3 / Math.sqrt(squaredMagnitude);
    mK[i] = alphaK * tauK * deltaK[i];
    mK[i + 1] = betaK * tauK * deltaK[i];
  }
}
function monotoneCompute(points, mK, indexAxis = 'x') {
  const valueAxis = getValueAxis(indexAxis);
  const pointsLen = points.length;
  let delta, pointBefore, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (let i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    const iPixel = pointCurrent[indexAxis];
    const vPixel = pointCurrent[valueAxis];
    if (pointBefore) {
      delta = (iPixel - pointBefore[indexAxis]) / 3;
      pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
      pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i];
    }
    if (pointAfter) {
      delta = (pointAfter[indexAxis] - iPixel) / 3;
      pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
      pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i];
    }
  }
}
/**
 * This function calculates Bézier control points in a similar way than |splineCurve|,
 * but preserves monotonicity of the provided data and ensures no local extremums are added
 * between the dataset discrete points due to the interpolation.
 * See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
 */
function splineCurveMonotone(points, indexAxis = 'x') {
  const valueAxis = getValueAxis(indexAxis);
  const pointsLen = points.length;
  const deltaK = Array(pointsLen).fill(0);
  const mK = Array(pointsLen);
  // Calculate slopes (deltaK) and initialize tangents (mK)
  let i, pointBefore, pointCurrent;
  let pointAfter = getPoint(points, 0);
  for (i = 0; i < pointsLen; ++i) {
    pointBefore = pointCurrent;
    pointCurrent = pointAfter;
    pointAfter = getPoint(points, i + 1);
    if (!pointCurrent) {
      continue;
    }
    if (pointAfter) {
      const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
      // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
      deltaK[i] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
    }
    mK[i] = !pointBefore ? deltaK[i] : !pointAfter ? deltaK[i - 1] : sign(deltaK[i - 1]) !== sign(deltaK[i]) ? 0 : (deltaK[i - 1] + deltaK[i]) / 2;
  }
  monotoneAdjust(points, deltaK, mK);
  monotoneCompute(points, mK, indexAxis);
}
function capControlPoint(pt, min, max) {
  return Math.max(Math.min(pt, max), min);
}
function capBezierPoints(points, area) {
  let i, ilen, point, inArea, inAreaPrev;
  let inAreaNext = _isPointInArea(points[0], area);
  for (i = 0, ilen = points.length; i < ilen; ++i) {
    inAreaPrev = inArea;
    inArea = inAreaNext;
    inAreaNext = i < ilen - 1 && _isPointInArea(points[i + 1], area);
    if (!inArea) {
      continue;
    }
    point = points[i];
    if (inAreaPrev) {
      point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
      point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
    }
    if (inAreaNext) {
      point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
      point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
    }
  }
}
/**
 * @private
 */
function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
  let i, ilen, point, controlPoints;
  // Only consider points that are drawn in case the spanGaps option is used
  if (options.spanGaps) {
    points = points.filter(pt => !pt.skip);
  }
  if (options.cubicInterpolationMode === 'monotone') {
    splineCurveMonotone(points, indexAxis);
  } else {
    let prev = loop ? points[points.length - 1] : points[0];
    for (i = 0, ilen = points.length; i < ilen; ++i) {
      point = points[i];
      controlPoints = splineCurve(prev, point, points[Math.min(i + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
      point.cp1x = controlPoints.previous.x;
      point.cp1y = controlPoints.previous.y;
      point.cp2x = controlPoints.next.x;
      point.cp2y = controlPoints.next.y;
      prev = point;
    }
  }
  if (options.capBezierPoints) {
    capBezierPoints(points, area);
  }
}

/**
 * Note: typedefs are auto-exported, so use a made-up `dom` namespace where
 * necessary to avoid duplicates with `export * from './helpers`; see
 * https://github.com/microsoft/TypeScript/issues/46011
 * @typedef { import('../core/core.controller.js').default } dom.Chart
 * @typedef { import('../../types').ChartEvent } ChartEvent
 */ /**
    * @private
    */
function _isDomSupported() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}
/**
 * @private
 */
function _getParentNode(domNode) {
  let parent = domNode.parentNode;
  if (parent && parent.toString() === '[object ShadowRoot]') {
    parent = parent.host;
  }
  return parent;
}
/**
 * convert max-width/max-height values that may be percentages into a number
 * @private
 */
function parseMaxStyle(styleValue, node, parentProperty) {
  let valueInPixels;
  if (typeof styleValue === 'string') {
    valueInPixels = parseInt(styleValue, 10);
    if (styleValue.indexOf('%') !== -1) {
      // percentage * size in dimension
      valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
    }
  } else {
    valueInPixels = styleValue;
  }
  return valueInPixels;
}
const getComputedStyle = element => element.ownerDocument.defaultView.getComputedStyle(element, null);
function getStyle(el, property) {
  return getComputedStyle(el).getPropertyValue(property);
}
const positions = ['top', 'right', 'bottom', 'left'];
function getPositionedStyle(styles, style, suffix) {
  const result = {};
  suffix = suffix ? '-' + suffix : '';
  for (let i = 0; i < 4; i++) {
    const pos = positions[i];
    result[pos] = parseFloat(styles[style + '-' + pos + suffix]) || 0;
  }
  result.width = result.left + result.right;
  result.height = result.top + result.bottom;
  return result;
}
const useOffsetPos = (x, y, target) => (x > 0 || y > 0) && (!target || !target.shadowRoot);
/**
 * @param e
 * @param canvas
 * @returns Canvas position
 */
function getCanvasPosition(e, canvas) {
  const touches = e.touches;
  const source = touches && touches.length ? touches[0] : e;
  const {
    offsetX,
    offsetY
  } = source;
  let box = false;
  let x, y;
  if (useOffsetPos(offsetX, offsetY, e.target)) {
    x = offsetX;
    y = offsetY;
  } else {
    const rect = canvas.getBoundingClientRect();
    x = source.clientX - rect.left;
    y = source.clientY - rect.top;
    box = true;
  }
  return {
    x,
    y,
    box
  };
}
/**
 * Gets an event's x, y coordinates, relative to the chart area
 * @param event
 * @param chart
 * @returns x and y coordinates of the event
 */
function getRelativePosition(event, chart) {
  if ('native' in event) {
    return event;
  }
  const {
    canvas,
    currentDevicePixelRatio
  } = chart;
  const style = getComputedStyle(canvas);
  const borderBox = style.boxSizing === 'border-box';
  const paddings = getPositionedStyle(style, 'padding');
  const borders = getPositionedStyle(style, 'border', 'width');
  const {
    x,
    y,
    box
  } = getCanvasPosition(event, canvas);
  const xOffset = paddings.left + (box && borders.left);
  const yOffset = paddings.top + (box && borders.top);
  let {
    width,
    height
  } = chart;
  if (borderBox) {
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  return {
    x: Math.round((x - xOffset) / width * canvas.width / currentDevicePixelRatio),
    y: Math.round((y - yOffset) / height * canvas.height / currentDevicePixelRatio)
  };
}
function getContainerSize(canvas, width, height) {
  let maxWidth, maxHeight;
  if (width === undefined || height === undefined) {
    const container = _getParentNode(canvas);
    if (!container) {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
    } else {
      const rect = container.getBoundingClientRect(); // this is the border box of the container
      const containerStyle = getComputedStyle(container);
      const containerBorder = getPositionedStyle(containerStyle, 'border', 'width');
      const containerPadding = getPositionedStyle(containerStyle, 'padding');
      width = rect.width - containerPadding.width - containerBorder.width;
      height = rect.height - containerPadding.height - containerBorder.height;
      maxWidth = parseMaxStyle(containerStyle.maxWidth, container, 'clientWidth');
      maxHeight = parseMaxStyle(containerStyle.maxHeight, container, 'clientHeight');
    }
  }
  return {
    width,
    height,
    maxWidth: maxWidth || INFINITY,
    maxHeight: maxHeight || INFINITY
  };
}
const round1 = v => Math.round(v * 10) / 10;
// eslint-disable-next-line complexity
function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
  const style = getComputedStyle(canvas);
  const margins = getPositionedStyle(style, 'margin');
  const maxWidth = parseMaxStyle(style.maxWidth, canvas, 'clientWidth') || INFINITY;
  const maxHeight = parseMaxStyle(style.maxHeight, canvas, 'clientHeight') || INFINITY;
  const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
  let {
    width,
    height
  } = containerSize;
  if (style.boxSizing === 'content-box') {
    const borders = getPositionedStyle(style, 'border', 'width');
    const paddings = getPositionedStyle(style, 'padding');
    width -= paddings.width + borders.width;
    height -= paddings.height + borders.height;
  }
  width = Math.max(0, width - margins.width);
  height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
  width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
  height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
  if (width && !height) {
    // https://github.com/chartjs/Chart.js/issues/4659
    // If the canvas has width, but no height, default to aspectRatio of 2 (canvas default)
    height = round1(width / 2);
  }
  const maintainHeight = bbWidth !== undefined || bbHeight !== undefined;
  if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
    height = containerSize.height;
    width = round1(Math.floor(height * aspectRatio));
  }
  return {
    width,
    height
  };
}
/**
 * @param chart
 * @param forceRatio
 * @param forceStyle
 * @returns True if the canvas context size or transformation has changed.
 */
function retinaScale(chart, forceRatio, forceStyle) {
  const pixelRatio = forceRatio || 1;
  const deviceHeight = Math.floor(chart.height * pixelRatio);
  const deviceWidth = Math.floor(chart.width * pixelRatio);
  chart.height = Math.floor(chart.height);
  chart.width = Math.floor(chart.width);
  const canvas = chart.canvas;
  // If no style has been set on the canvas, the render size is used as display size,
  // making the chart visually bigger, so let's enforce it to the "correct" values.
  // See https://github.com/chartjs/Chart.js/issues/3575
  if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
    canvas.style.height = `${chart.height}px`;
    canvas.style.width = `${chart.width}px`;
  }
  if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
    chart.currentDevicePixelRatio = pixelRatio;
    canvas.height = deviceHeight;
    canvas.width = deviceWidth;
    chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    return true;
  }
  return false;
}
/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
const supportsEventListenerOptions = function () {
  let passiveSupported = false;
  try {
    const options = {
      get passive() {
        passiveSupported = true;
        return false;
      }
    };
    window.addEventListener('test', null, options);
    window.removeEventListener('test', null, options);
  } catch (e) {
    // continue regardless of error
  }
  return passiveSupported;
}();
/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns Size in pixels or undefined if unknown.
 */
function readUsedSize(element, property) {
  const value = getStyle(element, property);
  const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
  return matches ? +matches[1] : undefined;
}

/**
 * @private
 */
function _pointInLine(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: p1.y + t * (p2.y - p1.y)
  };
}
/**
 * @private
 */
function _steppedInterpolation(p1, p2, t, mode) {
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: mode === 'middle' ? t < 0.5 ? p1.y : p2.y : mode === 'after' ? t < 1 ? p1.y : p2.y : t > 0 ? p2.y : p1.y
  };
}
/**
 * @private
 */
function _bezierInterpolation(p1, p2, t, mode) {
  const cp1 = {
    x: p1.cp2x,
    y: p1.cp2y
  };
  const cp2 = {
    x: p2.cp1x,
    y: p2.cp1y
  };
  const a = _pointInLine(p1, cp1, t);
  const b = _pointInLine(cp1, cp2, t);
  const c = _pointInLine(cp2, p2, t);
  const d = _pointInLine(a, b, t);
  const e = _pointInLine(b, c, t);
  return _pointInLine(d, e, t);
}
const getRightToLeftAdapter = function (rectX, width) {
  return {
    x(x) {
      return rectX + rectX + width - x;
    },
    setWidth(w) {
      width = w;
    },
    textAlign(align) {
      if (align === 'center') {
        return align;
      }
      return align === 'right' ? 'left' : 'right';
    },
    xPlus(x, value) {
      return x - value;
    },
    leftForLtr(x, itemWidth) {
      return x - itemWidth;
    }
  };
};
const getLeftToRightAdapter = function () {
  return {
    x(x) {
      return x;
    },
    setWidth(w) {},
    textAlign(align) {
      return align;
    },
    xPlus(x, value) {
      return x + value;
    },
    leftForLtr(x, _itemWidth) {
      return x;
    }
  };
};
function getRtlAdapter(rtl, rectX, width) {
  return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
}
function overrideTextDirection(ctx, direction) {
  let style, original;
  if (direction === 'ltr' || direction === 'rtl') {
    style = ctx.canvas.style;
    original = [style.getPropertyValue('direction'), style.getPropertyPriority('direction')];
    style.setProperty('direction', direction, 'important');
    ctx.prevTextDirection = original;
  }
}
function restoreTextDirection(ctx, original) {
  if (original !== undefined) {
    delete ctx.prevTextDirection;
    ctx.canvas.style.setProperty('direction', original[0], original[1]);
  }
}
function propertyFn(property) {
  if (property === 'angle') {
    return {
      between: _angleBetween,
      compare: _angleDiff,
      normalize: _normalizeAngle
    };
  }
  return {
    between: _isBetween,
    compare: (a, b) => a - b,
    normalize: x => x
  };
}
function normalizeSegment({
  start,
  end,
  count,
  loop,
  style
}) {
  return {
    start: start % count,
    end: end % count,
    loop: loop && (end - start + 1) % count === 0,
    style
  };
}
function getSegment(segment, points, bounds) {
  const {
    property,
    start: startBound,
    end: endBound
  } = bounds;
  const {
    between,
    normalize
  } = propertyFn(property);
  const count = points.length;
  let {
    start,
    end,
    loop
  } = segment;
  let i, ilen;
  if (loop) {
    start += count;
    end += count;
    for (i = 0, ilen = count; i < ilen; ++i) {
      if (!between(normalize(points[start % count][property]), startBound, endBound)) {
        break;
      }
      start--;
      end--;
    }
    start %= count;
    end %= count;
  }
  if (end < start) {
    end += count;
  }
  return {
    start,
    end,
    loop,
    style: segment.style
  };
}
function _boundSegment(segment, points, bounds) {
  if (!bounds) {
    return [segment];
  }
  const {
    property,
    start: startBound,
    end: endBound
  } = bounds;
  const count = points.length;
  const {
    compare,
    between,
    normalize
  } = propertyFn(property);
  const {
    start,
    end,
    loop,
    style
  } = getSegment(segment, points, bounds);
  const result = [];
  let inside = false;
  let subStart = null;
  let value, point, prevValue;
  const startIsBefore = () => between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
  const endIsBefore = () => compare(endBound, value) === 0 || between(endBound, prevValue, value);
  const shouldStart = () => inside || startIsBefore();
  const shouldStop = () => !inside || endIsBefore();
  for (let i = start, prev = start; i <= end; ++i) {
    point = points[i % count];
    if (point.skip) {
      continue;
    }
    value = normalize(point[property]);
    if (value === prevValue) {
      continue;
    }
    inside = between(value, startBound, endBound);
    if (subStart === null && shouldStart()) {
      subStart = compare(value, startBound) === 0 ? i : prev;
    }
    if (subStart !== null && shouldStop()) {
      result.push(normalizeSegment({
        start: subStart,
        end: i,
        loop,
        count,
        style
      }));
      subStart = null;
    }
    prev = i;
    prevValue = value;
  }
  if (subStart !== null) {
    result.push(normalizeSegment({
      start: subStart,
      end,
      loop,
      count,
      style
    }));
  }
  return result;
}
function _boundSegments(line, bounds) {
  const result = [];
  const segments = line.segments;
  for (let i = 0; i < segments.length; i++) {
    const sub = _boundSegment(segments[i], line.points, bounds);
    if (sub.length) {
      result.push(...sub);
    }
  }
  return result;
}
function findStartAndEnd(points, count, loop, spanGaps) {
  let start = 0;
  let end = count - 1;
  if (loop && !spanGaps) {
    while (start < count && !points[start].skip) {
      start++;
    }
  }
  while (start < count && points[start].skip) {
    start++;
  }
  start %= count;
  if (loop) {
    end += start;
  }
  while (end > start && points[end % count].skip) {
    end--;
  }
  end %= count;
  return {
    start,
    end
  };
}
function solidSegments(points, start, max, loop) {
  const count = points.length;
  const result = [];
  let last = start;
  let prev = points[start];
  let end;
  for (end = start + 1; end <= max; ++end) {
    const cur = points[end % count];
    if (cur.skip || cur.stop) {
      if (!prev.skip) {
        loop = false;
        result.push({
          start: start % count,
          end: (end - 1) % count,
          loop
        });
        start = last = cur.stop ? end : null;
      }
    } else {
      last = end;
      if (prev.skip) {
        start = end;
      }
    }
    prev = cur;
  }
  if (last !== null) {
    result.push({
      start: start % count,
      end: last % count,
      loop
    });
  }
  return result;
}
function _computeSegments(line, segmentOptions) {
  const points = line.points;
  const spanGaps = line.options.spanGaps;
  const count = points.length;
  if (!count) {
    return [];
  }
  const loop = !!line._loop;
  const {
    start,
    end
  } = findStartAndEnd(points, count, loop, spanGaps);
  if (spanGaps === true) {
    return splitByStyles(line, [{
      start,
      end,
      loop
    }], points, segmentOptions);
  }
  const max = end < start ? end + count : end;
  const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
  return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
}
function splitByStyles(line, segments, points, segmentOptions) {
  if (!segmentOptions || !segmentOptions.setContext || !points) {
    return segments;
  }
  return doSplitByStyles(line, segments, points, segmentOptions);
}
function doSplitByStyles(line, segments, points, segmentOptions) {
  const chartContext = line._chart.getContext();
  const baseStyle = readStyle(line.options);
  const {
    _datasetIndex: datasetIndex,
    options: {
      spanGaps
    }
  } = line;
  const count = points.length;
  const result = [];
  let prevStyle = baseStyle;
  let start = segments[0].start;
  let i = start;
  function addStyle(s, e, l, st) {
    const dir = spanGaps ? -1 : 1;
    if (s === e) {
      return;
    }
    s += count;
    while (points[s % count].skip) {
      s -= dir;
    }
    while (points[e % count].skip) {
      e += dir;
    }
    if (s % count !== e % count) {
      result.push({
        start: s % count,
        end: e % count,
        loop: l,
        style: st
      });
      prevStyle = st;
      start = e % count;
    }
  }
  for (const segment of segments) {
    start = spanGaps ? start : segment.start;
    let prev = points[start % count];
    let style;
    for (i = start + 1; i <= segment.end; i++) {
      const pt = points[i % count];
      style = readStyle(segmentOptions.setContext(createContext(chartContext, {
        type: 'segment',
        p0: prev,
        p1: pt,
        p0DataIndex: (i - 1) % count,
        p1DataIndex: i % count,
        datasetIndex
      })));
      if (styleChanged(style, prevStyle)) {
        addStyle(start, i - 1, segment.loop, prevStyle);
      }
      prev = pt;
      prevStyle = style;
    }
    if (start < i - 1) {
      addStyle(start, i - 1, segment.loop, prevStyle);
    }
  }
  return result;
}
function readStyle(options) {
  return {
    backgroundColor: options.backgroundColor,
    borderCapStyle: options.borderCapStyle,
    borderDash: options.borderDash,
    borderDashOffset: options.borderDashOffset,
    borderJoinStyle: options.borderJoinStyle,
    borderWidth: options.borderWidth,
    borderColor: options.borderColor
  };
}
function styleChanged(style, prevStyle) {
  if (!prevStyle) {
    return false;
  }
  const cache = [];
  const replacer = function (key, value) {
    if (!isPatternOrGradient(value)) {
      return value;
    }
    if (!cache.includes(value)) {
      cache.push(value);
    }
    return cache.indexOf(value);
  };
  return JSON.stringify(style, replacer) !== JSON.stringify(prevStyle, replacer);
}


/***/ }),

/***/ 70077:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_assignMergeValue.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ 72681);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ 28325);



/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if (value !== undefined && !(0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object[key], value) || value === undefined && !(key in object)) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, value);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignMergeValue);

/***/ }),

/***/ 68676:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_assignValue.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseAssignValue.js */ 72681);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eq.js */ 28325);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0,_eq_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objValue, value)) || value === undefined && !(key in object)) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, value);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (assignValue);

/***/ }),

/***/ 72681:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_baseAssignValue.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_defineProperty.js */ 11307);


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
    (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseAssignValue);

/***/ }),

/***/ 31088:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseCreate.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseCreate);

/***/ }),

/***/ 2171:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_baseKeysIn.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);
/* harmony import */ var _nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_nativeKeysIn.js */ 22879);




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object)) {
    return (0,_nativeKeysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object);
  }
  var isProto = (0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object),
    result = [];
  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseKeysIn);

/***/ }),

/***/ 45674:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_baseMerge.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_Stack.js */ 53536);
/* harmony import */ var _assignMergeValue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_assignMergeValue.js */ 70077);
/* harmony import */ var _baseFor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseFor.js */ 93867);
/* harmony import */ var _baseMergeDeep_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_baseMergeDeep.js */ 10880);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./keysIn.js */ 22229);
/* harmony import */ var _safeGet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_safeGet.js */ 58883);








/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  (0,_baseFor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, function (srcValue, key) {
    stack || (stack = new _Stack_js__WEBPACK_IMPORTED_MODULE_1__["default"]());
    if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_2__["default"])(srcValue)) {
      (0,_baseMergeDeep_js__WEBPACK_IMPORTED_MODULE_3__["default"])(object, source, key, srcIndex, baseMerge, customizer, stack);
    } else {
      var newValue = customizer ? customizer((0,_safeGet_js__WEBPACK_IMPORTED_MODULE_4__["default"])(object, key), srcValue, key + '', object, source, stack) : undefined;
      if (newValue === undefined) {
        newValue = srcValue;
      }
      (0,_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_5__["default"])(object, key, newValue);
    }
  }, _keysIn_js__WEBPACK_IMPORTED_MODULE_6__["default"]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMerge);

/***/ }),

/***/ 10880:
/*!**************************************************!*\
  !*** ./node_modules/lodash-es/_baseMergeDeep.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assignMergeValue.js */ 70077);
/* harmony import */ var _cloneBuffer_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_cloneBuffer.js */ 21691);
/* harmony import */ var _cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_cloneTypedArray.js */ 7721);
/* harmony import */ var _copyArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_copyArray.js */ 54196);
/* harmony import */ var _initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_initCloneObject.js */ 71372);
/* harmony import */ var _isArguments_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./isArguments.js */ 77018);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isArray.js */ 66328);
/* harmony import */ var _isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isArrayLikeObject.js */ 65306);
/* harmony import */ var _isBuffer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isBuffer.js */ 92467);
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./isFunction.js */ 93084);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./isObject.js */ 32176);
/* harmony import */ var _isPlainObject_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./isPlainObject.js */ 59702);
/* harmony import */ var _isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./isTypedArray.js */ 54752);
/* harmony import */ var _safeGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_safeGet.js */ 58883);
/* harmony import */ var _toPlainObject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./toPlainObject.js */ 25949);
















/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = (0,_safeGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key),
    srcValue = (0,_safeGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(source, key),
    stacked = stack.get(srcValue);
  if (stacked) {
    (0,_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, stacked);
    return;
  }
  var newValue = customizer ? customizer(objValue, srcValue, key + '', object, source, stack) : undefined;
  var isCommon = newValue === undefined;
  if (isCommon) {
    var isArr = (0,_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(srcValue),
      isBuff = !isArr && (0,_isBuffer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(srcValue),
      isTyped = !isArr && !isBuff && (0,_isTypedArray_js__WEBPACK_IMPORTED_MODULE_4__["default"])(srcValue);
    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if ((0,_isArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(objValue)) {
        newValue = objValue;
      } else if ((0,_isArrayLikeObject_js__WEBPACK_IMPORTED_MODULE_5__["default"])(objValue)) {
        newValue = (0,_copyArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(objValue);
      } else if (isBuff) {
        isCommon = false;
        newValue = (0,_cloneBuffer_js__WEBPACK_IMPORTED_MODULE_7__["default"])(srcValue, true);
      } else if (isTyped) {
        isCommon = false;
        newValue = (0,_cloneTypedArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(srcValue, true);
      } else {
        newValue = [];
      }
    } else if ((0,_isPlainObject_js__WEBPACK_IMPORTED_MODULE_9__["default"])(srcValue) || (0,_isArguments_js__WEBPACK_IMPORTED_MODULE_10__["default"])(srcValue)) {
      newValue = objValue;
      if ((0,_isArguments_js__WEBPACK_IMPORTED_MODULE_10__["default"])(objValue)) {
        newValue = (0,_toPlainObject_js__WEBPACK_IMPORTED_MODULE_11__["default"])(objValue);
      } else if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_12__["default"])(objValue) || (0,_isFunction_js__WEBPACK_IMPORTED_MODULE_13__["default"])(objValue)) {
        newValue = (0,_initCloneObject_js__WEBPACK_IMPORTED_MODULE_14__["default"])(srcValue);
      }
    } else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  (0,_assignMergeValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (baseMergeDeep);

/***/ }),

/***/ 82583:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneArrayBuffer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_Uint8Array.js */ 49764);


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__["default"](arrayBuffer));
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneArrayBuffer);

/***/ }),

/***/ 21691:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/_cloneBuffer.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_root.js */ 16396);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].Buffer : undefined,
  allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
  buffer.copy(result);
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneBuffer);

/***/ }),

/***/ 7721:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_cloneTypedArray.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_cloneArrayBuffer.js */ 82583);


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__["default"])(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cloneTypedArray);

/***/ }),

/***/ 54196:
/*!**********************************************!*\
  !*** ./node_modules/lodash-es/_copyArray.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
    length = source.length;
  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyArray);

/***/ }),

/***/ 87480:
/*!***********************************************!*\
  !*** ./node_modules/lodash-es/_copyObject.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_assignValue.js */ 68676);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseAssignValue.js */ 72681);



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});
  var index = -1,
    length = props.length;
  while (++index < length) {
    var key = props[index];
    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object, key, newValue);
    } else {
      (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, key, newValue);
    }
  }
  return object;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (copyObject);

/***/ }),

/***/ 57650:
/*!***************************************************!*\
  !*** ./node_modules/lodash-es/_createAssigner.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ 15736);
/* harmony import */ var _isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_isIterateeCall.js */ 79154);



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return (0,_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (object, sources) {
    var index = -1,
      length = sources.length,
      customizer = length > 1 ? sources[length - 1] : undefined,
      guard = length > 2 ? sources[2] : undefined;
    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
    if (guard && (0,_isIterateeCall_js__WEBPACK_IMPORTED_MODULE_1__["default"])(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAssigner);

/***/ }),

/***/ 47018:
/*!********************************************************!*\
  !*** ./node_modules/lodash-es/_customDefaultsMerge.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseMerge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseMerge.js */ 45674);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObject.js */ 32176);



/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if ((0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(objValue) && (0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    (0,_baseMerge_js__WEBPACK_IMPORTED_MODULE_1__["default"])(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (customDefaultsMerge);

/***/ }),

/***/ 41640:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_getPrototype.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_overArg.js */ 84119);


/** Built-in value references. */
var getPrototype = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object.getPrototypeOf, Object);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getPrototype);

/***/ }),

/***/ 71372:
/*!****************************************************!*\
  !*** ./node_modules/lodash-es/_initCloneObject.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseCreate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseCreate.js */ 31088);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ 41640);
/* harmony import */ var _isPrototype_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_isPrototype.js */ 54036);




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return typeof object.constructor == 'function' && !(0,_isPrototype_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_baseCreate_js__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object)) : {};
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initCloneObject);

/***/ }),

/***/ 22879:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/_nativeKeysIn.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nativeKeysIn);

/***/ }),

/***/ 58883:
/*!********************************************!*\
  !*** ./node_modules/lodash-es/_safeGet.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }
  if (key == '__proto__') {
    return;
  }
  return object[key];
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (safeGet);

/***/ }),

/***/ 44010:
/*!************************************************!*\
  !*** ./node_modules/lodash-es/defaultsDeep.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apply_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_apply.js */ 36318);
/* harmony import */ var _baseRest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_baseRest.js */ 15736);
/* harmony import */ var _customDefaultsMerge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_customDefaultsMerge.js */ 47018);
/* harmony import */ var _mergeWith_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mergeWith.js */ 82644);





/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = (0,_baseRest_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (args) {
  args.push(undefined, _customDefaultsMerge_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return (0,_apply_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_mergeWith_js__WEBPACK_IMPORTED_MODULE_3__["default"], undefined, args);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultsDeep);

/***/ }),

/***/ 65306:
/*!*****************************************************!*\
  !*** ./node_modules/lodash-es/isArrayLikeObject.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) && (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isArrayLikeObject);

/***/ }),

/***/ 59702:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/isPlainObject.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseGetTag.js */ 79304);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_getPrototype.js */ 41640);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isObjectLike.js */ 333);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
  objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) || (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value) != objectTag) {
    return false;
  }
  var proto = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__["default"])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isPlainObject);

/***/ }),

/***/ 22229:
/*!******************************************!*\
  !*** ./node_modules/lodash-es/keysIn.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_arrayLikeKeys.js */ 54937);
/* harmony import */ var _baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_baseKeysIn.js */ 2171);
/* harmony import */ var _isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArrayLike.js */ 64070);




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return (0,_isArrayLike_js__WEBPACK_IMPORTED_MODULE_0__["default"])(object) ? (0,_arrayLikeKeys_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, true) : (0,_baseKeysIn_js__WEBPACK_IMPORTED_MODULE_2__["default"])(object);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysIn);

/***/ }),

/***/ 94011:
/*!*****************************************!*\
  !*** ./node_modules/lodash-es/merge.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseMerge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseMerge.js */ 45674);
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ 57650);



/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = (0,_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (object, source, srcIndex) {
  (0,_baseMerge_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, source, srcIndex);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);

/***/ }),

/***/ 82644:
/*!*********************************************!*\
  !*** ./node_modules/lodash-es/mergeWith.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _baseMerge_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_baseMerge.js */ 45674);
/* harmony import */ var _createAssigner_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_createAssigner.js */ 57650);



/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = (0,_createAssigner_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function (object, source, srcIndex, customizer) {
  (0,_baseMerge_js__WEBPACK_IMPORTED_MODULE_1__["default"])(object, source, srcIndex, customizer);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeWith);

/***/ }),

/***/ 25949:
/*!*************************************************!*\
  !*** ./node_modules/lodash-es/toPlainObject.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _copyObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_copyObject.js */ 87480);
/* harmony import */ var _keysIn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keysIn.js */ 22229);



/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return (0,_copyObject_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, (0,_keysIn_js__WEBPACK_IMPORTED_MODULE_1__["default"])(value));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toPlainObject);

/***/ }),

/***/ 16667:
/*!*********************************************************!*\
  !*** ./node_modules/ng2-charts/fesm2022/ng2-charts.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseChartDirective: () => (/* binding */ BaseChartDirective),
/* harmony export */   NgChartsConfiguration: () => (/* binding */ NgChartsConfiguration),
/* harmony export */   NgChartsModule: () => (/* binding */ NgChartsModule),
/* harmony export */   ThemeService: () => (/* binding */ ThemeService),
/* harmony export */   baseColors: () => (/* binding */ baseColors)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 61699);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ 17005);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chart.js */ 22730);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 58071);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53317);
/* harmony import */ var lodash_es__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash-es */ 94011);






class ThemeService {
  constructor() {
    this.colorschemesOptions = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(undefined);
  }
  setColorschemesOptions(options) {
    this.pColorschemesOptions = options;
    this.colorschemesOptions.next(options);
  }
  getColorschemesOptions() {
    return this.pColorschemesOptions;
  }
  static #_ = this.ɵfac = function ThemeService_Factory(t) {
    return new (t || ThemeService)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ThemeService,
    factory: ThemeService.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ThemeService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class BaseChartDirective {
  constructor(element, zone, themeService) {
    this.zone = zone;
    this.themeService = themeService;
    this.type = 'bar';
    this.plugins = [];
    this.chartClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.chartHover = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.subs = [];
    this.themeOverrides = {};
    this.ctx = element.nativeElement.getContext('2d');
    this.subs.push(this.themeService.colorschemesOptions.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)()).subscribe(r => this.themeChanged(r)));
  }
  ngOnChanges(changes) {
    const requireRender = ['type'];
    const propertyNames = Object.getOwnPropertyNames(changes);
    if (propertyNames.some(key => requireRender.includes(key)) || propertyNames.every(key => changes[key].isFirstChange())) {
      this.render();
    } else {
      const config = this.getChartConfiguration();
      // Using assign to avoid changing the original object reference
      if (this.chart) {
        Object.assign(this.chart.config.data, config.data);
        if (this.chart.config.plugins) {
          Object.assign(this.chart.config.plugins, config.plugins);
        }
        if (this.chart.config.options) {
          Object.assign(this.chart.config.options, config.options);
        }
      }
      this.update();
    }
  }
  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
      this.chart = void 0;
    }
    this.subs.forEach(s => s.unsubscribe());
  }
  render() {
    if (this.chart) {
      this.chart.destroy();
    }
    return this.zone.runOutsideAngular(() => this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart(this.ctx, this.getChartConfiguration()));
  }
  update(duration) {
    if (this.chart) {
      this.zone.runOutsideAngular(() => this.chart?.update(duration));
    }
  }
  hideDataset(index, hidden) {
    if (this.chart) {
      this.chart.getDatasetMeta(index).hidden = hidden;
      this.update();
    }
  }
  isDatasetHidden(index) {
    return this.chart?.getDatasetMeta(index)?.hidden;
  }
  toBase64Image() {
    return this.chart?.toBase64Image();
  }
  themeChanged(options) {
    this.themeOverrides = options;
    if (this.chart) {
      if (this.chart.config.options) {
        Object.assign(this.chart.config.options, this.getChartOptions());
      }
      this.update();
    }
  }
  getChartOptions() {
    return (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])({
      onHover: (event, active) => {
        if (!this.chartHover.observed && !this.chartHover.observers?.length) {
          return;
        }
        this.zone.run(() => this.chartHover.emit({
          event,
          active
        }));
      },
      onClick: (event, active) => {
        if (!this.chartClick.observed && !this.chartClick.observers?.length) {
          return;
        }
        this.zone.run(() => this.chartClick.emit({
          event,
          active
        }));
      }
    }, this.themeOverrides, this.options, {
      plugins: {
        legend: {
          display: this.legend
        }
      }
    });
  }
  getChartConfiguration() {
    return {
      type: this.type,
      data: this.getChartData(),
      options: this.getChartOptions(),
      plugins: this.plugins
    };
  }
  getChartData() {
    return this.data ? this.data : {
      labels: this.labels || [],
      datasets: this.datasets || []
    };
  }
  static #_ = this.ɵfac = function BaseChartDirective_Factory(t) {
    return new (t || BaseChartDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ThemeService));
  };
  static #_2 = this.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
    type: BaseChartDirective,
    selectors: [["canvas", "baseChart", ""]],
    inputs: {
      type: "type",
      legend: "legend",
      data: "data",
      options: "options",
      plugins: "plugins",
      labels: "labels",
      datasets: "datasets"
    },
    outputs: {
      chartClick: "chartClick",
      chartHover: "chartHover"
    },
    exportAs: ["base-chart"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BaseChartDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive,
    args: [{
      // eslint-disable-next-line @angular-eslint/directive-selector
      selector: 'canvas[baseChart]',
      exportAs: 'base-chart'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgZone
    }, {
      type: ThemeService
    }];
  }, {
    type: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    legend: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    data: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    options: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    plugins: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    labels: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    datasets: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
    }],
    chartClick: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }],
    chartHover: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
    }]
  });
})();
const baseColors = [[255, 99, 132], [54, 162, 235], [255, 206, 86], [231, 233, 237], [75, 192, 192], [151, 187, 205], [220, 220, 220], [247, 70, 74], [70, 191, 189], [253, 180, 92], [148, 159, 177], [77, 83, 96]];
const builtInDefaults = {
  plugins: {
    colors: {
      enabled: false
    }
  },
  datasets: {
    line: {
      backgroundColor: context => rgba(generateColor(context.datasetIndex), 0.4),
      borderColor: context => rgba(generateColor(context.datasetIndex), 1),
      pointBackgroundColor: context => rgba(generateColor(context.datasetIndex), 1),
      pointBorderColor: '#fff'
    },
    bar: {
      backgroundColor: context => rgba(generateColor(context.datasetIndex), 0.6),
      borderColor: context => rgba(generateColor(context.datasetIndex), 1)
    },
    get radar() {
      return this.line;
    },
    doughnut: {
      backgroundColor: context => rgba(generateColor(context.dataIndex), 0.6),
      borderColor: '#fff'
    },
    get pie() {
      return this.doughnut;
    },
    polarArea: {
      backgroundColor: context => rgba(generateColor(context.dataIndex), 0.6),
      borderColor: context => rgba(generateColor(context.dataIndex), 1)
    },
    get bubble() {
      return this.doughnut;
    },
    get scatter() {
      return this.doughnut;
    },
    get area() {
      return this.polarArea;
    }
  }
};
function rgba(colour, alpha) {
  return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
  return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors
 */
function generateColor(index = 0) {
  return baseColors[index] || getRandomColor();
}
class NgChartsConfiguration {
  constructor() {
    this.generateColors = true;
  }
  static #_ = this.ɵfac = function NgChartsConfiguration_Factory(t) {
    return new (t || NgChartsConfiguration)();
  };
  static #_2 = this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: NgChartsConfiguration,
    factory: NgChartsConfiguration.ɵfac,
    providedIn: 'root'
  });
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgChartsConfiguration, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(...chart_js__WEBPACK_IMPORTED_MODULE_3__.registerables);
class NgChartsModule {
  constructor(config) {
    if (config?.plugins) chart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(...config.plugins);
    const ngChartsDefaults = (0,lodash_es__WEBPACK_IMPORTED_MODULE_4__["default"])(config?.generateColors ? builtInDefaults : {}, config?.defaults || {});
    chart_js__WEBPACK_IMPORTED_MODULE_5__.d.set(ngChartsDefaults);
  }
  static forRoot(config) {
    return {
      ngModule: NgChartsModule,
      providers: [{
        provide: NgChartsConfiguration,
        useValue: config
      }]
    };
  }
  static #_ = this.ɵfac = function NgChartsModule_Factory(t) {
    return new (t || NgChartsModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](NgChartsConfiguration, 8));
  };
  static #_2 = this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: NgChartsModule
  });
  static #_3 = this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
}
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgChartsModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [],
      declarations: [BaseChartDirective],
      exports: [BaseChartDirective]
    }]
  }], function () {
    return [{
      type: NgChartsConfiguration,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Optional
      }]
    }];
  }, null);
})();

/*
 * Public API Surface of ng2-charts
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_demo_dashboard_dashboard_module_ts.js.map