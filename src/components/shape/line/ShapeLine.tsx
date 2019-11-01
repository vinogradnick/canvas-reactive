import React, {SyntheticEvent} from 'react'
import Point2D from '../../../models/Point2D'
import CircleShape from '../circle/CirlceShape';
import {gachiStore} from '../../../store/shapeStore';
import {UniversalShape} from "../../../models/UniversalShape";


interface ShapeLineProps {
    shape: UniversalShape;
}

const ShapeLine: React.FC<ShapeLineProps> = ({shape}) => {
    const [start, end] = shape.points;
    const active = shape.selected;
    const move = (e) => {

        shape.move([new Point2D(e.clientX, e.clientY), end])
    };
    const moveEnd = (e) => {

        shape.move([start, new Point2D(e.clientX, e.clientY),])
    };
    return <>

        <line
            x1={start.x}

            y1={start.y}
            x2={end.x}
            y2={end.y}

            stroke={shape.color}
            strokeWidth={active ? 5 : 3}


        />
        {active &&
        <CircleShape
            x={start.x}
            y={start.y}
            move={move}
            radius={10}
            color={shape.color}
        />}

        {active &&
        <CircleShape
            x={end.x}
            y={end.y}
            color={shape.color}
            move={moveEnd}
            radius={10}


        />

        }


    </>
}
export default ShapeLine;
