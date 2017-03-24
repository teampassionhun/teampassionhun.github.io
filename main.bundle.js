webpackJsonp([1,5],{

/***/ 1093:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(452);


/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamService = (function () {
    function TeamService(af) {
        this.af = af;
        this.team$ = af.database.list('/team');
        this.coaches$ = af.database.list('/coaches');
    }
    TeamService.prototype.getTeam = function () {
        return this.af.database.list('/team', {
            query: {
                orderByChild: 'name'
            }
        });
    };
    TeamService.prototype.getCoaches = function () {
        return this.coaches$;
    };
    TeamService.prototype.createMember = function (member) {
        return this.team$.push(member);
    };
    TeamService.prototype.createCoach = function (coach) {
        return this.coaches$.push(coach);
    };
    TeamService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AngularFire */]) === 'function' && _a) || Object])
    ], TeamService);
    return TeamService;
    var _a;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/team.service.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsService = (function () {
    function NewsService(af) {
        this.af = af;
        this.news$ = af.database.list('/news');
    }
    NewsService.prototype.getNews = function () {
        return this.news$;
    };
    NewsService.prototype.getThree = function (last) {
        return this.af.database.list('/news', {
            query: {
                orderByChild: 'createdDate',
                limitToLast: 3,
                endAt: last
            }
        });
    };
    NewsService.prototype.getFirst = function () {
        return this.af.database.list('/news', {
            query: {
                orderByChild: 'createdDate',
                limitToLast: 3
            }
        });
    };
    NewsService.prototype.getSize = function () {
        var items = this.af.database.list('/news', { preserveSnapshot: true });
        return items.map(function (snapshots) {
            return snapshots.length;
        });
    };
    NewsService.prototype.getNewsById = function (id) {
        return this.af.database.object('/news/' + id);
    };
    NewsService.prototype.createNews = function (news) {
        return this.news$.push(news);
    };
    NewsService.prototype.removeNews = function (task) {
        return this.news$.remove(task.title);
    };
    NewsService.prototype.updateNews = function (news, changes) {
        return this.news$.update(news.title, changes);
    };
    NewsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AngularFire */]) === 'function' && _a) || Object])
    ], NewsService);
    return NewsService;
    var _a;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/news.service.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_components_modal__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_components_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_components_modal__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoachModalComponent = (function () {
    function CoachModalComponent() {
    }
    CoachModalComponent.prototype.open = function (coach) {
        this.coach = coach;
        this.modal.open();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_components_modal__["ModalComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_components_modal__["ModalComponent"]) === 'function' && _a) || Object)
    ], CoachModalComponent.prototype, "modal", void 0);
    CoachModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-coach-modal',
            template: __webpack_require__(802),
            styles: [__webpack_require__(765)]
        }), 
        __metadata('design:paramtypes', [])
    ], CoachModalComponent);
    return CoachModalComponent;
    var _a;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/coach-modal.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MemberModalComponent = (function () {
    function MemberModalComponent() {
    }
    MemberModalComponent.prototype.ngOnChanges = function (changes) {
        if (changes['modal'].currentValue) {
            this.member.birthDay = new Date(this.member.birthDay);
        }
    };
    MemberModalComponent.prototype.open = function (member) {
        this.member = member;
        this.modal.open();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_ng2_bs3_modal_ng2_bs3_modal__["ModalComponent"]) === 'function' && _a) || Object)
    ], MemberModalComponent.prototype, "modal", void 0);
    MemberModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member-modal',
            template: __webpack_require__(809),
            styles: [__webpack_require__(772)]
        }), 
        __metadata('design:paramtypes', [])
    ], MemberModalComponent);
    return MemberModalComponent;
    var _a;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/member-modal.component.js.map

/***/ }),

/***/ 451:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 451;


/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(576);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/main.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(799),
            styles: [__webpack_require__(762)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/about.component.js.map

/***/ }),

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(800),
            styles: [__webpack_require__(763)],
        }), 
        __metadata('design:paramtypes', [])
    ], AdminComponent);
    return AdminComponent;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/admin.component.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(801),
            styles: [__webpack_require__(764)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/app.component.js.map

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bs3_modal_ng2_bs3_modal__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_bs3_modal_ng2_bs3_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_bs3_modal_ng2_bs3_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_header_component__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__newscontainer_newscontainer_component__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__news_news_component__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__about_about_component__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__team_team_component__ = __webpack_require__(593);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__member_member_component__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__coaches_coaches_component__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__results_results_component__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__videos_videos_component__ = __webpack_require__(597);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__member_modal_member_modal_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__news_modal_news_modal_component__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__main_main_component__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_admin_component__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__login_login_component__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__upload_news_upload_news_component__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__news_detail_news_detail_component__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__upload_member_upload_member_component__ = __webpack_require__(595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__upload_coach_upload_coach_component__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__coach_modal_coach_modal_component__ = __webpack_require__(375);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






























var firebaseConfig = {
    apiKey: "AIzaSyDDpgBnpgImPACTvvG4OYDXxNJlqVSQgQ8",
    authDomain: "teampassion-7764a.firebaseapp.com",
    databaseURL: "https://teampassion-7764a.firebaseio.com",
    storageBucket: "teampassion-7764a.appspot.com",
    messagingSenderId: "700592075437"
};
var appRoutes = [
    { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_23__admin_admin_component__["a" /* AdminComponent */] },
    { path: 'news/:id', component: __WEBPACK_IMPORTED_MODULE_26__news_detail_news_detail_component__["a" /* NewsDetailComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_22__main_main_component__["a" /* MainComponent */] }
];
//{ path: '**', component: PageNotFoundComponent }
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_10__newscontainer_newscontainer_component__["a" /* NewscontainerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_13__team_team_component__["a" /* TeamComponent */],
                __WEBPACK_IMPORTED_MODULE_14__member_member_component__["a" /* MemberComponent */],
                __WEBPACK_IMPORTED_MODULE_15__coaches_coaches_component__["a" /* CoachesComponent */],
                __WEBPACK_IMPORTED_MODULE_16__results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__gallery_gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_18__videos_videos_component__["a" /* VideosComponent */],
                __WEBPACK_IMPORTED_MODULE_19__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_20__member_modal_member_modal_component__["a" /* MemberModalComponent */],
                __WEBPACK_IMPORTED_MODULE_21__news_modal_news_modal_component__["a" /* NewsModalComponent */],
                __WEBPACK_IMPORTED_MODULE_22__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_23__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_24__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_25__upload_news_upload_news_component__["a" /* UploadNewsComponent */],
                __WEBPACK_IMPORTED_MODULE_26__news_detail_news_detail_component__["a" /* NewsDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_27__upload_member_upload_member_component__["a" /* UploadMemberComponent */],
                __WEBPACK_IMPORTED_MODULE_28__upload_coach_upload_coach_component__["a" /* UploadCoachComponent */],
                __WEBPACK_IMPORTED_MODULE_29__coach_modal_coach_modal_component__["a" /* CoachModalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_6_ng2_bs3_modal_ng2_bs3_modal__["Ng2Bs3ModalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/app.module.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_team_service__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoachesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CoachesComponent = (function () {
    function CoachesComponent(teamService) {
        this.teamService = teamService;
        this.coachesClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CoachesComponent.prototype.ngOnInit = function () {
        this.coaches = this.teamService.getCoaches();
    };
    CoachesComponent.prototype.coachClicked = function (coach) {
        this.coachesClicked.emit(coach);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('coach-clicked'), 
        __metadata('design:type', Object)
    ], CoachesComponent.prototype, "coachesClicked", void 0);
    CoachesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-coaches',
            template: __webpack_require__(803),
            styles: [__webpack_require__(766)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */]) === 'function' && _a) || Object])
    ], CoachesComponent);
    return CoachesComponent;
    var _a;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/coaches.component.js.map

/***/ }),

