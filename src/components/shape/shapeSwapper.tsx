import { ShapeTypes } from "../../models/ShapeTypes"
import { IShape } from "../../models/IShape"
import ShapeLine from "./line/ShapeLine"
import React from "react"
import Point2D from "../../models/point2d"

export const shapeSwapper = (shape: IShape) => {
    switch (shape.type) {

        case ShapeTypes.LINE:
            return <ShapeLine
                uuid={shape.uuid}
                key={shape.uuid}

                start={shape.points[0]}
                end={shape.points[1]}
                color={shape.color}

            />
    }

}
