/**
 * Created by Adria on 20/08/2016.
 */
import {Component} from '@angular/core';
import {SceneLoader} from "../scene-data";

@Component({
    selector: 'empty-editor',
    template: `
        <h1>Welcome!</h1>
        <p>go to <b>File > Load</b> to start edit a scene.</p>
    `
})
export class EmptyEditorComponent {
    //trick to create service in application load
    constructor(sceneLoader:SceneLoader){}
}