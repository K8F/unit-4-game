//global variables

//numbers to add
var firstNumber =0;
var secondNumber =0;

//user total score
var totalScore=0;

//user wins/losses
var wins=0;
var losses=0;

//display wins and losses
$("div#wins").text("Wins: " + wins);
$("div#losses").text("Losses: " + losses);



 //when play wins, add to win score

 function winner() {
    alert("You Won!!");
    wins++;
    $("div#wins").text("Wins: " + wins);
    startGame();
}

//when player loses, add to lose score
function loser() {
    alert("You Lose!!");
    losses++;
    $("div#losses").text("Losses: " + losses);
    startGame();
}

$("#image1").on("click", function() {
    userTotal = userTotal + num1;
    console.log("New userTotal " + userTotal);
    $("#score").text(userTotal);

    if (userTotal === random) {
        winner()
    }

    else if (userTotal > random) {
        loser()
    } 
})
winner();

//first time user clicks crystal, crystal number displays under "your score"

//every time user clicks crystal, crystal number adds to the current total under "your score"
//if total score matches random number, user wins
//if total score is higher than random number, user loses

function startGame(){
    
    //total score resets to 0

    $("div#score-number").text(firstNumber);

    
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