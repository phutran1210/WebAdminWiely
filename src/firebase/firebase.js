import firebase from "firebase";

// Initialize Firebase
const config = {
  //   apiKey: "AIzaSyAz-GPfA-hN74oFh3XvXsF9vQrlE5xpU10",
  //   authDomain: "wieldy-4f59c.firebaseapp.com",
  //   databaseURL: "https://wieldy-4f59c.firebaseio.com",
  //   projectId: "wieldy-4f59c",
  //   storageBucket: "wieldy-4f59c.appspot.com",
  //   messagingSenderId: "81949884261"

  //
  apiKey: "AIzaSyBZGVfH-5WA3VNCgPn4g4eh2kpkcgb-pOU",
  authDomain: "my-awsome-project-50238.firebaseapp.com",
  databaseURL: "https://my-awsome-project-50238.firebaseio.com",
  projectId: "my-awsome-project-50238",
  storageBucket: "my-awsome-project-50238.appspot.com",
  messagingSenderId: "149254954255",
  appId: "1:149254954255:web:dd5d2377d931702b06727a",
  measurementId: "G-DWQJ0EHFPX"
};

firebase.initializeApp(config);
const auth = firebase.auth();
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();

export {
  firestore,
  database,
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};
