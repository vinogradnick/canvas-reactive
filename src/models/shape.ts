import Point2D from "./point2d";
import { ShapeTypes } from "./ShapeTypes";
import uuid from "./uuid";
import rand from "./rand";
import { PAGE_SIZE } from "../consts/consts";

const randomHsl = () => `hsla(${Math.random() * 360}, 100%, 50%, 1)`
export function shapeGenerator() {
    return {
        uuid: uuid(),
        type: ShapeTypes.LINE,
        points: [new Point2D(rand(100), rand(100)), new Point2D(rand(PAGE_SIZE.WIDTH - 100), rand(PAGE_SIZE.HEIGHT - 100))],
        color: randomHsl(),
        strokeWidth: 5,
        selected: false,
        groups: []
    }
}
