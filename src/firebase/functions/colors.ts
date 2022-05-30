import { httpsCallable } from "firebase/functions";
import { functions } from "../firebaseConfig";

const _uploadColors = httpsCallable(functions, 'uploadColors');
const _retrieveColors = httpsCallable(functions, 'retrieveColors');
export const uploadColors = (colors: any) => {
  _uploadColors({ colors: colors });
}
export const retrieveColors = async () => {
  const data = await _retrieveColors();
  return data;
}