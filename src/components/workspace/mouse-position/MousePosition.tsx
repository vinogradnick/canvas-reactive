import React from 'react'
import Point2D from '../../../models/point2d';
import { observable } from 'mobx';
import { inject, observer } from 'mobx-react';
import { ShapeStore } from '../../../store/shapeStore';

const MousePosition = inject('shapeStore')(observer(({ shapeStore }: { shapeStore?: ShapeStore }) =>

    <div>
        X: {shapeStore.mousePosition.get().getX}
        Y: {shapeStore.mousePosition.get().getY}
    </div>
));


export default MousePosition
