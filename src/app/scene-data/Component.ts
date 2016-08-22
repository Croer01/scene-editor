import {ComponentData} from "./interfaces/ComponentsData";
/**
 * Created by Adria on 22/08/2016.
 */

export class Component {
    private name:string;

    constructor(componentData:ComponentData) {
        this.name = componentData.name;
    }
}