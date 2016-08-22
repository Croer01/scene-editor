/**
 * Created by Adria on 22/08/2016.
 */
import {Route, Routes, RouterModule} from '@angular/router';
import {SceneEditorComponent} from "./scene-editor/scene-editor.component";
import {EmptyEditorComponent} from "./scene-editor/empty-editor.component";


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