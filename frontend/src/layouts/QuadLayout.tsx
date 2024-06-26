import Browser from '.././browser/Browser';

export default function QuadLayout() {
  return (
    <div className='flex w-screen h-screen'>
      <div className='bg-heroBlack-700 w-20 min-w-20 p-3'>OFFLOAD</div>
      <div className='flex bg-heroBlack-700 w-full'>
        <div className='flex-row bg-heroBlack-700 w-4/12 p-3'>
          <div className='flex flex-wrap h-1/2 mb-6'>
            <div className='mb-2'>
              <h1 className='text-accent text-[0.95rem] font-bold'>SOURCE</h1>
            </div>
            <div className='h-full'>
              <Browser />
            </div>
          </div>
          <div className='pt-3 h-1/2'>
            <div className='mb-2'>
              <h1 className='text-accent text-[0.95rem] font-bold'>PRESETS</h1>
            </div>
          </div>
        </div>

        <div className='bg-heroBlack-700 w-8/12 p-3'>
          <div className='mb-2'>
            <h1 className='text-accent text-[0.95rem] font-bold'>
              DESTINATIONS
            </h1>
          </div>
          <div>
            <Browser />
          </div>
        </div>
      </div>
    </div>
  );
}
