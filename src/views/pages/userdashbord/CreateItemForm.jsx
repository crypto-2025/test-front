import React, { useState } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

// Styled Components for layout
const FormContainer = styled.div`
  max-width: 700px;
  margin: 30px auto;
  padding: 25px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 25px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const UploadSection = styled.div`
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  color: #777;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const UploadedFiles = styled.div`
  margin-top: 10px;
  text-align: left;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: ${(props) => (props.cancel ? "#e74c3c" : "#4caf50")};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: ${(props) => (props.cancel ? "#c0392b" : "#45a049")};
  }
`;

const CreateItemForm = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => setUploadedFiles(acceptedFiles),
  });

  return (
    <FormContainer>
      <Title>Create a New Item</Title>

      {/* Form Fields */}
      <Label>Item Title</Label>
      <Input type="text" placeholder="Enter Item Title" />

      <Label>Item Name</Label>
      <Input type="text" placeholder="Enter Item Name" />

      <Label>Amount</Label>
      <Input type="number" placeholder="Enter Amount" />

      <Label>Duration (in days)</Label>
      <Input type="number" placeholder="Enter Duration" />

      <Label>Details</Label>
      <Textarea rows="4" placeholder="Enter Item Details"></Textarea>

      {/* Upload Section */}
      <Label>Upload Images</Label>
      <UploadSection {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drag & drop files here, or click to upload</p>
        <p style={{ fontSize: "12px" }}>Accepts images only</p>
      </UploadSection>

      {uploadedFiles.length > 0 && (
        <UploadedFiles>
          <p>Uploaded Files:</p>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </UploadedFiles>
      )}

      {/* Buttons */}
      <ButtonContainer>
        <Button cancel>Cancel</Button>
        <Button>Create</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default CreateItemForm;
