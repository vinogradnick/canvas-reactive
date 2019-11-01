import {observable, action, configure} from "mobx";

import {Group} from "../models/Group";
import rand from "../models/rand";
import uuid from "../models/uuid";
import {ShapeCollection} from "../models/shapes/ShapeCollection";


configure({enforceActions: 'observed'})

export class ShapeStore {
    @observable group: Group;
    @observable tempGroup: Group;

    constructor() {
        this.group = observable(new Group(1));
        this.tempGroup = observable(new Group(rand(10000)))
    }

    @action createLine = () => {

        const group = this.findActiveGroup(this.group);
        if (group) {
            this.tempGroup.children.createItem(uuid());
            console.log(this.group.groups);
            this.group.groups.unshift(this.tempGroup);
            //this.tempGroup.children=new ShapeCollection();

        }
    }

    @action removeLine = () => {

        const group = this.findActiveGroup(...this.group.groups);
        if (group) {
            this.group.children.createItem("flex");
            //todo добавить
        }
    }

    public findActiveGroup = (...groups: Group[]) => {
        let haveChildren = [];
        if (this.group.active) {
            return this.group;
        }
        for (let i = 0; i < groups.length; i++) {
            if (groups[i].active.get()) {
                return groups[i];
            } else if (groups[i].groups.length > 0) {
                haveChildren.push(groups[i].groups);
            }
        }
        return this.findActiveGroup(...haveChildren);
    }

}

export const gachiStore = new ShapeStore()
