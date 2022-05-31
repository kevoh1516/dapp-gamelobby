import { Box, Button, Avatar } from '@mui/material';
import { useState, useEffect, useContext } from 'react';
import { uploadProfilePicture, getProfilePictureURL } from '../apis/firebaseStorage';
import { AuthContext } from '../context/AuthProvider';
import { setProfilePicture } from '../apis/firebaseAuth';
import { useNavigate } from "react-router-dom";

const imageMimeType = /image\/(png|jpg|jpeg)/i;

const Profile = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileDataURL, setFileDataURL] = useState<any>('');
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  /* https://blog.logrocket.com/using-filereader-api-preview-images-react/ */
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file?.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  }

  const saveHandler = () => {
    console.log("in save handler.");
    if (file && user) {
      console.log("uploading file...");
      uploadProfilePicture(file, user.uid).then(() => {
        console.log("finished uploading");
        getProfilePictureURL(user.uid).then((url) => {
          setProfilePicture(user, url);
        })
      }).catch((error) => {
        console.log("upload error:", error);
      });
    }
  }

  useEffect(() => {
    let fileReader: FileReader, isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result }: { result: string | ArrayBuffer | null } = e.target!;
        if (result && !isCancel) {
          setFileDataURL(result)
        }
      }
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    }

  }, [file]);

  console.log("photourl", user?.photoURL);

  return (
    <>
      <Box sx={{height: 350}} display="flex" flexDirection="column" alignItems="center" justifyContent="space-evenly">
        <Avatar src={fileDataURL || user?.photoURL} sx={{ width: 200, height: 200}}/>
        <Button
          variant="contained"
          component="label"
          sx={{width: 150}}
        >
          Select Image
          <input
            type="file"
            hidden
            onChange={changeHandler}
            accept="image/*"
          />
        </Button>
        <Button sx={{width: 150}} variant="outlined" onClick={saveHandler}>Save Changes</Button>
        <Button sx={{width: 150}} variant="outlined" onClick={() => {navigate('/');}}>        
          Back To Lobby
        </Button>
      </Box>
    </>
  )
}

export default Profile