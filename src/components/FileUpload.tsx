"use client"; // Not a valid JavaScript statement, likely a placeholder or comment

import { Inbox } from "lucide-react"; // Importing the Inbox icon from the lucide-react library
import React from "react"; // Importing React library for JSX usage
import { useDropzone } from "react-dropzone"; // Importing useDropzone hook from react-dropzone library

// Define a functional component called FileUpload
const FileUpload = () => {
  // Destructuring getRootProps and getInputProps from the useDropzone hook
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "application/pdf": [".pdf"] }, // Specify that only PDF files are accepted
  });

  return (
    // Return JSX markup for the FileUpload component
    <div className="p-2 bg-white rounded-xl">
      {/* Container for the dropzone */}
      <div
        {...getRootProps({
          // Spread getRootProps onto the div element, setting its properties
          className:
            "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
        })}
      >
        <input {...getInputProps()} /> {/* Input element for file selection */}
        <>
          {/* Display Inbox icon from lucide-react library */}
          <Inbox className="w-10 h-10 text-blue-500" />
          {/* Text indicating to drop PDF files here */}
          <p className="mt-2 text-sm text-slate-400">Drop PDF Here</p>
        </>
      </div>
    </div>
  );
};

export default FileUpload; // Export the FileUpload component for use in other parts of the application
