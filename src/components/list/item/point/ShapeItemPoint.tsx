import React from 'react'
import Point2D from '../../../../models/Point2D'
import './ShapeItemPoint.css';
import pointSVG from './point.svg';
function ShapeItemPoint({ point }: { point: Point2D }) {
    return (
        <div className="point-view">
            <div className="item-view">
                <img src={pointSVG} width={16} height={16} />
            </div>
            <div className="item-view">
                P= ({point.getX} ; {point.getY});
            </div>
        </div>
    )
}

export default ShapeItemPoint
