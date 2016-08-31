/**
 * Created by Adria on 21/08/2016.
 */
import {Component, OnDestroy} from '@angular/core';

import {Subscription} from "rxjs/Subscription";
import {InspectorService} from "./index";
import {WorldElement} from "../scene-data";

@Component({
    selector: 'inspector-components',
    template: `<div>components of {{target?.name}}</div>
<div *ngFor="let component of target?.components" [ngSwitch]="component.className">
	<transform2D-component *ngSwitchCase="'Transform2D'" [component]="component"></transform2D-component>
	<generic-component *ngSwitchDefault [component]="component"></generic-component>
</div>`
})
export class InspectorComponentsComponent implements OnDestroy {
    private target: WorldElement;
    private subscription:Subscription;

    constructor(private inspector:InspectorService) {
        this.subscription = this.inspector.targetObserver.subscribe(target => {
            this.target = target
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}