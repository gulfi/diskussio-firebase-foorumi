import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyBrXn2FnhsV0bVVj5pHIpZQmiwhqaBN2RM",
    authDomain: "diskussio-foormi.firebaseapp.com",
    databaseURL: "https://diskussio-foormi.firebaseio.com",
    projectId: "diskussio-foormi",
    storageBucket: "diskussio-foormi.appspot.com",
    messagingSenderId: "816455655657"
  };
  firebase.initializeApp(config);
export default firebase;