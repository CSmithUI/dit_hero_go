import Browser from './browser/Browser';
import { NodeEditor } from 'flume';

import FlmConfig from './flumeConfig';

import './App.css';
import { TestComponent } from './TestComponent';
import QuadLayout from './layouts/QuadLayout';

function App() {
  const win = Window;

  return (
    <div className='bg-heroBlack-800 w-screen h-screen text-textNormal text-xs overflow-hidden'>
      <TestComponent />
      <div style={{ width: 1200, height: 900 }}>
        <NodeEditor
          portTypes={FlmConfig.portTypes}
          nodeTypes={FlmConfig.nodeTypes}
        />
      </div>
      {/* <QuadLayout /> */}
    </div>
  );
}

export default App;
