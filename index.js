const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user

const questions = [
    {
        type: 'input',
        message: "What is the title of your Project?",
        name: 'title',
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'gstinsonjr42',
    },
    {
        type: 'input',
        message: "What is your Email?",
        name: 'email',
        default: 'gstinsonjr17@gmail.com',
    },
    {
        type: 'input',
        message: "Enter a description of your Project",
        name: 'description',
        },
    {
        type: 'input',
        message: "Provide steps required for installation of your project.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions for usage of application.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Provide any tests written for your application.",
        name: 'tests'
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
      }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
  .then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
  })

}

// function call to initialize program
init();
