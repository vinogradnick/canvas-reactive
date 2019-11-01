import React from 'react';
import './App.css';
import {ShapeStore, gachiStore} from './store/shapeStore';
import Workspace from './components/workspace/Workspace';
import ShapeContainer from './components/shape/container/ShapeContainer';
import MousePosition from './components/workspace/mouse-position/MousePosition';
import {workspaceStore} from "./store/workspaceStore";
import {Provider} from "mobx-react";
import ShapeList from './components/list/ShapeList'
import Topbar from "./components/top-bar/Topbar";

const App: React.FC = () => {

    return (
        <>
            <div className="root">
                {/*<Topbar/>*/}
                <div className="flex-inline-box">
                    <Workspace>
                        <ShapeContainer shapeStore={gachiStore}/>
                    </Workspace>

                    <div>
                        <Provider workspaceStore={workspaceStore}>
                            <MousePosition workspace={workspaceStore}/>
                        </Provider>
                        <button onClick={e => gachiStore.createLine()}>Создать линию</button>
                        <Provider shapeStore={gachiStore}>

                            <ShapeList/>
                        </Provider>
                    </div>


                </div>
            </div>

        </>
    );
}

export default App;
