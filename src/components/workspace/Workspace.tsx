import React, {Component} from 'react'
import WorkspaceGrid from './grid/WorkspaceGrid'
import ShapeContainer from '../shape/container/ShapeContainer';
import {PAGE_SIZE} from '../../consts/consts';
import {gachiStore} from '../../store/shapeStore';
import Point2D from '../../models/Point2D';
import {observer} from 'mobx-react';
import {workspaceStore} from "../../store/workspaceStore";

@observer
export default class Workspace extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.keyDown);
        document.addEventListener('keyup', this.keyUp);
    }

    public keyDown = (e: any) => {
        console.log('flex-eboq')


    }
    public keyUp = (e: any) => {

        // gachiStore.keyPressGroup.set(false);

    }

    render() {
        const height = PAGE_SIZE.HEIGHT, width = PAGE_SIZE.WIDTH;
        const enabledGrid = true;
        return (
            <svg
                className="svg-container"
                viewBox={`0 0 ${width} ${height}`}
                width={width}
                height={height}
                onMouseMove={e => workspaceStore.move(new Point2D(e.clientX, e.clientY))}
            >
                {enabledGrid &&
                <WorkspaceGrid height={height} width={width} size={10}/>}
                {this.props.children}
            </svg>
        )
    }
}
