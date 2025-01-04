import { CameraAlt } from "@mui/icons-material";
import {
  Backdrop,
  Box,
  CircularProgress,
  InputLabel,
  Typography,
} from "@mui/material";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { storage } from "../../config/firebaseinit";
import { CustomLoadingButton } from "../components/styledcomponents";
import { addUsers } from "../../config/services";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { navigate } from "@reach/router";
import { addDoc } from "firebase/firestore";

export const UploadId = () => {
  const [values, setValues] = React.useState({
    imageid: "",
  });
  const userinfo = useSelector((state) => state.useInfos);
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState({
    uploaded: false,
    text: "Choose file",
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setLoading(true);
      const folder = nanoid();

      const storageRef = ref(
        storage,
        `images/${folder}/${acceptedFiles[0].name}`
      );

      const uploadTask = uploadBytesResumable(storageRef, acceptedFiles[0]);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          setLoading(false);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            addUsers(userinfo.id, {
              activated: true,
              kyc_verified: true,
              image_url: downloadURL,
              imageid: downloadURL,
            }).then(() => {
              console.log("File available at", downloadURL);
              setValues({
                ...values,
                imageid: downloadURL,
              });
              setStatus({ uploaded: true, text: "Uploaded" });
              setLoading(false);
            });
          });
        }
      );
    },
  });

  return (
    <>
      <InputLabel htmlFor="photoid">Valid ID Card</InputLabel>
      <div {...getRootProps({ className: "dropzoneimageid" })}>
        <input
          id="photoid"
          name="imageid"
          {...getInputProps()}
          accept="image/*"
        />
        <CustomLoadingButton
          loading={loading}
          variant="contained"
          fullWidth
          disableFocusRipple
          disableElevation
          color={status.uploaded ? "success" : "primary"}
        >
          {status.text}
        </CustomLoadingButton>
      </div>
    </>
  );
};

export const UploadPhoto = ({ encodedimageurl, userid }) => {
  useEffect(() => {
    var decodeImage = atob(encodedimageurl);
    console.log(decodeImage);
    console.log(userid);

  
    
    addUsers(userid, { image: decodeImage }).then(() => {
      navigate("/dashboard/account");
    });
    
  });

  return (
    <Backdrop
      sx={{
        flexDirection: "column",
        backgroundColor: (theme) => theme.palette.background.paper,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
      open={true}
    >
      <CircularProgress color="primary" />
      <Box mt={1}>
        <Typography variant="h6">Uploading photo</Typography>
      </Box>
    </Backdrop>
  );
};
