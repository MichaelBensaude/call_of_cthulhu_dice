
//variable 
var asset = [
    "img/asset/1.png",
    "img/asset/2.png",
    "img/asset/3.png",
    "img/asset/4.png",
    "img/asset/5.png",
    "img/asset/6.png",
    "img/asset/7.png",
    "img/asset/8.png",
    "img/asset/9.png",
    "img/asset/10.png",
    "img/asset/11.png",
    "img/asset/12.png",
    "img/asset/13.png",
    "img/asset/14.png",
    "img/asset/15.png",
    "img/asset/16.png",
    "img/asset/17.png",
    "img/asset/18.png",
    "img/asset/19.png",
    "img/asset/20.png"
  ];
  
  var newgame = document.getElementById('newgame');
  var endgame  = document.getElementById('endgame');
  
  //P1
  var playerOne= document.getElementById('playerOne');
  var activePlayer = document.querySelector('firstAttack');
  activePlayer= playerOne;
  var tamporaryDomageOne= document.getElementById('tamporaryDomageOne');
  var lifePointPlayerOne = document.getElementById('lifePointPlayerOne');
  //P2
  var playerTwo= document.getElementById('playerTwo');
  var tamporaryDomageTwo = document.getElementById('tamporaryDomageTwo');
  var lifePointPlayerTwo = document.getElementById('lifePointPlayerTwo');
  
  //audio
  var shoutDice = new Audio("sound/errorDiceMen.mp3");
  var audioRule = new Audio("sound/cthulhu-growl.mp3"); 
  var audioPierceShot= new Audio(`sound/shot_gun.wav`);
  var audioDice = new Audio (`sound/dice.mp3`); 
  var audioCthulhuAttack = new Audio('sound/cthulhu-attack.wav');
  var rageCthulhu= new Audio('sound/rage cthulhu.wav');
  
  // dé
  
  var dice = document.getElementById('dice');
  var rollDice = document.getElementById('rollDice');
  