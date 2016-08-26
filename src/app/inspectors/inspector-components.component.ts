/**
 * Created by Adria on 21/08/2016.
 */
import {Component, OnDestroy} from '@angular/core';

import {InspectorService} from "./inspector.service";
import {Subscription} from "rxjs/Subscription";

@Component({
    selector: 'inspector-components',
    template: `<div>components of {{target?.name}}</div>`
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