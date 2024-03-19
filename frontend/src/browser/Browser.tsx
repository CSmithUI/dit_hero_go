import { useState, useEffect } from 'react';

import { GetDirEntries } from '../../wailsjs/go/browser/Browser';
import { DirEntry } from '../types';
import { DirEntryLine } from './DirEntryLine';

export default function Browser() {
  const [dirEntries, setDirEntries] = useState<DirEntry[]>([]);

  useEffect(() => {
    console.log(GetDirEntries('/Users/nullst8/Downloads'));
    const entries = async () => {
      const data = await GetDirEntries('/Users/nullst8/Downloads');
      console.log('entries data: ' + data); // Logs a correct string of Json

      const parsedData: DirEntry[] = JSON.parse(data);
      console.log('Parsed data: ' + JSON.stringify(parsedData)); // Logs correct parsed data converted to string for readability

      setDirEntries(parsedData);
      console.log('Dir Entries state data: ' + JSON.stringify(dirEntries)); // Logs an empty array
    };

    entries();
  }, []);

  useEffect(() => {
    console.log('Dir Entries state data: ' + JSON.stringify(dirEntries));
  }, [dirEntries]); // Logs an empty array}, [dirEntries]);

  if (!dirEntries) {
    return <p>No Data</p>;
  } else {
    return (
      <div className='w-14 h-14'>
        <div className='p-3 bg-heroBlack-800 border border-accentDark overflow-y-scroll h-full max-h-screen overflow-x-hidden scrollbar scrollbar-track-heroBlack-700 scrollbar-thumb-accent scrollbar-corner-heroBlack-700'>
          {dirEntries?.map((dirEntry: DirEntry, index: number) => (
            <DirEntryLine
              key={index}
              name={dirEntry.name}
              isDir={dirEntry.isDir}
            />
          ))}
        </div>
      </div>
    );
  }
}
