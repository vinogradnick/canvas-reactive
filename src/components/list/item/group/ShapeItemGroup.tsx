import React from 'react'
import { IGroup } from '../../../../models/IGroup'
import { IShape } from '../../../../models/IShape'
import { ShapeTypes } from '../../../../models/ShapeTypes'
import { itemSwapper } from '../itemSwapper';

function ShapeItemGroup({ group }: { group: IGroup }) {
    return (
        <ul>
            <span>{group.name}</span>
            {group.groups && group.groups.map(item => <ShapeItemGroup key={item.id} group={item} />)}
            {group.shapes && group.shapes.map(itemSwapper)}
        </ul>
    )
}

export default ShapeItemGroup
