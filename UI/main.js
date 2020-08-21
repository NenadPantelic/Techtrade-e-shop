(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-guard.guard.ts":
/*!**************************************!*\
  !*** ./src/app/admin-guard.guard.ts ***!
  \**************************************/
/*! exports provided: AdminGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuardGuard", function() { return AdminGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");




var AdminGuardGuard = /** @class */ (function () {
    function AdminGuardGuard(router, login) {
        this.router = router;
        this.login = login;
    }
    AdminGuardGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("role") == "ADMIN" || localStorage.getItem("role") == "OWNER") {
            return true;
        }
        if (this.login.isAuthenticated()) {
            localStorage.removeItem("token");
            if (this.login.isHavingRole()) {
                localStorage.removeItem("role");
            }
            this.router.navigate(['/']);
            return false;
        }
        this.router.navigate(['/']);
        return false;
    };
    AdminGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], AdminGuardGuard);
    return AdminGuardGuard;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    .products .product{\r\n  margin-top:4%;\r\n  margin-bottom: 4%;\r\n  margin-left: 4%;\r\n  width: 75vw;\r\n  height: 50%;\r\n  display:flex;\r\n}\r\n\r\n    .products .img1{\r\n  width :10%;\r\n  height: 35%;\r\n  margin-left: 5%;\r\n  margin-top: 6%;\r\n}\r\n\r\n    .products .desc{\r\n  width:80%;\r\n  margin-top: 3%;\r\n  margin-left:5%;\r\n}\r\n\r\n    .login_btn{\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 100px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    ul li ul li{\r\n        display:none;\r\n    }\r\n\r\n    ul li:hover ul li{\r\n        display:block;\r\n    }\r\n\r\n    ul li ul li a:hover{\r\n        color:black;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*  ------------------ */\r\n\r\n    .modal-content {\r\n        background-color: rgba(0,0,0,.8);\r\n        margin: 4% auto 15% auto;\r\n        border: 1px solid #888;\r\n        width: 40%; \r\n        padding-bottom: 30px;\r\n        align-content: center;\r\n    }\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n        position: absolute;\r\n        right: 25px;\r\n        top: 0;\r\n        color: white;\r\n        font-size: 35px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .close:hover,.close:focus {\r\n        color: red;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n        -webkit-animation: zoom 0.6s;\r\n                animation: zoom 0.6s\r\n    }\r\n\r\n    @-webkit-keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    @keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    .card{\r\n        display: flex;\r\n        margin-top:2%;\r\n        margin-bottom:2%;\r\n        margin-left:20%;\r\n        margin-right: 20%;\r\n    }\r\n\r\n    .card-stat{\r\n        display: flex;\r\n        margin-top:2%;\r\n        margin-bottom:2%;\r\n        margin-left:13%;\r\n        margin-right: 20%;\r\n    }\r\n\r\n    .text-icons{\r\n        margin-left:3%;\r\n        margin-top:1%;\r\n        margin-right: 3%;\r\n    }\r\n\r\n    .inputs{\r\n        \r\n        margin-left:1%\r\n    }\r\n\r\n    .modal {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n       /* left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;*/\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n    }\r\n\r\n    .modal1 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .modal2 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .client a{\r\n        text-decoration: none;\r\n        color:white;\r\n\r\n    }\r\n\r\n    .top-nav{\r\n    padding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n        float: left;\r\n        position: fixed;\r\n        margin-top: 0;\r\n        /*border: 1px solid rgba(0,0,0,.15);*/\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n        background-color: #fff;\r\n        box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n        \r\n}\r\n\r\n    .dropdown ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\n    display:inline-block;\r\n    \r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\n    white-space: normal;\r\n    text-decoration: none;\r\n    \r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\n    color:#05a081;\r\n\r\n    \r\n}\r\n\r\n    .inputs select{\r\n    position: relative;\r\n    background-color:black;\r\n    color:white;\r\n   border-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\n    background-color: #05a081;\r\n    color:black;\r\n}\r\n\r\n    .search-box{\r\n    left: 20%;\r\n    position: absolute;\r\n    border-radius: 40%;\r\n    padding: 10px;\r\n    height: 40px;\r\n}\r\n\r\n    .search-btn{\r\n    color:#05a081;\r\n    float: right;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background: #222;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.4s;\r\n}\r\n\r\n    .search-text {\r\n    font-size: 17px;\r\n    border: none;\r\n    background: none;\r\n    float: left;\r\n    padding: 0;\r\n    color: white;\r\n    transition: 0.4s;\r\n    line-height: 40px;\r\n    width: 0px;\r\n    \r\n  }\r\n\r\n    input[type=\"text\"]{\r\n    border-color: none;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n  }\r\n\r\n    .search-box:hover > .search-text{\r\n      width: 240px;\r\n      padding: 0 6px;\r\n  }\r\n\r\n    .search-box:hover > .search-btn{\r\n    background: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBR0osbUJBQW1COztJQUduQjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztJQUVBOzs7OztJQUtJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0lBR0Esb0JBQW9COztJQUVoQjtRQUNJLGVBQWU7UUFDZixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQ0FBbUM7UUFDbkMsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osdUNBQXVDO0lBQzNDOztJQUVBOztRQUVJLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix1Q0FBdUM7SUFDM0M7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixXQUFXOztJQUVmOztJQUNKO0VBQ0UsU0FBUztBQUNYOztJQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztJQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztJQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0lBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0lBR0Y7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7QUFDZDs7SUFJQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0lBQ0E7RUFDRSxTQUFTO0VBQ1QsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0lBQ0E7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWjs7SUFFQTtJQUNBLFlBQVk7SUFDWix5QkFBeUI7SUFDekI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUNBO1FBQ0ksYUFBYTtJQUNqQjs7SUFDQTtRQUNJLFdBQVc7UUFDWCxlQUFlO0lBQ25COztJQUVBLHdCQUF3Qjs7SUFFeEI7UUFDSSxnQ0FBZ0M7UUFDaEMsd0JBQXdCO1FBQ3hCLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1Ysb0JBQW9CO1FBQ3BCLHFCQUFxQjtJQUN6Qjs7SUFFQSx5QkFBeUI7O0lBQ3pCO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxNQUFNO1FBQ04sWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBQ0E7UUFDSSxVQUFVO1FBQ1YsZUFBZTtJQUNuQjs7SUFFQSx1QkFBdUI7O0lBQ3ZCO1FBQ0ksNEJBQW1CO2dCQUFuQjtJQUNKOztJQUNBO1FBQ0ksTUFBTSwyQkFBa0IsQ0FBbEIsbUJBQW1CO1FBQ3pCLElBQUksMkJBQWtCLENBQWxCLG1CQUFtQjtJQUMzQjs7SUFIQTtRQUNJLE1BQU0sMkJBQWtCLENBQWxCLG1CQUFtQjtRQUN6QixJQUFJLDJCQUFrQixDQUFsQixtQkFBbUI7SUFDM0I7O0lBQ0E7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUNBO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFDQTtRQUNJLGNBQWM7UUFDZCxhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCOztJQUVBOztRQUVJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLFVBQVU7T0FDWDs7O3NCQUdlO1FBQ2QsY0FBYztRQUNkLGlDQUFpQztJQUNyQzs7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsVUFBVTtRQUNWLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVztRQUNYLFlBQVk7UUFDWixjQUFjO1FBQ2QsaUNBQWlDOztJQUVyQzs7SUFDQTtRQUNJLFlBQVk7UUFDWixlQUFlO1FBQ2YsVUFBVTtRQUNWLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVztRQUNYLFlBQVk7UUFDWixjQUFjO1FBQ2QsaUNBQWlDOztJQUVyQzs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixXQUFXOztJQUVmOztJQUdKO0lBQ0ksZUFBZTs7QUFFbkI7O0lBRUE7UUFDUSxXQUFXO1FBQ1gsZUFBZTtRQUNmLGFBQWE7UUFDYixxQ0FBcUM7UUFDckMseUJBQXlCO1FBQ3pCLDBCQUEwQjtRQUMxQixzQkFBc0I7UUFFdEIsdUNBQXVDOztBQUUvQzs7SUFDQTtJQUNJLFlBQVk7QUFDaEI7O0lBR0E7SUFDSSxlQUFlO0FBQ25COztJQUNBO0lBQ0ksb0JBQW9COzs7QUFHeEI7O0lBR0E7SUFDSSxtQkFBbUI7SUFDbkIscUJBQXFCOztBQUV6Qjs7SUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhOzs7QUFHakI7O0lBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFdBQVc7R0FHWiw4QkFBOEI7QUFDakM7O0lBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmOztJQUlBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0lBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0lBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7O0VBRVo7O0lBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0lBR0E7TUFDSSxZQUFZO01BQ1osY0FBYztFQUNsQjs7SUFFQTtJQUNFLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4zLjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcblxyXG4gICAgYm9keSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxuICAgIC8qaHRtbCwgYm9keSwgI3dyYXBwZXIsICNwYWdlLXdyYXBwZXIge2hlaWdodDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjt9Ki9cclxuXHJcblxyXG5cclxuXHJcbiAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjcGFnZS13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAyMnB4IDEwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuLyogVG9wIE5hdmlnYXRpb24gKi9cclxuXHJcblxyXG4udG9wLW5hdj5saT5hIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG59XHJcblxyXG4udG9wLW5hdj5saT5hOmhvdmVyLFxyXG4udG9wLW5hdj5saT5hOmZvY3VzLFxyXG4udG9wLW5hdj4ub3Blbj5hLFxyXG4udG9wLW5hdj4ub3Blbj5hOmhvdmVyLFxyXG4udG9wLW5hdj4ub3Blbj5hOmZvY3VzIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxufVxyXG5cclxuXHJcbi8qIFNpZGUgTmF2aWdhdGlvbiAqL1xyXG5cclxuICAgIC5zaWRlLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICBsZWZ0OiAyMjVweDtcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMjVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggcmdiYSgwLDAsMCwxKSBzb2xpZDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2QjdEOyovXHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXY+bGk+YSB7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpob3ZlcixcclxuICAgIC5zaWRlLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPnVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNpZGUtbmF2PmxpPnVsPmxpPmEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDM4cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4ubmF2YmFyIC5uYXYgPiBsaSA+IGE6aG92ZXIgPiAubGFiZWwge1xyXG4gIHRvcDogMTBweDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLlNlYXJjaHtcclxuXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLlNlYXJjaCBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuU2VhcmNoIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5TZWFyY2ggYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwNWEwODE7XHJcbiAgfVxyXG5cclxuIFxyXG4ucHJvZHVjdHMgLnByb2R1Y3R7XHJcbiAgbWFyZ2luLXRvcDo0JTtcclxuICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgd2lkdGg6IDc1dnc7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG59XHJcblxyXG5cclxuXHJcbi5wcm9kdWN0cyAuaW1nMXtcclxuICB3aWR0aCA6MTAlO1xyXG4gIGhlaWdodDogMzUlO1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tdG9wOiA2JTtcclxufVxyXG4ucHJvZHVjdHMgLmRlc2N7XHJcbiAgd2lkdGg6ODAlO1xyXG4gIG1hcmdpbi10b3A6IDMlO1xyXG4gIG1hcmdpbi1sZWZ0OjUlO1xyXG59XHJcbi5sb2dpbl9idG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44NSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9idG46aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIGxpIHVsIGxpe1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgIHVsIGxpOmhvdmVyIHVsIGxpe1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB9XHJcbiAgICB1bCBsaSB1bCBsaSBhOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiAgLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4gICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjgpO1xyXG4gICAgICAgIG1hcmdpbjogNCUgYXV0byAxNSUgYXV0bztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgICAgIHdpZHRoOiA0MCU7IFxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmNsb3NlOmhvdmVyLC5jbG9zZTpmb2N1cyB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xyXG4gICAgLmFuaW1hdGUge1xyXG4gICAgICAgIGFuaW1hdGlvbjogem9vbSAwLjZzXHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHpvb20ge1xyXG4gICAgICAgIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCl9IFxyXG4gICAgICAgIHRvIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxyXG4gICAgfVxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOjIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgfVxyXG4gICAgLmNhcmQtc3RhdHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToyJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMyU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICB9XHJcbiAgICAudGV4dC1pY29uc3tcclxuICAgICAgICBtYXJnaW4tbGVmdDozJTtcclxuICAgICAgICBtYXJnaW4tdG9wOjElO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0c3tcclxuICAgICAgICBcclxuICAgICAgICBtYXJnaW4tbGVmdDoxJVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubW9kYWwge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgIC8qIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTsqL1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgIH1cclxuICAgIC5tb2RhbDEge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLm1vZGFsMiB7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmNsaWVudCBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuLnRvcC1uYXZ7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG59XHJcblxyXG4udG9wLW5hdjJ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7Ki9cclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgICAgIFxyXG59XHJcbi5kcm9wZG93biB1bCBsaSB1bCBsaXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93biBhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93biBhOmhvdmVyIHVsIGxpe1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG4udG9wLW5hdjIgbGkgYXtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuLmRyb3Bkb3duIGF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjojMDVhMDgxO1xyXG5cclxuICAgIFxyXG59XHJcblxyXG4uaW5wdXRzIHNlbGVjdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG4gICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuICAgYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG59XHJcbi5pbnB1dHMgc2VsZWN0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG5cclxuICAgIFxyXG4uc2VhcmNoLWJveHtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRue1xyXG4gICAgY29sb3I6IzA1YTA4MTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uc2VhcmNoLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IDAgbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLXRleHR7XHJcbiAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgfVxyXG4gICAgXHJcbiAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLWJ0bntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/admin\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            <app-search ></app-search> <!-- search dugme preko komponente -->\n            <!-- <div class=\"search-box\">\n                <input class=\"search-text\" type=\"text\" placeholder=\"Type to search\" name=\"search\">\n                 <a class=\"search-btn\" href=\"#\"><i class=\"fa fa-search\"></i></a>\n                            <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n            </div> -->\n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n                        <li class=\"dropdown\" style=\"margin-right: 15px;\">\n                            <a > {{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                            <ul class=\"top-nav2\">\n                                <li style=\"margin-top:10%;\" ><a routerLink=\"/korpa\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:5px;\" class=\"fa fa-shopping-cart\"></i>Korpa</a></li>\n                                <li style=\"margin-top:10%;\" ><a routerLink=\"/stats\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:8px;\" class=\"fa fa-bar-chart-o\"></i>Statistika</a></li>\n\n                                <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                                <li (click)=\"logout()\"  style=\"margin-top:10%;\"><a  style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li></ul>\n                        </li>\n                    </ul>\n        <!-- Meni sa leve strane -->\n            <ul class=\"nav navbar-nav side-nav\">\n                <li>\n                    <a routerLink=\"/admin\"> POCETNA</a>\n                </li>\n                <li>\n                    <a routerLink=\"/spisak\">SPISAK RADNIKA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/narucivanje\" >NARUCIVANJE PROIZVODA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/naruceno\">NARUCENI PROIZVODI</a>           \n                </li>\n                <li>\n                        <a onclick=\"document.getElementById('exchange').style.display='block'\" style=\"cursor:pointer;\">ZAMENA PROIZVODA</a>           \n                </li>\n                \n                <li>\n                        <a onclick=\"document.getElementById('registering').style.display='block'\"  style=\"cursor:pointer;\">REGISTRACIJA RADNIKA</a>\n                </li>\n                \n                <li>\n                        <a onclick=\"document.getElementById('adding').style.display='block'\"  style=\"cursor:pointer;\">DODAVANJE PROIZVODA</a>\n                </li>\n                <li>\n                        <a onclick=\"document.getElementById('discount').style.display='block'\"  style=\"cursor:pointer;\">ODREDI POPUST</a>\n                </li>\n                <li>\n                       <a routerLink=\"/automatski-popust\">AUTOMATSKI POPUST</a>\n                </li>\n                <li>\n                       <a routerLink=\"/racuni\">PRIKAZ RACUNA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/prikaz\">PRIKAZ FAKTURE</a>\n                    </li>\n                \n            </ul>\n    </nav>\n\n    <div  class=\"products\" *ngFor=\"let product of productService.products\"  id=\"{{ product.id }}\">\n                <div class=\"product\">\n                   <img src=\"{{ product.imagePath }}\" class=\"img1\">  <!-- {{ product.imagePath }} --> \n                        <div class=\"desc\">\n                            <div class=\"row\" id=\"main\" >\n                                <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                                        <div class=\"col-md-12\">\n                                        <h4>Informacije o proizvodu <button  id = \"{{ product.id}}\" (click)=\"changeValues($event); \"  class=\"btn btn-warning btn-xs text-right\"><span id = \"{{ product.id}}\" class=\"glyphicon glyphicon-pencil\"></span>\n                                        </button> Izmeni <button  #buttonID  id = \"{{ product.id}}\" (click)=\"singleStatistic(buttonID.id)\" onclick=\"document.getElementById('stats').style.display='block'\" style=\"margin-left: 5%;\" class=\"btn btn-primary btn-xs text-right\"><span  id = \"{{ product.id}}\" class=\"far fa-chart-bar\"></span>\n                                        </button> Statistika <button  id = \"{{ product.id}}\" (click)=\"deleteProduct($event)\"  style=\"cursor:pointer;\" style=\"margin-left: 5%;\" class=\"btn btn-danger btn-xs text-right\"><span id = \"{{ product.id}}\" class=\"glyphicon glyphicon-trash\"></span>\n                                        </button> Obrisi </h4>\n                                        <div class=\"table-responsive\">  \n                                              <table id=\"mytable\" class=\"table table-bordred table-striped\">                                         \n                                                   <thead>                                                                       \n                                                    <th></th>\n                                                     <th></th>\n                                                     <th></th>                                            \n                                                   </thead>\n                                    <tbody>\n                                        <tr>\n                                         <td>Proizvodjac: </td>\n                                        <td class='{{product.id}}' contenteditable=\"false\">{{ product.producer }}</td>\n                                        <td></td>\n                                        </tr>\n                                        <tr>\n                                         <td>Vrsta proizvoda: </td>\n                                         <td class='{{product.id}}' contenteditable=\"false\">{{ product.productType }}</td>\n                                         <td></td>\n                                         </tr>\n                                         <tr>\n                                        <td>Kolicina: </td>\n                                        <td class='{{product.id}}' contenteditable=\"false\">{{ product.quantity }}</td>\n                                        <td></td>\n                                        </tr>\n                                    <tr>\n                                    <td>Website </td>\n                                    <td class='{{product.id}}' contenteditable=\"false\">{{ product.productURL }}</td>\n                                    <td></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Garancija: </td>\n                                        <td class='{{product.id}}' contenteditable=\"false\">{{ product.warranty }}</td>\n                                        <td></td>\n                                        </tr>\n                                        <tr>\n                                        <td>Naziv proizvoda: </td>\n                                        <td class='{{product.id}}' contenteditable=\"false\">{{ product.name }}</td>\n                                        <td></td>\n                                        </tr>\n                                    \n                                 <tr>\n                                    <td>Opis proizvoda:</td>\n                                    <td class='{{product.id}}' contenteditable=\"false\">{{ product.properties }}</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                        <td>Nabavna cena: </td>\n                                        <td class='{{product.id}}' contenteditable=\"false\">{{ product.vendorPrice }}</td>\n                                        <td></td>\n                                    </tr>\n                                <tr>\n                                    <td>Cena: </td>\n                                    <td class='{{product.id}}' contenteditable=\"false\">{{ product.price }}</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                        \n                                        <td><input #discountValue id=\"{{product.id}}\" type=\"number\" class=\"form-control\" style=\"text-align: center;\" placeholder=\"Iznos procenta\" required min=\"0\" max=\"100\" oninvalid=\"this.setCustomValidity('Vrednost manje ili jednaka 100')\" oninput=\"this.setCustomValidity('')\" ></td>\n                                        <td><button id=\"{{product.id}}\" (click)=\"discountID($event, discountValue.value)\" class=\"btn float-right login_btn\">Izvrsi popust</button>\n                                            <td class=\"text-right\" ><button id = \"{{ product.id}}\" (click)= \"addToCart($event)\" class=\"btn btn-danger btn-xs\"><span id = \"{{ product.id}}\" class=\"glyphicon glyphicon-ok\"></span></button>\n                                            </td>    \n                                    </tr>\n                                    </tbody>\n                                        \n                                </table>\n                                </div>\n                                </div>\n                                </div>\n                            </div>\n                        </div>\n                </div> \n            \n        \n        </div>\n    \n    <div  id=\"adding\" class=\"modal justify-content-center\" >\n            <form [formGroup]=\"uploadForm\"  (submit)='addProduct($event)' class=\"modal-content animate justify-content-center\" >\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('adding').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Dodavanje proizvoda</h1>\n                </div>   \n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                                <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                            <select id=\"producer\" placeholder='Proizvodjac' >\n                                    <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                                    <!-- <option value=\"1000\">1000</option> -->\n                                  </select>                    </div>\n                </div>    \n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                                <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                            <select id=\"productType\" placeholder='Vrsta proizvoda'>\n                                    <option   *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                                  \n                                  </select>                    </div>\n                </div>        \n            \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                            <input id=\"quantity\" type=\"text\" class=\"form-control\" placeholder=\"Kolicina\" required>\n                        </div>\n            </div>\n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                            <input id=\"productURL\" type=\"text\" class=\"form-control\" placeholder=\"Website\" required>\n                        </div>\n            </div>\n            <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"vendorPrice\" type=\"text\" class=\"form-control\" placeholder=\"Nabavna cena\" required>\n                    </div>\n        </div>\n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                            <input id=\"warranty\" type=\"text\" class=\"form-control\" placeholder=\"Garancija\" required>\n                        </div>\n            </div>                \n            <div class=\"card\" style=\"text-align:center;\">     \n                    <div class=\"text-icons\">         \n                <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                <input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Naziv prozivoda...\" required>\n                    </div>\n            </div>\n            <div class=\"card\" style=\"align-content:center;\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                    </div>\n                    <div class=\"inputs\">\n                <textarea id=\"properties\" rows=\"4\" cols=\"50\" class=\"form-control\" name=\"description\" placeholder=\"Uneti opis proizvoda...\" required></textarea>                   \n             </div>\n            </div>\n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-images\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                            <input id=\"image\" type=\"file\" class=\"form-control\" (change)=\"onSelectFile($event)\" >\n                        </div>\n            </div>\n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-dollar-sign\" style=\"color:white; margin-right: 5%;\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                            <input id=\"price\" type=\"number\" class=\"form-control\" placeholder=\"Cena proizvoda\" required>\n                        </div>\n            </div>\n            <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                    <input type=\"submit\" value=\"Dodaj\" class=\"btn float-right login_btn\"  >\n              </div>\n                                \n              </form>\n    </div>\n\n    <div id=\"registering\" class=\"modal1\">\n            <form (submit)='registerUser($event)' class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('registering').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Registracija radnika</h1>\n                </div>   \n                            \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                            <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Korisnicko ime...\" required>\n                        </div>\n            </div>\n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                    </div>\n                    <div class=\"inputs\">\n                            <input id=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Ime\" required>\n                        </div>\n            </div>\n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>         \n                                   </div>\n                    <div class=\"inputs\">\n                            <input id=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Prezime\" required>\n                        </div>\n            </div>\n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-key\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                            <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Sifra...\" required>\n\n                        </div>\n            </div>\n\n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"material-icons\" style=\"font-size:14px;color:white\">email</i>\n                    </div>\n                    <div class=\"inputs\">\n                            <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\" required>\n\n                        </div>\n            </div>\n\n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"role\" placeholder='Pozicija'>\n                                <option value=\"2\">ADMIN</option>\n                                <option value=\"0\">WORKER</option>\n                                <option value=\"1\">MANAGER</option>\n                                <option value=\"3\">OWNER</option>\n                              </select>                    </div>\n            </div>\n\n           \n            <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                    <input id=\"registerButton\" type=\"submit\" value=\"Registracija\" class=\"btn float-right login_btn\" routerLink=\"/admin\" >\n              </div>\n                                \n              </form>\n    </div>\n\n    <div id=\"discount\" class=\"modal2\">\n        <form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('discount').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Odredjivanje popusta</h1>\n            </div>   \n                        \n        <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-industry\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                    <div class=\"inputs\">\n                        <select id=\"producerDiscount\" placeholder='Proizvodjac' >\n                                <option disabled selected value> -- select an option -- </option>\n                                <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                              </select> \n                    </div>                    \n                </div>\n        </div>\n        <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n                <div class=\"text-icons\">         \n                                <i class=\"fas fa-keyboard\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <select id=\"productTypeDiscount\" placeholder='Vrsta proizvoda'>\n                                <option disabled selected value> -- select an option -- </option>\n                                <option *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                              </select>\n                </div>\n        </div>\n        <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-percent\" style=\"color:white\"></i>\n                        \n                </div>\n                <div class=\"inputs\">\n                        <input id=\"procenat\" type=\"number\" class=\"form-control\" style=\"text-align: center; width: 150px\" placeholder=\"Iznos procenta\" required min=\"0\" max=\"100\" oninvalid=\"this.setCustomValidity('Vrednost manje ili jednaka 100')\" oninput=\"this.setCustomValidity('')\"> \n                </div>\n        </div>\n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%;\">\n                <input type=\"submit\" style=\"text-align:center;\" value=\"Izvrsi\" class=\"btn login_btn justify-content-center\">\n                \n          </div>\n          <div style=\"margin-top:2%;margin-left:24;\">\n                <p style=\"text-align:center; color: white\">Status: </p> \n                <p style=\"text-align:center; color: lime\">{{ this.response }}</p>\n          </div>\n                            \n          </form>\n</div>\n<div id=\"stats\" class=\"modal2\">\n    <form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('stats').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n          <h1 style=\"text-align:center;color:white\">Statistika proizvoda</h1>\n        </div>   \n                    \n    <div class=\"card-stat\" style=\"margin-top:2%;\">     \n        <fusioncharts\n        width=\"400\"\n        height=\"300\"\n        type=\"Column2d\"\n        [dataSource]=dataSource>\n    </fusioncharts>\n    </div>\n    </form>\n                         \n</div>\n<div id=\"exchange\" class=\"modal2\">\n        <form (submit)='exchangeProduct($event)' class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('exchange').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Zameni proizvod</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%;\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <a>Sifra racuna proizvoda od kupca    </a>\n                            <select id=\"givingID\" class=\"text-center\" style=\"margin-bottom:10%; margin-left: 5%; width: 30%;\">\n                                    <option  class=\"text-center\" *ngFor=\"let bill of billsService.bills\" value=\"{{ bill.id }}\">{{ bill.id }}</option>\n                            </select> <br>\n                            <div class=\"inputs\">\n                                <input id=\"givinProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra proizvoda koji se menja\" required>\n                            </div><br><br>\n                            <div class=\"inputs\">\n                                <input id=\"takingProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra zeljenog proizvoda\" required>\n                            </div>\n                        </div>\n\n                                  </div>\n            </div>\n           \n            <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%; \">\n                    <input type=\"submit\"  value=\"Zameni\" class=\"btn float-right login_btn\" routerLink=\"/admin\" style=\"width:40%;\">\n              </div>\n                           \n              </form>\n    </div>\n\n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%;\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi koji su trenutno dostupni u prodavnici. Moguće je promeniti bilo koji atribut postojaćeg proizvoda, moguće je ukloniti proizvod, a takođe i izvršiti popust unošenjem odgovarajućeg iznosa procenta. Na crvenu strelicu se proizvod ubacuje u korpu. \n\n\nSpisak radnika\n\n* Omogućen je uvid u spisak svih radnika koji rade u magacinu Techtradea kao i njihove informacije. Moguće je ukloniti korisnika.\n\n\nNaručivanje proizvoda\n\n* Na početku su izlistani svi proizvodi svih dobavljača. Prilikom narudžbenice, moguće je u korpu dodati proizvode pritiskom na crvenu strelicu. U korpi željeni kvantitet unosi sam korisnik. Moguće je obrisati sadržaj iz korpe. Pritiskom na dugme za kupovinu potvrđuje se porudzbina. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nZameni proizvod\n\n* Izvršiti odabir šifre računa;\n* Izvršiti odabir šifre proizvoda na računu;\n* Uneti šifru željenog proizvoda za zamenu;\n* Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka.\n\n\nRegistracija radnika\n\n* Omogućava unošenje novih autorizovanih korisnika. Unošenjem svih potrebnih podataka, kao i podatka koji autorizovani korisnik je u pitanju, biće izbačena odgovarajuća poruka.\n\n\nDodavanje proizvoda\n\n* Moguće je dodati nov proizvod. U slučaju da proizvod već postoji, biće izbačena odgovarajuća poruka.\n\n\nOdredi popust\n\n* Odabrati proizvođača;\n* Odabrati željeni proizvod;\n* Uneti iznos procenta;\n* Pritiskom na dugme 'Izvrši', biće izbačena odgovarajuća poruka.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\nPrikaz računa\n\n* Omogućen je uvid u tabelu sa računima;\n* Moguće je izvesti račun koji je generisan u PDF formi.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_producers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/producers.service */ "./src/app/services/producers.service.ts");
/* harmony import */ var _services_product_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/product-type.service */ "./src/app/services/product-type.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_delete_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/delete.service */ "./src/app/services/delete.service.ts");
/* harmony import */ var _services_single_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/single-service.service */ "./src/app/services/single-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/exchange-product.service */ "./src/app/services/exchange-product.service.ts");
/* harmony import */ var _services_bills_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/bills.service */ "./src/app/services/bills.service.ts");















var AdminComponent = /** @class */ (function () {
    //users: User[];
    function AdminComponent(userService, registerService, productService, producersService, productTypeService, searchService, http, formBuilder, deleteService, single, router, exchangeProductService, billsService) {
        this.userService = userService;
        this.registerService = registerService;
        this.productService = productService;
        this.producersService = producersService;
        this.productTypeService = productTypeService;
        this.searchService = searchService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.deleteService = deleteService;
        this.single = single;
        this.router = router;
        this.exchangeProductService = exchangeProductService;
        this.billsService = billsService;
        this.korpa = JSON.parse(localStorage.getItem("cart"));
        this.searchResult = [];
        this.flag = false;
        this.pozicija = localStorage.getItem('username');
        this.endpointURL = 'http://78.46.117.245:9000/logout';
        this.endpointURL2 = 'http://78.46.117.245:9000/products/';
        this.endpointURL3 = 'http://78.46.117.245:9000/products/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json;charset=UTF-8',
            'token': localStorage.getItem("token")
        });
        this.headers2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'multipart/form-data',
            'token': localStorage.getItem("token")
        });
        this.gotData = false;
        this.check = false;
        this.podaci = [];
        this.userFile = File;
        this.uploadForm = _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"];
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.billsService.getAllBills();
        this.userService.getAllUsers();
        this.productService.getAllProducts();
        //var that = this;
        // this.flag == false;
        //setTimeout(function(){that.products = that.productService.products;}, 100);
        //this.productService.getAllProducts();
        //this.productService.getAllProducts();
        this.producersService.getAllProducers();
        this.productTypeService.getAllProductTypes();
        this.uploadForm = this.formBuilder.group({
            image: [''],
            name: [''],
            price: [''],
            producer: [''],
            productType: [''],
            productURL: [''],
            properties: [''],
            quantity: [''],
            warranty: [''],
            vendorPrice: ['']
        });
    };
    AdminComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    AdminComponent.prototype.deleteProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var id = event.srcElement.id;
        var endPointUrl = this.endpointURL2 + id + '/';
        this.deleteService.deleteAny(endPointUrl).subscribe(function (response) { }, function (err) { _this.handleError(err); });
        this.productService.products = this.productService.products.filter(function (product) { return product.id != id; });
        window.alert("Proizvod je izbrisan!");
    };
    AdminComponent.prototype.exchangeProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var billID = target.querySelector('#givingID').value;
        var givinProductID = target.querySelector('#givinProductID').value;
        var takingProductID = target.querySelector('#takingProductID').value;
        this.exchangeProductService.returnProduct(billID, givinProductID, takingProductID).subscribe(function (data) {
            window.alert("Novac koji se vraca je: " + data.moneyToReturn + " RSD");
        }, function (err) { _this.handleError(err); /*console.log(err.error.message);console.log(err.status);*/ });
    };
    AdminComponent.prototype.singleStatistic = function (id) {
        var _this = this;
        /* event.preventDefault();
        const id = event.srcElement.id;
        const newEndpointURL = this.endpointURL2 + id + "/statistics";
    
        this.http.get(newEndpointURL, {headers: this.headers}).subscribe(result => {
          this.dataSource = result;
          localStorage.setItem("singleStat", JSON.stringify(result));
    
          //console.log(result, this.dataSource)
          //console.log(result)
    
        }) */
        return this.http.get(this.endpointURL3 + id + "/statistics", { headers: this.headers }).subscribe(function (result) {
            _this.myDataSource = result;
            _this.dataSource = {
                chart: {
                    "caption": "Statistika",
                    "subCaption": "Proizvoda",
                    "xAxisName": "Datum",
                    "yAxisName": "Broj prodanih proizvoda",
                    "theme": "fusion",
                },
                "data": _this.myDataSource
            };
        }, function (err) { _this.handleError(err); });
    };
    AdminComponent.prototype.changeValues = function (event) {
        var _this = this;
        event.preventDefault();
        var id = event.srcElement.id;
        var name = document.getElementsByClassName(id);
        this.podaci = [];
        /* if(this.check){
          this.check = false
        }
        else{
          this.check=true;
        } */
        for (var i = 0; i < name.length; i++) {
            if (name[i].className === id) {
                // console.log(name[i].innerHTML)
                if (name[i].getAttribute("contenteditable") === "false") {
                    name[i].setAttribute("contenteditable", "true");
                    this.check = false;
                }
                else {
                    name[i].setAttribute("contenteditable", "false");
                    this.check = true;
                    this.podaci.push(name[i].innerHTML);
                }
            }
        }
        if (this.check) {
            this.http.put(this.endpointURL2 + id + "/", {
                /* "producer": this.podaci[0],
                "productType":  this.podaci[1],*/
                "quantity": this.podaci[2],
                "price": this.podaci[8],
                /*"productURL":  this.podaci[3],*/
                "warranty": this.podaci[4],
                "name": this.podaci[5],
                "properties": this.podaci[6],
                "vendorPrice": this.podaci[7]
            }, { headers: this.headers }).subscribe(function (response) {
                window.alert("Podaci o proizvodu uspešno promenjeni!");
            }, function (err) { _this.handleError(err); });
        }
        //console.log(id,name, "majkamajakamajakamajakajamakjak")
    };
    AdminComponent.prototype.registerUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        var firstName = target.querySelector('#firstName').value;
        var lastName = target.querySelector('#lastName').value;
        var email = target.querySelector('#email').value;
        var role = target.querySelector('#role').value;
        this.registerService.sendUserDetails(firstName, lastName, username, email, password, role).subscribe(function (response) { window.alert("Uspešna registracija korisnika!"); }, function (err) { _this.handleError(err); });
        //)
        /*
        console.log(username,password)
        console.log(error);
        console.log(localStorage.getItem("token"));
        */
    };
    AdminComponent.prototype.addDiscount = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var producer = target.querySelector('#producerDiscount').value;
        var productType = target.querySelector('#productTypeDiscount').value;
        var discountCoefficient = target.querySelector("#procenat").value;
        this.productService.discountProduct(producer, productType, discountCoefficient).subscribe(function (response) {
            _this.response = response;
            window.alert("Popust je dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 150);
        //zbog unosa u bazu i responsa stavljamo timeout da bi ucitao nove cene a ne stare
    };
    AdminComponent.prototype.discountID = function (event, discountPercent) {
        var _this = this;
        var productID = event.srcElement.id;
        this.productService.discountSingleProduct(productID, discountPercent).subscribe(function (response) {
            window.alert("Popust uspešno uračunat na izabranom proizvodu!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 200);
    };
    AdminComponent.prototype.onSelectFile = function (event) {
        var selectFile = event.target.files[0];
        this.userFile = selectFile;
    };
    AdminComponent.prototype.addProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var image = target.querySelector('#image');
        /* if(image.files.length > 0){
          const file = image.files[0];
          this.uploadForm.get('file').setValue(file);
          this.slika = this.uploadForm.get('file').value;
        }  */
        // var formData = new FormData();
        //formData.append('image', image);
        var name = target.querySelector('#name').value;
        this.uploadForm.get('name').setValue(name);
        var price = target.querySelector('#price').value;
        this.uploadForm.get('price').setValue(price);
        var producer = target.querySelector('#producer').value;
        this.uploadForm.get('producer').setValue(producer);
        var productType = target.querySelector('#productType').value;
        this.uploadForm.get('productType').setValue(productType);
        var productURL = target.querySelector('#productURL').value;
        this.uploadForm.get('productURL').setValue(productURL);
        var properties = target.querySelector('#properties').value;
        this.uploadForm.get('properties').setValue(properties);
        var quantity = target.querySelector('#quantity').value;
        this.uploadForm.get('quantity').setValue(quantity);
        var warranty = target.querySelector('#warranty').value;
        this.uploadForm.get('warranty').setValue(warranty);
        var vendorPrice = target.querySelector('#vendorPrice').value;
        this.uploadForm.get('vendorPrice').setValue(vendorPrice);
        var data = JSON.stringify(this.uploadForm.value);
        var formData = new FormData();
        //formData.append("productData", data);
        formData.append("image", this.userFile);
        // formData.append("image", this.uploadForm.get('file').value);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("producer", producer);
        formData.append("productType", productType);
        formData.append("productURL", productURL);
        formData.append("properties", properties);
        formData.append("quantity", quantity);
        formData.append("warranty", warranty);
        formData.append("vendorPrice", vendorPrice);
        /*console.log( formData  image, name, price, producer, productType, productURL, properties, quantity, warranty );*/
        /*this.registerService.sendProductDetails(image, name, price, producer, productType, productURL, properties, quantity, warranty ).subscribe();*/
        this.registerService.sendProductDetails(formData).subscribe(function (response) {
            window.alert("Proizvod je uspešno dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 200);
    };
    AdminComponent.prototype.listProduct = function (event) {
        event.preventDefault();
        var name = event.srcElement.innerText;
    };
    //values = [];
    // cart = [];
    AdminComponent.prototype.addToCart = function (event) {
        var id = event.srcElement.id;
        if (this.korpa == null || this.korpa.length == 0) {
            this.korpa = [];
            this.korpa.push(id);
        }
        else {
            if (this.korpa.includes(id.toString())) {
                alert('Proizvod je vec ubacen u korpu');
            }
            else {
                this.korpa.push(id);
                window.alert("Proizvod uspešno dodat u korpu!");
            }
        }
        localStorage.setItem("cart", JSON.stringify(this.korpa));
    };
    AdminComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _services_producers_service__WEBPACK_IMPORTED_MODULE_6__["ProducersService"],
            _services_product_type_service__WEBPACK_IMPORTED_MODULE_7__["ProductTypeService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"],
            _services_delete_service__WEBPACK_IMPORTED_MODULE_10__["DeleteService"],
            _services_single_service_service__WEBPACK_IMPORTED_MODULE_11__["SingleServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"],
            _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_13__["ExchangeProductService"],
            _services_bills_service__WEBPACK_IMPORTED_MODULE_14__["BillsService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n <router-outlet></router-outlet>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Techtrade';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _spisak_spisak_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spisak/spisak.component */ "./src/app/spisak/spisak.component.ts");
/* harmony import */ var _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./korpa/korpa.component */ "./src/app/korpa/korpa.component.ts");
/* harmony import */ var _komercijalista_komercijalista_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./komercijalista/komercijalista.component */ "./src/app/komercijalista/komercijalista.component.ts");
/* harmony import */ var _radnik_radnik_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./radnik/radnik.component */ "./src/app/radnik/radnik.component.ts");
/* harmony import */ var _prikaz_prikaz_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./prikaz/prikaz.component */ "./src/app/prikaz/prikaz.component.ts");
/* harmony import */ var _naruceno_naruceno_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./naruceno/naruceno.component */ "./src/app/naruceno/naruceno.component.ts");
/* harmony import */ var _radnik_korpa_radnik_korpa_radnik_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./radnik/korpa-radnik/korpa-radnik.component */ "./src/app/radnik/korpa-radnik/korpa-radnik.component.ts");
/* harmony import */ var _radnik_naruci_naruci_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./radnik/naruci/naruci.component */ "./src/app/radnik/naruci/naruci.component.ts");
/* harmony import */ var _komercijalista_naruceno_komercijalista_naruceno_komercijalista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./komercijalista/naruceno-komercijalista/naruceno-komercijalista.component */ "./src/app/komercijalista/naruceno-komercijalista/naruceno-komercijalista.component.ts");
/* harmony import */ var _komercijalista_prikaz_komercijalista_prikaz_komercijalista_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./komercijalista/prikaz-komercijalista/prikaz-komercijalista.component */ "./src/app/komercijalista/prikaz-komercijalista/prikaz-komercijalista.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _login_guard__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login.guard */ "./src/app/login.guard.ts");
/* harmony import */ var _racuni_racuni_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./racuni/racuni.component */ "./src/app/racuni/racuni.component.ts");
/* harmony import */ var _pretraga_pretraga_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pretraga/pretraga.component */ "./src/app/pretraga/pretraga.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _komercijalista_narucivanje_komercijalista_narucivanje_komercijalista_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./komercijalista/narucivanje-komercijalista/narucivanje-komercijalista.component */ "./src/app/komercijalista/narucivanje-komercijalista/narucivanje-komercijalista.component.ts");
/* harmony import */ var _automatski_popust_automatski_popust_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./automatski-popust/automatski-popust.component */ "./src/app/automatski-popust/automatski-popust.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! angular-fusioncharts */ "./node_modules/angular-fusioncharts/index.js");
/* harmony import */ var fusioncharts_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! fusioncharts/core */ "./node_modules/fusioncharts/core/index.js");
/* harmony import */ var fusioncharts_viz_column2d__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! fusioncharts/viz/column2d */ "./node_modules/fusioncharts/viz/column2d.js");
/* harmony import */ var _narucivanje_narucivanje_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./narucivanje/narucivanje.component */ "./src/app/narucivanje/narucivanje.component.ts");
/* harmony import */ var _admin_guard_guard__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./admin-guard.guard */ "./src/app/admin-guard.guard.ts");
/* harmony import */ var _komercijalista_guard_guard__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./komercijalista-guard.guard */ "./src/app/komercijalista-guard.guard.ts");
/* harmony import */ var _radnik_guard_guard__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./radnik-guard.guard */ "./src/app/radnik-guard.guard.ts");
/* harmony import */ var _komercijalista_automatski_popust_komercijalista_automatski_popust_komercijalista_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./komercijalista/automatski-popust-komercijalista/automatski-popust-komercijalista.component */ "./src/app/komercijalista/automatski-popust-komercijalista/automatski-popust-komercijalista.component.ts");



























//FusionCharts








angular_fusioncharts__WEBPACK_IMPORTED_MODULE_27__["FusionChartsModule"].fcRoot(fusioncharts_core__WEBPACK_IMPORTED_MODULE_28__["default"], fusioncharts_viz_column2d__WEBPACK_IMPORTED_MODULE_29__["default"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
                _spisak_spisak_component__WEBPACK_IMPORTED_MODULE_7__["SpisakComponent"],
                _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_8__["KorpaComponent"],
                _komercijalista_komercijalista_component__WEBPACK_IMPORTED_MODULE_9__["KomercijalistaComponent"],
                _radnik_radnik_component__WEBPACK_IMPORTED_MODULE_10__["RadnikComponent"],
                _prikaz_prikaz_component__WEBPACK_IMPORTED_MODULE_11__["PrikazComponent"],
                _naruceno_naruceno_component__WEBPACK_IMPORTED_MODULE_12__["NarucenoComponent"],
                _radnik_korpa_radnik_korpa_radnik_component__WEBPACK_IMPORTED_MODULE_13__["KorpaRadnikComponent"],
                _radnik_naruci_naruci_component__WEBPACK_IMPORTED_MODULE_14__["NaruciComponent"],
                _komercijalista_naruceno_komercijalista_naruceno_komercijalista_component__WEBPACK_IMPORTED_MODULE_15__["NarucenoKomercijalistaComponent"],
                _komercijalista_prikaz_komercijalista_prikaz_komercijalista_component__WEBPACK_IMPORTED_MODULE_16__["PrikazKomercijalistaComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_17__["SearchComponent"],
                _racuni_racuni_component__WEBPACK_IMPORTED_MODULE_21__["RacuniComponent"],
                _pretraga_pretraga_component__WEBPACK_IMPORTED_MODULE_22__["PretragaComponent"],
                _komercijalista_narucivanje_komercijalista_narucivanje_komercijalista_component__WEBPACK_IMPORTED_MODULE_24__["NarucivanjeKomercijalistaComponent"],
                _automatski_popust_automatski_popust_component__WEBPACK_IMPORTED_MODULE_25__["AutomatskiPopustComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_26__["StatsComponent"],
                _narucivanje_narucivanje_component__WEBPACK_IMPORTED_MODULE_30__["NarucivanjeComponent"],
                _komercijalista_automatski_popust_komercijalista_automatski_popust_komercijalista_component__WEBPACK_IMPORTED_MODULE_34__["AutomatskiPopustKomercijalistaComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
                angular_fusioncharts__WEBPACK_IMPORTED_MODULE_27__["FusionChartsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: "spisak",
                        component: _spisak_spisak_component__WEBPACK_IMPORTED_MODULE_7__["SpisakComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _admin_guard_guard__WEBPACK_IMPORTED_MODULE_31__["AdminGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]
                            }
                        ]
                    },
                    {
                        path: "narucivanje",
                        component: _narucivanje_narucivanje_component__WEBPACK_IMPORTED_MODULE_30__["NarucivanjeComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _admin_guard_guard__WEBPACK_IMPORTED_MODULE_31__["AdminGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]
                            }
                        ]
                    },
                    {
                        path: "stats",
                        component: _stats_stats_component__WEBPACK_IMPORTED_MODULE_26__["StatsComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _admin_guard_guard__WEBPACK_IMPORTED_MODULE_31__["AdminGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]
                            }
                        ]
                    },
                    {
                        path: "korpa",
                        component: _korpa_korpa_component__WEBPACK_IMPORTED_MODULE_8__["KorpaComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _admin_guard_guard__WEBPACK_IMPORTED_MODULE_31__["AdminGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]
                            }
                        ]
                    },
                    {
                        path: "naruceno",
                        component: _naruceno_naruceno_component__WEBPACK_IMPORTED_MODULE_12__["NarucenoComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _admin_guard_guard__WEBPACK_IMPORTED_MODULE_31__["AdminGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]
                            }
                        ]
                    },
                    {
                        path: "komercijalista/naruceno-komercijalista",
                        component: _komercijalista_naruceno_komercijalista_naruceno_komercijalista_component__WEBPACK_IMPORTED_MODULE_15__["NarucenoKomercijalistaComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _komercijalista_guard_guard__WEBPACK_IMPORTED_MODULE_32__["KomercijalistaGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _komercijalista_komercijalista_component__WEBPACK_IMPORTED_MODULE_9__["KomercijalistaComponent"]
                            }
                        ]
                    },
                    {
                        path: "komercijalista/prikaz-komercijalista",
                        component: _komercijalista_prikaz_komercijalista_prikaz_komercijalista_component__WEBPACK_IMPORTED_MODULE_16__["PrikazKomercijalistaComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _komercijalista_guard_guard__WEBPACK_IMPORTED_MODULE_32__["KomercijalistaGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _komercijalista_komercijalista_component__WEBPACK_IMPORTED_MODULE_9__["KomercijalistaComponent"]
                            }
                        ]
                    },
                    {
                        path: "komercijalista/narucivanje-komercijalista",
                        component: _komercijalista_narucivanje_komercijalista_narucivanje_komercijalista_component__WEBPACK_IMPORTED_MODULE_24__["NarucivanjeKomercijalistaComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _komercijalista_guard_guard__WEBPACK_IMPORTED_MODULE_32__["KomercijalistaGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _komercijalista_komercijalista_component__WEBPACK_IMPORTED_MODULE_9__["KomercijalistaComponent"]
                            }
                        ]
                    },
                    {
                        path: "komercijalista/automatski-popust-komercijalista",
                        component: _komercijalista_automatski_popust_komercijalista_automatski_popust_komercijalista_component__WEBPACK_IMPORTED_MODULE_34__["AutomatskiPopustKomercijalistaComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _komercijalista_guard_guard__WEBPACK_IMPORTED_MODULE_32__["KomercijalistaGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _komercijalista_komercijalista_component__WEBPACK_IMPORTED_MODULE_9__["KomercijalistaComponent"]
                            }
                        ]
                    },
                    {
                        path: "radnik/korpa-radnik",
                        component: _radnik_korpa_radnik_korpa_radnik_component__WEBPACK_IMPORTED_MODULE_13__["KorpaRadnikComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _radnik_guard_guard__WEBPACK_IMPORTED_MODULE_33__["RadnikGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _radnik_radnik_component__WEBPACK_IMPORTED_MODULE_10__["RadnikComponent"]
                            }
                        ]
                    },
                    {
                        path: "radnik/naruci",
                        component: _radnik_naruci_naruci_component__WEBPACK_IMPORTED_MODULE_14__["NaruciComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _radnik_guard_guard__WEBPACK_IMPORTED_MODULE_33__["RadnikGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _radnik_radnik_component__WEBPACK_IMPORTED_MODULE_10__["RadnikComponent"]
                            }
                        ]
                    },
                    {
                        path: "prikaz",
                        component: _prikaz_prikaz_component__WEBPACK_IMPORTED_MODULE_11__["PrikazComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _admin_guard_guard__WEBPACK_IMPORTED_MODULE_31__["AdminGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]
                            }
                        ]
                    },
                    {
                        path: "racuni",
                        component: _racuni_racuni_component__WEBPACK_IMPORTED_MODULE_21__["RacuniComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _admin_guard_guard__WEBPACK_IMPORTED_MODULE_31__["AdminGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]
                            }
                        ]
                    },
                    {
                        path: "pretraga",
                        component: _pretraga_pretraga_component__WEBPACK_IMPORTED_MODULE_22__["PretragaComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"]]
                    },
                    {
                        path: "automatski-popust",
                        component: _automatski_popust_automatski_popust_component__WEBPACK_IMPORTED_MODULE_25__["AutomatskiPopustComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _admin_guard_guard__WEBPACK_IMPORTED_MODULE_31__["AdminGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]
                            }
                        ]
                    },
                    {
                        path: "komercijalista",
                        component: _komercijalista_komercijalista_component__WEBPACK_IMPORTED_MODULE_9__["KomercijalistaComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _komercijalista_guard_guard__WEBPACK_IMPORTED_MODULE_32__["KomercijalistaGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _komercijalista_komercijalista_component__WEBPACK_IMPORTED_MODULE_9__["KomercijalistaComponent"]
                            }
                        ]
                    },
                    {
                        path: "radnik",
                        component: _radnik_radnik_component__WEBPACK_IMPORTED_MODULE_10__["RadnikComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _radnik_guard_guard__WEBPACK_IMPORTED_MODULE_33__["RadnikGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _radnik_radnik_component__WEBPACK_IMPORTED_MODULE_10__["RadnikComponent"]
                            }
                        ]
                    },
                    {
                        path: "admin",
                        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
                        canActivate: [_login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _admin_guard_guard__WEBPACK_IMPORTED_MODULE_31__["AdminGuardGuard"]],
                        children: [
                            {
                                path: '',
                                component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"]
                            }
                        ]
                    },
                    {
                        path: "",
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
                    }
                ])
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _services_user_service__WEBPACK_IMPORTED_MODULE_19__["UserService"], _login_guard__WEBPACK_IMPORTED_MODULE_20__["LoginGuard"], _admin_guard_guard__WEBPACK_IMPORTED_MODULE_31__["AdminGuardGuard"], _komercijalista_guard_guard__WEBPACK_IMPORTED_MODULE_32__["KomercijalistaGuardGuard"], _radnik_guard_guard__WEBPACK_IMPORTED_MODULE_33__["RadnikGuardGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/automatski-popust/automatski-popust.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/automatski-popust/automatski-popust.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n        margin-top:8vh;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    ul li:hover ul li{\r\n    display:block;\r\n}\r\n\r\n    ul li ul li a:hover{\r\n    color:black;\r\n}\r\n\r\n    .modal-content {\r\n    background-color: rgba(0,0,0,.8);\r\n    margin: 4% auto 15% auto;\r\n    border: 1px solid #888;\r\n    width: 40%; \r\n    padding-bottom: 30px;\r\n    align-content: center;\r\n}\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n    position: absolute;\r\n    right: 25px;\r\n    top: 0;\r\n    color: white;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n}\r\n\r\n    .close:hover,.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n    -webkit-animation: zoom 0.6s;\r\n            animation: zoom 0.6s\r\n}\r\n\r\n    @-webkit-keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    @keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    .card{\r\n    display:flex;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    margin-left:35%;\r\n}\r\n\r\n    .text-icons{\r\n    margin-left:3%;\r\n    margin-top:1%;\r\n}\r\n\r\n    .inputs{\r\n    margin-left:1%\r\n}\r\n\r\n    .modal {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n    .modal1 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .modal2 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .top-nav{\r\npadding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n    float: left;\r\n    position: fixed;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n    \r\n}\r\n\r\n    .dropdown ul li ul li{\r\ndisplay:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\ncursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\ndisplay:inline-block;\r\n\r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\nwhite-space: normal;\r\ntext-decoration: none;\r\n\r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\ncolor:#05a081;\r\n\r\n\r\n}\r\n\r\n    .inputs select{\r\nposition: relative;\r\nbackground-color:black;\r\ncolor:white;\r\nborder-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\nbackground-color: #05a081;\r\ncolor:black;\r\n}\r\n\r\n    .login_btn{\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 100px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    .search-box{\r\n        left: 20%;\r\n        position: absolute;\r\n        border-radius: 40%;\r\n        padding: 10px;\r\n        height: 40px;\r\n    }\r\n\r\n    .search-btn{\r\n        color:#05a081;\r\n        float: right;\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 50%;\r\n        background: #222;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: 0.4s;\r\n    }\r\n\r\n    .search-text {\r\n        font-size: 17px;\r\n        border: none;\r\n        background: none;\r\n        float: left;\r\n        padding: 0;\r\n        color: white;\r\n        transition: 0.4s;\r\n        line-height: 40px;\r\n        width: 0px;\r\n        \r\n      }\r\n\r\n    input[type=\"text\"]{\r\n        border-color: none;\r\n        box-shadow: none;\r\n        outline: 0 none;\r\n      }\r\n\r\n    .search-box:hover > .search-text{\r\n          width: 240px;\r\n          padding: 0 6px;\r\n      }\r\n\r\n    .search-box:hover > .search-btn{\r\n        background: white;\r\n    }\r\n\r\n    .client a{\r\n        text-decoration: none;\r\n        color:white;\r\n\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0b21hdHNraS1wb3B1c3QvYXV0b21hdHNraS1wb3B1c3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjs7SUFHSixtQkFBbUI7O0lBRW5CO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0lBRUE7Ozs7O0lBS0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7SUFHQSxvQkFBb0I7O0lBRWhCO1FBQ0ksZUFBZTtRQUNmLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1DQUFtQztRQUNuQyxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWix1Q0FBdUM7SUFDM0M7O0lBRUE7O1FBRUksYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHVDQUF1QztJQUMzQzs7SUFFQTtRQUNJLGNBQWM7UUFDZCw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLFdBQVc7O0lBRWY7O0lBQ0o7RUFDRSxTQUFTO0FBQ1g7O0lBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0lBQ0E7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7SUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7O0lBQ0E7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFD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RSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsV0FBVzs7SUFFZiIsImZpbGUiOiJzcmMvYXBwL2F1dG9tYXRza2ktcG9wdXN0L2F1dG9tYXRza2ktcG9wdXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4zLjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcblxyXG4gICAgYm9keSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxuICAgIC8qaHRtbCwgYm9keSwgI3dyYXBwZXIsICNwYWdlLXdyYXBwZXIge2hlaWdodDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjt9Ki9cclxuXHJcblxyXG5cclxuXHJcbiAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjcGFnZS13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAyMnB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo4dmg7XHJcbiAgICB9XHJcblxyXG5cclxuLyogVG9wIE5hdmlnYXRpb24gKi9cclxuXHJcbi50b3AtbmF2PmxpPmEge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi50b3AtbmF2PmxpPmE6aG92ZXIsXHJcbi50b3AtbmF2PmxpPmE6Zm9jdXMsXHJcbi50b3AtbmF2Pi5vcGVuPmEsXHJcbi50b3AtbmF2Pi5vcGVuPmE6aG92ZXIsXHJcbi50b3AtbmF2Pi5vcGVuPmE6Zm9jdXMge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG59XHJcblxyXG5cclxuLyogU2lkZSBOYXZpZ2F0aW9uICovXHJcblxyXG4gICAgLnNpZGUtbmF2IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgIGxlZnQ6IDIyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIyNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCByZ2JhKDAsMCwwLDEpIHNvbGlkO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICAgICAgICAvKmJhY2tncm91bmQtY29sb3I6ICM1QTZCN0Q7Ki9cclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdj5saT5hIHtcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwwLDAsLjMpIHNvbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdiBsaSBhOmhvdmVyLFxyXG4gICAgLnNpZGUtbmF2IGxpIGE6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXY+bGk+dWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwwLDAsLjMpIHNvbGlkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2lkZS1uYXY+bGk+dWw+bGk+YSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMzhweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbi5uYXZiYXIgLm5hdiA+IGxpID4gYTpob3ZlciA+IC5sYWJlbCB7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcbi5TZWFyY2h7XHJcblxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2ggaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuU2VhcmNoIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDVhMDgxO1xyXG4gIH1cclxuXHJcbnVsIGxpIHVsIGxpe1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbnVsIGxpOmhvdmVyIHVsIGxpe1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufVxyXG51bCBsaSB1bCBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjgpO1xyXG4gICAgbWFyZ2luOiA0JSBhdXRvIDE1JSBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgIHdpZHRoOiA0MCU7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbi5jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIHRvcDogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jbG9zZTpob3ZlciwuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQWRkIFpvb20gQW5pbWF0aW9uICovXHJcbi5hbmltYXRlIHtcclxuICAgIGFuaW1hdGlvbjogem9vbSAwLjZzXHJcbn1cclxuQGtleWZyYW1lcyB6b29tIHtcclxuICAgIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCl9IFxyXG4gICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XHJcbn1cclxuLmNhcmR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOjIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbToyJTtcclxuICAgIG1hcmdpbi1sZWZ0OjM1JTtcclxufVxyXG4udGV4dC1pY29uc3tcclxuICAgIG1hcmdpbi1sZWZ0OjMlO1xyXG4gICAgbWFyZ2luLXRvcDoxJTtcclxufVxyXG5cclxuLmlucHV0c3tcclxuICAgIG1hcmdpbi1sZWZ0OjElXHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbn1cclxuLm1vZGFsMSB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBcclxufVxyXG4ubW9kYWwyIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLnRvcC1uYXZ7XHJcbnBhZGRpbmc6IDAgMTVweDtcclxuXHJcbn1cclxuXHJcbi50b3AtbmF2MntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTUpOyovXHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICBcclxufVxyXG4uZHJvcGRvd24gdWwgbGkgdWwgbGl7XHJcbmRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93biBhOmhvdmVye1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRyb3Bkb3duIGE6aG92ZXIgdWwgbGl7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4udG9wLW5hdjIgbGkgYXtcclxud2hpdGUtc3BhY2U6IG5vcm1hbDtcclxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxufVxyXG5cclxuLmRyb3Bkb3duIGF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbmNvbG9yOiMwNWEwODE7XHJcblxyXG5cclxufVxyXG5cclxuLmlucHV0cyBzZWxlY3R7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuY29sb3I6d2hpdGU7XHJcbi1tb3otYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG4td2Via2l0LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG59XHJcbi5pbnB1dHMgc2VsZWN0OmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG5jb2xvcjpibGFjaztcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmxvZ2luX2J0bntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjg1KTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luX2J0bjpob3ZlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5zZWFyY2gtYm94e1xyXG4gICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLWJ0bntcclxuICAgICAgICBjb2xvcjojMDVhMDgxO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IDAgbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC5zZWFyY2gtYm94OmhvdmVyID4gLnNlYXJjaC10ZXh0e1xyXG4gICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLWJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2xpZW50IGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG5cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/automatski-popust/automatski-popust.component.html":
/*!********************************************************************!*\
  !*** ./src/app/automatski-popust/automatski-popust.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/admin\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n                <li class=\"dropdown\" style=\"margin-right: 15px;\">\n                    <a > {{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                    <ul class=\"top-nav2\">\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/korpa\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:5px;\" class=\"fa fa-shopping-cart\"></i>Korpa</a></li>\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/stats\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:8px;\" class=\"fa fa-bar-chart-o\"></i>Statistika</a></li>\n\n                        <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                        <li (click)=\"logout()\"  style=\"margin-top:10%;\"><a  style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li></ul>\n                </li>\n            </ul>\n<!-- Meni sa leve strane -->\n    <ul class=\"nav navbar-nav side-nav\">\n        <li>\n            <a routerLink=\"/admin\"> POCETNA</a>\n        </li>\n        <li>\n            <a routerLink=\"/spisak\">SPISAK RADNIKA</a>\n        </li>\n        <li>\n                <a routerLink=\"/narucivanje\" >NARUCIVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a routerLink=\"/naruceno\">NARUCENI PROIZVODI</a>           \n        </li>\n        <li>\n                <a onclick=\"document.getElementById('exchange').style.display='block'\" style=\"cursor:pointer;\">ZAMENA PROIZVODA</a>           \n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('registering').style.display='block'\"  style=\"cursor:pointer;\">REGISTRACIJA RADNIKA</a>\n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('adding').style.display='block'\"  style=\"cursor:pointer;\">DODAVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a onclick=\"document.getElementById('discount').style.display='block'\"  style=\"cursor:pointer;\">ODREDI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/automatski-popust\">AUTOMATSKI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/racuni\">PRIKAZ RACUNA</a>\n        </li>\n        <li>\n                <a routerLink=\"/prikaz\">PRIKAZ FAKTURE</a>\n            </li>\n        \n    </ul>\n</nav>\n\n    <div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <div class=\"row\" id=\"main\" >\n                <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                  \n                        <div class=\"col-md-12\">\n                        <h4>Spisak proizvoda kojima je omogućen automatski popust</h4>\n                        <div  id=\"spisakRadnika\" class=\"table-responsive text-center\">\n                \n                                \n                              <table id=\"mytable\" class=\"table table-bordred table-striped\">\n                                   \n                                   <thead>\n                                    <th class=\"text-center\">Naziv</th>\n                                    <th class=\"text-center\">Proizvodjač</th>\n                                     <th class=\"text-center\">Tip proizvoda</th>\n                                     <th class=\"text-center\">ID</th>\n                                     <th class=\"text-center\">Garancija</th>\n                                     <th class=\"text-center\">Cena</th>\n                                     <th class=\"text-center\">Datum poslednje aktivnosti</th>\n                                     <th class=\"text-center\">Popust</th>\n                                     <th class=\"text-center\">Omogući</th>\n                                   </thead>\n                    <tbody>\n                    \n                    <tr *ngFor=\"let product of automaticProducts, let i=index\">\n                    <td class=\"text-center\">{{product.name}}</td>\n                    <td class=\"text-center\">{{product.producer}}</td>\n                    <td class=\"text-center\">{{product.productType}}</td>\n                    <td class=\"text-center\">{{product.id}}</td>\n                    <td class=\"text-center\">{{ product.warranty }}</td>\n                    <td class=\"text-center\">{{ product.price }}</td>\n                    <td class=\"text-center\">{{ product.latestActivityDate }}</td>\n                    <td class=\"text-center\">{{ product.discount }}%</td>\n                    <td class=\"text-center\"><button #approveButton name=\"{{ product.name }}\"  (click)=\"addToApprove($event, approveButton.name, i)\" id=\"{{ product.id }}\"  class=\"btn btn-danger btn-xs selectButton\"><span id=\"{{ product.id }}\"  class=\"glyphicon glyphicon-ok\"></span></button></td>\n                     \n                    \n                </tr>\n                <!-- <tr>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td class=\"text-center\"><button id=\"selectAllButton\" (click)=\"selectApproveAll($event)\" type=\"button\" >Selektuj sve </button></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                </tr> -->\n                 <!--   \n                 <tr>\n                    <td>Laza</td>\n                    <td>Lazic</td>\n                    <td>Lazina</td>\n                    <td>laza.lazic@gmail.com</td>\n                    <td>567</td>\n                    <td><button class=\"btn btn-danger btn-xs\" ><span class=\"glyphicon glyphicon-trash\"></span></button></td>\n                    </tr>\n                -->\n                    </tbody>\n                        \n                </table>\n                <button class=\"btn login_btn\" style=\"width: 200px;\" id=\"selectAllButton\" (click)=\"selectApproveAll($event)\" type=\"button\" >Selektuj sve </button>\n                </div>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    \n    <div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <div class=\"row\" id=\"main\" >\n                <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                  \n                        <div class=\"col-md-12\">\n                        <h4>Odobri automatski popust ovim proizvodima</h4>\n                        <div  id=\"spisakRadnika\" class=\"table-responsive text-center\">\n                \n                                \n                              <table id=\"mytable\" class=\"table table-bordred table-striped\">\n                                   \n                                   <thead>\n                                   \n                                    <th class=\"text-left\">ID Proizvoda</th>\n                                    \n                                    <th class=\"text-right\">Naziv proizvoda</th>\n                                    <th class=\"text-right\"><button (click)=\"recoverFromList()\" id=\"recoverFromListButton\"  class=\"btn btn-danger btn-xs selectButton\"><span id=\"recoverFromListButton\"  class=\"glyphicon glyphicon-trash\"></span></button></th>\n                                    \n                                   </thead>\n                    <tbody>\n                    \n                    <tr *ngFor=\"let approveProduct of approveList, let i = index\">\n                    \n                    <td class=\"text-left\">{{approveProduct.id}}</td>\n                    \n                    <td class=\"text-right\">{{approveProduct.selectedProductName}}</td>\n                    \n                     \n                    \n                </tr>\n                <!-- <tr>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td class=\"text-center\"><button id=\"omoguciButton\" (click)=\"approveSelectedOrAll()\"> Omogući popust</button></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                </tr> -->\n                 <!--   \n                 <tr>\n                    <td>Laza</td>\n                    <td>Lazic</td>\n                    <td>Lazina</td>\n                    <td>laza.lazic@gmail.com</td>\n                    <td>567</td>\n                    <td><button class=\"btn btn-danger btn-xs\" ><span class=\"glyphicon glyphicon-trash\"></span></button></td>\n                    </tr>\n                -->\n                    </tbody>\n                        \n                </table>\n                <button class=\"btn login_btn\" style=\"width: 200px;\"  id=\"omoguciButton\" (click)=\"approveSelectedOrAll()\"> Omogući popust</button>\n                </div>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div  id=\"adding\" class=\"modal justify-content-center\" >\n        <form [formGroup]=\"uploadForm\"  (submit)='addProduct($event)' class=\"modal-content animate justify-content-center\" >\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('adding').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Dodavanje proizvoda</h1>\n            </div>   \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"producer\" placeholder='Proizvodjac' >\n                                <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                              </select>                    </div>\n            </div>    \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"productType\" placeholder='Vrsta proizvoda'>\n                                <option   *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                              \n                              </select>                    </div>\n            </div>        \n        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"quantity\" type=\"text\" class=\"form-control\" placeholder=\"Kolicina\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"productURL\" type=\"text\" class=\"form-control\" placeholder=\"Website\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"warranty\" type=\"text\" class=\"form-control\" placeholder=\"Garancija\" required>\n                    </div>\n        </div>                \n        <div class=\"card\" style=\"text-align:center;\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n            <input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Naziv prozivoda...\" required>\n                </div>\n        </div>\n        <div class=\"card\" style=\"align-content:center;\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n            <textarea id=\"properties\" rows=\"4\" cols=\"50\" class=\"form-control\" name=\"description\" placeholder=\"Uneti opis proizvoda...\" required></textarea>                   \n         </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-images\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"image\" type=\"file\" class=\"form-control\" >\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-dollar-sign\" style=\"color:white; margin-right: 5%;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"price\" type=\"number\" class=\"form-control\" placeholder=\"Cena proizvoda\" required>\n                    </div>\n        </div>\n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <button type=\"submit\" value=\"Dodaj\" class=\"btn float-right login_btn\"  >Dodaj</button>\n          </div>\n                            \n          </form>\n</div>\n\n<div id=\"registering\" class=\"modal1\">\n        <form (submit)='registerUser($event)' class=\"modal-content animate\">\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('registering').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Registracija radnika</h1>\n            </div>   \n                        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Korisnicko ime...\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Ime\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>         \n                               </div>\n                <div class=\"inputs\">\n                        <input id=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Prezime\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-key\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Sifra...\" required>\n\n                    </div>\n        </div>\n\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">email</i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\" required>\n\n                    </div>\n        </div>\n\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                    <select id=\"role\" placeholder='Pozicija'>\n                            <option value=\"2\">ADMIN</option>\n                            <option value=\"0\">WORKER</option>\n                            <option value=\"1\">MANAGER</option>\n                            <option value=\"3\">OWNER</option>\n                          </select>                    </div>\n        </div>\n\n       \n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <button id=\"registerButton\" type=\"submit\" value=\"Registracija\" class=\"btn float-right login_btn\">Registracija</button>\n          </div>\n                            \n          </form>\n</div>\n\n\n\n<div id=\"discount\" class=\"modal2\">\n    <form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('discount').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n          <h1 style=\"text-align:center;color:white\">Odredjivanje popusta</h1>\n        </div>   \n                    \n    <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n            <div class=\"text-icons\">         \n        <i class=\"fas fa-industry\" style=\"color:white;\"></i>\n            </div>\n            <div class=\"inputs\">\n                <div class=\"inputs\">\n                    <select id=\"producerDiscount\" placeholder='Proizvodjac' >\n                            <option disabled selected value> -- select an option -- </option>\n                            <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                          </select> \n                </div>                    \n            </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n            <div class=\"text-icons\">         \n                            <i class=\"fas fa-keyboard\" style=\"color:white\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <select id=\"productTypeDiscount\" placeholder='Vrsta proizvoda'>\n                            <option disabled selected value> -- select an option -- </option>\n                            <option *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                          </select>\n            </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:2%;margin-left:28.5%;\">     \n            <div class=\"text-icons\">         \n                    <i class=\"fas fa-percent\" style=\"color:white\"></i>\n                    \n            </div>\n            <div class=\"inputs\">\n                    <input id=\"procenat\" type=\"number\" class=\"form-control\" style=\"text-align: center; width: 150px\" placeholder=\"Iznos procenta\" required min=\"0\" max=\"100\" oninvalid=\"this.setCustomValidity('Vrednost manje ili jednaka 100')\" oninput=\"this.setCustomValidity('')\"> \n            </div>\n    </div>\n    <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%;\">\n            <button type=\"submit\" style=\"text-align:center;\" value=\"Izvrsi\" class=\"btn login_btn justify-content-center\">Izvrsi</button>\n            \n      </div>\n      <div style=\"margin-top:2%;margin-left:24;\">\n            <p style=\"text-align:center; color: white\">Status: </p> \n            <p style=\"text-align:center; color: lime\">{{ this.response }}</p>\n      </div>\n                        \n      </form>\n</div>\n\n<div id=\"exchange\" class=\"modal2\">\n        <form (submit)='exchangeProduct($event)' class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('exchange').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Zameni proizvod</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%;\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <a>Sifra racuna proizvoda od kupca    </a>\n                            <select id=\"givingID\" class=\"text-center\" style=\"margin-bottom:10%; margin-left: 5%; width: 30%;\">\n                                    <option  class=\"text-center\" *ngFor=\"let bill of billsService.bills\" value=\"{{ bill.id }}\">{{ bill.id }}</option>\n                            </select> <br>\n                            <div class=\"inputs\">\n                                <input id=\"givinProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra proizvoda koji se menja\" required>\n                            </div><br><br>\n                            <div class=\"inputs\">\n                                <input id=\"takingProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra zeljenog proizvoda\" required>\n                            </div>\n                        </div>\n\n                                  </div>\n            </div>\n           \n            <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%; \">\n                    <input type=\"submit\"  value=\"Zameni\" class=\"btn float-right login_btn\" style=\"width:40%;\">\n              </div>\n                           \n              </form>\n    </div>\n\n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                        <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                        <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                                \n                <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                        <div class=\"inputs\" style=\"width: 40%;\" >\n                        <div class=\"client\">\n                                <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi koji su trenutno dostupni u prodavnici. Moguće je promeniti bilo koji atribut postojaćeg proizvoda, moguće je ukloniti proizvod, a takođe i izvršiti popust unošenjem odgovarajućeg iznosa procenta. Na crvenu strelicu se proizvod ubacuje u korpu. \n\n\nSpisak radnika\n\n* Omogućen je uvid u spisak svih radnika koji rade u magacinu Techtradea kao i njihove informacije. Moguće je ukloniti korisnika.\n\n\nNaručivanje proizvoda\n\n* Na početku su izlistani svi proizvodi svih dobavljača. Prilikom narudžbenice, moguće je u korpu dodati proizvode pritiskom na crvenu strelicu. U korpi željeni kvantitet unosi sam korisnik. Moguće je obrisati sadržaj iz korpe. Pritiskom na dugme za kupovinu potvrđuje se porudzbina. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nZameni proizvod\n\n* Izvršiti odabir šifre računa;\n* Izvršiti odabir šifre proizvoda na računu;\n* Uneti šifru željenog proizvoda za zamenu;\n* Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka.\n\n\nRegistracija radnika\n\n* Omogućava unošenje novih autorizovanih korisnika. Unošenjem svih potrebnih podataka, kao i podatka koji autorizovani korisnik je u pitanju, biće izbačena odgovarajuća poruka.\n\n\nDodavanje proizvoda\n\n* Moguće je dodati nov proizvod. U slučaju da proizvod već postoji, biće izbačena odgovarajuća poruka.\n\n\nOdredi popust\n\n* Odabrati proizvođača;\n* Odabrati željeni proizvod;\n* Uneti iznos procenta;\n* Pritiskom na dugme 'Izvrši', biće izbačena odgovarajuća poruka.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\nPrikaz računa\n\n* Omogućen je uvid u tabelu sa računima;\n* Moguće je izvesti račun koji je generisan u PDF formi.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n                                </pre>\n                                </div>\n                        </div>\n                </div>\n                                \n                </form>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/automatski-popust/automatski-popust.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/automatski-popust/automatski-popust.component.ts ***!
  \******************************************************************/
/*! exports provided: AutomatskiPopustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomatskiPopustComponent", function() { return AutomatskiPopustComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_bills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bills.service */ "./src/app/services/bills.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_producers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/producers.service */ "./src/app/services/producers.service.ts");
/* harmony import */ var _services_product_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/product-type.service */ "./src/app/services/product-type.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_delete_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/delete.service */ "./src/app/services/delete.service.ts");
/* harmony import */ var _services_single_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/single-service.service */ "./src/app/services/single-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/exchange-product.service */ "./src/app/services/exchange-product.service.ts");















var AutomatskiPopustComponent = /** @class */ (function () {
    function AutomatskiPopustComponent(billsService, userService, registerService, productService, producersService, productTypeService, searchService, http, formBuilder, deleteService, single, router, exchangeProductService) {
        this.billsService = billsService;
        this.userService = userService;
        this.registerService = registerService;
        this.productService = productService;
        this.producersService = producersService;
        this.productTypeService = productTypeService;
        this.searchService = searchService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.deleteService = deleteService;
        this.single = single;
        this.router = router;
        this.exchangeProductService = exchangeProductService;
        this.pozicija = localStorage.getItem('username');
        this.endpointURL = 'http://78.46.117.245:9000/products/discount/';
        this.endpointURL3 = 'http://78.46.117.245:9000/logout';
        this.endpointURL_approve = 'http://78.46.117.245:9000/products/discount/approve';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.automaticProducts = [];
        this.selectedProducts = [];
        this.selectVariable = false;
        this.recoverList = [];
        this.fleg = false;
        this.approveList = [];
        this.userFile = File;
        this.uploadForm = _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"];
    }
    AutomatskiPopustComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.producersService.getAllProducers();
        this.productTypeService.getAllProductTypes();
        this.billsService.getAllBills();
        this.uploadForm = this.formBuilder.group({
            image: [''],
            name: [''],
            price: [''],
            producer: [''],
            productType: [''],
            productURL: [''],
            properties: [''],
            quantity: [''],
            warranty: [''],
            vendorPrice: ['']
        });
        this.getAutomaticProducts().subscribe(function (response) {
            _this.automaticProducts = response;
        });
        /* var that = this;
        setTimeout(function(){if(that.automaticProducts.length <= 0){
          document.getElementById("allButtonTD").innerHTML = "";
        }}, 130) */
        /* if(this.automaticProducts.length <= 0){
          document.getElementById("allButtonTD").innerHTML = "";
        } */
        /* if(this.automaticProducts.length <= 0){
          document.getElementById("omoguciButton").setAttribute("disabled", "true")
        } */
        var that = this;
        setTimeout(function () {
            if (that.automaticProducts.length <= 0) {
                document.getElementById("omoguciButton").setAttribute("disabled", "true");
                document.getElementById("selectAllButton").disabled = true;
            }
        }, 1000);
    };
    AutomatskiPopustComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL3, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    AutomatskiPopustComponent.prototype.selectApproveAll = function (event) {
        if (this.selectVariable) {
            this.selectVariable = false;
        }
        else {
            this.selectVariable = true;
            document.getElementById("selectAllButton").disabled = true;
        }
        for (var i = 0; i < this.automaticProducts.length; i++) {
            this.selectedProducts.push(this.automaticProducts[i].id);
            this.recoverList.push(this.automaticProducts[i]);
            var allCurrent = {
                "id": this.automaticProducts[i].id,
                "selectedProductName": this.automaticProducts[i].name
            };
            this.approveList.push(allCurrent);
        }
        document.getElementById("selectAllButton").disabled = true;
        //document.getElementById("allButtonTD").innerHTML = "";
        this.automaticProducts = [];
        /* if(this.selectVariable){
            for(let i=0; i<this.automaticProducts.length; i++){
              document.getElementsByClassName("selectButton")[i].setAttribute("disabled","true")
            }
        }
        else{
          for(let i=0; i<this.automaticProducts.length; i++){
            document.getElementsByClassName("selectButton")[i].removeAttribute("disabled");
          }
        } */
    };
    AutomatskiPopustComponent.prototype.recoverFromList = function () {
        for (var i = 0; i < this.recoverList.length; i++) {
            this.automaticProducts.push(this.recoverList[i]);
        }
        this.approveList = [];
        this.fleg = true;
        document.getElementById("selectAllButton").disabled = false;
        this.selectVariable = false;
        if (this.fleg) {
            this.recoverList = [];
            this.fleg = false;
        }
    };
    AutomatskiPopustComponent.prototype.approveSelectedOrAll = function () {
        var _this = this;
        this.http.post(this.endpointURL_approve, { "products": this.selectedProducts,
            "all": this.selectVariable
        }, { headers: this.headers }).subscribe(function (response) {
            window.alert("Automatski popust je omogućen!");
            _this.approveList = [];
        }, function (err) { _this.handleError(err); });
        if (this.automaticProducts.length <= 0) {
            document.getElementById("omoguciButton").setAttribute("disabled", "true");
        }
    };
    AutomatskiPopustComponent.prototype.addToApprove = function (event, productName, index) {
        event.preventDefault();
        var id = event.srcElement.id;
        var selectedProductName = productName;
        var productIndex = index;
        this.recoverList.push(this.automaticProducts[productIndex]);
        this.automaticProducts.splice(productIndex, 1);
        if (this.automaticProducts.length <= 0) {
            this.selectVariable = false;
            document.getElementById("selectAllButton").disabled = true;
        }
        this.selectedProducts.push(id.toString());
        var current = {
            "id": id,
            "selectedProductName": selectedProductName
        };
        this.approveList.push(current);
        /* console.log("ID selektovanog proizvoda je: ", id,
                    "Ime proizvoda je: " + selectedProductName,
                    "Lista selektovanih proizvoda je: ", this.selectedProducts,
                    "Index selektovanog proizvoda je: ", productIndex,
                    "Lista approve proizvoda je: ", this.approveList) */
    };
    AutomatskiPopustComponent.prototype.getAutomaticProducts = function () {
        return this.http.get(this.endpointURL, { headers: this.headers });
    };
    AutomatskiPopustComponent.prototype.onSelectFile = function (event) {
        var selectFile = event.target.files[0];
        this.userFile = selectFile;
    };
    AutomatskiPopustComponent.prototype.addProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var image = target.querySelector('#image');
        /* if(image.files.length > 0){
          const file = image.files[0];
          this.uploadForm.get('file').setValue(file);
          this.slika = this.uploadForm.get('file').value;
        }  */
        // var formData = new FormData();
        //formData.append('image', image);
        var name = target.querySelector('#name').value;
        this.uploadForm.get('name').setValue(name);
        var price = target.querySelector('#price').value;
        this.uploadForm.get('price').setValue(price);
        var producer = target.querySelector('#producer').value;
        this.uploadForm.get('producer').setValue(producer);
        var productType = target.querySelector('#productType').value;
        this.uploadForm.get('productType').setValue(productType);
        var productURL = target.querySelector('#productURL').value;
        this.uploadForm.get('productURL').setValue(productURL);
        var properties = target.querySelector('#properties').value;
        this.uploadForm.get('properties').setValue(properties);
        var quantity = target.querySelector('#quantity').value;
        this.uploadForm.get('quantity').setValue(quantity);
        var warranty = target.querySelector('#warranty').value;
        this.uploadForm.get('warranty').setValue(warranty);
        var vendorPrice = target.querySelector('#vendorPrice').value;
        this.uploadForm.get('vendorPrice').setValue(vendorPrice);
        var data = JSON.stringify(this.uploadForm.value);
        var formData = new FormData();
        //formData.append("productData", data);
        formData.append("image", this.userFile);
        // formData.append("image", this.uploadForm.get('file').value);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("producer", producer);
        formData.append("productType", productType);
        formData.append("productURL", productURL);
        formData.append("properties", properties);
        formData.append("quantity", quantity);
        formData.append("warranty", warranty);
        formData.append("vendorPrice", vendorPrice);
        /*console.log( formData  image, name, price, producer, productType, productURL, properties, quantity, warranty );*/
        /*this.registerService.sendProductDetails(image, name, price, producer, productType, productURL, properties, quantity, warranty ).subscribe();*/
        this.registerService.sendProductDetails(formData).subscribe(function (response) {
            window.alert("Proizvod je uspešno dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 200);
    };
    AutomatskiPopustComponent.prototype.registerUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        var firstName = target.querySelector('#firstName').value;
        var lastName = target.querySelector('#lastName').value;
        var email = target.querySelector('#email').value;
        var role = target.querySelector('#role').value;
        this.registerService.sendUserDetails(firstName, lastName, username, email, password, role).subscribe(function (response) { window.alert("Uspešna registracija korisnika!"); }, function (err) { _this.handleError(err); });
        //)
        /*
        console.log(username,password)
        console.log(error);
        console.log(localStorage.getItem("token"));
        */
    };
    AutomatskiPopustComponent.prototype.addDiscount = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var producer = target.querySelector('#producerDiscount').value;
        var productType = target.querySelector('#productTypeDiscount').value;
        var discountCoefficient = target.querySelector("#procenat").value;
        this.productService.discountProduct(producer, productType, discountCoefficient).subscribe(function (response) {
            window.alert("Popust je dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 150);
        //zbog unosa u bazu i responsa stavljamo timeout da bi ucitao nove cene a ne stare
    };
    AutomatskiPopustComponent.prototype.exchangeProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var billID = target.querySelector('#givingID').value;
        var givinProductID = target.querySelector('#givinProductID').value;
        var takingProductID = target.querySelector('#takingProductID').value;
        this.exchangeProductService.returnProduct(billID, givinProductID, takingProductID).subscribe(function (data) {
            window.alert("Novac koji se vraca je: " + data.moneyToReturn + " RSD");
        }, function (err) { _this.handleError(err); /*console.log(err.error.message);console.log(err.status);*/ });
    };
    AutomatskiPopustComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    AutomatskiPopustComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-automatski-popust',
            template: __webpack_require__(/*! ./automatski-popust.component.html */ "./src/app/automatski-popust/automatski-popust.component.html"),
            styles: [__webpack_require__(/*! ./automatski-popust.component.css */ "./src/app/automatski-popust/automatski-popust.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bills_service__WEBPACK_IMPORTED_MODULE_3__["BillsService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"],
            _services_producers_service__WEBPACK_IMPORTED_MODULE_7__["ProducersService"],
            _services_product_type_service__WEBPACK_IMPORTED_MODULE_8__["ProductTypeService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            _services_delete_service__WEBPACK_IMPORTED_MODULE_11__["DeleteService"],
            _services_single_service_service__WEBPACK_IMPORTED_MODULE_12__["SingleServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
            _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__["ExchangeProductService"]])
    ], AutomatskiPopustComponent);
    return AutomatskiPopustComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.bodyy{\r\nbackground-image: url('pozadina.jpg');\r\nbackground-size: cover;\r\nbackground-repeat: no-repeat;\r\nbackground-position: center;\r\nheight: 100vh;\r\nposition:relative;\r\n}\r\n\r\n.container{\r\nheight: 100%;\r\nalign-content: center;\r\n}\r\n\r\n.card{\r\nheight: 480px;\r\nmargin-top: 10vh;\r\nmargin-bottom: 10vh;\r\nwidth: 400px;\r\nbackground-color: rgba(0,0,0,0.65) !important;\r\n}\r\n\r\n.da{\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  margin-top: 50px;\r\n}\r\n\r\n.da2{\r\n  color:#FFC312;\r\n  position: absolute;\r\n  bottom: 0;\r\n margin-left: 38%;\r\n  margin-bottom:10vh;\r\n\r\n}\r\n\r\na{\r\n  color:#FFC312;\r\n  \r\n}\r\n\r\na:hover{\r\n  color: white;\r\n}\r\n\r\n.card-header h3{\r\ncolor: white;\r\nalign-content: center;\r\n}\r\n\r\n.input-group-prepend span{\r\nwidth: 50px;\r\nbackground-color:#05a081;\r\ncolor: black;\r\nborder:0 !important;\r\n}\r\n\r\ninput:focus{\r\noutline: 0 0 0 0  !important;\r\nbox-shadow: 0 0 0 0 !important;\r\n\r\n}\r\n\r\n.remember input\r\n{\r\nwidth: 20px;\r\nheight: 20px;\r\nmargin-left: 15px;\r\nmargin-right: 5px;\r\n}\r\n\r\n.login_btn{\r\ncolor: black;\r\nbackground-color: #05a081;\r\nwidth: 100px;\r\n}\r\n\r\n.login_btn:hover{\r\ncolor: black;\r\nbackground-color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7QUFDQSxxQ0FBcUM7QUFDckMsc0JBQXNCO0FBQ3RCLDRCQUE0QjtBQUM1QiwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLFlBQVk7QUFDWixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxhQUFhO0FBQ2IsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixZQUFZO0FBQ1osNkNBQTZDO0FBQzdDOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFNBQVM7Q0FDVixnQkFBZ0I7RUFDZixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsYUFBYTs7QUFFZjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtBQUNBLFlBQVk7QUFDWixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxXQUFXO0FBQ1gsd0JBQXdCO0FBQ3hCLFlBQVk7QUFDWixtQkFBbUI7QUFDbkI7O0FBSUE7QUFDQSw0QkFBNEI7QUFDNUIsOEJBQThCOztBQUU5Qjs7QUFFQTs7QUFFQSxXQUFXO0FBQ1gsWUFBWTtBQUNaLGlCQUFpQjtBQUNqQixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQSxZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCLFlBQVk7QUFDWjs7QUFFQTtBQUNBLFlBQVk7QUFDWix1QkFBdUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5ib2R5eXtcclxuYmFja2dyb3VuZC1pbWFnZTogdXJsKCdwb3phZGluYS5qcGcnKTtcclxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5oZWlnaHQ6IDEwMHZoO1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuLmNvbnRhaW5lcntcclxuaGVpZ2h0OiAxMDAlO1xyXG5hbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJke1xyXG5oZWlnaHQ6IDQ4MHB4O1xyXG5tYXJnaW4tdG9wOiAxMHZoO1xyXG5tYXJnaW4tYm90dG9tOiAxMHZoO1xyXG53aWR0aDogNDAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42NSkgIWltcG9ydGFudDtcclxufVxyXG4uZGF7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuLmRhMntcclxuICBjb2xvcjojRkZDMzEyO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiBtYXJnaW4tbGVmdDogMzglO1xyXG4gIG1hcmdpbi1ib3R0b206MTB2aDtcclxuXHJcbn1cclxuXHJcbmF7XHJcbiAgY29sb3I6I0ZGQzMxMjtcclxuICBcclxufVxyXG5hOmhvdmVye1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtaGVhZGVyIGgze1xyXG5jb2xvcjogd2hpdGU7XHJcbmFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLXByZXBlbmQgc3Bhbntcclxud2lkdGg6IDUwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6IzA1YTA4MTtcclxuY29sb3I6IGJsYWNrO1xyXG5ib3JkZXI6MCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbmlucHV0OmZvY3Vze1xyXG5vdXRsaW5lOiAwIDAgMCAwICAhaW1wb3J0YW50O1xyXG5ib3gtc2hhZG93OiAwIDAgMCAwICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ucmVtZW1iZXIgaW5wdXRcclxue1xyXG53aWR0aDogMjBweDtcclxuaGVpZ2h0OiAyMHB4O1xyXG5tYXJnaW4tbGVmdDogMTVweDtcclxubWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuXHJcbi5sb2dpbl9idG57XHJcbmNvbG9yOiBibGFjaztcclxuYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxud2lkdGg6IDEwMHB4O1xyXG59XHJcblxyXG4ubG9naW5fYnRuOmhvdmVye1xyXG5jb2xvcjogYmxhY2s7XHJcbmJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n\n<div class=\"head\">\n\t<title>Login Page</title>\n\n\t<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n\n</div>\n<div class=\"bodyy\">\n\t<div class=\"d-flex justify-content-center h-100\">\n\t\t<div class=\"card\">\n\t\t\t<div class=\"card-header\">\n\t\t\t\t<h3 class=\"d-flex justify-content-center\">Prijava</h3>\n\t\t\t\t   \n\n\t\t\t\t\n\t\t\t</div>\n\t\t\t<div class=\"da\">\n\t\t\t\t<form (submit)=\"loginUser($event)\">\n                    \n\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text justify-content-center\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Korisničko ime...\" id=\"username\">\n\t\t\t\t\t\t\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"input-group form-group\">\n\t\t\t\t\t\t<div class=\"input-group-prepend\">\n\t\t\t\t\t\t\t<span class=\"input-group-text justify-content-center\"><i class=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Lozinka...\" id=\"password\">\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<input type=\"submit\" value=\"Prijavi me\" class=\"btn float-right login_btn\"  >\n                    </div>\n               \n\t\t\t\t</form>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(Login, router) {
        this.Login = Login;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.loginUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        this.Login.getUserDetails(username, password).subscribe(function (data) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);
            localStorage.setItem("username", data.username);
            if (data.role == "ADMIN" || data.role == "OWNER") {
                _this.router.navigate(['admin']);
            }
            else if (data.role == "WORKER") {
                _this.router.navigate(['radnik']);
            }
            else if (data.role == "MANAGER") {
                _this.router.navigate(['komercijalista']);
            }
            else {
                alert(data.message);
            }
        }, function (err) { _this.handleError(err); });
        //)
        /*
        console.log(username,password)
        console.log(error);
        console.log(localStorage.getItem("token"));
        */
    };
    HomeComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/komercijalista-guard.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/komercijalista-guard.guard.ts ***!
  \***********************************************/
/*! exports provided: KomercijalistaGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomercijalistaGuardGuard", function() { return KomercijalistaGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");




var KomercijalistaGuardGuard = /** @class */ (function () {
    function KomercijalistaGuardGuard(router, login) {
        this.router = router;
        this.login = login;
    }
    KomercijalistaGuardGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("role") == "MANAGER") {
            return true;
        }
        if (this.login.isAuthenticated()) {
            localStorage.removeItem("token");
            if (this.login.isHavingRole()) {
                localStorage.removeItem("role");
            }
            if (this.login.isHavingUsername()) {
                localStorage.removeItem("username");
            }
            this.router.navigate(['/']);
            return false;
        }
        this.router.navigate(['/']);
        return false;
    };
    KomercijalistaGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], KomercijalistaGuardGuard);
    return KomercijalistaGuardGuard;
}());



/***/ }),

/***/ "./src/app/komercijalista/automatski-popust-komercijalista/automatski-popust-komercijalista.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/komercijalista/automatski-popust-komercijalista/automatski-popust-komercijalista.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n        margin-top:8vh;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    ul li:hover ul li{\r\n    display:block;\r\n}\r\n\r\n    ul li ul li a:hover{\r\n    color:black;\r\n}\r\n\r\n    .modal-content {\r\n    background-color: rgba(0,0,0,.8);\r\n    margin: 4% auto 15% auto;\r\n    border: 1px solid #888;\r\n    width: 40%; \r\n    padding-bottom: 30px;\r\n    align-content: center;\r\n}\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n    position: absolute;\r\n    right: 25px;\r\n    top: 0;\r\n    color: white;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n}\r\n\r\n    .close:hover,.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n    -webkit-animation: zoom 0.6s;\r\n            animation: zoom 0.6s\r\n}\r\n\r\n    @-webkit-keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    @keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    .card{\r\n    display:flex;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    margin-left:35%;\r\n}\r\n\r\n    .text-icons{\r\n    margin-left:3%;\r\n    margin-top:1%;\r\n}\r\n\r\n    .inputs{\r\n    margin-left:1%\r\n}\r\n\r\n    .modal {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n    .modal1 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .modal2 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .top-nav{\r\npadding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n    float: left;\r\n    position: fixed;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n    \r\n}\r\n\r\n    .dropdown ul li ul li{\r\ndisplay:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\ncursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\ndisplay:inline-block;\r\n\r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\nwhite-space: normal;\r\ntext-decoration: none;\r\n\r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\ncolor:#05a081;\r\n\r\n\r\n}\r\n\r\n    .inputs select{\r\nposition: relative;\r\nbackground-color:black;\r\ncolor:white;\r\nborder-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\nbackground-color: #05a081;\r\ncolor:black;\r\n}\r\n\r\n    .login_btn{\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 100px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    .search-box{\r\n        left: 20%;\r\n        position: absolute;\r\n        border-radius: 40%;\r\n        padding: 10px;\r\n        height: 40px;\r\n    }\r\n\r\n    .search-btn{\r\n        color:#05a081;\r\n        float: right;\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 50%;\r\n        background: #222;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: 0.4s;\r\n    }\r\n\r\n    .search-text {\r\n        font-size: 17px;\r\n        border: none;\r\n        background: none;\r\n        float: left;\r\n        padding: 0;\r\n        color: white;\r\n        transition: 0.4s;\r\n        line-height: 40px;\r\n        width: 0px;\r\n        \r\n      }\r\n\r\n    input[type=\"text\"]{\r\n        border-color: none;\r\n        box-shadow: none;\r\n        outline: 0 none;\r\n      }\r\n\r\n    .search-box:hover > .search-text{\r\n          width: 240px;\r\n          padding: 0 6px;\r\n      }\r\n\r\n    .search-box:hover > .search-btn{\r\n        background: white;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29tZXJjaWphbGlzdGEvYXV0b21hdHNraS1wb3B1c3Qta29tZXJjaWphbGlzdGEvYXV0b21hdHNraS1wb3B1c3Qta29tZXJjaWphbGlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjs7SUFHSixtQkFBbUI7O0lBRW5CO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0lBRUE7Ozs7O0lBS0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7SUFHQSxvQkFBb0I7O0lBRWhCO1FBQ0ksZUFBZTtRQUNmLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1DQUFtQztRQUNuQyxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWix1Q0FBdUM7SUFDM0M7O0lBRUE7O1FBRUksYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHVDQUF1QztJQUMzQzs7SUFFQTtRQUNJLGNBQWM7UUFDZCw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLFdBQVc7O0lBRWY7O0lBQ0o7RUFDRSxTQUFTO0FBQ1g7O0lBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0lBQ0E7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7SUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7RUFD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Q2pCOztJQUdBO1VBQ0ksWUFBWTtVQUNaLGNBQWM7TUFDbEI7O0lBRUE7UUFDRSxpQkFBaUI7SUFDckIiLCJmaWxlIjoic3JjL2FwcC9rb21lcmNpamFsaXN0YS9hdXRvbWF0c2tpLXBvcHVzdC1rb21lcmNpamFsaXN0YS9hdXRvbWF0c2tpLXBvcHVzdC1rb21lcmNpamFsaXN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAvKmh0bWwsIGJvZHksICN3cmFwcGVyLCAjcGFnZS13cmFwcGVyIHtoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47fSovXHJcblxyXG5cclxuXHJcblxyXG4gICAgI3dyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3BhZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogMjJweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6OHZoO1xyXG4gICAgfVxyXG5cclxuXHJcbi8qIFRvcCBOYXZpZ2F0aW9uICovXHJcblxyXG4udG9wLW5hdj5saT5hIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG59XHJcblxyXG4udG9wLW5hdj5saT5hOmhvdmVyLFxyXG4udG9wLW5hdj5saT5hOmZvY3VzLFxyXG4udG9wLW5hdj4ub3Blbj5hLFxyXG4udG9wLW5hdj4ub3Blbj5hOmhvdmVyLFxyXG4udG9wLW5hdj4ub3Blbj5hOmZvY3VzIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxufVxyXG5cclxuXHJcbi8qIFNpZGUgTmF2aWdhdGlvbiAqL1xyXG5cclxuICAgIC5zaWRlLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICBsZWZ0OiAyMjVweDtcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMjVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggcmdiYSgwLDAsMCwxKSBzb2xpZDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2QjdEOyovXHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXY+bGk+YSB7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpob3ZlcixcclxuICAgIC5zaWRlLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPnVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNpZGUtbmF2PmxpPnVsPmxpPmEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDM4cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4ubmF2YmFyIC5uYXYgPiBsaSA+IGE6aG92ZXIgPiAubGFiZWwge1xyXG4gIHRvcDogMTBweDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG4uU2VhcmNoe1xyXG5cclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcblxyXG4uU2VhcmNoIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5TZWFyY2ggYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA1YTA4MTtcclxuICB9XHJcblxyXG51bCBsaSB1bCBsaXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG51bCBsaTpob3ZlciB1bCBsaXtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxudWwgbGkgdWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxuICAgIG1hcmdpbjogNCUgYXV0byAxNSUgYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogNDAlOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2xvc2U6aG92ZXIsLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xyXG4uYW5pbWF0ZSB7XHJcbiAgICBhbmltYXRpb246IHpvb20gMC42c1xyXG59XHJcbkBrZXlmcmFtZXMgem9vbSB7XHJcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHNjYWxlKDApfSBcclxuICAgIHRvIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxyXG59XHJcbi5jYXJke1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDoyJTtcclxuICAgIG1hcmdpbi1ib3R0b206MiU7XHJcbiAgICBtYXJnaW4tbGVmdDozNSU7XHJcbn1cclxuLnRleHQtaWNvbnN7XHJcbiAgICBtYXJnaW4tbGVmdDozJTtcclxuICAgIG1hcmdpbi10b3A6MSU7XHJcbn1cclxuXHJcbi5pbnB1dHN7XHJcbiAgICBtYXJnaW4tbGVmdDoxJVxyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG59XHJcbi5tb2RhbDEge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgXHJcbn1cclxuLm1vZGFsMiB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi50b3AtbmF2e1xyXG5wYWRkaW5nOiAwIDE1cHg7XHJcblxyXG59XHJcblxyXG4udG9wLW5hdjJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTsqL1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgXHJcbn1cclxuLmRyb3Bkb3duIHVsIGxpIHVsIGxpe1xyXG5kaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24gYTpob3ZlcntcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93biBhOmhvdmVyIHVsIGxpe1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHJcblxyXG59XHJcblxyXG5cclxuLnRvcC1uYXYyIGxpIGF7XHJcbndoaXRlLXNwYWNlOiBub3JtYWw7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5kcm9wZG93biBhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5jb2xvcjojMDVhMDgxO1xyXG5cclxuXHJcbn1cclxuXHJcbi5pbnB1dHMgc2VsZWN0e1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbmNvbG9yOndoaXRlO1xyXG4tbW96LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbmJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxufVxyXG4uaW5wdXRzIHNlbGVjdDpob3ZlcntcclxuYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxuY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5sb2dpbl9idG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44NSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9idG46aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYm94e1xyXG4gICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLWJ0bntcclxuICAgICAgICBjb2xvcjojMDVhMDgxO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IDAgbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC5zZWFyY2gtYm94OmhvdmVyID4gLnNlYXJjaC10ZXh0e1xyXG4gICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLWJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/komercijalista/automatski-popust-komercijalista/automatski-popust-komercijalista.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/komercijalista/automatski-popust-komercijalista/automatski-popust-komercijalista.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/komercijalista\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n            <li class=\"dropdown\">\n                <a style=\"margin-left:0px;\">{{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                <ul class=\"top-nav2\">\n                    <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                    <li (click)=\"logout()\" style=\"margin-top:10%;\"><a style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li>\n                </ul>\n            </li>\n        </ul>\n        <!-- Meni sa leve strane -->\n        <ul class=\"nav navbar-nav side-nav\">\n                <li>\n                    <a routerLink=\"/komercijalista\"> POCETNA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/komercijalista/narucivanje-komercijalista\" >NARUCIVANJE PROIZVODA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/komercijalista/naruceno-komercijalista\">NARUCENI PROIZVODI</a>           \n                         </li>\n                \n                <li>\n                        <a routerLink=\"/komercijalista/prikaz-komercijalista\">PRIKAZ FAKTURE</a>\n                    </li>\n                    <li>\n                            <a routerLink=\"/komercijalista/automatski-popust-komercijalista\">AUTOMATSKI POPUST</a>\n                    </li>\n               \n            </ul>\n    </nav>\n\n    <div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <div class=\"row\" id=\"main\" >\n                <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                  \n                        <div class=\"col-md-12\">\n                        <h4>Spisak proizvoda kojima je omogućen automatski popust</h4>\n                        <div  id=\"spisakRadnika\" class=\"table-responsive text-center\">\n                \n                                \n                              <table id=\"mytable\" class=\"table table-bordred table-striped\">\n                                   \n                                   <thead>\n                                    <th class=\"text-center\">Naziv</th>\n                                    <th class=\"text-center\">Proizvodjač</th>\n                                     <th class=\"text-center\">Tip proizvoda</th>\n                                     <th class=\"text-center\">ID</th>\n                                     <th class=\"text-center\">Garancija</th>\n                                     <th class=\"text-center\">Cena</th>\n                                     <th class=\"text-center\">Datum poslednje aktivnosti</th>\n                                     <th class=\"text-center\">Popust</th>\n                                     <th class=\"text-center\">Omogući</th>\n                                   </thead>\n                    <tbody>\n                    \n                    <tr *ngFor=\"let product of automaticProducts, let i=index\">\n                    <td class=\"text-center\">{{product.name}}</td>\n                    <td class=\"text-center\">{{product.producer}}</td>\n                    <td class=\"text-center\">{{product.productType}}</td>\n                    <td class=\"text-center\">{{product.id}}</td>\n                    <td class=\"text-center\">{{ product.warranty }}</td>\n                    <td class=\"text-center\">{{ product.price }}</td>\n                    <td class=\"text-center\">{{ product.latestActivityDate }}</td>\n                    <td class=\"text-center\">{{ product.discount }}%</td>\n                    <td class=\"text-center\"><button #approveButton name=\"{{ product.name }}\"  (click)=\"addToApprove($event, approveButton.name, i)\" id=\"{{ product.id }}\"  class=\"btn btn-danger btn-xs selectButton\"><span id=\"{{ product.id }}\"  class=\"glyphicon glyphicon-ok\"></span></button></td>\n                     \n                    \n                </tr>\n                <!-- <tr>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td class=\"text-center\"><button id=\"selectAllButton\" (click)=\"selectApproveAll($event)\" type=\"button\" >Selektuj sve </button></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                </tr> -->\n                 <!--   \n                 <tr>\n                    <td>Laza</td>\n                    <td>Lazic</td>\n                    <td>Lazina</td>\n                    <td>laza.lazic@gmail.com</td>\n                    <td>567</td>\n                    <td><button class=\"btn btn-danger btn-xs\" ><span class=\"glyphicon glyphicon-trash\"></span></button></td>\n                    </tr>\n                -->\n                    </tbody>\n                        \n                </table>\n                <button class=\"btn login_btn\" style=\"width: 200px;\" id=\"selectAllButton\" (click)=\"selectApproveAll($event)\" type=\"button\" >Selektuj sve </button>\n                </div>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    \n    <div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <div class=\"row\" id=\"main\" >\n                <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                  \n                        <div class=\"col-md-12\">\n                        <h4>Odobri automatski popust ovim proizvodima</h4>\n                        <div  id=\"spisakRadnika\" class=\"table-responsive text-center\">\n                \n                                \n                              <table id=\"mytable\" class=\"table table-bordred table-striped\">\n                                   \n                                   <thead>\n                                   \n                                    <th class=\"text-left\">ID Proizvoda</th>\n                                    \n                                    <th class=\"text-right\">Naziv proizvoda</th>\n                                    <th class=\"text-right\"><button (click)=\"recoverFromList()\" id=\"recoverFromListButton\"  class=\"btn btn-danger btn-xs selectButton\"><span id=\"recoverFromListButton\"  class=\"glyphicon glyphicon-trash\"></span></button></th>\n                                    \n                                   </thead>\n                    <tbody>\n                    \n                    <tr *ngFor=\"let approveProduct of approveList, let i = index\">\n                    \n                    <td class=\"text-left\">{{approveProduct.id}}</td>\n                    \n                    <td class=\"text-right\">{{approveProduct.selectedProductName}}</td>\n                    \n                     \n                    \n                </tr>\n                <!-- <tr>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td class=\"text-center\"><button id=\"omoguciButton\" (click)=\"approveSelectedOrAll()\"> Omogući popust</button></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                        <td></td>\n                </tr> -->\n                 <!--   \n                 <tr>\n                    <td>Laza</td>\n                    <td>Lazic</td>\n                    <td>Lazina</td>\n                    <td>laza.lazic@gmail.com</td>\n                    <td>567</td>\n                    <td><button class=\"btn btn-danger btn-xs\" ><span class=\"glyphicon glyphicon-trash\"></span></button></td>\n                    </tr>\n                -->\n                    </tbody>\n                        \n                </table>\n                <button class=\"btn login_btn\" style=\"width: 200px;\"  id=\"omoguciButton\" (click)=\"approveSelectedOrAll()\"> Omogući popust</button>\n                </div>\n                </div>\n                </div>\n            </div>\n        </div>\n    \n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi svih dobavljača. Moguće je izvršiti izmenu cene željenog proizvoda.\n\n\nNaručivanje proizvoda\n\n* Kada radnik naruči proizvod, komercijalista će to videti i ti proizvodi će se pojaviti u tabeli. U narudzbenici svi proizvodi moraju biti od istog dobavljača. Komercijalista bira proizvode koje treba da naruči od dobavljača i njihov kvantitet. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/komercijalista/automatski-popust-komercijalista/automatski-popust-komercijalista.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/komercijalista/automatski-popust-komercijalista/automatski-popust-komercijalista.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: AutomatskiPopustKomercijalistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutomatskiPopustKomercijalistaComponent", function() { return AutomatskiPopustKomercijalistaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AutomatskiPopustKomercijalistaComponent = /** @class */ (function () {
    function AutomatskiPopustKomercijalistaComponent(http, router) {
        this.http = http;
        this.router = router;
        this.endpointURL_approve = 'http://78.46.117.245:9000/products/discount/approve';
        this.endpointURL = 'http://78.46.117.245:9000/products/discount/';
        this.endpointURL3 = 'http://78.46.117.245:9000/logout';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.automaticProducts = [];
        this.pozicija = localStorage.getItem('username');
        this.selectedProducts = [];
        this.selectVariable = false;
        this.recoverList = [];
        this.fleg = false;
        this.approveList = [];
    }
    AutomatskiPopustKomercijalistaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getAutomaticProducts().subscribe(function (response) {
            _this.automaticProducts = response;
        });
        var that = this;
        setTimeout(function () {
            if (that.automaticProducts.length <= 0) {
                document.getElementById("omoguciButton").setAttribute("disabled", "true");
                document.getElementById("selectAllButton").disabled = true;
            }
        }, 1000);
    };
    AutomatskiPopustKomercijalistaComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL3, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    AutomatskiPopustKomercijalistaComponent.prototype.selectApproveAll = function (event) {
        if (this.selectVariable) {
            this.selectVariable = false;
        }
        else {
            this.selectVariable = true;
            document.getElementById("selectAllButton").disabled = true;
        }
        for (var i = 0; i < this.automaticProducts.length; i++) {
            this.selectedProducts.push(this.automaticProducts[i].id);
            this.recoverList.push(this.automaticProducts[i]);
            var allCurrent = {
                "id": this.automaticProducts[i].id,
                "selectedProductName": this.automaticProducts[i].name
            };
            this.approveList.push(allCurrent);
        }
        document.getElementById("selectAllButton").disabled = true;
        //document.getElementById("allButtonTD").innerHTML = "";
        this.automaticProducts = [];
        /* if(this.selectVariable){
            for(let i=0; i<this.automaticProducts.length; i++){
              document.getElementsByClassName("selectButton")[i].setAttribute("disabled","true")
            }
        }
        else{
          for(let i=0; i<this.automaticProducts.length; i++){
            document.getElementsByClassName("selectButton")[i].removeAttribute("disabled");
          }
        } */
    };
    AutomatskiPopustKomercijalistaComponent.prototype.recoverFromList = function () {
        for (var i = 0; i < this.recoverList.length; i++) {
            this.automaticProducts.push(this.recoverList[i]);
        }
        this.approveList = [];
        this.fleg = true;
        document.getElementById("selectAllButton").disabled = false;
        this.selectVariable = false;
        if (this.fleg) {
            this.recoverList = [];
            this.fleg = false;
        }
    };
    AutomatskiPopustKomercijalistaComponent.prototype.approveSelectedOrAll = function () {
        var _this = this;
        this.http.post(this.endpointURL_approve, { "products": this.selectedProducts,
            "all": this.selectVariable
        }, { headers: this.headers }).subscribe(function (response) {
            window.alert("Automatski popust je omogućen!");
            _this.approveList = [];
        }, function (err) { _this.handleError(err); });
        if (this.automaticProducts.length <= 0) {
            document.getElementById("omoguciButton").setAttribute("disabled", "true");
        }
    };
    AutomatskiPopustKomercijalistaComponent.prototype.addToApprove = function (event, productName, index) {
        event.preventDefault();
        var id = event.srcElement.id;
        var selectedProductName = productName;
        var productIndex = index;
        this.recoverList.push(this.automaticProducts[productIndex]);
        this.automaticProducts.splice(productIndex, 1);
        if (this.automaticProducts.length <= 0) {
            this.selectVariable = false;
            document.getElementById("selectAllButton").disabled = true;
        }
        this.selectedProducts.push(id.toString());
        var current = {
            "id": id,
            "selectedProductName": selectedProductName
        };
        this.approveList.push(current);
        /* console.log("ID selektovanog proizvoda je: ", id,
                    "Ime proizvoda je: " + selectedProductName,
                    "Lista selektovanih proizvoda je: ", this.selectedProducts,
                    "Index selektovanog proizvoda je: ", productIndex,
                    "Lista approve proizvoda je: ", this.approveList) */
    };
    AutomatskiPopustKomercijalistaComponent.prototype.getAutomaticProducts = function () {
        return this.http.get(this.endpointURL, { headers: this.headers });
    };
    AutomatskiPopustKomercijalistaComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    AutomatskiPopustKomercijalistaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-automatski-popust-komercijalista',
            template: __webpack_require__(/*! ./automatski-popust-komercijalista.component.html */ "./src/app/komercijalista/automatski-popust-komercijalista/automatski-popust-komercijalista.component.html"),
            styles: [__webpack_require__(/*! ./automatski-popust-komercijalista.component.css */ "./src/app/komercijalista/automatski-popust-komercijalista/automatski-popust-komercijalista.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AutomatskiPopustKomercijalistaComponent);
    return AutomatskiPopustKomercijalistaComponent;
}());



/***/ }),

/***/ "./src/app/komercijalista/komercijalista.component.css":
/*!*************************************************************!*\
  !*** ./src/app/komercijalista/komercijalista.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    /*.current-user{\r\n      float: right;\r\n      padding: 5px 15px;\r\n      margin-top: 15px;\r\n  }\r\n  .current-user>p{\r\n      color: white;\r\n  }*/\r\n\r\n    .products .product{\r\n    margin-top:4%;\r\n    margin-bottom: 4%;\r\n    margin-left: 4%;\r\n    width: 75vw;\r\n    height: 50%;\r\n    display:flex;\r\n  }\r\n\r\n    .products .img1{\r\n    width :10%;\r\n    height: 35%;\r\n    margin-left: 5%;\r\n    margin-top: 6%;\r\n}\r\n\r\n    .products .desc{\r\n    width:80%;\r\n    margin-top: 3%;\r\n    margin-left:5%;\r\n}\r\n\r\n    .login_btn{\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 100px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    ul li ul li{\r\n        display:none;\r\n    }\r\n\r\n    ul li:hover ul li{\r\n        display:block;\r\n    }\r\n\r\n    ul li ul li a:hover{\r\n        color:black;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*  ------------------ */\r\n\r\n    .modal-content {\r\n        background-color: rgba(0,0,0,.8);\r\n        margin: 4% auto 15% auto;\r\n        border: 1px solid #888;\r\n        width: 40%; \r\n        padding-bottom: 30px;\r\n        align-content: center;\r\n    }\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n        position: absolute;\r\n        right: 25px;\r\n        top: 0;\r\n        color: white;\r\n        font-size: 35px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .close:hover,.close:focus {\r\n        color: red;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n        -webkit-animation: zoom 0.6s;\r\n                animation: zoom 0.6s\r\n    }\r\n\r\n    @-webkit-keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    @keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    .card{\r\n        display:flex;\r\n        margin-top:2%;\r\n        margin-bottom:2%;\r\n        margin-left:35%;\r\n    }\r\n\r\n    .card-stat{\r\n        display: flex;\r\n        margin-top:2%;\r\n        margin-bottom:2%;\r\n        margin-left:13%;\r\n        margin-right: 20%;\r\n    }\r\n\r\n    .text-icons{\r\n        margin-left:3%;\r\n        margin-top:1%;\r\n    }\r\n\r\n    .inputs{\r\n        margin-left:1%\r\n    }\r\n\r\n    .modal {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n    }\r\n\r\n    .modal1 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .modal2 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .top-nav{\r\n    padding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n        float: left;\r\n        position: fixed;\r\n        margin-top: 0;\r\n        /*border: 1px solid rgba(0,0,0,.15);*/\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n        background-color: #fff;\r\n        box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n        \r\n}\r\n\r\n    .dropdown ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\n    display:inline-block;\r\n    \r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\n    white-space: normal;\r\n    text-decoration: none;\r\n    \r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\n    color:#05a081;\r\n\r\n    \r\n}\r\n\r\n    .inputs select{\r\n    position: relative;\r\n    background-color:black;\r\n    color:white;\r\n   border-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\n    background-color: #05a081;\r\n    color:black;\r\n}\r\n\r\n    .search-box{\r\n    left: 20%;\r\n    position: absolute;\r\n    border-radius: 40%;\r\n    padding: 10px;\r\n    height: 40px;\r\n}\r\n\r\n    .search-btn{\r\n    color:#05a081;\r\n    float: right;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background: #222;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.4s;\r\n}\r\n\r\n    .search-text {\r\n    font-size: 17px;\r\n    border: none;\r\n    background: none;\r\n    float: left;\r\n    padding: 0;\r\n    color: white;\r\n    transition: 0.4s;\r\n    line-height: 40px;\r\n    width: 0px;\r\n    \r\n  }\r\n\r\n    input[type=\"text\"]{\r\n    border-color: none;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n  }\r\n\r\n    .search-box:hover > .search-text{\r\n      width: 240px;\r\n      padding: 0 6px;\r\n  }\r\n\r\n    .search-box:hover > .search-btn{\r\n    background: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29tZXJjaWphbGlzdGEva29tZXJjaWphbGlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBR0osbUJBQW1COztJQUVuQjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztJQUVBOzs7OztJQUtJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0lBR0Esb0JBQW9COztJQUVoQjtRQUNJLGVBQWU7UUFDZixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQ0FBbUM7UUFDbkMsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osdUNBQXVDO0lBQzNDOztJQUVBOztRQUVJLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix1Q0FBdUM7SUFDM0M7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixXQUFXOztJQUVmOztJQUNKO0VBQ0UsU0FBUztBQUNYOztJQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztJQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztJQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7RUFDakI7O0lBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0lBRUE7Ozs7Ozs7SUFPRTs7SUFHRjtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtFQUNkOztJQUlGO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7SUFDQTtJQUNJLFNBQVM7SUFDVCxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7SUFDQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaOztJQUVBO0lBQ0EsWUFBWTtJQUNaLHlCQUF5QjtJQUN6Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBQ0E7UUFDSSxhQUFhO0lBQ2pCOztJQUNBO1FBQ0ksV0FBVztRQUNYLGVBQWU7SUFDbkI7O0lBRUEsd0JBQXdCOztJQUV4QjtRQUNJLGdDQUFnQztRQUNoQyx3QkFBd0I7UUFDeEIsc0JBQXNCO1FBQ3RCLFVBQVU7UUFDVixvQkFBb0I7UUFDcEIscUJBQXFCO0lBQ3pCOztJQUVBLHlCQUF5Qjs7SUFDekI7UUFDSSxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLE1BQU07UUFDTixZQUFZO1FBQ1osZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7SUFDQTtRQUNJLFVBQVU7UUFDVixlQUFlO0lBQ25COztJQUVBLHVCQUF1Qjs7SUFDdkI7UUFDSSw0QkFBbUI7Z0JBQW5CO0lBQ0o7O0lBQ0E7UUFDSSxNQUFNLDJCQUFrQixDQUFsQixtQkFBbUI7UUFDekIsSUFBSSwyQkFBa0IsQ0FBbEIsbUJBQW1CO0lBQzNCOztJQUhBO1FBQ0ksTUFBTSwyQkFBa0IsQ0FBbEIsbUJBQW1CO1FBQ3pCLElBQUksMkJBQWtCLENBQWxCLG1CQUFtQjtJQUMzQjs7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGVBQWU7SUFDbkI7O0lBQ0E7UUFDSSxhQUFhO1FBQ2IsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztJQUNBO1FBQ0ksY0FBYztRQUNkLGFBQWE7SUFDakI7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGVBQWU7UUFDZixVQUFVO1FBQ1YsT0FBTztRQUNQLE1BQU07UUFDTixXQUFXO1FBQ1gsWUFBWTtRQUNaLGNBQWM7UUFDZCxpQ0FBaUM7SUFDckM7O0lBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLFVBQVU7UUFDVixPQUFPO1FBQ1AsTUFBTTtRQUNOLFdBQVc7UUFDWCxZQUFZO1FBQ1osY0FBYztRQUNkLGlDQUFpQzs7SUFFckM7O0lBQ0E7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLFVBQVU7UUFDVixPQUFPO1FBQ1AsTUFBTTtRQUNOLFdBQVc7UUFDWCxZQUFZO1FBQ1osY0FBYztRQUNkLGlDQUFpQzs7SUFFckM7O0lBR0o7SUFDSSxlQUFlOztBQUVuQjs7SUFFQTtRQUNRLFdBQVc7UUFDWCxlQUFlO1FBQ2YsYUFBYTtRQUNiLHFDQUFxQztRQUNyQyx5QkFBeUI7UUFDekIsMEJBQTBCO1FBQzFCLHNCQUFzQjtRQUV0Qix1Q0FBdUM7O0FBRS9DOztJQUNBO0lBQ0ksWUFBWTtBQUNoQjs7SUFHQTtJQUNJLGVBQWU7QUFDbkI7O0lBQ0E7SUFDSSxvQkFBb0I7OztBQUd4Qjs7SUFHQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7O0FBRXpCOztJQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7OztBQUdqQjs7SUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsV0FBVztHQUdaLDhCQUE4QjtBQUNqQzs7SUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0lBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7SUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7SUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTs7RUFFWjs7SUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7SUFHQTtNQUNJLFlBQVk7TUFDWixjQUFjO0VBQ2xCOztJQUVBO0lBQ0UsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAva29tZXJjaWphbGlzdGEva29tZXJjaWphbGlzdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLypodG1sLCBib2R5LCAjd3JhcHBlciwgI3BhZ2Utd3JhcHBlciB7aGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO30qL1xyXG5cclxuXHJcblxyXG5cclxuICAgICN3cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNwYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIycHggMTBweDtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUb3AgTmF2aWdhdGlvbiAqL1xyXG5cclxuLnRvcC1uYXY+bGk+YSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnRvcC1uYXY+bGk+YTpob3ZlcixcclxuLnRvcC1uYXY+bGk+YTpmb2N1cyxcclxuLnRvcC1uYXY+Lm9wZW4+YSxcclxuLnRvcC1uYXY+Lm9wZW4+YTpob3ZlcixcclxuLnRvcC1uYXY+Lm9wZW4+YTpmb2N1cyB7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbn1cclxuXHJcblxyXG4vKiBTaWRlIE5hdmlnYXRpb24gKi9cclxuXHJcbiAgICAuc2lkZS1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgbGVmdDogMjI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjI1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwwLDAsMSkgc29saWQ7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzVBNkI3RDsqL1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPmEge1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2IGxpIGE6aG92ZXIsXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdj5saT51bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlLW5hdj5saT51bD5saT5hIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAzOHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICBcclxuICAgIH1cclxuLm5hdmJhciAubmF2ID4gbGkgPiBhOmhvdmVyID4gLmxhYmVsIHtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2h7XHJcblxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2ggaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuU2VhcmNoIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDVhMDgxO1xyXG4gIH1cclxuXHJcbiAgLyouY3VycmVudC11c2Vye1xyXG4gICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxuICAuY3VycmVudC11c2VyPnB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9Ki9cclxuXHJcbiBcclxuICAucHJvZHVjdHMgLnByb2R1Y3R7XHJcbiAgICBtYXJnaW4tdG9wOjQlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIH1cclxuICBcclxuICBcclxuXHJcbi5wcm9kdWN0cyAuaW1nMXtcclxuICAgIHdpZHRoIDoxMCU7XHJcbiAgICBoZWlnaHQ6IDM1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDYlO1xyXG59XHJcbi5wcm9kdWN0cyAuZGVzY3tcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6NSU7XHJcbn1cclxuLmxvZ2luX2J0bntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjg1KTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luX2J0bjpob3ZlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbiAgICB9XHJcblxyXG4gICAgdWwgbGkgdWwgbGl7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgdWwgbGk6aG92ZXIgdWwgbGl7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuICAgIHVsIGxpIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qICAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICAgICAgbWFyZ2luOiA0JSBhdXRvIDE1JSBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICAgICAgd2lkdGg6IDQwJTsgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuY2xvc2U6aG92ZXIsLmNsb3NlOmZvY3VzIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogQWRkIFpvb20gQW5pbWF0aW9uICovXHJcbiAgICAuYW5pbWF0ZSB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiB6b29tIDAuNnNcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgem9vbSB7XHJcbiAgICAgICAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX0gXHJcbiAgICAgICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjIlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjM1JTtcclxuICAgIH1cclxuICAgIC5jYXJkLXN0YXR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOjIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTMlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjAlO1xyXG4gICAgfVxyXG4gICAgLnRleHQtaWNvbnN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MyU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxJTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXRze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjElXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tb2RhbCB7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICB9XHJcbiAgICAubW9kYWwxIHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5tb2RhbDIge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbi50b3AtbmF2e1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxufVxyXG5cclxuLnRvcC1uYXYye1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIC8qYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTUpOyovXHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcclxuICAgICAgICBcclxufVxyXG4uZHJvcGRvd24gdWwgbGkgdWwgbGl7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24gYTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcGRvd24gYTpob3ZlciB1bCBsaXtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuLnRvcC1uYXYyIGxpIGF7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbn1cclxuXHJcbi5kcm9wZG93biBhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgY29sb3I6IzA1YTA4MTtcclxuXHJcbiAgICBcclxufVxyXG5cclxuLmlucHV0cyBzZWxlY3R7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxufVxyXG4uaW5wdXRzIHNlbGVjdDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLnNlYXJjaC1ib3h7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWJ0bntcclxuICAgIGNvbG9yOiMwNWEwODE7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxufVxyXG5cclxuLnNlYXJjaC10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMHB4O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgIGJvcmRlci1jb2xvcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiAwIG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5zZWFyY2gtYm94OmhvdmVyID4gLnNlYXJjaC10ZXh0e1xyXG4gICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gIH1cclxuICAgIFxyXG4gIC5zZWFyY2gtYm94OmhvdmVyID4gLnNlYXJjaC1idG57XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/komercijalista/komercijalista.component.html":
/*!**************************************************************!*\
  !*** ./src/app/komercijalista/komercijalista.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//code.jquery.com/jquery-1.12.0.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-migrate-1.2.1.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/komercijalista\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n            <li class=\"dropdown\">\n                <a style=\"margin-left:0px;\">{{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                <ul class=\"top-nav2\">\n                    <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                    <li (click)=\"logout()\" style=\"margin-top:10%;\"><a style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li>\n                </ul>\n            </li>\n        </ul>\n        <!-- Meni sa leve strane -->\n        <ul class=\"nav navbar-nav side-nav\">\n                <li>\n                    <a routerLink=\"/komercijalista\"> POCETNA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/komercijalista/narucivanje-komercijalista\" >NARUCIVANJE PROIZVODA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/komercijalista/naruceno-komercijalista\">NARUCENI PROIZVODI</a>           \n                         </li>\n                \n                <li>\n                        <a routerLink=\"/komercijalista/prikaz-komercijalista\">PRIKAZ FAKTURE</a>\n                    </li>\n                    <li>\n                            <a routerLink=\"/komercijalista/automatski-popust-komercijalista\">AUTOMATSKI POPUST</a>\n                    </li>\n                \n            </ul>\n    </nav>\n\n    <div  class=\"products\" *ngFor=\"let product of productService.products\"  id=\"{{ product.id }}\">\n        <div class=\"product\">\n           <img src=\"{{ product.imagePath }}\" class=\"img1\">  <!-- {{ product.imagePath }} --> \n                <div class=\"desc\">\n                    <div class=\"row\" id=\"main\" >\n                        <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                                <div class=\"col-md-12\">\n                                <h4>Informacije o proizvodu <button  id = \"{{ product.id}}\" (click)=\"changeValues($event); \"  class=\"btn btn-warning btn-xs text-right\"><span id = \"{{ product.id}}\" class=\"glyphicon glyphicon-pencil\"></span>\n                                </button> Izmeni cenu<button  #buttonID  id = \"{{ product.id}}\" (click)=\"singleStatistic(buttonID.id)\" onclick=\"document.getElementById('stats').style.display='block'\" style=\"margin-left: 5%;\" class=\"btn btn-primary btn-xs text-right\"><span  id = \"{{ product.id}}\" class=\"far fa-chart-bar\"></span>\n                                </button> Statistika </h4>\n                                <div class=\"table-responsive\">  \n                                      <table id=\"mytable\" class=\"table table-bordred table-striped\">                                         \n                                           <thead>                                                                       \n                                            <th></th>\n                                             <th></th>\n                                             <th></th>                                            \n                                           </thead>\n                            <tbody>\n                                <tr>\n                                 <td>Proizvodjac: </td>\n                                <td class='{{product.id}}' >{{ product.producer }}</td>\n                                <td></td>\n                                </tr>\n                                <tr>\n                                 <td>Vrsta proizvoda: </td>\n                                 <td class='{{product.id}}' >{{ product.productType }}</td>\n                                 <td></td>\n                                 </tr>\n                                 <tr>\n                                <td>Kolicina: </td>\n                                <td class='{{product.id}}' >{{ product.quantity }}</td>\n                                <td></td>\n                                </tr>\n                            <tr>\n                            <td>Website </td>\n                            <td class='{{product.id}}' >{{ product.productURL }}</td>\n                            <td></td>\n                            </tr>\n                            <tr>\n                                <td>Garancija: </td>\n                                <td class='{{product.id}}' >{{ product.warranty }}</td>\n                                <td></td>\n                                </tr>\n                                <tr>\n                                <td>Naziv proizvoda: </td>\n                                <td class='{{product.id}}' >{{ product.name }}</td>\n                                <td></td>\n                                </tr>\n                            \n                         <tr>\n                            <td>Opis proizvoda:</td>\n                            <td class='{{product.id}}' >{{ product.properties }}</td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td>Nabavna cena: </td>\n                            <td class='{{product.id}}' >{{ product.vendorPrice }}</td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td>Cena: </td>\n                            <td class='{{product.id}}' contenteditable=\"false\">{{ product.price }}</td>\n<!--                             <td class=\"text-right\" ><button id = \"{{ product.id}}\" (click)= \"addToCart($event)\" class=\"btn btn-danger btn-xs\"><span id = \"{{ product.id}}\" class=\"glyphicon glyphicon-ok\"></span></button></td>\n -->                        </tr>\n                        <!-- <tr>\n                                \n                               <td><input #discountValue id=\"{{product.id}}\" type=\"number\" class=\"form-control\" style=\"text-align: center;\" placeholder=\"Iznos procenta\" required min=\"0\" max=\"100\" oninvalid=\"this.setCustomValidity('Vrednost manje ili jednaka 100')\" oninput=\"this.setCustomValidity('')\" ></td>\n                                <td><button id=\"{{product.id}}\" (click)=\"discountID($event, discountValue.value)\" class=\"btn float-right login_btn\">Izvrsi popust</button> \n                                    <td class=\"text-right\" ><button id = \"{{ product.id}}\" (click)= \"addToCart($event)\" class=\"btn btn-danger btn-xs\"><span id = \"{{ product.id}}\" class=\"glyphicon glyphicon-ok\"></span></button>\n                                    </td>    \n                            </tr> -->\n                            </tbody>\n                                \n                        </table>\n                        </div>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n        </div> \n    \n\n</div>\n\n<div id=\"stats\" class=\"modal2\">\n    <form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('stats').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n          <h1 style=\"text-align:center;color:white\">Statistika proizvoda</h1>\n        </div>   \n                    \n    <div class=\"card-stat\" style=\"margin-top:2%;\">     \n        <fusioncharts\n        width=\"400\"\n        height=\"300\"\n        type=\"Column2d\"\n        [dataSource]=dataSource>\n    </fusioncharts>\n    </div>\n    </form>\n                         \n</div>\n\n    \n    \n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi svih dobavljača. Moguće je izvršiti izmenu cene željenog proizvoda.\n\n\nNaručivanje proizvoda\n\n* Kada radnik naruči proizvod, komercijalista će to videti i ti proizvodi će se pojaviti u tabeli. U narudzbenici svi proizvodi moraju biti od istog dobavljača. Komercijalista bira proizvode koje treba da naruči od dobavljača i njihov kvantitet. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/komercijalista/komercijalista.component.ts":
/*!************************************************************!*\
  !*** ./src/app/komercijalista/komercijalista.component.ts ***!
  \************************************************************/
/*! exports provided: KomercijalistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KomercijalistaComponent", function() { return KomercijalistaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var KomercijalistaComponent = /** @class */ (function () {
    function KomercijalistaComponent(http, productService, router) {
        this.http = http;
        this.productService = productService;
        this.router = router;
        this.pozicija = localStorage.getItem('username');
        this.endpointURL = 'http://78.46.117.245:9000/suppliers/';
        this.endpointURL2 = 'http://78.46.117.245:9000/products/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'token': localStorage.getItem("token"),
            'Content-Type': 'application/json;charset=UTF-8'
        });
        this.endpointURL3 = 'http://78.46.117.245:9000/products/';
        this.endpointURL4 = 'http://78.46.117.245:9000/logout';
        this.korpa = [];
        this.gotData = false;
        this.check = false;
        this.podaci = [];
    }
    KomercijalistaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getAllProducts();
        this.getSuppliers().subscribe(function (result) {
            _this.dobavljaci = result;
        });
    };
    KomercijalistaComponent.prototype.singleStatistic = function (id) {
        var _this = this;
        /* event.preventDefault();
        const id = event.srcElement.id;
        const newEndpointURL = this.endpointURL2 + id + "/statistics";
    
        this.http.get(newEndpointURL, {headers: this.headers}).subscribe(result => {
          this.dataSource = result;
          localStorage.setItem("singleStat", JSON.stringify(result));
    
          //console.log(result, this.dataSource)
          //console.log(result)
    
        }) */
        return this.http.get(this.endpointURL3 + id + "/statistics", { headers: this.headers }).subscribe(function (result) {
            _this.myDataSource = result;
            _this.dataSource = {
                chart: {
                    "caption": "Statistika",
                    "subCaption": "Proizvoda",
                    "xAxisName": "Datum",
                    "yAxisName": "Broj prodanih proizvoda",
                    "theme": "fusion",
                },
                "data": _this.myDataSource
            };
        }, function (err) { _this.handleError(err); });
    };
    KomercijalistaComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL4, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    KomercijalistaComponent.prototype.getSuppliers = function () {
        return this.http.get(this.endpointURL, {
            headers: this.headers
        });
    };
    KomercijalistaComponent.prototype.changeValues = function (event) {
        var _this = this;
        event.preventDefault();
        var id = event.srcElement.id;
        var name = document.getElementsByClassName(id);
        var podatak;
        /* if(this.check){
          this.check = false
        }
        else{
          this.check=true;
        } */
        if (name[7].className === id) {
            // console.log(name[i].innerHTML)
            if (name[7].getAttribute("contenteditable") === "false") {
                name[7].setAttribute("contenteditable", "true");
                this.check = false;
            }
            else {
                name[7].setAttribute("contenteditable", "false");
                this.check = true;
                podatak = name[7].innerHTML;
            }
        }
        if (this.check) {
            this.http.put(this.endpointURL2 + id + "/", {
                "price": podatak
            }, { headers: this.headers }).subscribe(function (response) {
                window.alert("Cena uspešno promenjena!");
            }, function (err) { _this.handleError(err); });
        }
    };
    KomercijalistaComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    KomercijalistaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-komercijalista',
            template: __webpack_require__(/*! ./komercijalista.component.html */ "./src/app/komercijalista/komercijalista.component.html"),
            styles: [__webpack_require__(/*! ./komercijalista.component.css */ "./src/app/komercijalista/komercijalista.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], KomercijalistaComponent);
    return KomercijalistaComponent;
}());



/***/ }),

/***/ "./src/app/komercijalista/naruceno-komercijalista/naruceno-komercijalista.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/komercijalista/naruceno-komercijalista/naruceno-komercijalista.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n        margin-top:8vh;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    ul li:hover ul li{\r\n    display:block;\r\n}\r\n\r\n    ul li ul li a:hover{\r\n    color:black;\r\n}\r\n\r\n    .modal-content {\r\n    background-color: rgba(0,0,0,.8);\r\n    margin: 4% auto 15% auto;\r\n    border: 1px solid #888;\r\n    width: 40%; \r\n    padding-bottom: 30px;\r\n    align-content: center;\r\n}\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n    position: absolute;\r\n    right: 25px;\r\n    top: 0;\r\n    color: white;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n}\r\n\r\n    .close:hover,.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n    -webkit-animation: zoom 0.6s;\r\n            animation: zoom 0.6s\r\n}\r\n\r\n    @-webkit-keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    @keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    .card{\r\n    display:flex;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    margin-left:35%;\r\n}\r\n\r\n    .text-icons{\r\n    margin-left:3%;\r\n    margin-top:1%;\r\n}\r\n\r\n    .inputs{\r\n    margin-left:1%\r\n}\r\n\r\n    .modal {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n    .modal1 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .modal2 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .top-nav{\r\npadding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n    float: left;\r\n    position: fixed;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n    \r\n}\r\n\r\n    .dropdown ul li ul li{\r\ndisplay:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\ncursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\ndisplay:inline-block;\r\n\r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\nwhite-space: normal;\r\ntext-decoration: none;\r\n\r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\ncolor:#05a081;\r\n\r\n\r\n}\r\n\r\n    .inputs select{\r\nposition: relative;\r\nbackground-color:black;\r\ncolor:white;\r\nborder-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\nbackground-color: #05a081;\r\ncolor:black;\r\n}\r\n\r\n    .login_btn{\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 100px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    .search-box{\r\n        left: 20%;\r\n        position: absolute;\r\n        border-radius: 40%;\r\n        padding: 10px;\r\n        height: 40px;\r\n    }\r\n\r\n    .search-btn{\r\n        color:#05a081;\r\n        float: right;\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 50%;\r\n        background: #222;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: 0.4s;\r\n    }\r\n\r\n    .search-text {\r\n        font-size: 17px;\r\n        border: none;\r\n        background: none;\r\n        float: left;\r\n        padding: 0;\r\n        color: white;\r\n        transition: 0.4s;\r\n        line-height: 40px;\r\n        width: 0px;\r\n        \r\n      }\r\n\r\n    input[type=\"text\"]{\r\n        border-color: none;\r\n        box-shadow: none;\r\n        outline: 0 none;\r\n      }\r\n\r\n    .search-box:hover > .search-text{\r\n          width: 240px;\r\n          padding: 0 6px;\r\n      }\r\n\r\n    .search-box:hover > .search-btn{\r\n        background: white;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29tZXJjaWphbGlzdGEvbmFydWNlbm8ta29tZXJjaWphbGlzdGEvbmFydWNlbm8ta29tZXJjaWphbGlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjs7SUFHSixtQkFBbUI7O0lBRW5CO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0lBRUE7Ozs7O0lBS0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7SUFHQSxvQkFBb0I7O0lBRWhCO1FBQ0ksZUFBZTtRQUNmLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1DQUFtQztRQUNuQyxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWix1Q0FBdUM7SUFDM0M7O0lBRUE7O1FBRUksYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHVDQUF1QztJQUMzQzs7SUFFQTtRQUNJLGNBQWM7UUFDZCw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLFdBQVc7O0lBRWY7O0lBQ0o7RUFDRSxTQUFTO0FBQ1g7O0lBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0lBQ0E7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7SUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7O0lBQ0E7SUFDRSxZQUFZ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WTtVQUNaLGNBQWM7TUFDbEI7O0lBRUE7UUFDRSxpQkFBaUI7SUFDckIiLCJmaWxlIjoic3JjL2FwcC9rb21lcmNpamFsaXN0YS9uYXJ1Y2Vuby1rb21lcmNpamFsaXN0YS9uYXJ1Y2Vuby1rb21lcmNpamFsaXN0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAvKmh0bWwsIGJvZHksICN3cmFwcGVyLCAjcGFnZS13cmFwcGVyIHtoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47fSovXHJcblxyXG5cclxuXHJcblxyXG4gICAgI3dyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3BhZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogMjJweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6OHZoO1xyXG4gICAgfVxyXG5cclxuXHJcbi8qIFRvcCBOYXZpZ2F0aW9uICovXHJcblxyXG4udG9wLW5hdj5saT5hIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG59XHJcblxyXG4udG9wLW5hdj5saT5hOmhvdmVyLFxyXG4udG9wLW5hdj5saT5hOmZvY3VzLFxyXG4udG9wLW5hdj4ub3Blbj5hLFxyXG4udG9wLW5hdj4ub3Blbj5hOmhvdmVyLFxyXG4udG9wLW5hdj4ub3Blbj5hOmZvY3VzIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxufVxyXG5cclxuXHJcbi8qIFNpZGUgTmF2aWdhdGlvbiAqL1xyXG5cclxuICAgIC5zaWRlLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICBsZWZ0OiAyMjVweDtcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMjVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggcmdiYSgwLDAsMCwxKSBzb2xpZDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2QjdEOyovXHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXY+bGk+YSB7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpob3ZlcixcclxuICAgIC5zaWRlLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPnVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNpZGUtbmF2PmxpPnVsPmxpPmEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDM4cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4ubmF2YmFyIC5uYXYgPiBsaSA+IGE6aG92ZXIgPiAubGFiZWwge1xyXG4gIHRvcDogMTBweDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG4uU2VhcmNoe1xyXG5cclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcblxyXG4uU2VhcmNoIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5TZWFyY2ggYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA1YTA4MTtcclxuICB9XHJcblxyXG51bCBsaSB1bCBsaXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG51bCBsaTpob3ZlciB1bCBsaXtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxudWwgbGkgdWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxuICAgIG1hcmdpbjogNCUgYXV0byAxNSUgYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogNDAlOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2xvc2U6aG92ZXIsLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xyXG4uYW5pbWF0ZSB7XHJcbiAgICBhbmltYXRpb246IHpvb20gMC42c1xyXG59XHJcbkBrZXlmcmFtZXMgem9vbSB7XHJcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHNjYWxlKDApfSBcclxuICAgIHRvIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxyXG59XHJcbi5jYXJke1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDoyJTtcclxuICAgIG1hcmdpbi1ib3R0b206MiU7XHJcbiAgICBtYXJnaW4tbGVmdDozNSU7XHJcbn1cclxuLnRleHQtaWNvbnN7XHJcbiAgICBtYXJnaW4tbGVmdDozJTtcclxuICAgIG1hcmdpbi10b3A6MSU7XHJcbn1cclxuXHJcbi5pbnB1dHN7XHJcbiAgICBtYXJnaW4tbGVmdDoxJVxyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG59XHJcbi5tb2RhbDEge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgXHJcbn1cclxuLm1vZGFsMiB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi50b3AtbmF2e1xyXG5wYWRkaW5nOiAwIDE1cHg7XHJcblxyXG59XHJcblxyXG4udG9wLW5hdjJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTsqL1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgXHJcbn1cclxuLmRyb3Bkb3duIHVsIGxpIHVsIGxpe1xyXG5kaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24gYTpob3ZlcntcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93biBhOmhvdmVyIHVsIGxpe1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHJcblxyXG59XHJcblxyXG5cclxuLnRvcC1uYXYyIGxpIGF7XHJcbndoaXRlLXNwYWNlOiBub3JtYWw7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5kcm9wZG93biBhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5jb2xvcjojMDVhMDgxO1xyXG5cclxuXHJcbn1cclxuXHJcbi5pbnB1dHMgc2VsZWN0e1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbmNvbG9yOndoaXRlO1xyXG4tbW96LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbmJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxufVxyXG4uaW5wdXRzIHNlbGVjdDpob3ZlcntcclxuYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxuY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5sb2dpbl9idG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44NSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9idG46aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYm94e1xyXG4gICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLWJ0bntcclxuICAgICAgICBjb2xvcjojMDVhMDgxO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IDAgbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC5zZWFyY2gtYm94OmhvdmVyID4gLnNlYXJjaC10ZXh0e1xyXG4gICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLWJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/komercijalista/naruceno-komercijalista/naruceno-komercijalista.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/komercijalista/naruceno-komercijalista/naruceno-komercijalista.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/komercijalista\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n            <li class=\"dropdown\">\n                <a style=\"margin-left:0px;\">{{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                <ul class=\"top-nav2\">\n                    <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                    <li (click)=\"logout()\" style=\"margin-top:10%;\"><a style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li>\n                </ul>\n            </li>\n        </ul>\n        <!-- Meni sa leve strane -->\n        <ul class=\"nav navbar-nav side-nav\">\n                <li>\n                    <a routerLink=\"/komercijalista\"> POCETNA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/komercijalista/narucivanje-komercijalista\" >NARUCIVANJE PROIZVODA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/komercijalista/naruceno-komercijalista\">NARUCENI PROIZVODI</a>           \n                         </li>\n                \n                <li>\n                        <a routerLink=\"/komercijalista/prikaz-komercijalista\">PRIKAZ FAKTURE</a>\n                    </li>\n                    <li>\n                            <a routerLink=\"/komercijalista/automatski-popust-komercijalista\">AUTOMATSKI POPUST</a>\n                    </li>\n                \n            </ul>\n    </nav>\n\n    <div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <div class=\"row\" id=\"main\" >\n                <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                  \n                        <div class=\"col-md-12\">\n                        <h4>Naruceni proizvodi koji treba da stignu</h4>\n                        <div class=\"table-responsive\">\n                \n                                \n                              <table id=\"mytable\" class=\"table table-bordred table-striped\">\n                                   \n                                   <thead>\n                                    \n                                     <th scope=\"col\"  class=\"text-center\">Datum porudzbine</th>\n                                     <th scope=\"col\" class=\"text-center\">Dobavljac</th>\n                                     <th scope=\"col\" class=\"text-center\">Sifra porudzbine</th>\n                                     <th scope=\"col\" class=\"text-center\"> Stiglo? </th>\n                                   </thead>\n                    <tbody>\n                    \n                    <tr *ngFor=\"let product of falseArrived; let i=index\">\n                            <td class=\"text-center align-middle\"> {{product.orderDate}}</td>\n                            <td class=\"text-center align-middle\"> {{product.supplier}}</td>\n                            <td class=\"text-center align-middle\" id=\"{{product.id}}\" #productID> {{product.id}}</td>\n                            <td class=\"text-center align-middle\"><button (click)=\"confirmOrder($event, productID.id)\" id = \"{{i}}\" \n                                class=\"btn btn-success btn-xs\"><span id = \"{{i}}\" \n                                class=\"glyphicon glyphicon-ok\"></span></button> </td>\n                    </tr>\n                    </tbody>\n                        \n                </table>\n                </div>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"page-wrapper\">\n            <div class=\"container-fluid\">\n                <!-- Page Heading -->\n                <div class=\"row\" id=\"main\" >\n                    <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                      \n                            <div class=\"col-md-12\">\n                            <h4>Naruceni proizvodi koji su stigli</h4>\n                            <div class=\"table-responsive\">\n                    \n                                    \n                                  <table id=\"mytable\" class=\"table table-bordred table-striped\">\n                                       \n                                       <thead>\n                                         <th scope=\"col\" class=\"text-center\">ID Porudzbine</th>\n                                         <th scope=\"col\"  class=\"text-center\">Datum porudzbine</th>\n                                         <th scope=\"col\"  class=\"text-center\">Datum pristizanja</th>\n                                         <th scope=\"col\" class=\"text-center\">Broj različitih proizvoda</th>\n                                         <th scope=\"col\" class=\"text-center\">Dobavljac</th>\n                                       </thead>\n                        <tbody>\n                        \n                        <tr *ngFor=\"let product of trueArrived\">\n                                <td class=\"text-center align-middle\"> {{product.id}}</td>\n                                <td class=\"text-center align-middle\"> {{product.orderDate}}</td>\n                                <td class=\"text-center align-middle\"> {{product.arrivalDate}}</td>\n                                <td class=\"text-center align-middle\"> {{product.products.length}}</td>\n                                <td class=\"text-center align-middle\">{{product.supplier}}</td>\n                        </tr>\n                        </tbody>\n                            \n                    </table>\n                    </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    <div id=\"ordering\" class=\"modal2\">\n        <form class=\"modal-content animate\" action=\"/action_page.php\">\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('ordering').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Naruci proizvod</h1>\n            </div>   \n                        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <select>\n                                <option value=\"volvo\">Emmi</option>\n                                <option value=\"saab\">WinWin</option>\n                                <option value=\"mercedes\">Gigatron</option>\n                                <option value=\"audi\">LogicShop</option>\n                              </select>                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n                        <select>\n                                <option value=\"volvo\">Zvucnici</option>\n                                <option value=\"saab\">Dodaci</option>\n                                <option value=\"mercedes\">Kamere</option>\n                              </select>               </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <select>\n                                <option value=\"volvo\">Sony HDR-PJ410</option>\n                                <option value=\"saab\">DESTEK V4 VR Headset</option>\n                                <option value=\"mercedes\">LG LOUDR</option>\n                              </select>                              </div>\n        </div>\n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <input type=\"submit\" value=\"OrderProduct\" class=\"btn float-right login_btn\" routerLink=\"/komercijalista\" >\n          </div>\n                            \n          </form>\n</div>\n    \n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi svih dobavljača. Moguće je izvršiti izmenu cene željenog proizvoda.\n\n\nNaručivanje proizvoda\n\n* Kada radnik naruči proizvod, komercijalista će to videti i ti proizvodi će se pojaviti u tabeli. U narudzbenici svi proizvodi moraju biti od istog dobavljača. Komercijalista bira proizvode koje treba da naruči od dobavljača i njihov kvantitet. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/komercijalista/naruceno-komercijalista/naruceno-komercijalista.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/komercijalista/naruceno-komercijalista/naruceno-komercijalista.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NarucenoKomercijalistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NarucenoKomercijalistaComponent", function() { return NarucenoKomercijalistaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var NarucenoKomercijalistaComponent = /** @class */ (function () {
    function NarucenoKomercijalistaComponent(http, productService, router) {
        this.http = http;
        this.productService = productService;
        this.router = router;
        this.endpointURL = 'http://78.46.117.245:9000/orders/?arrived=true';
        this.endpointURL2 = 'http://78.46.117.245:9000/orders/?arrived=false';
        this.endpointURL3 = 'http://78.46.117.245:9000/orders/';
        this.endpointURL4 = 'http://78.46.117.245:9000/logout';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.pozicija = localStorage.getItem('username');
        this.trueArrived = [];
        this.falseArrived = [];
    }
    NarucenoKomercijalistaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.endpointURL, {
            headers: this.headers
        }).subscribe(function (result) {
            _this.trueArrived = result;
        });
        this.http.get(this.endpointURL2, {
            headers: this.headers
        }).subscribe(function (result) {
            _this.falseArrived = result;
        });
    };
    NarucenoKomercijalistaComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL4, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    NarucenoKomercijalistaComponent.prototype.confirmOrder = function (event, productID) {
        var _this = this;
        event.preventDefault();
        var id = productID;
        var newEndPointURL = this.endpointURL3 + id + "/invoice";
        var index = event.srcElement.id;
        this.http.get(newEndPointURL, {
            headers: this.headers
        }).subscribe(function (response) {
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () {
            that.http.get(that.endpointURL, {
                headers: that.headers
            }).subscribe(function (result) {
                that.trueArrived = result;
            });
        }, 250);
        this.falseArrived.splice(index, 1);
    };
    NarucenoKomercijalistaComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    NarucenoKomercijalistaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-naruceno-komercijalista',
            template: __webpack_require__(/*! ./naruceno-komercijalista.component.html */ "./src/app/komercijalista/naruceno-komercijalista/naruceno-komercijalista.component.html"),
            styles: [__webpack_require__(/*! ./naruceno-komercijalista.component.css */ "./src/app/komercijalista/naruceno-komercijalista/naruceno-komercijalista.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], NarucenoKomercijalistaComponent);
    return NarucenoKomercijalistaComponent;
}());



/***/ }),

/***/ "./src/app/komercijalista/narucivanje-komercijalista/narucivanje-komercijalista.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/komercijalista/narucivanje-komercijalista/narucivanje-komercijalista.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    .shopping-cart{\r\n      margin-top:10vh;\r\n      margin-left:3%;\r\n      margin-right: 3%;\r\n      \r\n  }\r\n\r\n    .small-image{\r\n      height: 50px;\r\n      width:50px;\r\n  }\r\n\r\n    .login_btn{\r\n    \r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    margin-left: 10px;\r\n    border-radius: 12px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    ul li ul li{\r\n        display:none;\r\n    }\r\n\r\n    ul li:hover ul li{\r\n        display:block;\r\n    }\r\n\r\n    ul li ul li a:hover{\r\n        color:black;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .modal-content {\r\n        background-color: rgba(0,0,0,.8);\r\n        margin: 4% auto 15% auto;\r\n        border: 1px solid #888;\r\n        width: 40%; \r\n        padding-bottom: 30px;\r\n        align-content: center;\r\n    }\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n        position: absolute;\r\n        right: 25px;\r\n        top: 0;\r\n        color: white;\r\n        font-size: 35px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .close:hover,.close:focus {\r\n        color: red;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n        -webkit-animation: zoom 0.6s;\r\n                animation: zoom 0.6s\r\n    }\r\n\r\n    @-webkit-keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    @keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    .card{\r\n        display:flex;\r\n        margin-top:2%;\r\n        margin-bottom:2%;\r\n        margin-left:25%;\r\n    }\r\n\r\n    .text-icons{\r\n        margin-left:3%;\r\n        margin-top:1%;\r\n    }\r\n\r\n    .inputs{\r\n        margin-left:1%;\r\n        display:flex;\r\n        width: 100%;\r\n    }\r\n\r\n    .modal2 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .store a{\r\n        text-decoration: none;\r\n        color: white;\r\n        width: 50%;\r\n\r\n    }\r\n\r\n    .client a{\r\n        text-decoration: none;\r\n        color:white;\r\n\r\n    }\r\n\r\n    .store{\r\n        margin-left:30%;\r\n    }\r\n\r\n    .top-nav{\r\n    padding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n        float: left;\r\n        position: fixed;\r\n        margin-top: 0;\r\n        /*border: 1px solid rgba(0,0,0,.15);*/\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n        background-color: #fff;\r\n        box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n        \r\n}\r\n\r\n    .dropdown ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\n    display:inline-block;\r\n    \r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\n    white-space: normal;\r\n    text-decoration: none;\r\n    \r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\n    color:#05a081;\r\n\r\n    \r\n}\r\n\r\n    .inputs select{\r\n    position: relative;\r\n    background-color:black;\r\n    color:white;\r\n   border-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\n    background-color: #05a081;\r\n    color:black;\r\n}\r\n\r\n    .search-box{\r\n    left: 20%;\r\n    position: absolute;\r\n    border-radius: 40%;\r\n    padding: 10px;\r\n    height: 40px;\r\n}\r\n\r\n    .search-btn{\r\n    color:#05a081;\r\n    float: right;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background: #222;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.4s;\r\n}\r\n\r\n    .search-text {\r\n    font-size: 17px;\r\n    border: none;\r\n    background: none;\r\n    float: left;\r\n    padding: 0;\r\n    color: white;\r\n    transition: 0.4s;\r\n    line-height: 40px;\r\n    width: 0px;\r\n    \r\n  }\r\n\r\n    input[type=\"text\"]{\r\n    border-color: none;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n  }\r\n\r\n    .search-box:hover > .search-text{\r\n      width: 240px;\r\n      padding: 0 6px;\r\n  }\r\n\r\n    .search-box:hover > .search-btn{\r\n    background: white;\r\n}\r\n\r\n    .form-group .login_btn{\r\n    margin-left: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29tZXJjaWphbGlzdGEvbmFydWNpdmFuamUta29tZXJjaWphbGlzdGEvbmFydWNpdmFuamUta29tZXJjaWphbGlzdGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBR0osbUJBQW1COztJQUVuQjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztJQUVBOzs7OztJQUtJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0lBR0Esb0JBQW9COztJQUVoQjtRQUNJLGVBQWU7UUFDZixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQ0FBbUM7UUFDbkMsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osdUNBQXVDO0lBQzNDOztJQUVBOztRQUVJLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix1Q0FBdUM7SUFDM0M7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixXQUFXOztJQUVmOztJQUNKO0VBQ0UsU0FBUztBQUNYOztJQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztJQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztJQUNBO0lBQ0UsWUFBWTtJQUNa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ZTtFQUNqQjs7SUFHQTtNQUNJLFlBQVk7TUFDWixjQUFjO0VBQ2xCOztJQUVBO0lBQ0UsaUJBQWlCO0FBQ3JCOztJQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAva29tZXJjaWphbGlzdGEvbmFydWNpdmFuamUta29tZXJjaWphbGlzdGEvbmFydWNpdmFuamUta29tZXJjaWphbGlzdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLypodG1sLCBib2R5LCAjd3JhcHBlciwgI3BhZ2Utd3JhcHBlciB7aGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO30qL1xyXG5cclxuXHJcblxyXG5cclxuICAgICN3cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNwYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIycHggMTBweDtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUb3AgTmF2aWdhdGlvbiAqL1xyXG5cclxuLnRvcC1uYXY+bGk+YSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnRvcC1uYXY+bGk+YTpob3ZlcixcclxuLnRvcC1uYXY+bGk+YTpmb2N1cyxcclxuLnRvcC1uYXY+Lm9wZW4+YSxcclxuLnRvcC1uYXY+Lm9wZW4+YTpob3ZlcixcclxuLnRvcC1uYXY+Lm9wZW4+YTpmb2N1cyB7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbn1cclxuXHJcblxyXG4vKiBTaWRlIE5hdmlnYXRpb24gKi9cclxuXHJcbiAgICAuc2lkZS1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgbGVmdDogMjI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjI1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwwLDAsMSkgc29saWQ7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzVBNkI3RDsqL1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPmEge1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2IGxpIGE6aG92ZXIsXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdj5saT51bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlLW5hdj5saT51bD5saT5hIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAzOHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICBcclxuICAgIH1cclxuLm5hdmJhciAubmF2ID4gbGkgPiBhOmhvdmVyID4gLmxhYmVsIHtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2h7XHJcblxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2ggaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuU2VhcmNoIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDVhMDgxO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIC5zaG9wcGluZy1jYXJ0e1xyXG4gICAgICBtYXJnaW4tdG9wOjEwdmg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjMlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIC5zbWFsbC1pbWFnZXtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB3aWR0aDo1MHB4O1xyXG4gIH1cclxuICAubG9naW5fYnRue1xyXG4gICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44NSk7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9idG46aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG4gICAgfVxyXG4gICAgdWwgbGkgdWwgbGl7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgdWwgbGk6aG92ZXIgdWwgbGl7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuICAgIHVsIGxpIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxuICAgICAgICBtYXJnaW46IDQlIGF1dG8gMTUlIGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgICAgICB3aWR0aDogNDAlOyBcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbiAgICAuY2xvc2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5jbG9zZTpob3ZlciwuY2xvc2U6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBBZGQgWm9vbSBBbmltYXRpb24gKi9cclxuICAgIC5hbmltYXRlIHtcclxuICAgICAgICBhbmltYXRpb246IHpvb20gMC42c1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyB6b29tIHtcclxuICAgICAgICBmcm9tIHt0cmFuc2Zvcm06IHNjYWxlKDApfSBcclxuICAgICAgICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOjIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MjUlO1xyXG4gICAgfVxyXG4gICAgLnRleHQtaWNvbnN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MyU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxJTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXRze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjElO1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5tb2RhbDIge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuc3RvcmUgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgfVxyXG4gICAgLmNsaWVudCBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuXHJcbiAgICB9XHJcbiAgICAuc3RvcmV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzAlO1xyXG4gICAgfVxyXG4udG9wLW5hdntcclxuICAgIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbn1cclxuXHJcbi50b3AtbmF2MntcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTsqL1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICAgICAgXHJcbn1cclxuLmRyb3Bkb3duIHVsIGxpIHVsIGxpe1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duIGE6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRyb3Bkb3duIGE6aG92ZXIgdWwgbGl7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIFxyXG5cclxufVxyXG5cclxuXHJcbi50b3AtbmF2MiBsaSBhe1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG59XHJcblxyXG4uZHJvcGRvd24gYXtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGNvbG9yOiMwNWEwODE7XHJcblxyXG4gICAgXHJcbn1cclxuLmlucHV0cyBzZWxlY3R7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxufVxyXG4uaW5wdXRzIHNlbGVjdDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuXHJcbi5zZWFyY2gtYm94e1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1idG57XHJcbiAgICBjb2xvcjojMDVhMDgxO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5zZWFyY2gtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogMCBub25lO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuc2VhcmNoLWJveDpob3ZlciA+IC5zZWFyY2gtdGV4dHtcclxuICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDZweDtcclxuICB9XHJcbiAgICBcclxuICAuc2VhcmNoLWJveDpob3ZlciA+IC5zZWFyY2gtYnRue1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIC5sb2dpbl9idG57XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/komercijalista/narucivanje-komercijalista/narucivanje-komercijalista.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/komercijalista/narucivanje-komercijalista/narucivanje-komercijalista.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/komercijalista\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n            <li class=\"dropdown\">\n                <a style=\"margin-left:0px;\">{{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                <ul class=\"top-nav2\">\n                    <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                    <li (click)=\"logout()\" style=\"margin-top:10%;\"><a style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li>\n                </ul>\n            </li>\n        </ul>\n        <!-- Meni sa leve strane -->\n        <ul class=\"nav navbar-nav side-nav\">\n                <li>\n                    <a routerLink=\"/komercijalista\"> POCETNA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/komercijalista/narucivanje-komercijalista\" >NARUCIVANJE PROIZVODA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/komercijalista/naruceno-komercijalista\">NARUCENI PROIZVODI</a>           \n                         </li>\n                \n                <li>\n                        <a routerLink=\"/komercijalista/prikaz-komercijalista\">PRIKAZ FAKTURE</a>\n                    </li>\n                    <li>\n                            <a routerLink=\"/komercijalista/automatski-popust-komercijalista\">AUTOMATSKI POPUST</a>\n                    </li>\n                \n            </ul>\n    </nav>\n\n  <div class=\"shopping-cart\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\"> </th>\n                            <th scope=\"col\"  class=\"text-center\">Proizvod</th>\n                            <th scope=\"col\"  class=\"text-center\">productID</th>\n                            <th scope=\"col\" class=\"text-center\">Kolicina</th>\n                            <th scope=\"col\"  class=\"text-center\">OrderID</th>\n                            <th> </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let product of inactiveOrders; let i = index\">\n                            <td><img class = \"small-image\" src=\"{{ product.imagePath }}\" /> </td>\n                            <td class=\"text-center align-middle\"> {{product.productName}}</td>\n                            <td class=\"text-center align-middle\">{{product.productID}}</td>\n                            <td class=\"text-center align-middle\"  id=\"input_{{product.id}}\"><input  id=\"input_{{i}}\" type=\"text\" class=\"text-center\" ></td>\n                            <td  class=\"text-center align-middle\">{{product.orderID}}</td>\n                            <td class=\"text-right align-middle\"><button (click)=\"orderProductManager($event)\" id = \"{{i}}\" class=\"btn btn-success btn-xs\"><span id = \"{{i}}\" class=\"glyphicon glyphicon-ok\"></span></button> </td>\n                        </tr>\n                        <tr>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                          </tr>\n\n                    </tbody>\n                </table>\n            </div>\n            \n            <form (submit)='sendOrder($event)'>\n            <div class=\"text-center \">\n                <select id=\"supplierID\" class=\"text-center login_btn\" style=\"height: 34px;\">\n                  <option *ngFor=\"let dobavljac of dobavljaci\"  value=\"{{dobavljac.id}}\">\n                      {{dobavljac.name}}\n                  </option>\n                </select> \n                <button type=\"submit\" class=\"btn login_btn\" style=\"width: 200px;\">Naruci</button>\n            </div>\n          </form>\n\n          \n</div>\n\n<!-- <div class=\"shopping-cart\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th class=\"text-center\">NARUCENI PROIZVODI</th>\n                        </tr>\n                    </thead>\n                    <thead>\n                        <tr>\n                            <th scope=\"col\"> </th>\n                            <th scope=\"col\"  class=\"text-center\">Proizvod</th>\n                            <th scope=\"col\"  class=\"text-center\">Dostupnost</th>\n                            <th scope=\"col\" class=\"text-center\">Garancija</th>\n                            <th scope=\"col\"  class=\"text-center\">Cena</th>\n                            <th> </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let product of orderedProducts\">\n                            <td><img class = \"small-image\"src=\"assets/6-video-camera-png-image.png\" /> </td>\n                            <td class=\"text-center\"> {{product.name}}</td>\n                            <td class=\"text-center\">{{product.quantity}}</td>\n                            <td class=\"text-center\">{{product.warranty}}</td>\n                            <td  class=\"text-center\">{{product.price}}RSD</td>\n                            <td ></td>\n                        </tr>\n                        <tr>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                          </tr>\n\n                    </tbody>\n                </table>\n            </div>\n          \n</div> -->\n\n\n</div>\n    \n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi svih dobavljača. Moguće je izvršiti izmenu cene željenog proizvoda.\n\n\nNaručivanje proizvoda\n\n* Kada radnik naruči proizvod, komercijalista će to videti i ti proizvodi će se pojaviti u tabeli. U narudzbenici svi proizvodi moraju biti od istog dobavljača. Komercijalista bira proizvode koje treba da naruči od dobavljača i njihov kvantitet. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n\n\n    "

/***/ }),

/***/ "./src/app/komercijalista/narucivanje-komercijalista/narucivanje-komercijalista.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/komercijalista/narucivanje-komercijalista/narucivanje-komercijalista.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NarucivanjeKomercijalistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NarucivanjeKomercijalistaComponent", function() { return NarucivanjeKomercijalistaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _komercijalista_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../komercijalista.component */ "./src/app/komercijalista/komercijalista.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NarucivanjeKomercijalistaComponent = /** @class */ (function () {
    function NarucivanjeKomercijalistaComponent(http, productService, komercijalista, router) {
        this.http = http;
        this.productService = productService;
        this.komercijalista = komercijalista;
        this.router = router;
        this.endpointURL = 'http://78.46.117.245:9000/product_orders/?status=inactive';
        this.endpointURL2 = 'http://78.46.117.245:9000/orders/';
        this.endpointURL3 = 'http://78.46.117.245:9000/logout';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.pozicija = localStorage.getItem('username');
        this.inactiveOrders = [];
        this.orders = [];
    }
    NarucivanjeKomercijalistaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.endpointURL, { headers: this.headers }).subscribe(function (result) {
            _this.inactiveOrders = result;
        });
        this.komercijalista.getSuppliers().subscribe(function (result) { _this.dobavljaci = result; });
    };
    NarucivanjeKomercijalistaComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL3, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    NarucivanjeKomercijalistaComponent.prototype.orderProductManager = function (event) {
        event.preventDefault();
        var id = event.srcElement.id;
        var id2 = parseInt(id);
        var quantity = document.getElementsByTagName("input")[id2].value;
        var orderID = this.inactiveOrders[id].orderID;
        var current = {
            "orderID": orderID,
            "quantity": quantity
        };
        this.orders.push(current);
        this.inactiveOrders.splice(id, 1);
        //const value = document.getElementById("input_"+id).getElementsByTagName("input")[0].value;
    };
    NarucivanjeKomercijalistaComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    NarucivanjeKomercijalistaComponent.prototype.sendOrder = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var supplierID = target.querySelector("#supplierID").value;
        this.http.post(this.endpointURL2, {
            "orders": this.orders,
            "supplierID": supplierID
        }, {
            headers: this.headers
        }).subscribe(function (response) {
            window.alert("Uspesno narucen proizvod!");
        }, function (err) { _this.handleError(err); });
    };
    NarucivanjeKomercijalistaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-narucivanje-komercijalista',
            template: __webpack_require__(/*! ./narucivanje-komercijalista.component.html */ "./src/app/komercijalista/narucivanje-komercijalista/narucivanje-komercijalista.component.html"),
            providers: [_komercijalista_component__WEBPACK_IMPORTED_MODULE_4__["KomercijalistaComponent"]],
            styles: [__webpack_require__(/*! ./narucivanje-komercijalista.component.css */ "./src/app/komercijalista/narucivanje-komercijalista/narucivanje-komercijalista.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _komercijalista_component__WEBPACK_IMPORTED_MODULE_4__["KomercijalistaComponent"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NarucivanjeKomercijalistaComponent);
    return NarucivanjeKomercijalistaComponent;
}());



/***/ }),

/***/ "./src/app/komercijalista/prikaz-komercijalista/prikaz-komercijalista.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/komercijalista/prikaz-komercijalista/prikaz-komercijalista.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n        margin-top:8vh;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    ul li:hover ul li{\r\n    display:block;\r\n}\r\n\r\n    ul li ul li a:hover{\r\n    color:black;\r\n}\r\n\r\n    .modal-content {\r\n    background-color: rgba(0,0,0,.8);\r\n    margin: 4% auto 15% auto;\r\n    border: 1px solid #888;\r\n    width: 40%; \r\n    padding-bottom: 30px;\r\n    align-content: center;\r\n}\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n    position: absolute;\r\n    right: 25px;\r\n    top: 0;\r\n    color: white;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n}\r\n\r\n    .close:hover,.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n    -webkit-animation: zoom 0.6s;\r\n            animation: zoom 0.6s\r\n}\r\n\r\n    @-webkit-keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    @keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    .card{\r\n    display:flex;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    margin-left:35%;\r\n}\r\n\r\n    .text-icons{\r\n    margin-left:3%;\r\n    margin-top:1%;\r\n}\r\n\r\n    .inputs{\r\n    margin-left:1%\r\n}\r\n\r\n    .modal {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n    .modal1 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .modal2 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .top-nav{\r\npadding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n    float: left;\r\n    position: fixed;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n    \r\n}\r\n\r\n    .dropdown ul li ul li{\r\ndisplay:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\ncursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\ndisplay:inline-block;\r\n\r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\nwhite-space: normal;\r\ntext-decoration: none;\r\n\r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\ncolor:#05a081;\r\n\r\n\r\n}\r\n\r\n    .inputs select{\r\nposition: relative;\r\nbackground-color:black;\r\ncolor:white;\r\nborder-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\nbackground-color: #05a081;\r\ncolor:black;\r\n}\r\n\r\n    .login_btn{\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 100px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    .search-box{\r\n        left: 20%;\r\n        position: absolute;\r\n        border-radius: 40%;\r\n        padding: 10px;\r\n        height: 40px;\r\n    }\r\n\r\n    .search-btn{\r\n        color:#05a081;\r\n        float: right;\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 50%;\r\n        background: #222;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: 0.4s;\r\n    }\r\n\r\n    .search-text {\r\n        font-size: 17px;\r\n        border: none;\r\n        background: none;\r\n        float: left;\r\n        padding: 0;\r\n        color: white;\r\n        transition: 0.4s;\r\n        line-height: 40px;\r\n        width: 0px;\r\n        \r\n      }\r\n\r\n    input[type=\"text\"]{\r\n        border-color: none;\r\n        box-shadow: none;\r\n        outline: 0 none;\r\n      }\r\n\r\n    .search-box:hover > .search-text{\r\n          width: 240px;\r\n          padding: 0 6px;\r\n      }\r\n\r\n    .search-box:hover > .search-btn{\r\n        background: white;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29tZXJjaWphbGlzdGEvcHJpa2F6LWtvbWVyY2lqYWxpc3RhL3ByaWthei1rb21lcmNpamFsaXN0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBGQUEwRjs7SUFFdEY7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBQ0Esd0VBQXdFOztJQUt4RTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCOztJQUdKLG1CQUFtQjs7SUFFbkI7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7SUFFQTs7Ozs7SUFLSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztJQUdBLG9CQUFvQjs7SUFFaEI7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUNBQW1DO1FBQ25DLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHVDQUF1QztJQUMzQzs7SUFFQTs7UUFFSSxhQUFhO1FBQ2Isb0NBQW9DO1FBQ3BDLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsdUNBQXVDO0lBQzNDOztJQUVBO1FBQ0ksY0FBYztRQUNkLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsV0FBVzs7SUFFZjs7SUFDSjtFQUNFLFNBQVM7QUFDWDs7SUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7SUFDQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztJQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7SUFDQTtJQUNFLFlBQVk7SUFD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Q1osY0FBYztNQUNsQjs7SUFFQTtRQUNFLGlCQUFpQjtJQUNyQiIsImZpbGUiOiJzcmMvYXBwL2tvbWVyY2lqYWxpc3RhL3ByaWthei1rb21lcmNpamFsaXN0YS9wcmlrYXota29tZXJjaWphbGlzdGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLypodG1sLCBib2R5LCAjd3JhcHBlciwgI3BhZ2Utd3JhcHBlciB7aGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO30qL1xyXG5cclxuXHJcblxyXG5cclxuICAgICN3cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNwYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIycHggMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjh2aDtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUb3AgTmF2aWdhdGlvbiAqL1xyXG5cclxuLnRvcC1uYXY+bGk+YSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnRvcC1uYXY+bGk+YTpob3ZlcixcclxuLnRvcC1uYXY+bGk+YTpmb2N1cyxcclxuLnRvcC1uYXY+Lm9wZW4+YSxcclxuLnRvcC1uYXY+Lm9wZW4+YTpob3ZlcixcclxuLnRvcC1uYXY+Lm9wZW4+YTpmb2N1cyB7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbn1cclxuXHJcblxyXG4vKiBTaWRlIE5hdmlnYXRpb24gKi9cclxuXHJcbiAgICAuc2lkZS1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgbGVmdDogMjI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjI1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwwLDAsMSkgc29saWQ7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzVBNkI3RDsqL1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPmEge1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2IGxpIGE6aG92ZXIsXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdj5saT51bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlLW5hdj5saT51bD5saT5hIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAzOHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICBcclxuICAgIH1cclxuLm5hdmJhciAubmF2ID4gbGkgPiBhOmhvdmVyID4gLmxhYmVsIHtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuLlNlYXJjaHtcclxuXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLlNlYXJjaCBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuU2VhcmNoIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5TZWFyY2ggYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwNWEwODE7XHJcbiAgfVxyXG5cclxudWwgbGkgdWwgbGl7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxudWwgbGk6aG92ZXIgdWwgbGl7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbnVsIGxpIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICBtYXJnaW46IDQlIGF1dG8gMTUlIGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDQwJTsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNsb3NlOmhvdmVyLC5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBBZGQgWm9vbSBBbmltYXRpb24gKi9cclxuLmFuaW1hdGUge1xyXG4gICAgYW5pbWF0aW9uOiB6b29tIDAuNnNcclxufVxyXG5Aa2V5ZnJhbWVzIHpvb20ge1xyXG4gICAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX0gXHJcbiAgICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cclxufVxyXG4uY2FyZHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIG1hcmdpbi10b3A6MiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MzUlO1xyXG59XHJcbi50ZXh0LWljb25ze1xyXG4gICAgbWFyZ2luLWxlZnQ6MyU7XHJcbiAgICBtYXJnaW4tdG9wOjElO1xyXG59XHJcblxyXG4uaW5wdXRze1xyXG4gICAgbWFyZ2luLWxlZnQ6MSVcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxufVxyXG4ubW9kYWwxIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgIFxyXG59XHJcbi5tb2RhbDIge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4udG9wLW5hdntcclxucGFkZGluZzogMCAxNXB4O1xyXG5cclxufVxyXG5cclxuLnRvcC1uYXYye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7Ki9cclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcclxuICAgIFxyXG59XHJcbi5kcm9wZG93biB1bCBsaSB1bCBsaXtcclxuZGlzcGxheTpub25lO1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duIGE6aG92ZXJ7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcGRvd24gYTpob3ZlciB1bCBsaXtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbi50b3AtbmF2MiBsaSBhe1xyXG53aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG4uZHJvcGRvd24gYXtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuY29sb3I6IzA1YTA4MTtcclxuXHJcblxyXG59XHJcblxyXG4uaW5wdXRzIHNlbGVjdHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5jb2xvcjp3aGl0ZTtcclxuLW1vei1ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbi13ZWJraXQtYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG5ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbn1cclxuLmlucHV0cyBzZWxlY3Q6aG92ZXJ7XHJcbmJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbmNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubG9naW5fYnRue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuODUpO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9naW5fYnRuOmhvdmVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWJveHtcclxuICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlYXJjaC1idG57XHJcbiAgICAgICAgY29sb3I6IzA1YTA4MTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiAwIG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAuc2VhcmNoLWJveDpob3ZlciA+IC5zZWFyY2gtdGV4dHtcclxuICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIC5zZWFyY2gtYm94OmhvdmVyID4gLnNlYXJjaC1idG57XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/komercijalista/prikaz-komercijalista/prikaz-komercijalista.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/komercijalista/prikaz-komercijalista/prikaz-komercijalista.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/komercijalista\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n            <li class=\"dropdown\">\n                <a style=\"margin-left:0px;\">{{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                <ul class=\"top-nav2\">\n                    <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                    <li (click)=\"logout()\" style=\"margin-top:10%;\"><a style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li>\n                </ul>\n            </li>\n        </ul>\n        <!-- Meni sa leve strane -->\n        <ul class=\"nav navbar-nav side-nav\">\n                <li>\n                    <a routerLink=\"/komercijalista\"> POCETNA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/komercijalista/narucivanje-komercijalista\" >NARUCIVANJE PROIZVODA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/komercijalista/naruceno-komercijalista\">NARUCENI PROIZVODI</a>           \n                         </li>\n                \n                <li>\n                        <a routerLink=\"/komercijalista/prikaz-komercijalista\">PRIKAZ FAKTURE</a>\n                    </li>\n                    <li>\n                            <a routerLink=\"/komercijalista/automatski-popust-komercijalista\">AUTOMATSKI POPUST</a>\n                    </li>\n               \n            </ul>\n    </nav>\n\n    <div id=\"page-wrapper\">\n            <div class=\"container-fluid\">\n                <!-- Page Heading -->\n                <div class=\"row\" id=\"main\" >\n                    <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                      \n                            <div class=\"col-md-12\">\n                            <h4>Prikaz fakture</h4>\n                            <div class=\"table-responsive\">\n                    \n                                    \n                                  <table id=\"mytable\" class=\"table table-bordred table-striped\">\n                                       \n                                       <thead>\n                                        <th class=\"text-center\">Naruceni proizvodi</th>\n                                        <th class=\"text-center\">Dobavljac</th>\n                                         <th class=\"text-center\">Sifra fakture</th>\n                                           <th class=\"text-center\">PDF</th>\n                                       </thead>\n                        <tbody>\n                        \n                        <tr *ngFor = \"let invoice of invoiceService.invoices\">\n                        <td class=\"text-center\">{{invoice.orderedProducts}}</td>\n                        <td class=\"text-center\">{{invoice.supplier}}</td>\n                        <td class=\"text-center\">{{invoice.id}}</td>\n                        <td class=\"text-center\"><a download=\"file.pdf\" ><button (click)= \"openPDF($event)\" id=\"{{invoice.id}}\" class=\"btn btn-danger btn-xs\"><i id=\"{{invoice.id}}\" class=\"far fa-file-pdf\"></i></button></a></td>\n                        </tr>\n\n                        \n                        \n                    \n                        </tbody>\n                            \n                    </table>\n                    </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    \n    \n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi svih dobavljača. Moguće je izvršiti izmenu cene željenog proizvoda.\n\n\nNaručivanje proizvoda\n\n* Kada radnik naruči proizvod, komercijalista će to videti i ti proizvodi će se pojaviti u tabeli. U narudzbenici svi proizvodi moraju biti od istog dobavljača. Komercijalista bira proizvode koje treba da naruči od dobavljača i njihov kvantitet. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/komercijalista/prikaz-komercijalista/prikaz-komercijalista.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/komercijalista/prikaz-komercijalista/prikaz-komercijalista.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PrikazKomercijalistaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrikazKomercijalistaComponent", function() { return PrikazKomercijalistaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_invoices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/invoices.service */ "./src/app/services/invoices.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PrikazKomercijalistaComponent = /** @class */ (function () {
    function PrikazKomercijalistaComponent(invoiceService, http, router) {
        this.invoiceService = invoiceService;
        this.http = http;
        this.router = router;
        this.pozicija = localStorage.getItem('username');
        this.endpointURL = 'http://78.46.117.245:9000/logout';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json;charset=UTF-8',
            'token': localStorage.getItem("token")
        });
    }
    PrikazKomercijalistaComponent.prototype.ngOnInit = function () {
        this.invoiceService.getAllInvoices();
    };
    PrikazKomercijalistaComponent.prototype.openPDF = function (event) {
        event.preventDefault();
        var id = event.srcElement.id;
        this.invoiceService.getPDF(id);
    };
    PrikazKomercijalistaComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    PrikazKomercijalistaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prikaz-komercijalista',
            template: __webpack_require__(/*! ./prikaz-komercijalista.component.html */ "./src/app/komercijalista/prikaz-komercijalista/prikaz-komercijalista.component.html"),
            styles: [__webpack_require__(/*! ./prikaz-komercijalista.component.css */ "./src/app/komercijalista/prikaz-komercijalista/prikaz-komercijalista.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_invoices_service__WEBPACK_IMPORTED_MODULE_2__["InvoicesService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PrikazKomercijalistaComponent);
    return PrikazKomercijalistaComponent;
}());



/***/ }),

/***/ "./src/app/korpa/korpa.component.css":
/*!*******************************************!*\
  !*** ./src/app/korpa/korpa.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    .shopping-cart{\r\n      margin-top: 10vh;\r\n      margin-left:3%;\r\n      margin-right: 3%;\r\n      \r\n  }\r\n\r\n    .small-image{\r\n      height: 50px;\r\n      width:50px;\r\n  }\r\n\r\n    .login_btn{\r\n    \r\n    margin-left: 30%;\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 200px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    ul li ul li{\r\n        display:none;\r\n    }\r\n\r\n    ul li:hover ul li{\r\n        display:block;\r\n    }\r\n\r\n    ul li ul li a:hover{\r\n        color:black;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .modal-content {\r\n        background-color: rgba(0,0,0,.8);\r\n        margin: 4% auto 15% auto;\r\n        border: 1px solid #888;\r\n        width: 40%; \r\n        padding-bottom: 30px;\r\n        align-content: center;\r\n    }\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n        position: absolute;\r\n        right: 25px;\r\n        top: 0;\r\n        color: white;\r\n        font-size: 35px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .close:hover,.close:focus {\r\n        color: red;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n        -webkit-animation: zoom 0.6s;\r\n                animation: zoom 0.6s\r\n    }\r\n\r\n    @-webkit-keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    @keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    .card{\r\n        display:flex;\r\n        margin-top:2%;\r\n        margin-bottom:2%;\r\n        margin-left:35%;\r\n    }\r\n\r\n    .text-icons{\r\n        margin-left:3%;\r\n        margin-top:1%;\r\n    }\r\n\r\n    .inputs{\r\n        margin-left:1%\r\n    }\r\n\r\n    .modal {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n    }\r\n\r\n    .modal1 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .modal2 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .top-nav{\r\n    padding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n        float: left;\r\n        position: fixed;\r\n        margin-top: 0;\r\n        /*border: 1px solid rgba(0,0,0,.15);*/\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n        background-color: #fff;\r\n        box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n        \r\n}\r\n\r\n    .dropdown ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\n    display:inline-block;\r\n    \r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\n    white-space: normal;\r\n    text-decoration: none;\r\n    \r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\n    color:#05a081;\r\n\r\n    \r\n}\r\n\r\n    .inputs select{\r\n    position: relative;\r\n    background-color:black;\r\n    color:white;\r\n   border-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\n    background-color: #05a081;\r\n    color:black;\r\n}\r\n\r\n    .search-box{\r\n    left: 20%;\r\n    position: absolute;\r\n    border-radius: 40%;\r\n    padding: 10px;\r\n    height: 40px;\r\n}\r\n\r\n    .search-btn{\r\n    color:#05a081;\r\n    float: right;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background: #222;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.4s;\r\n}\r\n\r\n    .search-text {\r\n    font-size: 17px;\r\n    border: none;\r\n    background: none;\r\n    float: left;\r\n    padding: 0;\r\n    color: white;\r\n    transition: 0.4s;\r\n    line-height: 40px;\r\n    width: 0px;\r\n    \r\n  }\r\n\r\n    input[type=\"text\"]{\r\n    border-color: none;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n  }\r\n\r\n    .search-box:hover > .search-text{\r\n      width: 240px;\r\n      padding: 0 6px;\r\n  }\r\n\r\n    .search-box:hover > .search-btn{\r\n    background: white;\r\n}\r\n\r\n    .client a{\r\n    text-decoration: none;\r\n    color:white;\r\n\r\n}\r\n\r\n    \r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva29ycGEva29ycGEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBR0osbUJBQW1COztJQUVuQjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztJQUVBOzs7OztJQUtJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0lBR0Esb0JBQW9COztJQUVoQjtRQUNJLGVBQWU7UUFDZixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQ0FBbUM7UUFDbkMsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osdUNBQXVDO0lBQzNDOztJQUVBOztRQUVJLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix1Q0FBdUM7SUFDM0M7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixXQUFXOztJQUVmOztJQUNKO0VBQ0UsU0FBUztBQUNYOztJQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztJQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztJQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lB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a0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0lBR0E7TUFDSSxZQUFZO01BQ1osY0FBYztFQUNsQjs7SUFFQTtJQUNFLGlCQUFpQjtBQUNyQjs7SUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXOztBQUVmIiwiZmlsZSI6InNyYy9hcHAva29ycGEva29ycGEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLypodG1sLCBib2R5LCAjd3JhcHBlciwgI3BhZ2Utd3JhcHBlciB7aGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO30qL1xyXG5cclxuXHJcblxyXG5cclxuICAgICN3cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNwYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIycHggMTBweDtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUb3AgTmF2aWdhdGlvbiAqL1xyXG5cclxuLnRvcC1uYXY+bGk+YSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnRvcC1uYXY+bGk+YTpob3ZlcixcclxuLnRvcC1uYXY+bGk+YTpmb2N1cyxcclxuLnRvcC1uYXY+Lm9wZW4+YSxcclxuLnRvcC1uYXY+Lm9wZW4+YTpob3ZlcixcclxuLnRvcC1uYXY+Lm9wZW4+YTpmb2N1cyB7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbn1cclxuXHJcblxyXG4vKiBTaWRlIE5hdmlnYXRpb24gKi9cclxuXHJcbiAgICAuc2lkZS1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgbGVmdDogMjI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjI1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwwLDAsMSkgc29saWQ7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzVBNkI3RDsqL1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPmEge1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2IGxpIGE6aG92ZXIsXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdj5saT51bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlLW5hdj5saT51bD5saT5hIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAzOHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICBcclxuICAgIH1cclxuLm5hdmJhciAubmF2ID4gbGkgPiBhOmhvdmVyID4gLmxhYmVsIHtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2h7XHJcblxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2ggaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuU2VhcmNoIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDVhMDgxO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIC5zaG9wcGluZy1jYXJ0e1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHZoO1xyXG4gICAgICBtYXJnaW4tbGVmdDozJTtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuXHJcbiAgLnNtYWxsLWltYWdle1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHdpZHRoOjUwcHg7XHJcbiAgfVxyXG4gIC5sb2dpbl9idG57XHJcbiAgICBcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44NSk7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9idG46aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG4gICAgfVxyXG4gICAgdWwgbGkgdWwgbGl7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgdWwgbGk6aG92ZXIgdWwgbGl7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuICAgIHVsIGxpIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxuICAgICAgICBtYXJnaW46IDQlIGF1dG8gMTUlIGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgICAgICB3aWR0aDogNDAlOyBcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbiAgICAuY2xvc2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIC5jbG9zZTpob3ZlciwuY2xvc2U6Zm9jdXMge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBBZGQgWm9vbSBBbmltYXRpb24gKi9cclxuICAgIC5hbmltYXRlIHtcclxuICAgICAgICBhbmltYXRpb246IHpvb20gMC42c1xyXG4gICAgfVxyXG4gICAgQGtleWZyYW1lcyB6b29tIHtcclxuICAgICAgICBmcm9tIHt0cmFuc2Zvcm06IHNjYWxlKDApfSBcclxuICAgICAgICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cclxuICAgIH1cclxuICAgIC5jYXJke1xyXG4gICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBtYXJnaW4tdG9wOjIlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MiU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzUlO1xyXG4gICAgfVxyXG4gICAgLnRleHQtaWNvbnN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MyU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxJTtcclxuICAgIH1cclxuXHJcbiAgICAuaW5wdXRze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjElXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tb2RhbCB7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICB9XHJcbiAgICAubW9kYWwxIHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5tb2RhbDIge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbi50b3AtbmF2e1xyXG4gICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxufVxyXG5cclxuLnRvcC1uYXYye1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgIC8qYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTUpOyovXHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcclxuICAgICAgICBcclxufVxyXG4uZHJvcGRvd24gdWwgbGkgdWwgbGl7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24gYTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcGRvd24gYTpob3ZlciB1bCBsaXtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuLnRvcC1uYXYyIGxpIGF7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgXHJcbn1cclxuXHJcbi5kcm9wZG93biBhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgY29sb3I6IzA1YTA4MTtcclxuXHJcbiAgICBcclxufVxyXG5cclxuLmlucHV0cyBzZWxlY3R7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbiAgIGJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxufVxyXG4uaW5wdXRzIHNlbGVjdDpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuXHJcbi5zZWFyY2gtYm94e1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxufVxyXG5cclxuLnNlYXJjaC1idG57XHJcbiAgICBjb2xvcjojMDVhMDgxO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbn1cclxuXHJcbi5zZWFyY2gtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgb3V0bGluZTogMCBub25lO1xyXG4gIH1cclxuICBcclxuICBcclxuICAuc2VhcmNoLWJveDpob3ZlciA+IC5zZWFyY2gtdGV4dHtcclxuICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICBwYWRkaW5nOiAwIDZweDtcclxuICB9XHJcbiAgICBcclxuICAuc2VhcmNoLWJveDpob3ZlciA+IC5zZWFyY2gtYnRue1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5jbGllbnQgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG5cclxufVxyXG5cclxuICAgIFxyXG5cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/korpa/korpa.component.html":
/*!********************************************!*\
  !*** ./src/app/korpa/korpa.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/admin\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n                <li class=\"dropdown\" style=\"margin-right: 15px;\">\n                    <a > {{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                    <ul class=\"top-nav2\">\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/korpa\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:5px;\" class=\"fa fa-shopping-cart\"></i>Korpa</a></li>\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/stats\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:8px;\" class=\"fa fa-bar-chart-o\"></i>Statistika</a></li>\n\n                        <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                        <li (click)=\"logout()\"  style=\"margin-top:10%;\"><a  style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li></ul>\n                </li>\n            </ul>\n<!-- Meni sa leve strane -->\n    <ul class=\"nav navbar-nav side-nav\">\n        <li>\n            <a routerLink=\"/admin\"> POCETNA</a>\n        </li>\n        <li>\n            <a routerLink=\"/spisak\">SPISAK RADNIKA</a>\n        </li>\n        <li>\n                <a routerLink=\"/narucivanje\" >NARUCIVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a routerLink=\"/naruceno\">NARUCENI PROIZVODI</a>           \n        </li>\n        <li>\n                <a onclick=\"document.getElementById('exchange').style.display='block'\" style=\"cursor:pointer;\">ZAMENA PROIZVODA</a>           \n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('registering').style.display='block'\"  style=\"cursor:pointer;\">REGISTRACIJA RADNIKA</a>\n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('adding').style.display='block'\"  style=\"cursor:pointer;\">DODAVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a onclick=\"document.getElementById('discount').style.display='block'\"  style=\"cursor:pointer;\">ODREDI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/automatski-popust\">AUTOMATSKI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/racuni\">PRIKAZ RACUNA</a>\n        </li>\n        <li>\n                <a routerLink=\"/prikaz\">PRIKAZ FAKTURE</a>\n            </li>\n        \n    </ul>\n</nav>\n    \n   <div class=\"shopping-cart\">\n      <div class=\"row\">\n          <div class=\"col-12\">\n              <div class=\"table-responsive\">\n                  <table class=\"table table-striped\">\n                      <thead>\n                          <tr>\n                              <th scope=\"col\"> </th>\n                              <th scope=\"col\">Proizvod</th>\n                              <th scope=\"col\">Dostupnost</th>\n                              <th scope=\"col\" class=\"text-center\">Kolicina</th>\n                              <th scope=\"col\" class=\"text-right\">Cena</th>\n                              <th> </th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr *ngFor=\"let product of info; let i=index;\">\n                              <td><img class = \"small-image\" src=\"{{ product.imagePath }}\" /> </td>\n                              <td> {{product.name}}</td>\n                              <td>{{product.quantity}}</td>\n                              <td><input class=\"form-control quantityToSend\" name=\"quantityToSend\" id = \"qprice+{{product.id}}\" value=\"1\" type=\"number\"/></td>\n                              <td class=\"text-right\">{{product.price}}RSD</td>\n                              <td  class=\"text-right\"><button (click)=\"deleteCartProduct($event)\" id = \"{{i}}\" class=\"btn btn-danger btn-xs\"><span id = \"{{i}}\" class=\"glyphicon glyphicon-trash\"></span></button> </td>\n                          </tr>\n                         \n  \n                      </tbody>\n                  </table>\n              </div>\n            </div>   \n            <div *ngIf=\"showVar\">\n                  <input type=\"submit\" (click)= \"checkOut($event)\" value=\"Izvrši kupovinu\" class=\"btn float-right login_btn\"  >\n               </div>\n              \n      </div>\n  </div>\n  <div  id=\"adding\" class=\"modal justify-content-center\" >\n        <form [formGroup]=\"uploadForm\"  (submit)='addProduct($event)' class=\"modal-content animate justify-content-center\" >\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('adding').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Dodavanje proizvoda</h1>\n            </div>   \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"producer\" placeholder='Proizvodjac' >\n                                <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                              </select>                    </div>\n            </div>    \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"productType\" placeholder='Vrsta proizvoda'>\n                                <option   *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                              \n                              </select>                    </div>\n            </div>        \n        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"quantity\" type=\"text\" class=\"form-control\" placeholder=\"Kolicina\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"productURL\" type=\"text\" class=\"form-control\" placeholder=\"Website\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"warranty\" type=\"text\" class=\"form-control\" placeholder=\"Garancija\" required>\n                    </div>\n        </div>                \n        <div class=\"card\" style=\"text-align:center;\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n            <input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Naziv prozivoda...\" required>\n                </div>\n        </div>\n        <div class=\"card\" style=\"align-content:center;\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n            <textarea id=\"properties\" rows=\"4\" cols=\"50\" class=\"form-control\" name=\"description\" placeholder=\"Uneti opis proizvoda...\" required></textarea>                   \n         </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-images\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"image\" type=\"file\" class=\"form-control\" >\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-dollar-sign\" style=\"color:white; margin-right: 5%;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"price\" type=\"number\" class=\"form-control\" placeholder=\"Cena proizvoda\" required>\n                    </div>\n        </div>\n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <input type=\"submit\" value=\"Dodaj\" class=\"btn float-right login_btn\"  >\n          </div>\n                            \n          </form>\n</div>\n\n<div id=\"registering\" class=\"modal1\">\n        <form (submit)='registerUser($event)' class=\"modal-content animate\" action=\"/action_page.php\">\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('registering').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Registracija radnika</h1>\n            </div>   \n                        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Korisnicko ime...\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Ime\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>         \n                               </div>\n                <div class=\"inputs\">\n                        <input id=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Prezime\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-key\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Sifra...\" required>\n\n                    </div>\n        </div>\n\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">email</i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\" required>\n\n                    </div>\n        </div>\n\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                    <select id=\"role\" placeholder='Pozicija'>\n                            <option value=\"2\">ADMIN</option>\n                            <option value=\"0\">WORKER</option>\n                            <option value=\"1\">MANAGER</option>\n                            <option value=\"3\">OWNER</option>\n                          </select>                    </div>\n        </div>\n\n       \n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <input id=\"registerButton\" type=\"submit\" value=\"Registracija\" class=\"btn float-right login_btn\" routerLink=\"/admin\" >\n          </div>\n                            \n          </form>\n</div>\n\n\n\n<div id=\"discount\" class=\"modal2\">\n    <form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('discount').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n          <h1 style=\"text-align:center;color:white\">Odredjivanje popusta</h1>\n        </div>   \n                    \n    <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n            <div class=\"text-icons\">         \n        <i class=\"fas fa-industry\" style=\"color:white;\"></i>\n            </div>\n            <div class=\"inputs\">\n                <div class=\"inputs\">\n                    <select id=\"producerDiscount\" placeholder='Proizvodjac' >\n                            <option disabled selected value> -- select an option -- </option>\n                            <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                          </select> \n                </div>                    \n            </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n            <div class=\"text-icons\">         \n                            <i class=\"fas fa-keyboard\" style=\"color:white\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <select id=\"productTypeDiscount\" placeholder='Vrsta proizvoda'>\n                            <option disabled selected value> -- select an option -- </option>\n                            <option *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                          </select>\n            </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:2%;margin-left:28.5%;\">     \n            <div class=\"text-icons\">         \n                    <i class=\"fas fa-percent\" style=\"color:white\"></i>\n                    \n            </div>\n            <div class=\"inputs\">\n                    <input id=\"procenat\" type=\"number\" class=\"form-control\" style=\"text-align: center; width: 150px\" placeholder=\"Iznos procenta\" required min=\"0\" max=\"100\" oninvalid=\"this.setCustomValidity('Vrednost manje ili jednaka 100')\" oninput=\"this.setCustomValidity('')\"> \n            </div>\n    </div>\n    <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%;\">\n            <input type=\"submit\" style=\"text-align:center;\" value=\"Izvrsi\" class=\"btn login_btn justify-content-center\">\n            \n      </div>\n      <div style=\"margin-top:2%;margin-left:24;\">\n            <p style=\"text-align:center; color: white\">Status: </p> \n            <p style=\"text-align:center; color: lime\">{{ this.response }}</p>\n      </div>\n                        \n      </form>\n</div>\n\n<div id=\"exchange\" class=\"modal2\">\n        <form (submit)='exchangeProduct($event)' class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('exchange').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Zameni proizvod</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%;\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <a>Sifra racuna proizvoda od kupca    </a>\n                            <select id=\"givingID\" class=\"text-center\" style=\"margin-bottom:10%; margin-left: 5%; width: 30%;\">\n                                    <option  class=\"text-center\" *ngFor=\"let bill of billsService.bills\" value=\"{{ bill.id }}\">{{ bill.id }}</option>\n                            </select> <br>\n                            <div class=\"inputs\">\n                                <input id=\"givinProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra proizvoda koji se menja\" required>\n                            </div><br><br>\n                            <div class=\"inputs\">\n                                <input id=\"takingProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra zeljenog proizvoda\" required>\n                            </div>\n                        </div>\n\n                                  </div>\n            </div>\n           \n            <div class=\"form-group\" style=\"margin-top:2%; \">\n                    <input type=\"submit\"  value=\"Zameni\" class=\"btn float-right login_btn\" style=\"width:40%;\">\n              </div>\n                           \n              </form>\n    </div>\n\n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi koji su trenutno dostupni u prodavnici. Moguće je promeniti bilo koji atribut postojaćeg proizvoda, moguće je ukloniti proizvod, a takođe i izvršiti popust unošenjem odgovarajućeg iznosa procenta. Na crvenu strelicu se proizvod ubacuje u korpu. \n\n\nSpisak radnika\n\n* Omogućen je uvid u spisak svih radnika koji rade u magacinu Techtradea kao i njihove informacije. Moguće je ukloniti korisnika.\n\n\nNaručivanje proizvoda\n\n* Na početku su izlistani svi proizvodi svih dobavljača. Prilikom narudžbenice, moguće je u korpu dodati proizvode pritiskom na crvenu strelicu. U korpi željeni kvantitet unosi sam korisnik. Moguće je obrisati sadržaj iz korpe. Pritiskom na dugme za kupovinu potvrđuje se porudzbina. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nZameni proizvod\n\n* Izvršiti odabir šifre računa;\n* Izvršiti odabir šifre proizvoda na računu;\n* Uneti šifru željenog proizvoda za zamenu;\n* Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka.\n\n\nRegistracija radnika\n\n* Omogućava unošenje novih autorizovanih korisnika. Unošenjem svih potrebnih podataka, kao i podatka koji autorizovani korisnik je u pitanju, biće izbačena odgovarajuća poruka.\n\n\nDodavanje proizvoda\n\n* Moguće je dodati nov proizvod. U slučaju da proizvod već postoji, biće izbačena odgovarajuća poruka.\n\n\nOdredi popust\n\n* Odabrati proizvođača;\n* Odabrati željeni proizvod;\n* Uneti iznos procenta;\n* Pritiskom na dugme 'Izvrši', biće izbačena odgovarajuća poruka.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\nPrikaz računa\n\n* Omogućen je uvid u tabelu sa računima;\n* Moguće je izvesti račun koji je generisan u PDF formi.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/korpa/korpa.component.ts":
/*!******************************************!*\
  !*** ./src/app/korpa/korpa.component.ts ***!
  \******************************************/
/*! exports provided: KorpaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KorpaComponent", function() { return KorpaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_bills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bills.service */ "./src/app/services/bills.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_producers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/producers.service */ "./src/app/services/producers.service.ts");
/* harmony import */ var _services_product_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/product-type.service */ "./src/app/services/product-type.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_delete_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/delete.service */ "./src/app/services/delete.service.ts");
/* harmony import */ var _services_single_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/single-service.service */ "./src/app/services/single-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/exchange-product.service */ "./src/app/services/exchange-product.service.ts");
















var KorpaComponent = /** @class */ (function () {
    function KorpaComponent(billsService, userService, registerService, productService, producersService, productTypeService, searchService, http, formBuilder, deleteService, single, router, exchangeProductService) {
        this.billsService = billsService;
        this.userService = userService;
        this.registerService = registerService;
        this.productService = productService;
        this.producersService = producersService;
        this.productTypeService = productTypeService;
        this.searchService = searchService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.deleteService = deleteService;
        this.single = single;
        this.router = router;
        this.exchangeProductService = exchangeProductService;
        this.korpa = [];
        this.pozicija = localStorage.getItem('username');
        this.rola = localStorage.getItem("role");
        this.endpointURL = 'http://78.46.117.245:9000/';
        this.endpointURL3 = 'http://78.46.117.245:9000';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.info = [];
        this.cartSend = [];
        this.showVar = false;
        this.checkingQuantity = true;
        this.userFile = File;
        this.uploadForm = _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"];
    }
    KorpaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.producersService.getAllProducers();
        this.productTypeService.getAllProductTypes();
        this.billsService.getAllBills();
        this.uploadForm = this.formBuilder.group({
            image: [''],
            name: [''],
            price: [''],
            producer: [''],
            productType: [''],
            productURL: [''],
            properties: [''],
            quantity: [''],
            warranty: [''],
            vendorPrice: ['']
        });
        this.korpa = JSON.parse(localStorage.getItem("cart"));
        this.http.get(this.endpointURL + 'products/', { headers: this.headers })
            .subscribe(function (result) {
            _this.product2 = result;
            var l = _this.product2.length;
            for (var _i = 0, _a = _this.korpa; _i < _a.length; _i++) {
                var idk = _a[_i];
                for (var i = 0; i < l; i++) {
                    if (idk == _this.product2[i].id) {
                        var current = {
                            id2: '' + i + '',
                            id: _this.product2[i].id,
                            price: _this.product2[i].price,
                            quantity: _this.product2[i].quantity,
                            name: _this.product2[i].name
                        };
                        _this.info.push(current);
                    }
                }
            }
            //localStorage.setItem("currentCart", JSON.stringify(this.info));
        });
        if (this.rola == "ADMIN" || this.rola == "OWNER") {
            this.routerVar = "admin";
        }
        if (this.rola == "WORKER") {
            this.routerVar = "radnik";
        }
        var that = this;
        setTimeout(function () {
            if (localStorage.getItem("cart") === null || that.info.length <= 0) {
                that.showVar = false;
            }
            else {
                that.showVar = true;
            }
        }, 700);
    };
    KorpaComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL3, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    KorpaComponent.prototype.deleteCartProduct = function (event) {
        var id = event.srcElement.id;
        this.info.splice(id, 1);
        this.korpa.splice(id, 1);
        localStorage.setItem("cart", JSON.stringify(this.korpa));
        window.alert("Proizvod je uklonjen iz korpe!");
        var that = this;
        setTimeout(function () {
            if (localStorage.getItem("cart") === null || that.info.length <= 0) {
                that.showVar = false;
            }
            else {
                that.showVar = true;
            }
        }, 150);
    };
    KorpaComponent.prototype.checkOut = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var l = this.info.length;
        for (var i = 0; i < l; i++) {
            var id = this.info[i].id;
            var id2 = "qprice" + id;
            //ovde ne znam kako da resim
            var quantity = document.getElementsByTagName('input')[i].value;
            //var q = quantity.
            //console.log(quantity, "Kolicina")
            if (quantity <= this.info[i].quantity && quantity != "0") {
                var current = {
                    productID: id,
                    quantity: quantity
                };
                this.cartSend.push(current);
            }
            else {
                this.checkingQuantity = false;
            }
        }
        //localStorage.setItem('cartSend', JSON.stringify(this.cartSend));
        if (this.checkingQuantity) {
            this.http.post(this.endpointURL + 'buy', this.cartSend, { headers: this.headers })
                .subscribe(function (response) {
                _this.response = response,
                    _this.sumPrice = _this.response.price;
                localStorage.removeItem('cart');
                window.alert("Uspešna kupovina!");
                _this.info = [];
                _this.router.navigate([_this.routerVar]);
            });
        }
        else {
            this.cartSend = [];
            this.checkingQuantity = true;
            window.alert("Uneli ste veci broj proizvoda nego sto je dostupno ili je proizvod nedostupan!");
        }
    };
    KorpaComponent.prototype.onSelectFile = function (event) {
        var selectFile = event.target.files[0];
        this.userFile = selectFile;
    };
    KorpaComponent.prototype.addProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var image = target.querySelector('#image');
        /* if(image.files.length > 0){
          const file = image.files[0];
          this.uploadForm.get('file').setValue(file);
          this.slika = this.uploadForm.get('file').value;
        }  */
        // var formData = new FormData();
        //formData.append('image', image);
        var name = target.querySelector('#name').value;
        this.uploadForm.get('name').setValue(name);
        var price = target.querySelector('#price').value;
        this.uploadForm.get('price').setValue(price);
        var producer = target.querySelector('#producer').value;
        this.uploadForm.get('producer').setValue(producer);
        var productType = target.querySelector('#productType').value;
        this.uploadForm.get('productType').setValue(productType);
        var productURL = target.querySelector('#productURL').value;
        this.uploadForm.get('productURL').setValue(productURL);
        var properties = target.querySelector('#properties').value;
        this.uploadForm.get('properties').setValue(properties);
        var quantity = target.querySelector('#quantity').value;
        this.uploadForm.get('quantity').setValue(quantity);
        var warranty = target.querySelector('#warranty').value;
        this.uploadForm.get('warranty').setValue(warranty);
        var vendorPrice = target.querySelector('#vendorPrice').value;
        this.uploadForm.get('vendorPrice').setValue(vendorPrice);
        var data = JSON.stringify(this.uploadForm.value);
        var formData = new FormData();
        //formData.append("productData", data);
        formData.append("image", this.userFile);
        // formData.append("image", this.uploadForm.get('file').value);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("producer", producer);
        formData.append("productType", productType);
        formData.append("productURL", productURL);
        formData.append("properties", properties);
        formData.append("quantity", quantity);
        formData.append("warranty", warranty);
        formData.append("vendorPrice", vendorPrice);
        /*console.log( formData  image, name, price, producer, productType, productURL, properties, quantity, warranty );*/
        /*this.registerService.sendProductDetails(image, name, price, producer, productType, productURL, properties, quantity, warranty ).subscribe();*/
        this.registerService.sendProductDetails(formData).subscribe(function (response) {
            window.alert("Proizvod je uspešno dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 200);
    };
    KorpaComponent.prototype.registerUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        var firstName = target.querySelector('#firstName').value;
        var lastName = target.querySelector('#lastName').value;
        var email = target.querySelector('#email').value;
        var role = target.querySelector('#role').value;
        this.registerService.sendUserDetails(firstName, lastName, username, email, password, role).subscribe(function (response) { window.alert("Uspešna registracija korisnika!"); }, function (err) { _this.handleError(err); });
        //)
        /*
        console.log(username,password)
        console.log(error);
        console.log(localStorage.getItem("token"));
        */
    };
    KorpaComponent.prototype.addDiscount = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var producer = target.querySelector('#producerDiscount').value;
        var productType = target.querySelector('#productTypeDiscount').value;
        var discountCoefficient = target.querySelector("#procenat").value;
        this.productService.discountProduct(producer, productType, discountCoefficient).subscribe(function (response) {
            window.alert("Popust je dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 150);
        //zbog unosa u bazu i responsa stavljamo timeout da bi ucitao nove cene a ne stare
    };
    KorpaComponent.prototype.exchangeProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var billID = target.querySelector('#givingID').value;
        var givinProductID = target.querySelector('#givinProductID').value;
        var takingProductID = target.querySelector('#takingProductID').value;
        this.exchangeProductService.returnProduct(billID, givinProductID, takingProductID).subscribe(function (data) {
            window.alert("Novac koji se vraca je: " + data.moneyToReturn + " RSD");
        }, function (err) { _this.handleError(err); /*console.log(err.error.message);console.log(err.status);*/ });
    };
    KorpaComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    KorpaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-korpa',
            template: __webpack_require__(/*! ./korpa.component.html */ "./src/app/korpa/korpa.component.html"),
            styles: [__webpack_require__(/*! ./korpa.component.css */ "./src/app/korpa/korpa.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bills_service__WEBPACK_IMPORTED_MODULE_3__["BillsService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"],
            _services_producers_service__WEBPACK_IMPORTED_MODULE_7__["ProducersService"],
            _services_product_type_service__WEBPACK_IMPORTED_MODULE_8__["ProductTypeService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            _services_delete_service__WEBPACK_IMPORTED_MODULE_11__["DeleteService"],
            _services_single_service_service__WEBPACK_IMPORTED_MODULE_12__["SingleServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
            _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__["ExchangeProductService"]])
    ], KorpaComponent);
    return KorpaComponent;
}());



/***/ }),

/***/ "./src/app/login.guard.ts":
/*!********************************!*\
  !*** ./src/app/login.guard.ts ***!
  \********************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");



var LoginGuard = /** @class */ (function () {
    function LoginGuard(login) {
        this.login = login;
    }
    /* canActivate(): boolean{
  
      if(localStorage.getItem("loginRole")== localStorage.getItem("role") && this.login.isAuthenticated() && this.login.isHavingRole() ){
        console.log("LoginGuard true")
  
        return true;
      }
      console.log("LoginGuard false")
      return false;
    } */
    LoginGuard.prototype.canActivate = function (next, state) {
        if (!this.login.isAuthenticated()) {
            localStorage.setItem("authRedirect", state.url);
            return false;
        }
        return true;
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/naruceno/naruceno.component.css":
/*!*************************************************!*\
  !*** ./src/app/naruceno/naruceno.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n        margin-top:8vh;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    ul li:hover ul li{\r\n    display:block;\r\n}\r\n\r\n    ul li ul li a:hover{\r\n    color:black;\r\n}\r\n\r\n    .modal-content {\r\n    background-color: rgba(0,0,0,.8);\r\n    margin: 4% auto 15% auto;\r\n    border: 1px solid #888;\r\n    width: 40%; \r\n    padding-bottom: 30px;\r\n    align-content: center;\r\n}\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n    position: absolute;\r\n    right: 25px;\r\n    top: 0;\r\n    color: white;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n}\r\n\r\n    .close:hover,.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n    -webkit-animation: zoom 0.6s;\r\n            animation: zoom 0.6s\r\n}\r\n\r\n    @-webkit-keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    @keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    .card{\r\n    display:flex;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    margin-left:35%;\r\n}\r\n\r\n    .text-icons{\r\n    margin-left:3%;\r\n    margin-top:1%;\r\n}\r\n\r\n    .inputs{\r\n    margin-left:1%\r\n}\r\n\r\n    .modal {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n    .modal1 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .modal2 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .top-nav{\r\npadding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n    float: left;\r\n    position: fixed;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n    \r\n}\r\n\r\n    .dropdown ul li ul li{\r\ndisplay:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\ncursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\ndisplay:inline-block;\r\n\r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\n/*white-space: normal;*/\r\ntext-decoration: none;\r\n\r\n}\r\n\r\n    .top-nav2 li i{\r\n    margin-right: 2px;\r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\ncolor:#05a081;\r\n\r\n\r\n}\r\n\r\n    .inputs select{\r\nposition: relative;\r\nbackground-color:black;\r\ncolor:white;\r\nborder-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\nbackground-color: #05a081;\r\ncolor:black;\r\n}\r\n\r\n    .login_btn{\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 100px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    .search-box{\r\n        left: 20%;\r\n        position: absolute;\r\n        border-radius: 40%;\r\n        padding: 10px;\r\n        height: 40px;\r\n    }\r\n\r\n    .search-btn{\r\n        color:#05a081;\r\n        float: right;\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 50%;\r\n        background: #222;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: 0.4s;\r\n    }\r\n\r\n    .search-text {\r\n        font-size: 17px;\r\n        border: none;\r\n        background: none;\r\n        float: left;\r\n        padding: 0;\r\n        color: white;\r\n        transition: 0.4s;\r\n        line-height: 40px;\r\n        width: 0px;\r\n        \r\n      }\r\n\r\n    input[type=\"text\"]{\r\n        border-color: none;\r\n        box-shadow: none;\r\n        outline: 0 none;\r\n      }\r\n\r\n    .search-box:hover > .search-text{\r\n          width: 240px;\r\n          padding: 0 6px;\r\n      }\r\n\r\n    .search-box:hover > .search-btn{\r\n        background: white;\r\n    }\r\n\r\n    .client a{\r\n        text-decoration: none;\r\n        color:white;\r\n\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFydWNlbm8vbmFydWNlbm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjs7SUFHSixtQkFBbUI7O0lBRW5CO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0lBRUE7Ozs7O0lBS0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7SUFHQSxvQkFBb0I7O0lBRWhCO1FBQ0ksZUFBZTtRQUNmLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1DQUFtQztRQUNuQyxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWix1Q0FBdUM7SUFDM0M7O0lBRUE7O1FBRUksYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHVDQUF1QztJQUMzQzs7SUFFQTtRQUNJLGNBQWM7UUFDZCw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLFdBQVc7O0lBRWY7O0lBQ0o7RUFDRSxTQUFTO0FBQ1g7O0lBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0lBQ0E7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7SUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7O0lBQ0E7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JB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RUE7UUFDRSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsV0FBVzs7SUFFZiIsImZpbGUiOiJzcmMvYXBwL25hcnVjZW5vL25hcnVjZW5vLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4zLjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcblxyXG4gICAgYm9keSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIH1cclxuICAgIC8qaHRtbCwgYm9keSwgI3dyYXBwZXIsICNwYWdlLXdyYXBwZXIge2hlaWdodDogMTAwJTsgb3ZlcmZsb3c6IGhpZGRlbjt9Ki9cclxuXHJcblxyXG5cclxuXHJcbiAgICAjd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjcGFnZS13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAyMnB4IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo4dmg7XHJcbiAgICB9XHJcblxyXG5cclxuLyogVG9wIE5hdmlnYXRpb24gKi9cclxuXHJcbi50b3AtbmF2PmxpPmEge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi50b3AtbmF2PmxpPmE6aG92ZXIsXHJcbi50b3AtbmF2PmxpPmE6Zm9jdXMsXHJcbi50b3AtbmF2Pi5vcGVuPmEsXHJcbi50b3AtbmF2Pi5vcGVuPmE6aG92ZXIsXHJcbi50b3AtbmF2Pi5vcGVuPmE6Zm9jdXMge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG59XHJcblxyXG5cclxuLyogU2lkZSBOYXZpZ2F0aW9uICovXHJcblxyXG4gICAgLnNpZGUtbmF2IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgIGxlZnQ6IDIyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIyNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCByZ2JhKDAsMCwwLDEpIHNvbGlkO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICAgICAgICAvKmJhY2tncm91bmQtY29sb3I6ICM1QTZCN0Q7Ki9cclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdj5saT5hIHtcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwwLDAsLjMpIHNvbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdiBsaSBhOmhvdmVyLFxyXG4gICAgLnNpZGUtbmF2IGxpIGE6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXY+bGk+dWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwwLDAsLjMpIHNvbGlkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2lkZS1uYXY+bGk+dWw+bGk+YSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMzhweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbi5uYXZiYXIgLm5hdiA+IGxpID4gYTpob3ZlciA+IC5sYWJlbCB7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcbi5TZWFyY2h7XHJcblxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2ggaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuU2VhcmNoIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDVhMDgxO1xyXG4gIH1cclxuXHJcbnVsIGxpIHVsIGxpe1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcbnVsIGxpOmhvdmVyIHVsIGxpe1xyXG4gICAgZGlzcGxheTpibG9jaztcclxufVxyXG51bCBsaSB1bCBsaSBhOmhvdmVye1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjgpO1xyXG4gICAgbWFyZ2luOiA0JSBhdXRvIDE1JSBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgIHdpZHRoOiA0MCU7IFxyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKHgpICovXHJcbi5jbG9zZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIHRvcDogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jbG9zZTpob3ZlciwuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogQWRkIFpvb20gQW5pbWF0aW9uICovXHJcbi5hbmltYXRlIHtcclxuICAgIGFuaW1hdGlvbjogem9vbSAwLjZzXHJcbn1cclxuQGtleWZyYW1lcyB6b29tIHtcclxuICAgIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCl9IFxyXG4gICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XHJcbn1cclxuLmNhcmR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOjIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbToyJTtcclxuICAgIG1hcmdpbi1sZWZ0OjM1JTtcclxufVxyXG4udGV4dC1pY29uc3tcclxuICAgIG1hcmdpbi1sZWZ0OjMlO1xyXG4gICAgbWFyZ2luLXRvcDoxJTtcclxufVxyXG5cclxuLmlucHV0c3tcclxuICAgIG1hcmdpbi1sZWZ0OjElXHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbn1cclxuLm1vZGFsMSB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBcclxufVxyXG4ubW9kYWwyIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuLnRvcC1uYXZ7XHJcbnBhZGRpbmc6IDAgMTVweDtcclxuXHJcbn1cclxuXHJcbi50b3AtbmF2MntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIC8qYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwuMTUpOyovXHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICBcclxufVxyXG4uZHJvcGRvd24gdWwgbGkgdWwgbGl7XHJcbmRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93biBhOmhvdmVye1xyXG5jdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmRyb3Bkb3duIGE6aG92ZXIgdWwgbGl7XHJcbmRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG4udG9wLW5hdjIgbGkgYXtcclxuLyp3aGl0ZS1zcGFjZTogbm9ybWFsOyovXHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuXHJcbi50b3AtbmF2MiBsaSBpe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuXHJcbi5kcm9wZG93biBhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5jb2xvcjojMDVhMDgxO1xyXG5cclxuXHJcbn1cclxuXHJcbi5pbnB1dHMgc2VsZWN0e1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbmNvbG9yOndoaXRlO1xyXG4tbW96LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbmJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxufVxyXG4uaW5wdXRzIHNlbGVjdDpob3ZlcntcclxuYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxuY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5sb2dpbl9idG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44NSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9idG46aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYm94e1xyXG4gICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLWJ0bntcclxuICAgICAgICBjb2xvcjojMDVhMDgxO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IDAgbm9uZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIC5zZWFyY2gtYm94OmhvdmVyID4gLnNlYXJjaC10ZXh0e1xyXG4gICAgICAgICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLWJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2xpZW50IGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG5cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/naruceno/naruceno.component.html":
/*!**************************************************!*\
  !*** ./src/app/naruceno/naruceno.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/admin\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n                <li class=\"dropdown\" style=\"margin-right: 15px;\">\n                    <a > {{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                    <ul class=\"top-nav2\">\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/korpa\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:5px;\" class=\"fa fa-shopping-cart\"></i>Korpa</a></li>\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/stats\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:8px;\" class=\"fa fa-bar-chart-o\"></i>Statistika</a></li>\n\n                        <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                        <li (click)=\"logout()\"  style=\"margin-top:10%;\"><a  style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li></ul>\n                </li>\n            </ul>\n<!-- Meni sa leve strane -->\n    <ul class=\"nav navbar-nav side-nav\">\n        <li>\n            <a routerLink=\"/admin\"> POCETNA</a>\n        </li>\n        <li>\n            <a routerLink=\"/spisak\">SPISAK RADNIKA</a>\n        </li>\n        <li>\n                <a routerLink=\"/narucivanje\" >NARUCIVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a routerLink=\"/naruceno\">NARUCENI PROIZVODI</a>           \n        </li>\n        <li>\n                <a onclick=\"document.getElementById('exchange').style.display='block'\" style=\"cursor:pointer;\">ZAMENA PROIZVODA</a>           \n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('registering').style.display='block'\"  style=\"cursor:pointer;\">REGISTRACIJA RADNIKA</a>\n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('adding').style.display='block'\"  style=\"cursor:pointer;\">DODAVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a onclick=\"document.getElementById('discount').style.display='block'\"  style=\"cursor:pointer;\">ODREDI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/automatski-popust\">AUTOMATSKI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/racuni\">PRIKAZ RACUNA</a>\n        </li>\n        <li>\n                <a routerLink=\"/prikaz\">PRIKAZ FAKTURE</a>\n            </li>\n       \n    </ul>\n</nav>\n\n\n<div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <div class=\"row\" id=\"main\" >\n                <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                  \n                        <div class=\"col-md-12\">\n                        <h4>Naruceni proizvodi koji treba da stignu</h4>\n                        <div class=\"table-responsive\">\n                \n                                \n                              <table id=\"mytable\" class=\"table table-bordred table-striped\">\n                                   \n                                   <thead>\n                                    \n                                     <th scope=\"col\"  class=\"text-center\">Datum porudzbine</th>\n                                     <th scope=\"col\" class=\"text-center\">Dobavljac</th>\n                                     <th scope=\"col\" class=\"text-center\">Sifra porudzbine</th>\n                                     <th scope=\"col\" class=\"text-center\"> Stiglo? </th>\n                                   </thead>\n                    <tbody>\n                    \n                    <tr *ngFor=\"let product of falseArrived; let i=index\">\n                            <td class=\"text-center align-middle\"> {{product.orderDate}}</td>\n                            <td class=\"text-center align-middle\"> {{product.supplier}}</td>\n                            <td class=\"text-center align-middle\" id=\"{{product.id}}\" #productID> {{product.id}}</td>\n                            <td class=\"text-center align-middle\"><button (click)=\"confirmOrder($event,productID.id)\" id = \"{{i}}\" \n                                class=\"btn btn-success btn-xs\"><span id = \"{{i}}\" \n                                class=\"glyphicon glyphicon-ok\"></span></button> </td>\n                    </tr>\n                    </tbody>\n                        \n                </table>\n                </div>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div id=\"page-wrapper\">\n            <div class=\"container-fluid\">\n                <!-- Page Heading -->\n                <div class=\"row\" id=\"main\" >\n                    <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                      \n                            <div class=\"col-md-12\">\n                            <h4>Naruceni proizvodi koji su stigli</h4>\n                            <div class=\"table-responsive\">\n                    \n                                    \n                                  <table id=\"mytable\" class=\"table table-bordred table-striped\">\n                                       \n                                       <thead>\n                                        \n                                         <th scope=\"col\" class=\"text-center\">ID Porudzbine</th>\n                                         <th scope=\"col\"  class=\"text-center\">Datum porudzbine</th>\n                                         <th scope=\"col\"  class=\"text-center\">Datum pristizanja</th>\n                                         <th scope=\"col\" class=\"text-center\">Broj različitih proizvoda</th>\n                                         <th scope=\"col\" class=\"text-center\">Dobavljac</th>\n                                       </thead>\n                        <tbody>\n                        \n                        <tr *ngFor=\"let product of trueArrived; let i = index\">\n                                \n                                <td class=\"text-center align-middle\"> {{product.id}}</td>\n                                <td class=\"text-center align-middle\"> {{product.orderDate}}</td>\n                                <td class=\"text-center align-middle\"> {{product.arrivalDate}}</td>\n                                <td class=\"text-center align-middle\"> {{product.products.length}}</td>\n                                <td class=\"text-center align-middle\">{{product.supplier}}</td>\n                        </tr>\n                        </tbody>\n                            \n                    </table>\n                    </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    <div  id=\"adding\" class=\"modal justify-content-center\" >\n        <form [formGroup]=\"uploadForm\"  (submit)='addProduct($event)' class=\"modal-content animate justify-content-center\" >\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('adding').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Dodavanje proizvoda</h1>\n            </div>   \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"producer\" placeholder='Proizvodjac' >\n                                <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                              </select>                    </div>\n            </div>    \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"productType\" placeholder='Vrsta proizvoda'>\n                                <option   *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                              \n                              </select>                    </div>\n            </div>        \n        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"quantity\" type=\"text\" class=\"form-control\" placeholder=\"Kolicina\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"productURL\" type=\"text\" class=\"form-control\" placeholder=\"Website\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"warranty\" type=\"text\" class=\"form-control\" placeholder=\"Garancija\" required>\n                    </div>\n        </div>                \n        <div class=\"card\" style=\"text-align:center;\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n            <input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Naziv prozivoda...\" required>\n                </div>\n        </div>\n        <div class=\"card\" style=\"align-content:center;\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n            <textarea id=\"properties\" rows=\"4\" cols=\"50\" class=\"form-control\" name=\"description\" placeholder=\"Uneti opis proizvoda...\" required></textarea>                   \n         </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-images\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"image\" type=\"file\" class=\"form-control\" >\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-dollar-sign\" style=\"color:white; margin-right: 5%;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"price\" type=\"number\" class=\"form-control\" placeholder=\"Cena proizvoda\" required>\n                    </div>\n        </div>\n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <button type=\"submit\" value=\"Dodaj\" class=\"btn float-right login_btn\"  >Dodaj</button>\n          </div>\n                            \n          </form>\n</div>\n\n<div id=\"registering\" class=\"modal1\">\n        <form (submit)='registerUser($event)' class=\"modal-content animate\" >\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('registering').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Registracija radnika</h1>\n            </div>   \n                        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Korisnicko ime...\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Ime\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>         \n                               </div>\n                <div class=\"inputs\">\n                        <input id=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Prezime\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-key\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Sifra...\" required>\n\n                    </div>\n        </div>\n\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">email</i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\" required>\n\n                    </div>\n        </div>\n\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                    <select id=\"role\" placeholder='Pozicija'>\n                            <option value=\"2\">ADMIN</option>\n                            <option value=\"0\">WORKER</option>\n                            <option value=\"1\">MANAGER</option>\n                            <option value=\"3\">OWNER</option>\n                          </select>                    </div>\n        </div>\n\n       \n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <button id=\"registerButton\" type=\"submit\" value=\"Registracija\" class=\"btn float-right login_btn\" >Registracija</button>\n          </div>\n                            \n          </form>\n</div>\n\n\n\n<div id=\"discount\" class=\"modal2\">\n    <form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('discount').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n          <h1 style=\"text-align:center;color:white\">Odredjivanje popusta</h1>\n        </div>   \n                    \n    <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n            <div class=\"text-icons\">         \n        <i class=\"fas fa-industry\" style=\"color:white;\"></i>\n            </div>\n            <div class=\"inputs\">\n                <div class=\"inputs\">\n                    <select id=\"producerDiscount\" placeholder='Proizvodjac' >\n                            <option disabled selected value> -- select an option -- </option>\n                            <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                          </select> \n                </div>                    \n            </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n            <div class=\"text-icons\">         \n                            <i class=\"fas fa-keyboard\" style=\"color:white\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <select id=\"productTypeDiscount\" placeholder='Vrsta proizvoda'>\n                            <option disabled selected value> -- select an option -- </option>\n                            <option *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                          </select>\n            </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:2%;margin-left:28.5%;\">     \n            <div class=\"text-icons\">         \n                    <i class=\"fas fa-percent\" style=\"color:white\"></i>\n                    \n            </div>\n            <div class=\"inputs\">\n                    <input id=\"procenat\" type=\"number\" class=\"form-control\" style=\"text-align: center; width: 150px\" placeholder=\"Iznos procenta\" required min=\"0\" max=\"100\" oninvalid=\"this.setCustomValidity('Vrednost manje ili jednaka 100')\" oninput=\"this.setCustomValidity('')\"> \n            </div>\n    </div>\n    <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%;\">\n            <button type=\"submit\" style=\"text-align:center;\" value=\"Izvrsi\" class=\"btn login_btn justify-content-center\">Izvrsi</button>\n            \n      </div>\n      <div style=\"margin-top:2%;margin-left:24;\">\n            <p style=\"text-align:center; color: white\">Status: </p> \n            <p style=\"text-align:center; color: lime\">{{ this.response }}</p>\n      </div>\n                        \n      </form>\n</div>\n\n<div id=\"exchange\" class=\"modal2\">\n        <form (submit)='exchangeProduct($event)' class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('exchange').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Zameni proizvod</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%;\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <a>Sifra racuna proizvoda od kupca    </a>\n                            <select id=\"givingID\" class=\"text-center\" style=\"margin-bottom:10%; margin-left: 5%; width: 30%;\">\n                                    <option  class=\"text-center\" *ngFor=\"let bill of billsService.bills\" value=\"{{ bill.id }}\">{{ bill.id }}</option>\n                            </select> <br>\n                            <div class=\"inputs\">\n                                <input id=\"givinProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra proizvoda koji se menja\" required>\n                            </div><br><br>\n                            <div class=\"inputs\">\n                                <input id=\"takingProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra zeljenog proizvoda\" required>\n                            </div>\n                        </div>\n\n                                  </div>\n            </div>\n           \n            <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%; \">\n                    <input type=\"submit\"  value=\"Zameni\" class=\"btn float-right login_btn\" style=\"width:40%;\">\n              </div>\n                           \n              </form>\n    </div>\n\n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi koji su trenutno dostupni u prodavnici. Moguće je promeniti bilo koji atribut postojaćeg proizvoda, moguće je ukloniti proizvod, a takođe i izvršiti popust unošenjem odgovarajućeg iznosa procenta. Na crvenu strelicu se proizvod ubacuje u korpu. \n\n\nSpisak radnika\n\n* Omogućen je uvid u spisak svih radnika koji rade u magacinu Techtradea kao i njihove informacije. Moguće je ukloniti korisnika.\n\n\nNaručivanje proizvoda\n\n* Na početku su izlistani svi proizvodi svih dobavljača. Prilikom narudžbenice, moguće je u korpu dodati proizvode pritiskom na crvenu strelicu. U korpi željeni kvantitet unosi sam korisnik. Moguće je obrisati sadržaj iz korpe. Pritiskom na dugme za kupovinu potvrđuje se porudzbina. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nZameni proizvod\n\n* Izvršiti odabir šifre računa;\n* Izvršiti odabir šifre proizvoda na računu;\n* Uneti šifru željenog proizvoda za zamenu;\n* Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka.\n\n\nRegistracija radnika\n\n* Omogućava unošenje novih autorizovanih korisnika. Unošenjem svih potrebnih podataka, kao i podatka koji autorizovani korisnik je u pitanju, biće izbačena odgovarajuća poruka.\n\n\nDodavanje proizvoda\n\n* Moguće je dodati nov proizvod. U slučaju da proizvod već postoji, biće izbačena odgovarajuća poruka.\n\n\nOdredi popust\n\n* Odabrati proizvođača;\n* Odabrati željeni proizvod;\n* Uneti iznos procenta;\n* Pritiskom na dugme 'Izvrši', biće izbačena odgovarajuća poruka.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\nPrikaz računa\n\n* Omogućen je uvid u tabelu sa računima;\n* Moguće je izvesti račun koji je generisan u PDF formi.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/naruceno/naruceno.component.ts":
/*!************************************************!*\
  !*** ./src/app/naruceno/naruceno.component.ts ***!
  \************************************************/
/*! exports provided: NarucenoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NarucenoComponent", function() { return NarucenoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_bills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bills.service */ "./src/app/services/bills.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_producers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/producers.service */ "./src/app/services/producers.service.ts");
/* harmony import */ var _services_product_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/product-type.service */ "./src/app/services/product-type.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_delete_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/delete.service */ "./src/app/services/delete.service.ts");
/* harmony import */ var _services_single_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/single-service.service */ "./src/app/services/single-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/exchange-product.service */ "./src/app/services/exchange-product.service.ts");















var NarucenoComponent = /** @class */ (function () {
    function NarucenoComponent(billsService, userService, registerService, productService, producersService, productTypeService, searchService, http, formBuilder, deleteService, single, router, exchangeProductService) {
        this.billsService = billsService;
        this.userService = userService;
        this.registerService = registerService;
        this.productService = productService;
        this.producersService = producersService;
        this.productTypeService = productTypeService;
        this.searchService = searchService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.deleteService = deleteService;
        this.single = single;
        this.router = router;
        this.exchangeProductService = exchangeProductService;
        this.endpointURL = 'http://78.46.117.245:9000/orders/?arrived=true';
        this.endpointURL2 = 'http://78.46.117.245:9000/orders/?arrived=false';
        this.endpointURL3 = 'http://78.46.117.245:9000/orders/';
        this.endpointURL5 = 'http://78.46.117.245:9000/logout';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.pozicija = localStorage.getItem('username');
        this.trueArrived = [];
        this.falseArrived = [];
        this.userFile = File;
        this.uploadForm = _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"];
    }
    NarucenoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.producersService.getAllProducers();
        this.productTypeService.getAllProductTypes();
        this.billsService.getAllBills();
        this.uploadForm = this.formBuilder.group({
            image: [''],
            name: [''],
            price: [''],
            producer: [''],
            productType: [''],
            productURL: [''],
            properties: [''],
            quantity: [''],
            warranty: [''],
            vendorPrice: ['']
        });
        this.http.get(this.endpointURL, {
            headers: this.headers
        }).subscribe(function (result) {
            _this.trueArrived = result;
        });
        this.http.get(this.endpointURL2, {
            headers: this.headers
        }).subscribe(function (result) {
            _this.falseArrived = result;
        });
    };
    NarucenoComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL5, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    NarucenoComponent.prototype.onSelectFile = function (event) {
        var selectFile = event.target.files[0];
        this.userFile = selectFile;
    };
    NarucenoComponent.prototype.addProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var image = target.querySelector('#image');
        /* if(image.files.length > 0){
          const file = image.files[0];
          this.uploadForm.get('file').setValue(file);
          this.slika = this.uploadForm.get('file').value;
        }  */
        // var formData = new FormData();
        //formData.append('image', image);
        var name = target.querySelector('#name').value;
        this.uploadForm.get('name').setValue(name);
        var price = target.querySelector('#price').value;
        this.uploadForm.get('price').setValue(price);
        var producer = target.querySelector('#producer').value;
        this.uploadForm.get('producer').setValue(producer);
        var productType = target.querySelector('#productType').value;
        this.uploadForm.get('productType').setValue(productType);
        var productURL = target.querySelector('#productURL').value;
        this.uploadForm.get('productURL').setValue(productURL);
        var properties = target.querySelector('#properties').value;
        this.uploadForm.get('properties').setValue(properties);
        var quantity = target.querySelector('#quantity').value;
        this.uploadForm.get('quantity').setValue(quantity);
        var warranty = target.querySelector('#warranty').value;
        this.uploadForm.get('warranty').setValue(warranty);
        var vendorPrice = target.querySelector('#vendorPrice').value;
        this.uploadForm.get('vendorPrice').setValue(vendorPrice);
        var data = JSON.stringify(this.uploadForm.value);
        var formData = new FormData();
        //formData.append("productData", data);
        formData.append("image", this.userFile);
        // formData.append("image", this.uploadForm.get('file').value);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("producer", producer);
        formData.append("productType", productType);
        formData.append("productURL", productURL);
        formData.append("properties", properties);
        formData.append("quantity", quantity);
        formData.append("warranty", warranty);
        formData.append("vendorPrice", vendorPrice);
        /*console.log( formData  image, name, price, producer, productType, productURL, properties, quantity, warranty );*/
        /*this.registerService.sendProductDetails(image, name, price, producer, productType, productURL, properties, quantity, warranty ).subscribe();*/
        this.registerService.sendProductDetails(formData).subscribe(function (response) {
            window.alert("Proizvod je uspešno dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 200);
    };
    NarucenoComponent.prototype.registerUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        var firstName = target.querySelector('#firstName').value;
        var lastName = target.querySelector('#lastName').value;
        var email = target.querySelector('#email').value;
        var role = target.querySelector('#role').value;
        this.registerService.sendUserDetails(firstName, lastName, username, email, password, role).subscribe(function (response) { window.alert("Uspešna registracija korisnika!"); }, function (err) { _this.handleError(err); });
        //)
        /*
        console.log(username,password)
        console.log(error);
        console.log(localStorage.getItem("token"));
        */
    };
    NarucenoComponent.prototype.addDiscount = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var producer = target.querySelector('#producerDiscount').value;
        var productType = target.querySelector('#productTypeDiscount').value;
        var discountCoefficient = target.querySelector("#procenat").value;
        this.productService.discountProduct(producer, productType, discountCoefficient).subscribe(function (response) {
            window.alert("Popust je dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 150);
        //zbog unosa u bazu i responsa stavljamo timeout da bi ucitao nove cene a ne stare
    };
    NarucenoComponent.prototype.exchangeProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var billID = target.querySelector('#givingID').value;
        var givinProductID = target.querySelector('#givinProductID').value;
        var takingProductID = target.querySelector('#takingProductID').value;
        this.exchangeProductService.returnProduct(billID, givinProductID, takingProductID).subscribe(function (data) {
            window.alert("Novac koji se vraca je: " + data.moneyToReturn + " RSD");
        }, function (err) { _this.handleError(err); /*console.log(err.error.message);console.log(err.status);*/ });
    };
    NarucenoComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    NarucenoComponent.prototype.confirmOrder = function (event, productID) {
        var _this = this;
        event.preventDefault();
        //const id = event.srcElement.id
        var id = productID;
        var newEndPointURL = this.endpointURL3 + id + "/invoice";
        var index = event.srcElement.id;
        this.http.get(newEndPointURL, {
            headers: this.headers
        }).subscribe(function (response) {
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () {
            var _this = this;
            that.http.get(that.endpointURL, {
                headers: that.headers
            }).subscribe(function (result) {
                that.trueArrived = result;
            }, function (err) { _this.handleError(err); });
        }, 250);
        this.falseArrived.splice(index, 1);
    };
    NarucenoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-naruceno',
            template: __webpack_require__(/*! ./naruceno.component.html */ "./src/app/naruceno/naruceno.component.html"),
            styles: [__webpack_require__(/*! ./naruceno.component.css */ "./src/app/naruceno/naruceno.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bills_service__WEBPACK_IMPORTED_MODULE_3__["BillsService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"],
            _services_producers_service__WEBPACK_IMPORTED_MODULE_7__["ProducersService"],
            _services_product_type_service__WEBPACK_IMPORTED_MODULE_8__["ProductTypeService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            _services_delete_service__WEBPACK_IMPORTED_MODULE_11__["DeleteService"],
            _services_single_service_service__WEBPACK_IMPORTED_MODULE_12__["SingleServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
            _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__["ExchangeProductService"]])
    ], NarucenoComponent);
    return NarucenoComponent;
}());



/***/ }),

/***/ "./src/app/narucivanje/narucivanje.component.css":
/*!*******************************************************!*\
  !*** ./src/app/narucivanje/narucivanje.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n        margin-top:8vh;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    ul li:hover ul li{\r\n    display:block;\r\n}\r\n\r\n    ul li ul li a:hover{\r\n    color:black;\r\n}\r\n\r\n    .modal-content {\r\n    background-color: rgba(0,0,0,.8);\r\n    margin: 4% auto 15% auto;\r\n    border: 1px solid #888;\r\n    width: 40%; \r\n    padding-bottom: 30px;\r\n    align-content: center;\r\n}\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n    position: absolute;\r\n    right: 25px;\r\n    top: 0;\r\n    color: white;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n}\r\n\r\n    .close:hover,.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n    -webkit-animation: zoom 0.6s;\r\n            animation: zoom 0.6s\r\n}\r\n\r\n    @-webkit-keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    @keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    .card{\r\n    display:flex;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    margin-left:35%;\r\n}\r\n\r\n    .text-icons{\r\n    margin-left:3%;\r\n    margin-top:1%;\r\n}\r\n\r\n    .inputs{\r\n    margin-left:1%\r\n}\r\n\r\n    .modal {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n    .modal1 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .modal2 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .top-nav{\r\npadding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n    float: left;\r\n    position: fixed;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n    \r\n}\r\n\r\n    .dropdown ul li ul li{\r\ndisplay:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\ncursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\ndisplay:inline-block;\r\n\r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\nwhite-space: normal;\r\ntext-decoration: none;\r\n\r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\n    color:#05a081;\r\n\r\n\r\n}\r\n\r\n    .inputs select{\r\nposition: relative;\r\nbackground-color:black;\r\ncolor:white;\r\nborder-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\nbackground-color: #05a081;\r\ncolor:black;\r\n}\r\n\r\n    .login_btn{\r\n    \r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    margin-left: 10px;\r\n    border-radius: 12px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    .search-box{\r\n        left: 20%;\r\n        position: absolute;\r\n        border-radius: 40%;\r\n        padding: 10px;\r\n        height: 40px;\r\n    }\r\n\r\n    .search-btn{\r\n        color:#05a081;\r\n        float: right;\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 50%;\r\n        background: #222;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: 0.4s;\r\n    }\r\n\r\n    .small-image{\r\n        height: 50px;\r\n        width:50px;\r\n    }\r\n\r\n    .search-text {\r\n        font-size: 17px;\r\n        border: none;\r\n        background: none;\r\n        float: left;\r\n        padding: 0;\r\n        color: white;\r\n        transition: 0.4s;\r\n        line-height: 40px;\r\n        width: 0px;\r\n        \r\n      }\r\n\r\n    input[type=\"text\"]{\r\n        border-color: none;\r\n        box-shadow: none;\r\n        outline: 0 none;\r\n      }\r\n\r\n    .search-box:hover > .search-text{\r\n          width: 240px;\r\n          padding: 0 6px;\r\n      }\r\n\r\n    .search-box:hover > .search-btn{\r\n        background: white;\r\n    }\r\n\r\n    .shopping-cart{\r\n        margin-top:10vh;\r\n        margin-left:3%;\r\n        margin-right: 3%;\r\n        \r\n    }\r\n\r\n    .client a{\r\n        text-decoration: none;\r\n        color:white;\r\n\r\n    }\r\n    \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmFydWNpdmFuamUvbmFydWNpdmFuamUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsY0FBYztJQUNsQjs7SUFHSixtQkFBbUI7O0lBRW5CO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0lBRUE7Ozs7O0lBS0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7SUFHQSxvQkFBb0I7O0lBRWhCO1FBQ0ksZUFBZTtRQUNmLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1DQUFtQztRQUNuQyxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWix1Q0FBdUM7SUFDM0M7O0lBRUE7O1FBRUksYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHVDQUF1QztJQUMzQzs7SUFFQTtRQUNJLGNBQWM7UUFDZCw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLFdBQVc7O0lBRWY7O0lBQ0o7RUFDRSxTQUFTO0FBQ1g7O0lBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0lBQ0E7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7SUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7O0lBQ0E7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFD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QTtVQUNJLFlBQVk7VUFDWixjQUFjO01BQ2xCOztJQUVBO1FBQ0UsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtRQUNmLGNBQWM7UUFDZCxnQkFBZ0I7O0lBRXBCOztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLFdBQVc7O0lBRWYiLCJmaWxlIjoic3JjL2FwcC9uYXJ1Y2l2YW5qZS9uYXJ1Y2l2YW5qZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAvKmh0bWwsIGJvZHksICN3cmFwcGVyLCAjcGFnZS13cmFwcGVyIHtoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47fSovXHJcblxyXG5cclxuXHJcblxyXG4gICAgI3dyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3BhZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogMjJweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6OHZoO1xyXG4gICAgfVxyXG5cclxuXHJcbi8qIFRvcCBOYXZpZ2F0aW9uICovXHJcblxyXG4udG9wLW5hdj5saT5hIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG59XHJcblxyXG4udG9wLW5hdj5saT5hOmhvdmVyLFxyXG4udG9wLW5hdj5saT5hOmZvY3VzLFxyXG4udG9wLW5hdj4ub3Blbj5hLFxyXG4udG9wLW5hdj4ub3Blbj5hOmhvdmVyLFxyXG4udG9wLW5hdj4ub3Blbj5hOmZvY3VzIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxufVxyXG5cclxuXHJcbi8qIFNpZGUgTmF2aWdhdGlvbiAqL1xyXG5cclxuICAgIC5zaWRlLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICBsZWZ0OiAyMjVweDtcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMjVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggcmdiYSgwLDAsMCwxKSBzb2xpZDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2QjdEOyovXHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXY+bGk+YSB7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpob3ZlcixcclxuICAgIC5zaWRlLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPnVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNpZGUtbmF2PmxpPnVsPmxpPmEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDM4cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4ubmF2YmFyIC5uYXYgPiBsaSA+IGE6aG92ZXIgPiAubGFiZWwge1xyXG4gIHRvcDogMTBweDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG4uU2VhcmNoe1xyXG5cclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcblxyXG4uU2VhcmNoIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5TZWFyY2ggYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA1YTA4MTtcclxuICB9XHJcblxyXG51bCBsaSB1bCBsaXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG51bCBsaTpob3ZlciB1bCBsaXtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxudWwgbGkgdWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxuICAgIG1hcmdpbjogNCUgYXV0byAxNSUgYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogNDAlOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2xvc2U6aG92ZXIsLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xyXG4uYW5pbWF0ZSB7XHJcbiAgICBhbmltYXRpb246IHpvb20gMC42c1xyXG59XHJcbkBrZXlmcmFtZXMgem9vbSB7XHJcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHNjYWxlKDApfSBcclxuICAgIHRvIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxyXG59XHJcbi5jYXJke1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDoyJTtcclxuICAgIG1hcmdpbi1ib3R0b206MiU7XHJcbiAgICBtYXJnaW4tbGVmdDozNSU7XHJcbn1cclxuLnRleHQtaWNvbnN7XHJcbiAgICBtYXJnaW4tbGVmdDozJTtcclxuICAgIG1hcmdpbi10b3A6MSU7XHJcbn1cclxuXHJcbi5pbnB1dHN7XHJcbiAgICBtYXJnaW4tbGVmdDoxJVxyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG59XHJcbi5tb2RhbDEge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgXHJcbn1cclxuLm1vZGFsMiB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi50b3AtbmF2e1xyXG5wYWRkaW5nOiAwIDE1cHg7XHJcblxyXG59XHJcblxyXG4udG9wLW5hdjJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTsqL1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgXHJcbn1cclxuLmRyb3Bkb3duIHVsIGxpIHVsIGxpe1xyXG5kaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24gYTpob3ZlcntcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93biBhOmhvdmVyIHVsIGxpe1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHJcblxyXG59XHJcblxyXG5cclxuLnRvcC1uYXYyIGxpIGF7XHJcbndoaXRlLXNwYWNlOiBub3JtYWw7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5kcm9wZG93biBhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgY29sb3I6IzA1YTA4MTtcclxuXHJcblxyXG59XHJcblxyXG4uaW5wdXRzIHNlbGVjdHtcclxucG9zaXRpb246IHJlbGF0aXZlO1xyXG5iYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG5jb2xvcjp3aGl0ZTtcclxuLW1vei1ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbi13ZWJraXQtYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG5ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbn1cclxuLmlucHV0cyBzZWxlY3Q6aG92ZXJ7XHJcbmJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbmNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubG9naW5fYnRue1xyXG4gICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44NSk7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9idG46aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2gtYm94e1xyXG4gICAgICAgIGxlZnQ6IDIwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLWJ0bntcclxuICAgICAgICBjb2xvcjojMDVhMDgxO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICB9XHJcbiAgICAuc21hbGwtaW1hZ2V7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOjUwcHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiAwIG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAuc2VhcmNoLWJveDpob3ZlciA+IC5zZWFyY2gtdGV4dHtcclxuICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIC5zZWFyY2gtYm94OmhvdmVyID4gLnNlYXJjaC1idG57XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLnNob3BwaW5nLWNhcnR7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxMHZoO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgLmNsaWVudCBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuXHJcbiAgICB9XHJcbiAgICAiXX0= */"

/***/ }),

/***/ "./src/app/narucivanje/narucivanje.component.html":
/*!********************************************************!*\
  !*** ./src/app/narucivanje/narucivanje.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/admin\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n                <li class=\"dropdown\"  style=\"margin-right: 15px;\">\n                    <a > {{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                    <ul class=\"top-nav2\">\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/korpa\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:5px;\" class=\"fa fa-shopping-cart\"></i>Korpa</a></li>\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/stats\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:8px;\" class=\"fa fa-bar-chart-o\"></i>Statistika</a></li>\n\n                        <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                        <li (click)=\"logout()\"  style=\"margin-top:10%;\"><a  style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li></ul>\n                </li>\n            </ul>\n<!-- Meni sa leve strane -->\n    <ul class=\"nav navbar-nav side-nav\">\n        <li>\n            <a routerLink=\"/admin\"> POCETNA</a>\n        </li>\n        <li>\n            <a routerLink=\"/spisak\">SPISAK RADNIKA</a>\n        </li>\n        <li>\n                <a routerLink=\"/narucivanje\" >NARUCIVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a routerLink=\"/naruceno\">NARUCENI PROIZVODI</a>           \n        </li>\n        <li>\n                <a onclick=\"document.getElementById('exchange').style.display='block'\" style=\"cursor:pointer;\">ZAMENA PROIZVODA</a>           \n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('registering').style.display='block'\"  style=\"cursor:pointer;\">REGISTRACIJA RADNIKA</a>\n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('adding').style.display='block'\"  style=\"cursor:pointer;\">DODAVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a onclick=\"document.getElementById('discount').style.display='block'\"  style=\"cursor:pointer;\">ODREDI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/automatski-popust\">AUTOMATSKI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/racuni\">PRIKAZ RACUNA</a>\n        </li>\n        <li>\n                <a routerLink=\"/prikaz\">PRIKAZ FAKTURE</a>\n            </li>\n        \n    </ul>\n</nav>\n\n\n<div class=\"shopping-cart\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\"> </th>\n                                <th scope=\"col\"  class=\"text-center\">Proizvod</th>\n                                <th scope=\"col\"  class=\"text-center\">productID</th>\n                                <th scope=\"col\" class=\"text-center\">Kolicina</th>\n                                <th scope=\"col\"  class=\"text-center\">OrderID</th>\n                                <th> </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let product of inactiveOrders; let i = index\">\n                                <td><img class = \"small-image\" src=\"{{ product.imagePath }}\" /> </td>\n                                <td class=\"text-center align-middle\"> {{product.productName}}</td>\n                                <td class=\"text-center align-middle\">{{product.productID}}</td>\n                                <td class=\"text-center align-middle\"  id=\"input_{{product.id}}\"><input  id=\"input_{{i}}\" type=\"text\" class=\"text-center\" ></td>\n                                <td  class=\"text-center align-middle\">{{product.orderID}}</td>\n                                <td class=\"text-right align-middle\"><button (click)=\"orderProductManager($event)\" id = \"{{i}}\" class=\"btn btn-success btn-xs\"><span id = \"{{i}}\" class=\"glyphicon glyphicon-ok\"></span></button> </td>\n                            </tr>\n                            <tr>\n                                  <td></td>\n                                  <td></td>\n                                  <td></td>\n                                  <td></td>\n                                  <td></td>\n                                  <td></td>\n                              </tr>\n    \n                        </tbody>\n                    </table>\n                </div>\n                \n                <form (submit)='sendOrder($event)'>\n                <div class=\"text-center \">\n                    <select id=\"supplierID\" class=\"text-center login_btn\" style=\"height: 34px;\">\n                      <option *ngFor=\"let dobavljac of dobavljaci\"  value=\"{{dobavljac.id}}\">\n                          {{dobavljac.name}}\n                      </option>\n                    </select> \n                    <button type=\"submit\" class=\"btn login_btn\" style=\"width: 200px;\">Naruci</button>\n                </div>\n              </form>\n    \n              \n    </div>\n    <div  id=\"adding\" class=\"modal justify-content-center\" >\n        <form [formGroup]=\"uploadForm\"  (submit)='addProduct($event)' class=\"modal-content animate justify-content-center\" >\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('adding').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Dodavanje proizvoda</h1>\n            </div>   \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"producer\" placeholder='Proizvodjac' >\n                                <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                              </select>                    </div>\n            </div>    \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"productType\" placeholder='Vrsta proizvoda'>\n                                <option   *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                              \n                              </select>                    </div>\n            </div>        \n        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"quantity\" type=\"text\" class=\"form-control\" placeholder=\"Kolicina\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"productURL\" type=\"text\" class=\"form-control\" placeholder=\"Website\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"warranty\" type=\"text\" class=\"form-control\" placeholder=\"Garancija\" required>\n                    </div>\n        </div>                \n        <div class=\"card\" style=\"text-align:center;\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n            <input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Naziv prozivoda...\" required>\n                </div>\n        </div>\n        <div class=\"card\" style=\"align-content:center;\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n            <textarea id=\"properties\" rows=\"4\" cols=\"50\" class=\"form-control\" name=\"description\" placeholder=\"Uneti opis proizvoda...\" required></textarea>                   \n         </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-images\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"image\" type=\"file\" class=\"form-control\" >\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-dollar-sign\" style=\"color:white; margin-right: 5%;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"price\" type=\"number\" class=\"form-control\" placeholder=\"Cena proizvoda\" required>\n                    </div>\n        </div>\n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <button type=\"submit\" value=\"Dodaj\" class=\"btn float-right login_btn\"  >Dodaj</button>\n          </div>\n                            \n          </form>\n</div>\n\n<div id=\"registering\" class=\"modal1\">\n        <form (submit)='registerUser($event)' class=\"modal-content animate\" >\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('registering').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Registracija radnika</h1>\n            </div>   \n                        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Korisnicko ime...\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Ime\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>         \n                               </div>\n                <div class=\"inputs\">\n                        <input id=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Prezime\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-key\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Sifra...\" required>\n\n                    </div>\n        </div>\n\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">email</i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\" required>\n\n                    </div>\n        </div>\n\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                    <select id=\"role\" placeholder='Pozicija'>\n                            <option value=\"2\">ADMIN</option>\n                            <option value=\"0\">WORKER</option>\n                            <option value=\"1\">MANAGER</option>\n                            <option value=\"3\">OWNER</option>\n                          </select>                    </div>\n        </div>\n\n       \n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <button id=\"registerButton\" type=\"submit\" value=\"Registracija\" class=\"btn float-right login_btn\">Registracija</button>\n          </div>\n                            \n          </form>\n</div>\n\n\n\n<div id=\"discount\" class=\"modal2\">\n    <form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('discount').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n          <h1 style=\"text-align:center;color:white\">Odredjivanje popusta</h1>\n        </div>   \n                    \n    <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n            <div class=\"text-icons\">         \n        <i class=\"fas fa-industry\" style=\"color:white;\"></i>\n            </div>\n            <div class=\"inputs\">\n                <div class=\"inputs\">\n                    <select id=\"producerDiscount\" placeholder='Proizvodjac' >\n                            <option disabled selected value> -- select an option -- </option>\n                            <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                          </select> \n                </div>                    \n            </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n            <div class=\"text-icons\">         \n                            <i class=\"fas fa-keyboard\" style=\"color:white\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <select id=\"productTypeDiscount\" placeholder='Vrsta proizvoda'>\n                            <option disabled selected value> -- select an option -- </option>\n                            <option *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                          </select>\n            </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:2%;margin-left:28.5%;\">     \n            <div class=\"text-icons\">         \n                    <i class=\"fas fa-percent\" style=\"color:white\"></i>\n                    \n            </div>\n            <div class=\"inputs\">\n                    <input id=\"procenat\" type=\"number\" class=\"form-control\" style=\"text-align: center; width: 150px\" placeholder=\"Iznos procenta\" required min=\"0\" max=\"100\" oninvalid=\"this.setCustomValidity('Vrednost manje ili jednaka 100')\" oninput=\"this.setCustomValidity('')\"> \n            </div>\n    </div>\n    <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%;\">\n            <button type=\"submit\" style=\"text-align:center;\" value=\"Izvrsi\" class=\"btn login_btn justify-content-center\">Izvrsi</button>\n            \n      </div>\n      <div style=\"margin-top:2%;margin-left:24;\">\n            <p style=\"text-align:center; color: white\">Status: </p> \n            <p style=\"text-align:center; color: lime\">{{ this.response }}</p>\n      </div>\n                        \n      </form>\n</div>\n\n<div id=\"exchange\" class=\"modal2\">\n        <form (submit)='exchangeProduct($event)' class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('exchange').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Zameni proizvod</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%;\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <a>Sifra racuna proizvoda od kupca    </a>\n                            <select id=\"givingID\" class=\"text-center\" style=\"margin-bottom:10%; margin-left: 5%; width: 30%;\">\n                                    <option  class=\"text-center\" *ngFor=\"let bill of billsService.bills\" value=\"{{ bill.id }}\">{{ bill.id }}</option>\n                            </select> <br>\n                            <div class=\"inputs\">\n                                <input id=\"givinProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra proizvoda koji se menja\" required>\n                            </div><br><br>\n                            <div class=\"inputs\">\n                                <input id=\"takingProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra zeljenog proizvoda\" required>\n                            </div>\n                        </div>\n\n                                  </div>\n            </div>\n           \n            <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%; \">\n                    <input type=\"submit\"  value=\"Zameni\" class=\"btn float-right login_btn\" style=\"width:40%;\">\n              </div>\n                           \n              </form>\n    </div>\n\n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi koji su trenutno dostupni u prodavnici. Moguće je promeniti bilo koji atribut postojaćeg proizvoda, moguće je ukloniti proizvod, a takođe i izvršiti popust unošenjem odgovarajućeg iznosa procenta. Na crvenu strelicu se proizvod ubacuje u korpu. \n\n\nSpisak radnika\n\n* Omogućen je uvid u spisak svih radnika koji rade u magacinu Techtradea kao i njihove informacije. Moguće je ukloniti korisnika.\n\n\nNaručivanje proizvoda\n\n* Na početku su izlistani svi proizvodi svih dobavljača. Prilikom narudžbenice, moguće je u korpu dodati proizvode pritiskom na crvenu strelicu. U korpi željeni kvantitet unosi sam korisnik. Moguće je obrisati sadržaj iz korpe. Pritiskom na dugme za kupovinu potvrđuje se porudzbina. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nZameni proizvod\n\n* Izvršiti odabir šifre računa;\n* Izvršiti odabir šifre proizvoda na računu;\n* Uneti šifru željenog proizvoda za zamenu;\n* Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka.\n\n\nRegistracija radnika\n\n* Omogućava unošenje novih autorizovanih korisnika. Unošenjem svih potrebnih podataka, kao i podatka koji autorizovani korisnik je u pitanju, biće izbačena odgovarajuća poruka.\n\n\nDodavanje proizvoda\n\n* Moguće je dodati nov proizvod. U slučaju da proizvod već postoji, biće izbačena odgovarajuća poruka.\n\n\nOdredi popust\n\n* Odabrati proizvođača;\n* Odabrati željeni proizvod;\n* Uneti iznos procenta;\n* Pritiskom na dugme 'Izvrši', biće izbačena odgovarajuća poruka.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\nPrikaz računa\n\n* Omogućen je uvid u tabelu sa računima;\n* Moguće je izvesti račun koji je generisan u PDF formi.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/narucivanje/narucivanje.component.ts":
/*!******************************************************!*\
  !*** ./src/app/narucivanje/narucivanje.component.ts ***!
  \******************************************************/
/*! exports provided: NarucivanjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NarucivanjeComponent", function() { return NarucivanjeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_bills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bills.service */ "./src/app/services/bills.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_producers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/producers.service */ "./src/app/services/producers.service.ts");
/* harmony import */ var _services_product_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/product-type.service */ "./src/app/services/product-type.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_delete_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/delete.service */ "./src/app/services/delete.service.ts");
/* harmony import */ var _services_single_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/single-service.service */ "./src/app/services/single-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/exchange-product.service */ "./src/app/services/exchange-product.service.ts");
/* harmony import */ var _komercijalista_komercijalista_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../komercijalista/komercijalista.component */ "./src/app/komercijalista/komercijalista.component.ts");
















var NarucivanjeComponent = /** @class */ (function () {
    function NarucivanjeComponent(billsService, komercijalista, userService, registerService, productService, producersService, productTypeService, searchService, http, formBuilder, deleteService, single, router, exchangeProductService) {
        this.billsService = billsService;
        this.komercijalista = komercijalista;
        this.userService = userService;
        this.registerService = registerService;
        this.productService = productService;
        this.producersService = producersService;
        this.productTypeService = productTypeService;
        this.searchService = searchService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.deleteService = deleteService;
        this.single = single;
        this.router = router;
        this.exchangeProductService = exchangeProductService;
        this.endpointURL = 'http://78.46.117.245:9000/product_orders/?status=inactive';
        this.endpointURL3 = 'http://78.46.117.245:9000/orders/';
        this.endpointURL5 = 'http://78.46.117.245:9000/logout';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.pozicija = localStorage.getItem('username');
        this.inactiveOrders = [];
        this.userFile = File;
        this.uploadForm = _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"];
        this.orders = [];
    }
    NarucivanjeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.producersService.getAllProducers();
        this.productTypeService.getAllProductTypes();
        this.billsService.getAllBills();
        this.uploadForm = this.formBuilder.group({
            image: [''],
            name: [''],
            price: [''],
            producer: [''],
            productType: [''],
            productURL: [''],
            properties: [''],
            quantity: [''],
            warranty: [''],
            vendorPrice: ['']
        });
        this.http.get(this.endpointURL, { headers: this.headers }).subscribe(function (result) {
            _this.inactiveOrders = result;
        });
        this.komercijalista.getSuppliers().subscribe(function (result) { _this.dobavljaci = result; });
    };
    NarucivanjeComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL5, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    NarucivanjeComponent.prototype.onSelectFile = function (event) {
        var selectFile = event.target.files[0];
        this.userFile = selectFile;
    };
    NarucivanjeComponent.prototype.addProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var image = target.querySelector('#image');
        /* if(image.files.length > 0){
          const file = image.files[0];
          this.uploadForm.get('file').setValue(file);
          this.slika = this.uploadForm.get('file').value;
        }  */
        // var formData = new FormData();
        //formData.append('image', image);
        var name = target.querySelector('#name').value;
        this.uploadForm.get('name').setValue(name);
        var price = target.querySelector('#price').value;
        this.uploadForm.get('price').setValue(price);
        var producer = target.querySelector('#producer').value;
        this.uploadForm.get('producer').setValue(producer);
        var productType = target.querySelector('#productType').value;
        this.uploadForm.get('productType').setValue(productType);
        var productURL = target.querySelector('#productURL').value;
        this.uploadForm.get('productURL').setValue(productURL);
        var properties = target.querySelector('#properties').value;
        this.uploadForm.get('properties').setValue(properties);
        var quantity = target.querySelector('#quantity').value;
        this.uploadForm.get('quantity').setValue(quantity);
        var warranty = target.querySelector('#warranty').value;
        this.uploadForm.get('warranty').setValue(warranty);
        var vendorPrice = target.querySelector('#vendorPrice').value;
        this.uploadForm.get('vendorPrice').setValue(vendorPrice);
        var data = JSON.stringify(this.uploadForm.value);
        var formData = new FormData();
        //formData.append("productData", data);
        formData.append("image", this.userFile);
        // formData.append("image", this.uploadForm.get('file').value);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("producer", producer);
        formData.append("productType", productType);
        formData.append("productURL", productURL);
        formData.append("properties", properties);
        formData.append("quantity", quantity);
        formData.append("warranty", warranty);
        formData.append("vendorPrice", vendorPrice);
        /*console.log( formData  image, name, price, producer, productType, productURL, properties, quantity, warranty );*/
        /*this.registerService.sendProductDetails(image, name, price, producer, productType, productURL, properties, quantity, warranty ).subscribe();*/
        this.registerService.sendProductDetails(formData).subscribe(function (response) {
            window.alert("Proizvod je uspešno dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 200);
    };
    NarucivanjeComponent.prototype.registerUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        var firstName = target.querySelector('#firstName').value;
        var lastName = target.querySelector('#lastName').value;
        var email = target.querySelector('#email').value;
        var role = target.querySelector('#role').value;
        this.registerService.sendUserDetails(firstName, lastName, username, email, password, role).subscribe(function (response) { window.alert("Uspešna registracija korisnika!"); }, function (err) { _this.handleError(err); });
        //)
        /*
        console.log(username,password)
        console.log(error);
        console.log(localStorage.getItem("token"));
        */
    };
    NarucivanjeComponent.prototype.addDiscount = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var producer = target.querySelector('#producerDiscount').value;
        var productType = target.querySelector('#productTypeDiscount').value;
        var discountCoefficient = target.querySelector("#procenat").value;
        this.productService.discountProduct(producer, productType, discountCoefficient).subscribe(function (response) {
            window.alert("Popust je dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 150);
        //zbog unosa u bazu i responsa stavljamo timeout da bi ucitao nove cene a ne stare
    };
    NarucivanjeComponent.prototype.exchangeProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var billID = target.querySelector('#givingID').value;
        var givinProductID = target.querySelector('#givinProductID').value;
        var takingProductID = target.querySelector('#takingProductID').value;
        this.exchangeProductService.returnProduct(billID, givinProductID, takingProductID).subscribe(function (data) {
            window.alert("Novac koji se vraca je: " + data.moneyToReturn + " RSD");
        }, function (err) { _this.handleError(err); /*console.log(err.error.message);console.log(err.status);*/ });
    };
    NarucivanjeComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    NarucivanjeComponent.prototype.orderProductManager = function (event) {
        event.preventDefault();
        var id = event.srcElement.id;
        var id2 = parseInt(id);
        var quantity = document.getElementsByTagName("input")[id2].value;
        var orderID = this.inactiveOrders[id].orderID;
        var current = {
            "orderID": orderID,
            "quantity": quantity
        };
        this.orders.push(current);
        this.inactiveOrders.splice(id, 1);
        //const value = document.getElementById("input_"+id).getElementsByTagName("input")[0].value;
    };
    NarucivanjeComponent.prototype.sendOrder = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var supplierID = target.querySelector("#supplierID").value;
        this.http.post(this.endpointURL3, {
            "orders": this.orders,
            "supplierID": supplierID
        }, {
            headers: this.headers
        }).subscribe(function (response) {
            window.alert("Porizvod naručen!");
        }, function (err) { _this.handleError(err); });
    };
    NarucivanjeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-narucivanje',
            template: __webpack_require__(/*! ./narucivanje.component.html */ "./src/app/narucivanje/narucivanje.component.html"),
            providers: [_komercijalista_komercijalista_component__WEBPACK_IMPORTED_MODULE_15__["KomercijalistaComponent"]],
            styles: [__webpack_require__(/*! ./narucivanje.component.css */ "./src/app/narucivanje/narucivanje.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bills_service__WEBPACK_IMPORTED_MODULE_3__["BillsService"],
            _komercijalista_komercijalista_component__WEBPACK_IMPORTED_MODULE_15__["KomercijalistaComponent"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"],
            _services_producers_service__WEBPACK_IMPORTED_MODULE_7__["ProducersService"],
            _services_product_type_service__WEBPACK_IMPORTED_MODULE_8__["ProductTypeService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            _services_delete_service__WEBPACK_IMPORTED_MODULE_11__["DeleteService"],
            _services_single_service_service__WEBPACK_IMPORTED_MODULE_12__["SingleServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
            _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__["ExchangeProductService"]])
    ], NarucivanjeComponent);
    return NarucivanjeComponent;
}());



/***/ }),

/***/ "./src/app/pretraga/pretraga.component.css":
/*!*************************************************!*\
  !*** ./src/app/pretraga/pretraga.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    .products .product{\r\n  margin-top:4%;\r\n  margin-bottom: 4%;\r\n  margin-left: 4%;\r\n  width: 75vw;\r\n  height: 50%;\r\n  display:flex;\r\n}\r\n\r\n    .products .img1{\r\n  width :10%;\r\n  height: 35%;\r\n  margin-left: 5%;\r\n  margin-top: 6%;\r\n}\r\n\r\n    .products .desc{\r\n  width:80%;\r\n  margin-top: 3%;\r\n  margin-left:5%;\r\n}\r\n\r\n    .login_btn{\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 100px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    ul li ul li{\r\n        display:none;\r\n    }\r\n\r\n    ul li:hover ul li{\r\n        display:block;\r\n    }\r\n\r\n    ul li ul li a:hover{\r\n        color:black;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*  ------------------ */\r\n\r\n    .modal-content {\r\n        background-color: rgba(0,0,0,.8);\r\n        margin: 4% auto 15% auto;\r\n        border: 1px solid #888;\r\n        width: 40%; \r\n        padding-bottom: 30px;\r\n        align-content: center;\r\n    }\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n        position: absolute;\r\n        right: 25px;\r\n        top: 0;\r\n        color: white;\r\n        font-size: 35px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .close:hover,.close:focus {\r\n        color: red;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n        -webkit-animation: zoom 0.6s;\r\n                animation: zoom 0.6s\r\n    }\r\n\r\n    @-webkit-keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    @keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    .card{\r\n        display: flex;\r\n        margin-top:2%;\r\n        margin-bottom:2%;\r\n        margin-left:20%;\r\n        margin-right: 20%;\r\n    }\r\n\r\n    .text-icons{\r\n        margin-left:3%;\r\n        margin-top:1%;\r\n        margin-right: 3%;\r\n    }\r\n\r\n    .inputs{\r\n        \r\n        margin-left:1%\r\n    }\r\n\r\n    .modal {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n       /* left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;*/\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n    }\r\n\r\n    .modal1 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .modal2 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .top-nav{\r\n    padding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n        float: left;\r\n        position: fixed;\r\n        margin-top: 0;\r\n        /*border: 1px solid rgba(0,0,0,.15);*/\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n        background-color: #fff;\r\n        box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n        \r\n}\r\n\r\n    .dropdown ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\n    display:inline-block;\r\n    \r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\n    white-space: normal;\r\n    text-decoration: none;\r\n    \r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\n    color:#05a081;\r\n\r\n    \r\n}\r\n\r\n    .inputs select{\r\n    position: relative;\r\n    background-color:black;\r\n    color:white;\r\n   border-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\n    background-color: #05a081;\r\n    color:black;\r\n}\r\n\r\n    .search-box{\r\n    left: 20%;\r\n    position: absolute;\r\n    border-radius: 40%;\r\n    padding: 10px;\r\n    height: 40px;\r\n}\r\n\r\n    .search-btn{\r\n    color:#05a081;\r\n    float: right;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background: #222;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.4s;\r\n}\r\n\r\n    .search-text {\r\n    font-size: 17px;\r\n    border: none;\r\n    background: none;\r\n    float: left;\r\n    padding: 0;\r\n    color: white;\r\n    transition: 0.4s;\r\n    line-height: 40px;\r\n    width: 0px;\r\n    \r\n  }\r\n\r\n    input[type=\"text\"]{\r\n    border-color: none;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n  }\r\n\r\n    .search-box:hover > .search-text{\r\n      width: 240px;\r\n      padding: 0 6px;\r\n  }\r\n\r\n    .search-box:hover > .search-btn{\r\n    background: white;\r\n}\r\n\r\n    .client a{\r\n    text-decoration: none;\r\n    color:white;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJldHJhZ2EvcHJldHJhZ2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBR0osbUJBQW1COztJQUduQjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztJQUVBOzs7OztJQUtJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0lBR0Esb0JBQW9COztJQUVoQjtRQUNJLGVBQWU7UUFDZixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQ0FBbUM7UUFDbkMsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osdUNBQXVDO0lBQzNDOztJQUVBOztRQUVJLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix1Q0FBdUM7SUFDM0M7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixXQUFXOztJQUVmOztJQUNKO0VBQ0UsU0FBUztBQUNYOztJQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztJQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztJQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixl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QUFnQjtJQUNoQixXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFVBQVU7O0VBRVo7O0lBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0lBR0E7TUFDSSxZQUFZO01BQ1osY0FBYztFQUNsQjs7SUFFQTtJQUNFLGlCQUFpQjtBQUNyQjs7SUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXOztBQUVmIiwiZmlsZSI6InNyYy9hcHAvcHJldHJhZ2EvcHJldHJhZ2EuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLypodG1sLCBib2R5LCAjd3JhcHBlciwgI3BhZ2Utd3JhcHBlciB7aGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO30qL1xyXG5cclxuXHJcblxyXG5cclxuICAgICN3cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNwYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIycHggMTBweDtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUb3AgTmF2aWdhdGlvbiAqL1xyXG5cclxuXHJcbi50b3AtbmF2PmxpPmEge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDoxNTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XHJcbn1cclxuXHJcbi50b3AtbmF2PmxpPmE6aG92ZXIsXHJcbi50b3AtbmF2PmxpPmE6Zm9jdXMsXHJcbi50b3AtbmF2Pi5vcGVuPmEsXHJcbi50b3AtbmF2Pi5vcGVuPmE6aG92ZXIsXHJcbi50b3AtbmF2Pi5vcGVuPmE6Zm9jdXMge1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG59XHJcblxyXG5cclxuLyogU2lkZSBOYXZpZ2F0aW9uICovXHJcblxyXG4gICAgLnNpZGUtbmF2IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgIGxlZnQ6IDIyNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIyNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCByZ2JhKDAsMCwwLDEpIHNvbGlkO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcclxuICAgICAgICAvKmJhY2tncm91bmQtY29sb3I6ICM1QTZCN0Q7Ki9cclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdj5saT5hIHtcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwwLDAsLjMpIHNvbGlkO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdiBsaSBhOmhvdmVyLFxyXG4gICAgLnNpZGUtbmF2IGxpIGE6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXY+bGk+dWwge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHJnYmEoMCwwLDAsLjMpIHNvbGlkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2lkZS1uYXY+bGk+dWw+bGk+YSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMzhweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgICAgXHJcbiAgICB9XHJcbi5uYXZiYXIgLm5hdiA+IGxpID4gYTpob3ZlciA+IC5sYWJlbCB7XHJcbiAgdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcblxyXG4uU2VhcmNoe1xyXG5cclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcblxyXG4uU2VhcmNoIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5TZWFyY2ggYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA1YTA4MTtcclxuICB9XHJcblxyXG4gXHJcbi5wcm9kdWN0cyAucHJvZHVjdHtcclxuICBtYXJnaW4tdG9wOjQlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0JTtcclxuICB3aWR0aDogNzV2dztcclxuICBoZWlnaHQ6IDUwJTtcclxuICBkaXNwbGF5OmZsZXg7XHJcbn1cclxuXHJcblxyXG5cclxuLnByb2R1Y3RzIC5pbWcxe1xyXG4gIHdpZHRoIDoxMCU7XHJcbiAgaGVpZ2h0OiAzNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi10b3A6IDYlO1xyXG59XHJcbi5wcm9kdWN0cyAuZGVzY3tcclxuICB3aWR0aDo4MCU7XHJcbiAgbWFyZ2luLXRvcDogMyU7XHJcbiAgbWFyZ2luLWxlZnQ6NSU7XHJcbn1cclxuLmxvZ2luX2J0bntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjg1KTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luX2J0bjpob3ZlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbiAgICB9XHJcblxyXG4gICAgdWwgbGkgdWwgbGl7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgdWwgbGk6aG92ZXIgdWwgbGl7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuICAgIHVsIGxpIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC8qICAtLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICAgICAgbWFyZ2luOiA0JSBhdXRvIDE1JSBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICAgICAgd2lkdGg6IDQwJTsgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuY2xvc2U6aG92ZXIsLmNsb3NlOmZvY3VzIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogQWRkIFpvb20gQW5pbWF0aW9uICovXHJcbiAgICAuYW5pbWF0ZSB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiB6b29tIDAuNnNcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgem9vbSB7XHJcbiAgICAgICAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX0gXHJcbiAgICAgICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToyJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyMCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XHJcbiAgICB9XHJcbiAgICAudGV4dC1pY29uc3tcclxuICAgICAgICBtYXJnaW4tbGVmdDozJTtcclxuICAgICAgICBtYXJnaW4tdG9wOjElO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0c3tcclxuICAgICAgICBcclxuICAgICAgICBtYXJnaW4tbGVmdDoxJVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubW9kYWwge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgIC8qIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTsqL1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgIH1cclxuICAgIC5tb2RhbDEge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLm1vZGFsMiB7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuLnRvcC1uYXZ7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG59XHJcblxyXG4udG9wLW5hdjJ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7Ki9cclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgICAgIFxyXG59XHJcbi5kcm9wZG93biB1bCBsaSB1bCBsaXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93biBhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93biBhOmhvdmVyIHVsIGxpe1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG4udG9wLW5hdjIgbGkgYXtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuLmRyb3Bkb3duIGF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjojMDVhMDgxO1xyXG5cclxuICAgIFxyXG59XHJcblxyXG4uaW5wdXRzIHNlbGVjdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG4gICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuICAgYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG59XHJcbi5pbnB1dHMgc2VsZWN0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG5cclxuICAgIFxyXG4uc2VhcmNoLWJveHtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRue1xyXG4gICAgY29sb3I6IzA1YTA4MTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uc2VhcmNoLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IDAgbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLXRleHR7XHJcbiAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgfVxyXG4gICAgXHJcbiAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLWJ0bntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uY2xpZW50IGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pretraga/pretraga.component.html":
/*!**************************************************!*\
  !*** ./src/app/pretraga/pretraga.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"{{routerVar}}\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            <app-search ></app-search> <!-- search dugme preko komponente -->\n            <!-- <div class=\"search-box\">\n                <input class=\"search-text\" type=\"text\" placeholder=\"Type to search\" name=\"search\">\n                 <a class=\"search-btn\" href=\"#\"><i class=\"fa fa-search\"></i></a>\n                            <button type=\"submit\"><i class=\"fa fa-search\"></i></button>\n            </div> -->\n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n                        <li class=\"dropdown\"  style=\"margin-right: 15px;\">\n                            <a > {{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                            <ul class=\"top-nav2\">\n                                <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                                <li (click)=\"logout()\" style=\"margin-top:10%;\"><a style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li></ul>\n                        </li>\n                    </ul>\n        <!-- Meni sa leve strane -->\n            <ul class=\"nav navbar-nav side-nav\">\n                <li>\n                    <a routerLink='{{routerVar}}'> POCETNA </a>\n                </li>\n                \n            </ul>\n    </nav>\n\n    <div class=\"products\" *ngFor=\"let product of searchService.searchResults\" id=\"{{ product.id }}\">\n                <div class=\"product\">\n                   <img src=\"{{ product.imagePath }}\" class=\"img1\">  <!-- {{ product.imagePath }} --> \n                        <div class=\"desc\">\n                            <div class=\"row\" id=\"main\" >\n                                <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                                        <div class=\"col-md-12\">\n                                        <h4>Informacije o proizvodu</h4>\n                                        <div class=\"table-responsive\">  \n                                              <table id=\"mytable\" class=\"table table-bordred table-striped\">                                         \n                                                   <thead>                                                                       \n                                                    <th></th>\n                                                     <th></th>\n                                                     <th></th>                                            \n                                                   </thead>\n                                    <tbody>\n                                        <tr>\n                                         <td>Proizvodjac: </td>\n                                        <td>{{ product.producer }}</td>\n                                        <td></td>\n                                        </tr>\n                                        <tr>\n                                         <td>Vrsta proizvoda: </td>\n                                         <td>{{ product.productType }}</td>\n                                         <td></td>\n                                         </tr>\n                                         <tr>\n                                        <td>Kolicina: </td>\n                                        <td>{{ product.quantity }}</td>\n                                        <td></td>\n                                        </tr>\n                                    <tr>\n                                    <td>Website </td>\n                                    <td>{{ product.productURL }}</td>\n                                    <td></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Garancija: </td>\n                                        <td>{{ product.warranty }}</td>\n                                        <td></td>\n                                        </tr>\n                                        <tr>\n                                        <td>Naziv proizvoda: </td>\n                                        <td>{{ product.name }}</td>\n                                        <td></td>\n                                        </tr>\n                                    \n                                 <tr>\n                                    <td>Opis proizvoda:</td>\n                                    <td>{{ product.properties }}</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Nabavna cena: </td>\n                                    <td >{{ product.vendorPrice }}</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Cena: </td>\n                                    <td>{{ product.price }}</td>\n                                    <td class=\"text-right\"><button id = \"{{ product.id}}\" (click)= \"addToCart($event)\" class=\"btn btn-danger btn-xs\"><span id = \"{{ product.id}}\" class=\"glyphicon glyphicon-ok\"></span></button></td>\n                                </tr>\n                                    </tbody>\n                                        \n                                </table>\n                                </div>\n                                </div>\n                                </div>\n                            </div>\n                        </div>\n                </div> \n               \n        </div>\n  \n    \n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n{{helpText}}\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pretraga/pretraga.component.ts":
/*!************************************************!*\
  !*** ./src/app/pretraga/pretraga.component.ts ***!
  \************************************************/
/*! exports provided: PretragaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PretragaComponent", function() { return PretragaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_product_type_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product-type.service */ "./src/app/services/product-type.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_producers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/producers.service */ "./src/app/services/producers.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");










var PretragaComponent = /** @class */ (function () {
    function PretragaComponent(userService, registerService, productService, producersService, searchService, productTypeService, http, router) {
        this.userService = userService;
        this.registerService = registerService;
        this.productService = productService;
        this.producersService = producersService;
        this.searchService = searchService;
        this.productTypeService = productTypeService;
        this.http = http;
        this.router = router;
        this.pozicija = localStorage.getItem('username');
        this.rola = localStorage.getItem("role");
        this.endpointURL5 = 'http://78.46.117.245:9000/logout';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.helpText = "";
        this.korpa = JSON.parse(localStorage.getItem("cart"));
    }
    PretragaComponent.prototype.ngOnInit = function () {
        if (this.rola == 'ADMIN' || this.rola == 'OWNER') {
            this.routerVar = '/admin';
            this.statsVar = true;
            this.helpText = "\n\nPo\u010Detna\n\n* Na po\u010Detnoj strani su izlistani svi proizvodi koji su trenutno dostupni u prodavnici. Mogu\u0107e je promeniti bilo koji atribut postoja\u0107eg proizvoda, mogu\u0107e je ukloniti proizvod, a tako\u0111e i izvr\u0161iti popust uno\u0161enjem odgovaraju\u0107eg iznosa procenta. Na crvenu strelicu se proizvod ubacuje u korpu. \n\n\nSpisak radnika\n\n* Omogu\u0107en je uvid u spisak svih radnika koji rade u magacinu Techtradea kao i njihove informacije. Mogu\u0107e je ukloniti korisnika.\n\n\nNaru\u010Divanje proizvoda\n\n* Na po\u010Detku su izlistani svi proizvodi svih dobavlja\u010Da. Prilikom narud\u017Ebenice, mogu\u0107e je u korpu dodati proizvode pritiskom na crvenu strelicu. U korpi \u017Eeljeni kvantitet unosi sam korisnik. Mogu\u0107e je obrisati sadr\u017Eaj iz korpe. Pritiskom na dugme za kupovinu potvr\u0111uje se porudzbina. \n\n\nNaru\u010Deni proizvodi\n\n* Omogu\u0107en je uvid u dve tabele, Naru\u010Deni proizvodi koji treba da stignu i Naru\u010Deni proizvodi koji su stigli.\n\n\nZameni proizvod\n\n* Izvr\u0161iti odabir \u0161ifre ra\u010Duna;\n* Izvr\u0161iti odabir \u0161ifre proizvoda na ra\u010Dunu;\n* Uneti \u0161ifru \u017Eeljenog proizvoda za zamenu;\n* Pritiskom na dugme 'Zameni' izbaci\u0107e se odgovaraju\u0107a poruka.\n\n\nRegistracija radnika\n\n* Omogu\u0107ava uno\u0161enje novih autorizovanih korisnika. Uno\u0161enjem svih potrebnih podataka, kao i podatka koji autorizovani korisnik je u pitanju, bi\u0107e izba\u010Dena odgovaraju\u0107a poruka.\n\n\nDodavanje proizvoda\n\n* Mogu\u0107e je dodati nov proizvod. U slu\u010Daju da proizvod ve\u0107 postoji, bi\u0107e izba\u010Dena odgovaraju\u0107a poruka.\n\n\nOdredi popust\n\n* Odabrati proizvo\u0111a\u010Da;\n* Odabrati \u017Eeljeni proizvod;\n* Uneti iznos procenta;\n* Pritiskom na dugme 'Izvr\u0161i', bi\u0107e izba\u010Dena odgovaraju\u0107a poruka.\n\n\nAutomatski popust\n\n* Omogu\u0107en je uvid u spisak svih proizvoda kojima je omogu\u0107en automatski popust i potvrda popusta.\n\n\nPrikaz ra\u010Duna\n\n* Omogu\u0107en je uvid u tabelu sa ra\u010Dunima;\n* Mogu\u0107e je izvesti ra\u010Dun koji je generisan u PDF formi.\n\n\nPrikaz fakture\n\n* Omogu\u0107en je uvid u tabelu faktura;\n* Mogu\u0107e je izvesti fakturu u PDF formi.\n";
        }
        else if (this.rola == 'MANAGER') {
            this.routerVar = '/komercijalista';
            this.helpText = "\n\n\nPo\u010Detna\n\n* Na po\u010Detnoj strani su izlistani svi proizvodi svih dobavlja\u010Da. Mogu\u0107e je izvr\u0161iti izmenu cene \u017Eeljenog proizvoda.\n\n\nNaru\u010Divanje proizvoda\n\n* Kada radnik naru\u010Di proizvod, komercijalista \u0107e to videti i ti proizvodi \u0107e se pojaviti u tabeli. U narudzbenici svi proizvodi moraju biti od istog dobavlja\u010Da. Komercijalista bira proizvode koje treba da naru\u010Di od dobavlja\u010Da i njihov kvantitet. \n\n\nNaru\u010Deni proizvodi\n\n* Omogu\u0107en je uvid u dve tabele, Naru\u010Deni proizvodi koji treba da stignu i Naru\u010Deni proizvodi koji su stigli.\n\n\nPrikaz fakture\n\n* Omogu\u0107en je uvid u tabelu faktura;\n* Mogu\u0107e je izvesti fakturu u PDF formi.\n\n\nAutomatski popust\n\n* Omogu\u0107en je uvid u spisak svih proizvoda kojima je omogu\u0107en automatski popust i potvrda popusta.\n\n";
        }
        else if (this.rola == 'WORKER') {
            this.routerVar = '/radnik';
            this.helpText = "* Radnik ima mogućnost da prodaje proizvod, vrši zamenu proizvoda kao i da naruči proizvode kojih nema na stanju. Kada radnik izabere proizvod koji hoće da proda, klikom na crvenu strelicu dodaje taj proizvod u korpu. Prečicom u gornjem desnom uglu se pristupa korpi. Nakon odabira količine proizvoda kojeg korisnik želi da poruči, pritiskom na dugme Izvrši kupivinu potvrđuje se porudzbina. Moguće je obrisati sadržaj iz korpe. Radnik naručuje proizvode kojih nema na stanju i svi proizvodi se šalju komercijalisti i on ih obrađuje.Zamena proizvoda se izvršava nakon odabira šifre računa, šifre proizvoda na računu, a zatim i šifre željenog proizvoda za zamenu. Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka.";
        }
    };
    PretragaComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL5, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    PretragaComponent.prototype.addToCart = function (event) {
        var id = event.srcElement.id;
        if (this.korpa == null || this.korpa.length == 0) {
            this.korpa = [];
            this.korpa.push(id);
        }
        else {
            if (this.korpa.includes(id.toString())) {
                alert('Proizvod je vec ubacen u korpu');
            }
            else {
                this.korpa.push(id);
            }
        }
        localStorage.setItem("cart", JSON.stringify(this.korpa));
    };
    PretragaComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    PretragaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pretraga',
            template: __webpack_require__(/*! ./pretraga.component.html */ "./src/app/pretraga/pretraga.component.html"),
            styles: [__webpack_require__(/*! ./pretraga.component.css */ "./src/app/pretraga/pretraga.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _services_producers_service__WEBPACK_IMPORTED_MODULE_6__["ProducersService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _services_product_type_service__WEBPACK_IMPORTED_MODULE_3__["ProductTypeService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]])
    ], PretragaComponent);
    return PretragaComponent;
}());



/***/ }),

/***/ "./src/app/prikaz/prikaz.component.css":
/*!*********************************************!*\
  !*** ./src/app/prikaz/prikaz.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n        margin-top:8vh;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    ul li:hover ul li{\r\n    display:block;\r\n}\r\n\r\n    ul li ul li a:hover{\r\n    color:black;\r\n}\r\n\r\n    .modal-content {\r\n    background-color: rgba(0,0,0,.8);\r\n    margin: 4% auto 15% auto;\r\n    border: 1px solid #888;\r\n    width: 40%; \r\n    padding-bottom: 30px;\r\n    align-content: center;\r\n}\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n    position: absolute;\r\n    right: 25px;\r\n    top: 0;\r\n    color: white;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n}\r\n\r\n    .close:hover,.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n    -webkit-animation: zoom 0.6s;\r\n            animation: zoom 0.6s\r\n}\r\n\r\n    @-webkit-keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    @keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    .card{\r\n    display:flex;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    margin-left:35%;\r\n}\r\n\r\n    .text-icons{\r\n    margin-left:3%;\r\n    margin-top:1%;\r\n}\r\n\r\n    .inputs{\r\n    margin-left:1%\r\n}\r\n\r\n    .modal {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n    .modal1 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .modal2 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .top-nav{\r\npadding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n    float: left;\r\n    position: fixed;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n    \r\n}\r\n\r\n    .dropdown ul li ul li{\r\ndisplay:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\ncursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\ndisplay:inline-block;\r\n\r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\nwhite-space: normal;\r\ntext-decoration: none;\r\n\r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\n    color:#05a081;\r\n\r\n\r\n}\r\n\r\n    .inputs select{\r\nposition: relative;\r\nbackground-color:black;\r\ncolor:white;\r\nborder-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\nbackground-color: #05a081;\r\ncolor:black;\r\n}\r\n\r\n    .login_btn{\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 100px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    .search-box{\r\n        left: 20%;\r\n        position: absolute;\r\n        border-radius: 40%;\r\n        padding: 10px;\r\n        height: 40px;\r\n    }\r\n\r\n    .search-btn{\r\n        color:#05a081;\r\n        float: right;\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 50%;\r\n        background: #222;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: 0.4s;\r\n    }\r\n\r\n    .search-text {\r\n        font-size: 17px;\r\n        border: none;\r\n        background: none;\r\n        float: left;\r\n        padding: 0;\r\n        color: white;\r\n        transition: 0.4s;\r\n        line-height: 40px;\r\n        width: 0px;\r\n        \r\n      }\r\n\r\n    input[type=\"text\"]{\r\n        border-color: none;\r\n        box-shadow: none;\r\n        outline: 0 none;\r\n      }\r\n\r\n    .search-box:hover > .search-text{\r\n          width: 240px;\r\n          padding: 0 6px;\r\n      }\r\n\r\n    .search-box:hover > .search-btn{\r\n        background: white;\r\n    }\r\n\r\n    .client a{\r\n        text-decoration: none;\r\n        color:white;\r\n\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpa2F6L3ByaWthei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBGQUEwRjs7SUFFdEY7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBQ0Esd0VBQXdFOztJQUt4RTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCOztJQUdKLG1CQUFtQjs7SUFFbkI7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7SUFFQTs7Ozs7SUFLSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztJQUdBLG9CQUFvQjs7SUFFaEI7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUNBQW1DO1FBQ25DLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHVDQUF1QztJQUMzQzs7SUFFQTs7UUFFSSxhQUFhO1FBQ2Isb0NBQW9DO1FBQ3BDLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsdUNBQXVDO0lBQzNDOztJQUVBO1FBQ0ksY0FBYztRQUNkLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsV0FBVzs7SUFFZjs7SUFDSjtFQUNFLFNBQVM7QUFDWDs7SUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7SUFDQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztJQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7SUFDQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7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UUFDSSxxQkFBcUI7UUFDckIsV0FBVzs7SUFFZiIsImZpbGUiOiJzcmMvYXBwL3ByaWthei9wcmlrYXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLypodG1sLCBib2R5LCAjd3JhcHBlciwgI3BhZ2Utd3JhcHBlciB7aGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO30qL1xyXG5cclxuXHJcblxyXG5cclxuICAgICN3cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNwYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIycHggMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjh2aDtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUb3AgTmF2aWdhdGlvbiAqL1xyXG5cclxuLnRvcC1uYXY+bGk+YSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnRvcC1uYXY+bGk+YTpob3ZlcixcclxuLnRvcC1uYXY+bGk+YTpmb2N1cyxcclxuLnRvcC1uYXY+Lm9wZW4+YSxcclxuLnRvcC1uYXY+Lm9wZW4+YTpob3ZlcixcclxuLnRvcC1uYXY+Lm9wZW4+YTpmb2N1cyB7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbn1cclxuXHJcblxyXG4vKiBTaWRlIE5hdmlnYXRpb24gKi9cclxuXHJcbiAgICAuc2lkZS1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgbGVmdDogMjI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjI1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwwLDAsMSkgc29saWQ7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzVBNkI3RDsqL1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPmEge1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2IGxpIGE6aG92ZXIsXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdj5saT51bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlLW5hdj5saT51bD5saT5hIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAzOHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICBcclxuICAgIH1cclxuLm5hdmJhciAubmF2ID4gbGkgPiBhOmhvdmVyID4gLmxhYmVsIHtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuLlNlYXJjaHtcclxuXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLlNlYXJjaCBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuU2VhcmNoIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5TZWFyY2ggYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwNWEwODE7XHJcbiAgfVxyXG5cclxudWwgbGkgdWwgbGl7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxudWwgbGk6aG92ZXIgdWwgbGl7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbnVsIGxpIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICBtYXJnaW46IDQlIGF1dG8gMTUlIGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDQwJTsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNsb3NlOmhvdmVyLC5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBBZGQgWm9vbSBBbmltYXRpb24gKi9cclxuLmFuaW1hdGUge1xyXG4gICAgYW5pbWF0aW9uOiB6b29tIDAuNnNcclxufVxyXG5Aa2V5ZnJhbWVzIHpvb20ge1xyXG4gICAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX0gXHJcbiAgICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cclxufVxyXG4uY2FyZHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIG1hcmdpbi10b3A6MiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MzUlO1xyXG59XHJcbi50ZXh0LWljb25ze1xyXG4gICAgbWFyZ2luLWxlZnQ6MyU7XHJcbiAgICBtYXJnaW4tdG9wOjElO1xyXG59XHJcblxyXG4uaW5wdXRze1xyXG4gICAgbWFyZ2luLWxlZnQ6MSVcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxufVxyXG4ubW9kYWwxIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgIFxyXG59XHJcbi5tb2RhbDIge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4udG9wLW5hdntcclxucGFkZGluZzogMCAxNXB4O1xyXG5cclxufVxyXG5cclxuLnRvcC1uYXYye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7Ki9cclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcclxuICAgIFxyXG59XHJcbi5kcm9wZG93biB1bCBsaSB1bCBsaXtcclxuZGlzcGxheTpub25lO1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duIGE6aG92ZXJ7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcGRvd24gYTpob3ZlciB1bCBsaXtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbi50b3AtbmF2MiBsaSBhe1xyXG53aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG4uZHJvcGRvd24gYXtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGNvbG9yOiMwNWEwODE7XHJcblxyXG5cclxufVxyXG5cclxuLmlucHV0cyBzZWxlY3R7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuY29sb3I6d2hpdGU7XHJcbi1tb3otYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG4td2Via2l0LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG59XHJcbi5pbnB1dHMgc2VsZWN0OmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG5jb2xvcjpibGFjaztcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmxvZ2luX2J0bntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjg1KTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luX2J0bjpob3ZlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1ib3h7XHJcbiAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtYnRue1xyXG4gICAgICAgIGNvbG9yOiMwNWEwODE7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlYXJjaC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogMCBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLXRleHR7XHJcbiAgICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAuc2VhcmNoLWJveDpob3ZlciA+IC5zZWFyY2gtYnRue1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jbGllbnQgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcblxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/prikaz/prikaz.component.html":
/*!**********************************************!*\
  !*** ./src/app/prikaz/prikaz.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/admin\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n           \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n                <li class=\"dropdown\"  style=\"margin-right: 15px;\">\n                    <a > {{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                    <ul class=\"top-nav2\">\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/korpa\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:5px;\" class=\"fa fa-shopping-cart\"></i>Korpa</a></li>\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/stats\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:8px;\" class=\"fa fa-bar-chart-o\"></i>Statistika</a></li>\n\n                        <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                        <li (click)=\"logout()\"  style=\"margin-top:10%;\"><a  style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li></ul>\n                </li>\n            </ul>\n<!-- Meni sa leve strane -->\n    <ul class=\"nav navbar-nav side-nav\">\n        <li>\n            <a routerLink=\"/admin\"> POCETNA</a>\n        </li>\n        <li>\n            <a routerLink=\"/spisak\">SPISAK RADNIKA</a>\n        </li>\n        <li>\n                <a routerLink=\"/narucivanje\" >NARUCIVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a routerLink=\"/naruceno\">NARUCENI PROIZVODI</a>           \n        </li>\n        <li>\n                <a onclick=\"document.getElementById('exchange').style.display='block'\" style=\"cursor:pointer;\">ZAMENA PROIZVODA</a>           \n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('registering').style.display='block'\"  style=\"cursor:pointer;\">REGISTRACIJA RADNIKA</a>\n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('adding').style.display='block'\"  style=\"cursor:pointer;\">DODAVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a onclick=\"document.getElementById('discount').style.display='block'\"  style=\"cursor:pointer;\">ODREDI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/automatski-popust\">AUTOMATSKI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/racuni\">PRIKAZ RACUNA</a>\n        </li>\n        <li>\n                <a routerLink=\"/prikaz\">PRIKAZ FAKTURE</a>\n            </li>\n       \n    </ul>\n</nav>\n\n            <div id=\"page-wrapper\">\n                <div class=\"container-fluid\">\n                    <!-- Page Heading -->\n                    <div class=\"row\" id=\"main\" >\n                        <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                          \n                                <div class=\"col-md-12\">\n                                <h4>Prikaz fakture</h4>\n                                <div class=\"table-responsive\">\n                        \n                                        \n                                      <table id=\"mytable\" class=\"table table-bordred table-striped\">\n                                           \n                                           <thead>\n                                            <th class=\"text-center\">Naruceni proizvodi</th>\n                                            <th class=\"text-center\">Dobavljac</th>\n                                             <th class=\"text-center\">Sifra fakture</th>\n                                               <th class=\"text-center\">PDF</th>\n                                           </thead>\n                            <tbody>\n                            \n                            <tr *ngFor = \"let invoice of invoiceService.invoices\">\n                            <td class=\"text-center\">{{invoice.orderedProducts}}</td>\n                            <td class=\"text-center\">{{invoice.supplier}}</td>\n                            <td class=\"text-center\">{{invoice.id}}</td>\n                            <td class=\"text-center\"><a download=\"file.pdf\" ><button (click)= \"openPDF($event)\" id=\"{{invoice.id}}\" class=\"btn btn-danger btn-xs\"><i id=\"{{invoice.id}}\" class=\"far fa-file-pdf\"></i></button></a></td>\n                            </tr>\n    \n                            \n                            \n                        \n                            </tbody>\n                                \n                        </table>\n                        </div>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div  id=\"adding\" class=\"modal justify-content-center\" >\n                <form [formGroup]=\"uploadForm\"  (submit)='addProduct($event)' class=\"modal-content animate justify-content-center\" >\n            \n                    <div class=\"imgcontainer\">\n                      <span onclick=\"document.getElementById('adding').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                      <h1 style=\"text-align:center;color:white\">Dodavanje proizvoda</h1>\n                    </div>   \n                    <div class=\"card\">     \n                            <div class=\"text-icons\">         \n                                    <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                            </div>\n                            <div class=\"inputs\">\n                                <select id=\"producer\" placeholder='Proizvodjac' >\n                                        <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                                      </select>                    </div>\n                    </div>    \n                    <div class=\"card\">     \n                            <div class=\"text-icons\">         \n                                    <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                            </div>\n                            <div class=\"inputs\">\n                                <select id=\"productType\" placeholder='Vrsta proizvoda'>\n                                        <option   *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                                      \n                                      </select>                    </div>\n                    </div>        \n                \n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                    <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                                <input id=\"quantity\" type=\"text\" class=\"form-control\" placeholder=\"Kolicina\" required>\n                            </div>\n                </div>\n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                    <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                                <input id=\"productURL\" type=\"text\" class=\"form-control\" placeholder=\"Website\" required>\n                            </div>\n                </div>\n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                    <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                                <input id=\"warranty\" type=\"text\" class=\"form-control\" placeholder=\"Garancija\" required>\n                            </div>\n                </div>                \n                <div class=\"card\" style=\"text-align:center;\">     \n                        <div class=\"text-icons\">         \n                    <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                    <input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Naziv prozivoda...\" required>\n                        </div>\n                </div>\n                <div class=\"card\" style=\"align-content:center;\">     \n                        <div class=\"text-icons\">         \n                                <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                        </div>\n                        <div class=\"inputs\">\n                    <textarea id=\"properties\" rows=\"4\" cols=\"50\" class=\"form-control\" name=\"description\" placeholder=\"Uneti opis proizvoda...\" required></textarea>                   \n                 </div>\n                </div>\n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                                <i class=\"fas fa-images\" style=\"color:white\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                                <input id=\"image\" type=\"file\" class=\"form-control\" >\n                            </div>\n                </div>\n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                                <i class=\"fas fa-dollar-sign\" style=\"color:white; margin-right: 5%;\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                                <input id=\"price\" type=\"number\" class=\"form-control\" placeholder=\"Cena proizvoda\" required>\n                            </div>\n                </div>\n                <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                        <button type=\"submit\" value=\"Dodaj\" class=\"btn float-right login_btn\"  >Dodaj</button>\n                  </div>\n                                    \n                  </form>\n        </div>\n    \n        <div id=\"registering\" class=\"modal1\">\n                <form (submit)='registerUser($event)' class=\"modal-content animate\">\n            \n                    <div class=\"imgcontainer\">\n                      <span onclick=\"document.getElementById('registering').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                      <h1 style=\"text-align:center;color:white\">Registracija radnika</h1>\n                    </div>   \n                                \n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                    <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                                <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Korisnicko ime...\" required>\n                            </div>\n                </div>\n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                                <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                        </div>\n                        <div class=\"inputs\">\n                                <input id=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Ime\" required>\n                            </div>\n                </div>\n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                                <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>         \n                                       </div>\n                        <div class=\"inputs\">\n                                <input id=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Prezime\" required>\n                            </div>\n                </div>\n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                                <i class=\"fas fa-key\" style=\"color:white\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                                <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Sifra...\" required>\n    \n                            </div>\n                </div>\n    \n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                                <i class=\"material-icons\" style=\"font-size:14px;color:white\">email</i>\n                        </div>\n                        <div class=\"inputs\">\n                                <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\" required>\n    \n                            </div>\n                </div>\n    \n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                                <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                            <select id=\"role\" placeholder='Pozicija'>\n                                    <option value=\"2\">ADMIN</option>\n                                    <option value=\"0\">WORKER</option>\n                                    <option value=\"1\">MANAGER</option>\n                                    <option value=\"3\">OWNER</option>\n                                  </select>                    </div>\n                </div>\n    \n               \n                <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                        <button id=\"registerButton\" type=\"submit\" value=\"Registracija\" class=\"btn float-right login_btn\" >Registracija</button>\n                  </div>\n                                    \n                  </form>\n        </div>\n    \n        <div id=\"ordering\" class=\"modal2\">\n                <form class=\"modal-content animate\" action=\"/action_page.php\">\n            \n                    <div class=\"imgcontainer\">\n                      <span onclick=\"document.getElementById('ordering').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                      <h1 style=\"text-align:center;color:white\">Naruci proizvod</h1>\n                    </div>   \n                                \n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                    <i class=\"fas fa-home\" style=\"color:white;\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                                <select >\n                                        <option value=\"volvo\">Emmi</option>\n                                        <option value=\"saab\">WinWin</option>\n                                        <option value=\"mercedes\">Gigatron</option>\n                                        <option value=\"audi\">LogicShop</option>\n                                      </select>                    </div>\n                </div>\n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                                <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                        </div>\n                        <div class=\"inputs\">\n                                <select>\n                                        <option *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                                      </select>               </div>\n                </div>\n                <div class=\"card\">     \n                        <div class=\"text-icons\">         \n                                <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                        </div>\n                        <div class=\"inputs\">\n                                <select>\n                                        <option value=\"volvo\">Sony HDR-PJ410</option>\n                                        <option value=\"saab\">DESTEK V4 VR Headset</option>\n                                        <option value=\"mercedes\">LG LOUDR</option>\n                                      </select>                              </div>\n                </div>\n                <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%;\">\n                        <button type=\"submit\" style=\"text-align:center;\" value=\"Naruci\" class=\"btn login_btn justify-content-center\" routerLink=\"/admin\" >Naruci</button>\n                  </div>\n                                    \n                  </form>\n        </div>\n    \n        <div id=\"discount\" class=\"modal2\">\n            <form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('discount').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Odredjivanje popusta</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n                    <div class=\"text-icons\">         \n                <i class=\"fas fa-industry\" style=\"color:white;\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <div class=\"inputs\">\n                            <select id=\"producerDiscount\" placeholder='Proizvodjac' >\n                                    <option disabled selected value> -- select an option -- </option>\n                                    <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                                  </select> \n                        </div>                    \n                    </div>\n            </div>\n            <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n                    <div class=\"text-icons\">         \n                                    <i class=\"fas fa-keyboard\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                            <select id=\"productTypeDiscount\" placeholder='Vrsta proizvoda'>\n                                    <option disabled selected value> -- select an option -- </option>\n                                    <option *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                                  </select>\n                    </div>\n            </div>\n            <div class=\"card\" style=\"margin-top:2%;margin-left:28.5%;\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-percent\" style=\"color:white\"></i>\n                            \n                    </div>\n                    <div class=\"inputs\">\n                            <input id=\"procenat\" type=\"number\" class=\"form-control\" style=\"text-align: center; width: 150px\" placeholder=\"Iznos procenta\" required min=\"0\" max=\"100\" oninvalid=\"this.setCustomValidity('Vrednost manje ili jednaka 100')\" oninput=\"this.setCustomValidity('')\"> \n                    </div>\n            </div>\n            <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%;\">\n                    <button type=\"submit\" style=\"text-align:center;\" value=\"Izvrsi\" class=\"btn login_btn justify-content-center\">Izvrsi</button>\n                    \n              </div>\n              <div style=\"margin-top:2%;margin-left:24;\">\n                    <p style=\"text-align:center; color: white\">Status: </p> \n                    <p style=\"text-align:center; color: lime\">{{ this.response }}</p>\n              </div>\n                                \n              </form>\n    </div>\n    <div id=\"stats\" class=\"modal2\">\n        <form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('stats').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Statistika proizvoda</h1>\n            </div>   \n                        \n        <div class=\"card-stat\" style=\"margin-top:2%;\">     \n            <fusioncharts\n            width=\"400\"\n            height=\"300\"\n            type=\"Column2d\"\n            [dataSource]=dataSource>\n        </fusioncharts>\n        </div>\n        </form>\n                             \n    </div>\n    <div id=\"exchange\" class=\"modal2\">\n        <form (submit)='exchangeProduct($event)' class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('exchange').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Zameni proizvod</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%;\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <a>Sifra racuna proizvoda od kupca    </a>\n                            <select id=\"givingID\" class=\"text-center\" style=\"margin-bottom:10%; margin-left: 5%; width: 30%;\">\n                                    <option  class=\"text-center\" *ngFor=\"let bill of billsService.bills\" value=\"{{ bill.id }}\">{{ bill.id }}</option>\n                            </select> <br>\n                            <div class=\"inputs\">\n                                <input id=\"givinProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra proizvoda koji se menja\" required>\n                            </div><br><br>\n                            <div class=\"inputs\">\n                                <input id=\"takingProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra zeljenog proizvoda\" required>\n                            </div>\n                        </div>\n\n                                  </div>\n            </div>\n           \n            <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%; \">\n                    <input type=\"submit\"  value=\"Zameni\" class=\"btn float-right login_btn\" style=\"width:40%;\">\n              </div>\n                           \n              </form>\n    </div>\n\n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi koji su trenutno dostupni u prodavnici. Moguće je promeniti bilo koji atribut postojaćeg proizvoda, moguće je ukloniti proizvod, a takođe i izvršiti popust unošenjem odgovarajućeg iznosa procenta. Na crvenu strelicu se proizvod ubacuje u korpu. \n\n\nSpisak radnika\n\n* Omogućen je uvid u spisak svih radnika koji rade u magacinu Techtradea kao i njihove informacije. Moguće je ukloniti korisnika.\n\n\nNaručivanje proizvoda\n\n* Na početku su izlistani svi proizvodi svih dobavljača. Prilikom narudžbenice, moguće je u korpu dodati proizvode pritiskom na crvenu strelicu. U korpi željeni kvantitet unosi sam korisnik. Moguće je obrisati sadržaj iz korpe. Pritiskom na dugme za kupovinu potvrđuje se porudzbina. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nZameni proizvod\n\n* Izvršiti odabir šifre računa;\n* Izvršiti odabir šifre proizvoda na računu;\n* Uneti šifru željenog proizvoda za zamenu;\n* Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka.\n\n\nRegistracija radnika\n\n* Omogućava unošenje novih autorizovanih korisnika. Unošenjem svih potrebnih podataka, kao i podatka koji autorizovani korisnik je u pitanju, biće izbačena odgovarajuća poruka.\n\n\nDodavanje proizvoda\n\n* Moguće je dodati nov proizvod. U slučaju da proizvod već postoji, biće izbačena odgovarajuća poruka.\n\n\nOdredi popust\n\n* Odabrati proizvođača;\n* Odabrati željeni proizvod;\n* Uneti iznos procenta;\n* Pritiskom na dugme 'Izvrši', biće izbačena odgovarajuća poruka.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\nPrikaz računa\n\n* Omogućen je uvid u tabelu sa računima;\n* Moguće je izvesti račun koji je generisan u PDF formi.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n    \n    "

/***/ }),

/***/ "./src/app/prikaz/prikaz.component.ts":
/*!********************************************!*\
  !*** ./src/app/prikaz/prikaz.component.ts ***!
  \********************************************/
/*! exports provided: PrikazComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrikazComponent", function() { return PrikazComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_invoices_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/invoices.service */ "./src/app/services/invoices.service.ts");
/* harmony import */ var _services_bills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bills.service */ "./src/app/services/bills.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_producers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/producers.service */ "./src/app/services/producers.service.ts");
/* harmony import */ var _services_product_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/product-type.service */ "./src/app/services/product-type.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_delete_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/delete.service */ "./src/app/services/delete.service.ts");
/* harmony import */ var _services_single_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/single-service.service */ "./src/app/services/single-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/exchange-product.service */ "./src/app/services/exchange-product.service.ts");
















var PrikazComponent = /** @class */ (function () {
    function PrikazComponent(invoiceService, billsService, userService, registerService, productService, producersService, productTypeService, searchService, http, formBuilder, deleteService, single, router, exchangeProductService) {
        this.invoiceService = invoiceService;
        this.billsService = billsService;
        this.userService = userService;
        this.registerService = registerService;
        this.productService = productService;
        this.producersService = producersService;
        this.productTypeService = productTypeService;
        this.searchService = searchService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.deleteService = deleteService;
        this.single = single;
        this.router = router;
        this.exchangeProductService = exchangeProductService;
        this.pozicija = localStorage.getItem('username');
        this.endpointURL5 = 'http://78.46.117.245:9000/logout';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.userFile = File;
        this.uploadForm = _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroup"];
    }
    PrikazComponent.prototype.ngOnInit = function () {
        this.producersService.getAllProducers();
        this.productTypeService.getAllProductTypes();
        this.invoiceService.getAllInvoices();
        this.billsService.getAllBills();
        this.uploadForm = this.formBuilder.group({
            image: [''],
            name: [''],
            price: [''],
            producer: [''],
            productType: [''],
            productURL: [''],
            properties: [''],
            quantity: [''],
            warranty: [''],
            vendorPrice: ['']
        });
    };
    PrikazComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL5, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    PrikazComponent.prototype.openPDF = function (event) {
        event.preventDefault();
        var id = event.srcElement.id;
        this.invoiceService.getPDF(id);
    };
    PrikazComponent.prototype.onSelectFile = function (event) {
        var selectFile = event.target.files[0];
        this.userFile = selectFile;
    };
    PrikazComponent.prototype.addProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var image = target.querySelector('#image');
        /* if(image.files.length > 0){
          const file = image.files[0];
          this.uploadForm.get('file').setValue(file);
          this.slika = this.uploadForm.get('file').value;
        }  */
        // var formData = new FormData();
        //formData.append('image', image);
        var name = target.querySelector('#name').value;
        this.uploadForm.get('name').setValue(name);
        var price = target.querySelector('#price').value;
        this.uploadForm.get('price').setValue(price);
        var producer = target.querySelector('#producer').value;
        this.uploadForm.get('producer').setValue(producer);
        var productType = target.querySelector('#productType').value;
        this.uploadForm.get('productType').setValue(productType);
        var productURL = target.querySelector('#productURL').value;
        this.uploadForm.get('productURL').setValue(productURL);
        var properties = target.querySelector('#properties').value;
        this.uploadForm.get('properties').setValue(properties);
        var quantity = target.querySelector('#quantity').value;
        this.uploadForm.get('quantity').setValue(quantity);
        var warranty = target.querySelector('#warranty').value;
        this.uploadForm.get('warranty').setValue(warranty);
        var vendorPrice = target.querySelector('#vendorPrice').value;
        this.uploadForm.get('vendorPrice').setValue(vendorPrice);
        var data = JSON.stringify(this.uploadForm.value);
        var formData = new FormData();
        //formData.append("productData", data);
        formData.append("image", this.userFile);
        // formData.append("image", this.uploadForm.get('file').value);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("producer", producer);
        formData.append("productType", productType);
        formData.append("productURL", productURL);
        formData.append("properties", properties);
        formData.append("quantity", quantity);
        formData.append("warranty", warranty);
        formData.append("vendorPrice", vendorPrice);
        /*console.log( formData  image, name, price, producer, productType, productURL, properties, quantity, warranty );*/
        /*this.registerService.sendProductDetails(image, name, price, producer, productType, productURL, properties, quantity, warranty ).subscribe();*/
        this.registerService.sendProductDetails(formData).subscribe(function (response) {
            window.alert("Proizvod je uspešno dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 200);
    };
    PrikazComponent.prototype.registerUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        var firstName = target.querySelector('#firstName').value;
        var lastName = target.querySelector('#lastName').value;
        var email = target.querySelector('#email').value;
        var role = target.querySelector('#role').value;
        this.registerService.sendUserDetails(firstName, lastName, username, email, password, role).subscribe(function (response) { window.alert("Uspešna registracija korisnika!"); }, function (err) { _this.handleError(err); });
        //)
        /*
        console.log(username,password)
        console.log(error);
        console.log(localStorage.getItem("token"));
        */
    };
    PrikazComponent.prototype.addDiscount = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var producer = target.querySelector('#producerDiscount').value;
        var productType = target.querySelector('#productTypeDiscount').value;
        var discountCoefficient = target.querySelector("#procenat").value;
        this.productService.discountProduct(producer, productType, discountCoefficient).subscribe(function (response) {
            window.alert("Popust je dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 150);
        //zbog unosa u bazu i responsa stavljamo timeout da bi ucitao nove cene a ne stare
    };
    PrikazComponent.prototype.exchangeProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var billID = target.querySelector('#givingID').value;
        var givinProductID = target.querySelector('#givinProductID').value;
        var takingProductID = target.querySelector('#takingProductID').value;
        this.exchangeProductService.returnProduct(billID, givinProductID, takingProductID).subscribe(function (data) {
            window.alert("Novac koji se vraca je: " + data.moneyToReturn + " RSD");
        }, function (err) { _this.handleError(err); /*console.log(err.error.message);console.log(err.status);*/ });
    };
    PrikazComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    PrikazComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-prikaz',
            template: __webpack_require__(/*! ./prikaz.component.html */ "./src/app/prikaz/prikaz.component.html"),
            styles: [__webpack_require__(/*! ./prikaz.component.css */ "./src/app/prikaz/prikaz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_invoices_service__WEBPACK_IMPORTED_MODULE_2__["InvoicesService"],
            _services_bills_service__WEBPACK_IMPORTED_MODULE_3__["BillsService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"],
            _services_producers_service__WEBPACK_IMPORTED_MODULE_7__["ProducersService"],
            _services_product_type_service__WEBPACK_IMPORTED_MODULE_8__["ProductTypeService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
            _services_delete_service__WEBPACK_IMPORTED_MODULE_12__["DeleteService"],
            _services_single_service_service__WEBPACK_IMPORTED_MODULE_13__["SingleServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"],
            _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_15__["ExchangeProductService"]])
    ], PrikazComponent);
    return PrikazComponent;
}());



/***/ }),

/***/ "./src/app/racuni/racuni.component.css":
/*!*********************************************!*\
  !*** ./src/app/racuni/racuni.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n        margin-top:8vh;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    ul li:hover ul li{\r\n    display:block;\r\n}\r\n\r\n    ul li ul li a:hover{\r\n    color:black;\r\n}\r\n\r\n    .modal-content {\r\n    background-color: rgba(0,0,0,.8);\r\n    margin: 4% auto 15% auto;\r\n    border: 1px solid #888;\r\n    width: 40%; \r\n    padding-bottom: 30px;\r\n    align-content: center;\r\n}\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n    position: absolute;\r\n    right: 25px;\r\n    top: 0;\r\n    color: white;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n}\r\n\r\n    .close:hover,.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n    -webkit-animation: zoom 0.6s;\r\n            animation: zoom 0.6s\r\n}\r\n\r\n    @-webkit-keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    @keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    .card{\r\n    display:flex;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    margin-left:35%;\r\n}\r\n\r\n    .text-icons{\r\n    margin-left:3%;\r\n    margin-top:1%;\r\n}\r\n\r\n    .inputs{\r\n    margin-left:1%\r\n}\r\n\r\n    .modal {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n    .modal1 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .modal2 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .top-nav{\r\npadding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n    float: left;\r\n    position: fixed;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n    \r\n}\r\n\r\n    .dropdown ul li ul li{\r\ndisplay:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\ncursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\ndisplay:inline-block;\r\n\r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\nwhite-space: normal;\r\ntext-decoration: none;\r\n\r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\n    color:#05a081;\r\n\r\n\r\n}\r\n\r\n    .inputs select{\r\nposition: relative;\r\nbackground-color:black;\r\ncolor:white;\r\nborder-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\nbackground-color: #05a081;\r\ncolor:black;\r\n}\r\n\r\n    .login_btn{\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 100px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    .search-box{\r\n        left: 20%;\r\n        position: absolute;\r\n        border-radius: 40%;\r\n        padding: 10px;\r\n        height: 40px;\r\n    }\r\n\r\n    .search-btn{\r\n        color:#05a081;\r\n        float: right;\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 50%;\r\n        background: #222;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: 0.4s;\r\n    }\r\n\r\n    .search-text {\r\n        font-size: 17px;\r\n        border: none;\r\n        background: none;\r\n        float: left;\r\n        padding: 0;\r\n        color: white;\r\n        transition: 0.4s;\r\n        line-height: 40px;\r\n        width: 0px;\r\n        \r\n      }\r\n\r\n    input[type=\"text\"]{\r\n        border-color: none;\r\n        box-shadow: none;\r\n        outline: 0 none;\r\n      }\r\n\r\n    .search-box:hover > .search-text{\r\n          width: 240px;\r\n          padding: 0 6px;\r\n      }\r\n\r\n    .search-box:hover > .search-btn{\r\n        background: white;\r\n    }\r\n\r\n    .client a{\r\n        text-decoration: none;\r\n        color:white;\r\n\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFjdW5pL3JhY3VuaS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBGQUEwRjs7SUFFdEY7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBQ0Esd0VBQXdFOztJQUt4RTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCOztJQUdKLG1CQUFtQjs7SUFFbkI7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7SUFFQTs7Ozs7SUFLSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztJQUdBLG9CQUFvQjs7SUFFaEI7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUNBQW1DO1FBQ25DLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHVDQUF1QztJQUMzQzs7SUFFQTs7UUFFSSxhQUFhO1FBQ2Isb0NBQW9DO1FBQ3BDLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsdUNBQXVDO0lBQzNDOztJQUVBO1FBQ0ksY0FBYztRQUNkLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsV0FBVzs7SUFFZjs7SUFDSjtFQUNFLFNBQVM7QUFDWDs7SUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7SUFDQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztJQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7SUFDQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7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UUFDSSxxQkFBcUI7UUFDckIsV0FBVzs7SUFFZiIsImZpbGUiOiJzcmMvYXBwL3JhY3VuaS9yYWN1bmkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLypodG1sLCBib2R5LCAjd3JhcHBlciwgI3BhZ2Utd3JhcHBlciB7aGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO30qL1xyXG5cclxuXHJcblxyXG5cclxuICAgICN3cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNwYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIycHggMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjh2aDtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUb3AgTmF2aWdhdGlvbiAqL1xyXG5cclxuLnRvcC1uYXY+bGk+YSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnRvcC1uYXY+bGk+YTpob3ZlcixcclxuLnRvcC1uYXY+bGk+YTpmb2N1cyxcclxuLnRvcC1uYXY+Lm9wZW4+YSxcclxuLnRvcC1uYXY+Lm9wZW4+YTpob3ZlcixcclxuLnRvcC1uYXY+Lm9wZW4+YTpmb2N1cyB7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbn1cclxuXHJcblxyXG4vKiBTaWRlIE5hdmlnYXRpb24gKi9cclxuXHJcbiAgICAuc2lkZS1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgbGVmdDogMjI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjI1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwwLDAsMSkgc29saWQ7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzVBNkI3RDsqL1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPmEge1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2IGxpIGE6aG92ZXIsXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdj5saT51bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlLW5hdj5saT51bD5saT5hIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAzOHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICBcclxuICAgIH1cclxuLm5hdmJhciAubmF2ID4gbGkgPiBhOmhvdmVyID4gLmxhYmVsIHtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuLlNlYXJjaHtcclxuXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLlNlYXJjaCBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuU2VhcmNoIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5TZWFyY2ggYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwNWEwODE7XHJcbiAgfVxyXG5cclxudWwgbGkgdWwgbGl7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxudWwgbGk6aG92ZXIgdWwgbGl7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcbnVsIGxpIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5cclxuLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICBtYXJnaW46IDQlIGF1dG8gMTUlIGF1dG87XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgd2lkdGg6IDQwJTsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuLmNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgdG9wOiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmNsb3NlOmhvdmVyLC5jbG9zZTpmb2N1cyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKiBBZGQgWm9vbSBBbmltYXRpb24gKi9cclxuLmFuaW1hdGUge1xyXG4gICAgYW5pbWF0aW9uOiB6b29tIDAuNnNcclxufVxyXG5Aa2V5ZnJhbWVzIHpvb20ge1xyXG4gICAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX0gXHJcbiAgICB0byB7dHJhbnNmb3JtOiBzY2FsZSgxKX1cclxufVxyXG4uY2FyZHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIG1hcmdpbi10b3A6MiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6MzUlO1xyXG59XHJcbi50ZXh0LWljb25ze1xyXG4gICAgbWFyZ2luLWxlZnQ6MyU7XHJcbiAgICBtYXJnaW4tdG9wOjElO1xyXG59XHJcblxyXG4uaW5wdXRze1xyXG4gICAgbWFyZ2luLWxlZnQ6MSVcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxufVxyXG4ubW9kYWwxIHtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgIFxyXG59XHJcbi5tb2RhbDIge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4udG9wLW5hdntcclxucGFkZGluZzogMCAxNXB4O1xyXG5cclxufVxyXG5cclxuLnRvcC1uYXYye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7Ki9cclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEycHggcmdiYSgwLDAsMCwuMTc1KTtcclxuICAgIFxyXG59XHJcbi5kcm9wZG93biB1bCBsaSB1bCBsaXtcclxuZGlzcGxheTpub25lO1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duIGE6aG92ZXJ7XHJcbmN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZHJvcGRvd24gYTpob3ZlciB1bCBsaXtcclxuZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbi50b3AtbmF2MiBsaSBhe1xyXG53aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG59XHJcblxyXG4uZHJvcGRvd24gYXtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIGNvbG9yOiMwNWEwODE7XHJcblxyXG5cclxufVxyXG5cclxuLmlucHV0cyBzZWxlY3R7XHJcbnBvc2l0aW9uOiByZWxhdGl2ZTtcclxuYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuY29sb3I6d2hpdGU7XHJcbi1tb3otYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG4td2Via2l0LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG59XHJcbi5pbnB1dHMgc2VsZWN0OmhvdmVye1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG5jb2xvcjpibGFjaztcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmxvZ2luX2J0bntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjg1KTtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmxvZ2luX2J0bjpob3ZlcntcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlYXJjaC1ib3h7XHJcbiAgICAgICAgbGVmdDogMjAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0MCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWFyY2gtYnRue1xyXG4gICAgICAgIGNvbG9yOiMwNWEwODE7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlYXJjaC10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC40cztcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgaW5wdXRbdHlwZT1cInRleHRcIl17XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogMCBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLXRleHR7XHJcbiAgICAgICAgICB3aWR0aDogMjQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDZweDtcclxuICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAuc2VhcmNoLWJveDpob3ZlciA+IC5zZWFyY2gtYnRue1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jbGllbnQgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcblxyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/racuni/racuni.component.html":
/*!**********************************************!*\
  !*** ./src/app/racuni/racuni.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/admin\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n                <li class=\"dropdown\"  style=\"margin-right: 15px;\">\n                    <a > {{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                    <ul class=\"top-nav2\">\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/korpa\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:5px;\" class=\"fa fa-shopping-cart\"></i>Korpa</a></li>\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/stats\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:8px;\" class=\"fa fa-bar-chart-o\"></i>Statistika</a></li>\n\n                        <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                        <li (click)=\"logout()\"  style=\"margin-top:10%;\"><a  style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li></ul>\n                </li>\n            </ul>\n<!-- Meni sa leve strane -->\n    <ul class=\"nav navbar-nav side-nav\">\n        <li>\n            <a routerLink=\"/admin\"> POCETNA</a>\n        </li>\n        <li>\n            <a routerLink=\"/spisak\">SPISAK RADNIKA</a>\n        </li>\n        <li>\n                <a routerLink=\"/narucivanje\" >NARUCIVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a routerLink=\"/naruceno\">NARUCENI PROIZVODI</a>           \n        </li>\n        <li>\n                <a onclick=\"document.getElementById('exchange').style.display='block'\" style=\"cursor:pointer;\">ZAMENA PROIZVODA</a>           \n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('registering').style.display='block'\"  style=\"cursor:pointer;\">REGISTRACIJA RADNIKA</a>\n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('adding').style.display='block'\"  style=\"cursor:pointer;\">DODAVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a onclick=\"document.getElementById('discount').style.display='block'\"  style=\"cursor:pointer;\">ODREDI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/automatski-popust\">AUTOMATSKI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/racuni\">PRIKAZ RACUNA</a>\n        </li>\n        <li>\n                <a routerLink=\"/prikaz\">PRIKAZ FAKTURE</a>\n            </li>\n       \n    </ul>\n</nav>\n\n    <div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <div class=\"row\" id=\"main\" >\n                <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                  \n                        <div class=\"col-md-12\">\n                        <h4>Prikaz računa</h4>\n                        <div class=\"table-responsive\">\n                \n                                \n                              <table id=\"mytable\" class=\"table table-bordred table-striped\">\n                                   \n                                   <thead>\n                                    <th class=\"text-center\">Kasir</th>\n                                    <th class=\"text-center\">Datum prodaje</th>\n                                     <th class=\"text-center\">Iznos racuna</th>\n                                       <th class=\"text-center\">PDF</th>\n                                   </thead>\n                    <tbody>\n                    \n                    <tr *ngFor = \"let bill of billsService.bills\">\n                    <td class=\"text-center\">{{bill.cashier}}</td>\n                    <td class=\"text-center\">{{bill.saleDate}}</td>\n                    <td class=\"text-center\">{{bill.price}} RSD</td>\n                    <td class=\"text-center\"><a download=\"file.pdf\" ><button (click)= \"openPDF($event)\" id=\"{{bill.id}}\" class=\"btn btn-danger btn-xs\"><i id=\"{{bill.id}}\" class=\"far fa-file-pdf\"></i></button></a></td>\n                    </tr>\n                    \n                \n                    </tbody>\n                        \n                </table>\n                </div>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div  id=\"adding\" class=\"modal justify-content-center\" >\n        <form [formGroup]=\"uploadForm\"  (submit)='addProduct($event)' class=\"modal-content animate justify-content-center\" >\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('adding').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Dodavanje proizvoda</h1>\n            </div>   \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"producer\" placeholder='Proizvodjac' >\n                                <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                              </select>                    </div>\n            </div>    \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"productType\" placeholder='Vrsta proizvoda'>\n                                <option   *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                              \n                              </select>                    </div>\n            </div>        \n        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"quantity\" type=\"text\" class=\"form-control\" placeholder=\"Kolicina\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"productURL\" type=\"text\" class=\"form-control\" placeholder=\"Website\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"warranty\" type=\"text\" class=\"form-control\" placeholder=\"Garancija\" required>\n                    </div>\n        </div>                \n        <div class=\"card\" style=\"text-align:center;\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n            <input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Naziv prozivoda...\" required>\n                </div>\n        </div>\n        <div class=\"card\" style=\"align-content:center;\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n            <textarea id=\"properties\" rows=\"4\" cols=\"50\" class=\"form-control\" name=\"description\" placeholder=\"Uneti opis proizvoda...\" required></textarea>                   \n         </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-images\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"image\" type=\"file\" class=\"form-control\" >\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-dollar-sign\" style=\"color:white; margin-right: 5%;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"price\" type=\"number\" class=\"form-control\" placeholder=\"Cena proizvoda\" required>\n                    </div>\n        </div>\n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <button type=\"submit\" value=\"Dodaj\" class=\"btn float-right login_btn\"  >Dodaj</button>\n          </div>\n                            \n          </form>\n</div>\n\n<div id=\"registering\" class=\"modal1\">\n        <form (submit)='registerUser($event)' class=\"modal-content animate\">\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('registering').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Registracija radnika</h1>\n            </div>   \n                        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Korisnicko ime...\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Ime\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>         \n                               </div>\n                <div class=\"inputs\">\n                        <input id=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Prezime\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-key\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Sifra...\" required>\n\n                    </div>\n        </div>\n\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">email</i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\" required>\n\n                    </div>\n        </div>\n\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                    <select id=\"role\" placeholder='Pozicija'>\n                            <option value=\"2\">ADMIN</option>\n                            <option value=\"0\">WORKER</option>\n                            <option value=\"1\">MANAGER</option>\n                            <option value=\"3\">OWNER</option>\n                          </select>                    </div>\n        </div>\n\n       \n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <button id=\"registerButton\" type=\"submit\" value=\"Registracija\" class=\"btn float-right login_btn\">Registracija</button>\n          </div>\n                            \n          </form>\n</div>\n\n\n\n<div id=\"discount\" class=\"modal2\">\n    <form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('discount').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n          <h1 style=\"text-align:center;color:white\">Odredjivanje popusta</h1>\n        </div>   \n                    \n    <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n            <div class=\"text-icons\">         \n        <i class=\"fas fa-industry\" style=\"color:white;\"></i>\n            </div>\n            <div class=\"inputs\">\n                <div class=\"inputs\">\n                    <select id=\"producerDiscount\" placeholder='Proizvodjac' >\n                            <option disabled selected value> -- select an option -- </option>\n                            <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                          </select> \n                </div>                    \n            </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n            <div class=\"text-icons\">         \n                            <i class=\"fas fa-keyboard\" style=\"color:white\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <select id=\"productTypeDiscount\" placeholder='Vrsta proizvoda'>\n                            <option disabled selected value> -- select an option -- </option>\n                            <option *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                          </select>\n            </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:2%;margin-left:28.5%;\">     \n            <div class=\"text-icons\">         \n                    <i class=\"fas fa-percent\" style=\"color:white\"></i>\n                    \n            </div>\n            <div class=\"inputs\">\n                    <input id=\"procenat\" type=\"number\" class=\"form-control\" style=\"text-align: center; width: 150px\" placeholder=\"Iznos procenta\" required min=\"0\" max=\"100\" oninvalid=\"this.setCustomValidity('Vrednost manje ili jednaka 100')\" oninput=\"this.setCustomValidity('')\"> \n            </div>\n    </div>\n    <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%;\">\n            <button type=\"submit\" style=\"text-align:center;\" value=\"Izvrsi\" class=\"btn login_btn justify-content-center\">Izvrsi</button>\n            \n      </div>\n      <div style=\"margin-top:2%;margin-left:24;\">\n            <p style=\"text-align:center; color: white\">Status: </p> \n            <p style=\"text-align:center; color: lime\">{{ this.response }}</p>\n      </div>\n                        \n      </form>\n</div>\n\n<div id=\"exchange\" class=\"modal2\">\n        <form (submit)='exchangeProduct($event)' class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('exchange').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Zameni proizvod</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%;\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <a>Sifra racuna proizvoda od kupca    </a>\n                            <select id=\"givingID\" class=\"text-center\" style=\"margin-bottom:10%; margin-left: 5%; width: 30%;\">\n                                    <option  class=\"text-center\" *ngFor=\"let bill of billsService.bills\" value=\"{{ bill.id }}\">{{ bill.id }}</option>\n                            </select> <br>\n                            <div class=\"inputs\">\n                                <input id=\"givinProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra proizvoda koji se menja\" required>\n                            </div><br><br>\n                            <div class=\"inputs\">\n                                <input id=\"takingProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra zeljenog proizvoda\" required>\n                            </div>\n                        </div>\n\n                                  </div>\n            </div>\n           \n            <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%; \">\n                    <input type=\"submit\"  value=\"Zameni\" class=\"btn float-right login_btn\" style=\"width:40%;\">\n              </div>\n                           \n              </form>\n    </div>\n\n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi koji su trenutno dostupni u prodavnici. Moguće je promeniti bilo koji atribut postojaćeg proizvoda, moguće je ukloniti proizvod, a takođe i izvršiti popust unošenjem odgovarajućeg iznosa procenta. Na crvenu strelicu se proizvod ubacuje u korpu. \n\n\nSpisak radnika\n\n* Omogućen je uvid u spisak svih radnika koji rade u magacinu Techtradea kao i njihove informacije. Moguće je ukloniti korisnika.\n\n\nNaručivanje proizvoda\n\n* Na početku su izlistani svi proizvodi svih dobavljača. Prilikom narudžbenice, moguće je u korpu dodati proizvode pritiskom na crvenu strelicu. U korpi željeni kvantitet unosi sam korisnik. Moguće je obrisati sadržaj iz korpe. Pritiskom na dugme za kupovinu potvrđuje se porudzbina. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nZameni proizvod\n\n* Izvršiti odabir šifre računa;\n* Izvršiti odabir šifre proizvoda na računu;\n* Uneti šifru željenog proizvoda za zamenu;\n* Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka.\n\n\nRegistracija radnika\n\n* Omogućava unošenje novih autorizovanih korisnika. Unošenjem svih potrebnih podataka, kao i podatka koji autorizovani korisnik je u pitanju, biće izbačena odgovarajuća poruka.\n\n\nDodavanje proizvoda\n\n* Moguće je dodati nov proizvod. U slučaju da proizvod već postoji, biće izbačena odgovarajuća poruka.\n\n\nOdredi popust\n\n* Odabrati proizvođača;\n* Odabrati željeni proizvod;\n* Uneti iznos procenta;\n* Pritiskom na dugme 'Izvrši', biće izbačena odgovarajuća poruka.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\nPrikaz računa\n\n* Omogućen je uvid u tabelu sa računima;\n* Moguće je izvesti račun koji je generisan u PDF formi.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/racuni/racuni.component.ts":
/*!********************************************!*\
  !*** ./src/app/racuni/racuni.component.ts ***!
  \********************************************/
/*! exports provided: RacuniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RacuniComponent", function() { return RacuniComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_bills_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/bills.service */ "./src/app/services/bills.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_producers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/producers.service */ "./src/app/services/producers.service.ts");
/* harmony import */ var _services_product_type_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/product-type.service */ "./src/app/services/product-type.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_delete_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/delete.service */ "./src/app/services/delete.service.ts");
/* harmony import */ var _services_single_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/single-service.service */ "./src/app/services/single-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/exchange-product.service */ "./src/app/services/exchange-product.service.ts");















var RacuniComponent = /** @class */ (function () {
    function RacuniComponent(billsService, userService, registerService, productService, producersService, productTypeService, searchService, http, formBuilder, deleteService, single, router, exchangeProductService) {
        this.billsService = billsService;
        this.userService = userService;
        this.registerService = registerService;
        this.productService = productService;
        this.producersService = producersService;
        this.productTypeService = productTypeService;
        this.searchService = searchService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.deleteService = deleteService;
        this.single = single;
        this.router = router;
        this.exchangeProductService = exchangeProductService;
        this.pozicija = localStorage.getItem('username');
        this.endpointURL5 = 'http://78.46.117.245:9000/logout';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.userFile = File;
        this.uploadForm = _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"];
    }
    RacuniComponent.prototype.ngOnInit = function () {
        this.producersService.getAllProducers();
        this.productTypeService.getAllProductTypes();
        this.billsService.getAllBills();
        this.uploadForm = this.formBuilder.group({
            image: [''],
            name: [''],
            price: [''],
            producer: [''],
            productType: [''],
            productURL: [''],
            properties: [''],
            quantity: [''],
            warranty: [''],
            vendorPrice: ['']
        });
    };
    RacuniComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL5, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    RacuniComponent.prototype.openPDF = function (event) {
        event.preventDefault();
        var id = event.srcElement.id;
        this.billsService.getPDF(id);
    };
    RacuniComponent.prototype.onSelectFile = function (event) {
        var selectFile = event.target.files[0];
        this.userFile = selectFile;
    };
    RacuniComponent.prototype.addProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var image = target.querySelector('#image');
        /* if(image.files.length > 0){
          const file = image.files[0];
          this.uploadForm.get('file').setValue(file);
          this.slika = this.uploadForm.get('file').value;
        }  */
        // var formData = new FormData();
        //formData.append('image', image);
        var name = target.querySelector('#name').value;
        this.uploadForm.get('name').setValue(name);
        var price = target.querySelector('#price').value;
        this.uploadForm.get('price').setValue(price);
        var producer = target.querySelector('#producer').value;
        this.uploadForm.get('producer').setValue(producer);
        var productType = target.querySelector('#productType').value;
        this.uploadForm.get('productType').setValue(productType);
        var productURL = target.querySelector('#productURL').value;
        this.uploadForm.get('productURL').setValue(productURL);
        var properties = target.querySelector('#properties').value;
        this.uploadForm.get('properties').setValue(properties);
        var quantity = target.querySelector('#quantity').value;
        this.uploadForm.get('quantity').setValue(quantity);
        var warranty = target.querySelector('#warranty').value;
        this.uploadForm.get('warranty').setValue(warranty);
        var vendorPrice = target.querySelector('#vendorPrice').value;
        this.uploadForm.get('vendorPrice').setValue(vendorPrice);
        var data = JSON.stringify(this.uploadForm.value);
        var formData = new FormData();
        //formData.append("productData", data);
        formData.append("image", this.userFile);
        // formData.append("image", this.uploadForm.get('file').value);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("producer", producer);
        formData.append("productType", productType);
        formData.append("productURL", productURL);
        formData.append("properties", properties);
        formData.append("quantity", quantity);
        formData.append("warranty", warranty);
        formData.append("vendorPrice", vendorPrice);
        /*console.log( formData  image, name, price, producer, productType, productURL, properties, quantity, warranty );*/
        /*this.registerService.sendProductDetails(image, name, price, producer, productType, productURL, properties, quantity, warranty ).subscribe();*/
        this.registerService.sendProductDetails(formData).subscribe(function (response) {
            window.alert("Proizvod je uspešno dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 200);
    };
    RacuniComponent.prototype.registerUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        var firstName = target.querySelector('#firstName').value;
        var lastName = target.querySelector('#lastName').value;
        var email = target.querySelector('#email').value;
        var role = target.querySelector('#role').value;
        this.registerService.sendUserDetails(firstName, lastName, username, email, password, role).subscribe(function (response) { window.alert("Uspešna registracija korisnika!"); }, function (err) { _this.handleError(err); });
        //)
        /*
        console.log(username,password)
        console.log(error);
        console.log(localStorage.getItem("token"));
        */
    };
    RacuniComponent.prototype.addDiscount = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var producer = target.querySelector('#producerDiscount').value;
        var productType = target.querySelector('#productTypeDiscount').value;
        var discountCoefficient = target.querySelector("#procenat").value;
        this.productService.discountProduct(producer, productType, discountCoefficient).subscribe(function (response) {
            window.alert("Popust je dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 150);
        //zbog unosa u bazu i responsa stavljamo timeout da bi ucitao nove cene a ne stare
    };
    RacuniComponent.prototype.exchangeProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var billID = target.querySelector('#givingID').value;
        var givinProductID = target.querySelector('#givinProductID').value;
        var takingProductID = target.querySelector('#takingProductID').value;
        this.exchangeProductService.returnProduct(billID, givinProductID, takingProductID).subscribe(function (data) {
            window.alert("Novac koji se vraca je: " + data.moneyToReturn + " RSD");
        }, function (err) { _this.handleError(err); /*console.log(err.error.message);console.log(err.status);*/ });
    };
    RacuniComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    RacuniComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-racuni',
            template: __webpack_require__(/*! ./racuni.component.html */ "./src/app/racuni/racuni.component.html"),
            styles: [__webpack_require__(/*! ./racuni.component.css */ "./src/app/racuni/racuni.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bills_service__WEBPACK_IMPORTED_MODULE_2__["BillsService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_4__["RegisterService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductsService"],
            _services_producers_service__WEBPACK_IMPORTED_MODULE_6__["ProducersService"],
            _services_product_type_service__WEBPACK_IMPORTED_MODULE_7__["ProductTypeService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_8__["SearchService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            _services_delete_service__WEBPACK_IMPORTED_MODULE_11__["DeleteService"],
            _services_single_service_service__WEBPACK_IMPORTED_MODULE_12__["SingleServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
            _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__["ExchangeProductService"]])
    ], RacuniComponent);
    return RacuniComponent;
}());



/***/ }),

/***/ "./src/app/radnik-guard.guard.ts":
/*!***************************************!*\
  !*** ./src/app/radnik-guard.guard.ts ***!
  \***************************************/
/*! exports provided: RadnikGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadnikGuardGuard", function() { return RadnikGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/login.service */ "./src/app/services/login.service.ts");




var RadnikGuardGuard = /** @class */ (function () {
    function RadnikGuardGuard(router, login) {
        this.router = router;
        this.login = login;
    }
    RadnikGuardGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("role") == "WORKER") {
            return true;
        }
        if (this.login.isAuthenticated()) {
            localStorage.removeItem("token");
            if (this.login.isHavingRole()) {
                localStorage.removeItem("role");
            }
            if (this.login.isHavingUsername()) {
                localStorage.removeItem("username");
            }
            this.router.navigate(['/']);
            return false;
        }
        this.router.navigate(['/']);
        return false;
    };
    RadnikGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]])
    ], RadnikGuardGuard);
    return RadnikGuardGuard;
}());



/***/ }),

/***/ "./src/app/radnik/korpa-radnik/korpa-radnik.component.css":
/*!****************************************************************!*\
  !*** ./src/app/radnik/korpa-radnik/korpa-radnik.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    .shopping-cart{\r\n      margin-top:10vh;\r\n      margin-left:3%;\r\n      margin-right: 3%;\r\n      \r\n  }\r\n\r\n    .small-image{\r\n      height: 50px;\r\n      width:50px;\r\n  }\r\n\r\n    .login_btn{\r\n    \r\n    margin-left: 30%;\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 200px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    ul li ul li{\r\n        display:none;\r\n    }\r\n\r\n    ul li:hover ul li{\r\n        display:block;\r\n    }\r\n\r\n    ul li ul li a:hover{\r\n        color:black;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .modal-content {\r\n        background-color: rgba(0,0,0,.8);\r\n        margin: 4% auto 15% auto;\r\n        border: 1px solid #888;\r\n        width: 40%; \r\n        padding-bottom: 30px;\r\n        align-content: center;\r\n    }\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n        position: absolute;\r\n        right: 25px;\r\n        top: 0;\r\n        color: white;\r\n        font-size: 35px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .close:hover,.close:focus {\r\n        color: red;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n        -webkit-animation: zoom 0.6s;\r\n                animation: zoom 0.6s\r\n    }\r\n\r\n    @-webkit-keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    @keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    .card{\r\n        display:flex;\r\n        margin-top:2%;\r\n        margin-bottom:2%;\r\n        margin-left:25%;\r\n    }\r\n\r\n    .text-icons{\r\n        margin-left:3%;\r\n        margin-top:1%;\r\n    }\r\n\r\n    .inputs{\r\n        margin-left:1%;\r\n        display:flex;\r\n        width: 100%;\r\n    }\r\n\r\n    .modal2 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .store a{\r\n        text-decoration: none;\r\n        color: white;\r\n        width: 50%;\r\n\r\n    }\r\n\r\n    .client a{\r\n        text-decoration: none;\r\n        color:white;\r\n\r\n    }\r\n\r\n    .store{\r\n        margin-left:30%;\r\n    }\r\n\r\n    .top-nav{\r\n    padding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n        float: left;\r\n        position: fixed;\r\n        margin-top: 0;\r\n        /*border: 1px solid rgba(0,0,0,.15);*/\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n        background-color: #fff;\r\n        box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n        \r\n}\r\n\r\n    .dropdown ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\n    display:inline-block;\r\n    \r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\n    white-space: normal;\r\n    text-decoration: none;\r\n    \r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\n    color:#05a081;\r\n\r\n    \r\n}\r\n\r\n    .inputs select{\r\n    position: relative;\r\n    background-color:black;\r\n    color:white;\r\n   border-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\n    background-color: #05a081;\r\n    color:black;\r\n}\r\n\r\n    .search-box{\r\n    left: 20%;\r\n    position: absolute;\r\n    border-radius: 40%;\r\n    padding: 10px;\r\n    height: 40px;\r\n}\r\n\r\n    .search-btn{\r\n    color:#05a081;\r\n    float: right;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background: #222;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.4s;\r\n}\r\n\r\n    .search-text {\r\n    font-size: 17px;\r\n    border: none;\r\n    background: none;\r\n    float: left;\r\n    padding: 0;\r\n    color: white;\r\n    transition: 0.4s;\r\n    line-height: 40px;\r\n    width: 0px;\r\n    \r\n  }\r\n\r\n    input[type=\"text\"]{\r\n    border-color: none;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n  }\r\n\r\n    .search-box:hover > .search-text{\r\n      width: 240px;\r\n      padding: 0 6px;\r\n  }\r\n\r\n    .search-box:hover > .search-btn{\r\n    background: white;\r\n}\r\n\r\n    .form-group .login_btn{\r\n    margin-left: 10%;\r\n}\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFkbmlrL2tvcnBhLXJhZG5pay9rb3JwYS1yYWRuaWsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBR0osbUJBQW1COztJQUVuQjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztJQUVBOzs7OztJQUtJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0lBR0Esb0JBQW9COztJQUVoQjtRQUNJLGVBQWU7UUFDZixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQ0FBbUM7UUFDbkMsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osdUNBQXVDO0lBQzNDOztJQUVBOztRQUVJLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix1Q0FBdUM7SUFDM0M7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixXQUFXOztJQUVmOztJQUNKO0VBQ0UsU0FBUztBQUNYOztJQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztJQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztJQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xC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OztJQUVBO0lBQ0UsaUJBQWlCO0FBQ3JCOztJQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmFkbmlrL2tvcnBhLXJhZG5pay9rb3JwYS1yYWRuaWsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLypodG1sLCBib2R5LCAjd3JhcHBlciwgI3BhZ2Utd3JhcHBlciB7aGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO30qL1xyXG5cclxuXHJcblxyXG5cclxuICAgICN3cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNwYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIycHggMTBweDtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUb3AgTmF2aWdhdGlvbiAqL1xyXG5cclxuLnRvcC1uYXY+bGk+YSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnRvcC1uYXY+bGk+YTpob3ZlcixcclxuLnRvcC1uYXY+bGk+YTpmb2N1cyxcclxuLnRvcC1uYXY+Lm9wZW4+YSxcclxuLnRvcC1uYXY+Lm9wZW4+YTpob3ZlcixcclxuLnRvcC1uYXY+Lm9wZW4+YTpmb2N1cyB7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbn1cclxuXHJcblxyXG4vKiBTaWRlIE5hdmlnYXRpb24gKi9cclxuXHJcbiAgICAuc2lkZS1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgbGVmdDogMjI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjI1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwwLDAsMSkgc29saWQ7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzVBNkI3RDsqL1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPmEge1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2IGxpIGE6aG92ZXIsXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdj5saT51bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlLW5hdj5saT51bD5saT5hIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAzOHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICBcclxuICAgIH1cclxuLm5hdmJhciAubmF2ID4gbGkgPiBhOmhvdmVyID4gLmxhYmVsIHtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2h7XHJcblxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2ggaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuU2VhcmNoIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDVhMDgxO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIC5zaG9wcGluZy1jYXJ0e1xyXG4gICAgICBtYXJnaW4tdG9wOjEwdmg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjMlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIC5zbWFsbC1pbWFnZXtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB3aWR0aDo1MHB4O1xyXG4gIH1cclxuICAubG9naW5fYnRue1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuODUpO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9naW5fYnRuOmhvdmVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxuICAgIH1cclxuICAgIHVsIGxpIHVsIGxpe1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgIHVsIGxpOmhvdmVyIHVsIGxpe1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB9XHJcbiAgICB1bCBsaSB1bCBsaSBhOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICAgICAgbWFyZ2luOiA0JSBhdXRvIDE1JSBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICAgICAgd2lkdGg6IDQwJTsgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuY2xvc2U6aG92ZXIsLmNsb3NlOmZvY3VzIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogQWRkIFpvb20gQW5pbWF0aW9uICovXHJcbiAgICAuYW5pbWF0ZSB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiB6b29tIDAuNnNcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgem9vbSB7XHJcbiAgICAgICAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX0gXHJcbiAgICAgICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjIlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjI1JTtcclxuICAgIH1cclxuICAgIC50ZXh0LWljb25ze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0c3tcclxuICAgICAgICBtYXJnaW4tbGVmdDoxJTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubW9kYWwyIHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnN0b3JlIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgIH1cclxuICAgIC5jbGllbnQgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcblxyXG4gICAgfVxyXG4gICAgLnN0b3Jle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgIH1cclxuLnRvcC1uYXZ7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG59XHJcblxyXG4udG9wLW5hdjJ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7Ki9cclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgICAgIFxyXG59XHJcbi5kcm9wZG93biB1bCBsaSB1bCBsaXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93biBhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93biBhOmhvdmVyIHVsIGxpe1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG4udG9wLW5hdjIgbGkgYXtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuLmRyb3Bkb3duIGF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjojMDVhMDgxO1xyXG5cclxuICAgIFxyXG59XHJcblxyXG4uaW5wdXRzIHNlbGVjdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG4gICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuICAgYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG59XHJcbi5pbnB1dHMgc2VsZWN0OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4uc2VhcmNoLWJveHtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRue1xyXG4gICAgY29sb3I6IzA1YTA4MTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uc2VhcmNoLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IDAgbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLXRleHR7XHJcbiAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgfVxyXG4gICAgXHJcbiAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLWJ0bntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbiAgICBcclxuLmZvcm0tZ3JvdXAgLmxvZ2luX2J0bntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/radnik/korpa-radnik/korpa-radnik.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/radnik/korpa-radnik/korpa-radnik.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<link href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" rel=\"stylesheet\" integrity=\"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN\" crossorigin=\"anonymous\">\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/radnik\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">      \n            <li class=\"dropdown\" style=\"margin-right: 15px;\">\n                <a > {{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                <ul class=\"top-nav2\">\n                    <li style=\"margin-top:10%;\" ><a routerLink=\"/radnik/korpa-radnik\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:5px;\" class=\"fa fa-shopping-cart\"></i>Korpa</a></li>\n                  <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                  <li (click)=\"logout()\" style=\"margin-top:10%;\"><a style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li>\n                </ul>\n            </li>\n        </ul>\n        <!-- Meni sa leve strane -->\n            <ul class=\"nav navbar-nav side-nav\">\n                <li>\n                    <a routerLink=\"/radnik\"> POCETNA</a>\n                </li>\n                <li>\n                        <a onclick=\"document.getElementById('exchange').style.display='block'\" style=\"cursor:pointer;\" >ZAMENA PROIZVODA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/radnik/naruci\">NARUCIVANJE PROIZVODA</a>           \n                         </li>\n                \n            </ul>\n    </nav>\n    \n    <div class=\"shopping-cart\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-striped\">\n                        <thead>\n                            <tr>\n                                <th scope=\"col\"> </th>\n                                <th scope=\"col\">Proizvod</th>\n                                <th scope=\"col\">Dostupnost</th>\n                                <th scope=\"col\" class=\"text-center\">Kolicina</th>\n                                <th scope=\"col\" class=\"text-right\">Cena</th>\n                                <th> </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let product of info; let i=index;\">\n                                <td><img class = \"small-image\"src=\"assets/6-video-camera-png-image.png\" /> </td>\n                                <td> {{product.name}}</td>\n                                <td>{{product.quantity}}</td>\n                                <td><input class=\"form-control quantityToSend\" name=\"quantityToSend\" id = \"qprice+{{product.id}}\" value=\"1\" type=\"number\"/></td>\n                                <td class=\"text-right\">{{product.price}}RSD</td>\n                                <td class=\"text-right\"><button (click)=\"deleteCartProduct($event)\" id = \"{{i}}\" class=\"btn btn-danger btn-xs\"><span id = \"{{i}}\" class=\"glyphicon glyphicon-trash\"></span></button> </td>\n                            </tr>\n                            <tr>\n                                  <td></td>\n                                  <td></td>\n                                  <td></td>\n                                  <td></td>\n                                  <td>Ukupna cena</td>\n                                  <td class=\"text-right\">{{sumPrice}} RSD</td>\n                              </tr>\n    \n                        </tbody>\n                    </table>\n                </div>\n              </div>   \n                    <input type=\"submit\" (click)= \"checkOut($event)\" value=\"Izvrši kupovinu\" class=\"btn float-right login_btn text-center\" style=\"margin-left: 40%;\" >\n                 \n                \n        </div>\n    </div>\n    <div id=\"exchange\" class=\"modal2\">\n        <form (submit)='exchangeProduct($event)' class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('exchange').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Zameni proizvod</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; margin-left: 19%; width: 150%;\">     \n                    <div class=\"inputs\">\n                      <div class=\"client\" style=\"width:40%;\" >\n                            <a>Sifra racuna proizvoda od kupca    </a>\n                            <select id=\"givingID\" class=\"text-center\" style=\"margin-bottom:10%; margin-left: 5%; width: 30%;\">\n                                    <option  class=\"text-center\" *ngFor=\"let bill of billsService.bills\" value=\"{{ bill.id }}\">{{ bill.id }}</option>\n                            </select> <br>\n                            <div class=\"inputs\">\n                                <input id=\"givinProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra proizvoda koji se menja\" required>\n                            </div><br><br>\n                            <div class=\"inputs\">\n                                <input id=\"takingProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra zeljenog proizvoda\" required>\n                            </div>\n                        </div>\n\n                                  </div>\n            </div>\n           \n            <div class=\"form-group\" style=\"margin-top:2%;margin-left:30%; \">\n                    <input type=\"submit\"  value=\"Zameni\" class=\"btn float-right login_btn\" style=\"width:40%;\">\n              </div>\n                           \n              </form>\n    </div>\n    \n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\n\n* Radnik ima mogućnost da prodaje proizvod, vrši zamenu proizvoda kao i da naruči proizvode kojih nema na stanju. Kada radnik izabere proizvod koji hoće da proda, klikom na crvenu strelicu dodaje taj proizvod u korpu. Prečicom u gornjem desnom uglu se pristupa korpi. Nakon odabira količine proizvoda kojeg korisnik želi da poruči, pritiskom na dugme Izvrši kupivinu potvrđuje se porudzbina. Moguće je obrisati sadržaj iz korpe. Radnik naručuje proizvode kojih nema na stanju i svi proizvodi se šalju komercijalisti i on ih obrađuje.Zamena proizvoda se izvršava nakon odabira šifre računa, šifre proizvoda na računu, a zatim i šifre željenog proizvoda za zamenu. Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka. \n\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n\n\n  "

/***/ }),

/***/ "./src/app/radnik/korpa-radnik/korpa-radnik.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/radnik/korpa-radnik/korpa-radnik.component.ts ***!
  \***************************************************************/
/*! exports provided: KorpaRadnikComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KorpaRadnikComponent", function() { return KorpaRadnikComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_bills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bills.service */ "./src/app/services/bills.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var KorpaRadnikComponent = /** @class */ (function () {
    function KorpaRadnikComponent(http, billsService, router) {
        this.http = http;
        this.billsService = billsService;
        this.router = router;
        this.korpa = [];
        this.endpointURL = 'http://78.46.117.245:9000/';
        this.endpointURL1 = 'http://78.46.117.245:9000/logout';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.info = [];
        this.cartSend = [];
        this.checkingQuantity = true;
        this.pozicija = localStorage.getItem('username');
    }
    KorpaRadnikComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.billsService.getAllBills();
        this.korpa = JSON.parse(localStorage.getItem("cart"));
        this.http.get(this.endpointURL + 'products/', { headers: this.headers })
            .subscribe(function (result) {
            _this.product2 = result;
            var l = _this.product2.length;
            for (var _i = 0, _a = _this.korpa; _i < _a.length; _i++) {
                var idk = _a[_i];
                for (var i = 0; i < l; i++) {
                    if (idk == _this.product2[i].id) {
                        var current = {
                            id2: '' + i + '',
                            id: _this.product2[i].id,
                            price: _this.product2[i].price,
                            quantity: _this.product2[i].quantity,
                            name: _this.product2[i].name
                        };
                        _this.info.push(current);
                    }
                }
            }
            //localStorage.setItem("currentCart", JSON.stringify(this.info));
        });
    };
    KorpaRadnikComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL1, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
            }
        });
    };
    KorpaRadnikComponent.prototype.deleteCartProduct = function (event) {
        var id = event.srcElement.id;
        this.info.splice(id, 1);
        this.korpa.splice(id, 1);
        localStorage.setItem("cart", JSON.stringify(this.korpa));
        window.alert("Proizvod je uklonjen iz korpe!");
    };
    KorpaRadnikComponent.prototype.checkOut = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var l = this.info.length;
        for (var i = 0; i < l; i++) {
            var id = this.info[i].id;
            var id2 = "qprice" + id;
            var quantity = document.getElementsByTagName('input')[i].value;
            //var q = quantity.
            if (quantity <= this.info[i].quantity) {
                var current = {
                    productID: id,
                    quantity: quantity
                };
                this.cartSend.push(current);
            }
            else {
                this.checkingQuantity = false;
            }
        }
        //localStorage.setItem('cartSend', JSON.stringify(this.cartSend));
        if (this.checkingQuantity) {
            this.http.post(this.endpointURL + 'buy', this.cartSend, { headers: this.headers })
                .subscribe(function (response) {
                _this.response = response,
                    _this.sumPrice = _this.response.price;
                window.alert("Uspešna kupovina!");
                localStorage.removeItem('cart');
            }, function (err) { _this.handleError(err); });
        }
        else {
            this.cartSend = [];
            this.checkingQuantity = true;
            window.alert("Uneli ste veci broj proizvoda nego sto je dostupno!");
        }
    };
    KorpaRadnikComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    KorpaRadnikComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-korpa-radnik',
            template: __webpack_require__(/*! ./korpa-radnik.component.html */ "./src/app/radnik/korpa-radnik/korpa-radnik.component.html"),
            styles: [__webpack_require__(/*! ./korpa-radnik.component.css */ "./src/app/radnik/korpa-radnik/korpa-radnik.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_bills_service__WEBPACK_IMPORTED_MODULE_3__["BillsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], KorpaRadnikComponent);
    return KorpaRadnikComponent;
}());



/***/ }),

/***/ "./src/app/radnik/naruci/naruci.component.css":
/*!****************************************************!*\
  !*** ./src/app/radnik/naruci/naruci.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    .shopping-cart{\r\n      margin-top:10vh;\r\n      margin-left:3%;\r\n      margin-right: 3%;\r\n      \r\n  }\r\n\r\n    .small-image{\r\n      height: 50px;\r\n      width:50px;\r\n  }\r\n\r\n    .login_btn{\r\n    \r\n    margin-left: 40%;\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 200px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    ul li ul li{\r\n        display:none;\r\n    }\r\n\r\n    ul li:hover ul li{\r\n        display:block;\r\n    }\r\n\r\n    ul li ul li a:hover{\r\n        color:black;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .modal-content {\r\n        background-color: rgba(0,0,0,.8);\r\n        margin: 4% auto 15% auto;\r\n        border: 1px solid #888;\r\n        width: 40%; \r\n        padding-bottom: 30px;\r\n        align-content: center;\r\n    }\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n        position: absolute;\r\n        right: 25px;\r\n        top: 0;\r\n        color: white;\r\n        font-size: 35px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .close:hover,.close:focus {\r\n        color: red;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n        -webkit-animation: zoom 0.6s;\r\n                animation: zoom 0.6s\r\n    }\r\n\r\n    @-webkit-keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    @keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    .card{\r\n        display:flex;\r\n        margin-top:2%;\r\n        margin-bottom:2%;\r\n        margin-left:25%;\r\n    }\r\n\r\n    .text-icons{\r\n        margin-left:3%;\r\n        margin-top:1%;\r\n    }\r\n\r\n    .inputs{\r\n        margin-left:1%;\r\n        display:flex;\r\n        width: 100%;\r\n    }\r\n\r\n    .modal2 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .store a{\r\n        text-decoration: none;\r\n        color: white;\r\n        width: 50%;\r\n\r\n    }\r\n\r\n    .client a{\r\n        text-decoration: none;\r\n        color:white;\r\n\r\n    }\r\n\r\n    .store{\r\n        margin-left:30%;\r\n    }\r\n\r\n    .top-nav{\r\n    padding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n        float: left;\r\n        position: fixed;\r\n        margin-top: 0;\r\n        /*border: 1px solid rgba(0,0,0,.15);*/\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n        background-color: #fff;\r\n        box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n        \r\n}\r\n\r\n    .dropdown ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\n    display:inline-block;\r\n    \r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\n    white-space: normal;\r\n    text-decoration: none;\r\n    \r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\n    color:#05a081;\r\n\r\n    \r\n}\r\n\r\n    .inputs select{\r\n    position: relative;\r\n    background-color:black;\r\n    color:white;\r\n   border-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\n    background-color: #05a081;\r\n    color:black;\r\n}\r\n\r\n    .search-box{\r\n    left: 20%;\r\n    position: absolute;\r\n    border-radius: 40%;\r\n    padding: 10px;\r\n    height: 40px;\r\n}\r\n\r\n    .search-btn{\r\n    color:#05a081;\r\n    float: right;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background: #222;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.4s;\r\n}\r\n\r\n    .search-text {\r\n    font-size: 17px;\r\n    border: none;\r\n    background: none;\r\n    float: left;\r\n    padding: 0;\r\n    color: white;\r\n    transition: 0.4s;\r\n    line-height: 40px;\r\n    width: 0px;\r\n    \r\n  }\r\n\r\n    input[type=\"text\"]{\r\n    border-color: none;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n  }\r\n\r\n    .search-box:hover > .search-text{\r\n      width: 240px;\r\n      padding: 0 6px;\r\n  }\r\n\r\n    .search-box:hover > .search-btn{\r\n    background: white;\r\n}\r\n\r\n    .form-group .login_btn{\r\n    margin-left: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFkbmlrL25hcnVjaS9uYXJ1Y2kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBR0osbUJBQW1COztJQUVuQjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztJQUVBOzs7OztJQUtJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0lBR0Esb0JBQW9COztJQUVoQjtRQUNJLGVBQWU7UUFDZixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQ0FBbUM7UUFDbkMsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osdUNBQXVDO0lBQzNDOztJQUVBOztRQUVJLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix1Q0FBdUM7SUFDM0M7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixXQUFXOztJQUVmOztJQUNKO0VBQ0UsU0FBUztBQUNYOztJQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztJQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztJQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNo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aUJBQWlCO0FBQ3JCOztJQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcmFkbmlrL25hcnVjaS9uYXJ1Y2kuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjMuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3MnKTtcclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLypodG1sLCBib2R5LCAjd3JhcHBlciwgI3BhZ2Utd3JhcHBlciB7aGVpZ2h0OiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuO30qL1xyXG5cclxuXHJcblxyXG5cclxuICAgICN3cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNwYWdlLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDIycHggMTBweDtcclxuICAgIH1cclxuXHJcblxyXG4vKiBUb3AgTmF2aWdhdGlvbiAqL1xyXG5cclxuLnRvcC1uYXY+bGk+YSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnRvcC1uYXY+bGk+YTpob3ZlcixcclxuLnRvcC1uYXY+bGk+YTpmb2N1cyxcclxuLnRvcC1uYXY+Lm9wZW4+YSxcclxuLnRvcC1uYXY+Lm9wZW4+YTpob3ZlcixcclxuLnRvcC1uYXY+Lm9wZW4+YTpmb2N1cyB7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODE7XHJcbn1cclxuXHJcblxyXG4vKiBTaWRlIE5hdmlnYXRpb24gKi9cclxuXHJcbiAgICAuc2lkZS1uYXYge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDYwcHg7XHJcbiAgICAgICAgbGVmdDogMjI1cHg7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjI1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHJnYmEoMCwwLDAsMSkgc29saWQ7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyO1xyXG4gICAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogIzVBNkI3RDsqL1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPmEge1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2IGxpIGE6aG92ZXIsXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlLW5hdj5saT51bCB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggcmdiYSgwLDAsMCwuMykgc29saWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zaWRlLW5hdj5saT51bD5saT5hIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAzOHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICAgICBcclxuICAgIH1cclxuLm5hdmJhciAubmF2ID4gbGkgPiBhOmhvdmVyID4gLmxhYmVsIHtcclxuICB0b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2h7XHJcblxyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbn1cclxuXHJcbi5TZWFyY2ggaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuU2VhcmNoIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDVhMDgxO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG4gIC5zaG9wcGluZy1jYXJ0e1xyXG4gICAgICBtYXJnaW4tdG9wOjEwdmg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OjMlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gICAgICBcclxuICB9XHJcblxyXG4gIC5zbWFsbC1pbWFnZXtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICB3aWR0aDo1MHB4O1xyXG4gIH1cclxuICAubG9naW5fYnRue1xyXG4gICAgXHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuODUpO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9naW5fYnRuOmhvdmVye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxuICAgIH1cclxuICAgIHVsIGxpIHVsIGxpe1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgIHVsIGxpOmhvdmVyIHVsIGxpe1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB9XHJcbiAgICB1bCBsaSB1bCBsaSBhOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuOCk7XHJcbiAgICAgICAgbWFyZ2luOiA0JSBhdXRvIDE1JSBhdXRvO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICAgICAgd2lkdGg6IDQwJTsgXHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4gICAgLmNsb3NlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgICAuY2xvc2U6aG92ZXIsLmNsb3NlOmZvY3VzIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogQWRkIFpvb20gQW5pbWF0aW9uICovXHJcbiAgICAuYW5pbWF0ZSB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiB6b29tIDAuNnNcclxuICAgIH1cclxuICAgIEBrZXlmcmFtZXMgem9vbSB7XHJcbiAgICAgICAgZnJvbSB7dHJhbnNmb3JtOiBzY2FsZSgwKX0gXHJcbiAgICAgICAgdG8ge3RyYW5zZm9ybTogc2NhbGUoMSl9XHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjIlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjI1JTtcclxuICAgIH1cclxuICAgIC50ZXh0LWljb25ze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0c3tcclxuICAgICAgICBtYXJnaW4tbGVmdDoxJTtcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubW9kYWwyIHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnN0b3JlIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgIH1cclxuICAgIC5jbGllbnQgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcblxyXG4gICAgfVxyXG4gICAgLnN0b3Jle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgIH1cclxuLnRvcC1uYXZ7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG59XHJcblxyXG4udG9wLW5hdjJ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7Ki9cclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgICAgIFxyXG59XHJcbi5kcm9wZG93biB1bCBsaSB1bCBsaXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93biBhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93biBhOmhvdmVyIHVsIGxpe1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG4udG9wLW5hdjIgbGkgYXtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuLmRyb3Bkb3duIGF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjojMDVhMDgxO1xyXG5cclxuICAgIFxyXG59XHJcbi5pbnB1dHMgc2VsZWN0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbiAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG4gICBib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbn1cclxuLmlucHV0cyBzZWxlY3Q6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLWJveHtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRue1xyXG4gICAgY29sb3I6IzA1YTA4MTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uc2VhcmNoLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IDAgbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLXRleHR7XHJcbiAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgfVxyXG4gICAgXHJcbiAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLWJ0bntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCAubG9naW5fYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/radnik/naruci/naruci.component.html":
/*!*****************************************************!*\
  !*** ./src/app/radnik/naruci/naruci.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/radnik\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n        <ul class=\"nav navbar-right top-nav\">      \n            <li class=\"dropdown\" style=\"margin-right: 15px;\">\n                <a > {{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                <ul class=\"top-nav2\">\n                    <li style=\"margin-top:10%;\" ><a routerLink=\"/radnik/korpa-radnik\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:5px;\" class=\"fa fa-shopping-cart\"></i>Korpa</a></li>\n                  <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                  <li (click)=\"logout()\" style=\"margin-top:10%;\"><a style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li>\n                </ul>\n            </li>\n        </ul>\n        <!-- Meni sa leve strane -->\n            <ul class=\"nav navbar-nav side-nav\">\n                <li>\n                    <a routerLink=\"/radnik\"> POCETNA</a>\n                </li>\n                <li>\n                        <a onclick=\"document.getElementById('exchange').style.display='block'\" style=\"cursor:pointer;\" >ZAMENA PROIZVODA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/radnik/naruci\">NARUCIVANJE PROIZVODA</a>           \n                         </li>\n               \n            </ul>\n    </nav>\n\n  <div class=\"shopping-cart\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\"> </th>\n                            <th scope=\"col\"  class=\"text-center\">Proizvod</th>\n                            <th scope=\"col\"  class=\"text-center\">Dostupnost</th>\n                            <th scope=\"col\" class=\"text-center\">Garancija</th>\n                            <th scope=\"col\"  class=\"text-center\">Cena</th>\n                            <th> </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let product of zeroProducts\">\n                            <td><img class = \"small-image\" src=\"{{ product.imagePath }}\" /> </td>\n                            <td class=\"text-center\"> {{product.name}}</td>\n                            <td class=\"text-center\">{{product.quantity}}</td>\n                            <td class=\"text-center\">{{product.warranty}}</td>\n                            <td  class=\"text-center\">{{product.price}}RSD</td>\n                            <td class=\"text-right\"><button (click)=\"orderProduct($event)\" id = \"{{product.id}}\" class=\"btn btn-success btn-xs\"><span id = \"{{product.id}}\" class=\"glyphicon glyphicon-ok\"></span></button> </td>\n                        </tr>\n                        <tr>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                          </tr>\n\n                    </tbody>\n                </table>\n            </div>\n          \n</div>\n\n<!-- <div class=\"shopping-cart\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th class=\"text-center\">NARUCENI PROIZVODI</th>\n                        </tr>\n                    </thead>\n                    <thead>\n                        <tr>\n                            <th scope=\"col\"> </th>\n                            <th scope=\"col\"  class=\"text-center\">Proizvod</th>\n                            <th scope=\"col\"  class=\"text-center\">Dostupnost</th>\n                            <th scope=\"col\" class=\"text-center\">Garancija</th>\n                            <th scope=\"col\"  class=\"text-center\">Cena</th>\n                            <th> </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let product of orderedProducts\">\n                            <td><img class = \"small-image\"src=\"assets/6-video-camera-png-image.png\" /> </td>\n                            <td class=\"text-center\"> {{product.name}}</td>\n                            <td class=\"text-center\">{{product.quantity}}</td>\n                            <td class=\"text-center\">{{product.warranty}}</td>\n                            <td  class=\"text-center\">{{product.price}}RSD</td>\n                            <td ></td>\n                        </tr>\n                        <tr>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                          </tr>\n\n                    </tbody>\n                </table>\n            </div>\n          \n</div> -->\n\n<div id=\"exchange\" class=\"modal2\">\n    <form (submit)='exchangeProduct($event)' class=\"modal-content animate\">\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('exchange').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Zameni proizvod</h1>\n            </div>   \n                        \n        <div class=\"card\" style=\"margin-right: 0%; margin-left: 19%; width: 150%;\">     \n                <div class=\"inputs\">\n                  <div class=\"client\" style=\"width:40%;\" >\n                        <a>Sifra racuna proizvoda od kupca    </a>\n                        <select id=\"givingID\" class=\"text-center\" style=\"margin-bottom:10%; margin-left: 5%; width: 30%;\">\n                                <option  class=\"text-center\" *ngFor=\"let bill of billsService.bills\" value=\"{{ bill.id }}\">{{ bill.id }}</option>\n                        </select> <br>\n                        <div class=\"inputs\">\n                            <input id=\"givinProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra proizvoda koji se menja\" required>\n                        </div><br><br>\n                        <div class=\"inputs\">\n                            <input id=\"takingProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra zeljenog proizvoda\" required>\n                        </div>\n                    </div>\n\n                              </div>\n        </div>\n       \n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:30%; \">\n                <input type=\"submit\"  value=\"Zameni\" class=\"btn float-right login_btn\" style=\"width:40%;\">\n          </div>\n                       \n          </form>\n</div>\n    \n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\n\n* Radnik ima mogućnost da prodaje proizvod, vrši zamenu proizvoda kao i da naruči proizvode kojih nema na stanju. Kada radnik izabere proizvod koji hoće da proda, klikom na crvenu strelicu dodaje taj proizvod u korpu. Prečicom u gornjem desnom uglu se pristupa korpi. Nakon odabira količine proizvoda kojeg korisnik želi da poruči, pritiskom na dugme Izvrši kupivinu potvrđuje se porudzbina. Moguće je obrisati sadržaj iz korpe. Radnik naručuje proizvode kojih nema na stanju i svi proizvodi se šalju komercijalisti i on ih obrađuje.Zamena proizvoda se izvršava nakon odabira šifre računa, šifre proizvoda na računu, a zatim i šifre željenog proizvoda za zamenu. Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka. \n\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n\n\n\n    "

/***/ }),

/***/ "./src/app/radnik/naruci/naruci.component.ts":
/*!***************************************************!*\
  !*** ./src/app/radnik/naruci/naruci.component.ts ***!
  \***************************************************/
/*! exports provided: NaruciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NaruciComponent", function() { return NaruciComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var src_app_services_bills_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/bills.service */ "./src/app/services/bills.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var NaruciComponent = /** @class */ (function () {
    function NaruciComponent(http, orderService, billsService, router) {
        this.http = http;
        this.orderService = orderService;
        this.billsService = billsService;
        this.router = router;
        this.endpointURL = 'http://78.46.117.245:9000/products/';
        this.endpointURL1 = 'http://78.46.117.245:9000/logout/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.zeroProducts = [];
        this.orderedProducts = [];
        this.pozicija = localStorage.getItem('username');
    }
    NaruciComponent.prototype.ngOnInit = function () {
        this.billsService.getAllBills();
        this.zeroProducts = (JSON.parse(localStorage.getItem('zeroProducts')));
        /*  if(this.zeroProducts === null){
           this.zeroProducts = [];
         } */
        // this.orderedProducts = JSON.parse(localStorage.getItem('orderedProducts'));
        if (JSON.parse(localStorage.getItem('orderedProducts')) === null) {
            this.orderedProducts = [];
        }
        else {
            this.orderedProducts = JSON.parse(localStorage.getItem('orderedProducts'));
        }
        if (this.zeroProducts === null) {
            this.zeroProducts = this.orderedProducts;
        }
        /* if(JSON.parse(localStorage.getItem('zeroProducts')) === null){
           this.zeroProducts = [];
           
         } */
        var onlyInA = this.zeroProducts.filter(this.comparer(this.orderedProducts));
        var onlyInB = this.orderedProducts.filter(this.comparer(this.zeroProducts));
        var result = onlyInA.concat(onlyInB);
        if (this.zeroProducts.length <= 0) {
            result = [];
        }
        this.zeroProducts = [];
        for (var i = 0; i < result.length; i++) {
            this.zeroProducts.push(result[i]);
        }
        /* for(var i=0; i<this.zeroProducts.length; i++){
          if(this.zeroProducts[i].id == this.orderedProducts[i].id){
            this.zeroProducts.splice(i,1);
          }
          console.log(this.zeroProducts);
        } */
    };
    NaruciComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL1, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
            }
        });
    };
    NaruciComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    NaruciComponent.prototype.orderProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var id = event.srcElement.id;
        var newEndpoint = this.endpointURL + id + "/order";
        this.http.post(newEndpoint, { 'proba': 'proba' }, { headers: this.headers }).subscribe(function (response) {
        }, function (err) { _this.handleError(err); });
        for (var i = 0; i < this.zeroProducts.length; i++) {
            if (this.zeroProducts[i].id == id) {
                this.orderedProducts.push(this.zeroProducts[i]);
            }
        }
        // this.orderedProducts.push(this.zeroProducts.filter(ordered => ordered.id == id));    
        this.zeroProducts = this.zeroProducts.filter(function (products) { return products.id != id; });
        localStorage.setItem("orderedProducts", JSON.stringify(this.orderedProducts));
    };
    NaruciComponent.prototype.comparer = function (otherArray) {
        return function (current) {
            return otherArray.filter(function (other) {
                return other.id == current.id;
            }).length == 0;
        };
    };
    NaruciComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-naruci',
            template: __webpack_require__(/*! ./naruci.component.html */ "./src/app/radnik/naruci/naruci.component.html"),
            styles: [__webpack_require__(/*! ./naruci.component.css */ "./src/app/radnik/naruci/naruci.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            src_app_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            src_app_services_bills_service__WEBPACK_IMPORTED_MODULE_4__["BillsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], NaruciComponent);
    return NaruciComponent;
}());



/***/ }),

/***/ "./src/app/radnik/radnik.component.css":
/*!*********************************************!*\
  !*** ./src/app/radnik/radnik.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    .products .product{\r\n    margin-top:4%;\r\n    margin-bottom: 4%;\r\n    margin-left: 4%;\r\n    width: 75vw;\r\n    height: 50%;\r\n    display:flex;\r\n  }\r\n\r\n    .products .img1{\r\n    width :10%;\r\n    height: 35%;\r\n    margin-left: 5%;\r\n    margin-top: 6%;\r\n  }\r\n\r\n    .products .desc{\r\n    width:80%;\r\n    margin-top: 3%;\r\n    margin-left:5%;\r\n  }\r\n\r\n    .login_btn{\r\n    margin-left:10%;\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 100px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    ul li ul li{\r\n        display:none;\r\n    }\r\n\r\n    ul li:hover ul li{\r\n        display:block;\r\n    }\r\n\r\n    ul li ul li a:hover{\r\n        color:black;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*  ------------------ */\r\n\r\n    .modal-content {\r\n        background-color: rgba(0,0,0,.8);\r\n        margin: 4% auto 15% auto;\r\n        border: 1px solid #888;\r\n        width: 40%; \r\n        padding-bottom: 30px;\r\n        align-content: center;\r\n    }\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n        position: absolute;\r\n        right: 25px;\r\n        top: 0;\r\n        color: white;\r\n        font-size: 35px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .close:hover,.close:focus {\r\n        color: red;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n        -webkit-animation: zoom 0.6s;\r\n                animation: zoom 0.6s\r\n    }\r\n\r\n    @-webkit-keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    @keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    .card{\r\n        display:flex;\r\n        margin-top:2%;\r\n        margin-bottom:2%;\r\n        margin-left:25%;\r\n    }\r\n\r\n    .card-stat{\r\n        display: flex;\r\n        margin-top:2%;\r\n        margin-bottom:2%;\r\n        margin-left:13%;\r\n        margin-right: 20%;\r\n    }\r\n\r\n    .text-icons{\r\n        margin-left:3%;\r\n        margin-top:1%;\r\n    }\r\n\r\n    .inputs{\r\n        margin-left:1%;\r\n        \r\n    }\r\n\r\n    .modal2 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .store a{\r\n        text-decoration: none;\r\n        color: white;\r\n        width: 50%;\r\n\r\n    }\r\n\r\n    .client a{\r\n        text-decoration: none;\r\n        color:white;\r\n\r\n    }\r\n\r\n    .store{\r\n        margin-left:30%;\r\n    }\r\n\r\n    .top-nav{\r\n        padding: 0 15px;\r\n    \r\n    }\r\n\r\n    .top-nav2{\r\n            float: left;\r\n            position: fixed;\r\n            margin-top: 0;\r\n            /*border: 1px solid rgba(0,0,0,.15);*/\r\n            border-top-left-radius: 0;\r\n            border-top-right-radius: 0;\r\n            background-color: #fff;\r\n            box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n            \r\n    }\r\n\r\n    .dropdown ul li ul li{\r\n        display:none;\r\n    }\r\n\r\n    .dropdown a:hover{\r\n        cursor: pointer;\r\n    }\r\n\r\n    .dropdown a:hover ul li{\r\n        display:inline-block;\r\n        \r\n    \r\n    }\r\n\r\n    .top-nav2 li a{\r\n        white-space: normal;\r\n        text-decoration: none;\r\n        \r\n    }\r\n\r\n    .dropdown a{\r\n        margin-right: 15px;\r\n        color:#05a081;\r\n    \r\n        \r\n    }\r\n\r\n    .inputs select{\r\n        position: relative;\r\n        background-color:black;\r\n        color:white;\r\n       border-radius: 9px 9px 9px 9px;\r\n    }\r\n\r\n    .inputs select:hover{\r\n        background-color: #05a081;\r\n        color:black;\r\n    }\r\n\r\n    .search-box{\r\n        left: 20%;\r\n        position: absolute;\r\n        border-radius: 40%;\r\n        padding: 10px;\r\n        height: 40px;\r\n    }\r\n\r\n    .search-btn{\r\n        color:#05a081;\r\n        float: right;\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 50%;\r\n        background: #222;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: 0.4s;\r\n    }\r\n\r\n    .search-text {\r\n        font-size: 17px;\r\n        border: none;\r\n        background: none;\r\n        float: left;\r\n        padding: 0;\r\n        color: white;\r\n        transition: 0.4s;\r\n        line-height: 40px;\r\n        width: 0px;\r\n        \r\n      }\r\n\r\n    input[type=\"text\"]{\r\n        border-color: none;\r\n        box-shadow: none;\r\n        outline: 0 none;\r\n      }\r\n\r\n    .search-box:hover > .search-text{\r\n          width: 240px;\r\n          padding: 0 6px;\r\n      }\r\n\r\n    .search-box:hover > .search-btn{\r\n        background: white;\r\n    }\r\n    \r\n    \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFkbmlrL3JhZG5pay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBGQUEwRjs7SUFFdEY7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBQ0Esd0VBQXdFOztJQUt4RTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFHSixtQkFBbUI7O0lBRW5CO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0lBRUE7Ozs7O0lBS0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7SUFHQSxvQkFBb0I7O0lBRWhCO1FBQ0ksZUFBZTtRQUNmLFNBQVM7UUFDVCxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1DQUFtQztRQUNuQyxnQkFBZ0I7UUFDaEIsc0JBQXNCO1FBQ3RCLDZCQUE2QjtRQUM3QixTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWix1Q0FBdUM7SUFDM0M7O0lBRUE7O1FBRUksYUFBYTtRQUNiLG9DQUFvQztRQUNwQyxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLHVDQUF1QztJQUMzQzs7SUFFQTtRQUNJLGNBQWM7UUFDZCw0QkFBNEI7UUFDNUIscUJBQXFCO1FBQ3JCLFdBQVc7O0lBRWY7O0lBQ0o7RUFDRSxTQUFTO0FBQ1g7O0lBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0lBQ0E7O0lBRUksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7SUFFQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWix1QkFBdUI7RUFDekI7O0lBQ0E7SUFDRSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7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O1FBQ1YsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsVUFBVTs7TUFFWjs7SUFFQTtRQUNFLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZUFBZTtNQUNqQjs7SUFHQTtVQUNJLFlBQVk7VUFDWixjQUFjO01BQ2xCOztJQUVBO1FBQ0UsaUJBQWlCO0lBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcmFkbmlrL3JhZG5pay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAvKmh0bWwsIGJvZHksICN3cmFwcGVyLCAjcGFnZS13cmFwcGVyIHtoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47fSovXHJcblxyXG5cclxuXHJcblxyXG4gICAgI3dyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3BhZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogMjJweCAxMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbi8qIFRvcCBOYXZpZ2F0aW9uICovXHJcblxyXG4udG9wLW5hdj5saT5hIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG59XHJcblxyXG4udG9wLW5hdj5saT5hOmhvdmVyLFxyXG4udG9wLW5hdj5saT5hOmZvY3VzLFxyXG4udG9wLW5hdj4ub3Blbj5hLFxyXG4udG9wLW5hdj4ub3Blbj5hOmhvdmVyLFxyXG4udG9wLW5hdj4ub3Blbj5hOmZvY3VzIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxufVxyXG5cclxuXHJcbi8qIFNpZGUgTmF2aWdhdGlvbiAqL1xyXG5cclxuICAgIC5zaWRlLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICBsZWZ0OiAyMjVweDtcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMjVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggcmdiYSgwLDAsMCwxKSBzb2xpZDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2QjdEOyovXHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXY+bGk+YSB7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpob3ZlcixcclxuICAgIC5zaWRlLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPnVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNpZGUtbmF2PmxpPnVsPmxpPmEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDM4cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4ubmF2YmFyIC5uYXYgPiBsaSA+IGE6aG92ZXIgPiAubGFiZWwge1xyXG4gIHRvcDogMTBweDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG4uU2VhcmNoe1xyXG5cclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcblxyXG4uU2VhcmNoIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5TZWFyY2ggYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA1YTA4MTtcclxuICB9XHJcblxyXG5cclxuICAucHJvZHVjdHMgLnByb2R1Y3R7XHJcbiAgICBtYXJnaW4tdG9wOjQlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICB3aWR0aDogNzV2dztcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAucHJvZHVjdHMgLmltZzF7XHJcbiAgICB3aWR0aCA6MTAlO1xyXG4gICAgaGVpZ2h0OiAzNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tdG9wOiA2JTtcclxuICB9XHJcbiAgLnByb2R1Y3RzIC5kZXNje1xyXG4gICAgd2lkdGg6ODAlO1xyXG4gICAgbWFyZ2luLXRvcDogMyU7XHJcbiAgICBtYXJnaW4tbGVmdDo1JTtcclxuICB9XHJcbi5sb2dpbl9idG57XHJcbiAgICBtYXJnaW4tbGVmdDoxMCU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44NSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9idG46aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIGxpIHVsIGxpe1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgIHVsIGxpOmhvdmVyIHVsIGxpe1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICB9XHJcbiAgICB1bCBsaSB1bCBsaSBhOmhvdmVye1xyXG4gICAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAvKiAgLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4gICAgLm1vZGFsLWNvbnRlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjgpO1xyXG4gICAgICAgIG1hcmdpbjogNCUgYXV0byAxNSUgYXV0bztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gICAgICAgIHdpZHRoOiA0MCU7IFxyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmNsb3NlOmhvdmVyLC5jbG9zZTpmb2N1cyB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xyXG4gICAgLmFuaW1hdGUge1xyXG4gICAgICAgIGFuaW1hdGlvbjogem9vbSAwLjZzXHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHpvb20ge1xyXG4gICAgICAgIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCl9IFxyXG4gICAgICAgIHRvIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxyXG4gICAgfVxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToyJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyNSU7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1zdGF0e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOjIlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEzJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcclxuICAgIH1cclxuICAgIC50ZXh0LWljb25ze1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MSU7XHJcbiAgICB9XHJcblxyXG4gICAgLmlucHV0c3tcclxuICAgICAgICBtYXJnaW4tbGVmdDoxJTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5tb2RhbDIge1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuc3RvcmUgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcblxyXG4gICAgfVxyXG4gICAgLmNsaWVudCBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuXHJcbiAgICB9XHJcbiAgICAuc3RvcmV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzAlO1xyXG4gICAgfVxyXG4gICAgLnRvcC1uYXZ7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50b3AtbmF2MntcclxuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7Ki9cclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duIHVsIGxpIHVsIGxpe1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAuZHJvcGRvd24gYTpob3ZlcntcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24gYTpob3ZlciB1bCBsaXtcclxuICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC50b3AtbmF2MiBsaSBhe1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZHJvcGRvd24gYXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6IzA1YTA4MTtcclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuaW5wdXRzIHNlbGVjdHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG4gICAgICAgYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG4gICAgfVxyXG4gICAgLmlucHV0cyBzZWxlY3Q6aG92ZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxuICAgICAgICBjb2xvcjpibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoLWJveHtcclxuICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlYXJjaC1idG57XHJcbiAgICAgICAgY29sb3I6IzA1YTA4MTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiAwIG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAuc2VhcmNoLWJveDpob3ZlciA+IC5zZWFyY2gtdGV4dHtcclxuICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIC5zZWFyY2gtYm94OmhvdmVyID4gLnNlYXJjaC1idG57XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/radnik/radnik.component.html":
/*!**********************************************!*\
  !*** ./src/app/radnik/radnik.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/radnik\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            <app-search ></app-search>\n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">      \n            <li class=\"dropdown\" style=\"margin-right: 15px;\" >\n                <a > {{pozicija}}<i style=\"margin-left: 5px;\" class=\"fa fa-angle-down\"></i></a>\n                <ul class=\"top-nav2\">\n                    <li style=\"margin-top:10%;\" ><a routerLink=\"/radnik/korpa-radnik\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:5px;\" class=\"fa fa-shopping-cart\"></i>Korpa</a></li>\n                  <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                  <li (click)=\"logout()\" style=\"margin-top:10%;\"><a style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li>\n                </ul>\n            </li>\n        </ul>\n        <!-- Meni sa leve strane -->\n            <ul class=\"nav navbar-nav side-nav\">\n                <li>\n                    <a routerLink=\"/radnik\"> POCETNA</a>\n                </li>\n                <li>\n                        <a onclick=\"document.getElementById('exchange').style.display='block'\" style=\"cursor:pointer;\" >ZAMENA PROIZVODA</a>\n                </li>\n                <li>\n                        <a routerLink=\"/radnik/naruci\">NARUCIVANJE PROIZVODA</a>           \n                         </li>\n               \n            </ul>\n    </nav>\n\n    <div  class=\"products\" *ngFor=\"let product of productService.products\"  id=\"{{ product.id }}\">\n        <div class=\"product\">\n           <img src=\"{{ product.imagePath }}\" class=\"img1\">  <!-- {{ product.imagePath }} --> \n                <div class=\"desc\">\n                    <div class=\"row\" id=\"main\" >\n                        <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                                <div class=\"col-md-12\">\n                                <h4>Informacije o proizvodu <button  #buttonID  id = \"{{ product.id}}\" (click)=\"singleStatistic(buttonID.id)\" onclick=\"document.getElementById('stats').style.display='block'\" style=\"margin-left: 5%;\" class=\"btn btn-primary btn-xs text-right\"><span  id = \"{{ product.id}}\" class=\"far fa-chart-bar\"></span>\n                                </button> Statistika </h4>\n                                <div class=\"table-responsive\">  \n                                      <table id=\"mytable\" class=\"table table-bordred table-striped\">                                         \n                                           <thead>                                                                       \n                                            <th></th>\n                                             <th></th>\n                                             <th></th>                                            \n                                           </thead>\n                            <tbody>\n                                <tr>\n                                 <td>Proizvodjac: </td>\n                                <td class='{{product.id}}' contenteditable=\"false\">{{ product.producer }}</td>\n                                <td></td>\n                                </tr>\n                                <tr>\n                                 <td>Vrsta proizvoda: </td>\n                                 <td class='{{product.id}}' contenteditable=\"false\">{{ product.productType }}</td>\n                                 <td></td>\n                                 </tr>\n                                 <tr>\n                                <td>Kolicina: </td>\n                                <td class='{{product.id}}' contenteditable=\"false\">{{ product.quantity }}</td>\n                                <td></td>\n                                </tr>\n                            <tr>\n                            <td>Website </td>\n                            <td class='{{product.id}}' contenteditable=\"false\">{{ product.productURL }}</td>\n                            <td></td>\n                            </tr>\n                            <tr>\n                                <td>Garancija: </td>\n                                <td class='{{product.id}}' contenteditable=\"false\">{{ product.warranty }}</td>\n                                <td></td>\n                                </tr>\n                                <tr>\n                                <td>Naziv proizvoda: </td>\n                                <td class='{{product.id}}' contenteditable=\"false\">{{ product.name }}</td>\n                                <td></td>\n                                </tr>\n                            \n                         <tr>\n                            <td>Opis proizvoda:</td>\n                            <td class='{{product.id}}' contenteditable=\"false\">{{ product.properties }}</td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td>Nabavna cena: </td>\n                            <td class='{{product.id}}' >{{ product.vendorPrice }}</td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <td>Cena: </td>\n                            <td class='{{product.id}}' contenteditable=\"false\">{{ product.price }}</td>\n                            <td class=\"text-right\" ><button id = \"{{ product.id}}\" (click)= \"addToCart($event)\" class=\"btn btn-danger btn-xs\"><span id = \"{{ product.id}}\" class=\"glyphicon glyphicon-ok\"></span></button></td>\n                        </tr>\n                        \n                            </tbody>\n                                \n                        </table>\n                        </div>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n        </div> \n    \n        <div id=\"stats\" class=\"modal2\">\n            <form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('stats').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Statistika proizvoda</h1>\n                </div>   \n                            \n            <div class=\"card-stat\" style=\"margin-top:2%;\">     \n                <fusioncharts\n                width=\"400\"\n                height=\"300\"\n                type=\"Column2d\"\n                [dataSource]=dataSource>\n            </fusioncharts>\n            </div>\n            </form>\n                                 \n        </div>\n\n        <div id=\"exchange\" class=\"modal2\">\n            <form (submit)='exchangeProduct($event)' class=\"modal-content animate\">\n            \n                    <div class=\"imgcontainer\">\n                      <span onclick=\"document.getElementById('exchange').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                      <h1 style=\"text-align:center;color:white\">Zameni proizvod</h1>\n                    </div>   \n                                \n                <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%;\">     \n                        <div class=\"inputs\" style=\"width: 40%;\" >\n                          <div class=\"client\">\n                                <a>Sifra racuna proizvoda od kupca    </a>\n                                <select id=\"givingID\" class=\"text-center\" style=\"margin-bottom:10%; margin-left: 5%; width: 30%;\">\n                                        <option  class=\"text-center\" *ngFor=\"let bill of billsService.bills\" value=\"{{ bill.id }}\">{{ bill.id }}</option>\n                                </select> <br>\n                                <div class=\"inputs\">\n                                    <input id=\"givinProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra proizvoda koji se menja\" required>\n                                </div><br><br>\n                                <div class=\"inputs\">\n                                    <input id=\"takingProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra zeljenog proizvoda\" required>\n                                </div>\n                            </div>\n    \n                                      </div>\n                </div>\n               \n                <div class=\"form-group\" style=\"margin-top:2%;margin-left:30%; \">\n                        <input type=\"submit\"  value=\"Zameni\" class=\"btn float-right login_btn\" style=\"width:40%;\">\n                  </div>\n                               \n                  </form>\n        </div>\n    </div>\n    \n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\n\n* Radnik ima mogućnost da prodaje proizvod, vrši zamenu proizvoda kao i da naruči proizvode kojih nema na stanju. Kada radnik izabere proizvod koji hoće da proda, klikom na crvenu strelicu dodaje taj proizvod u korpu. Prečicom u gornjem desnom uglu se pristupa korpi. Nakon odabira količine proizvoda kojeg korisnik želi da poruči, pritiskom na dugme Izvrši kupivinu potvrđuje se porudzbina. Moguće je obrisati sadržaj iz korpe. Radnik naručuje proizvode kojih nema na stanju i svi proizvodi se šalju komercijalisti i on ih obrađuje.Zamena proizvoda se izvršava nakon odabira šifre računa, šifre proizvoda na računu, a zatim i šifre željenog proizvoda za zamenu. Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka. \n\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n    \n"

/***/ }),

/***/ "./src/app/radnik/radnik.component.ts":
/*!********************************************!*\
  !*** ./src/app/radnik/radnik.component.ts ***!
  \********************************************/
/*! exports provided: RadnikComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadnikComponent", function() { return RadnikComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _services_bills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bills.service */ "./src/app/services/bills.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/exchange-product.service */ "./src/app/services/exchange-product.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var RadnikComponent = /** @class */ (function () {
    function RadnikComponent(router, orderService, http, billsService, productService, exchangeProductService) {
        this.router = router;
        this.orderService = orderService;
        this.http = http;
        this.billsService = billsService;
        this.productService = productService;
        this.exchangeProductService = exchangeProductService;
        this.pozicija = localStorage.getItem('username');
        this.endpointURL = 'http://78.46.117.245:9000/logout';
        this.endpointURL3 = 'http://78.46.117.245:9000/products/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]({
            'Content-Type': 'application/json;charset=UTF-8',
            'token': localStorage.getItem("token")
        });
        this.korpa = JSON.parse(localStorage.getItem("cart"));
        this.gotData = false;
    }
    RadnikComponent.prototype.ngOnInit = function () {
        this.billsService.getAllBills();
        this.productService.getAllProducts();
        this.orderService.getZeroProducts();
    };
    RadnikComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
            }
        });
    };
    RadnikComponent.prototype.singleStatistic = function (id) {
        var _this = this;
        /* event.preventDefault();
        const id = event.srcElement.id;
        const newEndpointURL = this.endpointURL2 + id + "/statistics";
    
        this.http.get(newEndpointURL, {headers: this.headers}).subscribe(result => {
          this.dataSource = result;
          localStorage.setItem("singleStat", JSON.stringify(result));
    
          //console.log(result, this.dataSource)
          //console.log(result)
    
        }) */
        return this.http.get(this.endpointURL3 + id + "/statistics", { headers: this.headers }).subscribe(function (result) {
            _this.myDataSource = result;
            _this.dataSource = {
                chart: {
                    "caption": "Statistika",
                    "subCaption": "Proizvoda",
                    "xAxisName": "Datum",
                    "yAxisName": "Broj prodanih proizvoda",
                    "theme": "fusion",
                },
                "data": _this.myDataSource
            };
        });
    };
    RadnikComponent.prototype.exchangeProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var billID = target.querySelector('#givingID').value;
        var givinProductID = target.querySelector('#givinProductID').value;
        var takingProductID = target.querySelector('#takingProductID').value;
        this.exchangeProductService.returnProduct(billID, givinProductID, takingProductID).subscribe(function (data) {
            window.alert("Novac koji se vraca je: " + data.moneyToReturn + " RSD");
        }, function (err) { _this.handleError(err); /*console.log(err.error.message);console.log(err.status);*/ });
    };
    RadnikComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    RadnikComponent.prototype.addToCart = function (event) {
        var id = event.srcElement.id;
        if (this.korpa == null || this.korpa.length == 0) {
            this.korpa = [];
            this.korpa.push(id);
        }
        else {
            if (this.korpa.includes(id.toString())) {
                alert('Proizvod je vec ubacen u korpu');
            }
            else {
                this.korpa.push(id);
            }
        }
        localStorage.setItem("cart", JSON.stringify(this.korpa));
    };
    RadnikComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radnik',
            template: __webpack_require__(/*! ./radnik.component.html */ "./src/app/radnik/radnik.component.html"),
            styles: [__webpack_require__(/*! ./radnik.component.css */ "./src/app/radnik/radnik.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            _services_bills_service__WEBPACK_IMPORTED_MODULE_3__["BillsService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
            _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_5__["ExchangeProductService"]])
    ], RadnikComponent);
    return RadnikComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-box{\r\n    left: 20%;\r\n    position: absolute;\r\n    border-radius: 40%;\r\n    padding: 10px;\r\n    height: 40px;\r\n}\r\n\r\n.search-btn{\r\n    color:#05a081;\r\n    float: right;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background: #222;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.4s;\r\n    margin-left: 1ch;\r\n    text-decoration: none;\r\n}\r\n\r\n.search-text {\r\n    width: 10ch;\r\n    font-size: 1.3em;\r\n    border: none;\r\n    border-bottom: 1px solid #05a081;\r\n    background: none;\r\n    padding: 1;\r\n    color: white;\r\n    transition: 0.4s;\r\n    line-height: 40px;\r\n    \r\n  }\r\n\r\ninput[type=\"text\"]{\r\n    border-color: none;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n  }\r\n\r\n/* .search-box:hover > .search-text{\r\n      width: 240px;\r\n      padding: 0 6px;\r\n  } */\r\n\r\n.search-btn:hover{\r\n    background: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsaUJBQWlCOztFQUVuQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7QUFHQTs7O0tBR0c7O0FBRUg7SUFDRSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWJveHtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRue1xyXG4gICAgY29sb3I6IzA1YTA4MTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFjaDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaC10ZXh0IHtcclxuICAgIHdpZHRoOiAxMGNoO1xyXG4gICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDVhMDgxO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIHBhZGRpbmc6IDE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IDAgbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLyogLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLXRleHR7XHJcbiAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgfSAqL1xyXG4gICAgXHJcbiAgLnNlYXJjaC1idG46aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"search-box\">\n  <label for=\"search\" style=\"font-size:1.3em; margin-right: 1ch; color:rgb(85, 90, 95)\">Pretraži proizvode: </label>\n  <input autocomplete=\"off\" spellcheck=\"false\" [(ngModel)]=\"word\" (input)=\"resizeInputField($event)\" id=\"searchField\" class=\"search-text\" type=\"text\"  name=\"search\" (keyup.enter)=\"search()\" aria-label=\"Type to search\">\n  <a (click)='search()'  class=\"search-btn\" ><i class=\"fa fa-search \"></i></a>\n           <!--    <button type=\"submit\"><i class=\"fa fa-search\"></i></button> -->\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var SearchComponent = /** @class */ (function () {
    function SearchComponent(http, searchService, productService, router) {
        this.http = http;
        this.searchService = searchService;
        this.productService = productService;
        this.router = router;
        //searchResult: Product[];
        this.word = "";
        this.searchProduct = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.endpointURL = 'http://78.46.117.245:9000/products/search';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent.prototype.resizeInputField = function (event) {
        var inputFieldValue = event.target.value;
        var id = event.srcElement.id;
        var inputField = document.getElementById(id);
        var size = this.word.length + "ch";
        if (this.word.length < 10) {
            size = 7 + "ch";
        }
        inputField.setAttribute('style', 'width:' + size + '');
    };
    SearchComponent.prototype.search = function () {
        // event.preventDefault()
        // const target = event.target;
        this.searchService.getSeacrhResult(this.word);
        this.router.navigate(['/pretraga']);
        //var that = this;
        //this.searchResult = this.searchService.searchResults
        //console.log(this.searchResult);
        //this.searchProduct.emit(this.searchService.searchResults);
        //this.productService.products = this.searchService.searchResults;
        /* this.http.post(this.endpointURL,
          {'text':word},
          {headers:this.headers}).subscribe((data: Product[]) => {
            this.searchResult = data;
            console.log(this.searchResult)
          }); */
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SearchComponent.prototype, "searchProduct", void 0);
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_4__["ProductsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/services/bills.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/bills.service.ts ***!
  \*******************************************/
/*! exports provided: BillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillsService", function() { return BillsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BillsService = /** @class */ (function () {
    function BillsService(http) {
        this.http = http;
        this.endpointURL = 'http://78.46.117.245:9000/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'token': localStorage.getItem("token")
        });
    }
    BillsService.prototype.getAllBills = function () {
        var _this = this;
        return this.http
            .get(this.endpointURL + 'bills/', { headers: this.headers })
            .subscribe(function (result) {
            _this.bills = result;
        });
    };
    BillsService.prototype.getPDF = function (id) {
        var _this = this;
        var id = id;
        var endPointUrl = this.endpointURL + 'bills/' + id + '/pdf';
        return this.http
            .get(endPointUrl, { headers: this.headers, responseType: 'blob' })
            .subscribe(function (data) {
            _this.blob = new Blob([data], { type: 'application/pdf' });
            var downloadUrl = window.URL.createObjectURL(data);
            var filename = "Bill_" + id;
            var link = document.createElement('a');
            link.href = downloadUrl;
            link.download = filename + ".pdf";
            link.click();
            //this.response= response
            //let blob: any = new Blob([(this.response.data)], { type: 'application/pdf' });
            //let blobUrl: string = window.URL.createObjectURL(blob);
            //window.URL.revokeObjectURL(blobUrl);
            //var url = window.URL.createObjectURL(response);
            // window.open(url);
            // let link: any = window.document.createElement('a'); 
            /* if ('download' in link) {
                link.setAttribute('href', blobUrl);
            
                //Set the download attribute.
                //Edge doesn’t take filename here.
                link.setAttribute("download", "nesto");
            
                //Simulate clicking download link.
                let event: any = window.document.createEvent('MouseEvents');
                event.initMouseEvent
                    ('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
                link.dispatchEvent(event);   */
        });
    };
    BillsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BillsService);
    return BillsService;
}());



/***/ }),

/***/ "./src/app/services/delete.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/delete.service.ts ***!
  \********************************************/
/*! exports provided: DeleteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteService", function() { return DeleteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DeleteService = /** @class */ (function () {
    function DeleteService(http) {
        this.http = http;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'token': localStorage.getItem("token"),
        });
    }
    DeleteService.prototype.deleteAny = function (endPointURL) {
        return this.http.delete(endPointURL, {
            headers: this.headers
        });
    };
    DeleteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DeleteService);
    return DeleteService;
}());



/***/ }),

/***/ "./src/app/services/exchange-product.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/exchange-product.service.ts ***!
  \******************************************************/
/*! exports provided: ExchangeProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeProductService", function() { return ExchangeProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ExchangeProductService = /** @class */ (function () {
    function ExchangeProductService(http) {
        this.http = http;
        this.endpointURL = 'http://78.46.117.245:9000/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
    }
    ExchangeProductService.prototype.returnProduct = function (billID, givinProductID, takingProductID) {
        return this.http.post(this.endpointURL + 'soldproducts/substitute/', {
            'billId': billID,
            'oldProduct': givinProductID,
            'newProduct': takingProductID
        }, {
            headers: this.headers
        });
    };
    ExchangeProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExchangeProductService);
    return ExchangeProductService;
}());



/***/ }),

/***/ "./src/app/services/invoices.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/invoices.service.ts ***!
  \**********************************************/
/*! exports provided: InvoicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesService", function() { return InvoicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var InvoicesService = /** @class */ (function () {
    function InvoicesService(http) {
        this.http = http;
        this.endpointURL = 'http://78.46.117.245:9000/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'token': localStorage.getItem("token")
        });
    }
    InvoicesService.prototype.getAllInvoices = function () {
        var _this = this;
        return this.http
            .get(this.endpointURL + 'invoices/', { headers: this.headers })
            .subscribe(function (result) {
            _this.invoices = result;
        });
    };
    InvoicesService.prototype.getPDF = function (id) {
        var _this = this;
        var id = id;
        var endPointUrl = this.endpointURL + 'invoices/' + id + '/pdf';
        return this.http
            .get(endPointUrl, { headers: this.headers, responseType: 'blob' })
            .subscribe(function (data) {
            _this.blob = new Blob([data], { type: 'application/pdf' });
            var downloadUrl = window.URL.createObjectURL(data);
            var filename = "Invoice_" + id;
            var link = document.createElement('a');
            link.href = downloadUrl;
            link.download = filename + ".pdf";
            link.click();
        });
    };
    InvoicesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], InvoicesService);
    return InvoicesService;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.endpointURL = 'http://78.46.117.245:9000/login';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8' });
    }
    LoginService.prototype.getUserDetails = function (username, password) {
        return this.http.post(this.endpointURL, {
            'username': username,
            'password': password
        }, {
            headers: this.headers
        });
    };
    LoginService.prototype.removeToken = function () {
        return localStorage.removeItem("token");
    };
    LoginService.prototype.getToken = function () {
        return localStorage.getItem("token");
    };
    LoginService.prototype.isAuthenticated = function () {
        return this.getToken() !== null;
    };
    LoginService.prototype.getRole = function () {
        return localStorage.getItem("role");
    };
    LoginService.prototype.getUsername = function () {
        return localStorage.getItem("username");
    };
    LoginService.prototype.isHavingRole = function () {
        return this.getRole() !== null;
    };
    LoginService.prototype.isHavingUsername = function () {
        return this.getUsername() !== null;
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.endpointURL = 'http://78.46.117.245:9000/products/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.zeroProducts = [];
    }
    OrderService.prototype.getZeroProducts = function () {
        var _this = this;
        return this.http
            .get(this.endpointURL, { headers: this.headers })
            .subscribe(function (result) {
            _this.products = result;
            _this.zeroProducts = [];
            for (var i = 0; i < _this.products.length; i++) {
                if (_this.products[i].quantity == "0") {
                    _this.zeroProducts.push(_this.products[i]);
                }
            }
            localStorage.setItem('zeroProducts', JSON.stringify(_this.zeroProducts));
        });
    };
    OrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/producers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/producers.service.ts ***!
  \***********************************************/
/*! exports provided: ProducersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProducersService", function() { return ProducersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProducersService = /** @class */ (function () {
    function ProducersService(http) {
        this.http = http;
        this.endpointURL = 'http://78.46.117.245:9000/producers/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'token': localStorage.getItem("token"),
        });
    }
    ProducersService.prototype.getAllProducers = function () {
        var _this = this;
        return this.http
            .get(this.endpointURL, { headers: this.headers })
            .subscribe(function (result) {
            _this.producers = result;
        });
    };
    ProducersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProducersService);
    return ProducersService;
}());



/***/ }),

/***/ "./src/app/services/product-type.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/product-type.service.ts ***!
  \**************************************************/
/*! exports provided: ProductTypeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductTypeService", function() { return ProductTypeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductTypeService = /** @class */ (function () {
    function ProductTypeService(http) {
        this.http = http;
        this.endpointURL = 'http://78.46.117.245:9000/product_types/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'token': localStorage.getItem("token"),
        });
    }
    ProductTypeService.prototype.getAllProductTypes = function () {
        var _this = this;
        return this.http
            .get(this.endpointURL, { headers: this.headers })
            .subscribe(function (result) {
            _this.productTypes = result;
        });
    };
    ProductTypeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductTypeService);
    return ProductTypeService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
        this.endpointURL = 'http://78.46.117.245:9000/products/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'token': localStorage.getItem("token"),
        });
    }
    ProductsService.prototype.getAllProducts = function () {
        var _this = this;
        return this.http
            .get(this.endpointURL, { headers: this.headers })
            .subscribe(function (result) {
            _this.products = result;
        });
    };
    ProductsService.prototype.discountProduct = function (producerID, productType, discountCoefficient) {
        return this.http.post(this.endpointURL + 'discount/', {
            'producerID': producerID,
            'productType': productType,
            'discountCoefficient': discountCoefficient
        }, {
            headers: this.headers
        });
    };
    ProductsService.prototype.discountSingleProduct = function (id, discountCoefficient) {
        return this.http.post(this.endpointURL + id + '/discount/', {
            'discountCoefficient': discountCoefficient
        }, {
            headers: this.headers
        });
    };
    ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/services/register.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/register.service.ts ***!
  \**********************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.endpointURL = 'http://78.46.117.245:9000/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.headers2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'token': localStorage.getItem("token") });
    }
    RegisterService.prototype.sendUserDetails = function (firstName, lastName, username, email, password, role) {
        return this.http.post(this.endpointURL + 'users/', {
            'firstName': firstName,
            'lastName': lastName,
            'username': username,
            'email': email,
            'password': password,
            'role': role
        }, {
            headers: this.headers
        });
    };
    RegisterService.prototype.sendProductDetails = function (formData /* image, name, price, producer, productType, productURL, properties, quantity, warranty */) {
        /*  var formData = new FormData();
        formData.append('image', imagePath); */
        return this.http.post(this.endpointURL + 'products/', formData, /* {
            'image': image,
            'name': name,
            'price': price,
            'producer': producer,
            'productType': productType,
            'productURL': productURL,
            'properties': properties,
            'quantity': quantity,
            'warranty': warranty
        }, */ {
            /*  transformRequest, */
            headers: this.headers2
        });
    };
    RegisterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/search.service.ts ***!
  \********************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.endpointURL = 'http://78.46.117.245:9000/products/search';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'token': localStorage.getItem("token"),
        });
    }
    SearchService.prototype.getSeacrhResult = function (word) {
        var _this = this;
        this.http.post(this.endpointURL, { 'text': word }, { headers: this.headers }).subscribe(function (result) {
            _this.searchResults = result;
        });
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/services/single-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/single-service.service.ts ***!
  \****************************************************/
/*! exports provided: SingleServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleServiceService", function() { return SingleServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SingleServiceService = /** @class */ (function () {
    function SingleServiceService(http) {
        this.http = http;
        this.endpointURL = 'http://78.46.117.245:9000/products/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json;charset=UTF-8',
            'token': localStorage.getItem("token") });
    }
    //Ovo je glavna metoda getSingleStatistics koja uzima id iz admin komponente
    //ali sam istu iskopirao u single-stat komponentu i odmah tamo uzimam response za id 
    //ali svakako neka ostane servis, ako ga ne pozovemo nece se ni koristiti svakako
    SingleServiceService.prototype.getSingleStatistics = function (id) {
        var _this = this;
        return this.http.get(this.endpointURL + id + "/statistics", { headers: this.headers }).subscribe(function (result) {
            _this.singleStatistics = result;
        });
    };
    SingleServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SingleServiceService);
    return SingleServiceService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.endpointURL = 'http://78.46.117.245:9000/users/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json',
            'token': localStorage.getItem("token"),
        });
        this.users = [];
    }
    UserService.prototype.getAllUsers = function () {
        var _this = this;
        return this.http
            .get(this.endpointURL, { headers: this.headers })
            .subscribe(function (result) {
            _this.users = result;
        });
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/spisak/spisak.component.css":
/*!*********************************************!*\
  !*** ./src/app/spisak/spisak.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n        margin-top:8vh;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    ul li:hover ul li{\r\n    display:block;\r\n}\r\n\r\n    ul li ul li a:hover{\r\n    color:black;\r\n}\r\n\r\n    .modal-content {\r\n    background-color: rgba(0,0,0,.8);\r\n    margin: 4% auto 15% auto;\r\n    border: 1px solid #888;\r\n    width: 40%; \r\n    padding-bottom: 30px;\r\n    align-content: center;\r\n}\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n    position: absolute;\r\n    right: 25px;\r\n    top: 0;\r\n    color: white;\r\n    font-size: 35px;\r\n    font-weight: bold;\r\n}\r\n\r\n    .close:hover,.close:focus {\r\n    color: red;\r\n    cursor: pointer;\r\n}\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n    -webkit-animation: zoom 0.6s;\r\n            animation: zoom 0.6s\r\n}\r\n\r\n    @-webkit-keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    @keyframes zoom {\r\n    from {-webkit-transform: scale(0);transform: scale(0)} \r\n    to {-webkit-transform: scale(1);transform: scale(1)}\r\n}\r\n\r\n    .card{\r\n    display:flex;\r\n    margin-top:2%;\r\n    margin-bottom:2%;\r\n    margin-left:35%;\r\n}\r\n\r\n    .text-icons{\r\n    margin-left:3%;\r\n    margin-top:1%;\r\n}\r\n\r\n    .inputs{\r\n    margin-left:1%\r\n}\r\n\r\n    .modal {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n}\r\n\r\n    .modal1 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .modal2 {\r\n    display:none;\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: auto;\r\n    background-color: rgba(0,0,0,0.4);\r\n    \r\n}\r\n\r\n    .top-nav{\r\npadding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n    float: left;\r\n    position: fixed;\r\n    margin-top: 0;\r\n    /*border: 1px solid rgba(0,0,0,.15);*/\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n    background-color: #fff;\r\n    box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n    \r\n}\r\n\r\n    .dropdown ul li ul li{\r\ndisplay:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\ncursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\ndisplay:inline-block;\r\n\r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\nwhite-space: normal;\r\ntext-decoration: none;\r\n\r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\ncolor:#05a081;\r\n\r\n\r\n}\r\n\r\n    .inputs select{\r\nposition: relative;\r\nbackground-color:black;\r\ncolor:white;\r\nborder-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\nbackground-color: #05a081;\r\ncolor:black;\r\n}\r\n\r\n    .login_btn{\r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    width: 100px;\r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    .search-box{\r\n        left: 20%;\r\n        position: absolute;\r\n        border-radius: 40%;\r\n        padding: 10px;\r\n        height: 40px;\r\n    }\r\n\r\n    .search-btn{\r\n        color:#05a081;\r\n        float: right;\r\n        width: 40px;\r\n        height: 40px;\r\n        border-radius: 50%;\r\n        background: #222;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        transition: 0.4s;\r\n    }\r\n\r\n    .search-text {\r\n        font-size: 17px;\r\n        border: none;\r\n        background: none;\r\n        float: left;\r\n        padding: 0;\r\n        color: white;\r\n        transition: 0.4s;\r\n        line-height: 40px;\r\n        width: 0px;\r\n        \r\n      }\r\n\r\n    input[type=\"text\"]{\r\n        border-color: none;\r\n        box-shadow: none;\r\n        outline: 0 none;\r\n      }\r\n\r\n    .search-box:hover > .search-text{\r\n          width: 240px;\r\n          padding: 0 6px;\r\n      }\r\n\r\n    .search-box:hover > .search-btn{\r\n        background: white;\r\n    }\r\n\r\n    .client a{\r\n        text-decoration: none;\r\n        color:white;\r\n\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3Bpc2FrL3NwaXNhay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBGQUEwRjs7SUFFdEY7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBQ0Esd0VBQXdFOztJQUt4RTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixjQUFjO0lBQ2xCOztJQUdKLG1CQUFtQjs7SUFFbkI7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7SUFFQTs7Ozs7SUFLSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztJQUdBLG9CQUFvQjs7SUFFaEI7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsbUNBQW1DO1FBQ25DLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsNkJBQTZCO1FBQzdCLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLHVDQUF1QztJQUMzQzs7SUFFQTs7UUFFSSxhQUFhO1FBQ2Isb0NBQW9DO1FBQ3BDLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsdUNBQXVDO0lBQzNDOztJQUVBO1FBQ0ksY0FBYztRQUNkLDRCQUE0QjtRQUM1QixxQkFBcUI7UUFDckIsV0FBVzs7SUFFZjs7SUFDSjtFQUNFLFNBQVM7QUFDWDs7SUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7SUFDQTs7SUFFSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztJQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtFQUN6Qjs7SUFDQTtJQUNFLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7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QUNJLHFCQUFxQjtRQUNyQixXQUFXOztJQUVmIiwiZmlsZSI6InNyYy9hcHAvc3Bpc2FrL3NwaXNhay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAvKmh0bWwsIGJvZHksICN3cmFwcGVyLCAjcGFnZS13cmFwcGVyIHtoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47fSovXHJcblxyXG5cclxuXHJcblxyXG4gICAgI3dyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3BhZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogMjJweCAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6OHZoO1xyXG4gICAgfVxyXG5cclxuXHJcbi8qIFRvcCBOYXZpZ2F0aW9uICovXHJcblxyXG4udG9wLW5hdj5saT5hIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG59XHJcblxyXG4udG9wLW5hdj5saT5hOmhvdmVyLFxyXG4udG9wLW5hdj5saT5hOmZvY3VzLFxyXG4udG9wLW5hdj4ub3Blbj5hLFxyXG4udG9wLW5hdj4ub3Blbj5hOmhvdmVyLFxyXG4udG9wLW5hdj4ub3Blbj5hOmZvY3VzIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxufVxyXG5cclxuXHJcbi8qIFNpZGUgTmF2aWdhdGlvbiAqL1xyXG5cclxuICAgIC5zaWRlLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICBsZWZ0OiAyMjVweDtcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMjVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggcmdiYSgwLDAsMCwxKSBzb2xpZDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2QjdEOyovXHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXY+bGk+YSB7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpob3ZlcixcclxuICAgIC5zaWRlLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPnVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNpZGUtbmF2PmxpPnVsPmxpPmEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDM4cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4ubmF2YmFyIC5uYXYgPiBsaSA+IGE6aG92ZXIgPiAubGFiZWwge1xyXG4gIHRvcDogMTBweDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG4uU2VhcmNoe1xyXG5cclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG59XHJcblxyXG4uU2VhcmNoIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5TZWFyY2ggYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2RkZDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLlNlYXJjaCBidXR0b246aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzA1YTA4MTtcclxuICB9XHJcblxyXG51bCBsaSB1bCBsaXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG51bCBsaTpob3ZlciB1bCBsaXtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxudWwgbGkgdWwgbGkgYTpob3ZlcntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxuICAgIG1hcmdpbjogNCUgYXV0byAxNSUgYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XHJcbiAgICB3aWR0aDogNDAlOyBcclxuICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBUaGUgQ2xvc2UgQnV0dG9uICh4KSAqL1xyXG4uY2xvc2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDI1cHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDM1cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uY2xvc2U6aG92ZXIsLmNsb3NlOmZvY3VzIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xyXG4uYW5pbWF0ZSB7XHJcbiAgICBhbmltYXRpb246IHpvb20gMC42c1xyXG59XHJcbkBrZXlmcmFtZXMgem9vbSB7XHJcbiAgICBmcm9tIHt0cmFuc2Zvcm06IHNjYWxlKDApfSBcclxuICAgIHRvIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxyXG59XHJcbi5jYXJke1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDoyJTtcclxuICAgIG1hcmdpbi1ib3R0b206MiU7XHJcbiAgICBtYXJnaW4tbGVmdDozNSU7XHJcbn1cclxuLnRleHQtaWNvbnN7XHJcbiAgICBtYXJnaW4tbGVmdDozJTtcclxuICAgIG1hcmdpbi10b3A6MSU7XHJcbn1cclxuXHJcbi5pbnB1dHN7XHJcbiAgICBtYXJnaW4tbGVmdDoxJVxyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG59XHJcbi5tb2RhbDEge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgXHJcbn1cclxuLm1vZGFsMiB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBcclxufVxyXG5cclxuXHJcbi50b3AtbmF2e1xyXG5wYWRkaW5nOiAwIDE1cHg7XHJcblxyXG59XHJcblxyXG4udG9wLW5hdjJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAvKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjE1KTsqL1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgXHJcbn1cclxuLmRyb3Bkb3duIHVsIGxpIHVsIGxpe1xyXG5kaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24gYTpob3ZlcntcclxuY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93biBhOmhvdmVyIHVsIGxpe1xyXG5kaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHJcblxyXG59XHJcblxyXG5cclxuLnRvcC1uYXYyIGxpIGF7XHJcbndoaXRlLXNwYWNlOiBub3JtYWw7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5kcm9wZG93biBhe1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG5jb2xvcjojMDVhMDgxO1xyXG5cclxuXHJcbn1cclxuXHJcbi5pbnB1dHMgc2VsZWN0e1xyXG5wb3NpdGlvbjogcmVsYXRpdmU7XHJcbmJhY2tncm91bmQtY29sb3I6YmxhY2s7XHJcbmNvbG9yOndoaXRlO1xyXG4tbW96LWJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxuLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbmJvcmRlci1yYWRpdXM6IDlweCA5cHggOXB4IDlweDtcclxufVxyXG4uaW5wdXRzIHNlbGVjdDpob3ZlcntcclxuYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxuY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5sb2dpbl9idG57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44NSk7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9idG46aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuc2VhcmNoLWJveHtcclxuICAgICAgICBsZWZ0OiAyMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNlYXJjaC1idG57XHJcbiAgICAgICAgY29sb3I6IzA1YTA4MTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VhcmNoLXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgICAgICBib3JkZXItY29sb3I6IG5vbmU7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiAwIG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAuc2VhcmNoLWJveDpob3ZlciA+IC5zZWFyY2gtdGV4dHtcclxuICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xyXG4gICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIC5zZWFyY2gtYm94OmhvdmVyID4gLnNlYXJjaC1idG57XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNsaWVudCBhe1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjp3aGl0ZTtcclxuXHJcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/spisak/spisak.component.html":
/*!**********************************************!*\
  !*** ./src/app/spisak/spisak.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/admin\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n                <li class=\"dropdown\"  style=\"margin-right: 15px;\">\n                    <a > {{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                    <ul class=\"top-nav2\">\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/korpa\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:5px;\" class=\"fa fa-shopping-cart\"></i>Korpa</a></li>\n                        <li style=\"margin-top:10%;\" ><a routerLink=\"/stats\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:8px;\" class=\"fa fa-bar-chart-o\"></i>Statistika</a></li>\n\n                        <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                        <li (click)=\"logout()\"  style=\"margin-top:10%;\"><a  style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li></ul>\n                </li>\n            </ul>\n<!-- Meni sa leve strane -->\n    <ul class=\"nav navbar-nav side-nav\">\n        <li>\n            <a routerLink=\"/admin\"> POCETNA</a>\n        </li>\n        <li>\n            <a routerLink=\"/spisak\">SPISAK RADNIKA</a>\n        </li>\n        <li>\n                <a routerLink=\"/narucivanje\" >NARUCIVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a routerLink=\"/naruceno\">NARUCENI PROIZVODI</a>           \n        </li>\n        <li>\n                <a onclick=\"document.getElementById('exchange').style.display='block'\" style=\"cursor:pointer;\">ZAMENA PROIZVODA</a>           \n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('registering').style.display='block'\"  style=\"cursor:pointer;\">REGISTRACIJA RADNIKA</a>\n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('adding').style.display='block'\"  style=\"cursor:pointer;\">DODAVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a onclick=\"document.getElementById('discount').style.display='block'\"  style=\"cursor:pointer;\">ODREDI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/automatski-popust\">AUTOMATSKI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/racuni\">PRIKAZ RACUNA</a>\n        </li>\n        <li>\n                <a routerLink=\"/prikaz\">PRIKAZ FAKTURE</a>\n            </li>\n       \n    </ul>\n</nav>\n\n    <div id=\"page-wrapper\">\n        <div class=\"container-fluid\">\n            <!-- Page Heading -->\n            <div class=\"row\" id=\"main\" >\n                <div class=\"col-sm-12 col-md-12 well\" id=\"content\">\n                  \n                        <div class=\"col-md-12\">\n                        <h4>Spisak radnika koji rade u magacinu Techtrade-a</h4>\n                        <div  id=\"spisakRadnika\" class=\"table-responsive\">\n                \n                                \n                              <table id=\"mytable\" class=\"table table-bordred table-striped\">\n                                   \n                                   <thead>\n                                    <th class=\"text-center\">Ime</th>\n                                    <th class=\"text-center\">Prezime</th>\n                                     <th class=\"text-center\">E-Mail</th>\n                                     <th class=\"text-center\">Pozicija</th>\n                                       <th class=\"text-center\">Izbrisi</th>\n                                   </thead>\n                    <tbody>\n                    \n                    <tr *ngFor=\"let user of userService.users\">\n                    <td class=\"text-center\">{{user.firstName}}</td>\n                    <td class=\"text-center\">{{user.lastName}}</td>\n                    <td class=\"text-center\">{{user.email}}</td>\n                    <td class=\"text-center\">{{ user.role }}</td>\n                    <td class=\"text-center\"><button  (click)=\"deleteUser($event)\" id=\"{{ user.id }}\"  class=\"btn btn-danger btn-xs\"><span id=\"{{ user.id }}\"  class=\"glyphicon glyphicon-trash\"></span></button></td>\n                    </tr>\n                 <!--   \n                 <tr>\n                    <td>Laza</td>\n                    <td>Lazic</td>\n                    <td>Lazina</td>\n                    <td>laza.lazic@gmail.com</td>\n                    <td>567</td>\n                    <td><button class=\"btn btn-danger btn-xs\" ><span class=\"glyphicon glyphicon-trash\"></span></button></td>\n                    </tr>\n                -->\n                    </tbody>\n                        \n                </table>\n                </div>\n                </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div  id=\"adding\" class=\"modal justify-content-center\" >\n        <form [formGroup]=\"uploadForm\"  (submit)='addProduct($event)' class=\"modal-content animate justify-content-center\" >\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('adding').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Dodavanje proizvoda</h1>\n            </div>   \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"producer\" placeholder='Proizvodjac' >\n                                <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                              </select>                    </div>\n            </div>    \n            <div class=\"card\">     \n                    <div class=\"text-icons\">         \n                            <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                    </div>\n                    <div class=\"inputs\">\n                        <select id=\"productType\" placeholder='Vrsta proizvoda'>\n                                <option   *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                              \n                              </select>                    </div>\n            </div>        \n        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"quantity\" type=\"text\" class=\"form-control\" placeholder=\"Kolicina\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"productURL\" type=\"text\" class=\"form-control\" placeholder=\"Website\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"warranty\" type=\"text\" class=\"form-control\" placeholder=\"Garancija\" required>\n                    </div>\n        </div>                \n        <div class=\"card\" style=\"text-align:center;\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n            <input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Naziv prozivoda...\" required>\n                </div>\n        </div>\n        <div class=\"card\" style=\"align-content:center;\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n            <textarea id=\"properties\" rows=\"4\" cols=\"50\" class=\"form-control\" name=\"description\" placeholder=\"Uneti opis proizvoda...\" required></textarea>                   \n         </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-images\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"image\" type=\"file\" class=\"form-control\" >\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-dollar-sign\" style=\"color:white; margin-right: 5%;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"price\" type=\"number\" class=\"form-control\" placeholder=\"Cena proizvoda\" required>\n                    </div>\n        </div>\n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <button type=\"submit\" value=\"Dodaj\" class=\"btn float-right login_btn\"  >Dodaj</button>\n          </div>\n                            \n          </form>\n</div>\n\n<div id=\"registering\" class=\"modal1\">\n        <form (submit)='registerUser($event)' class=\"modal-content animate\">\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('registering').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Registracija radnika</h1>\n            </div>   \n                        \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n            <i class=\"fas fa-user\" style=\"color:white;\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Korisnicko ime...\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Ime\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>         \n                               </div>\n                <div class=\"inputs\">\n                        <input id=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Prezime\" required>\n                    </div>\n        </div>\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-key\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Sifra...\" required>\n\n                    </div>\n        </div>\n\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"material-icons\" style=\"font-size:14px;color:white\">email</i>\n                </div>\n                <div class=\"inputs\">\n                        <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\" required>\n\n                    </div>\n        </div>\n\n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                    <select id=\"role\" placeholder='Pozicija'>\n                            <option value=\"2\">ADMIN</option>\n                            <option value=\"0\">WORKER</option>\n                            <option value=\"1\">MANAGER</option>\n                            <option value=\"3\">OWNER</option>\n                          </select>                    </div>\n        </div>\n\n       \n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n                <button id=\"registerButton\" type=\"submit\" value=\"Registracija\" class=\"btn float-right login_btn\" (click)=\"refreshSpisak()\">Registracija</button>\n          </div>\n                            \n          </form>\n</div>\n\n\n\n<div id=\"discount\" class=\"modal2\">\n    <form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('discount').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n          <h1 style=\"text-align:center;color:white\">Odredjivanje popusta</h1>\n        </div>   \n                    \n    <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n            <div class=\"text-icons\">         \n        <i class=\"fas fa-industry\" style=\"color:white;\"></i>\n            </div>\n            <div class=\"inputs\">\n                <div class=\"inputs\">\n                    <select id=\"producerDiscount\" placeholder='Proizvodjac' >\n                            <option disabled selected value> -- select an option -- </option>\n                            <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                          </select> \n                </div>                    \n            </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n            <div class=\"text-icons\">         \n                            <i class=\"fas fa-keyboard\" style=\"color:white\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <select id=\"productTypeDiscount\" placeholder='Vrsta proizvoda'>\n                            <option disabled selected value> -- select an option -- </option>\n                            <option *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                          </select>\n            </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:2%;margin-left:28.5%;\">     \n            <div class=\"text-icons\">         \n                    <i class=\"fas fa-percent\" style=\"color:white\"></i>\n                    \n            </div>\n            <div class=\"inputs\">\n                    <input id=\"procenat\" type=\"number\" class=\"form-control\" style=\"text-align: center; width: 150px\" placeholder=\"Iznos procenta\" required min=\"0\" max=\"100\" oninvalid=\"this.setCustomValidity('Vrednost manje ili jednaka 100')\" oninput=\"this.setCustomValidity('')\"> \n            </div>\n    </div>\n    <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%;\">\n            <button type=\"submit\" style=\"text-align:center;\" value=\"Izvrsi\" class=\"btn login_btn justify-content-center\">Izvrsi</button>\n            \n      </div>\n      <div style=\"margin-top:2%;margin-left:24;\">\n            <p style=\"text-align:center; color: white\">Status: </p> \n            <p style=\"text-align:center; color: lime\">{{ this.response }}</p>\n      </div>\n                        \n      </form>\n</div>\n\n<div id=\"exchange\" class=\"modal2\">\n        <form (submit)='exchangeProduct($event)' class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('exchange').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Zameni proizvod</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-left: 20%; margin-right: 0%; width: 150%;\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <a>Sifra racuna proizvoda od kupca    </a>\n                            <select id=\"givingID\" class=\"text-center\" style=\"margin-bottom:10%; margin-left: 5%; width: 30%;\">\n                                    <option  class=\"text-center\" *ngFor=\"let bill of billsService.bills\" value=\"{{ bill.id }}\">{{ bill.id }}</option>\n                            </select> <br>\n                            <div class=\"inputs\">\n                                <input id=\"givinProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra proizvoda koji se menja\" required>\n                            </div><br><br>\n                            <div class=\"inputs\">\n                                <input id=\"takingProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra zeljenog proizvoda\" required>\n                            </div>\n                        </div>\n\n                                  </div>\n            </div>\n           \n            <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%; \">\n                    <input type=\"submit\"  value=\"Zameni\" class=\"btn float-right login_btn\" style=\"width:40%;\">\n              </div>\n                           \n              </form>\n    </div>\n\n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi koji su trenutno dostupni u prodavnici. Moguće je promeniti bilo koji atribut postojaćeg proizvoda, moguće je ukloniti proizvod, a takođe i izvršiti popust unošenjem odgovarajućeg iznosa procenta. Na crvenu strelicu se proizvod ubacuje u korpu. \n\n\nSpisak radnika\n\n* Omogućen je uvid u spisak svih radnika koji rade u magacinu Techtradea kao i njihove informacije. Moguće je ukloniti korisnika.\n\n\nNaručivanje proizvoda\n\n* Na početku su izlistani svi proizvodi svih dobavljača. Prilikom narudžbenice, moguće je u korpu dodati proizvode pritiskom na crvenu strelicu. U korpi željeni kvantitet unosi sam korisnik. Moguće je obrisati sadržaj iz korpe. Pritiskom na dugme za kupovinu potvrđuje se porudzbina. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nZameni proizvod\n\n* Izvršiti odabir šifre računa;\n* Izvršiti odabir šifre proizvoda na računu;\n* Uneti šifru željenog proizvoda za zamenu;\n* Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka.\n\n\nRegistracija radnika\n\n* Omogućava unošenje novih autorizovanih korisnika. Unošenjem svih potrebnih podataka, kao i podatka koji autorizovani korisnik je u pitanju, biće izbačena odgovarajuća poruka.\n\n\nDodavanje proizvoda\n\n* Moguće je dodati nov proizvod. U slučaju da proizvod već postoji, biće izbačena odgovarajuća poruka.\n\n\nOdredi popust\n\n* Odabrati proizvođača;\n* Odabrati željeni proizvod;\n* Uneti iznos procenta;\n* Pritiskom na dugme 'Izvrši', biće izbačena odgovarajuća poruka.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\nPrikaz računa\n\n* Omogućen je uvid u tabelu sa računima;\n* Moguće je izvesti račun koji je generisan u PDF formi.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/spisak/spisak.component.ts":
/*!********************************************!*\
  !*** ./src/app/spisak/spisak.component.ts ***!
  \********************************************/
/*! exports provided: SpisakComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpisakComponent", function() { return SpisakComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_delete_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/delete.service */ "./src/app/services/delete.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_bills_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/bills.service */ "./src/app/services/bills.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_producers_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/producers.service */ "./src/app/services/producers.service.ts");
/* harmony import */ var _services_product_type_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/product-type.service */ "./src/app/services/product-type.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_single_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/single-service.service */ "./src/app/services/single-service.service.ts");
/* harmony import */ var _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/exchange-product.service */ "./src/app/services/exchange-product.service.ts");















var SpisakComponent = /** @class */ (function () {
    //users: User[] ;
    function SpisakComponent(billsService, userService, registerService, productService, producersService, productTypeService, searchService, http, formBuilder, deleteService, single, router, exchangeProductService) {
        this.billsService = billsService;
        this.userService = userService;
        this.registerService = registerService;
        this.productService = productService;
        this.producersService = producersService;
        this.productTypeService = productTypeService;
        this.searchService = searchService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.deleteService = deleteService;
        this.single = single;
        this.router = router;
        this.exchangeProductService = exchangeProductService;
        this.pozicija = localStorage.getItem('username');
        this.endpointURL = 'http://78.46.117.245:9000/users/';
        this.endpointURL5 = 'http://78.46.117.245:9000/logout';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({ 'Content-Type': 'application/json; charset=utf-8',
            'token': localStorage.getItem("token") });
        this.userFile = File;
        this.uploadForm = _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroup"];
    }
    SpisakComponent.prototype.ngOnInit = function () {
        this.producersService.getAllProducers();
        this.productTypeService.getAllProductTypes();
        this.billsService.getAllBills();
        this.uploadForm = this.formBuilder.group({
            image: [''],
            name: [''],
            price: [''],
            producer: [''],
            productType: [''],
            productURL: [''],
            properties: [''],
            quantity: [''],
            warranty: [''],
            vendorPrice: ['']
        });
        this.userService.getAllUsers();
        //setTimeout(function(){this.userService.users = this.users}, 1000);  
    };
    SpisakComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL5, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    SpisakComponent.prototype.refreshSpisak = function () {
        var that = this;
        setTimeout(function () { that.userService.getAllUsers(); }, 200);
        ;
    };
    SpisakComponent.prototype.deleteUser = function (event) {
        var _this = this;
        event.preventDefault();
        var id = event.srcElement.id;
        var endPointUrl = this.endpointURL + id + '/';
        this.deleteService.deleteAny(endPointUrl).subscribe(function (response) {
            window.alert("Korisnik uspešno izbrisan!");
        }, function (err) { _this.handleError(err); });
        this.userService.users = this.userService.users.filter(function (users) { return users.id != id; });
        var that = this;
        // setTimeout(function(){ that.userService.getAllUsers() }, 100)
    };
    SpisakComponent.prototype.onSelectFile = function (event) {
        var selectFile = event.target.files[0];
        this.userFile = selectFile;
    };
    SpisakComponent.prototype.addProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var image = target.querySelector('#image');
        /* if(image.files.length > 0){
          const file = image.files[0];
          this.uploadForm.get('file').setValue(file);
          this.slika = this.uploadForm.get('file').value;
        }  */
        // var formData = new FormData();
        //formData.append('image', image);
        var name = target.querySelector('#name').value;
        this.uploadForm.get('name').setValue(name);
        var price = target.querySelector('#price').value;
        this.uploadForm.get('price').setValue(price);
        var producer = target.querySelector('#producer').value;
        this.uploadForm.get('producer').setValue(producer);
        var productType = target.querySelector('#productType').value;
        this.uploadForm.get('productType').setValue(productType);
        var productURL = target.querySelector('#productURL').value;
        this.uploadForm.get('productURL').setValue(productURL);
        var properties = target.querySelector('#properties').value;
        this.uploadForm.get('properties').setValue(properties);
        var quantity = target.querySelector('#quantity').value;
        this.uploadForm.get('quantity').setValue(quantity);
        var warranty = target.querySelector('#warranty').value;
        this.uploadForm.get('warranty').setValue(warranty);
        var vendorPrice = target.querySelector('#vendorPrice').value;
        this.uploadForm.get('vendorPrice').setValue(vendorPrice);
        var data = JSON.stringify(this.uploadForm.value);
        var formData = new FormData();
        //formData.append("productData", data);
        formData.append("image", this.userFile);
        // formData.append("image", this.uploadForm.get('file').value);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("producer", producer);
        formData.append("productType", productType);
        formData.append("productURL", productURL);
        formData.append("properties", properties);
        formData.append("quantity", quantity);
        formData.append("warranty", warranty);
        formData.append("vendorPrice", vendorPrice);
        /*console.log( formData  image, name, price, producer, productType, productURL, properties, quantity, warranty );*/
        /*this.registerService.sendProductDetails(image, name, price, producer, productType, productURL, properties, quantity, warranty ).subscribe();*/
        this.registerService.sendProductDetails(formData).subscribe(function (response) {
            window.alert("Proizvod je uspešno dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 200);
    };
    SpisakComponent.prototype.registerUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        var firstName = target.querySelector('#firstName').value;
        var lastName = target.querySelector('#lastName').value;
        var email = target.querySelector('#email').value;
        var role = target.querySelector('#role').value;
        this.registerService.sendUserDetails(firstName, lastName, username, email, password, role).subscribe(function (response) { window.alert("Uspešna registracija korisnika!"); }, function (err) { _this.handleError(err); });
        //)
        /*
        console.log(username,password)
        console.log(error);
        console.log(localStorage.getItem("token"));
        */
    };
    SpisakComponent.prototype.addDiscount = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var producer = target.querySelector('#producerDiscount').value;
        var productType = target.querySelector('#productTypeDiscount').value;
        var discountCoefficient = target.querySelector("#procenat").value;
        this.productService.discountProduct(producer, productType, discountCoefficient).subscribe(function (response) {
            window.alert("Popust je dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 150);
        //zbog unosa u bazu i responsa stavljamo timeout da bi ucitao nove cene a ne stare
    };
    SpisakComponent.prototype.exchangeProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var billID = target.querySelector('#givingID').value;
        var givinProductID = target.querySelector('#givinProductID').value;
        var takingProductID = target.querySelector('#takingProductID').value;
        this.exchangeProductService.returnProduct(billID, givinProductID, takingProductID).subscribe(function (data) {
            window.alert("Novac koji se vraca je: " + data.moneyToReturn + " RSD");
        }, function (err) { _this.handleError(err); /*console.log(err.error.message);console.log(err.status);*/ });
    };
    SpisakComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    SpisakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spisak',
            template: __webpack_require__(/*! ./spisak.component.html */ "./src/app/spisak/spisak.component.html"),
            styles: [__webpack_require__(/*! ./spisak.component.css */ "./src/app/spisak/spisak.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bills_service__WEBPACK_IMPORTED_MODULE_6__["BillsService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_7__["RegisterService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_8__["ProductsService"],
            _services_producers_service__WEBPACK_IMPORTED_MODULE_9__["ProducersService"],
            _services_product_type_service__WEBPACK_IMPORTED_MODULE_10__["ProductTypeService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_11__["SearchService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"],
            _services_delete_service__WEBPACK_IMPORTED_MODULE_3__["DeleteService"],
            _services_single_service_service__WEBPACK_IMPORTED_MODULE_13__["SingleServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__["ExchangeProductService"]])
    ], SpisakComponent);
    return SpisakComponent;
}());



/***/ }),

/***/ "./src/app/stats/stats.component.css":
/*!*******************************************!*\
  !*** ./src/app/stats/stats.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css');\r\n\r\n    body {\r\n        margin-top: 50px;\r\n    }\r\n\r\n    /*html, body, #wrapper, #page-wrapper {height: 100%; overflow: hidden;}*/\r\n\r\n    #wrapper {\r\n        padding-left: 225px;\r\n    }\r\n\r\n    #page-wrapper {\r\n        padding: 22px 10px;\r\n    }\r\n\r\n    /* Top Navigation */\r\n\r\n    .top-nav>li>a {\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    width:150px;\r\n    margin-left: 50%;\r\n}\r\n\r\n    .top-nav>li>a:hover,\r\n.top-nav>li>a:focus,\r\n.top-nav>.open>a,\r\n.top-nav>.open>a:hover,\r\n.top-nav>.open>a:focus {\r\n    color:black;\r\n    background-color: #05a081;\r\n}\r\n\r\n    /* Side Navigation */\r\n\r\n    .side-nav {\r\n        position: fixed;\r\n        top: 60px;\r\n        left: 225px;\r\n        width: 225px;\r\n        margin-left: -225px;\r\n        border: none;\r\n        border-radius: 0;\r\n        border-top: 1px rgba(0,0,0,1) solid;\r\n        overflow-y: auto;\r\n        background-color: #222;\r\n        /*background-color: #5A6B7D;*/\r\n        bottom: 0;\r\n        overflow-x: hidden;\r\n        padding-bottom: 40px;\r\n    }\r\n\r\n    .side-nav>li>a {\r\n        width: 225px;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav li a:hover,\r\n    .side-nav li a:focus {\r\n        outline: none;\r\n        background-color: #05a081 !important;\r\n        color: black;\r\n    }\r\n\r\n    .side-nav>li>ul {\r\n        padding: 0;\r\n        border-bottom: 1px rgba(0,0,0,.3) solid;\r\n    }\r\n\r\n    .side-nav>li>ul>li>a {\r\n        display: block;\r\n        padding: 10px 15px 10px 38px;\r\n        text-decoration: none;\r\n        color: #999;\r\n           \r\n    }\r\n\r\n    .navbar .nav > li > a:hover > .label {\r\n  top: 10px;\r\n}\r\n\r\n    .navbar-brand {\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search{\r\n\r\n    float: right;\r\n    padding: 5px 15px;\r\n}\r\n\r\n    .Search input[type=text] {\r\n    padding: 6px;\r\n    margin-top: 8px;\r\n    font-size: 17px;\r\n    border: none;\r\n    background-color: white;\r\n  }\r\n\r\n    .Search button {\r\n    float: right;\r\n    padding: 6px 10px;\r\n    margin-top: 8px;\r\n    margin-right: 16px;\r\n    background: #ddd;\r\n    font-size: 17px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n    .Search button:hover {\r\n    background: #05a081;\r\n  }\r\n\r\n    .shopping-cart{\r\n      margin-top:10vh;\r\n      margin-left:3%;\r\n      margin-right: 3%;\r\n      \r\n  }\r\n\r\n    .small-image{\r\n      height: 50px;\r\n      width:50px;\r\n  }\r\n\r\n    .login_btn{\r\n    \r\n    color: white;\r\n    background-color: rgba(0,0,0,.85);\r\n    margin-left: 10px;\r\n    border-radius: 12px;\r\n    }\r\n\r\n    .textt{\r\n       \r\n    \r\n            color: black;\r\n            background-color: white;\r\n            margin-left: 10px;\r\n            border-radius: 12px;\r\n       \r\n    }\r\n\r\n    .login_btn:hover{\r\n    color: black;\r\n    background-color: #05a081;\r\n    }\r\n\r\n    ul li ul li{\r\n        display:none;\r\n    }\r\n\r\n    ul li:hover ul li{\r\n        display:block;\r\n    }\r\n\r\n    ul li ul li a:hover{\r\n        color:black;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .modal-content {\r\n        background-color: rgba(0,0,0,.8);\r\n        margin: 4% auto 15% auto;\r\n        border: 1px solid #888;\r\n        width: 40%; \r\n        padding-bottom: 30px;\r\n        align-content: center;\r\n    }\r\n\r\n    .modal1 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    /* The Close Button (x) */\r\n\r\n    .close {\r\n        position: absolute;\r\n        right: 25px;\r\n        top: 0;\r\n        color: white;\r\n        font-size: 35px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .close:hover,.close:focus {\r\n        color: red;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /* Add Zoom Animation */\r\n\r\n    .animate {\r\n        -webkit-animation: zoom 0.6s;\r\n                animation: zoom 0.6s\r\n    }\r\n\r\n    @-webkit-keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    @keyframes zoom {\r\n        from {-webkit-transform: scale(0);transform: scale(0)} \r\n        to {-webkit-transform: scale(1);transform: scale(1)}\r\n    }\r\n\r\n    .card{\r\n        display:flex;\r\n        margin-top:2%;\r\n        margin-bottom:2%;\r\n        margin-left:25%;\r\n    }\r\n\r\n    .text-icons{\r\n        margin-left:3%;\r\n        margin-top:1%;\r\n    }\r\n\r\n    .inputs{\r\n        margin-left:1%;\r\n    }\r\n\r\n    .modal2 {\r\n        display:none;\r\n        position: fixed;\r\n        z-index: 1;\r\n        left: 0;\r\n        top: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        overflow: auto;\r\n        background-color: rgba(0,0,0,0.4);\r\n        \r\n    }\r\n\r\n    .store a{\r\n        text-decoration: none;\r\n        color: white;\r\n        width: 50%;\r\n\r\n    }\r\n\r\n    .client a{\r\n        text-decoration: none;\r\n        color:white;\r\n\r\n    }\r\n\r\n    .store{\r\n        margin-left:30%;\r\n    }\r\n\r\n    .top-nav{\r\n    padding: 0 15px;\r\n\r\n}\r\n\r\n    .top-nav2{\r\n        float: left;\r\n        position: fixed;\r\n        margin-top: 0;\r\n        /*border: 1px solid rgba(0,0,0,.15);*/\r\n        border-top-left-radius: 0;\r\n        border-top-right-radius: 0;\r\n        background-color: #fff;\r\n        box-shadow: 0 6px 12px rgba(0,0,0,.175);\r\n        \r\n}\r\n\r\n    .dropdown ul li ul li{\r\n    display:none;\r\n}\r\n\r\n    .dropdown a:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n    .dropdown a:hover ul li{\r\n    display:inline-block;\r\n    \r\n\r\n}\r\n\r\n    .top-nav2 li a{\r\n    white-space: normal;\r\n    text-decoration: none;\r\n    \r\n}\r\n\r\n    .dropdown a{\r\n    margin-right: 15px;\r\n    color:#05a081;\r\n\r\n    \r\n}\r\n\r\n    .inputs select{\r\n    position: relative;\r\n    background-color:black;\r\n    color:white;\r\n   border-radius: 9px 9px 9px 9px;\r\n}\r\n\r\n    .inputs select:hover{\r\n    background-color: #05a081;\r\n    color:black;\r\n}\r\n\r\n    .search-box{\r\n    left: 20%;\r\n    position: absolute;\r\n    border-radius: 40%;\r\n    padding: 10px;\r\n    height: 40px;\r\n}\r\n\r\n    .search-btn{\r\n    color:#05a081;\r\n    float: right;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 50%;\r\n    background: #222;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    transition: 0.4s;\r\n}\r\n\r\n    .search-text {\r\n    font-size: 17px;\r\n    border: none;\r\n    background: none;\r\n    float: left;\r\n    padding: 0;\r\n    color: white;\r\n    transition: 0.4s;\r\n    line-height: 40px;\r\n    width: 0px;\r\n    \r\n  }\r\n\r\n    input[type=\"text\"]{\r\n    border-color: none;\r\n    box-shadow: none;\r\n    outline: 0 none;\r\n  }\r\n\r\n    .search-box:hover > .search-text{\r\n      width: 240px;\r\n      padding: 0 6px;\r\n  }\r\n\r\n    .search-box:hover > .search-btn{\r\n    background: white;\r\n}\r\n\r\n    .form-group .login_btn{\r\n    margin-left: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdHMvc3RhdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwRkFBMEY7O0lBRXRGO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUNBLHdFQUF3RTs7SUFLeEU7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBR0osbUJBQW1COztJQUVuQjtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztJQUVBOzs7OztJQUtJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0lBR0Esb0JBQW9COztJQUVoQjtRQUNJLGVBQWU7UUFDZixTQUFTO1FBQ1QsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGdCQUFnQjtRQUNoQixtQ0FBbUM7UUFDbkMsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0Qiw2QkFBNkI7UUFDN0IsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7SUFDeEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osdUNBQXVDO0lBQzNDOztJQUVBOztRQUVJLGFBQWE7UUFDYixvQ0FBb0M7UUFDcEMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFVBQVU7UUFDVix1Q0FBdUM7SUFDM0M7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsNEJBQTRCO1FBQzVCLHFCQUFxQjtRQUNyQixXQUFXOztJQUVmOztJQUNKO0VBQ0UsU0FBUztBQUNYOztJQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztJQUVBOztJQUVJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0VBQ3pCOztJQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lB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SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVOztFQUVaOztJQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztJQUdBO01BQ0ksWUFBWTtNQUNaLGNBQWM7RUFDbEI7O0lBRUE7SUFDRSxpQkFBaUI7QUFDckI7O0lBRUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zdGF0cy9zdGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuMy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcycpO1xyXG5cclxuICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB9XHJcbiAgICAvKmh0bWwsIGJvZHksICN3cmFwcGVyLCAjcGFnZS13cmFwcGVyIHtoZWlnaHQ6IDEwMCU7IG92ZXJmbG93OiBoaWRkZW47fSovXHJcblxyXG5cclxuXHJcblxyXG4gICAgI3dyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3BhZ2Utd3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogMjJweCAxMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbi8qIFRvcCBOYXZpZ2F0aW9uICovXHJcblxyXG4udG9wLW5hdj5saT5hIHtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6MTUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG59XHJcblxyXG4udG9wLW5hdj5saT5hOmhvdmVyLFxyXG4udG9wLW5hdj5saT5hOmZvY3VzLFxyXG4udG9wLW5hdj4ub3Blbj5hLFxyXG4udG9wLW5hdj4ub3Blbj5hOmhvdmVyLFxyXG4udG9wLW5hdj4ub3Blbj5hOmZvY3VzIHtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1YTA4MTtcclxufVxyXG5cclxuXHJcbi8qIFNpZGUgTmF2aWdhdGlvbiAqL1xyXG5cclxuICAgIC5zaWRlLW5hdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICBsZWZ0OiAyMjVweDtcclxuICAgICAgICB3aWR0aDogMjI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yMjVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggcmdiYSgwLDAsMCwxKSBzb2xpZDtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjNUE2QjdEOyovXHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXY+bGk+YSB7XHJcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZS1uYXYgbGkgYTpob3ZlcixcclxuICAgIC5zaWRlLW5hdiBsaSBhOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwNWEwODEgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGUtbmF2PmxpPnVsIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCByZ2JhKDAsMCwwLC4zKSBzb2xpZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNpZGUtbmF2PmxpPnVsPmxpPmEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDM4cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgIFxyXG4gICAgfVxyXG4ubmF2YmFyIC5uYXYgPiBsaSA+IGE6aG92ZXIgPiAubGFiZWwge1xyXG4gIHRvcDogMTBweDtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLlNlYXJjaHtcclxuXHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcclxufVxyXG5cclxuLlNlYXJjaCBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuU2VhcmNoIGJ1dHRvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIGJhY2tncm91bmQ6ICNkZGQ7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5TZWFyY2ggYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMwNWEwODE7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbiAgLnNob3BwaW5nLWNhcnR7XHJcbiAgICAgIG1hcmdpbi10b3A6MTB2aDtcclxuICAgICAgbWFyZ2luLWxlZnQ6MyU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgLnNtYWxsLWltYWdle1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIHdpZHRoOjUwcHg7XHJcbiAgfVxyXG4gIC5sb2dpbl9idG57XHJcbiAgICBcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjg1KTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIH1cclxuICAgIC50ZXh0dHtcclxuICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5sb2dpbl9idG46aG92ZXJ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG4gICAgfVxyXG4gICAgdWwgbGkgdWwgbGl7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgdWwgbGk6aG92ZXIgdWwgbGl7XHJcbiAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgIH1cclxuICAgIHVsIGxpIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbC1jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC44KTtcclxuICAgICAgICBtYXJnaW46IDQlIGF1dG8gMTUlIGF1dG87XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcclxuICAgICAgICB3aWR0aDogNDAlOyBcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubW9kYWwxIHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLyogVGhlIENsb3NlIEJ1dHRvbiAoeCkgKi9cclxuICAgIC5jbG9zZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmNsb3NlOmhvdmVyLC5jbG9zZTpmb2N1cyB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8qIEFkZCBab29tIEFuaW1hdGlvbiAqL1xyXG4gICAgLmFuaW1hdGUge1xyXG4gICAgICAgIGFuaW1hdGlvbjogem9vbSAwLjZzXHJcbiAgICB9XHJcbiAgICBAa2V5ZnJhbWVzIHpvb20ge1xyXG4gICAgICAgIGZyb20ge3RyYW5zZm9ybTogc2NhbGUoMCl9IFxyXG4gICAgICAgIHRvIHt0cmFuc2Zvcm06IHNjYWxlKDEpfVxyXG4gICAgfVxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6MiU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToyJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDoyNSU7XHJcbiAgICB9XHJcbiAgICAudGV4dC1pY29uc3tcclxuICAgICAgICBtYXJnaW4tbGVmdDozJTtcclxuICAgICAgICBtYXJnaW4tdG9wOjElO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dHN7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MSU7XHJcbiAgICB9XHJcbiAgICAubW9kYWwyIHtcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnN0b3JlIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG5cclxuICAgIH1cclxuICAgIC5jbGllbnQgYXtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcblxyXG4gICAgfVxyXG4gICAgLnN0b3Jle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgIH1cclxuLnRvcC1uYXZ7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG59XHJcblxyXG4udG9wLW5hdjJ7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgLypib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC4xNSk7Ki9cclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gICAgICAgIFxyXG59XHJcbi5kcm9wZG93biB1bCBsaSB1bCBsaXtcclxuICAgIGRpc3BsYXk6bm9uZTtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93biBhOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5kcm9wZG93biBhOmhvdmVyIHVsIGxpe1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBcclxuXHJcbn1cclxuXHJcblxyXG4udG9wLW5hdjIgbGkgYXtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBcclxufVxyXG5cclxuLmRyb3Bkb3duIGF7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjojMDVhMDgxO1xyXG5cclxuICAgIFxyXG59XHJcbi5pbnB1dHMgc2VsZWN0e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbiAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOXB4IDlweCA5cHggOXB4O1xyXG4gICBib3JkZXItcmFkaXVzOiA5cHggOXB4IDlweCA5cHg7XHJcbn1cclxuLmlucHV0cyBzZWxlY3Q6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDVhMDgxO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLWJveHtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRue1xyXG4gICAgY29sb3I6IzA1YTA4MTtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogIzIyMjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xyXG59XHJcblxyXG4uc2VhcmNoLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRyYW5zaXRpb246IDAuNHM7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xyXG4gICAgYm9yZGVyLWNvbG9yOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIG91dGxpbmU6IDAgbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLXRleHR7XHJcbiAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgfVxyXG4gICAgXHJcbiAgLnNlYXJjaC1ib3g6aG92ZXIgPiAuc2VhcmNoLWJ0bntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCAubG9naW5fYnRue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/stats/stats.component.html":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js\"></script>\n<script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n\n\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.3.1/css/all.css\" integrity=\"sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n\n<div id=\"throbber\" style=\"display:none; min-height:120px;\"></div>\n<div id=\"noty-holder\"></div>\n<div id=\"wrapper\">\n    <!-- Navigacija -->\n    <nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n        <!-- Logo -->\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" routerLink=\"/admin\">\n                <img src=\"http://placehold.it/200x50&text=Techtrade\" alt=\"Techtrade\">\n            </a>\n            \n          </div>\n        <!-- Gornji desni ugao, Ime korisnika i LogOut -->\n\n        <ul class=\"nav navbar-right top-nav\">                                         \n            <li class=\"dropdown\"  style=\"margin-right: 15px;\">\n                <a > {{pozicija}}<i style=\"margin-left:5px;\" class=\"fa fa-angle-down\"></i></a>\n                <ul class=\"top-nav2\">\n                    <li style=\"margin-top:10%;\" ><a routerLink=\"/korpa\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:5px;\" class=\"fa fa-shopping-cart\"></i>Korpa</a></li>\n                    <li style=\"margin-top:10%;\" ><a routerLink=\"/stats\" style=\"margin-left:0%;padding:0;\"><i style=\"margin-right:8px;\" class=\"fa fa-bar-chart-o\"></i>Statistika</a></li>\n\n                    <li style=\"margin-top:10%;\"><a onclick=\"document.getElementById('help').style.display='block'\"style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa fa-question-circle\"></i> Help</a></li>\n                    <li (click)=\"logout()\"  style=\"margin-top:10%;\"><a  style=\"margin-left:0%;padding:0;\"><i class=\"fa fa-fw fa-power-off\"></i> Izloguj se</a></li></ul>\n            </li>\n        </ul>\n<!-- Meni sa leve strane -->\n    <ul class=\"nav navbar-nav side-nav\">\n        <li>\n            <a routerLink=\"/admin\"> POCETNA</a>\n        </li>\n        <li>\n            <a routerLink=\"/spisak\">SPISAK RADNIKA</a>\n        </li>\n        <li>\n                <a routerLink=\"/narucivanje\" >NARUCIVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a routerLink=\"/naruceno\">NARUCENI PROIZVODI</a>           \n        </li>\n        <li>\n                <a onclick=\"document.getElementById('exchange').style.display='block'\" style=\"cursor:pointer;\">ZAMENA PROIZVODA</a>           \n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('registering').style.display='block'\"  style=\"cursor:pointer;\">REGISTRACIJA RADNIKA</a>\n        </li>\n        \n        <li>\n                <a onclick=\"document.getElementById('adding').style.display='block'\"  style=\"cursor:pointer;\">DODAVANJE PROIZVODA</a>\n        </li>\n        <li>\n                <a onclick=\"document.getElementById('discount').style.display='block'\"  style=\"cursor:pointer;\">ODREDI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/automatski-popust\">AUTOMATSKI POPUST</a>\n        </li>\n        <li>\n               <a routerLink=\"/racuni\">PRIKAZ RACUNA</a>\n        </li>\n        <li>\n                <a routerLink=\"/prikaz\">PRIKAZ FAKTURE</a>\n            </li>\n       \n    </ul>\n</nav>\n\n  <div class=\"shopping-cart\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\"> </th>\n                            <th scope=\"col\"  class=\"text-center\">Naziv proizvoda</th>\n                            <th scope=\"col\"  class=\"text-center\">Kolicina</th>\n                            <th scope=\"col\" class=\"text-center\">Poslednji put prodato</th>\n                            <th scope=\"col\"  class=\"text-center\">Datum dodavanja proizvoda</th>\n                        </tr>\n                    </thead>\n                     <tbody>\n                        <tr *ngFor=\"let product of thresholdResult; let i = index\">\n                            <td><img class = \"small-image\"src=\"assets/6-video-camera-png-image.png\" /> </td>\n                            <td class=\"text-center align-middle\"> {{product.name}}</td>\n                            <td class=\"text-center align-middle\">{{product.quantity}}</td>\n                            <td class=\"text-center align-middle\" >{{product.latestSoldDate}}</td>\n                            <td  class=\"text-center align-middle\">{{product.dateInserted}}</td>\n                        </tr>\n                        <tr>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                          </tr>\n\n                    </tbody> \n                </table>\n            </div>\n            \n            <form (submit)='getThreshold ($event)'>\n            <div class=\"text-center \">\n              <input class=\"text-center textt\"  name=\"quantityToSend\" id = \"quantity\" value=\"1\" type=\"number\"/>\n                <button type=\"submit\" class=\"btn login_btn\" style=\"width: 200px;\">Informacije</button>\n            </div>\n          </form>\n\n          \n</div>\n\n<!-- <div class=\"shopping-cart\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th class=\"text-center\">NARUCENI PROIZVODI</th>\n                        </tr>\n                    </thead>\n                    <thead>\n                        <tr>\n                            <th scope=\"col\"> </th>\n                            <th scope=\"col\"  class=\"text-center\">Proizvod</th>\n                            <th scope=\"col\"  class=\"text-center\">Dostupnost</th>\n                            <th scope=\"col\" class=\"text-center\">Garancija</th>\n                            <th scope=\"col\"  class=\"text-center\">Cena</th>\n                            <th> </th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let product of orderedProducts\">\n                            <td><img class = \"small-image\"src=\"assets/6-video-camera-png-image.png\" /> </td>\n                            <td class=\"text-center\"> {{product.name}}</td>\n                            <td class=\"text-center\">{{product.quantity}}</td>\n                            <td class=\"text-center\">{{product.warranty}}</td>\n                            <td  class=\"text-center\">{{product.price}}RSD</td>\n                            <td ></td>\n                        </tr>\n                        <tr>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                              <td></td>\n                          </tr>\n\n                    </tbody>\n                </table>\n            </div>\n          \n</div> -->\n\n<div  id=\"adding\" class=\"modal justify-content-center\" >\n    <form [formGroup]=\"uploadForm\"  (submit)='addProduct($event)' class=\"modal-content animate justify-content-center\" >\n\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('adding').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n          <h1 style=\"text-align:center;color:white\">Dodavanje proizvoda</h1>\n        </div>   \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                    <select id=\"producer\" placeholder='Proizvodjac' >\n                            <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                          </select>                    </div>\n        </div>    \n        <div class=\"card\">     \n                <div class=\"text-icons\">         \n                        <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n                </div>\n                <div class=\"inputs\">\n                    <select id=\"productType\" placeholder='Vrsta proizvoda'>\n                            <option   *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                          \n                          </select>                    </div>\n        </div>        \n    \n    <div class=\"card\">     \n            <div class=\"text-icons\">         \n        <i class=\"fas fa-user\" style=\"color:white;\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <input id=\"quantity\" type=\"text\" class=\"form-control\" placeholder=\"Kolicina\" required>\n                </div>\n    </div>\n    <div class=\"card\">     \n            <div class=\"text-icons\">         \n        <i class=\"fas fa-user\" style=\"color:white;\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <input id=\"productURL\" type=\"text\" class=\"form-control\" placeholder=\"Website\" required>\n                </div>\n    </div>\n    <div class=\"card\">     \n            <div class=\"text-icons\">         \n        <i class=\"fas fa-user\" style=\"color:white;\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <input id=\"warranty\" type=\"text\" class=\"form-control\" placeholder=\"Garancija\" required>\n                </div>\n    </div>                \n    <div class=\"card\" style=\"text-align:center;\">     \n            <div class=\"text-icons\">         \n        <i class=\"fas fa-user\" style=\"color:white;\"></i>\n            </div>\n            <div class=\"inputs\">\n        <input id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Naziv prozivoda...\" required>\n            </div>\n    </div>\n    <div class=\"card\" style=\"align-content:center;\">     \n            <div class=\"text-icons\">         \n                    <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n            </div>\n            <div class=\"inputs\">\n        <textarea id=\"properties\" rows=\"4\" cols=\"50\" class=\"form-control\" name=\"description\" placeholder=\"Uneti opis proizvoda...\" required></textarea>                   \n     </div>\n    </div>\n    <div class=\"card\">     \n            <div class=\"text-icons\">         \n                    <i class=\"fas fa-images\" style=\"color:white\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <input id=\"image\" type=\"file\" class=\"form-control\" >\n                </div>\n    </div>\n    <div class=\"card\">     \n            <div class=\"text-icons\">         \n                    <i class=\"fas fa-dollar-sign\" style=\"color:white; margin-right: 5%;\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <input id=\"price\" type=\"number\" class=\"form-control\" placeholder=\"Cena proizvoda\" required>\n                </div>\n    </div>\n    <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n            <input type=\"submit\" value=\"Dodaj\" class=\"btn float-right login_btn\"  >\n      </div>\n                        \n      </form>\n</div>\n\n<div id=\"registering\" class=\"modal1\">\n    <form (submit)='registerUser($event)' class=\"modal-content animate\">\n\n        <div class=\"imgcontainer\">\n          <span onclick=\"document.getElementById('registering').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n          <h1 style=\"text-align:center;color:white\">Registracija radnika</h1>\n        </div>   \n                    \n    <div class=\"card\">     \n            <div class=\"text-icons\">         \n        <i class=\"fas fa-user\" style=\"color:white;\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <input id=\"username\" type=\"text\" class=\"form-control\" placeholder=\"Korisnicko ime...\" required>\n                </div>\n    </div>\n    <div class=\"card\">     \n            <div class=\"text-icons\">         \n                    <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>\n            </div>\n            <div class=\"inputs\">\n                    <input id=\"firstName\" type=\"text\" class=\"form-control\" placeholder=\"Ime\" required>\n                </div>\n    </div>\n    <div class=\"card\">     \n            <div class=\"text-icons\">         \n                    <i class=\"material-icons\" style=\"font-size:14px;color:white\">text_fields</i>         \n                           </div>\n            <div class=\"inputs\">\n                    <input id=\"lastName\" type=\"text\" class=\"form-control\" placeholder=\"Prezime\" required>\n                </div>\n    </div>\n    <div class=\"card\">     \n            <div class=\"text-icons\">         \n                    <i class=\"fas fa-key\" style=\"color:white\"></i>\n            </div>\n            <div class=\"inputs\">\n                    <input id=\"password\" type=\"password\" class=\"form-control\" placeholder=\"Sifra...\" required>\n\n                </div>\n    </div>\n\n    <div class=\"card\">     \n            <div class=\"text-icons\">         \n                    <i class=\"material-icons\" style=\"font-size:14px;color:white\">email</i>\n            </div>\n            <div class=\"inputs\">\n                    <input id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"E-mail\" required>\n\n                </div>\n    </div>\n\n    <div class=\"card\">     \n            <div class=\"text-icons\">         \n                    <i class=\"fas fa-id-card\" style=\"color:white\"></i>\n            </div>\n            <div class=\"inputs\">\n                <select id=\"role\" placeholder='Pozicija'>\n                        <option value=\"2\">ADMIN</option>\n                        <option value=\"0\">WORKER</option>\n                        <option value=\"1\">MANAGER</option>\n                        <option value=\"3\">OWNER</option>\n                      </select>                    </div>\n    </div>\n\n   \n    <div class=\"form-group\" style=\"margin-top:2%;margin-left:45%;\">\n            <input id=\"registerButton\" type=\"submit\" value=\"Registracija\" class=\"btn float-right login_btn\" routerLink=\"/admin\" >\n      </div>\n                        \n      </form>\n</div>\n\n\n\n<div id=\"discount\" class=\"modal2\">\n<form (submit) = \"addDiscount($event)\" class=\"modal-content animate\">\n\n    <div class=\"imgcontainer\">\n      <span onclick=\"document.getElementById('discount').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n      <h1 style=\"text-align:center;color:white\">Odredjivanje popusta</h1>\n    </div>   \n                \n<div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n        <div class=\"text-icons\">         \n    <i class=\"fas fa-industry\" style=\"color:white;\"></i>\n        </div>\n        <div class=\"inputs\">\n            <div class=\"inputs\">\n                <select id=\"producerDiscount\" placeholder='Proizvodjac' >\n                        <option disabled selected value> -- select an option -- </option>\n                        <option  *ngFor=\"let producer of producersService.producers\" value=\"{{ producer.id }}\">{{ producer.name }}</option>\n                      </select> \n            </div>                    \n        </div>\n</div>\n<div class=\"card\" style=\"margin-top:2%;margin-left:28%;\">     \n        <div class=\"text-icons\">         \n                        <i class=\"fas fa-keyboard\" style=\"color:white\"></i>\n        </div>\n        <div class=\"inputs\">\n                <select id=\"productTypeDiscount\" placeholder='Vrsta proizvoda'>\n                        <option disabled selected value> -- select an option -- </option>\n                        <option *ngFor=\"let productType of productTypeService.productTypes\" value=\"{{ productType.id }}\">{{ productType.name }}</option>\n                      </select>\n        </div>\n</div>\n<div class=\"card\" style=\"margin-top:2%;margin-left:28.5%;\">     \n        <div class=\"text-icons\">         \n                <i class=\"fas fa-percent\" style=\"color:white\"></i>\n                \n        </div>\n        <div class=\"inputs\">\n                <input id=\"procenat\" type=\"number\" class=\"form-control\" style=\"text-align: center; width: 150px\" placeholder=\"Iznos procenta\" required min=\"0\" max=\"100\" oninvalid=\"this.setCustomValidity('Vrednost manje ili jednaka 100')\" oninput=\"this.setCustomValidity('')\"> \n        </div>\n</div>\n<div class=\"form-group\" style=\"margin-top:2%;margin-left:40%;\">\n        <input type=\"submit\" style=\"text-align:center;\" value=\"Izvrsi\" class=\"btn login_btn justify-content-center\">\n        \n  </div>\n  <div style=\"margin-top:2%;margin-left:24;\">\n        <p style=\"text-align:center; color: white\">Status: </p> \n        <p style=\"text-align:center; color: lime\">{{ this.response }}</p>\n  </div>\n                    \n  </form>\n</div>\n\n<div id=\"exchange\" class=\"modal2\">\n    <form (submit)='exchangeProduct($event)' class=\"modal-content animate\">\n    \n            <div class=\"imgcontainer\">\n              <span onclick=\"document.getElementById('exchange').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n              <h1 style=\"text-align:center;color:white\">Zameni proizvod</h1>\n            </div>   \n                        \n        <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left:20%;\">     \n                <div class=\"inputs\" style=\"width: 40%;\" >\n                  <div class=\"client\">\n                        <a>Sifra racuna proizvoda od kupca    </a>\n                        <select id=\"givingID\" class=\"text-center\" style=\"margin-bottom:10%; margin-left: 5%; width: 30%;\">\n                                <option  class=\"text-center\" *ngFor=\"let bill of billsService.bills\" value=\"{{ bill.id }}\">{{ bill.id }}</option>\n                        </select> <br>\n                        <div class=\"inputs\">\n                            <input id=\"givinProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra proizvoda koji se menja\" required>\n                        </div><br><br>\n                        <div class=\"inputs\">\n                            <input id=\"takingProductID\" type=\"text\" class=\"form-control text-center\" placeholder=\"Sifra zeljenog proizvoda\" required>\n                        </div>\n                    </div>\n\n                              </div>\n        </div>\n       \n        <div class=\"form-group\" style=\"margin-top:2%;margin-left:40%; \">\n                <input type=\"submit\"  value=\"Zameni\" class=\"btn float-right login_btn\" style=\"width:40%;\">\n          </div>\n                       \n          </form>\n</div>\n\n<div id=\"help\" class=\"modal2\">\n        <form class=\"modal-content animate\">\n        \n                <div class=\"imgcontainer\">\n                  <span onclick=\"document.getElementById('help').style.display='none'\" class=\"close\" title=\"Close PopUp\">&times;</span>\n                  <h1 style=\"text-align:center;color:white\">Pomoć</h1>\n                </div>   \n                            \n            <div class=\"card\" style=\"margin-right: 0%; width: 150%; margin-left: 20%\">     \n                    <div class=\"inputs\" style=\"width: 40%;\" >\n                      <div class=\"client\">\n                            <pre style=\"color: white; border: none; padding: initial; font-family: inherit; font-size: inherit; background: none; white-space: pre-wrap; word-break: keep-all; text-align: justify;\">\n\n\nPočetna\n\n* Na početnoj strani su izlistani svi proizvodi koji su trenutno dostupni u prodavnici. Moguće je promeniti bilo koji atribut postojaćeg proizvoda, moguće je ukloniti proizvod, a takođe i izvršiti popust unošenjem odgovarajućeg iznosa procenta. Na crvenu strelicu se proizvod ubacuje u korpu. \n\n\nSpisak radnika\n\n* Omogućen je uvid u spisak svih radnika koji rade u magacinu Techtradea kao i njihove informacije. Moguće je ukloniti korisnika.\n\n\nNaručivanje proizvoda\n\n* Na početku su izlistani svi proizvodi svih dobavljača. Prilikom narudžbenice, moguće je u korpu dodati proizvode pritiskom na crvenu strelicu. U korpi željeni kvantitet unosi sam korisnik. Moguće je obrisati sadržaj iz korpe. Pritiskom na dugme za kupovinu potvrđuje se porudzbina. \n\n\nNaručeni proizvodi\n\n* Omogućen je uvid u dve tabele, Naručeni proizvodi koji treba da stignu i Naručeni proizvodi koji su stigli.\n\n\nZameni proizvod\n\n* Izvršiti odabir šifre računa;\n* Izvršiti odabir šifre proizvoda na računu;\n* Uneti šifru željenog proizvoda za zamenu;\n* Pritiskom na dugme 'Zameni' izbaciće se odgovarajuća poruka.\n\n\nRegistracija radnika\n\n* Omogućava unošenje novih autorizovanih korisnika. Unošenjem svih potrebnih podataka, kao i podatka koji autorizovani korisnik je u pitanju, biće izbačena odgovarajuća poruka.\n\n\nDodavanje proizvoda\n\n* Moguće je dodati nov proizvod. U slučaju da proizvod već postoji, biće izbačena odgovarajuća poruka.\n\n\nOdredi popust\n\n* Odabrati proizvođača;\n* Odabrati željeni proizvod;\n* Uneti iznos procenta;\n* Pritiskom na dugme 'Izvrši', biće izbačena odgovarajuća poruka.\n\n\nAutomatski popust\n\n* Omogućen je uvid u spisak svih proizvoda kojima je omogućen automatski popust i potvrda popusta.\n\n\nPrikaz računa\n\n* Omogućen je uvid u tabelu sa računima;\n* Moguće je izvesti račun koji je generisan u PDF formi.\n\n\nPrikaz fakture\n\n* Omogućen je uvid u tabelu faktura;\n* Moguće je izvesti fakturu u PDF formi.\n\n                                </pre>\n                            </div>\n                        </div>\n                </div>\n                           \n              </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_bills_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/bills.service */ "./src/app/services/bills.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/register.service */ "./src/app/services/register.service.ts");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _services_producers_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/producers.service */ "./src/app/services/producers.service.ts");
/* harmony import */ var _services_product_type_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/product-type.service */ "./src/app/services/product-type.service.ts");
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/search.service */ "./src/app/services/search.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_delete_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/delete.service */ "./src/app/services/delete.service.ts");
/* harmony import */ var _services_single_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/single-service.service */ "./src/app/services/single-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/exchange-product.service */ "./src/app/services/exchange-product.service.ts");















var StatsComponent = /** @class */ (function () {
    function StatsComponent(billsService, userService, registerService, productService, producersService, productTypeService, searchService, http, formBuilder, deleteService, single, router, exchangeProductService) {
        this.billsService = billsService;
        this.userService = userService;
        this.registerService = registerService;
        this.productService = productService;
        this.producersService = producersService;
        this.productTypeService = productTypeService;
        this.searchService = searchService;
        this.http = http;
        this.formBuilder = formBuilder;
        this.deleteService = deleteService;
        this.single = single;
        this.router = router;
        this.exchangeProductService = exchangeProductService;
        this.pozicija = localStorage.getItem('username');
        this.endpointURL = 'http://78.46.117.245:9000/products/statistics?threshold=';
        this.endpointURL5 = 'http://78.46.117.245:9000/logout';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json;charset=UTF-8',
            'token': localStorage.getItem("token")
        });
        this.userFile = File;
        this.uploadForm = _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroup"];
    }
    StatsComponent.prototype.ngOnInit = function () {
        this.producersService.getAllProducers();
        this.productTypeService.getAllProductTypes();
        this.billsService.getAllBills();
        this.uploadForm = this.formBuilder.group({
            image: [''],
            name: [''],
            price: [''],
            producer: [''],
            productType: [''],
            productURL: [''],
            properties: [''],
            quantity: [''],
            warranty: [''],
            vendorPrice: ['']
        });
    };
    StatsComponent.prototype.logout = function () {
        var _this = this;
        this.http.post(this.endpointURL5, { "logout": "logout" }, { headers: this.headers }).subscribe(function (status) {
            if (status) {
                _this.router.navigate([""]);
                localStorage.removeItem("token");
            }
        });
    };
    StatsComponent.prototype.getThreshold = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var quantity = target.querySelector('#quantity').value;
        var endPointURLNEW = this.endpointURL + quantity;
        return this.http.get(endPointURLNEW, { headers: this.headers }).subscribe(function (result) {
            _this.thresholdResult = result;
        }, function (err) { _this.handleError(err); });
    };
    StatsComponent.prototype.onSelectFile = function (event) {
        var selectFile = event.target.files[0];
        this.userFile = selectFile;
    };
    StatsComponent.prototype.addProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var image = target.querySelector('#image');
        /* if(image.files.length > 0){
          const file = image.files[0];
          this.uploadForm.get('file').setValue(file);
          this.slika = this.uploadForm.get('file').value;
        }  */
        // var formData = new FormData();
        //formData.append('image', image);
        var name = target.querySelector('#name').value;
        this.uploadForm.get('name').setValue(name);
        var price = target.querySelector('#price').value;
        this.uploadForm.get('price').setValue(price);
        var producer = target.querySelector('#producer').value;
        this.uploadForm.get('producer').setValue(producer);
        var productType = target.querySelector('#productType').value;
        this.uploadForm.get('productType').setValue(productType);
        var productURL = target.querySelector('#productURL').value;
        this.uploadForm.get('productURL').setValue(productURL);
        var properties = target.querySelector('#properties').value;
        this.uploadForm.get('properties').setValue(properties);
        var quantity = target.querySelector('#quantity').value;
        this.uploadForm.get('quantity').setValue(quantity);
        var warranty = target.querySelector('#warranty').value;
        this.uploadForm.get('warranty').setValue(warranty);
        var vendorPrice = target.querySelector('#vendorPrice').value;
        this.uploadForm.get('vendorPrice').setValue(vendorPrice);
        var data = JSON.stringify(this.uploadForm.value);
        var formData = new FormData();
        //formData.append("productData", data);
        formData.append("image", this.userFile);
        // formData.append("image", this.uploadForm.get('file').value);
        formData.append("name", name);
        formData.append("price", price);
        formData.append("producer", producer);
        formData.append("productType", productType);
        formData.append("productURL", productURL);
        formData.append("properties", properties);
        formData.append("quantity", quantity);
        formData.append("warranty", warranty);
        formData.append("vendorPrice", vendorPrice);
        /*console.log( formData  image, name, price, producer, productType, productURL, properties, quantity, warranty );*/
        /*this.registerService.sendProductDetails(image, name, price, producer, productType, productURL, properties, quantity, warranty ).subscribe();*/
        this.registerService.sendProductDetails(formData).subscribe(function (response) {
            window.alert("Proizvod je uspešno dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 200);
    };
    StatsComponent.prototype.registerUser = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        var firstName = target.querySelector('#firstName').value;
        var lastName = target.querySelector('#lastName').value;
        var email = target.querySelector('#email').value;
        var role = target.querySelector('#role').value;
        this.registerService.sendUserDetails(firstName, lastName, username, email, password, role).subscribe(function (response) { window.alert("Uspešna registracija korisnika!"); }, function (err) { _this.handleError(err); });
        //)
        /*
        console.log(username,password)
        console.log(error);
        console.log(localStorage.getItem("token"));
        */
    };
    StatsComponent.prototype.addDiscount = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var producer = target.querySelector('#producerDiscount').value;
        var productType = target.querySelector('#productTypeDiscount').value;
        var discountCoefficient = target.querySelector("#procenat").value;
        this.productService.discountProduct(producer, productType, discountCoefficient).subscribe(function (response) {
            window.alert("Popust je dodat!");
        }, function (err) { _this.handleError(err); });
        var that = this;
        setTimeout(function () { that.productService.getAllProducts(); }, 150);
        //zbog unosa u bazu i responsa stavljamo timeout da bi ucitao nove cene a ne stare
    };
    StatsComponent.prototype.exchangeProduct = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var billID = target.querySelector('#givingID').value;
        var givinProductID = target.querySelector('#givinProductID').value;
        var takingProductID = target.querySelector('#takingProductID').value;
        this.exchangeProductService.returnProduct(billID, givinProductID, takingProductID).subscribe(function (data) {
            window.alert("Novac koji se vraca je: " + data.moneyToReturn + " RSD");
        }, function (err) { _this.handleError(err); /*console.log(err.error.message);console.log(err.status);*/ });
    };
    StatsComponent.prototype.handleError = function (error) {
        if (error.status != 200) {
            alert(error.error.message);
        }
    };
    StatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/stats/stats.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_bills_service__WEBPACK_IMPORTED_MODULE_3__["BillsService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"],
            _services_products_service__WEBPACK_IMPORTED_MODULE_6__["ProductsService"],
            _services_producers_service__WEBPACK_IMPORTED_MODULE_7__["ProducersService"],
            _services_product_type_service__WEBPACK_IMPORTED_MODULE_8__["ProductTypeService"],
            _services_search_service__WEBPACK_IMPORTED_MODULE_9__["SearchService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"],
            _services_delete_service__WEBPACK_IMPORTED_MODULE_11__["DeleteService"],
            _services_single_service_service__WEBPACK_IMPORTED_MODULE_12__["SingleServiceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"],
            _services_exchange_product_service__WEBPACK_IMPORTED_MODULE_14__["ExchangeProductService"]])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vukasin\Desktop\angularProjekti\projekat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map