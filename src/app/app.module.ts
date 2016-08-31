/**
 * Created by Adria on 20/08/2016.
 */
import {NgModule,NgModuleMetadataType} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {routing} from './app.routing';

import {
    InspectorService,
    InspectorComponentsComponent,
    InspectorElementsComponent,
    ElementSelectorComponent,
    GenericComponentComponent,
    Transfrom2DComponentComponent
} from "./inspectors";
import {
    SceneEditorComponent,
    EmptyEditorComponent
} from "./scene-editor";
import {SceneLoader} from "./scene-data";
import {AppRootComponent} from "./app.component";
import {MainContentComponent} from "./main-content.component";
import {ComponentPropertiesModule} from "./components-properties"


@NgModule(<NgModuleMetadataType>{
    imports: [
        BrowserModule,
        routing,
        ComponentPropertiesModule
    ],
    providers: [
        SceneLoader,
        InspectorService,
        Title
    ],
    declarations: [
        AppRootComponent,
        SceneEditorComponent,
        EmptyEditorComponent,
        MainContentComponent,
        InspectorComponentsComponent,
        InspectorElementsComponent,
        ElementSelectorComponent,
        GenericComponentComponent,
        Transfrom2DComponentComponent
    ],
    bootstrap: [AppRootComponent]
})
export class AppModule {
}
