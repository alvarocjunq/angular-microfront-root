(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/material/form-field'), require('@angular/material/grid-list'), require('@angular/material/button'), require('@angular/material/select'), require('@angular/material/input'), require('@angular/material/toolbar'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/material/progress-bar'), require('@angular/material/radio'), require('@angular/material/sidenav'), require('@angular/material/tabs'), require('@angular/material/core'), require('@angular/material/badge'), require('@angular/material/card'), require('@angular/material/table'), require('@angular/material/sort'), require('@angular/core'), require('poc-arquitetura'), require('rxjs/operators'), require('rxjs'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('poc-clientes', ['exports', '@angular/common', '@angular/material/form-field', '@angular/material/grid-list', '@angular/material/button', '@angular/material/select', '@angular/material/input', '@angular/material/toolbar', '@angular/material/icon', '@angular/material/list', '@angular/material/progress-bar', '@angular/material/radio', '@angular/material/sidenav', '@angular/material/tabs', '@angular/material/core', '@angular/material/badge', '@angular/material/card', '@angular/material/table', '@angular/material/sort', '@angular/core', 'poc-arquitetura', 'rxjs/operators', 'rxjs', '@angular/router'], factory) :
    (factory((global['poc-clientes'] = {}),global.ng.common,global.ng.material['form-field'],global.ng.material['grid-list'],global.ng.material.button,global.ng.material.select,global.ng.material.input,global.ng.material.toolbar,global.ng.material.icon,global.ng.material.list,global.ng.material['progress-bar'],global.ng.material.radio,global.ng.material.sidenav,global.ng.material.tabs,global.ng.material.core,global.ng.material.badge,global.ng.material.card,global.ng.material.table,global.ng.material.sort,global.ng.core,global.pocArquitetura,global.rxjs.operators,global.rxjs,global.ng.router));
}(this, (function (exports,common,formField,gridList,button,select,input,toolbar,icon,list,progressBar,radio,sidenav,tabs,core,badge,card,table,sort,i0,pocArquitetura,operators,rxjs,router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PocClientesService = /** @class */ (function () {
        function PocClientesService() {
            this.valueFilter$ = new rxjs.BehaviorSubject('');
        }
        /**
         * @return {?}
         */
        PocClientesService.prototype.getValue = /**
         * @return {?}
         */
            function () {
                return this.valueFilter$;
            };
        PocClientesService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        PocClientesService.ctorParameters = function () { return []; };
        /** @nocollapse */ PocClientesService.ngInjectableDef = i0.defineInjectable({ factory: function PocClientesService_Factory() { return new PocClientesService(); }, token: PocClientesService, providedIn: "root" });
        return PocClientesService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PocClientesComponent = /** @class */ (function () {
        function PocClientesComponent(clientesService) {
            this.clientesService = clientesService;
        }
        /**
         * @return {?}
         */
        PocClientesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                // this.clientesService.valueFilter = this.value;
            };
        /**
         * @return {?}
         */
        PocClientesComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.clientesService.valueFilter$.next(this.value);
            };
        PocClientesComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'poc-poc-clientes',
                        template: '<router-outlet name="poc-poc-clientes"></router-outlet>'
                    }] }
        ];
        /** @nocollapse */
        PocClientesComponent.ctorParameters = function () {
            return [
                { type: PocClientesService }
            ];
        };
        PocClientesComponent.propDecorators = {
            value: [{ type: i0.Input }]
        };
        return PocClientesComponent;
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
    /** @type {?} */
    var ELEMENT_DATA = [
        { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
        { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
        { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
        { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
        { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
        { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
        { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
        { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
        { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
        { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    ];
    var FichaComponent = /** @class */ (function () {
        function FichaComponent(contextService) {
            this.contextService = contextService;
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA;
        }
        /**
         * @return {?}
         */
        FichaComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log(this.contextService.data);
                this.person = __assign({}, this.contextService.data.dynamic);
                this.contextService.data$.subscribe(( /**
                 * @param {?} a
                 * @return {?}
                 */function (a) { return console.log('subss', a); }));
            };
        FichaComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'poc-ficha',
                        template: "<div class=\"ficha-box\">\n  <mat-card class=\"card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>{{person?.name}}</mat-card-title>\n      <mat-card-subtitle>{{person.updated | date}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n    <mat-card-content>\n      <p>\n        The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n        bred for hunting.\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>\n\n  <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\"> \n    <!-- Position Column -->\n    <ng-container matColumnDef=\"position\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n    </ng-container>\n  \n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n    </ng-container>\n  \n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"weight\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n    </ng-container>\n  \n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n    </ng-container>\n  \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>",
                        styles: [".example-header-image{background-image:url(https://material.angular.io/assets/img/examples/shiba1.jpg);background-size:cover}img{width:200px;margin-left:15px}.ficha-box{margin-top:10px;margin-left:10px;margin-right:10px}"]
                    }] }
        ];
        /** @nocollapse */
        FichaComponent.ctorParameters = function () {
            return [
                { type: pocArquitetura.ContextService }
            ];
        };
        return FichaComponent;
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
    var SearchListComponent = /** @class */ (function () {
        function SearchListComponent(contextService, clientesService, router$$1) {
            this.contextService = contextService;
            this.clientesService = clientesService;
            this.router = router$$1;
            this.persons = [
                { name: 'Alvaro Junqueira', updated: new Date('1/1/19') },
                { name: 'Joaquim Barbosa', updated: new Date('1/17/19') },
                { name: 'Rui Damas', updated: new Date('1/28/19') },
                { name: 'Rui Damas2', updated: new Date('1/28/19') },
                { name: 'Rui Damas3', updated: new Date('1/28/19') },
                { name: 'Rui Damas4', updated: new Date('1/28/19') },
                { name: 'Rui Damas5', updated: new Date('1/28/19') },
                { name: 'Rui Damas6', updated: new Date('1/28/19') },
                { name: 'Rui Damas7', updated: new Date('1/28/19') },
                { name: 'Rui Damas8', updated: new Date('1/28/19') },
                { name: 'Rui Damas9', updated: new Date('1/28/19') },
                { name: 'Rui Damas10', updated: new Date('1/28/19') },
                { name: 'Rui Damas11', updated: new Date('1/28/19') },
                { name: 'Rui Damas12', updated: new Date('1/28/19') },
                { name: 'Rui Damas13', updated: new Date('1/28/19') },
                { name: 'Rui Damas14', updated: new Date('1/28/19') },
                { name: 'Rui Damas15', updated: new Date('1/28/19') },
                { name: 'Pablo Martinez', updated: new Date('1/28/19') },
            ];
            this.unsubscribe = new rxjs.Subject();
        }
        /**
         * @return {?}
         */
        SearchListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.list = this.persons;
                this.clientesService.getValue()
                    .pipe(operators.takeUntil(this.unsubscribe))
                    .subscribe(( /**
             * @param {?} value
             * @return {?}
             */function (value) {
                    _this.filter(value);
                    _this.value = value;
                }));
            };
        /**
         * @param {?} person
         * @return {?}
         */
        SearchListComponent.prototype.onClickPerson = /**
         * @param {?} person
         * @return {?}
         */
            function (person) {
                this.contextService.setData(person);
                this.router.navigate([{ outlets: { 'poc-poc-clientes': 'poc-poc-clientes/ficha' } }], { skipLocationChange: true });
            };
        /**
         * @private
         * @param {?} value
         * @return {?}
         */
        SearchListComponent.prototype.filter = /**
         * @private
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (!value.trim()) {
                    if (this.list) {
                        this.persons = this.list;
                    }
                    return;
                }
                if (!this.list) {
                    return;
                }
                this.persons = this.list.filter(( /**
                 * @param {?} person
                 * @return {?}
                 */function (person) { return person.name.toLowerCase().indexOf(value.toLowerCase()) > -1; }));
            };
        /**
         * @return {?}
         */
        SearchListComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.unsubscribe.next();
                this.unsubscribe.complete();
            };
        SearchListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'poc-search-list',
                        template: "<div class=\"box\">\n  <h3>\n    Resultado da busca por: {{value}}\n  </h3>\n\n  <mat-list>\n    <mat-list-item class=\"item\" *ngFor=\"let person of persons\" (click)=\"onClickPerson(person)\">\n      <h4 mat-line>{{person.name}}</h4><br>\n      <p mat-line><b>Atualizado em:</b> {{person.updated | date}} </p>\n      <mat-divider></mat-divider>\n    </mat-list-item>\n  </mat-list>\n</div>",
                        styles: [".item{background-color:#fff}mat-list-item{cursor:pointer}.h3{padding:15px}.box{padding-top:10px;padding-left:10px;padding-right:10px}"]
                    }] }
        ];
        /** @nocollapse */
        SearchListComponent.ctorParameters = function () {
            return [
                { type: pocArquitetura.ContextService },
                { type: PocClientesService },
                { type: router.Router }
            ];
        };
        return SearchListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var routes = [
        { path: 'home', children: [{ path: '', component: SearchListComponent, outlet: 'poc-poc-clientes' }] },
        { path: 'ficha', children: [{ path: '', component: FichaComponent, outlet: 'poc-poc-clientes' }] }
    ];
    var PocClientesModule = /** @class */ (function () {
        function PocClientesModule() {
        }
        PocClientesModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [PocClientesComponent, SearchListComponent, FichaComponent],
                        imports: [
                            MaterialModule,
                            router.RouterModule.forChild(routes),
                            common.CommonModule
                        ],
                        exports: [PocClientesComponent],
                    },] }
        ];
        return PocClientesModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.PocClientesService = PocClientesService;
    exports.PocClientesComponent = PocClientesComponent;
    exports.PocClientesModule = PocClientesModule;
    exports.ɵb = FichaComponent;
    exports.ɵc = MaterialModule;
    exports.ɵa = SearchListComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=poc-clientes.umd.js.map