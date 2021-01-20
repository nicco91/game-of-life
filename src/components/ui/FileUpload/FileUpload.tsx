import React, { VFC } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
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
    accept: '.txt',
  });

  return (
    <FileUploadContainer {...getRootProps()} isDragActive={isDragActive}>
      <input {...getInputProps()} />
      <p>
        <FiUpload size={64} />
      </p>
      <p>
        {isDragActive
          ? 'Drop the file here...'
          : 'Drag & drop the input file here, or click to select file'}
      </p>
    </FileUploadContainer>
  );
};

export default styled(FileUpload)``;
