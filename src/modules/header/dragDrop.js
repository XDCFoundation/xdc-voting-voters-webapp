import React, { useCallback, useMemo, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
// import "./CommonBlog.css";
import styled from "styled-components";
import Cropper from 'react-easy-crop'

const UploadImg = styled.img`
  margin-left: 5px;
  margin-bottom: -13px;
  position: relative;
`;
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  outline: "none",
  transition: "border .24s ease-in-out",
  width: "130px",
  height: "130px",
  background: "#E3E7EB",
//   border: "1px dashed #696969",
  borderRadius: "63px",
};
const activeStyle = {
  borderColor: "#2196f3",
};
const acceptStyle = {
  borderColor: "#00e676",
};
const rejectStyle = {
  borderColor: "#ff1744",
};
const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
};
const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  width: "auto",
  height: "230px",
  boxSizing: "border-box",
};
const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};
const img = {
  display: "flex",
  width: "370px",
  height: "250px",
  margin: "auto",
};

export default function StyledDropzone(props) {

    const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
  }, [])
    
    const [files, setFiles] = useState([]);
    const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open,
  } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject]
  );
  const thumbs = files.map((file) => (
    <div key={file.name}>
      <img src={file.preview} style={img} />
      <Cropper
      image={file.preview}
      crop={crop}
      zoom={zoom}
      aspect={4 / 3}
      onCropChange={setCrop}
      onCropComplete={onCropComplete}
      onZoomChange={setZoom}
    />
     {console.log(crop + "123456")}
    </div>
  ));
  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  const filepath = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  return (
    // <div className="container" style={{ marginBottom: "20px" }}>
    <div style={{ marginBottom: "20px" }}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div style={{ margin: "auto" }}>
          <UploadImg src="/images/camera.svg" onClick={open}></UploadImg>
          <div style={{ display: "flex", position: "relative" }}>
            <p> 
                {/* Drop File or  */}
                </p>{" "}
            <p
              style={{
                textDecoration: "underline",
                fontWeight: "800",
                marginLeft: "4px",
              }}
              onClick={open}
            >
              {/* Choose a File */}
            </p>
          </div>
        </div>
        <aside style={{ position: "absolute" }}>{thumbs}</aside>
      </div>
      <aside>
        {/* <h4>Files</h4>
        <ul>{filepath}</ul> */}
      </aside>
    </div>
  );
}