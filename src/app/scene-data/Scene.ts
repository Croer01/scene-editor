/**
 * Created by Adria on 22/08/2016.
 */
import {SceneData} from "./shared";
import {WorldElement} from "./index";

export class Scene {
    private _name:string;
    private _elements:WorldElement[];

    constructor(sceneData:SceneData) {
        this._name = sceneData.name;

        this._elements = [];
        sceneData.elements.forEach((elementData)=> {
            this._elements.push(new WorldElement(elementData));
        });
    }

    get name():string {
        return this._name;
    }

    get elements():WorldElement[] {
        return this._elements;
    }
}