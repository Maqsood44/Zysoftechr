import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {

  apiKey: "AIzaSyCU5damSKqNrTlOblq8Xg9tkoKkCW9zZLE",
  authDomain: "estore-51fe8.firebaseapp.com",
  projectId: "estore-51fe8",
  storageBucket: "estore-51fe8.appspot.com",
  messagingSenderId: "1018592795256",
  appId: "1:1018592795256:web:d05c3262e206af944beb8d"

// Initialize Firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);