import Browser from './browser/Browser';

import './App.css';

function App() {
  return (
    <div className='bg-heroBlack-800 w-screen h-screen text-textNormal text-xs'>
      <div className='flex w-screen h-screen'>
        <div className='bg-heroBlack-700 w-20 min-w-20 p-3'>OFFLOAD</div>
        <div className='flex bg-heroBlack-700 w-full'>
          <div className='flex-row bg-heroBlack-800 w-4/12 p-3'>
            <div className='h-1/2'>
              <h1>SOURCE</h1>
              <div>
                <Browser />
              </div>
            </div>
            <div className='h-1/2'>
              <h1>PRESETS</h1>
              <Browser />
            </div>
          </div>

          <div className='bg-heroBlack-700 w-8/12 p-3'>DESTINATIONS</div>
        </div>
      </div>
    </div>
  );
}

export default App;
