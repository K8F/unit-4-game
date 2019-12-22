//global variables
var firstNumber





function startGame(){
    //new random number between 19-120

    var randomNumber = {};
        randomNumber=Math.floor(Math.random()*(120-19 + 1) + 19);
        $("div#random-number").text(randomNumber);
        console.log(randomNumber)

    //generate new numbers for crystals between 1-12
    var crystalValues = {};
        redCrystal = Math.floor(Math.random()*12+1);
        blueCrystal = Math.floor(Math.random()*12+1);
        yellowCrystal = Math.floor(Math.random()*12+1);
        greenCrystal = Math.floor(Math.random()*12+1);

console.log(redCrystal)
console.log(blueCrystal)
console.log(yellowCrystal)
console.log(greenCrystal)
    //when play wins, add to win score

    //when player loses, add to lose score


}

startGame()



//buttons are clickable
$( "#red-crystal" ).on("click () called." );
$( "#blue-crystal" ).click(function() {
    alert( "the number is " + blueCrystal );
  });
  $( "#yellow-crystal" ).click(function() {
    alert( "Handler for .click() called." );
  });

  $( "#green-crystal" ).click(function() {
    alert( "Handler for .click() called." );
  });