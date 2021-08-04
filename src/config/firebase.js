import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2hfvWQcZlM9VP6NN2RqhTtOZd5leSXlM",
  authDomain: "todo-materialui.firebaseapp.com",
  projectId: "todo-materialui",
  storageBucket: "todo-materialui.appspot.com",
  messagingSenderId: "720055630080",
  appId: "1:720055630080:web:d4c96683f889265a649be5",
  measurementId: "G-DQ0X3RX50M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
export default db;
