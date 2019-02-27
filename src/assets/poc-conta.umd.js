(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('poc-conta', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global['poc-conta'] = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PocContaService = /** @class */ (function () {
        function PocContaService() {
        }
        PocContaService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PocContaService.ctorParameters = function () { return []; };
        /** @nocollapse */ PocContaService.ngInjectableDef = i0.defineInjectable({ factory: function PocContaService_Factory() { return new PocContaService(); }, token: PocContaService, providedIn: "root" });
        return PocContaService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PocContaComponent = /** @class */ (function () {
        function PocContaComponent() {
        }
        /**
         * @return {?}
         */
        PocContaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PocContaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'poc-poc-conta',
                        template: "\n  <p>\n    Aplica\u00E7\u00E3o de Conta Corrente\n  </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        PocContaComponent.ctorParameters = function () { return []; };
        return PocContaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PocContaModule = /** @class */ (function () {
        function PocContaModule() {
        }
        PocContaModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [PocContaComponent],
                        imports: [
                            router.RouterModule.forChild([{ path: '', component: PocContaComponent }])
                        ],
                        exports: [router.RouterModule, PocContaComponent]
                    },] }
        ];
        return PocContaModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.PocContaService = PocContaService;
    exports.PocContaComponent = PocContaComponent;
    exports.PocContaModule = PocContaModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=poc-conta.umd.js.map