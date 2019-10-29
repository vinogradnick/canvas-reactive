import React from 'react'
import { ShapeStore } from '../../store/shapeStore'
import { shape } from 'prop-types'
import ShapeItemGroup from './item/group/ShapeItemGroup'
import { itemSwapper } from './item/itemSwapper';
import { observer, inject } from "mobx-react"
import { IShape } from '../../models/IShape';

const ShapeList = inject('shapeStore')(observer(({ shapeStore }: { shapeStore: any }) => {
    return (



        <ul>
            <span>
                Page-Store
            </span>
            {/* {shapeStore.layer.groups &&
                shapeStore.layer.groups.map(item => <ShapeItemGroup key={item.id} group={item} />)} */}
            {shapeStore.activeGroup &&
                shapeStore.activeGroup.shapes.map(itemSwapper)}
            {shapeStore.shapes &&
                shapeStore.shapes.map(itemSwapper)}

        </ul>
    )
}));

export default ShapeList
