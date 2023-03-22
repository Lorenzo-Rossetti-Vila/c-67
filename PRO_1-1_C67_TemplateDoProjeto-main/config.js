import firebase from 'firebase';

// adicione SDK do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAD-s_MrBThg3yiI3G5KerpKaf9zIPe1kE",
  authDomain: "c-58-c59e9.firebaseapp.com",
  projectId: "c-58-c59e9",
  storageBucket: "c-58-c59e9.appspot.com",
  messagingSenderId: "299677044510",
  appId: "1:299677044510:web:3457695285abe37969c30f"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();