(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('poc-credito', ['exports', '@angular/core', '@angular/router'], factory) :
    (factory((global['poc-credito'] = {}),global.ng.core,global.ng.router));
}(this, (function (exports,i0,router) { 'use strict';

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
                        template: "\n    <p>\n      Aplica\u00E7\u00E3o de Cr\u00E9dito Pessoal\n    </p>\n  "
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
    var PocCreditoModule = /** @class */ (function () {
        function PocCreditoModule() {
        }
        PocCreditoModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [PocCreditoComponent],
                        imports: [router.RouterModule.forChild([{ path: '', component: PocCreditoComponent }])],
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

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=poc-credito.umd.js.map