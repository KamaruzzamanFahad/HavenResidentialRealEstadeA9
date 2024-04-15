// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_ApiKey ,
  authDomain:import.meta.env.VITE_AuthDomain ,
  projectId: import.meta.env.VITE_ProjectId,
  storageBucket: import.meta.env.VITE_StorageBucket,
  messagingSenderId: import.meta.env.VITE_MessagingSenderId,
  appId: import.meta.env.VITE_AppId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;