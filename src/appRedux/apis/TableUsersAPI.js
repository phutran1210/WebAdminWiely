import { auth, firestore } from "../../firebase/firebase";

export const getResourceRequest = async () =>
  await firestore
    .collection("users")
    .get()
    .then(snapshot => snapshot)
    .catch(error => error);

export const addResourceRequest = async (user, email, password) =>
  await auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCred => userCred)
    .catch(er => er);

export const createDataRequest = async (users, userCred) =>
  await firestore
    .collection("users")
    .doc(userCred.user.uid)
    .set({
      users: users
    })
    .then(res => res)
    .catch(err => err);
