import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyB-P07RlVm3TxelNGItdo63XY60P9ib3-A",
     authDomain: "mobztask6.firebaseapp.com",
     databaseURL: "https://mobztask6-default-rtdb.firebaseio.com",
     projectId: "mobztask6",
     storageBucket: "mobztask6.appspot.com",
     messagingSenderId: "278366660333",
     appId: "1:278366660333:web:fc580a51e444474d3e0ee4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db, app }