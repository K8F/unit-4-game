//global variables
var totalScore = 0;
var scoreLimit = 0;
var wins = 0;
var losses = 0;
var crystalRed;
var crystalBlue;
var crystalYellow;
var crystalGreen;

//every time player clicks a crystal, crystal number adds to the current total under "your score"
function addCrystalValue(crystal) {
    console.log('adding crystal value: ' + crystal);
    totalScore += crystal;
    console.log('new total score: ' + totalScore);
    $("#score-number").text(totalScore);

    //if total score matches score limit, player wins

    if (totalScore === scoreLimit){
        winner()
    }

    //if total score is higher than score limit, player loses

    else if (totalScore > scoreLimit){
        loser()
    }
}


//sets random value for crystals between 1 and 12
function setCrystalValue(crystal){
    var newValue = 0;
    newValue = Math.floor(Math.random()*12+1);
    console.log('generated crystal value: ' + newValue);

    if (crystal == 'Red') {
        crystalRed = newValue;
    }
    else if (crystal == 'Blue') {
        crystalBlue = newValue;
    }
    else if (crystal == 'Yellow') {
        crystalYellow = newValue;
    }
    else if (crystal == 'Green') {
        crystalGreen = newValue;
    }
}

//set value player is trying to meet between 19 and 120
function setScoreLimit() {
    scoreLimit = Math.floor(Math.random()*(120-19 + 1) + 19);
    console.log('score limit set to: ' + scoreLimit)
}

//iniate default state
function initGame() {
    setCrystalValue('Yellow');
    setCrystalValue('Blue');
    setCrystalValue('Green');
    setCrystalValue('Red');

    setScoreLimit();

    totalScore = 0;
}

//reset UI & initiates game 
function reset(){
    initGame();
    $("div#score-number").text(totalScore);
    $("div#score-limit").text(scoreLimit);
}

//when a player wins, add to win score and reset game
function winner() {
    alert("You Won!!");
    wins++;
    $("div#wins").text("Wins: " + wins);
    reset();
}

//when player loses, add to lose score and reset game
function loser() {
    alert("You Lose!!");
    losses++;
    $("div#losses").text("Losses: " + losses);
    reset();
}

//start
function startGame(){
    
    reset();
    //display wins and losses
    $("div#wins").text("Wins: " + wins);
    $("div#losses").text("Losses: " + losses);

    //when play clicks crystal, game adds values to total score
    $("#red-crystal").on("click", function(){
        addCrystalValue(crystalRed);
    });
    $("#blue-crystal").on("click", function(){
        addCrystalValue(crystalBlue);
    });
    $("#yellow-crystal").on('click', function(){
        addCrystalValue(crystalYellow);
    });
    $("#green-crystal").on('click', function(){
        addCrystalValue(crystalGreen);
    });

}

startGame()

