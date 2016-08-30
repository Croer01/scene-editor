/**
 * Created by Adria on 21/08/2016.
 */
import {Component, OnInit, OnDestroy, NgZone} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {
    SceneLoader,
    WorldElement
} from "../scene-data";
import {InspectorService} from "./index";

@Component({
    selector: 'inspector-elements',
    template: `<element-selector *ngFor="let element of elements" [element]="element"></element-selector>`
})
export class InspectorElementsComponent implements OnInit, OnDestroy {

    private elements:WorldElement[];
    private subscription:Subscription;

    constructor(private ngZone:NgZone,
                private sceneLoader:SceneLoader,
                private inspector:InspectorService) {
    }

    ngOnInit():void {
        this.subscription = this.sceneLoader.sceneObserver.subscribe(scene => {
            //force angular to check changes for "ngFor" related array (Beta Issue?)
            this.ngZone.run(() => this.elements = scene.elements);
            this.inspector.setTarget(null);
        });
    }

    ngOnDestroy():void {
        this.subscription.unsubscribe();
    }
}