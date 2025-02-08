// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJvzVgJYtQQQdyKqI9Y1LVi6hyYaqZhGo",
  authDomain: "conceptual-2-react.firebaseapp.com",
  projectId: "conceptual-2-react",
  storageBucket: "conceptual-2-react.firebasestorage.app",
  messagingSenderId: "909970261744",
  appId: "1:909970261744:web:a1eeb1021bacf5b76d6435"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);