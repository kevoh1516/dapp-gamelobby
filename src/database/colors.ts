import { DocumentData } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { DocumentReference, DocumentSnapshot } from '@google-cloud/firestore';
import { functions } from "../firebase/firebaseConfig";

const _uploadColors = httpsCallable(functions, 'uploadColors');
const _retrieveColors = httpsCallable(functions, 'retrieveColors');
export const uploadColors = (colors: any) => {
  _uploadColors({ colors: colors });
}
export const retrieveColors = async () => {
  const data = await _retrieveColors();
  return data;
}