/***/ 578:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(804),
            styles: [__webpack_require__(767)]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/footer.component.js.map

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(805),
            styles: [__webpack_require__(768)]
        }), 
        __metadata('design:paramtypes', [])
    ], GalleryComponent);
    return GalleryComponent;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/gallery.component.js.map

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(806),
            styles: [__webpack_require__(769)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/header.component.js.map

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(115);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(af, _fb) {
        this.af = af;
        this._fb = _fb;
    }
    LoginComponent.prototype.login = function (form) {
        if (form.value.email && form.value.password) {
            this.af.auth.login({
                email: form.value.email,
                password: form.value.password,
            }, {
                provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthProviders */].Password,
                method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* AuthMethods */].Password,
            }).then(function (data) {
            });
        }
    };
    LoginComponent.prototype.logout = function () {
        this.af.auth.logout();
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.myForm = this._fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(807),
            styles: [__webpack_require__(770)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/login.component.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__member_modal_member_modal_component__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__coach_modal_coach_modal_component__ = __webpack_require__(375);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent() {
    }
    MainComponent.prototype.openTeamModal = function (member) {
        this.modal.open(member);
    };
    MainComponent.prototype.openCoachModal = function (coach) {
        this.cModal.open(coach);
    };
    MainComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('memberModal'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__member_modal_member_modal_component__["a" /* MemberModalComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__member_modal_member_modal_component__["a" /* MemberModalComponent */]) === 'function' && _a) || Object)
    ], MainComponent.prototype, "modal", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('coachModal'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__coach_modal_coach_modal_component__["a" /* CoachModalComponent */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__coach_modal_coach_modal_component__["a" /* CoachModalComponent */]) === 'function' && _b) || Object)
    ], MainComponent.prototype, "cModal", void 0);
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(808),
            styles: [__webpack_require__(771)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/main.component.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MemberComponent = (function () {
    function MemberComponent(firebaseApp) {
        this.memberClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.firebaseApp = firebaseApp;
    }
    MemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        var storageRef = this.firebaseApp.storage().ref().child('team' + "/" + this.data.previewImage);
        storageRef.getDownloadURL().then(function (url) { return _this.imgSrc = url; });
    };
    MemberComponent.prototype.openModal = function () {
        this.memberClicked.emit(this.data);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], MemberComponent.prototype, "data", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], MemberComponent.prototype, "type", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('member-clicked'), 
        __metadata('design:type', Object)
    ], MemberComponent.prototype, "memberClicked", void 0);
    MemberComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-member',
            template: __webpack_require__(810),
            styles: [__webpack_require__(773)]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [(typeof (_a = (_b = typeof __WEBPACK_IMPORTED_MODULE_2_firebase__ !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_firebase__["app"]) && _b.App) === 'function' && _a) || Object])
    ], MemberComponent);
    return MemberComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/member.component.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coach; });
var Coach = (function () {
    function Coach(name, career, previewImage, joinPassion, questions) {
        this.name = name;
        this.career = career;
        this.previewImage = previewImage;
        this.joinPassion = joinPassion;
        this.questions = questions;
    }
    return Coach;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/coach.model.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Member; });
var Member = (function () {
    function Member(name, birthDay, birthPlace, previewImage, joinPassion, past, startSkate, questions, role) {
        this.name = name;
        this.birthDay = birthDay;
        this.birthPlace = birthPlace;
        this.previewImage = previewImage;
        this.joinPassion = joinPassion;
        this.past = past;
        this.startSkate = startSkate;
        this.questions = questions;
        this.role = role;
    }
    return Member;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/member.model.js.map

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
var News = (function () {
    function News(key, title, subtitle, paragraph, createdDate, previewImage, mainImage, images, videos) {
        this.key = key;
        this.title = title;
        this.subtitle = subtitle;
        this.paragraph = paragraph;
        this.createdDate = createdDate;
        this.previewImage = previewImage;
        this.mainImage = mainImage;
        this.images = images;
        this.videos = videos;
    }
    return News;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/news.model.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var NavigationComponent = (function () {
    function NavigationComponent(document) {
        this.document = document;
        this.navIsFixed = true;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.onScroll = function () {
        var number = this.document.body.scrollTop;
        if (number >= 200) {
            this.navIsFixed = false;
        }
        else {
            this.navIsFixed = true;
        }
    };
    ;
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', []), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], NavigationComponent.prototype, "onScroll", null);
    NavigationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(811),
            styles: [__webpack_require__(774)]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DOCUMENT */])), 
        __metadata('design:paramtypes', [Object])
    ], NavigationComponent);
    return NavigationComponent;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/navigation.component.js.map

/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_news_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(49);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var NewsDetailComponent = (function () {
    function NewsDetailComponent(route, newsService, firebaseApp) {
        this.route = route;
        this.newsService = newsService;
        this.imgSrcList = [];
        this.firebaseApp = firebaseApp;
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.newsService.getNewsById(params['id']).map(function (news) {
                if (news.createdDate) {
                    news.createdDate = new Date(news.createdDate);
                }
                return news;
            }).subscribe(function (news) {
                var storageRef = _this.firebaseApp.storage().ref().child("news/" + news.key + "/" + news.mainImage);
                storageRef.getDownloadURL().then(function (url) { return _this.mainImgSrc = url; });
                var promises = [];
                if (news.images) {
                    news.images.forEach(function (image) {
                        var storageRef = _this.firebaseApp.storage().ref().child("news/" + news.key + "/" + image);
                        promises.push(storageRef.getDownloadURL());
                    });
                    Promise.all(promises).then(function (values) {
                        _this.imgSrcList = values;
                        _this.news = news;
                    });
                }
                else {
                    _this.news = news;
                }
            });
        });
    };
    NewsDetailComponent.prototype.hasImage = function (i) {
        if (this.imgSrcList) {
            return this.imgSrcList.length > i;
        }
        return false;
    };
    NewsDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news-detail',
            template: __webpack_require__(812),
            styles: [__webpack_require__(775)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_news_service__["a" /* NewsService */]]
        }),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_news_service__["a" /* NewsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_news_service__["a" /* NewsService */]) === 'function' && _b) || Object, Object])
    ], NewsDetailComponent);
    return NewsDetailComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/news-detail.component.js.map

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsModalComponent = (function () {
    function NewsModalComponent() {
    }
    NewsModalComponent.prototype.ngOnInit = function () {
    };
    NewsModalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news-modal',
            template: __webpack_require__(813),
            styles: [__webpack_require__(776)]
        }), 
        __metadata('design:paramtypes', [])
    ], NewsModalComponent);
    return NewsModalComponent;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/news-modal.component.js.map

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(254);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NewsComponent = (function () {
    function NewsComponent(firebaseApp, router) {
        this.router = router;
        this.firebaseApp = firebaseApp;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var storageRef = this.firebaseApp.storage().ref().child("news/" + this.news.key + "/" + this.news.previewImage);
        storageRef.getDownloadURL().then(function (url) { return _this.imgSrc = url; });
    };
    NewsComponent.prototype.navigate = function () {
        this.router.navigate(['/news', this.news.$key]);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], NewsComponent.prototype, "news", void 0);
    NewsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(814),
            styles: [__webpack_require__(777)]
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [Object, (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _a) || Object])
    ], NewsComponent);
    return NewsComponent;
    var _a;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/news.component.js.map

