(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/router'), require('@angular/forms'), require('poc-arquitetura'), require('rxjs'), require('rxjs/operators'), require('@angular/common/http'), require('@angular/core'), require('@angular/material/form-field'), require('@angular/material/grid-list'), require('@angular/material/button'), require('@angular/material/select'), require('@angular/material/input'), require('@angular/material/toolbar'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/material/progress-bar'), require('@angular/material/radio'), require('@angular/material/sidenav'), require('@angular/material/tabs'), require('@angular/material/core'), require('@angular/material/badge'), require('@angular/material/card'), require('@angular/material/table'), require('@angular/material/sort')) :
    typeof define === 'function' && define.amd ? define('poc-credito', ['exports', '@angular/router', '@angular/forms', 'poc-arquitetura', 'rxjs', 'rxjs/operators', '@angular/common/http', '@angular/core', '@angular/material/form-field', '@angular/material/grid-list', '@angular/material/button', '@angular/material/select', '@angular/material/input', '@angular/material/toolbar', '@angular/material/icon', '@angular/material/list', '@angular/material/progress-bar', '@angular/material/radio', '@angular/material/sidenav', '@angular/material/tabs', '@angular/material/core', '@angular/material/badge', '@angular/material/card', '@angular/material/table', '@angular/material/sort'], factory) :
    (factory((global['poc-credito'] = {}),global.ng.router,global.ng.forms,global.pocArquitetura,global.rxjs,global.rxjs.operators,global.ng.common.http,global.ng.core,global.ng.material['form-field'],global.ng.material['grid-list'],global.ng.material.button,global.ng.material.select,global.ng.material.input,global.ng.material.toolbar,global.ng.material.icon,global.ng.material.list,global.ng.material['progress-bar'],global.ng.material.radio,global.ng.material.sidenav,global.ng.material.tabs,global.ng.material.core,global.ng.material.badge,global.ng.material.card,global.ng.material.table,global.ng.material.sort));
}(this, (function (exports,router,forms,pocArquitetura,rxjs,operators,i1,i0,formField,gridList,button,select,input,toolbar,icon,list,progressBar,radio,sidenav,tabs,core,badge,card,table,sort) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PocCreditoService = /** @class */ (function () {
        function PocCreditoService() {
        }
        PocCreditoService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PocCreditoService.ctorParameters = function () { return []; };
        /** @nocollapse */ PocCreditoService.ngInjectableDef = i0.defineInjectable({ factory: function PocCreditoService_Factory() { return new PocCreditoService(); }, token: PocCreditoService, providedIn: "root" });
        return PocCreditoService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PocCreditoComponent = /** @class */ (function () {
        function PocCreditoComponent() {
        }
        /**
         * @return {?}
         */
        PocCreditoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PocCreditoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tf-poc-credito',
                        template: "<router-outlet name=\"tf-poc-credito\"></router-outlet>"
                    }] }
        ];
        /** @nocollapse */
        PocCreditoComponent.ctorParameters = function () { return []; };
        return PocCreditoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ConfigService = /** @class */ (function () {
        function ConfigService(http) {
            this.http = http;
        }
        /**
         * @return {?}
         */
        ConfigService.prototype.init = /**
         * @return {?}
         */
            function () {
                var _this = this;
                // Cache file
                if (this.jsonFile) {
                    return rxjs.of(this.jsonFile);
                }
                // Cache Observable
                if (!this.jsonFile$) {
                    this.jsonFile$ = this.http.get('assets/env/url.config.json').pipe(operators.share());
                }
                return this.jsonFile$.pipe(operators.map(( /**
                 * @param {?} file
                 * @return {?}
                 */function (file) { return _this.jsonFile = file; })));
            };
        ConfigService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ConfigService.ctorParameters = function () {
            return [
                { type: i1.HttpClient }
            ];
        };
        /** @nocollapse */ ConfigService.ngInjectableDef = i0.defineInjectable({ factory: function ConfigService_Factory() { return new ConfigService(i0.inject(i1.HttpClient)); }, token: ConfigService, providedIn: "root" });
        return ConfigService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HttpService = /** @class */ (function () {
        function HttpService(http, configService) {
            this.http = http;
            this.configService = configService;
            this.HTTP_OPTIONS = {
                headers: new i1.HttpHeaders({
                    'Content-Type': 'application/json'
                }),
            };
        }
        /**
         * @template T
         * @param {?} url
         * @return {?}
         */
        HttpService.prototype.get = /**
         * @template T
         * @param {?} url
         * @return {?}
         */
            function (url) {
                var _this = this;
                return this.configService.init()
                    .pipe(operators.switchMap(( /**
             * @param {?} config
             * @return {?}
             */function (config) { return _this.http.get("" + config.url_base + url, _this.HTTP_OPTIONS); })), operators.catchError(this.handleError()));
            };
        /**
         * @template T
         * @param {?} url
         * @param {?} body
         * @return {?}
         */
        HttpService.prototype.post = /**
         * @template T
         * @param {?} url
         * @param {?} body
         * @return {?}
         */
            function (url, body) {
                var _this = this;
                return this.configService.init()
                    .pipe(operators.switchMap(( /**
             * @param {?} config
             * @return {?}
             */function (config) { return _this.http.post("" + config.url_base + url, body, _this.HTTP_OPTIONS); })), operators.catchError(this.handleError()));
            };
        /**
         * @template T
         * @param {?} url
         * @param {?} body
         * @return {?}
         */
        HttpService.prototype.put = /**
         * @template T
         * @param {?} url
         * @param {?} body
         * @return {?}
         */
            function (url, body) {
                var _this = this;
                return this.configService.init()
                    .pipe(operators.switchMap(( /**
             * @param {?} config
             * @return {?}
             */function (config) { return _this.http.put("" + config.url_base + url, body, _this.HTTP_OPTIONS); })), operators.catchError(this.handleError()));
            };
        /**
         * @template T
         * @param {?} url
         * @return {?}
         */
        HttpService.prototype.delete = /**
         * @template T
         * @param {?} url
         * @return {?}
         */
            function (url) {
                var _this = this;
                return this.configService.init()
                    .pipe(operators.switchMap(( /**
             * @param {?} config
             * @return {?}
             */function (config) { return _this.http.delete("" + config.url_base + url, _this.HTTP_OPTIONS); })), operators.catchError(this.handleError()));
            };
        /**
         * @private
         * @template T
         * @return {?}
         */
        HttpService.prototype.handleError = /**
         * @private
         * @template T
         * @return {?}
         */
            function () {
                return ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
                    throw (( /** @type {?} */(error)));
                });
            };
        HttpService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root',
                    },] }
        ];
        /** @nocollapse */
        HttpService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: ConfigService }
            ];
        };
        /** @nocollapse */ HttpService.ngInjectableDef = i0.defineInjectable({ factory: function HttpService_Factory() { return new HttpService(i0.inject(i1.HttpClient), i0.inject(ConfigService)); }, token: HttpService, providedIn: "root" });
        return HttpService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HomeCreditoService = /** @class */ (function () {
        function HomeCreditoService(http) {
            this.http = http;
        }
        /**
         * @return {?}
         */
        HomeCreditoService.prototype.openCalc = /**
         * @return {?}
         */
            function () {
                return this.http.get('?application=C:/Windows/System32/calc.exe');
            };
        HomeCreditoService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        HomeCreditoService.ctorParameters = function () {
            return [
                { type: HttpService }
            ];
        };
        /** @nocollapse */ HomeCreditoService.ngInjectableDef = i0.defineInjectable({ factory: function HomeCreditoService_Factory() { return new HomeCreditoService(i0.inject(HttpService)); }, token: HomeCreditoService, providedIn: "root" });
        return HomeCreditoService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HomeCreditoComponent = /** @class */ (function () {
        function HomeCreditoComponent(launcherService, homeService) {
            this.launcherService = launcherService;
            this.homeService = homeService;
        }
        /**
         * @return {?}
         */
        HomeCreditoComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        HomeCreditoComponent.prototype.onClickPoupanca = /**
         * @return {?}
         */
            function () {
                this.launcherService.call({
                    location: 'assets/poc-poupanca.umd.js',
                    moduleName: 'PocPoupancaModule',
                    selector: 'tf-poc-poupanca',
                    tabName: 'Poupança',
                    canBeReopened: false,
                    data: this.data
                });
            };
        /**
         * @return {?}
         */
        HomeCreditoComponent.prototype.onClickCalc = /**
         * @return {?}
         */
            function () {
                this.homeService.openCalc().subscribe();
            };
        HomeCreditoComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tf-home-credito',
                        template: "<div class=\"box\">\n  <p>\n    Aplica\u00E7\u00E3o de Cr\u00E9dito Pessoal\n  </p>\n  <div class=\"launcher\">\n    <p>\n      Dados -> {{data}}\n    </p>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Informa\u00E7\u00E3o a ser passada\" [(ngModel)]=\"data\">\n    </mat-form-field>\n    <br>\n    <button mat-raised-button color=\"primary\" (click)=\"onClickPoupanca()\">Chamar Aplica\u00E7\u00E3o de Poupan\u00E7a</button>\n  </div>\n  <br>\n  <br>\n  <br>\n  <br>\n\n  <button mat-raised-button color=\"accent\" (click)=\"onClickCalc()\">Abrir Calculadora</button>\n</div>",
                        styles: [".box{margin:15px}.example-full-width{width:15%}.launcher{margin:3% 15px 15px}"]
                    }] }
        ];
        /** @nocollapse */
        HomeCreditoComponent.ctorParameters = function () {
            return [
                { type: pocArquitetura.LauncherService },
                { type: HomeCreditoService }
            ];
        };
        return HomeCreditoComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        MaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            toolbar.MatToolbarModule,
                            formField.MatFormFieldModule,
                            gridList.MatGridListModule,
                            button.MatButtonModule,
                            select.MatSelectModule,
                            input.MatInputModule,
                            list.MatListModule,
                            icon.MatIconModule,
                            progressBar.MatProgressBarModule,
                            radio.MatRadioModule,
                            sidenav.MatSidenavModule,
                            tabs.MatTabsModule,
                            core.MatRippleModule,
                            badge.MatBadgeModule,
                            card.MatCardModule,
                            table.MatTableModule,
                            sort.MatSortModule,
                        ],
                        exports: [
                            toolbar.MatToolbarModule,
                            formField.MatFormFieldModule,
                            gridList.MatGridListModule,
                            button.MatButtonModule,
                            select.MatSelectModule,
                            input.MatInputModule,
                            list.MatListModule,
                            icon.MatIconModule,
                            progressBar.MatProgressBarModule,
                            radio.MatRadioModule,
                            sidenav.MatSidenavModule,
                            tabs.MatTabsModule,
                            core.MatRippleModule,
                            badge.MatBadgeModule,
                            card.MatCardModule,
                            table.MatTableModule,
                            sort.MatSortModule,
                        ],
                    },] }
        ];
        return MaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        { path: 'home', children: [{ path: '', component: HomeCreditoComponent, outlet: 'tf-poc-credito' }] }
    ];
    var PocCreditoModule = /** @class */ (function () {
        function PocCreditoModule() {
        }
        PocCreditoModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [PocCreditoComponent, HomeCreditoComponent],
                        imports: [
                            forms.FormsModule,
                            i1.HttpClientModule,
                            MaterialModule,
                            router.RouterModule.forChild(routes)
                        ],
                        exports: [router.RouterModule, PocCreditoComponent]
                    },] }
        ];
        return PocCreditoModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.PocCreditoService = PocCreditoService;
    exports.PocCreditoComponent = PocCreditoComponent;
    exports.PocCreditoModule = PocCreditoModule;
    exports.ɵd = ConfigService;
    exports.ɵc = HttpService;
    exports.ɵa = HomeCreditoComponent;
    exports.ɵb = HomeCreditoService;
    exports.ɵe = MaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=poc-credito.umd.js.map