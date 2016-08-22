/**
 * Created by Adria on 20/08/2016.
 */
import electron = require('electron');
import {Component} from '@angular/core';
const {ipcRenderer} = electron;

@Component({
    selector: 'my-app',
    template: `<div class="container-fluid">
	<div class="row">
		<main-content class="col-xs-9"></main-content>
		<inspector class="col-xs-3"></inspector>
	</div>
</div>`
})
export class AppComponent {
    constructor() {
        ipcRenderer.on('scene-load-success', (event, arg) => {
            console.log(arg)
        });
    }
}