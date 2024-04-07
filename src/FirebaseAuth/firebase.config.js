import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDRK7lQJfcQkcsix1wb7ZXcbrqjSzqvnKo",
  authDomain: "assignment-nine-auth.firebaseapp.com",
  projectId: "assignment-nine-auth",
  storageBucket: "assignment-nine-auth.appspot.com",
  messagingSenderId: "313891506517",
  appId: "1:313891506517:web:edcb6c2c6ca186c89987dc",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
