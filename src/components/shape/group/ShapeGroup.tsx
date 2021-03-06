import React from 'react'
import './index.css';
import { Group } from "../../../models/Group";
import Point2D from "../../../models/Point2D";
import CircleShape from "../circle/CirlceShape";
import { observable } from "mobx";
import { observer } from "mobx-react";
import uuid from '../../../models/uuid';

@observer
export default class ShapeGroup extends React.Component<{ children: React.ReactChild[] | React.ReactChild, group: Group }, { isMoving: boolean }> {
    constructor(props) {
        super(props);
        this.state = { isMoving: false };
        this.startMove = this.startMove.bind(this);
        this.endMove = this.endMove.bind(this);
    }

    public startMove(e) {
        this.setState({ isMoving: true });

    }

    public endMove(e) {
        this.setState({ isMoving: false });

    }

    public render() {
        const { minX, minY, maxX, maxY } = this.props.group.groupCoord;
        console.log(this.props.group.centerGroups);
        console.log(this.props.group.children.maxAndMinPoint);

        const move = (e) => {
            if (this.state.isMoving) {
                const center = new Point2D(e.clientX, e.clientY);
                this.props.group.movePoint(center);
                this.props.group.move(center);
            }
        }

        const { children, group } = this.props;
        return (
            <>
                <g key={uuid()} style={{ pointerEvents: group.active.get() ? 'none' : 'all' }}>
                    {children}
                </g>
                {group.active.get() === true &&
                    [
                        <rect
                            key={uuid()}
                            x={minX}
                            y={minY}
                            stroke={group.active.get() ? 'red' : ''}
                            strokeWidth={1}
                            height={maxY + 10 - minY}
                            width={maxX + 10 - minX}
                            onMouseMove={move}
                            fillOpacity={0}>
                        </rect>,
                        <CircleShape
                            key={uuid()}
                            x={group.centerFigure.x} y={group.centerFigure.y} radius={10} color={'red'}
                            down={this.startMove}
                            up={this.endMove}
                            move={move} />]
                }


            </>

        )
    }

}

