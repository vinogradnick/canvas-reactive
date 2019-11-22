import { action, computed, IObservableValue, observable } from "mobx";
import ShapeGroup from "../components/shape/group/ShapeGroup";
import React from 'react';
import { ShapeCollection } from "./shapes/ShapeCollection";
import Point2D from './Point2D';
import { UniversalShape } from "./UniversalShape";
import uuid from "./uuid";
import { PAGE_SIZE } from "../consts/consts";
import { gachiStore } from "../store/shapeStore";

interface ICoorder {
    maxX: number;
    minX: number;
    maxY: number;
    minY: number;
}

export class Group {
    @observable point: Point2D;
    @observable active: IObservableValue<boolean>;
    @observable groups: Array<Group>;
    @observable children: ShapeCollection;
    @observable translater: IObservableValue<string>;

    constructor(public id: number, private parent?: Group) {
        this.point = new Point2D(0, 0);

        this.children = new ShapeCollection();
        this.translater = observable.box("");
        this.active = observable.box(false);
        this.groups = observable([]);
    }

    @computed get centerFigure() {
        const { maxX, minX, maxY, minY } = this.children.maxAndMinPoint;
        const avX = ((maxX - minX) / 2) + minX;
        const avY = ((maxY - minY) / 2) + minY;
        return new Point2D(avX, avY);
    }

    @computed get groupCoord() {
        return this.children.maxAndMinPoint;

    }

    get maxAndMinPoint() {
        if (this.groups.length === 0) {
            return this.groupCoord;
        } else {
            const min = this.groups.map((item: Group) => item.maxAndMinPoint);
            const arrShapes: ICoorder[] = [];
            for (let i = 0; i < min.length; i++) {
                arrShapes.push(min[i]);
            }
            let minX = PAGE_SIZE.WIDTH;
            let minY = PAGE_SIZE.HEIGHT;
            let maxX = 0;
            let maxY = 0;
            for (let j = 0; j < arrShapes.length; j++) {
                if (arrShapes[j].maxX > maxX) {
                    maxX = arrShapes[j].maxX;
                }
                if (arrShapes[j].maxY > maxY) {
                    maxY = arrShapes[j].maxY;
                }
                if (arrShapes[j].minX < minX) {
                    minX = arrShapes[j].minX;
                }
                if (arrShapes[j].minY < minY) {
                    minY = arrShapes[j].minY;
                }
            }
            return { minX, minY, maxX, maxY };
        }


    }


    @computed get centerGroups() {
        console.log(this.maxAndMinPoint);
        return this.maxAndMinPoint;

    }

    @computed get ultraCenter() {
        const { maxX, minX, maxY, minY } = this.centerGroups;

        const avX = ((maxX - minX) / 2) + minX;
        const avY = ((maxY - minY) / 2) + minY;
        return new Point2D(avX, avY);
    }


    @action activate(status: boolean) {
        this.active.set(status);
    }

    @action movePoint = (point: Point2D) =>
        this.point = point;

    @action move = (point: Point2D) => {

        const delta = Point2D.subtraction(this.centerFigure, point);
        for (let i = 0; i < this.children.shapes.length; i++) {
            const item = this.children.shapes[i];
            item.points = item.points.map(p => p.minus(delta));
        }
    }

    @action find() {

    }


    @action destroy = () => {
        if (this.parent) {
            this.parent.groups = this.groups;
            this.parent.children.shapes.push(...this.children.shapes);
        }

    }

    get translate() {
        console.log('update computed');
        return `translate(${this.point.x} ${this.point.y})`;
    }


    public get Component() {


        return (
            <ShapeGroup key={this.id} group={this}>
                <>
                    {this.groups && this.groups.map(item => item.Component)}
                    {this.children && this.children.Component}
                </>
            </ShapeGroup>)
    }
    @action public activateGroup() {
        this.activate(!this.active.get());
        console.log(this.active.get())
    }

    public get ListViewComponent() {
        return (
            <ul key={uuid()}>
                <span style={{ backgroundColor: this.active.get() ? 'red' : '' }}
                    onClick={e => gachiStore.activate(this.id)}>{this.id} {this.centerFigure.getX} {this.centerFigure.getY}</span>
                {this.groups && this.groups.map(item => item.ListViewComponent)}
                {this.children && this.children.ListViewComponent}
            </ul>
        )
    }
}
