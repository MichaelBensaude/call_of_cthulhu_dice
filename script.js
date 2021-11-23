//function  

/* function init en pensant bien a mettre les dégats a 0 et les points de vie de chaque joueur a 1000 sans oublier de laissé le champs vide du inner html */
function init(){
  tamporaryDomageOne.textContent ='0';
  tamporaryDomageTwo.textContent ='0';
  lifePointPlayerOne.textContent ='1000';
  lifePointPlayerTwo.textContent ='1000';
  endgame.innerHTML ="";
  alert('Bienvvenu sur Call Of  Chthulu . Merci de mettre votre écran en mode paysage !')
}
/* faire une fonction nexPlayer() en récupérant firstAttack  est joueur avec  la classlist pour faire un  changement de joueur */
function nextPlayer() {
    activePlayer.classList.remove('firstAttack');
    activePlayer = activePlayer == playerOne ? playerTwo : playerOne;
    activePlayer.classList.add('firstAttack');
}
/* pour cette fonction  : récuperer a l'aide de la div endgame  le innerHtml pour le joueur un ou deux */
function finishGame (){
  activePlayer = (activePlayer == playerOne) ? playerOne : playerTwo;
  endgame.innerHTML ="<h1>"+ (activePlayer == playerOne ? " Edward Pierce" : "Cthulhu") +" est mort !";
 
  
}

/* pour notre fonction lifeDomage il faudra  : 
-faire une condition  si on s'adresse au joueur 1 ou 2
- récuperer les point de vies des joueurs en .textcontent
- soustraire tamporaryDomage au point de vie adverse 
- déclarer un scénario gagnant ou chnager de joueur si pas de victoire sur la manche .
*/
    function lifeDomage(){
      if (activePlayer === playerOne){
        lifePointPlayerOne.textContent = parseInt(lifePointPlayerOne.textContent) 
        -
        parseInt(tamporaryDomageTwo.textContent);
        tamporaryDomageTwo.textContent= 0;
        lifePointPlayerOne.textContent <= 0  ? finishGame(): nextPlayer();

      } else{
        lifePointPlayerTwo.textContent = parseInt(lifePointPlayerTwo.textContent)
        -
        parseInt(tamporaryDomageOne.textContent);
        tamporaryDomageOne.textContent = 0;
            lifePointPlayerTwo.textContent <=0  ? finishGame(): nextPlayer();
      }
    }

    
    /*faire une condition pour recharger la page si une nouvelle partie est souhaitez  sinon ne rien faire   */
newgame.onclick = function(){
  if (window.confirm('voulez vous recommencez la partie ? ')){
    window.location.reload();
  } else{
    alert('partie non initialisé !')
  }
}
init();


// lancé le dé  
rollDice.onclick = function(){
audioDice.play();
var assetRandom = Math.floor(Math.random() * asset.length) +1;
var assetFaces = asset[assetRandom -1];
dice.setAttribute('src',assetFaces);
console.log(assetRandom + assetFaces); /* permet de débugger et de s'assurer que l'image et le nombre soit bien associé  */
/* condition si la face du dé et le chiffre aléatoire est strictement = a 1 alors (faire une deuxiemee condition pour le joueur un et le joueur deux ) */
if (assetFaces && assetRandom === 1){
  if (activePlayer !== playerTwo){

    tamporaryDomageOne.textContent = 0;
  } else{

    tamporaryDomageTwo.textContent = 0;
  }
  /* inclure la fonction du joueur suivant  */
nextPlayer();
} else{
  /* condition si le joueur n'est pas égal au joueur 2 */
  if(activePlayer !== playerTwo){
    tamporaryDomageOne.textContent = parseInt(tamporaryDomageOne.textContent) + assetRandom;
  } else{
    tamporaryDomageTwo.textContent = parseInt(tamporaryDomageTwo.textContent) +assetRandom;
  }
}
//intégrer un son différents pour la perte des dégats temporaires  //
if(assetRandom === 1 ){
  /* pour le fun intégrer des sons différent si le joueur un ou deux doit jouer  */
  if(activePlayer !== playerTwo){
    rageCthulhu.play();
  }else {
  shoutDice.play();
}
}


}

var attack = document.getElementById('attack')
// attaquer et changer d'adversaire  //  
attack.onclick= function(){
  lifeDomage();
  lifeDomage();
  lifeDomage();
  /* comme pour le tour de chaque joueur intégrer aussi une condition pour la défaite des dégats temporaires du joueur un ou du joueur deux */
  if(activePlayer !== playerOne){
    audioPierceShot.play();
  } 
  else
  {
  audioCthulhuAttack.play();

}
}