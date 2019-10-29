import { IShape } from "./IShape";
import Point2D from "./point2d";

export default (shapes: IShape[]) => {
    const arr = [];
    shapes.forEach(item => arr.push(...item.points))
    const x = arr.map(item => item.x).sort((a: number, b: number) => a - b);
    const y = arr.map(item => item.y).sort((a: number, b: number) => a - b);
    const xMin = x[0];
    const yMin = y[0];
    const xMax = x[x.length - 1];
    const yMax = y[y.length - 1];
    const height = yMax - yMin;
    const weight = xMax - xMin;

    return { yMax, yMin, height, weight, xMin, xMax };
}

