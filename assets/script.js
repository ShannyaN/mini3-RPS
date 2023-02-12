// data
    // create array in order of value P-0, S-1, R-2
    var pts = ['P', 'S', 'R'];
    var play = true;
    var wins = 0;
    var losses = 0;
    var ties= 0;
    
while (play) {
     // get player input
    var user = prompt('Choose R, P, or S.');
     //convert user input to index #
    var userpts = pts.indexOf(user);
    console.log(userpts);
    console.log(pts);
     //generate rand # between 0 & 2 for comp input
    var comppts= Math.floor(Math.random() * pts.length);
    console.log(comppts);
    //if paper vs rock, paper wins
    if ((userpts > comppts)||(userpts===0 && comppts===2)){
        wins += 1;
        alert("You won!");
        console.log("win");
    } else if (userpts==comppts){
        ties += 1;
        alert("You tied!")
        console.log("tie");
    } else {
        losses += 1;
        alert("You lost!")
        console.log("loss");
    }
    play = confirm('The computer chose ' + pts[comppts] + '. You have won ' + wins + ' times, tied ' + ties + ' times, and lost ' + losses + '  times. Would you like to play again?');
    console.log(play);
}
