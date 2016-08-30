/**
 * Created by Adria on 30/08/2016.
 */
import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'generic-component',
    template: `<div>{{property}}</div>`
})
export class StringPropertyComponent {
    @Input() private property:string;
}