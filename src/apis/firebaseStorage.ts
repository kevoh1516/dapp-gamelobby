import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./firebaseConfig";

const basePath = "profilePics/";

export const uploadProfilePicture = (file: File, uid: string) => {
  return uploadFile(file, basePath + uid);
}

const uploadFile = async (file: File, path: string) => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  console.log('Uploaded a blob or file!');
}

export const getProfilePictureURL = (uid: string) => {
  return getFileURL(basePath + uid);
}

const getFileURL = (path: string) => {
  return getDownloadURL(ref(storage, path));
}