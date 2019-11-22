import React, { SyntheticEvent } from 'react'
import Point2D from '../../../models/Point2D'
import CircleShape from '../circle/CirlceShape';
import { gachiStore } from '../../../store/shapeStore';
import { UniversalShape } from "../../../models/UniversalShape";
import { toJS } from 'mobx';

interface ShapeLineProps {
    shape: UniversalShape;
}
const ShapeLine: React.FC<ShapeLineProps> = ({ shape }) => {
    const [lineActive, setLineActive] = React.useState(false);

    const [start, end] = shape.points;
    const [startPointActive, setStartPointActive] = React.useState();
    const [endPointActive, setEndPointActive] = React.useState();
    const active = shape.selected.get();

    const activateStart = () => setStartPointActive(true);
    const diactivateStart = () => setStartPointActive(false);
    const activateEnd = () => setEndPointActive(true);
    const diactivateEnd = () => setEndPointActive(false);
    const moveStart = (e) => {
        if (startPointActive)
            shape.move([new Point2D(e.clientX, e.clientY), end])
    };
    const moveEnd = (e) => {
        if (endPointActive)
            shape.move([start, new Point2D(e.clientX, e.clientY)])
        console.log(toJS(shape.points));
    };

    const moveAll = (e) => {
        if (lineActive) {


            const item = new Point2D((start.x + end.x) / 2, (start.y + end.y) / 2);
            const center = Point2D.subtraction(item, new Point2D(e.clientX, e.clientY));
            shape.move([start.minus(center), end.minus(center)]);
        }
    }

    const lineFocus = (e) => {
        if (e.keyCode == 'A')
            gachiStore.addGroup(shape);
        else
            gachiStore.focus(shape);
    }
    const lineActivateMove = e => {
        setLineActive(true);
    }
    const lineMouseDeactive = (e) => {
        setLineActive(false);
        console.log(lineActive);
    }


    return <>

        <line
            x1={start.x}

            y1={start.y}
            x2={end.x}
            y2={end.y}


            onMouseDown={lineActivateMove}
            onDoubleClick={lineFocus}
            onMouseUp={lineMouseDeactive}
            onMouseMove={e => moveAll(e)}
            stroke={shape.color}
            strokeWidth={active ? 5 : 3}


        />
        {active &&
            <>
                (<CircleShape
                    key={shape.uuid + 'ST-2'}
                    x={start.x}
                    y={start.y}
                    down={activateStart}
                    up={diactivateStart}
                    color={shape.color}
                    move={moveStart}
                    radius={14}


                />
                <CircleShape
                    key={shape.uuid + 'ST-3'}
                    x={end.x}
                    y={end.y}
                    down={activateEnd}
                    up={diactivateEnd}
                    color={shape.color}
                    move={moveEnd}
                    radius={14}

                />)
                </>}



    </>
}
export default ShapeLine;
