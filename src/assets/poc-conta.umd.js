(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('poc-arquitetura'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('poc-conta', ['exports', '@angular/core', 'poc-arquitetura', '@angular/common'], factory) :
    (factory((global['poc-conta'] = {}),global.ng.core,global.pocArquitetura,global.ng.common));
}(this, (function (exports,i0,pocArquitetura,common) { 'use strict';

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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PocContaComponent = /** @class */ (function () {
        function PocContaComponent(contextService) {
            this.contextService = contextService;
        }
        /**
         * @return {?}
         */
        PocContaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.data = __assign({}, this.contextService.data);
            };
        PocContaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'poc-poc-conta',
                        template: "\n  <p>\n    Aplica\u00E7\u00E3o de Conta Corrente\n  </p>\n  <br>\n  <p>\n   Dados de Contexto: <br> {{data | json}}\n  </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        PocContaComponent.ctorParameters = function () {
            return [
                { type: pocArquitetura.ContextService }
            ];
        };
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
                        imports: [common.CommonModule, pocArquitetura.PocArquiteturaModule],
                        exports: [PocContaComponent]
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