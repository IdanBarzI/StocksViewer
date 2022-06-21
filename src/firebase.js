import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore/lite";
import { getCurrentMoney } from "./functions/getCurrentMoney";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = firebase.initializeApp(firebaseConfig);

// u.then(function (result) {
//   console.log(result); // "Some User token"
// });
const db = getFirestore(app);
console.log(getCurrentMoney(db));

export const auth = app.auth();
export const getCurrent = () => getCurrentMoney(db);
export default app;
