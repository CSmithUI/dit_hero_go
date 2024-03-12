import { useState, useEffect } from 'react';
import { GetDirEntries } from '../../wailsjs/go/browser/Browser';

//export interface IAppProps {}

export default function App() {
  const [dirEntries, setDirEntries] = useState('');

  useEffect(() => {
    
    const initialDir = async () {
      await GetDirEntries('/Users/nullst8/Downloads')
    }

    setDirEntries(initialDir);
    
  }, [])

  useEffect(() => {
    //const initialDir = JSON.parse();
    return () => {};
  }, [dirEntries]);

  return (
    <div>
      {dirEntries.map((item, index) => (
        <p></p>
      ))}
    </div>
  );
}
