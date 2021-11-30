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
        if (files === undefined) {
          return;
        }

        if (files[0] === undefined) {
          return;
        }

        fs.readFile(files[0], 'utf-8', (err: any, data: any) => {
          if (err) {
            alert(`An error ocurred reading the file :${err.message}`);
            return;
          }
          props.fileJsonContestCallback(data);
        });
      });
  };
  return (
    <Button variant={'light'} onClick={getFileFromUser}>
      Load Recipes
    </Button>
  );
};

export default FileLoader;
