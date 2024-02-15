import React, { useState, useEffect } from "react";
import { HiDocumentArrowUp } from "react-icons/hi2";
import axios from 'axios';

export default function Upload() {
  const [progress, setProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [text, setText] = useState("esfsfsf");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
    setProgress(50);
  };

  useEffect(() => {
    if (uploadedFile) {
      const formData = new FormData();
      formData.append('image_path', uploadedFile);

      axios.post('http://localhost:5000/get_ocr_text', formData)
        .then(response => {
          setText(response.data.text);
        })
        .catch(error => {
          console.error('Error fetching OCR text:', error);
        });
    }
  }, [uploadedFile]);

  return (
    <div
      className="h-screen w-[600px] bg-[#bcdaf3] z-10 flex flex-col p-5"
      style={{
        filter:
          "drop-shadow(-7px 8px 12px #4682B4) drop-shadow(7px 4px 12px #4682B4)",
      }}
    >
      <div className="flex gap-6 items-center">
          <img src={"/AssetsHome/plus.svg"} alt="plus-icon" />
        <h1 className="font-semibold text-2xl tracking-wider">
          Welcome to HealthSaathi,
        </h1>
      </div>
      <div className="flex flex-col mt-8 px-4">
        <span className="text-xs font-semibold">
          Step 1 of 2: Upload your document
        </span>
        <progress
          className="progress w-64 mt-1"
          value={progress}
          max="100"
        ></progress>
        <input
          type="file"
          id="fileUpload"
          style={{ display: "none" }}
          onChange={handleFileUpload}
        />
        <button
          className="bg-[#007BFF] w-fit mt-4 flex gap-2 items-center p-1 rounded-md text-sm hover:bg-[#007dfade] text-white"
          onClick={() => document.getElementById("fileUpload").click()}
        >
          <HiDocumentArrowUp /> Upload Document
        </button>
        <span className="mt-2 font-medium text-[10px]">
          {" "}
          Or drag and drop your file here
        </span>
        {!uploadedFile && (
          <img
            src={"/AssetsHome/uploadDoc.svg"}
            alt="bg-image-upload"
            className="self-center w-[8rem] md:w-[16rem]"
          />
        )}
        {uploadedFile && (
          <img
            src={URL.createObjectURL(uploadedFile)}
            alt="uploaded-image"
            className="self-center w-[8rem] md:w-[14rem]"
          />
        )}
      </div>
      <div className="flex flex-col mt-8 px-4">
        <span className="text-xs font-semibold">
          Step 2 of 2: Processing your document
        </span>
        <progress
          className="progress w-64 mt-1"
          value={50}
          max="100"
        ></progress>
        <button className="bg-white font-semibold w-fit mt-2 p-2 rounded-md text-[9px] hover:text-slate-600 tra">
          Edit Text
        </button>
        <span className="mt-2 font-medium text-[10px]">
          {" "}
          We extracted text from your document. You can edit it below.
        </span>
        <textarea
          className="textarea mt-3 h-20"
          placeholder="Text will appear here..."
          readOnly
        >{text}</textarea>
        <button className="bg-[#007BFF] w-fit mt-2 p-2 rounded-md relative left-[90%] text-white text-sm hover:bg-[#007dfade]">
          Save
        </button>
      </div>
    </div>
  );
}
