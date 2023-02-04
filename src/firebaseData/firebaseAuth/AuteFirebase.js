import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { get, getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export async function login() {
  return signInWithPopup(auth, provider) //
    .then((result) => {
      const user = result.user;
      return user;
    });
}

export async function logout() {
  return signOut(auth).then(() => {});
}

export async function loginObserver(callback) {
  return onAuthStateChanged(auth, callback);
}

export async function updateContact(userId) {
  return set(ref(database, `user/${userId}`)) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const contact = snapshot.val();
        return contact;
      }
    });
}
