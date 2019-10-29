import React, { Component } from 'react'
import WorkspaceGrid from './grid/WorkspaceGrid'
import ShapeContainer from '../shape/container/ShapeContainer';
import { PAGE_SIZE } from '../../consts/consts';

export default class Workspace extends Component {
    render() {
        const height = PAGE_SIZE.HEIGHT, width = PAGE_SIZE.WIDTH;
        const enabledGrid = true;
        return (
            <svg width={width} height={height}>
                {enabledGrid && <WorkspaceGrid height={height} width={width} size={10} />}
                {this.props.children}
            </svg>
        )
    }
}
