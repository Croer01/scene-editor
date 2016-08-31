/**
 * Created by Adria on 30/08/2016.
 */
import {
    Component,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'string-property',
    template: `<div>{{property}}</div>`
})
export class StringPropertyComponent {
    @Input() private property:string;
    @Output() private propertyChange:EventEmitter<string> = new EventEmitter<string>();
}