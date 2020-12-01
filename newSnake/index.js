/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var BOARD_SIZE = $("#board").width();   // the height and width are equal
var SQUARE_SIZE = $("#apple").width();  //
    var FRAMES_PER_SECOND_INTERVAL = 100;
   
    var key= {
        'w': 87, 's': 83,'a': 65, 'd': 68
    }

    // Game Item Objects
    
    var apple = {};
    moveApple();
    apple.x = 80;
    apple.y = 0; 
    apple.$element = $("#apple");
    // one-time setup
    var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
    $(document).on('keydown',handleKeydown);                           // change 'eventType' to the type of event you want to handle
    var speedX= 0;
    var speedY= 0;
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
    function newFrame() {
        repositionHead();
        redrawHead();

    }
  
  /* 
  Called in response to events.
  */
 
    function handleKeydown() {
        if(event.which === key.s){
            speedY = -20;
        }
        else if (event.which === key.w){
            speedY = 20;
        }
        else if(event.which === key.a){
            speedX = -20;
        }
        else if (event.which === key.d){
            speedX = 20;
        }
    }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
    function repositionHead() {
        positionX += speedX;
        positionY += speedY;
    }
    function moveApple() {
        apple.x = randomInteger(BOARD_SIZE/SQUARE_SIZE)*SQUARE_SIZE;
        apple.y = randomInteger(BOARD_SIZE/SQUARE_SIZE)*SQUARE_SIZE;
        
         for (var i = 0; i < snakeBody.length; i++){
    
            if ( doCollide(apple, snakeBody[i] )){
                moveApple();
                break;
            }
        }
    }
    
    
        var snake = [];
        snake[0].x = 20;
        snake[0].y = 20;
        
            function makeSnake(id){
                var newPiece = {};
                newPiece.id = id;
                newPiece.width = $(".snake").width();        // sets width to 200
                newPiece.height = $(".snake").height();
                newPiece.x = snake[0].x -1;
                return newPiece;
            }       


            snake.push(makeSnake("#snake"+snake.length));
        }
        
    
    function randomInteger(max) {
        var randomInt = Math.floor(Math.random() * max);
        return randomInt;
    }

    function doCollide(obj1, obj2) {
        if (obj1.x === obj2.x && obj1.y === obj2.y) {
            return true;
        }
        else {
            return false;
        }
    }
    function redrawHead() {
        $("#head").css("left", positionX);
        $("#head").css("top", positionY);
    }
    
    function endGame() {
        // stop the interval timer
        clearInterval(interval);

        // turn off event handlers
        $(document).off();
    }
