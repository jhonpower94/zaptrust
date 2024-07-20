import {
  Avatar,
  Button,
  CardHeader,
  Grid,
  InputAdornment,
} from "@mui/material";
import TextField from "@mui/material/TextField";

import * as React from "react";
import { addUsers, getuserDataAdmin } from "../../../config/services";

import { useDropzone } from "react-dropzone";

import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../../config/firebaseinit";
import "./pintura/pintura.css";
import { LoadingButton } from "@mui/lab";

export default function EditUser({ id }) {
  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    image: "http//image.com",
    transactionlimit: 0,
    numberformat: "",
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const storageRef = ref(storage, `images/${acceptedFiles[0].name}`);
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
          // Handle unsuccessful uploads
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            const userRef = doc(db, "users", id);

            setDoc(userRef, { image: downloadURL }, { merge: true });
          });
        }
      );
    },
  });

  const [values, setValues] = React.useState({
    limit: 0,
    numberformat: user.numberformat
  });

  React.useEffect(() => {
    getuserDataAdmin(id).subscribe((userData) => {
      setUser(userData);
      console.log(userData);
    });
  }, []);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const changeMobile = ()=>{
    console.log(values.numberformat)
    
    addUsers(id, { numberformat: values.numberformat }).then(() =>
      alert("Mobile No updated 👍")
    );
    
  }

  const submit = () => {
    //  console.log({ balance: values.numberformat });

    addUsers(id, { transactionlimit: parseInt(values.limit) }).then(() =>
      alert("transfer limit updated 👍")
    );
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <CardHeader
          title={`${user.firstName} ${user.lastName}`}
          subheader={user.email}
          avatar={
            <Avatar
              sx={{ bgcolor: "#1A4DBE", width: 56, height: 56 }}
              alt="Remy Sharp"
              src={user.image}
            />
          }
        />
      </Grid>
      
      
      <Grid item xs={12} md={12}>
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <Button fullWidth size="large" variant="contained" disableElevation>
            Add image
          </Button>
        </div>
      </Grid>
      <Grid item xs={12} md={12}>
        <TextField
          fullWidth
          required
         defaultValue={values.numberformat}
          label={`Mobile ${user.numberformat}`}
          name="numberformat"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LoadingButton
                  loading={false}
                  variant="contained"
                  disableElevation
                  onClick={changeMobile}
                >
                  Update mobile
                </LoadingButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} md={12}>
        <Button
          fullWidth
          size="large"
          variant="contained"
          disableElevation
          onClick={submit}
        >
          Save changes
        </Button>
      </Grid>
    </Grid>
  );
}
