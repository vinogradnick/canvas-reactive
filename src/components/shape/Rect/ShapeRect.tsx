import React, { ReactChild } from 'react'
import Point2D from '../../../models/point2d'
import { gachiStore } from '../../../store/shapeStore'
import './ShapeRect.css'
import CoordSearcher from '../../../models/CoordSearcher';
import { IShape } from '../../../models/IShape';
import { shapeSwapper } from '../shapeSwapper';
function ShapeRect({ shapes }: { shapes: IShape[] }) {
    const [active, setActive] = React.useState(false);
    const data = CoordSearcher(gachiStore.activeGroup.shapes);
    console.log(data);
    return (
        <rect onMouseMove={e => gachiStore.moveGroup(e)} x={data.xMin} y={data.yMin} height="100" width="200" className="gr" onDrag={e => console.log(e)}>
            {shapes && shapes.map(shapeSwapper)}
        </rect >
    )
}

export default ShapeRect
