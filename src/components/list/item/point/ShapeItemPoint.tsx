import React from 'react'
import Point2D from '../../../../models/Point2D'
import './ShapeItemPoint.css';
import pointSVG from './point.svg';
function ShapeItemPoint({ point }: { point: Point2D }) {
    const [active, setActive] = React.useState(false);
    const changeX = (e) => {

    }
    const changeY = (e) => {

    }
    const activateEdit = (e) => {

    }
    return (
        <div className="point-view">
            <div className="item-view">
                <img src={pointSVG} width={16} height={16} />
            </div>
            <div className="item-view">
                <span onClick={e => setActive(!active)}>P= ({point.getX} ; {point.getY});</span>


            </div>

        </div>
    )
}

export default ShapeItemPoint
