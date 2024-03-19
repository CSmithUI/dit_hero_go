import { useState, useEffect } from 'react';

import { GetDirEntries } from '../../wailsjs/go/browser/Browser';
import { DirEntry } from '../types';
import DocIcon from '../assets/images/file_icon.svg';
import DirIcon from '../assets/images/dir_icon.svg';

interface dirProps {
  name: string;
  isDir: boolean;
}

export function DirEntryLine({ name, isDir }: dirProps) {
  if (isDir) {
    return (
      <div className='flex'>
        <div className='w-5'>
          <img src={DirIcon} />
        </div>
        <div>{name}</div>
      </div>
    );
  } else {
    return (
      <div className='flex'>
        <div className='w-5'>
          <img src={DocIcon} />
        </div>
        <div>{name}</div>
      </div>
    );
  }
}
