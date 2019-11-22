import React from 'react'
import Point2D from '../../../../models/Point2D'
import ShapeItemPoint from '../point/ShapeItemPoint'
import uuid from '../../../../models/uuid';

//Добавить уравнение прямой

function ShapeItemLine({ points }: { points: Point2D[] }) {
    const [start, end] = points;
    const xCo = start.getY - end.getY;
    const yCo = end.getX - start.getX;
    const xyCo = start.getX * end.getY - end.getX * start.getY;
    return (
        <ul>
            <span>
                F(x): {xCo}x{yCo < 0 ? `${yCo}` : `+${yCo}`}y {xyCo < 0 ? `${xyCo}` : `+${xyCo}`} = 0
            </span>
            {points && points.map((item, idx) => <li key={uuid()}>
                <ShapeItemPoint key={uuid()} point={item} />
            </li>)}
        </ul>
    )
}

export default ShapeItemLine
