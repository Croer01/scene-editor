/**
 * Created by Adria on 29/08/2016.
 */
import {
    Component,
    ComponentMetadataType,
    Input,
    OnInit,
    ViewChild,
    ViewContainerRef,
    ComponentFactoryResolver
} from '@angular/core';
import {WorldElementComponent} from "../scene-data";
import {StringPropertyComponent} from "../components-properties";

@Component(<ComponentMetadataType>{
    selector: 'generic-component',
    entryComponents:[StringPropertyComponent],
    template: `<div #propertiesView></div>`
})
export class GenericComponentComponent implements OnInit {
    @ViewChild('propertiesView', {read: ViewContainerRef}) private propertiesView : ViewContainerRef;
    @Input() private component:WorldElementComponent;
    private propertiesTypes:any[];

    constructor(private componentResolver:ComponentFactoryResolver) {
        this.propertiesTypes = [
            StringPropertyComponent
        ];
    }

    ngOnInit():void {
        let factory = this.componentResolver.resolveComponentFactory(this.propertiesTypes[0]);
        let componentRef = this.propertiesView.createComponent(factory);
        componentRef.instance["property"] = this.component.name;

    }
}