/***/ }),

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_news_service__ = __webpack_require__(258);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewscontainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewscontainerComponent = (function () {
    function NewscontainerComponent(newsService) {
        this.newsService = newsService;
        this.numOfElements = 0;
        this.hasNext = false;
        this.hasPrev = false;
    }
    NewscontainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getSize().subscribe(function (size) {
            _this.numOfElements = size;
            _this.newsList = _this.newsService.getFirst();
            _this.newsList.subscribe(function (obj) {
                _this.last = obj[0]['createdDate'];
                _this.first = obj[obj.length - 1]['createdDate'];
                console.log(_this.last);
            });
        });
    };
    NewscontainerComponent.prototype.next = function () {
        console.log(this.last);
        this.newsList = this.newsService.getThree(this.last);
    };
    NewscontainerComponent.prototype.prev = function () {
        this.newsList = this.newsService.getThree(this.first);
    };
    NewscontainerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newscontainer',
            template: __webpack_require__(815),
            styles: [__webpack_require__(778)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_news_service__["a" /* NewsService */]) === 'function' && _a) || Object])
    ], NewscontainerComponent);
    return NewscontainerComponent;
    var _a;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/newscontainer.component.js.map

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultsComponent = (function () {
    function ResultsComponent() {
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(816),
            styles: [__webpack_require__(779)]
        }), 
        __metadata('design:paramtypes', [])
    ], ResultsComponent);
    return ResultsComponent;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/results.component.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_team_service__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamComponent = (function () {
    function TeamComponent(teamService) {
        this.teamService = teamService;
        this.teamClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    TeamComponent.prototype.ngOnInit = function () {
        this.team = this.teamService.getTeam();
    };
    TeamComponent.prototype.memberClicked = function (member) {
        this.teamClicked.emit(member);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('team-clicked'), 
        __metadata('design:type', Object)
    ], TeamComponent.prototype, "teamClicked", void 0);
    TeamComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-team',
            template: __webpack_require__(817),
            styles: [__webpack_require__(780)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */]],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_team_service__["a" /* TeamService */]) === 'function' && _a) || Object])
    ], TeamComponent);
    return TeamComponent;
    var _a;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/team.component.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_team_service__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_coach_model__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadCoachComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var UploadCoachComponent = (function () {
    function UploadCoachComponent(_fb, teamService, firebaseApp, af) {
        this._fb = _fb;
        this.teamService = teamService;
        this.af = af;
        this.isAuth = false;
        this.firebaseApp = firebaseApp;
    }
    UploadCoachComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.isAuth = true;
            }
        });
        this.coachForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            career: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            joinPassion: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            questions: this._fb.array([
                this.initQuestion(),
            ])
        });
    };
    UploadCoachComponent.prototype.initQuestion = function () {
        return this._fb.group({
            question: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            answer: ['']
        });
    };
    UploadCoachComponent.prototype.addQuestion = function () {
        var control = this.coachForm.controls['questions'];
        control.push(this.initQuestion());
    };
    UploadCoachComponent.prototype.removeQuestion = function (i) {
        var control = this.coachForm.controls['questions'];
        control.removeAt(i);
    };
    UploadCoachComponent.prototype.save = function (form) {
        if (this.previewImg) {
            this.upload(form);
        }
        else {
            alert("Előnézeti és borító kép megadása kötelező");
        }
    };
    UploadCoachComponent.prototype.upload = function (form) {
        var _this = this;
        var model = form.value;
        var coach = new __WEBPACK_IMPORTED_MODULE_4__models_coach_model__["a" /* Coach */](model.name, model.career, this.previewImg.name, model.joinPassion, model.questions);
        var storageRef = this.firebaseApp.storage().ref();
        var previewImg = storageRef.child("team/" + this.previewImg.name);
        previewImg.put(this.previewImg).then(function (values) {
            var cleanObject = __WEBPACK_IMPORTED_MODULE_5_lodash__["omitBy"](coach, __WEBPACK_IMPORTED_MODULE_5_lodash__["isNil"]);
            _this.teamService.createCoach(cleanObject);
            _this.reset();
        });
    };
    UploadCoachComponent.prototype.onPreviewImg = function (event) {
        this.previewImg = event.srcElement.files[0];
    };
    UploadCoachComponent.prototype.reset = function () {
        this.coachForm.reset();
        this.previewImg = null;
        this.previewImgEl.nativeElement.value = "";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('previewImg'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], UploadCoachComponent.prototype, "previewImgEl", void 0);
    UploadCoachComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-coach',
            template: __webpack_require__(818),
            styles: [__webpack_require__(781)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_team_service__["a" /* TeamService */]]
        }),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_team_service__["a" /* TeamService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_team_service__["a" /* TeamService */]) === 'function' && _c) || Object, Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["c" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["c" /* AngularFire */]) === 'function' && _d) || Object])
    ], UploadCoachComponent);
    return UploadCoachComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/upload-coach.component.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_team_service__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_member_model__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadMemberComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var UploadMemberComponent = (function () {
    function UploadMemberComponent(_fb, teamService, firebaseApp, af) {
        this._fb = _fb;
        this.teamService = teamService;
        this.af = af;
        this.isAuth = false;
        this.firebaseApp = firebaseApp;
    }
    UploadMemberComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.isAuth = true;
            }
        });
        this.memberForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            role: ['', []],
            birthDay: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            birthPlace: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            joinPassion: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            past: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            startSkate: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            questions: this._fb.array([
                this.initQuestion(),
            ])
        });
    };
    UploadMemberComponent.prototype.initQuestion = function () {
        return this._fb.group({
            question: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            answer: ['']
        });
    };
    UploadMemberComponent.prototype.addQuestion = function () {
        var control = this.memberForm.controls['questions'];
        control.push(this.initQuestion());
    };
    UploadMemberComponent.prototype.removeQuestion = function (i) {
        var control = this.memberForm.controls['questions'];
        control.removeAt(i);
    };
    UploadMemberComponent.prototype.save = function (form) {
        if (this.previewImg) {
            this.upload(form);
        }
        else {
            alert("Előnézeti és borító kép megadása kötelező");
        }
    };
    UploadMemberComponent.prototype.upload = function (form) {
        var _this = this;
        var model = form.value;
        var member = new __WEBPACK_IMPORTED_MODULE_4__models_member_model__["a" /* Member */](model.name, model.birthDay, model.birthPlace, this.previewImg.name, model.joinPassion, model.startSkate, model.past, model.questions, model.role);
        var storageRef = this.firebaseApp.storage().ref();
        var previewImg = storageRef.child("team/" + this.previewImg.name);
        previewImg.put(this.previewImg).then(function (values) {
            var cleanObject = __WEBPACK_IMPORTED_MODULE_5_lodash__["omitBy"](member, __WEBPACK_IMPORTED_MODULE_5_lodash__["isNil"]);
            var date = new Date(member.birthDay);
            _this.teamService.createMember(cleanObject);
            _this.reset();
        });
    };
    UploadMemberComponent.prototype.onPreviewImg = function (event) {
        this.previewImg = event.srcElement.files[0];
    };
    UploadMemberComponent.prototype.reset = function () {
        this.memberForm.reset();
        this.previewImg = null;
        this.previewImgEl.nativeElement.value = "";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('previewImg'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], UploadMemberComponent.prototype, "previewImgEl", void 0);
    UploadMemberComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-member',
            template: __webpack_require__(819),
            styles: [__webpack_require__(782)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_team_service__["a" /* TeamService */]]
        }),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3_angularfire2__["b" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_team_service__["a" /* TeamService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_team_service__["a" /* TeamService */]) === 'function' && _c) || Object, Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2__["c" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angularfire2__["c" /* AngularFire */]) === 'function' && _d) || Object])
    ], UploadMemberComponent);
    return UploadMemberComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/upload-member.component.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_news_model__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_news_service__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs__ = __webpack_require__(823);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadNewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UploadNewsComponent = (function () {
    function UploadNewsComponent(_fb, newsService, firebaseApp, af) {
        this._fb = _fb;
        this.newsService = newsService;
        this.af = af;
        this.files = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_6_rxjs__["Subject"]();
        this.isAuth = false;
        this.firebaseApp = firebaseApp;
    }
    UploadNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub.subscribe(function (form) {
            _this.upload(form);
        });
        this.af.auth.subscribe(function (auth) {
            if (auth) {
                _this.isAuth = true;
            }
        });
        var local = new Date();
        local.setMinutes(local.getMinutes() - local.getTimezoneOffset());
        this.myForm = this._fb.group({
            title: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            subtitle: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            createdDate: [local.toJSON().slice(0, 10), [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]],
            paragraphs: this._fb.array([
                this.initParagraph(),
            ])
        });
    };
    UploadNewsComponent.prototype.initParagraph = function () {
        return this._fb.group({
            paragraph: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required],
        });
    };
    UploadNewsComponent.prototype.addParagraph = function () {
        var control = this.myForm.controls['paragraphs'];
        control.push(this.initParagraph());
    };
    UploadNewsComponent.prototype.removeParagraph = function (i) {
        var control = this.myForm.controls['paragraphs'];
        control.removeAt(i);
    };
    UploadNewsComponent.prototype.save = function (form) {
        if (this.previewImg && this.mainImg) {
            var img = new Image();
            var sub = this.sub;
            img.onload = function () {
                if (this.width == 200 && this.height == 200) {
                    sub.next(form);
                }
                else {
                    alert("Előnézeti kép 200px*200px nek kell lennie");
                }
            };
            img.src = window.URL.createObjectURL(this.previewImg);
        }
        else {
            alert("Előnézeti és borító kép megadása kötelező");
        }
    };
    UploadNewsComponent.prototype.upload = function (form) {
        var _this = this;
        var model = form.value;
        var p = model.paragraphs.map(function (data) { return data.paragraph; });
        var key = this.removeSpecialChars(model.title);
        var news = new __WEBPACK_IMPORTED_MODULE_1__models_news_model__["a" /* News */](key, model.title, model.subtitle, p, model.createdDate, this.previewImg.name, this.mainImg.name);
        var storageRef = this.firebaseApp.storage().ref();
        var promises = [];
        var previewImg = storageRef.child("news/" + key + "/" + this.previewImg.name);
        var mainImg = storageRef.child("news/" + key + "/" + this.mainImg.name);
        promises.push(mainImg.put(this.mainImg));
        promises.push(previewImg.put(this.previewImg));
        this.files.forEach(function (file) {
            var image = storageRef.child("news/" + key + "/" + file.name);
            promises.push(image.put(file));
        });
        Promise.all(promises).then(function (values) {
            news.images = _this.files.map(function (file) { return file.name; });
            var cleanObject = __WEBPACK_IMPORTED_MODULE_5_lodash__["omitBy"](news, __WEBPACK_IMPORTED_MODULE_5_lodash__["isNil"]);
            var date = new Date(news.createdDate);
            var num = date.getFullYear() + date.getDay() * 30 + date.getDay();
            _this.newsService.createNews(cleanObject).setPriority(num, function (data) { return console.log(data); });
            _this.reset();
        });
    };
    UploadNewsComponent.prototype.onPreviewImg = function (event) {
        this.previewImg = event.srcElement.files[0];
    };
    UploadNewsComponent.prototype.onMainImg = function (event) {
        this.mainImg = event.srcElement.files[0];
    };
    UploadNewsComponent.prototype.onChange = function (event) {
        this.files.push(event.srcElement.files[0]);
    };
    UploadNewsComponent.prototype.removeSpecialChars = function (str) {
        return str.replace(/(?!\w|\s)./g, '')
            .replace(/\s+/g, ' ')
            .replace(/^(\s*)([\W\w]*)(\b\s*$)/g, '$2');
    };
    UploadNewsComponent.prototype.reset = function () {
        this.myForm.reset();
        this.files = [];
        this.previewImg = null;
        this.mainImg = null;
        this.imageEl.nativeElement.value = "";
        this.previewImgEl.nativeElement.value = "";
        this.mainImgEl.nativeElement.value = "";
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('images'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object)
    ], UploadNewsComponent.prototype, "imageEl", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('previewImg'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object)
    ], UploadNewsComponent.prototype, "previewImgEl", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('mainImg'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _c) || Object)
    ], UploadNewsComponent.prototype, "mainImgEl", void 0);
    UploadNewsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upload-news',
            template: __webpack_require__(820),
            styles: [__webpack_require__(783)],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_news_service__["a" /* NewsService */]]
        }),
        __param(2, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4_angularfire2__["b" /* FirebaseApp */])), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormBuilder */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_news_service__["a" /* NewsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_news_service__["a" /* NewsService */]) === 'function' && _e) || Object, Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2__["c" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_angularfire2__["c" /* AngularFire */]) === 'function' && _f) || Object])
    ], UploadNewsComponent);
    return UploadNewsComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/upload-news.component.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideosComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideosComponent = (function () {
    function VideosComponent() {
    }
    VideosComponent.prototype.ngOnInit = function () {
    };
    VideosComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-videos',
            template: __webpack_require__(821),
            styles: [__webpack_require__(784)]
        }), 
        __metadata('design:paramtypes', [])
    ], VideosComponent);
    return VideosComponent;
}());
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/videos.component.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/danielszenasi/Projects/teampassion2/src/environment.js.map

