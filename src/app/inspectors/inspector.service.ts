/**
 * Created by Adria on 25/08/2016.
 */
import {Injectable} from '@angular/core';
import { Subject }    from 'rxjs/Subject';

import {WorldElement} from "../scene-data/WorldElement";


@Injectable()
export class InspectorService {
    private targetSource = new Subject<WorldElement>();
    public targetObserver = this.targetSource.asObservable();

    setTarget(value:WorldElement) {
        this.targetSource.next(value);
    }

}