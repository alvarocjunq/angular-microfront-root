import { ComponentRef } from '@angular/core';

export interface ModuleData {
    uid?: string;
    component?: ComponentRef<any>;
    path?: string;
    location?: string;
    moduleName?: string;
    tabName: string;
    selector?: string;
    selected?: boolean;
    canBeReopened: boolean;
    icon?: string;
    data?: any;
    isExternal: boolean;
}
