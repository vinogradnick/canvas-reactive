import React from 'react'
import { IGroup } from '../../../models/IGroup'
import { shapeSwapper } from '../shapeSwapper';

function ShapeGroup({ group }: { group: IGroup }) {
    const { groups, shapes } = group;

    return (

        <g>
            {groups && groups.map(item => <ShapeGroup key={item.id} group={item} />)}
            {/* {shapes && shapes.map(shapeSwapper)} */}
        </g>
    )
}

export default ShapeGroup
