/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAMES_PER_SECOND_INTERVAL = 1000 / 60;
  var key = {
      'down': 40,'up':38,'left':37,'right':39
  };

  // Game Item Objects
var positionX = 0; // the x-coordinate location for the box
var speedX = 0; // the speed for the box along the x-axis
var positionY = 0;
var speedY = 0;
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
    $(document).on('keydown', handleKeyDown);                          // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
     redrawGameItem();
     repositionGameItem();

  }
  
  /* 
  Called in response to events.
  */
function  handleKeyDown() {
     if(event.wich === key.down){
         console.log('going down');
           speedY = -5;
     }
     else if (event.wich === key.up){
         console.log('up we go');
           speedY = 5;
     }
     else if(event.wich === key.left){
         console.log('lefting');
           speedX = -5;
     }
     else if (event.wich === key.right){
         console.log('writing');
           speedX = 5;
     }
}
function handleKeyUp() {
     if(event.wich === key.down){
         console.log('going down');
           speedY = 0;
     }
     else if (event.wich === key.up){
         console.log('up we go');
           speedY = 0;
     }
     else if(event.wich === key.left){
         console.log('lefting');
           speedX = 0;
     }
     else if (event.wich === key.right){
         console.log('writing');
           speedX = 0;
     }
}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
    
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}

  

