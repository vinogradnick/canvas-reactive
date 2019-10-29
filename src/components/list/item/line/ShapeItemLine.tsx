import React from 'react'
import Point2D from '../../../../models/point2d'
import ShapeItemPoint from '../point/ShapeItemPoint'

//Добавить уравнение прямой

function ShapeItemLine({ points }: { points: Point2D[] }) {
    const [start, end] = points;
    return (
        <ul>
            <span>
                F(x): {start.getY - end.getY}x+{end.getX - start.getX}y+{start.getX * end.getY - end.getX * start.getY} = 0
            </span>
            {points && points.map((item, idx) => <li key={idx + 1}>
                <ShapeItemPoint key={idx} point={item} />
            </li>)}
        </ul>
    )
}

export default ShapeItemLine
