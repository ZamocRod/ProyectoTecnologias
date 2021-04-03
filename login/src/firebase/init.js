import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAk95x_koQnbXpSVGURZ_o7qEyLoab4NK8",
    authDomain: "mansion-multi.firebaseapp.com",
    projectId: "mansion-multi",
    storageBucket: "mansion-multi.appspot.com",
    messagingSenderId: "575710778423",
    appId: "1:575710778423:web:f881668edaa0301e531bb2",
    measurementId: "G-V9D0H5STWY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();