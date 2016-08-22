/**
 * Created by Adria on 21/08/2016.
 */
import {Component} from '@angular/core';
import {SceneLoader} from "../scene-data/scene-loader";
import {WorldElement} from "../scene-data/WorldElement";
import {Scene} from "../scene-data/Scene";

@Component({
    selector: 'inspector-elements',
    template: `<div *ngFor="let element of elements">{{element.name}}</div>`
})
export class InspectorElementsComponent {
    private elements:WorldElement[];

    constructor(private sceneLoader:SceneLoader) {
        sceneLoader.scene.then((scene)=> {
            this.elements = scene.elements;
        });
    }
}