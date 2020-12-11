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
    
    apple.x = 80;
    apple.y = 0; 
    apple.$element = $("#apple");
    // one-time setup
    var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
    $(document).on('keydown',handleKeydown);                           // change 'eventType' to the type of event you want to handle
    var speedX= 0;
    var speedY= 0;

    var snake = [
        {}
    ];
    snake[0].x = 20;
    snake[0].y = 20;

    snake.push(makeSnake("#snake"+snake.length));
    moveApple();
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
    function doCollide(snakePiece, apple) {
        if (snakePiece.x === apple.x && snakePiece.y === apple.y) {
            return true;
        }
        else {
            return false;
        }
    }
         }
  
  /* 
  Called in response to events.
  */
 
    function handleKeydown() {
        if(event.which === key.w){
            speedX = 0
            speedY = -20;
        }
        else if (event.which === key.s){
            speedX = 0
            speedY = 20;
        }
        else if(event.which === key.a){
            speedX = -20;
            speedY = 0;
        }
        else if (event.which === key.d){
            speedX = 20;
            speedY = 0;
        }
    }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
    function repositionHead() {
        for(i= snake.length-1; i>=1; i--){
            snake[i].x = snake[i-1].x
            snake[i].y = snake[i-1].y
        }
        snake[0].x += speedX;
        snake[0].y += speedY;
    }
    function moveApple() {
        apple.x = randomInteger(BOARD_SIZE/SQUARE_SIZE)*SQUARE_SIZE;
        apple.y = randomInteger(BOARD_SIZE/SQUARE_SIZE)*SQUARE_SIZE;
        
         for (var i = 0; i < snake.length; i++){
    
            if ( doCollide(apple, snake[i] )){
                moveApple();
                break;
            }
        }
    }
         
    function makeSnake(id){
        var newPiece = {};
        newPiece.id = id;
        newPiece.width = $(".snake").width();        // sets width to 200
        newPiece.height = $(".snake").height();
        newPiece.x = snake[0].x - 20;
        newPiece.y = snake[0].y - 20;
        return newPiece;
    }       
    function randomInteger(max) {
        var randomInt = Math.floor(Math.random() * max);
        return randomInt;
    }

    function doCollide(snakePiece, apple) {
        if (snakePiece.x === apple.x && snakePiece.y === apple.y) {
            return true;
        }
        else {
            return false;
        }
    }
    function redrawHead() {
        $("#head").css("left", snake[0].x);
        $("#head").css("top", snake[0].y);
        for(i= snake.length-1; i>=1; i--){
            $(snake[i].id).css("left", snake[i].x);
            $(snake[i].id).css("top", snake[i].y);
        }
    }
    
    function endGame() {
        // stop the interval timer
        clearInterval(interval);

        // turn off event handlers
        $(document).off();
    }
}