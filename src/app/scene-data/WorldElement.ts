import {WorldElementData} from "./interfaces/WorldElementData";
import {WorldElementComponent} from "./Component";
import {ComponentData} from "./interfaces/ComponentsData";
/**
 * Created by Adria on 22/08/2016.
 */

export class WorldElement {
    private _name:string;
    private _components:WorldElementComponent[];

    constructor(elementData:WorldElementData) {
        this._name = elementData.name;

        this._components = [];
        elementData.components.forEach((componentData)=> {
            this._components.push(new WorldElementComponent(componentData));
        });
    }


    get name():string {
        return this._name;
    }

    get components():WorldElementComponent[] {
        return this._components;
    }
}