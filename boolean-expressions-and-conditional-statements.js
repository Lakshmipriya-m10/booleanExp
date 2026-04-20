/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;
const huntingSword = false;
const hasHangers = true;
const hasRope = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) 
  {
  console.log("You safely navigate through the dark mountains.");
  const choice2 = readline.question("Do you want huntingsword ? say \" yes \" or \" No \" ");
  
  if ( choice2 === "yes" && hasTorch)
  {
    console.log ("Get the hunting sword cave 2 ");
  }
    else if (choice2 === "no" && hasHangers){
    console.log("Okay.You have hangers so you can safe to go.Continue your way");
    }

  else    //It will run both are false .so it can't
  {
    console.log("Be careful animals will attack you");
  }
  
  const choice3 = readline.question("Do you need Compass? ");
  
  if (choice3 === "yes")
    { console.log ("Get it from shelter in entrance");
  }
  else {
    console.log("You continue without a compass.");
  }
   const choice4 = readline.question("Do you want Rope? say \" yes \" or \" no \" ");
   if (choice4 === "yes" && hasHangers){
    console.log ("Get the rope in Cave 5.Your are in safe");}
    else if (choice4 === "no" && hasHangers){
    console.log("You don\'t have rope. Be careful . Some places are slippery ");}
    else 
    {
      console.log ("You don\'t have hangers and rope.Your in dangeous");
    }
  }

else if (choice === "mountains" && !hasTorch) 
  {
  console.log("It's too dark to proceed. You decide to turn back.");
}
 else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} 
else {
  console.log("You get lost and wander aimlessly.");
}
  

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/