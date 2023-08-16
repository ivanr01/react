
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDY_0Jqy8gdYoERhPO6cnDPOfSBi1sW78E",
  authDomain: "entrega-final-d025a.firebaseapp.com",
  projectId: "entrega-final-d025a",
  storageBucket: "entrega-final-d025a.appspot.com",
  messagingSenderId: "780341726740",
  appId: "1:780341726740:web:cd902b55d81460f8872101"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)