/***/ }),

/***/ 762:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 763:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 764:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 765:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 766:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 767:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 768:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 769:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 770:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 771:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 772:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 773:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 774:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 775:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 776:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 777:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 779:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 780:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 781:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 782:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 783:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 784:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 799:
/***/ (function(module, exports) {

module.exports = "<div class=\"about\">\n  <section id=\"about\">\n    <div class=\"container wow fadeIn\">\n\n      <div class=\"col-md-12 text-center\">\n        <h1>A csapatunkról</h1>\n        <hr class=\"colored\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <h3 align=\"right\"><a href=\"#team\">Tagjaink</a></h3>\n        </div>\n        <div class=\"col-xs-6\">\n          <h3 align=\"left\"><a href=\"#coaches\">Edzőink</a></h3>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n        </div>\n        <div class=\"col-md-6 text-center\">\n          <p><i><font size=\"+3\">„Kell egy csapat!”</font></i></p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 about-image\">\n          <div class=\"about-image\">\n            <img src=\"assets/img/about.jpg\" class=\"img-responsive\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"col-md-6 text-center\">\n          <p>Csapatként jégre lépni talán a legnehezebb feladat. Nemcsak saját magadért, hanem még tizenkilenc másik emberért is felelős vagy. Egy hiba sem fér bele, hiszen ha te hibázol, a csapat is hibázik. Viszont ha győzünk, csapatként győzünk, csapatként állunk fel a dobogóra. Abban a néhány percben egységként kell maradandót alkotni. Hogy ez 2016-ra komoly eredményt hozzon, hosszú utat tett meg a Team Passion.</p>\n          <p>A magyar szinkronkorcsolya-válogatott 2007 nyarán Team Passion néven alakult meg azzal a céllal, hogy Magyarország egy ütőképes csapattal képviselje magát a 2008-as hazai rendezésű világbajnokságon. A válogatott elérte célját, az addigi legjobb magyar eredményt felülmúlva a 14. helyen végzett a világbajnokságon, s ezzel új lehetőségek nyíltak meg a csapat előtt.</p>\n          <p>A Team Passion Miskolcon, az ország akkori legnagyobb szinkronkorcsolya bázisán töltötte felkészülési idejének nagy részét, majd Budapestre költözött a csapat. A leküzdendő akadályok száma egyre csak nőtt, és harcoltunk azért, hogy a csapat, valamint a sportág életben maradjon hazánkban.</p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 about-image\">\n          <div class=\"about-image2\">\n            <img src=\"assets/img/about3.png\" class=\"img-responsive\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"col-md-6 text-center\">\n          <p>2016-ban Magyarország ismét megkapta a világbajnokság rendezési jogát, és vele együtt mi is az újabb bizonyítási lehetőséget, így a 2008 után csatlakozott tagjaink is átérezhetik azt az örömöt, amikor több ezer magyar szurkoló tapsol ujjongva egy tökéletes kűrt követően.</p>\n          <p>Persze nemcsak azon a húsz sportolón múlik a siker, akik jégre lépnek. A szövetség, az edzőink, a támogatóink és a szurkolóink nélkül nem tartanánk itt. Az általuk befektetett energia és munka teszi lehetővé számunkra azt, hogy nekünk már csak a tökéletes programok kivitelezésével kelljen foglalkoznunk. Hiszen egy csapat csak akkor lehet igazán sikeres, ha mindenki egyet akar: győzni.</p>\n          <p>Így a 2016-os világbajnokságon nem is lehet számunkra más a cél, minthogy a maximumot nyújtsuk és megmutassuk, a sok edzés, jégen töltött óra nem volt hiába, hiszen olyen jól még nem szerepelt a nemzetközi versenyeken a magyar csapat, mint az 2015/2016-os szezonban. A budapesti világbajnokságon is törekszünk a hibátlan teljesítményre, és hogy bebizonyítsuk, ott a helyünk a világ élvonalában!</p>\n          <p>Mindannyiunk célja legjobbnak lenni a legjobbak között. De csakis közösen, Team Passionként.</p>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ 800:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-login></app-login>\n<app-upload-news></app-upload-news>\n<app-upload-member></app-upload-member>\n<app-upload-coach></app-upload-coach>\n"

/***/ }),

/***/ 801:
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 802:
/***/ (function(module, exports) {

module.exports = "<modal class=\"portfolio-modal fade\" #modal tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"\n       style=\"background-image: url('assets/img/bg-team-modal.jpg')\">\n\n  <div class=\"close-modal\" data-dismiss=\"modal\">\n    <div class=\"lr\">\n      <div class=\"rl\">\n      </div>\n    </div>\n  </div>\n  <modal-body *ngIf=\"coach\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <h2>{{coach.name}}</h2>\n          <hr class=\"colored\">\n          <img src=\"{{profileImageUrl}}\" class=\"img-responsive img-circle portfolio-image\" alt=\"\">\n          <div class=\"row\">\n            <h4 align=\"right\" class=\"col-xs-6\">Edzői pályafutás kezdete</h4>\n            <div align=\"left\" class=\"col-xs-6\">{{coach.career}}</div>\n          </div>\n          <div class=\"row\">\n            <h4 align=\"right\" class=\"col-xs-6\">Passion-höz csatlakozás éve</h4>\n            <div align=\"left\" class=\"col-xs-6\">{{coach.joinPassion}}</div>\n          </div>\n          <hr class=\"colored\">\n          <div *ngFor=\"let question of coach.questions\">\n            <h4>{{question.question}}</h4>\n            <p>{{question.answer}}</p>\n            <hr class=\"colored\">\n          </div>\n\n\n        </div>\n        <div class=\"col-lg-8\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Vissza</button>\n        </div>\n      </div>\n    </div>\n  </modal-body>\n\n</modal>\n"

/***/ }),

