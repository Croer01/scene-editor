/**
 * Created by Adria on 20/08/2016.
 */
import {Component} from '@angular/core';
import {SceneLoader} from "../scene-data/scene-loader";

@Component({
    selector: 'scene-editor',
    templateUrl: 'app/scene-editor/scene-editor.component.tmpl.html'
})
export class SceneEditorComponent {
    constructor(private sceneLoader: SceneLoader) {
       
    }
}