import { initializeApp } from "firebase/app";
const functions = require('firebase-functions');

const app = initializeApp(firebaseConfig);

let emailField = document.getElementById("emailAddress");
let emailSubmitBtn = document.getElementById("submitButton").addEventListener("click", () => {
  const sendDiscountEmail = functions.httpsCallable('sendDiscount');
  console.log("button clicked");
  sendDiscountEmail({email: emailField.value}).then(result => {
    console.log(result.data);
  });
});
