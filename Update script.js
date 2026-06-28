import { auth } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
updateProfile
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const signupForm = document.getElementById("signupForm");

if (signupForm) {

signupForm.addEventListener("submit", async (e) => {

e.preventDefault();

const fullName = document.getElementById("fullName").value.trim();

const email = document.getElementById("email").value.trim();

const password = document.getElementById("password").value;

const confirmPassword = document.getElementById("confirmPassword").value;

if (password !== confirmPassword) {

alert("Passwords do not match!");

return;

}

try {

const userCredential = await createUserWithEmailAndPassword(auth, email, password);

await updateProfile(userCredential.user, {

displayName: fullName

});

alert("Account Created Successfully!");

window.location.href = "login.html";

} catch (error) {

alert(error.message);

}

});

}
const loginForm = document.getElementById("loginForm");

if (loginForm) {

loginForm.addEventListener("submit", async (e) => {

e.preventDefault();

const email = document.getElementById("loginEmail").value.trim();

const password = document.getElementById("loginPassword").value;

try {

await signInWithEmailAndPassword(auth, email, password);

alert("Login Successful!");

window.location.href = "dashboard.html";

} catch (error) {

alert(error.message);

}

});

}
