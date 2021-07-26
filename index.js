  
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require("./utils/generateMarkdown");




//an array of questions for user input
const questions = [
    {type: "input",
    name: "username",
    message: "Github username:"
  },
  {

    type: "input",
    name: "email",
    message: "Email address:"
  },
  {

    type: "input",
    name: "title",
    message: "Project title:"
    },
    {

      type: "input",
      name: "description",
      message: "Enter a decription of the project"
    },
    {

      type: "input",
      name: "installation",
      message: "Enter installation instructions"
    },
    {

      type: "input",
      name: "usage",
      message: "Enter usage information"
    },
    {

        type: "input",
        name: "contribution",
        message: "Enter contribution guidelines"
    },
    {
  
        type: "input",
        name: "tests",
        message: "Enter test instructions"
    },
    { 
     // gives user checkbox choices
        type: "checkbox",
        message: "Licensing Options",
        name: "license",
        choices: [
            "None",
            "Apache 2.0",
            "GNU Public v3.0",
            "GNU General Public v2.0",
            "MIT",
            "the Unilicense"
          ]
      }
];

// a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('README created')
    });
};
// a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile("README.md", generate(answers))

    })
}

// Function call to initialize app
init();