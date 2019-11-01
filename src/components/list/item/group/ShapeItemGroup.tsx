import React from 'react'
import {IGroup} from '../../../../models/IGroup'
import {Group} from "../../../../models/Group";


function ShapeItemGroup({group}: { group: Group }) {
    return (
        <ul>
            {/*    <span>{group.id}</span>*/}
            {/*    {group.groups && group.groups.map(item => <ShapeItemGroup key={item.id} group={item}/>)}*/}
            {/*    /!*{group.shapes && group.shapes.map(itemSwapper)}*!/*/}
        </ul>

    )
}

export default ShapeItemGroup
