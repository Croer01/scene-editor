/**
 * Created by Adria on 20/08/2016.
 */
import {NgModule} from '@angular/core';
import {NgModuleMetadataType} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent}  from './app.component';

@NgModule(<NgModuleMetadataType>{
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
