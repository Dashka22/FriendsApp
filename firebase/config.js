import firebase from "firebase/app";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1jkI4_UjbtaT153IHV0copfFoCxlneVc",
  authDomain: "menen-a3f22.firebaseapp.com",
  databaseURL: "https://menen-a3f22-default-rtdb.firebaseio.com",
  projectId: "menen-a3f22",
  storageBucket: "menen-a3f22.appspot.com",
  messagingSenderId: "508301378135",
  appId: "1:508301378135:web:feda0d2f1a7f9e3140d912",
  measurementId: "G-Y81LR1FLE5",
};
firebase.initializeApp(firebaseConfig);
export { firebase };
