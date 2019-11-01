import React from 'react'

export default function CircleShape({ x, y, radius, move, down, up, color }:
    {
        x: number,
        y: number,
        radius: number,
        color: string,
        move?: (e: any) => void,
        down?: (e: any) => void,
        up?: (e: any) => void
    }) {
    return (
        <circle
            cx={x}
            cy={y}
            r={radius}
            onMouseDown={e => down(e)}
            onMouseUp={e => up(e)}
            onMouseMove={e => move(e)}
            stroke={color}

        >

        </ circle>
    )
}

