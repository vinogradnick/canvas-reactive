import React from 'react'
import { ShapeStore } from '../../store/shapeStore'
import { shape } from 'prop-types'
import ShapeItemGroup from './item/group/ShapeItemGroup'
import { itemSwapper } from './item/itemSwapper';
function ShapeList({ shapeStore }: { shapeStore: ShapeStore }) {
    return (
        <ul>
            <span>
                Page-Store
            </span>
            {shapeStore.layer.groups &&
                shapeStore.layer.groups.map(item => <ShapeItemGroup key={item.id} group={item} />)}
            {shapeStore.layer.shapes &&
                shapeStore.layer.shapes.map(itemSwapper)}
        </ul>
    )
}

export default ShapeList
