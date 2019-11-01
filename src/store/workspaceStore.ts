import {observable, action, ObservableMap, IObservableValue, configure} from 'mobx';
import Point2D from '../models/Point2D';

configure({enforceActions: 'observed'})

export class WorkspaceStore {
    @observable mousePoint: IObservableValue<Point2D>;

    constructor() {
        this.mousePoint = observable.box(new Point2D(0, 0));

    }

    @action move(value: Point2D) {
        console.log('moved');
        this.mousePoint.set(value);
    }
}

export const workspaceStore = new WorkspaceStore();
