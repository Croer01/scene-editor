/**
 * Created by Adria on 29/08/2016.
 */
import {
    Component,
    Input,
    OnInit,
    ViewContainerRef,
    ComponentResolver
} from '@angular/core';
import {WorldElement} from "../scene-data";
import {StringPropertyComponent} from "../components-properties";

@Component({
    selector: 'generic-component',
    template: `<div>Parent element{{component.name}}</div>`
})
export class GenericComponentComponent implements OnInit {
    @Input() private component:WorldElement;
    private propertiesTypes:any[];

    constructor(private viewContainerRef:ViewContainerRef, private componentResolver:ComponentResolver) {
        this.propertiesTypes = [
            StringPropertyComponent
        ];
    }

    ngOnInit():void {
        this.componentResolver.resolveComponent(this.propertiesTypes[0]).then((factory) => {
            var componentRef = this.viewContainerRef.createComponent(factory);
            componentRef.instance.property = this.component.name;
        });
    }
}