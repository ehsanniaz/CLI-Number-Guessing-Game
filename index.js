#! /usr/bin/env node
// shabang
import inquirer from "inquirer";
// 1) computer will generate a random Number -- done
// 2) USER input for guessing number -- done
// 3)  compare user input with computer generated number and show result -- done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        message: "please guess a number between 1-6:",
        type: "number",
        name: "UserGuessedNumber",
    },
]);
if (answer.UserGuessedNumber === randomNumber) {
    console.log("Congratulation! you guessed right Number");
}
else {
    console.log("you guessed wrong number");
}
