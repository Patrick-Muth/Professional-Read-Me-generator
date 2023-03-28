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
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "title"
            },
            {
                type: "input",
                message: questions[1],
                name: "description"
            },
            {
                type: "input",
                message: questions[2],
                name: "installation"
            },
            {
                type: "input",
                message: questions[3],
                name: "usage"
            },
            {
                type: "input",
                message: questions[4],
                name: "contributing"
            },
            {
                type: "input",
                message: questions[5],
                name: "tests"
            },
            {
                type: "list",
                message: questions[6],
                name: "license",
                choices: ["MIT", "Apache License 2.0", "GPL License 3.0", "BSD 3-Clause License", "None"]
            },
            {
                type: "input",
                message: questions[7],
                name: "githubUsername"
            },
            {
                type: "input",
                message: questions[8],
                name: "email"
            },
        ])
        .then((data) => {
            const markdownData = gen(data);
            writeToFile("README.md", markdownData);
        });
}


// Function call to initialize app
init();
