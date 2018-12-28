var W = 0
var L = 0
var guessesLeft = 10
var Random=(
    String.fromCharCode(
      Math.floor(Math.random() * 26) + 97
    ))
var random= Random.toUpperCase();

function clearguesses(){
    Guesses = [];

}   
var Guesses = [];
Guesses.toString();

document.onkeydown = function (e) {
  var keyPress;

  if (typeof event == 'undefined') {
    keyPress = event.keyCode;
  }
  else if (e) {
    keyPress = e.which;
  }

  Guesses.push(String.fromCharCode(keyPress));

  return false;   // Prevents the default action

};
document.onkeyup = function () {
    var Letter = event.keyCode;
    var LetterDisp = String.fromCharCode(Letter);
    var LetterDispuc = LetterDisp.toUpperCase()

if (LetterDispuc === random){
    W++;
   alert("You Have Won!!");
    Random=(
        String.fromCharCode(
          Math.floor(Math.random() * 26) + 97
        ));
    var random= Random.toUpperCase();
    guessesLeft = 10;
    clearguesses ()

}

else if(guessesLeft === 0){
    L++;
    //alert(You Have Won!!);
    Random=(
        String.fromCharCode(
          Math.floor(Math.random() * 26) + 97
        ));
    var random= Random.toUpperCase();
    guessesLeft = 10; 
    clearguesses ()
}
else {
    guessesLeft--;
}
    document.getElementById("Win").innerHTML = "Wins: " + W
    document.getElementById("Loss").innerHTML = "Losses: " + L;
    document.getElementById("GL").innerHTML = "Guesses Left : " + guessesLeft;
    document.getElementById("Guess").innerHTML = "Guesses so Far: " + Guesses;
     newFunction(LetterDispuc); 
};


console.log(Guesses);
console.log(random);
console.log(W);
console.log(L);
console.log(guessesLeft);



function newFunction(LetterDispuc) {
    console.log(LetterDispuc);
}