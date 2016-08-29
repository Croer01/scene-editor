/**
 * Created by Adria on 25/08/2016.
 */
import {Component, Input, Inject} from '@angular/core';
import {WorldElement} from "../scene-data/WorldElement";
import {InspectorService} from "./inspector.service";

@Component({
    selector: 'generic-component',
    template: `<div>{{component.name}}</div>`
})
export class GenericComponentComponent {
    @Input() private component: WorldElement;
}