// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
getFirestore,
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "TON_API_KEY",

authDomain: "TON_PROJET.firebaseapp.com",

projectId: "TON_PROJET",

storageBucket: "TON_PROJET.appspot.com",

messagingSenderId: "000000000",

appId: "TON_APP_ID"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function envoyerReponses(reponses){

await addDoc(collection(db,"reponses"),{

date:new Date(),

...reponses

});

}
