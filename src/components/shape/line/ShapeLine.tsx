import React, { SyntheticEvent } from 'react'
import Point2D from '../../../models/point2d'
import CircleShape from '../circle/CirlceShape';
import { gachiStore } from '../../../store/shapeStore';


interface ShapeLineProps {
    uuid: string;
    start: Point2D;
    end: Point2D;
    color?: string;
    active?: boolean;

}
const ShapeLine: React.FC<ShapeLineProps> = (props: ShapeLineProps) => {
    const [lineActive, setLineActive] = React.useState(props.active);
    const [liveMoveActive, setLineMoveActive] = React.useState(false);
    const [start, setStart] = React.useState(props.start);
    const [isStart, setStartActive] = React.useState(false);
    const [isEnd, setEndActive] = React.useState(false);
    const [end, setEnd] = React.useState(props.end);
    const activateLine = (e: any) => {
        console.log(gachiStore.key.get())
        if (gachiStore.key.get()) {
            gachiStore.addToGroup(props.uuid);
            gachiStore.selectObject(props.uuid);
            setLineActive(true);

        }
        else {
            if (!gachiStore.selectedObject()) {
                gachiStore.selectObject(props.uuid);
                setLineActive(true);
            }
        }



    }
    const moveLineDown = (e: any) => {
        if (activateLine)
            setLineMoveActive(true);
    }
    const moveLineUp = (e: any) => {
        if (activateLine) {
            setLineMoveActive(false);
            gachiStore.moveShape(props.uuid, [start, end]);
        }

    }
    const moveLine = (event: any) => {
        // if (setLineMoveActive && lineActive) {
        //     console.log('activated');
        //     const center = Point2D.subtraction(start, end);
        //     const mousePoint = new Point2D(event.clientX, event.clientY);
        //     const delta = Point2D.subtraction(mousePoint, center);
        //     console.log(delta);
        //     start.plus(delta);
        //     end.plus(delta);
        //     // setEnd(end);
        //     // setStart(start);
        // }
    }
    const moveStart = (e: any) => {
        if (isStart && activateLine) {
            setStart(new Point2D(e.clientX, e.clientY));
            console.log(start);
            gachiStore.moveShape(props.uuid, [start, end]);
        }
    }
    const moveStartDown = (event: any) => {
        if (activateLine)
            setStartActive(true);
    }
    const moveStartUp = (event: any) => {
        if (activateLine)
            setStartActive(false);
    }
    const moveEnd = (e: any) => {
        if (isEnd && activateLine) {

            setEnd(new Point2D(e.clientX, e.clientY));
            console.log(end);
            gachiStore.moveShape(props.uuid, [start, end]);
        }
    }
    const moveEndDown = (e: any) => {
        if (activateLine)
            setEndActive(true);

    }
    const moveEndUp = (e: any) => {
        if (activateLine)
            setEndActive(false);

    }
    return <>
        <line
            x1={start.x}

            y1={start.y}
            x2={end.x}
            y2={end.y}

            stroke={props.color}
            strokeWidth={lineActive ? 5 : 3}
            onMouseMove={e => moveLine(e)}
            onMouseUp={e => moveLineUp(e)}
            onClick={e => activateLine(e)}
            onMouseDown={e => moveLineDown(e)}



        />
        {lineActive &&
            <CircleShape
                x={start.x}
                y={start.y}
                down={moveStartDown}
                move={moveStart}
                up={moveStartUp}
                radius={10}
                color="black"
            />}

        {lineActive &&
            <CircleShape
                x={end.x}
                y={end.y}
                down={moveEndDown}
                move={moveEnd}
                up={moveEndUp}
                radius={10}
                color="black"

            />
        }



    </>
}
export default ShapeLine;