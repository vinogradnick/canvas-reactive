import React from 'react';
import './App.css';
import { ShapeStore, gachiStore } from './store/shapeStore';
import Workspace from './components/workspace/Workspace';
import ShapeList from './components/list/ShapeList';
import ShapeContainer from './components/shape/container/ShapeContainer';
import MousePosition from './components/workspace/mouse-position/MousePosition';
const App: React.FC = () => {

  return (
    <>
      <div className="flex-inline-box" >
        <Workspace>
          <ShapeContainer shapeStore={gachiStore} />
        </Workspace>

        <div>
          <MousePosition shapeStore={gachiStore} />
          <button onClick={e => gachiStore.createLine()}>Создать линию</button>
          <button onClick={e => gachiStore.removeSelected()}>Удалить линию</button>
          <ShapeList shapeStore={gachiStore} />

        </div>


      </div>

    </>
  );
}

export default App;
