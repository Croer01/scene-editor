/**
 * Created by Adria on 21/08/2016.
 */
import {Component, OnDestroy} from '@angular/core';

import {Subscription} from "rxjs/Subscription";
import {InspectorService} from "./index";

@Component({
    selector: 'inspector-components',
    template: `<div>components of {{target?.name}}</div>
<generic-component *ngFor="let component of target?.components" [component]="component"></generic-component>`
})
export class InspectorComponentsComponent implements OnDestroy {
    private target;
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