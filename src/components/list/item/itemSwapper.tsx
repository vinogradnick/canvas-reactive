
import { IShape } from '../../../models/IShape'
import { ShapeTypes } from '../../../models/ShapeTypes'
import ShapeItemLine from './line/ShapeItemLine'
import React from 'react'

export const itemSwapper = (shape: IShape) => {
    switch (shape.type) {

        case ShapeTypes.LINE:
            return <ShapeItemLine key={shape.uuid} points={shape.points} />
    }

}
