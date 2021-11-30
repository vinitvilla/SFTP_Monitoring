import './App.css';
import {FilesContent} from './Component/FilesContent';
import { useEffect, useState } from 'react';

const electron = window.require("electron")
const ipcRenderer = electron.ipcRenderer;


export const App = () => {

  const [all_files, setAllFiles] = useState([])
  const [moved_files, setMovedFiles] = useState([])
  
  useEffect(() => {
    ipcRenderer.send("get-current-directory-files");

    ipcRenderer.on('reply-current-directory-files', (event, arg) => {
      console.log(arg);
      setAllFiles(arg);
    })
  }, []);

  return (
    <div className="app">
      <div className="app-container">
        <FilesContent name="All Files" file_list={all_files} />
        <FilesContent name="Moved Files" file_list={moved_files} />
      </div>
    </div>
  );
}