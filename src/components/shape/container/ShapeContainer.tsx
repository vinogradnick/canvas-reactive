import React, {Component} from 'react'
import {ShapeStore} from '../../../store/shapeStore'

import {observer} from 'mobx-react'


interface ShapeContainerProps {
    shapeStore: ShapeStore;
}

@observer
export default class ShapeContainer extends Component<ShapeContainerProps> {

    render() {
        return (
            <>
                {this.props.shapeStore.group.Component}
                {this.props.shapeStore.tempGroup.Component}
            </>
        )
    }
}
