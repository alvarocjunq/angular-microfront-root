import { NgModule } from '@angular/core';
import { PocContaModule } from 'poc-conta';

@NgModule({ imports: [PocContaModule] })
export class ContaModule {

    constructor() {
        console.log('chamou conta');
    }

}



