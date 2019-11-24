import { observable, action, configure, toJS } from "mobx";

import { Group } from "../models/Group";
import rand from "../models/rand";
import uuid from "../models/uuid";
import { ShapeCollection } from "../models/shapes/ShapeCollection";
import { UniversalShape } from "../models/UniversalShape";


configure({ enforceActions: 'observed' })

export class ShapeStore {
    @observable group: Group;
    @observable tempGroup: Group;


    constructor() {
        this.group = observable(new Group(1));
        this.tempGroup = observable(new Group(2))
    }

    @action createLine = () => {
        if (this.tempGroup.active.get())
            this.tempGroup.children.createItem(uuid());
        else
            this.group.children.createItem(uuid());
    }
    @action activate(id: number) {
        if (id === this.group.id) {
            this.group.activate(!this.group.active.get());
        }
        if (id === this.tempGroup.id) {
            this.tempGroup.activate(!this.tempGroup.active.get());
        }
    }

    @action focus = (shape: UniversalShape) => {
        console.log('focus')
        this.focusInGroup(shape.uuid, this.group);
        this.group.children.activateItem(shape.uuid);
        this.tempGroup.children.activateItem(shape.uuid);
    }

    @action public focusInGroup = (uuid: string, ...groups: Group[]) => {
        let haveChildren = [];

        for (let i = 0; i < groups.length; i++) {
            if (groups[i].groups.length > 0) {
                haveChildren.push(groups[i].groups);
            }
            console.log(groups[i].children);
            groups[i].children.activateItem(uuid);
        }
        if (haveChildren.length > 0)
            this.focusInGroup(uuid, ...haveChildren);
    }
    @action removeActivated() {
        const group = this.findActiveGroup(...this.group.groups);
        if (group) {
            this.group.children.createItem("flex");
            //todo добавить
        }
    }

    @action removeLine = () => {

        const collections = [this.group.children, this.tempGroup.children];
        console.log(collections);
        collections.forEach(item => item.removeActivated())
    }
    @action addGroup = (shape: UniversalShape) => {
        this.group.children.removeItem(shape.uuid);
        this.tempGroup.children.removeItem(shape.uuid);


        if (this.tempGroup.active.get()) {
            this.tempGroup.children.addItem(shape);
            console.log('added');
        }
        else {
            this.group.children.addItem(shape);
            console.log('added');
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
    public removeInGroup = (uuid: string, ...groups: Group[]) => {
        let haveChildren = [];

        for (let i = 0; i < groups.length; i++) {
            if (groups[i].groups.length > 0) {
                haveChildren.push(groups[i].groups);
            }
            console.log(groups[i].children);
            groups[i].children.removeItem(uuid);
        }
        if (haveChildren.length > 0)
            this.removeInGroup(uuid, ...haveChildren);
    }

}

export const gachiStore = new ShapeStore()
