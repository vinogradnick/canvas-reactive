import { action, computed, observable } from "mobx";
import { UniversalShape } from "../UniversalShape";
import React from 'react';
import Point2D from "../Point2D";
import { PAGE_SIZE } from "../../consts/consts";
import rand from "../rand";
import uuid from "../uuid";

export class ShapeCollection {
    @observable selected: boolean;
    @observable shapes: UniversalShape[];

    constructor(shapes: UniversalShape[] = []) {
        this.shapes = observable(shapes);
    }


    @action activateItem = (uuid: string) => {

        const item = this.findByUuid(uuid);
        if (item) {
            console.log('activated');
            item.activate();
        }

    }
    @action removeItem = (id: string) => {

        this.shapes = this.shapes.filter(({ uuid }) => uuid !== id);

    }
    @action createItem = (uuid: string) => {


        // @ts-ignore
        this.shapes.push(new UniversalShape(
            [
                new Point2D(rand(100), rand(100)),
                new Point2D(rand(PAGE_SIZE.WIDTH), rand(PAGE_SIZE.HEIGHT))
            ],
            uuid,
            "#" + ((1 << 24) * Math.random() | 0).toString(16),
        ));

    }
    @action addItem = (shape) => this.shapes.push(shape);
    public findByUuid = (id: string) =>
        this.shapes.find(({ uuid }) => id === uuid)

    get hasActivated() {
        const item = this.shapes.filter(item => item.selected);
        return item;
    }
    @action removeActivated() {
        this.shapes = this.shapes.filter(item => !item.selected.get());
    }

    get maxAndMinPoint() {
        const min = this.shapes.map((item: UniversalShape) => item.points);
        const arrShapes = [];
        for (let i = 0; i < min.length; i++) {
            arrShapes.push(...min[i]);
        }
        let minX = PAGE_SIZE.WIDTH;
        let minY = PAGE_SIZE.HEIGHT;
        let maxX = 0;
        let maxY = 0;
        for (let j = 0; j < arrShapes.length; j++) {
            if (arrShapes[j].x > maxX) {
                maxX = arrShapes[j].x;
            }
            if (arrShapes[j].y > maxY) {
                maxY = arrShapes[j].y;
            }
            if (arrShapes[j].x < minX) {
                minX = arrShapes[j].x;
            }
            if (arrShapes[j].y < minY) {
                minY = arrShapes[j].y;
            }
        }
        return { minX, minY, maxX, maxY };

    }


    public get Component() {
        return <>{this.shapes.map(item => item.Component)}</>;
    }

    public get ListViewComponent() {
        return (<ul>
            {this.shapes.map(item => (<li key={uuid()}>
                {item.ListViewComponent}
            </li>))}
        </ul>)
    }
}
