import Point2D from "./point2d";
import rand from "./rand";

export default class Line {
    private selected: boolean;
    set isSelected(value: boolean) {
        this.selected = value;

    }
    get isSelected() {
        return this.selected;
    }
    constructor(public start: Point2D, public end: Point2D) {
        this.selected = false;

    }
    public static create(): Line {
        return new Line(new Point2D(rand(200), rand(400)), new Point2D(rand(200), rand(400)));
    }
}