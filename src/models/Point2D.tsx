import {PAGE_SIZE} from "../consts/consts";
import React from 'react';
import ShapeItemPoint from "../components/list/item/point/ShapeItemPoint";

export default class Point2D {
    private selected: boolean;

    constructor(public x: number, public y: number) {
        this.selected = false;
    }

    set setSelected(status: boolean) {
        this.selected = status;
    }

    get getX() {
        return this.x - (PAGE_SIZE.WIDTH / 2);
    }

    get getY() {
        return -1 * (this.y - (PAGE_SIZE.HEIGHT / 2));
    }

    public static centerPoint = (start: Point2D, end: Point2D) =>
        new Point2D((start.x + end.x) / 2, (start.y + end.y) / 2)

    public equal = (point: Point2D) => point.x == point.x && point.y === point.y;
    public lenBetween = (point: Point2D) => Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2))
    public minus = (point: Point2D) => {
        this.x -= point.x;
        this.y -= point.y;
        return this;
    }
    public plus = (point: Point2D) => {
        this.x += point.x;
        this.y += point.y;
        return this;
    }
    public static subtraction = (f: Point2D, s: Point2D) => new Point2D(f.x - s.x, f.y - s.y);

    public get stringify() {
        return `${this.x} ${this.y}`;
    }

    public get Component() {
        return <ShapeItemPoint point={this}/>
    }

    public static sort(a: Point2D, b: Point2D) {
        if (a.x > b.x) {
            if (a.y > b.y) {
                return 1;
            } else {

            }
        }
    }


}

