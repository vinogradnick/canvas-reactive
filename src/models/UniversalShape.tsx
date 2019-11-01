import Point2D from "./Point2D";
import * as React from "react";
import ShapeLine from "../components/shape/line/ShapeLine";
import {action, observable} from "mobx";
import ShapeItemLine from "../components/list/item/line/ShapeItemLine";

export class UniversalShape {
    @observable public selected: boolean;

    @observable public points: Point2D[];

    constructor(
        points: Point2D[],
        public uuid: string,
        selected: boolean,
        public color: string,
        public strokeWidth: number,
        private select: (uuid: string) => void,
        // private moveShape: (uuid: string, points: Point2d[]) => void,
    ) {
        this.points = points;
        this.selected = selected;

    }


    @action move = (points: Point2D[]) => {
        if (this.selected) {

            this.points = points;
            // this.moveShape(this.uuid, points);
        }

    }
    @action activate = () => {
        this.selected = !this.selected;
    }


    get Component() {
        switch (this.points.length) {
            case 1:
                return null;
            case 2:
                return <ShapeLine key={this.uuid} shape={this}/>
            default:
                return <></>
        }

    }

    get ListViewComponent() {
        switch (this.points.length) {
            case 1:
                return null;
            case 2:
                return <ShapeItemLine key={this.uuid + "F"} points={this.points}/>
            default:
                return null;
        }
    }

    public joinPoints = () => this.points.map(item => item.stringify).join(" ")
}

