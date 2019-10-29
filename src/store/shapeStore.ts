import { IGroup } from "../models/IGroup";
import { observable, action } from "mobx";
import { shapeGenerator } from "../models/shape";
import { IShape } from "../models/IShape";

const shape = shapeGenerator();
export class ShapeStore {
    @observable layer: IGroup;
    @observable shapes: IShape[];

    constructor() {
        this.layer = observable({

            name: 'page', id: 1, active: false, groups: [
                {
                    name: 'page', id: 2, active: false, shapes: [
                        shape
                    ],
                    groups: [
                        {
                            name: 'page', id: 2, active: false, shapes: [
                                shape
                            ]
                        }
                    ]
                }
            ]
        });
        this.shapes = observable(new Array(4).fill(null).map(shapeGenerator))
    }
    @action setActive(id: number) {

    }

    recurrentSearch(id: number, group: IGroup, level: number) {

    }

}
export const gachiStore = new ShapeStore()
