import { Avatar, Button, CardHeader, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { DropzoneDialog } from "material-ui-dropzone";
import * as React from "react";
import { db, storage } from "../../../config/firebaseinit";
import {
  addUsers, getuserDataAdmin
} from "../../../config/services";


export default function EditUser({ id }) {
  const [state, setState] = React.useState({
    open: false,
    files: [],
  });

  const [values, setValues] = React.useState({
    limit: 0,
  });

  const [user, setUser] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    image: "http//image.com",
    transactionlimit: 0,
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

  const submit = () => {
    //  console.log({ balance: values.numberformat });

    addUsers(id, { transactionlimit: parseInt(values.limit) }).then(() =>
      alert("transfer limit updated 👍")
    );
  };

  const handleOpen = () => {
    setState({
      open: true,
    });
  };

  const handleClose = () => {
    setState({
      open: false,
    });
  };

  const handleSave = (files) => {
    console.log(files);
    const storageRef = ref(storage, `images/${files[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, files[0]);

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

          setDoc(userRef, { image: downloadURL }, { merge: true }).then(() => {
            //Saving files to state for further use and closing Modal.
            setState({
              files: files,
              //  open: false,
              name: files[0].name,
            });
          });
        });
      }
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
      <Grid item xs={4} md={4}>
        <TextField
          fullWidth
          type={"number"}
          id="outlined-limit-dis"
          label="Current transfer limit"
          variant="outlined"
          value={user.transactionlimit}
          disabled
        />
      </Grid>
      <Grid item xs={8} md={8}>
        <TextField
          fullWidth
          type={"number"}
          id="outlined-limit"
          label="Set new limit"
          variant="outlined"
          name="limit"
          defaultValue={user.transactionlimit}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
          focused
        />
      </Grid>

      <Grid item xs={12} md={12}>
        <Button
          fullWidth
          size="large"
          variant="contained"
          disableElevation
          onClick={handleOpen}
        >
          Add Image
        </Button>
        <DropzoneDialog
          open={state.open}
          onSave={handleSave}
          acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={handleClose}
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
