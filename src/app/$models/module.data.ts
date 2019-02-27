import { ComponentRef } from '@angular/core';

export interface ModuleData {
    uid?: string;
    component?: ComponentRef<any>;
    path?: string;
    location?: string;
    moduleName?: string;
    tabName: string;
    registered?: boolean;
    selector?: string;
    selected?: boolean;
}
