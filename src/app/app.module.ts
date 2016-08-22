/**
 * Created by Adria on 20/08/2016.
 */
import {NgModule} from '@angular/core';
import {NgModuleMetadataType} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing} from './app.routing';

import {SceneLoader} from "./scene-data/scene-loader";
import {AppRootComponent}  from './app.component';
import {MainContentComponent} from "./main-content.component";
import {InspectorComponentsComponent} from "./inspectors/inspector-components.component";
import {InspectorElementsComponent} from "./inspectors/inspector-elements.component";
import {SceneEditorComponent} from "./scene-editor/scene-editor.component";
import {EmptyEditorComponent} from "./scene-editor/empty-editor.component";

@NgModule(<NgModuleMetadataType>{
    imports: [
        BrowserModule,
        routing
    ],
    providers: [SceneLoader],
    declarations: [
        AppRootComponent,
        SceneEditorComponent,
        EmptyEditorComponent,
        MainContentComponent,
        InspectorComponentsComponent,
        InspectorElementsComponent
    ],
    bootstrap: [AppRootComponent]
})
export class AppModule {
}
