import { IGroup } from "../models/IGroup";
import { observable, action, configure, IObservableValue } from "mobx";
import { shapeGenerator } from "../models/shape";
import { IShape } from "../models/IShape";
import Point2D from "../models/point2d";


configure({ enforceActions: 'observed' })
const shape = shapeGenerator();
export class ShapeStore {
    static id = 1;
    @observable layer: IGroup;
    @observable key: IObservableValue<boolean>;
    @observable shapes: IShape[];
    @observable mousePosition: IObservableValue<Point2D>;
    @observable activeGroup: { shapes: IShape[], id: number }

    constructor() {
        // this.layer = observable({

        //     name: 'page', id: 1, active: false, groups: [
        //         {
        //             name: 'page', id: 2, active: false, shapes: [
        //                 shape
        //             ],
        //             groups: [
        //                 {
        //                     name: 'page', id: 2, active: false, shapes: [
        //                         shape
        //                     ]
        //                 }
        //             ]
        //         }
        //     ]
        // });
        this.shapes = observable([]);
        this.mousePosition = observable.box(new Point2D(0, 0));
        this.key = observable.box(false);
        this.activeGroup = observable({ id: 1, shapes: [] })
    }
    @action moveShape(uuid: string, points: Point2D[]) {

        const line = this.shapes.find(item => item.uuid === uuid);
        line.points = points;

    }
    public selectedObject() {
        const items = this.shapes.filter(({ uuid, selected }) => selected);
        return items.length > 0;
    }
    @action selectObject(uuid: string) {
        const item = this.shapes.find(item => item.uuid === uuid);
        item.selected = !item.selected;
    }
    @action createLine = () =>
        this.shapes.push(shapeGenerator())

    @action removeSelected = () =>
        this.shapes = this.shapes.filter(item => !item.selected)

    recurrentSearch(id: number, group: IGroup, level: number) {

    }
    @action addToGroup(uuid: string) {

        const item = this.shapes.find(item => item.uuid === uuid);
        const itemGroup = this.activeGroup.shapes.find(item => item.uuid === uuid);

        if (itemGroup !== null && itemGroup !== undefined) {
            this.activeGroup.shapes.push(item);
            this.shapes = this.shapes.filter(item => item.uuid !== uuid);
        }
        console.log(this.activeGroup);
    }
    @action destroyGroup() {
        this.shapes.push(...this.activeGroup.shapes);
    }
    @action moveGroup = (e: any) => {
        console.log('moved');
        // this.activeGroup.shapes.forEach(item => {
        //     item.
        // })
    }
    @action mouseMove = (point: Point2D) => {
        this.mousePosition.set(point);
    }
}
export const gachiStore = new ShapeStore()
