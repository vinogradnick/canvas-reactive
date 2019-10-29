import React, { Component } from 'react'
import { ShapeStore } from '../../../store/shapeStore'
import ShapeGroup from '../group/ShapeGroup'


interface ShapeContainerProps {
    shapeStore: ShapeStore;
}
export default class ShapeContainer extends Component<ShapeContainerProps> {
    render() {
        return (
            <>
                <ShapeGroup group={this.props.shapeStore.layer} />
            </>
        )
    }
}
