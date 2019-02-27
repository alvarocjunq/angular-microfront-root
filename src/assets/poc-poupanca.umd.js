(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('poc-poupanca', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global['poc-poupanca'] = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PocPoupancaService = /** @class */ (function () {
        function PocPoupancaService() {
        }
        PocPoupancaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PocPoupancaService.ctorParameters = function () { return []; };
        /** @nocollapse */ PocPoupancaService.ngInjectableDef = i0.defineInjectable({ factory: function PocPoupancaService_Factory() { return new PocPoupancaService(); }, token: PocPoupancaService, providedIn: "root" });
        return PocPoupancaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PocPoupancaComponent = /** @class */ (function () {
        function PocPoupancaComponent() {
        }
        /**
         * @return {?}
         */
        PocPoupancaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PocPoupancaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'tf-poc-poupanca',
                        template: "\n    <p>\n      Aplica\u00E7\u00E3o de poupan\u00E7a\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        PocPoupancaComponent.ctorParameters = function () { return []; };
        return PocPoupancaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PocPoupancaModule = /** @class */ (function () {
        function PocPoupancaModule() {
        }
        PocPoupancaModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [PocPoupancaComponent],
                        imports: [router.RouterModule.forChild([{ path: '', component: PocPoupancaComponent }])],
                        exports: [router.RouterModule, PocPoupancaComponent]
                    },] }
        ];
        return PocPoupancaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.PocPoupancaService = PocPoupancaService;
    exports.PocPoupancaComponent = PocPoupancaComponent;
    exports.PocPoupancaModule = PocPoupancaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=poc-poupanca.umd.js.map