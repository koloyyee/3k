export const FileType = {
  pdf:  {
    type:  "application/pdf",
    ext: "pdf",
    subpath : "/upload/pdf"
  },
  docx : {
    type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ext: "docx",
    subpath: "/upload/docx"
  }
} as const; 
