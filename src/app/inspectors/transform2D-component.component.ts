/**
 * Created by Adria on 31/08/2016.
 */
import {
    Component,
    ComponentMetadataType,
    Input
} from '@angular/core';
import {WorldElementComponent} from "../scene-data";
import {StringPropertyComponent} from "../components-properties";

@Component(<ComponentMetadataType>{
    selector: 'transform2D-component',
    entryComponents:[StringPropertyComponent],
    template: `this is and osome transform = <string-property [(property)]="component.name"></string-property>`
})
export class Transfrom2DComponentComponent {
    @Input() private component:WorldElementComponent;
}