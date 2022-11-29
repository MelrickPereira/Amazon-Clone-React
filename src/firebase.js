
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCnbvt3tUmNajpv2SEPDhZFEk5Kgr__aeg",
  authDomain: "clone-fef1f.firebaseapp.com",
  projectId: "clone-fef1f",
  storageBucket: "clone-fef1f.appspot.com",
  messagingSenderId: "1079572496490",
  appId: "1:1079572496490:web:4bc393077d233fddf38a13",
  measurementId: "G-KCT541EGQ8"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };