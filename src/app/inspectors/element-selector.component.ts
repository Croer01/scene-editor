/**
 * Created by Adria on 25/08/2016.
 */
import {Component, Input} from '@angular/core';
import {WorldElement} from "../scene-data";
import {InspectorService} from "./inspector.service";

@Component({
    selector: 'element-selector',
    template: `<button class="btn btn-default" type="submit" (click)="selecElement($event)">{{element.name}}</button>`
})
export class ElementSelectorComponent {
    @Input() private element: WorldElement;

    constructor(private inspector: InspectorService){}

    selecElement($event):void{
        this.inspector.setTarget(this.element);
    }
}