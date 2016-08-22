/**
 * Created by Adria on 22/08/2016.
 */
import { Component } from '@angular/core';
import {SceneLoader} from "./scene-data/scene-loader";
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
})
export class AppRootComponent {
    constructor(sceneLoader: SceneLoader, router: Router) {
        sceneLoader.scene.then((scene)=> {
           router.navigate(['/scene-editor'])
        });
    }
}