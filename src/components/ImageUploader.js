import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './imageUploader.css';

const ImageUploader = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        const base64Data = reader.result;
        const uploadedFile = { name: file.name, base64Data };
        setUploadedFiles((prevUploadedFiles) => [...prevUploadedFiles, uploadedFile]);
      };

      reader.readAsDataURL(file);
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    minSize: 1,
    maxSize: 5242880, // 5MB
    maxFiles: 1,
  });

  return (
    <div className="dropzone" {...getRootProps()} style={{height:"396px",display:"flex",justifyContent:"center"}}>
      <input {...getInputProps()} />
      <div className="dropzone-content" style={{display:"flex",justifyContent:"center"}}> 
        {uploadedFiles.length === 0 ? (
          
          <p>Drag and drop an image file here, or click to select a file.</p>
          
        ) : (
          <div>
            {uploadedFiles.map((file, index) => (
              <div key={index}>
                <p>{file.name}</p>
                <img src={file.base64Data} alt="" />
              </div>
            ))}
          </div>
        )}
        <button className="upload-button">Upload</button>
      </div>
    </div>
  );
};

export default ImageUploader;
