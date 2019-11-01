import React from 'react'
import { inject, observer } from 'mobx-react';
import {WorkspaceStore} from "../../../store/workspaceStore";

const MousePosition = inject('workspaceStore')(observer(({ workspace }: { workspace?: WorkspaceStore }) =>

    <div>
        X: {workspace.mousePoint.get().getX}
        Y: {workspace.mousePoint.get().getY}
    </div>
));


export default MousePosition
