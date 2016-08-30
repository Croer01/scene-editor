/**
 * Created by Adria on 22/08/2016.
 */
import {Route, Routes, RouterModule} from '@angular/router';
import {
    SceneEditorComponent,
    EmptyEditorComponent
} from "./scene-editor";


const appRoutes:Routes = [
    <Route>{
        path: '',
        component: EmptyEditorComponent
    },
    <Route>{
        path: 'scene-editor',
        component: SceneEditorComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);