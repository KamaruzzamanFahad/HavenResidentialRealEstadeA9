// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

console.log(import.meta.env.TEST);
console.log(import.meta.env)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNiTp7184wjsbgWlw4vQqvdThnfVG0wcs",
  authDomain: "havenresidential-e128c.firebaseapp.com",
  projectId: "havenresidential-e128c",
  storageBucket: "havenresidential-e128c.appspot.com",
  messagingSenderId: "86115285559",
  appId: "1:86115285559:web:19ec1bcc2fcf6afca59db2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;