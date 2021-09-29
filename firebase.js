// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsxg3tvMA2IjL8S6yG3e8VtID-KzU4_OA",
  authDomain: "greenwaycarwashweb.firebaseapp.com",
  projectId: "greenwaycarwashweb",
  storageBucket: "greenwaycarwashweb.appspot.com",
  messagingSenderId: "117872144533",
  appId: "1:117872144533:web:435bbbcd544b8def03ab9c",
  measurementId: "G-YXRF6QKPKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);