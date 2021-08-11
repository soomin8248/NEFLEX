import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDF-cc2zs1wLMzrtvS0JlpaUfTFzPRYhHA",
    authDomain: "netflix-4de78.firebaseapp.com",
    projectId: "netflix-4de78",
    storageBucket: "netflix-4de78.appspot.com",
    messagingSenderId: "261868470139",
    appId: "1:261868470139:web:ad8e51ea9a0b2218d5c7de",
    measurementId: "G-QN43PXLJWQ"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;