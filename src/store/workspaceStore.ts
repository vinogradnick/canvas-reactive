import { observable, action } from 'mobx';
import Point2D from '../models/point2d';

export class WorkspaceStore {
    @observable mousePoint: Point2D;
    constructor() {
        this.mousePoint = observable(new Point2D(0, 0));

    }
    @action set setPoint(value: Point2D) {
        this.mousePoint = value;
    }
}