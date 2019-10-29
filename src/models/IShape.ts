import Point2D from "./point2d";
import { ShapeTypes } from "./ShapeTypes";
export interface IShape {
    id?: number;
    uuid?: string;
    type: ShapeTypes;
    points: Point2D[];
    color: string;
    strokeWidth: number;
    selected: boolean;
    groups: number[];
}