/***/ 803:
/***/ (function(module, exports) {

module.exports = "<section id = \"coaches\">\n  <div class=\"container text-center wow fadeIn\">\n    <h2>Edzőink</h2>\n    <hr class=\"colored\">\n    <p>Itt olvashatsz edzőinkről</p>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div id=\"portfoliolist\">\n          <app-member *ngFor=\"let coach of coaches | async\"\n                      [data]=\"coach\"\n                      [type]=\"'coaches'\"\n                      (member-clicked)=\"coachClicked($event)\">\n          </app-member>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ 804:
/***/ (function(module, exports) {

module.exports = "<footer id = \"contact\" class=\"footer\" style=\"background-image: url('assets/img/bg-footer.jpg')\">\n  <div class=\"container text-center\">\n    <div class=\"row\">\n      <!--<div class=\"col-md-4 contact-details\">-->\n      <!--<h4><i class=\"fa fa-phone\"></i> Call</h4>-->\n      <!--<p>555-213-4567</p>-->\n      <!--</div>-->\n      <div class=\"col-md-6 contact-details\">\n        <h4><i class=\"fa fa-map-marker\"></i> Visit</h4>\n        <p>1143 Budapest\n          <br>Stefánia út 2.</p>\n      </div>\n      <div class=\"col-md-6 contact-details\">\n        <h4><i class=\"fa fa-envelope\"></i> E-mail</h4>\n        <p><a href=\"mailto:teampassion.sys@gmail.com\">teampassion.sys@gmail.com</a></p>\n        <p><a href=\"mailto:erus.gulyas@gmail.com\">erus.gulyas@gmail.com</a></p>\n        <p><a href=\"mailto:sarkozi.bettina@gmail.com\">sarkozi.bettina@gmail.com</a></p>\n      </div>\n    </div>\n    <div class=\"row social\">\n      <div class=\"col-lg-12\">\n        <ul class=\"list-inline\">\n          <li><a href=\"https://www.facebook.com/Team-Passion-Team-Hungary-114451771912591/\"><i class=\"fa fa-facebook-square fa-fw fa-3x\"></i></a></li>\n          <li><a href=\"https://www.instagram.com/teampassion_hun/\"><i class=\"fa fa-instagram fa-fw fa-3x\"></i></a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row copyright\">\n      <div class=\"col-lg-12\">\n        <p class=\"small\">&copy; 2016 Team Passion</p>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ 805:
/***/ (function(module, exports) {

module.exports = "\n\n\n<!--\n<section id=\"photo\" class=\"bg-gray\">\n  <div class=\"container wow fadeIn\">\n    <div class=\"row text-center\">\n      <div class=\"col-lg-12 wow fadeIn\">\n        <h1>Képek</h1>\n        <hr class=\"colored\">\n        <p>A kisképekre kattintva megtekinthetők a képek nagyméretben.</p>\n      </div>\n    </div>\n\n    <div class=\"panel-group text-center\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" role=\"tab\" id=\"heading1\">\n          <h3><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\" aria-expanded=\"true\" aria-controls=\"collapse1\">Zagreb Snowflakes Trophy</a></h3>\n        </div>\n        <div id=\"collapse1\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"heading1\">\n          <div class=\"panel-body\">\n\n            <div class=\"row content-row\">\n              <div class=\"col-lg-12\">\n                <div class=\"portfolio-gallery\">\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/zagrebsnowflakestrophy2016_1.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/thumbnail/zagrebsnowflakestrophy2016_1.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/zagrebsnowflakestrophy2016_2.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/thumbnail/zagrebsnowflakestrophy2016_2.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/zagrebsnowflakestrophy2016_3.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/thumbnail/zagrebsnowflakestrophy2016_3.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/zagrebsnowflakestrophy2016_4.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/thumbnail/zagrebsnowflakestrophy2016_4.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/zagrebsnowflakestrophy2016_5.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/thumbnail/zagrebsnowflakestrophy2016_5.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/zagrebsnowflakestrophy2016_6.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/thumbnail/zagrebsnowflakestrophy2016_6.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/zagrebsnowflakestrophy2016_7.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/thumbnail/zagrebsnowflakestrophy2016_7.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/zagrebsnowflakestrophy2016_8.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/thumbnail/zagrebsnowflakestrophy2016_8.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/zagrebsnowflakestrophy2016_9.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/thumbnail/zagrebsnowflakestrophy2016_9.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/zagrebsnowflakestrophy2016_10.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/thumbnail/zagrebsnowflakestrophy2016_10.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/zagrebsnowflakestrophy2016_11.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/thumbnail/zagrebsnowflakestrophy2016_11.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/zagrebsnowflakestrophy2016_12.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/ZagrebSnowflakesTrophy2016/thumbnail/zagrebsnowflakestrophy2016_12.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n\n\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" role=\"tab\" id=\"heading2\">\n          <h3><a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\" aria-expanded=\"false\" aria-controls=\"collapse2\">Budapest Cup</a></h3>\n        </div>\n        <div id=\"collapse2\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading2\">\n\n          <div class=\"panel-body\">\n\n            <div class=\"row content-row\">\n              <div class=\"col-lg-12\">\n\n                <div class=\"portfolio-gallery\">\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_1.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/BudapestCup2016/thumbnail/budapestcup2016_1.jpg\" class=\"img-responsive\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_2.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/BudapestCup2016/thumbnail/budapestcup2016_2.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_2.jpg\" class=\"gallery-link\" title=\"Budapest Cup 2016 - Rövid program\">\n                      <img src=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_2.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_3.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/BudapestCup2016/thumbnail/budapestcup2016_3.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_4.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/BudapestCup2016/thumbnail/budapestcup2016_4.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_5.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/BudapestCup2016/thumbnail/budapestcup2016_5.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_6.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/BudapestCup2016/thumbnail/budapestcup2016_6.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_7.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/BudapestCup2016/thumbnail/budapestcup2016_7.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_8.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/BudapestCup2016/thumbnail/budapestcup2016_8.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_9.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/BudapestCup2016/thumbnail/budapestcup2016_9.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_10.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/BudapestCup2016/thumbnail/budapestcup2016_10.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/BudapestCup2016/budapestcup2016_11.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/BudapestCup2016/thumbnail/budapestcup2016_11.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" role=\"tab\" id=\"heading3\">\n          <h3><a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\" aria-expanded=\"false\" aria-controls=\"collapse3\">Spring Cup</a></h3>\n        </div>\n        <div id=\"collapse3\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading3\">\n          <div class=\"panel-body\">\n\n            <div class=\"row content-row\">\n              <div class=\"col-lg-12\">\n                <div class=\"portfolio-gallery\">\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_1.jpg\" class=\"gallery-link\" title=\"Spring Cup 2016 - Rövid program\">\n                      <img src=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_1.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_2.jpg\" class=\"gallery-link\" title=\"Spring Cup 2016 - Rövid program\">\n                      <img src=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_2.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_3.jpg\" class=\"gallery-link\" title=\"Spring Cup 2016 - Rövid program\">\n                      <img src=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_3.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_4.jpg\" class=\"gallery-link\" title=\"Spring Cup 2016 - Rövid program\">\n                      <img src=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_4.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_5.jpg\" class=\"gallery-link\" title=\"Spring Cup 2016 - Rövid program\">\n                      <img src=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_5.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_6.jpg\" class=\"gallery-link\" title=\"Spring Cup 2016 - Rövid program\">\n                      <img src=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_6.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_7.jpg\" class=\"gallery-link\" title=\"Spring Cup 2016 - Rövid program\">\n                      <img src=\"assets/img/gallery/20152016/SpringCup2016/springcup2016_7.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/SpringCup2016/springcup2016_8.jpg\" class=\"gallery-link\" title=\"Spring Cup 2016 - Kűr\">\n                      <img src=\"assets/img/gallery/SpringCup2016/springcup2016_8.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" role=\"tab\" id=\"heading4\">\n          <h3><a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse4\" aria-expanded=\"false\" aria-controls=\"collapse4\">Mozart Cup</a></h3>\n        </div>\n        <div id=\"collapse4\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"heading4\">\n          <div class=\"panel-body\">\n\n            <div class=\"row content-row\">\n              <div class=\"col-lg-12\">\n                <div class=\"portfolio-gallery\">\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/MozartCup2016/mozartcup2016_1.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/MozartCup2016/thumbnail/mozartcup2016_1.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/MozartCup2016/mozartcup2016_2.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/MozartCup2016/thumbnail/mozartcup2016_2.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/MozartCup2016/mozartcup2016_3.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/MozartCup2016/thumbnail/mozartcup2016_3.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/MozartCup2016/mozartcup2016_4.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/MozartCup2016/thumbnail/mozartcup2016_4.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/MozartCup2016/mozartcup2016_5.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/MozartCup2016/thumbnail/mozartcup2016_5.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/MozartCup2016/mozartcup2016_6.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/MozartCup2016/thumbnail/mozartcup2016_6.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/20152016/MozartCup2016/mozartcup2016_7.jpg\" class=\"gallery-link\" title=\"\">\n                      <img src=\"assets/img/gallery/20152016/MozartCup2016/thumbnail/mozartcup2016_7.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                  <div class=\"item\">\n                    <a href=\"assets/img/gallery/MozartCup2016/mozartcup2016_8.jpg\" class=\"gallery-link\" title=\"Mozart Cup 2016 - Kűr\">\n                      <img src=\"assets/img/gallery/MozartCup2016/mozartcup2016_8.jpg\" class=\"img-responsive img-centered\" alt=\"\">\n                    </a>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</section>\n-->\n"

/***/ }),

/***/ 806:
/***/ (function(module, exports) {

module.exports = "<header style=\"background-image: url('assets/img/bg-1.jpg');\">\n  <div class=\"intro-content\">\n    <div class=\"brand-name\">Team Passion</div>\n    <hr class=\"colored\">\n    <div class=\"brand-name-subtext\">Magyar szinkronkorcsolya-válogatott</div>\n  </div>\n  <div class=\"scroll-down\">\n    <a class=\"btn page-scroll\" href=\"#news\"><i class=\"fa fa-angle-down fa-fw\"></i></a>\n  </div>\n</header>\n\n"

/***/ }),

/***/ 807:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"margin-20\">\n        <h4>Bejelentkezés</h4>\n      </div>\n      <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"login(myForm)\">\n        <div class=\"form-group\">\n        <label>Email</label>\n        <input type=\"text\" formControlName=\"email\">\n      </div>\n        <div class=\"form-group\">\n          <label>Jelszó</label>\n          <input type=\"password\" formControlName=\"password\">\n        </div>\n        <div class=\"clearfix\"></div>\n        <button type=\"submit\" class=\"btn btn-primary pull-left\" [disabled]=\"!myForm.valid\">Bejelentkezés</button>\n      </form>\n      <button class=\"btn btn-primary pull-right\" (click)=\"logout()\">Kijelentkezés</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 808:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-newscontainer></app-newscontainer>\n<app-about></app-about>\n<app-team (team-clicked)=\"openTeamModal($event)\"></app-team>\n<app-coaches (coach-clicked)=\"openCoachModal($event)\"></app-coaches>\n<app-results></app-results>\n<app-gallery></app-gallery>\n<app-videos></app-videos>\n<app-footer></app-footer>\n<app-member-modal #memberModal></app-member-modal>\n<app-coach-modal #coachModal></app-coach-modal>\n<!--<app-news-modal></app-news-modal>-->\n"

/***/ }),

/***/ 809:
/***/ (function(module, exports) {

module.exports = "<modal class=\"portfolio-modal fade\" #modal tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\"\n       style=\"background-image: url('assets/img/bg-team-modal.jpg')\">\n\n  <div class=\"close-modal\" data-dismiss=\"modal\">\n    <div class=\"lr\">\n      <div class=\"rl\">\n      </div>\n    </div>\n  </div>\n  <modal-body *ngIf=\"member\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8\">\n          <h2>{{member.name}}</h2>\n          <hr class=\"colored\">\n          <img src=\"{{profileImageUrl}}\" class=\"img-responsive img-circle portfolio-image\" alt=\"\">\n          <div class=\"row\">\n            <h4 align=\"right\" class=\"col-xs-6\">Születési dátum</h4>\n            <div align=\"left\" class=\"col-xs-6\">{{member.birthDay | date}}</div>\n          </div>\n          <div class=\"row\">\n            <h4 align=\"right\" class=\"col-xs-6\">Város</h4>\n            <div align=\"left\" class=\"col-xs-6\">{{member.birthPlace}}</div>\n          </div>\n          <div class=\"row\">\n            <h4 align=\"right\" class=\"col-xs-6\">Korcsolyázás kezdetének éve</h4>\n            <div align=\"left\" class=\"col-xs-6\">{{member.startSkate}}</div>\n          </div>\n          <div class=\"row\">\n            <h4 align=\"right\" class=\"col-xs-6\">Korcsolyás előélet</h4>\n            <div align=\"left\" class=\"col-xs-6\">{{member.past}}</div>\n          </div>\n          <div class=\"row\">\n            <h4 align=\"right\" class=\"col-xs-6\">Passion-höz csatlakozás éve</h4>\n            <div align=\"left\" class=\"col-xs-6\">{{member.joinPassion}}</div>\n          </div>\n          <hr class=\"colored\">\n          <div *ngFor=\"let question of member.questions\">\n            <h4>{{question.question}}</h4>\n            <p>{{question.answer}}</p>\n            <hr class=\"colored\">\n          </div>\n\n\n        </div>\n        <div class=\"col-lg-8\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Vissza</button>\n        </div>\n      </div>\n    </div>\n  </modal-body>\n\n</modal>\n"

/***/ }),

/***/ 810:
/***/ (function(module, exports) {

module.exports = "<div class=\"portfolio identity\" data-cat=\"identity\" data-toggle=\"modal\" (click)=\"openModal()\">\n  <div class=\"portfolio-wrapper\">\n    <img [attr.src]=\"imgSrc\" alt=\"\">\n    <div class=\"caption\">\n      <div class=\"caption-text\">\n        <a class=\"text-title\">{{data.name}}</a>\n        <span class=\"text-category\">{{data.role}}</span>\n      </div>\n      <div class=\"caption-bg\"></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 811:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\" [class.navbar-expanded]=\"navIsFixed\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand page-scroll\" href=\"#page-top\">\n        <img src=\"assets/img/logo.png\" class=\"img-responsive\" alt=\"\">\n      </a>\n    </div>\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"hidden\">\n          <a class=\"page-scroll\" href=\"#page-top\"></a>\n        </li>\n        <li>\n          <a class=\"page-scroll\" href=\"#news\">Hírek</a>\n        </li>\n        <li>\n          <a class=\"page-scroll\" href=\"#about\">Rólunk</a>\n        </li>\n        <li>\n          <a class=\"page-scroll\" href=\"#result\">Eredményeink</a>\n        </li>\n        <li>\n          <a class=\"page-scroll\" href=\"#gallery\">Galéria</a>\n        </li>\n        <li>\n          <a class=\"page-scroll\" href=\"#contact\">Kapcsolat</a>\n        </li>\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container -->\n</nav>\n"

/***/ }),

/***/ 812:
/***/ (function(module, exports) {

module.exports = "<header *ngIf=\"news\" [ngStyle]=\"{'background-image': 'url(' + mainImgSrc + ')'}\" style=\"height: 70%;\">\n  <div class=\"intro-content\">\n    <div class=\"brand-name\">{{news.title}}</div>\n  </div>\n</header>\n<div *ngIf=\"news\" class=\"container\">\n\n    <div class=\"col-lg-8 col-lg-offset-2\">\n      <h3 class=\"text-center\">{{news.subtitle}}</h3>\n      <hr class=\"colored\">\n      <div class=\"row\" *ngFor=\"let p of news.paragraph; let i = index;\">\n        <div class=\"col-md-12 paragraph\">{{p}}</div>\n        <div *ngIf=\"hasImage(i)\" class=\"col-md-12\">\n          <img [src]=\"imgSrcList[i]\" class=\"img-responsive portfolio-image\" alt=\"\">\n        </div>\n      </div>\n    </div>\n\n  <div class=\"col-lg-8 col-lg-offset-2\">\n    <ul class=\"list-inline item-details\">\n      <li>Dátum: <strong>{{news.createdDate | date}}</strong></li>\n    </ul>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "<div class=\"portfolio-modal modal fade\" id=\"newsModal1\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\" style=\"background-image: url('assets/img/creative/news/bg-salz.jpg')\">\n  <div class=\"modal-content\">\n    <div class=\"close-modal\" data-dismiss=\"modal\">\n      <div class=\"lr\">\n        <div class=\"rl\">\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-lg-offset-2\">\n            <h2>MOZART CUP 2016</h2>\n            <p><font size=\"+2\"><i>Bemutatkozott a Team Passion</i></font></p>\n            <hr class=\"colored\">\n            <p align=\"justify\">A magyar szinkronkorcsolya-válogatott Salzburgban a Mozart Kupán szerepelt, melyen 13 csapat mérte össze tudását, köztük számos olyan is, amelyek majd a budapesti világbajnokságon is képviselik hazájukat.</p>\n            <p align=\"justify\">A Mozart Kupa a csapat felkészülésének egy nagyon fontos állomása volt, hiszen ez volt az első alkalom, amikor a válogatott a nemzetközi porondra kilépve azokkal a csapatokkal mérettetett meg, melyekkel a világbajnokságon is fog.</p>\n            <p align=\"justify\">Tisztában voltunk azzal, hogy nem lesz egyszerű egy év alatt hirtelen áttörni a skatulyát, mely élt a bírok és a technikai stáb fejében.</p>\n            <div class=\"col-md-8 col-md-pull-4 col-md-offset-6\">\n              <img src=\"assets/img/creative/news/salz2.jpg\" class=\"img-responsive portfolio-image\" alt=\"\">\n            </div><p align=\"justify\">A rövid program kötelező edzése jól sikerült, majd a csapat este a versenyen is egy lendületes, stabil korcsolyázást mutatott be, nagyobb rontások nélkül. Végül 37.97 pontot szerzett (16.67; 22.30) és ezzel a 8. helyen várta a folytatást.</p>\n            <p align=\"justify\">Az 5-8. helyezett között mindössze két pont különbség volt. A rövid programra kapott pontokon azonban már látszódott a pontozók teljes megosztottsága, hiszen a második pontszámban 4.00-7.00 között mindenféle értéket kaptunk, mely nagyon ritka. A verseny második napjának a kötelező edzésén, a csapaton jobban érződött az izgalom és a túlzott akarat, ezért az edzésen bemutatott programrészek bár lendületesek voltak, de nem pontosak.</p>\n            <p align=\"justify\">Este azonban a válogatott a szezon egyik legösszeszedettebb és legdinamikusabb kűrjével 91.46 pontot szerezve magabiztosan ugrott a cseh és a svájci csapat elé és végzett összesítésben a 6. helyen (Ez a két csapat a tavalyi világbajnokságon több, mint 20 ponttal volt előttünk!)</p>\n            <div class=\"col-md-8 col-md-pull-4 col-md-offset-6\">\n              <img src=\"assets/img/creative/news/salz1.jpg\" class=\"img-responsive portfolio-image\" alt=\"\">\n            </div><p align=\"justify\">A kűrre kapott pontszámok esetében fontos megjegyezni, hogy a csapat a dobogó 3. helyén végzett kanadai egyletet is megelőzve a harmadik legerősebb technikai pontot kapta programjára, ami azt jelenti, hogy az említett csapatok mellett a technikai pontok vonatkozásában az olasz, francia és kanadai csapatot is sikerült maga mögé utasítania, mely mindenképp óriási eredmény.</p>\n            <p align=\"justify\">A csapat idei évi nemzetközi bemutatkozása szenzációsan sikerült, a tavalyi pontszámon 30 pontot javított, és bízhat abban, hogy a szezon további részében ezt még növeli.</p>\n          </div>\n          <div class=\"col-lg-8 col-lg-offset-2\">\n            <ul class=\"list-inline item-details\">\n              <li>Dátum:\n                <strong>2016. január 23.</strong>\n              </li>\n            </ul>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Vissza</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "<div class=\"news\" data-cat=\"identity\" (click)=\"navigate()\">\n  <div class=\"col-md-4 col-sm-6 news-wrapper\" data-wow-delay=\".2s\">\n    <div class=\"about-content\">\n      <div>\n        <img [attr.src]=\"imgSrc\" class=\"img-circle news-image\" alt=\"\">\n      </div>\n      <h4>{{news.title}}</h4>\n      <p>{{news.subtitle}}</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<div class=\"news\">\n  <section id=\"news\">\n    <div class=\"container text-center wow fadeIn\">\n      <h1>Híreink</h1>\n      <hr class=\"colored\">\n    </div>\n  </section>\n</div>\n<section class=\"testimonials wow fadeIn\">\n  <div #testimonialsCarousel class=\"testimonials-carousel\">\n    <div class=\"item\">\n      <div class=\"container-fluid\">\n        <div class=\"row\">\n          <app-news *ngFor=\"let news of newsList | async\"\n                    [news]=\"news\">\n          </app-news>\n        </div>\n      </div>\n    </div>\n    <div class=\"owl-controls\">\n      <button class=\"owl-prev\" (click)=\"prev()\">\n        <i class='fa fa-angle-left'></i>\n      </button>\n      <button class=\"owl-next\" (click)=\"next()\">\n        <i class='fa fa-angle-right'></i>\n      </button>\n    </div>\n  </div>\n</section>\n<aside class=\"cta-quote\" style=\"background-image: url('assets/img/bg-aside3.jpg');\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10 col-md-offset-1 wow fadeIn\">\n        <!-- <hr class=\" colored\"> -->\n        <!-- <a class=\"btn btn-outline-light page-scroll\" href=\"#contact\">Let's Find It</a> -->\n      </div>\n    </div>\n  </div>\n</aside>\n\n"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "<aside class=\"cta-quote\" style=\"background-image: url('assets/img/bg-aside.jpg');\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-10 col-md-offset-1 wow fadeIn\">\n        <!-- <hr class=\" colored\"> -->\n        <!-- <a class=\"btn btn-outline-light page-scroll\" href=\"#contact\">Let's Find It</a> -->\n      </div>\n    </div>\n  </div>\n</aside>\n\n<section id=\"result\" class=\"bg-gray\">\n  <div class=\"container wow fadeIn\">\n    <div class=\"row text-center\">\n      <div class=\"col-lg-12 wow fadeIn\">\n        <h1>Eredményeink</h1>\n        <hr class=\"colored\">\n        <p>A versenyekről írt beszámolónkat a verseny nevére kattintva olvashatod el!</p>\n      </div>\n    </div>\n\n    <div class=\"panel-group text-center\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n          <h3><a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\"\n                 aria-controls=\"collapseOne\">2015-2016</a></h3>\n        </div>\n        <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n          <div class=\"panel-body\">\n            <table class=\"table\">\n              <thead>\n              <th class=\"text-center\">Verseny</th>\n              <th class=\"text-center\">Dátum</th>\n              <th class=\"text-center\">Helyszín</th>\n              <th class=\"text-center\">Helyezés</th>\n              </thead>\n\n              <tbody>\n              <tr>\n                <td><a href=\"#resultsModal1606/\" data-toggle=\"modal\">Világbajnokság</a></td>\n                <td>2016. 04. 08 - 09.</td>\n                <td>Budapest, Magyarország</td>\n                <td>15.</td>\n              </tr>\n\n              <tr>\n                <td><a href=\"#resultsModal1605\" data-toggle=\"modal\">Zagreb Snowflakes Trophy</a></td>\n                <td>2016. 03. 11 - 12.</td>\n                <td>Zágráb, Horvátország</td>\n                <td>2.</td>\n              </tr>\n\n              <tr>\n                <td><a href=\"#resultsModal1604\" data-toggle=\"modal\">Budapest Cup</a></td>\n                <td>2016. 02. 26 - 27.</td>\n                <td>Budapest, Magyarország</td>\n                <td>1.</td>\n              </tr>\n\n              <tr>\n                <td><a href=\"#resultsModal1603\" data-toggle=\"modal\">Spring Cup</a></td>\n                <td>2016. 02. 20 - 21.</td>\n                <td>Milánó, Olaszország</td>\n                <td>8.</td>\n              </tr>\n\n              <tr>\n                <td><a href=\"#resultsModal1602\" data-toggle=\"modal\">Mozart Cup</a></td>\n                <td>2016. 01. 22 - 23.</td>\n                <td>Salzburg, Ausztria</td>\n                <td>6.</td>\n              </tr>\n\n              <tr>\n                <td><a href=\"#resultsModal1601\" data-toggle=\"modal\">Országos Bajnokság</a></td>\n                <td>2016. 01. 09 - 10.</td>\n                <td>Debrecen, Magyarország</td>\n                <td>1.</td>\n              </tr>\n\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n          <h3><a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\"\n                 aria-expanded=\"false\" aria-controls=\"collapseTwo\">2014-2015</a></h3>\n        </div>\n        <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n          <div class=\"panel-body\">\n            <table class=\"table\">\n              <thead>\n              <th class=\"text-center\">Verseny</th>\n              <th class=\"text-center\">Dátum</th>\n              <th class=\"text-center\">Helyszín</th>\n              <th class=\"text-center\">Helyezés</th>\n              </thead>\n\n              <tbody>\n              <tr>\n                <td>Világbajnokság</td>\n                <td>2015. 04. 10 - 11.</td>\n                <td>Hamilton, Kanada</td>\n                <td>17.</td>\n              </tr>\n\n              <tr>\n                <td>Budapest Cup</td>\n                <td>2015. 03. 20 - 21.</td>\n                <td>Budapest, Magyarország</td>\n                <td>2.</td>\n              </tr>\n\n              <tr>\n                <td>Spring Cup</td>\n                <td>2015. 02. 14 - 15.</td>\n                <td>Milánó, Olaszország</td>\n                <td>8.</td>\n              </tr>\n\n              <tr>\n                <td>Mozart Cup</td>\n                <td>2015. 01. 23 - 24.</td>\n                <td>Salzburg, Ausztria</td>\n                <td>10.</td>\n              </tr>\n\n              <tr>\n                <td>Országos Bajnokság</td>\n                <td>2015. 02. 07 - 08.</td>\n                <td>Miskolc, Magyarország</td>\n                <td>1.</td>\n              </tr>\n\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n          <h3><a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\"\n                 aria-expanded=\"false\" aria-controls=\"collapseThree\">2013-2014</a></h3>\n        </div>\n        <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n          <div class=\"panel-body\">\n            <table class=\"table\">\n              <thead>\n              <th class=\"text-center\">Verseny</th>\n              <th class=\"text-center\">Dátum</th>\n              <th class=\"text-center\">Helyszín</th>\n              <th class=\"text-center\">Helyezés</th>\n              </thead>\n\n              <tbody>\n              <tr>\n                <td>Világbajnokság</td>\n                <td>2014. 04. 04 - 05.</td>\n                <td>Courmayeur, Olaszország</td>\n                <td>17.</td>\n              </tr>\n\n              <tr>\n                <td>Spring Cup</td>\n                <td>2014. 02. 15 - 16.</td>\n                <td>Milánó, Olaszország</td>\n                <td>7.</td>\n              </tr>\n\n              <tr>\n                <td>Országos Bajnokság</td>\n                <td>2014. 02. 01 - 02.</td>\n                <td>Miskolc, Magyarország</td>\n                <td>1.</td>\n              </tr>\n\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"panel panel-default\">\n        <div class=\"panel-heading\" role=\"tab\" id=\"headingFour\">\n          <h3><a class=\"collapsed\" role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\"\n                 aria-expanded=\"false\" aria-controls=\"collapseFour\">2012-2013</a></h3>\n        </div>\n        <div id=\"collapseFour\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\">\n          <div class=\"panel-body\">\n            <table class=\"table\">\n              <thead>\n              <th class=\"text-center\">Verseny</th>\n              <th class=\"text-center\">Dátum</th>\n              <th class=\"text-center\">Helyszín</th>\n              <th class=\"text-center\">Helyezés</th>\n              </thead>\n\n              <tbody>\n              <tr>\n                <td>Világbajnokság</td>\n                <td>2013. 04. 05 - 06.</td>\n                <td>Boston, Egyesült Államok</td>\n                <td>19.</td>\n              </tr>\n\n              <tr>\n                <td>Zagreb Snowflakes Trophy</td>\n                <td>2013. 03. 01 - 02.</td>\n                <td>Zágráb, Horvátország</td>\n                <td>6.</td>\n              </tr>\n\n              <tr>\n                <td>Országos Bajnokság</td>\n                <td>2013. 02. 22 - 23.</td>\n                <td>Debrecen, Magyarország</td>\n                <td>1.</td>\n              </tr>\n\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "<section id=\"team\" class=\"bg-gray\">\n  <div class=\"container text-center wow fadeIn\">\n    <h2>Tagjaink</h2>\n    <hr class=\"colored\">\n    <p>Itt olvashatsz csapattagjainkról</p>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div id=\"portfoliolist\">\n          <app-member *ngFor=\"let member of team | async\"\n                      [data]=\"member\"\n                      [type]=\"'team'\"\n          (member-clicked)=\"memberClicked($event)\"></app-member>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isAuth\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"margin-20\">\n        <h4>Új edző hozzáadása</h4>\n      </div>\n      <form [formGroup]=\"coachForm\" novalidate (ngSubmit)=\"save(coachForm)\">\n        <div class=\"form-group\">\n          <label>Név</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n          <small *ngIf=\"!coachForm.controls.name.valid\" class=\"text-danger\">\n            A Név kitöltése kötelező.\n          </small>\n        </div>\n\n        <div>\n          <label for=\"previewImg\">Előnézeti kép</label>\n          <input type=\"file\" #previewImg id=\"previewImg\" accept=\"image/*\" (change)=\"onPreviewImg($event)\"/>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Passion-hőz csatlakozás ideje</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"joinPassion\">\n        </div>\n\n        <div class=\"form-group\">\n          <label>Edzői pályafutása</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"career\">\n          <small *ngIf=\"!coachForm.controls.career.valid\" class=\"text-danger\">\n            Edzői pályafutása\n          </small>\n        </div>\n\n        <!--questions-->\n        <div formArrayName=\"questions\">\n          <div *ngFor=\"let question of coachForm.controls.questions.controls; let i=index\" class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <span>Kérdés {{i + 1}}</span>\n              <span class=\"glyphicon glyphicon-remove pull-right\"\n                    *ngIf=\"coachForm.controls.questions.controls.length > 1\"\n                    (click)=\"removeQuestion(i)\"></span>\n            </div>\n            <div class=\"panel-body\" [formGroupName]=\"i\">\n              <div class=\"form-group col-xs-6\">\n                <label>kérdés</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"question\">\n              </div>\n              <div class=\"form-group col-xs-6\">\n                <label>válasz</label>\n                <textarea type=\"text\" class=\"form-control\" formControlName=\"answer\"></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"margin-20\">\n          <a (click)=\"addQuestion()\" style=\"cursor: default\">\n            Új kérdés\n          </a>\n        </div>\n        <div class=\"margin-20\">\n          <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!coachForm.valid\">Submit</button>\n        </div>\n        <div class=\"clearfix\"></div>\n      </form>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isAuth\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"margin-20\">\n        <h4>Új csapattag hozzáadása</h4>\n      </div>\n      <form [formGroup]=\"memberForm\" novalidate (ngSubmit)=\"save(memberForm)\">\n        <div class=\"form-group\">\n          <label>Név</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"name\">\n          <small *ngIf=\"!memberForm.controls.name.valid\" class=\"text-danger\">\n            A Név kitöltése kötelező.\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Szerep</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"role\">\n        </div>\n\n        <div class=\"form-group\">\n          <label>Születési idő</label>\n          <input type=\"date\" class=\"form-control\" formControlName=\"birthDay\">\n        </div>\n\n        <div class=\"form-group\">\n          <label>Születési hely</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"birthPlace\">\n          <small *ngIf=\"!memberForm.controls.birthPlace.valid\" class=\"text-danger\">\n            Az Születési hely kitöltése kötelező.\n          </small>\n        </div>\n\n        <div>\n          <label for=\"previewImg\">Előnézeti kép</label>\n          <input type=\"file\" #previewImg id=\"previewImg\" accept=\"image/*\" (change)=\"onPreviewImg($event)\"/>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Passion-hőz csatlakozás ideje</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"joinPassion\">\n        </div>\n\n        <div class=\"form-group\">\n          <label>Korcsolyázás kezdete</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"past\">\n          <small *ngIf=\"!memberForm.controls.past.valid\" class=\"text-danger\">\n            A Korcsolyázás kezdete hely kitöltése kötelező.\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Korcsolyás előélet</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"startSkate\">\n          <small *ngIf=\"!memberForm.controls.startSkate.valid\" class=\"text-danger\">\n            Az Korcsolyás előélet hely kitöltése kötelező.\n          </small>\n        </div>\n\n        <!--questions-->\n        <div formArrayName=\"questions\">\n          <div *ngFor=\"let question of memberForm.controls.questions.controls; let i=index\" class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <span>Kérdés {{i + 1}}</span>\n              <span class=\"glyphicon glyphicon-remove pull-right\"\n                    *ngIf=\"memberForm.controls.questions.controls.length > 1\"\n                    (click)=\"removeQuestion(i)\"></span>\n            </div>\n            <div class=\"panel-body\" [formGroupName]=\"i\">\n              <div class=\"form-group col-xs-6\">\n                <label>kérdés</label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"question\">\n              </div>\n              <div class=\"form-group col-xs-6\">\n                <label>válasz</label>\n                <textarea type=\"text\" class=\"form-control\" formControlName=\"answer\"></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"margin-20\">\n          <a (click)=\"addQuestion()\" style=\"cursor: default\">\n            Új kérdés\n          </a>\n        </div>\n        <div class=\"margin-20\">\n          <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!memberForm.valid\">Submit</button>\n        </div>\n        <div class=\"clearfix\"></div>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isAuth\" class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n      <div class=\"margin-20\">\n        <h4>Új hír hozzáadása</h4>\n      </div>\n      <form [formGroup]=\"myForm\" novalidate (ngSubmit)=\"save(myForm)\">\n        <div class=\"form-group\">\n          <label>Cím</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"title\">\n          <small *ngIf=\"!myForm.controls.title.valid\" class=\"text-danger\">\n            A Cím kitöltése kötelező.\n          </small>\n        </div>\n\n        <div class=\"form-group\">\n          <label>Alcím</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"subtitle\">\n          <small *ngIf=\"!myForm.controls.subtitle.valid\" class=\"text-danger\">\n            Az Alcím kitöltése kötelező.\n          </small>\n        </div>\n\n        <!--paragraphs-->\n        <div formArrayName=\"paragraphs\">\n          <div *ngFor=\"let paragraph of myForm.controls.paragraphs.controls; let i=index\" class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n              <span>Bekezdés {{i + 1}}</span>\n              <span class=\"glyphicon glyphicon-remove pull-right\" *ngIf=\"myForm.controls.paragraphs.controls.length > 1\" (click)=\"removeParagraph(i)\"></span>\n            </div>\n            <div class=\"panel-body\" [formGroupName]=\"i\">\n              <div class=\"form-group col-xs-6\">\n                <textarea type=\"text\" class=\"form-control\" formControlName=\"paragraph\"></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"margin-20\">\n          <a (click)=\"addParagraph()\" style=\"cursor: default\">\n            Új bekezdés\n          </a>\n        </div>\n        <div class=\"form-group\">\n          <label>Dátum</label>\n          <input type=\"date\" class=\"form-control\" formControlName=\"createdDate\">\n        </div>\n        <div>\n          <label for=\"mainimg\">Borító kép</label>\n          <input type=\"file\" #mainImg id=\"mainImg\" accept=\"image/*\" (change)=\"onMainImg($event)\"/>\n        </div>\n        <div>\n          <label for=\"previewImg\">Előnézeti kép</label>\n          <input type=\"file\" #previewImg id=\"previewImg\" accept=\"image/*\" (change)=\"onPreviewImg($event)\"/>\n        </div>\n        <div>\n          <label for=\"images\">Képek</label>\n          <input type=\"file\" #images id=\"images\" accept=\"image/*\" (change)=\"onChange($event)\"/>\n        </div>\n        <div *ngFor=\"let file of files\">\n          {{file.name}}\n        </div>\n        <div class=\"margin-20\">\n          <button type=\"submit\" class=\"btn btn-primary pull-right\" [disabled]=\"!myForm.valid\">Submit</button>\n        </div>\n        <div class=\"clearfix\"></div>\n      </form>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 821:
/***/ (function(module, exports) {

module.exports = "<section id=\"video\">\n  <div class=\"container\">\n    <div class=\"row text-center\">\n      <div class=\"col-lg-12 wow fadeIn\">\n        <h1>Videók</h1>\n        <!--<p>I provide web design, web development, photography, and graphic design services.</p>-->\n        <hr class=\"colored\">\n      </div>\n      <div class=\"col-lg-12\">\n        <div class=\"col-lg-3\">\n          <div class=\"js-video [vimeo, widescreen]\"><iframe src=\"https://player.vimeo.com/video/162434612\" width=\"560\" height=\"325\" frameborder=\"0\" allowfullscreen></iframe></div>\n          <h5><font color=#f62459>Világbajnokság</font>\n            <br><font color=black>Rövid program</font></h5>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"js-video [vimeo, widescreen]\"><iframe src=\"https://player.vimeo.com/video/158157635\" width=\"560\" height=\"325\" frameborder=\"0\"  allowfullscreen></iframe></div>\n          <h5><font color=#f62459>Világbajnokság</font>\n            <br><font color=black>Kűr</font></h5>\n        </div>\n\n        <div class=\"col-lg-3\">\n          <div class=\"js-video [vimeo, widescreen]\"><iframe src=\"https://player.vimeo.com/video/157954248\" width=\"560\" height=\"325\" frameborder=\"0\" allowfullscreen></iframe></div>\n          <h5><font color=#f62459>Spring Cup</font>\n            <br><font color=black>Rövid program</font></h5>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"js-video [vimeo, widescreen]\"><iframe src=\"https://player.vimeo.com/video/158157635\" width=\"560\" height=\"325\" frameborder=\"0\"  allowfullscreen></iframe></div>\n          <h5><font color=#f62459>Spring Cup</font>\n            <br><font color=black>Kűr</font></h5>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ })

},[1093]);
//# sourceMappingURL=main.bundle.js.map