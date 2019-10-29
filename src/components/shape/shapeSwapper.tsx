import { ShapeTypes } from "../../models/ShapeTypes"
import { IShape } from "../../models/IShape"
import ShapeLine from "./line/ShapeLine"
import React from "react"

export const shapeSwapper = (shape: IShape) => {
    switch (shape.type) {

        case ShapeTypes.LINE:
            return <ShapeLine
                key={shape.uuid}
                moveShape={e => console.log(e)}
                start={shape.points[0]}
                end={shape.points[1]}
                color={shape.color}

            />
    }

}
