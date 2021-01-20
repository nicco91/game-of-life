import React, { VFC } from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';
import FileUploadContainer from './FileUploadContainer';

type Props = {
  className?: string;
  onUpload: (file?: File) => void;
};

const FileUpload: VFC<Props> = ({ className, onUpload }) => {
  const onDrop = (files: File[]) => {
    onUpload(files && files.length ? files[0] : undefined);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <FileUploadContainer {...getRootProps()} isDragActive={isDragActive}>
      <input {...getInputProps()} />
      <p>
        {isDragActive
          ? 'Drop the files here...'
          : 'Drag & drop some files here, or click to select files'}
      </p>
    </FileUploadContainer>
  );
};

export default styled(FileUpload)``;
