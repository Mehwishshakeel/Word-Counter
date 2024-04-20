#! /usr/bin/env node
// import the "inquirer " module
import inquirer from "inquirer";
// Declare a constant answer and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your message to count the word:"
    }
]);
const words = answers.Sentence.trim().split(" ");
// Print the array of the words to the console
console.log(words);
// Print the word count of the sentence to the console
console.log(`Your word sentence count is ${words.length}`);
