# To clone this template:

Enter these commands into your bash terminal to clone the repository and delete the `.git/` folder:

```bash
git clone https://github.com/benspector3/asd-template.git
rm -rf asd-template/.git
```

Then, rename the folder to the project name of your choice.

# Planning

_NOTE: Many of these steps reference the [Bouncing Box Project](https://jsbin.com/goyuhod/3/edit?html,output)_

Always start any programming task by clarifying what you want to do and then breaking it down into small steps. Small steps can get you just about anywhere if you’ve got enough time. If you get stuck, break it down smaller!

With your partner, create a file called `planning.txt` where you write down your answers to these questions

### User Story / Gameplay
- Describe the gameplay
- What are the conditions when the game begins? 
- Does the game have an end? If so, what are the conditions for when it ends?
- What `if`s will there be? if ball hits paddle ball bounce else if ball hits edge p1/p2 score +=1

### Visual Game Components:
- What are the visual game components? For example, in Bouncing Box, the game components were the board and the box.
  - Which will be static? (the board)
  - Which will be animated? (the box)
- What data will you need to manage each game component? For example, in Bouncing Box, the data values were `positionX`, `speedX`, and `points`.

### Events / Logic 
- What events will occur in this game? (timerevents Y, keyboard events y, clic king events n?)
- How do those events affect the data of the program? timer tracks how long ball is in play keyboard moves paddles up/down
- For each "event", write out the high-level logic of what will happen. It is better (and tricky) to be as specific as you can while remaining high-level!

when the ball is clicked:
1. The speed is increased
2. The ball bounces and game continues
