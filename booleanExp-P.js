const readline = require('readline-sync');

const hasTorch = true;
const hasMap = false;

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  const choice2 = readline.question2("Do you want sword to protect yourself? Say 'yes' or 'no'");
  if (choice2 === "yes" ){
    console.log("Go to North shelter");

 if (hasTorch && hasSword) {
        console.log("Escape from danger using sword and torch.");
    } else if (hasTorch && !hasSword) {
        console.log("You dont have any weapons.Be Careful");
    } else if (!hasTorch && hasSword) {
        console.log("It's too dark to see, use sword to protect yourself.");
    } else {
        console.log("It's too dark and dangerous. You decide to turn back.");
    }
elseif
    console.log("continue your way");
}
} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
} else {
  console.log("You get lost and wander aimlessly.");
}
