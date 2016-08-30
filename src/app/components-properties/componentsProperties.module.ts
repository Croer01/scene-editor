/**
 * Created by Adria on 30/08/2016.
 */
import {NgModule} from '@angular/core';
import {NgModuleMetadataType} from '@angular/core';

import {StringPropertyComponent} from "./index";

@NgModule(<NgModuleMetadataType>{
    declarations: [
        StringPropertyComponent
    ]
})
export class ComponentPropertiesModule {
}
