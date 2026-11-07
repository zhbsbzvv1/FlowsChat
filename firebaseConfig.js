import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    deleteDoc,
    collection,
    query,
    where,
    getDocs,
    serverTimestamp,
    addDoc,
    updateDoc,
    orderBy,
    onSnapshot 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyClkgVqAKSy-ccbZNiHLkVU7EfJx66h1ew",
    authDomain: "flowschat-f611b.firebaseapp.com",
    projectId: "flowschat-f611b",
    storageBucket: "flowschat-f611b.firebasestorage.app",
    messagingSenderId: "922119996344",
    appId: "1:922119996344:web:c62d8a09bc0d503154454d",
    measurementId: "G-BVEB5N0F2X"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { 
    auth, 
    db, 
    GoogleAuthProvider, 
    signInWithPopup, 
    signOut, 
    doc, 
    setDoc, 
    getDoc, 
    deleteDoc, 
    collection, 
    query, 
    where, 
    getDocs, 
    serverTimestamp,
    addDoc,
    updateDoc,
    orderBy,
    onSnapshot 
};
