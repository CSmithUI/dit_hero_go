import './App.css';

import QuadLayout from './layouts/QuadLayout';

function App() {
  const win = Window;

  return (
    <div className='bg-heroBlack-800 w-screen h-screen text-textNormal text-xs overflow-hidden'>
      <QuadLayout />
    </div>
  );
}

export default App;
