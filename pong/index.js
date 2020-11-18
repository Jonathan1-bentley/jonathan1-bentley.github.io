/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAMES_PER_SECOND_INTERVAL = 1000 / 60;
  var key = {
     'up': 38, 'down': 40, 'w': 87, 's': 83
  }
  // Game Item Objects
var ball ={
 'speedx' : 1,
 'speedy' : 1,
 'posx' : 200,
 'posy' : 200
}
var p1 ={
'posx' : 50,
'posy' : 50,
'speed': 2
}
var p2 ={
'posx' : 350 ,
'posy' : 50,
'speed': 2,
}

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function doCollide(square1, square2) {
    // TODO: calculate and store the remaining
    // sides of the square1
    square1.left = square1.x;
    square1.top = square1.y;
    square1.right = square1.x + square1.width;
    square1.bottom = square1.y + square1.height;
    // TODO: Do the same for square2
    square2.left = square2.x;
    square2.right = square2.x + square2.width;
    square2.top = square2.y;
    square2.bottom = square2.y+ square2.height;
    // TODO: Return true if they are overlapping, false otherwise
	if(square1.left < square2.right && square1.right > square2.left && square1.top < square2.bottom && square1.bottom > square2.top){
      return (true);
    }
   
}
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
