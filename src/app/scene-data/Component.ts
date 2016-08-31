import {ComponentData} from "./shared";
/**
 * Created by Adria on 22/08/2016.
 */

export class WorldElementComponent {
    private _name:string;
    private _className:string;

    constructor(componentData:ComponentData) {
        this._name = componentData.name;
        this._className = componentData.className;
    }

    get name():string {
        return this._name;
    }

    set name(value:string) {
        this._name = value;
    }
    
    get className():string {
        return this._className;
    }

    set className(value:string) {
        this._className = value;
    }
}