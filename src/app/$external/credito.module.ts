import { NgModule } from '@angular/core';
import { PocCreditoModule } from 'poc-credito';

@NgModule({ imports: [PocCreditoModule] })
export class CreditoModule {

    constructor() {
        console.log('chamou credito');
    }
}
