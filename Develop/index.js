// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const gen = require(`./utils/generateMarkdown.js`)
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Describe your project.",
    "How do you install the required dependencies?",
    "How do you use your project?",
    "How should one contribute to your project?",
    "How do you test your project?",
    "What license is used for your project?",
    "What is your GitHub Username?",
    "What is your email?"

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log('README.md file created successfully!');
    });
  }


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
