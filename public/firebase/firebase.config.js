import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB-_u3N0l0Q095y2yFrVRe18I9NAhwX4DQ",
  authDomain: "event-management-yoga.firebaseapp.com",
  projectId: "event-management-yoga",
  storageBucket: "event-management-yoga.appspot.com",
  messagingSenderId: "1012031937357",
  appId: "1:1012031937357:web:9c760634d74abd8394b504",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
