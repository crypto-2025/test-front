import React, { useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

// Styled Components for layout
const Container = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 30px auto;
  background: #f9f9f9;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  animation: fadeIn 0.5s ease-in-out;
  max-height: 80vh; /* تحديد أقصى ارتفاع للنموذج */
  overflow-y: auto; /* تمكين التمرير الرأسي */
  padding-bottom: 30px; /* إضافة مساحة أسفل النموذج */
  transition: transform 0.3s ease; /* إضافة تأثير عند الفتح */
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 18px;
  color: #888;
  cursor: pointer;
  &:hover {
    color: #f44336;
  }
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-sizing: border-box;
`;

const DropzoneContainer = styled.div`
  border: 2px dashed #aaa;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: #666;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const UploadedFile = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
  color: #4caf50;
`;

const Button = styled.button`
  background: #4caf50;
  color: white;
  font-size: 16px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background: #45a049;
  }
`;

const ShareForm = () => {
  const [files, setFiles] = useState([]);
  const [isOpen, setIsOpen] = useState(true); // إضافة حالة لإغلاق النموذج

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*, video/*",
    onDrop: (acceptedFiles) => setFiles(acceptedFiles),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission (e.g., send data to the server)
    console.log("Form submitted");
  };

  const handleClose = () => {
    setIsOpen(false); // غلق النموذج عند الضغط على زر الإغلاق
  };

  if (!isOpen) return null; // إذا كان النموذج مغلقًا لا نعرضه

  return (
    <Container>
      <CloseButton onClick={handleClose}>×</CloseButton>
      <Title>Share For Audience</Title>
      <form onSubmit={handleSubmit}>
        <Label>Title</Label>
        <Input type="text" placeholder="Enter a title..." />

        <Label>Type</Label>
        <Dropdown>
          <option>PUBLIC</option>
          <option>PRIVATE</option>
        </Dropdown>

        <Label>Details</Label>
        <Textarea rows="4" placeholder="Add more details here..." />

        <Label>Upload Image/Video</Label>
        <DropzoneContainer {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag and drop files here, or click to select</p>
          <p style={{ fontSize: "12px" }}>Max Size: 1024 MB | Min Width: 300px</p>
        </DropzoneContainer>

        {files.length > 0 && (
          <UploadedFile>
            <p>Uploaded Files:</p>
            <ul>
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </UploadedFile>
        )}

        <Label>Choose Bundles to Share With</Label>
        <Input type="text" placeholder="Enter bundle name..." />

        <Button type="submit">Share</Button>
      </form>
    </Container>
  );
};

export default ShareForm;
