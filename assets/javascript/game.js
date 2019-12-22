//global variables




function startGame(){
    //new random number between 19-120

    //generate new numbers for crystals between 1-12
    var crystalValues = {};
        redCrystal = Math.floor(Math.random()*12+1);
        blueCrystal = Math.floor(Math.random()*12+1);
        yellowCrystal = Math.floor(Math.random()*12+1);
        greenCrystal = Math.floor(Math.random()*12+1);


        console.log(greenCrystal)
    //when play wins, add to win score

    //when player loses, add to lose score


}

startGame()



//buttons are clickable
$( "#red-crystal" ).click(function() {
    alert( "Handler for .click() called." );
  });
  $( "#blue-crystal" ).click(function() {
    alert( "Handler for .click() called." );
  });
  $( "#yellow-crystal" ).click(function() {
    alert( "Handler for .click() called." );
  });

  $( "#green-crystal" ).click(function() {
    alert( "Handler for .click() called." );
  });