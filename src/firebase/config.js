// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//⚠️Esto no deberia compartirse en un proyecto real
//📚En este proyecto educativo, por simplicidad para todos, lo utilizamos asi
//👉A futuro lo reemplazarían por variables de entorno y archivo .env😉
const firebaseConfig = {
  apiKey: "AIzaSyBHRYtxMlF8NTg29rmEKKpZPOfEyCIUfB8",
  authDomain: "tienda-skin-9d45a.firebaseapp.com",
  projectId: "tienda-skin-9d45a",
  storageBucket: "tienda-skin-9d45a.firebasestorage.app",
  messagingSenderId: "836187208388",
  appId: "1:836187208388:web:3bde0f97e78714003b6791"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para el login
const auth = getAuth(app);

export { db, auth };


