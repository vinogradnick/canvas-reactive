import React from 'react'

import {observer, inject} from "mobx-react"
import {ShapeStore} from "../../store/shapeStore";

const ShapeList = inject('shapeStore')(observer(({shapeStore}: { shapeStore?: ShapeStore }) => {
    return (


        <ul>
            <span>
                Page-Store
            </span>
            {shapeStore.group && shapeStore.group.ListViewComponent}
            {shapeStore.tempGroup && shapeStore.tempGroup.ListViewComponent}
        </ul>
    )
}));

export default ShapeList
