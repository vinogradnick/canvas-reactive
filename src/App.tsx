import React from 'react';
import './App.css';
import { ShapeStore, gachiStore } from './store/shapeStore';
import Workspace from './components/workspace/Workspace';
import ShapeList from './components/list/ShapeList';
import ShapeContainer from './components/shape/container/ShapeContainer';
const App: React.FC = () => {

  return (
    <>
      <div className="flex-inline-box">
        <Workspace>
          <ShapeContainer shapeStore={gachiStore} />
        </Workspace>
        <ShapeList shapeStore={gachiStore} />
      </div>

    </>
  );
}

export default App;
