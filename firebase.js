import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDjlKsXycr-steaZEkMLRdxrpOS8aUSQ8c",
  authDomain: "rencontre-inattendue.firebaseapp.com",
  projectId: "rencontre-inattendue",
  storageBucket: "rencontre-inattendue.firebasestorage.app",
  messagingSenderId: "48557100293",
  appId: "1:48557100293:web:feed73a34545c19d9a7b6c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function enregistrerReponse(data) {
  await addDoc(collection(db, "reponses"), data);
}

export async function lireReponses() {
  const snapshot = await getDocs(collection(db, "reponses"));
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export { db };
