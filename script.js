const start = document.getElementById("start");

start.addEventListener("click", () => {

document.body.innerHTML = `

<div class="container">

<h1>💜 Rencontre inattendue 💜</h1>

<p class="subtitle">
Commençons par quelques questions... 🥺
</p>

<div class="cat">🐱</div>

<button id="next">
Continuer ➜
</button>

</div>

`;

document.getElementById("next").onclick = () => {

alert("🎉 La première question arrivera ici !");

};

});
