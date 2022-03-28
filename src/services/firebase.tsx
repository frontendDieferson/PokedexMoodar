import firebase from '@react-native-firebase/app'



var firebaseConfig = {
  apiKey: "AIzaSyAEq8lQfNmOvYWOIygxqY506TENhiMc_m0",
  authDomain: "authentication-84397.firebaseapp.com",
  projectId: "authentication-84397",
  storageBucket: "authentication-84397.appspot.com",
  messagingSenderId: "51534633437",
  appId: "1:51534633437:web:3f39a2aa9c091c9c6d3e34"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
  //const database = firebase.firestore();
  //export default database

  export default firebase