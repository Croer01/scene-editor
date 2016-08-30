/**
 * Created by Adria on 22/08/2016.
 */
import {Injectable} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

import electron = require('electron');
import {Scene} from "./index";
const {ipcRenderer} = electron;

@Injectable()
export class SceneLoader {
    private sceneSource = new BehaviorSubject<Scene>(null);
    public sceneObserver = this.sceneSource.asObservable();

    constructor(private titleService:Title, router:Router) {
        ipcRenderer.on('scene-load-success', (event, loadData) => {
            this.titleService.setTitle(`Scene editor - ${loadData.filename}`);
            this.sceneSource.next(new Scene(loadData.sceneData));
            if (router.url !== '/scene-editor')
                router.navigate(['/scene-editor']);
        });
        // ipcRenderer.on('scene-load-fail', (event, error) => reject(error));
    }
}