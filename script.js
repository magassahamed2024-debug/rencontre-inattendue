import { enregistrerReponse } from "./firebase.js";


const questions = [

{
texte:"💭 Tu penses quoi de moi ?",
type:"text"
},

{
texte:"🥺 C’est quoi ton plus beau souvenir avec moi ?",
type:"text"
},

{
texte:"💜 Tu penses pouvoir me donner une chance ?",
type:"choix",
options:["Oui 💚","Peut-être 💜","Non ❤️"],
fuite:true
},

{
texte:"🥹 Tu aurais voulu que j’ose au lieu d’hésiter sur certains trucs ?",
type:"text"
},

{
texte:"💜 T’as la vision sur nous ?",
type:"choix",
options:["Oui 💚","Non ❤️"],
fuite:true
},

{
texte:"🇨🇳🥺 Tu penses que tu reviendras en Chine ?",
type:"text"
},

{
texte:"❤️ Enfin... acceptes-tu de sortir avec moi ?",
type:"choix",
options:["Oui 💚","Non ❤️"],
fuite:true
}

];


let numero=0;
let reponses={};


const start=document.getElementById("start");


start.onclick=function(){

afficherQuestion();

};


function afficherQuestion(){

document.body.innerHTML=`

<div class="container">

<h1>💜 Rencontre inattendue 💜</h1>

<p>
Question ${numero+1}/${questions.length}
</p>


<h2 id="question">
${questions[numero].texte}
</h2>


<div id="zone"></div>

</div>

`;


let q=questions[numero];


if(q.type==="text"){

document.getElementById("zone").innerHTML=`

<textarea id="rep"
placeholder="Écris ta réponse ici..."></textarea>

<br>

<button id="next">
Continuer 💜
</button>

`;



document.getElementById("next").onclick=function(){

let valeur=document.getElementById("rep").value;

reponses["question"+(numero+1)]=valeur;

suivant();

};


}



else{


q.options.forEach(option=>{


let bouton=document.createElement("button");

bouton.innerHTML=option;

bouton.className="choix";


document.getElementById("zone").appendChild(bouton);



bouton.onclick=function(){

if(option.includes("Non")){

fuir(bouton);

}

else{

reponses["question"+(numero+1)]=option;

suivant();

}

};



});


}



}



function fuir(bouton){

bouton.style.position="absolute";

bouton.style.left=Math.random()*250+"px";

bouton.style.top=Math.random()*400+"px";


}



function suivant(){

numero++;


if(numero < questions.length){

afficherQuestion();

}

else{

terminer();

}


}




async function terminer(){


await enregistrerReponse(reponses);


document.body.innerHTML=`

<div class="container">

<h1>
🐱💜 Merci d’avoir répondu 💜
</h1>


<p>
Tes réponses ont bien été enregistrées.
</p>


<h2>
✨ Rencontre inattendue ✨
</h2>


</div>

`;

}
