import React from 'react';
import { Button } from 'react-bootstrap';
var fs = require('fs');
const { dialog } = require('@electron/remote');

interface FileLoaderProps {
  fileJsonContestCallback(data: any): void;
}

const FileLoader = (props: FileLoaderProps) => {
  const getFileFromUser = () => {
    dialog
      .showOpenDialog({
        properties: ['openFile'],
      })
      .then((filePaths: any) => {
        const files = filePaths.filePaths;
        console.log('files', files);
        // fileNames is an array that contains all the selected
        if (files === undefined) {
          alert('No file selected');
        }

        fs.readFile(files[0], 'utf-8', (err: any, data: any) => {
          if (err) {
            alert(`An error ocurred reading the file :${err.message}`);
            return;
          }

          // Change how to handle the file content
          alert(`The file content is : ${data}`);
        });
      });
  };
  return (
    <p>
      <Button onClick={getFileFromUser}>Load</Button>
    </p>
  );
};

export default FileLoader;
