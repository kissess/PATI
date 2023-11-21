import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCuT78jFNK-hzAjLqPONJd0QYMTMR0B5tQ",
  authDomain: "postureflow-hallym.firebaseapp.com",
  databaseURL: "https://postureflow-hallym-default-rtdb.firebaseio.com",
  projectId: "postureflow-hallym",
  storageBucket: "postureflow-hallym.appspot.com",
  messagingSenderId: "693140317129",
  appId: "1:693140317129:web:21945666e377c07cca7e18",
  measurementId: "G-NRWY5CTGNC"
};


const firebase  = initializeApp(firebaseConfig);
const auth  = getAuth(firebase);
// const database = firebase.database();

export {firebase, auth};
