/**
 * Created by Adria on 30/08/2016.
 */
import {NgModule,NgModuleMetadataType} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StringPropertyComponent} from "../components-properties";

@NgModule(<NgModuleMetadataType>{
    imports:[
        CommonModule
    ],
    exports:[
        StringPropertyComponent
    ],
    declarations: [
        StringPropertyComponent
    ]
})
export class ComponentPropertiesModule {
}
