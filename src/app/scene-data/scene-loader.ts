/**
 * Created by Adria on 22/08/2016.
 */
import {Injectable} from '@angular/core';
import electron = require('electron');
import {Scene} from "./Scene";
const {ipcRenderer} = electron;

@Injectable()
export class SceneLoader {
    private promise:Promise<Scene>;

    constructor() {
        this.promise = new Promise((resolve, reject)=> {
            ipcRenderer.on('scene-load-success', (event, sceneData) => {
                resolve(new Scene(sceneData));
            });
            ipcRenderer.on('scene-load-fail', (event, error) => reject(error));
        });
    }

    get scene():Promise<Scene> {
        return this.promise;
    }
}