import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBhsxhwhazusOD2nfJgR4XlyX0G4S2U0jM",
  authDomain: "longmenimageupload.firebaseapp.com",
  projectId: "longmenimageupload",
  storageBucket: "longmenimageupload.appspot.com",
  messagingSenderId: "857475064598",
  appId: "1:857475064598:web:636afe2cace8fbfad76637",
  measurementId: "G-104K5DKMSM"
};

const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
