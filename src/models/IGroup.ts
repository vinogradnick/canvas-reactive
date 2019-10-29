import { IShape } from "./IShape";
export interface IGroup {
    id: number;
    name: string;
    active: boolean;

    shapes?: IShape[];
    groups?: IGroup[];
}
