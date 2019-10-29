import React, { Component } from 'react'
import { ShapeStore } from '../../../store/shapeStore'
import ShapeGroup from '../group/ShapeGroup'
import { shapeSwapper } from '../shapeSwapper'
import { observer } from 'mobx-react'
import ShapeRect from '../Rect/ShapeRect'


interface ShapeContainerProps {
    shapeStore: ShapeStore;
}

@observer
export default class ShapeContainer extends Component<ShapeContainerProps> {
    render() {
        return (
            <>
                <ShapeRect shapes={this.props.shapeStore.activeGroup.shapes} />
                {this.props.shapeStore.shapes && this.props.shapeStore.shapes.map(item => shapeSwapper(item))}

            </>
        )
    }
}
