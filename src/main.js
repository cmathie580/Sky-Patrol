let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }
let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

//reserve keyboard vars
let keyP, keyLEFT, keyRIGHT, keyF, keyR, keyA, keyD;

// Christopher Mathie
// Project Name: "SKY PATROL"
// 4/20/2022
// Project Hours: 15

// Modification/Score Breakdown

// 60 Points: Full redesign of the UI and artwork this includes new sprites for the player rocket and the enemy spaceships. As well as a new scrolling background, game borders,
// the page background color, also a new font, and font background for both the menu and the game. Lastly I added new sounds for the select blip, the rocket launch, and of
// of course the explosion. All this should be worth 60 points.

// 30 Points: I implemented the simultaneous two-player mode. Player 1 uses the arrow keys and the 'P' key to fire, Player 2 uses the 'A' and 'D' keys to move and the 'F' key to 
// fire. Both players start in the middle and can move freely along the bottom of the scree, both of them can hit enemies, however they do share a score, so it is more of a
// cooperative play. This should be worth 30 points.

// 10 Points: Finally I was able to implement a coundown timer that starts at 60 or 45 seconds depending on the difficulty you are on.
// The timer is in the top right corner of the screen and it ends the game at 0 seconds. This feature should be worth 10 points.

// The combination of the full redesign (60 points), the implementation of simultaneous two-player (30 points), and the visible
// countdown feature (10 points), totals to 100 points for the grade.